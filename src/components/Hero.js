import Image from 'next/legacy/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-[65vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/software-developer4.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={50}
          priority={true}
        />
      </div>
      <div className="relative z-9 text-center">
        <h1 className="text-3xl font-semibold sm:text-5xl sm:font-bold text-white" style={{ textShadow: '0 0 20px black' }}>
          Houston Based Web Development
        </h1>
        <p className="p-10 sm:py-10 sm:px-20 text-white sm:text-lg" style={{ WebkitTextStroke: '.1px black' }}>
          At Protocall Technologies, we are passionate about crafting
          exceptional web experiences. Our dedicated team of designers and
          developers combine creativity and technical expertise to deliver
          stunning, user-friendly websites that help businesses thrive in the
          digital world.
        </p>
      </div>
    </section>
  );
}
