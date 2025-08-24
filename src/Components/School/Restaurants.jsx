export default function Restaurants() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Participating Restaurants</h2>
      <ul className="mb-6">
        <li>🍕 Pizza Palace – reducing food waste by sharing surplus with the community.</li>
        <li>🥗 Green Leaf Bistro – provides healthy meals and helps distribute donated food.</li>
        <li>🍞 Bread & Butter – dedicated to sustainability, donating surplus bread to local shelters.</li>
      </ul>
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        🗺️ Map View
      </div>
    </div>
  );
}
