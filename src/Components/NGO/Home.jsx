export default function Home() {
  return (
    <section className="p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Welcome to NGO Connect 🌱</h1>
      <p className="text-lg text-gray-700 mb-4">
        At NGO Connect, we bring together organizations, volunteers, and schools to fight hunger and support sustainable
        food distribution.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Join us in building a stronger, healthier community by participating in our programs and initiatives.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-800 mb-2">🌍 Community Programs</h2>
          <p>We collaborate with schools and restaurants to ensure no child goes hungry.</p>
        </div>
        <div className="bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-800 mb-2">🤝 Volunteer</h2>
          <p>Be part of our mission by volunteering in our food collection and distribution drives.</p>
        </div>
        <div className="bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-800 mb-2">📦 Donations</h2>
          <p>Your contributions help us deliver meals and expand our programs to more schools and NGOs.</p>
        </div>
      </div>
    </section>
  );
}
