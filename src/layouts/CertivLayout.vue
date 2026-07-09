<script setup lang="ts">
import CertivComp from '../components/CertivComp.vue'

</script>

<template>
    <div class="flex flex-col gap-10 mt-20 text-center">
        <h1 class="gradentText text-5xl font-extrabold">
            This All My Licence
            <span class="text-stone-500">Or Certiv</span>
            <hr>
            <p class="text-sm font-medium text-stone-400 mt-2">
                Each certification marks a milestone in building the
                <mark>knowledge required</mark>
                for a
                <mark>professional career</mark>
                in
                <mark>software development</mark>.
            </p>
        </h1>
        <CertivComp />
    </div>
</template>
