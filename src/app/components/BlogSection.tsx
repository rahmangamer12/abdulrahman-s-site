import { useTheme } from "./ThemeContext";
import Image from "next/image";

export default function BlogSection() {
  const { theme, toggleTheme } = useTheme();

  const blogs = [
    {
      slug: "how-to-create",
      title: "How to Create a Stunning Website",
      description:
        "Learn how to build an eye-catching website with modern tools and techniques.",
      image: "/blog-images/stunning-website.jpg", // Update with your image
    },
    {
      slug: "ai-in-web",
      title: "The Role of AI in Web Development",
      description:
        "Explore how artificial intelligence is revolutionizing web development.",
      image: "/blog-images/ai-in-web.jpg", // Update with your image
    },
    {
      slug: "design-trends",
      title: "Top 10 Design Trends of 2024",
      description: "Discover the latest trends shaping web design in 2024.",
      image: "/blog-images/design-trends.jpg", // Update with your image
    },
  ];

  return (
    <section
      id="blog"
      className={`py-16 px-6 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded-full"
      >
        {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </button>

      <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className={`p-6 shadow-lg rounded-md ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            }`}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
