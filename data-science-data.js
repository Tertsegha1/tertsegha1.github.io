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
    },
    {
      title:'Find the lowest score',
      desc:`Create a DataFrame called df with one column "score" containing 70, 80, 90. Print df["score"].min() —
        it should print 70. .min() works exactly like .max(), just returning the smallest value instead.`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['70'], label:'Prints the correct minimum (70)'}]
    },
    {
      title:'Count how many passed',
      desc:`Create a DataFrame called df with columns "name" (Ada, Ben, Chi, Dee) and "score" (78, 92, 65, 88).
        Create a variable passed called df[df["score"] >= 70], then print len(passed). It should print 3.`,
      starter:`import pandas as pd
# Create df and passed below
`,
      tests:[{type:'output', contains:['3'], label:'Filters to the correct number of rows (3)'}]
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
  ],
  sandboxStarter3:`import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})

lowest = scores["score"].min()
print("Lowest score:", lowest)

passed = scores[scores["score"] >= 70]
print("Number who passed:", len(passed))
`,
  stretchChallenge:{
    title:'Find the name of the top scorer',
    desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee) and "score" (78, 92, 65, 88). Use
      <code>df["score"].idxmax()</code> to find the row label of the highest score, then
      <code>df.loc[..., "name"]</code> to get that student's name, and print it.`,
    starter:`import pandas as pd
# Create df, then find and print the name of the student with the highest score
`,
    tests:[
      {type:'output', contains:['Ben'], label:"Prints the top scorer's name (Ben)"}
    ]
  }
},
{
  key:'week2', num:2, title:'Picking Out What You Need',
  scenarioTag:'Real world: the school office only wants two columns',
  scenario:`The school office asked for just each student's name and score — not every column in your gradebook.
    pandas gives you precise ways to select exactly the columns and rows you need, whether you know their names or
    just their position in the table.`,
  objectives:[
    'Select multiple columns at once with df[["a","b"]]',
    'Use .loc[] to select by label (row/column name)',
    'Use .iloc[] to select by position (like counting from 0)',
    'Combine a row condition and a column list in one .loc[] call'
  ],
  conceptHtml:`
    <p>So far you've pulled out ONE column with <code>df["score"]</code>. To grab several columns at once, pass a
    list of names inside double square brackets:</p>
    <pre class="code-block">import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88], "subject": ["Math","Math","Math","Math"]})
just_names_scores = scores[["name", "score"]]
print(just_names_scores)</pre>
    <p><code>.loc[]</code> selects by <strong>label</strong> — the actual row index number and column name.
    <code>.iloc[]</code> selects by <strong>position</strong> — like counting items in a list, starting from 0 (or
    counting from the end with negative numbers):</p>
    <pre class="code-block">print(scores.loc[1, "score"])   # row labeled 1, "score" column -> 92
print(scores.iloc[-1])           # the LAST row, by position, whatever its label is</pre>
    <p>You can combine both ideas in one <code>.loc[]</code> call: a condition on the row side, and a column list on
    the other side, separated by a comma:</p>
    <pre class="code-block">top_scorers = scores.loc[scores["score"] >= 80, ["name", "score"]]
print(top_scorers)</pre>
    <h3>Let's break down the combined .loc[] call, line by line</h3>
    <ul>
      <li><code>scores[["name", "score"]]</code> — the OUTER square brackets are the usual "select from scores";
        the INNER square brackets <code>["name", "score"]</code> are a plain Python list of column names. This
        always returns a DataFrame (a mini table), even if you only list one column — unlike
        <code>scores["score"]</code> (single brackets, no list) which returns a Series instead.</li>
      <li><code>scores.loc[1, "score"]</code> — everything before the comma picks ROWS (here, the row whose label
        is exactly <code>1</code>); everything after the comma picks COLUMNS (here, just <code>"score"</code>).</li>
      <li><code>scores.iloc[-1]</code> — position-based, so <code>-1</code> always means "the last row" regardless
        of what its actual label happens to be — handy when you don't know or care about the label, just the
        position.</li>
      <li><code>scores.loc[scores["score"] >= 80, ["name", "score"]]</code> — the same boolean-indexing condition
        from Week 1 (<code>scores["score"] >= 80</code>) now sits on the LEFT of the comma inside <code>.loc[]</code>
        (picking rows), while <code>["name", "score"]</code> sits on the RIGHT (picking columns) — filtering rows
        and selecting columns in a single step.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88], "subject": ["Math","Math","Math","Math"]})
just_names_scores = scores[["name", "score"]]
print(just_names_scores)
`,
  sandboxStarter2:`import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
print(scores.loc[1, "score"])
print(scores.iloc[-1])
top_scorers = scores.loc[scores["score"] >= 80, ["name", "score"]]
print(top_scorers)
`,
  exercises:[
    {
      title:'Select just two columns',
      desc:`Create a DataFrame called df with columns "name" (Ada, Ben, Chi), "score" (78, 92, 65), and "subject"
        (Math, Math, Math). Create selected = df[["name", "score"]], then assert
        list(selected.columns) == ["name", "score"]. The double square brackets around a list of names is what
        selects multiple columns as a DataFrame.`,
      starter:`import pandas as pd
# Create df and selected below
`,
      tests:[{type:'assert', expr:'list(selected.columns) == ["name", "score"]', label:'selected has exactly the name and score columns'}]
    },
    {
      title:'Select by label with .loc',
      desc:`Create a DataFrame called df with columns "name" (Ada, Ben, Chi, Dee) and "score" (78, 92, 65, 88).
        Assert that df.loc[1, "score"] == 92 — row labeled 1 (Ben) is the second row, and its score column is 92.`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'assert', expr:'df.loc[1, "score"] == 92', label:'df.loc[1, "score"] correctly equals 92'}]
    },
    {
      title:'Select by position with .iloc',
      desc:`Using the same df (name: Ada, Ben, Chi, Dee / score: 78, 92, 65, 88), assert that
        df.iloc[-1]["name"] == "Dee" — .iloc[-1] gets the LAST row by position, regardless of its label.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
# Add your assert below
`,
      tests:[{type:'assert', expr:'df.iloc[-1]["name"] == "Dee"', label:'df.iloc[-1]["name"] correctly equals "Dee"'}]
    },
    {
      title:'Combine a condition and a column list',
      desc:`Using the same df, create result = df.loc[df["score"] >= 80, ["name", "score"]]. Assert that
        list(result["name"]) == ["Ben", "Dee"] — Ben (92) and Dee (88) are the only students scoring 80 or above,
        in their original row order.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
# Create result below
`,
      tests:[{type:'assert', expr:'list(result["name"]) == ["Ben", "Dee"]', label:'result correctly contains Ben and Dee'}]
    },
    {
      title:'Select a range of rows with .iloc',
      desc:`Using the same df (name: Ada, Ben, Chi, Dee / score: 78, 92, 65, 88), create first_two =
        df.iloc[0:2] — a position-based slice, just like slicing a list. Assert len(first_two) == 2.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
# Create first_two below
`,
      tests:[{type:'assert', expr:'len(first_two) == 2', label:'first_two has exactly 2 rows'}]
    },
    {
      title:'Select specific rows with .loc',
      desc:`Using the same df, create selected = df.loc[[0, 2], "name"] — a list of specific row labels
        (0 and 2), not a range. Assert list(selected) == ["Ada", "Chi"].`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
# Create selected below
`,
      tests:[{type:'assert', expr:'list(selected) == ["Ada", "Chi"]', label:'selected correctly contains Ada and Chi'}]
    }
  ],
  quiz:[
    {
      q:'What does df[["name", "score"]] return?',
      options:['A single value','A Series','A DataFrame with just those two columns','An error'],
      correct:2,
      explain:'Double square brackets around a list of column names always return a DataFrame, even for one column.'
    },
    {
      q:'What does .loc[] select by?',
      options:['Position only','Label (row/column name)','Random order','Column color'],
      correct:1,
      explain:'.loc[] uses labels — the actual row index value and column name.'
    },
    {
      q:'What does .iloc[-1] select?',
      options:['The row labeled -1','The first row','The last row, by position','Every row'],
      correct:2,
      explain:'.iloc uses position, and -1 always means "the last one," like negative indexing on a list.'
    },
    {
      q:'In df.loc[condition, ["a","b"]], what does the part before the comma control?',
      options:['Which columns to show','Which rows to keep','The DataFrame name','The row order'],
      correct:1,
      explain:'Everything before the comma in .loc[] selects rows; everything after selects columns.'
    }
  ],
  sandboxStarter3:`import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})

# .iloc[] also accepts ranges, just like list slicing
first_two = scores.iloc[0:2]
print(first_two)

