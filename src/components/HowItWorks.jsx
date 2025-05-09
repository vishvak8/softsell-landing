const steps = [
    {
      title: "Upload License",
      icon: "📤",
      description: "Send us your unused software license details securely.",
    },
    {
      title: "Get Valuation",
      icon: "💰",
      description: "We assess the license and provide a fair market quote.",
    },
    {
      title: "Get Paid",
      icon: "🏦",
      description: "Accept the quote and receive instant payment to your account.",
    },
  ];
  
  const HowItWorks = () => {
    return (
      <section className="py-20 px-6 bg-gray-50 text-black dark:bg-black dark:text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition dark:bg-gray-800 dark:text-white"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  