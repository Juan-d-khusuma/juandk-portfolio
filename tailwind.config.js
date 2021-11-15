module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'brand': ['\"Changa\"', 'sans-serif'],
                'nunito': ['\"Nunito\"', 'sans-serif'],
            },
            colors: {
                'primary-dark': '#000000',
                'primary-light': '#FFFFFF',
                'secondary-light': '#03C4A1',
                'secondary-dark': '#590995',
                'accent-light': "#49FF00",
                'accent-dark': "#C62A88",
            },
            boxShadow: {
                'offset-primary-dark': '2px 2px #000000',
                '-offset-primary-dark': '-2px -2px #000000',
                'offset-secondary-light': '2px 2px #5B9279',
                '-offset-secondary-light': '-2px -2px #5B9279',
                'offset-secondary-dark': '2px 2px #8FCB9B',
                '-offset-secondary-dark': '-2px -2px #8FCB9B',
                'offset-primary-light': '2px 2px #EAE6E5',
                '-offset-primary-light': '-2px -2px #EAE6E5',
                'offset-accent-light': '2px 2px #49FF00',
                '-offset-accent-light': '-2px -2px #49FF00',
                'offset-accent-dark': '2px 2px #C62A88',
                '-offset-accent-dark': '-2px -2px #C62A88',

                'offset-active-primary-dark': '5px 5px #000000',
                '-offset-active-primary-dark': '-5px -5px #000000',
                'offset-active-primary-light': '5px 5px #FFFFFF',
                '-offset-active-primary-light': '-5px -5px #FFFFFF',
                'offset-active-secondary-light': '5px 5px #5B9279',
                '-offset-active-secondary-light': '-5px -5px #5B9279',
                'offset-active-secondary-dark': '5px 5px #8FCB9B',
                '-offset-active-secondary-dark': '-5px -5px #8FCB9B',
                'offset-active-primary-light': '5px 5px #EAE6E5',
                '-offset-active-primary-light': '-5px -5px #EAE6E5',
                'offset-active-accent-light': '5px 5px #49FF00',
                '-offset-active-accent-light': '-5px -5px #49FF00',
                'offset-active-accent-dark': '5px 5px #C62A88',
                '-offset-active-accent-dark': '-5px -5px #C62A88',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
