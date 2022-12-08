// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-svgo"],
    css: [],
    webpack: {
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
            script: [
                {
                    src: "/sw.js",
                    defer: "true",
                },
            ],
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
                {
                    name: "theme-color",
                    content: "#4338ca",
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
                    rel: "mask-icon",
                    href: "/logo.svg",
                    sizes: "any",
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
                {
                    rel: "apple-touch-icon",
                    href: "/logo.svg",
                    sizes: "any",
                },
                {
                    rel: "manifest",
                    href: "/manifest.json",
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
