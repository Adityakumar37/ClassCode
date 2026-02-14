export interface CodeExample {
  code: string;
  output?: string;
}

export interface NoteTopic {
  id: string;
  title: string;
  content: string[];
  codeExamples?: CodeExample[];
  keyPoints?: string[];
  memoryRule?: string;
}

export interface NoteSection {
  id: string;
  title: string;
  topics: NoteTopic[];
}

export const javascriptNotes: NoteSection[] = [
  {
    id: "section-1",
    title: "1. Hoisting & TDZ",
    topics: [
      {
        id: "hoisting",
        title: "Hoisting",
        content: [
          "JavaScript moves declarations to the top of their scope before execution.",
          "Only declarations move, not values."
        ],
        keyPoints: [
          "var: Hoisted and initialized with undefined",
          "let/const: Hoisted but not initialized (TDZ)",
          "Accessing let/const before declaration → ReferenceError"
        ],
        memoryRule: "var → undefined\nlet/const → ReferenceError",
        codeExamples: [
          {
            code: "console.log(a);\nvar a = 10;",
            output: "undefined"
          }
        ]
      }
    ]
  },
  {
    id: "section-2",
    title: "2. Block Scope",
    topics: [
      {
        id: "block-scope",
        title: "Block Scope Basics",
        content: [
          "let and const are block scoped → live only inside {}.",
          "var is function scoped → ignores block."
        ],
        keyPoints: [
          "let/const are safe from side effects outside their block",
          "var can cause unexpected behavior in loops"
        ],
        codeExamples: [
          {
            code: "{\n  let b = 5;\n  var v = 10;\n}\nconsole.log(v); // 10\nconsole.log(b); // ReferenceError",
            output: "10\nReferenceError"
          }
        ]
      }
    ]
  },
  {
    id: "section-3",
    title: "3. switch Statement",
    topics: [
      {
        id: "switch-statement",
        title: "switch Statement",
        content: [
          "Use switch when comparing one value against fixed options.",
          "break is critical. Without break → fall-through occurs."
        ],
        keyPoints: [
          "Fall-through can be used intentionally to group cases.",
          "Avoid switch for ranges → use if/else."
        ],
        codeExamples: [
          {
            code: "switch (msg) {\n  case 'hi':\n    console.log('Hello');\n    break;\n  default:\n    console.log('Unknown');\n}",
            output: "Hello"
          }
        ]
      }
    ]
  },
  {
    id: "section-4",
    title: "4. Ternary Operator",
    topics: [
      {
        id: "ternary-operator",
        title: "Ternary Operator",
        content: [
          "Best for simple two-way decisions.",
          "condition ? trueValue : falseValue"
        ],
        keyPoints: [
          "Use only if readable.",
          "Good for simple assignments"
        ],
        codeExamples: [
          {
            code: "let age = 20;\nlet status = age >= 18 ? 'Adult' : 'Minor';",
            output: "Adult"
          }
        ]
      }
    ]
  },
  {
    id: "section-5",
    title: "5. Loops Basics",
    topics: [
      {
        id: "loops-basics",
        title: "Loops Basics",
        content: [
          "for → fixed iterations",
          "while → condition-based",
          "break → stop loop",
          "continue → skip current iteration"
        ],
        keyPoints: [
          "Use for loops when the number of iterations is known",
          "Use while loops when the end condition is unknown"
        ]
      }
    ]
  },
  {
    id: "section-6",
    title: "6. DevTools Debugging",
    topics: [
      {
        id: "devtools-debugging",
        title: "DevTools Debugging",
        content: [
          "Steps: Inspect -> Sources -> Add breakpoint -> Reload.",
          "While paused: Check variable values, Step line-by-line."
        ],
        keyPoints: [
          "Best breakpoint positions: Before condition, Inside loops, Before break/continue"
        ]
      }
    ]
  },
  {
    id: "section-7",
    title: "7. Execution Context",
    topics: [
      {
        id: "execution-context",
        title: "Execution Context",
        content: [
          "Before code runs, JavaScript creates Execution Context.",
          "It has: 1. Memory phase, 2. Execution phase.",
          "Memory first → execution later."
        ],
        keyPoints: [
          "var → undefined",
          "functions → full definition",
          "let/const → TDZ",
          "Each function call creates a NEW execution context.",
          "After function ends → its memory is destroyed."
        ],
        memoryRule: "Same function → multiple calls → separate memory."
      }
    ]
  },
  {
    id: "section-8",
    title: "8. Function Hoisting",
    topics: [
      {
        id: "function-hoisting",
        title: "Function Hoisting",
        content: [
          "Function Declaration → hoisted completely → can call before definition.",
          "Function Expression / Arrow → treated like variable → undefined → calling early causes TypeError."
        ]
      }
    ]
  },
  {
    id: "section-9",
    title: "9. Scope",
    topics: [
      {
        id: "scope-basics",
        title: "Scope Basics",
        content: [
          "Variables defined inside function are not available outside.",
          "Access outside → ReferenceError."
        ]
      }
    ]
  },
  {
    id: "section-10",
    title: "10. Arrays",
    topics: [
      {
        id: "array-methods",
        title: "Array Methods",
        content: [
          "Important methods for manipulating arrays."
        ],
        keyPoints: [
          "push → add end",
          "pop → remove end",
          "shift → remove start",
          "unshift → add start",
          "splice → insert/remove/replace",
          "join → convert to string",
          "includes → check existence"
        ]
      }
    ]
  },
  {
    id: "section-11",
    title: "11. Objects & DOM Basics",
    topics: [
      {
        id: "dom-basics",
        title: "Objects & DOM Basics",
        content: [
          "Basic DOM manipulation methods."
        ],
        keyPoints: [
          "getElementById → select element",
          "createElement → create new tag",
          "textContent → change text",
          "appendChild → insert into DOM",
          "for...in → loop keys"
        ]
      }
    ]
  },
  {
    id: "section-12",
    title: "12. Closures",
    topics: [
      {
        id: "closures",
        title: "Closures",
        content: [
          "A closure is when an inner function remembers variables from its outer function even after outer finishes."
        ],
        keyPoints: [
          "Automatic",
          "Data stays alive",
          "Provides privacy",
          "Each call → new memory",
          "Captures variable, not copy"
        ],
        memoryRule: "Closures help: Avoid globals, Create reusable logic, Store configuration"
      }
    ]
  },
  {
    id: "section-13",
    title: "13. setTimeout & setInterval",
    topics: [
      {
        id: "timers",
        title: "setTimeout & setInterval",
        content: [
          "JavaScript is synchronous & single-threaded.",
          "Timers run after main code finishes.",
          "Even delay 0 → runs later."
        ],
        keyPoints: [
          "clearInterval → stops repetition"
        ]
      }
    ]
  },
  {
    id: "section-14",
    title: "14. Interview Thinking Signals",
    topics: [
      {
        id: "thinking-signals",
        title: "Interview Thinking Signals",
        content: [
          "Patterns to recognize during interviews."
        ],
        keyPoints: [
          "undefined → var hoisting",
          "ReferenceError → TDZ or scope",
          "TypeError → calling undefined as function"
        ]
      }
    ]
  }
];

export const getTopicById = (topicId: string, sections: NoteSection[] = javascriptNotes): NoteTopic | undefined => {
  for (const section of sections) {
    const topic = section.topics.find(t => t.id === topicId);
    if (topic) return topic;
  }
  return undefined;
};

export const getAllTopics = (sections: NoteSection[] = javascriptNotes): { section: NoteSection; topic: NoteTopic }[] => {
  const allTopics: { section: NoteSection; topic: NoteTopic }[] = [];
  for (const section of sections) {
    for (const topic of section.topics) {
      allTopics.push({ section, topic });
    }
  }
  return allTopics;
};
