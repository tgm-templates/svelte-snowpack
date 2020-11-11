const App = require("../src/App.svelte")
const {cleanup, render} = require('@testing-library/svelte');

test("App", () => {
    const {getByText} = render(App);
    const linkElement = getByText(/learn svelte/i);
    expect(linkElement).toBeInTheDocument();
})
