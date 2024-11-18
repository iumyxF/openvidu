import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../models/dialog.model';


/**
 * @internal
 */

@Component({
	selector: 'ov-pro-feature-template',
	template: `
		<h1 mat-dialog-title>{{ data.title }}</h1>
		<div mat-dialog-content>{{ data.description }}</div>
		<div mat-dialog-actions *ngIf="data.showActionButtons">
			<button mat-button (click)="seeMore()">
				<span>{{'PANEL.SEE_MORE' | translate}}</span>
				<mat-icon>open_in_new</mat-icon>
			</button>
			<button mat-button (click)="close()">{{'PANEL.CLOSE' | translate}}</button>
		</div>
	`
})
export class ProFeatureDialogTemplateComponent {
	constructor(public dialogRef: MatDialogRef<ProFeatureDialogTemplateComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	close() {
		this.dialogRef.close();
	}

	seeMore() {
		window.open('https://docs.openvidu.io/en/stable/openvidu-pro/', '_blank')?.focus();
	}
}
