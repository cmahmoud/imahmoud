<script setup>
const route = useRoute();
const article = await queryContent().where({ _path: route.path }).findOne();
useHead({
    meta: [
        {
            property: "og:type",
            content: "article",
        },
        {
            property: "og:url",
            content: `https://imahmoud.vercel.app/${article._path}`,
        },
        {
            property: "og:title",
            content: article.title,
        },
        {
            property: "og:description",
            content: article.description,
        },
        {
            property: "og:image",
            content: `https://imahmoud.vercel.app${article.cover}`,
        },
        {
            property: "twitter:url",
            content: `https://imahmoud.vercel.app/${article._path}`,
        },
        {
            property: "twitter:title",
            content: article.title,
        },
        {
            property: "twitter:description",
            content: article.description,
        },
        {
            property: "twitter:image",
            content: `https://imahmoud.vercel.app${article.cover}`,
        },
    ],
});
</script>

<template>
    <div>
        <NuxtLayout name="article">
            <article class="card article prose prose-dark max-w-full">
                <ContentDoc v-slot="{ doc }" :head="true">
                    <h1>{{ doc.title }}</h1>
                    <header
                        class="mb-6 flex justify-between border-y border-gray-200 py-1"
                    >
                        <div class="flex flex-col">
                            <div class="post__author">
                                {{ doc.author }}
                            </div>
                            <div class="post__meta">
                                <time
                                    :datetime="$moment(doc.createdAt).format()"
                                >
                                    {{
                                        $moment(doc.createdAt).format(
                                            "MMM DD, YYYY"
                                        )
                                    }},
                                </time>
                                <span>{{ doc.readingTime.text }}</span>
                            </div>
                        </div>
                        <div class="post__category">
                            {{ doc.category }}
                        </div>
                    </header>
                    <ContentRenderer :value="doc" />
                    <pre>{{ page }}</pre>
                </ContentDoc>
            </article>
        </NuxtLayout>
    </div>
</template>
