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
    },
    {
      title:'Add a subheading',
      desc:`Add an &lt;h2&gt; subheading containing the words "About Me". &lt;h2&gt; works exactly like &lt;h1&gt;
        but signals a slightly less important heading — perfect for a section title underneath your main heading.`,
      starter:`<h1>My Page</h1>
<p>About me.</p>
<!-- Add your h2 subheading below -->
`,
      tests:[{type:'dom', selector:'h2', contains:'About Me', label:'Page has an h2 containing "About Me"'}]
    },
    {
      title:'Style your paragraph',
      desc:`Give your &lt;p&gt; an inline style attribute too, e.g. &lt;p style="font-style:italic;"&gt;. Any tag
        can carry a style attribute, not just headings.`,
      starter:`<h1>My Page</h1>
<p>About me.</p>
`,
      tests:[{type:'dom-attr', selector:'p', attr:'style', notEmpty:true, label:'Paragraph has an inline style'}]
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
  ],
  sandboxStarter3:`<h1 style="color:#4338ca;">Welcome to my page</h1>
<h2>A bit about me</h2>
<p style="font-style:italic;">I'm learning HTML and CSS.</p>
`,
  stretchChallenge:{
    title:'Add a second paragraph and image',
    desc:`Finished early? Add a <strong>second</strong> &lt;p&gt; paragraph and a <strong>second</strong>
      &lt;img&gt; (with its own alt text) — a real page usually has more than one of each.`,
    starter:`<h1>My Page</h1>
<p>About me.</p>
<img src="https://via.placeholder.com/120" alt="A placeholder photo of me">
<!-- Add a second paragraph and a second image below -->
`,
    tests:[
      {type:'dom-count', selector:'p', min:2, label:'Page now has at least 2 paragraphs'},
      {type:'dom-count', selector:'img', min:2, label:'Page now has at least 2 images'}
    ]
  }
},
{
  key:'week2', num:2, title:'Lists, Links and Structure',
  scenarioTag:'Real world: an "About Me" page with a hobbies list and a friend link',
  scenario:`You want to add more to your page: a list of your hobbies, a numbered list of your morning routine, and a
    link to a friend's page. You'll also learn how to group related pieces of a page together, the same way you'd
    group items into folders.`,
  objectives:[
    'Build a bulleted list with <ul> and <li>',
    'Build a numbered list with <ol> and <li>',
    'Link to another page with <a href="...">',
    'Group related content together using <div>'
  ],
  conceptHtml:`
    <p>A <strong>list</strong> is a group of items. HTML has two kinds: <code>&lt;ul&gt;</code> (unordered — bullet
    points, order doesn't matter) and <code>&lt;ol&gt;</code> (ordered — numbered, order matters). Either way, each
    individual item goes inside its own <code>&lt;li&gt;</code> ("list item") tag:</p>
    <pre class="code-block">&lt;ul&gt;
  &lt;li&gt;Football&lt;/li&gt;
  &lt;li&gt;Drawing&lt;/li&gt;
  &lt;li&gt;Reading&lt;/li&gt;
&lt;/ul&gt;</pre>
    <p>A <strong>link</strong> uses the <code>&lt;a&gt;</code> ("anchor") tag with an <code>href</code> attribute —
    the address of the page you're linking to. Whatever text sits between the opening and closing <code>&lt;a&gt;</code>
    tags becomes the clickable link text:</p>
    <pre class="code-block">&lt;ol&gt;
  &lt;li&gt;Wake up&lt;/li&gt;
  &lt;li&gt;Brush teeth&lt;/li&gt;
  &lt;li&gt;Eat breakfast&lt;/li&gt;
&lt;/ol&gt;
&lt;a href="https://example.com"&gt;Visit my friend's page&lt;/a&gt;</pre>
    <p>Finally, a <code>&lt;div&gt;</code> is a plain container with no visual style of its own — its only job is to
    group related elements together, the way a folder groups related files, so you (and later, CSS) can treat them
    as one unit.</p>
    <h3>Let's break down the list code, line by line</h3>
    <ul>
      <li><code>&lt;ul&gt;</code> — opens an unordered (bulleted) list. Nothing inside it is visible text on its own;
        it's a container that only holds <code>&lt;li&gt;</code> items.</li>
      <li><code>&lt;li&gt;Football&lt;/li&gt;</code> — one single item in the list. Each hobby gets its own
        <code>&lt;li&gt;</code>...<code>&lt;/li&gt;</code> pair — three hobbies means three separate <code>&lt;li&gt;</code>
        elements, all nested inside the one <code>&lt;ul&gt;</code>.</li>
      <li><code>&lt;/ul&gt;</code> — closes the list. Everything between the opening and closing <code>&lt;ul&gt;</code>
        tag is treated as "this list's items."</li>
      <li><code>&lt;ol&gt;</code> works identically to <code>&lt;ul&gt;</code> — same nested <code>&lt;li&gt;</code>
        pattern — the only difference is the browser numbers the items (1, 2, 3...) instead of adding bullet points,
        which is why it's the right choice when the order actually matters (like morning routine steps).</li>
      <li><code>&lt;a href="https://example.com"&gt;Visit my friend's page&lt;/a&gt;</code> — <code>href</code> is an
        <strong>attribute</strong> living inside the opening <code>&lt;a&gt;</code> tag (same pattern as <code>alt</code>
        on <code>&lt;img&gt;</code> from Week 1), and it holds the destination address. The words between the tags
        ("Visit my friend's page") are what the visitor actually sees and clicks.</li>
    </ul>`,
  sandboxStarter:`<h2>My Hobbies</h2>
<ul>
  <li>Football</li>
  <li>Drawing</li>
  <li>Reading</li>
</ul>
`,
  sandboxStarter2:`<h2>My Morning Routine</h2>
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Eat breakfast</li>
</ol>
<a href="https://example.com">Visit my friend's page</a>
`,
  exercises:[
    {
      title:'Build your hobbies list',
      desc:`Create a &lt;ul&gt; with at least 3 &lt;li&gt; items listing things you enjoy doing. Follow the exact
        pattern from the concept box: an opening &lt;ul&gt;, one &lt;li&gt;...&lt;/li&gt; per hobby, then a closing
        &lt;/ul&gt;.`,
      starter:`<!-- Add your <ul> hobbies list below -->
`,
      tests:[{type:'dom-count', selector:'ul li', min:3, label:'Page has a list with at least 3 items'}]
    },
    {
      title:"Link to a friend's page",
      desc:`Add an &lt;a&gt; tag with a non-empty href attribute, e.g. &lt;a href="https://example.com"&gt;My friend's
        page&lt;/a&gt;. The href is what makes it a real, clickable link — without it, an &lt;a&gt; tag doesn't go
        anywhere.`,
      starter:`<!-- Add your link below -->
`,
      tests:[{type:'dom-attr', selector:'a', attr:'href', notEmpty:true, label:'Page has a link with a real href'}]
    },
    {
      title:'List the steps in order',
      desc:`Create an &lt;ol&gt; with at least 2 &lt;li&gt; steps — for example, the steps to make a sandwich. Same
        pattern as the &lt;ul&gt; you already built, just swap the outer tag for &lt;ol&gt; since these steps have a
        real order.`,
      starter:`<!-- Add your <ol> steps list below -->
`,
      tests:[{type:'dom-count', selector:'ol li', min:2, label:'Page has a numbered list with at least 2 steps'}]
    },
    {
      title:'Group your heading in a container',
      desc:`Wrap an &lt;h1&gt; heading inside a &lt;div&gt;, like this: &lt;div&gt;&lt;h1&gt;My Page&lt;/h1&gt;&lt;/div&gt;.
        This groups the heading as part of that div's contents — the same "wrap it inside" idea you've already used
        for list items, just with a div instead of a ul/ol.`,
      starter:`<!-- Add your <div><h1>...</h1></div> below -->
`,
      tests:[{type:'dom-count', selector:'div > h1', min:1, label:'Page has an h1 nested directly inside a div'}]
    },
    {
      title:'Nest a link inside a list item',
      desc:`Build a &lt;ul&gt; with at least 2 &lt;li&gt; items, where each &lt;li&gt; contains its own &lt;a&gt;
        link, like &lt;li&gt;&lt;a href="..."&gt;My friend's page&lt;/a&gt;&lt;/li&gt;. Tags can nest inside each
        other exactly like the div/h1 you just built — a link can live inside a list item just as easily.`,
      starter:`<!-- Build a <ul> where each <li> contains its own <a> link -->
`,
      tests:[{type:'dom-count', selector:'li a', min:2, label:'Page has at least 2 links nested inside list items'}]
    },
    {
      title:'Group your list in a container',
      desc:`Wrap a &lt;ul&gt; (with at least 2 items) inside a &lt;div&gt;, like
        &lt;div&gt;&lt;ul&gt;...&lt;/ul&gt;&lt;/div&gt;. Same nesting idea as grouping a heading, just with a list
        this time.`,
      starter:`<!-- Add your <div><ul>...</ul></div> below, with at least 2 <li> items -->
`,
      tests:[{type:'dom-count', selector:'div > ul', min:1, label:'Page has a ul nested directly inside a div'}]
    }
  ],
  quiz:[
    {
      q:'Which tag creates a bulleted (unordered) list?',
      options:['<ol>','<ul>','<li>','<list>'],
      correct:1,
      explain:'<ul> ("unordered list") displays bullet points; <ol> ("ordered list") numbers its items instead.'
    },
    {
      q:'What tag represents a single item inside a list?',
      options:['<item>','<point>','<li>','<row>'],
      correct:2,
      explain:'<li> ("list item") is used inside both <ul> and <ol> for each individual entry.'
    },
    {
      q:'Which attribute on an <a> tag makes it a real, working link?',
      options:['src','href','link','to'],
      correct:1,
      explain:'href holds the destination address; src is used for things like images, not links.'
    },
    {
      q:'What is a <div> tag mainly used for?',
      options:['Making text bold','Adding an image','Grouping related content together','Creating a link'],
      correct:2,
      explain:'<div> is a plain container with no look of its own — its job is to group elements together.'
    }
  ],
  sandboxStarter3:`<div>
  <h2>My Favorite Links</h2>
  <ul>
    <li><a href="https://example.com">My friend's page</a></li>
    <li><a href="https://example.org">A cool site</a></li>
  </ul>
</div>
`,
  stretchChallenge:{
    title:'Build a fully linked, grouped list',
    desc:`Combine everything: inside one &lt;div&gt;, add an &lt;h2&gt; and a &lt;ul&gt; where at least 2 &lt;li&gt;
      items each contain their own &lt;a&gt; link.`,
    starter:`<!-- Build a <div> containing an <h2> and a <ul> where each <li> has its own <a> link -->
`,
    tests:[
      {type:'dom-count', selector:'div > ul li a', min:2, label:'Page has at least 2 links, each nested in a li inside a ul inside a div'}
    ]
  }
},
{
  key:'week3', num:3, title:'CSS Basics: Selectors and Color',
  scenarioTag:'Real world: restyling your intro page with a real stylesheet',
  scenario:`Inline style="..." attributes work, but they only style one element at a time and get messy fast. This
    week you'll write real CSS rules in a <style> block instead — the same rule can restyle many elements at once,
    and it's how every real website actually does styling.`,
  objectives:[
    'Add a <style> block to a page',
    'Select elements by tag name and by class (.name)',
    'Select one specific element by id (#name)',
    'Set text color, background color and font-family with CSS'
  ],
  conceptHtml:`
    <p>A <code>&lt;style&gt;</code> block holds CSS rules. Each rule has a <strong>selector</strong> (which
    element(s) to style) followed by <code>{ }</code> containing <code>property: value;</code> pairs:</p>
    <pre class="code-block">&lt;style&gt;
  h1 { color: #4338ca; }
  p { font-family: Arial, sans-serif; }
&lt;/style&gt;
&lt;h1&gt;My Page&lt;/h1&gt;
&lt;p&gt;Styled with real CSS now!&lt;/p&gt;</pre>
    <p>There are three selector types you'll use constantly: a bare tag name like <code>h1</code> selects
    <strong>every</strong> <code>&lt;h1&gt;</code> on the page; a dot plus a class name like <code>.highlight</code>
    selects every element with <code>class="highlight"</code> (any tag, and you can reuse the same class on many
    elements); a hash plus an id like <code>#main-title</code> selects the <strong>one</strong> element with
    <code>id="main-title"</code> (ids must be unique — only one element on the page should ever share an id).</p>
    <pre class="code-block">&lt;style&gt;
  .highlight { background-color: #fef08a; }
  #main-title { color: #16a34a; }
&lt;/style&gt;
&lt;h1 id="main-title"&gt;Welcome!&lt;/h1&gt;
&lt;p class="highlight"&gt;This paragraph has a highlighted background.&lt;/p&gt;</pre>
    <h3>Let's break down the selector code, line by line</h3>
    <ul>
      <li><code>h1 { color: #4338ca; }</code> — an element selector. No dot, no hash, just the tag name — this
        matches every <code>&lt;h1&gt;</code> on the whole page, however many there are.</li>
      <li><code>class="highlight"</code> on the <code>&lt;p&gt;</code> tag, paired with <code>.highlight { ... }</code>
        in the style block — the dot is what tells CSS "this is a class name, not a tag name." You could add
        <code>class="highlight"</code> to five different elements of five different types, and this one rule would
        style all five.</li>
      <li><code>id="main-title"</code> on the <code>&lt;h1&gt;</code>, paired with <code>#main-title { ... }</code> —
        the hash means "id, not class." Unlike class, an id is meant to be used exactly once per page, which is why
        it's the right choice when you need to style one single, specific element differently from every other
        element of the same tag.</li>
      <li><code>color</code> sets text color; <code>background-color</code> sets the color behind the text;
        <code>font-family</code> picks which typeface to use (listing a few, like <code>Arial, sans-serif</code>, as
        backups in case the first one isn't available on a visitor's device).</li>
    </ul>`,
  sandboxStarter:`<style>
  h1 { color: #4338ca; }
  p { font-family: Arial, sans-serif; }
</style>
<h1>My Page</h1>
<p>Styled with real CSS now!</p>
`,
  sandboxStarter2:`<style>
  .highlight { background-color: #fef08a; }
  #main-title { color: #16a34a; }
</style>
<h1 id="main-title">Welcome!</h1>
<p class="highlight">This paragraph has a highlighted background.</p>
`,
  exercises:[
    {
      title:'Color your heading',
      desc:`Add a &lt;style&gt; block with a rule that sets your &lt;h1&gt;'s color to anything other than black —
        e.g. &lt;style&gt;h1 { color: blue; }&lt;/style&gt;. Remember the pattern: selector, then curly braces, then
        property: value; inside them.`,
      starter:`<!-- Add a <style> block above your <h1>, then the <h1> itself -->
`,
      tests:[{type:'computed-style', selector:'h1', prop:'color', notEqual:'rgb(0, 0, 0)', label:'Heading has a non-default text color'}]
    },
    {
      title:'Highlight a paragraph with a class',
      desc:`Give a &lt;p&gt; the class="highlight" attribute, then add a &lt;style&gt; rule .highlight { background-color:
        ...; } to give it a background color. The dot before "highlight" in the CSS is what makes it a class
        selector, matching the class="highlight" attribute on your paragraph.`,
      starter:`<!-- Add a <style> block with a .highlight rule, then a <p class="highlight"> -->
`,
      tests:[{type:'computed-style', selector:'.highlight', prop:'backgroundColor', notEqual:'rgba(0, 0, 0, 0)', label:'.highlight element has a background color'}]
    },
    {
      title:'Style one element with an id',
      desc:`Give an element id="main-title", then add a &lt;style&gt; rule #main-title { color: ...; } to set its
        text color to something other than black. The hash before "main-title" makes it an id selector — it only
        matches the one element carrying that exact id.`,
      starter:`<!-- Add a <style> block with a #main-title rule, then an element with id="main-title" -->
`,
      tests:[{type:'computed-style', selector:'#main-title', prop:'color', notEqual:'rgb(0, 0, 0)', label:'#main-title element has a non-default text color'}]
    },
    {
      title:'Choose a real font',
      desc:`Give a &lt;p&gt; a font-family other than the browser default, e.g. font-family: Arial, sans-serif; —
        either inline or inside a &lt;style&gt; rule. Every device has different fonts installed, so it's normal to
        list a couple of options separated by commas.`,
      starter:`<!-- Add a <p> styled with a font-family other than the default -->
`,
      tests:[{type:'computed-style', selector:'p', prop:'fontFamily', notEqual:'"Times New Roman"', label:'Paragraph uses a non-default font'}]
    },
    {
      title:'Center your heading',
      desc:`Add a CSS rule setting <code>text-align: center;</code> on your &lt;h1&gt; (inline style, or inside a
        &lt;style&gt; block). This centers the text horizontally within its box.`,
      starter:`<!-- Add an <h1> styled with text-align: center; -->
`,
      tests:[{type:'computed-style', selector:'h1', prop:'textAlign', equals:'center', label:'Heading is centered'}]
    },
    {
      title:'Add a second class-based rule',
      desc:`Give a &lt;p&gt; the class="notice" attribute, then add a &lt;style&gt; rule .notice { color: ...; }
        setting its text color to something other than black — the same class-selector pattern as .highlight,
        just a new class name and a different property.`,
      starter:`<!-- Add a <style> block with a .notice rule, then a <p class="notice"> -->
`,
      tests:[{type:'computed-style', selector:'.notice', prop:'color', notEqual:'rgb(0, 0, 0)', label:'.notice element has a non-default text color'}]
    }
  ],
  quiz:[
    {
      q:'Where do you write CSS rules to style a whole page?',
      options:['Inside a <style> block','Inside a <p> tag','Inside an <img> tag','Inside a comment'],
      correct:0,
      explain:'A <style> block holds one or more CSS rules that apply across the page.'
    },
    {
      q:'What does the selector .highlight { ... } match?',
      options:['Only one element with id="highlight"','Every element with class="highlight"','Every <h1> tag','Nothing unless it has a # in front'],
      correct:1,
      explain:'A dot before a name is a class selector — it can match many elements that share that class.'
    },
    {
      q:'What does the selector #main-title { ... } match?',
      options:['Every element with class="main-title"','Every <h1> on the page','The one element with id="main-title"','Every paragraph'],
      correct:2,
      explain:'A hash before a name is an id selector — ids should be unique, so this matches exactly one element.'
    },
    {
      q:'Which CSS property changes text color?',
      options:['background-color','font-family','color','font-size'],
      correct:2,
      explain:'color sets the text color; background-color sets the color behind the text instead.'
    }
  ],
  sandboxStarter3:`<style>
  .card-title { color: #b91c1c; text-align: center; }
</style>
<h2 class="card-title">Special Notice</h2>
<p>Regular text below.</p>
`,
  stretchChallenge:{
    title:'Reuse one class on two different elements',
    desc:`Give the <strong>same</strong> class="tag" to two elements of different types (e.g. an &lt;h2&gt; and a
      &lt;p&gt;), then add one &lt;style&gt; rule .tag { background-color: ...; } that styles both at once — this is
      the whole point of classes: one rule, reused anywhere.`,
    starter:`<!-- Add a <style> block with a .tag rule (background-color), then TWO different elements sharing class="tag" -->
`,
    tests:[
      {type:'dom-count', selector:'.tag', min:2, label:'At least 2 elements share the .tag class'},
      {type:'computed-style', selector:'.tag', prop:'backgroundColor', notEqual:'rgba(0, 0, 0, 0)', label:'.tag elements have a background color'}
    ]
  }
},
{
  key:'week4', num:4, title:'The Box Model',
  scenarioTag:'Real world: designing a bordered "profile card"',
  scenario:`Every element on a web page is secretly a rectangular box — even a single line of text. This week you'll
    learn the four layers every box has, and use them to design a neat "profile card" with breathing room around its
    text and a visible border.`,
  objectives:[
    'Understand the box model: content, padding, border and margin',
    "Add padding to create space inside an element's border",
    'Add a border and margin to create space around an element',
    'Use box-sizing: border-box so width includes padding and border'
  ],
  conceptHtml:`
    <p>Every HTML element is a box made of four layers, from the inside out: the <strong>content</strong> itself
    (your text or image), <strong>padding</strong> (space between the content and the border), the
    <strong>border</strong> (a visible edge, if you add one), and <strong>margin</strong> (space outside the border,
    keeping this box away from its neighbors). Think of padding as the cushioning inside a box, and margin as the
    gap between this box and the next one on a shelf.</p>
    <pre class="code-block">&lt;style&gt;
  .card {
    padding: 16px;
    border: 2px solid #4338ca;
    margin: 20px;
  }
&lt;/style&gt;
&lt;div class="card"&gt;
  &lt;h2&gt;Ada&lt;/h2&gt;
  &lt;p&gt;Loves coding and chess.&lt;/p&gt;
&lt;/div&gt;</pre>
    <p>One extra property matters once you start adding padding and borders: by default, <code>width</code> only
    measures the content — padding and border get ADDED on top of it, so a 200px-wide box with 16px padding and a
    2px border actually takes up 236px total. Setting <code>box-sizing: border-box</code> changes this so
    <code>width</code> includes the padding and border, keeping the box exactly the size you set:</p>
    <pre class="code-block">&lt;style&gt;
  .card2 { box-sizing: border-box; width: 200px; padding: 16px; border: 2px solid #16a34a; }
&lt;/style&gt;
&lt;div class="card2"&gt;This box stays exactly 200px wide, padding and border included.&lt;/div&gt;</pre>
    <h3>Let's break down the box-model rule, line by line</h3>
    <ul>
      <li><code>padding: 16px;</code> — adds 16px of empty space between the text and the border, on all four
        sides. Without it, the text would touch the border edge directly.</li>
      <li><code>border: 2px solid #4338ca;</code> — a border needs THREE things to actually show up: a width
        (<code>2px</code>), a style (<code>solid</code> — dashed/dotted also exist), and a color. Leaving out the
        style is a common mistake that makes a border invisible even with a width set.</li>
      <li><code>margin: 20px;</code> — adds 20px of empty space OUTSIDE the border, pushing this box away from
        whatever comes next on the page. Padding and margin use the exact same shorthand shape, they just apply on
        opposite sides of the border.</li>
      <li><code>box-sizing: border-box;</code> — changes what "width" measures. Without it (the default,
        <code>content-box</code>), padding and border are added on top of your specified width, so boxes can grow
        larger than you expected once you start adding padding — <code>border-box</code> avoids that surprise.</li>
    </ul>`,
  sandboxStarter:`<style>
  .card {
    padding: 16px;
    border: 2px solid #4338ca;
    margin: 20px;
  }
</style>
<div class="card">
  <h2>Ada</h2>
  <p>Loves coding and chess.</p>
</div>
`,
  sandboxStarter2:`<style>
  .card2 { box-sizing: border-box; width: 200px; padding: 16px; border: 2px solid #16a34a; }
</style>
<div class="card2">This box stays exactly 200px wide, padding and border included.</div>
`,
  exercises:[
    {
      title:'Add padding to your card',
      desc:`Give an element with class="card" at least 16px of padding on all sides, e.g. .card { padding: 16px; }
        in a &lt;style&gt; block. Padding is the space between the content and the border, even if the border isn't
        visible yet.`,
      starter:`<!-- Add a <style> block with a .card padding rule, then a <div class="card"> -->
`,
      tests:[{type:'computed-style', selector:'.card', prop:'paddingTop', atLeastPx:10, label:'.card has at least 10px of padding'}]
    },
    {
      title:'Add a border',
      desc:`Give your .card a visible border, e.g. .card { border: 2px solid #4338ca; }. Remember a border needs a
        width, a style (like solid), AND a color to actually be visible — leaving out the style is the most common
        reason a border silently doesn't show up.`,
      starter:`<!-- Add a border rule to your .card -->
`,
      tests:[{type:'computed-style', selector:'.card', prop:'borderTopWidth', atLeastPx:1, label:'.card has a visible border'}]
    },
    {
      title:'Add margin',
      desc:`Give your .card at least 10px of margin, e.g. .card { margin: 20px; }. Margin pushes space OUTSIDE the
        border — the opposite side from padding — keeping this box separated from whatever comes after it.`,
      starter:`<!-- Add a margin rule to your .card -->
`,
      tests:[{type:'computed-style', selector:'.card', prop:'marginTop', atLeastPx:10, label:'.card has at least 10px of margin'}]
    },
    {
      title:'Use box-sizing: border-box',
      desc:`Give your .card box-sizing: border-box;. This makes width measure the WHOLE box (padding and border
        included) instead of just the content, so adding padding later won't unexpectedly grow the box bigger.`,
      starter:`<!-- Add box-sizing: border-box; to your .card -->
`,
      tests:[{type:'computed-style', selector:'.card', prop:'boxSizing', equals:'border-box', label:'.card uses box-sizing: border-box'}]
    },
    {
      title:'Add rounded corners',
      desc:`Give your .card at least 8px of border-radius, e.g. .card { border-radius: 12px; }. Rounding the
        corners of the box (not a new layer, just a style on the border) is a common finishing touch on cards.`,
      starter:`<!-- Add a border-radius rule to your .card -->
`,
      tests:[{type:'computed-style', selector:'.card', prop:'borderTopLeftRadius', atLeastPx:8, label:'.card has rounded corners (at least 8px)'}]
    },
    {
      title:'Set an exact card width',
      desc:`Give your .card BOTH box-sizing: border-box; AND width: 250px; together. Because of border-box, the
        card's rendered width stays exactly 250px even with padding and a border added.`,
      starter:`<!-- Give your .card box-sizing: border-box AND width: 250px together -->
`,
      tests:[
        {type:'computed-style', selector:'.card', prop:'boxSizing', equals:'border-box', label:'.card uses box-sizing: border-box'},
        {type:'computed-style', selector:'.card', prop:'width', equals:'250px', label:'.card is exactly 250px wide'}
      ]
    }
  ],
  quiz:[
    {
      q:'Going from the inside out, what is the correct order of the box model?',
      options:['Margin, border, padding, content','Content, padding, border, margin','Padding, content, margin, border','Border, content, padding, margin'],
      correct:1,
      explain:'Content is innermost, then padding, then the border, then margin on the outside.'
    },
    {
      q:'Which property adds space INSIDE an element, between its content and its border?',
      options:['margin','padding','border','width'],
      correct:1,
      explain:'Padding sits between the content and the border; margin is on the other side, outside the border.'
    },
    {
      q:'Which property adds space OUTSIDE an element, separating it from its neighbors?',
      options:['padding','color','margin','border'],
      correct:2,
      explain:'Margin creates space outside the border, between this box and whatever comes next.'
    },
    {
      q:'What does box-sizing: border-box do?',
      options:['Makes the width include padding and border','Makes text bold','Automatically adds a border','Centers the element on the page'],
      correct:0,
      explain:'With border-box, the width you set already includes padding and border, so the box stays that size.'
    }
  ],
  sandboxStarter3:`<style>
  .rounded-card {
    padding: 12px 20px;
    border: 2px solid #16a34a;
    border-radius: 12px;
  }
</style>
<div class="rounded-card">
  <p>Rounded corners make a card feel softer.</p>
</div>
`,
  stretchChallenge:{
    title:'Build a fully-styled profile card',
    desc:`Give an element with class="profile-card" ALL four finishing touches at once: at least 16px of padding,
      a visible border, at least 10px of margin, AND at least 8px of border-radius.`,
    starter:`<!-- Add a <style> block with a .profile-card rule (padding, border, margin, border-radius),
then a <div class="profile-card"> -->
`,
    tests:[
      {type:'computed-style', selector:'.profile-card', prop:'paddingTop', atLeastPx:16, label:'.profile-card has at least 16px of padding'},
      {type:'computed-style', selector:'.profile-card', prop:'borderTopWidth', atLeastPx:1, label:'.profile-card has a visible border'},
      {type:'computed-style', selector:'.profile-card', prop:'marginTop', atLeastPx:10, label:'.profile-card has at least 10px of margin'},
      {type:'computed-style', selector:'.profile-card', prop:'borderTopLeftRadius', atLeastPx:8, label:'.profile-card has rounded corners'}
    ]
  }
},
{
  key:'week5', num:5, title:'Flexbox Layout',
  scenarioTag:'Real world: arranging 3 "skill cards" side-by-side',
  scenario:`By default, every block-level element (like a &lt;div&gt;) stacks on its own line, one under the next.
    Flexbox is a layout mode that lets you arrange a container's children in a row (or column) instead, and control
    exactly how they're spaced and aligned — perfect for a row of skill cards side-by-side.`,
  objectives:[
    'Turn a container into a flex row with display: flex',
    'Control horizontal spacing with justify-content',
    'Control vertical alignment with align-items',
    'Stack items in a column instead with flex-direction'
  ],
  conceptHtml:`
    <p>Adding <code>display: flex;</code> to a container turns its direct children into a row of "flex items" —
    instead of stacking on top of each other, they line up side-by-side automatically, with no floats or manual
    positioning needed:</p>
    <pre class="code-block">&lt;style&gt;
  .cards { display: flex; justify-content: space-between; align-items: center; }
&lt;/style&gt;
&lt;div class="cards"&gt;
  &lt;div class="card"&gt;HTML&lt;/div&gt;
  &lt;div class="card"&gt;CSS&lt;/div&gt;
  &lt;div class="card"&gt;JavaScript&lt;/div&gt;
&lt;/div&gt;</pre>
    <p><code>justify-content</code> controls spacing ALONG the row (try <code>space-between</code> to push items to
    the edges with gaps between, or <code>center</code> to bunch them in the middle). <code>align-items</code>
    controls alignment ACROSS the row (try <code>center</code> so shorter and taller cards all line up in the
    middle vertically). If you want a column instead of a row, add <code>flex-direction: column;</code>:</p>
    <pre class="code-block">&lt;style&gt;
  .stack { display: flex; flex-direction: column; }
&lt;/style&gt;
&lt;div class="stack"&gt;
  &lt;div class="card"&gt;Step 1&lt;/div&gt;
  &lt;div class="card"&gt;Step 2&lt;/div&gt;
&lt;/div&gt;</pre>
    <h3>Let's break down the flexbox rule, line by line</h3>
    <ul>
      <li><code>display: flex;</code> — the one property that switches on flexbox for this element's direct
        children. Without it, none of the other flex properties below do anything at all.</li>
      <li><code>justify-content: space-between;</code> — spaces the three cards out evenly along the row, with the
        first card at the very left, the last at the very right, and equal gaps between them.</li>
      <li><code>align-items: center;</code> — if one card were taller than the others, this keeps every card
        vertically centered against the tallest one, rather than all lining up at the top by default.</li>
      <li><code>flex-direction: column;</code> — flips the main direction from a row to a column, so
        <code>justify-content</code>/<code>align-items</code> now control vertical spacing and horizontal alignment
        instead — the two properties don't change meaning, just which direction they act on.</li>
    </ul>`,
  sandboxStarter:`<style>
  .cards { display: flex; justify-content: space-between; align-items: center; }
  .card { padding: 12px; border: 2px solid #4338ca; }
</style>
<div class="cards">
  <div class="card">HTML</div>
  <div class="card">CSS</div>
  <div class="card">JavaScript</div>
</div>
`,
  sandboxStarter2:`<style>
  .stack { display: flex; flex-direction: column; }
  .card { padding: 12px; border: 2px solid #16a34a; margin-bottom: 8px; }
</style>
<div class="stack">
  <div class="card">Step 1</div>
  <div class="card">Step 2</div>
  <div class="card">Step 3</div>
</div>
`,
  exercises:[
    {
      title:'Turn your container into a flex row',
      desc:`Give a &lt;div class="cards"&gt; display: flex; so its children line up in a row. This is the one
        property that switches flexbox on at all.`,
      starter:`<!-- Add a <style> block with a .cards { display: flex; } rule, then a <div class="cards"> -->
`,
      tests:[{type:'computed-style', selector:'.cards', prop:'display', equals:'flex', label:'.cards is a flex container'}]
    },
    {
      title:'Space your cards evenly',
      desc:`Give your .cards container justify-content: space-between; (or another value like center) — anything
        other than the default. This controls how the cards are spaced along the row.`,
      starter:`<style>
  .cards { display: flex; }
</style>
<div class="cards">
  <div>HTML</div>
  <div>CSS</div>
</div>
<!-- Add a justify-content rule to .cards above -->
`,
      tests:[{type:'computed-style', selector:'.cards', prop:'justifyContent', notEqual:'normal', label:'.cards has a justify-content value set'}]
    },
    {
      title:'Center items vertically',
      desc:`Give your .cards container align-items: center;. This lines every card up in the middle vertically,
        even if one card ends up taller than the others.`,
      starter:`<style>
  .cards { display: flex; justify-content: space-between; }
</style>
<div class="cards">
  <div>HTML</div>
  <div>CSS</div>
</div>
<!-- Add align-items: center; to .cards above -->
`,
      tests:[{type:'computed-style', selector:'.cards', prop:'alignItems', equals:'center', label:'.cards centers items vertically'}]
    },
    {
      title:'Stack items in a column',
      desc:`Give a &lt;div class="stack"&gt; display: flex; flex-direction: column;, so its children stack
        vertically instead of lining up in a row.`,
      starter:`<!-- Add a <style> block with a .stack { display: flex; flex-direction: column; } rule, then a <div class="stack"> -->
`,
      tests:[{type:'computed-style', selector:'.stack', prop:'flexDirection', equals:'column', label:'.stack arranges items in a column'}]
    },
    {
      title:'Add space between cards with gap',
      desc:`Give your .cards container a gap of at least 8px, e.g. gap: 12px;. Unlike margin, gap only adds space
        <strong>between</strong> flex items — never on the outside edges of the whole row.`,
      starter:`<style>
  .cards { display: flex; }
</style>
<div class="cards">
  <div>HTML</div>
  <div>CSS</div>
</div>
<!-- Add a gap rule to .cards above -->
`,
      tests:[{type:'computed-style', selector:'.cards', prop:'columnGap', atLeastPx:8, label:'.cards has at least 8px of gap'}]
    },
    {
      title:'Center everything both ways',
      desc:`Give your .cards container BOTH justify-content: center; AND align-items: center; together — a very
        common combination for centering a whole row of items in the middle of its container.`,
      starter:`<style>
  .cards { display: flex; }
</style>
<div class="cards">
  <div>HTML</div>
  <div>CSS</div>
</div>
<!-- Add both justify-content: center; and align-items: center; to .cards above -->
`,
      tests:[
        {type:'computed-style', selector:'.cards', prop:'justifyContent', equals:'center', label:'.cards centers items horizontally'},
        {type:'computed-style', selector:'.cards', prop:'alignItems', equals:'center', label:'.cards centers items vertically'}
      ]
    }
  ],
  quiz:[
    {
      q:'Which property turns a container into a flexbox layout?',
      options:['flex-direction','display: flex','justify-content','align-items'],
      correct:1,
      explain:'display: flex switches on flexbox for that element\'s direct children — every other flex property depends on it.'
    },
    {
      q:'Which property controls spacing ALONG the row in a flex container?',
      options:['align-items','flex-direction','justify-content','padding'],
      correct:2,
      explain:'justify-content controls spacing along the main axis (a row, by default).'
    },
    {
      q:'Which property vertically centers items in a flex row?',
      options:['align-items: center','justify-content: center','flex-direction: center','margin: center'],
      correct:0,
      explain:'align-items controls alignment across the row (vertically, when the direction is a row).'
    },
    {
      q:'Which property switches a flex container from a row to a column?',
      options:['justify-content','flex-direction','align-items','display'],
      correct:1,
      explain:'flex-direction: column flips the main axis from horizontal to vertical.'
    }
  ],
  sandboxStarter3:`<style>
  .cards { display: flex; gap: 12px; flex-wrap: wrap; }
  .card { padding: 12px; border: 2px solid #4338ca; }
</style>
<div class="cards">
  <div class="card">HTML</div>
  <div class="card">CSS</div>
  <div class="card">JavaScript</div>
  <div class="card">Python</div>
</div>
`,
  stretchChallenge:{
    title:'Let cards wrap onto multiple lines',
    desc:`Give your .cards container flex-wrap: wrap;, so cards that don't fit on one line wrap onto the next
      instead of shrinking or overflowing.`,
    starter:`<style>
  .cards { display: flex; gap: 8px; }
</style>
<div class="cards">
  <div>HTML</div>
  <div>CSS</div>
  <div>JavaScript</div>
</div>
<!-- Add flex-wrap: wrap; to .cards above -->
`,
    tests:[
      {type:'computed-style', selector:'.cards', prop:'flexWrap', equals:'wrap', label:'.cards wraps onto multiple lines'}
    ]
  }
},
{
  key:'week6', num:6, title:'Forms and Inputs',
  scenarioTag:'Real world: a sign-up form for a school club',
  scenario:`Your school club wants a simple sign-up form on its page — name, email, favorite meeting day, and a
    button to send it. Forms are how a web page collects information FROM a visitor, instead of just showing
    information TO them.`,
  objectives:[
    'Build a <form> to collect user input',
    'Add text/email inputs paired with a <label>',
    'Add a <select> dropdown with multiple options',
    'Add a submit <button>'
  ],
  conceptHtml:`
    <p>A <code>&lt;form&gt;</code> wraps all the inputs a visitor fills in. The most common input is
    <code>&lt;input&gt;</code>, and its <code>type</code> attribute decides what kind of box it is —
    <code>type="text"</code> for plain text, <code>type="email"</code> for an email address (some browsers even
    check it looks like a real email before letting the form submit). Pair every input with a
    <code>&lt;label&gt;</code> so visitors (and screen readers) know what it's asking for:</p>
    <pre class="code-block">&lt;form&gt;
  &lt;label for="name"&gt;Your name:&lt;/label&gt;
  &lt;input type="text" id="name"&gt;

  &lt;label for="email"&gt;Your email:&lt;/label&gt;
  &lt;input type="email" id="email"&gt;
&lt;/form&gt;</pre>
    <p>A <code>&lt;select&gt;</code> gives visitors a dropdown of choices, each written as an
    <code>&lt;option&gt;</code>. A <code>&lt;button type="submit"&gt;</code> is what actually sends the form:</p>
    <pre class="code-block">&lt;form&gt;
  &lt;label for="day"&gt;Best meeting day:&lt;/label&gt;
  &lt;select id="day"&gt;
    &lt;option&gt;Monday&lt;/option&gt;
    &lt;option&gt;Wednesday&lt;/option&gt;
    &lt;option&gt;Friday&lt;/option&gt;
  &lt;/select&gt;
  &lt;button type="submit"&gt;Sign me up!&lt;/button&gt;
&lt;/form&gt;</pre>
    <h3>Let's break down the form code, line by line</h3>
    <ul>
      <li><code>&lt;label for="name"&gt;Your name:&lt;/label&gt;</code> — the <code>for</code> attribute names which
        input this label belongs to, by matching that input's <code>id</code>. This link means clicking the label
        text itself focuses the matching input, which matters a lot for accessibility.</li>
      <li><code>&lt;input type="text" id="name"&gt;</code> — like <code>&lt;img&gt;</code>, an input has no closing
        tag and no inner text — everything about it (what kind of box, which label it's paired with) lives in its
        attributes.</li>
      <li><code>&lt;select&gt;...&lt;/select&gt;</code> with <code>&lt;option&gt;</code> tags inside — the same
        "container holds items" shape you already know from <code>&lt;ul&gt;</code>/<code>&lt;li&gt;</code>, just
        producing a dropdown instead of a bulleted list.</li>
      <li><code>&lt;button type="submit"&gt;</code> — the <code>type="submit"</code> attribute is what tells the
        browser "this button sends the form," as opposed to a plain button that just runs some code (which you'll
        see in Week 9).</li>
    </ul>`,
  sandboxStarter:`<form>
  <label for="name">Your name:</label>
  <input type="text" id="name">
</form>
`,
  sandboxStarter2:`<form>
  <label for="email">Your email:</label>
  <input type="email" id="email">

  <label for="day">Best meeting day:</label>
  <select id="day">
    <option>Monday</option>
    <option>Wednesday</option>
    <option>Friday</option>
  </select>
  <button type="submit">Sign me up!</button>
</form>
`,
  exercises:[
    {
      title:'Build a sign-up form',
      desc:`Add a &lt;form&gt; containing a text input, e.g. &lt;input type="text" id="name"&gt;. This is the
        container every other form element you add this week will live inside.`,
      starter:`<!-- Add a <form> with a text <input> inside -->
`,
      tests:[{type:'dom-count', selector:'form input[type="text"]', min:1, label:'Form has a text input'}]
    },
    {
      title:'Collect an email address',
      desc:`Inside your form, add a &lt;label&gt; and an &lt;input type="email"&gt; so visitors can leave their
        email address. Pair them the same way as the concept box: label for="..." matching the input's id="...".`,
      starter:`<form>
  <label for="name">Your name:</label>
  <input type="text" id="name">
  <!-- Add a label + email input below -->
</form>
`,
      tests:[
        {type:'dom-count', selector:'input[type="email"]', min:1, label:'Form has an email input'},
        {type:'dom-count', selector:'label', min:1, label:'Form has at least one label'}
      ]
    },
    {
      title:'Add a dropdown',
      desc:`Add a &lt;select&gt; with at least 3 &lt;option&gt; choices — for example, meeting days. Same
        container-holds-items pattern as a list, just written as select/option.`,
      starter:`<!-- Add a <select> with at least 3 <option> items -->
`,
      tests:[{type:'dom-count', selector:'select option', min:3, label:'Dropdown has at least 3 options'}]
    },
    {
      title:'Add a submit button',
      desc:`Add a &lt;button type="submit"&gt; so visitors can actually send the form. The type="submit" attribute
        is what makes it a real submit button rather than a plain clickable button.`,
      starter:`<!-- Add a <button type="submit"> below -->
`,
      tests:[{type:'dom-count', selector:'button[type="submit"]', min:1, label:'Form has a submit button'}]
    },
    {
      title:'Add a checkbox',
      desc:`Add an &lt;input type="checkbox"&gt; (with a paired &lt;label&gt;) so visitors can tick a box, e.g. to
        subscribe to a newsletter. Same input pattern as text/email, just a different type value.`,
      starter:`<!-- Add a <label> and an <input type="checkbox"> below -->
`,
      tests:[{type:'dom-count', selector:'input[type="checkbox"]', min:1, label:'Form has a checkbox input'}]
    },
    {
      title:'Add a comments textarea',
      desc:`Add a &lt;textarea&gt; so visitors can leave a longer, multi-line comment — unlike &lt;input&gt;,
        &lt;textarea&gt; has an opening AND closing tag, since it can hold typed content between them.`,
      starter:`<!-- Add a <textarea> below -->
`,
      tests:[{type:'dom-count', selector:'textarea', min:1, label:'Form has a textarea'}]
    }
  ],
  quiz:[
    {
      q:'Which element wraps all the inputs a visitor fills in?',
      options:['<div>','<form>','<label>','<section>'],
      correct:1,
      explain:'<form> is the container for every input, label, select, and submit button in it.'
    },
    {
      q:'What does the for attribute on a <label> do?',
      options:['Sets a color','Links the label to a matching input id','Makes the label bold','Submits the form'],
      correct:1,
      explain:'A label\'s for attribute should match the id of the input it describes.'
    },
    {
      q:'Which tag creates a dropdown of choices?',
      options:['<dropdown>','<ul>','<select>','<input type="dropdown">'],
      correct:2,
      explain:'<select> holds a list of <option> tags, shown to the visitor as a dropdown.'
    },
    {
      q:'What does <button type="submit"> do?',
      options:['Deletes the form','Sends the form','Adds a new input','Changes the page color'],
      correct:1,
      explain:'type="submit" is what makes a button actually submit the form it sits inside.'
    }
  ],
  sandboxStarter3:`<form>
  <label for="newsletter">Subscribe to newsletter:</label>
  <input type="checkbox" id="newsletter">

  <label for="message">Message:</label>
  <textarea id="message" rows="3"></textarea>
</form>
`,
  stretchChallenge:{
    title:'Make an input required',
    desc:`Add the <code>required</code> attribute to one of your inputs, e.g.
      &lt;input type="text" required&gt;. This stops the browser from letting the form submit until that field is
      filled in.`,
    starter:`<form>
  <label for="name">Your name:</label>
  <!-- Add a required text input below -->
</form>
`,
    tests:[
      {type:'dom-count', selector:'input[required]', min:1, label:'At least one input is marked required'}
    ]
  }
},
{
  key:'week7', num:7, title:'More CSS Layout: Grid Basics',
  scenarioTag:'Real world: a 6-photo gallery grid',
  scenario:`Flexbox is great for a single row or column, but a photo gallery needs a proper grid — several rows AND
    columns lining up together. CSS Grid is built exactly for that.`,
  objectives:[
    'Turn a container into a grid with display: grid',
    'Define columns with grid-template-columns',
    'Add spacing between grid items with gap',
    'Build a multi-item gallery-style grid'
  ],
  conceptHtml:`
    <p><code>display: grid;</code> turns a container into a grid — but unlike flexbox (one row or column),
    <code>grid-template-columns</code> lets you define several columns at once, and items automatically wrap onto a
    new row once a row fills up:</p>
    <pre class="code-block">&lt;style&gt;
  .gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }
&lt;/style&gt;
&lt;div class="gallery"&gt;
  &lt;div class="photo"&gt;1&lt;/div&gt;
  &lt;div class="photo"&gt;2&lt;/div&gt;
  &lt;div class="photo"&gt;3&lt;/div&gt;
  &lt;div class="photo"&gt;4&lt;/div&gt;
  &lt;div class="photo"&gt;5&lt;/div&gt;
  &lt;div class="photo"&gt;6&lt;/div&gt;
&lt;/div&gt;</pre>
    <p><code>grid-template-columns: 1fr 1fr 1fr</code> means "three columns, each taking an equal share (1 fraction)
    of the available width" — you can also write this shorthand as <code>repeat(3, 1fr)</code>, which means the
    exact same thing. <code>gap</code> adds even spacing between every row and column, without needing margin on
    each individual item.</p>
    <h3>Let's break down the grid rule, line by line</h3>
    <ul>
      <li><code>display: grid;</code> — switches this container into grid mode, the same way <code>display: flex;</code>
        switched on flexbox last week. Nothing below does anything without this line.</li>
      <li><code>grid-template-columns: 1fr 1fr 1fr;</code> — three values means three columns. Each <code>1fr</code>
        means "one equal share" — three equal <code>1fr</code> values means three equal-width columns. With 6
        photos and 3 columns, the browser automatically wraps them into 2 rows of 3.</li>
      <li><code>gap: 12px;</code> — adds 12px of space between every grid cell, both horizontally and vertically,
        in one line — no margin juggling on each individual photo needed.</li>
    </ul>`,
  sandboxStarter:`<style>
  .gallery { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
  .photo { background: #ddd6fe; padding: 24px; text-align: center; }
</style>
<div class="gallery">
  <div class="photo">1</div>
  <div class="photo">2</div>
  <div class="photo">3</div>
  <div class="photo">4</div>
  <div class="photo">5</div>
  <div class="photo">6</div>
</div>
`,
  sandboxStarter2:`<style>
  .gallery2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .photo { background: #fef3c7; padding: 24px; text-align: center; }
</style>
<div class="gallery2">
  <div class="photo">A</div>
  <div class="photo">B</div>
  <div class="photo">C</div>
  <div class="photo">D</div>
</div>
`,
  exercises:[
    {
      title:'Turn your gallery into a grid',
      desc:`Give a &lt;div class="gallery"&gt; display: grid;. This is the one property that switches grid layout
        on, same idea as display: flex; from last week.`,
      starter:`<!-- Add a <style> block with a .gallery { display: grid; } rule, then a <div class="gallery"> -->
`,
      tests:[{type:'computed-style', selector:'.gallery', prop:'display', equals:'grid', label:'.gallery is a grid container'}]
    },
    {
      title:'Define your columns',
      desc:`Give your .gallery grid-template-columns: 1fr 1fr 1fr; (or repeat(3, 1fr), which means the same thing)
        so it lays out 3 equal columns.`,
      starter:`<style>
  .gallery { display: grid; }
</style>
<div class="gallery">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
<!-- Add a grid-template-columns rule to .gallery above -->
`,
      tests:[{type:'computed-style', selector:'.gallery', prop:'gridTemplateColumns', notEqual:'none', label:'.gallery has columns defined'}]
    },
    {
      title:'Add spacing between items',
      desc:`Give your .gallery gap: 12px; (or any value) so its items aren't crammed edge-to-edge.`,
      starter:`<style>
  .gallery { display: grid; grid-template-columns: 1fr 1fr 1fr; }
</style>
<div class="gallery">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
<!-- Add a gap rule to .gallery above -->
`,
      tests:[{type:'computed-style', selector:'.gallery', prop:'gap', notEqual:'normal', label:'.gallery has a gap set'}]
    },
    {
      title:'Build a 6-item gallery',
      desc:`Put it all together: a .gallery with display: grid, 3 columns, a gap, and at least 6 photo items inside
        (they don't need real images yet — plain &lt;div&gt;s are fine).`,
      starter:`<!-- Build a full .gallery grid with at least 6 items inside -->
`,
      tests:[{type:'dom-count', selector:'.gallery > *', min:6, label:'.gallery has at least 6 items'}]
    },
    {
      title:'Add spacing between rows specifically',
      desc:`Give your .gallery row-gap: 16px; (the individual property, rather than the gap shorthand you already
        used) so there's at least 10px of space between rows specifically.`,
      starter:`<style>
  .gallery { display: grid; grid-template-columns: 1fr 1fr 1fr; }
</style>
<div class="gallery">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
<!-- Add a row-gap rule to .gallery above -->
`,
      tests:[{type:'computed-style', selector:'.gallery', prop:'rowGap', atLeastPx:10, label:'.gallery has at least 10px of row-gap'}]
    },
    {
      title:'Make an item span two columns',
      desc:`Give one item inside your grid class="featured" and a rule .featured { grid-column: span 2; } so that
        one item stretches across two columns instead of just one.`,
      starter:`<style>
  .gallery { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
</style>
<div class="gallery">
  <div class="featured">Featured</div>
  <div>2</div>
  <div>3</div>
</div>
<!-- Add a .featured { grid-column: span 2; } rule above -->
`,
      tests:[{type:'computed-style', selector:'.featured', prop:'gridColumn', notEqual:'auto', label:'.featured spans multiple columns'}]
    }
  ],
  quiz:[
    {
      q:'Which property turns a container into a CSS grid?',
      options:['display: grid','grid-template-columns','gap','display: flex'],
      correct:0,
      explain:'display: grid switches on grid layout, the same way display: flex switches on flexbox.'
    },
    {
      q:'What does grid-template-columns: 1fr 1fr 1fr define?',
      options:['3 equal-width columns','3 rows','A gap of 1 pixel','A single column'],
      correct:0,
      explain:'Each 1fr is one equal share of the available width — three of them means three equal columns.'
    },
    {
      q:'What does the gap property do in a grid?',
      options:['Changes text color','Adds spacing between rows and columns','Deletes empty cells','Adds a border'],
      correct:1,
      explain:'gap adds consistent spacing between every grid cell, both horizontally and vertically.'
    },
    {
      q:'With 3 columns and 6 items, how many rows does the grid create automatically?',
      options:['1','2','6','3'],
      correct:1,
      explain:'6 items across 3 columns wrap automatically into 2 rows of 3.'
    }
  ],
  sandboxStarter3:`<style>
  .gallery3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .featured { grid-column: span 2; background: #fca5a5; }
  .photo { background: #ddd6fe; padding: 20px; text-align: center; }
</style>
<div class="gallery3">
  <div class="photo featured">Featured</div>
  <div class="photo">2</div>
  <div class="photo">3</div>
  <div class="photo">4</div>
</div>
`,
  stretchChallenge:{
    title:'Build a gallery with one featured item',
    desc:`Combine everything: a .gallery with display: grid, 3 columns, a gap, at least 6 items, AND one item with
      class="featured" that spans 2 columns (grid-column: span 2;).`,
    starter:`<!-- Build a full .gallery grid: 3 columns, a gap, at least 6 items, and one .featured item spanning 2 columns -->
`,
    tests:[
      {type:'dom-count', selector:'.gallery > *', min:6, label:'.gallery has at least 6 items'},
      {type:'computed-style', selector:'.featured', prop:'gridColumn', notEqual:'auto', label:'.featured spans multiple columns'}
    ]
  }
},
{
  key:'week8', num:8, title:'Responsive Design: Media Queries',
  scenarioTag:'Real world: making the noticeboard look right on any screen',
  scenario:`Some visitors will view your page on a huge desktop monitor, others on a small phone screen. A
    <strong>media query</strong> lets your CSS adapt automatically depending on how wide the visitor's screen is —
    so your page can look right everywhere, without building two separate versions.`,
  objectives:[
    'Understand why responsive design matters',
    'Write an @media rule with a max-width condition',
    'Change a CSS property\'s value inside a media query',
    'Confirm your media query actually takes effect'
  ],
  conceptHtml:`
    <p>An <code>@media</code> rule wraps normal CSS rules in a condition — the CSS inside only applies when that
    condition is true. The most common condition is a maximum screen width, which lets you write different styles
    for narrower screens:</p>
    <pre class="code-block">&lt;style&gt;
  .box { background-color: white; }
  @media (max-width: 900px) {
    .box { background-color: lightblue; }
  }
&lt;/style&gt;
&lt;div class="box"&gt;Resize the screen to see me change!&lt;/div&gt;</pre>
    <p>Real sites often use a narrower breakpoint like 600px for "phone-sized" screens — this course's checker
    previews your page at a fixed, slightly wider size, so the exercises below use <code>900px</code> as the
    breakpoint specifically so you can see and test the effect reliably. The idea is identical either way: normal
    rules apply by default, and the rule(s) inside <code>@media</code> only kick in once the screen is at or below
    that width.</p>
    <h3>Let's break down the media query, line by line</h3>
    <ul>
      <li><code>.box { background-color: white; }</code> — the normal, default rule. This applies everywhere, on
        every screen size, unless something more specific overrides it.</li>
      <li><code>@media (max-width: 900px) { ... }</code> — a condition: "only apply what's inside these braces if
        the screen is 900px wide or narrower." Unlike a normal selector, this wraps a whole GROUP of rules, not just
        one property.</li>
      <li><code>.box { background-color: lightblue; }</code> (the one INSIDE the media query) — a completely normal
        rule in every other way, it just only takes effect when the screen matches the condition above it. On a wide
        screen, the outer white rule wins; on a narrow screen, this one overrides it.</li>
    </ul>`,
  sandboxStarter:`<style>
  .box { background-color: white; padding: 16px; }
  @media (max-width: 900px) {
    .box { background-color: lightblue; }
  }
</style>
<div class="box">This box changes color once the screen is narrow enough.</div>
`,
  sandboxStarter2:`<style>
  .row { display: flex; }
  @media (max-width: 900px) {
    .row { flex-direction: column; }
  }
</style>
<div class="row">
  <div>Card 1</div>
  <div>Card 2</div>
</div>
`,
  exercises:[
    {
      title:'Write your first media query',
      desc:`Give a &lt;div class="box"&gt; a default background-color: white;, then add @media (max-width: 900px)
        { .box { background-color: anything else; } } to change its color on narrower screens. Both parts are
        checked: that you actually wrote an @media rule, and that the color really changes.`,
      starter:`<style>
  .box { background-color: white; }
  /* Add your @media (max-width: 900px) { ... } rule below */
</style>
<div class="box">Resize me!</div>
`,
      tests:[
        {type:'dom', selector:'style', contains:'@media', label:'Page includes a real @media rule'},
        {type:'computed-style', selector:'.box', prop:'backgroundColor', notEqual:'rgb(255, 255, 255)', label:'.box changes color inside the media query'}
      ]
    },
    {
      title:'Change the layout responsively',
      desc:`Give a &lt;div class="row"&gt; display: flex; by default, then inside @media (max-width: 900px) change
        it to flex-direction: column; so cards stack vertically on narrower screens instead of sitting side-by-side.`,
      starter:`<style>
  .row { display: flex; }
  /* Add your @media (max-width: 900px) { .row { flex-direction: column; } } rule below */
</style>
<div class="row">
  <div>Card 1</div>
  <div>Card 2</div>
</div>
`,
      tests:[
        {type:'dom', selector:'style', contains:'@media', label:'Page includes a real @media rule'},
        {type:'computed-style', selector:'.row', prop:'flexDirection', equals:'column', label:'.row stacks in a column inside the media query'}
      ]
    },
    {
      title:'Add a second responsive change',
      desc:`Inside the SAME @media (max-width: 900px) block, add a second changed property — for example, make your
        &lt;h1&gt; a different color on narrower screens too. Media query blocks can hold as many rules as you like,
        not just one.`,
      starter:`<style>
  h1 { color: black; }
  @media (max-width: 900px) {
    /* Add an h1 { color: ...; } rule in here too */
  }
</style>
<h1>My Page</h1>
`,
      tests:[
        {type:'dom', selector:'style', contains:'@media', label:'Page includes a real @media rule'},
        {type:'computed-style', selector:'h1', prop:'color', notEqual:'rgb(0, 0, 0)', label:'h1 changes color inside the media query'}
      ]
    },
    {
      title:'Confirm the responsive box works',
      desc:`Bring it together: a &lt;div class="box"&gt; with a default padding, and a media query that changes its
        padding to something bigger on narrower screens (e.g. padding: 24px; inside @media (max-width: 900px)).`,
      starter:`<style>
  .box { padding: 8px; }
  /* Add a media query that gives .box more padding on narrower screens */
</style>
<div class="box">Resize me!</div>
`,
      tests:[
        {type:'dom', selector:'style', contains:'@media', label:'Page includes a real @media rule'},
        {type:'computed-style', selector:'.box', prop:'paddingTop', atLeastPx:16, label:'.box has extra padding inside the media query'}
      ]
    },
    {
      title:'Hide an element on narrow screens',
      desc:`Give a &lt;div class="sidebar"&gt; display: block; by default, then inside @media (max-width: 900px)
        change it to display: none; so it disappears entirely on narrower screens.`,
      starter:`<style>
  .sidebar { display: block; }
  /* Add @media (max-width: 900px) { .sidebar { display: none; } } below */
</style>
<div class="sidebar">Extra info</div>
`,
      tests:[
        {type:'dom', selector:'style', contains:'@media', label:'Page includes a real @media rule'},
        {type:'computed-style', selector:'.sidebar', prop:'display', equals:'none', label:'.sidebar is hidden inside the media query'}
      ]
    },
    {
      title:'Shrink the heading font on narrow screens',
      desc:`Give an &lt;h1&gt; font-size: 32px; by default, then inside @media (max-width: 900px) change it to a
        smaller size like font-size: 20px;.`,
      starter:`<style>
  h1 { font-size: 32px; }
  /* Add @media (max-width: 900px) { h1 { font-size: 20px; } } below */
</style>
<h1>My Page</h1>
`,
      tests:[
        {type:'dom', selector:'style', contains:'@media', label:'Page includes a real @media rule'},
        {type:'computed-style', selector:'h1', prop:'fontSize', notEqual:'32px', label:'h1 shrinks inside the media query'}
      ]
    }
  ],
  quiz:[
    {
      q:'What does an @media rule let you do?',
      options:['Add an image','Apply CSS only when a screen-size condition is met','Delete a stylesheet','Create a new HTML tag'],
      correct:1,
      explain:'@media wraps a group of CSS rules in a condition, usually a maximum or minimum screen width.'
    },
    {
      q:'In @media (max-width: 900px) { ... }, when do the rules inside apply?',
      options:['Always','Only when the screen is 900px wide or narrower','Only when printing','Only on desktop computers'],
      correct:1,
      explain:'max-width: 900px means "900px or narrower" — the rules inside only activate at or below that width.'
    },
    {
      q:'If a screen is wider than the @media condition, which rule wins?',
      options:['The one inside @media, always','Neither rule applies','The normal rule outside the media query','The page shows blank'],
      correct:2,
      explain:'Media query rules only take effect when their condition is true — otherwise the normal rule outside applies.'
    },
    {
      q:'Can one @media block contain more than one CSS rule?',
      options:['No, only one rule per block','Yes, as many rules as you like','Only if they use the same selector','Only color rules'],
      correct:1,
      explain:'A media query block can group as many separate CSS rules as needed, all sharing the same condition.'
    }
  ],
  sandboxStarter3:`<style>
  .sidebar { display: block; background: #ddd6fe; padding: 12px; }
  @media (max-width: 900px) {
    .sidebar { display: none; }
  }
</style>
<div class="sidebar">Extra info (hidden on narrow screens)</div>
<p>Main content always shows.</p>
`,
  stretchChallenge:{
    title:'Build a fully responsive header',
    desc:`Give a &lt;div class="header"&gt; a default background-color: white; and display: flex;, then inside
      @media (max-width: 900px) change BOTH background-color (to anything else) AND flex-direction: column;
      together in one block.`,
    starter:`<style>
  .header { background-color: white; display: flex; padding: 24px; }
  /* Add @media (max-width: 900px) { .header { ... } } changing background-color AND flex-direction below */
</style>
<div class="header">
  <div>Logo</div>
  <div>Nav links</div>
</div>
`,
    tests:[
      {type:'dom', selector:'style', contains:'@media', label:'Page includes a real @media rule'},
      {type:'computed-style', selector:'.header', prop:'backgroundColor', notEqual:'rgb(255, 255, 255)', label:'.header changes background color inside the media query'},
      {type:'computed-style', selector:'.header', prop:'flexDirection', equals:'column', label:'.header stacks in a column inside the media query'}
    ]
  }
},
{
  key:'week9', num:9, title:'A Touch of JavaScript',
  scenarioTag:'Real world: a button that reveals a hidden fun fact',
  scenario:`Everything so far has been static — the page looks the same no matter what a visitor does. JavaScript
    lets a page actually RESPOND to a visitor: clicking a button can reveal hidden text, change a color, or update
    what's on screen, all without reloading the page.`,
  objectives:[
    'Add a <script> tag to a page',
    'Select an element with document.querySelector',
    "Respond to a click with addEventListener",
    "Change an element's text or style from JavaScript"
  ],
  conceptHtml:`
    <p>A <code>&lt;script&gt;</code> tag holds JavaScript — code that can actually change the page after it's
    loaded, not just describe how it looks. <code>document.querySelector('selector')</code> finds one element (the
    exact same selector syntax you already know from CSS), and <code>.addEventListener('click', function(){ ... })</code>
    runs some code whenever that element is clicked:</p>
    <pre class="code-block">&lt;button id="reveal"&gt;Show fun fact&lt;/button&gt;
&lt;p id="fact" style="display:none;"&gt;Octopuses have three hearts!&lt;/p&gt;

&lt;script&gt;
  document.querySelector('#reveal').addEventListener('click', function(){
    document.querySelector('#fact').style.display = 'block';
  });
&lt;/script&gt;</pre>
    <p>Inside the click handler, you can change almost anything about an element: its <code>textContent</code> (the
    words it shows), or any CSS property via <code>.style.propertyName</code> — this is the same properties you've
    already used in CSS, just written in JavaScript with camelCase instead of dashes (<code>background-color</code>
    becomes <code>backgroundColor</code>).</p>
    <h3>Let's break down the click handler, line by line</h3>
    <ul>
      <li><code>document.querySelector('#reveal')</code> — finds the button by its id, the same <code>#name</code>
        selector syntax you used in Week 3's CSS, just called as a JavaScript function instead of written in a
        &lt;style&gt; block.</li>
      <li><code>.addEventListener('click', function(){ ... })</code> — attaches a listener to that button. The
        function you pass in doesn't run immediately when the page loads — it's saved up and only runs later, the
        moment a visitor actually clicks.</li>
      <li><code>document.querySelector('#fact').style.display = 'block';</code> — inside the click handler, this
        finds the (initially hidden) paragraph and changes its <code>display</code> style from <code>none</code> to
        <code>block</code>, making it appear. Before the click, <code>style="display:none;"</code> in the HTML kept
        it hidden.</li>
    </ul>`,
  sandboxStarter:`<button id="reveal">Show fun fact</button>
<p id="fact" style="display:none;">Octopuses have three hearts!</p>

<script>
  document.querySelector('#reveal').addEventListener('click', function(){
    document.querySelector('#fact').style.display = 'block';
  });
</script>
`,
  sandboxStarter2:`<button id="toggle">Change color</button>
<div id="box" style="padding:20px;background-color:white;">A box</div>

<script>
  document.querySelector('#toggle').addEventListener('click', function(){
    document.querySelector('#box').style.backgroundColor = 'lightblue';
  });
</script>
`,
  exercises:[
    {
      title:'Reveal a hidden fact',
      desc:`Add a &lt;button id="reveal"&gt;, a hidden &lt;p id="fact" style="display:none;"&gt; with any fun fact
        inside, and a &lt;script&gt; that shows the paragraph (style.display = 'block') when the button is clicked.`,
      starter:`<button id="reveal">Show fun fact</button>
<p id="fact" style="display:none;">Add your own fun fact here!</p>

<script>
  // Add a click handler on #reveal that shows #fact
</script>
`,
      tests:[{type:'computed-style', selector:'#fact', prop:'display', notEqual:'none', label:'#fact becomes visible after the button is clicked'}]
    },
    {
      title:'Change a color on click',
      desc:`Add a &lt;button id="toggle"&gt; and a &lt;div id="box"&gt;, then a &lt;script&gt; that changes #box's
        background color when #toggle is clicked, using document.querySelector('#box').style.backgroundColor = '...';`,
      starter:`<button id="toggle">Change color</button>
<div id="box" style="padding:20px;background-color:white;">A box</div>

<script>
  // Add a click handler on #toggle that changes #box's background color
</script>
`,
      tests:[{type:'computed-style', selector:'#box', prop:'backgroundColor', notEqual:'rgb(255, 255, 255)', label:'#box changes color after the button is clicked'}]
    },
    {
      title:'Update some text on click',
      desc:`Add a &lt;button id="greet"&gt; and a &lt;p id="msg"&gt;Hello&lt;/p&gt;, then a &lt;script&gt; that
        changes #msg's textContent to say "You clicked me!" when #greet is clicked, using
        document.querySelector('#msg').textContent = 'You clicked me!';`,
      starter:`<button id="greet">Say hi</button>
<p id="msg">Hello</p>

<script>
  // Add a click handler on #greet that changes #msg's textContent to "You clicked me!"
</script>
`,
      tests:[{type:'dom', selector:'#msg', contains:'You clicked me', label:'#msg text updates when the button is clicked'}]
    },
    {
      title:'Use querySelector and addEventListener together',
      desc:`Write a &lt;script&gt; that contains both document.querySelector and addEventListener — the two building
        blocks every click-driven page needs. Attach a click handler to any button that changes anything about the
        page when clicked.`,
      starter:`<button id="action">Click me</button>

<script>
  // Use document.querySelector and addEventListener together here
</script>
`,
      tests:[
        {type:'dom', selector:'script', contains:'querySelector', label:'Script uses document.querySelector'},
        {type:'dom', selector:'script', contains:'addEventListener', label:'Script uses addEventListener'}
      ]
    },
    {
      title:'Build a click counter',
      desc:`Add a &lt;button id="counter"&gt;Clicks: 0&lt;/button&gt; and a &lt;script&gt; that keeps a running
        count in a variable, increases it by 1 on every click, and updates the button's textContent to
        "Clicks: " plus the new count.`,
      starter:`<button id="counter">Clicks: 0</button>

<script>
  // Keep a count variable, increase it by 1 on every click,
  // and update #counter's textContent to "Clicks: " + count
</script>
`,
      tests:[{type:'dom', selector:'#counter', contains:'Clicks: 1', label:'#counter shows "Clicks: 1" after one click'}]
    },
    {
      title:'Toggle a highlight class',
      desc:`Add a &lt;div id="box" class=""&gt;A box&lt;/div&gt;, a &lt;button id="toggle"&gt;, a &lt;style&gt;
        rule .active { background-color: yellow; }, and a &lt;script&gt; that toggles the "active" class on #box
        when #toggle is clicked, using classList.toggle('active').`,
      starter:`<style>
  .active { background-color: yellow; }
</style>
<div id="box" class="">A box</div>
<button id="toggle">Toggle highlight</button>

<script>
  // Add a click handler on #toggle that toggles the "active" class on #box
</script>
`,
      tests:[{type:'dom-attr', selector:'#box', attr:'class', notEmpty:true, label:'#box gains the "active" class after the button is clicked'}]
    }
  ],
  quiz:[
    {
      q:'Which tag holds JavaScript code on a page?',
      options:['<js>','<script>','<code>','<style>'],
      correct:1,
      explain:'<script> tags hold JavaScript, the same way <style> tags hold CSS.'
    },
    {
      q:'What does document.querySelector(\'#reveal\') do?',
      options:['Deletes the element with id="reveal"','Finds the element with id="reveal"','Creates a new element','Changes the page color'],
      correct:1,
      explain:'querySelector finds and returns the first element matching that CSS-style selector.'
    },
    {
      q:'What does .addEventListener(\'click\', function(){...}) do?',
      options:['Runs the function immediately','Runs the function once every second','Runs the function whenever that element is clicked','Deletes the element on click'],
      correct:2,
      explain:'The function is saved and only runs later, each time the element is actually clicked.'
    },
    {
      q:'How do you change an element\'s CSS background-color from JavaScript?',
      options:['element.textContent = ...','element.style.backgroundColor = ...','element.href = ...','element.querySelector = ...'],
      correct:1,
      explain:'CSS properties are set via .style.propertyName in JavaScript, using camelCase instead of dashes.'
    }
  ],
  sandboxStarter3:`<button id="counter">Click count: 0</button>
<script>
  let count = 0;
  document.querySelector('#counter').addEventListener('click', function(){
    count += 1;
    document.querySelector('#counter').textContent = 'Click count: ' + count;
  });
</script>
`,
  stretchChallenge:{
    title:'Build a toggle-text like button',
    desc:`Add a &lt;button id="like"&gt;🤍 Like&lt;/button&gt; and a &lt;script&gt; that checks the button's
      current textContent when clicked: if it still says "Like", change it to "❤️ Liked!"; otherwise change it
      back to "🤍 Like". This reads the CURRENT state before deciding what to change it to, instead of always
      setting the same fixed value.`,
    starter:`<button id="like">🤍 Like</button>

<script>
  document.querySelector('#like').addEventListener('click', function(){
    // TODO: if the button's textContent includes "Liked", set it back to "🤍 Like";
    // otherwise set it to "❤️ Liked!"
  });
</script>
`,
    tests:[
      {type:'dom', selector:'#like', contains:'Liked', label:'#like shows "Liked" after being clicked once'}
    ]
  }
}
];

