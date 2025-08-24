export default function Programs() {
  return (
    <section className="p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Our Programs 📢</h1>
      <div className="space-y-6">
        <div className="bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-800 mb-2">🥗 Food Distribution</h2>
          <p>
            Partnering with restaurants and local vendors, we collect surplus food and distribute it to schools and shelters.
          </p>
        </div>
        <div className="bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-800 mb-2">📚 School Nutrition Programs</h2>
          <p>
            Collaborating with schools to provide nutritious meals to students, ensuring better learning and growth.
          </p>
        </div>
        <div className="bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-800 mb-2">🌍 Awareness Campaigns</h2>
          <p>
            Running workshops, drives, and campaigns to spread awareness about food wastage and hunger reduction.
          </p>
        </div>
      </div>
    </section>
  );
}
