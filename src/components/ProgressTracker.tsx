import { motion } from "framer-motion";
import { Trophy, Flame, BookCheck, TrendingUp } from "lucide-react";

interface ProgressTrackerProps {
  completedCount: number;
  totalCount: number;
}

const ProgressTracker = ({ completedCount, totalCount }: ProgressTrackerProps) => {
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const stats = [
    {
      icon: BookCheck,
      label: "Topics Completed",
      value: `${completedCount}/${totalCount}`,
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      label: "Progress",
      value: `${percentage}%`,
      color: "text-green-500",
    },
    {
      icon: Flame,
      label: "Study Streak",
      value: "3 days",
      color: "text-orange-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-xl p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-lg">Your Progress</h3>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Overall Completion</span>
          <span className="font-mono text-primary">{percentage}%</span>
        </div>
        <div className="progress-bar h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="progress-bar-fill h-full"
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="text-center p-3 rounded-lg bg-muted/30"
          >
            <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
            <div className="font-bold text-lg">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProgressTracker;
