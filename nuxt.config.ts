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
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "anonymous",
                },
                {
                    rel: "preload",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preload",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "anonymous",
                },
                {
                    rel: "dns-prefetch",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "dns-prefetch",
                    href: "https://fonts.gstatic.com",
                },
                {
                    rel: "preload",
                    as: "style",
                    href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap",
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
