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

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.wd = {
  b: {weeks: WD_WEEKS, mp1: WD_MP1, mp2: WD_MP2},
  i: {weeks: WD_WEEKS, mp1: WD_MP1, mp2: WD_MP2},
  a: {weeks: WD_WEEKS, mp1: WD_MP1, mp2: WD_MP2}
};
