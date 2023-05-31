import React from 'react'
import { HiOutlineArrowTrendingDown, HiBarsArrowDown, HiOutlinePlay, HiOutlinePuzzlePiece } from 'react-icons/hi2'

const features = [
  {
    name: 'ScrollTrigger',
    description:
      'Animate anything based on scroll position',
    icon: HiBarsArrowDown,
  },
  {
    name: 'Tweens',
    description:
      'A tween describes an animation over time',
    icon: HiOutlinePlay,
  },
  {
    name: 'Scrubbing',
    description:
      'Tie the animation progress to the scrollbar',
    icon: HiOutlineArrowTrendingDown,
  },
  {
    name: 'Plugins',
    description:
      'Scramble text, smoothly transition svgs.',
    icon: HiOutlinePuzzlePiece,
  },
]

export default function Centered2x2Grid() {
  return (
    <div className="bg-dark py-2 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">GSAP Demo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-500 sm:text-4xl">
            Exploring GSAP&apos;s Features
          </p>
          <p className="mt-6 text-lg leading-8 text-brand-light">
            GSAP is a suite of tools that can animate pretty much anything JavaScript can touch. CSS properties, JS object properties, you name it!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map(({ name, description, icon: Icon }) => (
              <div key={name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-brand-500">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-brand-lighter">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}