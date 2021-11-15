// <!-- -------------Auteur : MAHAMADOU ALIO , mahamadoualio05@gmail.com-------------- -->
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';




@Component({
    selector     : 'am-application',
    templateUrl  : './am-application.component.html',
    styleUrls    : ['./am-application.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AmapplicationComponent   
{
  
  


    
}

