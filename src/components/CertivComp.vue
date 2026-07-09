<script setup lang="ts">
const data = [
    "https://media.licdn.com/dms/image/v2/D562DAQFAAB01ztPAKw/profile-treasury-document-cover-images_480/B56ZrEvcEmG4BI-/0/1764237363097?e=1784167200&v=beta&t=0JHXm-HSAh4a_VyAzeV-REgH1BhtU_YnI3ML6EDDOAE",
     "https://media.licdn.com/dms/image/v2/D562DAQF_76FGm5Ly5Q/profile-treasury-document-cover-images_480/B56Zt3nlrhIcBI-/0/1767238426789?e=1784167200&v=beta&t=Pp6WVHcdNr2OU2JnZFR6nf_wQNdCHCm0U1FvW8iy6Ek",
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