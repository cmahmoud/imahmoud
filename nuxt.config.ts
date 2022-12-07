// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-svgo"],
    css: [],
    webpack: {
        extractCSS: {
            ignoreOrder: true,
            filname: "[name].css",
            chunkFilename: "[id].css",
        },
        optimizeCSS: true,
    },
    content: {
        watch: {
            ws: {
                hostname: "localhost",
            },
        },
        highlight: {
            theme: {
                default: "one-dark-pro",
                dark: "github-dark",
                sepia: "one-dark-pro",
            },
            preload: [
                "js",
                "jsx",
                "ts",
                "vue",
                "vue-html",
                "css",
                "sass",
                "scss",
                "python",
            ],
        },
        markdown: {
            toc: {
                depth: 5,
                searchDepth: 5,
            },
            mdc: true,
            remarkPlugins: ["remark-reading-time"],
        },
        documentDriven: true,
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
                dir: "ltr",
            },
            title: "Mahmoud Ibrahiam",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "google-site-verification",
                    content: "l6n-HRCEV5jy0z4F-ckQDj6bNns0O5RmeVICDnCbEzE",
                },
            ],
            link: [
                {
                    rel: "icon",
                    href: "/logo.svg",
                    sizes: "any",
                    type: "image/svg+xml",
                },
                {
                    rel: "preload",
                    as: "style",
                    href: "/css/dank-mono.min.css",
                },
                {
                    rel: "preload",
                    as: "style",
                    href: "/css/montserrat.min.css",
                },
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "/css/dank-mono.min.css",
                },
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "/css/montserrat.min.css",
                },
            ],
        },
        layoutTransition: { name: "layout", mode: "out-in" },
    },
    runtimeConfig: {
        apiKey: process.env.NUXT_API_KEY,
    },
    nitro: {
        prerender: {
            routes: ["/sitemap.xml"],
        },
    },
});
