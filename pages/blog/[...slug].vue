<template>
    <div>
        <NuxtLayout name="article">
            <article class="card article prose prose-dark max-w-full">
                <ContentDoc v-slot="{ doc }">
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
                </ContentDoc>
            </article>
        </NuxtLayout>
    </div>
</template>
