import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <div className="text-center mb-8">
        <FaReact className="inline-block text-6xl text-blue-600 dark:text-blue-400 mb-4" />
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-lg text-gray-800 dark:text-gray-300">
          Welcome to my blog! I'm passionate about writing and sharing insights on various topics related to technology, programming, and more.
        </p>
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Connect with Me</h2>
        <div className="flex justify-center">
          <a
            href="https://github.com/Amansrivastava1312"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 mr-6 flex items-center"
          >
            <FaGithub className="w-6 h-6 mr-2" />
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/srivastava-aman-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 flex items-center"
          >
            <FaLinkedin className="w-6 h-6 mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-8 text-center">
        Feel free to explore my blog and reach out to me for any questions or collaborations. Thank you for visiting!
      </p>
    </div>
  );
};

export default About;
