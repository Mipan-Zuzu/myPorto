<script setup>
import {ChevronLeft, ChevronRight} from "lucide-vue-next"

const data = {
    img : "https://avatars.githubusercontent.com/u/81847?v=4"
}
</script>

<template>
    <div class="hidden md:block mt-16">
        <div class="flex flex-col">
          <div class="flex">
              <div class="p-7 h-50 bg-orange-300 border">
            </div>
            <div class="px-26 h-27 mt-25 bg-orange-300">
            </div>
            <div class="flex absolute mt-32 ml-22 gap-32">
                <p class="p-3 bg-stone-800"></p>
                <p class="p-3 bg-stone-800"></p>
            </div>
             <div class="p-7 h-50 bg-orange-300 border"></div>
          </div>
             <div class="flex ml-17 gap-18">
                 <div class="p-7 bg-orange-300"></div>
                 <div class="p-7 bg-orange-300"></div>
             </div>
        </div>

    </div>
</template>