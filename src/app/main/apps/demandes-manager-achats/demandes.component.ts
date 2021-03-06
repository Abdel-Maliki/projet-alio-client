import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {fuseAnimations} from '@fuse/animations';
import {FuseSidebarService} from '@fuse/components/sidebar/sidebar.service';
import {DemandesService} from './demandes.service';
import {FormDialogDemandeComponent} from './demande-form/demande-form.component';
import {FormDialogDemandesComponent} from './demandes-form/demande-form.component';
import {RequestState} from '../../../models/request-state';


@Component({
    selector: 'demandes',
    templateUrl: './demandes.component.html',
    styleUrls: ['./demandes.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class DemandesComponent implements OnInit, OnDestroy {
    dialogRef: any;
    hasSelectedDemandes: boolean;
    searchInput: FormControl;

    // Private
    private _unsubscribeAll: Subject<any>;

 
    constructor(
        private _demandesService: DemandesService,
        private _fuseSidebarService: FuseSidebarService,
        private _matDialog: MatDialog
    ) {
        // Set the defaults
        this.searchInput = new FormControl('');

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._demandesService.onSelectedDemandesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selectedDemandes => {
                this.hasSelectedDemandes = selectedDemandes.length > 0;
            });

        this.searchInput.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(searchText => {
                this._demandesService.onSearchTextChanged.next(searchText);
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * New contact
     */
     newDemande(): void {
        this.dialogRef = this._matDialog.open(FormDialogDemandeComponent, {
            panelClass: 'demande-form-dialog',
            data: {
                action: 'new'
            }
        });


        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }
                // this._demandesService.updateDemande(response.getRawValue());
            });
    }

    newDemande1(): void {
        this.dialogRef = this._matDialog.open(FormDialogDemandesComponent, {
            panelClass: 'demandes-form-dialog',
            data: {
                action: 'new'
            }
        });


        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }
                this._demandesService.updateDemande({...response.getRawValue(), state: RequestState.APPROVED_MANAGER, id: null});
            });
    }



    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}