const WD_MP1 = {
  key:'mp1',
  title:'Mini Project 1 — Design the Class Noticeboard',
  intro:`Your class wants a noticeboard page for announcements. You'll build it in three stages, combining
    everything from Weeks 1-4: structure and a list (Weeks 1-2), color and fonts with real CSS selectors (Week 3),
    and a proper bordered box layout (Week 4) — the same three-layer process every real web page goes through.`,
  newTrick:`Putting structure, styling, and layout together in one single page — up to now each week practiced one
    skill at a time, but a real page always needs all three at once.`,
  stages:[
    {
      key:'a', title:'Stage A — Build the structure',
      desc:`Add an &lt;h1&gt; heading (e.g. "Class Noticeboard"), a &lt;ul&gt; with at least 3 announcement
        &lt;li&gt; items, and a link (&lt;a href="..."&gt;) to your school's website. This is exactly the
        heading + list + link combination from Weeks 1 and 2.`,
      starter:`<!-- Build the noticeboard: an <h1>, a <ul> of at least 3 announcements, and a link to the school site -->
`,
      tests:[
        {type:'dom-count', selector:'h1', min:1, label:'Page has an h1 heading'},
        {type:'dom-count', selector:'ul li', min:3, label:'Page has a list with at least 3 announcements'},
        {type:'dom-attr', selector:'a', attr:'href', notEmpty:true, label:'Page has a link with a real href'}
      ]
    },
    {
      key:'b', title:'Stage B — Style it with color',
      desc:`Add a &lt;style&gt; block that gives your &lt;h1&gt; a color other than black, and gives your
        &lt;ul&gt; a background color. Same selectors-and-color pattern from Week 3, just applied to the
        noticeboard you just built.`,
      starter:`<h1>Class Noticeboard</h1>
<ul>
  <li>Sports day is next Friday!</li>
  <li>Bring your library books back</li>
  <li>Science fair signups open now</li>
</ul>
<a href="https://example-school.com">Visit our school website</a>
<!-- Add a <style> block above to color your heading and give the list a background -->
`,
      tests:[
        {type:'computed-style', selector:'h1', prop:'color', notEqual:'rgb(0, 0, 0)', label:'Heading has a non-default color'},
        {type:'computed-style', selector:'ul', prop:'backgroundColor', notEqual:'rgba(0, 0, 0, 0)', label:'List has a background color'}
      ]
    },
    {
      key:'c', title:'Stage C — Add a bordered box layout',
      desc:`Wrap everything in a &lt;div class="board"&gt; and give .board some padding, a border, and a margin —
        the full box model from Week 4 — so the noticeboard looks like a real bordered card instead of plain text
        floating on the page.`,
      starter:`<style>
  h1 { color: #4338ca; }
  ul { background-color: #fef3c7; }
</style>
<h1>Class Noticeboard</h1>
<ul>
  <li>Sports day is next Friday!</li>
  <li>Bring your library books back</li>
  <li>Science fair signups open now</li>
</ul>
<a href="https://example-school.com">Visit our school website</a>
<!-- Wrap everything above in a <div class="board"> and give .board padding, a border, and margin -->
`,
      tests:[
        {type:'computed-style', selector:'.board', prop:'paddingTop', atLeastPx:10, label:'.board has padding'},
        {type:'computed-style', selector:'.board', prop:'borderTopWidth', atLeastPx:1, label:'.board has a visible border'},
        {type:'computed-style', selector:'.board', prop:'marginTop', atLeastPx:10, label:'.board has margin'}
      ]
    }
  ]
};

