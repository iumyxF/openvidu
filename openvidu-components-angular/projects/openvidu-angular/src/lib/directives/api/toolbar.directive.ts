import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { OpenViduAngularConfigService } from '../../services/config/openvidu-angular.config.service';

/**
 * The **screenshareButton** directive allows show/hide the screenshare toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarScreenshareButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [screenshareButton]="false"></ov-toolbar>
 */
@Directive({
	selector: 'ov-videoconference[toolbarScreenshareButton], ov-toolbar[screenshareButton]'
})
export class ToolbarScreenshareButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarScreenshareButton(value: boolean) {
		this.screenshareValue = value;
		this.update(this.screenshareValue);
	}

	/**
	 * @ignore
	 */
	@Input() set screenshareButton(value: boolean) {
		this.screenshareValue = value;
		this.update(this.screenshareValue);
	}

	private screenshareValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.screenshareValue);
	}

	ngOnDestroy(): void {
		this.clear();
	}

	private clear() {
		this.screenshareValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.screenshareButton.getValue() !== value) {
			this.libService.screenshareButton.next(value);
		}
	}
}

/**
 * The **recordingButton** directive allows show/hide the start/stop recording toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarRecordingButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [recordingButton]="false"></ov-toolbar>
 *
 * @internal
 */
 @Directive({
	selector: 'ov-videoconference[toolbarRecordingButton], ov-toolbar[recordingButton]'
})
export class ToolbarRecordingButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarRecordingButton(value: boolean) {
		this.recordingValue = value;
		this.update(this.recordingValue);
	}
	/**
	 * @ignore
	 */
	@Input() set recordingButton(value: boolean) {
		this.recordingValue = value;
		this.update(this.recordingValue);
	}
	private recordingValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.recordingValue);
	}

	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.recordingValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.recordingButton.getValue() !== value) {
			this.libService.recordingButton.next(value);
		}
	}
}

/**
 * The **broadcastingButton** directive allows show/hide the start/stop broadcasting toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarBroadcastingButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [broadcastingButton]="false"></ov-toolbar>
 *
 */
 @Directive({
	selector: 'ov-videoconference[toolbarBroadcastingButton], ov-toolbar[broadcastingButton]'
})
export class ToolbarBroadcastingButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarBroadcastingButton(value: boolean) {
		this.broadcastingValue = value;
		this.update(this.broadcastingValue);
	}
	/**
	 * @ignore
	 */
	@Input() set broadcastingButton(value: boolean) {
		this.broadcastingValue = value;
		this.update(this.broadcastingValue);
	}
	private broadcastingValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.broadcastingValue);
	}

	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.broadcastingValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.broadcastingButton.getValue() !== value) {
			this.libService.broadcastingButton.next(value);
		}
	}
}

/**
 * The **fullscreenButton** directive allows show/hide the fullscreen toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarFullscreenButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [fullscreenButton]="false"></ov-toolbar>
 */
@Directive({
	selector: 'ov-videoconference[toolbarFullscreenButton], ov-toolbar[fullscreenButton]'
})
export class ToolbarFullscreenButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarFullscreenButton(value: boolean) {
		this.fullscreenValue = value;
		this.update(this.fullscreenValue);
	}
	/**
	 * @ignore
	 */
	@Input() set fullscreenButton(value: boolean) {
		this.fullscreenValue = value;
		this.update(this.fullscreenValue);
	}

	private fullscreenValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.fullscreenValue);
	}
	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.fullscreenValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.fullscreenButton.getValue() !== value) {
			this.libService.fullscreenButton.next(value);
		}
	}
}

