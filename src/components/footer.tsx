import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between"> 
          <div className="w-full md:w-1/3 mb-4">
            <h2 className="text-xl font-bold">Your Company</h2>
            <p className="mt-2 text-gray-400">
            Nullam tristique
            </p>
          </div>
 
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div> 
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-lg font-semibold mb-2">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.244l-1.918.001c-1.504 0-1.795.714-1.795 1.762v2.31h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c-5.488 0-9.93 4.443-9.93 9.93 0 5.488 4.443 9.93 9.93 9.93s9.93-4.443 9.93-9.93c0-5.487-4.442-9.93-9.93-9.93zm0 18.071c-4.49 0-8.142-3.653-8.142-8.142s3.653-8.142 8.142-8.142 8.142 3.653 8.142 8.142-3.653 8.142-8.142 8.142zm-3.651-11.507h7.3v2.042h-7.3zm0 3.806h7.3v2.042h-7.3z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm4.622 9.84h-3.209v7.187h-2.826v-7.187h-2.449v-2.602h2.449v-1.591c0-2.079 1.279-3.223 3.158-3.223.893 0 1.661.066 1.883.096v2.184h-1.294c-1.014 0-1.208.482-1.208 1.187v1.347h2.474l-.323 2.602z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-8">
          © 2025 Nullam tristique.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
