import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { LayoutClass } from '../../models/layout.model';

/**
 * @internal
 */
@Injectable({
	providedIn: 'root'
})
export class DocumentService {
	screenSizeObs: Observable<MediaChange[]>;

	constructor(private media: MediaObserver) {
		this.screenSizeObs = this.media.asObservable();
	}

	toggleFullscreen(elementId: string) {
		const document: any = window.document;
		const fs = document.getElementById(elementId);
		if (
			!document.fullscreenElement &&
			!document.mozFullScreenElement &&
			!document.webkitFullscreenElement &&
			!document.msFullscreenElement
		) {
			if (fs.requestFullscreen) {
				fs.requestFullscreen();
			} else if (fs.msRequestFullscreen) {
				fs.msRequestFullscreen();
			} else if (fs.mozRequestFullScreen) {
				fs.mozRequestFullScreen();
			} else if (fs.webkitRequestFullscreen) {
				fs.webkitRequestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
		}
	}

	isSmallElement(element: HTMLElement | Element): boolean {
		return element?.className.includes(LayoutClass.SMALL_ELEMENT);
	}
}
