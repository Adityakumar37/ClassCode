import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import NotesSidebar from "./NotesSidebar";
import NotesContent from "./NotesContent";
import ProgressTracker from "./ProgressTracker";
import { getTopicById, getAllTopics } from "@/data/javascriptNotes";

const JavaScriptNotes = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>("hoisting-basic");
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const allTopics = getAllTopics();
  const currentTopic = selectedTopicId ? getTopicById(selectedTopicId) : null;
  const currentIndex = allTopics.findIndex((t) => t.topic.id === selectedTopicId);

  // Load completed topics from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("codenotes-completed");
    if (saved) {
      setCompletedTopics(JSON.parse(saved));
    }
  }, []);

  // Save completed topics to localStorage
  useEffect(() => {
    localStorage.setItem("codenotes-completed", JSON.stringify(completedTopics));
  }, [completedTopics]);

  const handleSelectTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    setIsSidebarOpen(false);
  };

  const handleMarkComplete = () => {
    if (!selectedTopicId) return;
    setCompletedTopics((prev) =>
      prev.includes(selectedTopicId)
        ? prev.filter((id) => id !== selectedTopicId)
        : [...prev, selectedTopicId]
    );
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (direction === "prev" && currentIndex > 0) {
      setSelectedTopicId(allTopics[currentIndex - 1].topic.id);
    } else if (direction === "next" && currentIndex < allTopics.length - 1) {
      setSelectedTopicId(allTopics[currentIndex + 1].topic.id);
    }
  };

  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                <span className="gradient-text">JavaScript</span> Notes
              </h1>
              <p className="text-muted-foreground mt-1">
                Structured notes from your class PDFs
              </p>
            </div>

            {/* Mobile Sidebar Toggle */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Progress Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <ProgressTracker
            completedCount={completedTopics.length}
            totalCount={allTopics.length}
          />
        </motion.div>

        {/* Main Content Area */}
        <div className="flex gap-6 relative">
          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`
              fixed lg:relative top-0 left-0 z-50 lg:z-auto
              h-screen lg:h-auto
              transform transition-transform duration-300
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
          >
            <NotesSidebar
              selectedTopicId={selectedTopicId}
              onSelectTopic={handleSelectTopic}
              completedTopics={completedTopics}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 glass-card rounded-xl overflow-hidden min-h-[calc(100vh-300px)]"
          >
            <NotesContent
              topic={currentTopic || null}
              isCompleted={selectedTopicId ? completedTopics.includes(selectedTopicId) : false}
              onMarkComplete={handleMarkComplete}
              onNavigate={handleNavigate}
              currentIndex={currentIndex}
              totalTopics={allTopics.length}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JavaScriptNotes;
