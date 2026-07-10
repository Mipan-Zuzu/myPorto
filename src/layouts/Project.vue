<script setup lang="ts">

import type { CardProject } from "../types/Interface"
import {Calendar} from "lucide-vue-next"

const CardDat: CardProject[] = [
    {
        status: "Online",
        date: "Updated on Jul 17, 2025",
        condition: true,
        img: "https://portofolio.mipandev.my.id/projects/project1.png",
        titles: "CodeTour",
        desk: "Interactive learning platfrom with gamefied experience",
        category: ["React", "Learning"],
        url: "https://codetur.netlify.app"
    },
    {
        status: "Online",
        date: "Updated on Jun 2, 2025",
        condition: true,
        img: "https://portofolio.mipandev.my.id/projects/project2.png",
        titles: "ScentCraft Luxury",
        desk: "Premium Fragment brand website with elegant design",
        category: ["E-comers", "Luxury Desgn"],
        url: "https://scentcrafts.netlify.app/"
    },
    {
        status: "Offline",
        date: "Released Oct 18, 2025",
        condition: false,
        img: "https://portofolio.mipandev.my.id/projects/project4.png",
        titles: "MotionArt",
        desk: "Realtime Chat ",
        category: ["WebSocket", "RealTime"],
        url: ""
    },
    {
        status: "Progress",
        date: "Build July 07, 2026",
        condition: false,
        img: "",
        titles: "Pulsr",
        desk: "Pulsr is an all in one SaaS monitoring platform. Monitor all your systems from a single dashboard with health checks, logs, metrics, and real-time insights.",
        category: ["Monitoring", "Golang", "SaaS"],
        url: "https://github.com/Mipan-Zuzu/Pulsr"
    }
]
</script>

<template>
    <div class="grid grid-cols-1 justify-center gap-2 md:grid-cols-3">
        <a 
            v-for="(items, index) in CardDat"
            :key="index"
            :href="items.url"
            target="_blank"
            rel="noopener noreferrer"
            class="p-6 ml-3 mr-3 rounded-xl border-2 border-stone-200 hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
            style="opacity: 1; transform: none; transform-origin: 50% 50% 0px;">
            <div class="mb-6 w-full h-40 rounded-lg overflow-hidden bg-gray-200">
                <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    :src="items.img" alt="">
            </div>
            <div>
                <h1 class="text-2xl font-bold gradentText">{{ items.titles }}</h1>
                <div class="flex gap-2 items-center">
                    <Calendar class="w-3 h-3" />
                    <p class="text-sm font-medium text-stone-400">{{ items.date }}</p>
                </div>
                <p class="font-medium text-stone-500">{{ items.desk }}</p>
                <div class="mt-2 border flex w-24 font-bold gap-1 rounded-2xl text-stone-900">
                    <p class="w-3 animate-ping h-3 rounded-full -mt-1"
                        :class="!items.condition? 'bg-gray-600' : 'bg-green-400'"
                    ></p>
                    <p class="w-3 absolute h-3 rounded-full  -mt-1"
                    :class="!items.condition? 'bg-gray-600' : 'bg-green-400'"
                    ></p>
                    <p class="text-stone-700">{{ items.status }}</p>
                </div>

                <div class="flex p-0.5 gap-3 mt-10 font-medium text-stone-400">
                    <div class="border px-3 rounded-md flex items-center "
                        v-for="(cate, index) in items.category"
                        :key="index"
                    >
                        <h1>{{ cate }}</h1>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>