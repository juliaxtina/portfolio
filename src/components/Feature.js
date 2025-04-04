import {
    CodeBracketIcon,
    CameraIcon,
    PaintBrushIcon,
    VideoCameraIcon,
  } from '@heroicons/react/24/outline'

export default function Feature() {
    return (
     <>

<section>
  <div class="px-4 py-16 mx-auto max-w-screen-xl sm:py-16 lg:px-8 lg:gap-8 xl:gap-0 lg:py-24">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What can I offer?</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400 text-balance">
          I help brands stand out with digital experiences that are clear, engaging, and visually memorable.
          </p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full lg:h-20 lg:w-20 bg-fuchsia-200">
              <CodeBracketIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">UX/UI Design</h3>
              <p class="text-gray-500 dark:text-gray-400 text-balance">Digital journeys that align with business goals and engage users </p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 lg:h-20 lg:w-20 bg-fuchsia-400">
              <PaintBrushIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Visual Design</h3>
              <p class="text-gray-500 dark:text-gray-400 text-balance"> Visual identities that brings personality</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full lg:h-20 lg:w-20 bg-indigo-400">
              <VideoCameraIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Motion Design</h3>
              <p class="text-gray-500 dark:text-gray-400 text-balance"> Bring ideas to life through movement.</p>
          </div>
         
         
         
      </div>
  </div>
</section>

</>
  )
}
