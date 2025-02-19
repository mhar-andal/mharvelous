'use client'

import React from 'react'

import { CodeBlock } from '@/components/ui/code-block'
import { LinkPreview } from '@/components/ui/link-preview'
import { linkClassnames } from '@/components/shared/classnames'

function VoiceAIAgent() {
  return (
    <div className="max-w-3xl mx-auto w-full px-8 pb-14">
      <h1 className="text-3xl font-bold mb-4 text-white font-[family-name:var(--font-geist-mono)] pt-10">
        10x developing with ai
      </h1>
      <p className="text-white text-sm font-[family-name:var(--font-geist-mono)] font-bold">
        feb 8, 2025
      </p>
      <p className="text-white text-sm font-[family-name:var(--font-geist-mono)]">
        <span className="font-bold">mhar andal</span>
      </p>
      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-6">
        i&apos;ve been using ai to develop for a while now.{' '}
        <LinkPreview url="https://www.cursor.com/" className={linkClassnames}>
          cursor
        </LinkPreview>{' '}
        is my favorite ai development tool.
      </div>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-6">
        the key to using cursor is learning how to use the various tools such as
        the inline code generator or the composer. llms are great for coding,
        but they are not great at very niche codebases. especially when you are
        working on a codebase that has sensitive code.
      </div>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-6">
        if you must work on a codebase that has sensitive code, you can use llms
        to help you. but you will need to be careful. i find that separating the
        code or feature into a smaller isolated chunk/project works well and can
        help you rapidly prototype features.
      </div>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-6">
        if you have the flexibility of starting from scratch, i highly recommend
        using{' '}
        <LinkPreview url="https://bolt.new/" className={linkClassnames}>
          bolt
        </LinkPreview>{' '}
        to start building a product using modern frameworks. iterate with
        cursor.
      </div>
    </div>
  )
}

export default VoiceAIAgent