# .loc[] can select several specific rows at once using a list of labels
selected_rows = scores.loc[[0, 2], "name"]
print(selected_rows)
`,
  stretchChallenge:{
    title:'Find who needs extra practice',
    desc:`Using df (name: Ada, Ben, Chi, Dee / score: 78, 92, 65, 88), create needs_practice =
      df.loc[df["score"] &lt; 80, "name"]. Assert list(needs_practice) == ["Ada", "Chi"] — everyone scoring
      below 80.`,
    starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
# Create needs_practice below
`,
    tests:[
      {type:'assert', expr:'list(needs_practice) == ["Ada", "Chi"]', label:'needs_practice correctly contains Ada and Chi'}
    ]
  }
},
{
  key:'week3', num:3, title:'Combining Conditions',
  scenarioTag:'Real world: who needs a certificate, and who needs extra help?',
  scenario:`One condition can only ask one question at a time. Real decisions usually need more than one: "who did
    well in BOTH maths and science?" or "who's struggling in EITHER subject?" pandas lets you combine conditions
    with & (and) and | (or) — you just need to know one small rule about parentheses.`,
  objectives:[
    'Combine two conditions with & (both must be true)',
    'Combine two conditions with | (at least one must be true)',
    "Understand why each condition needs its own parentheses",
    'Use .loc[] with a combined condition and a column list together'
  ],
  conceptHtml:`
    <p>Python's normal <code>and</code>/<code>or</code> keywords only work on single True/False values, not on a
    whole column of them — pandas uses <code>&amp;</code> (and) and <code>|</code> (or) instead, applied one row at
    a time across the column. There's one catch: <strong>each condition needs its own parentheses</strong>, because
    <code>&amp;</code>/<code>|</code> bind more tightly than comparisons like <code>&gt;=</code> in Python's normal
    order of operations — without the parentheses, Python tries to evaluate the wrong parts together and raises an
    error.</p>
    <pre class="code-block">import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 55, 91, 40], "science": [75, 60, 45, 35]})

both = df[(df["maths"] >= 70) & (df["science"] >= 70)]
print(both)

either = df[(df["maths"] < 50) | (df["science"] < 50)]
print(either)</pre>
    <p>You can combine as many conditions as you need, and you can combine this with last week's <code>.loc[]</code>
    column selection too:</p>
    <pre class="code-block">result = df.loc[(df["maths"] >= 70) & (df["science"] >= 70), ["name", "maths"]]
print(result)</pre>
    <h3>Let's break down the combined condition, line by line</h3>
    <ul>
      <li><code>(df["maths"] >= 70)</code> — one condition, wrapped in its own parentheses. On its own this is just
        last week's boolean indexing: a column of True/False values.</li>
      <li><code>&amp;</code> — combines two of those True/False columns row-by-row: the result is True only where
        BOTH sides were True. <code>|</code> works the same way but needs only ONE side to be True.</li>
      <li><code>(df["maths"] >= 70) &amp; (df["science"] >= 70)</code> — two complete, separately-parenthesized
        conditions joined by <code>&amp;</code>. Forgetting either pair of parentheses is the single most common
        mistake here — always wrap each comparison on its own before combining them.</li>
      <li><code>df.loc[(condition), ["name", "maths"]]</code> — exactly Week 2's shape (condition before the comma,
        column list after), just with a combined condition instead of a single one.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 55, 91, 40], "science": [75, 60, 45, 35]})
both = df[(df["maths"] >= 70) & (df["science"] >= 70)]
print(both)
`,
  sandboxStarter2:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 55, 91, 40], "science": [75, 60, 45, 35]})
either = df[(df["maths"] < 50) | (df["science"] < 50)]
print(either)
result = df.loc[(df["maths"] >= 70) & (df["science"] >= 70), ["name", "maths"]]
print(result)
`,
  exercises:[
    {
      title:'Find students who did well in both subjects',
      desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee), "maths" (82, 55, 91, 40), and "science"
        (75, 60, 45, 35). Create both = df[(df["maths"] >= 70) & (df["science"] >= 70)], then assert
        list(both["name"]) == ["Ada"] — only Ada scores 70+ in both subjects.`,
      starter:`import pandas as pd
# Create df and both below
`,
      tests:[{type:'assert', expr:'list(both["name"]) == ["Ada"]', label:'both correctly contains only Ada'}]
    },
    {
      title:'Find students struggling in either subject',
      desc:`Using the same df, create either = df[(df["maths"] < 50) | (df["science"] < 50)]. Assert that
        list(either["name"]) == ["Chi", "Dee"] — Chi is under 50 in science, Dee is under 50 in both.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 55, 91, 40], "science": [75, 60, 45, 35]})
# Create either below
`,
      tests:[{type:'assert', expr:'list(either["name"]) == ["Chi", "Dee"]', label:'either correctly contains Chi and Dee'}]
    },
    {
      title:'Combine three conditions',
      desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee), "maths" (82, 55, 91, 78), "science"
        (75, 60, 80, 80), and "attendance" (True, True, False, True). Create honours = df[(df["maths"] >= 70) &
        (df["science"] >= 70) & (df["attendance"] == True)]. Assert that list(honours["name"]) == ["Ada", "Dee"] —
        Chi passes both maths and science, but is excluded because attendance is False. You can chain as many
        &amp;-joined conditions as you need, each in its own parentheses.`,
      starter:`import pandas as pd
# Create df and honours below
`,
      tests:[{type:'assert', expr:'list(honours["name"]) == ["Ada", "Dee"]', label:'honours correctly contains Ada and Dee'}]
    },
    {
      title:'Combine a condition with a column list',
      desc:`Using the df from the first exercise (name/maths/science, same values), create
        result = df.loc[(df["maths"] >= 70) & (df["science"] >= 70), ["name", "maths"]]. Assert that
        list(result.columns) == ["name", "maths"] — the combined condition (before the comma) filters rows, and the
        list (after the comma) picks only those two columns.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 55, 91, 40], "science": [75, 60, 45, 35]})
# Create result below
`,
      tests:[{type:'assert', expr:'list(result.columns) == ["name", "maths"]', label:'result has exactly the name and maths columns'}]
    },
    {
      title:'Invert a condition with ~',
      desc:`Using the df from the first exercise (name/maths/science, same values), create not_honours =
        df[~((df["maths"] >= 70) & (df["science"] >= 70))]. Assert that list(not_honours["name"]) ==
        ["Ben", "Chi", "Dee"] — everyone EXCEPT Ada, who was the only one to qualify for honours. ~ flips a
        whole condition, turning every True into False and vice versa.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 55, 91, 40], "science": [75, 60, 45, 35]})
# Create not_honours below
`,
      tests:[{type:'assert', expr:'list(not_honours["name"]) == ["Ben", "Chi", "Dee"]', label:'not_honours correctly excludes Ada'}]
    },
    {
      title:'Combine OR with a column list',
      desc:`Using the df from the first exercise, create result = df.loc[(df["maths"] &lt; 50) |
        (df["science"] &lt; 50), ["name", "science"]]. Assert that list(result.columns) == ["name", "science"].`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 55, 91, 40], "science": [75, 60, 45, 35]})
# Create result below
`,
      tests:[{type:'assert', expr:'list(result.columns) == ["name", "science"]', label:'result has exactly the name and science columns'}]
    }
  ],
  quiz:[
    {
      q:'Which symbol combines two pandas conditions where BOTH must be true?',
      options:['and','&','|','+'],
      correct:1,
      explain:'& is pandas\' element-wise AND — Python\'s normal "and" keyword does not work on whole columns.'
    },
    {
      q:'Which symbol combines two pandas conditions where AT LEAST ONE must be true?',
      options:['or','&','|','*'],
      correct:2,
      explain:'| is pandas\' element-wise OR, the counterpart to &.'
    },
    {
      q:'Why does each condition need its own parentheses when combining with & or |?',
      options:['It looks neater','& and | bind more tightly than comparisons like >=, so parentheses avoid the wrong grouping','pandas requires exactly two parentheses per line','It makes the code run faster'],
      correct:1,
      explain:'Without parentheses around each comparison, Python groups the & or | with the wrong parts of the expression and raises an error.'
    },
    {
      q:'In df.loc[(cond1) & (cond2), ["a","b"]], what comes after the comma?',
      options:['Another condition','The column list to select','The DataFrame name','Nothing, it is optional'],
      correct:1,
      explain:'The part after the comma in .loc[] always selects columns, exactly like in Week 2.'
    }
  ],
  sandboxStarter3:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 55, 91, 40], "science": [75, 60, 45, 35]})

# ~ inverts a condition - "NOT this"
not_both = df[~((df["maths"] >= 70) & (df["science"] >= 70))]
print(not_both)
`,
  stretchChallenge:{
    title:'Find honours students, excluding one by name',
    desc:`Create a DataFrame df with "name" (Ada, Ben, Chi, Dee, Eve), "maths" (82, 55, 91, 40, 88), and "science"
      (75, 60, 45, 35, 80). Create qualifying = df[(df["maths"] &gt;= 70) &amp; (df["science"] &gt;= 70) &amp;
      (df["name"] != "Ada")]. Assert list(qualifying["name"]) == ["Eve"] — both Ada and Eve qualify for honours,
      but Ada is excluded by name.`,
    starter:`import pandas as pd
# Create df and qualifying below
`,
    tests:[
      {type:'assert', expr:'list(qualifying["name"]) == ["Eve"]', label:'qualifying correctly contains only Eve'}
    ]
  }
},
{
  key:'week4', num:4, title:'Sorting and Ranking',
  scenarioTag:'Real world: a leaderboard for the school assembly',
  scenario:`The head teacher wants a leaderboard for the school assembly — top scorers first. Filtering (Weeks 1-3)
    tells you WHICH rows match a condition, but says nothing about ORDER. Sorting is how you turn a table into a
    ranked list.`,
  objectives:[
    'Sort rows by a column with .sort_values()',
    'Sort in descending order with ascending=False',
    'Sort by more than one column at once',
    'Get just the top (or bottom) rows with .head()/.tail()'
  ],
  conceptHtml:`
    <p><code>.sort_values("column")</code> reorders the WHOLE table by that column, smallest to largest by default.
    Add <code>ascending=False</code> to flip it to largest-first — exactly what a leaderboard needs:</p>
    <pre class="code-block">import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})

