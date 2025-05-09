import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (!form.license) newErrors.license = "Select a license type";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setForm({
        name: "",
        email: "",
        company: "",
        license: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <section className="py-20 px-6 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 rounded px-4 py-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 rounded px-4 py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">License Type</label>
            <select
              name="license"
              value={form.license}
              onChange={handleChange}
              className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 rounded px-4 py-2"
            >
              <option value="">-- Select --</option>
              <option value="Single User">Single User</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Volume">Volume</option>
            </select>
            {errors.license && <p className="text-red-500 text-sm">{errors.license}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 rounded px-4 py-2"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="mt-4 text-sm px-5 py-2 rounded font-semibold shadow transition
                       bg-indigo-600 text-white hover:bg-indigo-700
                       dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
