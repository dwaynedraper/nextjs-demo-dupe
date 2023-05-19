import React from 'react'

import { ArticleP } from '@/services/types'

interface ArticleProps {
  article: ArticleP;
}

export default function Article({ article }: ArticleProps): React.ReactElement {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div className="block rounded-lg shadow-lg bg-brand-lighter">
          <div className="flex flex-wrap items-center">
            <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
              <img src="https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80" alt="Photo by charlesdeluvio on Unsplash"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                <p className="uppercase text-primary font-bold mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 mr-2">
                    {/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                    <path fill="currentColor"
                      d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
                  </svg>Hot news
                </p>
                <div dangerouslySetInnerHTML={{ __html: article.body }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