leaderboard = scores.sort_values("score", ascending=False)
print(leaderboard)</pre>
    <p>Once sorted, <code>.head(n)</code> gives you just the first <code>n</code> rows (the top scorers, if already
    sorted descending), and <code>.tail(n)</code> gives you the last <code>n</code>:</p>
    <pre class="code-block">top_two = leaderboard.head(2)
print(top_two)</pre>
    <p>You can also sort by more than one column at once — useful for "group by subject, then rank within each
    subject" — by passing a LIST of column names, and a matching list of True/False for each one's direction:</p>
    <pre class="code-block">scores2 = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [78, 92, 65, 88]})
multi_sorted = scores2.sort_values(["subject", "score"], ascending=[True, False])
print(multi_sorted)</pre>
    <h3>Let's break down the sorting code, line by line</h3>
    <ul>
      <li><code>scores.sort_values("score", ascending=False)</code> — <code>"score"</code> says WHICH column
        controls the order; <code>ascending=False</code> flips the default smallest-first behavior to
        largest-first. Leaving out <code>ascending=False</code> would put the lowest scorer at the top instead.</li>
      <li><code>leaderboard.head(2)</code> — takes the first 2 rows of whatever the table's CURRENT order is. Since
        <code>leaderboard</code> is already sorted largest-first, this gives the top 2 scorers.</li>
      <li><code>scores2.sort_values(["subject", "score"], ascending=[True, False])</code> — two lists, matched up
        position-by-position: sort by <code>"subject"</code> first (ascending, alphabetical), and WITHIN each equal
        subject, sort by <code>"score"</code> (descending). This is how you get "ranked within each group."</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
leaderboard = scores.sort_values("score", ascending=False)
print(leaderboard)
`,
  sandboxStarter2:`import pandas as pd
scores2 = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [78, 92, 65, 88]})
multi_sorted = scores2.sort_values(["subject", "score"], ascending=[True, False])
print(multi_sorted)
top_two = scores2.sort_values("score", ascending=False).head(2)
print(top_two)
`,
  exercises:[
    {
      title:'Sort ascending (smallest first)',
      desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee) and "score" (78, 92, 65, 88). Create
        sorted_asc = df.sort_values("score"). Assert that list(sorted_asc["name"]) == ["Chi", "Ada", "Dee", "Ben"] —
        lowest score (Chi, 65) first, by default.`,
      starter:`import pandas as pd
# Create df and sorted_asc below
`,
      tests:[{type:'assert', expr:'list(sorted_asc["name"]) == ["Chi", "Ada", "Dee", "Ben"]', label:'sorted_asc is correctly ordered smallest-first'}]
    },
    {
      title:'Sort descending (largest first)',
      desc:`Using the same df, create sorted_desc = df.sort_values("score", ascending=False). Assert that
        list(sorted_desc["name"]) == ["Ben", "Dee", "Ada", "Chi"] — highest score (Ben, 92) first.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
# Create sorted_desc below
`,
      tests:[{type:'assert', expr:'list(sorted_desc["name"]) == ["Ben", "Dee", "Ada", "Chi"]', label:'sorted_desc is correctly ordered largest-first'}]
    },
    {
      title:'Get the top 2 scorers',
      desc:`Using the same df, create top2 = df.sort_values("score", ascending=False).head(2). Assert that
        list(top2["name"]) == ["Ben", "Dee"] — .head(2) takes the first 2 rows of the already-sorted table.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
# Create top2 below
`,
      tests:[{type:'assert', expr:'list(top2["name"]) == ["Ben", "Dee"]', label:'top2 correctly contains Ben and Dee'}]
    },
    {
      title:'Sort by two columns',
      desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee), "subject" (Math, Math, Science,
        Science), and "score" (78, 92, 65, 88). Create multi_sorted = df.sort_values(["subject", "score"],
        ascending=[True, False]). Assert that list(multi_sorted["name"]) == ["Ben", "Ada", "Dee", "Chi"] — subjects
        alphabetically (Math before Science), and within each subject, highest score first.`,
      starter:`import pandas as pd
# Create df and multi_sorted below
`,
      tests:[{type:'assert', expr:'list(multi_sorted["name"]) == ["Ben", "Ada", "Dee", "Chi"]', label:'multi_sorted is correctly ordered by subject then score'}]
    },
    {
      title:'Get the bottom 2 scorers',
      desc:`Using the same df (name: Ada, Ben, Chi, Dee / score: 78, 92, 65, 88), create bottom2 =
        df.sort_values("score").head(2). Assert that list(bottom2["name"]) == ["Chi", "Ada"] — sorting ascending
        (the default) then taking the first 2 gives the LOWEST scorers.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
# Create bottom2 below
`,
      tests:[{type:'assert', expr:'list(bottom2["name"]) == ["Chi", "Ada"]', label:'bottom2 correctly contains Chi and Ada'}]
    },
    {
      title:'Reset the index after sorting',
      desc:`Using the same df, create leaderboard = df.sort_values("score", ascending=False).reset_index(drop=True).
        Assert that list(leaderboard.index) == [0, 1, 2, 3] — sorting keeps the ORIGINAL row labels by default,
        so reset_index(drop=True) gives the newly-ordered table fresh, sequential labels instead.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})
# Create leaderboard below
`,
      tests:[{type:'assert', expr:'list(leaderboard.index) == [0, 1, 2, 3]', label:'leaderboard has a fresh, sequential index'}]
    }
  ],
  quiz:[
    {
      q:'What does df.sort_values("score") do by default?',
      options:['Sorts largest-first','Sorts smallest-first','Removes the score column','Filters out low scores'],
      correct:1,
      explain:'sort_values sorts smallest-to-largest unless you pass ascending=False.'
    },
    {
      q:'How do you sort largest-first?',
      options:['.sort_values("score", ascending=False)','.sort_values("score", descending=True)','.sort_values("score").reverse()','.sort_desc("score")'],
      correct:0,
      explain:'ascending=False flips the default order to largest-first.'
    },
    {
      q:'What does .head(2) do after sorting?',
      options:['Removes the top 2 rows','Returns the first 2 rows of the current order','Sorts by 2 columns','Returns exactly 2 columns'],
      correct:1,
      explain:'.head(n) returns the first n rows of whatever order the table is currently in.'
    },
    {
      q:'To sort by "subject" then "score" within each subject, what do you pass to sort_values?',
      options:['Two separate .sort_values() calls only','A list of both column names: ["subject", "score"]','Just "subject"','A dictionary of columns'],
      correct:1,
      explain:'Passing a list of column names sorts by the first column, then by the next within ties, and so on.'
    }
  ],
  sandboxStarter3:`import pandas as pd
scores = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, 92, 65, 88]})

bottom_two = scores.sort_values("score").head(2)
print(bottom_two)

# reset_index gives sorted rows fresh, sequential index labels
leaderboard = scores.sort_values("score", ascending=False).reset_index(drop=True)
print(leaderboard)
`,
  stretchChallenge:{
    title:'Build a clean top-3 leaderboard',
    desc:`Create a DataFrame df with "name" (Ada, Ben, Chi, Dee, Eve) and "score" (78, 92, 65, 88, 95). Create top3 =
      df.sort_values("score", ascending=False).head(3).reset_index(drop=True). Assert that
      list(top3["name"]) == ["Eve", "Ben", "Dee"] AND list(top3.index) == [0, 1, 2].`,
    starter:`import pandas as pd
# Create df and top3 below
`,
    tests:[
      {type:'assert', expr:'list(top3["name"]) == ["Eve", "Ben", "Dee"]', label:'top3 correctly contains Eve, Ben, Dee in order'},
      {type:'assert', expr:'list(top3.index) == [0, 1, 2]', label:'top3 has a fresh, sequential index'}
    ]
  }
},
{
  key:'week5', num:5, title:'Grouping and Aggregating',
  scenarioTag:'Real world: average score per subject, not just one big average',
  scenario:`.mean() on a whole column gives ONE number for everyone. The school actually wants to know the average
    PER SUBJECT — Math's average, separately from Science's. .groupby() splits your data into groups first, so any
    calculation you do happens once per group instead of once for everything.`,
  objectives:[
    'Split rows into groups with .groupby()',
    'Compute an aggregate (like .mean()) per group',
    "Look up one specific group's result",
    'Apply multiple aggregations at once with .agg()'
  ],
  conceptHtml:`
    <p><code>.groupby("column")</code> splits your DataFrame into groups, one per unique value in that column.
    Follow it with a column and an aggregation like <code>.mean()</code>, and pandas computes that aggregation
    ONCE PER GROUP instead of once for the whole table:</p>
    <pre class="code-block">import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [82, 92, 65, 88]})

grouped = df.groupby("subject")["score"].mean()
print(grouped)
print(grouped["Math"])</pre>
    <p>The result of a groupby+aggregate is itself indexed by the group names, so you can look up one specific
    group's value using square brackets, just like a dictionary. You can also compute SEVERAL aggregations at once
    with <code>.agg([...])</code>:</p>
    <pre class="code-block">agg_result = df.groupby("subject")["score"].agg(["mean", "max"])
