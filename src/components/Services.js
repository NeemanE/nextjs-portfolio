import Image from "next/image";

export default function Services() {
  return (
    <section id="services">
      <h2 className="text-4xl font-bold text-center mt-10 mb-5">Services</h2>
      <div className="flex flex-wrap justify-center lg:gap-10 lg:mt-10 mb-24">
        <div className="w-[80vw] lg:w-[20%] mb-[5vh] rounded-lg">
          <div
            className="bg-[url('/images/Programming.png')] bg-cover bg-no-repeat h-3/4 "
            style={{
              maxHeight: "206px",
              minHeight: "205px",
            }}
          ></div>
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
        <div className="w-[80vw] lg:w-[20%] mb-[5vh] rounded-lg">
          <div
            className="bg-[url('/images/DNS.jpg')] bg-cover bg-no-repeat h-3/4 md:h-5/6 md:bg-center lg:h-3/4 lg:bg-cover"
            style={{ maxHeight: "206px", minHeight: "205px" }}
          ></div>
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
        <div className="w-[80vw] lg:w-[20%] mb-[5vh] rounded-lg">
          <div
            className="bg-[url('/images/CMS.jpg')] bg-cover bg-no-repeat h-3/4"
            style={{ maxHeight: "206px", minHeight: "205px" }}
          ></div>
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
        <div className="w-[80vw] lg:w-[20%] rounded-lg">
          <div
            className="bg-[url('/images/Cloud-Storage.jpg')] bg-cover bg-no-repeat h-3/4"
            style={{ maxHeight: "206px", minHeight: "205px" }}
          ></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold bg-transparent">
              Cloud Databases
            </h2>
            <p className="text-black mt-2 bg-transparent">
              Cloud databases offer scalable and reliable storage solutions for
              businesses, allowing you to securely store and access data from
              anywhere. With flexible deployment options and robust features,
              cloud databases allow you to optimize data management, enhance
              performance, and streamline operations in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
