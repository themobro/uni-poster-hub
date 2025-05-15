
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container-main py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">UniPostAI</h3>
            <p className="text-sm text-gray-600">
              A modern platform for university students to share and discover campus events, job opportunities, and more.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-600 hover:text-primary">Upload Poster</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-primary">Login</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">Email: support@unipostai.edu</li>
              <li className="text-gray-600">Student Union Building, Room 230</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} UniPostAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
