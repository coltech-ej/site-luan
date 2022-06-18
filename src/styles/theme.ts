import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		gray: {
      700: '#222221',
			500: '#252734',
      300: '#cccccc',
			400: '#b4b4b4',
			100: '#F1F1F1',
		},
		white: '#FFFFFF',
		orange: '#F27F02',
	},
	fonts: {
		body: 'Poppins',
		heading: 'Poppins',
	},
	styles: {
		global: {
			body: {
				bg: 'gray.700',
				color: 'white',
			},
		},
	},
});