import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';
import { UsersService } from 'app/services/users.service';
import { User } from 'app/models/user';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    signin: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required, Validators.min(3)])
    });
    hide = true;
    get emailInput() { return this.signin.get('email'); }
    get passwordInput() { return this.signin.get('password'); }

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder, private router: Router, private userService: UsersService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        if (this.userService.userData) {
            switch (this.userService.userData.poste) {
                case 'DIRECTEUR':
                    this.router.navigate(['apps/demandes-directeur'])

                    break;
                case 'MANAGER':
                    this.router.navigate(['apps/demandes-manager'])

                    break;
                case 'EMPLOYE':
                    this.router.navigate(['apps/demandes'])

                    break;
                case 'ADMINISTRATEUR':
                    this.router.navigate(['apps/users'])

                    break
                default:
                    this.router.navigate(['pages/login'])
                    console.log("l'utilisateur n'existe pas !!!");
                    ;

                //default router vers la page de connection

            }
        }


        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

    }
    onSubmit() {
        console.log(this.loginForm);
        this.userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(u => {
            console.log(u);
            const user: User = u as User;
            localStorage.setItem('user', JSON.stringify(user));
            switch (user.poste) {
                case 'DIRECTEUR':
                    this.router.navigate(['apps/demandes-directeur'])

                    break;
                case 'MANAGER':
                    this.router.navigate(['apps/demandes-manager'])

                    break;
                case 'EMPLOYE':
                    this.router.navigate(['apps/demandes'])

                    break;
                case 'ADMINISTRATEUR':
                    this.router.navigate(['apps/users'])

                    break;

                default:
                    this.router.navigate(['pages/login'])
                    console.log("l'utilisateur n'existe pas !!!");
                    break;

            }
        }, err => {
            console.log(err);
        })



    }

}