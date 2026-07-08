<script setup lang="ts">
import type {CardAbout} from "../types/Interface"

const data: CardAbout = {
    Title: "About Me",
    Desk : "Experienced in end-to-end development using modern  tech stack, with remote collaboration on international projects. Focused on clean code, performance, and continuous learning"
}

</script>

<template>
    <AboutComp 
        :Title="data.Title"
        :Desk="data.Desk"
    />
</template>