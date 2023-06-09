import React from 'react';
import logoipsum from '@/public/logoipsum.svg';
import Image from 'next/image';
import { TestimonialP } from '@/services/types';
import { gsap } from 'gsap';

const featuredTestimonial = {
  body: 'Working with Arkane Digital has been an absolute game-changer for our business. Their expertise in headless CMSes has transformed the way we manage our content and deliver seamless experiences to our customers. We are grateful for their partnership and would highly recommend Arkane Digital to anyone seeking top-notch software consultancy services.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-brand-900.svg',
  },
}

interface TestimonialGridProps {
  testimonials: TestimonialP[];
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function removePTags(str) {
  const regex = /<p[^>]*>(.*?)<\/p>/g;
  return str.replace(regex, "$1");
}

/**
 * TestimonialGrid displays a responsive grid of testimonials with one featured testimonial.
 * TestimonialGrid should NOT be wrapped in a container element. This is one of the only
 * components that should be used as-is, without a container. The layout is self-contained.
 * TestimonialGrid expects a minimum of 4 testimonials, and will render very poorly if less.
 * @param {array} testimonials Array of testimonials (minimum of 4)
 * @returns React.ReactElement with a responsive grid of testimonials with one featured testimonial
 */
export default function TestimonialGrid({ testimonials }: TestimonialGridProps): React.ReactElement {
  const newTestimonials: TestimonialP[] = [...testimonials];
  // Split testimonials array in half, then in half again for the layout
  // [[[1],[2]], [[3],[4]]] <-- final result is structured like this
  function splitArray(inputArray): TestimonialP[][][] {
    const midPoint = Math.ceil(inputArray.length / 2);
    const firstHalf = inputArray.slice(0, midPoint);
    const secondHalf = inputArray.slice(midPoint);
    return [splitHalf(firstHalf), splitHalf(secondHalf)];
  }
  function splitHalf(halfArray) {
    const midPoint = Math.ceil(halfArray.length / 2);
    return [halfArray.slice(0, midPoint), halfArray.slice(midPoint)];
  }
  const testimonialList: TestimonialP[][][] = splitArray(newTestimonials);

  function increaseShadow(e) {
    if (e.relatedTarget === null || !e.currentTarget.contains(e.relatedTarget)) {
      gsap.to(e.currentTarget, { boxShadow: '1px 1px 20px 3px rgba(0, 0, 0, 0.5)', duration: 0.3, overwrite: "auto" })
    }
  }

  function revertShadow(e) {
    if (e.relatedTarget === null || !e.currentTarget.contains(e.relatedTarget)) {
      gsap.to(e.currentTarget, { boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)", duration: 0.3, overwrite: "auto" })
    }
  }


  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-brand-light to-brand-500"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-brand-light to-brand-500 xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-xl font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Exceptional service,<br />delighted customers<br />
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-brand-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-lg sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-brand-900/5 xl:col-start-2 xl:row-end-1"
            onMouseEnter={increaseShadow}
            onMouseLeave={revertShadow}>
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-brand-900">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-brand-900/10 px-6 py-4">
              <Image className="h-10 w-10 flex-none rounded-full bg-brand-lighter" src={featuredTestimonial.author.imageUrl} height={40} width={40} alt="avatar" />
              {/* <img
                className="h-10 w-10 flex-none rounded-full bg-brand-lighter"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              /> */}
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-brand-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <Image className="h-10 w-auto flex-none" src={logoipsum} alt="logo" />
            </figcaption>
          </figure>
          {testimonialList.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonialList.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-brand-900/5"
                      onMouseEnter={increaseShadow}
                      onMouseLeave={revertShadow}
                    >
                      <blockquote className="text-brand-900">
                        <p>{`“${removePTags(testimonial.body)}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        {/* <img className="h-10 w-10 rounded-full bg-brand-lighter" src={testimonial.author.imageUrl} alt="" /> */}
                        <Image className="h-10 w-10 rounded-full bg-brand-lighter" width={40} height={40} src={testimonial.author.imageUrl} alt="author avatar" />
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                          <div className="text-brand-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
