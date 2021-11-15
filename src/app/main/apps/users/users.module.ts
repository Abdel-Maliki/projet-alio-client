import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatTableModule, MatToolbarModule, MatOption, MatOptionModule, MatSelect, MatSelectModule, MatListModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';
import { UsersComponent } from './users.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { ListComponent } from './list/list.component';
import { UsersService } from 'app/services/users.service';
import { DepartementsService } from '../departements/departements.service';
import { PasswordUpdateComponent } from './password-update/password-update.component';


const routes: Routes = [
    
    {
        path     : 'password-update',
        component: PasswordUpdateComponent,
        // resolve  : {
        //     demandes: UsersService
        // }
    },
    {
        path     : '',
        component: UsersComponent,
        resolve  : {
            demandes: UsersService
        }
    },
];

@NgModule({
    declarations   : [
       
        UsersComponent,
        ListComponent,
        FormDialogComponent,
        PasswordUpdateComponent,
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatRippleModule,
        MatTableModule,
        MatToolbarModule,
        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,
        MatOptionModule,
        MatSelectModule,
        // MatPasswordStrengthModule
      
    ],
    providers      : [
        UsersService,
        DepartementsService
    ],
    entryComponents: [
        FormDialogComponent,
    ]
})
export class UsersModule
{
    
}
