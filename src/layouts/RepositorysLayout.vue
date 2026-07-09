<script setup>
import { ref, onMounted } from "vue"
import { HandlerFunc } from "../composable/fetchApiComposable"
import { BookMarked, Star } from "lucide-vue-next"

const dataRef = ref()

const SendData = async () => {
  dataRef.value = await HandlerFunc()
}

onMounted(() => {
    SendData()
})

const maxChar = 30


</script>

<template>
    <div class=" flex w-full animate-marquee">
        <div
            v-for="(item, index) in dataRef"
            :key="index"
            class="border border-stone-500 rounded-lg p-5 flex  gap-2 backdrop-blur-2xl ml-2 mr-2 flex-col   hover:scale-105 duration-300">

            <div class="flex gap-2 items-center">
                <BookMarked class="size-5 text-stone-600" />
                <a class="text-blue-400 font-medium hover:underline" :href="item.html_url" target="_blank">{{ item.full_name }}</a>
                <p class="p-1 px-2 rounded-md border text-[10px] font-medium text-stone-500">{{ !item.private? 'Public' : 'Private' }}</p>
            </div>

            <div class="flex flex-col gap-3">
                <p class="text-[13px] font-light">{{ item.description }}</p>
                <div class="flex gap-5">
                    <div class="flex gap-1 items-center">
                        <p class="w-4 h-4 bg-stone-600 rounded-full"></p>
                        <h1 class="font-medium text-sm">{{ item.language }}</h1>
                    </div>
                    <div class="flex gap-1 items-center">
                        <Star class="scale-80" />
                        <p class="text-sm font-normal">{{ item.stargazers_count }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(47%);
  }

  to {
    transform: translateX(-47%);
  }
}

.animate-marquee:hover {
    z-index: 100;
    animation-play-state: paused;
}

.animate-marquee {
    display: inline-flex;
    width: max-content;
    animation: marquee 100s linear infinite;
}
</style>