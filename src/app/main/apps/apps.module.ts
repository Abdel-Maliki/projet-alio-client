import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { Error404Component } from './404/error-404.component';

const routes = [


    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'

    },



    {
        path: 'demandes',
        loadChildren: './demandes/demandes.module#DemandesModule'
    },


    {
        path: 'demandesDachats',
        loadChildren: './demandesDachats/demandes.module#DemandesModule'
    },

    {
        path: 'demandes-manager-achats',
        loadChildren: './demandes-manager-achats/demandes.module#DemandesModule'
    },


    {
        path: 'demandes-directeur-achats',
        loadChildren: './demandes-directeur-achats/demandes.module#DemandesModule'
    },



    {
        path: 'ficheCreationCug',
        loadChildren: './ficheCreationCug/demandes.module#DemandesModule'
    },


    {
        path: 'demandesUserIDAccessRequestFom',
        loadChildren: './demandesUserIDAccessRequestFom/demandes.module#DemandesModule'
    },





    {
        path: 'demandes-manager-creatiom-cugs',
        loadChildren: './demandes-manager-creatiom-cugs/demandes.module#DemandesModule'
    },


    {
        path: 'demandes-manager-request-form',
        loadChildren: './demandes-manager-request-form/demandes.module#DemandesModule'
    },


    {
        path: 'demandesUserIDAccessRequestFom',
        loadChildren: './demandesUserIDAccessRequestFom/demandes.module#DemandesModule'
    },


    {
        path: 'projects',
        loadChildren: './projects/project.module#ProjectsModule'
    },



    {
        path: 'departements',
        loadChildren: './departements/departements.module#DepartementsModule'
    },


    {
        path: 'typeDemandes',
        loadChildren: './typeDemandes/typeDemandes.module#TypeDemandesModule'
    },


    {
        path: 'demandes-directeur',
        loadChildren: './demandes-directeur/demandes.module#DemandesModule'
    },


    {
        path: 'demande-contrat',
        loadChildren: './demande-contrat/demandes.module#DemandesModule'
    },




    {
        path: 'demandes-manager',
        loadChildren: './demandes-manager/demandes.module#DemandesModule'
    },


    {
        path: 'demandes-manager',
        loadChildren: './demandes-manager/demandes.module#DemandesModule'
    },



    {
        path: 'demandes-requisition',
        loadChildren: './demandes-requisition/demandes.module#DemandesModule'
    },



    {
        path: 'demandes-manager-requisition',
        loadChildren: './demandes-manager-requisition/demandes.module#DemandesModule'
    },



    // {
    //     path: 'login',
    //     loadChildren: './login/login.module#LoginModule'
    // },

    //   {
    //     path: 'forgot-password',
    //     loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'
    // },






];

@NgModule({

    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class AppsModule {
}

