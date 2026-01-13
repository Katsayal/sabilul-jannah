import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary dark:text-white">
            Giving Hope, Changing Lives
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Sabilul Jannah Foundation is committed to providing support and resources to underserved communities, fostering a future of opportunity and well-being for all.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link 
              to="/donate" 
              className="bg-accent hover:bg-opacity-90 text-primary font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
            >
              Donate Now
            </Link>
            <Link 
              to="/about"
              className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Other sections can be added here */}
      <div className="p-4">
        <h2 className="text-2xl text-center">Further content will go here</h2>
      </div>
    </>
  );
};

export default Home;
