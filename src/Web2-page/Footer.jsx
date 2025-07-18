import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">ABDULLAH</h2>
            <p className="text-white mb-4 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
              Provident unde eveniet optio corrupti sed. Earum suscipit<br />
              eaque blanditiis cupiditate illo fugiat minus facilis illum<br />
              assumenda cum, consequuntur temporibus atque rerum<br />
              dolorum, dolorem sapiente. Earum nobis quibusdam<br />
              voluptatibus!
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">CONTENT</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Services</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Our Team</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white mt-8 pt-6 text-center text-sm sm:text-base">
          <p>
            © 2025 All Rights Reserved. Design by <span className="font-semibold">Abdullah</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
