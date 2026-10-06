<script setup lang="ts">
const skilliconsBaseUrl = "https://skillicons.dev/icons?i="

type Stack = {
    name: string
    icon?: string
    iconUrl?: string
}

type StackGroup = {
    title: string
    stacks: Stack[]
}

const groups: StackGroup[] = [
    {
        title: "Frontend",
        stacks: [
            {
                name: "VueJs",
                icon: "vue",
            },
            {
                name: "React",
                icon: "react",
            },
            {
                name: "TypeScript",
                icon: "typescript",
            },
            {
                name: "Pinia",
                icon: "pinia",
            },
            {
                name: "Redux",
                icon: "redux",
            },
            {
                name: "Tailwind",
                icon: "tailwindcss",
            },
        ],
    },

    {
        title: "Backend",
        stacks: [
            {
                name: "Golang",
                icon: "go",
            },
            {
                name: "Express",
                icon: "express",
            },
            {
                name: "Prisma",
                icon: "prisma",
            },
        ],
    },

    {
        title: "Database & Cache",
        stacks: [
            {
                name: "Postgres",
                icon: "postgres",
            },
            {
                name: "MongoDB",
                icon: "mongodb",
            },
            {
                name: "Redis",
                icon: "redis",
            },
        ],
    },

    {
        title: "DevOps & Cloud",
        stacks: [
            {
                name: "Docker",
                icon: "docker",
            },
            {
                name: "Cloudflare",
                icon: "cloudflare",
            },
            {
                name: "n8n",
                iconUrl:
                    "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/n8n.svg",
            },
            {
                name: "K6",
                iconUrl:
                    "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/k6.svg",
            },
            {
                name: "Uptime Kuma",
                iconUrl:
                    "https://raw.githubusercontent.com/louislam/uptime-kuma/master/public/icon.svg",
            },
        ],
    },

    {
        title: "Desktop & AI",
        stacks: [
            {
                name: "ElectronJs",
                iconUrl:
                    "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/electron.svg",
            },
            {
                name: "Hermes Agent",
                iconUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKEZSM7OUye5K4J9m_M5xqtmZ9zFDBzI92U2ExkMHOVDILyCbVrgJxME&s=10",
            },
        ],
    },
]

const getIconUrl = (stack: Stack): string => {
    if (stack.iconUrl) {
        return stack.iconUrl
    }

    return `${skilliconsBaseUrl}${stack.icon}`
}
</script>

<template>
    <div class="mt-10 space-y-8">
        <section
            v-for="group in groups"
            :key="group.title"
            class="min-w-0"
        >
            <!-- Group Header -->
            <div class="mb-3 flex items-center gap-3">
                <h2
                    class="shrink-0 text-xs uppercase tracking-[0.2em] text-stone-700 font-semibold"
                >
                    {{ group.title }}
                </h2>

                <div class="h-px min-w-0 flex-1 bg-stone-200/10"></div>
            </div>

            <!-- Stack Grid -->
            <div
                class="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3"
            >
                <div
                    v-for="stack in group.stacks"
                    :key="stack.name"
                    class="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] px-3 py-3 backdrop-blur-3xl opacity-70 shadow-inner transition-all duration-200 hover:opacity-100"
                >
                    <!-- Hover Effect -->
                    <div
                        class="absolute bottom-0 left-0 z-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-stone-800 transition-transform duration-500 ease-in-out group-hover:scale-[12]"
                    ></div>

                    <!-- Icon -->
                    <div
                        class="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center"
                    >
                        <img
                            :src="getIconUrl(stack)"
                            :alt="stack.name"
                            class="h-7 w-7 object-contain"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <!-- Stack Name -->
                    <span
                        class="relative z-10 min-w-0 truncate text-xs font-normal text-stone-600 transition-colors duration-300 group-hover:text-white"
                        :title="stack.name"
                    >
                        {{ stack.name }}
                    </span>
                </div>
            </div>
        </section>
    </div>
</template>