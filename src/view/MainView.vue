<script setup>
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
        <div class="flex gap-48 items-center">
            <ClaudeMascot />
            <AboutLayout />
        </div>
        <div class="mt-32 flex justify-center items-center">
            <ToolsTech />
        </div>
        <div class="flex flex-col justify-center items-center">
            <TitleProject />
            <Project />
        </div>
        <div class="mt-20">
            <RepositorysLayout />
        </div>
        <div>
            <CertivLayout />
        </div>
    </div>
</template>