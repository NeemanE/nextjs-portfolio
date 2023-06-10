import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [openLink, setOpenLink] = useState(null);

  const handleCardClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="about" className="bg-gray-200 pb-12">
      <h1 className="text-center pt-6 pb-4 text-3xl font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row justify-center items-center sm:px-16">
        <p className="text-center text-lg sm:text-left px-8 lg:px-40">
          Hi, My name is Neeman, and I'm the main developer here at Protocall.
          As a recently graduated web developer with a strong passion for
          innovation, I am eager to contribute my skills and knowledge to help
          drive your startup's success. With a solid foundation in modern web
          technologies and a keen eye for design, I am committed to creating
          intuitive and visually appealing web solutions that effectively
          represent your brand and resonate with your target audience. Here are
          the clients that I've served so far, and I hope that you will join me
          so we can grow together.
        </p>
      </div>
      <div className="flex flex-col mx-14 sm:flex-row justify-center mt-8 gap-8">
        <div
          className="bg-[#f7f7f7] rounded-lg shadow-md p-6 mb-4 cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-animation border hover:glow-animation"
          onClick={() => handleCardClick("https://protocallfinancial.com")}
        >
          <Image
            src="/images/Protocall-Logo-Dark.png"
            alt="Protocall Financial Logo"
            className="mx-auto mb-4"
            width={175}
            height={175}
          />
          <h2 className="text-lg font-semibold mb-2 text-center">
            Protocall Financial
          </h2>
          <p className="text-gray-600 text-center">protocallfinancial.com</p>
        </div>
        <div
          className="bg-[#f7f7f7] border rounded-lg shadow-md p-6 mb-4 cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-animation hover:glow-animation"
          onClick={() => handleCardClick("https://dieselpowerx.com")}
        >
          <Image
            src="/images/Diesel-Power.png"
            alt="Diesel Power Logo"
            className="mx-auto mb-4"
            width={175}
            height={175}
          />
          <h3 className="text-lg font-semibold mb-2 text-center ">
            Diesel Power
          </h3>
          <p className="text-gray-600 text-center">dieselpowerx.com</p>
        </div>
      </div>
      <div></div>
      <div className="flex flex-wrap justify-center"></div>
    </section>
  );
}
