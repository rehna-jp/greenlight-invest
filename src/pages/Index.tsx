
import { ArrowRight, Shield, Sun, Wind, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "Solar Farm Initiative",
      type: "Solar Energy",
      description: "Large-scale solar farm project generating clean energy for local communities.",
      impact: "Reduces CO2 emissions by 50,000 tons annually",
      returns: "12% estimated annual returns",
      icon: Sun
    },
    {
      title: "Wind Power Project",
      type: "Wind Energy",
      description: "Offshore wind farm powering coastal cities with renewable energy.",
      impact: "Powers 100,000 homes with clean energy",
      returns: "10% estimated annual returns",
      icon: Wind
    },
    {
      title: "Hydro Power Plant",
      type: "Hydro Energy",
      description: "Sustainable hydroelectric power plant utilizing river resources.",
      impact: "Sustainable power for industrial use",
      returns: "8% estimated annual returns",
      icon: Droplet
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Invest in Sustainable Energy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our platform to make impactful investments in renewable energy projects
            while earning competitive returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <project.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Shield className="w-4 h-4 mr-2" />
                <span>{project.impact}</span>
              </div>
              <div className="text-primary font-medium">{project.returns}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/projects')}
            className="btn-primary"
          >
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
