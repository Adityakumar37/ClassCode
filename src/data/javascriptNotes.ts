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
    id: "hoisting-scope",
    title: "LAB 1: Hoisting & Scope",
    topics: [
      {
        id: "hoisting-basic",
        title: "Hoisting (Basic Idea)",
        content: [
          "JavaScript moves variable declarations to the top of scope before running the code.",
          "Only declarations are moved, not values."
        ],
        codeExamples: [
          {
            code: `console.log(a);
var a = 10;

// What happens internally:
var a;
console.log(a);
a = 10;`,
            output: "undefined"
          }
        ]
      },
      {
        id: "hoisting-var",
        title: "Hoisting with var",
        content: [
          "var is hoisted to the top of its scope.",
          "It gets a default value of undefined.",
          "You can access it before assignment."
        ],
        codeExamples: [
          {
            code: `console.log(x);
var x = 5;`,
            output: "undefined"
          }
        ],
        keyPoints: [
          "JavaScript knows x exists",
          "Value is assigned later"
        ]
      },
      {
        id: "tdz",
        title: "Temporal Dead Zone (TDZ)",
        content: [
          "A time period where a variable exists but cannot be accessed.",
          "Applies to let and const declarations."
        ],
        keyPoints: [
          "Access before declaration → ReferenceError"
        ]
      },
      {
        id: "tdz-let",
        title: "TDZ with let",
        content: [
          "let is hoisted but cannot be used before declaration.",
          "Accessing early causes ReferenceError."
        ],
        codeExamples: [
          {
            code: `console.log(y);
let y = 10;`,
            output: "ReferenceError"
          }
        ],
        keyPoints: [
          "y is in TDZ until the declaration line"
        ]
      },
      {
        id: "tdz-const",
        title: "TDZ with const",
        content: [
          "Same TDZ rules as let.",
          "Must be declared and assigned together."
        ],
        codeExamples: [
          {
            code: `console.log(z);
const z = 20;`,
            output: "ReferenceError"
          }
        ]
      },
      {
        id: "block-scope",
        title: "Block Scope",
        content: [
          "Variables declared with let and const live only inside { }.",
          "var ignores block scope."
        ]
      },
      {
        id: "var-block-scope",
        title: "var and Block Scope",
        content: [
          "var is function-scoped, not block-scoped."
        ],
        codeExamples: [
          {
            code: `{
  var a = 1;
}
console.log(a);`,
            output: "1"
          }
        ]
      },
      {
        id: "let-const-block-scope",
        title: "let / const and Block Scope",
        content: [
          "let and const are block-scoped.",
          "They exist only inside the block { }."
        ],
        codeExamples: [
          {
            code: `{
  let b = 2;
}
console.log(b);`,
            output: "ReferenceError"
          }
        ],
        keyPoints: [
          "b exists only inside the block"
        ]
      },
      {
        id: "interview-signals",
        title: "Common Interview Signals",
        content: [
          "Output is undefined → think var hoisting.",
          "Output is ReferenceError → think TDZ or scope issue."
        ],
        memoryRule: "var → hoisted + usable early → undefined\nlet / const → hoisted + TDZ → ReferenceError"
      }
    ]
  },
  {
    id: "conditions-loops",
    title: "LAB 2: Conditions and Loops",
    topics: [
      {
        id: "switch-statement",
        title: "switch Statement",
        content: [
          "Use switch when one variable needs to be matched against many fixed values.",
          "Good for: Status values, menu options, days, months, categories.",
          "Not suitable for range-based checks (use if–else instead)."
        ],
        codeExamples: [
          {
            code: `let status = "out";

switch (status) {
  case "placed":
    console.log("Order placed");
    break;
  case "cooking":
    console.log("Food is being prepared");
    break;
  case "out":
    console.log("Out for delivery");
    break;
  case "delivered":
    console.log("Delivered");
    break;
  default:
    console.log("Unknown status");
}`,
            output: "Out for delivery"
          }
        ]
      },
      {
        id: "fall-through",
        title: "Fall-through (switch)",
        content: [
          "When break is missing, execution continues to the next case.",
          "Can be used intentionally to group multiple values."
        ],
        codeExamples: [
          {
            code: `let plan = "basic";

switch (plan) {
  case "basic":
    console.log("Basic features");
  case "pro":
    console.log("Pro features");
  case "premium":
    console.log("Premium features");
    break;
  default:
    console.log("Invalid plan");
}`,
            output: "Basic features\nPro features\nPremium features"
          }
        ],
        keyPoints: [
          "plan matches 'basic' → prints Basic features",
          "No break → moves to next case",
          "Continues until break is found"
        ]
      },
      {
        id: "grouped-cases",
        title: "Grouped Cases (Correct Usage)",
        content: [
          "Fall-through can group multiple values intentionally."
        ],
        codeExamples: [
          {
            code: `let day = 6;

switch (day) {
  case 6:
  case 7:
    console.log("Weekend");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  default:
    console.log("Invalid day");
}`,
            output: "Weekend"
          }
        ]
      },
      {
        id: "ternary-operator",
        title: "Ternary Operator (? :)",
        content: [
          "Use ternary for simple two-way decisions: Pass/Fail, Yes/No, On/Off.",
          "Avoid ternary when more than two outcomes or conditions are long."
        ],
        codeExamples: [
          {
            code: `let cartTotal = 1200;
let msg = cartTotal >= 999 ? "Free Delivery" : "Delivery Charges Apply";
console.log(msg);`,
            output: "Free Delivery"
          },
          {
            code: `let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back" : "Please login");`,
            output: "Welcome back"
          }
        ],
        memoryRule: "Use ternary only when the entire line stays easy to read. If clarity reduces, switch back to if–else."
      },
      {
        id: "for-loop",
        title: "for Loop",
        content: [
          "Standard loop for iterating a known number of times.",
          "continue skips current iteration, break exits the loop."
        ],
        codeExamples: [
          {
            code: `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,
            output: "1\n2\n3"
          },
          {
            code: `// Using continue
for (let i = 1; i <= 4; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}`,
            output: "1\n3\n4"
          },
          {
            code: `// Using break
for (let i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}`,
            output: "1\n2\n3"
          }
        ]
      },
      {
        id: "while-loop",
        title: "while Loop",
        content: [
          "Repeats while a condition is true.",
          "Good when you don't know the exact number of iterations."
        ],
        codeExamples: [
          {
            code: `let x = 3;

while (x > 0) {
  console.log(x);
  x--;
}`,
            output: "3\n2\n1"
          }
        ]
      }
    ]
  },
  {
    id: "execution-context",
    title: "LAB 3: Functions & Execution Context",
    topics: [
      {
        id: "what-is-execution-context",
        title: "What is Execution Context",
        content: [
          "Execution Context is the environment in which JavaScript code is evaluated and executed.",
          "Before any line of code runs, JavaScript first creates an execution context."
        ],
        keyPoints: [
          "Execution Context = Environment to run code"
        ]
      },
      {
        id: "ec-components",
        title: "Components of Execution Context",
        content: [
          "An execution context has two main parts:",
          "1. Memory (Creation Area) - Variables and function declarations",
          "2. Code (Execution Area) - Line-by-line execution of statements"
        ],
        memoryRule: "Memory allocation happens first, code execution happens later."
      },
      {
        id: "ec-phases",
        title: "Phases of Execution Context",
        content: [
          "Phase 1: Memory Creation Phase - JavaScript scans code and allocates memory",
          "Phase 2: Code Execution Phase - Code runs line by line"
        ],
        keyPoints: [
          "Memory first → Execution later",
          "Variables receive actual values in execution phase",
          "Functions are executed only when called"
        ]
      },
      {
        id: "synchronous-js",
        title: "Synchronous & Single-Threaded Nature",
        content: [
          "Synchronous: One statement is executed at a time. The next waits until current finishes.",
          "Single-threaded: JavaScript uses a single call stack. Only one task at any moment."
        ],
        codeExamples: [
          {
            code: `console.log("Start");
// heavy loop
console.log("End");`,
            output: '"End" executes only after heavy task completes'
          }
        ]
      },
      {
        id: "var-hoisting-example",
        title: "var Hoisting Example",
        content: [
          "var is hoisted and initialized to undefined."
        ],
        codeExamples: [
          {
            code: `console.log(a);
var a = "Rob";`,
            output: "undefined"
          }
        ],
        keyPoints: [
          "Memory Phase: a → undefined",
          "Execution Phase: console.log(a) → undefined, then a = 'Rob'"
        ]
      },
      {
        id: "function-declaration-hoisting",
        title: "Function Declaration Hoisting",
        content: [
          "Function declarations are fully hoisted with their definition."
        ],
        codeExamples: [
          {
            code: `f();

function f() {
  console.log(1);
}`,
            output: "1"
          }
        ],
        keyPoints: [
          "Memory Phase: f → full function definition",
          "Function can be called before its declaration"
        ]
      },
      {
        id: "function-expression",
        title: "Function Expression (Arrow Function)",
        content: [
          "Arrow functions assigned to var are hoisted as undefined."
        ],
        codeExamples: [
          {
            code: `f();

var f = () => {
  console.log(12);
};`,
            output: "TypeError: undefined is not a function"
          }
        ],
        keyPoints: [
          "Memory Phase: f → undefined",
          "Calling undefined as function throws TypeError"
        ]
      },
      {
        id: "function-scope",
        title: "Function Scope & New Execution Context",
        content: [
          "Calling a function creates a new execution context.",
          "Variables inside function exist only in that context.",
          "After function finishes, its context is destroyed."
        ],
        codeExamples: [
          {
            code: `function f() {
  var a = "Rob";
  console.log(a);
}
f();
console.log(a);`,
            output: "Rob\nReferenceError"
          }
        ]
      },
      {
        id: "multiple-ec",
        title: "Multiple Execution Contexts",
        content: [
          "The same function can create multiple execution contexts.",
          "Each function call has its own independent memory."
        ],
        codeExamples: [
          {
            code: `var a = 2;

function asquare(num) {
  var ans = num * num;
  return ans;
}

var asquare2 = asquare(a);  // 4
var asquare4 = asquare(4);  // 16`,
            output: "asquare2 = 4, asquare4 = 16"
          }
        ],
        keyPoints: [
          "Each call creates independent memory",
          "Values from one call don't interfere with another"
        ]
      }
    ]
  },
  {
    id: "devtools",
    title: "DevTools Debugging",
    topics: [
      {
        id: "devtools-basics",
        title: "DevTools Debugging Steps",
        content: [
          "1. Open your page (index.html)",
          "2. Right click → Inspect",
          "3. Go to Sources tab",
          "4. Find your JavaScript files in the file tree"
        ]
      },
      {
        id: "breakpoints",
        title: "Adding Breakpoints",
        content: [
          "Click the line number where you want code to pause.",
          "A blue marker appears when breakpoint is set."
        ],
        keyPoints: [
          "Place breakpoints before conditions (if, switch)",
          "Inside loops (first line of loop body)",
          "Right before break / continue"
        ]
      },
      {
        id: "step-controls",
        title: "Step Controls",
        content: [
          "Step (→) moves debugger to the next statement.",
          "Use step controls to walk through code line by line."
        ]
      },
      {
        id: "observation",
        title: "What to Observe While Paused",
        content: [
          "Check Scope / Variables panel for current values.",
          "Type variable names in Console to check values instantly."
        ]
      }
    ]
  }
];

export const getTopicById = (topicId: string): NoteTopic | undefined => {
  for (const section of javascriptNotes) {
    const topic = section.topics.find(t => t.id === topicId);
    if (topic) return topic;
  }
  return undefined;
};

export const getAllTopics = (): { section: NoteSection; topic: NoteTopic }[] => {
  const allTopics: { section: NoteSection; topic: NoteTopic }[] = [];
  for (const section of javascriptNotes) {
    for (const topic of section.topics) {
      allTopics.push({ section, topic });
    }
  }
  return allTopics;
};
