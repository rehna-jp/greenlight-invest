
import { motion } from "framer-motion";
import { Sun, Wind, Droplet } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Solar Farm Initiative",
      type: "Solar Energy",
      funding: "$2.5M",
      roi: "12%",
      impact: "5,000 tons CO₂ reduction/year",
      location: "Arizona, USA",
      progress: 65,
      icon: Sun,
    },
    {
      title: "Coastal Wind Farm",
      type: "Wind Energy",
      funding: "$3.8M",
      roi: "15%",
      impact: "8,000 tons CO₂ reduction/year",
      location: "Cornwall, UK",
      progress: 45,
      icon: Wind,
    },
    {
      title: "Hydroelectric Project",
      type: "Hydro Energy",
      funding: "$4.2M",
      roi: "14%",
      impact: "10,000 tons CO₂ reduction/year",
      location: "British Columbia, Canada",
      progress: 80,
      icon: Droplet,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-accent mb-4">Available Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of sustainable energy projects. Each project has been carefully vetted for its potential environmental impact and return on investment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <project.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{project.type}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{project.location}</span>
                </div>
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
                <div className="mt-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                </div>
              </div>
              <button className="btn-primary w-full mt-6">
                Invest Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