print(agg_result)
print(agg_result.loc["Math", "max"])</pre>
    <h3>Let's break down the groupby code, line by line</h3>
    <ul>
      <li><code>df.groupby("subject")</code> — splits the rows into groups by their <code>"subject"</code> value
        (here, a "Math" group and a "Science" group). On its own, this doesn't calculate anything yet — it just
        organizes the rows.</li>
      <li><code>["score"].mean()</code> — chained on after <code>.groupby(...)</code>, exactly like Week 1's
        <code>df["score"].mean()</code>, except now it runs once PER GROUP instead of once overall.</li>
      <li><code>grouped["Math"]</code> — the grouped result is indexed by group name, so square brackets look up
        one group's value, the same way you'd look up a value in a dictionary by its key.</li>
      <li><code>.agg(["mean", "max"])</code> — instead of one aggregation, a LIST of them — the result is a small
        table with one row per group and one column per aggregation, looked up with <code>.loc[group, column]</code>
        exactly like Week 2's <code>.loc[]</code>.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [82, 92, 65, 88]})
grouped = df.groupby("subject")["score"].mean()
print(grouped)
`,
  sandboxStarter2:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [82, 92, 65, 88]})
agg_result = df.groupby("subject")["score"].agg(["mean", "max"])
print(agg_result)
print(agg_result.loc["Math", "max"])
`,
  exercises:[
    {
      title:'Average score per subject',
      desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee), "subject" (Math, Math, Science,
        Science), and "score" (82, 92, 65, 88). Create grouped = df.groupby("subject")["score"].mean(). Assert that
        grouped["Math"] == 87.0.`,
      starter:`import pandas as pd
# Create df and grouped below
`,
      tests:[{type:'assert', expr:'grouped["Math"] == 87.0', label:"grouped['Math'] correctly equals 87.0"}]
    },
    {
      title:"Look up Science's average",
      desc:`Using the same grouped result, assert that grouped["Science"] == 76.5 — looking up a different group's
        value works exactly the same way, just with a different key.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [82, 92, 65, 88]})
grouped = df.groupby("subject")["score"].mean()
# Add your assert below
`,
      tests:[{type:'assert', expr:'grouped["Science"] == 76.5', label:"grouped['Science'] correctly equals 76.5"}]
    },
    {
      title:'Compute mean and max together',
      desc:`Using the same df, create agg_result = df.groupby("subject")["score"].agg(["mean", "max"]). Assert that
        agg_result.loc["Math", "max"] == 92 — .agg() with a list computes several aggregations in one table,
        looked up with .loc[group, aggregation].`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [82, 92, 65, 88]})
# Create agg_result below
`,
      tests:[{type:'assert', expr:'agg_result.loc["Math", "max"] == 92', label:'agg_result correctly reports 92 as the Math max'}]
    },
    {
      title:'Find the top-performing subject',
      desc:`Using the same grouped mean from the first exercise, assert that grouped.idxmax() == "Math" —
        .idxmax() returns the GROUP LABEL with the highest value, not the value itself.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [82, 92, 65, 88]})
grouped = df.groupby("subject")["score"].mean()
# Add your assert below
`,
      tests:[{type:'assert', expr:'grouped.idxmax() == "Math"', label:'grouped.idxmax() correctly identifies Math'}]
    },
    {
      title:'Count students per subject',
      desc:`Using the same df (name/subject/score, same values), create grouped_count =
        df.groupby("subject").size(). Assert that grouped_count["Math"] == 2 — .size() counts how many rows
        fall in each group, without needing to pick a specific column first.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [82, 92, 65, 88]})
# Create grouped_count below
`,
      tests:[{type:'assert', expr:'grouped_count["Math"] == 2', label:"grouped_count['Math'] correctly equals 2"}]
    },
    {
      title:'Find the lowest score per subject',
      desc:`Using the same df, create grouped_min = df.groupby("subject")["score"].min(). Assert that
        grouped_min["Science"] == 65 — .min() works per-group exactly like .mean() and .max() do.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [82, 92, 65, 88]})
# Create grouped_min below
`,
      tests:[{type:'assert', expr:'grouped_min["Science"] == 65', label:"grouped_min['Science'] correctly equals 65"}]
    }
  ],
  quiz:[
    {
      q:'What does df.groupby("subject") do on its own?',
      options:['Calculates the average immediately','Splits rows into groups by subject, ready for an aggregation','Deletes the subject column','Sorts by subject'],
      correct:1,
      explain:'.groupby() alone just organizes rows into groups — you still need to chain on an aggregation like .mean().'
    },
    {
      q:'After grouped = df.groupby("subject")["score"].mean(), how do you get just the Math average?',
      options:['grouped.Math()','grouped["Math"]','grouped(Math)','grouped.loc.Math'],
      correct:1,
      explain:'The grouped result is indexed by group name, so square brackets look up one group\'s value.'
    },
    {
      q:'What does .agg(["mean", "max"]) do?',
      options:['Picks the larger of the two','Computes several aggregations at once, one per column of the result','Deletes rows below the mean','Only works with numbers below the max'],
      correct:1,
      explain:'.agg() with a list computes multiple aggregations in one call, producing one result column per aggregation.'
    },
    {
      q:'What does .idxmax() return, compared to .max()?',
      options:['The same thing','The LABEL of the group with the highest value, not the value itself','The lowest value','The number of groups'],
      correct:1,
      explain:'.idxmax() answers "which group?" while .max() answers "what is the highest value?"'
    }
  ],
  sandboxStarter3:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [82, 92, 65, 88]})

counts = df.groupby("subject").size()
print(counts)

lowest_per_subject = df.groupby("subject")["score"].min()
print(lowest_per_subject)
`,
  stretchChallenge:{
    title:'Find the subject with the lowest average',
    desc:`Using the same df, create grouped = df.groupby("subject")["score"].mean(). Assert that
      grouped.idxmin() == "Science" — .idxmin() is the mirror image of .idxmax(), returning the group LABEL with
      the lowest value.`,
    starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "subject": ["Math","Math","Science","Science"], "score": [82, 92, 65, 88]})
# Create grouped below
`,
    tests:[
      {type:'assert', expr:'grouped.idxmin() == "Science"', label:'grouped.idxmin() correctly identifies Science'}
    ]
  }
},
{
  key:'week6', num:6, title:'Creating and Modifying Columns',
  scenarioTag:'Real world: adding a total score and a pass/fail column',
  scenario:`The gradebook needs a "total" column (maths + science combined) and a "status" column showing who's on
    track. Instead of typing these out by hand for every student, pandas lets you calculate a whole new column in
    one line — for every row at once.`,
  objectives:[
    'Create a new column from existing ones with vectorized math',
    'Create a True/False column from a condition',
    'Safely update specific values with .loc[condition, column] = value',
    'Understand why .loc[] is the correct way to assign, not chained indexing'
  ],
  conceptHtml:`
    <p>Assigning to a column name that doesn't exist yet CREATES it. You can build a new column directly from
    existing ones with ordinary math — pandas applies it to every row automatically, no loop needed:</p>
    <pre class="code-block">import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 45, 91, 78], "science": [75, 40, 40, 80]})

df["total"] = df["maths"] + df["science"]
print(df)</pre>
    <p>The same idea works with a CONDITION instead of math — this creates a column of True/False values, one per
    row:</p>
    <pre class="code-block">df["passed"] = df["total"] >= 100
print(df)</pre>
    <p>To set DIFFERENT text depending on a condition (not just True/False), use <code>.loc[condition, column] =
    value</code> — this is the one safe, correct way to update specific values in pandas. <strong>Never</strong>
    write <code>df[condition][column] = value</code> (selecting twice in a row before assigning) — it can silently
    fail to update anything at all, and modern pandas will refuse to run it:</p>
    <pre class="code-block">df.loc[df["total"] < 100, "status"] = "Needs Support"
df.loc[df["total"] >= 100, "status"] = "On Track"
print(df)</pre>
    <h3>Let's break down the column-assignment code, line by line</h3>
    <ul>
      <li><code>df["total"] = df["maths"] + df["science"]</code> — <code>df["maths"] + df["science"]</code> adds
        the two columns row-by-row (Ada's maths + Ada's science, Ben's maths + Ben's science, and so on), and
        assigning the result to <code>df["total"]</code> creates that column since it didn't exist before.</li>
      <li><code>df["passed"] = df["total"] >= 100</code> — same pattern, but the right-hand side is a condition
        instead of arithmetic, so the new column holds True/False instead of numbers.</li>
      <li><code>df.loc[df["total"] < 100, "status"] = "Needs Support"</code> — everything before the comma inside
        <code>.loc[]</code> picks WHICH ROWS to update (only the ones where total is under 100); the part after the
        comma picks WHICH COLUMN; the value after <code>=</code> is what gets written into just those cells. Two
        separate <code>.loc[]</code> lines like this let you set different values for different groups of rows.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 45, 91, 78], "science": [75, 40, 40, 80]})
df["total"] = df["maths"] + df["science"]
print(df)
`,
  sandboxStarter2:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 45, 91, 78], "science": [75, 40, 40, 80]})
