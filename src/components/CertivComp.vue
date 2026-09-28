<script setup lang="ts">
const data = [
    "https://raw.githubusercontent.com/Mipan-Zuzu/Mipan-Zuzu/refs/heads/main/document.jpg",
     "https://raw.githubusercontent.com/Mipan-Zuzu/Mipan-Zuzu/refs/heads/main/awsCloud.png",
     "https://raw.githubusercontent.com/Mipan-Zuzu/Mipan-Zuzu/refs/heads/main/certivIBM.png",
]

</script>

<template>
    <div class="grid grid-cols-1 gap-2 mr-2 ml-2 md:grid-cols-3 mt-5">
        <div 
            class="border-2 rounded-2xl"
            v-for="(item, index) in data"
            :key="index"
            >
            <img :src="item" :alt="`Certiv${index}`">
        </div>
    </div>  
</template>