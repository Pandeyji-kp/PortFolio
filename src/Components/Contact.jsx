const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-2">Email: <a href="mailto:jameelahmed.tech@gmail.com" className="text-blue-400">jameelahmed.tech@gmail.com</a></p>
        <p className="mb-4">Contact No: <a href="tel:6367768568" className="text-blue-400">6367768568</a></p>
        
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/jameel-ahmed9" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/Jameel-DA" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

  