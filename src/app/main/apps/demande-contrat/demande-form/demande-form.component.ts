import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from 'app/models/user';
import { UsersService } from 'app/services/users.service';
import { Demande } from '../../demandes-directeur/demande.model';
import { TypeDemande } from '../../typeDemandes/typeDemande.model';
import { TypeDemandesService } from '../../typeDemandes/typeDemandes.service';
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
    typeDemande : string;

    // typeDemande: TypeDemande[] = [];
    demandeForm: FormGroup;
    dialogTitle: string;
    
    choix:boolean=true;
    contrainteChoix:boolean = true;
    user:User;
    typeDemandes: TypeDemande[] = [];
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
        private demandeService: DemandesService,private userService:UsersService,
        private typeDemandesService : TypeDemandesService
    ) {
        this.user = this.userService.userData;
        // Set the defaults
        this.action = _data.action;

        if (this.action === 'edit') {
            this.dialogTitle = 'Modifier demande';
            this.demande = _data.demande;
        }
        else if(this.action === 'new') {
            this.dialogTitle = 'Nouvelle demande';
            this.demande = new Demande({});
        }
        else{
            this.dialogTitle = 'Afficher';
            this.demande = _data.demande;
        }
        this.typeDemandesService.getTypeDemandes().then(data=>{
            this.typeDemandes = data;
            this.demande.typeDemande=this.typeDemandes[2];
            this.typeDemande=this.typeDemandes[2].nom;
            });
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
    // this.demande.typeDemande= this.typeDemandes[3];
    // this.typeDemande=this.typeDemandes[3];

        return this._formBuilder.group({
            id: [this.demande.id],
            typeDemande: [this.demande.typeDemande],
            nomPartenaire: [this.demande.nomPartenaire],
            prenomPartenaire: [this.demande.prenomPartenaire],
            telephonePartenaire: [this.demande.telephonePartenaire],
            emailPartenaire: [this.demande.emailPartenaire],
            numCarte: [this.demande.numCarte],
            adresse: [this.demande.adresse],
            donneeContractuelles: [this.demande.donneeContractuelles],
            objetInterer: [this.demande.objetInterer],
            description: [this.demande.description],




        });
    }
    createDemandeForm2(): FormGroup {

        return this._formBuilder.group(this.demande);
    }
 
    save() {
        const demandeData: Demande = this.demandeForm.getRawValue();
        demandeData.id = this.demande.id;
        demandeData.demandeur = this.user;
        demandeData.manager = this.user.manager;
        demandeData.typeDemande = this.demande.typeDemande;
        demandeData.directeur = this.user.directeur;
        // demandeData.typeDemande= this.demande.typeDemande
        this.demande = demandeData;
        let demandeForm = this.createDemandeForm2();
        this.matDialogRef.close(demandeForm);
    }


}
