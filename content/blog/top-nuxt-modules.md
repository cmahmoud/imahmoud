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

You can see more configuration at [Nuxt Tailwindcss](https://tailwindcss.nuxtjs.org/){target="_blank"} documentation website.

### 2. Nuxt Content

[Nuxt Content](https://content.nuxtjs.org/){target="_blank"} is file based cms for nuxt apps and come with many features such as **mdc syntax** that let you use vue components in markdown, **query builder** to query content in any part of your application and **code highlighting**.

::h4{.text-xl .!text-indigo-500 id="nuxt-content-setup"}
Installation
::

```shell
# yarn
yarn add -D @nuxt/content

# npm
npm install --save-dev @nuxt/content
```

add `@nuxt/content` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
    ]
})
```

You can learn more on [Nuxt Content](https://content.nuxtjs.org/get-started){target="_blank"} documentation website.

### 3. Nuxt Image

[Nuxt Image](https://v1.image.nuxtjs.org/get-started/){target="_blank"} is module for optimizing and generating responsive images in nuxt apps, It's optimize using modern formats and support many image providers.

::h4{.text-xl .!text-indigo-500 id="nuxt-image-setup"}
3.1 Installation
::

```shell
# yarn
yarn add -D @nuxt/image-edge

# npm
npm install --save-dev @nuxt/image-edge
```

add `@nuxt/image-edge` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        '@nuxt/image-edge',
    ]
})
```

::h4{.text-xl .!text-indigo-500 id="nuxt-image-usage"}
3.2 Usage
::

Nuxt Image have two components: `nuxt-img` and `nuxt-picture`

```vue
<template>
    <nuxt-img src="/img.png" />
    <nuxt-picture src="/picture.png"/>
</template>
```

You can see more on [Nuxt Image](https://v1.image.nuxtjs.org/get-started/){target="_blank"}.

### 4. Nuxt Svgo

[Nuxt Svgo](https://github.com/cpsoinos/nuxt-svgo){target="_blank"} is module for loading optimized svg files as vue components.

::h4{.text-xl .!text-indigo-500 id="nuxt-svgo-setup"}
4.1 Installation
::

```shell
# yarn
yarn add -D nuxt-svgo

# npm
npm install --save-dev nuxt-svgo
```

add `nuxt-svgo` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        'nuxt-svgo',
    ]
})
```

::h4{.text-xl .!text-indigo-500 id="nuxt-svgo-usage"}
4.2 Usage
::

```vue
<script setup>
import Icon from '~/assets/icon.svg'
</script>

<template>
  <div>
    <Icon class="" style="" />
  </div>
</template>
```

You can see more configuration on [Nuxt Svgo](https://github.com/cpsoinos/nuxt-svgo){target="_blank"}.

### 5. Nuxt Color Mode

[Nuxt Color Mode](https://color-mode.nuxtjs.org/){target="_blank"} is module to switch between light and dark modes with auto detection for system color mode.

::h4{.text-xl .!text-indigo-500 id="nuxt-color-setup"}
Installation
::

```shell
# yarn
yarn add -D @nuxtjs/color-mode

# npm
npm install --save-dev @nuxtjs/color-mode
```

add `@nuxtjs/color-mode` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
    ]
})
```

You can reed more on [Nuxt Color Mode](https://color-mode.nuxtjs.org/){target="_blank"}.

### 6. Nuxt Auth

[Nuxt Auth](https://sidebase.io/nuxt-auth/getting-started){target="_blank"} is module that provide authentication for Nuxt 3 apps and it support three types of auth:

1. **OAuth**: Authentication with third party providers like google and github.
2. **Credentials**: Authentication with username and password.
3. **Emails**: Authentication via emails, like Slack or Notion.

::h4{.text-xl .!text-indigo-500 id="nuxt-auth-setup"}
Installation
::

```shell
# yarn
yarn add -D @sidebase/nuxt-auth

# npm
npm install --save-dev @sidebase/nuxt-auth
```

add `@sidebase/nuxt-auth` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        '@sidebase/nuxt-auth',
    ]
})
```

You can reed more on [Nuxt Auth](https://sidebase.io/nuxt-auth/getting-started){target="_blank"}.

### 7. Nuxt Viewport

[Nuxt Viewport](https://github.com/mvrlin/nuxt-viewport){target="_blank"} is module that let you define custom viewports for your nuxt application with zero configuration.

::h4{.text-xl .!text-indigo-500 id="nuxt-viewport-setup"}
7.1 Installation
::

```shell
# yarn
yarn add -D nuxt-viewport

# npm
npm install --save-dev nuxt-viewport
```

add `nuxt-viewport` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        'nuxt-viewport',
    ]
})
```

::h4{.text-xl .!text-indigo-500 id="nuxt-viewport-usage"}
7.2 Usage
::

```vue
<script setup>
import { useNuxtApp } from '#app'
const { $viewport } = useNuxtApp()
</script>
<template>
  <div>
    <div v-if="$viewport.isLessThan('tablet')">render only on mobile</div>
    <div v-else>Current breakpoint: {{ $viewport.breakpoint }}</div>
  </div>
</template>
```

You can reed more on [Nuxt Viewport](https://github.com/mvrlin/nuxt-viewport){target="_blank"}.

### 8. Nuxt Icon

[Nuxt Icon](https://github.com/nuxt-modules/icon){target="_blank"} is module with over 100,000  open source vector icons from [iconify](https://iconify.design/) to use in nuxt apps.

::h4{.text-xl .!text-indigo-500 id="nuxt-icon-setup"}
8.1 Installation
::

```shell
# yarn
yarn add -D nuxt-icon

# npm
npm install --save-dev nuxt-icon
```

add `nuxt-icon` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        'nuxt-icon',
    ]
})
```

::h4{.text-xl .!text-indigo-500 id="nuxt-viewport-usage"}
8.2 Usage
::

You can use any icon from the [icones.js](https://icones.js.org/) collection by name:

```vue
<template>
  <Icon name="fa6-solid:0" />
</template>
```

You can reed more on [Nuxt Icon](https://github.com/nuxt-modules/icon){target="_blank"}.

### 9. Nuxt I18n

Internationalization (i18n) is the process of preparing software to support local language and cultural preferences.

[Nuxt I18n](https://v8.i18n.nuxtjs.org/){target="_blank"} is module for adding internationalization to nuxt projects with easily configuration.

::h4{.text-xl .!text-indigo-500 id="nuxt-i18n-setup"}
Installation
::

```shell
# yarn
yarn add -D @nuxtjs/i18n

# npm
npm install --save-dev @nuxtjs/i18n
```

add `@nuxtjs/i18n` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
    ]
})
```

You can reed more on [Nuxt I18n](https://v8.i18n.nuxtjs.org/){target="_blank"}.

### 10. Nuxt Lodash

[Nuxt Lodash](https://github.com/cipami/nuxt-lodash#readme){target="_blank"} is module that provide [lodash](https://lodash.com/) library for nuxt projects with auto import and custom prefix.

::h4{.text-xl .!text-indigo-500 id="nuxt-lodash-setup"}
Installation
::

```shell
# yarn
yarn add -D nuxt-lodash

# npm
npm install --save-dev nuxt-lodash
```

add `nuxt-lodash` to `modules` in `next.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        'nuxt-lodash',
    ]
})
```

You can reed more on [Nuxt lodash](https://github.com/cipami/nuxt-lodash#readme){target="_blank"}.

There are many other modules that you can use to improve and extend your Nuxt projects and you can find them on [Nuxt official website](https://nuxt.com/modules) or by search in [npm packages](https://www.npmjs.com/search?q=keywords:nuxt).
