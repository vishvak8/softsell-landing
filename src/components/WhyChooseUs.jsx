const features = [
    {
      title: "Instant Payouts",
      icon: "⚡",
      description: "Get paid the same day your license is accepted.",
    },
    {
      title: "Secure Transfers",
      icon: "🔒",
      description: "Your data and licenses are transferred with bank-grade security.",
    },
    {
      title: "Best Market Price",
      icon: "💸",
      description: "We guarantee a fair quote based on market demand.",
    },
    {
      title: "Trusted by 100+ Companies",
      icon: "🏢",
      description: "Businesses across industries use SoftSell for secure resale.",
    },
  ];
  
  const WhyChooseUs = () => {
    return (
      <section className="py-20 px-6 bg-white text-black dark:bg-black dark:text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition text-center dark:bg-gray-800 dark:text-white"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  