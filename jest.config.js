let config = {...require("@snowpack/app-scripts-svelte/jest.config.js")()};

//override
config.testMatch = [];
config.transform = {
    '^.+\\.svelte$': 'svelte-jester',
    "^.+\\.(ts|tsx)$": "ts-jest"
};

module.exports = {
    ...config
};
