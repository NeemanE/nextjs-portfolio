export default function Hero() {
  return (
    <section id="home">
      <div className="w-fit h-[65vh] mx-auto bg-[url('/images/software-developer.jpg')] bg-cover bg-no-repeat flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-semibold sm:text-5xl sm:font-bold text-white" style={{ textShadow: '0 0 20px black' }}>
          Houston Based Web Development
        </h1>
        <p className="p-10 sm:py-10 sm:px-20 text-white sm:text-lg" style={{ textShadow: '2px 2px 10px black' }}>
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
