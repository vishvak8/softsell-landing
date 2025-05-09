const testimonials = [
    {
      name: "Aarav Mehta",
      role: "IT Manager, ClearTech Ltd.",
      quote:
        "SoftSell made it incredibly easy to offload our unused licenses. Fast payout and smooth process!",
    },
    {
      name: "Nisha Rao",
      role: "Procurement Head, Codeverse Inc.",
      quote:
        "We saved thousands through license resale thanks to SoftSell. Their team is professional and quick.",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg transition dark:bg-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition"
              >
                <p className="italic mb-4 text-gray-600 dark:text-gray-300 transition-colors duration-300">“{t.quote}”</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-200 text-indigo-800 font-bold rounded-full flex items-center justify-center mr-3">
                    {t.name.split(" ")[0][0]}
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-white">{t.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  