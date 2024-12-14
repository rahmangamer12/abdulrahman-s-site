import BlogCard from "../components/BlogCard";

const blogPosts = [
  {
    title: "Understanding React",
    slug: "understanding-react",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
  },
  {
    title: "Mastering Next.js",
    slug: "mastering-nextjs",
    gradient: "from-green-400 via-teal-500 to-blue-500",
  },
  {
    title: "Styling with TailwindCSS",
    slug: "styling-with-tailwindcss",
    gradient: "from-pink-400 via-red-500 to-yellow-500",
  },
];

export default function BlogLandingPage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
          Our Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              slug={post.slug}
              gradient={post.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
