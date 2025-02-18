import { ArrowRight, Shield, Sun, Wind, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "Solar Farm Initiative",
      type: "Solar Energy",
      funding: "$2.5M",
      roi: "12%",
      impact: "5,000 tons CO₂ reduction/year",
      icon: Sun,
    },
    {
      title: "Coastal Wind Farm",
      type: "Wind Energy",
      funding: "$3.8M",
      roi: "15%",
      impact: "8,000 tons CO₂ reduction/year",
      icon: Wind,
    },
    {
      title: "Hydroelectric Project",
      type: "Hydro Energy",
      funding: "$4.2M",
      roi: "14%",
      impact: "10,000 tons CO₂ reduction/year",
      icon: Droplet,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full container mx-auto px-4 pt-32 pb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-primary text-sm mb-4">
              SUSTAINABLE INVESTING
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-accent">
              Invest in a{" "}
              <span className="text-primary">Sustainable Future</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              Join our platform to invest in renewable energy projects. Earn competitive returns while contributing to a greener planet.
            </p>
            <div className="space-x-4">
              <button 
                className="btn-primary animate-fade-up"
                onClick={() => navigate('/projects')}
              >
                Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button 
                className="btn-secondary animate-fade-up"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-accent mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of sustainable energy projects, each offering unique opportunities for impact and returns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card hover-scale"
            >
              <project.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{project.type}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Funding Goal:</span>
                  <span className="font-medium">{project.funding}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected ROI:</span>
                  <span className="font-medium text-primary">{project.roi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Environmental Impact:</span>
                  <span className="font-medium text-secondary">{project.impact}</span>
                </div>
              </div>
              <button className="btn-secondary w-full mt-6">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-accent mb-4">Why Choose Our Platform</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make it easy to invest in renewable energy projects while ensuring security and transparency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-6"
          >
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure Investments</h3>
            <p className="text-gray-600">
              Your investments are protected through smart contracts and rigorous project vetting.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-6"
          >
            <Sun className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Sustainable Impact</h3>
            <p className="text-gray-600">
              Track your contribution to reducing carbon emissions and promoting renewable energy.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6"
          >
            <Wind className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Competitive Returns</h3>
            <p className="text-gray-600">
              Earn attractive returns while supporting the transition to renewable energy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">GreenStake</h3>
              <p className="text-gray-600">
                Democratizing green energy investments for a sustainable future.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/projects" className="text-gray-600 hover:text-primary">Projects</a></li>
                <li><a href="/staking" className="text-gray-600 hover:text-primary">Staking</a></li>
                <li><a href="/governance" className="text-gray-600 hover:text-primary">Governance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Whitepaper</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Discord</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 GreenStake. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
