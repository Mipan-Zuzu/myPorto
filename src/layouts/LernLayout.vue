<script setup lang="ts">
import TitleCard from '../components/TitleCard.vue'
import RoadmapCard from '../components/RoadmapCard.vue'
import type { DeskLayout } from "../types/Interface"
import type { RoadmapCards } from "../types/Interface"

const data: DeskLayout[] = [
    {
        id: 1,
        title: "Images",
        status: "DONE",
        desk: "A blueprint that contains everything needed to run an application."
    },
    {
        id: 2,
        title: "Volume",
        status: "DONE",
        desk: "Docker Volume is persistent storage that keeps data even if a container is stopped, removed, or recreated."
    },
    {
        id: 3,
        title: "Network",
        status: "DONE",
        desk: "Docker Network is a virtual network that enables communication between containers and external services."
    },
    {
        id: 4,
        title: "Compose",
        status: "DONE",
        desk: "Docker Compose is a tool for defining and managing multi container applications using a YAML file."
    },

    {
        id: 5,
        title: "Monolith",
        status: "DONE",
        desk: "Monolith is an architecture where all application components are built and deployed as a single application."
    },
    {
        id: 6,
        title: "Layered",
        status: "DONE",
        desk: "Layered Architecture is a design pattern that organizes an application into separate layers, each with a specific responsibility."
    },
    {
        id: 7,
        title: "Clean Architecture",
        status: "PROGRESS",
        desk: "Clean Architecture is a design pattern that separates business logic from external frameworks and infrastructure."
    },

    {
        id: 8,
        title: "n8n",
        status: "DONE",
        desk: "n8n is a workflow automation platform for connecting apps, APIs, and services without manual coding."
    },
    {
        id: 9,
        title: "Performance & Traffic",
        status: "PROGRESS",
        desk: "The process of controlling and distributing incoming requests to maintain application stability, responsiveness, and availability under different traffic conditions."
    },
    {
        id: 10,
        title: "Caching",
        status: "DONE",
        desk: "A technique that stores frequently accessed data in faster storage to reduce repeated processing, lower database load, and improve response time."
    },
    {
        id: 11,
        title: "Security",
        status: "PROGRESS",
        desk: "The practices and mechanisms used to protect applications, APIs, users, and data from unauthorized access, attacks, and other security threats."
    },
    {
        id: 12,
        title: "Reliability",
        status: "PROGRESS",
        desk: "The ability of an application to continue functioning correctly and recover gracefully when errors, failures, or unexpected conditions occur."
    },
    {
        id: 13,
        title: "Scalability",
        status: "PROGRESS",
        desk: "The ability of an application to handle increasing users, requests, and data by efficiently adding or improving computing resources."
    },
    {
        id: 14,
        title: "Observability",
        status: "PROGRESS",
        desk: "The ability to understand an application's internal state and behavior through logs, metrics, traces, monitoring, and other operational data."
    },

]

const card: RoadmapCards[] = [
    {
        id: 1,
        status: "DONE",
        title: "Docker"
    },
    {
        id: 2,
        status: "PROGRESS",
        title: "Architecture"
    },
    {
        id: 3,
        status: "DONE",
        title: "Automation"
    },
    {
        id: 4,
        status: "PROGRESS",
        title: "S Quality"
    },
    {
        id: 5,
        status: "PROGRESS",
        title: "Performance"
    },
    {
        id: 6,
        status: "PROGRESS",
        title: "Infrastructure"
    },
]
</script>

