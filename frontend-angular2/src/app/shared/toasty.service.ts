import { Injectable } from '@angular/core';
import { ToastyModule, ToastyService, ToastOptions, ToastyConfig, ToastData } from 'ng2-toasty';

@Injectable()
export class Toasty {

	title: string;

	constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
		this.toastyConfig.theme = 'material';
	}

	addToast(type, msg) {
		// Just add default Toast with title only

		if (type === 'error') {
			const title = 'Problemas';
		} else if (type === 'success') {
			const title = 'Tudo certo';
		}

		// Or create the instance of ToastOptions
		const toastOptions: ToastOptions = {
			title: this.title,
			msg: msg,
			showClose: true,
			timeout: 5000,
			onAdd: (toast: ToastData) => {
				if (toast.id - 1) {
					this.toastyService.clear(toast.id - 1);
				}
			}
		};

		switch (type) {
			case 'default': this.toastyService.default(toastOptions); break;
			case 'success': this.toastyService.success(toastOptions); break;
			case 'error': this.toastyService.error(toastOptions); break;
		}

	}

}
