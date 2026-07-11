/* =========================================================================
   SQL Academy — content data
   Real SQLite running in-browser via sql.js. Grading uses execIsolatedSQL/
   sqlRunAssert (in app.js) — a FRESH in-memory database is created for every
   single exercise/example run, so every exercise's starter is fully
   self-contained: CREATE TABLE + INSERT + the actual query being taught,
   every time (no schema carries over between runs, similar in spirit to R's
   statelessness, except here it's true isolation by design, not a bug fix).

   'output' tests check the formatted result text, which always ends with an
   explicit row count like "(2 rows)" — since a plain SELECT leaves nothing
   behind to assert() on afterward, the row count is what lets a test catch
   "printed extra/unfiltered rows" (any correctly-filtered result is a
   SUBSET of the unfiltered one, so presence-only checks alone can't fail an
   over-inclusive answer — the count can).
   ========================================================================= */

const SQL_WEEKS = [
{
  key:'week1', num:1, title:'Getting Started with SQL',
  scenarioTag:'Real world: the class register, as a real database table',
  scenario:`Riverside Academy keeps its student records in spreadsheets — but a real database lets you ask
    precise questions of your data using SQL (Structured Query Language), the language almost every real
    application uses to store and retrieve information.`,
  objectives:[
    'Create a table and add rows with CREATE TABLE and INSERT',
    'Retrieve every row and column with SELECT * FROM table',
    'Retrieve specific columns with SELECT col1, col2 FROM table',
    'Filter rows with a WHERE clause'
  ],
  conceptHtml:`
    <p>A <strong>table</strong> is like a spreadsheet — rows and columns. You build one with
    <code>CREATE TABLE</code>, then add rows with <code>INSERT</code>:</p>
    <pre class="code-block">CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90);
SELECT * FROM students;</pre>
    <p><code>SELECT * FROM students</code> asks for EVERY column, for EVERY row. You can ask for just some
    columns instead:</p>
    <pre class="code-block">SELECT name FROM students;</pre>
    <p>And you can filter which ROWS come back with <code>WHERE</code>:</p>
    <pre class="code-block">SELECT * FROM students WHERE score &gt;= 70;</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90);
SELECT * FROM students;</pre>
    <ul>
      <li><code>CREATE TABLE students (name TEXT, score INTEGER)</code> — defines a new table called students
        with two columns: name (text) and score (a whole number). Nothing is stored yet — this just describes
        the shape of the table.</li>
      <li><code>INSERT INTO students VALUES (...), (...), (...)</code> — adds three rows in one go. Each
        parenthesised group is one row, values given in the same order as the columns were defined (name, then
        score).</li>
      <li><code>SELECT * FROM students</code> — the <code>*</code> means "every column". Combined with no
        WHERE clause, this returns every row too — the whole table.</li>
    </ul>
    <p>The second example follows the exact same shape, but replaces <code>*</code> with just <code>name</code> —
    only that one column comes back, for every row. The third example keeps <code>*</code> but adds
    <code>WHERE score &gt;= 70</code> — now only rows where that condition is true come back (Ada and Cy, not
    Ben).</p>`,
  sandboxStarter:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90);
SELECT * FROM students;
`,
  sandboxStarter2:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90);
SELECT name FROM students;
`,
  exercises:[
    {
      title:'Create a table and see everything in it',
      desc:`Create a table called pupils with columns name (TEXT) and age (INTEGER). Insert three rows:
        ('Maya', 11), ('Tom', 12), ('Zoe', 10). Then write SELECT * FROM pupils; to see the whole table.`,
      starter:`-- Create pupils, insert your rows, then select everything
`,
      tests:[{type:'output', contains:['Maya','Tom','Zoe','(3 rows)'], label:'Shows all 3 pupils (Maya, Tom, Zoe)'}]
    },
    {
      title:'Select just one column',
      desc:`Create the same pupils table: name (TEXT), age (INTEGER), with ('Maya', 11), ('Tom', 12),
        ('Zoe', 10). This time write SELECT name FROM pupils; to see just the names.`,
      starter:`-- Create pupils, insert your rows, then select just the name column
`,
      tests:[{type:'output', contains:['Maya','Tom','Zoe','(3 rows)'], label:'Shows all 3 names (Maya, Tom, Zoe)'}]
    },
    {
      title:'Filter with WHERE',
      desc:`Create pupils with name (TEXT) and age (INTEGER): ('Maya', 11), ('Tom', 12), ('Zoe', 10),
        ('Sam', 9). Write SELECT * FROM pupils WHERE age &gt;= 11; — this should return only Maya and Tom
        (2 rows), since Zoe and Sam are both under 11.`,
      starter:`-- Create pupils, insert your rows, then filter with WHERE
`,
      tests:[{type:'output', contains:['Maya','Tom','(2 rows)'], label:'Shows only Maya and Tom (2 rows)'}]
    },
    {
      title:'Filter with a different condition',
      desc:`Create the same pupils table: name (TEXT), age (INTEGER): ('Maya', 11), ('Tom', 12), ('Zoe', 10),
        ('Sam', 9). Write SELECT * FROM pupils WHERE age &lt; 11; — this should return only Zoe and Sam
        (2 rows).`,
      starter:`-- Create pupils, insert your rows, then filter with a different condition
`,
      tests:[{type:'output', contains:['Zoe','Sam','(2 rows)'], label:'Shows only Zoe and Sam (2 rows)'}]
    },
    {
      title:'Select columns AND filter together',
      desc:`Create pupils with name (TEXT), age (INTEGER), score (INTEGER): ('Maya', 11, 85), ('Tom', 12, 62),
        ('Zoe', 10, 90), ('Sam', 9, 45). Write SELECT name, score FROM pupils WHERE score &gt;= 60; — this
        should return Maya, Tom and Zoe (3 rows), excluding Sam.`,
      starter:`-- Create pupils, insert your rows, then select+filter together
`,
      tests:[{type:'output', contains:['Maya','Tom','Zoe','(3 rows)'], label:'Shows Maya, Tom and Zoe (3 rows)'}]
    },
    {
      title:'Filter with text equality',
      desc:`Create pupils with name (TEXT) and house (TEXT): ('Maya', 'Red'), ('Tom', 'Blue'), ('Zoe', 'Red'),
        ('Sam', 'Blue'). Write SELECT * FROM pupils WHERE house = 'Red'; — this should return only Maya and Zoe
        (2 rows). Note SQL uses a SINGLE = for comparisons, not ==.`,
      starter:`-- Create pupils, insert your rows, then filter by house
`,
      tests:[{type:'output', contains:['Maya','Zoe','(2 rows)'], label:'Shows only the Red house pupils (2 rows)'}]
    }
  ],
  quiz:[
    {
      q:'What does CREATE TABLE do?',
      options:['Defines a new table and its columns','Adds a new row of data','Deletes a table','Selects data from a table'],
      correct:0,
      explain:'CREATE TABLE describes the shape of a table (its columns and their types) — no data is stored until you INSERT.'
    },
    {
      q:'What does SELECT * FROM students do?',
      options:['Returns every column and every row from students','Returns only column names','Deletes all rows','Returns exactly one row'],
      correct:0,
      explain:'The * means "every column", and with no WHERE clause, every row comes back too.'
    },
    {
      q:'What does WHERE do in a SELECT statement?',
      options:['Filters which rows are included in the result','Sorts the results','Renames a column','Creates a new table'],
      correct:0,
      explain:'WHERE keeps only the rows where its condition evaluates to true.'
    },
    {
      q:'How do you select only the name and score columns (not every column)?',
      options:['SELECT name, score FROM table','SELECT * FROM table WHERE name, score','SELECT ONLY name, score FROM table','You cannot select specific columns in SQL'],
      correct:0,
      explain:'Listing column names, comma-separated, after SELECT chooses exactly which columns come back.'
    }
  ],
  sandboxStarter3:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90);
SELECT * FROM students WHERE score >= 70;
`,
  stretchChallenge:{
    title:'Combine filtering, column selection, and check the count',
    desc:`Create pupils with name (TEXT), age (INTEGER), score (INTEGER): ('Maya', 11, 85), ('Tom', 12, 45),
      ('Zoe', 10, 90), ('Sam', 9, 78), ('Eli', 13, 55). Write
      SELECT name FROM pupils WHERE score &gt;= 50 AND age &gt;= 10; — this should return Maya, Zoe and Eli
      (3 rows). Tom is excluded (score too low) and Sam is excluded (age too low), even though each only fails
      ONE of the two conditions.`,
    starter:`-- Create pupils, insert your rows, then combine two conditions with AND
`,
    tests:[
      {type:'output', contains:['Maya','Zoe','Eli','(3 rows)'], label:'Shows Maya, Zoe and Eli (3 rows)'}
    ]
  }
},
{
  key:'week2', num:2, title:'Sorting and Limiting: ORDER BY and LIMIT',
  scenarioTag:'Real world: the leaderboard, and the top 3 places',
  scenario:`A raw list of scores isn't a leaderboard until it's sorted. This week adds two small but powerful
    tools: ORDER BY to sort results, and LIMIT to cut them down to just the top (or bottom) few.`,
  objectives:[
    'Sort results with ORDER BY (ascending by default)',
    'Sort from highest to lowest with ORDER BY ... DESC',
    'Limit how many rows come back with LIMIT',
    'Combine ORDER BY and LIMIT to find the "top N" or "bottom N" rows'
  ],
  conceptHtml:`
    <p><code>ORDER BY</code> sorts your results. By default it sorts LOWEST to HIGHEST:</p>
    <pre class="code-block">SELECT * FROM students ORDER BY score;
-- Ben (62), Ada (85), Cy (90) - lowest first</pre>
    <p>Add <code>DESC</code> to sort HIGHEST to lowest instead:</p>
    <pre class="code-block">SELECT * FROM students ORDER BY score DESC;
-- Cy (90), Ada (85), Ben (62) - highest first</pre>
    <p><code>LIMIT</code> cuts the result down to a fixed number of rows — combine it with ORDER BY to get the
    "top N":</p>
    <pre class="code-block">SELECT * FROM students ORDER BY score DESC LIMIT 2;
-- just Cy and Ada - the top 2 scorers</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">SELECT * FROM students ORDER BY score;</pre>
    <ul>
      <li><code>ORDER BY score</code> — sorts the result rows by the score column. With no extra word, SQL sorts
        ascending: smallest value first.</li>
      <li>The table itself is completely unchanged by this — ORDER BY only affects the ORDER the rows come back
        in for THIS query, not how they're stored.</li>
    </ul>
    <p>The second example adds <code>DESC</code> (short for "descending") right after the column name, flipping
    the sort direction. The third example keeps <code>DESC</code> but adds <code>LIMIT 2</code> at the very end —
    SQL sorts ALL the rows first, then keeps only the first 2 of that sorted list, giving you the top 2 scorers in
    one query.</p>`,
  sandboxStarter:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90);
SELECT * FROM students ORDER BY score;
`,
  sandboxStarter2:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90);