const WD_MP2 = {
  key:'mp2',
  title:'Mini Project 2 — Build Your Personal Portfolio Page',
  intro:`Time to build something real: your own personal portfolio page. Across three doors you'll add real
    structure and content, style and lay it out properly, then finish with a touch of interactivity and a
    responsive check — every skill from Weeks 1-9, combined into one page you could actually show someone.`,
  fixtureNote:`All three doors build on this same page skeleton — a header with your name and nav links, and three
    empty sections ready to fill in:`,
  fixtureCode:`<header>
  <h1>Your Name</h1>
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
<section id="about"></section>
<section id="projects"></section>
<section id="contact"></section>`,
  doors:[
    {
      key:'a', title:'Door 1 — Build the structured sections',
      desc:`Fill in the three sections: a &lt;p&gt; about yourself inside #about, a &lt;ul&gt; with at least 2
        projects inside #projects, and a &lt;form&gt; with at least one &lt;input&gt; inside #contact. This is the
        heading + list + link + form combination from Weeks 1, 2 and 6.`,
      starter:`<header>
  <h1>Your Name</h1>
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
<section id="about">
  <!-- Add a paragraph about yourself -->
</section>
<section id="projects">
  <!-- Add a <ul> with at least 2 projects -->
</section>
<section id="contact">
  <!-- Add a <form> with at least one input -->
</section>
`,
      tests:[
        {type:'dom-count', selector:'#about p', min:1, label:'#about has a paragraph'},
        {type:'dom-count', selector:'#projects li', min:2, label:'#projects has at least 2 items'},
        {type:'dom-count', selector:'#contact form input', min:1, label:'#contact has a form with an input'}
      ]
    },
    {
      key:'b', title:'Door 2 — Style and lay it out',
      desc:`Give your nav display: flex; so the links sit in a row, and give #projects display: grid; so your
        project list lays out as a grid. Same selectors-and-layout skills from Weeks 5 and 7, now applied to your
        real page.`,
      starter:`<style>
  nav { }
  #projects { }
</style>
<header>
  <h1>Your Name</h1>
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
<section id="about">
  <p>I love building websites and learning new things.</p>
</section>
<section id="projects">
  <ul>
    <li>My first web page</li>
    <li>Class noticeboard project</li>
  </ul>
</section>
<section id="contact">
  <form>
    <input type="email" placeholder="Your email">
  </form>
</section>
`,
      tests:[
        {type:'computed-style', selector:'nav', prop:'display', equals:'flex', label:'nav lays out its links in a row'},
        {type:'computed-style', selector:'#projects', prop:'display', equals:'grid', label:'#projects uses a grid layout'}
      ]
    },
    {
      key:'c', title:'Door 3 — Add interactivity and a responsive touch',
      desc:`Add a &lt;button id="showContact"&gt; and a hidden &lt;form id="contactForm" style="display:none;"&gt;,
        then a &lt;script&gt; that reveals the form when the button is clicked (Week 9's click-handler skill).
        Finally, add an @media (max-width: 900px) rule that changes something about your layout on narrower
        screens (Week 8's responsive skill) — for example, stacking the nav links in a column.`,
      starter:`<style>
  nav { display: flex; }
  #projects { display: grid; grid-template-columns: 1fr 1fr; }
  #contactForm { display: none; }
  /* Add @media (max-width: 900px) { nav { flex-direction: column; } } here */
</style>
<header>
  <h1>Your Name</h1>
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
<section id="about"><p>I love building websites and learning new things.</p></section>
<section id="projects">
  <ul><li>My first web page</li><li>Class noticeboard project</li></ul>
</section>
<section id="contact">
  <button id="showContact">Get in touch</button>
  <form id="contactForm">
    <input type="email" placeholder="Your email">
  </form>
  <script>
    // Add a click handler on #showContact that reveals #contactForm
  </script>
</section>
`,
      tests:[
        {type:'computed-style', selector:'#contactForm', prop:'display', notEqual:'none', label:'#contactForm becomes visible after the button is clicked'},
        {type:'dom', selector:'style', contains:'@media', label:'Page includes a real @media rule'}
      ]
    }
  ]
};

/* =========================================================================
   Web Design Academy — Intermediate level
   Focus: CSS depth (variables, transitions, pseudo-classes) + JS
   interactivity (validation, localStorage, rendering lists) + accessibility.
   ========================================================================= */

