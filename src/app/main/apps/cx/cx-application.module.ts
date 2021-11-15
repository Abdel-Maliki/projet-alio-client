// <!-- -------------Auteur : MAHAMADOU ALIO , mahamadoualio05@gmail.com-------------- -->

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatTableModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule, MatAutocompleteModule, MatAutocomplete, MatDialog, MatCard, MatCardModule, MatCardActions, MatCardAvatar, MatCardHeader, MatCardContent, MatSpinner, MatDialogModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CxapplicationComponent } from './cx-application.component';


const routes: Routes = [
    {
        path: '**',
        component: CxapplicationComponent
        ,
        resolve: {

        }
    }
];

@NgModule({
    exports: [

        CxapplicationComponent

    ],
    declarations: [

    ],
    imports: [
        RouterModule.forChild(routes),
        // ------------------les module-----------------------
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule, AutoCompleteModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatTableModule,
        MatToolbarModule,
        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,
        MatOptionModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        MatAutocompleteModule,
        NgxMatSelectSearchModule,
        MatDialogModule,
        MatCardModule,
        MatTableModule,
        // Location




    ],
    providers: [

    ],
    entryComponents: [

    ]
})
export class CxsModule {
}
