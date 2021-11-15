import { FuseNavigation } from '@fuse/types';

export const navigation_: FuseNavigation[] = [
    {
        id: 'perminssion',
        title: 'Permissions',
        translate: 'NAV.PERMISSIONS',
        type: 'group',
        icon: 'apps',
        children: [
            // {
            //     id: 'contacts',
            //     title: 'Contact  s',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'account_box',
            //     url: '/apps/contacts'
            // },
            {
                id: 'users',
                title: 'Utilisateurs',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'people',
                url: '/apps/users'

            },

            {
                id: 'profile',
                title: 'Profiles',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'vpn_key',
                url: '/apps/profile'

            },

            // {
            //     id: 'logs',
            //     title: 'Logs',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'star_border',
            //     url: '/apps/logs'

            // },

            // {
            //     id: 'projects',
            //     title: 'Airtel apps',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/apps/projects'

            // }

        ]
    },


    {
        id: 'application',
        title: 'Application',
        translate: 'NAV.PERMISSIONS',
        type: 'group',
        icon: 'apps',
        children: [
            // {
            //     id: 'pagne',
            //     title: 'Pagne',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'wax',
            //     url: '/apps/pagnes'
            // },
            {
                id: 'Demande',
                title: 'Liste des demandes',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'autorenew',
                url: '/apps/demandes'
            },
            {
                id: 'Demande-directeur',
                title: 'Effectuer une demande',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'autorenew',
                url: '/apps/demandes-directeur'
            },




            {
                id: 'Demande Achat',
                title: 'Demande d"achat',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'local_grocery_store',
                url: '/apps/demandes-directeur-achats'
            },

            {
                id: 'Demande-manager',
                title: 'Effectuer une demande',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'autorenew',
                url: '/apps/demandes-manager'
            }

        ]
    },

    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'dashboards',
                title: 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type: 'collapsable',
                icon: 'dashboard',
                children: [
                    {
                        id: 'Manager',
                        title: 'Manager',
                        type: 'item',
                        url: '/apps/dashboards/analytics'
                    },


                    // {
                    //     id: 'Ressource',
                    //     title: 'Ressource humaine',
                    //     type: 'item',
                    //     url: '/apps/dashboards/project'
                    // }
                ]
            },







        ]
    },

]

// +++++++++++++++++++++++++++++++++++++ Navigation Directeur +++++++++++++++++++++++++++++
export const navigation_directeur: FuseNavigation[] = [
    {
        id: 'perminssion',
        title: 'Permissions',
        translate: 'NAV.PERMISSIONS',
        type: 'group',
        icon: 'apps',
        children: [
           

         


        ]
    },


    {
        id: 'application',
        title: 'Application',
        translate: 'NAV.PERMISSIONS',
        type: 'group',
        icon: 'apps',
        children: [
          
            {
                id: 'Demande-directeur',
                title: 'Liste des demandes',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'autorenew',
                url: '/apps/demandes-directeur'
            },

            // {
            //     id: 'projects',
            //     title: 'Airtel apps',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/apps/projects'

            // },



        ]
    },









    //     ]
    // },

]




// ++++++++++++++++++++++++++++++++++++++++ Navigation pour administrateur +++++++++++++++++++++++++++++


export const navigation_administrateur: FuseNavigation[] = [
    {
        id: 'perminssion',
        title: 'Permissions',
        translate: 'NAV.PERMISSIONS',
        type: 'group',
        icon: 'apps',
        children: [

            {
                id: 'users',
                title: 'Utilisateurs',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'people',
                url: '/apps/users'

            },





            // {
            //     id: 'profile',
            //     title: 'Profiles',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'vpn_key',
            //     url: '/apps/profile'

            // },

            // {
            //     id: 'logs',
            //     title: 'Logs',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'star_border',
            //     url: '/apps/logs'

            // },

            {
                id: 'projects',
                title: 'Airtel apps',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'apps',
                url: '/apps/projects'

            }

        ]
    },


    {
        id: 'application',
        title: 'Application',
        translate: 'NAV.PERMISSIONS',
        type: 'group',
        icon: 'apps',
        children: [

            {
                id: 'Demande-manager',
                title: 'Liste des demande',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'autorenew',
                url: '/apps/demandes-manager'
            },



            {
                id: 'departements',
                title: 'Departement',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'people',
                url: '/apps/departements'

            },


            // {

            //     id: 'directions',
            //     title: 'Direction',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'people',
            //     url: '/apps/directions'

            // },



            {
                id: 'typeDemande',
                title: 'Type demande',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'people',
                url: '/apps/typeDemandes'

            },

            // {
            //     id: 'projects',
            //     title: 'Airtel apps',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/apps/projects'

            // },

            {
                id: 'demande-contrat',
                title: 'Demande de contrat',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'autorenew',
                url: '/apps/demande-contrat'
            },

            {
                id: 'Demande Achat',
                title: 'Demande dachat',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'local_grocery_store',
                url: '/apps/demande-directeur-achats'
            },


            // {
            //     id: 'Airtel apps ',
            //     title: 'Airtel app',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/apps/projects'
            // },



        ]
    },

    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [








        ]
    },

]