/**
 * The **backgroundEffectsButton** directive allows show/hide the background effects toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarBackgroundEffectsButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [backgroundEffectsButton]="false"></ov-toolbar>
 */
 @Directive({
	selector: 'ov-videoconference[toolbarBackgroundEffectsButton], ov-toolbar[backgroundEffectsButton]'
})
export class ToolbarBackgroundEffectsButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarBackgroundEffectsButton(value: boolean) {
		this.backgroundEffectsValue = value;
		this.update(this.backgroundEffectsValue);
	}
	/**
	 * @ignore
	 */
	@Input() set backgroundEffectsButton(value: boolean) {
		this.backgroundEffectsValue = value;
		this.update(this.backgroundEffectsValue);
	}

	private backgroundEffectsValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.backgroundEffectsValue);
	}
	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.backgroundEffectsValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.backgroundEffectsButton.getValue() !== value) {
			this.libService.backgroundEffectsButton.next(value);
		}
	}
}

/**
 * The **captionsButton** directive allows show/hide the captions toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarCaptionsButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [captionsButton]="false"></ov-toolbar>
 */
 @Directive({
	selector: 'ov-videoconference[toolbarCaptionsButton], ov-toolbar[captionsButton]'
})
export class ToolbarCaptionsButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarCaptionsButton(value: boolean) {
		this.captionsButtonValue = value;
		this.update(this.captionsButtonValue);
	}
	/**
	 * @ignore
	 */
	@Input() set captionsButton(value: boolean) {
		this.captionsButtonValue = value;
		this.update(this.captionsButtonValue);
	}

	private captionsButtonValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.captionsButtonValue);
	}
	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.captionsButtonValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.captionsButton.getValue() !== value) {
			this.libService.captionsButton.next(value);
		}
	}
}

/**
 * The **settingsButton** directive allows show/hide the settings toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarSettingsButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [settingsButton]="false"></ov-toolbar>
 */
 @Directive({
	selector: 'ov-videoconference[toolbarSettingsButton], ov-toolbar[settingsButton]'
})
export class ToolbarSettingsButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarSettingsButton(value: boolean) {
		this.settingsValue = value;
		this.update(this.settingsValue);
	}
	/**
	 * @ignore
	 */
	@Input() set settingsButton(value: boolean) {
		this.settingsValue = value;
		this.update(this.settingsValue);
	}

	private settingsValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.settingsValue);
	}
	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.settingsValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.toolbarSettingsButton.getValue() !== value) {
			this.libService.toolbarSettingsButton.next(value);
		}
	}
}

/**
 * The **leaveButton** directive allows show/hide the leave toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarLeaveButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [leaveButton]="false"></ov-toolbar>
 */
@Directive({
	selector: 'ov-videoconference[toolbarLeaveButton], ov-toolbar[leaveButton]'
})
export class ToolbarLeaveButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarLeaveButton(value: boolean) {
		this.leaveValue = value;
		this.update(this.leaveValue);
	}
	/**
	 * @ignore
	 */
	@Input() set leaveButton(value: boolean) {
		this.leaveValue = value;
		this.update(this.leaveValue);
	}

	private leaveValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.leaveValue);
	}

	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.leaveValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.leaveButton.getValue() !== value) {
			this.libService.leaveButton.next(value);
		}
	}
}

/**
 * The **participantsPanelButton** directive allows show/hide the participants panel toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarParticipantsPanelButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [participantsPanelButton]="false"></ov-toolbar>
 */
@Directive({
	selector: 'ov-videoconference[toolbarParticipantsPanelButton], ov-toolbar[participantsPanelButton]'
})
export class ToolbarParticipantsPanelButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarParticipantsPanelButton(value: boolean) {
		this.participantsPanelValue = value;
		this.update(this.participantsPanelValue);
	}

	/**
	 * @ignore
	 */
	@Input() set participantsPanelButton(value: boolean) {
		this.participantsPanelValue = value;
		this.update(this.participantsPanelValue);
	}

	private participantsPanelValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.participantsPanelValue);
	}

	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.participantsPanelValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.participantsPanelButton.getValue() !== value) {
			this.libService.participantsPanelButton.next(value);
		}
	}
}

/**
 * The **chatPanelButton** directive allows show/hide the chat panel toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarChatPanelButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [chatPanelButton]="false"></ov-toolbar>
 */
