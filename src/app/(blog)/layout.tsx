'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
export default function Name({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <Link
        href="/#links"
        className="cursor-pointer absolute top-4 left-6 text-sm"
      >
        <h6 className="group text-white text-xs font-[family-name:var(--font-geist-mono)]">
          <ArrowLeft
            size={16}
            className="inline-block group-hover:translate-x-1 transition-transform duration-300"
          />{' '}
          back to all posts
        </h6>
      </Link>
      {children}
    </div>
  )
}
