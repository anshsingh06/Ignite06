import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-green-100 shadow">
      <h1 className="text-xl font-bold">🌱 NGO Connect</h1>
      <div className="space-x-6">
        <Link to="/NGO">Home</Link>
        <Link to="/NGO/programs">Programs</Link>
        <Link to="/NGO/contact">Contact</Link>
        <Link to="/">Schools Enrolled</Link>
      </div>
    </nav>
  );
}
