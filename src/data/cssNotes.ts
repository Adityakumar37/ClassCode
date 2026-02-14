import { NoteSection } from "./javascriptNotes";

export const cssNotes: NoteSection[] = [
    {
        id: "css-intro",
        title: "1. Introduction to CSS",
        topics: [
            {
                id: "what-is-css",
                title: "What is CSS",
                content: [
                    "CSS (Cascading Style Sheets) is the language used to style the look and feel of a website.",
                    "It controls colors, fonts, spacing, and the overall layout."
                ],
                keyPoints: [
                    "CSS works with HTML to make sites look professional.",
                    "Cascading: Styles flow down from parent to children.",
                    "Separation of concerns: HTML = content, CSS = style."
                ],
                memoryRule: "HTML is the skeleton, CSS is the skin & clothes."
            }
        ]
    },
    {
        id: "css-adding",
        title: "2. Ways to Add CSS",
        topics: [
            {
                id: "adding-css",
                title: "Inline, Internal, External",
                content: [
                    "There are three main ways to apply CSS to your HTML elements.",
                    "External CSS is the most common and professional method."
                ],
                keyPoints: [
                    "Inline: style='' attribute (Avoid using).",
                    "Internal: <style> tag in <head>.",
                    "External: Linked .css file (Best practice)."
                ],
                codeExamples: [
                    {
                        code: "<!-- External (Recommended) -->\n<link rel='stylesheet' href='style.css'>\n\n<!-- Inline (Avoid) -->\n<h1 style='color: blue;'>Title</h1>"
                    }
                ]
            }
        ]
    },
    {
        id: "css-selectors",
        title: "3. Selectors (element, class, id)",
        topics: [
            {
                id: "css-selectors-basic",
                title: "Selectors basics",
                content: [
                    "Selectors define WHICH element you are styling.",
                    "They have different levels of 'power' (specificity)."
                ],
                keyPoints: [
                    "Element: Styles all tags of a type (e.g., p { }).",
                    "Class: Styles elements with a specific class (.btn { }).",
                    "ID: Styles one unique element (#header { })."
                ],
                codeExamples: [
                    {
                        code: "p { color: grey; } /* Element */\n.text-red { color: red; } /* Class */\n#main-logo { width: 100px; } /* ID */"
                    }
                ],
                memoryRule: "Element is generic, Class is reusable, ID is unique."
            }
        ]
    },
    {
        id: "css-box-model",
        title: "4. Box Model",
        topics: [
            {
                id: "box-model",
                title: "The Box Model",
                content: [
                    "Every element in CSS is a rectangular box.",
                    "Understanding how space is calculated is vital for layouts."
                ],
                keyPoints: [
                    "Content: The actual text/image.",
                    "Padding: Space inside the border.",
                    "Border: Line around the padding.",
                    "Margin: Space outside the border (pushes other boxes away)."
                ],
                codeExamples: [
                    {
                        code: ".box {\n  margin: 20px;\n  border: 1px solid white;\n  padding: 10px;\n}"
                    }
                ],
                memoryRule: "Margin is external, Padding is internal."
            }
        ]
    },
    {
        id: "css-colors",
        title: "5. Colors & Backgrounds",
        topics: [
            {
                id: "colors-bg",
                title: "Colors & Backgrounds",
                content: [
                    "CSS allows you to apply colors to text and backgrounds using names, Hex, RGB, or HSL."
                ],
                keyPoints: [
                    "color: Changes text color.",
                    "background-color: Changes background block color.",
                    "opacity: Sets transparency (0 to 1)."
                ],
                codeExamples: [
                    {
                        code: "body {\n  background-color: #0f1419;\n  color: white;\n}"
                    }
                ]
            }
        ]
    },
    {
        id: "css-typography",
        title: "6. Typography & Fonts",
        topics: [
            {
                id: "typo-fonts",
                title: "Typography & Fonts",
                content: [
                    "Fonts define the character of your design.",
                    "Web fonts (Google Fonts) allow you to use custom typefaces."
                ],
                keyPoints: [
                    "font-family: Sets the font.",
                    "font-size: Sets the size (px, rem, em).",
                    "font-weight: Boldness (100 to 900).",
                    "text-align: horizontal alignment."
                ],
                codeExamples: [
                    {
                        code: "h1 {\n  font-family: 'Inter', sans-serif;\n  font-size: 32px;\n  text-align: center;\n}"
                    }
                ]
            }
        ]
    },
    {
        id: "css-flexbox",
        title: "7. Flexbox Basics",
        topics: [
            {
                id: "flexbox",
                title: "Flexbox Basics",
                content: [
                    "Flexbox is the modern way to align elements in a row or column.",
                    "It makes 'responsive' layouts much easier."
                ],
                keyPoints: [
                    "display: flex -> Enables flex context.",
                    "justify-content -> Align on main axis (horizontal usually).",
                    "align-items -> Align on cross axis (vertical usually)."
                ],
                codeExamples: [
                    {
                        code: ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}"
                    }
                ],
                memoryRule: "Flexbox is for layout, not just decoration."
            }
        ]
    }
];
