import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Warning from '../components/Warning';

function MyApp({ Component, pageProps }: AppProps) {
	const closeWaring = (): void => {
		setShowWarning(false);
		localStorage.setItem('RGBDLE_LAST_IGNORED_WARNING', process.env.NEXT_PUBLIC_WARNING!);
	};

	// Whether the `Warning` component is visible.
	const [showWarning, setShowWarning] = useState(false);
	// The warning message to display.
	const [warningMessage, setWarningMessage] = useState('');

	/* Opening Warning if needed */
	if (process.env.NEXT_PUBLIC_WARNING && process.env.NEXT_PUBLIC_WARNING_MESSAGE) {
		const lastIgnored = localStorage.getItem('RGBDLE_LAST_IGNORED_WARNING') || '';
		if (lastIgnored !== process.env.NEXT_PUBLIC_WARNING) {
			setShowWarning(true);
			setWarningMessage(process.env.NEXT_PUBLIC_WARNING_MESSAGE);
		}
	}


	return (
		<>
			<Warning
				close={closeWaring}
				displayed={showWarning}
				message={warningMessage}
			/>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
