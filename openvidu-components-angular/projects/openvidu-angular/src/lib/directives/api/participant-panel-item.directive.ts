import { Directive, AfterViewInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { OpenViduAngularConfigService } from '../../services/config/openvidu-angular.config.service';

/**
 * The **muteButton** directive allows show/hide the muted button in participant panel item component.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `participantPanelItem` component:
 *
 * @example
 * <ov-videoconference [participantPanelItemMuteButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ParticipantPanelItemComponent}.
 * @example
 * <ov-participant-panel-item [muteButton]="false"></ov-participant-panel-item>
 */
@Directive({
	selector: 'ov-videoconference[participantPanelItemMuteButton], ov-participant-panel-item[muteButton]'
})
export class ParticipantPanelItemMuteButtonDirective implements AfterViewInit, OnDestroy {
	@Input() set participantPanelItemMuteButton(value: boolean) {
		this.muteValue = value;
		this.update(this.muteValue);
	}
	@Input() set muteButton(value: boolean) {
		this.muteValue = value;
		this.update(this.muteValue);
	}

	muteValue: boolean = true;

	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.muteValue);
	}
	ngOnDestroy(): void {
		this.clear();
	}
	clear() {
		this.muteValue = true;
		this.update(true);
	}

	update(value: boolean) {
		if (this.libService.participantItemMuteButton.getValue() !== value) {
			this.libService.participantItemMuteButton.next(value);
		}
	}
}