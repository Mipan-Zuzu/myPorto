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

const data = {
    lang : 'TypeScript',
    theme : 'vitesse-dark'
}

const result = ref()

watchEffect(async () => {
    const condition = !htmlcode ? code : htmlcode
    const html = await codeToHtml(condition, {
        lang: data.lang,
        theme: data.theme
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