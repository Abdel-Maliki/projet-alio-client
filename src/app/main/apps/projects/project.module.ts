
// <!-- -------------Auteur : MAHAMADOU ALIO , mahamadoualio05@gmail.com-------------- -->


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTableModule, MatTabsModule, MatCheckboxModule, MatDialog, MatCard, MatCardTitle, MatCardModule, MatSpinner } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';


import { ProjectDashboardComponent } from './project.component';
import { ProjectDashboardService } from './project.service';
import { MdmComponent } from '../mdm/mdm.component';
import { AllapplicationComponent } from '../All/all-application.component';
import { SallesapplicationComponent } from '../sales/sales-application.component';
import { HrapplicationComponent } from '../hr/hr-application.component';
import { AmapplicationComponent } from '../am/am-application.component';
import { FinanceapplicationComponent } from '../finance/finance-application.component';
import { LegalapplicationComponent } from '../legal/legal-application.component';
import {CxapplicationComponent} from '../cx/cx-application.component';





const routes: Routes = [
    {
        path: '**',
        component: ProjectDashboardComponent,
        resolve: {
            data: ProjectDashboardService
        }
    }
];

@NgModule({
    declarations: [
        ProjectDashboardComponent,
        MdmComponent,
        AllapplicationComponent,
        SallesapplicationComponent,
        HrapplicationComponent,
        AmapplicationComponent,
        FinanceapplicationComponent,
        LegalapplicationComponent,
        CxapplicationComponent,
        
        


    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        NgxChartsModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseWidgetModule,
        MatCheckboxModule,
        MatCardModule,
        MatTableModule



    ],
    providers: [
        ProjectDashboardService,


    ]
})
export class ProjectsModule {

}

