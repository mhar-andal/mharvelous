'use client'

import { LinkPreview } from '@/components/ui/link-preview'
import { SparklesCore } from '@/components/ui/sparkles'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import Image from 'next/image'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function Section() {
  return (
    <div className="w-screen h-screen snap-center relative snap-always snap-mandatory">
      <TextHoverEffect text={'MHAR ANDAL'} />
      <div className="absolute top-[60%] flex flex-col items-center justify-center w-full">
        <TextGenerateEffect
          className="text-lg italic font-[family-name:var(--font-geist-mono)] font-thin"
          words="AI PRODUCT ENGINEER"
        ></TextGenerateEffect>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-xs" />
          <div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-xs" />
          <div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

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
              className="text-white! size-10 absolute top-0"
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
              className="text-white! size-10 absolute top-0"
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
              className="text-white! size-10 absolute top-0"
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
              className="text-white! size-10 absolute top-0"
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
              className="text-white! size-10 absolute top-0"
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
              className="text-white! size-10 absolute top-0"
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
              className="text-white! size-10 absolute top-0"
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
    </div>
  )
}

function Description() {
  return (
    <div className="flex flex-col items-center h-screen w-screen snap-center snap-always snap-mandatory pt-11">
      <Image
        src="/mhar_avatar_photo.jpeg"
        alt="Mhar"
        width={300}
        height={300}
        className="rounded-full"
      />

      <p className="pt-8 text-white text-sm font-[family-name:var(--font-geist-mono)] py-2 px-4 md:px-8 lg:px-32 max-w-4xl text-center">
        With over 7 years of experience in software engineering, I specialize in{' '}
        <br /> <u>AI-driven products</u>, <u>ed-tech platforms</u>, and{' '}
        <u>gamified environments</u>. I have a proven track record of{' '}
        <u>leading engineering teams</u>, <u>scaling platforms</u>, and{' '}
        <u>integrating AI solutions</u> to enhance user engagement and
        operational efficiency.
      </p>

      <span className="text-sm text-white mt-4 pt-4 italic font-[family-name:var(--font-geist-mono)]">
        Some of the companies I've worked at:
      </span>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] py-2">
        <div>
          <LinkPreview
            url="https://varsitytutors.com"
            className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
          >
            Varsity Tutors - $NRDY (2022 - 2024)
          </LinkPreview>
        </div>
        <div>
          <LinkPreview
            url="https://www.builtinchicago.org/articles/codeverse-10-million-seed-round"
            className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
          >
            Codeverse - Acquired by $NRDY (2018 - 2022)
          </LinkPreview>
        </div>
        <div>
          <LinkPreview
            url="https://invest.grainger.com/investor-news/news-details/2017/Grainger-Launches-Gamutcom-for-Customers-Seeking-Robust-Product-and-Application-Information-to-Help-Solve-Problems-Quickly/default.aspx"
            className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
          >
            Gamut (2017 - 2018)
          </LinkPreview>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className="flex flex-col items-center h-screen w-screen snap-center snap-always snap-mandatory">
      <div className="flex flex-col items-center justify-center pt-11">
        <h1 className="text-white text-2xl font-[family-name:var(--font-geist-mono)]">
          <motion.img
            src="/codeverse-logo.svg"
            height={100}
            width={100}
            className="w-full h-full pb-4"
          />
        </h1>
        <div className="text-white text-xs font-[family-name:var(--font-geist-mono)] py-2 px-4 md:px-8 lg:px-32 max-w-4xl text-center">
          <p className="pb-4">
            Codeverse is an online platform and community where kids ages 6-13
            bring ideas to life by creating their own apps and games. Powered by
            KidScript — the world's first coding language created just for kids
            — Codeverse teaches foundational coding concepts alongside critical
            thinking, collaboration and creativity.
          </p>

          <LinkPreview
            url="https://www.youtube.com/watch?v=2iWkHxB-4xU"
            className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
          >
            See it in action
          </LinkPreview>

          <div className="grid grid-cols-2 gap-12">
            <div className="w-full h-full flex items-center justify-center">
              <motion.img
                src="/codeverse_product.png"
                alt="Codeverse"
                whileHover={{ scale: 2 }}
              />
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <motion.img
                src="/codeverse-studio.png"
                alt="Codeverse2"
                whileHover={{ scale: 2 }}
              />
            </div>

            <div className="w-full h-full flex items-center justify-center">
              <motion.img
                src="/image2.png"
                alt="Codeverse2"
                whileHover={{ scale: 2, y: -100 }}
              />
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <motion.img
                src="/image3.png"
                alt="Codeverse2"
                whileHover={{ scale: 2, y: -100 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Links() {
  return (
    <div className="py-8 h-screen w-screen snap-center snap-always snap-mandatory">
      <h1 className="text-white text-2xl font-[family-name:var(--font-geist-mono)] text-center">
        Links
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-4 justify-center pt-4">
          <LinkPreview
            url="https://github.com/mhar-andal"
            className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
          >
            GitHub
          </LinkPreview>
          <LinkPreview
            url="https://www.linkedin.com/in/mharandal/"
            className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
          >
            LinkedIn
          </LinkPreview>
        </div>
        {/* <LinkPreview
          url="/blog"
          className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500 pt-4"
        >
          Blog
        </LinkPreview> */}
      </div>
    </div>
  )
}

const Sections = [
  <Section key={1} />,
  <Description key={2} />,
  <Experience key={3} />,
  <Links key={4} />,
]

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null)
  const [endOfScroll, setEndOfScroll] = useState(false)
  const { scrollY } = useScroll({
    container: homeRef,
  })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (!homeRef.current) return

    const scrollHeight = homeRef.current.scrollHeight
    const clientHeight = homeRef.current.clientHeight
    const threshold = 5 // 5px threshold for rounding errors

    // Check if we're at the bottom
    const isAtBottom = latest + clientHeight >= scrollHeight - threshold

    if (isAtBottom && !endOfScroll) {
      setEndOfScroll(true)
      console.log('end of scroll')
    } else if (!isAtBottom && endOfScroll) {
      setEndOfScroll(false)
    }
  })

  return (
    <div
      className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll"
      ref={homeRef}
    >
      {Sections.map((section) => section)}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: endOfScroll ? 0 : 1 }}
        className="absolute bottom-8 right-8 text-xs text-white font-[family-name:var(--font-geist-mono)]"
      >
        scroll down <ArrowDown />
      </motion.div>
    </div>
  )
}
