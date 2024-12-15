<template>
  <section class="min-h-[80vh] flex items-center justify-center text-white px-8 py-12 mt-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column -->
        <div class="text-left space-y-6">
          <Transition
            appear
            enter-active-class="transition duration-1000 delay-200"
            enter-from-class="opacity-0 -translate-x-12"
            enter-to-class="opacity-100 translate-x-0"
          >
            <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-br from-teal-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Vue + Astro:<br/>
              <span class="text-4xl md:text-5xl">Where Innovation Meets Speed</span>
            </h1>
          </Transition>

          <Transition
            appear
            enter-active-class="transition duration-1000 delay-400"
            enter-from-class="opacity-0 -translate-x-8"
            enter-to-class="opacity-100 translate-x-0"
          >
            <p class="text-xl text-gray-300 leading-relaxed">
              Experience the perfect blend of Vue's reactivity and Astro's performance. Build faster, smoother, and more engaging web applications.
            </p>
          </Transition>

          <Transition
            appear
            enter-active-class="transition duration-1000 delay-600"
            enter-from-class="opacity-0 -translate-y-8"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div class="flex flex-wrap gap-4">
              <button 
                @click="activeDemo = (activeDemo % 3) + 1"
                class="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-emerald-500/25"
              >
                Try Demo {{ activeDemo }}
              </button>
              <a
                href="https://docs.astro.build/en/guides/integrations-guide/vue/"
                class="px-6 py-3 rounded-lg border-2 border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/10 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started →
              </a>
            </div>
          </Transition>
        </div>

        <!-- Right Column - Interactive Demo -->
        <div class="relative">
          <Transition
            appear
            enter-active-class="transition duration-1000 delay-800"
            enter-from-class="opacity-0 translate-x-12"
            enter-to-class="opacity-100 translate-x-0"
          >
            <div class="relative">
              <!-- Demo Container -->
              <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-xl">
                <div class="absolute  ">
                  <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>

                <!-- Dynamic Demo Content -->
                <Transition
                  mode="out-in"
                  enter-active-class="transition duration-300"
                  enter-from-class="opacity-0 translate-y-4"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-300"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-4"
                >
                  <div :key="activeDemo" class="pt-4">
                    <!-- Counter Demo -->
                    <div v-if="activeDemo === 1" class="space-y-4">
                      <h3 class="text-xl font-semibold text-emerald-400">Reactive Counter</h3>
                      <div class="flex items-center gap-4">
                        <button 
                          @click="count--"
                          class="px-4 py-2 rounded bg-gray-700/50 hover:bg-gray-700 transition-colors"
                        >-</button>
                        <span class="text-2xl font-mono">{{ count }}</span>
                        <button 
                          @click="count++"
                          class="px-4 py-2 rounded bg-gray-700/50 hover:bg-gray-700 transition-colors"
                        >+</button>
                      </div>
                      <p class="text-gray-400">Computed double: {{ doubled }}</p>
                    </div>

                    <!-- Color Demo -->
                    <div v-if="activeDemo === 2" class="space-y-4">
                      <h3 class="text-xl font-semibold text-emerald-400">Color Mixer</h3>
                      <div class="space-y-2">
                        <input 
                          type="range" 
                          v-model="hue" 
                          min="0" 
                          max="360"
                          class="w-full"
                        >
                        <div 
                          class="h-24 rounded-lg transition-colors duration-300"
                          :style="{ backgroundColor: `hsl(${hue}, 70%, 50%)` }"
                        ></div>
                        <p class="text-gray-400">Hue: {{ hue }}°</p>
                      </div>
                    </div>

                    <!-- List Demo -->
                    <div v-if="activeDemo === 3" class="space-y-4">
                      <h3 class="text-xl font-semibold text-emerald-400">Task Manager</h3>
                      <div class="space-y-2">
                        <div v-for="(task, index) in tasks" :key="index" class="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            v-model="task.done"
                            class="rounded border-gray-600 text-emerald-500 focus:ring-emerald-500"
                          >
                          <span :class="{ 'line-through text-gray-500': task.done }">
                            {{ task.text }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>

                <div class="mt-4 text-sm text-gray-500">
                  Demo {{ activeDemo }} of 3
                </div>
              </div>

              <!-- Decorative Elements -->
              <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
              <div class="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-xl"></div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Demo State
const activeDemo = ref(1);
const count = ref(0);
const doubled = computed(() => count.value * 2);
const hue = ref(180);
const tasks = ref([
  { text: 'Learn Vue', done: true },
  { text: 'Master Astro', done: false },
  { text: 'Build awesome apps', done: false }
]);

// Code example for display
const codeExample = `<!-- Simple Vue Component -->
< script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
</ script>

<template>
  <button @click="count++">
    Count: {{ count }}
  </button>

  <p>Doubled: {{ doubled }}</p>
</template>`;
</script>