<script setup lang="ts">

import FooterContacComp from '../components/FooterContacComp.vue'
import { Icon } from "@iconify/vue"

import instagram from "@iconify-icons/simple-icons/instagram"
import github from "@iconify-icons/simple-icons/github"
import discord from "@iconify-icons/simple-icons/discord"
import linkedin from "@iconify-icons/simple-icons/linkedin"

const data = {
    name: "MipanZuzu",
    imgUrl: "https://raw.githubusercontent.com/Mipan-Zuzu/Mipan-Zuzu/main/icon.png",
    desk: "My goal is to build modern web applications that are fast, scalable, and easy to maintain. I believe great software comes from writing clean code, paying attention to details, and never stopping the learning process."
}

const icon = [
    {
        id: 1,
        icon: instagram,
        title: "instagram",
        url: "https://www.instagram.com/mipanzuzuzuz123"
    },
    {
        id: 2,
        icon: github,
        title: "github",
        url: "https://github.com/Mipan-Zuzu"
    },
    {
        id: 3,
        icon: discord,
        title: "discord",
        url: "https://discord.com/users/858201924795629569"
    },
    {
        id: 4,
        icon: linkedin,
        title: "linkedin",
        url: "https://www.linkedin.com/in/kadek-isaka"
    },
]

</script>

<template>
    <div class="mt-30 flex flex-col gap-30 md:flex-row md:justify-between md:gap-0 md:items-center">
        <div class="flex flex-col gap-3">
            <div class="flex gap-3 items-center">
                <img class="w-14 h-10" :src="data.imgUrl" alt="profile">
                <h1 class="font-bold text-2xl text-stone-500">{{ data.name }}</h1>
            </div>
            <div class="text-start">
                <h1 class="text-sm font-light text-stone-500 md:w-100">{{ data.desk }}</h1>
            </div>
            <div class="flex gap-4">
                <a v-for="(item, index) in icon" :key="index" :href="item.url" class="group text-stone-600 flex rounded-sm hover:gap-2 duration-300 hover:border hover:rounded-md p-0.5" :title="item.title">
                    <Icon :icon="item.icon" class="text-2xl" />
                    <p class="hidden font-medium opacity-0 group-hover:block duration-300 group-hover:opacity-100">{{ item.title }}</p>
                </a>
            </div>
        </div>

        <div class="flex flex-col gap-4 text-stone-600 rounded-sm">
            <FooterContacComp />
        </div>
    </div>
</template>