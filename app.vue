<template>
    <NuxtLoadingIndicator color="#4338ca" :duration="Number(2000)" />
    <NuxtPage />
</template>
<style>
.layout-enter-active,
.layout-leave-active {
    transition: all 0.2s;
}
.layout-enter-from,
.layout-leave-to {
    filter: blur(1rem);
}
</style>
