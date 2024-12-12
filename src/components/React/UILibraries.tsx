import React from 'react';
import { motion } from 'framer-motion';
import { Package, Layers, Sparkles, PenTool } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';

const UILibraries: React.FC = () => {
  const libraries = [
    {
      name: "Radix UI",
      description: "Unstyled, accessible components",
      icon: <Layers className="w-6 h-6" />,
      demo: (
        <div className="w-full max-w-sm mx-auto">
          <Tabs.Root defaultValue="tab1" className="w-full">
            <Tabs.List className="flex space-x-1 rounded-t-lg bg-gray-800/50 p-1">
              <Tabs.Trigger 
                value="tab1"
                className="flex-1 px-3 py-2 text-sm rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white transition-colors"
              >
                Accordion
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="tab2"
                className="flex-1 px-3 py-2 text-sm rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white transition-colors"
              >
                Dialog
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1" className="mt-2">
              <Accordion.Root type="single" collapsible className="w-full">
                <Accordion.Item value="item-1" className="mb-2">
                  <Accordion.Trigger className="w-full px-4 py-2 text-left bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                    What is Radix UI?
                  </Accordion.Trigger>
                  <Accordion.Content className="px-4 py-2 text-sm text-gray-400">
                    A collection of unstyled, accessible UI components for building high‑quality design systems.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </Tabs.Content>
            <Tabs.Content value="tab2" className="mt-2">
              <Dialog.Root>
                <Dialog.Trigger className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                  Open Dialog
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                  <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-6 rounded-lg shadow-xl">
                    <Dialog.Title className="text-lg font-bold mb-2">Welcome</Dialog.Title>
                    <Dialog.Description className="text-gray-400 mb-4">
                      This is a Radix UI Dialog component
                    </Dialog.Description>
                    <Dialog.Close className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
                      Close
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      )
    },
    {
      name: "Framer Motion",
      description: "Production-ready animations",
      icon: <Sparkles className="w-6 h-6" />,
      demo: (
        <div className="flex gap-4 justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          />
        </div>
      )
    },
    {
      name: "Lucide Icons",
      description: "Beautiful hand-crafted icons",
      icon: <PenTool className="w-6 h-6" />,
      demo: (
        <div className="flex gap-6 justify-center">
          <Package className="w-8 h-8 text-blue-500" />
          <Layers className="w-8 h-8 text-purple-500" />
          <Sparkles className="w-8 h-8 text-pink-500" />
          <PenTool className="w-8 h-8 text-indigo-500" />
        </div>
      )
    },

  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          UI Libraries Showcase
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraries.map((lib, index) => (
            <motion.div
              key={lib.name}
              className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4 mb-6">
                {lib.icon}
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{lib.name}</h3>
                  <p className="text-sm text-gray-400">{lib.description}</p>
                </div>
              </div>
              <div className="flex justify-center items-center min-h-[100px]">
                {lib.demo}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default UILibraries;
