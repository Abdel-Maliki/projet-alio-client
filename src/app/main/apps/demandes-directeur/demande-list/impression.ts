
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
    var img = new Image()
    img.src = 'assets/airtellogo.png'
    doc.setFontSize(19);
    doc.addImage(img, 'JPEG', 15, 11, 35, 35,);
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
    doc.text(82, 32, `REQUISITION `, + 0, 300);
    doc.text(15, 53, `Project`, doc.setFontSize(12));
    doc.text(15, 59, `Tasks Description`, doc.setFontSize(12));
    doc.text(15, 70, demande.description , doc.setFontSize(12), + 0, 300,);
    doc.text(160, 59, `Date :`, doc.setFontSize(12));
    doc.text(172, 59, demande.createdAt , doc.setFontSize(12), + 0, 300,);

    doc.text(15, 95, `Demandeur :`, doc.setFontSize(14));
    doc.text(140, 105, demande.createdAt , doc.setFontSize(12), + 0, 300,);
    doc.text(15, 110, demande.demandeur.nom+ ' '+demande.demandeur.prenom , doc.setFontSize(14), + 0, 300,);
    doc.text(15, 127, `Approved by`, doc.setFontSize(17));
    doc.text(15, 138, `Manager :`, doc.setFontSize(14));
    doc.text(15, 155, demande.demandeur.manager.nom+ ' '+demande.demandeur.manager.prenom , doc.setFontSize(14), + 0, 300,);
    doc.text(138, 145, demande.etatmanager , doc.setFontSize(12), + 0, 300,);
    doc.text(138, 155, demande.createdAt , doc.setFontSize(12), + 0, 300,);
    doc.text(15, 174, `Directeur :`, doc.setFontSize(14));
    doc.text(15, 192, demande.demandeur.directeur.nom+ ' '+demande.demandeur.directeur.prenom , doc.setFontSize(14), + 0, 300,);
    doc.text(138, 174, demande.etatdirecteur , doc.setFontSize(12), + 0, 300,);
    doc.text(138, 185, demande.createdAt , doc.setFontSize(12), + 0, 300,);
    doc.text(15, 218, `Departement logistique :`, doc.setFontSize(14));
   
   
   

    doc.save(`DemandeRequisitionEmployeeManager.pdf`);
    
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
    doc.text(120, 140 + (10 * (index + 1)), demande.createdAt, doc.setFontSize(14));
    doc.text(15, 163 + (10 * (index + 1)), demande.typeDemande.directeur.nom, doc.setFontSize(14));

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

    doc.rect(15, 220, 26, 10);
    doc.text(16, 225, `SBA MANAGER`, doc.setFontSize(8));
    doc.rect(41, 220, 26, 10);
    doc.text(42, 225, `BPA MANAGER`, doc.setFontSize(8));
    doc.rect(67, 220, 26, 10);
    doc.text(68, 225, `SALES DIREC`, doc.setFontSize(8));
    doc.rect(93, 220, 26, 10);
    doc.text(94, 225, `MARKETING MANA`, doc.setFontSize(8));
    doc.rect(119, 220, 26, 10);
    doc.text(120, 225, `AM DIRECTOR`, doc.setFontSize(8));
    doc.rect(145, 220, 26, 10);
    doc.text(146, 225, `Finance DIREC`, doc.setFontSize(8));
    doc.rect(171, 220, 26, 10);
    doc.text(172, 225, `MANAGING DIREC`, doc.setFontSize(8));

    //   +++++++++++++++++++++++++++++++++++++++++ le nom des signateurs +++++++++++++++++++++++++++  

    doc.rect(15, 230, 26, 10);
    doc.text(16, 235, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(41, 230, 26, 10);
    doc.text(42, 235, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(67, 230, 26, 10);
    doc.text(68, 235, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(93, 230, 26, 10);
    doc.text(94, 235, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(119, 230, 26, 10);
    doc.text(120, 235, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(145, 230, 26, 10);
    doc.text(146, 235, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(171, 230, 26, 10);
    doc.text(172, 235, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));

    // +++++++++++++++++++++++++++++++++++++ L'etat de la demande +++++++++++++++++++++++++++++++++++

    doc.rect(15, 240, 26, 24);
    // doc.text(16, 245 , demande.etatdirecteur.nom ,doc.setFontSize(10));
    doc.text(21, 245, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(21, 253, demande.createdAt, doc.setFontSize(10));
    doc.rect(41, 240, 26, 24);
    doc.text(47, 245, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(47, 253, demande.createdAt, doc.setFontSize(10));
    doc.rect(67, 240, 26, 24);
    doc.text(73, 245, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(73, 253, demande.createdAt, doc.setFontSize(10));
    doc.rect(93, 240, 26, 24);
    doc.text(99, 245, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(99, 253, demande.createdAt, doc.setFontSize(10));
    doc.rect(119, 240, 26, 24);
    doc.text(125, 245, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(125, 253, demande.createdAt, doc.setFontSize(10));
    doc.rect(145, 240, 26, 24);
    doc.text(151, 245, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(151, 253, demande.createdAt, doc.setFontSize(10));
    doc.rect(171, 240, 26, 24);
    doc.text(177, 245, demande.createdAt, doc.setFontSize(10));
    doc.text(177, 253, demande.createdAt, doc.setFontSize(10));



    // doc.rect(110, 220, 95, 45);

    var img = new Image()
    img.src = 'assets/airtellogo.png'
    doc.setFontSize(19);
    doc.addImage(img, 'JPEG', 15, 11, 35, 35,);
    doc.text(82, 17, `CELTEL - NIGER`, + 0, 300);
    doc.text(68, 26, `DIRECTION :` + demande.demandeur.direction.nom, + 0, 300);
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

    doc.rect(15, 230, 26, 10);
    doc.text(16, 235, `SBA MANAGER`, doc.setFontSize(8));
    doc.rect(41, 230, 26, 10);
    doc.text(42, 235, `BPA MANAGER`, doc.setFontSize(8));
    doc.rect(67, 230, 26, 10);
    doc.text(68, 235, `SALES DIREC`, doc.setFontSize(8));
    doc.rect(93, 230, 26, 10);
    doc.text(94, 235, `MARKETING MANA`, doc.setFontSize(8));
    doc.rect(119, 230, 26, 10);
    doc.text(120, 235, `AM DIRECTOR`, doc.setFontSize(8));
    doc.rect(145, 230, 26, 10);
    doc.text(146, 235, `Finance DIREC`, doc.setFontSize(8));
    doc.rect(171, 230, 26, 10);
    doc.text(172, 235, `MANAGING DIREC`, doc.setFontSize(8));

    //   +++++++++++++++++++++++++++++++++++++++++ le nom des signateurs +++++++++++++++++++++++++++  

    doc.rect(15, 240, 26, 10);
    doc.text(16, 245, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(41, 240, 26, 10);
    doc.text(42, 245, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(67, 240, 26, 10);
    doc.text(68, 245, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(93, 240, 26, 10);
    doc.text(94, 245, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(119, 240, 26, 10);
    doc.text(120, 245, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(145, 240, 26, 10);
    doc.text(146, 245, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));
    doc.rect(171, 240, 26, 10);
    doc.text(172, 245, demande.directeur.nom + " " + demande.directeur.prenom, doc.setFontSize(10));

    // +++++++++++++++++++++++++++++++++++++ L'etat de la demande +++++++++++++++++++++++++++++++++++

    doc.rect(15, 250, 26, 24);
    doc.text(20, 255, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(20, 264, demande.createdAt, doc.setFontSize(10));
    doc.rect(41, 250, 26, 24);
    doc.text(46, 255, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(46, 264, demande.createdAt, doc.setFontSize(10));
    doc.rect(67, 250, 26, 24);
    doc.text(72, 255, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(72, 264, demande.createdAt, doc.setFontSize(10));
    doc.rect(93, 250, 26, 24);
    doc.text(98, 255, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(98, 264, demande.createdAt, doc.setFontSize(10));
    doc.rect(119, 250, 26, 24);
    doc.text(124, 255, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(124, 264, demande.createdAt, doc.setFontSize(10));
    doc.rect(145, 250, 26, 24);
    doc.text(150, 255, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(150, 264, demande.createdAt, doc.setFontSize(10));
    doc.rect(171, 250, 26, 24);
    doc.text(176, 255, demande.etatdirecteur, doc.setFontSize(10));
    doc.text(176, 264, demande.createdAt, doc.setFontSize(10));

    // doc.rect(110, 220, 95, 45);

    var img = new Image()
    img.src = 'assets/airtellogo.png'
    doc.setFontSize(19);
    doc.addImage(img, 'JPEG', 15, 11, 35, 35,);
    doc.text(82, 17, `CELTEL - NIGER`, + 0, 300);
    doc.text(68, 26, `DIRECTION :` + demande.demandeur.direction.nom, + 0, 300);
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
    // doc.setFontSize(10);

    // let index = 0;
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
    doc.text(15, 45, `Nom et Prénom :` + demande.demandeur.nom + " " + demande.demandeur.prenom, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 52, `Fonction et Direction  :` + demande.demandeur.direction.nom, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 61, `Pour partenaire personne physique :`, doc.setFontSize(15));
    doc.text(15, 69, `Nom et Prénom :` + demande.nomPartenaire + " " + demande.prenomPartenaire, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 75, `Numéro carte d’identité  :` + demande.numCarte, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 81, `Numéro de téléphone et adresse :` + " " + demande.telephonePartenaire, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 87, `Adresse mail :` + demande.emailPartenaire, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 93, `Numéro NIF et RCCM:`, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 103, `Pour Partenaire personne morale`, doc.setFontSize(15));
    doc.text(15, 111, `Dénomination sociale :` + " " + demande.nomPartenaire + " " + demande.prenomPartenaire, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 117, `Numéro NIF et RCCM :`, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 123, `Nom et prénom du représentant de la société :` + " " + demande.nomPartenaire + " " + demande.prenomPartenaire, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 129, `Adresse de la société :` + " " + demande.adresse, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 135, `Numéro de téléphone de la société et du représentant:` + " " + demande.telephonePartenaire, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 141, `Adresse mail :` + " " + demande.emailPartenaire, doc.setFontSize(12), doc.setFontType("arial"), + 0, 300,);
    doc.text(15, 151, `Données contractuelles :`, doc.setFontSize(15));
    doc.text(15, 186, `Validations :`, doc.setFontSize(15));

    // ++++++++++++++ Tableau de validation ++++++++++++++++++++++

    doc.rect(15, 191, 185, 12);
    doc.text(19, 196, `Dr demandeur:`, doc.setFontSize(12));
    doc.rect(15, 203, 185, 12);
    doc.text(54, 196, `Supply Chain:`, doc.setFontSize(12));
    doc.rect(15, 191, 33, 24);
    doc.text(96, 196, `Legal:`, doc.setFontSize(12));
    doc.rect(86, 191, 50, 24);
    doc.text(145, 196, `Budget Manager :`, doc.setFontSize(12));
    // +++++++++++++++++++++++++ Objet de contrat +++++++++++++++++++++++++++

    doc.text(15, 220, `Objet et intérêt du contrat pour Celtel Niger SA :(prière de donner une description précise) `, doc.setFontSize(14));
    doc.text(15, 224, demande.objetInterer, doc.setFontSize(10));
    doc.text(15, 240, 'Pièces jointes ', doc.setFontSize(14));
    doc.text(15, 246, 'Les documents d’identification de la personne physique ou morale doivent être fournis, ainsi que tout autre', doc.setFontSize(12));
    doc.text(15, 252, 'document requis. (Cochez les cases correspondantes)', doc.setFontSize(12));

    // +++++++++++++++++++++++ Les pieces +++++++++++++++++++++++++++++++++++++

    doc.rect(15, 255, 185, 12);
    doc.text(19, 262, `RCCM`, doc.setFontSize(12));
    doc.rect(15, 267, 185, 12);
    doc.text(54, 262, `NIF`, doc.setFontSize(12));
    doc.rect(15, 255, 33, 24);
    doc.text(83, 262, `Pièce d’identité`, doc.setFontSize(12));
    doc.rect(48, 255, 33, 24);
    doc.text(116, 262, `Cahier de charges`, doc.setFontSize(12));
    doc.rect(81, 255, 33, 24);
    doc.text(152, 262, `Autres (précisez)`, doc.setFontSize(12));
    doc.rect(114, 255, 33, 24);

    //  +++++++++++++++++++++++++++++ NB +++++++++++++++++++++++++++
    doc.text(15, 285, `NB:Toute demande incomplète ne fera pas l’objet d’enregistrement par la Supply Chainjusqu’à régularisation. `, doc.setFontSize(12));

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

    doc.text(15, 85, `*This is maximum validity time for implementation. If this implementation date is expired RA team should`, doc.setFontSize(11), doc.setTextColor(255, 0, 0));
    doc.text(15, 90, `not accept request & business to re-initiate approvals.`, doc.setFontSize(11));
    doc.text(15, 95, `*Date by which PCN must be re-initiated for approval if there is need to run for more than the PCN Validity`, doc.setFontSize(11));
    doc.text(15, 100, ` Period indicated above..`, doc.setFontSize(11));

    doc.text(15, 108, `1.0 Problem / Opportunity Statement`, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.text(15, 115, `Airtel acquired the first 4G licence in Niger. \n  Weak penetration of 4G devices (Mifi, Router and Smartphones) in Niger => opportunity to increase 4G \n devices penetration`, doc.setFontSize(11), doc.setTextColor(0, 0, 0));
    doc.text(15, 132, `2.0 Data Substantiating the Problem / Opportunity Statement	 `, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.text(15, 140, ` To support our 4G launch soon, we need to increase our 4G devices penetration.`, doc.setFontSize(11));
    doc.text(15, 145, `3.0 Background`, doc.setFontSize(13), doc.setTextColor(0, 0, 0));

    doc.save(`DevicePromoters.pdf`);
    // this.busys['generatePDFSynthese'] = false;
}

// +++++++++++++++++++++++++++++++ Purchase Request DPF +++++++++++++++++++++++++++


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
    // doc.text(64, 85 , demande.description ,doc.setFontSize(14));
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


// +++++++++++++++++++++++++++ FICHE DE CREATION CUG +++++++++++++++++++++++++++++++++++

export function generationFicheCreationCUG(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);

    var img = new Image()
    img.src = 'assets/airtellogo.png'
    doc.addImage(img, 'JPEG', 15, 11, 35, 35,);
    doc.text(60, 27, `FICHE DE CREATION CUG`, doc.setFontSize(25), doc.setTextColor(0, 0, 225), doc.setFont("Times New Roman"), + 0, 300,);

    doc.rect(12, 50, 187, 25);
    doc.text(25, 65, `Nom`, doc.setFontSize(16), doc.setTextColor(0, 0, 0));
    doc.rect(65, 50, 134, 25);
    doc.text(90, 65, demande.nomOrganisation, doc.setFontSize(14));

    doc.rect(12, 75, 187, 10); // -2
    doc.text(25, 82, 'Adresse', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 75, 134, 10);
    doc.text(90, 82, demande.adresseOrganisation, doc.setFontSize(14));

    doc.rect(12, 85, 187, 20);
    doc.text(14, 96, 'CUG EASY PRO', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 85, 134, 20);
    doc.text(90, 92, demande.cugEasyPro, doc.setFontSize(14));
    doc.rect(65, 85, 134, 10);

    doc.rect(12, 105, 187, 10);
    doc.text(14, 113, 'Redevance Totale', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 105, 134, 10);

    doc.rect(12, 115, 187, 10);
    doc.text(14, 123, 'Type de CUG', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 115, 134, 10);
    doc.text(90, 122, demande.typeCug, doc.setFontSize(14));

    doc.rect(12, 125, 187, 8);
    doc.text(14, 132, 'Durée contractuelle', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 125, 134, 8);
    doc.text(90, 132, demande.dureeContractuelle, doc.setFontSize(14));

    doc.rect(12, 133, 187, 8);
    doc.text(14, 140, 'Date d’activation', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 133, 134, 8);
    doc.text(90, 140, demande.dateActivation, doc.setFontSize(14));

    doc.rect(12, 141, 187, 8);
    doc.text(14, 148, 'Nombre de lignes', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 141, 134, 8);
    doc.text(90, 148, demande.nombreLigne, doc.setFontSize(14));

    doc.rect(12, 149, 187, 8);
    doc.text(14, 156, 'Service  Class', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 149, 134, 8);
    doc.text(90, 156, demande.serviceClass, doc.setFontSize(14));

    doc.rect(12, 157, 187, 10);
    doc.text(90, 164, 'CONTACT INTERFACE', doc.setFontSize(16), doc.setTextColor(16, 52, 166))

    doc.rect(12, 167, 187, 8);
    doc.text(16, 173, 'Nom', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 167, 134, 8);



    doc.rect(12, 175, 187, 8);
    doc.text(14, 182, 'Position', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 175, 134, 8);
    doc.text(90, 182, demande.position, doc.setFontSize(14));


    doc.rect(12, 183, 187, 8);
    doc.text(14, 190, 'Tel', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 183, 134, 8);
    doc.text(90, 190, demande.telephone, doc.setFontSize(14));

    doc.rect(12, 191, 187, 8);
    doc.text(14, 198, 'Email', doc.setFontSize(16), doc.setTextColor(0, 0, 0))
    doc.rect(65, 191, 134, 8);
    doc.text(90, 198, demande.emailInerface, doc.setFontSize(14));

    doc.rect(12, 205, 53, 14);
    doc.text(14, 210, `High Value And B2B \n Experience Manager  `, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.rect(65, 205, 60, 14);
    doc.text(67, 212, demande.demandeur.nom + ' ' + demande.demandeur.prenom, doc.setFontSize(13));
    doc.rect(125, 205, 75, 14);
    doc.text(140, 212, demande.dateActivation, doc.setFontSize(13));

    doc.rect(12, 219, 53, 8);
    doc.text(14, 224, ` CXD Director  `, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.rect(65, 219, 60, 8);
    doc.text(67, 224, demande.directeur.nom + ' ' + demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(125, 219, 75, 8);
    doc.text(127, 224, demande.etatdirecteur, doc.setFontSize(13));
    doc.text(165, 224, demande.createdAt, doc.setFontSize(13));


    doc.rect(12, 227, 53, 8);
    doc.text(14, 232, `Commercial Manager`, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.rect(65, 227, 60, 8);
    doc.text(67, 232, demande.directeur.nom + ' ' + demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(125, 227, 75, 8);
    doc.text(127, 232, demande.etatdirecteur, doc.setFontSize(13));
    doc.text(165, 232, demande.createdAt, doc.setFontSize(13));

    doc.rect(12, 235, 53, 8);
    doc.text(14, 240, `Risk and credit `, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.rect(65, 235, 60, 8);
    doc.text(67, 240, demande.directeur.nom + ' ' + demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(125, 235, 75, 8);
    doc.text(127, 240, demande.etatdirecteur, doc.setFontSize(13));
    doc.text(165, 240, demande.createdAt, doc.setFontSize(13));


    doc.rect(12, 243, 53, 8);
    doc.text(14, 248, `Entreprise Director `, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.rect(65, 243, 60, 8);
    doc.text(67, 248, demande.directeur.nom + ' ' + demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(125, 243, 75, 8);
    doc.text(127, 248, demande.etatdirecteur, doc.setFontSize(13));
    doc.text(165, 248, demande.createdAt, doc.setFontSize(13));


    doc.rect(12, 251, 53, 8);
    doc.text(14, 256, `R.A Manager `, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.rect(65, 251, 60, 8);
    doc.text(67, 256, demande.directeur.nom + ' ' + demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(125, 251, 75, 8);
    doc.text(127, 256, demande.etatdirecteur, doc.setFontSize(13));
    doc.text(165, 256, demande.createdAt, doc.setFontSize(13));


    doc.rect(12, 259, 53, 8);
    doc.text(14, 263, `Finance Director`, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.rect(65, 259, 60, 8);
    doc.text(67, 264, demande.directeur.nom + ' ' + demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(125, 259, 75, 8);
    doc.text(127, 264, demande.etatdirecteur, doc.setFontSize(13));
    doc.text(165, 264, demande.createdAt, doc.setFontSize(13));

    doc.save(`FicheCreationCUG.pdf`);

    // this.busys['generatePDFSynthese'] = false;
}



//  +++++++++++++++++++++++++++ Service Request Form +++++++++++++++++++++++++


export function generationServiceRequestForm(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);
    doc.setFillColor(255, 0,0);
    doc.rect(10, 10, 185, 14, "F");
    doc.text(28, 20, 'Service Request Form / Implementation form',doc.setTextColor(255,255, 255))

    doc.rect(60, 24, 135, 8);
    doc.text(14, 29, `MOCN Number `, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.rect(60, 32, 135, 8);
     doc.text(14, 29, `MOCN Number `, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    

    doc.rect(10, 32, 80, 8);  // pour le name
    doc.text(14, 37, `Account Manager `, doc.setFontSize(13), doc.setTextColor(0, 0, 0));
    doc.text(63, 37, `Name `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
     doc.text(127, 37, demande.demandeur.nom+' '+demande.demandeur.prenom, doc.setFontSize(13));

    doc.rect(60, 40, 135, 8);
    doc.text(63, 44, `Company Name `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 48, 135, 8);
    doc.text(63, 52, demande.compagnyName, doc.setFontSize(13));
    doc.rect(60, 56, 135, 8);
    doc.text(63, 60, `Nature of business`, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 64, 135, 8);
    doc.text(63, 68, demande.natureBusiness, doc.setFontSize(13));
    doc.rect(60, 72, 135, 8);
    doc.text(63, 76, `Billing Address `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 80, 135, 8);
    doc.text(63, 84, demande.billingAddress, doc.setFontSize(13));
    doc.rect(60, 88, 135, 8);
    doc.text(63, 92, `Service required by client  `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 96, 135, 8);
    doc.text(63, 100, demande.serviceRequired, doc.setFontSize(13));

    doc.rect(10, 24, 50, 80); // Requesting Client
    doc.text(14, 68, `Requesting Client`, doc.setFontSize(13), doc.setTextColor(0, 0, 0))

    doc.rect(10, 104, 50, 76);  // Requirements Specifications 

    doc.rect(60, 104, 135, 8);
    doc.text(63, 108, `Required capacity `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 112, 135, 8);
    doc.text(63, 116, demande.requiredCapacity, doc.setFontSize(13));
    doc.rect(60, 120, 135, 8);
    doc.text(63, 124, `Commenter `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 128, 135, 14);
    doc.rect(60, 142, 135, 8);
    doc.text(63, 146, `Cost `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 150, 135, 14);
    doc.rect(60, 164, 135, 8);
    doc.text(63, 168, `Request Date  `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 172, 135, 8);
    doc.text(63, 177, demande.requestDate, doc.setFontSize(13));
    // +++++++++++++++ CHECKED / CONFIRMED BY , Name and Sign off ++++++++++++++

    doc.rect(10,190,185,8);
    doc.text(14, 194, `CHECKED / CONFIRMED BY`, doc.setFontSize(13), doc.setTextColor(0, 0, 0))

    doc.rect(10, 198, 50, 8); 
    doc.text(14, 203, `INITIATOR`, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 198, 69, 8);
    doc.text(63, 203, demande.demandeur.nom+ ' '+demande.demandeur.prenom, doc.setFontSize(13));
    doc.rect(129, 198, 66, 8);
    doc.text(131, 202, demande.createdAt, doc.setFontSize(13));


    doc.rect(10, 206, 50, 8); 
    doc.text(14, 211, `ENTERPRISE MANA`, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 206, 69, 8);
    doc.text(64, 211, demande.directeur.nom+' '+demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(129, 206, 66, 8);
    doc.text(131, 211, demande.createdAt, doc.setFontSize(13));

    doc.rect(10, 214, 50, 8); 
    doc.text(14, 219, `BILLING MANAGER`, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 214, 69, 8);
    doc.text(64, 219, demande.directeur.nom+' '+demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(129, 214, 66, 8);
    doc.text(131, 219, demande.createdAt, doc.setFontSize(13));
    
    doc.rect(10, 222, 50, 8); 
    doc.text(14, 227, `R.A  `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 222, 69, 8);
    doc.text(64, 227, demande.directeur.nom+' '+demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(129, 222, 66, 8);
    doc.text(131, 227, demande.createdAt, doc.setFontSize(13));

    doc.rect(10, 230, 185, 8); 
    doc.text(14, 235, `APPROVED BY `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))

    doc.rect(10, 238, 50, 8); 
    doc.text(14, 243, `ENTREPRISE DIRECTOR`, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 238, 69, 8);
    doc.text(64, 243, demande.directeur.nom+' '+demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(129, 238, 66, 8);
    doc.text(131, 243, demande.createdAt, doc.setFontSize(13));

    doc.rect(10, 246, 50, 8); 
    doc.text(14, 251, `BILLING & P.MANAGER`, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 246, 69, 8);
    doc.text(64, 251, demande.directeur.nom+' '+demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(129, 246, 66, 8);
    doc.text(131, 251, demande.createdAt, doc.setFontSize(13));


    doc.rect(10, 254, 50, 8); 
    doc.text(14, 259, `CX DIRECTOR`, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 254, 69, 8);
    doc.text(64, 259, demande.directeur.nom+' '+demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(129, 254, 66, 8);
    doc.text(131, 259, demande.createdAt, doc.setFontSize(13));


    doc.rect(10, 262, 50, 8); 
    doc.text(14, 267, `FINANCE DIRECTOR`, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 262, 69, 8);
    doc.text(64, 267, demande.directeur.nom+' '+demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(129, 262, 66, 8);
    doc.text(131, 267, demande.createdAt, doc.setFontSize(13));


    doc.rect(10, 270, 50, 8); 
    doc.text(14, 275, `MANAGING DIRECTOR `, doc.setFontSize(13), doc.setTextColor(0, 0, 0))
    doc.rect(60, 270, 69, 8);
    doc.text(64, 275, demande.directeur.nom+' '+demande.directeur.prenom, doc.setFontSize(13));
    doc.rect(129, 270, 66, 8);
    doc.text(131, 275, demande.createdAt, doc.setFontSize(13));











    doc.save(`ServiceRequestForm.pdf`);

    // this.busys['generatePDFSynthese'] = false;
}





// ++++++++++++++++++++++++  User ID Access Request Form -   Airtel Africa++++++++++++++++++++++

export function generationUserIdAccess(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);
    doc.setFillColor(255,228,54);
    doc.rect(10, 15, 185, 275, "F");
    doc.text(28, 10, 'User ID Access Request Form - Airtel Africa',doc.setTextColor(0,0, 0))

   
    
    doc.save(`UserIDAccessRequestForm.pdf`);

    // this.busys['generatePDFSynthese'] = false;
}



export function generationDemandeRequisitionManager(demande) {
    let doc = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF 
    doc.setFontSize(19);
    var img = new Image()
    img.src = 'assets/airtellogo.png'
    doc.setFontSize(19);
    doc.addImage(img, 'JPEG', 15, 11, 35, 35,);
    doc.rect(10, 62, 190, 15);
    doc.rect(10, 85, 100, 45); // pour champ a gauche
    doc.rect(110, 85, 90, 45); // pour le champ a droite Requestor
    doc.rect(10, 120, 100, 45); // pour champ a gauche Approved by
    doc.rect(110, 120, 90, 45); // pour le champ a droite Approved by
    doc.rect(10, 165, 100, 45); // champ manager 2
    doc.rect(110, 165, 90, 45); // Champ manager signature
 

    // doc.addImage(AIRTEL_HEADER, 'JPEG', 15, 11, 35, 35,);
    // doc.rect(15, 21, 100, 189);
    doc.text(82, 17, `CELTEL - NIGER`, + 0, 300);
    doc.text(82, 32, `REQUISITION `, + 0, 300);
    doc.text(15, 53, `Project`, doc.setFontSize(12));
    doc.text(15, 59, `Tasks Description`, doc.setFontSize(12));
    doc.text(15, 70, demande.description , doc.setFontSize(12), + 0, 300,);
    doc.text(160, 59, `Date :`, doc.setFontSize(12));
    doc.text(172, 59, demande.createdAt , doc.setFontSize(12), + 0, 300,);

    doc.text(15, 95, `Demandeur :`, doc.setFontSize(14));
    doc.text(140, 105, demande.createdAt , doc.setFontSize(12), + 0, 300,);
    doc.text(15, 110, demande.demandeur.nom+ ' '+demande.demandeur.prenom , doc.setFontSize(14), + 0, 300,);
    doc.text(15, 127, `Approved by`, doc.setFontSize(17));
    doc.text(15, 138, `Manager :`, doc.setFontSize(14));
    doc.text(15, 155, demande.demandeur.directeur.nom+ ' '+demande.demandeur.directeur.prenom , doc.setFontSize(14), + 0, 300,);
    doc.text(138, 145, demande.etatdirecteur , doc.setFontSize(12), + 0, 300,);
    doc.text(138, 155, demande.createdAt , doc.setFontSize(12), + 0, 300,);
    doc.text(15, 174, `Departement logistique :`, doc.setFontSize(14));
    // doc.text(15, 192, demande.demandeur.directeur.nom+ ' '+demande.demandeur.directeur.prenom , doc.setFontSize(14), + 0, 300,);
    // doc.text(138, 174, demande.etatdirecteur , doc.setFontSize(12), + 0, 300,);
    // doc.text(138, 185, demande.createdAt , doc.setFontSize(12), + 0, 300,);
 
   
   

    doc.save(`DemandeRequisitionManagerDirecteur.pdf`);
    
}