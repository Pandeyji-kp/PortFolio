const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-2">Email: <a href="mailto:karanpandey1727@gmail.com" className="text-blue-400">karanpandey1727@gmail.com</a></p>
        <p className="mb-4">Contact No: <a href="tel:7412871727" className="text-blue-400">7412871727</a></p>
        
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/karan-pandey-kp" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/Pandeyji-kp" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            GitHub
          </a>
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;