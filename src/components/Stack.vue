<script setup lang="ts">

const iconBaseUrl = "https://skillicons.dev/icons?i="

const stacks = ["VueJs", "Golang", "React", "Express", "TypeScript", "Redis", "MongoDB", "Postgres", "CloudFlare", "docker", "pinia", "redux"]

const getIconUrl = (stack: string): string => `${iconBaseUrl}${stack.toLowerCase()}`

</script>

<template>
    <div class="grid grid-cols-2 mt-10 gap-2 md:grid-cols-3">
        <div 
            v-for="(stack, index) in stacks" 
            :key="index" 
            class="group relative flex flex-col gap-2 backdrop-blur-2xl p-5 opacity-70 md:opacity-65 px-10 items-center rounded-xl 
            shadow-inner overflow-hidden
            hover:opacity-100 duration-200"
        >
            <div class="absolute left-0 bottom-0 w-4 h-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-stone-800 scale-0 transition-transform duration-500 ease-in-out group-hover:scale-[15] z-0"></div>

            <img class="w-14 h-14 relative z-10 transition-colors duration-300" :src="getIconUrl(stack)" alt="" loading="lazy" decoding="async">
            <h1 class="text-sm font-normal relative z-10 transition-colors duration-300 group-hover:text-white">
                {{ stack }}
            </h1>
        </div>
    </div>
</template>