import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { StreamManager } from 'openvidu-browser';
import { VideoType } from '../../models/video-type.model';

/**
 * @internal
 */
@Component({
	selector: 'ov-video',
	template: ` <video class="OT_video-element" #videoElement [muted]="mutedSound"></video> `,
	styleUrls: ['./video.component.css']
})
export class VideoComponent implements AfterViewInit {
	@Input() mutedSound: boolean;
	@Input() participantId: string;
	_streamManager: StreamManager;
	_videoElement: ElementRef;
	type: VideoType = VideoType.CAMERA;

	ngAfterViewInit() {
		setTimeout(() => {
			if (this._streamManager && this._videoElement) {
				this.updateVideoStyles();
				this._streamManager.addVideoElement(this._videoElement.nativeElement);
			}
		});
	}

	@ViewChild('videoElement', { static: false })
	set videoElement(element: ElementRef) {
		this._videoElement = element;
	}

	@Input()
	set streamManager(streamManager: StreamManager) {
		if (streamManager) {
			this._streamManager = streamManager;
			if (!!this._videoElement && this._streamManager) {
				this.updateVideoStyles();
				this._streamManager.addVideoElement(this._videoElement.nativeElement);
			}
		}
	}

	private updateVideoStyles() {
		this.type = <VideoType>this._streamManager?.stream?.typeOfVideo;
		if (this.type === VideoType.SCREEN) {
			this._videoElement.nativeElement.style.objectFit = 'contain';
			this._videoElement.nativeElement.classList.add('screen-type');
			this._videoElement.nativeElement.id =`video-screen-${this.participantId}`;
		} else {
			this._videoElement.nativeElement.style.objectFit = 'cover';
			this._videoElement.nativeElement.classList.add('camera-type');
			this._videoElement.nativeElement.id = `video-camera-${this.participantId}`;
		}
	}
}