SELECT * FROM students ORDER BY score DESC;
`,
  exercises:[
    {
      title:'Sort ascending with ORDER BY',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Zoe', 65), ('Maya', 90), ('Tom', 40). Write
        SELECT * FROM pupils ORDER BY score; — the result should list them lowest to highest: Tom, then Zoe,
        then Maya.`,
      starter:`-- Create pupils, insert your rows, then sort ascending by score
`,
      tests:[{type:'output', contains:['Tom | 40\nZoe | 65','Zoe | 65\nMaya | 90','(3 rows)'], label:'Sorted lowest to highest: Tom, Zoe, Maya'}]
    },
    {
      title:'Sort descending with ORDER BY ... DESC',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Zoe', 65), ('Maya', 90), ('Tom', 40). Write
        SELECT * FROM pupils ORDER BY score DESC; — the result should list them highest to lowest: Maya, then
        Zoe, then Tom.`,
      starter:`-- Create pupils, insert your rows, then sort descending by score
`,
      tests:[{type:'output', contains:['Maya | 90\nZoe | 65','Zoe | 65\nTom | 40','(3 rows)'], label:'Sorted highest to lowest: Maya, Zoe, Tom'}]
    },
    {
      title:'Limit the results',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Ada', 85), ('Ben', 62), ('Cy', 90),
        ('Dee', 55), ('Eli', 78). Write SELECT * FROM pupils ORDER BY score DESC LIMIT 2; — the top 2 scorers
        should come back: Cy, then Ada.`,
      starter:`-- Create pupils, insert your rows, then get the top 2 scorers
`,
      tests:[{type:'output', contains:['Cy | 90\nAda | 85','(2 rows)'], label:'Shows only the top 2 scorers: Cy, then Ada'}]
    },
    {
      title:'Find the lowest scorers with LIMIT',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Ada', 85), ('Ben', 62), ('Cy', 90),
        ('Dee', 55), ('Eli', 78). Write SELECT * FROM pupils ORDER BY score LIMIT 2; — the bottom 2 scorers
        should come back: Dee, then Ben.`,
      starter:`-- Create pupils, insert your rows, then get the bottom 2 scorers
`,
      tests:[{type:'output', contains:['Dee | 55\nBen | 62','(2 rows)'], label:'Shows only the bottom 2 scorers: Dee, then Ben'}]
    },
    {
      title:'Sort by name alphabetically',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Zoe', 70), ('Ada', 85), ('Maya', 60). Write
        SELECT * FROM pupils ORDER BY name; — ORDER BY works on text columns too, sorting alphabetically:
        Ada, then Maya, then Zoe.`,
      starter:`-- Create pupils, insert your rows, then sort alphabetically by name
`,
      tests:[{type:'output', contains:['Ada | 85\nMaya | 60','Maya | 60\nZoe | 70','(3 rows)'], label:'Sorted alphabetically: Ada, Maya, Zoe'}]
    },
    {
      title:'Combine WHERE, ORDER BY, and LIMIT',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Ada', 85), ('Ben', 45), ('Cy', 90),
        ('Dee', 40), ('Eli', 30), ('Fay', 20). Write
        SELECT name, score FROM pupils WHERE score &gt;= 50 ORDER BY score DESC LIMIT 3; — only Ada and Cy
        score 50 or above, so even though LIMIT asks for 3, only those 2 qualify: Cy, then Ada. WHERE runs
        BEFORE ORDER BY and LIMIT, so it's the filtering that decides who's even in the running.`,
      starter:`-- Create pupils, insert your rows, then combine WHERE + ORDER BY + LIMIT
`,
      tests:[{type:'output', contains:['Cy | 90\nAda | 85','(2 rows)'], label:'Shows only Cy and Ada — the 2 pupils scoring 50 or above'}]
    }
  ],
  quiz:[
    {
      q:'What does ORDER BY score do (with no DESC)?',
      options:['Sorts rows from lowest to highest score','Sorts rows from highest to lowest score','Removes duplicate scores','Groups rows by score'],
      correct:0,
      explain:'ORDER BY sorts ascending (lowest first) by default - add DESC to reverse it.'
    },
    {
      q:'How do you sort from highest to lowest?',
      options:['ORDER BY score DESC','ORDER BY score HIGH','ORDER BY score REVERSE','ORDER BY -score'],
      correct:0,
      explain:'DESC (descending) placed after the column name reverses the default ascending sort.'
    },
    {
      q:'What does LIMIT 3 do?',
      options:['Restricts the result to at most 3 rows','Requires exactly 3 columns','Filters rows where a column equals 3','Sorts by the 3rd column'],
      correct:0,
      explain:'LIMIT caps how many rows come back, keeping only the first N after any sorting/filtering.'
    },
    {
      q:'In what order do ORDER BY and LIMIT apply?',
      options:['Sorting happens first, then LIMIT keeps only the first N of the sorted rows','LIMIT happens first, then the remaining rows are sorted','They apply at the same time, independently','LIMIT must come before ORDER BY in the query'],
      correct:0,
      explain:'SQL sorts the full result set first, then LIMIT trims it down - that combination is exactly what makes "top N" queries work.'
    }
  ],
  sandboxStarter3:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90);
SELECT * FROM students ORDER BY score DESC LIMIT 2;
`,
  stretchChallenge:{
    title:'Find the middle scorer with OFFSET',
    desc:`Create pupils with name (TEXT) and score (INTEGER): ('Ada', 85), ('Ben', 62), ('Cy', 90), ('Dee', 55),
      ('Eli', 78). Write SELECT name FROM pupils ORDER BY score DESC LIMIT 1 OFFSET 2; — OFFSET 2 skips the
      first 2 rows of the sorted list before LIMIT 1 grabs the next one, so this finds the THIRD highest
      scorer: Eli (after Cy and Ada are skipped).`,
    starter:`-- Create pupils, insert your rows, then find the 3rd highest scorer
`,
    tests:[
      {type:'output', contains:['Eli','(1 row)'], label:'Finds the 3rd highest scorer (Eli)'}
    ]
  }
},
{
  key:'week3', num:3, title:'Filtering with AND, OR, BETWEEN, and LIKE',
  scenarioTag:'Real world: finding students who match several rules at once',
  scenario:`Real questions rarely have just one condition — "who scored between 60 and 89", "who's in Red or
    Blue house", "whose name starts with A". This week adds a proper toolkit for combining and shaping
    conditions inside WHERE.`,
  objectives:[
    'Require every condition to be true with AND',
    'Require at least one condition to be true with OR',
    'Filter an inclusive range of values with BETWEEN',
    'Match text patterns with LIKE and the % wildcard'
  ],
  conceptHtml:`
    <p><code>AND</code> requires EVERY condition to be true; <code>OR</code> requires AT LEAST ONE:</p>
    <pre class="code-block">SELECT * FROM students WHERE score &gt;= 60 AND score &lt; 90;
SELECT * FROM students WHERE house = 'Red' OR house = 'Blue';</pre>
    <p><code>BETWEEN</code> is shorthand for a range — and it's <strong>inclusive</strong> at both ends:</p>
    <pre class="code-block">SELECT * FROM students WHERE score BETWEEN 60 AND 89;
-- exactly the same as: score >= 60 AND score <= 89</pre>
    <p><code>LIKE</code> matches text PATTERNS, using <code>%</code> as a wildcard for "any characters
    (including none)":</p>
    <pre class="code-block">SELECT * FROM students WHERE name LIKE 'A%';
-- matches any name starting with "A" - Ada, Amy, Alex...</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">SELECT * FROM students WHERE score >= 60 AND score < 90;</pre>
    <ul>
      <li><code>score &gt;= 60</code> and <code>score &lt; 90</code> — two separate conditions, each true or
        false for every row.</li>
      <li><code>AND</code> — combines them so BOTH must be true for a row to be included. A score of 95 fails
        the second condition even though it passes the first, so it's excluded.</li>
    </ul>
    <p>The second example follows the same shape with <code>OR</code> instead — here a row only needs to match
    ONE of the two house conditions, not both.</p>
    <p><strong>A gotcha to watch for:</strong> when you mix AND and OR in the same WHERE clause, SQL evaluates
    AND FIRST, before OR — exactly like multiplication before addition in maths. If that's not what you mean,
    wrap the OR part in parentheses: <code>WHERE (house = 'Red' OR house = 'Blue') AND score &gt;= 60</code>
    forces the OR to be checked as one group first.</p>`,
  sandboxStarter:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90), ('Dee', 45);
SELECT * FROM students WHERE score >= 60 AND score < 90;
`,
  sandboxStarter2:`CREATE TABLE students (name TEXT, house TEXT);
