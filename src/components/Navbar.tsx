
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Wallet } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            GreenStake
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/staking"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Staking
            </Link>
            <Link
              to="/governance"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Governance
            </Link>
            <button className="btn-primary">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/staking"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Staking
              </Link>
              <Link
                to="/governance"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Governance
              </Link>
              <button className="btn-primary">
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
