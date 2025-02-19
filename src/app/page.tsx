'use client'

import { LinkPreview } from '@/components/ui/link-preview'
import Link from 'next/link'
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
import { Carousel } from '@/components/shared/carousel'
import { linkClassnames } from '@/components/shared/classnames'

function Section() {
  return (
    <section className="w-screen h-screen snap-center relative snap-always snap-mandatory">
      <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-8">
        <div className="text-white text-sm font-[family-name:var(--font-geist-mono)]">
          <div className="font-bold mb-4">quick links</div>
          <div className="flex flex-row gap-4">
            <Link href="/#links" className="underline">
              info
            </Link>
            <Link href="/#links" className="underline">
              blog
            </Link>
            <Link href="/#bio" className="underline">
              bio
            </Link>
            <Link href="/#codeverse" className="underline">
              codeverse
            </Link>
          </div>
        </div>
      </div>
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
    </section>
  )
}

function Description() {
  return (
    <section
      id="bio"
      className="flex flex-col items-center h-screen w-screen snap-center snap-always snap-mandatory pt-11"
    >
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
        Some of the companies I&apos;ve worked at:
      </span>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] py-2">
        <div>
          <LinkPreview
            url="https://joinender.com"
            className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
          >
            Ender - Acquired by SchoolAI (2024)
          </LinkPreview>
        </div>
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
    </section>
  )
}

function Experience() {
  const images = [
    '/codeverse_product.png',
    '/codeverse-studio.png',
    '/image2.png',
    '/image3.png',
  ]

  return (
    <section
      id="codeverse"
      className="flex flex-col items-center h-screen w-screen snap-center snap-always snap-mandatory"
    >
      <div className="flex flex-col items-center justify-center pt-11">
        <h1 className="text-white text-2xl font-[family-name:var(--font-geist-mono)]">
          <motion.img
            src="/codeverse-logo.svg"
            height={100}
            width={100}
            className="w-full h-full pb-4"
          />
        </h1>
        <div className="text-white text-xs lg:text-sm font-[family-name:var(--font-geist-mono)] py-2 px-4 md:px-8 lg:px-32 max-w-4xl text-center">
          <p className="pb-4 font-bold">experience tldr:</p>
          <p>
            early founding engineer, led engineering & product to scale
            platform, acquired by varsity tutors
          </p>

          <div className="hidden sm:block">
            <p className="py-4 font-bold">key projects:</p>
            <ul className="list-disc list-inside">
              <li>curriculum & learning management system</li>
              <li>achievement & badge system</li>
              <li>social platform</li>
              <li>live coding</li>
              <li>in app video conferencing</li>
              <li>livestreaming</li>
            </ul>
          </div>

          <hr className="my-4" />
          <div className="text-xs">
            <p className="pb-4">
              Codeverse is an online platform and community where kids ages 6-13
              bring ideas to life by creating their own apps and games. Powered
              by KidScript — the world&apos;s first coding language created just
              for kids — Codeverse teaches foundational coding concepts
              alongside critical thinking, collaboration and creativity.
            </p>

            <p className="pt-6">
              I joined Codeverse as an early engineer in 2018 during their
              Series A round with a mission to build and scale the best
              interactive coding studio&apos;s across the nation.
            </p>

            <p className="pt-6">
              During the pandemic, the dream to scale the in-person studios was
              put on hold. I helped transition the product to an online
              platform, unlocking new opportunities for kids to learn to code
              from anywhere in the world.
            </p>

            <div className="pt-6">
              We built a platform with features like live coding, in app video
              conferencing, social platform, and a large coding curriculum. In
              2022 we got acquired by{' '}
              <LinkPreview
                url="https://varsitytutors.com"
                className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
              >
                Varsity Tutors
              </LinkPreview>{' '}
              to bring Codeverse to the k-12 school market.
            </div>
          </div>

          <div className="py-6">
            <LinkPreview
              url="https://www.youtube.com/watch?v=2iWkHxB-4xU"
              className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500 text-lg "
            >
              Click here to see the product in action
            </LinkPreview>
          </div>

          <div className="w-full flex justify-center pt-8">
            <Carousel images={images} width={600} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Links() {
  return (
    <section
      className="py-8 h-screen w-screen snap-center snap-always snap-mandatory"
      id="links"
    >
      <div>
        <h1 className="text-white text-2xl font-[family-name:var(--font-geist-mono)] text-center">
          links
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-4 justify-center pt-4">
            <LinkPreview
              url="https://github.com/mhar-andal"
              className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
            >
              github
            </LinkPreview>
            <LinkPreview
              url="https://www.linkedin.com/in/mharandal/"
              className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
            >
              linkedin
            </LinkPreview>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h1 className="text-white text-2xl font-[family-name:var(--font-geist-mono)] text-center py-4">
          my blog posts
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center pt-4">
            <h3 className="text-white text-lg font-[family-name:var(--font-geist-mono)] pb-2">
              ai
            </h3>
            <Link href="/ai-voice-agents" scroll className={linkClassnames}>
              how I built a prototype for a voice AI assistant
            </Link>
            <Link href="/ai-10x-development" className={linkClassnames}>
              10x developing with ai
            </Link>
            <Link href="/test" className={linkClassnames}></Link>
            <h3 className="text-white text-lg font-[family-name:var(--font-geist-mono)] pb-2">
              product
            </h3>
            <Link href="/project-timelines" className={linkClassnames}>
              estimating project timelines
            </Link>
            <Link href="/product-brainstorming" className={linkClassnames}>
              product brainstorming
            </Link>
            <Link href="/" className={linkClassnames}></Link>
            {/* <h3 className="text-white text-lg font-[family-name:var(--font-geist-mono)] pb-2">
              frontend
            </h3> */}
          </div>
        </div>
      </div>
    </section>
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
      className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden"
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
