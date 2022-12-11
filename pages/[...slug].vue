<script>
useHead({
    meta: [
        {
            name: "robots",
            content: "index,follow",
        },
        {
            name: "googlebot",
            content: "follow",
        },
    ],
});
</script>

<template>
    <div>
        <NuxtLayout name="article">
            <article
                class="card article prose prose-dark max-w-full prose-h1:text-center"
            >
                <ContentDoc />
            </article>
        </NuxtLayout>
    </div>
</template>