INSERT INTO students VALUES ('Ada', 'Red'), ('Ben', 'Blue'), ('Cy', 'Green'), ('Dee', 'Red');
SELECT * FROM students WHERE house = 'Red' OR house = 'Blue';
`,
  exercises:[
    {
      title:'Combine two conditions with AND',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Ada', 85), ('Ben', 62), ('Cy', 90),
        ('Dee', 45). Write SELECT * FROM pupils WHERE score &gt;= 60 AND score &lt; 90; — only Ada and Ben
        satisfy BOTH conditions (Cy is too high, Dee is too low), so the result should be 2 rows.`,
      starter:`-- Create pupils, insert your rows, then filter with AND
`,
      tests:[{type:'output', contains:['Ada','Ben','(2 rows)'], label:'Shows only Ada and Ben (2 rows)'}]
    },
    {
      title:'Combine two conditions with OR',
      desc:`Create pupils with name (TEXT) and house (TEXT): ('Ada', 'Red'), ('Ben', 'Blue'), ('Cy', 'Green'),
        ('Dee', 'Red'). Write SELECT * FROM pupils WHERE house = 'Red' OR house = 'Blue'; — Ada, Ben and Dee
        each match at least one condition (only Cy, in Green, matches neither), so the result should be 3
        rows.`,
      starter:`-- Create pupils, insert your rows, then filter with OR
`,
      tests:[{type:'output', contains:['Ada','Ben','Dee','(3 rows)'], label:'Shows Ada, Ben and Dee (3 rows)'}]
    },
    {
      title:'Filter a range with BETWEEN',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Ada', 89), ('Ben', 60), ('Cy', 90),
        ('Dee', 45). Write SELECT * FROM pupils WHERE score BETWEEN 60 AND 89; — BETWEEN is INCLUSIVE, so both
        the exact boundary values count: Ada (89) and Ben (60) both qualify, giving 2 rows.`,
      starter:`-- Create pupils, insert your rows, then filter with BETWEEN
`,
      tests:[{type:'output', contains:['Ada','Ben','(2 rows)'], label:'Shows Ada and Ben, including both boundary values (2 rows)'}]
    },
    {
      title:'Match text with LIKE',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Ada', 85), ('Amy', 70), ('Ben', 62),
        ('Cy', 90). Write SELECT * FROM pupils WHERE name LIKE 'A%'; — the % wildcard matches any characters
        after "A", so Ada and Amy both qualify (2 rows), while Ben and Cy don't start with A.`,
      starter:`-- Create pupils, insert your rows, then filter with LIKE
`,
      tests:[{type:'output', contains:['Ada','Amy','(2 rows)'], label:'Shows Ada and Amy — names starting with A (2 rows)'}]
    },
    {
      title:'Combine BETWEEN with LIKE',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Ada', 85), ('Amy', 55), ('Ben', 62),
        ('Cy', 90). Write
        SELECT * FROM pupils WHERE name LIKE 'A%' AND score BETWEEN 60 AND 89; — only Ada satisfies BOTH the
        name pattern AND the score range (Amy's name matches but her score is too low), so the result should
        be exactly 1 row.`,
      starter:`-- Create pupils, insert your rows, then combine LIKE + BETWEEN
`,
      tests:[{type:'output', contains:['Ada','(1 row)'], label:'Shows only Ada (1 row)'}]
    },
    {
      title:'Use OR across three options',
      desc:`Create pupils with name (TEXT) and house (TEXT): ('Ada', 'Red'), ('Ben', 'Blue'), ('Cy', 'Green'),
        ('Dee', 'Yellow'), ('Eli', 'Red'). Write
        SELECT * FROM pupils WHERE house = 'Red' OR house = 'Blue' OR house = 'Green'; — every pupil except Dee
        (Yellow) matches at least one of the three house conditions, giving 4 rows.`,
      starter:`-- Create pupils, insert your rows, then chain three OR conditions
`,
      tests:[{type:'output', contains:['Ada','Ben','Cy','Eli','(4 rows)'], label:'Shows everyone except Dee (4 rows)'}]
    }
  ],
  quiz:[
    {
      q:'What does WHERE score >= 60 AND score < 90 require?',
      options:['BOTH conditions must be true','EITHER condition must be true','Neither condition may be true','Only the first condition matters'],
      correct:0,
      explain:'AND only includes a row when every condition it joins is true.'
    },
    {
      q:'What does BETWEEN 60 AND 89 include?',
      options:['60 and 89 themselves, plus everything in between (inclusive)','Only values strictly between 60 and 89, not 60 or 89 themselves','Only the value 60','Only the value 89'],
      correct:0,
      explain:'BETWEEN is inclusive at both ends - it is exactly equivalent to x >= 60 AND x <= 89.'
    },
    {
      q:'What does the % symbol do inside a LIKE pattern?',
      options:['Matches any sequence of characters (including none)','Matches exactly one character','Means "not equal to"','Is a comment marker'],
      correct:0,
      explain:'% is a wildcard standing in for zero or more characters - "A%" matches any text starting with A.'
    },
    {
      q:'Why might you need parentheses around OR conditions when combined with AND?',
      options:['AND binds tighter than OR by default, so parentheses control which conditions group together','Parentheses are required by SQL syntax, with no effect on meaning','OR always overrides AND, with or without parentheses','You can never combine AND and OR in the same WHERE clause'],
      correct:0,
      explain:"Without parentheses, SQL evaluates AND before OR - exactly like multiplication before addition - which can silently change what your query actually means."
    }
  ],
  sandboxStarter3:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90), ('Dee', 45);
SELECT * FROM students WHERE score BETWEEN 60 AND 89;
`,
  stretchChallenge:{
    title:'See why parentheses matter with AND + OR',
    desc:`Create pupils with name (TEXT), house (TEXT), and score (INTEGER): ('Ada', 'Red', 85),
      ('Ben', 'Blue', 40), ('Cy', 'Green', 90), ('Dee', 'Red', 55), ('Eli', 'Blue', 75). Write
      SELECT name FROM pupils WHERE (house = 'Red' OR house = 'Blue') AND score &gt;= 60; — the parentheses
      force "Red or Blue" to be checked as one group, THEN require score &gt;= 60 on top of that. Only Ada and
      Eli satisfy both parts, giving 2 rows. (Try removing the parentheses in the sandbox to see the WRONG
      answer this would otherwise give — Dee would incorrectly be included, since without parentheses AND binds
      tighter than OR.)`,
    starter:`-- Create pupils, insert your rows, then filter with parenthesised OR + AND
`,
    tests:[
      {type:'output', contains:['Ada','Eli','(2 rows)'], label:'Shows only Ada and Eli (2 rows)'}
    ]
  }
},
{
  key:'week4', num:4, title:'Aggregate Functions: COUNT, SUM, AVG, MIN, MAX, and GROUP BY',
  scenarioTag:'Real world: turning a list of scores into a class report',
  scenario:`How many students took the test? What was the average score? Which house did best? Individual rows
    don't answer these questions — you need to summarise ACROSS rows, which is exactly what aggregate functions
    and GROUP BY are for.`,
  objectives:[
    'Count rows with COUNT(*)',
    'Total and average a column with SUM() and AVG()',
    'Find the smallest and largest values with MIN() and MAX()',
    'Summarise per group with GROUP BY'
  ],
  conceptHtml:`
    <p>Aggregate functions summarise a whole column into ONE value:</p>
    <pre class="code-block">SELECT COUNT(*) FROM students;   -- how many rows
SELECT SUM(score) FROM students; -- total of every score
SELECT AVG(score) FROM students; -- the average score
SELECT MIN(score), MAX(score) FROM students;</pre>
    <p><code>GROUP BY</code> splits rows into groups first, then runs the aggregate ONCE PER GROUP instead of
    once overall:</p>
    <pre class="code-block">SELECT house, COUNT(*) FROM students GROUP BY house ORDER BY house;
-- one row per house, each with its own count</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">SELECT house, COUNT(*) FROM students GROUP BY house ORDER BY house;</pre>
    <ul>
      <li><code>GROUP BY house</code> — collects all the rows that share the same house value into one group,
        for every distinct house value present.</li>
      <li><code>COUNT(*)</code> — normally counts every row in the whole table, but placed alongside
        GROUP BY, it counts the rows WITHIN EACH GROUP instead — one count per house.</li>
      <li><code>ORDER BY house</code> — GROUP BY on its own doesn't promise any particular row order, so adding
        ORDER BY explicitly is good practice whenever the order matters to you.</li>
    </ul>
    <p>Any column you SELECT alongside an aggregate must either be part of the GROUP BY, or itself be another
    aggregate — that's why <code>house</code> appears in both the SELECT list and the GROUP BY clause here.</p>`,
  sandboxStarter:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90), ('Dee', 45), ('Eli', 78);
SELECT COUNT(*) FROM students;
`,
  sandboxStarter2:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90), ('Dee', 45), ('Eli', 78);
SELECT SUM(score), AVG(score), MIN(score), MAX(score) FROM students;
`,
  exercises:[
    {
      title:'Count the rows with COUNT(*)',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 62), ('Zoe', 90),
        ('Sam', 45). Write SELECT COUNT(*) FROM pupils; — it should return 4, the number of rows.`,
      starter:`-- Create pupils, insert your rows, then count them
`,
      tests:[{type:'output', contains:['4','(1 row)'], label:'Counts 4 rows'}]
    },
    {
      title:'Add up all the scores with SUM()',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 62), ('Zoe', 90),
        ('Sam', 45). Write SELECT SUM(score) FROM pupils; — it should return 282 (85+62+90+45).`,
      starter:`-- Create pupils, insert your rows, then total the scores
`,
      tests:[{type:'output', contains:['282'], label:'Sums to 282'}]
    },
    {
      title:'Find the average with AVG()',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 80), ('Tom', 60), ('Zoe', 90),
        ('Sam', 50). Write SELECT AVG(score) FROM pupils; — it should return 70 (280 divided by 4).`,
      starter:`-- Create pupils, insert your rows, then average the scores
`,
      tests:[{type:'output', contains:['70'], label:'Averages to 70'}]
    },
    {
      title:'Find the extremes with MIN() and MAX()',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 80), ('Tom', 60), ('Zoe', 90),
        ('Sam', 50). Write SELECT MIN(score), MAX(score) FROM pupils; — it should return 50 and 90.`,
      starter:`-- Create pupils, insert your rows, then find the min and max
`,
      tests:[{type:'output', contains:['50','90'], label:'Finds the min (50) and max (90)'}]
    },
    {
      title:'Combine WHERE with an aggregate',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 62), ('Zoe', 90),
        ('Sam', 45). Write SELECT AVG(score) FROM pupils WHERE score &gt;= 60; — WHERE filters out Sam BEFORE
        the average is calculated, so the result should be 79 ((85+62+90)/3), not the average of all 4.`,
      starter:`-- Create pupils, insert your rows, then average only the qualifying scores
`,
      tests:[{type:'output', contains:['79'], label:'Averages only the scores 60+ (79)'}]
    },
    {
      title:'Group and count with GROUP BY',
      desc:`Create pupils with name (TEXT) and house (TEXT): ('Maya', 'Red'), ('Tom', 'Blue'), ('Zoe', 'Red'),
        ('Sam', 'Green'), ('Eli', 'Blue'). Write
        SELECT house, COUNT(*) FROM pupils GROUP BY house ORDER BY house; — one row per house with its own
        count: Blue (2), Green (1), Red (2), in alphabetical order.`,
      starter:`-- Create pupils, insert your rows, then count per house
`,
      tests:[{type:'output', contains:['Blue | 2\nGreen | 1','Green | 1\nRed | 2','(3 rows)'], label:'Shows counts per house in order: Blue 2, Green 1, Red 2'}]
    }
  ],
  quiz:[
    {
      q:'What does COUNT(*) return?',
      options:['The number of rows in the result','The sum of all values','The highest value in a column','The number of columns'],
      correct:0,
      explain:'COUNT(*) counts rows, regardless of what is in them.'
    },
    {
      q:'What is the difference between SUM() and AVG()?',
      options:['SUM adds every value; AVG divides that total by how many values there are','They are identical','SUM only works on text, AVG only works on numbers','AVG always rounds to a whole number'],
      correct:0,
      explain:'AVG is essentially SUM divided by COUNT, computed for you in one function.'
    },
    {
      q:'What does GROUP BY do?',
      options:['Splits rows into groups sharing the same value, so aggregate functions run once per group','Sorts rows in a fixed order','Removes duplicate rows entirely','Combines two tables together'],
      correct:0,
      explain:'GROUP BY collects rows with matching values together, and any aggregate function in the SELECT then runs separately for each group.'
    },
    {
      q:'Why is it good practice to add ORDER BY to a GROUP BY query?',
      options:['GROUP BY does not guarantee any particular row order on its own','ORDER BY is required by SQL syntax after GROUP BY','ORDER BY makes GROUP BY run faster','Without ORDER BY, GROUP BY returns an error'],
      correct:0,
      explain:'GROUP BY only promises which rows end up together, not what order the groups come back in - ORDER BY makes that order explicit and reliable.'
    }
  ],
  sandboxStarter3:`CREATE TABLE students (name TEXT, house TEXT);
INSERT INTO students VALUES ('Ada', 'Red'), ('Ben', 'Blue'), ('Cy', 'Green'), ('Dee', 'Red'), ('Eli', 'Blue');
SELECT house, COUNT(*) FROM students GROUP BY house ORDER BY house;
`,
  stretchChallenge:{
    title:'Combine GROUP BY with AVG() per group',
    desc:`Create pupils with name (TEXT), house (TEXT), and score (INTEGER): ('Maya', 'Red', 85),
      ('Tom', 'Blue', 62), ('Zoe', 'Red', 55), ('Sam', 'Green', 90), ('Eli', 'Blue', 90). Write
      SELECT house, AVG(score) FROM pupils GROUP BY house ORDER BY house; — each house gets its own average:
      Blue 76 ((62+90)/2), Green 90, Red 70 ((85+55)/2).`,
    starter:`-- Create pupils, insert your rows, then average scores per house
