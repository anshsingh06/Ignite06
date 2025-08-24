export default function NGOContact() {
  return (
    <section className="p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Contact Us 📩</h1>
      <form className="bg-green-100 p-6 rounded-2xl shadow-md max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
