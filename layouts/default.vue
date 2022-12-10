<template>
    <div class="flex h-screen flex-col">
        <Navbar />
        <div class="wrapper">
            <main class="flex w-full flex-col gap-4 lg:w-2/3">
                <slot />
            </main>
            <aside class="flex w-full flex-col gap-4 lg:w-1/3">
                <SidebarNewsletter />
            </aside>
        </div>
        <BlogFooter />
    </div>
</template>
