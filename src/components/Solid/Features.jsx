import { createSignal, createEffect, Show } from 'solid-js';

const Features = () => {
  const [activeTab, setActiveTab] = createSignal('playground');
  const [code, setCode] = createSignal(`<div class="text-center">
  <h2 class="text-2xl text-gradient">Hello, Solid!</h2>
  <p class="text-gray-400 mt-2">Edit me to see live changes</p>
</div>`);
  const [error, setError] = createSignal(null);
  const [theme, setTheme] = createSignal('light');
  const [previewCount, setPreviewCount] = createSignal(0);
  const [selectedColor, setSelectedColor] = createSignal('#00DC82');

  // Sanitize and render HTML safely
  const renderPreview = (htmlContent) => {
    try {
      return htmlContent;
    } catch (e) {
      setError(e.message);
      return '';
    }
  };

  const counterExample = () => {
    const template = `
    <div class="text-center space-y-4">
      <h2 class="text-2xl text-gradient">Interactive Counter</h2>
      <div class="flex justify-center items-center space-x-4">
        <button id="decrement" class="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700">-</button>
        <span class="text-2xl p-2 font-bold">${previewCount()}</span>
        <button id="increment" class="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700">+</button>
      </div>
    </div>`;
    setCode(template);
  };

  const colorPaletteExample = () => {
    const colors = ['#00DC82', '#36E4DA', '#4C7AF0', '#FF5D01' , '#FF3E00'];  
    const template = `
    <div class="text-center space-y-4">
      <h2 class="text-2xl text-gradient">Interactive Color Palette</h2>
      <div class="grid grid-cols-5 gap-3">
        ${colors.map(color => `
          <button 
            class="color-block p-8 rounded-lg transition-transform hover:scale-105 ${color === selectedColor() ? 'ring-2 ring-white' : ''}" 
            style="background: ${color}"
            data-color="${color}"
          ></button>
        `).join('')}
      </div>
      <div class="mt-4">
        <p class="text-lg">Selected Color: <span class="font-mono">${selectedColor()}</span></p>
      </div>
    </div>`;
    setCode(template);
  };

  // Add custom styles
  createEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .text-gradient {
        background: linear-gradient(to right, #00DC82, #36E4DA);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .preview-area {
        min-height: 200px;
        transition: all 0.3s ease;
      }
      .preview-area.light {
        background: #ffffff;
        color: #1a1a1a;
      }
      .preview-area.dark {
        background: #1a1a1a;
        color: #ffffff;
      }
      .color-block {
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .color-block:hover {
        transform: scale(1.05);
      }
    `;
    document.head.appendChild(style);
  });

  // Handle preview interactions
  createEffect(() => {
    const preview = document.querySelector('.preview-area');
    if (!preview) return;

    const handleClick = (e) => {
      // Handle counter buttons
      if (e.target.id === 'increment') {
        setPreviewCount(c => c + 1);
        counterExample();
      } else if (e.target.id === 'decrement') {
        setPreviewCount(c => c - 1);
        counterExample();
      }

      // Handle color palette
      if (e.target.classList.contains('color-block')) {
        const color = e.target.dataset.color;
        if (color) {
          setSelectedColor(color);
          colorPaletteExample();
        }
      }
    };

    preview.addEventListener('click', handleClick);
    return () => preview.removeEventListener('click', handleClick);
  });

  return (
    <section class="interactive-playground py-20 px-4">
      <div class="max-w-6xl mx-auto space-y-16">
        <div class="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden shadow-xl">
          <div class="border-b border-gray-800/50 p-4">
            <h2 class="text-2xl font-semibold text-white">Interactive Code Playground</h2>
            <p class="text-gray-400 mt-1">Edit HTML and see it update in real-time</p>
          </div>

          <div class="p-6 space-y-6">
            <div class="flex justify-end space-x-2">
              <button
                onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
                class="px-3 py-1 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                Toggle {theme() === 'light' ? 'Dark' : 'Light'} Mode
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Code Editor */}
              <div class="space-y-2">
                <h3 class="text-lg font-medium text-white">Editor</h3>
                <textarea
                  value={code()}
                  onInput={(e) => setCode(e.target.value)}
                  class="w-full h-64 p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white font-mono text-sm focus:outline-none focus:border-indigo-500/50"
                  placeholder="Enter your HTML code here..."
                />
              </div>

              {/* Live Preview */}
              <div class="space-y-2">
                <h3 class="text-lg font-medium text-white">Preview</h3>
                <div 
                  class={`preview-area ${theme()} p-4 rounded-lg border border-gray-700 overflow-auto`}
                  innerHTML={renderPreview(code())}
                />
              </div>
            </div>

            <Show when={error()}>
              <div class="text-red-400 text-sm mt-2">
                Error: {error()}
              </div>
            </Show>

            <div class="mt-4">
              <h3 class="text-lg font-medium text-white mb-2">Interactive Examples:</h3>
              <div class="space-y-2">
                <button
                  onClick={counterExample}
                  class="block w-full text-left px-4 py-2 rounded-lg bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
                >
                  Interactive Counter
                </button>
                <button
                  onClick={colorPaletteExample}
                  class="block w-full text-left px-4 py-2 rounded-lg bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
                >
                  Interactive Color Palette
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
