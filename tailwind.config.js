const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./layouts/**/*.vue"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
                mono: ["DM Mono", ...defaultTheme.fontFamily.mono],
            },
            colors: {
                primary: {
                    50: "#F7F5FE",
                    100: "#EFEAFD",
                    200: "#D7CBFA",
                    300: "#BFABF7",
                    400: "#8F6DF0",
                    500: "#5F2EEA",
                    600: "#5629D3",
                    700: "#391C8C",
                    800: "#2B1569",
                    900: "#1D0E46",
                },
                accent: {
                    50: "#F4FCFE",
                    100: "#E8FAFD",
                    200: "#C6F1FB",
                    300: "#A4E9F8",
                    400: "#60D9F3",
                    500: "#1CC8EE",
                    600: "#19B4D6",
                    700: "#11788F",
                    800: "#0D5A6B",
                    900: "#083C47",
                },
                error: {
                    50: "#FEF5F9",
                    100: "#FDEAF2",
                    200: "#FBCBDF",
                    300: "#F8ABCB",
                    400: "#F26DA5",
                    500: "#ED2E7E",
                    600: "#D52971",
                    700: "#8E1C4C",
                    800: "#6B1539",
                    900: "#470E26",
                },
                success: {
                    50: "#F2FCF9",
                    100: "#E6F8F3",
                    200: "#BFEEE1",
                    300: "#99E3CF",
                    400: "#4DCFAC",
                    500: "#00BA88",
                    600: "#00A77A",
                    700: "#007052",
                    800: "#00543D",
                    900: "#003829",
                },
                warning: {
                    50: "#FEFBF5",
                    100: "#FEF8EC",
                    200: "#FCEDCF",
                    300: "#FBE2B3",
                    400: "#F7CD79",
                    500: "#F4B740",
                    600: "#DCA53A",
                    700: "#926E26",
                    800: "#6E521D",
                    900: "#493713",
                },
                dark: {
                    50: "#F4F4F4",
                    100: "#E8E8E8",
                    200: "#C6C6C6",
                    300: "#A3A3A3",
                    400: "#5E5E5E",
                    500: "#191919",
                    600: "#171717",
                    700: "#0F0F0F",
                    800: "#0B0B0B",
                    900: "#080808",
                },
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        "code::before": false,
                        "code::after": false,
                    },
                },
                dark: {
                    css: {
                        "--tw-prose-body": "#0B0B0B",
                        "--tw-prose-headings": "#080808",
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
