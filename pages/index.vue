<script setup lang="ts">
useHead({
    title: "Mahmoud Ibrahiam",
    meta: [{ name: "description", content: "My amazing site." }],
});
const query = {
    sort: { createdAt: -1 },
};
</script>

<template>
    <div>
        <NuxtLayout>
            <ContentList :query="query" path="/blog">
                <template v-slot="{ list }">
                    <article
                        v-for="article in list"
                        :key="article._path"
                        class="card post__card"
                    >
                        <h2 class="post__title">
                            <NuxtLink :to="article._path">
                                {{ article.title }}
                            </NuxtLink>
                        </h2>
                        <header class="flex justify-between py-1">
                            <div class="flex flex-col">
                                <h3 class="post__author">
                                    {{ article.author }}
                                </h3>
                                <div class="post__meta">
                                    <time
                                        :datetime="
                                            $moment(article.createdAt).format()
                                        "
                                    >
                                        {{
                                            $moment(article.createdAt).format(
                                                "MMM DD, YYYY"
                                            )
                                        }},
                                    </time>
                                    <span>{{ article.readingTime.text }}</span>
                                </div>
                            </div>
                            <h4 class="post__category">
                                {{ article.category }}
                            </h4>
                        </header>
                        <footer class="pt-4">
                            <p class="font-medium text-gray-500">
                                {{ article.description }}
                            </p>
                        </footer>
                    </article>
                </template>
            </ContentList>
        </NuxtLayout>
    </div>
</template>
