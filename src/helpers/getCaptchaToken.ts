'use client';

declare global {
	interface Window {
		grecaptcha: {
			ready(callback: () => void): void;
			execute(siteKey: string, options: { action: string }): Promise<string>;
		};
	}
}

export const getCaptchaToken = async (): Promise<string | null> => {
	return new Promise((resolve) => {
		try {
			if (
				typeof window === 'undefined' ||
				!window.grecaptcha ||
				typeof window.grecaptcha.ready !== 'function'
			) {
				console.warn('reCAPTCHA not ready or missing');
				resolve(null);
				return;
			}

			window.grecaptcha.ready(async () => {
				try {
					const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;
					if (!siteKey) {
						console.warn('Missing reCAPTCHA site key');
						resolve(null);
						return;
					}

					const token = await window.grecaptcha.execute(siteKey, {
						action: 'lilysangels',
					});
					resolve(token);
				} catch (err) {
					console.error('Error executing reCAPTCHA:', err);
					resolve(null);
				}
			});
		} catch (err) {
			console.error('Error initializing reCAPTCHA:', err);
			resolve(null);
		}
	});
};
