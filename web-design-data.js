/* =========================================================================
   Web Design Academy — Phase 0 placeholder content
   One placeholder week, reused across all 3 levels (Beginner/Intermediate/
   Advanced) until each level's real curriculum is authored in its own
   build phase (see the Codify Academy multi-subject plan).
   Grading uses dom/dom-count/dom-attr test types against a sandboxed
   iframe render of the student's HTML (see execIsolatedDom in app.js) —
   there is no console/stdout for this subject.
   ========================================================================= */

const WD_WEEKS = [
{
  key:'week1', num:1, title:'Your First Web Page',
  scenarioTag:'Real world: your own personal intro page',
  scenario:`You're building the very first page of your own personal website — just a simple page that introduces
    you. Every tag you add becomes something a visitor actually sees in their browser.`,
  objectives:[
    'Understand that HTML is built from nested tags',
    'Add a heading and a paragraph to a page',
    'Add an image with helpful alt text',
    'Give an element some inline style'
  ],
  conceptHtml:`
    <p>A web page is built from <strong>HTML tags</strong> — instructions that tell the browser what each piece of
    content is. A heading uses <code>&lt;h1&gt;</code>, a paragraph uses <code>&lt;p&gt;</code>, and an image uses
    <code>&lt;img src="..." alt="..."&gt;</code>.</p>
    <p>The <code>alt</code> text on an image matters — it's what screen readers announce, and what shows if the
    image fails to load.</p>
    <p>You can style any element directly with the <code>style</code> attribute, e.g.
    <code>&lt;h1 style="color:blue;"&gt;</code>.</p>`,
  sandboxStarter:`<h1>Hello, Web Design Academy!</h1>
<p>This is my first page.</p>
`,
  sandboxStarter2:`<h1 style="color:#4338ca;">Welcome to my page</h1>
<p>I'm learning HTML and CSS.</p>
<img src="https://via.placeholder.com/120" alt="A placeholder photo of me">
`,
  exercises:[
    {
      title:'Add a heading',
      desc:`Add an &lt;h1&gt; heading that contains the words "My Page".`,
      starter:`<!-- Add your heading below -->
`,
      tests:[{type:'dom', selector:'h1', contains:'My Page', label:'Page has an h1 containing "My Page"'}]
    },
    {
      title:'Add a paragraph',
      desc:`Add at least one &lt;p&gt; paragraph introducing yourself.`,
      starter:`<h1>My Page</h1>
<!-- Add a paragraph below -->
`,
      tests:[{type:'dom-count', selector:'p', min:1, label:'Page has at least one paragraph'}]
    },
    {
      title:'Add an image with alt text',
      desc:`Add an &lt;img&gt; tag with a non-empty alt attribute describing the image.`,
      starter:`<h1>My Page</h1>
<p>About me.</p>
<!-- Add your image below -->
`,
      tests:[{type:'dom-attr', selector:'img', attr:'alt', notEmpty:true, label:'Image has descriptive alt text'}]
    },
    {
      title:'Style your heading',
      desc:`Give your &lt;h1&gt; an inline style attribute that changes its color.`,
      starter:`<h1>My Page</h1>
<p>About me.</p>
`,
      tests:[{type:'dom-attr', selector:'h1', attr:'style', notEmpty:true, label:'Heading has an inline style'}]
    }
  ],
  quiz:[
    {
      q:'Which tag is used for the main heading of a page?',
      options:['<h1>','<p>','<head>','<title>'],
      correct:0,
      explain:'<h1> is the top-level heading tag — browsers display it large and bold by default.'
    },
    {
      q:'What is the alt attribute on an <img> tag for?',
      options:['Making the image bigger','Describing the image for accessibility and fallback text','Adding a border','Linking to another page'],
      correct:1,
      explain:'alt text is read aloud by screen readers and shown if the image fails to load.'
    },
    {
      q:'Which of these correctly styles text color inline?',
      options:['<p color="blue">','<p style="color:blue;">','<p css="color:blue">','<p class=blue>'],
      correct:1,
      explain:'Inline styles use the style attribute with CSS property:value pairs.'
    },
    {
      q:'Which tag holds visible page content like headings and paragraphs?',
      options:['<head>','<body>','<html>','<meta>'],
      correct:1,
      explain:'<body> contains everything the visitor actually sees on the page.'
    }
  ]
}
];

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.wd = { b: {weeks: WD_WEEKS}, i: {weeks: WD_WEEKS}, a: {weeks: WD_WEEKS} };
