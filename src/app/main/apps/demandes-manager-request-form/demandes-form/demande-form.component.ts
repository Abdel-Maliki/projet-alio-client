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
    selector: 'demandes-form-dialog',
    templateUrl: './demande-form.component.html',
    styleUrls: ['./demande-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FormDialogDemandesComponent {
    action: string;
    demande: Demande;
    demandeForm: FormGroup;
    dialogTitle: string;
    typeDemande: string;

    choix: boolean = true;
    contrainteChoix: boolean = true;
    user: User;
    typeDemandes: TypeDemande[] = [];
    /**
     * Constructor
     *
     * @param {MatDialogRef<FormDialogDemandeComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<FormDialogDemandesComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder,
        private demandeService: DemandesService, private userService: UsersService,
        private typeDemandesService: TypeDemandesService
    ) {
        this.user = this.userService.userData;
        // Set the defaults
        this.action = _data.action;

        if (this.action === 'edit') {
            this.dialogTitle = 'Modifier demande';
            this.demande = _data.demande;
        }
        else if (this.action === 'new') {
            this.dialogTitle = 'Nouvelle demande';
            this.demande = new Demande({});
        }
        else {
            this.dialogTitle = 'Afficher';
            this.demande = _data.demande;
        }
        this.typeDemandesService.getTypeDemandes().then(data=>{
            this.typeDemandes = data;
            this.demande.typeDemande=this.typeDemandes[5];
            this.typeDemande=this.typeDemandes[5].nom;
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

        return this._formBuilder.group({
            id: [this.demande.id],
            typeDemande: [this.demande.typeDemande],
            compagnyName: [this.demande.compagnyName],
            natureBusiness : [this.demande.natureBusiness],
            billingAddress : [this.demande.billingAddress],
            serviceRequired : [this.demande.serviceRequired],
            description : [this.demande.description],
            requiredCapacity : [this.demande.requiredCapacity],
            descriptionRequiredCapacity : [this.demande.descriptionRequiredCapacity],
            requestDate : [this.demande.requestDate],




          

        


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
        this.demande = demandeData;
        let demandeForm = this.createDemandeForm2();
        this.matDialogRef.close(demandeForm);
    }

    TypeCUG(value){
        // tslint:disable-next-line:triple-equals
      if (value == 'Opex'){
          this.contrainteChoix = true;
          // tslint:disable-next-line:triple-equals
      }else if (value == 'Capex'){
          this.contrainteChoix = false;

      }


    } 



    CugEasyPro(value){
        // tslint:disable-next-line:triple-equals
      if (value == 'Opex'){
          this.contrainteChoix = true;
          // tslint:disable-next-line:triple-equals
      }else if (value == 'Capex'){
          this.contrainteChoix = false;

      }


    }




}