df["total"] = df["maths"] + df["science"]
df["passed"] = df["total"] >= 100
df.loc[df["total"] < 100, "status"] = "Needs Support"
df.loc[df["total"] >= 100, "status"] = "On Track"
print(df)
`,
  exercises:[
    {
      title:'Create a total column',
      desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee), "maths" (82, 45, 91, 78), and "science"
        (75, 40, 40, 80). Create df["total"] = df["maths"] + df["science"]. Assert that
        list(df["total"]) == [157, 85, 131, 158].`,
      starter:`import pandas as pd
# Create df and the total column below
`,
      tests:[{type:'assert', expr:'list(df["total"]) == [157, 85, 131, 158]', label:'df["total"] has the correct combined scores'}]
    },
    {
      title:'Create a pass/fail column',
      desc:`Using the same df (with "total" already added), create df["passed"] = df["total"] >= 100. Assert that
        list(df["passed"]) == [True, False, True, True] — Ben's total of 85 is the only one under 100.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 45, 91, 78], "science": [75, 40, 40, 80]})
df["total"] = df["maths"] + df["science"]
# Create the passed column below
`,
      tests:[{type:'assert', expr:'list(df["passed"]) == [True, False, True, True]', label:'df["passed"] correctly marks Ben as False'}]
    },
    {
      title:'Set different text with .loc',
      desc:`Using the same df, use .loc[] to set df["status"] = "Needs Support" for rows where total < 100, and
        "On Track" for rows where total >= 100 (two separate .loc[] assignment lines). Assert that
        list(df["status"]) == ["On Track", "Needs Support", "On Track", "On Track"].`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 45, 91, 78], "science": [75, 40, 40, 80]})
df["total"] = df["maths"] + df["science"]
# Set df["status"] using two .loc[] lines below
`,
      tests:[{type:'assert', expr:'list(df["status"]) == ["On Track", "Needs Support", "On Track", "On Track"]', label:'df["status"] correctly reflects each student\'s total'}]
    },
    {
      title:'Update one value safely',
      desc:`Using the same df, Chi's science score was recorded wrong — it should be 90, not 40. Use
        df.loc[df["name"] == "Chi", "science"] = 90 to fix it (never df[df["name"]=="Chi"]["science"] = 90 — that
        chained form can silently fail to update anything). Assert that
        int(df.loc[df["name"] == "Chi", "science"].iloc[0]) == 90.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 45, 91, 78], "science": [75, 40, 40, 80]})
# Fix Chi's science score using .loc[] below
`,
      tests:[{type:'assert', expr:'int(df.loc[df["name"] == "Chi", "science"].iloc[0]) == 90', label:"Chi's science score is correctly updated to 90"}]
    },
    {
      title:'Create an average column',
      desc:`Using the same original df (maths: 82, 45, 91, 78 / science: 75, 40, 40, 80), create df["average"] =
        (df["maths"] + df["science"]) / 2. Assert that list(df["average"]) == [78.5, 42.5, 65.5, 79.0].`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 45, 91, 78], "science": [75, 40, 40, 80]})
# Create the average column below
`,
      tests:[{type:'assert', expr:'list(df["average"]) == [78.5, 42.5, 65.5, 79.0]', label:'df["average"] has the correct values'}]
    },
    {
      title:'Round the average column',
      desc:`Using the same df (with "average" already added), reassign df["average"] = df["average"].round().
        Assert that list(df["average"]) == [78.0, 42.0, 66.0, 79.0].`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 45, 91, 78], "science": [75, 40, 40, 80]})
df["average"] = (df["maths"] + df["science"]) / 2
# Round the average column below
`,
      tests:[{type:'assert', expr:'list(df["average"]) == [78.0, 42.0, 66.0, 79.0]', label:'df["average"] is correctly rounded'}]
    }
  ],
  quiz:[
    {
      q:'What happens when you assign to a column name that doesn\'t exist yet, like df["total"] = ...?',
      options:['pandas raises an error','It creates that column','It overwrites the first column','Nothing happens'],
      correct:1,
      explain:'Assigning to a new column name creates it, filled in with the value/expression on the right.'
    },
    {
      q:'What kind of values does df["passed"] = df["total"] >= 100 create?',
      options:['Text','True/False','Whole numbers only','Dates'],
      correct:1,
      explain:'A comparison produces a column of True/False values, one per row.'
    },
    {
      q:'Which is the SAFE way to update specific values in a column?',
      options:['df[condition][column] = value','df.loc[condition, column] = value','df.column[condition] = value','df.update(condition, value)'],
      correct:1,
      explain:'.loc[condition, column] = value is the correct, reliable way — chained indexing (selecting twice) can silently fail.'
    },
    {
      q:'Why should you avoid df[condition][column] = value?',
      options:['It is slower to type','It can silently fail to update the original DataFrame, and modern pandas may refuse to run it','It only works with numbers','It deletes the column'],
      correct:1,
      explain:'Chained indexing creates an intermediate copy, so the assignment may not actually reach the original DataFrame.'
    }
  ],
  sandboxStarter3:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 45, 91, 78], "science": [75, 40, 40, 80]})

df["average"] = (df["maths"] + df["science"]) / 2
df["average"] = df["average"].round(1)
print(df)
`,
  stretchChallenge:{
    title:'Add a 3-tier status column',
    desc:`Using df with a "total" column already added (maths + science), use THREE separate .loc[] lines to set
      df["status"] to "Needs Support" (total &lt; 100), "On Track" (100 &le; total &lt; 150), or "Excellent"
      (total &gt;= 150). Assert that
      list(df["status"]) == ["Excellent", "Needs Support", "On Track", "Excellent"].`,
    starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "maths": [82, 45, 91, 78], "science": [75, 40, 40, 80]})
df["total"] = df["maths"] + df["science"]
# Set df["status"] using three .loc[] lines below
`,
    tests:[
      {type:'assert', expr:'list(df["status"]) == ["Excellent", "Needs Support", "On Track", "Excellent"]', label:'df["status"] correctly reflects all three tiers'}
    ]
  }
},
{
  key:'week7', num:7, title:'Handling Missing Data',
  scenarioTag:'Real world: one student missed the test',
  scenario:`One student was absent for the science test, so their score is just... missing. Real data is almost
    never perfectly complete — pandas has built-in ways to find gaps, remove them, or fill them in, without your
    calculations breaking.`,
  objectives:[
    'Detect missing values with .isna()',
    'Remove rows with missing values using .dropna()',
    'Fill missing values with a default using .fillna()',
    'Understand that .mean() and similar methods automatically skip missing values'
  ],
  conceptHtml:`
    <p>A missing value in pandas shows up as <code>None</code> (or <code>NaN</code>, "Not a Number"). <code>.isna()</code>
    checks each value and returns True where it's missing:</p>
    <pre class="code-block">import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, None, 65, 88]})
print(df["score"].isna())
print(df["score"].isna().sum())   # how many are missing</pre>
    <p><code>.dropna()</code> removes any row with at least one missing value entirely; <code>.fillna(value)</code>
    instead keeps every row, replacing gaps with whatever value you choose. <strong>Always reassign the result</strong>
    (<code>df = df.fillna(...)</code>) rather than using <code>inplace=True</code> — reassignment behaves
    consistently across pandas versions, while <code>inplace=True</code> can behave unpredictably with newer
    pandas' copy-on-write behavior:</p>
    <pre class="code-block">dropped = df.dropna()
print(dropped)          # Ben's row is gone entirely

filled = df.fillna(0)
print(filled)            # Ben's score is now 0 instead of missing</pre>
    <p>Handy fact: <code>.mean()</code> (and most other aggregations) automatically SKIP missing values on their
    own — you don't need to drop or fill anything first just to compute an average:</p>
    <pre class="code-block">print(df["score"].mean())   # averages only Ada, Chi and Dee — 77.0, not affected by Ben's gap</pre>
    <h3>Let's break down the missing-data code, line by line</h3>
    <ul>
      <li><code>df["score"].isna()</code> — one True/False per row, True exactly where the value is missing;
        <code>.sum()</code> on a True/False column counts the Trues (True counts as 1, False as 0).</li>
      <li><code>df.dropna()</code> — returns a NEW DataFrame with any row containing a gap removed entirely. Ben's
        whole row disappears, not just his missing score.</li>
      <li><code>df.fillna(0)</code> — returns a NEW DataFrame with every gap replaced by <code>0</code> (or
        whatever value you pass), keeping all the original rows.</li>
      <li><code>df["score"].mean()</code> — no <code>.dropna()</code>/<code>.fillna()</code> needed here at all;
        pandas' own aggregation methods already know to ignore missing values automatically.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, None, 65, 88]})
print(df["score"].isna())
print(df["score"].isna().sum())
`,
  sandboxStarter2:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, None, 65, 88]})
dropped = df.dropna()
print(dropped)
filled = df.fillna(0)
print(filled)
print(df["score"].mean())
`,
  exercises:[
    {
      title:'Count the missing values',
      desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee) and "score" (78, None, 65, 88). Assert
        that int(df["score"].isna().sum()) == 1 — exactly one score is missing.`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'assert', expr:'int(df["score"].isna().sum()) == 1', label:'Correctly counts 1 missing value'}]
    },
    {
      title:'Drop rows with missing data',
      desc:`Using the same df, create dropped = df.dropna(). Assert that list(dropped["name"]) == ["Ada", "Chi",
        "Dee"] — Ben's entire row is removed since his score was missing.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, None, 65, 88]})
# Create dropped below
`,
      tests:[{type:'assert', expr:'list(dropped["name"]) == ["Ada", "Chi", "Dee"]', label:"dropped correctly excludes Ben's row"}]
    },
    {
      title:'Fill missing values with a default',
      desc:`Using the same df, create filled = df.fillna(0). Assert that list(filled["score"]) == [78.0, 0.0, 65.0,
        88.0] — Ben's row is kept, with 0 in place of the missing score. Remember: always reassign (or create a new
        variable like here) rather than using inplace=True.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, None, 65, 88]})
# Create filled below
`,
      tests:[{type:'assert', expr:'list(filled["score"]) == [78.0, 0.0, 65.0, 88.0]', label:'filled correctly replaces the gap with 0'}]
    },
    {
      title:'See mean() skip gaps automatically',
      desc:`Using the original df (score: 78, None, 65, 88 — NOT dropped or filled), assert that
        df["score"].mean() == 77.0 — .mean() automatically ignores the missing value and averages only the other
        three (78+65+88)/3 = 77.0.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, None, 65, 88]})
