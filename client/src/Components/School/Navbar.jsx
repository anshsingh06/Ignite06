import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold">🍽️ Food to Future</h1>
      <div className="space-x-6">
        <Link to="/">How it Works</Link>
        <Link to="/restaurants">Participating Restaurants</Link>
        <Link to="/enroll">Enroll in School Programs</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}
