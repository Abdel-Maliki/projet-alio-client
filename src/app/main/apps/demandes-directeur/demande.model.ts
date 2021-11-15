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
    commentaire : string ;
    departement: Departement;
    typeDemande: TypeDemande;
    etatdirecteur: 'ENCOURS'|'ACCEPTER'|'REJETER';
    etat: 'ENCOURS'|'ACCEPTER'|'REJETER' |'APPROVED_MANAGER';
    etatmanager: 'ENCOURS'|'ACCEPTER'|'REJETER';
    description: string;
    createdAt: Date;
    direction_id?;
    state:RequestState;
    workFlowDirection: Direction;
    nomPartenaire: string;
    prenomPartenaire: string;
    emailPartenaire: string;
    telephonePartenaire: string;
    numCarte: string ;
    adresse: string;
    donneeContractuelles:string;
    objetInterer: string ;
    targetedDeliveryDate: Date;
    allocatedDescription: string;
    availableBudget: string;
    remainingBudget : string;
    expenseType: string;
    estimatedTotalHT : string;
    needContract : string;
    quantity : string;
    detailedDescription : string;

    // ++++++++++++++ fiche creation CUG variable +++++++++++++++

    nomOrganisation: string;
    adresseOrganisation: string;
    easyPro5000 : string;
    easyPro10000 : string ;
    easyPro25000 : string;
    easyPro50000 : string;
    easyPro75000 : string;
    easyPro100000 : string;
    
    prepaid : string;
    postpaid : string;
    mixte : string;
    dureeContractuelle: string;s
    dateActivation : Date;  
    nombreLigne : string;
    serviceClass : string;
    position : string;
    telephone : string;
    emailInerface : string;
    typeCug : string ;
    cugEasyPro : string;
    nombreEasyPro : string;

    // ++++++++++++++++  Service Request form +++++++++++++++++++++
    compagnyName : string;
    natureBusiness: string;
    billingAddress : string;
    serviceRequired : string;
    requiredCapacity: string ;
    descriptionRequiredCapacity : string ;
    requestDate : string ;

// ++++++++++++++++++++++++++++++ User ID Access Request Form +++++++++++++++++++++
requestType : string;
typeOfid : string;
employeeOrganization : string;
ownerOfid : string ;
ownerManagerDetail : string ;
requesterDetail : string ;
opcdDetail : string;
platform : string ;
vpnDetail:  string;
chooseVpn : string ;
addRemoveSpecificAccess : string ;













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
        this.emailInerface = demande.emailInerface;
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
        this.commentaire = demande.commentaire ;
       

// +++++++++++++++++++++++ Fiche de creation CUG ++++++++++++++++++++++
        this.nomOrganisation = demande.nomOrganisation;
        this.adresseOrganisation = demande.adresseOrganisation;
        this.easyPro5000 = demande.easyPro5000;
        this.easyPro10000 =  demande.easyPro10000;
        this.easyPro25000 = demande.easyPro25000;
        this.easyPro50000 = demande.easyPro50000;
        this.easyPro75000 = demande.easyPro75000;
        this.easyPro100000 = demande.easyPro100000;
        this.prepaid = demande.prepaid;
        this.postpaid = demande.postpaid;
        this.mixte = demande.mixte;
        this.dureeContractuelle = demande.dureeContractuelle;
        this.dateActivation = demande.dateActivation;
        this.nombreLigne = demande.nombreLigne;
        this.serviceClass =  demande.serviceClass;
        this.position = demande.position;
        this.telephone =  demande.telephone;
        this.emailInerface = demande.emailInerface;
        this.cugEasyPro = demande.cugEasyPro;
        this.typeCug = demande.typeCug;
        
// +++++++++++++++++++++++++++++ Service request form ++++++++++++++++++
       this.compagnyName = demande.compagnyName;
       this.natureBusiness = demande.natureBusiness;
       this.billingAddress = demande.billingAddress;
       this.serviceRequired = demande.serviceRequired;
       this.requiredCapacity = demande.requiredCapacity;    
       this.descriptionRequiredCapacity = demande.descriptionRequiredCapacity;
       this.requestDate = demande.requestDate;

// +++++++++++++++++++++++  User ID Access Request Form  +++++++++++++++++++++++  
        this.requestType = demande.requestType;
        this.typeOfid = demande.typeOfid;
        this.employeeOrganization = demande.employeeOrganization;
        this.ownerOfid = demande.ownerOfid;
        this.ownerManagerDetail = demande.ownerManagerDetail;
        this.requesterDetail =  demande.requesterDetail;
        this.opcdDetail = demande.opcdDetail;
        this.platform =  demande.platform ;
        this.vpnDetail =  demande.vpnDetail;
        this.chooseVpn = demande.chooseVpn;
        this.addRemoveSpecificAccess = demande.addRemoveSpecificAccess ;

        this.etatmanager = demande.etatmanager;
        this.etat = demande.etat;
        // this.state= demande.state;
        this.createdAt = demande.createdAt;
        this.state =  demande.state;
       
    }
}
