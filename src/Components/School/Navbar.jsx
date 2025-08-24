import { Link } from "react-router-dom";
import fork from '../../assets/fork.svg';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-400 text-white shadow">
            {/* Logo + Title in same line */}
            <div className="flex items-center space-x-2">
                <img src={fork} alt="logo" className="h-8 w-8 opacity-100" />
                <h1 className="text-xl font-bold">Food to Future</h1>
            </div>

            {/* Navigation Links */}
            <div className="space-x-6">
                <ul className="flex space-x-6">
                    <li><Link to="/">How it Works</Link></li>
                    <li><Link to="/Restaurants">Participating Restaurants</Link></li>
                    <li><Link to="/EnrollProgram">Enroll in School Programs</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                </ul>

            </div>
        </nav>
    );
}
