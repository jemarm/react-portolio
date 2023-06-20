import React from "react";

export default function Footer() {
  return(
<div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center">    
<footer class=" dark:bg-gray-900">
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between text-sm text-gray-500 sm:text-center ">
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="https://github.com/jemarm?tab=repositories" class="socials text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                  <span class="sr-only">GitHub account</span>
              </a>
          <a href="https://www.linkedin.com/in/jemar-morris/" class="socials text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.25 0H3.75C1.678 0 0 1.677 0 3.75v16.5C0 22.322 1.678 24 3.75 24h16.5c2.072 0 3.75-1.678 3.75-3.75V3.75C24 1.677 22.322 0 20.25 0zm-5.778 17.28h-2.744v-4.293c0-.82-.015-1.875-1.143-1.875-1.144 0-1.318.895-1.318 1.818v4.35h-2.744V8.107h2.652v.97h.037c.37-.7 1.274-1.44 2.619-1.44 2.805 0 3.32 1.844 3.32 4.241v4.402z" />
              </svg>
              <span class="sr-only">LinkedIn page</span>
            </a>
          </div>
      </div>
</footer>
</div>

  )
}