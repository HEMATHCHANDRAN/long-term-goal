export const topicsData = {
  HTML: {
    icon: "🌐",
    color: "#e34c26",
    description: "Structure of web pages",
    days: [
      {
        day: 1,
        title: "HTML Basics - The Foundation of Web Development",
        objective: "By the end of this lesson, you'll understand what HTML is, how to structure a webpage, and create your first HTML document from scratch.",
        
        detailedTopics: [
          {
            title: "What is HTML?",
            description: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a webpage using elements represented by tags. Think of HTML as the skeleton of a website - it provides the basic structure that browsers use to display content.",
            example: "<!-- HTML is not a programming language, it's a markup language -->\n<!-- It uses tags to 'mark up' text content -->\n<p>This is a paragraph</p>\n<h1>This is a heading</h1>",
            tip: "HTML files use the .html or .htm extension. Always start with a DOCTYPE declaration to tell the browser which HTML version you're using."
          },
          {
            title: "Basic HTML Document Structure",
            description: "Every HTML document follows a basic structure: DOCTYPE declaration, html tag (the root), head tag (metadata), and body tag (visible content). This structure is essential for browsers to render your page correctly.",
            example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first paragraph!</p>
</body>
</html>`,
            tip: "Always include the viewport meta tag for responsive design. It helps your page look good on all devices!"
          },
          {
            title: "Headings: Organizing Content",
            description: "HTML provides six levels of headings, from <h1> (most important) to <h6> (least important). Search engines use headings to understand your content structure, and they help users navigate your page.",
            example: `<h1>Main Page Title (Only one per page)</h1>
<h2>Major Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Minor Heading</h4>
<h5>Small Heading</h5>
<h6>Smallest Heading</h6>`,
            tip: "Use headings in order - don't skip levels. An <h2> should follow an <h1>, not an <h3>. This improves accessibility and SEO."
          },
          {
            title: "Paragraphs and Text Formatting",
            description: "The <p> tag defines paragraphs. You can also use inline tags like <strong> for bold, <em> for italic, and <br> for line breaks to format your text meaningfully.",
            example: `<p>This is a paragraph of text. It will automatically wrap to the next line when it reaches the edge of its container.</p>

<p>You can add <strong>bold text</strong> for emphasis, 
<em>italic text</em> for stress emphasis, 
and <u>underlined text</u> when needed.</p>

<p>Use <br> to create<br>line breaks<br>within a paragraph.</p>

<hr> <!-- Horizontal rule - creates a thematic break -->`,
            tip: "Use <strong> and <em> instead of <b> and <i>. They provide semantic meaning (importance/stress) rather than just visual styling."
          },
          {
            title: "Images: Adding Visual Content",
            description: "The <img> tag is used to embed images. It's self-closing and requires src (source) and alt (alternative text) attributes. The alt text is crucial for accessibility and SEO.",
            example: `<!-- Basic image -->
<img src="photo.jpg" alt="Description of the photo">

<!-- Image with dimensions -->
<img src="banner.png" alt="Website banner" width="800" height="400">

<!-- Image with lazy loading for performance -->
<img src="large-image.jpg" alt="Large image" loading="lazy">

<!-- Image as a link -->
<a href="https://example.com">
    <img src="button.png" alt="Click me">
</a>`,
            tip: "Always specify width and height to prevent layout shifts while images load. Use descriptive alt text for screen readers - 'Dog playing in park' instead of 'dog.jpg'."
          },
          {
            title: "Links and Navigation",
            description: "The <a> (anchor) tag creates hyperlinks. The href attribute specifies the destination. Links can point to other pages, sections within the same page, email addresses, or files.",
            example: `<!-- External link -->
<a href="https://www.google.com">Visit Google</a>

<!-- Internal link -->
<a href="/about.html">About Us</a>

<!-- Link to section on same page -->
<a href="#contact">Jump to Contact Section</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Send Email</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Open in New Tab
</a>`,
            tip: "Always use rel='noopener noreferrer' with target='_blank' for security. This prevents the new page from accessing your page's window object."
          }
        ],
        
        visualExplanation: `
          <div class="visual-diagram">
            <h3>📐 Understanding HTML Structure</h3>
            <pre>
              ┌─────────────────────────────────────┐
              │         !DOCTYPE html               │
              ├─────────────────────────────────────┤
              │         <html>                      │
              │  ┌───────────────────────────────┐  │
              │  │         <head>                │  │
              │  │  • Title (shown in browser tab)│  │
              │  │  • Meta tags (info for browsers)│ │
              │  │  • CSS links, JS scripts      │  │
              │  └───────────────────────────────┘  │
              │  ┌───────────────────────────────┐  │
              │  │         <body>                │  │
              │  │  • Headings (h1-h6)           │  │
              │  │  • Paragraphs (p)             │  │
              │  │  • Images (img)               │  │
              │  │  • Links (a)                  │  │
              │  │  • All visible content        │  │
              │  └───────────────────────────────┘  │
              │         </html>                     │
              └─────────────────────────────────────┘
            </pre>
            <p><strong>Key Concept:</strong> The <head> contains information ABOUT the page (metadata), while the <body> contains the actual CONTENT users see.</p>
          </div>
        `,
        
        commonMistakes: [
          {
            wrong: "Forgetting to close tags: <p>Text without closing",
            right: "Always close your tags: <p>Text</p>",
            explanation: "Unclosed tags can break your entire page layout. Modern browsers try to fix it, but it's better to be correct."
          },
          {
            wrong: "Using <h1> multiple times on one page",
            right: "Use only ONE <h1> per page as the main title",
            explanation: "Multiple <h1> tags confuse search engines and screen readers. Use <h2>, <h3> for subheadings."
          },
          {
            wrong: "Missing alt attribute on images: <img src='photo.jpg'>",
            right: "Always add alt text: <img src='photo.jpg' alt='Description'>",
            explanation: "Alt text is required for accessibility and helps SEO. It also appears when images fail to load."
          },
          {
            wrong: "Using inline styles instead of semantic HTML",
            right: "Use <strong> for importance, not <b> with CSS",
            explanation: "Semantic HTML gives meaning to content, helping search engines and assistive technology understand your page."
          }
        ],
        
        bestPractices: [
          "Always declare DOCTYPE at the top of your HTML documents",
          "Use meaningful, semantic tags instead of generic divs when possible",
          "Keep your HTML valid - use a validator to check for errors",
          "Structure your content with proper heading hierarchy (h1, then h2, then h3)",
          "Add descriptive alt text to all images for accessibility",
          "Use relative URLs for internal links and absolute URLs for external links",
          "Indent your code properly to show nesting and improve readability",
          "Comment your code to explain complex sections for future reference"
        ],
        
        quiz: [
          {
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "High Tech Modern Language",
              "Hyper Transfer Markup Language",
              "Home Tool Markup Language"
            ],
            correct: 0,
            explanation: "HTML = HyperText Markup Language. 'HyperText' refers to links that connect web pages."
          },
          {
            question: "Which tag contains the visible content of a webpage?",
            options: ["<head>", "<body>", "<html>", "<content>"],
            correct: 1,
            explanation: "The <body> tag contains all the visible content users see - text, images, links, etc."
          },
          {
            question: "What is the correct HTML element for inserting a line break?",
            options: ["<lb>", "<break>", "<br>", "<line>"],
            correct: 2,
            explanation: "<br> is a self-closing tag that creates a line break. It's short for 'break'."
          },
          {
            question: "Which attribute is required for the <img> tag?",
            options: ["src and alt", "src only", "alt only", "href and src"],
            correct: 0,
            explanation: "Both src (source file) and alt (alternative text) are required for valid HTML images."
          },
          {
            question: "What is the purpose of the alt attribute?",
            options: [
              "Provides description for screen readers and when image fails to load",
              "Makes images load faster",
              "Changes image size",
              "Adds a border to images"
            ],
            correct: 0,
            explanation: "Alt text improves accessibility for visually impaired users and helps SEO."
          }
        ],
        
        resources: [
          { title: "MDN Web Docs - HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" },
          { title: "W3Schools HTML Tutorial", url: "https://www.w3schools.com/html/" },
          { title: "HTML Validator", url: "https://validator.w3.org/" },
          { title: "HTML Cheat Sheet", url: "https://htmlcheatsheet.com/" }
        ],
        
        tasks: [
          "Create a new HTML file with proper document structure",
          "Add a main heading (h1) with your name",
          "Add a paragraph introducing yourself",
          "Insert an image of something you like (use a placeholder image URL)",
          "Create a link to your favorite website that opens in a new tab",
          "Add a horizontal rule to separate sections",
          "Use at least 3 different heading levels (h1, h2, h3)",
          "Add bold and italic text within a paragraph"
        ],
        
        examples: [
          "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to HTML</h1>\n  <p>This is my first paragraph.</p>\n  <img src='image.jpg' alt='Description'>\n</body>\n</html>",
          "<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<p>Regular text content here.</p>\n<br>\n<hr>"
        ]
      },
      // ... Days 2-6 would follow similar detailed structure
    ]
  },
  // ... CSS and JavaScript with similarly detailed content
};