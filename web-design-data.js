/* =========================================================================
   Web Design Academy — Phase 0 placeholder content
   One placeholder week, reused across all 3 levels (Beginner/Intermediate/
   Advanced) until each level's real curriculum is authored in its own
   build phase (see the Codify multi-subject plan).
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
    <code>&lt;h1 style="color:blue;"&gt;</code>.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">&lt;h1&gt;Hello, Web Design Academy!&lt;/h1&gt;
&lt;p&gt;This is my first page.&lt;/p&gt;</pre>
    <ul>
      <li><code>&lt;h1&gt;...&lt;/h1&gt;</code> — an <strong>opening tag</strong> (<code>&lt;h1&gt;</code>) and a
        <strong>closing tag</strong> (<code>&lt;/h1&gt;</code>, with a forward slash) wrap around the text
        "Hello, Web Design Academy!". Whatever sits between them is what becomes the heading.</li>
      <li><code>&lt;p&gt;...&lt;/p&gt;</code> — the same opening/closing pattern, but for a paragraph tag instead.
        Every HTML element you'll meet follows this same "wrap your content in matching tags" shape.</li>
      <li>Notice the tags are <strong>stacked</strong>, not nested inside each other here — the heading finishes
        (with <code>&lt;/h1&gt;</code>) before the paragraph begins. You'll nest tags inside one another later
        (like putting a link inside a paragraph), but these two are simply next to each other.</li>
    </ul>
    <p>Now look at the second example, which adds a style and an image:</p>
    <pre class="code-block">&lt;h1 style="color:#4338ca;"&gt;Welcome to my page&lt;/h1&gt;
&lt;p&gt;I'm learning HTML and CSS.&lt;/p&gt;
&lt;img src="https://via.placeholder.com/120" alt="A placeholder photo of me"&gt;</pre>
    <ul>
      <li><code>style="color:#4338ca;"</code> sits inside the opening <code>&lt;h1&gt;</code> tag itself — this is
        called an <strong>attribute</strong>. Attributes always live inside the opening tag, in the form
        <code>name="value"</code>, and they add extra information or behaviour to that one element.</li>
      <li><code>&lt;img ...&gt;</code> has <strong>no separate closing tag</strong> — unlike
        <code>&lt;h1&gt;</code>/<code>&lt;p&gt;</code>, an image tag is "self-contained" because it has no inner
        text content to wrap; all of its information (which picture, and its alt text) lives in its attributes.</li>
      <li><code>src="..."</code> tells the browser which image file to load; <code>alt="..."</code> is the
        backup text description covered above.</li>
    </ul>`,
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
      desc:`Add an &lt;h1&gt; heading that contains the words "My Page". Remember the pattern from the concept box:
        an opening tag &lt;h1&gt;, your text, then a matching closing tag &lt;/h1&gt; with a forward slash.`,
      starter:`<!-- Add your heading below -->
`,
      tests:[{type:'dom', selector:'h1', contains:'My Page', label:'Page has an h1 containing "My Page"'}]
    },
    {
      title:'Add a paragraph',
      desc:`Add at least one &lt;p&gt; paragraph introducing yourself. A paragraph works exactly like the heading
        did — &lt;p&gt;your text here&lt;/p&gt; — just a different tag name for a different kind of content.`,
      starter:`<h1>My Page</h1>
<!-- Add a paragraph below -->
`,
      tests:[{type:'dom-count', selector:'p', min:1, label:'Page has at least one paragraph'}]
    },
    {
      title:'Add an image with alt text',
      desc:`Add an &lt;img&gt; tag with a non-empty alt attribute describing the image. Unlike the tags so far,
        &lt;img&gt; has no closing tag or inner text — everything about it (its picture and its alt description)
        goes inside the opening tag as attributes, e.g. &lt;img src="..." alt="A description here"&gt;.`,
      starter:`<h1>My Page</h1>
<p>About me.</p>
<!-- Add your image below -->
`,
      tests:[{type:'dom-attr', selector:'img', attr:'alt', notEmpty:true, label:'Image has descriptive alt text'}]
    },
    {
      title:'Style your heading',
      desc:`Give your &lt;h1&gt; an inline style attribute that changes its color, e.g.
        &lt;h1 style="color:red;"&gt;. The style attribute goes inside the opening tag, just like alt did on the
        image — attributes are how you attach extra information to any tag, no matter which one.`,
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
