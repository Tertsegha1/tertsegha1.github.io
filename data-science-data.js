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

/* =========================================================================
   Data Science Academy — Intermediate level
   Focus: messier real-world data — text cleaning, dates, reshaping, custom
   row/column functions, richer joins, multi-aggregation, ranking, outliers,
   and the inverse of pivoting (melt).
   ========================================================================= */

const DS_INTERMEDIATE_WEEKS = [
{
  key:'week1', num:1, title:'Cleaning Messy Text Columns',
  scenarioTag:'Real world: the sign-up sheet is a mess',
  scenario:`Students filled in a sign-up sheet by hand, and the names/emails came in inconsistently — extra
    spaces, mixed CAPS, typos. Before you can analyse anything, you need to clean the text columns up. pandas has
    a whole family of string tools for exactly this, all accessed through .str.`,
  objectives:[
    'Remove extra spaces with .str.strip()',
    'Standardise case with .str.lower()',
    'Find rows matching a pattern with .str.contains()',
    'Reassign a cleaned column back onto the DataFrame'
  ],
  conceptHtml:`
    <p>Any text column has a <strong>.str</strong> accessor that unlocks string methods you can apply to every row
    at once — no loop needed:</p>
    <pre class="code-block">import pandas as pd
df = pd.DataFrame({"name": [" Ada", "Ben ", " Chi "]})
df["name"] = df["name"].str.strip()
print(df["name"].tolist())   # ['Ada', 'Ben', 'Chi']</pre>
    <p><code>.str.lower()</code> standardises case, which matters a lot when comparing text — "Ada" and "ada" look
    the same to a human but are different strings to Python:</p>
    <pre class="code-block">df["email"] = df["email"].str.lower()</pre>
    <p><code>.str.contains("text")</code> checks each row for a substring, returning True/False per row — put it
    inside df[...] to filter, just like a number comparison:</p>
    <pre class="code-block">maths_classes = df[df["subject"].str.contains("Math")]</pre>
    <h3>Let's break down the strip example, line by line</h3>
    <ul>
      <li><code>df["name"]</code> pulls out the "name" column as a Series (a single column of values).</li>
      <li><code>.str</code> switches into "string mode" — every method after it (like <code>.strip()</code>) runs
        on each value in the column individually, the same way you'd call <code>" Ada".strip()</code> on one
        string.</li>
      <li><code>df["name"] = ...</code> — reassigning back onto the SAME column name replaces the messy values with
        the cleaned ones. This is the safe pattern: always reassign the whole column, never edit values in place.</li>
      <li><code>.tolist()</code> converts a Series into a plain Python list, which is handy for printing something
        you can read at a glance.</li>
    </ul>
    <p>You can chain <code>.str</code> methods together: <code>df["name"].str.strip().str.lower()</code> strips
    spaces AND lowercases in one line, run left to right.</p>`,
  sandboxStarter:`import pandas as pd
df = pd.DataFrame({"name": [" Ada", "Ben ", " Chi "]})
print(df["name"].tolist())
df["name"] = df["name"].str.strip()
print(df["name"].tolist())
`,
  sandboxStarter2:`import pandas as pd
df = pd.DataFrame({"email": ["Ada@SCHOOL.com", "ben@school.com", "CHI@SCHOOL.COM"]})
df["email"] = df["email"].str.strip().str.lower()
print(df["email"].tolist())
`,
  exercises:[
    {
      title:'Strip the extra spaces',
      desc:`Create df with one column "name" containing " Ada", "Ben ", " Chi ". Reassign df["name"] to
        df["name"].str.strip(), then print(df["name"].tolist()). It should print ['Ada', 'Ben', 'Chi'].`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:["['Ada', 'Ben', 'Chi']"], label:"Prints the correctly stripped list"}]
    },
    {
      title:'Lowercase for comparing',
      desc:`Create df with one column "email" containing "Ada@SCHOOL.com", "ben@school.com", "CHI@SCHOOL.COM".
        Reassign df["email"] to df["email"].str.lower(), then print(df["email"].tolist()).`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:["['ada@school.com', 'ben@school.com', 'chi@school.com']"], label:'Prints the correctly lowercased list'}]
    },
    {
      title:'Find matching subjects',
      desc:`Create df with one column "subject" containing "Mathematics", "Math Extension", "English", "Science".
        Create matches = df[df["subject"].str.contains("Math", case=False)], then print(len(matches)). It should
        print 2 — only the two rows containing "Math" match.`,
      starter:`import pandas as pd
# Create df and matches below
`,
      tests:[{type:'output', contains:['2'], label:'Filters to the correct number of matches (2)'}]
    },
    {
      title:'Strip and lower together',
      desc:`Create df with one column "name" containing " Ada ", "BEN", " chi". Reassign df["name"] to
        df["name"].str.strip().str.lower(), then assert df["name"].tolist() == ['ada', 'ben', 'chi'].`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'assert', expr:"df[\"name\"].tolist() == ['ada', 'ben', 'chi']", label:"df['name'] is correctly stripped and lowercased"}]
    },
    {
      title:'Clean a class column before counting',
      desc:`Create df with one column "class" containing " 7A", "7A ", "7B", " 7A" (note the inconsistent spacing
        — some entries are really the same class). Reassign df["class"] to df["class"].str.strip(), then print
        df["class"].nunique(). It should print 2 — without cleaning first, pandas would count 3 different-looking
        values instead of the real 2 classes.`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['2'], label:'Prints the correct number of unique classes after cleaning (2)'}]
    },
    {
      title:'Flag emails missing an @',
      desc:`Create df with one column "email" containing "ada@school.com", "ben.school.com", "chi@school.com" (Ben's
        is missing the @ symbol — a typo). Create a new column df["valid"] = df["email"].str.contains("@"), then
        print(df["valid"].tolist()). It should print [True, False, True].`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['[True, False, True]'], label:'Correctly flags which emails contain an @'}]
    }
  ],
  quiz:[
    {
      q:'What does the .str accessor let you do?',
      options:['Convert a DataFrame to a string','Run string methods on every value in a column at once','Sort a column alphabetically','Delete a column'],
      correct:1,
      explain:'.str unlocks string methods (like .strip(), .lower(), .contains()) applied row-by-row across a whole column.'
    },
    {
      q:'What does df["name"].str.strip() do?',
      options:['Removes the "name" column entirely','Removes leading/trailing spaces from every value','Removes all spaces, including inside words','Deletes empty rows'],
      correct:1,
      explain:'.str.strip() removes whitespace only from the start and end of each string, matching Python\'s built-in str.strip().'
    },
    {
      q:'Why lowercase text columns before comparing them?',
      options:['It makes the DataFrame smaller','Python treats "Ada" and "ada" as different strings unless case matches','It\'s required by pandas','It sorts the column automatically'],
      correct:1,
      explain:'String comparisons are case-sensitive by default, so standardising case avoids missed matches like "Ada" vs "ada".'
    },
    {
      q:'What does df[df["subject"].str.contains("Math")] return?',
      options:['A single True/False value','The word "Math" repeated','Only the rows where "subject" contains "Math"','Every row in the DataFrame'],
      correct:2,
      explain:'.str.contains() returns a True/False Series used the same way as a numeric condition — it filters rows.'
    }
  ],
  sandboxStarter3:`import pandas as pd
df = pd.DataFrame({"subject": ["Mathematics", "Math Extension", "English", "Science"]})
maths_classes = df[df["subject"].str.contains("Math", case=False)]
print(maths_classes)
print("Matches:", len(maths_classes))
`,
  stretchChallenge:{
    title:'Clean a full sign-up row and check it',
    desc:`Create df with columns "name" (" Ada ") and "email" ("ADA@SCHOOL.COM "). Reassign df["name"] to
      df["name"].str.strip(), and df["email"] to df["email"].str.strip().str.lower(). Then assert that
      df["name"].iloc[0] == 'Ada' and df["email"].iloc[0] == 'ada@school.com'.`,
    starter:`import pandas as pd
# Create df below
`,
    tests:[
      {type:'assert', expr:"df[\"name\"].iloc[0] == 'Ada'", label:"df['name'] is correctly stripped"},
      {type:'assert', expr:"df[\"email\"].iloc[0] == 'ada@school.com'", label:"df['email'] is correctly stripped and lowercased"}
    ]
  }
},
{
  key:'week2', num:2, title:'Working with Dates',
  scenarioTag:'Real world: the attendance log is full of dates',
  scenario:`The attendance register stores each entry's date as plain text ("2026-01-15"), which looks like a date
    to a human but is just a string to pandas — you can't ask a string "which month were you?" pandas can convert
    text into a real date type, unlocking year/month/day and proper date comparisons.`,
  objectives:[
    'Convert a text column into real dates with pd.to_datetime()',
    'Pull out year/month with the .dt accessor',
    'Filter rows using a date comparison',
    'Find the day of the week with .dt.day_name()'
  ],
  conceptHtml:`
    <p><code>pd.to_datetime()</code> converts a column of date-like text into pandas' real datetime type:</p>
    <pre class="code-block">import pandas as pd
df = pd.DataFrame({"date": ["2026-01-15", "2026-02-03", "2026-03-10"]})
df["date"] = pd.to_datetime(df["date"])
print(df["date"].dt.year.tolist())    # [2026, 2026, 2026]
print(df["date"].dt.month.tolist())   # [1, 2, 3]</pre>
    <p>Just like <code>.str</code> unlocks string methods, <strong>.dt</strong> unlocks date methods once a column
    is a real datetime type. Once converted, you can filter using ordinary comparisons — pandas understands that
    "before" means "earlier in time," not "earlier alphabetically":</p>
    <pre class="code-block">before_half_term = df[df["date"] < pd.Timestamp("2026-02-15")]</pre>
    <h3>Let's break down the conversion, line by line</h3>
    <ul>
      <li><code>pd.to_datetime(df["date"])</code> reads each text value and parses it into pandas' datetime type —
        it recognises common formats like "2026-01-15" automatically.</li>
      <li><code>df["date"] = ...</code> reassigns the SAME column, replacing the text version with the real-date
        version — after this line, df["date"] is no longer plain text.</li>
      <li><code>.dt.year</code> / <code>.dt.month</code> pull out just that part of each date as a whole number,
        one per row — the dot-dt-dot pattern mirrors dot-str-dot from Week 1.</li>
      <li><code>pd.Timestamp("2026-02-15")</code> builds a single specific date to compare against — you can use
        <code>&lt;</code>, <code>&gt;</code>, <code>==</code> the same way you would with numbers.</li>
    </ul>
    <p><code>.dt.day_name()</code> returns the day of the week as text, e.g. "Thursday" — handy for questions like
    "was this a Monday?"</p>`,
  sandboxStarter:`import pandas as pd
df = pd.DataFrame({"date": ["2026-01-15", "2026-02-03", "2026-03-10"]})
df["date"] = pd.to_datetime(df["date"])
print(df["date"].dt.year.tolist())
print(df["date"].dt.month.tolist())
`,
  sandboxStarter2:`import pandas as pd
df = pd.DataFrame({"date": ["2026-01-15", "2026-02-03", "2026-02-20", "2026-03-10"]})
df["date"] = pd.to_datetime(df["date"])
feb_entries = df[df["date"].dt.month == 2]
print(feb_entries)
`,
  exercises:[
    {
      title:'Convert text to real dates',
      desc:`Create df with one column "date" containing "2026-01-15", "2026-02-03", "2026-03-10". Reassign df["date"]
        to pd.to_datetime(df["date"]), then print(df["date"].dt.year.tolist()). It should print [2026, 2026, 2026].`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['[2026, 2026, 2026]'], label:'Prints the correct list of years'}]
    },
    {
      title:'Extract the month',
      desc:`Create df with one column "date" containing "2026-01-15", "2026-02-03", "2026-03-10". Reassign df["date"]
        to pd.to_datetime(df["date"]), then print(df["date"].dt.month.tolist()). It should print [1, 2, 3].`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['[1, 2, 3]'], label:'Prints the correct list of months'}]
    },
    {
      title:'Filter to February',
      desc:`Create df with one column "date" containing "2026-01-15", "2026-02-03", "2026-02-20", "2026-03-10".
        Reassign df["date"] to pd.to_datetime(df["date"]). Create feb = df[df["date"].dt.month == 2], then
        print(len(feb)). It should print 2.`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['2'], label:'Filters to the correct number of February rows (2)'}]
    },
    {
      title:'Who attended in January?',
      desc:`Create df with columns "name" (Ada, Ben, Chi) and "date" ("2026-01-15", "2026-02-03", "2026-01-28").
        Reassign df["date"] to pd.to_datetime(df["date"]). Create jan = df[df["date"].dt.month == 1]. Assert that
        sorted(jan["name"].tolist()) == ["Ada", "Chi"].`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'assert', expr:'sorted(jan["name"].tolist()) == ["Ada", "Chi"]', label:'jan correctly contains Ada and Chi'}]
    },
    {
      title:'Count entries before half-term',
      desc:`Create df with one column "date" containing "2026-01-10", "2026-02-01", "2026-02-20", "2026-03-05".
        Reassign df["date"] to pd.to_datetime(df["date"]). Create before = df[df["date"] < pd.Timestamp("2026-02-15")],
        then print(len(before)). It should print 2 — dates are compared as real dates, not as text.`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['2'], label:'Filters to the correct number of rows before half-term (2)'}]
    },
    {
      title:'Find the day of the week',
      desc:`Create df with one column "date" containing just "2026-01-15". Reassign df["date"] to
        pd.to_datetime(df["date"]), then print(df["date"].dt.day_name().iloc[0]). It should print "Thursday".`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['Thursday'], label:'Prints the correct day of the week (Thursday)'}]
    }
  ],
  quiz:[
    {
      q:'What does pd.to_datetime() do?',
      options:['Deletes a date column','Converts text into pandas\' real date type','Sorts a DataFrame by date','Prints today\'s date'],
      correct:1,
      explain:'pd.to_datetime() parses date-like text and converts it into a real datetime type pandas can compute with.'
    },
    {
      q:'How do you get the month from a real datetime column called "date"?',
      options:['df["date"].month()','df["date"].dt.month','df.month("date")','df["date"].getMonth()'],
      correct:1,
      explain:'.dt.month (the .dt accessor, mirroring .str for strings) pulls out the month from each date.'
    },
    {
      q:'Why convert text to real dates before filtering by date?',
      options:['It makes the DataFrame print in colour','Text comparisons don\'t understand "before"/"after" in time the way real dates do','pandas requires it to print anything','It\'s only needed for very old dates'],
      correct:1,
      explain:'Once converted, comparisons like < and > correctly mean "earlier/later in time," not alphabetical order.'
    },
    {
      q:'What does df["date"].dt.day_name() return?',
      options:['The date as a number','The day of the week as text, e.g. "Thursday"','The year only','Nothing — this method doesn\'t exist'],
      correct:1,
      explain:'.dt.day_name() returns the weekday name for each date.'
    }
  ],
  sandboxStarter3:`import pandas as pd
df = pd.DataFrame({"date": ["2026-01-10", "2026-02-01", "2026-02-20", "2026-03-05"]})
df["date"] = pd.to_datetime(df["date"])
before = df[df["date"] < pd.Timestamp("2026-02-15")]
print("Before half-term:", len(before))
print("Day of first entry:", df["date"].dt.day_name().iloc[0])
`,
  stretchChallenge:{
    title:'Find who attended during the spring term window',
    desc:`Create df with columns "name" (Ada, Ben, Chi, Dee) and "date" ("2026-01-10", "2026-02-05", "2026-02-25",
      "2026-03-01"). Reassign df["date"] to pd.to_datetime(df["date"]). Create
      spring_term = df[(df["date"] >= pd.Timestamp("2026-02-01")) &amp; (df["date"] &lt; pd.Timestamp("2026-03-01"))].
      Assert that sorted(spring_term["name"].tolist()) == ["Ben", "Chi"].`,
    starter:`import pandas as pd
# Create df below
`,
    tests:[
      {type:'assert', expr:'sorted(spring_term["name"].tolist()) == ["Ben", "Chi"]', label:'spring_term correctly contains Ben and Chi'}
    ]
  }
},
{
  key:'week3', num:3, title:'Changing Shape: pivot_table',
  scenarioTag:'Real world: the gradebook needs to be "wide," not "long"',
  scenario:`Exam results usually come in one row per (student, subject) pair — Ada's Maths score, Ada's Science
    score, Ben's Maths score, and so on, stacked one after another. That's easy to log but awkward to read.
    pd.pivot_table() reshapes it into the familiar "one row per student, one column per subject" gradebook
    layout.`,
  objectives:[
    'Reshape data with pd.pivot_table(index, columns, values)',
    'Understand the default aggfunc ("mean") when duplicate combinations exist',
    'Switch aggfunc to "count" or "sum" for a different summary',
    'Fill missing combinations with fill_value'
  ],
  conceptHtml:`
    <p><strong>pd.pivot_table()</strong> reshapes "long" data (one row per fact) into "wide" data (one row per
    group, one column per category):</p>
    <pre class="code-block">import pandas as pd
df = pd.DataFrame({
    "name": ["Ada", "Ada", "Ben", "Ben"],
    "subject": ["Maths", "Science", "Maths", "Science"],
    "score": [80, 70, 60, 90]
})
pivot = pd.pivot_table(df, index="name", columns="subject", values="score")
print(pivot)
print(pivot.loc["Ada", "Maths"])   # 80.0</pre>
    <p>If more than one row shares the same (name, subject) combination, pivot_table needs to know how to combine
    them — that's the <strong>aggfunc</strong> parameter, which defaults to <code>"mean"</code> (the average):</p>
    <pre class="code-block">pivot = pd.pivot_table(df, index="name", columns="subject", values="score", aggfunc="sum")</pre>
    <p>If some (name, subject) combinations never appear in the data, pivot_table leaves them as <code>NaN</code>
    (missing) by default — pass <code>fill_value=0</code> to replace those gaps with a real number instead.</p>
    <h3>Let's break down the pivot_table call, line by line</h3>
    <ul>
      <li><code>index="name"</code> — becomes the ROW labels of the reshaped table, one row per unique name.</li>
      <li><code>columns="subject"</code> — becomes the COLUMN labels, one column per unique subject.</li>
      <li><code>values="score"</code> — the numbers that fill the table, matched up by (name, subject) pair.</li>
      <li><code>pivot.loc["Ada", "Maths"]</code> — once reshaped, you can look up a single cell exactly like Week
        2's <code>.loc[]</code>, but now BOTH the row AND column labels come from the original data, not just
        positions.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
df = pd.DataFrame({
    "name": ["Ada", "Ada", "Ben", "Ben"],
    "subject": ["Maths", "Science", "Maths", "Science"],
    "score": [80, 70, 60, 90]
})
pivot = pd.pivot_table(df, index="name", columns="subject", values="score")
print(pivot)
`,
  sandboxStarter2:`import pandas as pd
df = pd.DataFrame({"name": ["Ada", "Ada", "Ben"], "subject": ["Maths", "Maths", "Maths"], "score": [80, 90, 60]})
mean_pivot = pd.pivot_table(df, index="name", columns="subject", values="score")
sum_pivot = pd.pivot_table(df, index="name", columns="subject", values="score", aggfunc="sum")
print(mean_pivot.loc["Ada", "Maths"])
print(sum_pivot.loc["Ada", "Maths"])
`,
  exercises:[
    {
      title:'Build your first pivot table',
      desc:`Create df with columns "name" (Ada, Ada, Ben, Ben), "subject" (Maths, Science, Maths, Science), and
        "score" (80, 70, 60, 90). Create pivot = pd.pivot_table(df, index="name", columns="subject",
        values="score"), then print(pivot.loc["Ada", "Maths"]). It should print 80.0.`,
      starter:`import pandas as pd
# Create df and pivot below
`,
      tests:[{type:'output', contains:['80.0'], label:"Prints the correct value for Ada's Maths score (80.0)"}]
    },
    {
      title:'Look up a different cell',
      desc:`Using the same df and pivot from the first exercise, print(pivot.loc["Ben", "Science"]). It should
        print 90.0.`,
      starter:`import pandas as pd
df = pd.DataFrame({"name": ["Ada", "Ada", "Ben", "Ben"], "subject": ["Maths", "Science", "Maths", "Science"], "score": [80, 70, 60, 90]})
pivot = pd.pivot_table(df, index="name", columns="subject", values="score")
# Print pivot.loc["Ben", "Science"] below
`,
      tests:[{type:'output', contains:['90.0'], label:"Prints the correct value for Ben's Science score (90.0)"}]
    },
    {
      title:'Average duplicate scores',
      desc:`Create df with columns "name" (Ada, Ada, Ben) and "subject" (Maths, Maths, Maths) and "score" (80, 90,
        60) — Ada has two separate Maths scores. Create pivot = pd.pivot_table(df, index="name", columns="subject",
        values="score") (default aggfunc averages duplicates), then print(pivot.loc["Ada", "Maths"]). It should
        print 85.0 — the average of 80 and 90.`,
      starter:`import pandas as pd
# Create df and pivot below
`,
      tests:[{type:'output', contains:['85.0'], label:"Prints the correctly averaged value (85.0)"}]
    },
    {
      title:'Check the reshaped columns',
      desc:`Using df with "name" (Ada, Ada, Ben, Ben), "subject" (Maths, Science, Maths, Science), and "score" (80,
        70, 60, 90), create pivot = pd.pivot_table(df, index="name", columns="subject", values="score"). Assert
        that sorted(list(pivot.columns)) == ["Maths", "Science"].`,
      starter:`import pandas as pd
# Create df and pivot below
`,
      tests:[{type:'assert', expr:'sorted(list(pivot.columns)) == ["Maths", "Science"]', label:'pivot has exactly the Maths and Science columns'}]
    },
    {
      title:'Count how many attempts, not the average',
      desc:`Create df with columns "name" (Ada, Ada, Ben) and "subject" (Maths, Maths, Maths) and "score" (80, 90,
        60). Create pivot = pd.pivot_table(df, index="name", columns="subject", values="score", aggfunc="count"),
        then print(pivot.loc["Ada", "Maths"]). It should print 2 — Ada attempted Maths twice.`,
      starter:`import pandas as pd
# Create df and pivot below
`,
      tests:[{type:'output', contains:['2'], label:"Prints the correct attempt count (2)"}]
    },
    {
      title:'Fill in the gaps',
      desc:`Create df with columns "name" (Ada, Ada, Ben), "subject" (Maths, Science, Maths), and "score" (80, 70,
        60) — Ben has no Science score at all. Create pivot = pd.pivot_table(df, index="name", columns="subject",
        values="score", fill_value=0), then print(pivot.loc["Ben", "Science"]). It should print 0.0, not NaN.`,
      starter:`import pandas as pd
# Create df and pivot below
`,
      tests:[{type:'output', contains:['0.0'], label:"Prints 0.0 for Ben's missing Science score, not NaN"}]
    }
  ],
  quiz:[
    {
      q:'What does pd.pivot_table(df, index="name", columns="subject", values="score") do?',
      options:['Deletes duplicate rows','Reshapes the data into one row per name, one column per subject','Sorts the DataFrame','Merges two DataFrames'],
      correct:1,
      explain:'pivot_table reshapes "long" data into a "wide" table using index for rows and columns for columns.'
    },
    {
      q:'What does pivot_table do by default when multiple rows share the same index/column combination?',
      options:['It raises an error','It keeps only the first one','It averages them (aggfunc="mean" by default)','It adds them together'],
      correct:2,
      explain:'The default aggfunc is "mean" — pivot_table averages duplicate combinations unless told otherwise.'
    },
    {
      q:'How do you make pivot_table add values together instead of averaging?',
      options:['aggfunc="sum"','values="sum"','index="sum"','It always adds by default'],
      correct:0,
      explain:'Passing aggfunc="sum" (or "count", etc.) overrides the default "mean" behaviour.'
    },
    {
      q:'What does fill_value=0 do in pivot_table?',
      options:['Replaces every value with 0','Fills in missing index/column combinations with 0 instead of NaN','Deletes rows with a score of 0','Sets the aggfunc to 0'],
      correct:1,
      explain:'Without fill_value, combinations that never appeared in the original data show up as NaN — fill_value replaces those gaps.'
    }
  ],
  sandboxStarter3:`import pandas as pd
df = pd.DataFrame({"name": ["Ada", "Ada", "Ben"], "subject": ["Maths", "Science", "Maths"], "score": [80, 70, 60]})
pivot = pd.pivot_table(df, index="name", columns="subject", values="score", fill_value=0)
print(pivot)
print("Ben's Science score (filled):", pivot.loc["Ben", "Science"])
`,
  stretchChallenge:{
    title:'Total Sports Day points by house and event',
    desc:`Create df with columns "house" (Red, Red, Blue, Blue), "event" (Relay, Relay, Relay, Long Jump), and
      "points" (10, 15, 8, 12). Create pivot = pd.pivot_table(df, index="house", columns="event", values="points",
      aggfunc="sum", fill_value=0). Assert that pivot.loc["Red", "Relay"] == 25 — Red's two Relay entries (10+15)
      are added together, not averaged.`,
    starter:`import pandas as pd
# Create df and pivot below
`,
    tests:[
      {type:'assert', expr:'pivot.loc["Red", "Relay"] == 25', label:"Red's Relay points are correctly totalled (25)"}
    ]
  }
},
{
  key:'week4', num:4, title:'Applying Your Own Function',
  scenarioTag:'Real world: the grading rule is yours, not pandas\'',
  scenario:`pandas ships with .mean(), .max(), and friends — but "turn a score into a letter grade" is a rule only
    your school has. .apply() lets you write that rule as an ordinary Python function, then run it across an
    entire column (or row) in one line.`,
  objectives:[
    'Write a plain Python function that takes one value and returns one value',
    'Run it across a column with .apply()',
    'Run a function across a whole ROW at once with .apply(..., axis=1)',
    'Use a function\'s return value to build a new column'
  ],
  conceptHtml:`
    <p>.apply() runs a function once per value in a column, collecting the results into a new Series:</p>
    <pre class="code-block">import pandas as pd
def score_to_grade(score):
    if score >= 70:
        return "A"
    else:
        return "B"

df = pd.DataFrame({"score": [75, 60]})
df["grade"] = df["score"].apply(score_to_grade)
print(df["grade"].tolist())   # ['A', 'B']</pre>
    <p>By default .apply() hands your function ONE VALUE at a time (one cell). Pass <code>axis=1</code> to instead
    hand your function a whole ROW at a time, letting it read multiple columns:</p>
    <pre class="code-block">df["full_name"] = df.apply(lambda row: row["first"] + " " + row["last"], axis=1)</pre>
    <h3>Let's break down the score_to_grade example, line by line</h3>
    <ul>
      <li><code>def score_to_grade(score):</code> — an ordinary Python function, no pandas involved yet. It takes
        ONE score and returns ONE grade.</li>
      <li><code>df["score"].apply(score_to_grade)</code> — note there are no parentheses after
        <code>score_to_grade</code> here. You're handing pandas the FUNCTION ITSELF, and pandas calls it once for
        every value in the column.</li>
      <li><code>df["grade"] = ...</code> — the results (one per row) become a brand new column.</li>
      <li>With <code>axis=1</code>, your function receives a <code>row</code> object instead of a single value —
        <code>row["first"]</code> works just like <code>df["first"]</code>, but for that one row only.</li>
    </ul>
    <p>You can also use a short <code>lambda</code> instead of a full <code>def</code> when the function is a
    one-liner — both work the same way with .apply().</p>`,
  sandboxStarter:`import pandas as pd
def score_to_grade(score):
    if score >= 70:
        return "A"
    else:
        return "B"

df = pd.DataFrame({"score": [75, 60]})
df["grade"] = df["score"].apply(score_to_grade)
print(df)
`,
  sandboxStarter2:`import pandas as pd
df = pd.DataFrame({"first": ["Ada", "Ben"], "last": ["Lovelace", "Franklin"]})
df["full_name"] = df.apply(lambda row: row["first"] + " " + row["last"], axis=1)
print(df["full_name"].tolist())
`,
  exercises:[
    {
      title:'Write your first grading function',
      desc:`Write a function score_to_grade(score) that returns "A" if score >= 70, otherwise "B". Create df with
        one column "score" containing 75, 60. Create df["grade"] = df["score"].apply(score_to_grade), then
        print(df["grade"].tolist()). It should print ['A', 'B'].`,
      starter:`import pandas as pd
# Define score_to_grade below, then create df and apply it
`,
      tests:[{type:'output', contains:["['A', 'B']"], label:'Prints the correctly graded list'}]
    },
    {
      title:'Give low scorers a bonus',
      desc:`Write a function add_bonus(x) that returns x + 5 if x < 50, otherwise just x. Create df with one column
        "score" containing 45, 80. Create df["bonus_score"] = df["score"].apply(add_bonus), then
        print(df["bonus_score"].tolist()). It should print [50, 80].`,
      starter:`import pandas as pd
# Define add_bonus below, then create df and apply it
`,
      tests:[{type:'output', contains:['[50, 80]'], label:'Prints the correctly boosted list'}]
    },
    {
      title:'Combine two columns with axis=1',
      desc:`Create df with columns "first" (Ada, Ben) and "last" (Lovelace, Franklin). Create
        df["full_name"] = df.apply(lambda row: row["first"] + " " + row["last"], axis=1), then
        print(df["full_name"].tolist()). It should print ['Ada Lovelace', 'Ben Franklin'].`,
      starter:`import pandas as pd
# Create df and full_name below
`,
      tests:[{type:'output', contains:["['Ada Lovelace', 'Ben Franklin']"], label:'Prints the correctly combined names'}]
    },
    {
      title:'Flag who passed',
      desc:`Create df with one column "score" containing 95, 40. Create
        df["passed"] = df["score"].apply(lambda x: x >= 50). Assert that df["passed"].tolist() == [True, False].`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'assert', expr:'df["passed"].tolist() == [True, False]', label:"df['passed'] correctly flags who passed"}]
    },
    {
      title:'Five grade bands',
      desc:`Write a function grade_band(score) that returns "A" for score >= 90, "B" for >= 80, "C" for >= 70, "D"
        for >= 60, and "F" otherwise (use elif for the middle cases). Create df with one column "score" containing
        95, 85, 75, 65, 50. Create df["grade"] = df["score"].apply(grade_band), then print(df["grade"].tolist()).
        It should print ['A', 'B', 'C', 'D', 'F'].`,
      starter:`import pandas as pd
# Define grade_band below, then create df and apply it
`,
      tests:[{type:'output', contains:["['A', 'B', 'C', 'D', 'F']"], label:'Prints the correctly banded grades'}]
    },
    {
      title:'Pass both subjects, row by row',
      desc:`Create df with columns "maths" (80, 40, 60) and "science" (70, 90, 40). Create
        df["result"] = df.apply(lambda row: "Pass" if row["maths"] >= 50 and row["science"] >= 50 else "Fail",
        axis=1), then print(df["result"].tolist()). It should print ['Pass', 'Fail', 'Fail'] — the middle and last
        students each fail exactly one subject.`,
      starter:`import pandas as pd
# Create df and result below
`,
      tests:[{type:'output', contains:["['Pass', 'Fail', 'Fail']"], label:'Prints the correctly combined pass/fail results'}]
    }
  ],
  quiz:[
    {
      q:'What does df["score"].apply(my_function) do?',
      options:['Calls my_function once, on the whole column at once','Calls my_function once for every value in the "score" column','Deletes the "score" column','Sorts the column using my_function'],
      correct:1,
      explain:'.apply() runs your function once per value (by default), collecting the results into a new Series.'
    },
    {
      q:'What does passing axis=1 to .apply() change?',
      options:['Nothing, it\'s optional and does nothing','Your function now receives a whole ROW instead of a single value','It sorts the DataFrame first','It only works on numbers'],
      correct:1,
      explain:'axis=1 makes .apply() run once per ROW, handing your function a row object so it can read multiple columns.'
    },
    {
      q:'In df["score"].apply(score_to_grade), why is there no () after score_to_grade?',
      options:['It\'s a typo','You\'re passing the function itself, not calling it — pandas calls it for you',' () would delete the function','Functions never need ()'],
      correct:1,
      explain:'Without (), you hand pandas the function object itself; pandas then calls it once per value automatically.'
    },
    {
      q:'Inside a function used with axis=1, how do you read the "maths" value for the current row?',
      options:['maths','df["maths"]','row["maths"]','row.maths()'],
      correct:2,
      explain:'With axis=1, your function receives a row object — row["maths"] reads that one row\'s "maths" value.'
    }
  ],
  sandboxStarter3:`import pandas as pd
def grade_band(score):
    if score >= 90:
        return "A"
    elif score >= 70:
        return "B"
    else:
        return "C"

df = pd.DataFrame({"score": [95, 75, 50]})
df["grade"] = df["score"].apply(grade_band)
print(df)
`,
  stretchChallenge:{
    title:'Format a name and grade band together',
    desc:`Write a function label_student(row) that: takes row["name"], strips it and converts it to title case with
      .strip().title(), then decides a band — "Distinction" if row["score"] >= 70, "Pass" if >= 50, otherwise
      "Fail" — and returns the name, then ": ", then the band, all joined together. Create df with one row: "name"
      = " ada lovelace ", "score" = 85. Create df["label"] = df.apply(label_student, axis=1). Assert that
      df["label"].iloc[0] == "Ada Lovelace: Distinction".`,
    starter:`import pandas as pd
# Define label_student below, then create df and apply it
`,
    tests:[
      {type:'assert', expr:'df["label"].iloc[0] == "Ada Lovelace: Distinction"', label:'The formatted label is correct'}
    ]
  }
},
{
  key:'week5', num:5, title:'Left, Right, and Outer Joins',
  scenarioTag:'Real world: not every student has signed up for a club yet',
  scenario:`Week 4's Sports Day merge kept only rows that matched in BOTH tables (an inner join). But sometimes you
    need to know who's MISSING — e.g. every student who hasn't signed up for a club yet. Left, right, and outer
    joins all keep unmatched rows too, filling the gaps with NaN.`,
  objectives:[
    'Keep every row from the left table with how="left"',
    'Keep every row from the right table with how="right"',
    'Keep every row from BOTH tables with how="outer"',
    'Recognise and clean up the NaN gaps a non-inner join creates'
  ],
  conceptHtml:`
    <p>.merge() defaults to <code>how="inner"</code> (only matching rows survive). Change <code>how</code> to keep
    unmatched rows too:</p>
    <pre class="code-block">import pandas as pd
students = pd.DataFrame({"name": ["Ada", "Ben", "Chi"], "id": [1, 2, 3]})
clubs = pd.DataFrame({"id": [1, 3], "club": ["Chess", "Art"]})
merged = students.merge(clubs, on="id", how="left")
print(merged)
#   name  id   club
# 0  Ada   1  Chess
# 1  Ben   2    NaN   <- Ben has no club, but is still kept
# 2  Chi   3    Art</pre>
    <ul>
      <li><code>how="left"</code> — keep every row from the LEFT table (the one .merge() was called on), filling
        gaps from the right table with NaN.</li>
      <li><code>how="right"</code> — the mirror image: keep every row from the RIGHT table, filling gaps from the
        left with NaN.</li>
      <li><code>how="outer"</code> — keep every row from BOTH tables, filling gaps on whichever side is missing.</li>
    </ul>
    <p>Those NaN gaps are usually meant to be cleaned up afterwards — <code>.fillna("No Club")</code> replaces
    every NaN in a column with a real, readable value, the same idea used for cleaning any messy column, just
    appearing after a join instead of in raw data.</p>`,
  sandboxStarter:`import pandas as pd
students = pd.DataFrame({"name": ["Ada", "Ben", "Chi"], "id": [1, 2, 3]})
clubs = pd.DataFrame({"id": [1, 3], "club": ["Chess", "Art"]})
merged = students.merge(clubs, on="id", how="left")
print(merged)
`,
  sandboxStarter2:`import pandas as pd
students = pd.DataFrame({"name": ["Ada", "Ben", "Chi"], "id": [1, 2, 3]})
clubs = pd.DataFrame({"id": [1, 3], "club": ["Chess", "Art"]})
merged = students.merge(clubs, on="id", how="left")
merged["club"] = merged["club"].fillna("No Club")
print(merged)
`,
  exercises:[
    {
      title:'Keep every student with a left join',
      desc:`Create students with columns "name" (Ada, Ben, Chi) and "id" (1, 2, 3), and clubs with columns "id"
        (1, 3) and "club" (Chess, Art). Create merged = students.merge(clubs, on="id", how="left"), then
        print(len(merged)). It should print 3 — all three students are kept, even Ben who has no club.`,
      starter:`import pandas as pd
# Create students and clubs below
`,
      tests:[{type:'output', contains:['3'], label:'Keeps all 3 students in the left join'}]
    },
    {
      title:'Count the missing clubs',
      desc:`Using the same students/clubs/merged from the first exercise, print(merged["club"].isna().sum()). It
        should print 1 — only Ben has no matching club.`,
      starter:`import pandas as pd
students = pd.DataFrame({"name": ["Ada", "Ben", "Chi"], "id": [1, 2, 3]})
clubs = pd.DataFrame({"id": [1, 3], "club": ["Chess", "Art"]})
merged = students.merge(clubs, on="id", how="left")
# Print the count of missing clubs below
`,
      tests:[{type:'output', contains:['1'], label:'Correctly counts 1 missing club'}]
    },
    {
      title:'Keep every club with a right join',
      desc:`Create students with "name" (Ada, Ben, Chi) and "id" (1, 2, 3), and clubs with "id" (1, 3, 4) and
        "club" (Chess, Art, Drama) — Drama's id (4) matches no student. Create
        merged = students.merge(clubs, on="id", how="right"), then print(len(merged)). It should print 3 — all
        three clubs are kept, even Drama which has no matching student.`,
      starter:`import pandas as pd
# Create students and clubs below
`,
      tests:[{type:'output', contains:['3'], label:'Keeps all 3 clubs in the right join'}]
    },
    {
      title:'Find the club with no matching student',
      desc:`Using students ("name": Ada, Ben, Chi, "id": 1, 2, 3) and clubs ("id": 1, 3, 4, "club": Chess, Art,
        Drama), create merged = students.merge(clubs, on="id", how="right"). Assert that
        merged.loc[merged["club"] == "Drama", "name"].isna().iloc[0] == True.`,
      starter:`import pandas as pd
# Create students and clubs below
`,
      tests:[{type:'assert', expr:'merged.loc[merged["club"] == "Drama", "name"].isna().iloc[0] == True', label:"Drama's row correctly has a missing (NaN) student name"}]
    },
    {
      title:'Keep everyone with an outer join',
      desc:`Using students ("name": Ada, Ben, Chi, "id": 1, 2, 3) and clubs ("id": 1, 3, 4, "club": Chess, Art,
        Drama), create merged = students.merge(clubs, on="id", how="outer"), then print(len(merged)). It should
        print 4 — Ben (no club) AND Drama (no student) are both kept, along with the two real matches.`,
      starter:`import pandas as pd
# Create students and clubs below
`,
      tests:[{type:'output', contains:['4'], label:'Outer join correctly keeps all 4 rows'}]
    },
    {
      title:'Clean up the gaps',
      desc:`Create students with "name" (Ada, Ben, Chi) and "id" (1, 2, 3), and clubs with "id" (1, 3) and "club"
        (Chess, Art). Create merged = students.merge(clubs, on="id", how="left"), then reassign
        merged["club"] to merged["club"].fillna("No Club"). Assert that
        merged.loc[merged["name"] == "Ben", "club"].iloc[0] == "No Club".`,
      starter:`import pandas as pd
# Create students and clubs below
`,
      tests:[{type:'assert', expr:'merged.loc[merged["name"] == "Ben", "club"].iloc[0] == "No Club"', label:'Ben\'s missing club is correctly filled with "No Club"'}]
    }
  ],
  quiz:[
    {
      q:'What does how="left" do in a merge?',
      options:['Sorts the table left to right','Keeps every row from the left table, even ones with no match','Only keeps matching rows','Deletes the left table'],
      correct:1,
      explain:'A left join keeps every row from the left table, filling any unmatched columns from the right with NaN.'
    },
    {
      q:'What is the difference between how="left" and how="right"?',
      options:['There is no difference','left keeps every row from the LEFT table; right keeps every row from the RIGHT table','right is always faster','left only works with numbers'],
      correct:1,
      explain:'They\'re mirror images of each other — which table\'s rows are always kept.'
    },
    {
      q:'What does how="outer" do?',
      options:['Keeps only matching rows','Keeps every row from BOTH tables, filling gaps with NaN on whichever side is missing','Deletes all unmatched rows','Only works with 3+ tables'],
      correct:1,
      explain:'An outer join is the most inclusive — nothing from either table is dropped.'
    },
    {
      q:'After a left join leaves some NaN values in a column, what can you do to replace them?',
      options:['Nothing, NaN can never be changed','.fillna("some value")','.dropna() to replace them with text','Merge again with how="inner"'],
      correct:1,
      explain:'.fillna() replaces NaN values with whatever you pass it — the same tool used for messy raw data, just applied after a join.'
    }
  ],
  sandboxStarter3:`import pandas as pd
students = pd.DataFrame({"name": ["Ada", "Ben", "Chi"], "id": [1, 2, 3]})
clubs = pd.DataFrame({"id": [1, 3, 4], "club": ["Chess", "Art", "Drama"]})
outer = students.merge(clubs, on="id", how="outer")
print(outer)
print("Total rows:", len(outer))
`,
  stretchChallenge:{
    title:'Clean up both sides of an outer join',
    desc:`Create students with "name" (Ada, Ben, Chi) and "id" (1, 2, 3), and clubs with "id" (1, 3, 4) and "club"
      (Chess, Art, Drama). Create merged = students.merge(clubs, on="id", how="outer"), then reassign
      merged["name"] to merged["name"].fillna("Unknown Student"), and merged["club"] to
      merged["club"].fillna("No Club"). Assert that merged.loc[merged["id"] == 4, "name"].iloc[0] ==
      "Unknown Student" and merged.loc[merged["id"] == 2, "club"].iloc[0] == "No Club".`,
    starter:`import pandas as pd
# Create students and clubs below
`,
    tests:[
      {type:'assert', expr:'merged.loc[merged["id"] == 4, "name"].iloc[0] == "Unknown Student"', label:"The unmatched club's student name is correctly filled"},
      {type:'assert', expr:'merged.loc[merged["id"] == 2, "club"].iloc[0] == "No Club"', label:"Ben's missing club is correctly filled"}
    ]
  }
},
{
  key:'week6', num:6, title:'Multiple Aggregations at Once',
  scenarioTag:'Real world: the house report needs several stats side by side',
  scenario:`Week 1 (Beginner) computed .mean() and .max() one at a time. A real report usually wants several stats
    together — average, highest score, and how many entries — all in one table, one call. .agg() computes several
    aggregations at once, and can even give each resulting column a sensible name.`,
  objectives:[
    'Compute several stats at once with .agg(["mean", "max", "count"])',
    'Give result columns readable names with named aggregation',
    'Apply a different aggregation function to each column with a dict',
    'Read a value out of a multi-column aggregation result'
  ],
  conceptHtml:`
    <p>Pass a LIST of function names to .agg() to compute them all in one call:</p>
    <pre class="code-block">import pandas as pd
df = pd.DataFrame({"house": ["Red", "Red", "Blue", "Blue"], "score": [80, 90, 60, 70]})
stats = df.groupby("house")["score"].agg(["mean", "max"])
print(stats)
#        mean  max
# house
# Blue   65.0   70
# Red    85.0   90</pre>
    <p><strong>Named aggregation</strong> lets you choose the result column names directly, which reads much more
    clearly than generic "mean"/"max" column names:</p>
    <pre class="code-block">summary = df.groupby("house").agg(avg_score=("score", "mean"), top_score=("score", "max"))
print(summary.loc["Red", "top_score"])   # 90</pre>
    <p>You can also apply a DIFFERENT function to each column by passing a dictionary instead of a list:</p>
    <pre class="code-block">df.groupby("house").agg({"score": "mean", "attendance": "sum"})</pre>
    <h3>Let's break down the named aggregation, line by line</h3>
    <ul>
      <li><code>avg_score=("score", "mean")</code> — the keyword <code>avg_score</code> becomes the RESULT column
        name; the tuple <code>("score", "mean")</code> says "apply mean to the score column."</li>
      <li>You can add as many <code>name=("column", "function")</code> pairs as you like, each becoming its own
        result column.</li>
      <li><code>summary.loc["Red", "top_score"]</code> reads a single cell out of the result — the same
        <code>.loc[]</code> pattern used since Week 2 of the course.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
df = pd.DataFrame({"house": ["Red", "Red", "Blue", "Blue"], "score": [80, 90, 60, 70]})
stats = df.groupby("house")["score"].agg(["mean", "max"])
print(stats)
`,
  sandboxStarter2:`import pandas as pd
df = pd.DataFrame({"house": ["Red", "Red", "Blue", "Blue"], "score": [80, 90, 60, 70]})
summary = df.groupby("house").agg(avg_score=("score", "mean"), top_score=("score", "max"))
print(summary)
`,
  exercises:[
    {
      title:'Compute mean and max together',
      desc:`Create df with columns "house" (Red, Red, Blue, Blue) and "score" (80, 90, 60, 70). Create
        stats = df.groupby("house")["score"].agg(["mean", "max"]), then print(stats.loc["Red", "max"]). It should
        print 90.`,
      starter:`import pandas as pd
# Create df and stats below
`,
      tests:[{type:'output', contains:['90'], label:"Prints Red's max score (90)"}]
    },
    {
      title:'Add a count',
      desc:`Using the same df, create stats = df.groupby("house")["score"].agg(["mean", "max", "count"]), then
        print(stats.loc["Blue", "count"]). It should print 2 — Blue has 2 entries.`,
      starter:`import pandas as pd
df = pd.DataFrame({"house": ["Red", "Red", "Blue", "Blue"], "score": [80, 90, 60, 70]})
# Create stats below
`,
      tests:[{type:'output', contains:['2'], label:"Prints Blue's entry count (2)"}]
    },
    {
      title:'Name your result columns',
      desc:`Using the same df, create summary = df.groupby("house").agg(avg_score=("score", "mean"),
        top_score=("score", "max")), then print(summary.loc["Red", "top_score"]). It should print 90.`,
      starter:`import pandas as pd
df = pd.DataFrame({"house": ["Red", "Red", "Blue", "Blue"], "score": [80, 90, 60, 70]})
# Create summary below
`,
      tests:[{type:'output', contains:['90'], label:'Prints the correctly named top_score column (90)'}]
    },
    {
      title:'Check the average',
      desc:`Using the same df, create summary = df.groupby("house").agg(avg_score=("score", "mean")). Assert that
        summary.loc["Blue", "avg_score"] == 65.0.`,
      starter:`import pandas as pd
df = pd.DataFrame({"house": ["Red", "Red", "Blue", "Blue"], "score": [80, 90, 60, 70]})
# Create summary below
`,
      tests:[{type:'assert', expr:'summary.loc["Blue", "avg_score"] == 65.0', label:"Blue's average score is correct (65.0)"}]
    },
    {
      title:'Different functions for different columns',
      desc:`Create df with columns "house" (Red, Red, Blue, Blue), "score" (80, 90, 60, 70), and "attendance" (5,
        4, 3, 5). Create stats = df.groupby("house").agg({"score": "mean", "attendance": "sum"}). Assert that
        stats.loc["Red", "score"] == 85.0 and stats.loc["Red", "attendance"] == 9 — score is AVERAGED but
        attendance is TOTALLED, using two different rules in one call.`,
      starter:`import pandas as pd
# Create df and stats below
`,
      tests:[{type:'assert', expr:'stats.loc["Red", "score"] == 85.0 and stats.loc["Red", "attendance"] == 9', label:"Red's averaged score and totalled attendance are both correct"}]
    },
    {
      title:'Combine a named average and a named total',
      desc:`Create df with columns "house" (Red, Red, Blue, Blue), "score" (80, 90, 60, 70), and "attendance" (5,
        4, 3, 5). Create summary = df.groupby("house").agg(avg_score=("score", "mean"),
        total_attendance=("attendance", "sum")). Assert that summary.loc["Blue", "total_attendance"] == 8.`,
      starter:`import pandas as pd
# Create df and summary below
`,
      tests:[{type:'assert', expr:'summary.loc["Blue", "total_attendance"] == 8', label:"Blue's total attendance is correct (8)"}]
    }
  ],
  quiz:[
    {
      q:'What does df.groupby("house")["score"].agg(["mean", "max"]) do?',
      options:['Only computes the mean','Computes both mean and max in one call, as two result columns','Deletes the max value','Sorts by score'],
      correct:1,
      explain:'Passing a list of function names to .agg() computes all of them at once.'
    },
    {
      q:'What does avg_score=("score", "mean") do inside .agg()?',
      options:['Creates a column called avg_score by averaging the score column','Deletes the score column','Renames the house column','Filters out low scores'],
      correct:0,
      explain:'This is named aggregation — the keyword becomes the result column name, and the tuple says which column/function to use.'
    },
    {
      q:'How do you apply a DIFFERENT aggregation function to different columns?',
      options:['You can\'t — every column must use the same function','Pass a dictionary like {"score": "mean", "attendance": "sum"}','Call .agg() twice and combine manually only','Use .apply() instead'],
      correct:1,
      explain:'A dictionary maps each column name to its own aggregation function, all computed in one call.'
    },
    {
      q:'Why use named aggregation instead of a plain list like ["mean", "max"]?',
      options:['It\'s required by pandas','It gives the result columns clearer, custom names instead of generic function names','It runs faster','It only works with dates'],
      correct:1,
      explain:'Named aggregation lets you choose readable column names (avg_score, top_score) instead of generic ones (mean, max).'
    }
  ],
  sandboxStarter3:`import pandas as pd
df = pd.DataFrame({"house": ["Red", "Red", "Blue", "Blue"], "score": [80, 90, 60, 70], "attendance": [5, 4, 3, 5]})
stats = df.groupby("house").agg({"score": "mean", "attendance": "sum"})
print(stats)
`,
  stretchChallenge:{
    title:'Rank the houses by average score',
    desc:`Create df with columns "house" (Red, Red, Blue, Blue), "score" (80, 90, 60, 70), and "attendance" (5, 4,
      3, 5). Create summary = df.groupby("house").agg(avg_score=("score", "mean")).reset_index(), then
      ranked = summary.sort_values("avg_score", ascending=False). Assert that ranked["house"].iloc[0] == "Red" —
      Red's higher average score puts it first.`,
    starter:`import pandas as pd
# Create df, summary and ranked below
`,
    tests:[
      {type:'assert', expr:'ranked["house"].iloc[0] == "Red"', label:'ranked correctly puts Red first'}
    ]
  }
}
];

