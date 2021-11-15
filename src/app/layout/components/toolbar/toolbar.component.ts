import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigation_, navigation_directeur, navigation_employe, navigation_manager, navigation_administrateur } from 'app/navigation/navigation';
import { Router } from '@angular/router';
import { UsersService } from 'app/services/users.service';
import { User } from 'app/models/user';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent implements OnInit, OnDestroy {
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];
    user: User;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        private router: Router,
        private userService: UsersService
    ) {
        // Set the defaults
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                id: 'en',
                title: 'English',
                flag: 'us'
            },
            {
                id: 'tr',
                title: 'Turkish',
                flag: 'tr'
            }
        ];


        this.navigation = navigation_;
        if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
            const user: User = JSON.parse(localStorage.getItem('user'));
            switch (user.poste) {
                case 'DIRECTEUR':
                    this.navigation = navigation_directeur;
                    break;
                case 'MANAGER':
                    this.navigation = navigation_manager;
                    break;
                case 'EMPLOYE':
                    this.navigation = navigation_employe;

                    break;

                case 'ADMINISTRATEUR':
                    this.navigation = navigation_administrateur;

                    break;

                default:
                    this.router.navigate(['pages/login'])
                    console.log("l'utilisateur n'existe pas !!!");
                    break;



            }
        }
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.user = this.userService.userData;
        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, { 'id': this._translateService.currentLang });

        // +++++++++++++++++++++ Pour actualiser la page ++++++++++++++++++++++++++++++

        // this.router.navigateByUrl('/ToolbarComponent', {skipLocationChange: true}).then(()=>
        // this.router.navigate(["Your actualComponent"])); 


    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
    search(value): void {
        // Do your search here...
        console.log(value);
    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);
    }

    // ++++++++++++++++++++la methode qui permet de ce deconnecter+++++++++++
    logout() {
        this.userService.logout();
    }

    // ++++++++++++++ Changer mot de passe ++++++++++++++++++++++++++++
    modifierPassword() {
        // this.userService.modifierPassword();
        this.router.navigate(['apps/users/password-update'])
        // alert('no pass')
    }

    // +++++++++++++++ cette methde nous peremet de faire un reflech apres la deconnection +++++++++++++++++++++
    // refresh(): void {
    //     location.reload();
    // }

}
