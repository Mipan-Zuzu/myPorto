<script setup lang="ts">
import { UserRound, Book, Laptop, Layers } from "lucide-vue-next"
import type {CardStats} from "../types/Interface"
import CardStatsComp from '../components/CardStatsComp.vue'

const stats: CardStats[] = [
    {
        id : 1,
        rank : "3 +",
        title : "Clients Served",
        ico: UserRound
    },
    {
        id : 2,
        rank : "50 +",
        title : "Repository Github",
        ico: Book
    },
    {
        id : 3,
        rank : "1",
        title : "Remote Project",
        ico: Laptop
    },
    {
        id : 4,
        rank : "15 +",
        title : "Tech tools/lang",
        ico: Layers
    }
]

</script>

<template>
    <div class="flex flex-col gap-5 justify-center items-center mt-20">
        <div class="flex flex-col gap-5 md:flex-row ">
            <div class="flex hover:scale-105 duration-300 hover: flex-col items-center bg-white font-extrabold text-stone-500 p-10 border rounded-2xl" v-for="stat in stats" :key="stat.id">
                <CardStatsComp 
                    :ico="stat.ico"
                    :rank="stat.rank"
                    :title="stat.title"
                />
            </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="">
                
            </div>
        </div>
</template>