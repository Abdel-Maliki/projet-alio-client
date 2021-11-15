import {FuseUtils} from '@fuse/utils';
import {Direction} from 'app/models/direction';
import {User} from 'app/models/user';
import {Departement} from '../departements/departement.model';
import {TypeDemande} from '../typeDemandes/typeDemande.model';
import {RequestState} from '../../../models/request-state';

export class Demande
{
    id: number;
    demandeur: User;
    direction: Direction;
    manager: User;
    directeur: User;
    administrateur: User;
    departement: Departement;
    typeDemande: TypeDemande;
    etatdirecteur: 'ENCOURS'|'ACCEPTER'|'REJETER';
    etat: 'ENCOURS'|'ACCEPTER'|'REJETER' |'APPROVED_MANAGER';
    etatmanager: 'ENCOURS'|'ACCEPTER'|'REJETER';
    description: string;
    createdAt: Date;
    direction_id?;
    state: RequestState = RequestState.INITIAL;
    workFlowDirection: Direction;
    nomPartenaire: string;
    prenomPartenaire: string;
    emailPartenaire: string;
    telephonePartenaire: string;
    numCarte: string ;
    adresse: string;
    donneeContractuelles:string;
    objetInterer: string ;
    targetedDeliveryDate: string;
    allocatedDescription: string;
    availableBudget: string;
    remainingBudget : string;
    expenseType: string;
    estimatedTotalHT : string;
    needContract : string;
    quantity : string;
    detailedDescription : string;






  

    /**
     * 
     * Constructor
     *
     * @param demande
     */
    constructor(demande)
    {
        this.id = demande.id || FuseUtils.generateGUID();
        this.demandeur = demande.demandeur;
        this.direction = demande.direction;
        this.description = demande.description;
        this.directeur = demande.directeur;
        this.administrateur = demande.adminstrateur;
        this.manager = demande.manager;
        this.typeDemande = demande.typeDemande;
        this.etatdirecteur = demande.etatdirecteur;
        this.nomPartenaire = demande.nomPartenaire;
        this.prenomPartenaire = demande.prenomPartenaire;
        this.telephonePartenaire= demande.telephonePartenaire;
        this.emailPartenaire= demande.emailPartenaire;
        this.numCarte= demande.numCarte;
        this.adresse= demande.adresse;
        this.donneeContractuelles= demande.donneeContractuelles;
        this.objetInterer= demande.objetInterer;
        this.estimatedTotalHT= demande.estimatedTotalHT;
        this.targetedDeliveryDate=demande.targetedDeliveryDate;
        this.availableBudget= demande.availableBudget;
        this.remainingBudget=demande.remainingBudget;
        this.needContract = demande.needContract;
        this.quantity = demande.quantity;
        this.detailedDescription= demande.detailedDescription;

        this.expenseType = demande.expenseType;




        this.etatmanager = demande.etatmanager;
        this.etat = demande.etat;
        // this.state= demande.state;
        this.createdAt = demande.createdAt;
       
    }
}
