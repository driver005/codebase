const path = require("path")

const uiPath = path.resolve(
    require.resolve("@medusajs/ui"),
    "../..",
    "\*_/_.{js,jsx,ts,tsx}"
)


module.exports = {
    presets: [require("@medusajs/ui-preset")],
    content: [
        uiPath,
        "./**/*.{js,ts,jsx,tsx,mdx}}",
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
};
