<script setup lang="ts">

import type { CardProject } from "../types/Interface"
import { Calendar } from "lucide-vue-next"

const CardDat: CardProject[] = [
    {
        status: "Online",
        date: "Updated on Jul 17, 2025",
        condition: true,
        img: "https://portofolio.mipandev.my.id/projects/project1.png",
        titles: "CodeTour",
        desk: "Interactive learning platfrom with gamefied experience",
        category: ["React", "Learning"],
        url: "https://codetur.netlify.app",
        badge: ""
    },
    {
        status: "Online",
        date: "Updated on Jun 2, 2025",
        condition: true,
        img: "https://portofolio.mipandev.my.id/projects/project2.png",
        titles: "ScentCraft Luxury",
        desk: "Premium Fragment brand website with elegant design",
        category: ["E-comers", "Luxury Desgn"],
        url: "https://scentcrafts.netlify.app/",
        badge: ""
    },
    {
        status: "Offline",
        date: "Released Oct 18, 2025",
        condition: false,
        img: "https://portofolio.mipandev.my.id/projects/project4.png",
        titles: "MotionArt",
        desk: "Realtime Chat ",
        category: ["WebSocket", "RealTime"],
        url: "https://github.com/Mipan-Zuzu/And-Learning-path",
        badge: "https://img.shields.io/badge/SocketIO-MotionArt-green"
    },
    {
        status: "Progress",
        date: "Build July 07, 2026",
        condition: false,
        img: "/assets/img/pulsr.gif",
        titles: "Pulsr",
        desk: "Pulsr is an all in one SaaS monitoring platform. Monitor all your systems from a single dashboard with health checks, logs, metrics, and real-time insights.",
        category: ["Monitoring", "Golang", "SaaS"],
        url: "https://github.com/Mipan-Zuzu/Pulsr",
        badge: ""
    },
    {
        status: "Done",
        date: "Build February 15, 2026",
        condition: true,
        img: "https://res.cloudinary.com/fwkoz9yt/image/upload/v1790584779/Screenshot_2026-09-28_163921_lnfgxs.png",
        titles: "Portofolio",
        desk: "Client Project Portofolio use sticky scroll, scrol driven animation, and using AI integration",
        category: ["Portofolio", "Client", "AI"],
        url: "https://jhondoe.my.id/",
        badge: ""
    },
    {
        status: "Done",
        date: "Build June 20, 2026",
        condition: true,
        img: "https://res.cloudinary.com/fwkoz9yt/image/upload/v1783910797/d21805d7-f4bd-4a4c-a7c6-d090b91c2e93.png",
        titles: "Portofolio IT Support",
        desk: "Profesional Portofolio for IT Support ",
        category: ["Portofolio", "IT Support"],
        url: "https://davidtaufik.my.id/",
        badge: ""
    },
    {
        status: "Done",
        date: "Build Maret 13, 2026",
        condition: true,
        img: "https://res.cloudinary.com/fwkoz9yt/image/upload/v1783911241/7ddfc93b-cd79-4159-a624-bf40a95c2b62.png",
        titles: "Barong/BarongTs",
        desk: "Need more simple to setup frontend and backend with typescript ? barongTS is your way only one command to handle anything",
        category: ["CLI", "NPM", "Package"],
        url: "https://www.npmjs.com/package/@barong/barong-ts",
        badge: "https://img.shields.io/npm/dm/@barong/barong-ts"
    },
    {
        status: "Done",
        date: "Build April 02, 2026",
        condition: true,
        img: "https://res.cloudinary.com/fwkoz9yt/image/upload/v1783913401/ca3ce06c-ba20-4b06-a4e7-71660fc265d2.png",
        titles: "Sukiss",
        desk: "Ai asissten in your terminal using high model high response, sukiss can manage your folder and your code base. sukiss now is include in your project.",
        category: ["AI", "CLI", "NPM"],
        url: "https://www.npmjs.com/package/sukiss",
        badge: "https://img.shields.io/npm/dm/sukiss"
    },
    {
        status: "Contribute",
        date: "Contribute September 21, 2025",
        condition: true,
        img: "https://res.cloudinary.com/fwkoz9yt/image/upload/v1783914146/1588d0e2-694e-44ce-97b8-cfd2ecc60274.png",
        titles: "GamanJS",
        desk: "GamanJS adopts a functional-first design engineered for high-scale environments. Rejecting bloated OOP patterns, everything is built through composable functions. ",
        category: ["AI", "CLI", "NPM"],
        url: "https://www.npmjs.com/package/sukiss",
        badge: "https://img.shields.io/npm/dm/gaman"
    },
    {
        status: "DONE",
        date: "Build November 14 , 2025",
        condition: true,
        img: "https://res.cloudinary.com/fwkoz9yt/image/upload/v1790834106/mailSend_sql2yu.png",
        titles: "MailSend",
        desk: "A Simple mail sender easy to use using nodemailer",
        category: ["Node", "Mail", "SMTP"],
        url: "https://github.com/Mipan-Zuzu/emailSender",
        badge: ""
    },
    {
        status: "DONE",
        date: "Build September 07 , 2026",
        condition: true,
        img: "https://res.cloudinary.com/fwkoz9yt/image/upload/v1791533222/Nyravid-ezgif.com-optimize_vmgapk.gif",
        mediaType: "video",
        titles: "Nyra",
        desk: "Nyra is Asisten 3d anime in your desktop (same like vtuber) and my bini",
        category: ["ElectronJs", "Ai Asissiten"],
        url: "https://github.com/Mipan-Zuzu/Nyra",
        badge: "https://img.shields.io/badge/Nyra-AI%20VTuber%20Assistant-ff69b4?style=for-the-badge"
    },
    {
        status: "Learn",
        date: "Build September 23 , 2026",
        condition: true,
        img: "/assets/img/hermes.gif",
        titles: "Hermes Agent",
        desk: "I Lern How to Build automation Flow using Hermes Agen Connect other MCP for supported automation.",
        category: ["Hermes", "Agent", "MCP"],
        url: "",
        badge: ""
    },
]
</script>

