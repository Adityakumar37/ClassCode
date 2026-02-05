import { motion } from "framer-motion";
import { Construction, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComingSoonSectionProps {
  technology: "html" | "css";
}

const ComingSoonSection = ({ technology }: ComingSoonSectionProps) => {
  const techInfo = {
    html: {
      name: "HTML",
      color: "from-orange-500 to-red-500",
      description: "Master the building blocks of the web with structured HTML notes.",
    },
    css: {
      name: "CSS",
      color: "from-blue-500 to-purple-500",
      description: "Learn styling, layouts, and modern CSS techniques.",
    },
  };

  const info = techInfo[technology];

  return (
    <section className="min-h-screen flex items-center justify-center p-4 pt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full"
      >
        <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden">
          {/* Background Glow */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br ${info.color} opacity-10 blur-[80px]`}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center"
            >
              <Construction className="w-10 h-10 text-primary" />
            </motion.div>

            <h2 className="text-3xl font-bold mb-2">
              <span className={`bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                {info.name}
              </span>{" "}
              Notes
            </h2>

            <div className="coming-soon-badge inline-block mb-4">Coming Soon</div>

            <p className="text-muted-foreground mb-6">
              {info.description}
              <br />
              <span className="text-sm">Notes will be added soon as classes continue.</span>
            </p>

            <Button
              variant="outline"
              className="border-primary/30 hover:border-primary/50 hover:bg-primary/5"
            >
              <Bell className="w-4 h-4 mr-2" />
              Notify Me
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-4 left-4 w-20 h-20 border border-border/20 rounded-full opacity-30" />
          <div className="absolute top-4 right-4 w-12 h-12 border border-border/20 rounded-lg rotate-12 opacity-30" />
        </div>
      </motion.div>
    </section>
  );
};

export default ComingSoonSection;
