/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                blueCustom: '#1e40af',
                blueGlow: '#4b2ea2',
                blueDark: '#352075',
                primary: '#FFFFFF',
                delimiter: '#1260CC',
            },
            fontFamily: {
                'main': ['HK Grotesk Wide', 'sans'],
                'title': ['HK Grotesk Wide', 'sans'],
                'gkd': ['HK Grotesk Wide', 'sans'],
            },
            backgroundColor: {
                'primary-bg': '#070708',
                'secondary-bg': '#151515',
                'tertiary-bg': '#1E1E1E',
                'primary': '#FFFFFF',
                'secondary': '#9B51FF',
                'accent': '#FF8A51',
                'accent-2': '#FF8A51',
                'transparent': '#00000000',
                'success': '#51FF8A',
                'info': '#5197FF',
                'warning': '#FFD051',
                'error': '#FF4545',
                'delimiter': '#9B51FF99',
              },
              fontSize: {
                'xs': '10px',
                'sm': '12px',
                'md': '14px',
                'base': '16px',
                'lg': '18px',
                'xl': '20px',
                '2xl': '22px',
                '3xl': '24px',
                '4xl': '26px',
              },
              borderRadius: {
                'sm': '2px',
                'md': '4px',
                'base': '6px',
                'lg': '8px',
                'xl': '12px',
                '2xl': '16px',
                'full': '9999px',
              },
        },
    },
    plugins: [],
}