const WD_INTERMEDIATE_WEEKS = [
{
  key:'week1', num:1, title:'Cleaner CSS: Variables and Custom Properties',
  scenarioTag:'Real world: your site is growing and repeating colors everywhere',
  scenario:`Your personal site now has several pages, and you keep retyping the same brand color and spacing
    values in rule after rule. CSS custom properties (often just called "CSS variables") let you define a value
    once and reuse it everywhere — change it in one place, and every rule that uses it updates automatically.`,
  objectives:[
    'Understand what a CSS custom property is and why it helps',
    'Define variables inside :root',
    'Use var() to apply a variable\'s value',
    'Reuse the same variable across multiple rules and selectors'
  ],
  conceptHtml:`
    <p>A <strong>CSS custom property</strong> (a "CSS variable") is a value you name once and reuse anywhere. You
    define it inside <code>:root</code> — a selector that matches the whole page — using two dashes:
    <code>:root { --brand-color: #4338ca; }</code>.</p>
    <p>To use it, wrap the name in <code>var(...)</code>: <code>h1 { color: var(--brand-color); }</code>. The
    browser resolves <code>var(--brand-color)</code> to <code>#4338ca</code> when it paints the page.</p>
    <p>The real power: reuse the same variable across completely different properties and selectors — a heading's
    text color, a box's border color, anything — and updating the one <code>:root</code> line updates all of
    them at once.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">&lt;style&gt;
  :root {
    --brand-color: #4338ca;
  }
  h1 {
    color: var(--brand-color);
  }
&lt;/style&gt;
&lt;h1&gt;Welcome to my page&lt;/h1&gt;</pre>
    <ul>
      <li><code>:root { --brand-color: #4338ca; }</code> — declares a variable named <code>--brand-color</code>
        with the value <code>#4338ca</code>. The <strong>double dash</strong> at the start is what makes it a
        custom property rather than a regular CSS keyword.</li>
      <li><code>color: var(--brand-color);</code> — instead of writing <code>#4338ca</code> directly, this asks
        the browser to look up whatever <code>--brand-color</code> currently means and use that.</li>
      <li>Nothing about the &lt;h1&gt; itself changed — it's still a plain heading. All the new behaviour lives in
        the &lt;style&gt; block.</li>
    </ul>
    <p>Now look at the second example, which reuses the same variable in a second place and adds a spacing
    variable too:</p>
    <pre class="code-block">&lt;style&gt;
  :root {
    --brand-color: #4338ca;
    --card-padding: 16px;
  }
  .card {
    padding: var(--card-padding);
    border: 2px solid var(--brand-color);
  }
&lt;/style&gt;
&lt;div class="card"&gt;A card that reuses both variables&lt;/div&gt;</pre>
    <ul>
      <li><code>--card-padding: 16px;</code> — a second variable, for a spacing value this time, not a color.
        Variables can hold any CSS value: colors, lengths, even font names.</li>
      <li><code>border: 2px solid var(--brand-color);</code> — the <strong>same</strong> <code>--brand-color</code>
        from the heading is reused here for a border instead of a text color — one value, two completely
        different properties.</li>
    </ul>`,
  sandboxStarter:`<style>
  :root {
    --brand-color: #4338ca;
  }
  h1 {
    color: var(--brand-color);
  }
</style>
<h1>Welcome to my page</h1>
`,
  sandboxStarter2:`<style>
  :root {
    --brand-color: #4338ca;
    --card-padding: 16px;
  }
  .card {
    padding: var(--card-padding);
    border: 2px solid var(--brand-color);
  }
</style>
<div class="card">A card that reuses both variables</div>
`,
  exercises:[
    {
      title:'Define and use a color variable',
      desc:`Inside a &lt;style&gt; block, define a variable called --main-color inside :root with any color other
        than black, then use var(--main-color) to set your &lt;h1&gt;'s text color.`,
      starter:`<h1>My Page</h1>
<!-- Add a <style> block above defining --main-color and using it on the h1 -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'var(', label:'Uses var() rather than a hardcoded value'},
        {type:'computed-style', selector:'h1', prop:'color', notEqual:'rgb(0, 0, 0)', label:'Heading uses the custom color'}
      ]
    },
    {
      title:'Add a spacing variable',
      desc:`Define a variable called --card-padding (e.g. 20px) and use it as the padding on a &lt;div
        class="card"&gt;.`,
      starter:`<style>
  :root {
    --main-color: #4338ca;
  }
</style>
<div class="card">Card content</div>
<!-- Add --card-padding to :root and apply it as the card's padding -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'var(', label:'Uses var() rather than a hardcoded value'},
        {type:'computed-style', selector:'.card', prop:'paddingTop', atLeastPx:10, label:'.card has padding from the variable'}
      ]
    },
    {
      title:'Round the corners with a variable',
      desc:`Define a variable called --radius (e.g. 12px) and use it as the border-radius of a &lt;button
        class="btn"&gt;, giving it visibly rounded corners.`,
      starter:`<button class="btn">Click me</button>
<!-- Add a <style> block defining --radius and applying it as the button's border-radius -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'var(', label:'Uses var() rather than a hardcoded value'},
        {type:'computed-style', selector:'.btn', prop:'borderTopLeftRadius', atLeastPx:8, label:'.btn has rounded corners from --radius'}
      ]
    },
    {
      title:'Combine two variables into a themed box',
      desc:`Define --bg-color and --text-color in :root, then apply both to a &lt;div class="theme-box"&gt; — the
        background from --bg-color, the text color from --text-color.`,
      starter:`<div class="theme-box">Themed content</div>
<!-- Add a <style> block defining --bg-color and --text-color, and apply both to .theme-box -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'var(', label:'Uses var() rather than a hardcoded value'},
        {type:'computed-style', selector:'.theme-box', prop:'backgroundColor', notEqual:'rgba(0, 0, 0, 0)', label:'.theme-box has a background from --bg-color'},
        {type:'computed-style', selector:'.theme-box', prop:'color', notEqual:'rgb(0, 0, 0)', label:'.theme-box text uses --text-color'}
      ]
    },
    {
      title:'Reuse one variable in two places',
      desc:`Define --brand-color: #4338ca; once in :root. Reuse that exact same variable as BOTH the color of an
        &lt;h1&gt; AND the border-color of a &lt;div class="box"&gt; with a visible border (e.g. border: 2px solid
        var(--brand-color);).`,
      starter:`<h1>My Page</h1>
<div class="box">A box with a matching border</div>
<!-- Add a <style> block defining --brand-color: #4338ca; and reusing it on both the h1 color and the .box border-color -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'var(', label:'Uses var() rather than a hardcoded value'},
        {type:'computed-style', selector:'h1', prop:'color', equals:'rgb(67, 56, 202)', label:'Heading color comes from --brand-color'},
        {type:'computed-style', selector:'.box', prop:'borderTopColor', equals:'rgb(67, 56, 202)', label:'.box border color comes from the same --brand-color'}
      ]
    },
    {
      title:'Override a variable in a more specific scope',
      desc:`Define --accent: blue; in :root, and use var(--accent) as the color of a &lt;p id="outside"&gt;. Then
        add a rule for .alert that redefines --accent: red; and use var(--accent) as the color of a &lt;p&gt;
        INSIDE a &lt;div class="alert"&gt;. The outside paragraph should stay blue while the one inside .alert
        turns red — the same variable name, two different values depending on scope.`,
      starter:`<p id="outside">Regular text</p>
<div class="alert">
  <p>Alert text</p>
</div>
<!-- Add a <style> block: :root sets --accent: blue; .alert overrides --accent: red; both paragraphs use var(--accent) -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'var(', label:'Uses var() rather than a hardcoded value'},
        {type:'computed-style', selector:'#outside', prop:'color', equals:'rgb(0, 0, 255)', label:'Text outside .alert stays blue'},
        {type:'computed-style', selector:'.alert p', prop:'color', equals:'rgb(255, 0, 0)', label:'Text inside .alert is overridden to red'}
      ]
    }
  ],
  quiz:[
    {
      q:'Where do you normally declare a CSS variable so the whole page can use it?',
      options:['Inside :root { }','Inside <head>','Inside var()','Inside the <title> tag'],
      correct:0,
      explain:':root matches the whole document, so variables declared there are available everywhere.'
    },
    {
      q:'How do you apply a custom property called --main-color to a text color?',
      options:['color: --main-color;','color: main-color;','color: var(--main-color);','color: $main-color;'],
      correct:2,
      explain:'var(--name) tells the browser to look up and use that custom property\'s current value.'
    },
    {
      q:'What is the main benefit of using CSS variables for colors?',
      options:['Pages load faster','You can change the color everywhere by editing one line','It makes the HTML shorter','Browsers require them'],
      correct:1,
      explain:'Reuse is the whole point — one edit to the :root declaration updates every rule that uses var().'
    },
    {
      q:'Can the same --brand-color variable be reused for a border-color as well as a text color?',
      options:['No, one variable = one property only','Yes, a variable\'s value can be used by any property that accepts that kind of value','Only if you rename it','Only inside the same selector'],
      correct:1,
      explain:'A variable just holds a value — any property that accepts that type of value (like a color) can use it.'
    }
  ],
  sandboxStarter3:`<style>
  :root {
    --bg-color: #eef0fc;
    --text-color: #211f3d;
  }
  .theme-box {
    background-color: var(--bg-color);
    color: var(--text-color);
    padding: 12px;
  }
  .theme-box h2 {
    color: var(--brand-color, #4338ca);
  }
</style>
<div class="theme-box">
  <h2>Themed section</h2>
  <p>This box uses two variables together: a background and a text color.</p>
</div>
`,
  stretchChallenge:{
    title:'Build a themed badge from three variables',
    desc:`Finished early? Define three variables in :root — --primary (a background color), --secondary (a text
      color), and --radius (e.g. 12px) — then build a &lt;span class="badge"&gt; that uses all three: background
      from --primary, text color from --secondary, and border-radius from --radius.`,
    starter:`<span class="badge">New!</span>
<!-- Add a <style> block defining --primary, --secondary, and --radius, and apply all 3 to .badge -->
`,
    tests:[
      {type:'dom', selector:'style', contains:'var(', label:'Uses var() rather than hardcoded values'},
      {type:'computed-style', selector:'.badge', prop:'backgroundColor', notEqual:'rgba(0, 0, 0, 0)', label:'.badge has a background color from --primary'},
      {type:'computed-style', selector:'.badge', prop:'borderTopLeftRadius', atLeastPx:4, label:'.badge has rounded corners from --radius'}
    ]
  }
},
{
  key:'week2', num:2, title:'Transitions and Simple Animation',
  scenarioTag:'Real world: making buttons and cards feel alive',
  scenario:`Right now everything on your site snaps instantly between states — a button's color changes the
    instant you hover over it, with no smoothness at all. Real sites use CSS transitions and animations to make
    those changes feel natural, and to draw attention to things without needing any JavaScript.`,
  objectives:[
    'Understand what the transition property does',
    'Change styles on :hover and :focus',
    'Smoothly animate a property change with transition',
    'Build a simple looping animation with @keyframes'
  ],
  conceptHtml:`
    <p>By default, CSS changes happen instantly. The <code>transition</code> property tells the browser to
    smoothly animate a property change over time instead: <code>transition: background-color 0.3s;</code> means
    "whenever background-color changes on this element, animate it over 0.3 seconds."</p>
    <p><code>:hover</code> is a pseudo-class — a selector that only matches while the mouse is over the element.
    Combine it with <code>transition</code> on the element's normal (non-hover) rule, and the change from normal to
    hover state animates smoothly instead of snapping.</p>
    <p>For a repeating or more complex animation (not tied to hovering), use <code>@keyframes</code> to describe
    the steps, then apply it with the <code>animation</code> property: <code>animation: spin 2s linear
    infinite;</code>.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">&lt;style&gt;
  .btn {
    background-color: #4338ca;
    transition: background-color 0.3s;
  }
  .btn:hover {
    background-color: #6366f1;
  }
&lt;/style&gt;
&lt;button class="btn"&gt;Hover me&lt;/button&gt;</pre>
    <ul>
      <li><code>transition: background-color 0.3s;</code> — lives on the <strong>normal</strong> <code>.btn</code>
        rule, not inside <code>:hover</code>. It tells the browser "animate this property whenever it changes,"
        no matter what causes the change.</li>
      <li><code>.btn:hover { background-color: #6366f1; }</code> — a separate rule that only applies while the
        mouse is over the button. The moment it applies, <code>background-color</code> changes — and because of
        the <code>transition</code> above, that change animates instead of snapping.</li>
    </ul>
    <p>Now look at the second example, which animates a transform and adds a @keyframes animation:</p>
    <pre class="code-block">&lt;style&gt;
  .card {
    transition: transform 0.3s;
  }
  .card:hover {
    transform: scale(1.05);
  }
  @keyframes pulse {
    0%   { opacity: 1; }
    50%  { opacity: 0.5; }
    100% { opacity: 1; }
  }
  .badge {
    animation: pulse 1.5s infinite;
  }
&lt;/style&gt;
&lt;div class="card"&gt;Hover to grow&lt;/div&gt;
&lt;span class="badge"&gt;NEW&lt;/span&gt;</pre>
    <ul>
      <li><code>transform: scale(1.05)</code> on hover, combined with <code>transition: transform 0.3s;</code> on
        the base rule, makes the card smoothly grow slightly larger while hovered.</li>
      <li><code>@keyframes pulse { 0%{...} 50%{...} 100%{...} }</code> describes a sequence of steps as
        percentages of the animation's duration — here, fading from fully visible, to half-visible, and back.</li>
      <li><code>animation: pulse 1.5s infinite;</code> applies that keyframe sequence to <code>.badge</code>,
        repeating forever — unlike <code>transition</code>, this animation plays automatically, with no hover or
        other trigger needed.</li>
    </ul>`,
  sandboxStarter:`<style>
  .btn {
    background-color: #4338ca;
    color: white;
    padding: 10px 20px;
    border: none;
    transition: background-color 0.3s;
  }
  .btn:hover {
    background-color: #6366f1;
  }
</style>
<button class="btn">Hover me</button>
`,
  sandboxStarter2:`<style>
  .card {
    padding: 16px;
    border: 1px solid #ccc;
    transition: transform 0.3s;
  }
  .card:hover {
    transform: scale(1.05);
  }
</style>
<div class="card">Hover to grow</div>
`,
  exercises:[
    {
      title:'Animate a button on hover',
      desc:`Give a &lt;button class="btn"&gt; a transition on background-color (e.g. transition:
        background-color 0.3s;) on its normal rule, then add a .btn:hover rule that changes the background-color
        to a different value.`,
      starter:`<button class="btn">Hover me</button>
<!-- Add a <style> block: .btn gets a transition, .btn:hover changes background-color -->
`,
      tests:[
        {type:'computed-style', selector:'.btn', prop:'transitionDuration', notEqual:'0s', label:'.btn has a transition set'},
        {type:'dom', selector:'style', contains:':hover', label:'Includes a :hover rule'}
      ]
    },
    {
      title:'Grow a card on hover',
      desc:`Give a &lt;div class="card"&gt; a transition on transform, then a .card:hover rule that applies
        transform: scale(1.05) (or similar) so the card visibly grows while hovered.`,
      starter:`<div class="card">Hover to grow</div>
<!-- Add a <style> block: .card gets a transition on transform, .card:hover scales it up -->
`,
      tests:[
        {type:'computed-style', selector:'.card', prop:'transitionDuration', notEqual:'0s', label:'.card has a transition set'},
        {type:'dom', selector:'style', contains:':hover', label:'Includes a :hover rule'},
        {type:'dom', selector:'style', contains:'transform:', label:'Applies a transform: declaration on hover'}
      ]
    },
    {
      title:'Play a looping animation',
      desc:`Write a @keyframes rule called "fade" that goes from opacity: 1 to opacity: 0.3 and back to opacity: 1
        (using 0%, 50%, 100% steps), then apply animation: fade 2s infinite; to a &lt;span class="tag"&gt;.`,
      starter:`<span class="tag">Live</span>
<!-- Add a <style> block: @keyframes fade with 0%/50%/100% steps, .tag uses animation: fade ... infinite -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'@keyframes', label:'Defines a @keyframes rule'},
        {type:'dom', selector:'style', contains:'50%', label:'Uses a 3-step animation (0%, 50%, 100%)'},
        {type:'computed-style', selector:'.tag', prop:'animationName', notEqual:'none', label:'.tag has the animation applied'}
      ]
    },
    {
      title:'Change two properties together on hover',
      desc:`Give a &lt;div class="tile"&gt; a transition on BOTH background-color and transform, then a
        .tile:hover rule that changes both properties at once (e.g. a new background-color AND transform: scale
        or translateY).`,
      starter:`<div class="tile">Hover me</div>
<!-- Add a <style> block: .tile transitions background-color and transform, .tile:hover changes both -->
`,
      tests:[
        {type:'dom', selector:'style', contains:':hover', label:'Includes a :hover rule'},
        {type:'dom', selector:'style', contains:'background-color', label:'Changes background-color'},
        {type:'dom', selector:'style', contains:'transform', label:'Changes transform too'}
      ]
    },
    {
      title:'Style an input on focus',
      desc:`Give an &lt;input&gt; a transition on border-color, then an input:focus rule that changes
        border-color to a different, visible color — so clicking into the input smoothly highlights it.`,
      starter:`<input type="text" placeholder="Click me">
<!-- Add a <style> block: input gets a transition, input:focus changes border-color -->
`,
      tests:[
        {type:'computed-style', selector:'input', prop:'transitionDuration', notEqual:'0s', label:'input has a transition set'},
        {type:'dom', selector:'style', contains:':focus', label:'Includes a :focus rule'}
      ]
    },
    {
      title:'Play an animation a fixed number of times',
      desc:`Write a @keyframes rule called "bounce" (any two-or-more-step effect, e.g. moving transform:
        translateY), then apply it to a &lt;div class="alert-icon"&gt; with animation: bounce 0.4s ease 3; — the
        "3" means it plays exactly 3 times and then stops, unlike infinite.`,
      starter:`<div class="alert-icon">!</div>
<!-- Add a <style> block: @keyframes bounce, .alert-icon uses animation: bounce ... 3; (not infinite) -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'@keyframes', label:'Defines a @keyframes rule'},
        {type:'computed-style', selector:'.alert-icon', prop:'animationName', notEqual:'none', label:'.alert-icon has the animation applied'},
        {type:'computed-style', selector:'.alert-icon', prop:'animationIterationCount', equals:'3', label:'Animation is set to play exactly 3 times, not infinite'}
      ]
    }
  ],
  quiz:[
    {
      q:'Where should the transition property normally be written?',
      options:['Inside the :hover rule','On the element\'s normal (non-hover) rule','Inside @keyframes','Inside <head>'],
      correct:1,
      explain:'transition belongs on the base rule — it tells the browser to animate ANY change to that property, however it happens.'
    },
    {
      q:'Which pseudo-class matches an element while the mouse is over it?',
      options:[':active',':hover',':before',':root'],
      correct:1,
      explain:':hover matches only while the pointer is currently over the element.'
    },
    {
      q:'What is @keyframes used for?',
      options:['Defining a CSS variable','Describing the steps of a custom animation','Selecting an element by class','Importing a font'],
      correct:1,
      explain:'@keyframes names a sequence of style steps (like 0%, 50%, 100%) that animation can then play.'
    },
    {
      q:'What does animation: pulse 1.5s infinite; do differently from a :hover transition?',
      options:['Nothing, they\'re identical','It plays automatically and repeats forever, with no hover needed','It only works on text','It requires JavaScript'],
      correct:1,
      explain:'animation runs on its own schedule (here, forever) rather than needing a trigger like :hover.'
    }
  ],
  sandboxStarter3:`<style>
  @keyframes pulse {
    0%   { opacity: 1; }
    50%  { opacity: 0.5; }
    100% { opacity: 1; }
  }
  .badge {
    display: inline-block;
    padding: 4px 10px;
    background: #ef4444;
    color: white;
    animation: pulse 1.5s infinite;
  }
</style>
<span class="badge">NEW</span>
`,
  stretchChallenge:{
    title:'Build a spinning loader',
    desc:`Finished early? Write a @keyframes rule called "spin" that rotates an element a full turn (from
      transform: rotate(0deg) to transform: rotate(360deg)), then apply animation: spin 1s linear infinite; to a
      &lt;div class="loader"&gt;.`,
    starter:`<div class="loader">‌</div>
<!-- Add a <style> block: @keyframes spin rotates 0deg to 360deg, .loader uses animation: spin ... infinite -->
`,
    tests:[
      {type:'dom', selector:'style', contains:'@keyframes', label:'Defines a @keyframes rule'},
      {type:'computed-style', selector:'.loader', prop:'animationName', notEqual:'none', label:'.loader has an animation applied'}
    ]
  }
},
{
  key:'week3', num:3, title:'More Selectors: Pseudo-classes and Combinators',
  scenarioTag:'Real world: styling a list without adding classes to every item',
  scenario:`Your noticeboard's list items all look identical right now, and adding a class to every single
    &lt;li&gt; just to style them slightly differently would get tedious fast. More powerful selectors let you
    target elements by their position or relationship to other elements — no extra classes needed.`,
  objectives:[
    'Select an element based on its position with :nth-child',
    'Select the first or last child with :first-child / :last-child',
    'Understand the descendant combinator (space)',
    'Understand the direct child combinator (>)'
  ],
  conceptHtml:`
    <p>So far every selector has matched by tag, class, or id. <strong>Pseudo-class</strong> selectors like
    <code>:nth-child(2)</code> match based on an element's position among its siblings instead — no extra class
    needed. <code>li:nth-child(2)</code> matches only the 2nd &lt;li&gt; inside its parent.</p>
    <p><code>:first-child</code> and <code>:last-child</code> are shortcuts for the first and last position.</p>
    <p><strong>Combinators</strong> describe relationships between selectors. A space means "descendant, anywhere
    inside": <code>ul li</code> matches any &lt;li&gt; inside any &lt;ul&gt;, no matter how deeply nested. A
    <code>&gt;</code> means "direct child only": <code>ul &gt; li</code> matches only &lt;li&gt;s that are
    immediate children of a &lt;ul&gt;, not ones nested inside a further &lt;ul&gt; inside that first one.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">&lt;style&gt;
  li:nth-child(2) {
    font-weight: bold;
  }
  li:first-child {
    color: #4338ca;
  }
&lt;/style&gt;
&lt;ul&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
  &lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;</pre>
    <ul>
      <li><code>li:nth-child(2)</code> — matches only the 2nd &lt;li&gt; among its siblings, here "Second item".
        <code>nth-child</code> counts position among ALL siblings, not just &lt;li&gt; ones.</li>
      <li><code>li:first-child</code> — matches an &lt;li&gt; only if it's also the very first child of its
        parent — here, "First item".</li>
    </ul>
    <p>Now look at the second example, which uses combinators:</p>
    <pre class="code-block">&lt;style&gt;
  .board li {
    color: #4338ca;
  }
  .board &gt; p {
    font-style: italic;
  }
&lt;/style&gt;
&lt;div class="board"&gt;
  &lt;p&gt;A note&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;An item&lt;/li&gt;&lt;/ul&gt;
&lt;/div&gt;</pre>
    <ul>
      <li><code>.board li</code> (a space) — matches any &lt;li&gt; anywhere inside .board, no matter how deeply
        nested inside other elements.</li>
      <li><code>.board &gt; p</code> — matches a &lt;p&gt; only if it's a DIRECT child of .board, not one buried
        inside another element inside .board.</li>
    </ul>`,
  sandboxStarter:`<style>
  li:nth-child(2) {
    font-weight: bold;
  }
  li:first-child {
    color: #4338ca;
  }
</style>
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
`,
  sandboxStarter2:`<style>
  .board li {
    color: #4338ca;
  }
  .board > p {
    font-style: italic;
  }
</style>
<div class="board">
  <p>A note</p>
  <ul><li>An item</li></ul>
</div>
`,
  exercises:[
    {
      title:'Style the first list item',
      desc:`Add a li:first-child rule that gives the first &lt;li&gt; in a &lt;ul&gt; a different color than the
        others (which should stay unstyled/black).`,
      starter:`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
<!-- Add a <style> block with li:first-child -->
`,
      tests:[
        {type:'dom', selector:'style', contains:':first-child', label:'Uses :first-child'},
        {type:'computed-style', selector:'li:first-child', prop:'color', notEqual:'rgb(0, 0, 0)', label:'First item has a non-default color'}
      ]
    },
    {
      title:'Style the last list item',
      desc:`Add a li:last-child rule that gives the LAST &lt;li&gt; a different color.`,
      starter:`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
<!-- Add a <style> block with li:last-child -->
`,
      tests:[
        {type:'dom', selector:'style', contains:':last-child', label:'Uses :last-child'},
        {type:'computed-style', selector:'li:last-child', prop:'color', notEqual:'rgb(0, 0, 0)', label:'Last item has a non-default color'}
      ]
    },
    {
      title:'Target only direct children',
      desc:`Add a rule using the &gt; combinator (e.g. .board &gt; p) that styles a &lt;p&gt; that is a DIRECT
        child of &lt;div class="board"&gt; — give it a non-default color. A &lt;p&gt; nested inside another
        element inside .board should NOT be affected.`,
      starter:`<div class="board">
  <p id="direct">A direct paragraph</p>
  <div><p id="nested">A nested paragraph</p></div>
</div>
<!-- Add a <style> block using .board > p -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'>', label:'Uses the > direct-child combinator'},
        {type:'computed-style', selector:'#direct', prop:'color', notEqual:'rgb(0, 0, 0)', label:'The direct child paragraph is styled'},
        {type:'computed-style', selector:'#nested', prop:'color', equals:'rgb(0, 0, 0)', label:'The nested (non-direct) paragraph is untouched'}
      ]
    },
    {
      title:'Style any descendant, at any depth',
      desc:`Add a rule using the descendant combinator (a space, e.g. .board p) that styles EVERY &lt;p&gt; inside
        &lt;div class="board"&gt;, no matter how deeply nested — including one wrapped inside another &lt;div&gt;.`,
      starter:`<div class="board">
  <p id="direct">A direct paragraph</p>
  <div><p id="nested">A nested paragraph</p></div>
</div>
<!-- Add a <style> block using .board p (a space, not >) so BOTH paragraphs are styled -->
`,
      tests:[
        {type:'computed-style', selector:'#direct', prop:'color', notEqual:'rgb(0, 0, 0)', label:'The direct paragraph is styled'},
        {type:'computed-style', selector:'#nested', prop:'color', notEqual:'rgb(0, 0, 0)', label:'The nested paragraph is ALSO styled (descendant combinator reaches any depth)'}
      ]
    },
    {
      title:'Style one specific position with nth-child',
      desc:`Use li:nth-child(2) specifically to give ONLY the 2nd &lt;li&gt; in a list a background color. The
        1st and 3rd items should be unaffected.`,
      starter:`<ul>
  <li id="item1">First item</li>
  <li id="item2">Second item</li>
  <li id="item3">Third item</li>
</ul>
<!-- Add a <style> block with li:nth-child(2) giving only the 2nd item a background color -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'nth-child(2)', label:'Uses :nth-child(2)'},
        {type:'computed-style', selector:'#item2', prop:'backgroundColor', notEqual:'rgba(0, 0, 0, 0)', label:'Only the 2nd item has a background color'},
        {type:'computed-style', selector:'#item1', prop:'backgroundColor', equals:'rgba(0, 0, 0, 0)', label:'The 1st item is unaffected'}
      ]
    },
    {
      title:'Combine nth-child with a descendant selector',
      desc:`Inside &lt;div class="board"&gt;, use .board li:nth-child(even) to style every EVEN-numbered
        &lt;li&gt; anywhere inside .board with a background color — combining a descendant selector with a
        position-based pseudo-class in one rule.`,
      starter:`<div class="board">
  <ul>
    <li id="row1">Row 1</li>
    <li id="row2">Row 2</li>
    <li id="row3">Row 3</li>
    <li id="row4">Row 4</li>
  </ul>
</div>
<!-- Add a <style> block using .board li:nth-child(even) -->
`,
      tests:[
        {type:'dom', selector:'style', contains:'nth-child(even)', label:'Uses :nth-child(even)'},
        {type:'computed-style', selector:'#row2', prop:'backgroundColor', notEqual:'rgba(0, 0, 0, 0)', label:'Row 2 (even) has a background color'},
        {type:'computed-style', selector:'#row1', prop:'backgroundColor', equals:'rgba(0, 0, 0, 0)', label:'Row 1 (odd) is unaffected'}
      ]
    }
  ],
  quiz:[
    {
      q:'What does li:nth-child(2) select?',
      options:['Every 2nd list on the page','The 2nd child among its siblings, if it\'s an li','Every li after the 2nd one','The 2nd word in the li'],
      correct:1,
      explain:':nth-child(2) matches an element only if it is BOTH an li AND the 2nd child of its parent.'
    },
    {
      q:'What does a space between two selectors mean, e.g. ".board li"?',
      options:['A direct child only','Any descendant, at any depth of nesting','An error','The same as a comma'],
      correct:1,
      explain:'The descendant combinator (space) matches an element anywhere inside the other, no matter how deep.'
    },
    {
      q:'What does .board > p match that .board p would NOT?',
      options:['Nothing, they\'re identical','Only <p> elements that are DIRECT children of .board','Only <p> elements outside .board','Every element in .board'],
      correct:1,
      explain:'> restricts the match to direct children only, excluding <p>s nested inside other elements within .board.'
    },
    {
      q:'Which selector matches the very first child of its parent, whatever tag it is?',
      options:[':nth-child(1) or :first-child',':start',':top','#first'],
      correct:0,
      explain:':first-child and :nth-child(1) both match the first child position.'
    }
  ],
  sandboxStarter3:`<style>
  .list li:nth-child(odd) {
    background-color: #eef0fc;
  }
  .list > li:last-child {
    font-weight: bold;
  }
</style>
<ul class="list">
  <li>Row 1</li>
  <li>Row 2</li>
  <li>Row 3</li>
  <li>Row 4</li>
</ul>
`,
  stretchChallenge:{
    title:'Stripe every other row',
    desc:`Finished early? Use li:nth-child(odd) (or :nth-child(2n+1)) to give every ODD-numbered &lt;li&gt; in a
      list a background color, creating a "striped table" effect — a very common real-world pattern.`,
    starter:`<ul class="rows">
  <li>Row 1</li>
  <li>Row 2</li>
  <li>Row 3</li>
  <li>Row 4</li>
</ul>
<!-- Add a <style> block striping odd rows with a background color -->
`,
    tests:[
      {type:'dom', selector:'style', contains:'nth-child', label:'Uses :nth-child'},
      {type:'computed-style', selector:'.rows li:nth-child(1)', prop:'backgroundColor', notEqual:'rgba(0, 0, 0, 0)', label:'Row 1 (odd) has a background color'},
      {type:'computed-style', selector:'.rows li:nth-child(2)', prop:'backgroundColor', equals:'rgba(0, 0, 0, 0)', label:'Row 2 (even) has no background color'}
    ]
  }
},
{
  key:'week4', num:4, title:'Forms That Talk Back: JS Validation',
  scenarioTag:'Real world: catching a mistake before it\'s submitted',
  scenario:`Right now, any form on your site accepts whatever a visitor types — an empty name, an email with no
    @ sign, anything. Real sites check the input with JavaScript and show a helpful message immediately, before
    the visitor even leaves the page, instead of silently accepting bad data.`,
  objectives:[
    'Read what a visitor typed into an input with .value',
    'Check a value against a simple rule (empty, missing a character, out of range)',
    'Show and hide an inline error message based on that check',
    'Check more than one condition before accepting the input'
  ],
  conceptHtml:`
    <p>An &lt;input&gt;'s current text lives in its <code>.value</code> property in JavaScript —
    <code>document.querySelector('#name').value</code> gets whatever the visitor has typed so far.</p>
    <p>To validate it, check that value against a rule: is it empty (<code>.trim() === ''</code>)? Does it
    contain something it should (<code>.includes('@')</code>)? Based on the result, show or hide an inline error
    message the same way you already know — <code>.style.display = 'block'</code> to show it, <code>'none'</code>
    to hide it.</p>
    <p><strong>A note on how this track tests it</strong>: a real site would check this when the form is
    submitted. Here, we check it when a "Check" button is clicked instead — the exact same validation logic, just
    triggered a slightly different way, so you can practice it directly.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">&lt;input id="name" type="text"&gt;
&lt;button id="checkBtn" type="button"&gt;Check&lt;/button&gt;
&lt;p id="error" style="display:none;"&gt;Please enter your name&lt;/p&gt;

&lt;script&gt;
  document.querySelector('#checkBtn').addEventListener('click', function(){
    var name = document.querySelector('#name').value;
    if (name.trim() === '') {
      document.querySelector('#error').style.display = 'block';
    } else {
      document.querySelector('#error').style.display = 'none';
    }
  });
&lt;/script&gt;</pre>
    <ul>
      <li><code>var name = document.querySelector('#name').value;</code> — reads whatever text is currently
        inside the input, exactly as the visitor typed it.</li>
      <li><code>name.trim() === ''</code> — <code>.trim()</code> removes leading/trailing spaces first (so
        someone typing just spaces still counts as empty), then compares to an empty string.</li>
      <li>The <code>if</code>/<code>else</code> shows the error when invalid, and explicitly hides it again when
        valid — without the <code>else</code>, a previously-shown error would stay stuck on screen even after the
        visitor fixes their input and clicks again.</li>
    </ul>
    <p>Now look at the second example, checking for a required character instead of emptiness:</p>
    <pre class="code-block">&lt;input id="email" type="text"&gt;
&lt;button id="checkBtn2" type="button"&gt;Check&lt;/button&gt;
&lt;p id="error2" style="display:none;"&gt;Please enter a valid email&lt;/p&gt;

&lt;script&gt;
  document.querySelector('#checkBtn2').addEventListener('click', function(){
    var email = document.querySelector('#email').value;
    if (!email.includes('@')) {
      document.querySelector('#error2').style.display = 'block';
    } else {
      document.querySelector('#error2').style.display = 'none';
    }
  });
&lt;/script&gt;</pre>
    <ul>
      <li><code>!email.includes('@')</code> — <code>.includes('@')</code> checks whether that character appears
        anywhere in the string; the <code>!</code> flips it to "does NOT include", so the error shows exactly
        when the @ sign is missing.</li>
    </ul>`,
  sandboxStarter:`<input id="name" type="text">
<button id="checkBtn" type="button">Check</button>
<p id="error" style="display:none;">Please enter your name</p>

<script>
  document.querySelector('#checkBtn').addEventListener('click', function(){
    var name = document.querySelector('#name').value;
    if (name.trim() === '') {
      document.querySelector('#error').style.display = 'block';
    } else {
      document.querySelector('#error').style.display = 'none';
    }
  });
</script>
`,
  sandboxStarter2:`<input id="email" type="text">
<button id="checkBtn2" type="button">Check</button>
<p id="error2" style="display:none;">Please enter a valid email</p>

<script>
  document.querySelector('#checkBtn2').addEventListener('click', function(){
    var email = document.querySelector('#email').value;
    if (!email.includes('@')) {
      document.querySelector('#error2').style.display = 'block';
    } else {
      document.querySelector('#error2').style.display = 'none';
    }
  });
</script>
`,
  exercises:[
    {
      title:'Catch an empty name field',
      desc:`Add an &lt;input id="name"&gt; (leave it empty), a &lt;button type="button" id="checkBtn"&gt;, and a
        hidden &lt;p id="error"&gt;. When #checkBtn is clicked, if #name's value is empty (after trimming), show
        #error.`,
      starter:`<input id="name" type="text">
<button id="checkBtn" type="button">Check</button>
<p id="error" style="display:none;">Please enter your name</p>

<script>
  // Add a click handler on #checkBtn: if #name is empty, show #error
</script>
`,
      tests:[{type:'computed-style', selector:'#error', prop:'display', notEqual:'none', label:'#error shows when the name field is empty'}]
    },
    {
      title:'Catch a missing @ in an email',
      desc:`Add an &lt;input id="email"&gt; with the value "not-an-email" (no @ sign), a &lt;button type="button"
        id="checkBtn"&gt;, and a hidden &lt;p id="error"&gt;. When clicked, if #email's value doesn't include "@",
        show #error.`,
      starter:`<input id="email" type="text" value="not-an-email">
<button id="checkBtn" type="button">Check</button>
<p id="error" style="display:none;">Please enter a valid email</p>

<script>
  // Add a click handler on #checkBtn: if #email doesn't include "@", show #error
</script>
`,
      tests:[{type:'computed-style', selector:'#error', prop:'display', notEqual:'none', label:'#error shows when the email is missing an @'}]
    },
    {
      title:'Check a number is in range',
      desc:`Add an &lt;input id="age" type="number" value="25"&gt;, a &lt;button type="button" id="checkBtn"&gt;,
        and a hidden &lt;p id="error"&gt;. When clicked, if #age's value (converted with Number(...)) is less than
        5 or greater than 18, show #error. (25 is out of range, so #error should show.)`,
      starter:`<input id="age" type="number" value="25">
<button id="checkBtn" type="button">Check</button>
<p id="error" style="display:none;">Age must be between 5 and 18</p>

<script>
  // Add a click handler on #checkBtn: if Number(#age.value) is < 5 or > 18, show #error
</script>
`,
      tests:[{type:'computed-style', selector:'#error', prop:'display', notEqual:'none', label:'#error shows when the age is out of range'}]
    },
    {
      title:'Check two fields together',
      desc:`Add &lt;input id="name" value="Ada"&gt; (already valid) and &lt;input id="email"
        value="not-an-email"&gt; (missing @), a &lt;button type="button" id="checkBtn"&gt;, and a hidden &lt;p
        id="error"&gt;. When clicked, show #error if EITHER #name is empty OR #email is missing "@" — since the
        email is invalid here, #error should show even though the name alone is fine.`,
      starter:`<input id="name" type="text" value="Ada">
<input id="email" type="text" value="not-an-email">
<button id="checkBtn" type="button">Check</button>
<p id="error" style="display:none;">Please fix the highlighted fields</p>

<script>
  // Add a click handler: if #name is empty OR #email is missing "@", show #error
</script>
`,
      tests:[{type:'computed-style', selector:'#error', prop:'display', notEqual:'none', label:'#error shows because the email is still invalid, even though the name is fine'}]
    },
    {
      title:'Show a success message when valid',
      desc:`Add an &lt;input id="name" value="Ada"&gt; (already valid), a &lt;button type="button"
        id="checkBtn"&gt;, and a hidden &lt;p id="success"&gt;. When clicked, if #name is NOT empty, show #success
        instead of an error — the same if/else pattern, but rewarding valid input this time.`,
      starter:`<input id="name" type="text" value="Ada">
<button id="checkBtn" type="button">Check</button>
<p id="success" style="display:none;">Looks good!</p>

<script>
  // Add a click handler on #checkBtn: if #name is NOT empty, show #success
</script>
`,
      tests:[{type:'computed-style', selector:'#success', prop:'display', notEqual:'none', label:'#success shows because the name is valid'}]
    },
    {
      title:'Mark an invalid field visually',
      desc:`Add an &lt;input id="name"&gt; (leave it empty) and a &lt;button type="button" id="checkBtn"&gt;. When
        clicked, if #name is empty, add an inline style directly to #name giving it a visible red border (e.g.
        document.querySelector('#name').style.border = '2px solid red';) — marking the field itself, not just
        showing a separate message.`,
      starter:`<input id="name" type="text">
<button id="checkBtn" type="button">Check</button>

<script>
  // Add a click handler on #checkBtn: if #name is empty, give #name a red border via .style.border
</script>
`,
      tests:[{type:'computed-style', selector:'#name', prop:'borderTopColor', equals:'rgb(255, 0, 0)', label:'#name gets a red border when left empty'}]
    }
  ],
  quiz:[
    {
      q:'How do you read what a visitor has typed into an <input id="name">?',
      options:['document.querySelector(\'#name\').text','document.querySelector(\'#name\').value','document.querySelector(\'#name\').innerHTML','document.querySelector(\'#name\').content'],
      correct:1,
      explain:'.value holds the current text inside a form input.'
    },
    {
      q:'Why include an else branch that hides the error, not just an if that shows it?',
      options:['It\'s required by HTML','Otherwise a previously-shown error stays on screen even after the input becomes valid','It makes the code shorter','It has no real purpose'],
      correct:1,
      explain:'Without explicitly hiding it again, a shown error never disappears once the visitor fixes their mistake.'
    },
    {
      q:'What does "abc".includes(\'@\') return?',
      options:['true','false','undefined','An error'],
      correct:1,
      explain:'"abc" does not contain an @ character, so .includes(\'@\') returns false.'
    },
    {
      q:'Why does this track check validation on a button click instead of a real form submission?',
      options:['Because forms don\'t exist in HTML','Because the sandboxed practice area blocks real form submission, so a click event is used to test the exact same validation logic safely','Because clicking is faster','There is no reason'],
      correct:1,
      explain:'The sandbox intentionally blocks real navigation for safety — a button click lets you practice identical validation logic without that restriction.'
    }
  ],
  sandboxStarter3:`<input id="age" type="number" value="12">
<input id="name" type="text" value="Ben">
<button id="checkBtn3" type="button">Check</button>
<p id="error3" style="display:none;">Please fix the highlighted fields</p>
<p id="success3" style="display:none;">All good!</p>

<script>
  document.querySelector('#checkBtn3').addEventListener('click', function(){
    var age = Number(document.querySelector('#age').value);
    var name = document.querySelector('#name').value;
    if (name.trim() === '' || age < 5 || age > 18) {
      document.querySelector('#error3').style.display = 'block';
      document.querySelector('#success3').style.display = 'none';
    } else {
      document.querySelector('#error3').style.display = 'none';
      document.querySelector('#success3').style.display = 'block';
    }
  });
</script>
`,
  stretchChallenge:{
    title:'Count how many fields are still invalid',
    desc:`Finished early? Add three inputs (#name, #email, #age) and a &lt;button type="button" id="checkBtn"&gt;.
      When clicked, count how many of the three are invalid (name empty, email missing @, age outside 5-18), and
      set a &lt;p id="count"&gt;'s textContent to "X field(s) need fixing" where X is that count.`,
    starter:`<input id="name" type="text" value="">
<input id="email" type="text" value="not-an-email">
<input id="age" type="number" value="12">
<button id="checkBtn" type="button">Check</button>
<p id="count"></p>
<!-- Add a click handler that counts invalid fields and updates #count's textContent -->
`,
    tests:[
      {type:'dom', selector:'#count', contains:'2 field', label:'#count correctly reports 2 invalid fields (empty name, bad email)'}
    ]
  }
},
{
  key:'week5', num:5, title:'Multi-Page Navigation',
  scenarioTag:'Real world: a site is more than one page',
  scenario:`A real site is never just one page — it's several pages linked together by a shared navigation bar,
    with the current page's link visibly marked so visitors always know where they are. (Since this practice area
    grades one page at a time, you'll build the navigation bar itself — the same markup and styling you'd reuse
    across every real page of a multi-page site.)`,
  objectives:[
    'Build a navigation bar with relative links between pages',
    'Mark the current page\'s link as "active" with a class',
    'Style the active link differently from the others',
    'Lay out a nav bar with flexbox and add a hover state'
  ],
  conceptHtml:`
    <p>A <strong>relative link</strong> points to another page in the same site by filename, not a full web
    address: <code>&lt;a href="about.html"&gt;About&lt;/a&gt;</code> means "the about.html file, next to this
    one" — much shorter than a full URL, and it keeps working if you move the whole site to a new domain.</p>
    <p>Every page of a real site repeats the same nav bar, but marks a DIFFERENT link as <code>class="active"</code>
    depending on which page you're currently on — so a visitor can always see where they are.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">&lt;nav&gt;
  &lt;a href="index.html"&gt;Home&lt;/a&gt;
  &lt;a href="about.html" class="active"&gt;About&lt;/a&gt;
  &lt;a href="contact.html"&gt;Contact&lt;/a&gt;
&lt;/nav&gt;

&lt;style&gt;
  .active {
    color: #4338ca;
    font-weight: bold;
  }
&lt;/style&gt;</pre>
    <ul>
      <li>Three &lt;a&gt; links, each pointing to a different relative filename — this is the same nav bar every
        page of the site would include.</li>
      <li><code>class="active"</code> sits only on the "About" link here — on the about.html page itself, this is
        how a visitor sees "you are here" without any special component or framework.</li>
      <li><code>.active { color: #4338ca; font-weight: bold; }</code> — the active link is styled distinctly
        (bold, colored) so it visually stands out from the other two.</li>
    </ul>
    <p>Now look at the second example, which lays the nav out with flexbox and adds a hover effect:</p>
    <pre class="code-block">&lt;style&gt;
  nav {
    display: flex;
    gap: 20px;
  }
  nav a {
    transition: color 0.3s;
  }
  nav a:hover {
    color: #6366f1;
  }
&lt;/style&gt;</pre>
    <ul>
      <li><code>display: flex; gap: 20px;</code> on &lt;nav&gt; — the same flexbox layout skill from earlier,
        applied here to lay the links out in a row with even spacing.</li>
      <li><code>nav a:hover</code> — a hover effect on the REGULAR links, separate from <code>.active</code>'s
        permanent styling, so hovering over any link gives feedback even if it isn't the current page.</li>
    </ul>`,
  sandboxStarter:`<nav>
  <a href="index.html">Home</a>
  <a href="about.html" class="active">About</a>
  <a href="contact.html">Contact</a>
</nav>

<style>
  .active {
    color: #4338ca;
    font-weight: bold;
  }
</style>
`,
  sandboxStarter2:`<nav>
  <a href="index.html">Home</a>
  <a href="about.html" class="active">About</a>
  <a href="contact.html">Contact</a>
</nav>

<style>
  nav {
    display: flex;
    gap: 20px;
  }
  nav a {
    transition: color 0.3s;
  }
  nav a:hover {
    color: #6366f1;
  }
  .active {
    color: #4338ca;
    font-weight: bold;
  }
</style>
`,
  exercises:[
    {
      title:'Build a 3-link nav bar',
      desc:`Build a &lt;nav&gt; with 3 &lt;a&gt; links using relative filenames (e.g. href="index.html",
        "about.html", "contact.html") — not full web addresses.`,
      starter:`<!-- Build a <nav> with 3 <a> links using relative filenames -->
`,
      tests:[
        {type:'dom-count', selector:'nav a', min:3, label:'nav has at least 3 links'},
        {type:'dom-attr', selector:'nav a', attr:'href', notEmpty:true, label:'Links have real href values'}
      ]
    },
    {
      title:'Mark the current page as active',
      desc:`In a 3-link &lt;nav&gt;, give exactly ONE link class="active" (e.g. the "About" link), and add a
        .active rule giving it a color different from black.`,
      starter:`<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>
<!-- Add class="active" to one link, and a <style> block coloring .active -->
`,
      tests:[
        {type:'dom-count', selector:'nav a.active', min:1, label:'Exactly one link has the active class'},
        {type:'computed-style', selector:'.active', prop:'color', notEqual:'rgb(0, 0, 0)', label:'.active has a non-default color'}
      ]
    },
    {
      title:'Add a hover effect to nav links',
      desc:`Give nav a (all nav links) a transition on color, then a nav a:hover rule that changes their color —
        so hovering over any link gives visible feedback.`,
      starter:`<nav>
  <a href="index.html">Home</a>
  <a href="about.html" class="active">About</a>
  <a href="contact.html">Contact</a>
</nav>
<style>
  .active { color: #4338ca; }
</style>
<!-- Add nav a transition + nav a:hover -->
`,
      tests:[
        {type:'computed-style', selector:'nav a', prop:'transitionDuration', notEqual:'0s', label:'nav a has a transition set'},
        {type:'dom', selector:'style', contains:':hover', label:'Includes a :hover rule'}
      ]
    },
    {
      title:'Distinguish active from a regular link',
      desc:`Give .active a text-decoration: none; (removing its underline) while regular nav links keep their
        default underline — so the active link looks visually different in a second way, not just color.`,
      starter:`<nav>
  <a href="index.html">Home</a>
  <a href="about.html" class="active">About</a>
  <a href="contact.html">Contact</a>
</nav>
<style>
  .active { color: #4338ca; }
</style>
<!-- Add text-decoration: none; to .active only -->
`,
      tests:[
        {type:'computed-style', selector:'.active', prop:'textDecorationLine', equals:'none', label:'.active has no underline'},
        {type:'computed-style', selector:'nav a:not(.active)', prop:'textDecorationLine', notEqual:'none', label:'Regular links keep their underline'}
      ]
    },
    {
      title:'Lay the nav out with flexbox',
      desc:`Give &lt;nav&gt; display: flex; and a gap so the 3 links sit in a row with visible spacing between
        them, instead of stacking or touching.`,
      starter:`<nav>
  <a href="index.html">Home</a>
  <a href="about.html" class="active">About</a>
  <a href="contact.html">Contact</a>
</nav>
<!-- Add a <style> block: nav gets display: flex and a gap -->
`,
      tests:[
        {type:'computed-style', selector:'nav', prop:'display', equals:'flex', label:'nav uses display: flex'},
        {type:'computed-style', selector:'nav', prop:'columnGap', atLeastPx:5, label:'nav has visible spacing (gap) between links'}
      ]
    },
    {
      title:'Build the complete nav bar',
      desc:`Combine everything: a flexbox &lt;nav&gt; with 3 relative links, one marked class="active" with a
        distinct color AND no underline, and a :hover rule on the non-active links.`,
      starter:`<!-- Build the full nav: flexbox layout, 3 relative links, one .active (colored, no underline), :hover on the rest -->
`,
      tests:[
        {type:'computed-style', selector:'nav', prop:'display', equals:'flex', label:'nav uses display: flex'},
        {type:'dom-count', selector:'nav a.active', min:1, label:'Exactly one link has the active class'},
        {type:'computed-style', selector:'.active', prop:'textDecorationLine', equals:'none', label:'.active has no underline'},
        {type:'dom', selector:'style', contains:':hover', label:'Includes a :hover rule for the other links'}
      ]
    }
  ],
  quiz:[
    {
      q:'What is a relative link, e.g. href="about.html"?',
      options:['A link to a random page','A link to another page in the same site, by filename rather than full URL','A broken link','A link that only works on mobile'],
      correct:1,
      explain:'Relative links point to files in the same site without needing the full domain name.'
    },
    {
      q:'Why mark the current page\'s nav link with class="active"?',
      options:['It\'s required by HTML','So it can be styled differently, showing the visitor which page they\'re currently on','It makes the link work faster','It hides the link'],
      correct:1,
      explain:'"active" is just a class name convention — CSS then styles it distinctly so visitors always know where they are.'
    },
    {
      q:'Which CSS removes an element\'s underline?',
      options:['text-decoration: none;','underline: false;','text-style: plain;','border: none;'],
      correct:0,
      explain:'text-decoration: none; removes underlines (and other line decorations) from text.'
    },
    {
      q:'What does display: flex; on a <nav> typically do to its links?',
      options:['Hides them','Lays them out in a row (by default), instead of stacking vertically','Makes them bigger','Removes their href attributes'],
      correct:1,
      explain:'Flexbox lays children out in a row by default, which is exactly what a horizontal nav bar needs.'
    }
  ],
  sandboxStarter3:`<style>
  nav {
    display: flex;
    gap: 24px;
    padding: 12px;
    background-color: #eef0fc;
  }
  nav a {
    text-decoration: none;
    color: #211f3d;
    transition: color 0.3s;
  }
  nav a:hover {
    color: #6366f1;
  }
  nav a.active {
    color: #4338ca;
    font-weight: bold;
  }
</style>
<nav>
  <a href="index.html" class="active">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>
`,
  stretchChallenge:{
    title:'Add a 4th link for a new page',
    desc:`Finished early? Add a 4th link (e.g. href="gallery.html") to a flexbox nav bar that already has 3
      links, keeping the same active-link and hover styling consistent across all 4.`,
    starter:`<style>
  nav { display: flex; gap: 20px; }
  nav a { text-decoration: none; color: #211f3d; }
  nav a.active { color: #4338ca; font-weight: bold; }
</style>
<nav>
  <a href="index.html" class="active">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
  <!-- Add a 4th link here, e.g. to gallery.html -->
</nav>
`,
    tests:[
      {type:'dom-count', selector:'nav a', min:4, label:'nav now has at least 4 links'},
      {type:'computed-style', selector:'nav', prop:'display', equals:'flex', label:'nav still uses display: flex'}
    ]
  }
},
{
  key:'week6', num:6, title:'Remembering Things: Keeping State Between Clicks',
  scenarioTag:'Real world: a page that remembers what\'s already happened',
  scenario:`Every click handler so far has worked with whatever's on the page right now — it doesn't know
    anything about what happened on EARLIER clicks. A variable declared outside a click handler works
    differently: it keeps its value between clicks, so the page can build on what it already "remembers".`,
  objectives:[
    'Understand that a variable declared outside a function keeps its value between calls',
    'Build up an array across multiple interactions',
    'Use a remembered value to decide what to show next',
    'Know that real sites use localStorage for remembering things across a page RELOAD (a level beyond what this practice area can check)'
  ],
  conceptHtml:`
    <p>A variable declared <strong>inside</strong> a click handler is recreated fresh every single click — it
    can't remember anything from before. A variable declared <strong>outside</strong> the handler, in contrast, is
    created once when the page loads, and every click can read AND change that same variable — so its value
    carries over from click to click.</p>
    <pre class="code-block">let visits = 4; // created once, remembers its value between clicks

document.querySelector('#checkBtn').addEventListener('click', function(){
  visits = visits + 1;
  document.querySelector('#count').textContent = 'Visits: ' + visits;
});</pre>
    <ul>
      <li><code>let visits = 4;</code> sits OUTSIDE the click handler — it already "remembers" a starting value
        of 4, as if the visitor had already been here 4 times before.</li>
      <li>Inside the handler, <code>visits = visits + 1;</code> reads the remembered value and updates it — after
        one click, <code>visits</code> becomes 5, and it would STAY 5 for any later code that reads it.</li>
    </ul>
    <p>The same pattern works for arrays — a list can grow across clicks instead of resetting each time:</p>
    <pre class="code-block">let favorites = ['Reading']; // remembers one item already

document.querySelector('#addBtn').addEventListener('click', function(){
  favorites.push('Gaming');
  document.querySelector('#list').textContent = favorites.join(', ');
});</pre>
    <ul>
      <li><code>let favorites = ['Reading'];</code> — an array that already remembers one item.</li>
      <li><code>favorites.push('Gaming');</code> adds a new item to the END of the remembered array, without
        losing what was already there — after this runs, <code>favorites</code> is
        <code>['Reading', 'Gaming']</code>.</li>
    </ul>
    <p><strong>A note on real persistence</strong>: everything above is remembered only while the page stays
    open — reloading the page resets it. Real sites use <code>localStorage.setItem(...)</code> /
    <code>localStorage.getItem(...)</code> to remember things across a page reload or a return visit. This
    practice area's sandbox intentionally can't check that (for the same safety reasons it can't submit real
    forms), so this week focuses on the "remembering between clicks" half of the idea — the genuinely new part.</p>`,
  sandboxStarter:`<p id="count">Visits: 4</p>
<button id="checkBtn" type="button">I'm back!</button>

<script>
  let visits = 4;
  document.querySelector('#checkBtn').addEventListener('click', function(){
    visits = visits + 1;
    document.querySelector('#count').textContent = 'Visits: ' + visits;
  });
</script>
`,
  sandboxStarter2:`<p id="list">Reading</p>
<button id="addBtn" type="button">Add Gaming</button>

<script>
  let favorites = ['Reading'];
  document.querySelector('#addBtn').addEventListener('click', function(){
    favorites.push('Gaming');
    document.querySelector('#list').textContent = favorites.join(', ');
  });
</script>
`,
  exercises:[
    {
      title:'Remember and increase a count',
      desc:`Declare let visits = 4; OUTSIDE a click handler on &lt;button type="button" id="checkBtn"&gt;. When
        clicked, increase visits by 1 and update a &lt;p id="count"&gt;'s textContent to "Visits: 5".`,
      starter:`<p id="count">Visits: 4</p>
<button id="checkBtn" type="button">I'm back!</button>

<script>
  let visits = 4;
  // Add a click handler: increase visits by 1, update #count to "Visits: " + visits
</script>
`,
      tests:[{type:'dom', selector:'#count', contains:'Visits: 5', label:'#count shows "Visits: 5" after one click'}]
    },
    {
      title:'Add to a remembered list',
      desc:`Declare let favorites = ['Reading']; OUTSIDE a click handler on &lt;button type="button"
        id="addBtn"&gt;. When clicked, push('Gaming') onto favorites and update a &lt;p id="list"&gt;'s
        textContent to favorites.join(', ') — so it becomes "Reading, Gaming".`,
      starter:`<p id="list">Reading</p>
<button id="addBtn" type="button">Add Gaming</button>

<script>
  let favorites = ['Reading'];
  // Add a click handler: push('Gaming'), then update #list to favorites.join(', ')
</script>
`,
      tests:[{type:'dom', selector:'#list', contains:'Reading, Gaming', label:'#list shows "Reading, Gaming" after one click'}]
    },
    {
      title:'Remember a running score and react to it',
      desc:`Declare let score = 8; OUTSIDE a click handler on &lt;button type="button" id="addBtn"&gt;. When
        clicked, add 2 to score. If the NEW score is 10 or more, set a &lt;p id="msg"&gt;'s textContent to "You
        reached 10!".`,
      starter:`<p id="msg"></p>
<button id="addBtn" type="button">Add 2 points</button>

<script>
  let score = 8;
  // Add a click handler: score += 2, then if score >= 10, set #msg's textContent to "You reached 10!"
</script>
`,
      tests:[{type:'dom', selector:'#msg', contains:'You reached 10', label:'#msg shows the message after one click pushes score to 10'}]
    },
    {
      title:'Remember a cart and show its size',
      desc:`Declare let cart = ['Pen', 'Book']; OUTSIDE a click handler on &lt;button type="button"
        id="addBtn"&gt;. When clicked, push('Eraser') onto cart, then update a &lt;p id="count"&gt;'s textContent
        to cart.length + " items in cart" (should read "3 items in cart").`,
      starter:`<p id="count"></p>
<button id="addBtn" type="button">Add Eraser</button>

<script>
  let cart = ['Pen', 'Book'];
  // Add a click handler: push('Eraser'), then set #count to cart.length + " items in cart"
</script>
`,
      tests:[{type:'dom', selector:'#count', contains:'3 items in cart', label:'#count shows "3 items in cart" after one click'}]
    },
    {
      title:'Remember whether something is toggled on',
      desc:`Declare let isOn = true; OUTSIDE a click handler on &lt;button type="button" id="toggleBtn"&gt;. When
        clicked, flip isOn to its opposite (isOn = !isOn;), then set a &lt;p id="status"&gt;'s textContent to
        "OFF" if isOn is now false, or "ON" if isOn is still true.`,
      starter:`<p id="status">ON</p>
<button id="toggleBtn" type="button">Toggle</button>

<script>
  let isOn = true;
  // Add a click handler: flip isOn, then set #status's textContent to "ON" or "OFF" based on the NEW value
</script>
`,
      tests:[{type:'dom', selector:'#status', contains:'OFF', label:'#status shows "OFF" after one click flips isOn from true to false'}]
    },
    {
      title:'Remember a like and change the button itself',
      desc:`Declare let liked = false; OUTSIDE a click handler on &lt;button type="button" id="likeBtn"&gt;🤍
        Like&lt;/button&gt;. When clicked, flip liked to true, and set the BUTTON's own textContent to "❤️ Liked"
        — reading the remembered state to decide what the button should say now.`,
      starter:`<button type="button" id="likeBtn">🤍 Like</button>

<script>
  let liked = false;
  // Add a click handler: flip liked to true, then set #likeBtn's textContent to "❤️ Liked"
</script>
`,
      tests:[{type:'dom', selector:'#likeBtn', contains:'Liked', label:'#likeBtn shows "Liked" after one click'}]
    }
  ],
  quiz:[
    {
      q:'Why does a variable declared OUTSIDE a click handler "remember" its value between clicks, but one declared inside does not?',
      options:['It doesn\'t make a difference','A variable outside is created once when the page loads; one inside is recreated fresh every click','Outside variables are faster','There\'s no such thing as "inside" a function'],
      correct:1,
      explain:'Code inside the handler runs fresh each click, recreating any variables declared there — but a variable from outside already existed and keeps whatever value it was left with.'
    },
    {
      q:'What does favorites.push(\'Gaming\') do to an existing array?',
      options:['Replaces the whole array with just "Gaming"','Adds "Gaming" to the end, keeping everything already there','Removes "Gaming" if it exists','Deletes the array'],
      correct:1,
      explain:'.push() adds a new item onto the end of an array without removing what was already in it.'
    },
    {
      q:'What does localStorage let a real site do that this week\'s in-page variables cannot?',
      options:['Nothing extra','Remember values even after the page is reloaded or the visitor comes back later','Make the page load faster','Change CSS colors'],
      correct:1,
      explain:'In-page variables reset on every reload; localStorage specifically persists data across reloads and return visits.'
    },
    {
      q:'If let score = 8; is declared once outside a handler, and score += 2; runs once inside it, what is score afterward?',
      options:['8','2','10','Undefined'],
      correct:2,
      explain:'The handler reads the remembered value (8), adds 2, and that new value (10) becomes the new remembered value.'
    }
  ],
  sandboxStarter3:`<p id="status">You have 2 badges</p>
<button id="earnBtn" type="button">Earn a badge</button>

<script>
  let badges = ['Reader', 'Helper'];
  document.querySelector('#earnBtn').addEventListener('click', function(){
    badges.push('Speedster');
    document.querySelector('#status').textContent = 'You have ' + badges.length + ' badges: ' + badges.join(', ');
  });
</script>
`,
  stretchChallenge:{
    title:'Remember a total across two different buttons',
    desc:`Finished early? Declare let total = 0; OUTSIDE any handler. Add two buttons, #add5 and #add10 — clicking
      #add5 adds 5 to total, clicking #add10 adds 10. Both buttons share and update the SAME remembered total, and
      both update a &lt;p id="result"&gt; to show the current total afterward.`,
    starter:`<p id="result">Total: 0</p>
<button id="add5" type="button">+5</button>
<button id="add10" type="button">+10</button>

<script>
  let total = 0;
  // Add click handlers on #add5 and #add10 that both add to the SAME total and update #result
</script>
`,
    tests:[
      {type:'dom', selector:'#result', contains:'Total: 15', label:'#result shows "Total: 15" after both buttons are clicked once each (5 + 10)'}
    ]
  }
},
{
  key:'week7', num:7, title:'Rendering Lists with JavaScript',
  scenarioTag:'Real world: a list built from data, not typed by hand',
  scenario:`Every list so far has been typed directly into the HTML. Real sites often build a list FROM a JS
    array instead — a page showing search results, a shopping list, a set of comments — none of that is typed by
    hand, it's rendered by looping over an array and creating an element for each item.`,
  objectives:[
    'Create a new element with document.createElement',
    'Set its content and add it to the page with appendChild',
    'Loop over an array to render one element per item',
    'Build up rendered content conditionally, based on each item\'s value'
  ],
  conceptHtml:`
    <p><code>document.createElement('li')</code> makes a brand new, empty &lt;li&gt; element — it doesn't exist
    on the page yet, it only exists in JavaScript until you attach it somewhere. Give it content with
    <code>.textContent = '...'</code>, then attach it to a real parent element with
    <code>parent.appendChild(newElement)</code>.</p>
    <p>Combine this with a loop over an array, and you can build an entire list from data instead of typing each
    item by hand:</p>
    <pre class="code-block">const fruits = ['Apple', 'Banana', 'Cherry'];
const list = document.querySelector('#list');

fruits.forEach(function(fruit){
  const li = document.createElement('li');
  li.textContent = fruit;
  list.appendChild(li);
});</pre>
    <ul>
      <li><code>fruits.forEach(function(fruit){ ... })</code> — runs the function once for EACH item in the
        array, with <code>fruit</code> holding that item's value each time.</li>
      <li>Inside the loop, a brand new &lt;li&gt; is created, filled with that fruit's name, and appended — after
        the loop finishes, the &lt;ul&gt; contains exactly 3 &lt;li&gt; elements, one per array item.</li>
    </ul>
    <p>Now look at the second example, which builds each item's text FROM its position and value together:</p>
    <pre class="code-block">const scores = [85, 60, 92];
const list2 = document.querySelector('#list2');

scores.forEach(function(score, index){
  const li = document.createElement('li');
  li.textContent = 'Question ' + (index + 1) + ': ' + score;
  list2.appendChild(li);
});</pre>
    <ul>
      <li><code>forEach(function(score, index){ ... })</code> — forEach's callback receives the CURRENT item AND
        its position (starting at 0), letting you build text that combines both, like "Question 1: 85".</li>
    </ul>`,
  sandboxStarter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show fruits</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const fruits = ['Apple', 'Banana', 'Cherry'];
    const list = document.querySelector('#list');
    fruits.forEach(function(fruit){
      const li = document.createElement('li');
      li.textContent = fruit;
      list.appendChild(li);
    });
  });