`,
    tests:[
      {type:'output', contains:['Blue | 76\nGreen | 90','Green | 90\nRed | 70','(3 rows)'], label:'Shows the average score per house: Blue 76, Green 90, Red 70'}
    ]
  }
},
{
  key:'week5', num:5, title:'Changing Data: INSERT, UPDATE, and DELETE',
  scenarioTag:'Real world: keeping the register up to date all year',
  scenario:`A class register isn't static — new students join, scores get corrected, and students who've left
    need removing. Every week so far has only ever READ data. This week you'll actually change it.`,
  objectives:[
    'Add new rows to an existing table with INSERT',
    'Modify existing rows with UPDATE ... SET ... WHERE',
    'Remove rows with DELETE ... WHERE',
    'Understand why WHERE is critical for UPDATE/DELETE'
  ],
  conceptHtml:`
    <p><code>INSERT</code> adds a new row to a table that already exists:</p>
    <pre class="code-block">INSERT INTO students (name, score) VALUES ('Fay', 72);</pre>
    <p><code>UPDATE</code> changes existing rows — <code>SET</code> says what to change, <code>WHERE</code> says
    which rows:</p>
    <pre class="code-block">UPDATE students SET score = 95 WHERE name = 'Ada';</pre>
    <p><code>DELETE</code> removes rows — again, <code>WHERE</code> decides which ones:</p>
    <pre class="code-block">DELETE FROM students WHERE score &lt; 50;</pre>
    <div class="callout tip"><strong>This is the single most important warning in the whole course:</strong>
      UPDATE and DELETE with NO WHERE clause apply to EVERY row in the table, not "no rows". Always check your
      WHERE clause before running either of these on data you actually care about.</div>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">UPDATE students SET score = 95 WHERE name = 'Ada';</pre>
    <ul>
      <li><code>UPDATE students</code> — names which table to change.</li>
      <li><code>SET score = 95</code> — says WHAT to change: the score column becomes 95.</li>
      <li><code>WHERE name = 'Ada'</code> — says WHICH rows this applies to. Without this, EVERY student's score
        would become 95.</li>
    </ul>
    <p>DELETE follows the exact same "which rows" logic — <code>DELETE FROM students WHERE score &lt; 50</code>
    removes only the rows matching that condition, leaving everyone else untouched.</p>`,
  sandboxStarter:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62);
INSERT INTO students (name, score) VALUES ('Cy', 90);
SELECT * FROM students;
`,
  sandboxStarter2:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90);
UPDATE students SET score = 95 WHERE name = 'Ada';
SELECT * FROM students;
`,
  exercises:[
    {
      title:'Add a new row with INSERT',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 62). Then write
        INSERT INTO pupils (name, score) VALUES ('Zoe', 90); — pupils should now have 3 rows, and Zoe's score
        should be 90.`,
      starter:`-- Create pupils, then insert a new row for Zoe
`,
      tests:[{type:'assert', expr:"(SELECT COUNT(*) FROM pupils) = 3 AND (SELECT score FROM pupils WHERE name = 'Zoe') = 90", label:"pupils has 3 rows, and Zoe's score is 90"}]
    },
    {
      title:'Update a row with UPDATE',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 62), ('Zoe', 40). Write
        UPDATE pupils SET score = 75 WHERE name = 'Zoe'; — this should change ONLY Zoe's score, leaving Maya
        untouched at 85.`,
      starter:`-- Create pupils, then update only Zoe's score
`,
      tests:[{type:'assert', expr:"(SELECT score FROM pupils WHERE name = 'Zoe') = 75 AND (SELECT score FROM pupils WHERE name = 'Maya') = 85", label:"Zoe's score is now 75, and Maya's score (85) is unchanged"}]
    },
    {
      title:'Delete a row with DELETE',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 45), ('Zoe', 90). Write
        DELETE FROM pupils WHERE score &lt; 50; — this should remove only Tom, leaving 2 rows.`,
      starter:`-- Create pupils, then delete anyone scoring below 50
`,
      tests:[{type:'assert', expr:"(SELECT COUNT(*) FROM pupils) = 2 AND (SELECT COUNT(*) FROM pupils WHERE name = 'Tom') = 0", label:'pupils has 2 rows left, and Tom is gone'}]
    },
    {
      title:'Update several rows at once',
      desc:`Create pupils with name (TEXT), house (TEXT), and score (INTEGER): ('Maya', 'Red', 85),
        ('Tom', 'Blue', 62), ('Zoe', 'Red', 40). Write UPDATE pupils SET score = score + 5 WHERE house = 'Red';
        — every Red-house pupil gets 5 bonus points: Maya becomes 90, Zoe becomes 45. Tom (Blue) stays at 62.`,
      starter:`-- Create pupils, then give every Red house pupil +5 points
`,
      tests:[{type:'assert', expr:"(SELECT score FROM pupils WHERE name = 'Maya') = 90 AND (SELECT score FROM pupils WHERE name = 'Zoe') = 45 AND (SELECT score FROM pupils WHERE name = 'Tom') = 62", label:'Both Red house pupils get +5 (Maya 90, Zoe 45); Blue house (Tom) stays at 62'}]
    },
    {
      title:'Delete several rows at once',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 45), ('Zoe', 30),
        ('Sam', 90), ('Ben', 55). Write DELETE FROM pupils WHERE score &lt; 60; — this removes Tom, Zoe and
        Ben, leaving only Maya and Sam (2 rows).`,
      starter:`-- Create pupils, then delete everyone scoring below 60
`,
      tests:[{type:'assert', expr:"(SELECT COUNT(*) FROM pupils) = 2 AND (SELECT COUNT(*) FROM pupils WHERE name = 'Maya') = 1 AND (SELECT COUNT(*) FROM pupils WHERE name = 'Sam') = 1", label:'Only Maya and Sam remain (2 rows)'}]
    },
    {
      title:'Combine INSERT, UPDATE, and DELETE in sequence',
      desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 45). Then, in order:
        (1) INSERT INTO pupils (name, score) VALUES ('Zoe', 20);
        (2) UPDATE pupils SET score = 95 WHERE name = 'Maya';
        (3) DELETE FROM pupils WHERE score &lt; 50;
        After all three steps, only Maya should remain, with a score of 95 (Tom and Zoe both end up below 50
        and get deleted).`,
      starter:`-- Create pupils, then insert, update, and delete in order
