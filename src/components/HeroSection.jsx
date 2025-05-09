import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white px-4 dark:from-black dark:via-gray-900 dark:to-gray-800">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Sell Your Unused Software Licenses in Minutes
        </h1>
        <p className="text-lg md:text-xl mb-6">
          SoftSell helps businesses quickly turn unused software into real cash — fast, secure, and simple.
        </p>

        {/* button */}
        <a
          href="#contact"
          className="mt-6 inline-block text-sm px-5 py-2 rounded font-semibold shadow transition 
                     bg-indigo-600 text-white hover:bg-indigo-700 
                     dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Get a Quote
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
