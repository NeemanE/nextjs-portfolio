import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Marketing() {
  return (
    <section className="bg-gray-200">
      <div className="flex flex-row w-full px-10 py-20 items-center">
        <div className="w-[50vw] text-center text-5xl font-bold ">
          <h1>Why Protocall?</h1>
        </div>
        <div className="flex flex-col justify-center w-[50vw] ">
          <p className="mb-8 text-lg">
            No matter who you are or what your business specializes in, everyone
            requires a website, and the tools to manage it in this digital age.
            Without them, you will have a significantly harder time reaching out
            to your desired audience. Here at Protocall, we promise you that we
            will provide you everything that you will need to broadcast your
            business and leave a lasting impression. Every one of our websites
            is created with the latest technologies, and will provide you with:
          </p>
          <ul className="font-semibold">
            <li className="flex items-center">
              <ChevronRightIcon className="w-5 h-5" />
              <p>
                The website itself, guarenteed to be fast, functional, and have
                high SEO performance
              </p>
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="w-5 h-5" />
              <p>Your matching domain name if you dont have one already</p>
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="w-5 h-5" />
              <p>
                A secure portal that you can login to and manage your website
              </p>
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="w-5 h-5" />
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