`,
      tests:[{type:'assert', expr:"(SELECT COUNT(*) FROM pupils) = 1 AND (SELECT score FROM pupils WHERE name = 'Maya') = 95", label:'Only Maya remains, with score 95'}]
    }
  ],
  quiz:[
    {
      q:'What does INSERT INTO table (col1, col2) VALUES (...) do?',
      options:['Adds a new row to the table','Deletes a row','Changes an existing row','Creates a new table'],
      correct:0,
      explain:'INSERT adds a brand new row — the table itself must already exist.'
    },
    {
      q:'What happens if you run UPDATE table SET score = 0 with NO WHERE clause?',
      options:['EVERY row in the table gets updated','Nothing happens, since no row is specified','Only the first row is updated','SQL requires a WHERE clause, so this is an error'],
      correct:0,
      explain:'With no WHERE clause, UPDATE (and DELETE) apply to every single row in the table — a common and costly real-world mistake.'
    },
    {
      q:'What does DELETE FROM table WHERE score < 50 do?',
      options:['Removes only the rows where score is below 50','Removes every row in the table','Sets every score below 50 to 50','Deletes the whole table structure'],
      correct:0,
      explain:'DELETE removes matching ROWS, not the table itself - the table (and its other rows) stays intact.'
    },
    {
      q:'Why is WHERE especially important with UPDATE and DELETE?',
      options:['Without it, the change applies to every single row, not just the ones you meant to affect','WHERE is only needed for SELECT, not UPDATE/DELETE','WHERE makes UPDATE and DELETE run faster','WHERE is optional and has no effect either way'],
      correct:0,
      explain:'Missing a WHERE clause on UPDATE/DELETE is one of the most common real-world database mistakes, precisely because it silently affects everything.'
    }
  ],
  sandboxStarter3:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 45), ('Cy', 90);
DELETE FROM students WHERE score < 50;
SELECT * FROM students;
`,
  stretchChallenge:{
    title:'See exactly what happens when you forget WHERE',
    desc:`Create pupils with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 62), ('Zoe', 90). This time,
      DELIBERATELY write DELETE FROM pupils; with NO WHERE clause at all, to see its real effect for yourself —
      it empties the table completely (0 rows left). In real work, always double-check a WHERE clause is
      present before running DELETE or UPDATE on data you care about.`,
    starter:`-- Create pupils, then delete with no WHERE clause to see what happens
`,
    tests:[
      {type:'assert', expr:'(SELECT COUNT(*) FROM pupils) = 0', label:'pupils is now completely empty (0 rows) — this is what forgetting WHERE does'}
    ]
  }
},
{
  key:'week6', num:6, title:'Designing Tables: Data Types and Constraints',
  scenarioTag:'Real world: designing the register properly, before anyone types a single row',
  scenario:`So far you've built quick, loose tables. A real database design decides, up front, what TYPE each
    column holds and what RULES the data must follow — catching mistakes before they ever get stored.`,
  objectives:[
    'Choose an appropriate data type for a column: TEXT, INTEGER, or REAL',
    "Give each row a unique identifier with PRIMARY KEY",
    'Require a value with NOT NULL',
    'Prevent duplicate values with UNIQUE'
  ],
  conceptHtml:`
    <p>When you CREATE TABLE, you can add rules alongside each column's type:</p>
    <pre class="code-block">CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  score INTEGER
);</pre>
    <p><code>PRIMARY KEY</code> uniquely identifies each row. On an <code>INTEGER PRIMARY KEY</code> column, SQLite
    fills it in automatically if you don't supply one:</p>
    <pre class="code-block">INSERT INTO students (name, score) VALUES ('Ada', 85);  -- id becomes 1
INSERT INTO students (name, score) VALUES ('Ben', 62);  -- id becomes 2</pre>
    <p><code>NOT NULL</code> means that column MUST have a value — an insert without one is rejected.
    <code>UNIQUE</code> means no two rows can share the same value in that column.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  score INTEGER
);</pre>
    <ul>
      <li><code>id INTEGER PRIMARY KEY</code> — a whole-number column that uniquely identifies each row, filled
        in automatically as 1, 2, 3, ... whenever you don't specify a value for it yourself.</li>
      <li><code>name TEXT NOT NULL</code> — a text column, with an extra rule: every row MUST have a name. An
        insert that tries to leave it out is rejected.</li>
      <li><code>score INTEGER</code> — an ordinary whole-number column, with no extra rules — it CAN be left
        empty (NULL) if needed.</li>
    </ul>
    <p>Data types (TEXT for words, INTEGER for whole numbers, REAL for decimals like 1.65) and constraints
    (PRIMARY KEY, NOT NULL, UNIQUE) both belong right after a column's name in CREATE TABLE.</p>`,
  sandboxStarter:`CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT NOT NULL, score INTEGER);
INSERT INTO students (name, score) VALUES ('Ada', 85);
INSERT INTO students (name, score) VALUES ('Ben', 62);
SELECT * FROM students;
`,
  sandboxStarter2:`CREATE TABLE students (name TEXT UNIQUE, score INTEGER);
INSERT OR IGNORE INTO students VALUES ('Ada', 85);
INSERT OR IGNORE INTO students VALUES ('Ada', 99);
SELECT * FROM students;
`,
  exercises:[
    {
      title:'Create a table with a PRIMARY KEY',
      desc:`Create pupils with id (INTEGER PRIMARY KEY), name (TEXT), and score (INTEGER). Insert two rows,
        leaving id out both times: INSERT INTO pupils (name, score) VALUES ('Maya', 85); then
        INSERT INTO pupils (name, score) VALUES ('Tom', 62); — SQLite should assign Maya id 1 and Tom id 2
        automatically.`,
      starter:`-- Create pupils with a PRIMARY KEY id, then insert two rows
`,
      tests:[{type:'assert', expr:"(SELECT id FROM pupils WHERE name = 'Maya') = 1 AND (SELECT id FROM pupils WHERE name = 'Tom') = 2", label:'Maya gets id 1 and Tom gets id 2, assigned automatically'}]
    },
    {
      title:'Require a value with NOT NULL',
      desc:`Create pupils with name (TEXT NOT NULL) and score (INTEGER). Write
        INSERT OR IGNORE INTO pupils (name, score) VALUES ('Maya', 85); then
        INSERT OR IGNORE INTO pupils (name, score) VALUES (NULL, 62); — the second insert should be silently
        rejected (OR IGNORE skips it instead of stopping your whole script), since name can't be NULL. Only
        Maya should end up in the table.`,
      starter:`-- Create pupils with a NOT NULL name, then try inserting a NULL name
`,
      tests:[{type:'assert', expr:"(SELECT COUNT(*) FROM pupils) = 1 AND (SELECT name FROM pupils) = 'Maya'", label:'Only Maya was inserted — the NULL name was rejected'}]
    },
    {
      title:'Prevent duplicates with UNIQUE',
      desc:`Create pupils with name (TEXT UNIQUE) and score (INTEGER). Write
        INSERT OR IGNORE INTO pupils VALUES ('Maya', 85); then
        INSERT OR IGNORE INTO pupils VALUES ('Maya', 99); — the second insert should be silently rejected,
        since "Maya" already exists. Maya's score should still be 85, not 99.`,
      starter:`-- Create pupils with a UNIQUE name, then try inserting a duplicate
`,
      tests:[{type:'assert', expr:"(SELECT COUNT(*) FROM pupils) = 1 AND (SELECT score FROM pupils WHERE name = 'Maya') = 85", label:"Only one Maya exists, with her original score (85)"}]
    },
    {
      title:'Choose the right data type',
      desc:`Create pupils with name (TEXT) and height (REAL) — REAL is for decimal numbers, unlike INTEGER
        which only holds whole numbers. Insert ('Maya', 1.65). Confirm Maya's height was stored correctly as
        1.65.`,
      starter:`-- Create pupils with a REAL height column, then insert a decimal value
`,
      tests:[{type:'assert', expr:"(SELECT height FROM pupils WHERE name = 'Maya') = 1.65", label:"Maya's height (1.65) was stored correctly as a decimal"}]
    },
    {
      title:'Combine PRIMARY KEY and NOT NULL together',
      desc:`Create pupils with id (INTEGER PRIMARY KEY), name (TEXT NOT NULL), and score (INTEGER). Insert
        three rows, leaving id out each time: ('Maya', 85), ('Tom', 62), ('Zoe', 90). Zoe should end up with
        id 3, and the table should have 3 rows in total.`,
      starter:`-- Create pupils with PRIMARY KEY + NOT NULL, then insert 3 rows
`,
      tests:[{type:'assert', expr:"(SELECT id FROM pupils WHERE name = 'Zoe') = 3 AND (SELECT COUNT(*) FROM pupils) = 3", label:'Zoe gets id 3, and the table has 3 rows total'}]
    },
    {
      title:'Combine UNIQUE and NOT NULL',
      desc:`Create pupils with name (TEXT UNIQUE NOT NULL) and score (INTEGER). Using INSERT OR IGNORE for
        every attempt, insert: ('Maya', 85), then a duplicate ('Maya', 99), then a NULL name (NULL, 50), then
        ('Tom', 62). Only the FIRST Maya and Tom should actually make it into the table — the duplicate and the
        NULL should both be silently rejected, leaving 2 rows.`,
      starter:`-- Create pupils with UNIQUE + NOT NULL, then attempt 4 inserts
`,
      tests:[{type:'assert', expr:"(SELECT COUNT(*) FROM pupils) = 2 AND (SELECT score FROM pupils WHERE name = 'Maya') = 85 AND (SELECT score FROM pupils WHERE name = 'Tom') = 62", label:'Only Maya (85) and Tom (62) remain — the duplicate and NULL attempts were rejected'}]
    }
  ],
  quiz:[
    {
      q:'What does PRIMARY KEY do?',
      options:['Uniquely identifies each row, and auto-increments if you leave it out (INTEGER PRIMARY KEY)','Requires every column to have a value','Sorts the table automatically','Deletes duplicate rows'],
      correct:0,
      explain:'PRIMARY KEY gives every row a unique identifier - on an INTEGER PRIMARY KEY column, SQLite fills it in for you automatically.'
    },
    {
      q:'What does NOT NULL require?',
      options:['That column must be given a value on every insert','That column must be unique','That column must be a number','That the table can never be empty'],
      correct:0,
      explain:'NOT NULL rejects any insert that tries to leave that column empty.'
    },
    {
      q:'What does UNIQUE prevent?',
      options:['Two rows from having the same value in that column','A column from ever being empty','Rows from being deleted','A table from having more than one column'],
      correct:0,
      explain:'UNIQUE rejects an insert if the value being added already exists somewhere else in that column.'
    },
    {
      q:'What data type would you use for a column storing a height like 1.65 metres?',
      options:['REAL','TEXT','INTEGER','PRIMARY KEY'],
      correct:0,
      explain:'REAL stores decimal numbers - INTEGER only holds whole numbers, and PRIMARY KEY is a constraint, not a data type.'
    }
  ],
  sandboxStarter3:`CREATE TABLE students (name TEXT NOT NULL, score INTEGER);
INSERT OR IGNORE INTO students (name, score) VALUES ('Ada', 85);
INSERT OR IGNORE INTO students (name, score) VALUES (NULL, 62);
SELECT * FROM students;
`,
  stretchChallenge:{
    title:'Design a table with three rules together',
    desc:`Create pupils with id (INTEGER PRIMARY KEY), name (TEXT UNIQUE NOT NULL), and score (INTEGER). Using
      INSERT OR IGNORE throughout, attempt: ('Maya', 85), then ('Tom', 62), then a duplicate ('Maya', 99), then
      a NULL name (NULL, 50). Only the first Maya and Tom should succeed — Maya gets id 1, Tom gets id 2, and
      the table ends up with exactly 2 rows.`,
    starter:`-- Create pupils with all three rules, then attempt 4 inserts
`,
    tests:[
      {type:'assert', expr:"(SELECT COUNT(*) FROM pupils) = 2 AND (SELECT id FROM pupils WHERE name = 'Maya') = 1 AND (SELECT id FROM pupils WHERE name = 'Tom') = 2", label:'Exactly 2 rows remain: Maya (id 1) and Tom (id 2)'}
    ]
  }
},
{
  key:'week7', num:7, title:'Relationships: Linking Tables with JOIN',
  scenarioTag:'Real world: one source of truth for house names, not a copy on every row',
  scenario:`Repeating "Red", "Blue", "Green" on every single student row wastes space and invites typos. Real
    databases split related facts into separate tables and link them together — this week you'll learn how to
    bring linked tables back together with JOIN.`,
  objectives:[
    'Understand why data is split across related tables',
    'Link tables together using a shared key column',
    'Combine matching rows from two tables with JOIN ... ON',
    'Use WHERE, ORDER BY, and GROUP BY on a joined result, just like a single table'
  ],
  conceptHtml:`
    <p>Instead of repeating "Red" or "Blue" on every student row, a real design keeps houses in their OWN table,
    and each student just stores a house_id pointing to the right one:</p>
    <pre class="code-block">CREATE TABLE houses (id INTEGER PRIMARY KEY, house_name TEXT);
INSERT INTO houses VALUES (1, 'Red'), (2, 'Blue');

CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, house_id INTEGER);
INSERT INTO students VALUES (1, 'Ada', 1), (2, 'Ben', 2), (3, 'Cy', 1);</pre>
    <p><code>JOIN ... ON</code> brings the two tables back together, matching rows where the condition holds:</p>
    <pre class="code-block">SELECT students.name, houses.house_name
FROM students
JOIN houses ON students.house_id = houses.id;</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">SELECT students.name, houses.house_name
FROM students
JOIN houses ON students.house_id = houses.id;</pre>
    <ul>
      <li><code>students.name</code>, <code>houses.house_name</code> — the dot notation says exactly which
        TABLE each column comes from, since two tables could otherwise have columns with clashing names (both
        have an <code>id</code> here).</li>
      <li><code>JOIN houses</code> — brings the houses table into the query, alongside students.</li>
      <li><code>ON students.house_id = houses.id</code> — the matching rule: only pair up a student with the
        house whose id equals that student's house_id.</li>
    </ul>
    <p>Once joined, the result behaves just like any other query — you can still add <code>WHERE</code>,
    <code>ORDER BY</code>, or <code>GROUP BY</code> on top of it.</p>`,
  sandboxStarter:`CREATE TABLE houses (id INTEGER PRIMARY KEY, house_name TEXT);
INSERT INTO houses VALUES (1, 'Red'), (2, 'Blue');
CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, house_id INTEGER);
INSERT INTO students VALUES (1, 'Ada', 1), (2, 'Ben', 2), (3, 'Cy', 1);
SELECT students.name, houses.house_name FROM students JOIN houses ON students.house_id = houses.id;
`,
  sandboxStarter2:`CREATE TABLE houses (id INTEGER PRIMARY KEY, house_name TEXT);
INSERT INTO houses VALUES (1, 'Red'), (2, 'Blue');
CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, house_id INTEGER);
INSERT INTO students VALUES (1, 'Ada', 1), (2, 'Ben', 2), (3, 'Cy', 1);
SELECT students.name, houses.house_name FROM students JOIN houses ON students.house_id = houses.id WHERE houses.house_name = 'Red';
`,
  exercises:[
    {
      title:'Join two tables together',
      desc:`Create houses with id (INTEGER PRIMARY KEY) and house_name (TEXT): (1, 'Red'), (2, 'Blue'). Create
        students with id (INTEGER PRIMARY KEY), name (TEXT), and house_id (INTEGER): (1, 'Maya', 1),
        (2, 'Tom', 2). Write
        SELECT students.name, houses.house_name FROM students JOIN houses ON students.house_id = houses.id;
        — it should return Maya paired with Red, and Tom paired with Blue.`,
      starter:`-- Create houses and students, then join them together
`,
      tests:[{type:'output', contains:['Maya | Red','Tom | Blue','(2 rows)'], label:'Shows Maya-Red and Tom-Blue (2 rows)'}]
    },
    {
      title:'Filter a joined query',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'), (3, 'Green'). Create students with
        id, name, and house_id: (1, 'Maya', 1), (2, 'Tom', 2), (3, 'Zoe', 1), (4, 'Sam', 3). Write
        SELECT students.name, houses.house_name FROM students JOIN houses ON students.house_id = houses.id
        WHERE houses.house_name = 'Red'; — only Maya and Zoe are in Red house, so the result should be 2 rows.`,
      starter:`-- Create houses and students, then join and filter to just Red house
`,
      tests:[{type:'output', contains:['Maya | Red','Zoe | Red','(2 rows)'], label:'Shows only Maya and Zoe — the Red house students (2 rows)'}]
    },
    {
      title:'Join and sort',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'). Create students with id, name, and
        house_id: (1, 'Zoe', 1), (2, 'Ben', 2), (3, 'Ada', 1). Write
        SELECT students.name, houses.house_name FROM students JOIN houses ON students.house_id = houses.id
        ORDER BY students.name; — alphabetically: Ada, then Ben, then Zoe.`,
      starter:`-- Create houses and students, then join and sort alphabetically
`,
      tests:[{type:'output', contains:['Ada | Red\nBen | Blue','Ben | Blue\nZoe | Red','(3 rows)'], label:'Sorted alphabetically: Ada, Ben, Zoe'}]
    },
    {
      title:'Count students per house using JOIN',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'). Create students with id, name, and
        house_id: (1, 'Maya', 1), (2, 'Tom', 2), (3, 'Zoe', 1), (4, 'Sam', 2), (5, 'Eli', 1). Write
        SELECT houses.house_name, COUNT(*) FROM students JOIN houses ON students.house_id = houses.id
        GROUP BY houses.house_name ORDER BY houses.house_name; — Blue has 2 students, Red has 3.`,
      starter:`-- Create houses and students, then join, group, and count
`,
      tests:[{type:'output', contains:['Blue | 2\nRed | 3','(2 rows)'], label:'Shows Blue with 2 students and Red with 3'}]
    },
    {
      title:'Select columns from either table',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'). Create students with id, name, and
        house_id: (1, 'Maya', 1), (2, 'Tom', 2). Write
        SELECT students.id, students.name, houses.house_name FROM students
        JOIN houses ON students.house_id = houses.id ORDER BY students.id; — you can pick ANY combination of
        columns from either table once they're joined: this returns id, name, and house_name together.`,
      starter:`-- Create houses and students, then select columns from both
`,
      tests:[{type:'output', contains:['1 | Maya | Red\n2 | Tom | Blue','(2 rows)'], label:'Shows id, name and house_name together for both students'}]
    },
    {
      title:'Combine JOIN with WHERE on a different column',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'), (3, 'Green'). Create students with
        id, name, house_id, and score: (1, 'Maya', 1, 85), (2, 'Tom', 2, 62), (3, 'Zoe', 1, 90),
        (4, 'Sam', 3, 45). Write
        SELECT students.name, houses.house_name FROM students JOIN houses ON students.house_id = houses.id
        WHERE students.score &gt;= 60; — only Sam fails the score filter, so the result should be 3 rows: Maya,
        Tom, and Zoe.`,
      starter:`-- Create houses and students, then join and filter by score
`,
      tests:[{type:'output', contains:['Maya | Red','Tom | Blue','Zoe | Red','(3 rows)'], label:'Shows Maya, Tom and Zoe — everyone scoring 60 or above (3 rows)'}]
    }
  ],
  quiz:[
    {
      q:'Why split data across multiple related tables instead of one big table?',
      options:['To avoid repeating the same information (like a house name) in every row that needs it','Because SQL requires at least two tables','To make queries slower on purpose','Tables can only ever have 2 columns each'],
      correct:0,
      explain:'Storing "Red" once in a houses table, referenced by id, avoids repeating (and potentially mis-typing) it on every student row.'
    },
    {
      q:'What does JOIN ... ON do?',
      options:['Combines rows from two tables where the ON condition matches','Combines every row of one table with every row of the other, regardless of matching','Deletes rows that do not match','Renames a table'],
      correct:0,
      explain:'JOIN pairs up rows from two tables specifically where the ON condition is true - typically a shared id.'
    },
    {
      q:'In students.house_id = houses.id, what does the dot (.) do?',
      options:['Specifies which table a column belongs to, since the same column name might exist in both','Ends the SQL statement','Multiplies two values','Is a wildcard matching any character'],
      correct:0,
      explain:'table.column notation removes any ambiguity about which table a column is coming from - useful since both tables here happen to have an id column.'
    },
    {
      q:'Can you combine JOIN with WHERE, ORDER BY, or GROUP BY?',
      options:['Yes - JOIN produces a result set that WHERE, ORDER BY and GROUP BY can all work with, just like a single table','No - JOIN can only be used on its own','Only WHERE can be combined with JOIN','JOIN replaces the need for WHERE entirely'],
      correct:0,
      explain:'A JOINed result behaves like any other query result - every clause you already know still works on top of it.'
    }
  ],
  sandboxStarter3:`CREATE TABLE houses (id INTEGER PRIMARY KEY, house_name TEXT);
INSERT INTO houses VALUES (1, 'Red'), (2, 'Blue');
CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, house_id INTEGER);
INSERT INTO students VALUES (1, 'Ada', 1), (2, 'Ben', 2), (3, 'Cy', 1);
SELECT students.name, houses.house_name FROM students JOIN houses ON students.house_id = houses.id ORDER BY students.name;
`,
  stretchChallenge:{
    title:'Combine JOIN with an aggregate to summarize by house',
    desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'). Create students with id, name,
      house_id, and score: (1, 'Maya', 1, 85), (2, 'Tom', 2, 62), (3, 'Zoe', 1, 55), (4, 'Sam', 2, 90). Write
      SELECT houses.house_name, AVG(students.score) FROM students JOIN houses ON students.house_id = houses.id
      GROUP BY houses.house_name ORDER BY houses.house_name; — Blue's average is 76 ((62+90)/2), Red's average
      is 70 ((85+55)/2).`,
    starter:`-- Create houses and students, then join, group, and average
`,
    tests:[
      {type:'output', contains:['Blue | 76\nRed | 70','(2 rows)'], label:"Shows Blue's average (76) and Red's average (70)"}
    ]
  }
},
{
  key:'week8', num:8, title:'Filtering Groups: HAVING',
  scenarioTag:'Real world: which houses have at least 3 students in the team?',
  scenario:`WHERE filters individual students before anything is grouped. But "which houses have 3+ students" or
    "which houses average 60+" are questions about the GROUPS themselves — and that's exactly what HAVING is
    for.`,
  objectives:[
    'Understand the difference between WHERE (filters rows before grouping) and HAVING (filters groups after)',
    'Combine JOIN, GROUP BY, and an aggregate function',
    'Filter grouped results with HAVING',
    'Combine WHERE, GROUP BY, and HAVING together in one query'
  ],
  conceptHtml:`
    <p><code>WHERE</code> filters individual ROWS, BEFORE grouping happens. <code>HAVING</code> filters GROUPS,
    AFTER the aggregate has been calculated:</p>
    <pre class="code-block">SELECT houses.house_name, COUNT(*)
FROM students JOIN houses ON students.house_id = houses.id
GROUP BY houses.house_name
HAVING COUNT(*) &gt;= 3;
-- only shows houses with 3 or more students</pre>
    <p>You can't write <code>WHERE COUNT(*) &gt;= 3</code> — WHERE runs too early, before COUNT(*) even has a
    value to compare. HAVING exists specifically because aggregate results need their own filtering step, AFTER
    grouping.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">SELECT houses.house_name, COUNT(*)
FROM students JOIN houses ON students.house_id = houses.id
GROUP BY houses.house_name
HAVING COUNT(*) >= 3;</pre>
    <ul>
      <li><code>JOIN houses ON ...</code> — same as last week, linking each student to their house name.</li>
      <li><code>GROUP BY houses.house_name</code> — collects the joined rows into one group per house.</li>
      <li><code>COUNT(*)</code> — counts the rows in EACH group, same as Week 4.</li>
      <li><code>HAVING COUNT(*) &gt;= 3</code> — AFTER every group's count has been calculated, this keeps only
        the groups whose count meets the condition. Houses with fewer than 3 students are dropped from the
        final result entirely.</li>
    </ul>
    <p>WHERE and HAVING can both appear in the same query — WHERE narrows down the rows first, THEN grouping and
    aggregation happen, THEN HAVING filters the resulting groups.</p>`,
  sandboxStarter:`CREATE TABLE houses (id INTEGER PRIMARY KEY, house_name TEXT);
INSERT INTO houses VALUES (1, 'Red'), (2, 'Blue'), (3, 'Green');
CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, house_id INTEGER);
INSERT INTO students VALUES (1,'Ada',1),(2,'Ben',2),(3,'Cy',1),(4,'Dee',1),(5,'Eli',3);
SELECT houses.house_name, COUNT(*) FROM students JOIN houses ON students.house_id = houses.id GROUP BY houses.house_name;
`,
  sandboxStarter2:`CREATE TABLE houses (id INTEGER PRIMARY KEY, house_name TEXT);
INSERT INTO houses VALUES (1, 'Red'), (2, 'Blue'), (3, 'Green');
CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, house_id INTEGER);
INSERT INTO students VALUES (1,'Ada',1),(2,'Ben',2),(3,'Cy',1),(4,'Dee',1),(5,'Eli',3);
SELECT houses.house_name, COUNT(*) FROM students JOIN houses ON students.house_id = houses.id GROUP BY houses.house_name HAVING COUNT(*) >= 3;
`,
  exercises:[
    {
      title:'Filter groups with HAVING',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'), (3, 'Green'). Create students with
        id, name, and house_id: (1, 'Ada', 1), (2, 'Ben', 2), (3, 'Cy', 1), (4, 'Dee', 1), (5, 'Eli', 3). Write
        SELECT houses.house_name, COUNT(*) FROM students JOIN houses ON students.house_id = houses.id
        GROUP BY houses.house_name HAVING COUNT(*) &gt;= 3; — only Red has 3 or more students, so the result
        should be exactly 1 row.`,
      starter:`-- Create houses and students, then group and filter with HAVING
`,
      tests:[{type:'output', contains:['Red | 3','(1 row)'], label:'Shows only Red — the only house with 3+ students'}]
    },
    {
      title:'Filter rows first with WHERE, then group',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'). Create students with id, name,
        house_id, and score: (1, 'Ada', 1, 85), (2, 'Ben', 2, 40), (3, 'Cy', 1, 90), (4, 'Dee', 1, 30). Write
        SELECT houses.house_name, COUNT(*) FROM students JOIN houses ON students.house_id = houses.id
        WHERE students.score &gt;= 50 GROUP BY houses.house_name; — WHERE removes Ben and Dee BEFORE grouping,
        leaving only Ada and Cy (both Red), so the result is 1 row: Red, 2.`,
      starter:`-- Create houses and students, then filter with WHERE before grouping
`,
      tests:[{type:'output', contains:['Red | 2','(1 row)'], label:'Shows Red with 2 students (after WHERE removed the low scorers)'}]
    },
    {
      title:'Use HAVING with AVG()',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'). Create students with id, name,
        house_id, and score: (1, 'Ada', 1, 85), (2, 'Ben', 2, 40), (3, 'Cy', 1, 90), (4, 'Dee', 2, 30). Write
        SELECT houses.house_name, AVG(students.score) FROM students JOIN houses ON students.house_id = houses.id
        GROUP BY houses.house_name HAVING AVG(students.score) &gt;= 60; — Red averages 87.5, Blue averages 35,
        so only Red qualifies (1 row).`,
      starter:`-- Create houses and students, then group and filter by average with HAVING
`,
      tests:[{type:'output', contains:['Red | 87.5','(1 row)'], label:"Shows only Red — the only house averaging 60+"}]
    },
    {
      title:'Combine WHERE, GROUP BY, and HAVING together',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'), (3, 'Green'). Create students with
        id, name, house_id, and score: (1, 'Ada', 1, 85), (2, 'Ben', 2, 45), (3, 'Cy', 1, 90), (4, 'Dee', 1, 55),
        (5, 'Eli', 3, 70), (6, 'Fay', 3, 40), (7, 'Gus', 2, 60). Write
        SELECT houses.house_name, COUNT(*) FROM students JOIN houses ON students.house_id = houses.id
        WHERE students.score &gt;= 50 GROUP BY houses.house_name HAVING COUNT(*) &gt;= 2
        ORDER BY houses.house_name; — WHERE drops Ben and Fay first, leaving Blue and Green with only 1
        qualifying student each (both fail HAVING), while Red keeps all 3 of its students. The result should be
        exactly 1 row: Red, 3.`,
      starter:`-- Create houses and students, then combine WHERE + GROUP BY + HAVING
`,
      tests:[{type:'output', contains:['Red | 3','(1 row)'], label:'Shows only Red (3 students) — Blue and Green both drop below the HAVING threshold once WHERE removes their low scorers'}]
    },
    {
      title:'Use HAVING with != to exclude a specific count',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'), (3, 'Green'). Create students with
        id, name, and house_id: (1, 'Ada', 1), (2, 'Ben', 2), (3, 'Cy', 1), (4, 'Dee', 3), (5, 'Eli', 3),
        (6, 'Fay', 3). Write
        SELECT houses.house_name, COUNT(*) FROM students JOIN houses ON students.house_id = houses.id
        GROUP BY houses.house_name HAVING COUNT(*) != 1 ORDER BY houses.house_name; — Blue has exactly 1
        student and gets excluded, leaving Green (3) and Red (2), in alphabetical order.`,
      starter:`-- Create houses and students, then exclude any house with exactly 1 student
`,
      tests:[{type:'output', contains:['Green | 3\nRed | 2','(2 rows)'], label:'Shows Green (3) then Red (2) — Blue (1 student) is excluded'}]
    },
    {
      title:'Use HAVING with SUM()',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'), (3, 'Green'). Create students with
        id, name, house_id, and score: (1, 'Ada', 1, 85), (2, 'Ben', 2, 40), (3, 'Cy', 1, 90), (4, 'Dee', 2, 30),
        (5, 'Eli', 3, 95). Write
        SELECT houses.house_name, SUM(students.score) FROM students JOIN houses ON students.house_id = houses.id
        GROUP BY houses.house_name HAVING SUM(students.score) &gt;= 100; — Red totals 175, Blue totals 70,
        Green totals 95 — only Red clears 100, giving 1 row.`,
      starter:`-- Create houses and students, then group and filter by total score with HAVING
`,
      tests:[{type:'output', contains:['Red | 175','(1 row)'], label:'Shows only Red — the only house totalling 100+'}]
    }
  ],
  quiz:[
    {
      q:'What is the key difference between WHERE and HAVING?',
      options:['WHERE filters individual rows before grouping; HAVING filters groups after aggregating','They do exactly the same thing','WHERE only works with JOIN, HAVING only works alone','HAVING is faster, so it should always be used instead of WHERE'],
      correct:0,
      explain:'WHERE runs first, on raw rows; HAVING runs afterward, on the grouped/aggregated results.'
    },
    {
      q:'Why can\'t you write WHERE COUNT(*) >= 3 instead of using HAVING?',
      options:["WHERE runs before grouping happens, so COUNT(*) doesn't have a value yet at that point","WHERE and HAVING are just different spellings of the same keyword","COUNT(*) can only be used in the SELECT list, nowhere else","There is no difference - both would work identically"],
      correct:0,
      explain:'COUNT(*) is only meaningful once rows have been grouped - HAVING runs at exactly the right stage in the query to filter on it.'
    },
    {
      q:'In a query with both WHERE and HAVING, which runs first?',
      options:['WHERE, filtering rows before grouping; HAVING runs afterward on the groups','HAVING, filtering groups first; WHERE runs afterward','They run at the exact same time','Whichever is written first in the query'],
      correct:0,
      explain:'WHERE always filters the raw rows before GROUP BY forms any groups; HAVING only ever runs after that.'
    },
    {
      q:'What does GROUP BY houses.house_name HAVING COUNT(*) >= 3 return?',
      options:['Only the house groups that have 3 or more matching rows','Every house, with a count column added','Only rows where a single student has 3 or more properties','An error, because HAVING requires WHERE first'],
      correct:0,
      explain:'HAVING drops any group that fails its condition entirely from the final result - here, any house with fewer than 3 students.'
    }
  ],
  sandboxStarter3:`CREATE TABLE houses (id INTEGER PRIMARY KEY, house_name TEXT);
INSERT INTO houses VALUES (1, 'Red'), (2, 'Blue');
CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, house_id INTEGER, score INTEGER);
INSERT INTO students VALUES (1,'Ada',1,85),(2,'Ben',2,40),(3,'Cy',1,90),(4,'Dee',2,30);
SELECT houses.house_name, AVG(students.score) FROM students JOIN houses ON students.house_id = houses.id GROUP BY houses.house_name HAVING AVG(students.score) >= 60;
`,
  stretchChallenge:{
    title:'Combine WHERE, JOIN, GROUP BY, HAVING, and ORDER BY in one query',
    desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'), (3, 'Green'). Create students with id,
      name, house_id, and score: (1, 'Ada', 1, 85), (2, 'Ben', 2, 40), (3, 'Cy', 1, 90), (4, 'Dee', 1, 65),
      (5, 'Eli', 3, 70), (6, 'Fay', 3, 20), (7, 'Gus', 2, 65). Write
      SELECT houses.house_name, COUNT(*), AVG(students.score) FROM students
      JOIN houses ON students.house_id = houses.id WHERE students.score &gt;= 50
      GROUP BY houses.house_name HAVING COUNT(*) &gt;= 2 ORDER BY houses.house_name; — WHERE drops Ben and Fay
      first; of the remaining students, only Red ends up with 2+ (Ada, Cy, Dee), averaging 80. The result
      should be exactly 1 row: Red, 3, 80.`,
    starter:`-- Create houses and students, then combine every clause from this week
`,
    tests:[
      {type:'output', contains:['Red | 3 | 80','(1 row)'], label:'Shows only Red: 3 students, average 80'}
    ]
  }
},
{
  key:'week9', num:9, title:'Subqueries: Putting It All Together',
  scenarioTag:'Real world: "who scored above average?" — a question a single flat number can\'t answer',
  scenario:`Some questions need a query INSIDE a query — "who's above average" needs the average calculated
    first, then compared against. This final week ties subqueries together with everything from Weeks 1-8.`,
  objectives:[
    'Write a subquery — a SELECT nested inside another query',
    'Filter using a list of matching values with WHERE ... IN (subquery)',
    'Compare against a single computed value, like an average, with a subquery',
    'Combine subqueries with everything learned so far: WHERE, ORDER BY, COUNT'
  ],
  conceptHtml:`
    <p>A <strong>subquery</strong> is a SELECT statement used INSIDE another query — the inner query runs
    first, and its result feeds into the outer one:</p>
    <pre class="code-block">SELECT name, score FROM students
WHERE score &gt; (SELECT AVG(score) FROM students);
-- finds students scoring above the class average</pre>
    <p>You can also use a subquery with <code>IN</code> to match against a whole LIST of values it returns:</p>
    <pre class="code-block">SELECT name FROM students
WHERE house_id IN (SELECT id FROM houses WHERE house_name = 'Red');
-- finds students whose house_id matches any Red-house id</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">SELECT name, score FROM students
WHERE score > (SELECT AVG(score) FROM students);</pre>
    <ul>
      <li><code>(SELECT AVG(score) FROM students)</code> — the INNER query. It runs first, computing one
        number: the average score across the whole table.</li>
      <li><code>WHERE score &gt; (...)</code> — the OUTER query then compares EVERY student's score against
        that one computed number, keeping only the rows where it's greater.</li>
    </ul>
    <p>The second example follows the same "inner query runs first" idea, but with <code>IN</code> instead of a
    single number — the inner query returns a LIST of ids, and the outer query keeps any row whose house_id
    appears anywhere in that list.</p>`,
  sandboxStarter:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90), ('Dee', 45);
SELECT name, score FROM students WHERE score > (SELECT AVG(score) FROM students);
`,
  sandboxStarter2:`CREATE TABLE houses (id INTEGER PRIMARY KEY, house_name TEXT);
INSERT INTO houses VALUES (1, 'Red'), (2, 'Blue');
CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, house_id INTEGER);
INSERT INTO students VALUES (1, 'Ada', 1), (2, 'Ben', 2), (3, 'Cy', 1);
SELECT name FROM students WHERE house_id IN (SELECT id FROM houses WHERE house_name = 'Red');
`,
  exercises:[
    {
      title:'Filter using a subquery with IN',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'). Create students with id, name, and
        house_id: (1, 'Maya', 1), (2, 'Tom', 2), (3, 'Zoe', 1). Write
        SELECT name FROM students WHERE house_id IN (SELECT id FROM houses WHERE house_name = 'Red'); —
        Maya and Zoe are both in Red house, so the result should be 2 rows.`,
      starter:`-- Create houses and students, then filter students using a subquery
`,
      tests:[{type:'output', contains:['Maya','Zoe','(2 rows)'], label:'Shows Maya and Zoe — the Red house students (2 rows)'}]
    },
    {
      title:'Compare against a computed average',
      desc:`Create students with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 62), ('Zoe', 90),
        ('Sam', 45). Write
        SELECT name, score FROM students WHERE score &gt; (SELECT AVG(score) FROM students); — the average is
        70.5, so only Maya (85) and Zoe (90) score above it, giving 2 rows.`,
      starter:`-- Create students, then filter using a subquery average
`,
      tests:[{type:'output', contains:['Maya | 85','Zoe | 90','(2 rows)'], label:'Shows Maya and Zoe — both above the average (2 rows)'}]
    },
    {
      title:'Compare against the maximum with a subquery',
      desc:`Create students with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 90), ('Zoe', 90),
        ('Sam', 45). Write
        SELECT name FROM students WHERE score = (SELECT MAX(score) FROM students); — Tom and Zoe are TIED for
        the highest score (90), so both should appear, giving 2 rows.`,
      starter:`-- Create students, then find everyone tied for the top score
`,
      tests:[{type:'output', contains:['Tom','Zoe','(2 rows)'], label:'Shows Tom and Zoe — both tied for the highest score (2 rows)'}]
    },
    {
      title:'Use NOT IN to exclude a subquery\'s results',
      desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'), (3, 'Green'). Create students with
        id, name, and house_id: (1, 'Maya', 1), (2, 'Tom', 2), (3, 'Zoe', 1), (4, 'Sam', 3). Write
        SELECT name FROM students WHERE house_id NOT IN (SELECT id FROM houses WHERE house_name = 'Red'); —
        this excludes anyone in Red house (Maya and Zoe), leaving Tom and Sam (2 rows).`,
      starter:`-- Create houses and students, then exclude Red house students
`,
      tests:[{type:'output', contains:['Tom','Sam','(2 rows)'], label:'Shows Tom and Sam — everyone NOT in Red house (2 rows)'}]
    },
    {
      title:'Combine a subquery with ORDER BY',
      desc:`Create students with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 62), ('Zoe', 90),
        ('Sam', 45). Write
        SELECT name, score FROM students WHERE score &gt; (SELECT AVG(score) FROM students)
        ORDER BY score DESC; — the average is 70.5, so Zoe and Maya both qualify, and ORDER BY DESC puts Zoe
        (90) before Maya (85).`,
      starter:`-- Create students, then filter with a subquery and sort the result
`,
      tests:[{type:'output', contains:['Zoe | 90\nMaya | 85','(2 rows)'], label:'Shows Zoe then Maya, both above average, highest first'}]
    },
    {
      title:'Combine a subquery with COUNT to summarize',
      desc:`Create students with name (TEXT) and score (INTEGER): ('Maya', 85), ('Tom', 62), ('Zoe', 90),
        ('Sam', 45), ('Eli', 78). Write
        SELECT COUNT(*) FROM students WHERE score &gt; (SELECT AVG(score) FROM students); — the average is 72,
        and 3 students (Maya, Zoe, Eli) score above it.`,
      starter:`-- Create students, then count how many score above average
`,
      tests:[{type:'output', contains:['3','(1 row)'], label:'Counts 3 students scoring above average'}]
    }
  ],
  quiz:[
    {
      q:'What is a subquery?',
      options:['A SELECT statement used inside another query','A query that runs on a copy of the database','A shortcut for JOIN that never actually works','A query with no WHERE clause'],
      correct:0,
      explain:'A subquery is a complete SELECT nested inside another SELECT, WHERE clause, or similar.'
    },
    {
      q:"What does WHERE house_id IN (SELECT id FROM houses WHERE house_name = 'Red') do?",
      options:['Matches any row whose house_id appears in the list of ids returned by the subquery','Matches rows where house_id equals the word "Red"','Runs the subquery once for every row in the outer query, always returning the same house','Is invalid syntax - IN cannot be used with a subquery'],
      correct:0,
      explain:'The subquery returns a list of ids (all the Red house ids); IN checks whether a row\'s house_id appears anywhere in that list.'
    },
    {
      q:'What does WHERE score > (SELECT AVG(score) FROM students) do?',
      options:['Finds rows scoring above the class average, computed once by the subquery','Finds the single highest-scoring row only','Compares every score to itself','Requires GROUP BY to work'],
      correct:0,
      explain:'The subquery computes ONE number (the average), and every row is compared against that same value.'
    },
    {
      q:'What does NOT IN do compared to IN?',
      options:["Matches rows whose value is NOT found in the subquery's results","Matches rows whose value IS found in the subquery's results, same as IN","Deletes the matching rows","Only works with numbers, not text"],
      correct:0,
      explain:'NOT IN is the exact opposite of IN - it keeps rows whose value does NOT appear in the subquery\'s list.'
    }
  ],
  sandboxStarter3:`CREATE TABLE students (name TEXT, score INTEGER);
INSERT INTO students VALUES ('Ada', 85), ('Ben', 62), ('Cy', 90), ('Dee', 45);
SELECT name FROM students WHERE score = (SELECT MAX(score) FROM students);
`,
  stretchChallenge:{
    title:'Combine two subqueries in one query',
    desc:`Create houses with id and house_name: (1, 'Red'), (2, 'Blue'). Create students with id, name,
      house_id, and score: (1, 'Maya', 1, 85), (2, 'Tom', 2, 62), (3, 'Zoe', 1, 55), (4, 'Sam', 2, 90). Write
      SELECT name FROM students
      WHERE house_id IN (SELECT id FROM houses WHERE house_name = 'Red')
      AND score &gt; (SELECT AVG(score) FROM students); — the overall average is 73. Of the two Red house
      students (Maya 85, Zoe 55), only Maya beats the average, so the result should be exactly 1 row.`,
    starter:`-- Create houses and students, then combine two subqueries with AND
`,
    tests:[
      {type:'output', contains:['Maya','(1 row)'], label:'Shows only Maya — in Red house AND above the overall average'}
    ]
  }
}
];

