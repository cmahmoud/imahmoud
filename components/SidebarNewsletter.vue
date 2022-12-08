<script>
export default {
    data() {
        return {
            response: null,
            loading: false,
        };
    },
    methods: {
        async subscribeNewsletter(e) {
            this.loading = true;
            const { data: message } = await useFetch("/api/subscribe", {
                method: "POST",
                body: { email: e.target.email.value },
            });
            this.response = message;
            this.loading = false;
        },
    },
};
</script>

<template>
    <section class="rounded-lg bg-indigo-600 p-6 shadow-md">
        <h3 class="mb-4 text-center text-3xl font-bold text-white">
            Subscribe<br />my newsletter
        </h3>
        <p class="mb-8 text-center text-sm font-medium text-white">
            Subscribe to my newsletter to receive all articles directly in your
            email inbox weekly.
        </p>
        <Transition name="newsletter">
            <div
                @click="this.response = null"
                v-if="response"
                class="mb-2 cursor-pointer rounded-md bg-indigo-500 p-3 text-xs font-medium text-indigo-100 transition-all"
            >
                {{ response.message }}
            </div>
        </Transition>
        <form class="flex flex-col gap-4" @submit.prevent="subscribeNewsletter">
            <input
                name="email"
                type="email"
                placeholder="email@website.com"
                class="rounded-md px-4 py-3 focus:outline-none"
                required
            />
            <button
                class="grid h-12 place-items-center rounded-md bg-indigo-500 font-medium text-white"
            >
                <svg
                    v-if="loading"
                    class="h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
                <span v-else>Subscribe</span>
            </button>
        </form>
    </section>
</template>
<style scoped>
.newsletter-enter-active,
.newsletter-leave-active {
    transition: opacity 0.5s ease;
}

.newsletter-enter-from,
.newsletter-leave-to {
    opacity: 0;
}
</style>
