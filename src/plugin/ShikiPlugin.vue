<script setup lang="ts">
import { watchEffect, ref} from "vue"
import { codeToHtml } from "shiki"

interface Html {
    htmlcode: string 
}

const {htmlcode} = defineProps<Html>()

const code =
    `
    const err = response.dat
    interface Error {
        error: string
    }
    
    const result: Error = err
    return result
}`

const result = ref()

watchEffect(async () => {
    const html = await codeToHtml(!htmlcode ? code : htmlcode, {
        lang: 'TypeScript',
        theme: 'vitesse-dark'
    })
    result.value = html
})

</script>

<template>
    <div>
        <div v-html="result">
        </div>
    </div>
</template>