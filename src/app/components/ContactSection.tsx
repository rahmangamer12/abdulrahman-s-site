export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6" action="https://formspree.io/f/xanyzrzk"
        method="POST">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            required
            name="name"
            className="w-full border rounded-md p-3"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
            className="w-full border rounded-md p-3"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Subject
          </label>
          <input
            type="subject"
            required
            name="subject"
            className="w-full border rounded-md p-3"
            placeholder="Enter Subject"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            className="w-full border rounded-md p-3"
            required
            placeholder="Your Message"
            rows={4}
          ></textarea>
        </div>
        <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
    </section>
  );
}
