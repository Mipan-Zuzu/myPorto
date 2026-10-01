<script setup>
import { ref, onMounted } from "vue"
import { StickyNote } from "lucide-vue-next"
import Typed from "typed.js"
import cv from "../assets/cv/CV.pdf"

const el = ref()

onMounted(() => {
    new Typed(el.value, {
        strings: [
            "Fullstack dev",
            "System design",
            "System architecture ✨"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        smartBackspace: true,
        loop: true,
    })
})

const urlWaMe = "https://wa.me/62881037637602"

const data = {
    waving:
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png",

    tech: "https://skillicons.dev/icons?i=",

    profile:
        "https://avatars.githubusercontent.com/u/194325824?v=4",
}
</script>

<template>
    <section
        class="relative w-full overflow-hidden px-5 py-16 sm:px-8 md:px-10 lg:px-16 flex justify-center"
    >
        <div
            class="mx-auto flex w-full max-w-5xl flex-col justify-center items-center gap-5 md:flex-row"
        >
            <div
                class="relative flex w-full max-w-2xl flex-col items-start"
            >

                <!-- Experience -->
                <p
                    class="mb-5 rotate-3 rounded-md bg-sky-500 px-3 py-1 text-base font-medium text-white sm:text-lg"
                >
                    Experience ++
                </p>

                <!-- Heading -->
                <div class="flex flex-col">

                    <h1
                        class="text-6xl font-extrabold leading-none text-sky-500 sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        HEY
                        <span class="text-violet-300">
                            THERE
                        </span>
                    </h1>

                    <div
                        class="mt-3 flex items-center gap-2 sm:gap-3"
                    >
                        <h1
                            class="text-6xl font-extrabold leading-none text-stone-600 sm:text-5xl md:text-6xl"
                        >
                            I'M SAKA
                        </h1>

                        <img
                            class="h-8 w-8 shrink-0 sm:h-10 sm:w-10"
                            :src="data.waving"
                            width="40"
                            height="40"
                            alt="Waving hand"
                        />
                    </div>
                </div>

                <!-- Typed -->
                <div class="mt-6 min-h-8">
                    <span
                        ref="el"
                        class="text-lg font-semibold gradentText sm:text-xl md:text-2xl"
                    ></span>
                </div>

                <!-- Description -->
                <div
                    class="mt-6 max-w-xl text-lg font-normal leading-relaxed text-stone-600 sm:text-lg md:text-xl"
                >
                    <p>
                        Specializing in web infrastructure, authentication,
                        monitoring systems, and scalable backend APIs.
                    </p>
                </div>

                <!-- Buttons -->
                <div
                    class="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
                >
                    <a
                        target="_blank"
                        :href="cv"
                        download="Isaka-cv.pdf"
                        class="w-full rounded-lg bg-sky-500 px-7 py-3 text-center text-base font-semibold text-white transition hover:bg-blue-300 sm:w-auto sm:text-lg"
                    >
                        View Resume
                    </a>

                    <a
                        target="_blank"
                        :href="urlWaMe"
                        class="w-full rounded-lg border border-stone-500 px-7 py-3 text-center text-base font-semibold text-stone-500 transition hover:bg-purple-400 hover:text-white sm:w-auto sm:text-lg"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            <div
                class="relative flex w-full max-w-md items-center justify-center md:max-w-lg mt-10 -mb-10 md:mt-0 md:mb-0"
            >

                <!-- Profile wrapper -->
                <div
                    class="relative flex items-center justify-center"
                >

                    <!-- TypeScript badge -->
                    <div
                        class="absolute -right-2 -top-8 z-10 flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-2 py-1.5 shadow-lg backdrop-blur-md sm:-right-8 sm:-top-5 md:-right-12 animate-bounce"
                    >
                        <img
                            class="h-7 w-7 sm:h-9 sm:w-9"
                            :src="`${data.tech}typescript`"
                            width="36"
                            height="36"
                            alt="TypeScript"
                        />

                        <span
                            class="text-sm font-semibold text-sky-700 sm:text-base md:text-xl"
                        >
                            Intermediate
                        </span>
                    </div>

                    <!-- Profile -->
                    <img
                        class="h-56 w-56 rounded-full object-cover sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
                        :src="`${data.profile}&s=320`"
                        width="320"
                        height="320"
                        alt="Profile"
                        fetchpriority="high"
                    />

                    <!-- JavaScript badge -->
                    <div
                        class="absolute -bottom-8 -left-2 z-10 flex items-center gap-2 rounded-2xl border border-white/40 bg-white/50 px-2 py-1.5 shadow-lg backdrop-blur-md sm:-bottom-5 sm:-left-8 md:-left-12 animate-bounce"
                    >
                        <img
                            class="h-7 w-7 sm:h-9 sm:w-9"
                            :src="`${data.tech}javascript`"
                            width="36"
                            height="36"
                            alt="JavaScript"
                        />

                        <span
                            class="text-sm font-semibold text-stone-700 sm:text-base md:px-2 md:text-xl"
                        >
                            Expert
                        </span>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>