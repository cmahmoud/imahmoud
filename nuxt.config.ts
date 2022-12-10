// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image-edge"],
    content: {
        watch: {
            ws: {
                hostname: "localhost",
            },
        },
        highlight: {
            theme: {
                default: "one-dark-pro",
                dark: "one-dark-pro",
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
                "bash",
                "shell",
                "sh",
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
                {
                    name: "keywords",
                    content:
                        "frontend, mern stack, mern, vue.js, nuxt, react.js, next.js, html,css,javscript, tailwindcss",
                },
                {
                    name: "description",
                    content:
                        "Experienced Full Stack Developer with over 1 year of experience in Web development using Node.js, Express.js, MongoDB, React.js and Redux",
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:url",
                    content: "https://imahmoud.vercel.app/",
                },
                {
                    property: "og:title",
                    content: "Mahmoud Ibrahiam",
                },
                {
                    property: "og:description",
                    content:
                        "Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages.",
                },
                {
                    property: "og:image",
                    content: "https://imahmoud.vercel.app/images/cover.png",
                },
                {
                    property: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    property: "twitter:url",
                    content: "https://imahmoud.vercel.app/",
                },
                {
                    property: "twitter:title",
                    content: "Mahmoud Ibrahiam",
                },
                {
                    property: "twitter:description",
                    content:
                        "Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages.",
                },
                {
                    property: "twitter:image",
                    content: "https://imahmoud.vercel.app/images/cover.png",
                },
            ],
            link: [
                {
                    rel: "icon",
                    href: "/favicon/48.png",
                    type: "image/png",
                    sizes: "48x48",
                },
                {
                    rel: "icon",
                    href: "/favicon/192.png",
                    type: "image/png",
                    sizes: "192x192",
                },
                {
                    rel: "shortcut icon",
                    href: "/favicon/192.png",
                    type: "image/png",
                    sizes: "192x192",
                },
                {
                    rel: "icon",
                    href: "/favicon/favicon.svg",
                    type: "image/svg+xml",
                    sizes: "any",
                },
                {
                    rel: "apple-touch-icon",
                    href: "/favicon/180.png",
                    sizes: "any",
                },
                {
                    rel: "mask-icon",
                    href: "/images/mask.png",
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