@Directive({
	selector: 'ov-videoconference[toolbarChatPanelButton], ov-toolbar[chatPanelButton]'
})
export class ToolbarChatPanelButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarChatPanelButton(value: boolean) {
		this.toolbarChatPanelValue = value;
		this.update(this.toolbarChatPanelValue);
	}
	/**
	 * @ignore
	 */
	@Input() set chatPanelButton(value: boolean) {
		this.toolbarChatPanelValue = value;
		this.update(this.toolbarChatPanelValue);
	}
	private toolbarChatPanelValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.toolbarChatPanelValue);
	}

	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.toolbarChatPanelValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.chatPanelButton.getValue() !== value) {
			this.libService.chatPanelButton.next(value);
		}
	}
}

/**
 * The **activitiesPanelButton** directive allows show/hide the activities panel toolbar button.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarActivitiesPanelButton]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [activitiesPanelButton]="false"></ov-toolbar>
 *
 * @internal
 */
 @Directive({
	selector: 'ov-videoconference[toolbarActivitiesPanelButton], ov-toolbar[activitiesPanelButton]'
})
export class ToolbarActivitiesPanelButtonDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarActivitiesPanelButton(value: boolean) {
		this.toolbarActivitiesPanelValue = value;
		this.update(this.toolbarActivitiesPanelValue);
	}
	/**
	 * @ignore
	 */
	@Input() set activitiesPanelButton(value: boolean) {
		this.toolbarActivitiesPanelValue = value;
		this.update(this.toolbarActivitiesPanelValue);
	}
	private toolbarActivitiesPanelValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.toolbarActivitiesPanelValue);
	}

	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.toolbarActivitiesPanelValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.activitiesPanelButton.getValue() !== value) {
			this.libService.activitiesPanelButton.next(value);
		}
	}
}


/**
 * The **displaySessionName** directive allows show/hide the session name.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarDisplaySessionName]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [displaySessionName]="false"></ov-toolbar>
 */
@Directive({
	selector: 'ov-videoconference[toolbarDisplaySessionName], ov-toolbar[displaySessionName]'
})
export class ToolbarDisplaySessionNameDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarDisplaySessionName(value: boolean) {
		this.displaySessionValue = value;
		this.update(this.displaySessionValue);
	}
	/**
	 * @ignore
	 */
	@Input() set displaySessionName(value: boolean) {
		this.displaySessionValue = value;
		this.update(this.displaySessionValue);
	}

	private displaySessionValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.displaySessionValue);
	}

	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.displaySessionValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.displaySessionName.getValue() !== value) {
			this.libService.displaySessionName.next(value);
		}
	}
}

/**
 * The **displayLogo** directive allows show/hide the branding logo.
 *
 * Default: `true`
 *
 * It can be used in the parent element {@link VideoconferenceComponent} specifying the name of the `toolbar` component:
 *
 * @example
 * <ov-videoconference [toolbarDisplayLogo]="false"></ov-videoconference>
 *
 * \
 * And it also can be used in the {@link ToolbarComponent}.
 * @example
 * <ov-toolbar [displayLogo]="false"></ov-toolbar>
 */
@Directive({
	selector: 'ov-videoconference[toolbarDisplayLogo], ov-toolbar[displayLogo]'
})
export class ToolbarDisplayLogoDirective implements AfterViewInit, OnDestroy {
	/**
	 * @ignore
	 */
	@Input() set toolbarDisplayLogo(value: boolean) {
		this.displayLogoValue = value;
		this.update(this.displayLogoValue);
	}
	/**
	 * @ignore
	 */
	@Input() set displayLogo(value: boolean) {
		this.displayLogoValue = value;
		this.update(this.displayLogoValue);
	}

	private displayLogoValue: boolean = true;

	/**
	 * @ignore
	 */
	constructor(public elementRef: ElementRef, private libService: OpenViduAngularConfigService) {}

	ngAfterViewInit() {
		this.update(this.displayLogoValue);
	}

	ngOnDestroy(): void {
		this.clear();
	}
	private clear() {
		this.displayLogoValue = true;
		this.update(true);
	}

	private update(value: boolean) {
		if (this.libService.displayLogo.getValue() !== value) {
			this.libService.displayLogo.next(value);
		}
	}
}
