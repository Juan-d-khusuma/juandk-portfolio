module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                'offset-black': '2px 2px black',
                'offset-gray': '2px 2px black',
                'offset-red': '2px 2px black',
                'offset-orange': '2px 2px black',
                'offset-yellow': '2px 2px black',
                'offset-green': '2px 2px black',
                'offset-blue': '2px 2px black',
                'offset-indigo': '2px 2px black',
                'offset-purple': '2px 2px black',
                'offset-white': '2px 2px white',
                'offset-active-black': '5px 5px black',
                'offset-active-gray': '5px 5px black',
                'offset-active-red': '5px 5px black',
                'offset-active-orange': '5px 5px black',
                'offset-active-yellow': '5px 5px black',
                'offset-active-green': '5px 5px black',
                'offset-active-blue': '5px 5px black',
                'offset-active-indigo': '5px 5px black',
                'offset-active-purple': '5px 5px black',
                'offset-active-white': '5px 5px white',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
