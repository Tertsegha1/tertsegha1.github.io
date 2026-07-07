/* =========================================================================
   Data Science Academy — Phase 0 placeholder content
   One placeholder week, reused across all 3 levels until each level's real
   curriculum is authored in its own build phase. Reuses the Pyodide runtime
   with a lean pandas-only micropip install (see ensurePyodideDS in app.js —
   scikit-learn is deliberately NOT installed here since this track stays to
   tabular analysis, not model training). No chart/visualization support in
   this phase — grading is purely against printed/text output, same as
   AutoML.
   ========================================================================= */

const DS_WEEKS = [
{
  key:'week1', num:1, title:'Meet Your Data',
  scenarioTag:'Real world: this term’s exam results',
  scenario:`Your school wants a quick way to make sense of a class's exam scores — how many students, what's the
    average, and who scored well above the rest. pandas is the standard tool for exactly this kind of table-shaped
    data.`,
  objectives:[
    'Build a pandas DataFrame from scratch',
    'Count rows in a DataFrame',
    'Compute an average with .mean()',
    'Filter rows and find the maximum with .max()'
  ],
  conceptHtml:`
    <p><strong>pandas</strong> organises data into a <strong>DataFrame</strong> — a table with rows and columns,
    similar to a spreadsheet:</p>
    <pre class="code-block">import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi"], "score": [78, 92, 65]})
print(scores)
print(len(scores))            # number of rows
print(scores["score"].mean()) # average of the score column</pre>
    <p>You can filter rows using a condition, and pandas will keep only the matching ones:</p>
    <pre class="code-block">top_scorers = scores[scores["score"] >= 80]
print(top_scorers)</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <ul>
      <li><code>scores = pd.DataFrame({"name": [...], "score": [...]})</code> — the curly braces <code>{}</code>
        define a Python dictionary: each key ("name", "score") becomes a column name, and its list becomes that
        column's values. <code>pd.DataFrame(...)</code> turns that dictionary into an actual table.</li>
      <li><code>print(scores)</code> — printing a DataFrame directly shows the whole table, nicely formatted with
        row numbers down the left.</li>
      <li><code>len(scores)</code> — the same <code>len()</code> you'd use on a list, but for a DataFrame it counts
        rows instead of list items.</li>
      <li><code>scores["score"].mean()</code> — <code>scores["score"]</code> pulls out just the "score" column on
        its own (this is called a <strong>Series</strong>), and <code>.mean()</code> is a method that only makes
        sense on a single column of numbers, not the whole table.</li>
      <li><code>scores["score"] >= 80</code> — comparing a whole column to a number doesn't give you one answer;
        it gives you a column of <code>True</code>/<code>False</code> values, one per row. Putting that inside
        <code>scores[...]</code> then keeps only the rows where it was <code>True</code> — this is called
        <strong>boolean indexing</strong>, and it's how almost all filtering in pandas works.</li>
    </ul>
    <p class="callout tip">This level covers organising and summarising data in tables. Turning that data into
    charts and plots is a natural next step — that's planned for a future update to this track.</p>`,
  sandboxStarter:`import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi"], "score": [78, 92, 65]})
print(scores)
`,
  sandboxStarter2:`import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
print(scores["score"].mean())
print(scores[scores["score"] >= 80])
`,
  exercises:[
    {
      title:'Build your first DataFrame',
      desc:`Create a DataFrame called df with one column "hours" containing the values 1, 2, 3. Print len(df) —
        it should print 3. Use the same dictionary shape from the concept box:
        df = pd.DataFrame({"hours": [1, 2, 3]}).`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['3'], label:'Prints the correct row count (3)'}]
    },
    {
      title:'Find the average',
      desc:`Create a DataFrame called df with one column "score" containing 70, 80, 90. Print df["score"].mean() —
        it should print 80.0. Remember df["score"] pulls out just that one column before you call .mean() on it.`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['80.0'], label:'Prints the correct mean (80.0)'}]
    },
    {
      title:'Filter the data',
      desc:`Create a DataFrame called df with columns "name" (Ada, Ben, Chi, Dee) and "score" (78, 92, 65, 88).
        Create a variable top called df[df["score"] >= 80], then print len(top). It should print 2. The condition
        inside the square brackets is what does the filtering — df[condition] keeps only the True rows.`,
      starter:`import pandas as pd
# Create df and top below
`,
      tests:[{type:'output', contains:['2'], label:'Filters to the correct number of rows (2)'}]
    },
    {
      title:'Find the highest score',
      desc:`Create a DataFrame called df with one column "score" containing 78, 92, 65, 88. Assert that
        df["score"].max() equals 92. .max() works just like .mean() — call it on a single column, and it returns
        the largest value in it.`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'assert', expr:'df["score"].max() == 92', label:'df["score"].max() correctly equals 92'}]
    }
  ],
  quiz:[
    {
      q:'What is a pandas DataFrame?',
      options:['A single number','A table of rows and columns','A type of chart','A trained model'],
      correct:1,
      explain:'A DataFrame is pandas’ table structure, similar to a spreadsheet.'
    },
    {
      q:'Which method gives you the number of rows in a DataFrame df?',
      options:['df.rows()','len(df)','df.count','df.size()'],
      correct:1,
      explain:'len(df) returns the number of rows, just like len() on a list.'
    },
    {
      q:'What does df["score"].mean() calculate?',
      options:['The highest score','The number of scores','The average of the score column','The lowest score'],
      correct:2,
      explain:'.mean() computes the average of all the values in that column.'
    },
    {
      q:'How do you keep only rows where score is 80 or above?',
      options:['df.filter(80)','df[df["score"] >= 80]','df.score(80)','df.max(80)'],
      correct:1,
      explain:'Boolean indexing (df[condition]) is the standard pandas way to filter rows.'
    }
  ]
}
];

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.ds = { b: {weeks: DS_WEEKS}, i: {weeks: DS_WEEKS}, a: {weeks: DS_WEEKS} };
