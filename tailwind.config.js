module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary-dark': '#12130f',
                'emerald': '#5B9279',
                'eton-blue': '#8FCB9B',
                'primary-light': '#EAE6E5',
                'mid-grey': '8F8073'
            },
            boxShadow: {
                'offset-primary-dark': '2px 2px #12130f',
                '-offset-primary-dark': '-2px -2px #12130f',
                'offset-emerald': '2px 2px #5B9279',
                '-offset-emerald': '-2px -2px #5B9279',
                'offset-eton-blue': '2px 2px #8FCB9B',
                '-offset-eton-blue': '-2px -2px #8FCB9B',
                'offset-primary-light': '2px 2px #EAE6E5',
                '-offset-primary-light': '-2px -2px #EAE6E5',
                'offset-mid-grey': '2px 2px #8F8073',
                '-offset-mid-grey': '-2px -2px #8F8073',

                'offset-black': '2px 2px black',
                '-offset-black': '-2px -2px black',
                'offset-red': '2px 2px red',
                '-offset-red': '-2px -2px red',
                'offset-orange': '2px 2px orange',
                '-offset-orange': '-2px -2px orange',
                'offset-yellow': '2px 2px yellow',
                '-offset-yellow': '-2px -2px yellow',
                'offset-lightgreen': '2px 2px lightgreen',
                '-offset-lightgreen': '-2px -2px lightgreen',
                'offset-darkgreen': '2px 2px darkgreen',
                '-offset-darkgreen': '-2px -2px darkgreen',
                'offset-cyan': '2px 2px cyan',
                '-offset-cyan': '-2px -2px cyan',
                'offset-lightblue': '2px 2px lightblue',
                '-offset-lightblue': '-2px -2px lightblue',
                'offset-darkblue': '2px 2px darkblue',
                '-offset-darkblue': '-2px -2px darkblue',
                'offset-indigo': '2px 2px indigo',
                '-offset-indigo': '-2px -2px indigo',
                'offset-purple': '2px 2px purple',
                '-offset-purple': '-2px -2px purple',
                'offset-white': '2px 2px white',
                '-offset-white': '-2px -2px white',

                'offset-active-black': '5px 5px black',
                '-offset-active-black': '-5px -5px black',
                'offset-active-red': '5px 5px red',
                '-offset-active-red': '-5px -5px red',
                'offset-active-orange': '5px 5px orange',
                '-offset-active-orange': '-5px -5px orange',
                'offset-active-yellow': '5px 5px yellow',
                '-offset-active-yellow': '-5px -5px yellow',
                'offset-active-lightgreen': '5px 5px lightgreen',
                '-offset-active-lightgreen': '-5px -5px lightgreen',
                'offset-active-darkgreen': '5px 5px darkgreen',
                '-offset-active-darkgreen': '-5px -5px darkgreen',
                'offset-active-cyan': '5px 5px cyan',
                '-offset-active-cyan': '-5px -5px cyan',
                'offset-active-lightblue': '5px 5px lightblue',
                '-offset-active-lightblue': '-5px -5px lightblue',
                'offset-active-darkblue': '5px 5px darkblue',
                '-offset-active-darkblue': '-5px -5px darkblue',
                'offset-active-indigo': '5px 5px indigo',
                '-offset-active-indigo': '-5px -5px indigo',
                'offset-active-purple': '5px 5px purple',
                '-offset-active-purple': '-5px -5px purple',
                'offset-active-white': '5px 5px white',
                '-offset-active-white': '-5px -5px white',

                'offset-active-primary-dark': '5px 5px #12130f',
                '-offset-active-primary-dark': '-5px -5px #12130f',
                'offset-active-emerald': '5px 5px #5B9279',
                '-offset-active-emerald': '-5px -5px #5B9279',
                'offset-active-eton-blue': '5px 5px #8FCB9B',
                '-offset-active-eton-blue': '-5px -5px #8FCB9B',
                'offset-active-primary-light': '5px 5px #EAE6E5',
                '-offset-active-primary-light': '-5px -5px #EAE6E5',
                'offset-active-mid-grey': '5px 5px #8F8073',
                '-offset-active-mid-grey': '-5px -5px #8F8073',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