</script>
`,
  sandboxStarter2:`<ul id="list2"></ul>
<button id="renderBtn2" type="button">Show scores</button>

<script>
  document.querySelector('#renderBtn2').addEventListener('click', function(){
    const scores = [85, 60, 92];
    const list2 = document.querySelector('#list2');
    scores.forEach(function(score, index){
      const li = document.createElement('li');
      li.textContent = 'Question ' + (index + 1) + ': ' + score;
      list2.appendChild(li);
    });
  });
</script>
`,
  exercises:[
    {
      title:'Render a list from an array',
      desc:`Add an empty &lt;ul id="list"&gt; and &lt;button type="button" id="renderBtn"&gt;. When clicked, loop
        over const items = ['Pen', 'Book', 'Ruler']; and append a new &lt;li&gt; for each one, so the list ends up
        with 3 items.`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show items</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const items = ['Pen', 'Book', 'Ruler'];
    // Loop over items, creating and appending an <li> for each one
  });
</script>
`,
      tests:[{type:'dom-count', selector:'#list li', min:3, label:'#list has 3 rendered items after clicking'}]
    },
    {
      title:'Render each item\'s actual text',
      desc:`Same pattern as above, but this time check that the rendered text is correct: the list should
        contain an &lt;li&gt; with the text "Ruler" specifically (not just any 3 items).`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show items</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const items = ['Pen', 'Book', 'Ruler'];
    // Loop over items, creating and appending an <li> for each one
  });
