import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FuseUtils } from '@fuse/utils';
import { environment } from 'environments/environment';
import { TypeDemande } from './typeDemande.model';


@Injectable()
export class TypeDemandesService implements Resolve<any>
{
    onTypeDemandesChanged: BehaviorSubject<any>;
    onSelectedTypeDemandesChanged: BehaviorSubject<any>;
    onTypeDemandeDataChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;


    typeDemandes: TypeDemande[];
    typeDemande: any;
    selectedTypeDemandes: number[] = [];

    searchText: string;
    filterBy: string;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.onTypeDemandesChanged = new BehaviorSubject([]);
        this.onSelectedTypeDemandesChanged = new BehaviorSubject([]);
        this.onTypeDemandeDataChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject();
    }

  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise<void>((resolve, reject) => {

            Promise.all([
                this.getTypeDemandes(),
                this.getTypeDemandeData()
            ]).then(
                ([files]) => {

                    this.onSearchTextChanged.subscribe(searchText => {
                        this.searchText = searchText;
                        this.getTypeDemandes();
                    });

                    this.onFilterChanged.subscribe(filter => {
                        this.filterBy = filter;
                        this.getTypeDemandes();
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
     getTypeDemandes(): Promise<any> {
        return new Promise((resolve, reject) => {

            this._httpClient.get(environment.addressIp+'/api/typeDemandes')
                .subscribe((response: any) => {

                    this.typeDemandes = response;

                    if (this.filterBy === 'starred') {
                        this.typeDemandes = this.typeDemandes.filter(_TypeDemande => {
                            return this.typeDemande.starred.includes(_TypeDemande.id);
                        });
                    }

                    if (this.filterBy === 'frequent') {
                        this.typeDemandes = this.typeDemandes.filter(_TypeDemande => {
                            return this.typeDemande.frequentTypeDemandes.includes(_TypeDemande.id);
                        });
                    }

                    if (this.searchText && this.searchText !== '') {
                        this.typeDemandes = FuseUtils.filterArrayByString(this.typeDemandes, this.searchText);
                    }

                    this.typeDemandes = this.typeDemandes.map(typeDemande => {
                        return new TypeDemande(typeDemande);
                    });

                    this.onTypeDemandesChanged.next(this.typeDemandes);
                    resolve(this.typeDemandes);
                }, reject => {
                    this.typeDemandes = [];
                });
        }
        );
    }

    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
    getTypeDemandeData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(environment.addressIp+'/api/typeDemandes')
                .subscribe((response: any) => {
                    this.typeDemande = response;
                    this.onTypeDemandeDataChanged.next(this.typeDemande);
                    resolve(this.typeDemande);
                }, reject);
        }
        );
    }

    /**
     * Toggle selected User by id
     *
     * @param id
     */
    toggleSelectedTypeDemande(id): void {
        // First, check if we already have that User as selected...
        if (this.selectedTypeDemandes.length > 0) {
            const index = this.selectedTypeDemandes.indexOf(id);

            if (index !== -1) {
                this.selectedTypeDemandes.splice(index, 1);

                // Trigger the next event
                this.onSelectedTypeDemandesChanged.next(this.selectedTypeDemandes);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedTypeDemandes.push(id);

        // Trigger the next event
        this.onSelectedTypeDemandesChanged.next(this.selectedTypeDemandes);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void {
        if (this.selectedTypeDemandes.length > 0) {
            this.deselectTypeDemandes();
        }
        else {
            this.selectTypeDemandes();
        }
    }

    /**
     * Select Users
     *
     * @param filterParameter
     * @param filterValue
     */
    selectTypeDemandes(filterParameter?, filterValue?): void {
        this.selectedTypeDemandes = [];

        // If there is no filter, select all Users
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedTypeDemandes = [];
            this.typeDemandes.map(TypeDemande => {
                this.selectedTypeDemandes.push(TypeDemande.id);
            });
        }

        // Trigger the next event
        this.onSelectedTypeDemandesChanged.next(this.selectTypeDemandes);
    }


    updateTypeDemande(typeDemande: TypeDemande): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log(typeDemande)
            this._httpClient.put(environment.addressIp+'/api/typeDemandes', typeDemande)
                .subscribe(response => {
                    this.getTypeDemandes();
                    resolve(response);
                });
        });
    }

    /**
     * Update user data
     *
     * @param typeDemandeData
     * @returns {Promise<any>}
     */
    updateTypeDemandeData(typeDemandeData): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post(environment.addressIp+'/api/typeDemandes' + this.typeDemande.id, { ...typeDemandeData })
                .subscribe(response => {
                    this.getTypeDemandeData();
                    this.getTypeDemandes();
                    resolve(response);
                });
        });
    }

    /**
     * Deselect Users
     */
    deselectTypeDemandes(): void {
        this.selectedTypeDemandes = [];

        // Trigger the next event
        this.onSelectedTypeDemandesChanged.next(this.selectedTypeDemandes);
    }


    deleteTypeDemande(typeDemande: TypeDemande): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log(typeDemande)
            this._httpClient.delete(environment.addressIp+'/api/typeDemandes/' + typeDemande.id)
                .subscribe(response => {
                    this.getTypeDemandes();
                    resolve(response);
                });
        });
    }

 
    deleteSelectedTypeDemandes(): void {
        for (const TypeDemandeId of this.selectedTypeDemandes) {
            const TypeDemande = this.typeDemandes.find(_TypeDemande => {
                return _TypeDemande.id === TypeDemandeId;
            });
            const TypeDemandeIndex = this.typeDemandes.indexOf(TypeDemande);
            this.typeDemandes.splice(TypeDemandeIndex, 1);
        }
        this.onSelectedTypeDemandesChanged.next(this.typeDemandes);
        this.deselectTypeDemandes();
    }

}
