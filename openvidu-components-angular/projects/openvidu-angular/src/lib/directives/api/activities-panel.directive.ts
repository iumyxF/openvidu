import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { OpenViduAngularConfigService } from '../../services/config/openvidu-angular.config.service';

/**
 * The **recordingActivity** directive allows show/hide the recording activity in {@link ActivitiesPanelComponent}.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `activitiesPanel` component:
 *
 * @example
 * <ov-videoconference [activitiesPanelRecordingActivity]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ActivitiesPanelComponent}.
 * @example
 * <ov-activities-panel *ovActivitiesPanel [recordingActivity]="false"></ov-activities-panel>
 */
@Directive({
	selector: 'ov-videoconference[activitiesPanelRecordingActivity], ov-activities-panel[recordingActivity]'
})
export class ActivitiesPanelRecordingActivityDirective implements AfterViewInit, OnDestroy {
	@Input() set activitiesPanelRecordingActivity(value: boolean) {
		this.recordingActivityValue = value;
		this.update(this.recordingActivityValue);
	}
	@Input() set recordingActivity(value: boolean) {
		this.recordingActivityValue = value;
		this.update(this.recordingActivityValue);
	}

	recordingActivityValue: boolean = true;

	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.recordingActivityValue);
	}
	ngOnDestroy(): void {
		this.clear();
	}
	clear() {
		this.recordingActivityValue = true;
		this.update(true);
	}

	update(value: boolean) {
		if (this.libService.recordingActivity.getValue() !== value) {
			this.libService.recordingActivity.next(value);
		}
	}
}

/**
 * The **broadcastingActivity** directive allows show/hide the broadcasting activity in {@link ActivitiesPanelComponent}.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `activitiesPanel` component:
 *
 * @example
 * <ov-videoconference [activitiesPanelBroadcastingActivity]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ActivitiesPanelComponent}.
 * @example
 * <ov-activities-panel *ovActivitiesPanel [broadcastingActivity]="false"></ov-activities-panel>
 */
 @Directive({
	selector: 'ov-videoconference[activitiesPanelBroadcastingActivity], ov-activities-panel[broadcastingActivity]'
})
export class ActivitiesPanelBroadcastingActivityDirective implements AfterViewInit, OnDestroy {
	@Input() set activitiesPanelBroadcastingActivity(value: boolean) {
		this.broadcastingActivityValue = value;
		this.update(this.broadcastingActivityValue);
	}
	@Input() set broadcastingActivity(value: boolean) {
		this.broadcastingActivityValue = value;
		this.update(this.broadcastingActivityValue);
	}

	broadcastingActivityValue: boolean = true;

	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.broadcastingActivityValue);
	}
	ngOnDestroy(): void {
		this.clear();
	}
	clear() {
		this.broadcastingActivityValue = true;
		this.update(true);
	}

	update(value: boolean) {
		if (this.libService.broadcastingActivity.getValue() !== value) {
			this.libService.broadcastingActivity.next(value);
		}
	}
}