const SQL_MP1 = {
  key:'mp1',
  title:'Class Register Database',
  intro:`Riverside Academy wants a proper database for its class register. You'll build the table, pick out and
    rank the students who need attention, then summarize the whole class — combining everything from Weeks 1-4.`,
  newTrick:`This project doesn't teach a brand new SQL feature — it combines table creation, filtering,
    sorting/limiting, and aggregate functions from the last four weeks into one real task, the same way a real
    school database query would be built.`,
  stages:[
    {
      key:'stageA',
      title:"Build the Register and Find Who's Struggling",
      desc:`Create a table called register with columns name (TEXT) and score (INTEGER). Insert 6 rows:
        ('Ada', 88), ('Ben', 45), ('Cy', 72), ('Dee', 91), ('Eli', 38), ('Fay', 65). Write
        SELECT * FROM register WHERE score &lt; 50; — this should return the students who need extra support:
        Ben and Eli (2 rows).`,
      starter:`-- Create register, insert your rows, then find scores below 50
`,
      tests:[{type:'output', contains:['Ben','Eli','(2 rows)'], label:'Shows Ben and Eli — the students scoring below 50 (2 rows)'}]
    },
    {
      key:'stageB',
      title:'Find the Top 3 by Score',
      desc:`Recreate register with the same 6 rows: ('Ada', 88), ('Ben', 45), ('Cy', 72), ('Dee', 91),
        ('Eli', 38), ('Fay', 65). Write SELECT name, score FROM register ORDER BY score DESC LIMIT 3; — the top
        3 scorers should come back in order: Dee (91), Ada (88), Cy (72).`,
      starter:`-- Recreate register, then find the top 3 scorers
`,
      tests:[{type:'output', contains:['Dee | 91\nAda | 88','Ada | 88\nCy | 72','(3 rows)'], label:'Shows the top 3 in order: Dee, Ada, Cy'}]
    },
    {
      key:'stageC',
      title:'Summarize the Whole Class',
      desc:`Recreate register with the same 6 rows: ('Ada', 88), ('Ben', 45), ('Cy', 72), ('Dee', 91),
        ('Eli', 38), ('Fay', 65). Write a single query using COUNT(*), AVG(score), MIN(score), and MAX(score)
        together: SELECT COUNT(*), AVG(score), MIN(score), MAX(score) FROM register; — it should return 6,
        66.5, 38, and 91.`,
      starter:`-- Recreate register, then summarize it in one query
`,
      tests:[{type:'output', contains:['6','66.5','38','91'], label:'Shows count 6, average 66.5, min 38, max 91'}]
    }
  ]
};

