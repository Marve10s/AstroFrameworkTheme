<script>
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let headline = "Svelte + Astro = Magic";
  let description = "Experience the joy of Svelte's reactivity combined with Astro's performance. Write less code, build faster websites.";

  const features = [
    { title: "Reactive by Default", description: "No more useState or useEffect. Svelte's reactive statements just work." },
    { title: "Zero Runtime", description: "Svelte compiles away, leaving you with vanilla JavaScript that runs at lightning speed." },
    { title: "Truly Magical", description: "Auto-subscriptions, built-in animations, and scoped CSS make development a breeze." }
  ];

  const codeExample = `<! -- Simple Svelte Component -- >
< script>
  let count = 0;
  $: doubled = count * 2;
</ script>

<button on:click={() => count++}>
  Count: {count}
</button>

<p>Doubled: {doubled}</p>`;
</script>

<section class="min-h-[80vh] flex items-center justify-center text-white px-8 py-12 mt-24">
  <div class="max-w-7xl mx-auto text-center">
    <div in:fly={{ y: 50, duration: 1000, delay: 200, easing: quintOut }}>
      <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
        {headline}
      </h1>
    </div>

    <div in:fly={{ y: 30, duration: 1000, delay: 400, easing: quintOut }}>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        {description}
      </p>
    </div>

    <!-- Svelte Features -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {#each features as feature, i (feature.title)}
        <div 
          in:fly={{ y: 50, duration: 1000, delay: 600 + i * 200, easing: quintOut }}
          class="p-6 rounded-lg border border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/10 cursor-default"
        >
          <h3 class="text-xl font-semibold mb-3 text-orange-400">{feature.title}</h3>
          <p class="text-gray-300">{feature.description}</p>
        </div>
      {/each}
    </div>

    <!-- Code Example -->
    <div 
      in:fly={{ y: 20, duration: 800, delay: 1200, easing: quintOut }}
      class="mb-12 text-left"
    >
      <h3 class="text-2xl font-semibold mb-4 text-center text-orange-400">Simple, Reactive, Powerful</h3>
      <div class="relative">
        <pre class="bg-gray-800/50 p-6 rounded-lg overflow-x-auto border border-gray-700/50 hover:border-orange-400/20 transition-all duration-300 font-mono text-sm">
          <code class="block">{codeExample}</code>
        </pre>
      </div>
      <p class="text-center mt-4 text-gray-300">No complex state management. No unnecessary re-renders. Just pure simplicity.</p>
    </div>

    <div 
      in:fly={{ y: 20, duration: 800, delay: 1400, easing: quintOut }}
      class="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <a href="https://docs.astro.build/en/guides/integrations-guide/svelte/" class="inline-block px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5">
        Get Started
      </a>
      <a href="https://github.com/Marve10s/AstroFrameworkTheme" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 rounded-lg border-2 border-indigo-500 hover:bg-indigo-500/10 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5">
        View on GitHub
      </a>
    </div>
  </div>
</section>

<style lang="postcss">
</style>