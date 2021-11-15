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
import { HrapplicationComponent } from './hr-application.component';

const routes: Routes = [
    {
        path: '**',
        component: HrapplicationComponent,
        resolve: {

        }
    }
];

@NgModule({
    exports: [

        HrapplicationComponent

    ],
    declarations: [

        HrapplicationComponent

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
export class HrsModule {
}
