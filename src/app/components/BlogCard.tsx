import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  gradient: string;
}

export default function BlogCard({ title, slug, gradient }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div
        className={`p-6 rounded-lg shadow-lg bg-gradient-to-r ${gradient} text-white cursor-pointer transition transform hover:scale-105`}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2">Read more about {title}</p>
      </div>
    </Link>
  );
}
