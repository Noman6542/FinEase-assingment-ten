import { BiTrendingUp } from "react-icons/bi";

const Footer = () => (
  <footer className="bg-gray-800 text-white mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center space-x-2 text-xl font-bold tracking-tight mb-2">
            <BiTrendingUp className="w-6 h-6 text-indigo-400" />
            <span>FinEase</span>
          </div>
          <p className="text-sm text-gray-400">Manage your money, live with ease.</p>
        </div>
        
        <div>
          <h5 className="text-md font-semibold mb-3 text-indigo-300">Company</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-md font-semibold mb-3 text-indigo-300">Support</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-indigo-400">Contact Details</a></li>
            <li><a href="#" className="hover:text-indigo-400">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-md font-semibold mb-3 text-indigo-300">Legal</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-indigo-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-md font-semibold mb-3 text-indigo-300">Social</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-indigo-400">Facebook</a></li>
            <li><a href="#" className="hover:text-indigo-400">Twitter</a></li>
            <li><a href="#" className="hover:text-indigo-400">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} FinEase. All rights reserved.
      </div>
    </div>
  </footer>
);
export default Footer;