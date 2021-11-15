import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FuseUtils } from '@fuse/utils';
import { environment } from 'environments/environment';
import { User } from 'app/models/user';


@Injectable()
export class UsersService implements Resolve<any>
{
    onUsersChanged: BehaviorSubject<any>;
    onSelectedUsersChanged: BehaviorSubject<any>;
    onUserDataChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;


    users: User[];
    User: any;
    selectedUsers: number[] = [];

    searchText: string;
    filterBy: string;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,private router:Router
    ) {
        // Set the defaults
        this.onUsersChanged = new BehaviorSubject([]);
        this.onSelectedUsersChanged = new BehaviorSubject([]);
        this.onUserDataChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject();
        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise<void>((resolve, reject) => {

            Promise.all([
                this.getUsers(),
                this.getUserData()
            ]).then(
                ([files]) => {

                    this.onSearchTextChanged.subscribe(searchText => {
                        this.searchText = searchText;
                        this.getUsers();
                    });

                    this.onFilterChanged.subscribe(filter => {
                        this.filterBy = filter;
                        this.getUsers();
                    });

                    resolve();

                },
                reject
            );
        });
    }

    /**
     * Get Users
     *
     * @returns {Promise<any>}
     */
    getUsers(): Promise<any> {
        return new Promise((resolve, reject) => {

            this._httpClient.get(environment.addressIp+'/api/users')
                .subscribe((response: any) => {

                    this.users = response;
                  console.log(this.users)
                    if (this.filterBy === 'starred') {
                        this.users = this.users.filter(_User => {
                            return this.User.starred.includes(_User.id);
                        });
                    }

                    if (this.filterBy === 'frequent') {
                        this.users = this.users.filter(_User => {
                            return this.User.frequentUsers.includes(_User.id);
                        });
                    }

                    if (this.searchText && this.searchText !== '') {
                        this.users = FuseUtils.filterArrayByString(this.users, this.searchText);
                    }

                    this.users = this.users.map(user => {
                        return new User(user);
                    });

                    this.onUsersChanged.next(this.users);
                    resolve(this.users);
                }, reject => {
                    this.users = [];
                });
        }
        );
    }

    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
    getUserData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(environment.addressIp+'/api/users')
                .subscribe((response: any) => {
                    this.User = response;
                    this.onUserDataChanged.next(this.User);
                    resolve(this.users);
                }, reject);
        }
        );
    }

    /**
     * Toggle selected User by id
     *
     * @param id
     */
    toggleSelectedUser(id): void {
        // First, check if we already have that User as selected...
        if (this.selectedUsers.length > 0) {
            const index = this.selectedUsers.indexOf(id);

       
            if (index !== -1) {
                this.selectedUsers.splice(index, 1);

                
                this.onSelectedUsersChanged.next(this.selectedUsers);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedUsers.push(id);

        // Trigger the next event
        this.onSelectedUsersChanged.next(this.selectedUsers);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void {
        if (this.selectedUsers.length > 0) {
            this.deselectUsers();
        }
        else {
            this.selectUsers();
        }
    }

    /**
     * Select Users
     *
     * @param filterParameter
     * @param filterValue
     */
    selectUsers(filterParameter?, filterValue?): void {
        this.selectedUsers = [];

        // If there is no filter, select all Users
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedUsers = [];
            this.users.map(User => {
                this.selectedUsers.push(User.id);
            });
        }

        // Trigger the next event
        this.onSelectedUsersChanged.next(this.selectUsers);
    }

    /**
     * Update User
     *
     * @param User
     * @returns {Promise<any>}
     */
    updateUsers(user: User,id:number=undefined): Promise<any> {
        if(!id)
        return new Promise((resolve, reject) => {
            this._httpClient.post(environment.addressIp+'/api/users', 
            user)
                .subscribe(response => {
                    this.getUsers();
                    resolve(response);
                });
        });
        else
        return new Promise((resolve, reject) => {
            this._httpClient.put(environment.addressIp+'/api/users', 
            user)
                .subscribe(response => {
                    this.getUsers();
                    resolve(response);
                });
        });
    }

    /**
     * Update user data
     *
     * @param UserData
     * @returns {Promise<any>}
     */
    updateUserData(UserData): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post(environment.addressIp+'/api/users' + this.User.id, { ...UserData })
                .subscribe(response => {
                    this.getUserData();
                    this.getUsers();
                    resolve(response);
                });
        });
    }

    /**
     * Deselect Users
     */
    deselectUsers(): void {
        this.selectedUsers = [];

        // Trigger the next event
        this.onSelectedUsersChanged.next(this.selectedUsers);
    }

    /**
     * Delete User
     *
     * @param User
     */
    deleteUser(User: User): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log(User)
            this._httpClient.delete(environment.addressIp+'/api/users/' + User.id)
                .subscribe(response => {
                    this.getUsers();
                    resolve(response);
                });
        });
    }

    

    deleteSelectedUsers(): void {
        for (const UserId of this.selectedUsers) {
            const User = this.users.find(_User => {
                return _User.id === UserId;
            });
            const UserIndex = this.users.indexOf(User);
            this.users.splice(UserIndex, 1);
        }
        this.onUsersChanged.next(this.users);
        this.deselectUsers();
    
    }
    baseUrl = 'http://localhost:8080/api/users';
   
  private user:User;

  get(): Observable<any> {
    return this._httpClient.get(this.baseUrl);
  }

  add(user:any): Observable<any> {
    return this._httpClient.post(this.baseUrl,user);
  }

  login(email:string,password:string): Observable<any> {
    return this._httpClient.post(this.baseUrl+'/login',{email:email,password:password});
  }
  url_control() {

    const control = window.location.pathname;
    console.log(control)
    if (this.user)
        switch (control) {
            case '/apps/users':
            case '/apps/departements':
            case '/apps/typeDemandes':
                if (this.user.poste !== 'ADMINISTRATEUR') { this.router.navigate(['/login']) }
                break;

            case '/apps/demandes-manager':
            case '/apps/demandes-manager-achats':
            case '/apps/demandes-manager-requisition':
                if (this.user.poste === 'EMPLOYE' || this.user.poste === 'DIRECTEUR') { this.router.navigate(['/login']) } break;

            case '/apps/demandes-manager-creatiom-cugs':
            case '/apps/demandes-manager-request-form':
                if (this.user.poste !== 'MANAGER') { this.router.navigate(['/login']) } break;
            case '/apps/demandes':
                if (this.user.poste === 'ADMINISTRATEUR' || this.user.poste === 'DIRECTEUR') { this.router.navigate(['/login']) } break;;
            case '/apps/demande-contrat':
            case '/apps/demandesDachats':
            case '/apps/demandesUserIDAccessRequestFom':
                if (this.user.poste !== 'EMPLOYE') { this.router.navigate(['/login']) } break;
            case '/apps/ficheCreationCug':
            case '/apps/demandes-requisition':
            case '/apps/projects':
                if (this.user.poste === 'ADMINISTRATEUR' || this.user.poste === 'MANAGER') { this.router.navigate(['/login']) } break;

            case '/apps/demandes-directeur':
            case '/apps/demandes-directeur-achats':
                if (this.user.poste !== 'DIRECTEUR') {
                    this.router.navigate(['/login'])
                } break;
            default: break;
        }
}
  get userData():User{
    this.url_control();
    if(this.user)return this.user;
    if(localStorage.getItem('user')&&JSON.parse(localStorage.getItem('user'))){
        this.user=JSON.parse(localStorage.getItem('user'));
    return JSON.parse(localStorage.getItem('user'));
    }
    this.router.navigate(['/login'])
    // return null;
  }
  logout(){
      this.user=null;
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
    
  }

modifierPassword(){
//  this.user=null;
//   localStorage.removeItem('user')
//   this.router.navigate(['/++++++++++'])
  
}

update_password(user:any): Observable<any> {
    return this._httpClient.put(this.baseUrl+'/updatepassword',user);
  }
EN

}
