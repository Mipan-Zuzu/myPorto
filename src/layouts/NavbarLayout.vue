<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { User, Info, Instagram, Github, Linkedin, ChevronDown } from "lucide-vue-next"

const navbar = ref(false)
const data = {
    img: "https://raw.githubusercontent.com/Mipan-Zuzu/Mipan-Zuzu/main/icon.png",
    profile: "https://avatars.githubusercontent.com/u/194325824?v=4",
    name: "saka",
    navigation: {
        about: "About Me",
        skil: "Skills",
        tech: "TechStack",
        contac: "Contact"
    },
    social: {
        instagram: "instagram",
        github: "github",
        linkedin: "linkedin"
    },
    hire : "HireMe"
}

const handleNavigationBar = () => {
    navbar.value = navbar.value === false ? true : false
    console.log(navbar.value)
}

const closeMenu = (e) => {
  if (!e.target.closest(".menu")) {
    navbar.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeMenu);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeMenu);
});
</script>

<template>
    <div class="fixed w-full flex justify-between text-sm p-1 top-2 ml-1  border menu border-stone-400 backdrop-blur-lg z-50">
        <div>
            <img class="w-16" :src="data.img" alt="mipan">
        </div>
        <div class="items-center text-stone-500 font-medium gap-10 hidden md:flex">
            <a href="">{{ data.navigation.about }}</a>
            <a href="">{{ data.navigation.skil }}</a>
            <a href="">{{ data.navigation.tech }}</a>
            <a href="">{{ data.navigation.contac }}</a>
        </div>
        <div>
            <button @click="handleNavigationBar" class="flex gap-1 items-center">
                <ChevronDown class="w-3 h-3" />
                <img class="w-10 rounded-full" :src="data.profile" alt="">
            </button>
            <div :class="navbar
                ? 'opacity-100 pointer-events-auto transition-opacity duration-100'
                : 'opacity-0 pointer-events-none transition-opacity duration-100'"
                class="absolute z-50 right-5 p-2 bg-stone-800 border rounded-lg rounded-r-none rounded-b-lg w-50">
                <div class="fle flex-col justify-start text-stone-200 gap-1 ml-2">

                    <div class="flex gap-2.5  items-center w-full">
                        <User class="w-4 h-4" />
                        <h1 class="font-bold  text-2xl">{{ data.name }}</h1>
                    </div>

                    <hr class="border-stone-700">

                    <a href="" class="nav nav-link">
                        <h1 href="" class="font-medium text-lg">{{ data.navigation.about }}</h1>
                    </a>


                    <a href="" class="nav nav-link">
                        <h1 href="" class="font-medium text-lg">{{ data.navigation.skil }}</h1>
                    </a>

                    <a href="" class="nav nav-link">
                        <h1 class="font-medium text-lg">{{ data.navigation.tech }}</h1>
                    </a>

                    <a href="" class="nav nav-link">
                        <h1 class="font-medium text-lg">{{ data.navigation.contac }}</h1>
                    </a>

                    <hr class="border-stone-700">

                    <div class="flex flex-col gap-3 mt-2">
                        <a href="" class="flex gap-2  items-center w-full">
                            <Instagram class="w-5 h-5" />
                            <h1 class="font-medium text-lg">{{ data.social.instagram }}</h1>
                        </a>

                        <a href="" class="flex gap-2  items-center w-full">
                            <Github class="w-5 h-5" />
                            <h1 class="font-medium text-lg">{{ data.social.github }}</h1>
                        </a>

                        <a href="" class="flex gap-2  items-center w-full">
                            <Linkedin class="w-5 h-5" />
                            <h1 class="font-medium text-lg">{{ data.social.linkedin }}</h1>
                        </a>

                        <div class="absolute w-72 p-2 bg-linear-to-r from-sky-500 via-violet-500 to-pink-500 blur-2xl">
                            
                        </div>
                        <a href="" class="flex p-2 justify-center rounded-md items-center w-full bg-linear-to-r from-sky-500 via-violet-500 to-pink-500">
                            <h1 class="font-medium text-xl">{{ data.hire }}</h1>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "tailwindcss";

.nav-link {
    @apply hover:bg-stone-700 hover:rounded-lg hover:duration-300
}

.nav {
    @apply flex gap-2 p-1 items-center w-full
}
</style>