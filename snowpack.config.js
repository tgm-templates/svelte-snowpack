module.exports = {
    mount: {
        public: '/',
        src: '/_dist_',
    },
    plugins: [
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-dotenv',
        [
            '@snowpack/plugin-run-script',
            {cmd: 'svelte-check --output human', watch: '$1 --watch', output: 'stream'},
        ],
        ["@snowpack/plugin-webpack"]
    ],
    install: [
        /* ... */
    ],
    installOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
    proxy: {
        /* ... */
    },
    alias: {
        /* ... */
    },
};