const SQL_MP2 = {
  key:'mp2',
  title:'School Database System',
  intro:`Riverside Academy needs a real exam database: proper related tables, a joined report ranking students by
    house, and a class-wide summary. This capstone brings together every skill from the whole course — table
    design, filtering, sorting, JOIN, and grouping with HAVING.`,
  fixtureNote:`Here's the exam data you'll be working with in every door of this project (recreate it fresh in
    each door's own code — nothing carries over between doors):`,
  fixtureCode:`CREATE TABLE houses (id INTEGER PRIMARY KEY, house_name TEXT);
INSERT INTO houses VALUES (1, 'Red'), (2, 'Blue'), (3, 'Green');

CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT NOT NULL, house_id INTEGER, score INTEGER);
INSERT INTO students (name, house_id, score) VALUES
  ('Ada', 1, 85), ('Ben', 2, 45), ('Cy', 1, 90), ('Dee', 3, 65),
  ('Eli', 2, 72), ('Fay', 3, 58), ('Gus', 1, 40);`,
  doors:[
    {
      key:'doorA',
      title:'Design and Build the Database',
      desc:`Create the houses and students tables EXACTLY as shown above, with the same PRIMARY KEY and
        NOT NULL rules, then insert all the data. Confirm there are 7 students in total, and that Cy — the 3rd
        student inserted — was automatically assigned id 3.`,
      starter:`-- Build houses and students exactly as shown above, then insert all the data
`,
      tests:[{type:'assert', expr:"(SELECT COUNT(*) FROM students) = 7 AND (SELECT id FROM students WHERE name = 'Cy') = 3", label:'students has 7 rows, and Cy was assigned id 3'}]
    },
    {
      key:'doorB',
      title:'Build a Ranked JOIN Report',
      desc:`Recreate houses and students exactly as shown above. Write
        SELECT students.name, houses.house_name, students.score FROM students
        JOIN houses ON students.house_id = houses.id WHERE houses.house_name IN ('Red', 'Blue')
        ORDER BY students.score DESC; — this joins in each student's real house name, keeps only Red and Blue
        house students, and ranks them by score. The top 2 should be Cy (Red, 90), then Ada (Red, 85), with 5
        rows in total.`,
      starter:`-- Recreate houses and students, then build the ranked JOIN report
`,
      tests:[{type:'output', contains:['Cy | Red | 90\nAda | Red | 85','(5 rows)'], label:'Shows Cy then Ada at the top of a 5-row ranked report'}]
    },
    {
      key:'doorC',
      title:'Summarize by House with HAVING',
      desc:`Recreate houses and students exactly as shown above. Write
        SELECT houses.house_name, COUNT(*), AVG(students.score) FROM students
        JOIN houses ON students.house_id = houses.id WHERE students.score &gt;= 50
        GROUP BY houses.house_name HAVING COUNT(*) &gt;= 2 ORDER BY houses.house_name; — WHERE keeps only
        passing students (removing Ben and Gus), then GROUP BY and HAVING find the houses with 2 or more
        passing students: Green (2 students, average 61.5) and Red (2 students, average 87.5). Blue only has 1
        passing student (Eli) and gets excluded.`,
      starter:`-- Recreate houses and students, then summarize passing students by house
`,
      tests:[{type:'output', contains:['Green | 2 | 61.5','Red | 2 | 87.5','(2 rows)'], label:"Shows Green (2, avg 61.5) and Red (2, avg 87.5) — Blue is excluded"}]
    }
  ]
};

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.sq = {
  b: {weeks: SQL_WEEKS, mp1: SQL_MP1, mp2: SQL_MP2},
  i: {weeks: SQL_WEEKS, mp1: SQL_MP1, mp2: SQL_MP2},
  a: {weeks: SQL_WEEKS, mp1: SQL_MP1, mp2: SQL_MP2}
};
