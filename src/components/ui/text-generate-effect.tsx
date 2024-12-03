'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/lib/utils'
import { clsx } from 'clsx'

export const TextGenerateEffect = ({
  words,
  className,
  textClassname,
  filter = true,
  duration = 0.5,
}: {
  words: string
  className?: string
  textClassname?: string
  filter?: boolean
  duration?: number
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split('')
  useEffect(() => {
    animate(
      'span',
      {
        filter: filter ? 'blur(0px)' : 'none',
        opacity: 1,
      },
      {
        delay: stagger(0.08),
        duration: duration ? duration : 1,
      },
    )
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-white opacity-0"
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}
              {''}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('', className)}>
      <div className="mt-4">
        <div
          className={clsx(
            'text-white text-2xl leading-snug tracking-wide',
            textClassname,
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
