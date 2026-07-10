<script setup>
import {MapPin, Phone, Mail, Mails} from "lucide-vue-next"
</script>

<template>
    <div class="flex gap-2">
                <MapPin class="text-stone-500" />
                <h1 class="text-stone-500 font-light">Indonesia, Bali</h1>
            </div>
            <div class="flex gap-2">
                <Phone class="text-stone-500" />
                <h1 class="text-stone-500 font-light">
                    +62 881-0376-37602
                </h1>
            </div>
            <div class="flex gap-2">
                <div class="">
                    <Mail class="text-stone-500" />
                </div>
                <h1 class="text-stone-500 font-light">kadekisaka28@icloud.com</h1>
            </div>
            <div class="flex gap-2">
                <div class="">
                    <Mails class="text-stone-500" />
                </div>
                <h1 class="text-stone-500 font-light">kadekisaka00@gmail.com</h1>
            </div>
</template>