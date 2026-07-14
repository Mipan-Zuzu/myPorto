<script setup lang="ts">

const url = "https://skillicons.dev/icons?i="

const stacks = ["VueJs", "Golang", "React", "Express", "TypeScript", "Redis", "MongoDB", "Postgres", "CloudFlare", "docker", "pinia", "redux"]

</script>

<template>
    <div class="grid grid-cols-2 mt-10 gap-2 md:grid-cols-3">
        <div v-for="(stack, index) in stacks" :key="index" class="flex flex-col gap-2 border bg-white p-5 opacity-70 md:opacity-65 px-10 items-center rounded-xl hover:scale-105 duration-300 hover:opacity-100 hover:-translate-y-3">
            <img class="w-14 h-14" :src="`${url}${stack.toLowerCase()}`" alt="">
            <h1 class="text-2xl font-bold">{{ stack }}</h1>
        </div>
    </div>
</template>