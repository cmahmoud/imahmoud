---
title: "Top 10 nuxt.js modules to use in your projects"
description: "Nuxt.js is open source javascript framework for creating wep applications, Nuxt owns many modules to help developers extend nuxt projects functionality."
category: "Nuxt"
cover: "/articles/top-nuxt-modules.png"
author: "Mahmoud Ibrahiam"
createdAt: "2022-12-09"
updatedAt: "2022-12-09"
layout: article
head:
  meta:
    - name: "keywords"
      content: "vue.js, nuxt.js, nuxt.js modules, nuxt, frontend"
---

Nuxt.js is framework for creating vue.js apps that can be developed in server side rendering **ssr** mode or single page application **spa**. Nuxt is built on top of vue.js, supercharged with some extra features such as plugins, modules, layouts and middlewares that run your application on the server side then client side. And this makes your application renders faster than other server side apps.

## What is nuxt modules?

Nuxt.js modules are simply top-level JavaScript functions that run when Nuxt application starts. Nuxt calls each module in turn, and waits for all modules to be executed before calling vue instances, plugins and global functions.

we can use modules to override templates, configure webpack and vite loaders, add css libraries, and do whatever else you need for your application.

let's discover top nuxt modules that you can use to supercharge your applications.

### 1. Nuxt Tailwind

This module help you setup tailwindcss in your nuxt apps with zero configuration, css nesting and tailwindcss viewer page.

::h4{.text-2xl id="nuxt-tailwindcss-setup"}
Installation
::

```shell
# yarn
yarn add -D @nuxtjs/tailwindcss

# npm
npm install --save-dev @nuxtjs/tailwindcss
```

add `@nuxtjs/tailwindcss` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
```

Now you can use tailwindcss in your application, You can see more configuration at [Nuxt Tailwindcss](https://tailwindcss.nuxtjs.org/){target="_blank"} website.

### 2. Pinia

[Pinia](https://pinia.vuejs.org/){target="_blank"} is state management library for vue apps, it useful for sharing state across your app components and pages.

::h4{.text-xl .!text-indigo-500 id="pinia-setup"}
Installation
::

```shell
# yarn
yarn add @pinia/nuxt

# npm
npm install @pinia/nuxt
```

add `@pinia/nuxt` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
    ]
})
```

Now you can use pinia and create your state store, see [documentation](https://pinia.vuejs.org/ssr/nuxt.html){target="_blank"} for other configuration.
