
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
// import { AIRTEL_HEADER } from 'environments/logo';
declare var jsPDF: any;

/**
 * Exemplaire de génération de demande par type de demande
 * @param demande 
 */

// ++++++++++++++++++++++++++++++++++++ demande de conger PDF ++++++++++++++++++++++++

export function generationDemandeConge(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);
    // doc.rect(15, 21, 180, 15);  // la marge de header du document 
    // doc.setTextColor(255, 0, 0);
    doc.rect(10, 62, 190, 15);
    doc.rect(10, 85, 100, 45); // pour champ a gauche
    doc.rect(110, 85, 90, 45); // pour le champ a droite Requestor
    doc.rect(10, 120, 100, 45); // pour champ a gauche Approved by
    doc.rect(110, 120, 90, 45); // pour le champ a droite Approved by
    doc.rect(10, 165, 100, 45); // champ manager 2
    doc.rect(110, 165, 90, 45); // Champ manager signature
    // doc.rect(10, 210, 100, 45); // pour champ directeur manager 2 droie
    // doc.rect(110, 210, 90, 45);  // champ directeur manager 2 signature

    var img = new Image()
    img.src = 'assets/airtellogo.png'
    doc.addImage(img, 'JPEG', 15, 11, 35, 35,);
    doc.text(82, 17, `CELTEL - NIGER`, + 0, 300);
    doc.text(68, 26, `DIRECTION :` + demande.demandeur.direction.nom, + 0, 300);
    doc.text(82, 35, `DEMANDE DE CONGE `, + 0, 300);
    doc.text(15, 53, `Project`, doc.setFontSize(12));
    doc.text(15, 59, `Tasks Description`, doc.setFontSize(12));
    doc.text(155, 59, `Date :` + demande.createdAt, doc.setFontSize(12));
    doc.text(15, 127, `Approved by`, doc.setFontSize(17));
    doc.text(15, 95, `Demandeur :`, doc.setFontSize(14));
    doc.text(15, 137, `IT Director :`, doc.setFontSize(14));
    doc.text(15, 174, `HR Director :`, doc.setFontSize(14));
    doc.setFontSize(10);

    let index = 0;
    doc.text(15, 60 + (10 * (index + 1)), demande.description, doc.setFontSize(12));
    // doc.text(174, 50 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(12));
    doc.text(15, 100 + (10 * (index + 1)), demande.demandeur.nom + " " + demande.demandeur.prenom, doc.setFontSize(14));
    doc.text(120, 100 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    doc.text(15, 140 + (10 * (index + 1)), demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(14));
    // doc.text(120, 87 + (10 * (index + 1)), demande.etatmanager, doc.setFontSize(14));
    doc.text(120, 128 + (10 * (index + 1)), demande.etatdirecteur, doc.setFontSize(14));
    doc.text(120, 140 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    doc.text(15, 180 + (10 * (index + 1)), demande.typeDemande.directeur.nom + " " + demande.typeDemande.directeur.prenom, doc.setFontSize(14));
    doc.text(120, 170 + (10 * (index + 1)), demande.etatdirecteur, doc.setFontSize(14));
    doc.text(120, 180 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    // doc.text(15, 163 + (10 * (index + 1)), demande.typeDemande.workFlowDirection.nom, doc.setFontSize(14));

    doc.save(`DemandeConge.pdf`);

}
/**
 * impression de JOB REQUEST
 * @param demande 
 */

export function generationDemandeRequisition(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);
    // doc.rect(15, 21, 180, 15);  // la marge de header du document 
    // doc.setTextColor(255, 0, 0);
    doc.rect(10, 62, 190, 15);
    doc.rect(10, 85, 100, 45); // pour champ a gauche
    doc.rect(110, 85, 90, 45); // pour le champ a droite Requestor
    doc.rect(10, 120, 100, 45); // pour champ a gauche Approved by
    doc.rect(110, 120, 90, 45); // pour le champ a droite Approved by
    doc.rect(10, 165, 100, 45); // champ manager 2
    doc.rect(110, 165, 90, 45); // Champ manager signature
    doc.rect(10, 210, 100, 45); // pour champ directeur manager 2 droie
    doc.rect(110, 210, 90, 45);  // champ directeur manager 2 signature


    // doc.addImage(AIRTEL_HEADER, 'JPEG', 15, 11, 35, 35,);
    // doc.rect(15, 21, 100, 189);
    doc.text(82, 17, `CELTEL - NIGER`, + 0, 300);
    doc.text(82, 26, `DIRECTION :`,demande.demandeur.direction.nom);
    doc.text(82, 32, `JOB REQUEST :`, + 0, 300);
    doc.text(15, 53, `Project`, doc.setFontSize(12));
    doc.text(15, 59, `Tasks Description`, doc.setFontSize(12));
    doc.text(160, 59, `Date :`, doc.setFontSize(12));
    doc.text(15, 127, `Approved by`, doc.setFontSize(17));
    doc.text(15, 95, `Products Manager :`, doc.setFontSize(14));
    doc.text(15, 137, `IT Director :`, doc.setFontSize(14));
    doc.setFontSize(10);

    let index = 0;
    doc.text(15, 60 + (10 * (index + 1)), demande.description, doc.setFontSize(12));
    doc.text(174, 50 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(12));
    doc.text(15, 100 + (10 * (index + 1)), demande.demandeur.nom + " " + demande.demandeur.prenom, doc.setFontSize(14));
    doc.text(120, 100 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    doc.text(15, 140 + (10 * (index + 1)), demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(14));
    doc.text(120, 87 + (10 * (index + 1)), demande.etatmanager, doc.setFontSize(14));
    doc.text(120, 128 + (10 * (index + 1)), demande.etatdirecteur, doc.setFontSize(14));
    // doc.text(120, 140 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    // doc.text(15, 163 + (10 * (index + 1)), demande.typeDemande.workFlowDirection.nom, doc.setFontSize(14));

    doc.save(`DemandeRequisition.pdf`);
    // this.busys['generatePDFSynthese'] = false;
}
export function generationDemandeExemple(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);
    // doc.rect(15, 21, 180, 15);  // la marge de header du document 
    // doc.setTextColor(255, 0, 0);
    doc.rect(10, 62, 190, 15);
    doc.rect(10, 85, 100, 45); // pour champ a gauche
    doc.rect(110, 85, 90, 45); // pour le champ a droite Requestor
    doc.rect(10, 120, 100, 45); // pour champ a gauche Approved by
    doc.rect(110, 120, 90, 45); // pour le champ a droite Approved by
    doc.rect(10, 165, 100, 45); // champ manager 2
    doc.rect(110, 165, 90, 45); // Champ manager signature
    doc.rect(10, 210, 100, 45); // pour champ directeur manager 2 droie
    doc.rect(110, 210, 90, 45);  // champ directeur manager 2 signature


    // doc.addImage(AIRTEL_HEADER, 'JPEG', 15, 11, 35, 35,);
    // doc.rect(15, 21, 100, 189);
    doc.text(82, 17, `CELTEL - NIGER`, + 0, 300);
    doc.text(82, 26, `DIRECTION :`, + 0, 300);
    doc.text(82, 32, `+++++++++++++++++ :`, + 0, 300);
    doc.text(15, 53, `Project`, doc.setFontSize(12));
    doc.text(15, 59, `Tasks Description`, doc.setFontSize(12));
    doc.text(160, 59, `Date :`, doc.setFontSize(12));
    doc.text(15, 127, `Approved by`, doc.setFontSize(17));
    doc.text(15, 95, `Products Manager :`, doc.setFontSize(14));
    doc.text(15, 137, `IT Director :`, doc.setFontSize(14));
    doc.setFontSize(10);

    let index = 0;
    doc.text(15, 60 + (10 * (index + 1)), demande.description, doc.setFontSize(12));
    doc.text(174, 50 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(12));
    doc.text(15, 100 + (10 * (index + 1)), demande.demandeur.nom + " " + demande.demandeur.prenom, doc.setFontSize(14));
    doc.text(120, 100 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    doc.text(15, 140 + (10 * (index + 1)), demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(14));
    doc.text(120, 87 + (10 * (index + 1)), demande.etatmanager, doc.setFontSize(14));
    doc.text(120, 128 + (10 * (index + 1)), demande.etatdirecteur, doc.setFontSize(14));
    // doc.text(120, 140 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    // doc.text(15, 163 + (10 * (index + 1)), demande.typeDemande.workFlowDirection.nom, doc.setFontSize(14));

    doc.save(`Demande.pdf`);
    // this.busys['generatePDFSynthese'] = false;
}

export function generationDemandeAPN(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);
    // doc.rect(15, 21, 180, 15);  // la marge de header du document 
    // doc.setTextColor(255, 0, 0);
    doc.rect(10, 62, 190, 15);
    doc.rect(10, 85, 100, 45); // pour champ a gauche
    doc.rect(110, 85, 90, 45); // pour le champ a droite Requestor
    doc.rect(10, 120, 100, 45); // pour champ a gauche Approved by
    doc.rect(110, 120, 90, 45); // pour le champ a droite Approved by
    doc.rect(10, 165, 100, 45); // champ manager 2
    doc.rect(110, 165, 90, 45); // Champ manager signature
    doc.rect(10, 210, 100, 45); // pour champ directeur manager 2 droie
    doc.rect(110, 210, 90, 45);  // champ directeur manager 2 signature


    // doc.addImage(AIRTEL_HEADER, 'JPEG', 15, 11, 35, 35,);
    // doc.rect(15, 21, 100, 189);
    doc.text(82, 17, `CELTEL - NIGER`, + 0, 300);
    doc.text(82, 26, `DIRECTION :`, + 0, 300);
    doc.text(82, 32, `APN :`, + 0, 300);
    doc.text(15, 53, `Project`, doc.setFontSize(12));
    doc.text(15, 59, `Tasks Description`, doc.setFontSize(12));
    doc.text(160, 59, `Date :`, doc.setFontSize(12));
    doc.text(15, 127, `Approved by`, doc.setFontSize(17));
    doc.text(15, 95, `Products Manager :`, doc.setFontSize(14));
    doc.text(15, 137, `IT Director :`, doc.setFontSize(14));
    doc.setFontSize(10);

    let index = 0;
    doc.text(15, 60 + (10 * (index + 1)), demande.description, doc.setFontSize(12));
    doc.text(174, 50 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(12));
    doc.text(15, 100 + (10 * (index + 1)), demande.demandeur.nom + " " + demande.demandeur.prenom, doc.setFontSize(14));
    doc.text(120, 100 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    doc.text(15, 140 + (10 * (index + 1)), demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(14));
    doc.text(120, 87 + (10 * (index + 1)), demande.etatmanager, doc.setFontSize(14));
    doc.text(120, 128 + (10 * (index + 1)), demande.etatdirecteur, doc.setFontSize(14));
    // doc.text(120, 140 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    // doc.text(15, 163 + (10 * (index + 1)), demande.typeDemande.workFlowDirection.nom, doc.setFontSize(14));

    doc.save(`APN.pdf`);
    // this.busys['generatePDFSynthese'] = false;
}


// ++++++++++++++++++++++++++++++ Target SIP Generator PDF ++++++++++++++++++++++++++++++

export function generationDemandeTargetSIP(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);
    doc.rect(55, 88, 150, 42);
    doc.text(57, 93, `Nouveaux clients correctement identifiés ayant un fait une activité`, doc.setFontSize(12));
    doc.text(57, 100, `génératrice de revenu Tout point de vente ayant envoyer au moins une  `, doc.setFontSize(12));
    doc.text(57, 107, `requête via Agile Lab  dans les 30 jours avec au moins 3 GA C'est le point`, doc.setFontSize(12));
    doc.text(57, 114, ` de vente AM qui fait au moins deux (2) Transcations en Cash In ou `, doc.setFontSize(12));
    doc.text(57, 121, `Cash Out de 1000F  dans le mois. Focus sur la conversion des NB de devices`, doc.setFontSize(12));
    doc.text(57, 128, `Mifi ou Smartbox vendus et activés. Transmettre IMEI du HBB et MSISDN`, doc.setFontSize(12));

    // +++++++++++++++++++++++++++++   les directions  +++++++++++++++++++++++++++++++++++++++

    doc.rect(15, 220, 26, 10 );
    doc.text(16,225,`SBA MANAGER`,doc.setFontSize(8));
    doc.rect(41, 220, 26, 10);
    doc.text(42,225,`BPA MANAGER`,doc.setFontSize(8));
    doc.rect(67, 220, 26, 10);
    doc.text(68,225,`SALES DIREC`,doc.setFontSize(8));
    doc.rect(93, 220, 26, 10);
    doc.text(94,225,`MARKETING MANA`,doc.setFontSize(8));
    doc.rect(119, 220, 26, 10);
    doc.text(120,225,`AM DIRECTOR`,doc.setFontSize(8));
    doc.rect(145, 220, 26, 10);
    doc.text(146,225,`Finance DIREC`,doc.setFontSize(8));
    doc.rect(171, 220, 26, 10);
    doc.text(172,225,`MANAGING DIREC`,doc.setFontSize(8));

    //   +++++++++++++++++++++++++++++++++++++++++ le nom des signateurs +++++++++++++++++++++++++++  

    doc.rect(15, 230, 26, 10);
    doc.text(16, 235 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(41, 230, 26, 10);
    doc.text(42, 235 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(67, 230, 26, 10);
    doc.text(68, 235 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(93, 230, 26, 10);
    doc.text(94, 235 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(119, 230, 26, 10);
    doc.text(120, 235 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(145, 230, 26, 10);
    doc.text(146, 235 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(171, 230, 26, 10);
    doc.text(172, 235 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));

    // +++++++++++++++++++++++++++++++++++++ L'etat de la demande +++++++++++++++++++++++++++++++++++

    doc.rect(15, 240, 26, 24);
    // doc.text(16, 245 , demande.etatdirecteur.nom ,doc.setFontSize(10));
    doc.text(21, 245 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(21, 253 , demande.createdAt, doc.setFontSize(10));
    doc.rect(41, 240, 26, 24);
    doc.text(47, 245 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(47, 253 , demande.createdAt, doc.setFontSize(10));
    doc.rect(67, 240, 26, 24);
    doc.text(73, 245 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(73, 253 , demande.createdAt, doc.setFontSize(10));
    doc.rect(93, 240, 26, 24);
    doc.text(99, 245 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(99, 253 , demande.createdAt, doc.setFontSize(10));
    doc.rect(119, 240, 26, 24);
    doc.text(125, 245 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(125, 253 , demande.createdAt, doc.setFontSize(10));
    doc.rect(145, 240, 26, 24);
    doc.text(151, 245 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(151, 253 , demande.createdAt, doc.setFontSize(10));
    doc.rect(171, 240, 26, 24);
    doc.text(177, 245 , demande.createdAt, doc.setFontSize(10));
    doc.text(177, 253 , demande.createdAt, doc.setFontSize(10));



    // doc.rect(110, 220, 95, 45);

    var img = new Image()
    img.src = 'assets/airtellogo.png'
    doc.setFontSize(19);
    doc.addImage(img, 'JPEG', 15, 11, 35, 35,);
    doc.text(82, 17, `CELTEL - NIGER`, + 0, 300);
    doc.text(68, 26, `DIRECTION :` +demande.demandeur.direction.nom, + 0, 300);
    doc.text(15, 63, `AOP : 2020 - 2021 `, doc.setFontSize(12));
    doc.text(15, 72, `DEPARTMENT : SBA `, doc.setFontSize(12));
    doc.text(15, 79, `DESCRIPTION : SIP TARGET juin 2021 `, doc.setFontSize(12));
    doc.text(15, 90, `Definition : KPI'S `, doc.setFontSize(12));
    doc.text(15, 96, `REC Gross Add  `, doc.setFontSize(12));
    doc.text(15, 102, `Active SSO Agil Lab  `, doc.setFontSize(12));
    doc.text(15, 108, `AM Active Agents  `, doc.setFontSize(12));
    doc.text(15, 114, `HBB  `, doc.setFontSize(12));

    var imgTarget = new Image()
    imgTarget.src = 'assets/TargetSIP.png'
    doc.addImage(imgTarget, 'JPEG', 15, 140, 190, 0);

    // doc.text(15, 53, `Project`, doc.setFontSize(12));
    // doc.text(15, 59, `Tasks Description`, doc.setFontSize(12));
    doc.text(160, 59, `Date :` + demande.createdAt, doc.setFontSize(12));
    // doc.text(15, 127, `Approved by`, doc.setFontSize(17));
    // doc.text(15, 95, `Products Manager :`, doc.setFontSize(14));
    // doc.text(15, 137, `IT Director :`, doc.setFontSize(14));
    doc.setFontSize(10);

    let index = 0;
    // doc.text(15, 60 + (10 * (index + 1)), demande.description, doc.setFontSize(12));
    // doc.text(174, 50 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(12));
    // doc.text(15, 100 + (10 * (index + 1)), demande.demandeur.nom + " " + demande.demandeur.prenom, doc.setFontSize(14));
    // doc.text(120, 100 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    // doc.text(15, 140 + (10 * (index + 1)), demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(14));
    // doc.text(120, 87 + (10 * (index + 1)), demande.etatmanager, doc.setFontSize(14));
    // doc.text(120, 128 + (10 * (index + 1)), demande.etatdirecteur, doc.setFontSize(14));
    // doc.text(120, 140 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    // doc.text(15, 163 + (10 * (index + 1)), demande.typeDemande.workFlowDirection.nom, doc.setFontSize(14));

    doc.save(`TargetSIP.pdf`);
    // this.busys['generatePDFSynthese'] = false;
}

// +++++++++++++++++++++++++++ Taget Bdev +++++++++++++++++++++++


export function generationDemandeTargetBdev(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);
    doc.rect(55, 88, 150, 42);
    doc.text(57, 93, `Client Airtel Money ayant fait une activité genetrice de revenu les 30 derniers jours`, doc.setFontSize(9));
    doc.text(57, 100, ` clients correctement identifiés ayant un fait une activité génératrice de revenu `, doc.setFontSize(9));
    doc.text(57, 107, ` Tout point de vente ayant envoyer au moins une requête via Agile Lab  dans les 30 jours avec au moins 3 GA`, doc.setFontSize(9));
    doc.text(57, 114, ` C'est le point de vente AM qui fait au moins deux (2) Transcations en Cash In ou`, doc.setFontSize(9));
    doc.text(57, 121, `Cash Out de 1000F  dans le mois Focus sur la conversion des SSO en AM Agents `, doc.setFontSize(9));
    doc.text(57, 128, ` NB de devices Mifi ou Smartbox vendus et activés. Transmettre IMEI du HBB et MSISDN`, doc.setFontSize(9));

    // +++++++++++++++++++++++++++++++++ les directions  +++++++++++++++++++++++++++++++++++++++

    doc.rect(15, 230, 26, 10 );
    doc.text(16,235,`SBA MANAGER`,doc.setFontSize(8));
    doc.rect(41, 230, 26, 10);
    doc.text(42,235,`BPA MANAGER`,doc.setFontSize(8));
    doc.rect(67, 230, 26, 10);
    doc.text(68,235,`SALES DIREC`,doc.setFontSize(8));
    doc.rect(93, 230, 26, 10);
    doc.text(94,235,`MARKETING MANA`,doc.setFontSize(8));
    doc.rect(119, 230, 26, 10);
    doc.text(120,235,`AM DIRECTOR`,doc.setFontSize(8));
    doc.rect(145, 230, 26, 10);
    doc.text(146,235,`Finance DIREC`,doc.setFontSize(8));
    doc.rect(171, 230, 26, 10);
    doc.text(172,235,`MANAGING DIREC`,doc.setFontSize(8));

    //   +++++++++++++++++++++++++++++++++++++++++ le nom des signateurs +++++++++++++++++++++++++++  

    doc.rect(15, 240, 26, 10 );
    doc.text(16, 245 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(41, 240, 26, 10);
    doc.text(42, 245 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(67, 240, 26, 10);
    doc.text(68, 245 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(93, 240, 26, 10);
    doc.text(94, 245 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(119, 240, 26, 10);
    doc.text(120, 245 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(145, 240, 26, 10);
    doc.text(146, 245 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(171, 240, 26, 10);
    doc.text(172, 245 , demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));

    // +++++++++++++++++++++++++++++++++++++ L'etat de la demande +++++++++++++++++++++++++++++++++++

    doc.rect(15, 250, 26, 24);
    doc.text(20, 255 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(20, 264 , demande.createdAt, doc.setFontSize(10));
    doc.rect(41, 250, 26, 24);
    doc.text(46, 255 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(46, 264 , demande.createdAt, doc.setFontSize(10));
    doc.rect(67, 250, 26, 24);
    doc.text(72, 255 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(72, 264 , demande.createdAt, doc.setFontSize(10));
    doc.rect(93, 250, 26, 24);
    doc.text(98, 255 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(98, 264 , demande.createdAt, doc.setFontSize(10));
    doc.rect(119, 250, 26, 24);
    doc.text(124, 255 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(124, 264 , demande.createdAt, doc.setFontSize(10));
    doc.rect(145, 250, 26, 24);
    doc.text(150, 255 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(150, 264 , demande.createdAt, doc.setFontSize(10));
    doc.rect(171, 250, 26, 24);
    doc.text(176, 255 , demande.etatdirecteur, doc.setFontSize(10));
    doc.text(176, 264 , demande.createdAt, doc.setFontSize(10));
    
    // doc.rect(110, 220, 95, 45);

    var img = new Image()
    img.src = 'assets/airtellogo.png'
    doc.setFontSize(19);
    doc.addImage(img, 'JPEG', 15, 11, 35, 35,);
    doc.text(82, 17, `CELTEL - NIGER`, + 0, 300);
    doc.text(68, 26, `DIRECTION :` +demande.demandeur.direction.nom, + 0, 300);
    doc.text(15, 63, `AOP : 2021 - 2022 `, doc.setFontSize(12));
    doc.text(15, 72, `DEPARTMENT : SBA `, doc.setFontSize(12));
    doc.text(15, 79, `DESCRIPTION : SIP TARGET juin 2021 `, doc.setFontSize(12));
    doc.text(15, 90, `Definition : KPI'S `, doc.setFontSize(12));
    doc.text(15, 96, `REC Gross Add SSO `, doc.setFontSize(12));
    doc.text(15, 102, `Active SSO Agil Lab  `, doc.setFontSize(12));
    doc.text(15, 108, `AM Active Agents  `, doc.setFontSize(12));
    doc.text(15, 114, `HBB  `, doc.setFontSize(12));

    var imgTargetBdev = new Image()
    imgTargetBdev.src = 'assets/TargetBdev .png'
    doc.addImage(imgTargetBdev, 'JPEG', 15, 140, 190, 0);

    // doc.text(15, 53, `Project`, doc.setFontSize(12));
    // doc.text(15, 59, `Tasks Description`, doc.setFontSize(12));
    doc.text(160, 59, `Date :` + demande.createdAt, doc.setFontSize(12));
    // doc.text(15, 127, `Approved by`, doc.setFontSize(17));
    // doc.text(15, 95, `Products Manager :`, doc.setFontSize(14));
    // doc.text(15, 137, `IT Director :`, doc.setFontSize(14));
    doc.setFontSize(10);

    let index = 0;
    // doc.text(15, 60 + (10 * (index + 1)), demande.description, doc.setFontSize(12));
    // doc.text(174, 50 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(12));
    // doc.text(15, 100 + (10 * (index + 1)), demande.demandeur.nom + " " + demande.demandeur.prenom, doc.setFontSize(14));
    // doc.text(120, 100 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    // doc.text(15, 140 + (10 * (index + 1)), demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(14));
    // doc.text(120, 87 + (10 * (index + 1)), demande.etatmanager, doc.setFontSize(14));
    // doc.text(120, 128 + (10 * (index + 1)), demande.etatdirecteur, doc.setFontSize(14));
    // doc.text(120, 140 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    // doc.text(15, 163 + (10 * (index + 1)), demande.typeDemande.workFlowDirection.nom, doc.setFontSize(14));

    doc.save(`TargetBev.pdf`);
    // this.busys['generatePDFSynthese'] = false;
}




export function generationDemandeContrat(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF

    doc.rect(25, 10, 150, 12);
    doc.setFontSize(17);
    doc.text(39, 19, `FICHE DE DEMANDE DE CONTRAT `, + 0, 300);
    doc.text(15, 37, `Identité du demandeur `, doc.setFontSize(15));
    doc.text(15, 45, `Nom et Prénom :` +demande.demandeur.nom + " " + demande.demandeur.prenom, doc.setFontSize(12),doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 52, `Fonction et Direction  :` +demande.demandeur.direction.nom, doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 61, `Pour partenaire personne physique :`,doc.setFontSize(15));
    doc.text(15, 69, `Nom et Prénom :` +demande.nomPartenaire + " "+demande.prenomPartenaire, doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 75, `Numéro carte d’identité  :` +demande.numCarte , doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 81, `Numéro de téléphone et adresse :`+" "+demande.telephonePartenaire , doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 87, `Adresse mail :`+demande.emailPartenaire , doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 93, `Numéro NIF et RCCM:`, doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 103, `Pour Partenaire personne morale`,doc.setFontSize(15));
    doc.text(15, 111, `Dénomination sociale :`+" "+demande.nomPartenaire + " "+demande.prenomPartenaire, doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 117, `Numéro NIF et RCCM :`, doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 123, `Nom et prénom du représentant de la société :`+" "+demande.nomPartenaire + " "+demande.prenomPartenaire, doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 129, `Adresse de la société :`+" "+demande.adresse , doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 135, `Numéro de téléphone de la société et du représentant:`+" "+demande.telephonePartenaire , doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 141, `Adresse mail :`+" "+demande.emailPartenaire , doc.setFontSize(12), doc.setFontType("arial"),+ 0, 300,);
    doc.text(15, 151, `Données contractuelles :`,doc.setFontSize(15));
    doc.text(15, 186, `Validations :`,doc.setFontSize(15));

    // ++++++++++++++ Tableau de validation ++++++++++++++++++++++

    doc.rect(15, 191, 185, 12);
    doc.text(19, 196 ,`Dr demandeur:`,doc.setFontSize(12));
    doc.rect(15, 203, 185, 12);
    doc.text(54, 196 ,`Supply Chain:`,doc.setFontSize(12));
    doc.rect(15, 191, 33, 24);
    doc.text(96, 196 ,`Legal:`,doc.setFontSize(12));
    doc.rect(86, 191, 50, 24);
    doc.text(145, 196 ,`Budget Manager :`,doc.setFontSize(12));
// +++++++++++++++++++++++++ Objet de contrat +++++++++++++++++++++++++++

    doc.text(15, 220 ,`Objet et intérêt du contrat pour Celtel Niger SA :(prière de donner une description précise) `,doc.setFontSize(14));
    doc.text(15, 224 , demande.objetInterer, doc.setFontSize(10));
    doc.text(15, 240 , 'Pièces jointes ', doc.setFontSize(14));
    doc.text(15, 246 , 'Les documents d’identification de la personne physique ou morale doivent être fournis, ainsi que tout autre', doc.setFontSize(12));
    doc.text(15, 252 , 'document requis. (Cochez les cases correspondantes)', doc.setFontSize(12));

// +++++++++++++++++++++++ Les pieces +++++++++++++++++++++++++++++++++++++

 doc.rect(15, 255, 185, 12);
 doc.text(19, 262 ,`RCCM`,doc.setFontSize(12));
 doc.rect(15, 267, 185, 12);
 doc.text(54, 262 ,`NIF`,doc.setFontSize(12));
 doc.rect(15, 255, 33, 24);
 doc.text(83, 262 ,`Pièce d’identité`,doc.setFontSize(12));
 doc.rect(48, 255, 33, 24);
 doc.text(116, 262 ,`Cahier de charges`,doc.setFontSize(12));
 doc.rect(81, 255, 33, 24);
 doc.text(152, 262 ,`Autres (précisez)`,doc.setFontSize(12));
 doc.rect(114, 255, 33, 24);

//  +++++++++++++++++++++++++++++ NB +++++++++++++++++++++++++++
doc.text(15, 285 ,`NB:Toute demande incomplète ne fera pas l’objet d’enregistrement par la Supply Chainjusqu’à régularisation. `,doc.setFontSize(12));
   
 doc.save(`DemandeContrat.pdf`);
    // this.busys['generatePDFSynthese'] = false;
}


// ++++++++++++++++++++++++++++++++ Device promoters ++++++++++++++++++++++++++


export function generationDemandeDevicePromoters(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);

//  +++++++++++++++++++++++++ Tableau de header +++++++++++++++++++++++

    doc.rect(12, 10, 187, 10);
    doc.rect(12, 10, 30, 10); 

// ++++++++ ligne 1 +++++++++++

    doc.rect(12, 25, 30, 10); 
    doc.rect(42, 25, 40, 10); 
    doc.rect(85, 25, 25, 10); 
    doc.rect(110, 25, 36, 10);
  
// ++++++++ ligne 2 +++++++++++
     doc.rect(12, 40, 30, 10); 
     doc.rect(42, 40, 40, 10); 
     doc.rect(85, 40, 60, 10); 
     doc.rect(147, 40, 25, 10); 
     doc.rect(172, 40, 27, 10);

    //  ++++++++++++++ ligne 3 +++++++++++++++++++++++++

    doc.rect(12, 55, 30, 10); 
    doc.rect(42, 55, 40, 10); 
    doc.rect(85, 55, 59, 10); 
    doc.rect(110, 55, 34, 10);
    doc.rect(147, 55, 25, 10); 
    doc.rect(172, 55, 27, 10);

    // ++++++++++++++++ ligne 4 +++++++++++++++++++++++++

    doc.rect(12, 70, 30, 10); 
    doc.rect(42, 70, 40, 10); 
    doc.rect(85, 70, 59, 10); 
    // doc.rect(110, 55, 34, 10);
    doc.rect(147, 70, 25, 10); 
    doc.rect(172, 70, 27, 10);

    // +++++++++++++++++ This is maximum validity time for implementation +++++++++++

    doc.text(15, 85,`*This is maximum validity time for implementation. If this implementation date is expired RA team should`,doc.setFontSize(11),  doc.setTextColor(255,0,0));
    doc.text(15, 90,`not accept request & business to re-initiate approvals.`,doc.setFontSize(11));
    doc.text(15, 95,`*Date by which PCN must be re-initiated for approval if there is need to run for more than the PCN Validity`,doc.setFontSize(11));
    doc.text(15, 100,` Period indicated above..`,doc.setFontSize(11));

    doc.text(15, 108,`1.0 Problem / Opportunity Statement`,doc.setFontSize(13),doc.setTextColor(0,0,0));
    doc.text(15, 115,`Airtel acquired the first 4G licence in Niger. \n  Weak penetration of 4G devices (Mifi, Router and Smartphones) in Niger => opportunity to increase 4G \n devices penetration`,doc.setFontSize(11),doc.setTextColor(0,0,0));
    doc.text(15, 132,`2.0 Data Substantiating the Problem / Opportunity Statement	 `,doc.setFontSize(13),doc.setTextColor(0,0,0));
    doc.text(15, 140,` To support our 4G launch soon, we need to increase our 4G devices penetration.`,doc.setFontSize(11));
    doc.text(15, 145,`3.0 Background`,doc.setFontSize(13),doc.setTextColor(0,0,0));
   
    doc.save(`DevicePromoters.pdf`);
    // this.busys['generatePDFSynthese'] = false;
}




// ++++++++++++++++++++++++ Demande Purchage Pdf +++++++++++++++++++++++++

export function generationPurchaseRequest(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);

    var img = new Image()
    img.src = 'assets/airtellogo.png'
    doc.addImage(img, 'JPEG', 15, 11, 35, 35,);
    doc.text(82, 17, `CELTEL - NIGER`, + 0, 300);
    doc.text(68, 26, `DIRECTION :` +demande.demandeur.direction.nom, + 0, 300);
    doc.text(70, 35, `PURCHASE REQUEST`,+0, 300 );

    // ++++++++++++++++ Header  +++++++++++++++++++++++++


    doc.text(15, 55, `Item :`,+doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.text(160, 55, `Date :`+demande.createdAt ,+doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.text(18, 67 , demande.description, doc.setFontSize(13));
    doc.rect(15, 60, 187, 10);
    

    // ++++++++++++++++ ligne 4 +++++++++++++++++++++++++

    doc.rect(15, 80, 45, 10); 
    doc.text(17, 85, `Detailed description :`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.rect(60, 80, 45, 10);
    doc.text(64, 85 , demande.detailedDescription ,doc.setFontSize(14));
    doc.rect(110, 80, 45, 10); 
    doc.text(115, 85, `Quantity :`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.rect(155, 80, 45, 10);
    doc.text(160, 85 , demande.quantity ,doc.setFontSize(14));

    doc.rect(15, 95, 45, 10); 
    doc.text(17, 100, `Estimated total :`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.rect(60, 95, 45, 10);
    doc.text(64, 100 , demande.estimatedTotalHT ,doc.setFontSize(14));
    doc.rect(110, 95, 45, 10); 
    doc.text(114, 100, `Delivery date:`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.rect(155, 95, 45, 10);
    doc.text(157, 100 , demande.targetedDeliveryDate ,doc.setFontSize(14));
    doc.rect(15, 110, 45, 10); 
    doc.text(17, 116, `Expense type:`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.rect(60, 110, 45, 10);  
    doc.text(64, 116 , demande.expenseType ,doc.setFontSize(14));
    doc.rect(110, 110, 45, 10); 
    doc.text(114, 116, `Need Contract :`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.rect(155, 110, 45, 10);
    doc.text(157, 116 , demande.needContract ,doc.setFontSize(14));

    doc.rect(15, 125, 187, 10);
    doc.text(18, 131 ,'Requestor : '+demande.demandeur.nom+' '+demande.demandeur.prenom, doc.setFontSize(13));

    // ++++++++++++++++++++++ Manager Requestor ++++++++++++++++++++++++++++++

    doc.rect(15, 140, 95, 27); 
    doc.text(18, 147, `Manager Requestor:`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.text(18, 160 , demande.manager.nom+' '+demande.manager.prenom ,doc.setFontSize(14));
    doc.rect(110, 140, 91, 27); 
    doc.text(115, 147 , demande.etatmanager ,doc.setFontSize(14));
    doc.text(115, 160 , demande.targetedDeliveryDate ,doc.setFontSize(14));
    
    
    doc.rect(15, 167, 95, 27); 
    doc.text(18, 173, `Department Director :`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.text(18, 190 , demande.directeur.nom+' '+demande.directeur.prenom ,doc.setFontSize(14));
    doc.rect(110, 167, 91, 27); 
    doc.text(115, 173 , demande.etatmanager ,doc.setFontSize(14));
    doc.text(115, 190 , demande.targetedDeliveryDate ,doc.setFontSize(14));
    

    doc.rect(15, 194, 95, 27); 
    doc.text(18, 200, `BPA Manager :`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.text(18, 217 , demande.typeDemande.nom+' '+demande.directeur.prenom ,doc.setFontSize(14));
    doc.rect(110, 194, 91, 27); 
    doc.text(115, 200 , demande.etatmanager ,doc.setFontSize(14));
    doc.text(115, 217 , demande.targetedDeliveryDate ,doc.setFontSize(14));
    


    doc.rect(15, 221, 95, 27); 
    doc.text(18, 227, `WH & Logistics Manager:`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.text(18, 244 , demande.directeur.nom+' '+demande.directeur.prenom ,doc.setFontSize(14));
    doc.rect(110, 221, 91, 27); 
    doc.text(115, 227 , demande.etatmanager ,doc.setFontSize(14));
    doc.text(115, 244 , demande.targetedDeliveryDate ,doc.setFontSize(14));


    doc.rect(15, 248, 95, 27); 
    doc.text(18, 254, `Procurement Manager :`,doc.setFontSize(14),doc.setTextColor(0,0,0) ,0, 300);
    doc.text(18, 271 , demande.directeur.nom+' '+demande.directeur.prenom ,doc.setFontSize(14));
    doc.rect(110, 248, 91, 27); 
    doc.text(115, 254 , demande.etatmanager ,doc.setFontSize(14));
    doc.text(115, 271 , demande.targetedDeliveryDate ,doc.setFontSize(14));


    doc.save(`PurchaseRequest.pdf`);
    // this.busys['generatePDFSynthese'] = false;
}
