<script setup>
import {MoveRight  ,Mail} from "lucide-vue-next"
const urlWaMe = "https://wa.me/62881037637602"
const urlGmail = "https://mail.google.com/mail/?view=cm&fs=1&to=kadekisaka00@gmail.com"
</script>

<template>
    <div class="flex flex-col text-center">
       <div class="flex flex-col justify-center items-center text-center">
         <div class="flex flex-col text-center">
            <h1 class="text-4xl gradentText font-bold md:text-7xl">Let's Work <hr> <span class="text-stone-500 text-4xl md:text-7xl">Together</span></h1>
        </div>
        <div class="w-90">
            <p class=" text-lg font-light text-stone-500 md:text-2xl md:font-medium mt-10">Have an idea, project, or opportunity? <mark> Feel free to reach out. </mark> I'll get back to you as soon as I can.</p>
        </div>
        <div class="flex flex-col gap-5 mt-5 md:flex-row">
            <a :href="urlWaMe" target="_blank" class="group p-2 px-8 border rounded-xl font-semibold cursor-pointer text-2xl gradentTextv3 flex items-center gap-2">
                <h1>Let's Talk</h1>
                <MoveRight class="group-hover:translate-x-1 duration-300"/>
            </a>
            <a :href="urlGmail" target="_blank" class="group p-2 px-10 border rounded-xl font-semibold text-2xl cursor-pointer flex gap-2 items-center">
                <h1 class="text-stone-600">Email</h1>
                <Mail class="opacity-0 text-stone-600 group-hover:opacity-100 duration-300 group-hover:rotate-6 group-hover:-translate-y-2" />
            </a>
        </div>
       </div>
    </div>
</template>