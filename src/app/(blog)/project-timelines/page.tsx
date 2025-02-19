'use client'

import React from 'react'

import { CodeBlock } from '@/components/ui/code-block'
import { LinkPreview } from '@/components/ui/link-preview'

function ProjectTimelines() {
  const listClassname =
    'text-white text-sm font-[family-name:var(--font-geist-mono)] py-4'
  return (
    <div className="max-w-3xl mx-auto w-full px-8 pb-14">
      <h1 className="text-3xl font-bold mb-4 text-white font-[family-name:var(--font-geist-mono)] pt-10">
        how I estimate project timelines
      </h1>
      <p className="text-white text-sm font-[family-name:var(--font-geist-mono)] font-bold">
        feb 3, 2025
      </p>
      <p className="text-white text-sm font-[family-name:var(--font-geist-mono)]">
        <span className="font-bold">mhar andal</span>
      </p>
      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-12">
        Managing project timelines can often feel like charting a course through
        unfamiliar waters. You have clear goals at the outset, but as you sail
        onward, unforeseen challenges and shifting priorities can quickly
        complicate the plan. One of the most effective ways to maintain momentum
        and clarity is by breaking down larger projects into smaller, more
        manageable pieces. These smaller tasks or sub-projects allow teams to
        address potential issues earlier and adapt more smoothly to changing
        conditions.
      </div>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-12">
        <span className="font-bold">
          why break projects into smaller pieces?
        </span>
        <ol className="list-inside list-decimal">
          <li className={listClassname}>
            <span className="">early visibility:</span>
            <br />
            <div className="pt-4">
              when you break a larger project into small, well-defined work
              packages, you gain early insights into progress and potential
              roadblocks. This allows project managers to identify risks and
              opportunities before they become major hurdles.
            </div>
          </li>
          <li className={listClassname}>
            <span className="">better team alignment:</span>
            <br />
            <div className="pt-4">
              small milestones make it easier to communicate expectations. teams
              can see the direct impact of their contributions and feel more
              engaged with tangible goals rather than an abstract, far-off
              finish line.
            </div>
          </li>
          <li className={listClassname}>
            <span className="">faster adjustments:</span>
            <br />
            <div className="pt-4">
              if something goes awry, it&apos;s far easier to make a mid-course
              correction on a small piece of the project than to overhaul an
              entire project plan. early feedback loops reduce wasted time and
              resources.
            </div>
          </li>
          <li className={listClassname}>
            <span className="">clearer accountability:</span>
            <br />
            <div className="pt-4">
              by defining smaller tasks, it becomes clear who is responsible for
              what. This level of transparency helps maintain momentum and
              prevents tasks from falling through the cracks.
            </div>
          </li>
          <li className={listClassname}>
            <span className="">incremental value:</span>
            <br />
            <div className="pt-4">
              smaller deliverables can provide immediate value to stakeholders,
              offering them usable outputs long before the entire project is
              complete. this approach can also help secure buy-in and additional
              resources, as decision-makers can see early ROI.
            </div>
          </li>
        </ol>
        <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-12">
          <span className="font-bold">
            how to break a project into smaller pieces
          </span>
          <ul className="list-inside list-disc">
            <li className={listClassname}>
              <span>identify the major functions:</span> <br />{' '}
              <div className="pt-4">
                {' '}
                look at broad capabilities or departments involved in your
                project. each function should represent a significant portion of
                the deliverable
              </div>
            </li>
            <li className={listClassname}>
              <span>decompose each function into sub-functions:</span> <br />{' '}
              <div className="pt-4">
                break down each high-level function into more detailed tasks.
                for example, if “Engineering” is a function, you might break it
                down into “System Architecture,” “Backend Development,”
                “Frontend Development,” and so forth.
              </div>
            </li>
            <li className={listClassname}>
              <span>assign responsibilities:</span> <br />{' '}
              <div className="pt-4">
                {' '}
                clearly assign each sub-task to the appropriate team or
                individual. define roles and responsibilities to avoid confusion
                and overlap.
              </div>
            </li>
            <li className={listClassname}>
              <span>establish milestones and timelines:</span> <br />{' '}
              <div className="pt-4">
                {' '}
                for each functional area, set milestones that indicate
                significant progress points (e.g., completion of a prototype,
                user acceptance testing). These milestones make it easier to
                gauge performance, spot delays, and make timely adjustments.
              </div>
            </li>
            <li className={listClassname}>
              <span>integrate feedback loops:</span> <br />{' '}
              <div className="pt-4">
                no matter how you break down functions, all the pieces must come
                together in the end. set up regular check-ins or reviews to
                ensure that the outputs from each function align with the
                overall project requirements.
              </div>
            </li>
          </ul>
        </div>

        <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-12">
          <span className="font-bold">
            <span className="underline">communication</span> is key to project
            success, ensure that all teams have proper channels in place to
            foster a healthy collaborative environment.
          </span>
          <br />
          <div className="pt-4"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTimelines
