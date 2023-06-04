export default function Hero() {
  return (
    <section id="home">
      <div className="w-fit h-[65vh] mx-auto bg-[url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg')] bg-cover bg-no-repeat flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-white">
          Houston Based Web Development
        </h1>
        <p className="py-10 px-20 text-white text-lg">
          "At (placeholder for now), we are passionate about crafting
          exceptional web experiences. Our dedicated team of designers and
          developers combine creativity and technical expertise to deliver
          stunning, user-friendly websites that help businesses thrive in the
          digital world."
        </p>
      </div>
    </section>
  );
}
