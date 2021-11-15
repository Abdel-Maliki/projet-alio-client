// <!-- -------------Auteur : MAHAMADOU ALIO , mahamadoualio05@gmail.com-------------- -->

import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';


import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';



@Component({
    selector     : 'sales-application',
    templateUrl  : './sales-application.component.html',
    styleUrls    : ['./sales-application.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class SallesapplicationComponent  {
  
  


    
}

