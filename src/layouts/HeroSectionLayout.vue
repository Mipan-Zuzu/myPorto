<script setup>
import { ref, onMounted, watchEffect } from "vue"
import {StickyNote} from "lucide-vue-next"
import Typed from "typed.js"
import cv from "../assets/cv/CV.pdf"
const el = ref()
const result = ref()

onMounted(() => {
    new Typed(el.value, {
        strings: ["Fullstack dev", "System design", "system architecture ✨"],
        typeSpeed: 50,
        backSpeed: 30,
        smartBackspace: true,
        loop: true,
    })
})

const urlWaMe = "https://wa.me/62881037637602"

const data = {
    waving: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png",
    tech : "https://skillicons.dev/icons?i=",
    profile : "https://avatars.githubusercontent.com/u/194325824?v=4"
}

</script>

<template>
    <div class="flex flex-col justify-center mt-20  items-center gap-17 md:flex-row">
    <div class="flex flex-col mt-10 ml-2 md:ml-5">
        <div class="flex flex-col">
            <p class="w-38 pl-2 mb-5 rounded-md text-lg rotate-3 p-1 bg-sky-300 font-medium text-white animate-pulse">Experience ++</p>
            <h1
                class="text-5xl font-extrabold gradentTextv2 md:text-7xl">
                HEY THERE
            </h1><br>
            <div class="flex">
                <h1 class="gradentTextv2 text-5xl font-extrabold md:text-6xl">I'M <span class="text-stone-600">SAKA</span></h1>
             <img class="w-10 h-10" :src="data.waving" alt="">
            </div>
        </div>
        <div class="mt-3">
            <span ref="el" class="text-xl font-semibold gradentText md:text-2xl"></span>
        </div>
        <div class="mt-10 font-normal text-stone-400">
            <p class="w-75 text-xl md:w-100 md:text-xl">Specializing in web <span class="bg-red-500 text-white">infrastructure</span>, authentication, monitoring systems, and <span class="bg-red-500 text-white">scalable</span> backend APIs.</p>
        </div>
        <div class="flex flex-col mt-5 gap-3 md:flex-row">
        <div class="flex justify-start gap-2 ">
            <a target="_blank" :href="cv" class="p-3 px-8 bg-stone-700 text-white text-xl font-semibold rounded-lg hover:bg-stone-600" download="Isaka-cv.pdf">View Resume</a>
        </div>
        <div class="flex justify-start gap-2">
            <a target="_blank" :href="urlWaMe" class="p-3 px-10 border border-stone-500 text-stone-500 text-xl font-semibold rounded-lg">Contact Me</a>
        </div>
        </div>
        <div class="absolute w-72 p-2 bg-linear-to-r from-sky-500 via-violet-500 to-pink-500 blur-2xl">
        </div>
    </div>
    <div class="">
        <div class="absolute animate-bounce right-14 flex items-center gap-2 backdrop-blur-lg p-1 rounded-2xl md:right-60">
            <img class=" -rotate-3 w-8 h-8 md:w-10 md:h-10" :src="`${data.tech}typescript`" alt="">
            <h1 class=" text-sky-700 font-semibold md:text-xl">Intermediate</h1>
        </div>
        <img class="w-64  h-64 rounded-full md:w-80 md:h-80" :src="data.profile" alt=""   fetchpriority="high">
        <div class="absolute animate-bounce px-3 flex items-center gap-2 backdrop-blur-md shadow-2xl p-1 rounded-2xl">
            <img class=" -rotate-3  w-8 h-8 md:w-10 md:h-10" :src="`${data.tech}javascript`" alt="">
            <h1 class=" text-stone-700 font-semibold md:text-xl md:px-5">Expert</h1>
        </div>
        </div>
    </div>
</template>
