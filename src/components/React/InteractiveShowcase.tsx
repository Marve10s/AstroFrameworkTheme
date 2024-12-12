import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as HoverCard from '@radix-ui/react-hover-card';
import * as Slider from '@radix-ui/react-slider';
import * as Toast from '@radix-ui/react-toast';
import * as Tooltip from '@radix-ui/react-tooltip';
import { ChevronDown, X, Info, Bell, Volume2 } from 'lucide-react';

const InteractiveShowcase: React.FC = () => {
  const [volume, setVolume] = useState(50);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastOpen(true);
  };

  return (
    <section className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Interactive Components
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hover Card Demo */}
          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Hover Card</h3>
            <div className="flex justify-center">
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <HoverCard.Root>
                      <HoverCard.Trigger asChild>
                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                          Hover me
                        </button>
                      </HoverCard.Trigger>
                      <HoverCard.Portal>
                        <HoverCard.Content
                          className="p-4 rounded-lg bg-gray-800 border border-gray-700 shadow-xl"
                          sideOffset={5}
                        >
                          <div className="flex gap-4">
                            <Info className="w-12 h-12 text-blue-400" />
                            <div>
                              <h4 className="font-semibold mb-2">Interactive Tips</h4>
                              <p className="text-sm text-gray-400">
                                Hover cards provide additional context without interrupting the user's flow.
                              </p>
                            </div>
                          </div>
                          <HoverCard.Arrow className="fill-gray-800" />
                        </HoverCard.Content>
                      </HoverCard.Portal>
                    </HoverCard.Root>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="px-3 py-2 rounded bg-gray-700 text-sm"
                      sideOffset={5}
                    >
                      Click for more info
                      <Tooltip.Arrow className="fill-gray-700" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
          </div>

          {/* Slider and Toast Demo */}
          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Volume Control</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Volume2 className="w-6 h-6 text-gray-400" />
                <Slider.Root
                  className="relative flex items-center select-none touch-none w-full h-5"
                  value={[volume]}
                  onValueChange={(value) => setVolume(value[0])}
                  max={100}
                  step={1}
                >
                  <Slider.Track className="bg-gray-700 relative grow rounded-full h-2">
                    <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block w-5 h-5 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Volume"
                  />
                </Slider.Root>
                <span className="text-sm text-gray-400 w-8">{volume}%</span>
              </div>
              <button
                onClick={() => showToast(`Volume set to ${volume}%`)}
                className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Apply Changes
              </button>
            </div>
          </div>
        </div>

        {/* Toast Messages */}
        <Toast.Provider swipeDirection="right">
          <Toast.Root
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg fixed bottom-4 right-4 p-4 data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
            open={isToastOpen}
            onOpenChange={setIsToastOpen}
          >
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-blue-400" />
              <Toast.Title className="text-sm font-semibold">{toastMessage}</Toast.Title>
              <Toast.Close className="ml-auto">
                <X className="w-4 h-4 text-gray-400 hover:text-gray-300" />
              </Toast.Close>
            </div>
          </Toast.Root>
          <Toast.Viewport />
        </Toast.Provider>
      </motion.div>
    </section>
  );
};

export default InteractiveShowcase;
