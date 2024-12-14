export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">About Me</h2>
      <p className="text-lg text-gray-300 text-center mb-8">
        I am a passionate web developer specializing in HTML5, CSS3, and JavaScript. My mission is to create beautiful, responsive, and user-friendly websites that help businesses and individuals thrive online.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Web Development Knowledge Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-white mb-4">Web Development Knowledge</h3>
          <p className="text-gray-400 mb-4">
            Web development involves creating websites and web applications that are efficient, user-friendly, and visually appealing. As a web developer, I focus on the following:
          </p>
          <ul className="text-gray-400 space-y-2">
            <li>- **Building responsive websites** for all devices and screen sizes</li>
            <li>- **Optimizing website performance** for speed and smooth user experience</li>
            <li>- **Ensuring accessibility** and SEO best practices are followed</li>
          </ul>
        </div>

        {/* Web Development Benefits Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-white mb-4">Benefits of Web Development</h3>
          <p className="text-gray-400 mb-4">
            Web development offers numerous benefits, including:
          </p>
          <ul className="text-gray-400 space-y-2">
            <li>- **Business Growth:** A strong online presence can boost sales and visibility.</li>
            <li>- **Better User Engagement:** With responsive and interactive designs, users have a better experience.</li>
            <li>- **SEO Advantage:** Properly structured websites have better chances of ranking higher in search engines.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
        {/* Skills Section with Icons */}
        <div className="text-center">
          <img
            src="/images/html5-icon.png" // Replace with your HTML5 icon image path
            alt="HTML5"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h4 className="text-lg font-semibold text-white">HTML5</h4>
          <p className="text-gray-400">Structure and content of web pages</p>
        </div>

        <div className="text-center">
          <img
            src="/images/css3-icon.jpg" // Replace with your CSS3 icon image path
            alt="CSS3"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h4 className="text-lg font-semibold text-white">CSS3</h4>
          <p className="text-gray-400">Styling and layout of web pages</p>
        </div>

        <div className="text-center">
          <img
            src="/images/javascript-icon.png" // Replace with your JavaScript icon image path
            alt="JavaScript"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h4 className="text-lg font-semibold text-white">JavaScript</h4>
          <p className="text-gray-400">Interactive and dynamic web content</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-white">Let’s Work Together!</h3>
        <p className="text-lg text-gray-400 mt-4">
          If you&apos;re looking for a dedicated web developer to bring your ideas to life, feel free to reach out. Let&apos;s create something amazing together!
        </p>
      </div>
    </section>
  );
}