# Add your assert below
`,
      tests:[{type:'assert', expr:'df["score"].mean() == 77.0', label:'df["score"].mean() correctly equals 77.0'}]
    },
    {
      title:"Fill missing values with the column's mean",
      desc:`Using the same original df, create filled_mean = df.fillna({"score": df["score"].mean()}). Assert
        that list(filled_mean["score"]) == [78.0, 77.0, 65.0, 88.0] — instead of a fixed number like 0, Ben's gap
        is filled with the column's own average (77.0), a common way to fill gaps without skewing the data.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, None, 65, 88]})
# Create filled_mean below
`,
      tests:[{type:'assert', expr:'list(filled_mean["score"]) == [78.0, 77.0, 65.0, 88.0]', label:"filled_mean correctly fills the gap with the column's mean"}]
    },
    {
      title:'Count how many values are present',
      desc:`Using the same original df, assert that int(df["score"].notna().sum()) == 3 — .notna() is the
        opposite of .isna(), True exactly where data IS present.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, None, 65, 88]})
# Add your assert below
`,
      tests:[{type:'assert', expr:'int(df["score"].notna().sum()) == 3', label:'Correctly counts 3 present values'}]
    }
  ],
  quiz:[
    {
      q:'What does .isna() return for each value?',
      options:['The value itself','True if missing, False otherwise','Always True','The row number'],
      correct:1,
      explain:'.isna() checks each value and marks it True exactly where data is missing.'
    },
    {
      q:'What does .dropna() do?',
      options:['Fills gaps with 0','Removes any row containing at least one missing value','Deletes the whole DataFrame','Counts missing values'],
      correct:1,
      explain:'.dropna() returns a new DataFrame with incomplete rows removed entirely.'
    },
    {
      q:'Why should you write df = df.fillna(0) instead of df.fillna(0, inplace=True)?',
      options:['inplace=True is faster','Reassignment behaves consistently across pandas versions, unlike inplace=True with newer copy-on-write behavior','fillna only works with inplace=True','There is no difference'],
      correct:1,
      explain:'Reassigning the result is the safer, version-independent pattern for updating a DataFrame.'
    },
    {
      q:'Do you need to .dropna() or .fillna() before calling .mean()?',
      options:['Yes, always','No — .mean() automatically skips missing values on its own','Only for .dropna()','Only if there are more than 2 gaps'],
      correct:1,
      explain:'.mean() and most other aggregations automatically ignore missing values without any extra step.'
    }
  ],
  sandboxStarter3:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee"], "score": [78, None, 65, 88]})

# Fill gaps with the column's own average, instead of a fixed number
filled_with_mean = df.fillna({"score": df["score"].mean()})
print(filled_with_mean)

# .notna() is the opposite of .isna() - True where data IS present
print(df["score"].notna())
`,
  stretchChallenge:{
    title:'Handle gaps in two different columns at once',
    desc:`Create a DataFrame df with "name" (Ada, Ben, Chi, Dee), "maths" (82, None, 91, 78), and "science"
      (75, 40, None, 80) — the gaps are in DIFFERENT rows for each column. Create filled =
      df.fillna({"maths": 0, "science": 0}) — a dictionary lets you fill different columns' gaps in one call.
      Assert that list(filled["maths"]) == [82.0, 0.0, 91.0, 78.0] AND
      list(filled["science"]) == [75.0, 40.0, 0.0, 80.0].`,
    starter:`import pandas as pd
# Create df and filled below
`,
    tests:[
      {type:'assert', expr:'list(filled["maths"]) == [82.0, 0.0, 91.0, 78.0]', label:"filled['maths'] correctly fills its gap"},
      {type:'assert', expr:'list(filled["science"]) == [75.0, 40.0, 0.0, 80.0]', label:"filled['science'] correctly fills its gap"}
    ]
  }
},
{
  key:'week8', num:8, title:'Merging Two Tables',
  scenarioTag:'Real world: the class roster and the exam results are in separate tables',
  scenario:`The school keeps a class roster (student ID + name) in one place, and exam results (student ID +
    score) in another. To analyse them together, you need to COMBINE two tables using the ID they share —
    exactly what a real school's information system does behind the scenes.`,
  objectives:[
    'Understand why related data often lives in two separate tables',
    'Merge two DataFrames on a shared key column with .merge()',
    'Understand what an inner join keeps (only matching rows)',
    'Combine merged data with earlier skills like filtering'
  ],
  conceptHtml:`
    <p><code>.merge()</code> combines two DataFrames using a column they both share — here, <code>student_id</code>.
    For every row where that ID appears in BOTH tables, you get one combined row with all the columns from both:</p>
    <pre class="code-block">import pandas as pd
roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]})
scores = pd.DataFrame({"student_id": [1,2,3], "score": [82, 45, 91]})

merged = roster.merge(scores, on="student_id")
print(merged)</pre>
    <p>Notice <code>roster</code> has 4 students but <code>scores</code> only has 3 (Dee's result hasn't been
    entered yet). By default, <code>.merge()</code> does an <strong>inner join</strong>: it keeps only the rows
    where the id appears in BOTH tables — so Dee, who has no matching score, is left out of the result entirely.</p>
    <p>Once merged, everything you already know still works — filtering, selecting, sorting:</p>
    <pre class="code-block">top = merged.loc[merged["score"] >= 80, ["name", "score"]]
print(top)</pre>
    <h3>Let's break down the merge code, line by line</h3>
    <ul>
      <li><code>roster.merge(scores, on="student_id")</code> — <code>on="student_id"</code> tells pandas which
        column to match rows by. Both DataFrames must have a column with that exact name.</li>
      <li>The result has ALL the columns from both tables (<code>student_id</code>, <code>name</code>,
        <code>score</code>) combined into one row per matching student.</li>
      <li>Dee not appearing in the result is the "inner join" behavior — merge only KEEPS rows that matched in both
        tables; it doesn't invent a blank score for her.</li>
      <li><code>merged.loc[merged["score"] >= 80, ["name", "score"]]</code> — exactly Week 2/3's <code>.loc[]</code>
        pattern, just applied to the merged result instead of a single original table.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]})
scores = pd.DataFrame({"student_id": [1,2,3], "score": [82, 45, 91]})
merged = roster.merge(scores, on="student_id")
print(merged)
`,
  sandboxStarter2:`import pandas as pd
roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]})
scores = pd.DataFrame({"student_id": [1,2,3], "score": [82, 45, 91]})
merged = roster.merge(scores, on="student_id")
top = merged.loc[merged["score"] >= 80, ["name", "score"]]
print(top)
`,
  exercises:[
    {
      title:'Merge the roster with the scores',
      desc:`Create roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]}) and
        scores = pd.DataFrame({"student_id": [1,2,3], "score": [82, 45, 91]}). Create
        merged = roster.merge(scores, on="student_id"). Assert that len(merged) == 3.`,
      starter:`import pandas as pd
# Create roster, scores and merged below
`,
      tests:[{type:'assert', expr:'len(merged) == 3', label:'merged correctly has 3 rows'}]
    },
    {
      title:'Check which students are in the merged result',
      desc:`Using the same merged from the first exercise, assert that
        list(merged["name"]) == ["Ada", "Ben", "Chi"] — merged keeps its rows in the same order as roster, but only
        for students who also have a score.`,
      starter:`import pandas as pd
roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]})
scores = pd.DataFrame({"student_id": [1,2,3], "score": [82, 45, 91]})
# Create merged below
`,
      tests:[{type:'assert', expr:'list(merged["name"]) == ["Ada", "Ben", "Chi"]', label:'merged correctly contains Ada, Ben and Chi in order'}]
    },
    {
      title:'Understand who gets excluded',
      desc:`Using the same merged, assert that "Dee" not in list(merged["name"]) — Dee has no matching row in
        scores, so the inner join (the default for .merge()) leaves her out entirely, rather than including her
        with a blank score.`,
      starter:`import pandas as pd
roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]})
scores = pd.DataFrame({"student_id": [1,2,3], "score": [82, 45, 91]})
# Create merged below
`,
      tests:[{type:'assert', expr:'"Dee" not in list(merged["name"])', label:'Dee is correctly excluded from merged'}]
    },
    {
      title:'Filter the merged result',
      desc:`Using merged from the first exercise, create top = merged.loc[merged["score"] >= 80, ["name",
        "score"]]. Assert that list(top["name"]) == ["Ada", "Chi"] — the same .loc[] filtering pattern from Weeks
        2-3, now applied after a merge.`,
      starter:`import pandas as pd
roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]})
scores = pd.DataFrame({"student_id": [1,2,3], "score": [82, 45, 91]})
merged = roster.merge(scores, on="student_id")
# Create top below
`,
      tests:[{type:'assert', expr:'list(top["name"]) == ["Ada", "Chi"]', label:'top correctly contains Ada and Chi'}]
    },
    {
      title:'Merge tables with differently-named keys',
      desc:`Create roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]}) and
        classes = pd.DataFrame({"id": [1,2,3,4], "homeroom": ["9A","9B","9A","9B"]}). Create merged =
        roster.merge(classes, left_on="student_id", right_on="id") — when the shared column has a different name
        in each table, left_on/right_on tell pandas which column to match on each side. Assert that
        list(merged["homeroom"]) == ["9A", "9B", "9A", "9B"].`,
      starter:`import pandas as pd
# Create roster, classes and merged below
`,
      tests:[{type:'assert', expr:'list(merged["homeroom"]) == ["9A", "9B", "9A", "9B"]', label:'merged correctly includes each homeroom'}]
    },
    {
      title:'Merge, then sort by score',
      desc:`Using roster and scores from the first exercise, create merged = roster.merge(scores,
        on="student_id"), then ranked = merged.sort_values("score", ascending=False). Assert that
        list(ranked["name"]) == ["Chi", "Ada", "Ben"] — everything from Week 4's sorting still works on a merged
        table.`,
      starter:`import pandas as pd
roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]})
scores = pd.DataFrame({"student_id": [1,2,3], "score": [82, 45, 91]})
# Create merged and ranked below
`,
      tests:[{type:'assert', expr:'list(ranked["name"]) == ["Chi", "Ada", "Ben"]', label:'ranked is correctly ordered by score'}]
    }
  ],
  quiz:[
    {
      q:'What does .merge() combine two DataFrames using?',
      options:['Their row positions','A shared column (the "on" parameter)','Alphabetical order','Their lengths'],
      correct:1,
      explain:'.merge(other, on="column") matches rows by the values in that shared column.'
    },
    {
      q:'By default, what does .merge() do with rows that only exist in one table?',
      options:['Includes them with blank values','Excludes them from the result (inner join)','Raises an error','Duplicates them'],
      correct:1,
      explain:'The default inner join only keeps rows where the key exists in BOTH tables.'
    },
    {
      q:'In roster.merge(scores, on="student_id"), what must be true about student_id?',
      options:['It must be the first column','It must exist with that exact name in both DataFrames','It must be unique across the whole file system','It must be a string'],
      correct:1,
      explain:'Both DataFrames need a column with the matching name specified in "on" for merge to work.'
    },
    {
      q:'Can you use .loc[] to filter a DataFrame that came from a .merge()?',
      options:['No, merged DataFrames are read-only','Yes — merged results work exactly like any other DataFrame','Only with .iloc[], never .loc[]','Only if you re-import pandas'],
      correct:1,
      explain:'A merged DataFrame is a normal DataFrame — every skill from earlier weeks still applies to it.'
    }
  ],
  sandboxStarter3:`import pandas as pd
roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]})
classes = pd.DataFrame({"id": [1,2,3,4], "homeroom": ["9A","9B","9A","9B"]})

# When the shared column has different names in each table, use left_on/right_on
merged = roster.merge(classes, left_on="student_id", right_on="id")
print(merged[["name", "homeroom"]])
`,
  stretchChallenge:{
    title:'Merge three tables together',
    desc:`Create roster (4 students), scores (only 3 of them), and classes = pd.DataFrame({"student_id": [1,2,3,4],
      "homeroom": ["9A","9B","9A","9B"]}). Chain two merges: full = roster.merge(scores,
      on="student_id").merge(classes, on="student_id"). Assert that list(full["homeroom"]) == ["9A", "9B", "9A"] —
      Dee is excluded by the first merge's inner join, so she never reaches the second merge either.`,
    starter:`import pandas as pd
roster = pd.DataFrame({"student_id": [1,2,3,4], "name": ["Ada","Ben","Chi","Dee"]})
scores = pd.DataFrame({"student_id": [1,2,3], "score": [82, 45, 91]})
classes = pd.DataFrame({"student_id": [1,2,3,4], "homeroom": ["9A","9B","9A","9B"]})
# Create full below (two chained .merge() calls)
`,
    tests:[
      {type:'assert', expr:'list(full["homeroom"]) == ["9A", "9B", "9A"]', label:'full correctly excludes Dee via both merges'}
    ]
  }
},
{
  key:'week9', num:9, title:'Summarizing Like a Pro',
  scenarioTag:'Real world: a one-page summary of the whole class',
  scenario:`Before a parents' evening, the teacher wants a quick overview: how many students got each grade, and a
    stats summary of scores — without scrolling through every single row. pandas has built-in tools for exactly
    this kind of "sum it all up" reporting.`,
  objectives:[
    'Count how many rows share each value with .value_counts()',
    'Count rows per group with .groupby().size()',
    'Get a full stats overview with .describe()',
    'Pull one specific stat out of a .describe() result'
  ],
  conceptHtml:`
    <p><code>.value_counts()</code> counts how many times each unique value appears in a column — perfect for "how
    many students got each grade":</p>
    <pre class="code-block">import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "grade": ["A","B","A","C","B"], "score": [82, 70, 91, 55, 68]})

counts = df["grade"].value_counts()
print(counts)
print(counts["A"])</pre>
    <p><code>.groupby("column").size()</code> answers a very similar question a different way — "how many rows are
    in each group" — useful when you're already using <code>.groupby()</code> for something else and want counts
    alongside it:</p>
    <pre class="code-block">sizes = df.groupby("grade").size()
print(sizes)</pre>
    <p><code>.describe()</code> gives you a whole stats overview in one call — count, mean, min, max, and more —
    all at once, instead of calling <code>.mean()</code>, <code>.max()</code>, etc. separately:</p>
    <pre class="code-block">summary = df["score"].describe()
print(summary)
print(summary["mean"])   # pull just the mean out, like any other lookup</pre>
    <h3>Let's break down the summary code, line by line</h3>
    <ul>
      <li><code>df["grade"].value_counts()</code> — groups by every unique value automatically (no
        <code>.groupby()</code> needed) and counts how many rows had each one, sorted largest count first.</li>
      <li><code>counts["A"]</code> — the result is indexed by the unique values themselves, so square brackets
        look up one value's count, the same lookup pattern from Week 5's grouped results.</li>
      <li><code>df.groupby("grade").size()</code> — a close cousin of <code>.value_counts()</code>: same idea
        (count per group), reached via <code>.groupby()</code> instead, useful when grouping is already part of a
        bigger calculation.</li>
      <li><code>df["score"].describe()</code> — returns count, mean, std (spread), min, the 25/50/75th percentiles,
        and max, all in one result — indexed by those names, so <code>summary["mean"]</code> pulls just that one
        value out, exactly like <code>counts["A"]</code> did above. Note <code>count</code> here only counts
        non-missing values (Week 7's <code>.isna()</code> gaps are automatically excluded).</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "grade": ["A","B","A","C","B"], "score": [82, 70, 91, 55, 68]})
counts = df["grade"].value_counts()
print(counts)
`,
  sandboxStarter2:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "grade": ["A","B","A","C","B"], "score": [82, 70, 91, 55, 68]})
