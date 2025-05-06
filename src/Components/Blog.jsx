import { Link } from "react-router-dom"; // ← Import Link

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with React",
      date: "April 2025",
      link: "/blog/getting-started-with-react",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="space-y-4">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-400">{post.date}</p>
              <Link
                to={post.link}
                className="text-blue-400 inline-block mt-2"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

  