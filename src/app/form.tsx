import Layout from "./components/Layout";

export default function FormPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Layout>
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Form Page</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 dark:bg-gray-800 dark:text-white"
        >
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full border rounded-md p-3 dark:bg-gray-700"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full border rounded-md p-3 dark:bg-gray-700"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              className="w-full border rounded-md p-3 dark:bg-gray-700"
              placeholder="Your Message"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}
