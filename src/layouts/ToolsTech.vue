<script setup lang="ts">
    import Stack from '../components/Stack.vue'
    const data = {
        title : ["Tools & ", "Technology"],
        description : "Building scalable web applications with a focus on clean architecture, authentication, APIs, and reliable backend systems." 
    }
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-10 md:gap-22 md:flex-row">
        <div class="text-5xl font-extrabold items-center gradentText md:text-6xl">
            <h1 class="w-82">{{ data.title[0] }}<span class="text-stone-500">{{ data
            .title[1] }}</span></h1>
            <p class="text-xl w-72 font-medium text-stone-400 md:w-100 md:mt-4">{{ data.description }}</p>
        </div>
        <Stack />
    </div>
</template>