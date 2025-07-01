export const verifyCaptchaToken = async (token: string) => {
	const secretKey = process.env.CAPTCHA_SECRET_KEY;

	if (!secretKey) {
		throw new Error('No Secret Key Found');
	}

	const url = new URL('https://www.google.com/recaptcha/api/siteverify');

	url.searchParams.append('secret', secretKey);

	url.searchParams.append('response', token);

	const res = await fetch(url, { method: 'POST' });
	const captchaData: CaptchaData = await res.json();

	if (!res.ok) return null;

	return captchaData;
};

type CaptchaData =
	| {
			success: true;
			challenge_ts: string;
			hostname: string;
			score: number;
			action: string;
	  }
	| {
			success: false;
			'error-codes': string[];
	  };
