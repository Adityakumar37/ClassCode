import { NoteSection } from "./javascriptNotes";

export const htmlNotes: NoteSection[] = [
    {
        id: "html-intro",
        title: "1. Introduction to HTML",
        topics: [
            {
                id: "what-is-html",
                title: "What is HTML",
                content: [
                    "HTML stands for HyperText Markup Language. It is the language that gives structure to all websites.",
                    "Think of HTML as the 'skeleton' of a building. It defines where sections, headings, and images go."
                ],
                keyPoints: [
                    "HTML is a Markup Language, not a Programming Language.",
                    "Role: Structure & Content.",
                    "Browsers read HTML from top to bottom."
                ],
                codeExamples: [
                    {
                        code: "<!-- HTML comment -->\n<p>Hello, this is a paragraph!</p>",
                        output: "Hello, this is a paragraph!"
                    }
                ],
                memoryRule: "HTML provides the WHAT (content). CSS provides the HOW (look)."
            }
        ]
    },
    {
        id: "html-doc-structure",
        title: "2. Document Structure",
        topics: [
            {
                id: "boiler-plate",
                title: "HTML Document Structure",
                content: [
                    "Every HTML file needs a standard skeleton to be valid.",
                    "<!DOCTYPE> tells the browser which HTML version is used."
                ],
                keyPoints: [
                    "<html> wraps everything.",
                    "<head> contains invisible info (title, meta).",
                    "<body> contains everything the user sees."
                ],
                codeExamples: [
                    {
                        code: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Site</title>\n  </head>\n  <body>\n    <h1>Hello!</h1>\n  </body>\n</html>"
                    }
                ],
                memoryRule: "Head for brains (metadata), Body for beauty (content)."
            }
        ]
    },
    {
        id: "html-headings",
        title: "3. Headings & Paragraphs",
        topics: [
            {
                id: "text-basics",
                title: "Headings & Paragraphs",
                content: [
                    "Text tags are used to organize content hierarchy.",
                    "Headings go from h1 (largest) to h6 (smallest)."
                ],
                keyPoints: [
                    "Use only one <h1> per page for SEO.",
                    "<p> creates a block-level text element with some margin."
                ],
                codeExamples: [
                    {
                        code: "<h1>Main Title</h1>\n<h2>Sub-Heading</h2>\n<p>This is a long text content.</p>"
                    }
                ]
            }
        ]
    },
    {
        id: "html-links-images",
        title: "4. Links & Images",
        topics: [
            {
                id: "links-imgs",
                title: "Links & Images",
                content: [
                    "Links connect pages, and images make them visual.",
                    "The 'href' and 'src' attributes are critical."
                ],
                keyPoints: [
                    "<a> needs href (hyperlink reference).",
                    "<img> needs src (source) and alt (text description for accessibility)."
                ],
                codeExamples: [
                    {
                        code: "<a href='https://google.com'>Visit Google</a>\n<img src='photo.jpg' alt='A beautiful sunset'>"
                    }
                ]
            }
        ]
    },
    {
        id: "html-lists",
        title: "5. Lists (ul, ol, li)",
        topics: [
            {
                id: "lists-basics",
                title: "Lists (ul, ol, li)",
                content: [
                    "Lists are used to group related items together.",
                    "Unordered (bullets) and Ordered (numbers)."
                ],
                keyPoints: [
                    "<ul>: Unordered List.",
                    "<ol>: Ordered List.",
                    "<li>: List Item (always goes inside ul/ol)."
                ],
                codeExamples: [
                    {
                        code: "<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n</ul>\n\n<ol>\n  <li>Step 1</li>\n  <li>Step 2</li>\n</ol>"
                    }
                ]
            }
        ]
    },
    {
        id: "html-div-span",
        title: "6. div vs span",
        topics: [
            {
                id: "div-span",
                title: "div vs span",
                content: [
                    "These are generic containers with no semantic meaning.",
                    "They are used mostly for styling and grouping."
                ],
                keyPoints: [
                    "div: Block-level (takes whole width, starts new line).",
                    "span: Inline (only takes as much width as needed, stays in line)."
                ],
                codeExamples: [
                    {
                        code: "<div style='background: blue;'>I am a block div</div>\n<p>I am text with a <span style='color: red;'>red span</span> inside.</p>"
                    }
                ]
            }
        ]
    },
    {
        id: "html-forms",
        title: "7. Forms & Inputs",
        topics: [
            {
                id: "forms-basics",
                title: "Forms & Inputs",
                content: [
                    "Forms allow users to interact and send data.",
                    "Input type determines what kind of data is entered."
                ],
                keyPoints: [
                    "<form> is the container.",
                    "input types: text, password, email, number, submit.",
                    "<label> makes forms accessible (click label to focus input)."
                ],
                codeExamples: [
                    {
                        code: "<form>\n  <label>User:</label>\n  <input type='text' placeholder='Enter name'>\n  <button>Submit</button>\n</form>"
                    }
                ]
            }
        ]
    },
    {
        id: "html-semantic",
        title: "8. Semantic HTML",
        topics: [
            {
                id: "semantic-html",
                title: "Semantic HTML",
                content: [
                    "Semantic tags tell the browser and search engines what the content actually IS.",
                    "Using these is best practice for SEO and Accessibility."
                ],
                keyPoints: [
                    "<header>, <nav>, <main>, <section>, <article>, <footer>.",
                    "Better than using <div> for everything."
                ],
                memoryRule: "Semantic tags = Search engine friendly code."
            }
        ]
    }
];
