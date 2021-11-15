import { Direction } from '@angular/cdk/bidi';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from 'app/models/user';
import { DirectionsService } from 'app/services/directions.service';
import { UsersService } from 'app/services/users.service';
import { takeUntil } from 'rxjs/operators';
import { Demande } from '../demande.model';
import { DemandesService } from '../demandes.service';


@Component({
    selector: 'demande-form-dialog',
    templateUrl: './demande-form.component.html',
    styleUrls: ['./demande-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FormDialogDemandeComponent {
    action: string;
    demande: Demande;
    demandeForm: FormGroup;
    dialogTitle: string;
    managers: User[] = [];
    directeurs: User[] = [];
    users: User[] = [];
    directions: Direction[] = [];
    
    choix:boolean=true;
    contrainteChoix:boolean = true;
    user:User;
    /**
     * Constructor
     *
     * @param {MatDialogRef<FormDialogDemandeComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<FormDialogDemandeComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder,
        private demandeService: DemandesService,
        private userService:UsersService,
        private directionsService: DirectionsService
    ) {
        this.user = this.userService.userData;
        // Set the defaults
        this.action = _data.action;

        if (this.action === 'edit') {
            this.dialogTitle = 'Approuver ou rejeter';
            this.demande = _data.demande;
        }
        else {
            this.dialogTitle = 'Nouvelle demande';
            this.demande = new Demande({});
        }

        this.directionsService.getDirections().then(data => this.directions = data);

        this.demandeForm = this.createDemandeForm();
    }
    private _unsubscribeAll(_unsubscribeAll: any): any {
        throw new Error('Method not implemented.');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create user form
     *
     * @returns {FormGroup}
     */
    createDemandeForm(): FormGroup {

        return this._formBuilder.group({
            description: [this.demande.description]

        });
    }
    createDemandeForm2(): FormGroup {

        return this._formBuilder.group({
            description: [this.demande.description],
            demandeur: [this.demande.demandeur],
            direction: [this.demande.direction],
            departement: [this.demande.departement],
        });
    }
    // onFileChanged(event) {
    //     if (event.target.files && event.target.files[0]) {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(event.target.files[0]);
    //         reader.onload = (event) => {
    //             let eve: any = event.target;
    //             this.demande.nom = eve.result;
    //         }
    //     }
    //     else {
    //         this.demande.nom = null;
    //     }
    // }
    save() {
        let demandeData: Demande = this.demandeForm.getRawValue();
        demandeData.demandeur = this.user;
        demandeData.manager = this.user.manager;
        demandeData.directeur = this.user.directeur;
        demandeData.direction = this.user.direction;
        demandeData.departement=this.user.departement;
     
        this.demande = demandeData;
        let demandeForm = this.createDemandeForm2();
        this.matDialogRef.close(demandeForm);
    }
   

    // conChoix(value){
    //     if(value=='vitesse'){
    //         this.contrainteChoix=true;
    //     }else if(value=='zone'){
    //         this.contrainteChoix=false;

    //     }
    // }

}