</script>
`,
      tests:[{type:'dom', selector:'#list', contains:'Ruler', label:'#list includes the text "Ruler" after clicking'}]
    },
    {
      title:'Highlight items that meet a condition',
      desc:`Loop over const words = ['cat', 'elephant', 'dog', 'giraffe'];. For each word, create an &lt;li&gt;
        with that word as its text — but if the word's length is greater than 5, ALSO give that &lt;li&gt;
        class="long" (li.className = 'long';).`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show words</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const words = ['cat', 'elephant', 'dog', 'giraffe'];
    // For each word, create an <li>; if word.length > 5, also set li.className = 'long'
  });
</script>
`,
      tests:[
        {type:'dom-count', selector:'#list li', min:4, label:'#list has all 4 rendered items'},
        {type:'dom-count', selector:'#list li.long', min:2, label:'Exactly the 2 long words ("elephant", "giraffe") get the .long class'}
      ]
    },
    {
      title:'Render text built from index and value',
      desc:`Loop over const prices = [10, 25, 8]; using forEach(function(price, index){...}). For each one,
        create an &lt;li&gt; with text "Item " + (index + 1) + ": $" + price — so the rendered list reads "Item
        1: $10", "Item 2: $25", "Item 3: $8".`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show prices</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const prices = [10, 25, 8];
    // Loop with forEach(function(price, index){...}), rendering "Item " + (index+1) + ": $" + price
  });
</script>
`,
      tests:[{type:'dom', selector:'#list', contains:'Item 2: $25', label:'#list includes "Item 2: $25" after clicking'}]
    },
    {
      title:'Render a count alongside the list',
      desc:`Loop over const items = ['Pen', 'Book', 'Ruler', 'Eraser']; rendering each as an &lt;li&gt;, AND set a
        &lt;p id="count"&gt;'s textContent to items.length + " items" (should read "4 items").`,
      starter:`<ul id="list"></ul>
<p id="count"></p>
<button id="renderBtn" type="button">Show items</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const items = ['Pen', 'Book', 'Ruler', 'Eraser'];
    // Render each item as an <li>, and set #count's textContent to items.length + " items"
  });
</script>
`,
      tests:[
        {type:'dom-count', selector:'#list li', min:4, label:'#list has all 4 rendered items'},
        {type:'dom', selector:'#count', contains:'4 items', label:'#count shows "4 items"'}
      ]
    },
    {
      title:'Append rendered items onto an existing list',
      desc:`&lt;ul id="list"&gt; already contains one &lt;li&gt;Existing item&lt;/li&gt;. When the button is
        clicked, loop over const items = ['New A', 'New B']; and APPEND (not replace) an &lt;li&gt; for each —
        the list should end up with 3 items total: the original one plus the 2 new ones.`,
      starter:`<ul id="list"><li>Existing item</li></ul>
<button id="renderBtn" type="button">Add more</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const items = ['New A', 'New B'];
    // Append an <li> for each item WITHOUT removing the existing one
  });
</script>
`,
      tests:[
        {type:'dom-count', selector:'#list li', min:3, label:'#list has 3 items total (1 existing + 2 new)'},
        {type:'dom', selector:'#list', contains:'Existing item', label:'The original item is still there, not replaced'}
      ]
    }
  ],
  quiz:[
    {
      q:'What does document.createElement(\'li\') do?',
      options:['Finds an existing <li> on the page','Creates a brand new, empty <li> that doesn\'t exist on the page yet','Deletes all <li> elements','Changes an <li>\'s CSS'],
      correct:1,
      explain:'createElement makes a new element in memory — it has no effect on the page until you append it somewhere.'
    },
    {
      q:'What does parent.appendChild(newElement) do?',
      options:['Deletes newElement','Attaches newElement as the last child of parent, making it visible on the page','Renames parent','Copies parent'],
      correct:1,
      explain:'appendChild is what actually attaches a created element to the visible page, inside the given parent.'
    },
    {
      q:'In fruits.forEach(function(fruit, index){...}), what does index represent?',
      options:['The fruit\'s name','The fruit\'s position in the array, starting at 0','A random number','The total array length'],
      correct:1,
      explain:'forEach\'s callback receives both the current item and its position (index), starting from 0.'
    },
    {
      q:'If <ul id="list"> already has 1 <li>, and you loop and appendChild 2 more without clearing it first, how many <li>s end up in the list?',
      options:['1','2','3','0'],
      correct:2,
      explain:'appendChild adds to what\'s already there rather than replacing it, so the original 1 plus the 2 new ones makes 3.'
    }
  ],
  sandboxStarter3:`<ul id="list3"></ul>
<button id="renderBtn3" type="button">Show grades</button>

<script>
  document.querySelector('#renderBtn3').addEventListener('click', function(){
    const grades = [92, 55, 78, 40];
    const list3 = document.querySelector('#list3');
    grades.forEach(function(grade){
      const li = document.createElement('li');
      li.textContent = 'Grade: ' + grade;
      if (grade < 60) {
        li.className = 'fail';
      }
      list3.appendChild(li);
    });
  });
</script>
`,
  stretchChallenge:{
    title:'Render only the items that pass a filter',
    desc:`Finished early? Loop over const scores = [45, 82, 90, 38, 67];, only creating and appending an
      &lt;li&gt; for scores that are 50 or above (82, 90, 67 — skipping 45 and 38), and set a &lt;p
      id="summary"&gt;'s textContent to "3 passing scores" using a counter you increase only for scores that
      pass — a wrong solution that renders all 5 would show "5 passing scores" instead.`,
    starter:`<ul id="list"></ul>
<p id="summary"></p>
<button id="renderBtn" type="button">Show passing scores</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const scores = [45, 82, 90, 38, 67];
    // Only render an <li> for scores >= 50, count how many passed, and set #summary to that count + " passing scores"
  });
</script>
`,
    tests:[
      {type:'dom', selector:'#summary', contains:'3 passing scores', label:'#summary correctly reports 3 passing scores, not 5'},
      {type:'dom', selector:'#list', contains:'82', label:'82 (a passing score) is rendered'}
    ]
  }
},
{
  key:'week8', num:8, title:'Accessibility Basics',
  scenarioTag:'Real world: not everyone browses the same way you do',
  scenario:`Some visitors use a screen reader instead of looking at the page. Some navigate with a keyboard
    instead of a mouse. A page built from meaningless &lt;div&gt;s everywhere is genuinely hard for both — a page
    built from the RIGHT tags, with real alt text and visible focus states, works for everyone automatically.`,
  objectives:[
    'Use semantic tags (nav, main, footer) instead of generic divs',
    'Use a real <button> for clickable actions, not a styled <div>',
    'Give every meaningful image real, descriptive alt text',
    'Add a visible focus style so keyboard users can see what\'s selected'
  ],
  conceptHtml:`
    <p>A &lt;div&gt; carries no meaning at all — a screen reader announces it as nothing special. Tags like
    <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> announce exactly what
    that section IS, letting a screen reader user jump straight to "the navigation" or "the main content"
    instead of hunting through generic wrapper after generic wrapper.</p>
    <p>Similarly, a clickable &lt;div&gt; with a click handler LOOKS clickable but isn't reachable by keyboard
    Tab, and a screen reader won't announce it as a button. A real <code>&lt;button&gt;</code> gets keyboard
    focus, Enter/Space activation, and correct screen-reader announcement automatically, for free.</p>
    <pre class="code-block">&lt;nav&gt;
  &lt;a href="index.html"&gt;Home&lt;/a&gt;
&lt;/nav&gt;
&lt;main&gt;
  &lt;h1&gt;Welcome&lt;/h1&gt;
  &lt;button type="button"&gt;Learn more&lt;/button&gt;
&lt;/main&gt;
&lt;footer&gt;
  &lt;p&gt;&amp;copy; My School&lt;/p&gt;
&lt;/footer&gt;</pre>
    <ul>
      <li><code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> — each wraps exactly
        the section its name describes, replacing what would otherwise be three meaningless
        &lt;div&gt;s.</li>
      <li><code>&lt;button type="button"&gt;</code> — a real button, reachable by keyboard and correctly
        announced, instead of a &lt;div&gt; styled to look like one.</li>
    </ul>
    <p>Now look at the second example, adding real alt text and a visible focus style:</p>
    <pre class="code-block">&lt;img src="team.jpg" alt="Five students working together at a table"&gt;

&lt;style&gt;
  button:focus {
    outline: 3px solid #4338ca;
  }
&lt;/style&gt;</pre>
    <ul>
      <li><code>alt="Five students working together at a table"</code> — describes what the image actually
        SHOWS, not just "image" or the filename — this is what a screen reader reads aloud instead of the
        picture.</li>
      <li><code>button:focus { outline: 3px solid #4338ca; }</code> — gives keyboard users (who Tab between
        elements instead of clicking) a clearly visible indicator of which element is currently selected.</li>
    </ul>`,
  sandboxStarter:`<nav>
  <a href="index.html">Home</a>
</nav>
<main>
  <h1>Welcome</h1>
  <button type="button">Learn more</button>
</main>
<footer>
  <p>&copy; My School</p>
</footer>
`,
  sandboxStarter2:`<img src="team.jpg" alt="Five students working together at a table">

<style>
  button:focus {
    outline: 3px solid #4338ca;
  }
</style>
<button type="button">Click me</button>
`,
  exercises:[
    {
      title:'Structure the page with semantic tags',
      desc:`Rebuild a page's structure using &lt;nav&gt;, &lt;main&gt;, and &lt;footer&gt; — one of each — instead
        of generic &lt;div&gt;s.`,
      starter:`<!-- Rebuild using <nav>, <main>, and <footer> instead of <div>s -->
`,
      tests:[
        {type:'dom-count', selector:'nav', min:1, label:'Page has a <nav>'},
        {type:'dom-count', selector:'main', min:1, label:'Page has a <main>'},
        {type:'dom-count', selector:'footer', min:1, label:'Page has a <footer>'}
      ]
    },
    {
      title:'Use a real button',
      desc:`Add a real &lt;button type="button"&gt;Subscribe&lt;/button&gt; — not a &lt;div&gt; styled to look
        like one — so it's reachable by keyboard automatically.`,
      starter:`<!-- Add a real <button type="button">Subscribe</button> -->
`,
      tests:[{type:'dom', selector:'button', contains:'Subscribe', label:'A real <button> with the text "Subscribe" exists'}]
    },
    {
      title:'Add a visible focus style',
      desc:`Give &lt;button&gt; a :focus rule with a visible outline (e.g. outline: 3px solid #4338ca;), so
        keyboard users can see which button is currently selected.`,
      starter:`<button type="button">Click me</button>
<!-- Add a <style> block: button:focus gets a visible outline -->
`,
      tests:[{type:'dom', selector:'style', contains:':focus', label:'Includes a :focus rule for keyboard visibility'}]
    },
    {
      key:'a11y-labelled',
      title:'Label an icon-only button',
      desc:`Add a &lt;button type="button" aria-label="Close"&gt;✕&lt;/button&gt; — since the ✕ symbol alone
        means nothing to a screen reader, aria-label gives it a real spoken name.`,
      starter:`<!-- Add a <button type="button" aria-label="Close">✕</button> -->
`,
      tests:[{type:'dom-attr', selector:'button', attr:'aria-label', notEmpty:true, label:'The icon-only button has an aria-label'}]
    },
    {
      title:'Write real alt text for two images',
      desc:`Add two &lt;img&gt; tags, each with alt text that actually describes what the image shows (not
        empty, not just "image").`,
      starter:`<!-- Add 2 <img> tags, each with real descriptive alt text -->
`,
      tests:[
        {type:'dom-count', selector:'img', min:2, label:'Page has at least 2 images'},
        {type:'dom-attr', selector:'img', attr:'alt', notEmpty:true, label:'The first image has non-empty alt text'}
      ]
    },
    {
      title:'Build an accessible page section',
      desc:`Combine everything: a &lt;nav&gt;, a &lt;main&gt; containing a real &lt;button type="button"&gt; with
        a :focus outline style, and an &lt;img&gt; with real alt text.`,
      starter:`<!-- Build: <nav>, <main> with a real focusable <button>, and an <img> with real alt text -->
`,
      tests:[
        {type:'dom-count', selector:'nav', min:1, label:'Page has a <nav>'},
        {type:'dom-count', selector:'main button', min:1, label:'<main> contains a real <button>'},
        {type:'dom', selector:'style', contains:':focus', label:'Includes a :focus rule'},
        {type:'dom-attr', selector:'img', attr:'alt', notEmpty:true, label:'The image has real alt text'}
      ]
    }
  ],
  quiz:[
    {
      q:'Why is <nav> better than a generic <div> for a navigation bar?',
      options:['<nav> looks different by default','<nav> announces its purpose to screen readers and other tools; <div> carries no meaning','<div> is not allowed in HTML5','There is no difference'],
      correct:1,
      explain:'Semantic tags describe what a section IS, which assistive technology can use directly — a <div> tells it nothing.'
    },
    {
      q:'Why use a real <button> instead of a <div> styled to look clickable?',
      options:['Buttons are always blue','A real <button> is reachable by Tab and announced correctly by screen readers automatically; a styled <div> is not','<div> is faster','There is no real difference'],
      correct:1,
      explain:'Keyboard reachability and correct announcement come for free with a real <button>, but need to be rebuilt by hand for a <div>.'
    },
    {
      q:'What should alt text on an image describe?',
      options:['The image\'s filename','What the image actually shows, in words','Nothing, it can be left empty for any image','The image\'s file size'],
      correct:1,
      explain:'Good alt text describes the image\'s actual content, since that\'s what a screen reader reads aloud in its place.'
    },
    {
      q:'What does aria-label="Close" do on an icon-only button showing "✕"?',
      options:['Changes the icon\'s color','Gives the button a real spoken name for screen readers, since the symbol alone has no meaning','Makes the button bigger','Removes the button'],
      correct:1,
      explain:'aria-label supplies an accessible name when the visible content (like a symbol) doesn\'t convey one on its own.'
    }
  ],
  sandboxStarter3:`<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
</nav>
<main>
  <h1>Photo Gallery</h1>
  <img src="photo1.jpg" alt="Sunset over the school playing field">
  <button type="button" aria-label="Close gallery">✕</button>
</main>
<footer>
  <p>&copy; My School</p>
</footer>

<style>
  button:focus {
    outline: 3px solid #4338ca;
  }
</style>
`,
  stretchChallenge:{
    title:'Fully label a form',
    desc:`Finished early? Add a &lt;label for="email"&gt;Email&lt;/label&gt; paired with an &lt;input id="email"
      type="email"&gt; (matching for/id values) — a properly paired label lets a screen reader announce "Email"
      when the input receives focus, and lets clicking the label itself focus the input.`,
    starter:`<!-- Add a <label for="email">Email</label> paired with <input id="email" type="email"> -->
`,
    tests:[
      {type:'dom-attr', selector:'label', attr:'for', notEmpty:true, label:'<label> has a for attribute'},
      {type:'dom-count', selector:'input#email', min:1, label:'An input with id="email" exists, matching the label\'s for'}
    ]
  }
},
{
  key:'week9', num:9, title:'Putting It Together: A Small Interactive App',
  scenarioTag:'Real world: a mini app, not just isolated tricks',
  scenario:`A "Favorites List" widget needs every skill from this level working together at once: a remembered
    array (Week 6), rendering that array as real elements (Week 7), and an accessible structure around it (Week
    8) — this week combines all three into one small, genuinely interactive feature.`,
  objectives:[
    'Add to a remembered array and re-render the full list from it',
    'Clear a list before rebuilding it, so rendering stays accurate',
    'Combine rendering with a live count of items',
    'Wrap an interactive widget in accessible, semantic structure'
  ],
  conceptHtml:`
    <p>Rendering "add one more item" the RIGHT way means re-rendering the WHOLE list from the remembered array
    every time, not just appending one new element — that way the displayed list always exactly matches what's
    actually remembered, however many times it's rebuilt.</p>
    <pre class="code-block">let tasks = ['Homework'];

function renderTasks(){
  const list = document.querySelector('#list');
  list.innerHTML = ''; // clear first, so rebuilding never duplicates
  tasks.forEach(function(task){
    const li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
  });
}

document.querySelector('#addBtn').addEventListener('click', function(){
  tasks.push('Chores');
  renderTasks();
});</pre>
    <ul>
      <li><code>list.innerHTML = '';</code> — empties the &lt;ul&gt; completely before the loop runs, so calling
        <code>renderTasks()</code> again never leaves old, stale &lt;li&gt;s behind.</li>
      <li>Wrapping the render logic in its own <code>function renderTasks(){ ... }</code> means it can be called
        from anywhere — here, right after <code>tasks.push(...)</code> — keeping the displayed list and the
        remembered array always in sync.</li>
    </ul>
    <p>Now look at the second example, adding a live count alongside the accessible structure:</p>
    <pre class="code-block">&lt;main&gt;
  &lt;ul id="list"&gt;&lt;/ul&gt;
  &lt;p id="count"&gt;&lt;/p&gt;
  &lt;button type="button" id="addBtn"&gt;Add Chores&lt;/button&gt;
&lt;/main&gt;</pre>
    <ul>
      <li>The whole widget lives inside a real <code>&lt;main&gt;</code>, and the action uses a real
        <code>&lt;button&gt;</code> — the same accessibility habits from Week 8, now applied to something that
        actually does something.</li>
    </ul>`,
  sandboxStarter:`<ul id="list"><li>Homework</li></ul>
<button id="addBtn" type="button">Add Chores</button>

<script>
  let tasks = ['Homework'];

  function renderTasks(){
    const list = document.querySelector('#list');
    list.innerHTML = '';
    tasks.forEach(function(task){
      const li = document.createElement('li');
      li.textContent = task;
      list.appendChild(li);
    });
  }

  document.querySelector('#addBtn').addEventListener('click', function(){
    tasks.push('Chores');
    renderTasks();
  });
</script>
`,
  sandboxStarter2:`<main>
  <ul id="list"><li>Homework</li></ul>
  <p id="count"></p>
  <button type="button" id="addBtn">Add Chores</button>
</main>

<script>
  let tasks = ['Homework'];

  function renderTasks(){
    const list = document.querySelector('#list');
    list.innerHTML = '';
    tasks.forEach(function(task){
      const li = document.createElement('li');
      li.textContent = task;
      list.appendChild(li);
    });
    document.querySelector('#count').textContent = tasks.length + ' tasks';
  }

  document.querySelector('#addBtn').addEventListener('click', function(){
    tasks.push('Chores');
    renderTasks();
  });
</script>
`,
  exercises:[
    {
      title:'Add to the array and re-render',
      desc:`Declare let tasks = ['Homework']; outside a click handler on &lt;button type="button" id="addBtn"&gt;.
        When clicked, push('Chores') onto tasks, then re-render &lt;ul id="list"&gt; from the whole array (clear
        it first with list.innerHTML = '';, then loop and append).`,
      starter:`<ul id="list"><li>Homework</li></ul>
<button id="addBtn" type="button">Add Chores</button>

<script>
  let tasks = ['Homework'];
  // Add a click handler: push('Chores'), clear #list, then re-render all of tasks
</script>
`,
      tests:[
        {type:'dom-count', selector:'#list li', min:2, label:'#list shows both tasks after clicking'},
        {type:'dom', selector:'#list', contains:'Chores', label:'#list includes the newly added "Chores"'}
      ]
    },
    {
      title:'Clear before rebuilding',
      desc:`&lt;ul id="list"&gt; already contains 3 STATIC &lt;li&gt;s typed directly in the HTML. Declare let
        tasks = ['Reading']; outside a click handler. When clicked, clear #list completely (list.innerHTML =
        '';), render ONLY from tasks, then set &lt;p id="count"&gt;'s textContent to
        list.children.length + " items shown" — should read "1 items shown" (a solution that forgets to clear
        first would incorrectly show "4 items shown", since the 3 stale items would still be there too).`,
      starter:`<ul id="list"><li>Old A</li><li>Old B</li><li>Old C</li></ul>
<p id="count"></p>
<button id="addBtn" type="button">Replace with tasks</button>

<script>
  let tasks = ['Reading'];
  // Add a click handler: clear #list completely, render ONLY tasks, then set #count to list.children.length + " items shown"
</script>
`,
      tests:[
        {type:'dom', selector:'#count', contains:'1 items shown', label:'#count shows "1 items shown" — the stale items were actually cleared'},
        {type:'dom', selector:'#list', contains:'Reading', label:'#list shows "Reading"'}
      ]
    },
    {
      title:'Wrap the widget in <main>',
      desc:`Build the same add-and-render pattern as before (tasks array, #addBtn, #list), but wrap the whole
        widget in a &lt;main&gt; element instead of leaving it loose at the top level.`,
      starter:`<!-- Build a <main> containing: a <ul id="list">, a <button type="button" id="addBtn">, and a click handler that adds 'Chores' to a remembered tasks array and re-renders #list -->
`,
      tests:[
        {type:'dom-count', selector:'main ul#list', min:1, label:'#list is inside a <main>'},
        {type:'dom-count', selector:'main button', min:1, label:'The button is inside <main> too'}
      ]
    },
    {
      title:'Show a live count with the list',
      desc:`Declare let tasks = ['Homework', 'Reading']; outside a click handler on &lt;button type="button"
        id="addBtn"&gt;. When clicked, push('Chores'), re-render #list from tasks, AND set &lt;p id="count"&gt;'s
        textContent to tasks.length + " tasks" (should read "3 tasks").`,
      starter:`<ul id="list"><li>Homework</li><li>Reading</li></ul>
<p id="count"></p>
<button id="addBtn" type="button">Add Chores</button>

<script>
  let tasks = ['Homework', 'Reading'];
  // Add a click handler: push('Chores'), re-render #list, and set #count to tasks.length + " tasks"
</script>
`,
      tests:[
        {type:'dom-count', selector:'#list li', min:3, label:'#list shows all 3 tasks'},
        {type:'dom', selector:'#count', contains:'3 tasks', label:'#count shows "3 tasks"'}
      ]
    },
    {
      title:'Use a real accessible button for the action',
      desc:`Build the tasks array + render pattern, but use a real &lt;button type="button" id="addBtn"&gt; (not
        a styled &lt;div&gt;) so the widget stays keyboard-accessible.`,
      starter:`<ul id="list"><li>Homework</li></ul>
<!-- Add a real <button type="button" id="addBtn">Add Chores</button> and a click handler that adds 'Chores' to a remembered array and re-renders #list -->

<script>
  let tasks = ['Homework'];
</script>
`,
      tests:[
        {type:'dom', selector:'button', contains:'Add', label:'A real <button> exists for the action'},
        {type:'dom-count', selector:'#list li', min:2, label:'#list shows both tasks after clicking'}
      ]
    },
    {
      title:'Build the complete mini widget',
      desc:`Combine everything: a &lt;main&gt; wrapping &lt;ul id="list"&gt;, &lt;p id="count"&gt;, and a real
        &lt;button type="button" id="addBtn"&gt;. Remember let tasks = ['Homework']; outside the handler; on
        click, push('Chores'), clear and re-render #list, and update #count to tasks.length + " tasks".`,
      starter:`<!-- Build the full widget: <main> wrapping <ul id="list">, <p id="count">, and a real <button id="addBtn"> -->
<!-- On click: push('Chores') onto a remembered tasks array, re-render #list, update #count -->

<script>
  let tasks = ['Homework'];
</script>
`,
      tests:[
        {type:'dom-count', selector:'main ul#list li', min:2, label:'#list (inside <main>) shows both tasks'},
        {type:'dom', selector:'#count', contains:'2 tasks', label:'#count shows "2 tasks"'},
        {type:'dom-count', selector:'main button', min:1, label:'A real <button> inside <main> triggers the action'}
      ]
    }
  ],
  quiz:[
    {
      q:'Why clear a list with innerHTML = \'\' before re-rendering it from an array?',
      options:['It\'s required by HTML','So old, stale items don\'t stay mixed in with the freshly rendered ones','It makes the array bigger','It has no real purpose'],
      correct:1,
      explain:'Without clearing first, each re-render would just keep appending on top of whatever was already there.'
    },
    {
      q:'Why wrap a render function\'s logic in its own named function, e.g. function renderTasks(){...}?',
      options:['It\'s slower','So it can be called again from anywhere (like right after pushing a new item) without repeating the code','It hides the code','It\'s required by JavaScript'],
      correct:1,
      explain:'A reusable function means "re-render the list" only needs to be written once, then called wherever it\'s needed.'
    },
    {
      q:'In this widget, why use a real <button> for #addBtn instead of a styled <div>?',
      options:['Buttons render faster','So the widget stays reachable and usable by keyboard, consistent with Week 8\'s accessibility habits','No real reason','<div> can\'t have an id'],
      correct:1,
      explain:'Real buttons come with keyboard accessibility built in — exactly the habit Week 8 introduced, now applied here.'
    },
    {
      q:'If tasks = [\'Homework\', \'Reading\'] and you push(\'Chores\') then re-render, how many <li>s should the list show?',
      options:['1','2','3','0'],
      correct:2,
      explain:'The array now has 3 items (the original 2 plus the new one), so a correct re-render shows all 3.'
    }
  ],
  sandboxStarter3:`<main>
  <ul id="list"><li>Homework</li></ul>
  <p id="count"></p>
  <button type="button" id="addBtn">Add Chores</button>
</main>

<style>
  button:focus {
    outline: 3px solid #4338ca;
  }
</style>

<script>
  let tasks = ['Homework'];

  function renderTasks(){
    const list = document.querySelector('#list');
    list.innerHTML = '';
    tasks.forEach(function(task){
      const li = document.createElement('li');
      li.textContent = task;
      list.appendChild(li);
    });
    document.querySelector('#count').textContent = tasks.length + ' tasks';
  }

  document.querySelector('#addBtn').addEventListener('click', function(){
    tasks.push('Chores');
    renderTasks();
  });
</script>
`,
  stretchChallenge:{
    title:'Add a remove-last-item button too',
    desc:`Finished early? Add a SECOND button, #removeBtn, that pops the last item off tasks (tasks.pop();) and
      re-renders #list AND updates a &lt;p id="count"&gt; to tasks.length + " items" — alongside the existing
      #addBtn that pushes a new item and does the same. Both buttons get auto-clicked once each when this is
      checked, in DOM order (add first, then remove) — starting from ['Homework', 'Reading'], adding 'Chores'
      then removing the last item should leave exactly 2 items, so #count should read "2 items" (a solution
      where #removeBtn doesn't actually work would incorrectly leave 3).`,
    starter:`<ul id="list"><li>Homework</li><li>Reading</li></ul>
<p id="count"></p>
<button id="addBtn" type="button">Add Chores</button>
<button id="removeBtn" type="button">Remove Last</button>

<script>
  let tasks = ['Homework', 'Reading'];
  function renderTasks(){
    const list = document.querySelector('#list');
    list.innerHTML = '';
    tasks.forEach(function(task){
      const li = document.createElement('li');
      li.textContent = task;
      list.appendChild(li);
    });
    document.querySelector('#count').textContent = tasks.length + ' items';
  }
  // Add click handlers: #addBtn pushes 'Chores' + re-renders; #removeBtn pops the last item + re-renders
</script>
`,
    tests:[
      {type:'dom', selector:'#count', contains:'2 items', label:'#count shows exactly "2 items" after adding then removing one'},
      {type:'dom', selector:'#list', contains:'Homework', label:'The original items are still there'}
    ]
  }
},
];

