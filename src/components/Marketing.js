import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Marketing() {
  return (
    <section className="bg-gray-200">
      <div className="flex flex-col lg:flex-row w-full pb-10 lg:px-10 lg:py-20 items-center">
        <div className="lg:w-[50vw] text-center text-3xl lg:text-5xl font-bold py-5">
          <h1>Why Protocall?</h1>
        </div>
        <div className="flex flex-col justify-center w-[80vw] lg:w-[50vw] ">
          <p className="mb-8 text-md lg:text-lg">
            No matter who you are or what your business specializes in, everyone
            requires a website, and the tools to manage it in this digital age.
            Without them, you will have a significantly harder time reaching out
            to your desired audience. Here at Protocall, we promise you that we
            will provide you everything that you will need to broadcast your
            business and leave a lasting impression. Every one of our websites
            is created with the latest technologies, and will provide you with:
          </p>
          <ul className="font-semibold">
            <li className="flex items-start lg:items-center mb-2">
              <ChevronRightIcon className="w-7 h-7" />
              <p>
                The website itself, guaranteed to be fast, functional, and have
                high SEO performance
              </p>
            </li>
            <li className="flex items-start lg:items-center mb-2">
              <ChevronRightIcon className="w-6 h-6" />
              <p>Your matching domain name if you don't have one already</p>
            </li>
            <li className="flex items-start lg:items-center mb-2">
              <ChevronRightIcon className="w-6 h-6" />
              <p>
                A secure portal that you can login to and manage your website
              </p>
            </li>
            <li className="flex items-start lg:items-center mb-2">
              <ChevronRightIcon className="w-7 h-7" />
              <p>
                A database that is paired with your website to add, remove, or
                edit entries
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
