import React from 'react';
import { motion } from 'framer-motion';

const codeSnippet = `
// MyReactComponent.tsx
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <p>Using React in Astro is that simple!</p>
    </div>
  );
}

// pages/index.astro
---
import Counter from '../components/Counter';
---
<Counter client:load />`;

const Hero: React.FC = () => {
  const features = [
    { 
      title: "Component-Based", 
      description: "Build complex UIs from small, reusable React components." 
    },
    { 
      title: "Islands Architecture", 
      description: "Load React only where needed, keeping the rest of your site static and fast." 
    },
    { 
      title: "Full TypeScript", 
      description: "Enjoy complete type safety and excellent developer experience." 
    }
  ];

  return (
    <section className="min-h-[80vh] flex items-center justify-center text-white px-8 py-12 mt-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
          React + Astro = Speed
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Build blazing-fast websites with React components in Astro. 
          Get the best of both worlds: React's interactivity and Astro's performance.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/10 cursor-default"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Code Example */}
        <div className="mb-12 text-left">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-400">Simple Integration</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <pre className="bg-gray-800/50 p-6 rounded-lg overflow-x-auto border border-gray-700/50 hover:border-blue-400/20 transition-all duration-300 font-mono text-sm">
              <code className="block">{codeSnippet}</code>
            </pre>
          </motion.div>
          <p className="text-center mt-4 text-gray-300">Zero configuration. Just import and use React components in your Astro pages.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://docs.astro.build/en/guides/integrations-guide/react/"
            className="inline-block px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.a>
          <motion.a
            href="https://github.com/Marve10s/AstroFrameworkTheme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg border-2 border-blue-500 hover:bg-blue-500/10 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