// +++++++++++++++++++ Navigation manager +++++++++++++++++++++++++++++++++++++++

export const navigation_manager: FuseNavigation[] = [
    {
        id: 'perminssion',
        title: 'Permissions',
        translate: 'NAV.PERMISSIONS',
        type: 'group',
        icon: 'apps',
        children: [
              
            
    
            {
                id: 'Manager',
                title: 'Manager',
                type: 'item',
                url: '/apps/dashboards/analytics'
            },


            {
                id: 'Demande Achat',
                title: 'Liste des demandes',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'local_grocery_store',
                url: '/apps/demandes-manager'
            },


            {
                id: 'Demande Achat',
                title: 'Demande dachat',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'local_grocery_store',
                url: '/apps/demandes-manager-achats'
            },



            {
                id: 'Demande requisition',
                title: 'Demande requisition',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'local_grocery_store',
                url: '/apps/demandes-manager-requisition'
            },


            {
                id: 'Fiche creation CUG',
                title: 'Fiche creation CUG',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'local_grocery_store',
                url: '/apps/demandes-manager-creatiom-cugs'
            },



            {
                id: 'Service request form',
                title: 'Service request form',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'local_grocery_store',
                url: '/apps/demandes-manager-request-form'
            },

            {
                id: 'Airtel apps ',
                title: 'Airtel app',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'apps',
                url: '/apps/projects'
            },


        ]
    

    },


]

// +++++++++++++++++++++++++++++++++++ Navigation Employe +++++++++++++++++++++++++++++++++

export const navigation_employe: FuseNavigation[] = [
    {
        id: 'perminssion',
        title: 'Permissions',
        translate: 'NAV.PERMISSIONS',
        type: 'group',
        icon: 'apps',
        children: [



            // {
            //     id: 'logs',
            //     title: 'Logs',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'star_border',
            //     url: '/apps/logs'

            // }

        ]
    },


    {
        id: 'application',
        title: 'Application',
        translate: 'NAV.PERMISSIONS',
        type: 'group',
        icon: 'apps',
        children: [

            {
                id: 'Demande',
                title: 'Liste des demandes',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'autorenew',
                url: '/apps/demandes'
            },

            {
                id: 'Demande requisition',
                title: 'Demande requisition',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'local_grocery_store',
                url: '/apps/demandes-requisition'
            },


            {
                id: 'demande-contrat',
                title: 'Demande de contrat',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'autorenew',
                url: '/apps/demande-contrat'
            },


            // {
            //     id: 'missions',
            //     title: 'Ordre de mission',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'auto renew',
            //     url: '/apps/missions'
            // },


            {
                id: 'Demande Achat',
                title: 'Demande d"achat',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'local_grocery_store',
                url: '/apps/demandesDachats'
            },


          


            {
                id: 'Demande Achat',
                title: 'Fiche de creation CUG',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'meeting_room',
                url: '/apps/ficheCreationCug'
            },

            // {
            //     id: 'Service Request',
            //     title: 'Service Request form',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'meeting_room',
            //     url: '/apps/serviceRequestForm'
            // },


            {
                id: 'User ID Access Request Form ',
                title: 'User ID Access Request Form ',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'person_add',
                url: '/apps/demandesUserIDAccessRequestFom'
            },


         

            // {
            //     id: 'User ID Access Request Form ',
            //     title: 'User ID Access Request Form ',
            //     translate: 'NAV.CONTACTS',
            //     type: 'item',
            //     icon: 'person_add',
            //     url: '/apps/projects'
            // },


            {
                id: 'Airtel apps ',
                title: 'Airtel app',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'apps',
                url: '/apps/projects'
            },

        ]
    },

    // {
    //     id: 'applications',
    //     title: 'Applications',
    //     translate: 'NAV.APPLICATIONS',
    //     type: 'group',
    //     icon: 'apps',
    //     children: [
    //         {
    //             id: 'dashboards',
    //             title: 'Dashboards',
    //             translate: 'NAV.DASHBOARDS',
    //             type: 'collapsable',
    //             icon: 'dashboard',
    //             children: [
    //                 // {
    //                 //     id: 'Manager',
    //                 //     title: 'Manager',
    //                 //     type: 'item',
    //                 //     url: '/apps/dashboards/analytics'
    //                 // },




    //                 // {
    //                 //     id: 'Ressource',
    //                 //     title: 'Ressource humaine',
    //                 //     type: 'item',
    //                 //     url: '/apps/dashboards/project'
    //                 // }
    //             ]
    //         },







    //     ]
    // },

]



