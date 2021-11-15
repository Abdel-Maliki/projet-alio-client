import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from 'app/models/user';
import { UsersService } from 'app/services/users.service';
import { Demande } from '../../demandes-directeur/demande.model';
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
        private demandeService: DemandesService,private userService:UsersService
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

        this.demandeForm = this.createDemandeForm();
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
            description: [this.demande.description],
            nomOrganisation: [this.demande.nomOrganisation],
            adresseOrganisation: [this.demande.adresseOrganisation],
            easyPro5000: [this.demande.easyPro5000],
            easyPro10000 : [this.demande.easyPro10000],
            easyPro25000 : [this.demande.easyPro25000],
            easyPro50000 : [this.demande.easyPro50000],
            easyPro75000 : [this.demande.easyPro75000],
            easyPro100000 : [this.demande.easyPro100000],
            prepaid : [this.demande.prepaid],
            postpaid : [this.demande.postpaid],
            mixte : [this.demande.mixte],
            dureeContractuelle : [this.demande.dureeContractuelle],
            dateActivation : [this.demande.dateActivation],
            nombreLigne : [this.demande.nombreLigne],
            serviceClass : [this.demande.serviceClass],
            position : [this.demande.position],
            telephone : [this.demande.telephone],
            emailInerface : [this.demande.emailInerface],
            typeCug: [this.demande.typeCug],
            cugEasyPro: [this.demande.cugEasyPro],
            nombreEasyPro: [this.demande.nombreEasyPro],

        });
    }
    createDemandeForm2(): FormGroup {

        return this._formBuilder.group({
            description: [this.demande.description],
            demandeur: [this.demande.demandeur],
            direction: [this.demande.direction],
        });
    }
  
    save() {
        let demandeData: Demande = this.demandeForm.getRawValue();
        demandeData.demandeur = this.user;
        demandeData.manager = this.user.manager;
        demandeData.directeur = this.user.directeur;
        demandeData.direction = this.user.direction;
        this.demande = demandeData;
        let demandeForm = this.createDemandeForm2();
        this.matDialogRef.close(demandeForm);
    }


}
