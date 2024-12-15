import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCode, FaPaintBrush, FaShoppingCart, FaBullhorn } from "react-icons/fa";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and scalable websites that provide excellent user experiences.",
    image: "/images/website-development.jpg",
    alt: "Web Development",
    icon: <FaCode size={40} className="text-indigo-500" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces to improve usability and design aesthetics.",
    image: "/images/ui-ux-design.jpg",
    alt: "UI/UX Design",
    icon: <FaPaintBrush size={40} className="text-pink-500" />,
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    description: "Providing end-to-end e-commerce solutions, including secure payment gateways and scalable platforms.",
    image: "/images/ecommerce.jpg",
    alt: "E-commerce Solutions",
    icon: <FaShoppingCart size={40} className="text-green-500" />,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Helping businesses grow through effective SEO, SEM, and social media marketing strategies.",
    image: "/images/digital-marketing.jpg",
    alt: "Digital Marketing",
    icon: <FaBullhorn size={40} className="text-yellow-500" />,
  },
];

const HeroSection: React.FC = () => {
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-32 px-6 text-center"
        style={{ backgroundImage: 'url("/path-to-your-background-image.jpg")' }}
      >
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

      {/* Responsive Image Slider */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">Our Services</h2>
          <Slider {...sliderSettings}>
            {services.map((service) => (
              <div key={service.id} className="p-4">
                <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <div className="flex justify-center mt-4">{service.icon}</div>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-auto object-cover mt-4"
                    style={{ maxHeight: "300px" }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