sizes = df.groupby("grade").size()
print(sizes)
summary = df["score"].describe()
print(summary)
print(summary["mean"])
`,
  exercises:[
    {
      title:'Count how many students got each grade',
      desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee, Eli), "grade" (A, B, A, C, B), and
        "score" (82, 70, 91, 55, 68). Create counts = df["grade"].value_counts(). Assert that int(counts["A"]) == 2.`,
      starter:`import pandas as pd
# Create df and counts below
`,
      tests:[{type:'assert', expr:'int(counts["A"]) == 2', label:"counts['A'] correctly equals 2"}]
    },
    {
      title:'Count rows per group with groupby().size()',
      desc:`Using the same df, create sizes = df.groupby("grade").size(). Assert that int(sizes["B"]) == 2 —
        the same kind of count as value_counts(), reached through .groupby() instead.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "grade": ["A","B","A","C","B"], "score": [82, 70, 91, 55, 68]})
# Create sizes below
`,
      tests:[{type:'assert', expr:'int(sizes["B"]) == 2', label:"sizes['B'] correctly equals 2"}]
    },
    {
      title:'Get the average from describe()',
      desc:`Using the same df, create summary = df["score"].describe(). Assert that
        round(float(summary["mean"]), 2) == 73.2 — describe() computes the mean (and several other stats) for you
        in one call.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "grade": ["A","B","A","C","B"], "score": [82, 70, 91, 55, 68]})
# Create summary below
`,
      tests:[{type:'assert', expr:'round(float(summary["mean"]), 2) == 73.2', label:"summary['mean'] correctly equals 73.2"}]
    },
    {
      title:"See describe() skip missing values in its count",
      desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee, Eli) and "score" (82, 70, None, 55, 68) —
        Chi's score is missing. Create summary = df["score"].describe(). Assert that int(summary["count"]) == 4 —
        describe()'s count, like .mean(), automatically skips the missing value.`,
      starter:`import pandas as pd
# Create df and summary below
`,
      tests:[{type:'assert', expr:'int(summary["count"]) == 4', label:"summary['count'] correctly equals 4 (skipping the missing value)"}]
    },
    {
      title:'Get the proportion of each grade',
      desc:`Using the same df (name/grade/score, same values), create proportions =
        df["grade"].value_counts(normalize=True). Assert that round(float(proportions["A"]), 2) == 0.4 —
        normalize=True gives the FRACTION of rows with each value, instead of the raw count (2 out of 5 = 0.4).`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "grade": ["A","B","A","C","B"], "score": [82, 70, 91, 55, 68]})
# Create proportions below
`,
      tests:[{type:'assert', expr:'round(float(proportions["A"]), 2) == 0.4', label:"proportions['A'] correctly equals 0.4"}]
    },
    {
      title:'Find the maximum from describe()',
      desc:`Using the same df, create summary = df["score"].describe(). Assert that int(summary["max"]) == 91 —
        describe()'s result includes the maximum alongside the mean, exactly like a dictionary of stats.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "grade": ["A","B","A","C","B"], "score": [82, 70, 91, 55, 68]})