<template>
    <div class="grid grid-cols-1 justify-center gap-2 md:grid-cols-3">
        <a v-for="(items, index) in CardDat" :key="index" :href="items.url" target="_blank" rel="noopener noreferrer"
            class="p-6 ml-3 mr-3 rounded-xl border-2 border-stone-200 backdrop-blur-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
            style="opacity: 1; transform: none; transform-origin: 50% 50% 0px;">
            <div class="mb-6 w-full h-40 rounded-lg overflow-hidden bg-gray-200">
                <video v-if="items.mediaType === 'video'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    :src="items.img"
                    width="400"
                    height="160"
                    autoplay
                    loop
                    muted
                    playsinline
                    preload="none"
                    :aria-label="items.titles"></video>
                <img v-else class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    :src="items.img.includes('cloudinary') ? items.img.replace('/upload/', '/upload/f_auto,q_auto,w_400,h_160,c_fill/') : items.img"
                    width="400"
                    height="160"
                    loading="lazy"
                    decoding="async"
                    :alt="items.titles">
            </div>
            <div>
                <h1 class="text-2xl font-bold gradentText">{{ items.titles }}</h1>
                <div class="flex gap-2 items-center">
                    <Calendar class="w-3 h-3" />
                    <p class="text-sm font-medium text-stone-400">{{ items.date }}</p>
                </div>
                <p class="font-medium text-stone-500">{{ items.desk }}</p>
                <div class="mt-2 border flex-col flex w-29 font-bold gap-1 rounded-2xl text-stone-900">
                    <div class="flex gap-2">
                        <p class="w-3 animate-ping h-3 rounded-full -mt-1"
                            :class="!items.condition ? 'bg-gray-600' : 'bg-green-400'"></p>
                        <p class="w-3 absolute h-3 rounded-full  -mt-1"
                            :class="!items.condition ? 'bg-gray-600' : 'bg-green-400'"></p>
                        <p class="text-stone-700">{{ items.status }}</p>
                    </div>
                </div>
                <div class="">
                    <img class=" mt-2 w-40 h-7" :class="items.badge === '' ? 'hidden' : 'block'" :src="items.badge" alt="">
                </div>
                <div class="flex p-0.5 gap-3 mt-5 font-medium text-stone-400">
                    <div class="border px-3 rounded-md flex items-center " v-for="(cate, index) in items.category"
                        :key="index">
                        <h1>{{ cate }}</h1>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>