<template>
    <div class="flex justify-center flex-co font-mono">
        <div class="flex justify-between items-center">
            <div class="grid grid-cols-1 ">
                <div class="items-center text-center text-lg text-stone-500 font-medium">
                    BACKEND
                </div>
                <div class="p-1 ml-20 px-3 h-2 border-l-2 border-blue-500">

                </div>
                <RoadmapCard :status="card[0].status" :title="card[0].title" />

                <div class="p-1 ml-20 px-3 h-35 border-l-2 border-blue-500">

                </div>
                <RoadmapCard :status="card[1].status" :title="card[1].title" />
                <div class="p-1 px-3 ml-20 h-31 border-l-2 border-blue-500">

                </div>


                <RoadmapCard :status="card[4].status" :title="card[4].title" />
                <div class="p-1 px-3 ml-20 h-31 border-l-2 border-blue-500">

                </div>
                <RoadmapCard :status="card[3].status" :title="card[3].title" />

                <div class="p-1 px-3 ml-20 h-31 border-l-2 border-blue-500">

                </div>
                <RoadmapCard :status="card[2].status" :title="card[2].title" />
            </div>
            <div class="flex flex-col gap-38 mt-6">
                <div class="p-2 border-b-2 px-2  border-gray-400 md:px-7">
                </div>
                <div class="p-2 border-b-2 px-2  border-gray-400 md:px-7">
                </div>
                <div class="p-2 border-b-2 px-2  border-gray-400 md:px-7">
                </div>
                <div class="p-2 border-b-2 px-2  border-gray-400 md:px-7">
                </div>
                <div class="p-2 border-b-2 px-2  border-gray-400 md:px-7">
                </div>
            </div>
            <div class="grid grid-cols-1 gap-10">
                <div class="grid grid-cols-1 gap-3 items-end border-l-2 border-gray-400 rounded-md p-1">
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-green-500"></p>
                        <p class="w-2 h-2 rounded-full bg-green-500"></p>
                        <h1>Images</h1>
                        <TitleCard :title="data[0].title" :status="data[0].status" :desk="data[0].desk" />
                    </div>
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-green-500"></p>
                        <p class="w-2 h-2 rounded-full bg-green-500"></p>
                        <h1>Volume</h1>
                        <TitleCard :title="data[1].title" :status="data[1].status" :desk="data[1].desk" />
                    </div>
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-green-500"></p>
                        <p class="w-2 h-2 rounded-full bg-green-500"></p>
                        <h1>Network</h1>
                        <TitleCard :title="data[2].title" :status="data[2].status" :desk="data[2].desk" />
                    </div>
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-green-500"></p>
                        <p class="w-2 h-2 rounded-full bg-green-500"></p>
                        <h1>Compose</h1>
                        <TitleCard :title="data[3].title" :status="data[3].status" :desk="data[3].desk" />
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-3 items-end border-l-2 border-gray-400 rounded-md p-1">
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-green-500"></p>
                        <p class="w-2 h-2 rounded-full bg-green-500"></p>
                        <h1>Monolith</h1>
                        <TitleCard :title="data[4].title" :status="data[4].status" :desk="data[4].desk" />
                    </div>
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-green-500"></p>
                        <p class="w-2 h-2 rounded-full bg-green-500"></p>
                        <h1>Layered</h1>
                        <TitleCard :title="data[5].title" :status="data[5].status" :desk="data[5].desk" />
                    </div>
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-yellow-500"></p>
                        <p class="w-2 h-2 rounded-full bg-yellow-500"></p>
                        <h1>CleanArch</h1>
                        <TitleCard :title="data[6].title" :status="data[6].status" :desk="data[6].desk" />
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-3 items-end border-l-2 border-gray-400 rounded-md p-1">
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-yellow-500"></p>
                        <p class="w-2 h-2 rounded-full bg-yellow-500"></p>
                        <h1>traffic management</h1>
                        <TitleCard :title="data[8].title" :status="data[8].status" :desk="data[8].desk" />
                    </div>
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-green-500"></p>
                        <p class="w-2 h-2 rounded-full bg-green-500"></p>
                        <h1>caching</h1>
                        <TitleCard :title="data[9].title" :status="data[9].status" :desk="data[9].desk" />
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-3 items-end border-l-2 border-gray-400 rounded-md p-1">
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-yellow-500"></p>
                        <p class="w-2 h-2 rounded-full bg-yellow-500"></p>
                        <h1>Security</h1>
                        <TitleCard :title="data[10].title" :status="data[10].status" :desk="data[10].desk" />
                    </div>
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-yellow-500"></p>
                        <p class="w-2 h-2 rounded-full bg-yellow-500"></p>
                        <h1>Reliability</h1>
                        <TitleCard :title="data[11].title" :status="data[11].status" :desk="data[11].desk" />
                    </div>
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-yellow-500"></p>
                        <p class="w-2 h-2 rounded-full bg-yellow-500"></p>
                        <h1>Scalability</h1>
                        <TitleCard :title="data[12].title" :status="data[12].status" :desk="data[12].desk" />
                    </div>
                    <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                        <p class="w-2 h-2 animate-ping absolute rounded-full bg-yellow-500"></p>
                        <p class="w-2 h-2 rounded-full bg-yellow-500"></p>
                        <h1>Observability</h1>
                        <TitleCard :title="data[13].title" :status="data[13].status" :desk="data[13].desk" />
                    </div>
                </div>
                <div class="group cursor-pointer p-1 rounded-sm flex items-center gap-2 font-medium border px-3">
                    <p class="w-2 h-2 animate-ping absolute rounded-full bg-green-500"></p>
                    <p class="w-2 h-2 rounded-full bg-green-500"></p>
                    <h1>n8n</h1>
                    <TitleCard :title="data[7].title" :status="data[7].status" :desk="data[7].desk" />
                </div>
            </div>
        </div>
    </div>
</template>