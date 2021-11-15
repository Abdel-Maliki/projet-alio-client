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
import { AmapplicationComponent } from './am-application.component';


const routes: Routes = [
    {
        path: '**',
        component: AmapplicationComponent,
        resolve: {

        }
    }
];

@NgModule({
    exports: [

        AmapplicationComponent

    ],
    declarations: [

        AmapplicationComponent

    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule, AutoCompleteModule,
        // MatFileUploadModule,
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
export class AmsModule {
}
