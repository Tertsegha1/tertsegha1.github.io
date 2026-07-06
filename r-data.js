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
    get checked, similar to <code>assert</code> in other languages.</p>`,
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
      desc:`Print the exact message "Hello, R Academy!" using print().`,
      starter:`# Print your greeting below
`,
      tests:[{type:'output', contains:['Hello, R Academy!'], label:'Prints the greeting'}]
    },
    {
      title:'Build a vector',
      desc:`Create a vector called attendance with the values 30, 28, 29, then print its sum. The sum should be 87.`,
      starter:`# Create your vector and print its sum below
`,
      tests:[{type:'output', contains:['87'], label:'Prints the correct sum (87)'}]
    },
    {
      title:'Find the average',
      desc:`Create a vector called scores with the values 10, 20, 30 and print its mean using mean(). The mean should be 20.`,
      starter:`# Create your vector and print its mean below
`,
      tests:[{type:'output', contains:['20'], label:'Prints the correct mean (20)'}]
    },
    {
      title:'Check your work with stopifnot',
      desc:`Create a variable x with the value 5, then use stopifnot() to confirm that x * 2 equals 10.`,
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
