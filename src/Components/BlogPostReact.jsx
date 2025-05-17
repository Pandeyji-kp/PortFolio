const BlogPostReact = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Getting Started with React</h1>
      <p className="text-gray-400 text-sm mb-6">Published: April 2025</p>

      <p className="mb-4">
        React is a JavaScript library developed by Facebook for building fast and interactive user interfaces. It helps developers build reusable components that update efficiently when your data changes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🔧 Setting Up</h2>
      <p className="mb-4">
        The easiest way to get started is using <code className="bg-gray-800 px-1 py-0.5 rounded">Vite</code> or <code className="bg-gray-800 px-1 py-0.5 rounded">Create React App</code>.
      </p>

      <pre className="bg-gray-800 p-4 rounded mb-4 overflow-x-auto">
        <code>npm create vite@latest my-app --template react</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-2">📦 Understanding Components</h2>
      <p className="mb-4">
        React apps are built using components. A component is just a JavaScript function that returns JSX.
      </p>

      <pre className="bg-gray-800 p-4 rounded mb-4 overflow-x-auto">
        <code>{`function Welcome() {
    return <h1>Hello, World!</h1>;
  }`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🧠 Props & State</h2>
      <p className="mb-4">
        Props are used to pass data to components. State is local data managed inside a component, often with the <code className="bg-gray-800 px-1 py-0.5 rounded">useState</code> hook.
      </p>

      <pre className="bg-gray-800 p-4 rounded mb-4 overflow-x-auto">
        <code>{`const [count, setCount] = useState(0);`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🚀 What's Next?</h2>
      <p className="mb-4">
        After you're comfortable with the basics, learn about React Router for navigation, Context API for global state, and libraries like Tailwind CSS or Framer Motion for styling and animation.
      </p>

      <p className="mt-6 italic text-gray-400">Happy coding! 😊</p>
    </section>
  );
};

export default BlogPostReact;