const DS_INTERMEDIATE_MP1 = {
  key:'mp1',
  title:'Mini Project 1 — Clean and Reshape the Attendance Log',
  intro:`The attendance log is a mess — names typed inconsistently, dates as plain text, one row per day per
    student. Three stages, combining everything from Weeks 1-4: clean the text, parse the dates, reshape into a
    per-student summary, then apply your own rule to flag students worth following up with.`,
  newTrick:`Chaining cleaning → reshaping → a custom rule into one real pipeline — up to now each week practiced one
    skill in isolation, but a real attendance report needs all of them, one after another, on the SAME messy data.`,
  stages:[
    {
      key:'a', title:'Stage A — Clean the names and parse the dates',
      desc:`Create df with columns "name" (" ada ", "BEN", " chi ", "ada", "Ben", "CHI"), "date" ("2026-01-05" ×3,
        "2026-01-12" ×3, in that row order), and "present" (1, 0, 1, 1, 1, 0). Reassign df["name"] to
        df["name"].str.strip().str.title(), and df["date"] to pd.to_datetime(df["date"]). Assert that
        df["name"].tolist() == ["Ada", "Ben", "Chi", "Ada", "Ben", "Chi"].`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'assert', expr:'df["name"].tolist() == ["Ada", "Ben", "Chi", "Ada", "Ben", "Chi"]', label:'df["name"] is correctly cleaned to title case'}]
    },
    {
      key:'b', title:'Stage B — Reshape into a per-student, per-month summary',
      desc:`Using the cleaned df from Stage A, add df["month"] = df["date"].dt.month. Create
        pivot = pd.pivot_table(df, index="name", columns="month", values="present", aggfunc="sum", fill_value=0)
        — this totals each student's present days per month (not averages them). Assert that pivot.loc["Ada", 1] == 2
        — Ada attended both January sessions.`,
      starter:`import pandas as pd
df = pd.DataFrame({
    "name": [" ada ", "BEN", " chi ", "ada", "Ben", "CHI"],
    "date": ["2026-01-05", "2026-01-05", "2026-01-05", "2026-01-12", "2026-01-12", "2026-01-12"],
    "present": [1, 0, 1, 1, 1, 0]
})
df["name"] = df["name"].str.strip().str.title()
df["date"] = pd.to_datetime(df["date"])
# Add a "month" column, then create pivot below
`,
      tests:[{type:'assert', expr:'pivot.loc["Ada", 1] == 2', label:"Ada's January total is correctly summed (2)"}]
    },
    {
      key:'c', title:'Stage C — Flag students who need a follow-up',
      desc:`Using pivot from Stage B, create summary = pivot.reset_index() (turns the pivot back into a normal
        DataFrame with a "name" column). Write a function flag_attendance(days) that returns "Needs Follow-up" if
        days &lt; 2, otherwise "Good". Create summary["flag"] = summary[1].apply(flag_attendance) (column 1 is
        January's total). Assert that sorted(summary.loc[summary["flag"] == "Needs Follow-up", "name"].tolist())
        == ["Ben", "Chi"] — Ada attended both sessions and is fine; Ben and Chi each attended only one.`,
      starter:`import pandas as pd
df = pd.DataFrame({
    "name": [" ada ", "BEN", " chi ", "ada", "Ben", "CHI"],
    "date": ["2026-01-05", "2026-01-05", "2026-01-05", "2026-01-12", "2026-01-12", "2026-01-12"],
    "present": [1, 0, 1, 1, 1, 0]
})
df["name"] = df["name"].str.strip().str.title()
df["date"] = pd.to_datetime(df["date"])
df["month"] = df["date"].dt.month
pivot = pd.pivot_table(df, index="name", columns="month", values="present", aggfunc="sum", fill_value=0)
# Define flag_attendance below, then create summary and summary["flag"]
`,
      tests:[{type:'assert', expr:'sorted(summary.loc[summary["flag"] == "Needs Follow-up", "name"].tolist()) == ["Ben", "Chi"]', label:'summary correctly flags Ben and Chi for follow-up'}]
    }
  ]
};

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.ds = {
  b: {weeks: DS_WEEKS, mp1: DS_MP1, mp2: DS_MP2},
  i: {weeks: DS_WEEKS, mp1: DS_MP1, mp2: DS_MP2},
  a: {weeks: DS_WEEKS, mp1: DS_MP1, mp2: DS_MP2}
};
