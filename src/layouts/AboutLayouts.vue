<script setup>
import { Plus } from "lucide-vue-next"


</script>

<template>
    <div class="flex flex-col gap-5 justify-center items-center mt-20">
        <div class="flex flex-col gap-5 md:flex-row">
            <div class="flex flex-col items-center bg-white font-extrabold text-stone-500 p-10 border rounded-2xl">
                <h1 class="text-6xl gradentText">3 +</h1>
                <p class="text-xl">Clients Served</p>
            </div>
            <div
                class="absolute -z-20 w-72 p-2 bg-linear-to-r bg-white from-yellow-500 via-orange-500 to-amber-300 blur-2xl">
            </div>
            <div class="flex flex-col items-center gap-1 font-extrabold text-stone-500 p-10 border rounded-2xl">
                <h1 class="text-6xl gradentText">50 +</h1>
                <p class="text-xl">Repository github</p>
            </div>
            <div class="flex flex-col items-center gap-1 font-extrabold text-stone-500 p-10 border rounded-2xl">
                <h1 class="text-6xl gradentText">1</h1>
                <p class="text-xl">Remote Project</p>
            </div>
            <div class="flex flex-col items-center gap-1 font-extrabold text-stone-500 p-10 border rounded-2xl">
                <h1 class="text-6xl gradentText">15 +</h1>
                <p class="text-xl">Tech tools/lang</p>
            </div>
        </div>
        <div class="flex justify-center flex-col mt-20 ml-2">
                <p class="text-2xl font-bold">About me</p>
                <p class="text-5xl font-bold gradentText w-100">Fullstack Web <span
                        class="text-stone-500">Developer</span></p>
            <p class="w-100 font-medium text-sm text-stone-500 mt-4"> Experienced in end-to-end development using modern tech stack, with remote collaboration on international projects. Focused on clean code, performance, and continuous learning.</p>
        </div>
        <div class="flex flex-col">
            <div class="">
                
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "tailwindcss";

.gradentText {
    @apply bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent
}

;

.gradentTextv2 {
    @apply bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent
}

;
</style>