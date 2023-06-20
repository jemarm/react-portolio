import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <form
          netlify
          name="contact"
          className="lg:w-1/2 md:w-1/2 flex flex-col  w-full md:py-8 mt-8 md:mt-0 ">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-center">
            Get In Touch
          </h2>
          <p className="leading-relaxed mb-5 mt-3 text-center">
            Feel free to reach out
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:jemarmrrs@gmail.com"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 mt-3 focus:outline-none hover:bg-green-600 rounded text-lg">
              Let's Connect
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}