const WD_INTERMEDIATE_MP1 = {
  key:'mp1',
  title:'Mini Project 1 — Build an Interactive FAQ Page',
  intro:`Your school wants an FAQ page students can actually interact with. You'll build it in three stages,
    combining everything from Weeks 1-4: theming with CSS variables (Week 1), hover animation and striping with
    pseudo-classes (Weeks 2-3), and a JS-validated feedback form at the bottom (Week 4).`,
  newTrick:`Combining a themed, animated list with a genuinely interactive form on the same page — every earlier
    mini-project practiced one layer at a time; this one asks for CSS variables, transitions, selectors, and
    JavaScript all working together.`,
  stages:[
    {
      key:'a', title:'Stage A — Theme the FAQ list with variables',
      desc:`Build a &lt;ul class="faq"&gt; with at least 3 &lt;li&gt; questions. Define --faq-bg and --faq-text
        variables in :root, and use both on the .faq list (background-color and color) — the variables pattern
        from Week 1.`,
      starter:`<!-- Build a .faq <ul> with 3+ <li> questions, and a <style> block defining --faq-bg/--faq-text used on .faq -->
`,
      tests:[
        {type:'dom-count', selector:'.faq li', min:3, label:'.faq has at least 3 questions'},
        {type:'dom', selector:'style', contains:'var(', label:'Uses var() rather than hardcoded values'},
        {type:'computed-style', selector:'.faq', prop:'backgroundColor', notEqual:'rgba(0, 0, 0, 0)', label:'.faq uses the --faq-bg variable'}
      ]
    },
    {
      key:'b', title:'Stage B — Animate and stripe the list',
      desc:`Give .faq li a transition and a :hover rule that changes its background-color (Week 2), AND use
        li:nth-child(odd) to give alternating rows a subtle background stripe (Week 3).`,
      starter:`<style>
  :root { --faq-bg: #eef0fc; --faq-text: #211f3d; }
  .faq { background-color: var(--faq-bg); color: var(--faq-text); padding: 10px; }
</style>
<ul class="faq">
  <li>What time does school start?</li>
  <li>Where is the library?</li>
  <li>Who do I ask about lost property?</li>
</ul>
<!-- Add .faq li transition + :hover, and li:nth-child(odd) striping -->
`,
      tests:[
        {type:'computed-style', selector:'.faq li', prop:'transitionDuration', notEqual:'0s', label:'.faq li has a transition set'},
        {type:'dom', selector:'style', contains:':hover', label:'Includes a :hover rule'},
        {type:'dom', selector:'style', contains:'nth-child', label:'Uses :nth-child for striping'}
      ]
    },
    {
      key:'c', title:'Stage C — Add a validated feedback form',
      desc:`Below the FAQ list, add an &lt;input id="feedback"&gt;, a &lt;button type="button" id="sendBtn"&gt;,
        and a hidden &lt;p id="error"&gt;. When #sendBtn is clicked, if #feedback is empty, show #error — the
        click-validation pattern from Week 4.`,
      starter:`<style>
  :root { --faq-bg: #eef0fc; --faq-text: #211f3d; }
  .faq { background-color: var(--faq-bg); color: var(--faq-text); padding: 10px; }
  .faq li { transition: background-color 0.3s; }
  .faq li:hover { background-color: #d6d8f7; }
  .faq li:nth-child(odd) { background-color: #f8f8ff; }
</style>
<ul class="faq">
  <li>What time does school start?</li>
  <li>Where is the library?</li>
  <li>Who do I ask about lost property?</li>
</ul>
<input id="feedback" type="text">
<button id="sendBtn" type="button">Send Feedback</button>
<p id="error" style="display:none;">Please write some feedback first</p>
<!-- Add a click handler on #sendBtn: if #feedback is empty, show #error -->
`,
      tests:[
        {type:'computed-style', selector:'#error', prop:'display', notEqual:'none', label:'#error shows because #feedback was left empty'}
      ]
    }
  ]
};

const WD_INTERMEDIATE_MP2 = {
  key:'mp2',
  title:'Mini Project 2 — Build a Class To-Do List App',
  intro:`Time to build a genuinely interactive app: a class to-do list. Across three doors you'll structure it
    accessibly, wire up adding tasks with remembered state and live rendering, then finish with a remove feature
    and keyboard-friendly focus styling — every skill from Weeks 1-9, combined into one small real app.`,
  fixtureNote:`All three doors build on this same page skeleton — a semantic layout with an empty task list, an
    input for new tasks, and an Add button:`,
  fixtureCode:`<main>
  <h1>Class To-Do List</h1>
  <ul id="list"><li>Bring permission slip</li></ul>
  <p id="count"></p>
  <input id="taskInput" type="text" placeholder="New task">
  <button id="addBtn" type="button">Add Task</button>
</main>`,
  doors:[
    {
      key:'a', title:'Door 1 — Structure the app accessibly',
      desc:`Build the fixture structure above: a &lt;main&gt; wrapping an &lt;h1&gt;, a &lt;ul id="list"&gt; with
        the one starting task, a &lt;p id="count"&gt;, an &lt;input id="taskInput"&gt;, and a real &lt;button
        type="button" id="addBtn"&gt; — using semantic structure and a real button from Week 8, not a styled
        &lt;div&gt;.`,
      starter:`<!-- Build: <main> wrapping <h1>, <ul id="list"> with 1 starting task, <p id="count">, <input id="taskInput">, and a real <button type="button" id="addBtn"> -->
`,
      tests:[
        {type:'dom-count', selector:'main ul#list li', min:1, label:'#list (inside <main>) has the starting task'},
        {type:'dom-count', selector:'main input#taskInput', min:1, label:'#taskInput is inside <main>'},
        {type:'dom', selector:'main button', contains:'Add', label:'A real <button> for adding tasks is inside <main>'}
      ]
    },
    {
      key:'b', title:'Door 2 — Remember tasks and render them',
      desc:`Declare let tasks = ['Bring permission slip']; outside a click handler. When #addBtn is clicked, push
        the CURRENT value of #taskInput onto tasks, clear #list and re-render it from tasks, and set #count to
        tasks.length + " tasks" — the remembered-array-plus-render pattern from Weeks 6-7.`,
      starter:`<main>
  <h1>Class To-Do List</h1>
  <ul id="list"><li>Bring permission slip</li></ul>
  <p id="count"></p>
  <input id="taskInput" type="text" value="Return library book">
  <button id="addBtn" type="button">Add Task</button>
</main>
<script>
  let tasks = ['Bring permission slip'];
  // Add a click handler on #addBtn: push #taskInput's value onto tasks, clear+re-render #list, update #count
</script>
`,
      tests:[
        {type:'dom-count', selector:'#list li', min:2, label:'#list shows both tasks after adding'},
        {type:'dom', selector:'#list', contains:'Return library book', label:'The newly added task appears'},
        {type:'dom', selector:'#count', contains:'2 tasks', label:'#count shows "2 tasks"'}
      ]
    },
    {
      key:'c', title:'Door 3 — Add removal and focus styling',
      desc:`Add a second button, &lt;button type="button" id="removeBtn"&gt;Remove Last&lt;/button&gt;, that pops
        the last task and re-renders (updating #count too). Also add a button:focus rule with a visible outline
        (Week 8's accessibility habit) so keyboard users can see which button is selected. Both buttons are
        auto-clicked once each, in DOM order (add first, then remove) — starting from 1 task, adding one (2
        total) then removing one should leave exactly 1 task again (a removeBtn that doesn't actually remove
        anything would incorrectly leave the count at 2).`,
      starter:`<style>
  button:focus { }
</style>
<main>
  <h1>Class To-Do List</h1>
  <ul id="list"><li>Bring permission slip</li></ul>
  <p id="count"></p>
  <input id="taskInput" type="text" value="Return library book">
  <button id="addBtn" type="button">Add Task</button>
  <button id="removeBtn" type="button">Remove Last</button>
</main>
<script>
  let tasks = ['Bring permission slip'];
  function renderTasks(){
    const list = document.querySelector('#list');
    list.innerHTML = '';
    tasks.forEach(function(t){
      const li = document.createElement('li');
      li.textContent = t;
      list.appendChild(li);
    });
    document.querySelector('#count').textContent = tasks.length + ' tasks';
  }
  document.querySelector('#addBtn').addEventListener('click', function(){
    tasks.push(document.querySelector('#taskInput').value);
    renderTasks();
  });
  // Add a click handler on #removeBtn: pop the last task, then call renderTasks()
  // Also give button:focus a visible outline in the <style> block above
</script>
`,
      tests:[
        {type:'dom', selector:'#count', contains:'1 tasks', label:'#count shows exactly "1 tasks" after adding then removing one (a no-op removeBtn would incorrectly leave it at 2)'},
        {type:'dom', selector:'style', contains:':focus', label:'Includes a button:focus rule for keyboard visibility'}
      ]
    }
  ]
};

/* =========================================================================
   Web Design Academy — Advanced level
   Focus: working with structured data (arrays of objects), filtering/sorting,
   client-side routing, multi-step forms, debugging, custom events, theming,
   and a 2-week capstone.
   ========================================================================= */

const WD_ADVANCED_WEEKS = [
{
  key:'week1', num:1, title:'Working with Data: Arrays of Objects',
  scenarioTag:'Real world: the shape data actually arrives in',
  scenario:`Real sites don't hardcode their content — a shop's product list, a school's staff directory, a
    gallery's photos all arrive as data: an array where each item is an OBJECT with several properties, not just
    a single string. Learning to read and render that shape is the real foundation every dynamic page is built
    on.`,
  objectives:[
    'Understand an array of objects — the shape real data usually arrives in',
    'Access a property on each object with dot notation',
    'Render text built from multiple properties per item',
    'Know that fetch() delivers this exact same shape in a real app'
  ],
  conceptHtml:`
    <p>So far, arrays have held simple values: <code>['Apple', 'Banana']</code>. Real data is usually an array of
    <strong>objects</strong> instead — each item has several named properties: <code>{name: 'Pen', price: 2}</code>.
    Access a property with dot notation: <code>item.name</code>, <code>item.price</code>.</p>
    <pre class="code-block">const products = [
  { name: 'Pen', price: 2 },
  { name: 'Notebook', price: 5 }
];

products.forEach(function(product){
  const li = document.createElement('li');
  li.textContent = product.name + ': $' + product.price;
  document.querySelector('#list').appendChild(li);
});</pre>
    <ul>
      <li><code>{ name: 'Pen', price: 2 }</code> — an object literal, holding two named properties. Unlike a
        plain array item, you access each piece of information by NAME (<code>.name</code>, <code>.price</code>),
        not by guessing position.</li>
      <li><code>product.name + ': $' + product.price</code> — combines two DIFFERENT properties of the same item
        into one rendered line — "Pen: $2".</li>
    </ul>
    <p><strong>A note on real data</strong>: in a real app, this array would usually come from
    <code>fetch('/api/products').then(res => res.json())</code> — a real network request. This practice area's
    sandbox can't check code that depends on a network response arriving (for the same safety reasons covered
    earlier), so these exercises work with the array directly — exactly the shape you'd have once a real
    <code>fetch()</code> finished, just skipping the waiting.</p>
    <p>Now look at the second example, where each object also carries a boolean:</p>
    <pre class="code-block">const products = [
  { name: 'Pen', price: 2, inStock: true },
  { name: 'Notebook', price: 5, inStock: false }
];

products.forEach(function(product){
  const li = document.createElement('li');
  li.textContent = product.name;
  if (!product.inStock) {
    li.className = 'out-of-stock';
  }
  document.querySelector('#list').appendChild(li);
});</pre>
    <ul>
      <li><code>inStock: false</code> — a boolean property, used to decide something (here, whether to add a
        class) rather than being displayed directly as text.</li>
    </ul>`,
  sandboxStarter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show products</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [
      { name: 'Pen', price: 2 },
      { name: 'Notebook', price: 5 }
    ];
    const list = document.querySelector('#list');
    products.forEach(function(product){
      const li = document.createElement('li');
      li.textContent = product.name + ': $' + product.price;
      list.appendChild(li);
    });
  });
</script>
`,
  sandboxStarter2:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show products</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [
      { name: 'Pen', price: 2, inStock: true },
      { name: 'Notebook', price: 5, inStock: false }
    ];
    const list = document.querySelector('#list');
    products.forEach(function(product){
      const li = document.createElement('li');
      li.textContent = product.name;
      if (!product.inStock) {
        li.className = 'out-of-stock';
      }
      list.appendChild(li);
    });
  });
</script>
`,
  exercises:[
    {
      title:'Render name and price together',
      desc:`Loop over const products = [{name:'Pen', price:2}, {name:'Notebook', price:5}];. For each one,
        create an &lt;li&gt; with text product.name + ": $" + product.price, so the list reads "Pen: $2",
        "Notebook: $5".`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show products</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Pen', price:2}, {name:'Notebook', price:5}];
    // Render each product as "name: $price"
  });
</script>
`,
      tests:[{type:'dom', selector:'#list', contains:'Notebook: $5', label:'#list includes "Notebook: $5"'}]
    },
    {
      title:'Include a third property',
      desc:`Loop over const products = [{name:'Pen', price:2, qty:10}, {name:'Notebook', price:5, qty:3}];. For
        each one, render "name: $price (qty in stock)" so the list reads "Pen: $2 (10 in stock)".`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show products</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Pen', price:2, qty:10}, {name:'Notebook', price:5, qty:3}];
    // Render each as "name: $price (qty in stock)"
  });
</script>
`,
      tests:[{type:'dom', selector:'#list', contains:'Pen: $2 (10 in stock)', label:'#list includes "Pen: $2 (10 in stock)"'}]
    },
    {
      title:'Compute a value from two properties',
      desc:`Loop over const products = [{name:'Pen', price:2, qty:10}, {name:'Notebook', price:5, qty:3}];. For
        each one, compute a total (price * qty) and render "name: $total total value", so the list includes
        "Pen: $20 total value".`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show products</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Pen', price:2, qty:10}, {name:'Notebook', price:5, qty:3}];
    // For each, compute price * qty and render "name: $total total value"
  });
</script>
`,
      tests:[{type:'dom', selector:'#list', contains:'Pen: $20 total value', label:'#list includes "Pen: $20 total value" (2 * 10)'}]
    },
    {
      title:'Sum a property across the whole array',
      desc:`Loop over const products = [{name:'Pen', price:2}, {name:'Notebook', price:5}, {name:'Ruler',
        price:3}];, adding up ALL the prices into a running total, then set &lt;p id="total"&gt;'s textContent to
        "Total: $" + total (should read "Total: $10").`,
      starter:`<p id="total"></p>
<button id="renderBtn" type="button">Show total</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Pen', price:2}, {name:'Notebook', price:5}, {name:'Ruler', price:3}];
    // Add up all the prices, then set #total to "Total: $" + total
  });
</script>
`,
      tests:[{type:'dom', selector:'#total', contains:'Total: $10', label:'#total shows "Total: $10"'}]
    },
    {
      title:'Mark out-of-stock items',
      desc:`Loop over const products = [{name:'Pen', inStock:true}, {name:'Notebook', inStock:false}];. Render
        each as an &lt;li&gt; with its name — but if inStock is false, ALSO set li.className = 'out-of-stock';.`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show products</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Pen', inStock:true}, {name:'Notebook', inStock:false}];
    // Render each; if !inStock, set li.className = 'out-of-stock'
  });
</script>
`,
      tests:[
        {type:'dom-count', selector:'#list li', min:2, label:'#list shows both products'},
        {type:'dom-count', selector:'#list li.out-of-stock', min:1, label:'Exactly the out-of-stock item ("Notebook") gets the class'}
      ]
    },
    {
      title:'Build the complete product list',
      desc:`Combine everything: loop over const products = [{name:'Pen', price:2, qty:10, inStock:true},
        {name:'Notebook', price:5, qty:0, inStock:false}];. Render each as "name: $price" text, mark
        out-of-stock items with class 'out-of-stock', AND set &lt;p id="total"&gt; to the sum of price*qty across
        all products (should read "Total value: $20", since Pen alone contributes 2*10=20 and Notebook
        contributes 5*0=0).`,
      starter:`<ul id="list"></ul>
<p id="total"></p>
<button id="renderBtn" type="button">Show products</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Pen', price:2, qty:10, inStock:true}, {name:'Notebook', price:5, qty:0, inStock:false}];
    // Render "name: $price", mark out-of-stock items, and set #total to the summed price*qty as "Total value: $X"
  });
</script>
`,
      tests:[
        {type:'dom-count', selector:'#list li.out-of-stock', min:1, label:'The out-of-stock product is marked'},
        {type:'dom', selector:'#total', contains:'Total value: $20', label:'#total shows "Total value: $20"'}
      ]
    }
  ],
  quiz:[
    {
      q:'What is { name: "Pen", price: 2 }?',
      options:['An array','An object literal with two named properties','A function','A CSS rule'],
      correct:1,
      explain:'Curly braces with name:value pairs create an object — a single item with multiple named properties.'
    },
    {
      q:'How do you access the price property of an object stored in the variable product?',
      options:['product[price]','product.price','product->price','price(product)'],
      correct:1,
      explain:'Dot notation (object.propertyName) is the standard way to read a property from an object.'
    },
    {
      q:'In a real app, where would an array of objects like this usually come from?',
      options:['Always typed by hand','Often a fetch() call to an API, arriving as this same array-of-objects shape','CSS files','It\'s impossible to get real data this way'],
      correct:1,
      explain:'fetch().then(res => res.json()) commonly returns exactly this shape — an array of objects.'
    },
    {
      q:'Why does this week\'s practice area skip actually calling fetch()?',
      options:['fetch() doesn\'t exist','The sandbox can\'t reliably check code that depends on a network response arriving, so exercises work with the resulting data directly instead','fetch() is deprecated','No real reason'],
      correct:1,
      explain:'The practice area evaluates your code immediately, before any real network response could arrive — so exercises use the data fetch() WOULD deliver, directly.'
    }
  ],
  sandboxStarter3:`<ul id="list"></ul>
<p id="total"></p>
<button id="renderBtn" type="button">Show products</button>

<script>
  // In a real app: fetch('/api/products').then(res => res.json()).then(products => { ...render... });
  // Here, we already have the data products WOULD deliver:
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [
      { name: 'Pen', price: 2, qty: 10 },
      { name: 'Notebook', price: 5, qty: 3 }
    ];
    let totalValue = 0;
    const list = document.querySelector('#list');
    products.forEach(function(product){
      const li = document.createElement('li');
      li.textContent = product.name + ': $' + product.price;
      list.appendChild(li);
      totalValue += product.price * product.qty;
    });
    document.querySelector('#total').textContent = 'Total value: $' + totalValue;
  });
</script>
`,
  stretchChallenge:{
    title:'Find the most expensive item',
    desc:`Finished early? Loop over const products = [{name:'Pen', price:2}, {name:'Notebook', price:5},
      {name:'Bag', price:15}];, tracking the item with the HIGHEST price as you go, then set &lt;p
      id="priciest"&gt;'s textContent to "Priciest: " + name (should read "Priciest: Bag").`,
    starter:`<p id="priciest"></p>
<button id="renderBtn" type="button">Find priciest</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Pen', price:2}, {name:'Notebook', price:5}, {name:'Bag', price:15}];
    // Track the item with the highest price, then set #priciest to "Priciest: " + its name
  });
</script>
`,
    tests:[
      {type:'dom', selector:'#priciest', contains:'Priciest: Bag', label:'#priciest correctly identifies "Bag" as the most expensive'}
    ]
  }
},
{
  key:'week2', num:2, title:'Filtering and Sorting Rendered Data',
  scenarioTag:'Real world: showing a chosen subset, in a chosen order',
  scenario:`A shop page doesn't dump every product in whatever order they happen to be stored — it shows what's
    actually in stock, sorted cheapest-first or newest-first. Filtering and sorting the array BEFORE rendering it
    is what makes that possible, and it's exactly what a real product listing does under the hood.`,
  objectives:[
    'Filter an array down to only the items that match a condition',
    'Sort an array numerically with a comparator function',
    'Understand why sort needs a comparator for numbers',
    'Combine filtering and sorting before rendering'
  ],
  conceptHtml:`
    <p><code>.filter(callback)</code> returns a NEW array containing only the items where the callback returns
    true — the original array is untouched. <code>products.filter(function(p){ return p.inStock; })</code> keeps
    only in-stock products.</p>
    <p><code>.sort(comparator)</code> reorders an array. For NUMBERS, you must pass a comparator function —
    <code>products.sort(function(a, b){ return a.price - b.price; })</code> sorts ascending by price. Without a
    comparator, <code>.sort()</code> compares everything as TEXT, which gives wrong results for numbers (e.g. 100
    would sort before 20).</p>
    <pre class="code-block">const products = [
  { name: 'Bag', price: 15, inStock: true },
  { name: 'Pen', price: 2, inStock: false },
  { name: 'Notebook', price: 5, inStock: true }
];

const inStockOnly = products.filter(function(p){ return p.inStock; });
inStockOnly.forEach(function(p){
  const li = document.createElement('li');
  li.textContent = p.name;
  document.querySelector('#list').appendChild(li);
});</pre>
    <ul>
      <li><code>products.filter(function(p){ return p.inStock; })</code> — keeps only Bag and Notebook (both
        <code>inStock: true</code>), dropping Pen entirely. The result is stored in a NEW array,
        <code>inStockOnly</code>.</li>
      <li>Rendering loops over <code>inStockOnly</code>, not the original <code>products</code> — so Pen never
        appears on the page at all.</li>
    </ul>
    <p>Now look at the second example, sorting by price:</p>
    <pre class="code-block">const sorted = products.slice().sort(function(a, b){ return a.price - b.price; });
sorted.forEach(function(p){
  const li = document.createElement('li');
  li.textContent = p.name + ': $' + p.price;
  document.querySelector('#list').appendChild(li);
});</pre>
    <ul>
      <li><code>.slice()</code> before <code>.sort()</code> makes a COPY of the array first — <code>.sort()</code>
        reorders the array it's called on IN PLACE, so copying first avoids silently reordering the original
        <code>products</code> array too.</li>
      <li><code>function(a, b){ return a.price - b.price; }</code> — if this returns a negative number, a comes
        first; positive, b comes first. Subtracting prices gives exactly that: cheaper items sort earlier.</li>
    </ul>`,
  sandboxStarter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show in-stock items</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [
      { name: 'Bag', price: 15, inStock: true },
      { name: 'Pen', price: 2, inStock: false },
      { name: 'Notebook', price: 5, inStock: true }
    ];
    const inStockOnly = products.filter(function(p){ return p.inStock; });
    const list = document.querySelector('#list');
    inStockOnly.forEach(function(p){
      const li = document.createElement('li');
      li.textContent = p.name;
      list.appendChild(li);
    });
  });
</script>
`,
  sandboxStarter2:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show sorted by price</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [
      { name: 'Bag', price: 15 },
      { name: 'Pen', price: 2 },
      { name: 'Notebook', price: 5 }
    ];
    const sorted = products.slice().sort(function(a, b){ return a.price - b.price; });
    const list = document.querySelector('#list');
    sorted.forEach(function(p){
      const li = document.createElement('li');
      li.textContent = p.name + ': $' + p.price;
      list.appendChild(li);
    });
  });
</script>
`,
  exercises:[
    {
      title:'Filter to only in-stock items',
      desc:`Loop over const products = [{name:'Bag', inStock:true}, {name:'Pen', inStock:false}, {name:'Notebook',
        inStock:true}];, but first use .filter() to keep only inStock:true items, then render just those.`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show in-stock</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Bag', inStock:true}, {name:'Pen', inStock:false}, {name:'Notebook', inStock:true}];
    // Filter to inStock:true only, then render each remaining item's name
  });
</script>
`,
      tests:[
        {type:'dom-count', selector:'#list li', min:2, label:'#list shows the 2 in-stock items'},
        {type:'dom', selector:'#list', contains:'BagNotebook', label:'Only Bag and Notebook appear, adjacent, with Pen filtered out'}
      ]
    },
    {
      title:'Sort by price, cheapest first',
      desc:`Loop over const products = [{name:'Bag', price:15}, {name:'Pen', price:2}, {name:'Notebook',
        price:5}];. Sort by price ascending (cheapest first) BEFORE rendering, so the list reads Pen, then
        Notebook, then Bag.`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show sorted</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Bag', price:15}, {name:'Pen', price:2}, {name:'Notebook', price:5}];
    // Sort by price ascending, then render each name in that order
  });
</script>
`,
      tests:[{type:'dom', selector:'#list', contains:'PenNotebookBag', label:'Items appear in price order: Pen, then Notebook, then Bag'}]
    },
    {
      title:'Sort by price, most expensive first',
      desc:`Loop over const products = [{name:'Pen', price:2}, {name:'Bag', price:15}, {name:'Notebook',
        price:5}];. Sort by price DESCENDING (most expensive first) — swap the comparator's subtraction order —
        so the list reads Bag, then Notebook, then Pen.`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show sorted</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Pen', price:2}, {name:'Bag', price:15}, {name:'Notebook', price:5}];
    // Sort by price DESCENDING, then render each name in that order
  });
</script>
`,
      tests:[{type:'dom', selector:'#list', contains:'BagNotebookPen', label:'Items appear highest-to-lowest: Bag, then Notebook, then Pen'}]
    },
    {
      title:'Filter, then sort',
      desc:`Loop over const products = [{name:'Bag', price:15, inStock:true}, {name:'Pen', price:2,
        inStock:false}, {name:'Notebook', price:5, inStock:true}, {name:'Ruler', price:1, inStock:true}];. First
        filter to inStock:true only, THEN sort what's left by price ascending — the list should read Ruler,
        Notebook, Bag (Pen is filtered out entirely, so it never affects the order).`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show filtered and sorted</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Bag', price:15, inStock:true}, {name:'Pen', price:2, inStock:false}, {name:'Notebook', price:5, inStock:true}, {name:'Ruler', price:1, inStock:true}];
    // Filter to inStock:true, then sort what's left by price ascending
  });
</script>
`,
      tests:[{type:'dom', selector:'#list', contains:'RulerNotebookBag', label:'In-stock items appear cheapest-first: Ruler, Notebook, Bag (Pen excluded)'}]
    },
    {
      title:'Filter by a price threshold',
      desc:`Loop over const products = [{name:'Pen', price:2}, {name:'Bag', price:15}, {name:'Notebook',
        price:5}];, using .filter() to keep only items with price less than 10, then render just those (Pen and
        Notebook, not Bag).`,
      starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show affordable items</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Pen', price:2}, {name:'Bag', price:15}, {name:'Notebook', price:5}];
    // Filter to price < 10, then render each remaining item's name
  });
</script>
`,
      tests:[
        {type:'dom-count', selector:'#list li', min:2, label:'#list shows the 2 affordable items'},
        {type:'dom', selector:'#list', contains:'PenNotebook', label:'Only Pen and Notebook appear (both under $10), adjacent — a solution that forgot to filter would show Bag sitting between them instead'}
      ]
    },
    {
      title:'Filter, sort, and count the results',
      desc:`Loop over const products = [{name:'Bag', price:15, inStock:true}, {name:'Pen', price:2,
        inStock:false}, {name:'Notebook', price:5, inStock:true}, {name:'Ruler', price:1, inStock:true}];. Filter
        to inStock:true, sort by price ascending, render the names (Ruler, Notebook, Bag), AND set &lt;p
        id="count"&gt; to "Showing 3 items" (the count AFTER filtering, not the original 4).`,
      starter:`<ul id="list"></ul>
<p id="count"></p>
<button id="renderBtn" type="button">Show results</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Bag', price:15, inStock:true}, {name:'Pen', price:2, inStock:false}, {name:'Notebook', price:5, inStock:true}, {name:'Ruler', price:1, inStock:true}];
    // Filter to inStock:true, sort by price ascending, render names, and set #count to "Showing " + count + " items"
  });
</script>
`,
      tests:[
        {type:'dom', selector:'#list', contains:'RulerNotebookBag', label:'In-stock items appear cheapest-first'},
        {type:'dom', selector:'#count', contains:'Showing 3 items', label:'#count reports the FILTERED count (3), not the original 4'}
      ]
    }
  ],
  quiz:[
    {
      q:'What does products.filter(function(p){ return p.inStock; }) return?',
      options:['The original array, modified','A brand new array containing only items where the callback returned true','A single item','Nothing, filter has no return value'],
      correct:1,
      explain:'.filter() always builds and returns a new array, leaving the original untouched.'
    },
    {
      q:'Why does .sort() need a comparator function when sorting numbers?',
      options:['It doesn\'t, numbers always sort correctly','Without one, .sort() compares items as TEXT, giving wrong results like "100" sorting before "20"','Comparators make sorting faster','JavaScript requires it for arrays longer than 2 items'],
      correct:1,
      explain:'Default sort compares as strings; a comparator function like (a,b) => a.price - b.price is needed for correct numeric order.'
    },
    {
      q:'Why call .slice() before .sort() in const sorted = products.slice().sort(...)?',
      options:['.slice() is required syntax','.sort() reorders in place, so .slice() makes a copy first to avoid changing the original array','.slice() makes sorting faster','There\'s no real reason'],
      correct:1,
      explain:'.sort() mutates the array it\'s called on — copying first with .slice() protects the original from being silently reordered.'
    },
    {
      q:'If you filter an array down from 4 items to 3, then want to display the new count, which number should you use?',
      options:['The original length (4)','The length of the array AFTER filtering (3)','Always 0','It doesn\'t matter'],
      correct:1,
      explain:'The count should reflect what\'s actually being shown — the filtered array\'s length, not the original.'
    }
  ],
  sandboxStarter3:`<ul id="list"></ul>
<p id="count"></p>
<button id="renderBtn" type="button">Show affordable in-stock items</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [
      { name: 'Bag', price: 15, inStock: true },
      { name: 'Pen', price: 2, inStock: false },
      { name: 'Notebook', price: 5, inStock: true },
      { name: 'Ruler', price: 1, inStock: true }
    ];
    const affordable = products.filter(function(p){ return p.inStock && p.price < 10; });
    const sorted = affordable.slice().sort(function(a, b){ return a.price - b.price; });
    const list = document.querySelector('#list');
    sorted.forEach(function(p){
      const li = document.createElement('li');
      li.textContent = p.name + ': $' + p.price;
      list.appendChild(li);
    });
    document.querySelector('#count').textContent = 'Showing ' + sorted.length + ' items';
  });
</script>
`,
  stretchChallenge:{
    title:'Sort alphabetically by name',
    desc:`Finished early? Loop over const products = [{name:'Notebook'}, {name:'Bag'}, {name:'Pen'}];, sorting
      alphabetically by name — for strings, .sort() actually works correctly WITHOUT a numeric comparator, but you
      still need to pass a comparator function that returns a.name.localeCompare(b.name) for reliable results.
      Render the names in alphabetical order: Bag, Notebook, Pen.`,
    starter:`<ul id="list"></ul>
