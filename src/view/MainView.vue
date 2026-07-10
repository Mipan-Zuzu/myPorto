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

</script>

<template>
    <div class="flex flex-col overflow-hidden justify-center items-center">
        <NavbarLayout />
        <div class="mt-10">
            <HeroSectionLayout />
        </div>
        <div>
            <StatsLayouts />
        </div>
        <div id="aboutme" class="flex gap-48 items-center">
            <ClaudeMascot />
            <AboutLayout />
        </div>
        <div id="tech" class="mt-32 flex justify-center items-center">
            <ToolsTech />
        </div>
        <div id="project" class="flex flex-col justify-center items-center">
            <TitleProject  />
            <Project />
        </div>
        <div class="mt-20">
            <RepositorysLayout />
        </div>
        <div>
            <CertivLayout />
        </div>
        <div class="mt-20">
            <ClientLayouts />
        </div>
        <div class="mt-15 border-t border-b p-20 w-full text-center" id="contact">
            <ContacLayout  />
            <FooterLayouts />
            <p class="mt-10">© 2026 Mipan. All Rights Reserved.</p>
        </div>
    </div>
</template>