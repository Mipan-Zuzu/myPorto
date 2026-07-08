<script setup lang="ts">
import {  UserRound, Book, Laptop, Layers } from "lucide-vue-next"
    import {defineProps} from "vue"
    import type {CardStats} from "../types/Interface"

    const {rank, title, ico} = defineProps<CardStats>()

</script>

<template>
        <div class="flex items-center gap-2">
            <component :is="ico" class="size-10 md:size-13"></component>
            <h1 class="text-6xl gradentText">{{ rank }}</h1>
        </div>
        <p class="text-xl">{{ title }}</p>
</template>