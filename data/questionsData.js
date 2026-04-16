export const dailyQuestions = {
  HTML: {
    1: [
      { id: 1, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correct: 0 },
      { id: 2, question: "Which tag is used for the main heading?", options: ["<head>", "<h1>", "<heading>", "<title>"], correct: 1 },
      { id: 3, question: "Which attribute is used for image source?", options: ["href", "src", "link", "source"], correct: 1 },
      { id: 4, question: "What is the correct HTML element for inserting a line break?", options: ["<lb>", "<break>", "<br>", "<line>"], correct: 2 },
      { id: 5, question: "Which tag defines a paragraph?", options: ["<para>", "<p>", "<paragraph>", "<text>"], correct: 1 }
    ],
    2: [
      { id: 1, question: "Which tag creates an unordered list?", options: ["<ol>", "<ul>", "<li>", "<list>"], correct: 1 },
      { id: 2, question: "How many columns in a 2x3 table?", options: ["2", "3", "6", "1"], correct: 1 },
      { id: 3, question: "Which tag defines a table row?", options: ["<td>", "<tr>", "<th>", "<table>"], correct: 1 },
      { id: 4, question: "What does <li> stand for?", options: ["List Item", "Line Item", "Link Item", "Left Item"], correct: 0 },
      { id: 5, question: "Which attribute adds a border to a table?", options: ["border", "edge", "line", "frame"], correct: 0 }
    ],
    3: [
      { id: 1, question: "What does <form> tag do?", options: ["Creates a form", "Creates a frame", "Creates a footer", "Creates a field"], correct: 0 },
      { id: 2, question: "Which input type creates a text field?", options: ["text", "password", "email", "number"], correct: 0 },
      { id: 3, question: "What is the default type of button in form?", options: ["submit", "button", "reset", "click"], correct: 0 },
      { id: 4, question: "Which attribute specifies where to send form data?", options: ["method", "action", "target", "enctype"], correct: 1 },
      { id: 5, question: "What does <input type='password'> do?", options: ["Shows dots instead of text", "Shows normal text", "Shows numbers only", "Shows email format"], correct: 0 }
    ],
    4: [
      { id: 1, question: "Which is a semantic HTML5 element?", options: ["<div>", "<span>", "<header>", "<b>"], correct: 2 },
      { id: 2, question: "What does <article> represent?", options: ["A blog post", "A navigation bar", "A footer", "A sidebar"], correct: 0 },
      { id: 3, question: "Which element defines navigation links?", options: ["<nav>", "<menu>", "<navigation>", "<links>"], correct: 0 },
      { id: 4, question: "What is the purpose of <main>?", options: ["Main content of the page", "Main header", "Main navigation", "Main sidebar"], correct: 0 },
      { id: 5, question: "Which element defines a section in a document?", options: ["<div>", "<section>", "<part>", "<area>"], correct: 1 }
    ],
    5: [
      { id: 1, question: "Which tag creates a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], correct: 0 },
      { id: 2, question: "What attribute specifies the link destination?", options: ["href", "src", "link", "url"], correct: 0 },
      { id: 3, question: "How to open a link in a new tab?", options: ["target='_blank'", "new='true'", "open='new'", "tab='new'"], correct: 0 },
      { id: 4, question: "What is an internal link?", options: ["Link to same website", "Link to external website", "Link to email", "Link to file"], correct: 0 },
      { id: 5, question: "Which attribute sets the link text?", options: ["Between <a> tags", "href attribute", "title attribute", "name attribute"], correct: 0 }
    ],
    6: [
      { id: 1, question: "Which tag embeds a video?", options: ["<video>", "<media>", "<movie>", "<mp4>"], correct: 0 },
      { id: 2, question: "What does controls attribute do?", options: ["Adds play/pause buttons", "Controls video size", "Controls video source", "Controls video quality"], correct: 0 },
      { id: 3, question: "Which tag embeds audio?", options: ["<audio>", "<sound>", "<music>", "<mp3>"], correct: 0 },
      { id: 4, question: "What does <iframe> do?", options: ["Embeds another webpage", "Inserts image", "Creates frame", "Adds video"], correct: 0 },
      { id: 5, question: "Which attribute makes video autoplay?", options: ["autoplay", "auto", "play", "start"], correct: 0 }
    ]
  },
  CSS: {
    1: [
      { id: 1, question: "What does CSS stand for?", options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], correct: 2 },
      { id: 2, question: "Which property changes text color?", options: ["text-color", "color", "font-color", "background-color"], correct: 1 },
      { id: 3, question: "How to select an element with id 'header'?", options: [".header", "#header", "header", "*header"], correct: 1 },
      { id: 4, question: "Which property changes background color?", options: ["bgcolor", "background-color", "color-background", "bg-color"], correct: 1 },
      { id: 5, question: "What is the default font size?", options: ["16px", "12px", "14px", "18px"], correct: 0 }
    ],
    2: [
      { id: 1, question: "What is the box model?", options: ["Margin, Border, Padding, Content", "Width, Height, Color, Text", "Flex, Grid, Block, Inline", "Top, Right, Bottom, Left"], correct: 0 },
      { id: 2, question: "Which property adds space inside an element?", options: ["margin", "padding", "spacing", "inner-space"], correct: 1 },
      { id: 3, question: "Which property adds space outside an element?", options: ["margin", "padding", "spacing", "outer-space"], correct: 0 },
      { id: 4, question: "What does border-radius do?", options: ["Rounds corners", "Changes border color", "Changes border width", "Adds shadow"], correct: 0 },
      { id: 5, question: "Which property sets element width?", options: ["width", "size", "w", "dimension"], correct: 0 }
    ],
    3: [
      { id: 1, question: "What does display: flex do?", options: ["Creates flexible layout", "Hides element", "Shows block", "Shows inline"], correct: 0 },
      { id: 2, question: "Which property centers items horizontally in flex?", options: ["justify-content", "align-items", "flex-direction", "flex-wrap"], correct: 0 },
      { id: 3, question: "Which property centers items vertically in flex?", options: ["justify-content", "align-items", "flex-direction", "flex-wrap"], correct: 1 },
      { id: 4, question: "What does flex-direction: column do?", options: ["Stacks vertically", "Stacks horizontally", "Reverses order", "Wraps items"], correct: 0 },
      { id: 5, question: "Which property wraps flex items?", options: ["flex-wrap", "wrap-flex", "flex-flow", "flex-break"], correct: 0 }
    ],
    4: [
      { id: 1, question: "What does display: grid do?", options: ["Creates grid layout", "Creates flex layout", "Creates block layout", "Creates inline layout"], correct: 0 },
      { id: 2, question: "Which property defines grid columns?", options: ["grid-template-columns", "grid-columns", "grid-template", "grid-areas"], correct: 0 },
      { id: 3, question: "What does gap do in grid?", options: ["Space between items", "Space around grid", "Grid border", "Grid padding"], correct: 0 },
      { id: 4, question: "Which property defines grid rows?", options: ["grid-template-rows", "grid-rows", "grid-template", "grid-areas"], correct: 0 },
      { id: 5, question: "What is grid area?", options: ["Named grid region", "Grid border", "Grid margin", "Grid padding"], correct: 0 }
    ],
    5: [
      { id: 1, question: "What does transition do?", options: ["Smooth property changes", "Animates elements", "Transforms shapes", "Moves elements"], correct: 0 },
      { id: 2, question: "What is @keyframes used for?", options: ["Complex animations", "Simple transitions", "Color changes", "Size changes"], correct: 0 },
      { id: 3, question: "What does transform: rotate(45deg) do?", options: ["Rotates element 45 degrees", "Scales element", "Moves element", "Skews element"], correct: 0 },
      { id: 4, question: "What does scale() do?", options: ["Changes element size", "Changes element color", "Changes element position", "Changes element shape"], correct: 0 },
      { id: 5, question: "Which property creates hover effects?", options: [":hover", ":active", ":focus", ":visited"], correct: 0 }
    ],
    6: [
      { id: 1, question: "What are media queries used for?", options: ["Responsive design", "Media embedding", "Querying data", "Styling media"], correct: 0 },
      { id: 2, question: "What is mobile-first design?", options: ["Design for mobile first", "Design for desktop first", "Design for tablets first", "No specific order"], correct: 0 },
      { id: 3, question: "Which unit is relative to viewport width?", options: ["vw", "vh", "vmin", "vmax"], correct: 0 },
      { id: 4, question: "What does max-width media query do?", options: ["Styles below certain width", "Styles above certain width", "Styles exact width", "Styles all widths"], correct: 0 },
      { id: 5, question: "How to make images responsive?", options: ["max-width: 100%", "width: 100%", "height: auto", "All of above"], correct: 3 }
    ]
  },
  JavaScript: {
    1: [
      { id: 1, question: "Which keyword declares a variable?", options: ["var", "let", "const", "All of above"], correct: 3 },
      { id: 2, question: "How to write 'Hello World' in console?", options: ["console.log('Hello World')", "print('Hello World')", "echo('Hello World')", "alert('Hello World')"], correct: 0 },
      { id: 3, question: "What is the data type of '5'?", options: ["string", "number", "boolean", "object"], correct: 0 },
      { id: 4, question: "What does === mean?", options: ["Strict equality", "Loose equality", "Assignment", "Comparison"], correct: 0 },
      { id: 5, question: "Which is not a JavaScript data type?", options: ["float", "string", "boolean", "number"], correct: 0 }
    ],
    2: [
      { id: 1, question: "How to create a function?", options: ["function myFunc() {}", "def myFunc() {}", "create myFunc() {}", "func myFunc() {}"], correct: 0 },
      { id: 2, question: "What does return do?", options: ["Returns value from function", "Ends function", "Both A and B", "None of above"], correct: 2 },
      { id: 3, question: "What is an arrow function?", options: ["() => {}", "function => {}", "=> function {}", "function() => {}"], correct: 0 },
      { id: 4, question: "What is scope?", options: ["Variable accessibility", "Function visibility", "Code block", "Global area"], correct: 0 },
      { id: 5, question: "What is a callback?", options: ["Function passed as argument", "Function that calls back", "Function that returns", "Function that loops"], correct: 0 }
    ],
    3: [
      { id: 1, question: "How to create an array?", options: ["let arr = []", "let arr = {}", "let arr = ()", "let arr = <>"], correct: 0 },
      { id: 2, question: "Which method adds to end of array?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
      { id: 3, question: "How to access object property?", options: ["obj.property", "obj[property]", "Both A and B", "None"], correct: 2 },
      { id: 4, question: "What does map() do?", options: ["Creates new array", "Modifies existing", "Filters array", "Reduces array"], correct: 0 },
      { id: 5, question: "What does filter() return?", options: ["Filtered array", "First match", "Boolean", "Index"], correct: 0 }
    ],
    4: [
      { id: 1, question: "How to select element by ID?", options: ["getElementById()", "querySelector()", "Both", "None"], correct: 2 },
      { id: 2, question: "How to change HTML content?", options: ["innerHTML", "textContent", "innerText", "All of above"], correct: 3 },
      { id: 3, question: "How to add event listener?", options: ["addEventListener()", "onEvent()", "attachEvent()", "bindEvent()"], correct: 0 },
      { id: 4, question: "What does createElement do?", options: ["Creates new element", "Deletes element", "Copies element", "Moves element"], correct: 0 },
      { id: 5, question: "How to set style?", options: ["element.style", "element.css", "element.styles", "element.cssText"], correct: 0 }
    ],
    5: [
      { id: 1, question: "How to prevent form submission?", options: ["preventDefault()", "stopPropagation()", "return false", "All of above"], correct: 3 },
      { id: 2, question: "What is event bubbling?", options: ["Event travels up", "Event travels down", "Event stops", "Event repeats"], correct: 0 },
      { id: 3, question: "How to get input value?", options: ["input.value", "input.text", "input.innerHTML", "input.content"], correct: 0 },
      { id: 4, question: "What does submit event do?", options: ["Triggers on form submit", "Triggers on click", "Triggers on load", "Triggers on change"], correct: 0 },
      { id: 5, question: "How to validate email?", options: ["Regular expression", "type='email'", "Both", "None"], correct: 2 }
    ],
    6: [
      { id: 1, question: "What is a Promise?", options: ["Async operation result", "Synchronous function", "Callback function", "Event handler"], correct: 0 },
      { id: 2, question: "How to handle Promise?", options: [".then()", ".catch()", "async/await", "All of above"], correct: 3 },
      { id: 3, question: "What does fetch() do?", options: ["Makes HTTP request", "Fetches local file", "Gets user input", "Loads images"], correct: 0 },
      { id: 4, question: "What is async/await?", options: ["Promise syntax sugar", "Callback syntax", "Event syntax", "Loop syntax"], correct: 0 },
      { id: 5, question: "How to handle errors in async?", options: ["try/catch", ".catch()", "Both", "None"], correct: 2 }
    ]
  }
};

export const generateWeeklyQuestions = (topic, completedDays) => {
  const questionBank = {
    HTML: [
      "Explain the difference between div and span",
      "What are semantic HTML elements? Give examples",
      "How do you create a responsive navigation bar?",
      "Explain HTML5 form validation attributes",
      "What is the purpose of the DOCTYPE declaration?",
      "Explain the difference between local storage and session storage",
      "How do you embed a YouTube video in HTML?",
      "What are data attributes in HTML?",
      "Explain the difference between GET and POST methods",
      "What is the purpose of the viewport meta tag?"
    ],
    CSS: [
      "Explain CSS specificity and how it works",
      "What are CSS preprocessors? Name a few",
      "Explain the difference between relative and absolute positioning",
      "What is BEM methodology in CSS?",
      "How do you create a responsive grid system?",
      "Explain CSS variables and their benefits",
      "What are pseudo-elements? Give examples",
      "How do you create a CSS-only tooltip?",
      "Explain the difference between inline, block, and inline-block",
      "What is CSS isolation and how to achieve it?"
    ],
    JavaScript: [
      "Explain closure in JavaScript with example",
      "What is event delegation and why use it?",
      "Explain the difference between == and ===",
      "What is hoisting in JavaScript?",
      "Explain prototypal inheritance",
      "What are higher-order functions?",
      "Explain the event loop in JavaScript",
      "What is debouncing and throttling?",
      "Explain the difference between local storage and session storage",
      "What are Web Workers and when to use them?"
    ]
  };

  const selectedQuestions = questionBank[topic] || questionBank.HTML;
  const shuffled = [...selectedQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, 10).map((q, idx) => ({
    id: idx,
    question: q,
    options: [
      "Correct answer with detailed explanation",
      "Common misconception",
      "Partially correct but incomplete",
      "Incorrect answer"
    ],
    correct: 0
  }));
};