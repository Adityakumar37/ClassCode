import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Lightbulb, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
import { NoteTopic, getAllTopics } from "@/data/javascriptNotes";

interface NotesContentProps {
  topic: NoteTopic | null;
  isCompleted: boolean;
  onMarkComplete: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  currentIndex: number;
  totalTopics: number;
}

const NotesContent = ({
  topic,
  isCompleted,
  onMarkComplete,
  onNavigate,
  currentIndex,
  totalTopics,
}: NotesContentProps) => {
  if (!topic) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Select a Topic</h2>
          <p className="text-muted-foreground">
            Choose a topic from the sidebar to start learning
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      key={topic.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-6 lg:p-8 overflow-y-auto"
    >
      {/* Topic Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl lg:text-4xl font-bold mb-2"
            >
              {topic.title}
            </motion.h1>
            <p className="text-muted-foreground">
              Topic {currentIndex + 1} of {totalTopics}
            </p>
          </div>
          <Button
            onClick={onMarkComplete}
            variant={isCompleted ? "default" : "outline"}
            className={`shrink-0 ${
              isCompleted
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "border-green-600/50 text-green-500 hover:bg-green-600/10"
            }`}
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            {isCompleted ? "Completed" : "Mark Complete"}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Main Content */}
        {topic.content.map((paragraph, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="text-foreground/90 leading-relaxed text-lg"
          >
            {paragraph}
          </motion.p>
        ))}

        {/* Key Points */}
        {topic.keyPoints && topic.keyPoints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="highlight-card"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">Key Points</span>
            </div>
            <ul className="space-y-2">
              {topic.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-foreground/80">
                  <span className="text-primary mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Code Examples */}
        {topic.codeExamples && topic.codeExamples.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
              Code Examples
            </h3>
            {topic.codeExamples.map((example, idx) => (
              <CodeBlock key={idx} code={example.code} output={example.output} />
            ))}
          </div>
        )}

        {/* Memory Rule */}
        {topic.memoryRule && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-xl border border-primary/20"
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">Memory Rule</span>
            </div>
            <p className="text-foreground font-mono text-sm whitespace-pre-line">
              {topic.memoryRule}
            </p>
          </motion.div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
        <Button
          onClick={() => onNavigate("prev")}
          variant="outline"
          disabled={currentIndex === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        <Button
          onClick={() => onNavigate("next")}
          disabled={currentIndex === totalTopics - 1}
          className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
        >
          Next Topic
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default NotesContent;
