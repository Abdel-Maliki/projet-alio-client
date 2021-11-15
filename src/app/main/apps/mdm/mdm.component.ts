
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
    selector     : 'mdm',
    templateUrl  : './mdm.component.html',
    styleUrls    : ['./mdm.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class MdmComponent   
{
  
    // goToSpecificUrl(url): void {
    //     window.location.href=url;
    //   }
      
      // gotoGoogle() : void {
      //   window.location.href='http://172.26.232.67:8081/airtelniger-crm/login';
      // } 
    

      // gotoSID() : void {
      //   window.location.href='https://172.26.242.114:10010/sid/index.php?page=login';
      // } 
    
    //   gotoGoogle () {
    //     this.router.navigate(['/http://172.26.232.67:8081/airtelniger-crm/login']);
    //   }


    // var navigationUrl = function (event) {
    //     if (event.ctrlKey) {
    //         window.open(url, '_blank'); // in new tab
    //     } else {
    //         $location.path(url); // in same tab
    //     }
    // }


    
}

