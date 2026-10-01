<script setup lang="ts">
import NavbarLayout from '../layouts/NavbarLayout.vue'
import HeroSectionLayout from '../layouts/HeroSectionLayout.vue'
import StatsLayouts from '../layouts/StatsLayouts.vue'
import AboutLayout from '../layouts/AboutLayout.vue'
import ClaudeMascot from '../components/ClaudeMascot.vue'
import ToolsTech from '../layouts/ToolsTech.vue'
import Project from '../layouts/Project.vue'
import TitleProject from '../components/TitleProject.vue'
import RepositorysLayout from '../layouts/RepositorysLayout.vue'
import CertivLayout from '../layouts/CertivLayout.vue'
import ClientLayouts from '../layouts/ClientLayouts.vue'
import ContacLayout from '../layouts/ContacLayout.vue'
import FooterLayouts from '../layouts/FooterLayouts.vue'
import LernLayout from '../layouts/LernLayout.vue'
import TitleLern from '../components/TitleLern.vue'

const scrollAnimation = {
    rootMargin: '0px 0px -5% 0px',
    threshold: [0.01],
}
</script>

<template>
    <div class="relative isolate min-h-screen overflow-x-hidden">

        <!-- Grid Background -->
        <div class="
                pointer-events-none
                fixed
                inset-0
                z-0
                bg-[linear-gradient(to_right,#d6d3d1_1px,transparent_1px),linear-gradient(to_bottom,#d6d3d1_1px,transparent_1px)]
                bg-[size:40px_40px]
                opacity-25
                [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)]
                [mask-repeat:no-repeat]
                [mask-size:100%_100%]
            "></div>

        <!-- Background Text -->
        <div class="
                pointer-events-none
                fixed
                inset-0
                z-0
                flex
                items-center
                justify-center
                overflow-hidden
                px-4
                md:justify-end
                md:mr-10
                md:px-0
                lg:mr-15
            ">
            <span class="
                    select-none
                    whitespace-nowrap
                    text-transparent
                    text-[clamp(1rem,7vw,7rem)]
                    font-black
                    tracking-[-0.08em]
                    [-webkit-text-stroke:1px_#e0f2fe]
                    sm:text-[clamp(1rem,6vw,6rem)]
                    md:text-[clamp(2rem,6vw,6rem)]
                    lg:text-[clamp(2rem,7vw,7rem)]
                ">
                M i p a n Z u z u .
            </span>
        </div>

        <!-- Navbar -->
        <NavbarLayout />

        <main class="relative z-10">

            <!-- Hero -->
            <div class="mt-10 w-full">
                <HeroSectionLayout />
            </div>

            <!-- Stats -->
            <div class="w-full">
                <StatsLayouts />
            </div>

            <!-- About -->
            <div id="aboutme" v-animateonscroll.once="{
                ...scrollAnimation,
                enterClass: 'scroll-reveal-right'
            }" class="
                    flex
                    w-full
                    flex-col
                    items-center
                    justify-center
                    gap-12
                    px-5
                    py-20
                    md:flex-row
                    md:gap-24
                    lg:gap-48
                ">
                <ClaudeMascot />
                <AboutLayout />
            </div>

            <!-- Tech -->
            <div id="tech" v-animateonscroll.once="{
                ...scrollAnimation,
                enterClass: 'scroll-reveal-up'
            }" class="
                    mt-20
                    flex
                    w-full
                    justify-center
                    px-5
                    md:mt-32
                ">
                <ToolsTech />
            </div>

            <!-- Projects -->
            <div id="project" v-animateonscroll.once="{
                ...scrollAnimation,
                enterClass: 'scroll-reveal-up'
            }" class="
                    flex
                    w-full
                    flex-col
                    items-center
                    justify-center
                    px-5
                    py-20
                ">
                <TitleProject />
                <Project />
            </div>

            <!-- Learning -->
            <div class="
                    flex
                    w-full
                    flex-col
                    items-center
                    justify-center
                    px-5
                    py-10
                ">
                <TitleLern class="mt-10" />
                <LernLayout class="mt-4" />
            </div>

            <!-- Repositories -->
            <div class="mt-20">
                <RepositorysLayout />
            </div>

            <!-- Certificates -->
            <div class="flex w-full justify-center px-5 py-10">
                <CertivLayout />
            </div>

            <!-- Clients -->
            <div class="mt-10">
                <ClientLayouts />
            </div>

            <!-- Contact -->
            <div class="
                    bg-white
                    mt-10
                    w-full
                    border-t
                    border-b
                    px-5
                    py-16
                    text-center
                    md:mt-20
                    md:p-20
                ">
                <div id="contact" v-animateonscroll.once="{
                    ...scrollAnimation,
                    enterClass: 'scroll-reveal-up'
                }">
                    <ContacLayout />
                </div>
                <!-- Footer -->
                <FooterLayouts />

                <!-- Copyright -->
                <p class="mt-10 text-sm text-stone-600 text-center">
                    © 2026 Mipan. All Rights Reserved.
                </p>
            </div>

        </main>


    </div>
</template>
