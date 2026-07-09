<script setup>
import {MoveRight  ,Mail} from "lucide-vue-next"
</script>

<template>
    <div class="flex flex-col text-center">
       <div class="flex flex-col justify-center items-center text-center">
         <div class="flex flex-col text-center">
            <h1 class="text-4xl gradentText font-bold md:text-7xl">Let's Work <hr> <span class="text-stone-500 text-4xl md:text-7xl">Together</span></h1>
        </div>
        <div class="w-100">
            <p class=" text-lg font-light text-stone-500 md:text-2xl md:font-medium mt-10">Have an idea, project, or opportunity? <mark> Feel free to reach out. </mark> I'll get back to you as soon as I can.</p>
        </div>
        <div class="flex flex-col gap-5 mt-5 md:flex-row">
            <button class="p-2 px-10 border rounded-xl font-light text-2xl gradentTextv3 flex items-center gap-2">
                <h1>Let's Talk</h1>
                <MoveRight/>
            </button>
            <button class="p-2 px-10 border rounded-xl font-light text-2xl">Email</button>
        </div>
       </div>
    </div>
</template>