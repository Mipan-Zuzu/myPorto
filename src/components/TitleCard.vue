<script setup lang="ts">

    export 

    interface Card {
        title: string
        status: string
        desk: string
    }

    const props = defineProps<Card>()

</script>

<template>
    <div
        class="hidden absolute ml-30  p-2 rounded-md border rounded-l-none md:grid-cols-1 rounded-b-md group-hover:block">
        <div class="flex gap-2">
            <h1>{{ props.title }}</h1>
            <div class="flex gap-1 items-center">
                <p class="text-[10px] font-medium">{{ props.status }}</p>
                <p class="w-2 h-2 rounded-full" :class="props.status === 'DONE' ? 'bg-green-500' : props.status === 'PROGRESS'? 'bg-yellow-500': 'bg-gray-500'"></p>
            </div>
        </div>
        <div class="text-[10px] w-50">{{ props.desk }}</div>
    </div>
</template>