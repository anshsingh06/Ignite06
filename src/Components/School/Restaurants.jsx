import map from '../../assets/map.jpg';

export default function Restaurants() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Participating Restaurants</h2>
      <ul className="mb-6">
        <li>🍕 Pizza Palace – reducing food waste by sharing surplus with the community.</li>
        <li>🥗 Green Leaf Bistro – provides healthy meals and helps distribute donated food.</li>
        <li>🍞 Bread & Butter – dedicated to sustainability, donating surplus bread to local shelters.</li>
      </ul>
      <div>
        <img src={map} alt="Map showing restaurant locations" className="w-250 rounded shadow h-80" />
      </div>
    </div>
  );
}
