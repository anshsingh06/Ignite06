export default function NGOFooter() {
  return (
    <footer className="bg-green-700 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">🌱 NGO Connect</h2>
          <p className="text-sm text-green-100">
            Fighting hunger, reducing food waste, and building stronger communities through sustainable programs and partnerships.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/ngo/home" className="hover:text-green-200 transition">Home</a></li>
            <li><a href="/ngo/programs" className="hover:text-green-200 transition">Programs</a></li>
            <li><a href="/ngo/contact" className="hover:text-green-200 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p>Email: <a href="mailto:info@ngoconnect.org" className="hover:text-green-200">info@ngoconnect.org</a></p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Green Street, Delhi, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-green-200 mt-6 border-t border-green-600 pt-4">
        © {new Date().getFullYear()} NGO Connect. All Rights Reserved.
      </div>
    </footer>
  );
}
