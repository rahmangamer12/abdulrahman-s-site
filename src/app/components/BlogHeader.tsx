interface BlogHeaderProps {
    title: string;
    gradient: string;
  }
  
  export default function BlogHeader({ title, gradient }: BlogHeaderProps) {
    return (
      <div className={`bg-gradient-to-r ${gradient} py-20 text-center text-white`}>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    );
  }
  