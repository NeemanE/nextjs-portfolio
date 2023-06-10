export default function Services() {
  return (
    <section id="services">
      <h2 className="text-4xl font-bold text-center mt-10 mb-5">Services</h2>
      <div className="flex flex-wrap justify-center lg:gap-10 lg:mt-10 mb-64 ">
        <div className="w-[80vw] lg:w-[20%] mb-[23vh] rounded-lg">
          <div className="bg-[url('https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831_1280.png')] bg-cover bg-no-repeat h-3/4 "></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold bg-transparent">
              Web Design and Development
            </h2>
            <p className="text-black mt-2 bg-transparent">
              Elevate your online presence with our comprehensive web design and
              development services. We craft stunning and functional websites
              tailored to your business needs, ensuring a seamless user
              experience and maximum impact.
            </p>
          </div>
        </div>
        <div className="w-[80vw] lg:w-[20%] mb-[23vh] rounded-lg">
          <div className="bg-[url('https://mma.prnewswire.com/media/2059745/Infoblox_Inc.jpg?p=large')] bg-cover bg-no-repeat h-3/4 md:h-5/6 md:bg-center"></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold bg-transparent">
              Domain Name Services
            </h2>
            <p className="text-black mt-2 bg-transparent">
              Boost your website's performance and security with our top-notch
              DNS services. Our reliable and efficient DNS solutions ensure fast
              and secure domain name resolution, enhancing your online presence
              and user experience.
            </p>
          </div>
        </div>
        <div className="w-[80vw] lg:w-[20%] mb-[25vh] rounded-lg">
          <div className="bg-[url('https://cdn.pixabay.com/photo/2014/02/13/07/28/cms-265126_1280.jpg')] bg-cover bg-no-repeat h-3/4 md:h-5/6 md:bg-center"></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold bg-transparent">
              Content Management Systems
            </h2>
            <p className="text-black mt-2 bg-transparent">
              Simplify your website management with our powerful content
              management systems (CMS). Our CMS solutions empower you to easily
              create, edit, and organize your website content, enabling seamless
              updates and allowing you to reach your customers!
            </p>
          </div>
        </div>
        <div className="w-[80vw] lg:w-[20%] rounded-lg mb-[5vh]">
          <div className="bg-[url('https://res.infoq.com/articles/secure-distributed-database-cluster/en/headerimage/generatedHeaderImage-1660581268935.jpg')] bg-cover bg-no-repeat h-3/4"></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold bg-transparent">
              Cloud Databases
            </h2>
            <p className="text-black mt-2 bg-transparent">
            Cloud databases offer scalable and reliable storage solutions for businesses, allowing you to securely store and access data from anywhere. With flexible deployment options and robust features, cloud databases allow you to optimize data management, enhance performance, and streamline operations in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
