import React from 'react';
import { motion } from 'framer-motion';

const LivePreview = () => {
  const [color, setColor] = React.useState('#3B82F6');
  
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-800 flex flex-col">
        <div className="flex items-center justify-between p-2 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-sm text-gray-400">Live Preview</div>
        </div>
        
        <div className="p-1 m-7">
          <div className="space-y-3">
            <div className="text-center space-y-2">
              <p className="text-gray-300 font-medium">Try it yourself!</p>
              <p className="text-sm text-gray-400">Click the input below to choose a color</p>
            </div>
            <input 
              type="color" 
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-12 rounded-lg cursor-pointer bg-transparent hover:scale-[1.02] transition-transform"
            />
            <div className="text-center">
              <p className="text-sm text-gray-400">Selected color: <span className="font-mono text-gray-300">{color}</span></p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const reactCode = 
  ` 
// Color Picker Component
import { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#3B82F6');
  
  return (
    <div className="space-y-4">
      <input 
        type="color" 
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div 
        style={{ backgroundColor: color }}
        className="w-full h-20 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ColorPicker;`;

  const astroCode = `---
// pages/index.astro
import ColorPicker from '../components/ColorPicker';
---

<div class="my-component">
  <h2>Interactive Color Picker</h2>
  <ColorPicker client:load />
</div>`;

  const CodeCard = ({ title, code }: { title: string; code: string }) => (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-sm text-gray-400">{title}</div>
        </div>
        <pre className="overflow-x-auto">
          <code className="block text-sm text-gray-300">{code}</code>
        </pre>
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-[80vh] relative flex items-center justify-center py-20 mt-20">      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            React + Astro
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Build dynamic, interactive components with the power of React in your Astro pages.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* First Row */}
          <CodeCard title="ColorPicker.tsx" code={reactCode} />
          <div className="space-y-8">
            <CodeCard title="index.astro" code={astroCode} />
            <LivePreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
