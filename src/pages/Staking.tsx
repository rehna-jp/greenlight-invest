
import { motion } from "framer-motion";
import { Wallet, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";

const Staking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-accent mb-4">Staking Dashboard</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stake your tokens to earn rewards while supporting renewable energy projects. Monitor your investments and track your returns in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 rounded-xl"
          >
            <Wallet className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-lg font-semibold">Total Staked</h3>
            <p className="text-2xl font-bold text-primary">1,234 GTK</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-xl"
          >
            <ArrowUpRight className="h-8 w-8 text-secondary mb-2" />
            <h3 className="text-lg font-semibold">Available Rewards</h3>
            <p className="text-2xl font-bold text-secondary">45.6 GTK</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-xl"
          >
            <ArrowDownRight className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-lg font-semibold">APY</h3>
            <p className="text-2xl font-bold text-primary">12.5%</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 rounded-xl"
          >
            <Clock className="h-8 w-8 text-secondary mb-2" />
            <h3 className="text-lg font-semibold">Lock Period</h3>
            <p className="text-2xl font-bold text-secondary">30 Days</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Stake Tokens</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount to Stake
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter amount"
                />
              </div>
              <button className="btn-primary w-full">
                Stake Now
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Withdraw Rewards</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount to Withdraw
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter amount"
                />
              </div>
              <button className="btn-secondary w-full">
                Withdraw
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
