import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing custom arrow icons

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/path-to-your-background-image.jpg")' }}
      />
      <div className="relative z-10 py-32 px-6 text-center">
        {/* Hero Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Unlock Your Business Potential with Stunning Websites
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Creating responsive, user-friendly, and scalable web experiences that engage your audience and help your business grow.
        </p>
        <a
          href="#contact"
          className="inline-block py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Get Started
        </a>
      </div>

      {/* Card Slider Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">Our Services</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2, // 2 slides per view for medium screens
              },
              768: {
                slidesPerView: 3, // 3 slides per view for larger screens
              },
              1024: {
                slidesPerView: 4, // 4 slides per view for extra large screens
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-prev",  // Custom navigation button for previous slide
              nextEl: ".swiper-next",  // Custom navigation button for next slide
            }} 
            pagination={{ clickable: true }} // Pagination dots
            className="swiper-container"
          >
            {/* Card 1 */}
            <SwiperSlide>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <img
                  src="/images/website-development.jpg" // Add your image here
                  alt="Web Development"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
                <p className="text-gray-300">
                  Building responsive and scalable websites that provide excellent user experiences.
                </p>
              </div>
            </SwiperSlide>

            {/* Card 2 */}
            <SwiperSlide>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <img
                  src="/images/ui-ux-design.jpg" // Add your image here
                  alt="UI/UX Design"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-4">UI/UX Design</h3>
                <p className="text-gray-300">
                  Designing intuitive and engaging user interfaces to improve usability and design aesthetics.
                </p>
              </div>
            </SwiperSlide>

            {/* Card 3 */}
            <SwiperSlide>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <img
                  src="/images/ecommerce.jpg" // Add your image here
                  alt="E-commerce Solutions"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-4">E-commerce Solutions</h3>
                <p className="text-gray-300">
                  Providing end-to-end e-commerce solutions, including secure payment gateways and scalable platforms.
                </p>
              </div>
            </SwiperSlide>

            {/* Card 4 */}
            <SwiperSlide>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <img
                  src="/images/digital-marketing.jpg" // Add your image here
                  alt="Digital Marketing"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-4">Digital Marketing</h3>
                <p className="text-gray-300">
                  Helping businesses grow through effective SEO, SEM, and social media marketing strategies.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-prev absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white">
            <FaArrowLeft size={40} />
          </div>
          <div className="swiper-next absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white">
            <FaArrowRight size={40} />
          </div>
        </div>
      </section>
    </section>
  );
}
