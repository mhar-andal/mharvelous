'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  images: string[]
  width?: number
  height?: number
}

export function Carousel({ images, width = 400, height = 300 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    center: {
      opacity: 1,
      x: 0,
      zIndex: 1,
    },
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 1000 : -1000,
    }),
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -1000 : 1000,
      zIndex: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection
      if (nextIndex < 0) return images.length - 1
      if (nextIndex >= images.length) return 0
      return nextIndex
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div
      style={{ height, width }}
      className="relative overflow-hidden rounded-lg mx-8"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.2 },
            x: { damping: 30, stiffness: 300, type: 'spring' },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          whileHover={{
            scale: 1.15,
          }}
          className="absolute w-full h-full object-cover z-1"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-all z-50 cursor-pointer hover:scale-125 duration-150"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-all z-50 cursor-pointer hover:scale-125 duration-150"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full z-50 hover:scale-150 cursor-pointer transition-all duration-150 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