# Create summary below
`,
      tests:[{type:'assert', expr:'int(summary["max"]) == 91', label:"summary['max'] correctly equals 91"}]
    }
  ],
  quiz:[
    {
      q:'What does .value_counts() do?',
      options:['Sorts the column','Counts how many times each unique value appears','Removes duplicate rows','Calculates the average'],
      correct:1,
      explain:'.value_counts() counts occurrences of each unique value in a column.'
    },
    {
      q:'What is the relationship between .value_counts() and .groupby(col).size()?',
      options:['They are unrelated','Both count rows per unique value/group, reached two different ways','.size() only works on numbers','.value_counts() is always faster'],
      correct:1,
      explain:'They answer the same "how many per group" question through two different pandas approaches.'
    },
    {
      q:'What does .describe() return?',
      options:['Just the mean','A full stats overview: count, mean, min, max and more, in one result','A list of column names','The DataFrame\'s shape only'],
      correct:1,
      explain:'.describe() bundles several common statistics together in a single call.'
    },
    {
      q:'Does describe()\'s "count" include rows with missing values?',
      options:['Yes, always','No — it counts only the non-missing values, same as .mean()','Only if you ask for it','It always equals the total number of rows'],
      correct:1,
      explain:'Like most pandas aggregations, describe() automatically skips missing values when counting.'
    }
  ],
  sandboxStarter3:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "grade": ["A","B","A","C","B"], "score": [82, 70, 91, 55, 68]})

# normalize=True gives proportions instead of raw counts
proportions = df["grade"].value_counts(normalize=True)
print(proportions)

# describe() also works on a whole DataFrame of numeric columns, not just one Series
print(df[["score"]].describe())
`,
  stretchChallenge:{
    title:'Build a full summary report',
    desc:`Using the same df, create grade_counts = df["grade"].value_counts() and score_summary =
      df["score"].describe(). Assert that int(grade_counts.sum()) == 5 (every student is counted exactly once
      across all grades) AND round(float(score_summary["min"]), 1) == 55.0.`,
    starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "grade": ["A","B","A","C","B"], "score": [82, 70, 91, 55, 68]})
# Create grade_counts and score_summary below
`,
    tests:[
      {type:'assert', expr:'int(grade_counts.sum()) == 5', label:'grade_counts sums to the total number of students (5)'},
      {type:'assert', expr:'round(float(score_summary["min"]), 1) == 55.0', label:"score_summary['min'] correctly equals 55.0"}
    ]
  }
}
];

const DS_MP1 = {
  key:'mp1',
  title:'Mini Project 1 — Class Exam Report Card',
  intro:`The school office wants a proper report card: build the gradebook, work out who actually passed both
    subjects, then rank the passing students into a final leaderboard. Three stages, combining everything from
    Weeks 1-4: building a DataFrame, selecting with .loc, combining conditions, and sorting.`,
  newTrick:`Putting selection, filtering, and sorting together in one pipeline — up to now each week practiced one
    skill in isolation, but a real report card needs all three, one after another.`,
  stages:[
    {
      key:'a', title:'Stage A — Build the gradebook',
      desc:`Create a DataFrame df with columns "name" (Ada, Ben, Chi, Dee, Eli), "maths" (82, 45, 91, 78, 60), and
        "science" (75, 55, 40, 80, 65). Create selected = df[["name", "maths", "science"]]. Assert that
        list(selected.columns) == ["name", "maths", "science"].`,
      starter:`import pandas as pd
# Create df and selected below
`,
      tests:[{type:'assert', expr:'list(selected.columns) == ["name", "maths", "science"]', label:'selected has exactly the name, maths and science columns'}]
    },
    {
      key:'b', title:'Stage B — Find who passed both subjects',
      desc:`Using the same df, create passed = df.loc[(df["maths"] >= 50) & (df["science"] >= 50), ["name",
        "maths", "science"]]. Assert that list(passed["name"]) == ["Ada", "Dee", "Eli"] — Ben (45 in maths) and Chi
        (40 in science) are excluded.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "maths": [82, 45, 91, 78, 60], "science": [75, 55, 40, 80, 65]})
# Create passed below
`,
      tests:[{type:'assert', expr:'list(passed["name"]) == ["Ada", "Dee", "Eli"]', label:'passed correctly contains Ada, Dee and Eli'}]
    },
    {
      key:'c', title:'Stage C — Build the final leaderboard',
      desc:`Using passed from Stage B, add a "total" column (passed["total"] = passed["maths"] + passed["science"]),
        then create leaderboard = passed.sort_values("total", ascending=False). Assert that
        list(leaderboard["name"]) == ["Dee", "Ada", "Eli"] — Dee's combined 158 narrowly beats Ada's 157.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada","Ben","Chi","Dee","Eli"], "maths": [82, 45, 91, 78, 60], "science": [75, 55, 40, 80, 65]})
passed = df.loc[(df["maths"] >= 50) & (df["science"] >= 50), ["name", "maths", "science"]]
# Add a "total" column to passed, then create leaderboard below
`,
      tests:[{type:'assert', expr:'list(leaderboard["name"]) == ["Dee", "Ada", "Eli"]', label:'leaderboard is correctly ranked by total score'}]
    }
  ]
};

const DS_MP2 = {
  key:'mp2',
  title:'Mini Project 2 — Sports Day Results Analyzer',
  intro:`It's Sports Day, and the results are in — but they're messy: one student didn't start (DNS), points need
    totalling per house, and the house names live in a separate lookup table. Three doors, combining everything
    from Weeks 1-9 into one real analysis.`,
  fixtureNote:`All three doors build on this same Sports Day results table (one entry is missing — Chi did not
    start, "DNS"):`,
  fixtureCode:`df = pd.DataFrame({
    "name": ["Ada","Ben","Chi","Dee","Eli","Fay"],
    "house": ["Red","Blue","Red","Blue","Red","Blue"],
    "score": [85, 70, None, 90, 60, 75]
})`,
  doors:[
    {
      key:'a', title:'Door 1 — Clean and rank the results',
      desc:`Create the df above. Since a missing score means "didn't start," treat it as 0 points: create
        filled = df.fillna(0). Then create leaderboard = filled.sort_values("score", ascending=False). Assert that
        list(leaderboard["name"]) == ["Dee", "Ada", "Fay", "Ben", "Eli", "Chi"].`,
      starter:`import pandas as pd
df = pd.DataFrame({
    "name": ["Ada","Ben","Chi","Dee","Eli","Fay"],
    "house": ["Red","Blue","Red","Blue","Red","Blue"],
    "score": [85, 70, None, 90, 60, 75]
})
# Create filled and leaderboard below
`,
      tests:[{type:'assert', expr:'list(leaderboard["name"]) == ["Dee", "Ada", "Fay", "Ben", "Eli", "Chi"]', label:'leaderboard is correctly cleaned and ranked'}]
    },
    {
      key:'b', title:'Door 2 — Group by house and merge in house names',
      desc:`Using filled from Door 1, create house_totals = filled.groupby("house")["score"].sum().reset_index()
        (reset_index() turns the grouped result back into a normal DataFrame with a "house" column). Rename its
        score column to "total_points" with house_totals.columns = ["house", "total_points"]. Create
        house_lookup = pd.DataFrame({"house": ["Red","Blue"], "house_name": ["Fire Dragons","Ocean Sharks"]}), then
        merged = house_totals.merge(house_lookup, on="house"). Assert that
        merged.loc[merged["house"] == "Blue", "house_name"].iloc[0] == "Ocean Sharks".`,
      starter:`import pandas as pd
df = pd.DataFrame({
    "name": ["Ada","Ben","Chi","Dee","Eli","Fay"],
    "house": ["Red","Blue","Red","Blue","Red","Blue"],
    "score": [85, 70, None, 90, 60, 75]
})
filled = df.fillna(0)
# Create house_totals, house_lookup and merged below
`,
      tests:[{type:'assert', expr:'merged.loc[merged["house"] == "Blue", "house_name"].iloc[0] == "Ocean Sharks"', label:'merged correctly identifies Blue as Ocean Sharks'}]
    },
    {
      key:'c', title:'Door 3 — Add placements and summarize',
      desc:`Using leaderboard from Door 1, reset its index with
        leaderboard = leaderboard.reset_index(drop=True), then create a "placement" column:
        leaderboard["placement"] = leaderboard.index + 1. Assert that
        int(leaderboard.loc[leaderboard["name"] == "Dee", "placement"].iloc[0]) == 1 — Dee finished 1st.`,
      starter:`import pandas as pd
df = pd.DataFrame({
    "name": ["Ada","Ben","Chi","Dee","Eli","Fay"],
    "house": ["Red","Blue","Red","Blue","Red","Blue"],
    "score": [85, 70, None, 90, 60, 75]
})
filled = df.fillna(0)
leaderboard = filled.sort_values("score", ascending=False)
# Reset the index and add a placement column below
`,
      tests:[{type:'assert', expr:'int(leaderboard.loc[leaderboard["name"] == "Dee", "placement"].iloc[0]) == 1', label:"Dee is correctly placed 1st"}]
    }
  ]
};

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.ds = {
  b: {weeks: DS_WEEKS, mp1: DS_MP1, mp2: DS_MP2},
  i: {weeks: DS_WEEKS, mp1: DS_MP1, mp2: DS_MP2},
  a: {weeks: DS_WEEKS, mp1: DS_MP1, mp2: DS_MP2}
};
