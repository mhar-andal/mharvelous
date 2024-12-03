'use client'

import { LampContainer } from '@/components/ui/lamp'
import { LinkPreview } from '@/components/ui/link-preview'
import { SparklesCore } from '@/components/ui/sparkles'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start mt-4">
        <TextHoverEffect text={'MHAR ANDAL'} />
        <div className="flex flex-col items-center justify-center w-full">
          <TextGenerateEffect
            className="text-lg italic !font-[family-name:var(--font-geist-mono)]"
            words="SENIOR SOFTWARE ENGINEER"
          ></TextGenerateEffect>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <motion.img
                src="/react.svg"
                alt="React"
                className="!text-white size-10 absolute top-0"
                // className="absolute inset-0 w-full h-full"
                animate={{
                  rotate: [0, 40, 0],
                  y: [40, 10, 40],
                }}
                transition={{
                  duration: 10,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
              <motion.img
                src="/typescript.svg"
                alt="Typescript"
                className="!text-white size-10 absolute top-0"
                animate={{
                  rotate: [0, 40, 0],
                  y: [60, 20, 60],
                }}
                initial={{
                  x: 100,
                  y: 60,
                }}
                transition={{
                  duration: 10,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
              <motion.img
                src="/next.svg"
                alt="NextJS"
                className="!text-white size-10 absolute top-0"
                animate={{
                  rotate: [0, 40, 0],
                  y: [60, 20, 60],
                }}
                initial={{
                  x: -100,
                  y: 60,
                }}
                transition={{
                  duration: 10,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
              <motion.img
                src="/tailwind.svg"
                alt="Tailwind"
                className="!text-white size-10 absolute top-0"
                initial={{
                  x: 160,
                  y: 100,
                }}
                transition={{
                  duration: 10,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
                animate={{
                  rotate: [0, 40, 0],
                  y: [120, 60, 120],
                }}
              />
              <motion.img
                src="/node.svg"
                alt="NodeJS"
                className="!text-white size-10 absolute top-0"
                initial={{
                  x: -40,
                  y: 110,
                }}
                transition={{
                  duration: 10,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
                animate={{
                  rotate: [0, 40, 0],
                  y: [110, 80, 110],
                }}
              />
              <motion.img
                src="/rails.svg"
                alt="Rails"
                className="!text-white size-10 absolute top-0"
                initial={{
                  x: 40,
                  y: 110,
                }}
                transition={{
                  duration: 10,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
                animate={{
                  rotate: [0, 40, 0],
                  y: [110, 80, 110],
                }}
              />
              <motion.img
                src="/aws.svg"
                alt="AWS"
                className="!text-white size-10 absolute top-0"
                initial={{
                  x: -160,
                  y: 110,
                }}
                transition={{
                  duration: 10,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
                animate={{
                  rotate: [0, 40, 0],
                  y: [110, 80, 110],
                }}
              />
            </div>

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>

        <div className="h-[1820px] mt-14 pt-14 px-8 flex flex-col items-center w-full">
          <span className="text-white mt-4 pt-4 italic font-[family-name:var(--font-geist-mono)]">
            Experience
          </span>

          <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] py-2">
            <div>
              <LinkPreview
                url="https://varsitytutors.com"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Varsity Tutors (2022 - 2024)
              </LinkPreview>
            </div>
            <div>
              <LinkPreview
                url="https://codeverse.com"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Codeverse (2018 - 2022)
              </LinkPreview>
            </div>
            <div>
              <LinkPreview
                url="https://invest.grainger.com/investor-news/news-details/2017/Grainger-Launches-Gamutcom-for-Customers-Seeking-Robust-Product-and-Application-Information-to-Help-Solve-Problems-Quickly/default.aspx"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Gamut (2017 - 2018)
              </LinkPreview>
            </div>
          </div>

          <span className="text-white mt-4 pt-4 italic font-[family-name:var(--font-geist-mono)]">
            Resume
          </span>
        </div>
      </main>
    </div>
  )
}