<button id="renderBtn" type="button">Show alphabetically</button>

<script>
  document.querySelector('#renderBtn').addEventListener('click', function(){
    const products = [{name:'Notebook'}, {name:'Bag'}, {name:'Pen'}];
    // Sort alphabetically by name using a.name.localeCompare(b.name), then render
  });
</script>
`,
    tests:[
      {type:'dom', selector:'#list', contains:'BagNotebookPen', label:'Items appear alphabetically: Bag, Notebook, Pen'}
    ]
  }
},
{
  key:'week3', num:3, title:'Show/Hide Sections: Simple Client-Side Routing',
  scenarioTag:'Real world: switching pages without ever reloading',
  scenario:`A single-page app never actually navigates to a new file — it just shows a different SECTION of the
    same page and hides the rest, giving the feel of separate pages without a real page reload. This is the same
    idea real client-side routers automate, built here by hand with plain show/hide logic.`,
  objectives:[
    'Show one section while hiding others',
    'Switch which section is visible based on which button was clicked',
    'Mark the corresponding nav button as active to match the visible section',
    'Understand this is the core idea behind client-side routing'
  ],
  conceptHtml:`
    <p>The core trick: keep ALL sections in the HTML at once, but only one visible at a time
    (<code>display: block</code>), with the rest hidden (<code>display: none</code>). Clicking a nav button hides
    every section, then shows just the one that button corresponds to.</p>
    <pre class="code-block">function showSection(id){
  document.querySelectorAll('section').forEach(function(s){
    s.style.display = 'none';
  });
  document.querySelector('#' + id).style.display = 'block';
}

document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });</pre>
    <ul>
      <li><code>document.querySelectorAll('section').forEach(...)</code> — hides EVERY section first, no matter
        which was previously visible, so there's never a moment with two sections shown at once.</li>
      <li><code>document.querySelector('#' + id).style.display = 'block';</code> — then shows just the ONE
        section whose id matches, using string concatenation to build the selector from the id passed in.</li>
      <li>Writing this as a reusable <code>showSection(id)</code> function (Intermediate Week 9's pattern) means
        each button's click handler is just one short line calling it with a different id.</li>
    </ul>
    <p>Now look at the second example, which also marks the matching nav button as active:</p>
    <pre class="code-block">function showSection(id){
  document.querySelectorAll('section').forEach(function(s){ s.style.display = 'none'; });
  document.querySelector('#' + id).style.display = 'block';
  document.querySelectorAll('nav button').forEach(function(b){ b.classList.remove('active'); });
  document.querySelector('#' + id + 'Btn').classList.add('active');
}</pre>
    <ul>
      <li>The same "clear everything, then set the one that matters" pattern is repeated for the active class —
        remove it from every button first, then add it back to just the matching one.</li>
    </ul>`,
  sandboxStarter:`<nav>
  <button id="homeBtn" type="button">Home</button>
  <button id="aboutBtn" type="button">About</button>
</nav>
<section id="home">Welcome home!</section>
<section id="about" style="display:none;">About us.</section>

<script>
  function showSection(id){
    document.querySelectorAll('section').forEach(function(s){
      s.style.display = 'none';
    });
    document.querySelector('#' + id).style.display = 'block';
  }
  document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
  document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });
</script>
`,
  sandboxStarter2:`<style>
  nav button.active { font-weight: bold; }
</style>
<nav>
  <button id="homeBtn" type="button" class="active">Home</button>
  <button id="aboutBtn" type="button">About</button>
</nav>
<section id="home">Welcome home!</section>
<section id="about" style="display:none;">About us.</section>

<script>
  function showSection(id){
    document.querySelectorAll('section').forEach(function(s){ s.style.display = 'none'; });
    document.querySelector('#' + id).style.display = 'block';
    document.querySelectorAll('nav button').forEach(function(b){ b.classList.remove('active'); });
    document.querySelector('#' + id + 'Btn').classList.add('active');
  }
  document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
  document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });
</script>
`,
  exercises:[
    {
      title:'Switch between two sections',
      desc:`&lt;section id="home"&gt; is visible, &lt;section id="about" style="display:none;"&gt; is hidden.
        Since BOTH buttons get clicked once each when checked (in order: #homeBtn then #aboutBtn), the FINAL
        visible section should be #about (the last button clicked). Write showSection(id) so clicking a button
        hides all sections then shows the matching one.`,
      starter:`<nav>
  <button id="homeBtn" type="button">Home</button>
  <button id="aboutBtn" type="button">About</button>
</nav>
<section id="home">Welcome home!</section>
<section id="about" style="display:none;">About us.</section>

<script>
  function showSection(id){
    // Hide every <section>, then show just the one matching id
  }
  document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
  document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#about', prop:'display', equals:'block', label:'#about is visible (the last button clicked)'},
        {type:'computed-style', selector:'#home', prop:'display', equals:'none', label:'#home is hidden'}
      ]
    },
    {
      title:'Switch between three sections',
      desc:`Same pattern, but with THREE sections and three buttons (#homeBtn, #aboutBtn, #contactBtn, in that
        DOM order). Since all three get auto-clicked in order, the FINAL visible section should be #contact (the
        last one clicked), with #home and #about both hidden.`,
      starter:`<nav>
  <button id="homeBtn" type="button">Home</button>
  <button id="aboutBtn" type="button">About</button>
  <button id="contactBtn" type="button">Contact</button>
</nav>
<section id="home">Welcome home!</section>
<section id="about" style="display:none;">About us.</section>
<section id="contact" style="display:none;">Contact us.</section>

<script>
  function showSection(id){
    // Hide every <section>, then show just the one matching id
  }
  document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
  document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });
  document.querySelector('#contactBtn').addEventListener('click', function(){ showSection('contact'); });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#contact', prop:'display', equals:'block', label:'#contact is visible (the last button clicked)'},
        {type:'computed-style', selector:'#home', prop:'display', equals:'none', label:'#home is hidden'},
        {type:'computed-style', selector:'#about', prop:'display', equals:'none', label:'#about is hidden'}
      ]
    },
    {
      title:'Combine routing with active-button styling',
      desc:`Extend showSection(id) so it ALSO removes class "active" from every nav button, then adds it to the
        one whose id is id + "Btn". With #homeBtn then #aboutBtn auto-clicked in order, #aboutBtn should end up
        with class "active", and #homeBtn should not.`,
      starter:`<style>
  nav button.active { font-weight: bold; }
</style>
<nav>
  <button id="homeBtn" type="button" class="active">Home</button>
  <button id="aboutBtn" type="button">About</button>
</nav>
<section id="home">Welcome home!</section>
<section id="about" style="display:none;">About us.</section>

<script>
  function showSection(id){
    document.querySelectorAll('section').forEach(function(s){ s.style.display = 'none'; });
    document.querySelector('#' + id).style.display = 'block';
    // Also: remove 'active' from every nav button, then add it to #<id>Btn
  }
  document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
  document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });
</script>
`,
      tests:[
        {type:'dom-attr', selector:'#aboutBtn', attr:'class', notEmpty:true, label:'#aboutBtn has the active class'},
        {type:'computed-style', selector:'#about', prop:'display', equals:'block', label:'#about is visible'}
      ]
    },
    {
      title:'Only one section visible, always',
      desc:`With THREE sections (#home visible, #about and #contact hidden) and three buttons clicked in order
        (home, about, contact), confirm that at the end EXACTLY ONE section has display:block — never two shown
        at once, no matter which was visible before.`,
      starter:`<nav>
  <button id="homeBtn" type="button">Home</button>
  <button id="aboutBtn" type="button">About</button>
  <button id="contactBtn" type="button">Contact</button>
</nav>
<section id="home">Welcome home!</section>
<section id="about" style="display:none;">About us.</section>
<section id="contact" style="display:none;">Contact us.</section>

<script>
  function showSection(id){
    // Hide every <section>, then show just the one matching id
  }
  document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
  document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });
  document.querySelector('#contactBtn').addEventListener('click', function(){ showSection('contact'); });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#contact', prop:'display', equals:'block', label:'#contact ends up visible'},
        {type:'computed-style', selector:'#about', prop:'display', equals:'none', label:'#about stays hidden, not shown alongside #contact'}
      ]
    },
    {
      title:'Switch back to home last',
      desc:`This time #aboutBtn comes FIRST in the HTML and #homeBtn comes SECOND — so the auto-click order is
        reversed (about, then home), and #home should end up visible with #about hidden. &lt;section id="about"&gt;
        starts visible; wire up showSection(id) so it correctly ends up hidden (a handler that does nothing would
        incorrectly leave #about visible).`,
      starter:`<nav>
  <button id="aboutBtn" type="button" class="active">About</button>
  <button id="homeBtn" type="button">Home</button>
</nav>
<section id="about">About us.</section>
<section id="home" style="display:none;">Welcome home!</section>

<script>
  function showSection(id){
    // Hide every <section>, then show just the one matching id
  }
  document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });
  document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#home', prop:'display', equals:'block', label:'#home ends up visible (the last button clicked) — a no-op handler would fail this'},
        {type:'computed-style', selector:'#about', prop:'display', equals:'none', label:'#about ends up hidden (a no-op handler would fail this too)'}
      ]
    },
    {
      title:'Build the complete mini router',
      desc:`Combine everything with THREE sections/buttons: showSection(id) hides all sections then shows the
        matching one, AND removes/adds the "active" class on the matching nav button. With buttons clicked in
        order (home, about, contact), #contact should end up visible and #contactBtn should have class
        "active".`,
      starter:`<style>
  nav button.active { font-weight: bold; }
</style>
<nav>
  <button id="homeBtn" type="button" class="active">Home</button>
  <button id="aboutBtn" type="button">About</button>
  <button id="contactBtn" type="button">Contact</button>
</nav>
<section id="home">Welcome home!</section>
<section id="about" style="display:none;">About us.</section>
<section id="contact" style="display:none;">Contact us.</section>

<script>
  function showSection(id){
    // Hide every <section>, show just the matching one, and update the active nav button
  }
  document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
  document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });
  document.querySelector('#contactBtn').addEventListener('click', function(){ showSection('contact'); });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#contact', prop:'display', equals:'block', label:'#contact ends up visible'},
        {type:'dom-attr', selector:'#contactBtn', attr:'class', notEmpty:true, label:'#contactBtn has the active class'}
      ]
    }
  ],
  quiz:[
    {
      q:'What is the core trick behind show/hide client-side routing?',
      options:['Loading a new HTML file','Keeping all sections in the page but only showing one at a time via display', 'Refreshing the whole page','Using a database'],
      correct:1,
      explain:'Every section already exists in the HTML — routing here just toggles which one is visible.'
    },
    {
      q:'Why hide EVERY section first, before showing the target one?',
      options:['It\'s not necessary','So there\'s never a moment where two sections are visible at once, no matter which was showing before','It makes the page load faster','HTML requires it'],
      correct:1,
      explain:'Clearing everything first guarantees a clean, predictable state before showing the one section that should be visible.'
    },
    {
      q:'In showSection(id), what does document.querySelector(\'#\' + id) do?',
      options:['Selects a random element','Builds a selector string by combining "#" with the id argument, then finds that exact element','Always selects the first section','Causes an error'],
      correct:1,
      explain:'String concatenation builds the selector dynamically, so one function works for any section id passed in.'
    },
    {
      q:'Why write this as a reusable showSection(id) function instead of separate code in each button\'s handler?',
      options:['It\'s required by JavaScript','So the hide-all-then-show-one logic is written once and reused for every button, matching Week 9\'s Intermediate lesson','It makes buttons clickable','No real reason'],
      correct:1,
      explain:'A shared function avoids repeating the same hide/show logic in every single click handler.'
    }
  ],
  sandboxStarter3:`<style>
  nav button.active { font-weight: bold; text-decoration: underline; }
</style>
<nav>
  <button id="homeBtn" type="button" class="active">Home</button>
  <button id="aboutBtn" type="button">About</button>
  <button id="contactBtn" type="button">Contact</button>
</nav>
<section id="home">Welcome home!</section>
<section id="about" style="display:none;">About us.</section>
<section id="contact" style="display:none;">Contact us.</section>

<script>
  function showSection(id){
    document.querySelectorAll('section').forEach(function(s){ s.style.display = 'none'; });
    document.querySelector('#' + id).style.display = 'block';
    document.querySelectorAll('nav button').forEach(function(b){ b.classList.remove('active'); });
    document.querySelector('#' + id + 'Btn').classList.add('active');
  }
  document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
  document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });
  document.querySelector('#contactBtn').addEventListener('click', function(){ showSection('contact'); });
</script>
`,
  stretchChallenge:{
    title:'Add a 4th section',
    desc:`Finished early? Add a 4th section, #gallery, and a matching &lt;button id="galleryBtn"&gt; wired to
      showSection('gallery') — keeping the same hide-all-then-show-one pattern working for all 4 sections. Since
      #galleryBtn is last in DOM order, #gallery should end up visible after all 4 buttons are auto-clicked.`,
    starter:`<nav>
  <button id="homeBtn" type="button" class="active">Home</button>
  <button id="aboutBtn" type="button">About</button>
  <button id="contactBtn" type="button">Contact</button>
  <!-- Add a 4th button, #galleryBtn, here -->
</nav>
<section id="home">Welcome home!</section>
<section id="about" style="display:none;">About us.</section>
<section id="contact" style="display:none;">Contact us.</section>
<!-- Add a 4th section, #gallery, here -->

<script>
  function showSection(id){
    document.querySelectorAll('section').forEach(function(s){ s.style.display = 'none'; });
    document.querySelector('#' + id).style.display = 'block';
  }
  document.querySelector('#homeBtn').addEventListener('click', function(){ showSection('home'); });
  document.querySelector('#aboutBtn').addEventListener('click', function(){ showSection('about'); });
  document.querySelector('#contactBtn').addEventListener('click', function(){ showSection('contact'); });
  // Add a click handler for #galleryBtn calling showSection('gallery')
</script>
`,
    tests:[
      {type:'computed-style', selector:'#gallery', prop:'display', equals:'block', label:'#gallery ends up visible (the last button clicked)'}
    ]
  }
},
{
  key:'week4', num:4, title:'Form State and Multi-Step Forms',
  scenarioTag:'Real world: breaking a long form into manageable steps',
  scenario:`A long sign-up form all on one screen is overwhelming. Real sign-up flows break it into steps —
    name first, then email, then confirmation — showing one step at a time and only letting you move on once the
    current step is actually valid. This combines Week 3's show/hide sections with Intermediate Week 4's
    click-based validation, plus a remembered "which step am I on" variable.`,
  objectives:[
    'Track the current step in a remembered variable',
    'Show only the current step\'s section',
    'Validate the current step before allowing advancement',
    'Combine tracking, validation, and display together'
  ],
  conceptHtml:`
    <p>A multi-step form combines three ideas already learned: a remembered <code>currentStep</code> variable
    (Week 6 of Intermediate), a <code>showStep(n)</code> function that hides all steps and shows just one (Week
    3's routing pattern), and validating the CURRENT step's input before allowing the "Next" button to actually
    advance (Intermediate Week 4).</p>
    <pre class="code-block">let currentStep = 1;

function showStep(n){
  document.querySelectorAll('.step').forEach(function(s){ s.style.display = 'none'; });
  document.querySelector('#step' + n).style.display = 'block';
}

document.querySelector('#nextBtn').addEventListener('click', function(){
  const name = document.querySelector('#name').value;
  if (name.trim() === '') {
    document.querySelector('#step1error').style.display = 'block';
    return; // stop here — don't advance on invalid input
  }
  currentStep = 2;
  showStep(currentStep);
});</pre>
    <ul>
      <li><code>let currentStep = 1;</code> — remembers which step is active, outside any click handler.</li>
      <li><code>if (name.trim() === '') { ...; return; }</code> — the <code>return</code> stops the function
        immediately, BEFORE <code>currentStep</code> changes or <code>showStep</code> runs — so invalid input
        genuinely blocks advancement rather than just showing an error alongside moving on anyway.</li>
    </ul>
    <p>Now look at the second example, adding a "Back" button:</p>
    <pre class="code-block">document.querySelector('#backBtn').addEventListener('click', function(){
  currentStep = 1;
  showStep(currentStep);
});</pre>
    <ul>
      <li>Going back never needs validation — you're always allowed to revisit an earlier step, so this handler
        is simpler than "Next"'s.</li>
    </ul>`,
  sandboxStarter:`<div class="step" id="step1">
  <input id="name" type="text" value="Ada">
  <p id="step1error" style="display:none;">Please enter your name</p>
  <button id="nextBtn" type="button">Next</button>
</div>
<div class="step" id="step2" style="display:none;">
  <p>Step 2: Email</p>
</div>

<script>
  let currentStep = 1;

  function showStep(n){
    document.querySelectorAll('.step').forEach(function(s){ s.style.display = 'none'; });
    document.querySelector('#step' + n).style.display = 'block';
  }

  document.querySelector('#nextBtn').addEventListener('click', function(){
    const name = document.querySelector('#name').value;
    if (name.trim() === '') {
      document.querySelector('#step1error').style.display = 'block';
      return;
    }
    currentStep = 2;
    showStep(currentStep);
  });
</script>
`,
  sandboxStarter2:`<div class="step" id="step1">
  <input id="name" type="text" value="Ada">
  <p id="step1error" style="display:none;">Please enter your name</p>
  <button id="nextBtn" type="button">Next</button>
</div>
<div class="step" id="step2" style="display:none;">
  <p>Step 2: Email</p>
  <button id="backBtn" type="button">Back</button>
</div>

<script>
  let currentStep = 1;

  function showStep(n){
    document.querySelectorAll('.step').forEach(function(s){ s.style.display = 'none'; });
    document.querySelector('#step' + n).style.display = 'block';
  }

  document.querySelector('#nextBtn').addEventListener('click', function(){
    const name = document.querySelector('#name').value;
    if (name.trim() === '') {
      document.querySelector('#step1error').style.display = 'block';
      return;
    }
    currentStep = 2;
    showStep(currentStep);
  });

  document.querySelector('#backBtn').addEventListener('click', function(){
    currentStep = 1;
    showStep(currentStep);
  });
</script>
`,
  exercises:[
    {
      title:'Advance to step 2 with valid input',
      desc:`&lt;input id="name" value="Ada"&gt; already has a valid value. Clicking &lt;button type="button"
        id="nextBtn"&gt; should hide #step1 and show #step2 (both &lt;div class="step"&gt;), since the name is
        not empty.`,
      starter:`<div class="step" id="step1">
  <input id="name" type="text" value="Ada">
  <button id="nextBtn" type="button">Next</button>
</div>
<div class="step" id="step2" style="display:none;">
  <p>Step 2: Email</p>
</div>

<script>
  document.querySelector('#nextBtn').addEventListener('click', function(){
    // If #name is valid, hide #step1 and show #step2
  });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#step2', prop:'display', equals:'block', label:'#step2 becomes visible'},
        {type:'computed-style', selector:'#step1', prop:'display', equals:'none', label:'#step1 becomes hidden'}
      ]
    },
    {
      title:'Block advancement on invalid input',
      desc:`&lt;input id="name" value=""&gt; is empty. Clicking &lt;button type="button" id="nextBtn"&gt; should
        show &lt;p id="step1error"&gt; and NOT advance — #step1 should STAY visible, #step2 should STAY hidden.`,
      starter:`<div class="step" id="step1">
  <input id="name" type="text" value="">
  <p id="step1error" style="display:none;">Please enter your name</p>
  <button id="nextBtn" type="button">Next</button>
</div>
<div class="step" id="step2" style="display:none;">
  <p>Step 2: Email</p>
</div>

<script>
  document.querySelector('#nextBtn').addEventListener('click', function(){
    // If #name is empty, show #step1error and do NOT advance (use return to stop early)
  });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#step1error', prop:'display', notEqual:'none', label:'#step1error shows because the name is empty'},
        {type:'computed-style', selector:'#step2', prop:'display', equals:'none', label:'#step2 stays hidden — advancement was correctly blocked'}
      ]
    },
    {
      title:'Advance through three steps',
      desc:`&lt;input id="name" value="Ada"&gt; and &lt;input id="email" value="ada@example.com"&gt; are both
        valid. Two "Next" buttons (#next1Btn then #next2Btn, in that DOM order) get auto-clicked — after both,
        #step3 should be visible, with #step1 and #step2 both hidden.`,
      starter:`<div class="step" id="step1">
  <input id="name" type="text" value="Ada">
  <button id="next1Btn" type="button">Next</button>
</div>
<div class="step" id="step2" style="display:none;">
  <input id="email" type="text" value="ada@example.com">
  <button id="next2Btn" type="button">Next</button>
</div>
<div class="step" id="step3" style="display:none;">
  <p>Step 3: Confirm</p>
</div>

<script>
  document.querySelector('#next1Btn').addEventListener('click', function(){
    // If #name is valid, hide #step1 and show #step2
  });
  document.querySelector('#next2Btn').addEventListener('click', function(){
    // If #email is valid, hide #step2 and show #step3
  });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#step3', prop:'display', equals:'block', label:'#step3 is visible after both Next buttons'},
        {type:'computed-style', selector:'#step2', prop:'display', equals:'none', label:'#step2 is hidden'}
      ]
    },
    {
      title:'Go forward, then back',
      desc:`With &lt;input id="name" value="Ada"&gt; valid, &lt;button id="nextBtn"&gt; then &lt;button
        id="backBtn"&gt; get auto-clicked in that order (Next first, Back second). Next should advance to
        #step2; Back should return to #step1 — so the FINAL visible step should be #step1 again.`,
      starter:`<div class="step" id="step1">
  <input id="name" type="text" value="Ada">
  <button id="nextBtn" type="button">Next</button>
</div>
<div class="step" id="step2" style="display:none;">
  <p>Step 2: Email</p>
  <button id="backBtn" type="button">Back</button>
</div>

<script>
  document.querySelector('#nextBtn').addEventListener('click', function(){
    // If #name is valid, hide #step1 and show #step2
  });
  document.querySelector('#backBtn').addEventListener('click', function(){
    // Hide #step2, show #step1 (no validation needed to go back)
  });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#step1', prop:'display', equals:'block', label:'#step1 is visible again after going Next then Back'},
        {type:'computed-style', selector:'#step2', prop:'display', equals:'none', label:'#step2 ends up hidden'}
      ]
    },
    {
      title:'Track the current step in a variable',
      desc:`Declare let currentStep = 1; outside the handler. Clicking &lt;button type="button" id="nextBtn"&gt;
        (with &lt;input id="name" value="Ada"&gt; valid) should increase currentStep to 2, then call a
        showStep(currentStep) function that hides all .step elements and shows just #step + currentStep.`,
      starter:`<div class="step" id="step1">
  <input id="name" type="text" value="Ada">
  <button id="nextBtn" type="button">Next</button>
</div>
<div class="step" id="step2" style="display:none;">
  <p>Step 2: Email</p>
</div>

<script>
  let currentStep = 1;

  function showStep(n){
    document.querySelectorAll('.step').forEach(function(s){ s.style.display = 'none'; });
    document.querySelector('#step' + n).style.display = 'block';
  }

  document.querySelector('#nextBtn').addEventListener('click', function(){
    // If #name is valid, increase currentStep to 2, then call showStep(currentStep)
  });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#step2', prop:'display', equals:'block', label:'#step2 becomes visible via showStep(currentStep)'}
      ]
    },
    {
      title:'Get stuck on an invalid middle step',
      desc:`&lt;input id="name" value="Ada"&gt; is valid, but &lt;input id="email" value=""&gt; is empty. Two
        "Next" buttons (#next1Btn then #next2Btn) get auto-clicked. The first should advance to #step2, but the
        second should FAIL validation and leave #step2 visible — #step3 should never appear.`,
      starter:`<div class="step" id="step1">
  <input id="name" type="text" value="Ada">
  <button id="next1Btn" type="button">Next</button>
</div>
<div class="step" id="step2" style="display:none;">
  <input id="email" type="text" value="">
  <p id="step2error" style="display:none;">Please enter your email</p>
  <button id="next2Btn" type="button">Next</button>
</div>
<div class="step" id="step3" style="display:none;">
  <p>Step 3: Confirm</p>
</div>

<script>
  document.querySelector('#next1Btn').addEventListener('click', function(){
    // If #name is valid, hide #step1 and show #step2
  });
  document.querySelector('#next2Btn').addEventListener('click', function(){
    // If #email is empty, show #step2error and do NOT advance (return early)
  });
</script>
`,
      tests:[
        {type:'computed-style', selector:'#step2', prop:'display', equals:'block', label:'#step2 stays visible — the empty email correctly blocked advancement'},
        {type:'computed-style', selector:'#step3', prop:'display', equals:'none', label:'#step3 is never reached'}
      ]
    }
  ],
  quiz:[
    {
      q:'Why use return; inside a click handler when validation fails?',
      options:['It\'s not necessary','It stops the function immediately, so the code that advances to the next step never runs','It deletes the input','It shows an alert automatically'],
      correct:1,
      explain:'return exits the function right away — any code written after it (like advancing the step) simply never executes.'
    },
    {
      q:'In a 3-step form, why does the "Back" button typically skip validation?',
      options:['Back always requires validation too','You should always be allowed to revisit an earlier step you\'ve already filled in, without being blocked','Back is not allowed in real forms','There is no real reason'],
      correct:1,
      explain:'Validation exists to stop you moving FORWARD with bad data — going back to review or fix something doesn\'t need that same gate.'
    },
    {
      q:'What does the remembered currentStep variable let showStep(currentStep) do?',
      options:['Nothing useful','Always show the step matching whatever step is currently active, wherever it\'s called from','Only work once','Delete old steps'],
      correct:1,
      explain:'Since currentStep is remembered outside any single handler, any code can call showStep(currentStep) and get the right step every time.'
    },
    {
      q:'If step 2\'s validation fails when the "Next" button for step 2→3 is clicked, what should happen to step 3?',
      options:['It shows anyway','It should never become visible — the invalid step blocks all further progress until fixed','It shows a blank page','It skips straight to step 1'],
      correct:1,
      explain:'A properly gated multi-step form never lets you reach a later step while an earlier one is still invalid.'
    }
  ],
  sandboxStarter3:`<div class="step" id="step1">
  <input id="name" type="text" value="Ada">
  <p id="step1error" style="display:none;">Please enter your name</p>
  <button id="next1Btn" type="button">Next</button>
</div>
<div class="step" id="step2" style="display:none;">
  <input id="email" type="text" value="ada@example.com">
  <p id="step2error" style="display:none;">Please enter your email</p>
  <button id="backBtn" type="button">Back</button>
  <button id="next2Btn" type="button">Next</button>
</div>
<div class="step" id="step3" style="display:none;">
  <p>Step 3: All done!</p>
</div>

<script>
  let currentStep = 1;

  function showStep(n){
    document.querySelectorAll('.step').forEach(function(s){ s.style.display = 'none'; });
    document.querySelector('#step' + n).style.display = 'block';
  }

  document.querySelector('#next1Btn').addEventListener('click', function(){
    if (document.querySelector('#name').value.trim() === '') {
      document.querySelector('#step1error').style.display = 'block';
      return;
    }
    currentStep = 2;
    showStep(currentStep);
  });

  document.querySelector('#backBtn').addEventListener('click', function(){
    currentStep = 1;
    showStep(currentStep);
  });

  document.querySelector('#next2Btn').addEventListener('click', function(){
    if (!document.querySelector('#email').value.includes('@')) {
      document.querySelector('#step2error').style.display = 'block';
      return;
    }
    currentStep = 3;
    showStep(currentStep);
  });
</script>
`,
  stretchChallenge:{
    title:'Add a progress label',
    desc:`Finished early? Add a &lt;p id="progress"&gt; that shows "Step X of 3" (updated inside showStep(n), set
      to "Step " + n + " of 3") — so after advancing to step 2, #progress reads "Step 2 of 3".`,
    starter:`<p id="progress">Step 1 of 3</p>
<div class="step" id="step1">
  <input id="name" type="text" value="Ada">
  <button id="nextBtn" type="button">Next</button>
</div>
<div class="step" id="step2" style="display:none;">
  <p>Step 2: Email</p>
</div>

<script>
  function showStep(n){
    document.querySelectorAll('.step').forEach(function(s){ s.style.display = 'none'; });
    document.querySelector('#step' + n).style.display = 'block';
    // Also update #progress to "Step " + n + " of 3"
  }
  document.querySelector('#nextBtn').addEventListener('click', function(){
    if (document.querySelector('#name').value.trim() === '') { return; }
    showStep(2);
  });
</script>
`,
    tests:[
      {type:'dom', selector:'#progress', contains:'Step 2 of 3', label:'#progress correctly updates to "Step 2 of 3"'}
    ]
  }
},
];

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.wd = {
  b: {weeks: WD_WEEKS, mp1: WD_MP1, mp2: WD_MP2},
  i: {weeks: WD_INTERMEDIATE_WEEKS, mp1: WD_INTERMEDIATE_MP1, mp2: WD_INTERMEDIATE_MP2},
  a: {weeks: WD_WEEKS, mp1: WD_MP1, mp2: WD_MP2}
};
