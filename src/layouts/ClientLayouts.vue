<script setup lang="ts">
import StartUi from '../ui/StartUi.vue'

const data = [
    {
        id: 1,
        name: "JhonDoe",
        desk: `The design is <mark>outstanding</mark> and very polished. The <mark>AI integration</mark> is impressive and works seamlessly. Definitely <mark>not a low-quality implementation</mark>.`,
        star: "5.0",
        img: "https://shorturl.at/liirH",
        bio: "Cyber Security"
    },
    {
        id: 1,
        name: "Malik",
        desk: `The design is <mark>absolutely insane</mark>, way beyond my expectations. Built with <mark>modern technologies like TypeScript and React</mark>, and the price is <mark>incredibly affordable</mark>.`,
        star: "5.0",
        img: "https://shorturl.at/CmHfx",
        bio: "IT Support"
    },
    {
        id: 1,
        name: "Kevin",
        desk: `I can't believe how <mark>professional</mark> this website looks, complete with a <mark>company profile</mark>, delivered in just <mark>2 days</mark> at such an <mark>affordable price</mark>.`,
        star: "5.0",
        img: "https://shorturl.at/CmHfx",
        bio: "College student"
    },
]

</script>

<template>
    <div class="text-center">
        <h2 class="border gradentText font-black">FEEDBACK ?</h2>
        <h1 class="text-5xl font-bold gradentText">What Client <span class="text-stone-600">Say</span></h1>
    </div>
    <div class="flex flex-col gap-5 justify-center mt-10">
        <div class="grid grid-cols-1 gap-2 md:grid-cols-3 ml-2 mr-2">
            <div class="flex flex-col border rounded-2xl p-3 border-b-4 rounded-r-none rounded-b-2xl hover:scale-105 duration-300 bg-white hover:z-40"
                v-for="(item, index) in data" :key="index">
                <div class="">
                    <div class="flex justify-between items-center">
                        <StartUi />
                        <h1 class="text-2xl gradentText font-bold">{{ item.star }}</h1>
                    </div>
                    <div class="mt-3 text-stone-500 font-light" v-html="item.desk"></div>
                    <div class="flex gap-3 mt-5">
                        <div>
                            <img class="w-10 h-10 rounded-full" :src="item.img" alt="img">
                        </div>
                        <div class="flex flex-col">
                            <h1 class="font-bold">{{ item.name }}</h1>
                            <p class="text-[11px] text-stone-500 font-semibold">{{ item.bio }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>