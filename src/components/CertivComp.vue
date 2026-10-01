<script setup lang="ts">
import { ref } from 'vue'

const data = [
  'https://raw.githubusercontent.com/Mipan-Zuzu/Mipan-Zuzu/refs/heads/main/document.jpg',
  'https://raw.githubusercontent.com/Mipan-Zuzu/Mipan-Zuzu/refs/heads/main/awsCloud.png',
  'https://raw.githubusercontent.com/Mipan-Zuzu/Mipan-Zuzu/refs/heads/main/certivIBM.png',
]

const selectedImage = ref<string | null>(null)
const zoom = ref(1)

const openImage = (image: string): void => {
  selectedImage.value = image
  zoom.value = 1

  document.body.style.overflow = 'hidden'
}

const closeImage = (): void => {
  selectedImage.value = null
  zoom.value = 1

  document.body.style.overflow = ''
}

const zoomIn = (): void => {
  zoom.value = Math.min(zoom.value + 0.25, 3)
}

const zoomOut = (): void => {
  zoom.value = Math.max(zoom.value - 0.25, 0.5)
}

const resetZoom = (): void => {
  zoom.value = 1
}
</script>

<template>
  <!-- Certificate Grid -->
  <div
    class="
      mt-5
      mr-2
      ml-2
      grid
      grid-cols-1
      gap-2
      md:grid-cols-3
    "
  >
    <div
      v-for="(item, index) in data"
      :key="index"
      class="
        overflow-hidden
        rounded-2xl
        border-2
        border-stone-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <button
        type="button"
        class="block w-full cursor-zoom-in"
        :aria-label="`View certificate ${index + 1}`"
        @click="openImage(item)"
      >
        <img
          :src="item"
          :alt="`Certificate ${index + 1}`"
          loading="lazy"
          decoding="async"
          class="
            block
            h-auto
            w-full
            object-cover
            transition-transform
            duration-300
            hover:scale-[1.02]
          "
        />
      </button>
    </div>
  </div>

  <!-- Image Preview -->
  <Teleport to="body">
    <div
      v-if="selectedImage"
      class="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/80
        p-4
        backdrop-blur-sm
      "
      role="dialog"
      aria-modal="true"
      @click.self="closeImage"
    >
      <!-- Close -->
      <button
        type="button"
        class="
          absolute
          top-4
          right-4
          z-10
          flex
          size-10
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-2xl
          text-white
          backdrop-blur-md
          transition
          hover:bg-white/20
        "
        aria-label="Close image"
        @click="closeImage"
      >
        ×
      </button>

      <!-- Zoom Controls -->
      <div
        class="
          absolute
          bottom-5
          left-1/2
          z-10
          flex
          -translate-x-1/2
          items-center
          gap-2
          rounded-full
          bg-black/60
          p-2
          backdrop-blur-md
        "
      >
        <button
          type="button"
          class="
            flex
            size-10
            items-center
            justify-center
            rounded-full
            text-xl
            text-white
            transition
            hover:bg-white/10
          "
          aria-label="Zoom out"
          @click="zoomOut"
        >
          −
        </button>

        <button
          type="button"
          class="
            min-w-16
            rounded-full
            px-3
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:bg-white/10
          "
          aria-label="Reset zoom"
          @click="resetZoom"
        >
          {{ Math.round(zoom * 100) }}%
        </button>

        <button
          type="button"
          class="
            flex
            size-10
            items-center
            justify-center
            rounded-full
            text-xl
            text-white
            transition
            hover:bg-white/10
          "
          aria-label="Zoom in"
          @click="zoomIn"
        >
          +
        </button>
      </div>

      <!-- Image -->
      <div
        class="
          flex
          max-h-[90vh]
          max-w-[95vw]
          items-center
          justify-center
          overflow-auto
        "
      >
        <img
          :src="selectedImage"
          alt="Certificate preview"
          class="
            max-h-[85vh]
            max-w-[90vw]
            select-none
            object-contain
            transition-transform
            duration-200
          "
          :style="{
            transform: `scale(${zoom})`,
          }"
          @dblclick="resetZoom"
        />
      </div>
    </div>
  </Teleport>
</template>