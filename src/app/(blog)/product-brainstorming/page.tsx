'use client'

import React from 'react'

import { CodeBlock } from '@/components/ui/code-block'
import { LinkPreview } from '@/components/ui/link-preview'
import { linkClassnames } from '@/components/shared/classnames'

function ProductBrainstorming() {
  return (
    <div className="max-w-3xl mx-auto w-full px-8 pb-14">
      <h1 className="text-3xl font-bold mb-4 text-white font-[family-name:var(--font-geist-mono)] pt-10">
        product brainstorming
      </h1>
      <p className="text-white text-sm font-[family-name:var(--font-geist-mono)] font-bold">
        feb 15, 2025
      </p>
      <p className="text-white text-sm font-[family-name:var(--font-geist-mono)]">
        <span className="font-bold">mhar andal</span>
      </p>
      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-6">
        when it comes to generating fresh ideas, nothing beats a great
        brainstorming session. The challenge is ensuring those sessions stay
        focused, productive, and—most importantly—fun.
      </div>

      <div className="text-white font-[family-name:var(--font-geist-mono)] pt-6 text-lg font-bold">
        tools
      </div>
      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-6">
        <LinkPreview
          className={linkClassnames}
          url="https://www.figma.com/design/1234567890/1234567890"
        >
          figjam is a great tool for brainstorming
        </LinkPreview>{' '}
        it&apos;s easy to use and has realtime collaborative features to help
        people stay involved.
      </div>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-6">
        it&apos;s important to build context prior to a brainstorming session.
        this will help foster a better environment for everyone to collaborate
        and generate ideas.
      </div>

      <div className="">
        <h2 className="text-white text-lg font-[family-name:var(--font-geist-mono)] pt-6 font-bold">
          the best ideas come from your users
        </h2>

        <p className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-6">
          involved your users if possible, as they are the ones who use the
          product and often have the best ideas.
        </p>

        <p className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-6">
          at codeverse, we would regularly pop into the studios and ask kids
          what they think would be awesome to add to the platform. a lot of our
          gamification features were born from the feedback we heard.
        </p>
      </div>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-6"></div>
    </div>
  )
}

export default ProductBrainstorming
