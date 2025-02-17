
import { motion } from "framer-motion";
import { Vote, Users, Target } from "lucide-react";

const Governance = () => {
  const proposals = [
    {
      id: 1,
      title: "Community Solar Farm Expansion",
      description: "Expand the Arizona solar farm project to include community ownership model",
      votes: 1234,
      status: "Active",
      endDate: "2024-04-30",
    },
    {
      id: 2,
      title: "Wind Turbine Efficiency Upgrade",
      description: "Implement new blade design to increase power generation efficiency by 15%",
      votes: 856,
      status: "Active",
      endDate: "2024-04-25",
    },
    {
      id: 3,
      title: "Hydroelectric Storage System",
      description: "Add pumped storage capability to existing hydroelectric plant",
      votes: 2045,
      status: "Active",
      endDate: "2024-05-05",
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
          <h1 className="text-4xl font-bold text-accent mb-4">Governance</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Shape the future of renewable energy. Vote on project proposals and participate in key decisions using your GreenTokens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 rounded-xl text-center"
          >
            <Vote className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-lg font-semibold">Active Proposals</h3>
            <p className="text-2xl font-bold text-primary">12</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-xl text-center"
          >
            <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
            <h3 className="text-lg font-semibold">Total Voters</h3>
            <p className="text-2xl font-bold text-secondary">4,567</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-xl text-center"
          >
            <Target className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-lg font-semibold">Voting Power</h3>
            <p className="text-2xl font-bold text-primary">2,500 GTK</p>
          </motion.div>
        </div>

        <div className="space-y-6">
          {proposals.map((proposal, index) => (
            <motion.div
              key={proposal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-accent">{proposal.title}</h3>
                  <p className="text-gray-600 mt-1">{proposal.description}</p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {proposal.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Votes: {proposal.votes}</span>
                <span>Ends: {proposal.endDate}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="btn-primary">
                  Vote For
                </button>
                <button className="btn-secondary">
                  Vote Against
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Governance;
