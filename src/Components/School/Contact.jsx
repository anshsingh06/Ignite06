export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">📩 Contact Us</h2>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Have questions or want to collaborate? Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form className="w-full max-w-md space-y-4 bg-white p-6 shadow-lg rounded-xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
