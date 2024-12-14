import { useRouter } from "next/router";
import BlogHeader from "../components/BlogHeader";

const blogPosts = {
  "understanding-react": {
    title: "Understanding React",
    content: "React is a JavaScript library for building user interfaces...",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
  },
  "mastering-nextjs": {
    title: "Mastering Next.js",
    content: "Next.js is a React framework for building web applications...",
    gradient: "from-green-400 via-teal-500 to-blue-500",
  },
  "styling-with-tailwindcss": {
    title: "Styling with TailwindCSS",
    content: "TailwindCSS is a utility-first CSS framework...",
    gradient: "from-pink-400 via-red-500 to-yellow-500",
  },
};

export default function BlogPostPage() {
  const { slug } = useRouter().query;

  if (!slug || typeof slug !== "string" || !blogPosts[slug]) {
    return <div>Post not found!</div>;
  }

  const post = blogPosts[slug];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <BlogHeader title={post.title} gradient={post.gradient} />
      <div className="container mx-auto py-8 px-6">
        <p className="text-lg dark:text-white">{post.content}</p>
      </div>
    </div>
  );
}
