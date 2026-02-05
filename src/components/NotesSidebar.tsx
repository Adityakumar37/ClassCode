import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, BookOpen, Search } from "lucide-react";
import { useState } from "react";
import { javascriptNotes, NoteSection } from "@/data/javascriptNotes";

interface NotesSidebarProps {
  selectedTopicId: string | null;
  onSelectTopic: (topicId: string) => void;
  completedTopics: string[];
}

const NotesSidebar = ({ selectedTopicId, onSelectTopic, completedTopics }: NotesSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    javascriptNotes.map((s) => s.id)
  );
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredNotes = searchQuery
    ? javascriptNotes.map((section) => ({
        ...section,
        topics: section.topics.filter((topic) =>
          topic.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((section) => section.topics.length > 0)
    : javascriptNotes;

  return (
    <aside className="w-72 shrink-0 h-[calc(100vh-80px)] sticky top-20 overflow-hidden flex flex-col glass-card rounded-xl">
      {/* Search */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-muted/50 border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Topics List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredNotes.map((section) => (
          <div key={section.id}>
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
            >
              {expandedSections.includes(section.id) ? (
                <ChevronDown className="w-4 h-4 text-primary" />
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
              <span className="truncate">{section.title}</span>
            </button>

            {/* Section Topics */}
            {expandedSections.includes(section.id) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="ml-2 space-y-0.5"
              >
                {section.topics.map((topic, idx) => {
                  const isSelected = selectedTopicId === topic.id;
                  const isCompleted = completedTopics.includes(topic.id);

                  return (
                    <motion.button
                      key={topic.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      onClick={() => onSelectTopic(topic.id)}
                      className={`topic-card w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-all ${
                        isSelected
                          ? "active"
                          : "hover:bg-muted/30"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          isCompleted
                            ? "bg-green-500"
                            : isSelected
                            ? "bg-primary"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                      <span
                        className={`truncate ${
                          isSelected ? "text-primary font-medium" : "text-muted-foreground"
                        }`}
                      >
                        {topic.title}
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <BookOpen className="w-4 h-4" />
          <span>
            {completedTopics.length} / {javascriptNotes.reduce((acc, s) => acc + s.topics.length, 0)} completed
          </span>
        </div>
      </div>
    </aside>
  );
};

export default NotesSidebar;
