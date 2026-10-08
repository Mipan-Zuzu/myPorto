<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import {
  HandlerFunc,
  type Repository,
} from '../composable/fetchApiComposable'

import {
  BookMarked,
  Star,
  GitFork,
} from 'lucide-vue-next'

const dataRef = ref<Repository[]>([])

const isPaused = ref(false)
const isMobile = ref(false)
const marqueeReady = ref(false)

const maxChar = 30

const SendData = async (): Promise<void> => {
  const data = await HandlerFunc()

  dataRef.value = data

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      marqueeReady.value = true
    })
  })
}

const checkMobile = (): void => {
  isMobile.value = window.innerWidth < 768

  // Mobile harus selalu berjalan
  if (isMobile.value) {
    isPaused.value = false
  }
}

const toggleMarquee = (): void => {
  // Mobile tidak boleh pause
  if (isMobile.value) return

  isPaused.value = !isPaused.value
}

const languageColors: Record<string, string> = {
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-500',
  Python: 'bg-[#3572A5]',
  Java: 'bg-red-500',
  'C++': 'bg-blue-700',
  'C#': 'bg-purple-600',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-600',
  PHP: 'bg-indigo-500',
  Ruby: 'bg-red-600',
  Swift: 'bg-orange-500',
  Kotlin: 'bg-purple-500',
  Dart: 'bg-cyan-600',
  HTML: 'bg-orange-500',
  CSS: 'bg-blue-500',
  Vue: 'bg-emerald-500',
  Shell: 'bg-gray-700',
  Dockerfile: 'bg-blue-400',
}

const getLanguageColor = (language: string | null): string => {
  if (!language) {
    return 'bg-stone-400'
  }

  return languageColors[language] ?? 'bg-stone-400'
}

onMounted(() => {
  checkMobile()

  window.addEventListener('resize', checkMobile)

  SendData()
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <div class="w-full overflow-hidden">
    <div
      class="flex w-max select-none py-4"
      :class="{
        'animate-marquee': marqueeReady,
        'cursor-pointer': !isMobile,
        'cursor-default': isMobile,
        '[animation-play-state:paused]': isPaused,
      }"
      @click="toggleMarquee"
    >
      <div
        v-for="(item, index) in [...dataRef, ...dataRef]"
        :key="`${item.id}-${index}`"
        class="
          group
          mx-2
          flex
          w-[300px]
          shrink-0
          flex-col
          gap-5
          rounded-xl
          border
          p-5
          shadow-sm
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-md
          sm:w-[340px]
          md:w-[380px]
        "
        :class="
          item.stargazers_count >= 4
            ? 'border-violet-200 bg-linear-to-br from-sky-50 via-purple-50 to-pink-50'
            : 'border-stone-300 bg-white/80'
        "
      >
        <!-- Header -->
        <div class="flex items-start justify-between gap-3">
          <div class="flex min-w-0 items-center gap-2">
            <div
              class="
                flex
                size-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-stone-200
                bg-white/60
              "
            >
              <BookMarked
                class="size-4 text-stone-600"
                aria-hidden="true"
              />
            </div>

            <a
              :href="item.html_url"
              target="_blank"
              rel="noopener noreferrer"
              class="
                min-w-0
                truncate
                text-sm
                font-semibold
                text-stone-900
                transition-colors
                hover:text-blue-700
                hover:underline
              "
              :title="item.full_name"
              @click.stop
            >
              {{ item.full_name }}
            </a>
          </div>

          <span
            class="
              shrink-0
              rounded-full
              border
              border-stone-200
              bg-white/50
              px-2.5
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-wide
              text-stone-600
            "
          >
            {{ !item.private ? 'Public' : 'Private' }}
          </span>
        </div>

        <!-- Description -->
        <p
          class="
            min-h-[42px]
            text-left
            text-sm
            font-normal
            leading-relaxed
            text-stone-700
          "
        >
          {{
            item.description
              ? item.description.length > maxChar
                ? `${item.description.slice(0, maxChar)}...`
                : item.description
              : 'No description available.'
          }}
        </p>

        <!-- Footer -->
        <div
          class="
            flex
            items-center
            justify-between
            border-t
            border-stone-200
            pt-4
          "
        >
          <!-- Language -->
          <div class="flex items-center gap-2">
            <span
              class="size-4 rounded-full"
              :class="getLanguageColor(item.language)"
              aria-hidden="true"
            ></span>

            <span class="text-xs font-medium text-stone-600">
              {{ item.language || 'Unknown' }}
            </span>
          </div>

          <!-- Stars & Forks -->
          <div class="flex items-center gap-4">
            <!-- Stars -->
            <div class="flex items-center gap-1.5">
              <Star
                class="size-5 text-yellow-400"
                aria-hidden="true"
              />

              <span
                :class="
                  item.stargazers_count >= 4
                    ? 'text-sm font-bold text-violet-600'
                    : 'text-sm font-semibold text-stone-700'
                "
              >
                {{ item.stargazers_count ?? 0 }}
              </span>
            </div>

            <!-- Forks -->
            <div class="flex items-center gap-1.5">
              <GitFork
                class="size-5 text-stone-500"
                aria-hidden="true"
              />

              <span class="text-sm font-semibold text-stone-700">
                {{ item.forks_count ?? 0 }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}

.animate-marquee {
  width: max-content;
  animation: marquee 120s linear infinite;
  will-change: transform;
}
</style>