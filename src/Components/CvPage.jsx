const CvPage = () => {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">My Resume</h1>
        <iframe
          src="/Karan Pandey CV .pdf"
          title="Resume"
          className="w-full max-w-4xl h-[80vh] rounded border"
        ></iframe>
        <a
          href="/Karan Pandey CV .pdf"
          download
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"   
        >
          📥 Download Resume
        </a>
      </div>
    );
  };
  
  export default CvPage;
  