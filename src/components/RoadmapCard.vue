<script setup lang="ts">

interface RoadmapCard {
    status: string
    title: string
}
const props = defineProps<RoadmapCard>()

</script>

<template>
    <div class="p-1 rounded-sm flex items-center gap-2 font-medium border  px-3">
        <p class="w-2 h-2 animate-ping absolute rounded-full" :class="props.status === 'DONE'? 'bg-green-500' : props.status === 'PROGRESS'? 'bg-yellow-500' : 'bg-gray-500'"></p>
        <p class="w-2 h-2 rounded-full" :class="props.status === 'DONE'? 'bg-green-500' : props.status === 'PROGRESS'? 'bg-yellow-500' : 'bg-gray-500'"></p>
        <h1>{{ props.title }}</h1>
    </div>
</template>