/* =========================================================================
   R Academy — Phase 0 placeholder content
   One placeholder week, reused across all 3 levels until each level's real
   curriculum is authored in its own build phase. Grading uses WebR
   (execIsolatedR in app.js) — output/assert tests run against captured
   R console output, with stopifnot() standing in for Python's assert.
   ========================================================================= */

const R_WEEKS = [
{
  key:'week1', num:1, title:'Getting Started with R',
  scenarioTag:'Real world: the class attendance register',
  scenario:`Your school wants a quick way to summarise attendance numbers for a class. R is built for exactly this —
    working with lists of numbers (called vectors) and quickly getting totals, averages, and counts from them.`,
  objectives:[
    'Run your first line of R and print a message',
    'Create a numeric vector with c()',
    'Use built-in functions like sum() and mean()',
    'Use stopifnot() to check that a condition holds'
  ],
  conceptHtml:`
    <p>R prints text with <code>print()</code>, or just by writing an expression on its own line:</p>
    <pre class="code-block">print("Hello from R!")</pre>
    <p>A <strong>vector</strong> is a list of values, created with <code>c()</code> (combine):</p>
    <pre class="code-block">attendance &lt;- c(28, 30, 27, 29, 30)
print(sum(attendance))
print(mean(attendance))</pre>
    <p><code>stopifnot()</code> checks a condition and stops with an error if it's false — this is how your exercises
    get checked, similar to <code>assert</code> in other languages.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">print("Hello from R!")
attendance &lt;- c(28, 30, 27, 29, 30)
print(sum(attendance))</pre>
    <ul>
      <li><code>print("Hello from R!")</code> — <code>print()</code> is a <strong>function</strong>: it takes
        something in brackets (here, the text <code>"Hello from R!"</code>) and displays it. You'll use
        <code>print()</code> constantly to see what your code is doing.</li>
      <li><code>attendance &lt;- c(28, 30, 27, 29, 30)</code> — the <code>&lt;-</code> arrow means "store this
        value in a variable called <code>attendance</code>". Read it right-to-left: "take
        <code>c(28, 30, 27, 29, 30)</code> and put it into <code>attendance</code>". R programmers use
        <code>&lt;-</code> instead of <code>=</code> for this, though both work.</li>
      <li><code>c(28, 30, 27, 29, 30)</code> is the <code>c()</code> function again, combining five separate
        numbers into one vector — think of it as building a single list out of individual values.</li>
      <li><code>print(sum(attendance))</code> — functions can go <strong>inside</strong> other functions. R works
        from the inside out: first <code>sum(attendance)</code> adds up all the numbers in the vector (giving
        144), then <code>print()</code> displays that result.</li>
    </ul>
    <p>The second example follows exactly the same shape, just with <code>mean()</code> (average) and
    <code>max()</code> (largest value) instead of <code>sum()</code> — once you know the pattern
    <code>print(some_function(my_vector))</code>, you can swap in almost any built-in function.</p>`,
  sandboxStarter:`print("Hello from R!")
attendance <- c(28, 30, 27, 29, 30)
print(sum(attendance))
`,
  sandboxStarter2:`scores <- c(78, 92, 85, 66, 90)
print(mean(scores))
print(max(scores))
`,
  exercises:[
    {
      title:'Print a greeting',
      desc:`Print the exact message "Hello, R Academy!" using print(). Just like the concept box: print("your text here").`,
      starter:`# Print your greeting below
`,
      tests:[{type:'output', contains:['Hello, R Academy!'], label:'Prints the greeting'}]
    },
    {
      title:'Build a vector',
      desc:`Create a vector called attendance with the values 30, 28, 29, then print its sum. The sum should be 87.
        Follow the two-step pattern from the concept box: first attendance &lt;- c(30, 28, 29) to store the vector,
        then print(sum(attendance)) to add it up and display the result.`,
      starter:`# Create your vector and print its sum below
`,
      tests:[{type:'output', contains:['87'], label:'Prints the correct sum (87)'}]
    },
    {
      title:'Find the average',
      desc:`Create a vector called scores with the values 10, 20, 30 and print its mean using mean(). The mean
        should be 20. Same shape as before, just swap sum() for mean() — print(mean(scores)).`,
      starter:`# Create your vector and print its mean below
`,
      tests:[{type:'output', contains:['20'], label:'Prints the correct mean (20)'}]
    },
    {
      title:'Check your work with stopifnot',
      desc:`Create a variable x with the value 5, then use stopifnot() to confirm that x * 2 equals 10. Unlike
        print(), stopifnot() doesn't display anything when the condition is true — it only speaks up (with an
        error) when something is wrong, which is exactly why it's useful for checking your own work.`,
      starter:`# Create x and check it below
x <- 5
`,
      tests:[{type:'assert', expr:'x * 2 == 10', label:'x * 2 equals 10'}]
    }
  ],
  quiz:[
    {
      q:'Which function combines values into a vector in R?',
      options:['list()','c()','vec()','array()'],
      correct:1,
      explain:'c() ("combine") is the standard way to build a vector in R.'
    },
    {
      q:'What does sum(c(1,2,3)) return?',
      options:['123','6','"1,2,3"','Error'],
      correct:1,
      explain:'sum() adds all the values in the vector: 1+2+3 = 6.'
    },
    {
      q:'What does stopifnot(1 == 2) do?',
      options:['Nothing, it just checks silently','Prints TRUE','Stops with an error, since the condition is false','Rounds the numbers'],
      correct:2,
      explain:'stopifnot() throws an error whenever its condition evaluates to FALSE.'
    },
    {
      q:'Which function finds the average of a vector?',
      options:['average()','mean()','avg()','sum()/length()'],
      correct:1,
      explain:"mean() is R's built-in function for computing an average."
    }
  ]
}
];

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.r = { b: {weeks: R_WEEKS}, i: {weeks: R_WEEKS}, a: {weeks: R_WEEKS} };
