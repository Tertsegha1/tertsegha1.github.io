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
    },
    {
      title:'Find the smallest and largest values',
      desc:`Create a vector called temps with the values 15, 22, 18, 25, 19. Print min(temps) and print
        max(temps) — 15 and 25. Same shape as before: temps <- c(15, 22, 18, 25, 19), then two print() calls.`,
      starter:`# Create your vector and print its min and max below
`,
      tests:[{type:'output', contains:['15','25'], label:'Prints both the minimum (15) and maximum (25)'}]
    },
    {
      title:'Check the vector length',
      desc:`Create a vector called subjects with 4 subject names: "Maths", "English", "Science", "Art". Then use
        stopifnot() to confirm that length(subjects) == 4 — length() counts how many values are in a vector.`,
      starter:`# Create your vector below, then check its length
subjects <- c()
`,
      tests:[{type:'assert', expr:'length(subjects) == 4', label:'length(subjects) equals 4'}]
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
  ],
  sandboxStarter3:`class_sizes <- c(24, 28, 22, 30, 26)
print(sum(class_sizes))
print(mean(class_sizes))
print(min(class_sizes))
print(max(class_sizes))
`,
  stretchChallenge:{
    title:'Calculate the range',
    desc:`Create a vector called readings with the values 10, 45, 22, 8, 33. Calculate range_value as
      max(readings) - min(readings), then use stopifnot() to confirm that range_value == 37.`,
    starter:`# Create your vector and calculate range_value below
readings <- c()
`,
    tests:[
      {type:'assert', expr:'range_value == 37', label:'range_value equals 37'}
    ]
  }
},
{
  key:'week2', num:2, title:"Picking Out One Value: Indexing Vectors",
  scenarioTag:"Real world: picking out one student's result",
  scenario:`Sometimes you don't want the whole class register — just one student's score, or everyone who scored above
    a certain mark. R lets you pick out exactly what you need from a vector using indexing.`,
  objectives:[
    "Access a single vector element by its position with x[1]",
    "Slice a range of elements with x[2:4]",
    "Filter a vector using a logical condition with x[x > value]",
    "Combine logical indexing with sum() to count matches"
  ],
  conceptHtml:`
    <p>R vectors are <strong>1-indexed</strong> — the first element is <code>x[1]</code>, not <code>x[0]</code>
    like some other languages:</p>
    <pre class="code-block">scores &lt;- c(65, 72, 58, 90, 81)
print(scores[1])   # 65 - the first value
print(scores[3])   # 58 - the third value</pre>
    <p>You can grab a <strong>range</strong> of elements with the colon operator <code>:</code>:</p>
    <pre class="code-block">print(scores[2:4])  # 72 58 90 - elements 2, 3 and 4</pre>
    <p>You can also filter a vector with a <strong>logical condition</strong> — R keeps only the elements where the
    condition is TRUE:</p>
    <pre class="code-block">print(scores[scores > 70])  # 72 90 81 - only the scores above 70</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">scores &lt;- c(65, 72, 58, 90, 81)
print(scores[1])
print(scores[3])</pre>
    <ul>
      <li><code>scores &lt;- c(65, 72, 58, 90, 81)</code> — builds a vector of five scores, same as Week 1.</li>
      <li><code>scores[1]</code> — the square brackets <code>[...]</code> are R's <strong>indexing</strong> operator:
        they pick out one or more elements from a vector by position. <code>scores[1]</code> means "give me the 1st
        value" — remember, R counts from 1, not 0.</li>
      <li><code>scores[3]</code> — same idea, third position, giving 58.</li>
    </ul>
    <p>The second example follows the same shape but uses <code>2:4</code> instead of a single number —
    <code>2:4</code> is shorthand for "the sequence 2, 3, 4", so <code>scores[2:4]</code> grabs three elements at
    once. The third example flips this around: instead of a position, <code>scores > 70</code> builds a
    <strong>logical vector</strong> (TRUE/FALSE for each score), and putting that inside <code>[...]</code> keeps
    only the values where it's TRUE.</p>`,
  sandboxStarter:`scores <- c(65, 72, 58, 90, 81)
print(scores[1])
print(scores[3])
`,
  sandboxStarter2:`scores <- c(65, 72, 58, 90, 81)
print(scores[2:4])
`,
  exercises:[
    {
      title:'Get the first value',
      desc:`Create a vector called days with the values "Mon", "Tue", "Wed", "Thu", "Fri". Print days[1] — the first
        value. Remember, R counts from 1, so days[1] is "Mon".`,
      starter:`# Create your vector and print its first value below
`,
      tests:[{type:'output', contains:['Mon'], label:'Prints the first value (Mon)'}]
    },
    {
      title:'Get a value from the middle',
      desc:`Create a vector called temps with the values 12, 15, 9, 20, 17. Print temps[4] — the fourth value. It
        should print 20.`,
      starter:`# Create your vector and print its fourth value below
`,
      tests:[{type:'output', contains:['20'], label:'Prints the fourth value (20)'}]
    },
    {
      title:'Slice a range',
      desc:`Create a vector called heights with the values 120, 135, 128, 142, 150, 133. Print heights[2:4] —
        elements 2 through 4. It should print 135, 128 and 142.`,
      starter:`# Create your vector and print the slice below
`,
      tests:[{type:'output', contains:['135','128','142'], label:'Prints the sliced range (135, 128, 142)'}]
    },
    {
      title:'Filter with a condition',
      desc:`Create a vector called scores with the values 45, 88, 62, 91, 70. Create a new vector called passing
        using passing &lt;- scores[scores &gt;= 60] — this keeps only the scores of 60 or above. Then print(passing).`,
      starter:`# Create scores, then filter it into passing and print it
scores <- c(45, 88, 62, 91, 70)
`,
      tests:[{type:'assert', expr:'length(passing) == 4 && !(45 %in% passing)', label:'passing contains exactly the 4 scores of 60 or above (and excludes 45)'}]
    },
    {
      title:'Count how many match',
      desc:`Create a vector called scores with the values 45, 88, 62, 91, 70, 55. Use stopifnot() to confirm that
        sum(scores &gt;= 60) == 4 — sum() adds up a logical vector by counting each TRUE as 1, so this counts how
        many scores are 60 or above.`,
      starter:`# Create your vector below, then check the count
`,
      tests:[{type:'assert', expr:'sum(scores >= 60) == 4', label:'sum(scores >= 60) equals 4'}]
    },
    {
      title:'Grab the last value dynamically',
      desc:`Create a vector called prices with the values 10, 25, 30, 15, 40. Print prices[length(prices)] — using
        length() means this always grabs the LAST value, no matter how many prices there are. It should print 40.`,
      starter:`# Create your vector and print its last value using length()
`,
      tests:[{type:'output', contains:['40'], label:'Prints the last value using length() (40)'}]
    }
  ],
  quiz:[
    {
      q:'What does x[1] return in R?',
      options:['The first element','The second element','An error','The last element'],
      correct:0,
      explain:'R vectors are 1-indexed, so x[1] is the first element - unlike many other languages that start at 0.'
    },
    {
      q:'What does x[2:4] return?',
      options:['Elements 2 through 4','Elements 2 and 4 only','The element at position 2 minus 4','An error'],
      correct:0,
      explain:'2:4 is shorthand for the sequence 2, 3, 4, so x[2:4] slices out those three positions.'
    },
    {
      q:'What does x[x > 20] return?',
      options:['Only the elements of x that are greater than 20','The positions of elements greater than 20','TRUE or FALSE for each element','An error'],
      correct:0,
      explain:'x > 20 builds a logical vector, and using it inside [...] keeps only the values where it is TRUE.'
    },
    {
      q:'What does sum(c(5, 12, 25) > 10) return?',
      options:['3','2','1','0'],
      correct:1,
      explain:'c(5,12,25) > 10 gives FALSE, TRUE, TRUE - sum() counts each TRUE as 1, so the total is 2.'
    }
  ],
  sandboxStarter3:`scores <- c(65, 72, 58, 90, 81)
print(scores[scores > 70])
`,
  stretchChallenge:{
    title:'Combine slicing and filtering',
    desc:`Create a vector called readings with the values 5, 12, 8, 20, 3, 17. Create high &lt;- readings[readings
      &gt; 10], then use stopifnot() to confirm that sum(high) == 49 (12 + 20 + 17).`,
    starter:`# Create your vector, filter it into high, then check the sum
readings <- c(5, 12, 8, 20, 3, 17)
`,
    tests:[
      {type:'assert', expr:'sum(high) == 49', label:'sum(high) equals 49'}
    ]
  }
},
{
  key:'week3', num:3, title:'Making Decisions: if/else in R',
  scenarioTag:'Real world: deciding pass/fail and trip permission',
  scenario:`Not every question can be answered by filtering a vector. Sometimes you need to make a single decision —
    did THIS student pass? Can THIS student join the trip? R's if/else lets your code choose between two paths.`,
  objectives:[
    'Write an if/else statement in R',
    'Use comparison operators (==, !=, <, >, <=, >=)',
    'Combine single-value conditions with && (AND) and || (OR)',
    "Store the result of an if/else directly in a variable"
  ],
  conceptHtml:`
    <p>An <code>if/else</code> statement lets your code choose between two paths, depending on whether a condition
    is TRUE or FALSE:</p>
    <pre class="code-block">score &lt;- 72
if (score &gt;= 50) {
  print("Pass")
} else {
  print("Fail")
}</pre>
    <p>To combine two conditions, use <code>&amp;&amp;</code> (AND — both must be TRUE) or <code>||</code> (OR — at
    least one must be TRUE). These work on <strong>single values</strong> — different from the <code>&amp;</code>/
    <code>|</code> you might see used for filtering whole vectors:</p>
    <pre class="code-block">age &lt;- 12
has_permission &lt;- TRUE
if (age &gt;= 10 &amp;&amp; has_permission) {
  print("Can join the trip")
} else {
  print("Cannot join the trip")
}</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">score &lt;- 72
if (score &gt;= 50) {
  print("Pass")
} else {
  print("Fail")
}</pre>
    <ul>
      <li><code>score &lt;- 72</code> — an ordinary variable, just one number this time, not a vector.</li>
      <li><code>if (score &gt;= 50)</code> — checks whether the condition inside the brackets is TRUE. Here,
        72 &gt;= 50 is TRUE.</li>
      <li><code>{ print("Pass") }</code> — the curly braces <code>{...}</code> hold the code that runs when the
        condition is TRUE. Since it was TRUE here, "Pass" gets printed.</li>
      <li><code>else { print("Fail") }</code> — the code that runs instead, whenever the condition is FALSE.</li>
    </ul>
    <p>The second example follows the same shape, but the condition is now <code>age &gt;= 10 &amp;&amp;
    has_permission</code> — two smaller conditions joined with <code>&amp;&amp;</code>. Both <code>age &gt;= 10</code>
    and <code>has_permission</code> must be TRUE for the whole thing to be TRUE.</p>`,
  sandboxStarter:`score <- 72
if (score >= 50) {
  print("Pass")
} else {
  print("Fail")
}
`,
  sandboxStarter2:`age <- 12
has_permission <- TRUE
if (age >= 10 && has_permission) {
  print("Can join the trip")
} else {
  print("Cannot join the trip")
}
`,
  exercises:[
    {
      title:'Write your first if/else',
      desc:`Create a variable called score with the value 45. Write an if/else that prints "Pass" if score &gt;= 50,
        otherwise prints "Fail". Since 45 is below 50, it should print "Fail".`,
      starter:`# Create score, then write your if/else below
`,
      tests:[{type:'output', contains:['Fail'], label:'Prints "Fail" for a score of 45'}]
    },
    {
      title:'Check a different condition',
      desc:`Create a variable called temperature with the value 5. Write an if/else that prints "Freezing" if
        temperature &lt; 0, otherwise prints "Not freezing". Since 5 is not below 0, it should print "Not freezing".`,
      starter:`# Create temperature, then write your if/else below
`,
      tests:[{type:'output', contains:['Not freezing'], label:'Prints "Not freezing" for a temperature of 5'}]
    },
    {
      title:'Combine two conditions with &&',
      desc:`Create age &lt;- 8 and has_ticket &lt;- TRUE. Write an if/else that prints "Allowed" if age &gt;= 10
        AND has_ticket is TRUE (use &amp;&amp; to combine them), otherwise prints "Not allowed". Since age is only
        8, the age condition is FALSE — with &amp;&amp; (both must be TRUE), the whole thing is FALSE, so it should
        print "Not allowed".`,
      starter:`# Create age and has_ticket, then write your if/else below
`,
      tests:[{type:'output', contains:['Not allowed'], label:'Prints "Not allowed" (age fails the check, and && needs BOTH conditions true)'}]
    },
    {
      title:'Combine two conditions with ||',
      desc:`Create a variable called temperature with the value 35. Write an if/else that prints "Extreme" if
        temperature &lt; 5 OR temperature &gt; 30 (use || to combine them), otherwise prints "Normal". It should
        print "Extreme".`,
      starter:`# Create temperature, then write your if/else below
`,
      tests:[{type:'output', contains:['Extreme'], label:'Prints "Extreme" for a temperature of 35'}]
    },
    {
      title:'Store the result of an if/else',
      desc:`In R, if/else can be used as an expression — whichever branch runs becomes the value. Create a variable
        called score with the value 42, then write category &lt;- if (score &gt;= 50) "Pass" else "Fail" (note: no
        print() here, category just stores the result). Use stopifnot() to confirm that category == "Fail".`,
      starter:`# Create score, then store the if/else result in category
`,
      tests:[{type:'assert', expr:'category == "Fail"', label:'category equals "Fail"'}]
    },
    {
      title:'Chain conditions with else if',
      desc:`Create a variable called score with the value 72. Write a 3-way chain: if (score &gt;= 80) print("A")
        else if (score &gt;= 60) print("B") else print("C"). Since 72 is 60 or above but below 80, it should print
        "B".`,
      starter:`# Create score, then write your if / else if / else chain below
`,
      tests:[{type:'output', contains:['B'], label:'Prints "B" for a score of 72'}]
    }
  ],
  quiz:[
    {
      q:'Which operator checks "is equal to" in R?',
      options:['=','==','!=','<-'],
      correct:1,
      explain:'== checks equality. A single = is used for naming arguments, and <- assigns a value to a variable.'
    },
    {
      q:'How is && different from & in R?',
      options:['&& works on single values and short-circuits; & works element-wise on whole vectors','&& means OR, & means AND','They are identical','&& only works on text, & only works on numbers'],
      correct:0,
      explain:'&& (and ||) are for single-value conditions like in if statements; & (and |) work element-wise across vectors, like the filtering you did in Week 2.'
    },
    {
      q:'What does this print? age <- 8; if (age >= 10) print("Yes") else print("No")',
      options:['Yes','No','TRUE','Error'],
      correct:1,
      explain:'8 >= 10 is FALSE, so the else branch runs, printing "No".'
    },
    {
      q:'What does || mean in R?',
      options:['Logical OR for single values','Logical AND for single values','Vector concatenation','Integer division'],
      correct:0,
      explain:'|| is logical OR for single values — the condition is TRUE if at least one side is TRUE.'
    }
  ],
  sandboxStarter3:`temperature <- 15
if (temperature < 10 || temperature > 30) {
  print("Extreme weather")
} else {
  print("Normal weather")
}
`,
  stretchChallenge:{
    title:'Combine && and || together',
    desc:`A student can join the trip if they are at least 10 AND have permission, OR if they are a staff helper.
      Create age &lt;- 9, has_permission &lt;- TRUE, is_helper &lt;- TRUE. Then write:
      allowed &lt;- if ((age &gt;= 10 &amp;&amp; has_permission) || is_helper) TRUE else FALSE. Use stopifnot() to
      confirm that allowed == TRUE.`,
    starter:`# Create age, has_permission, is_helper, then store the result in allowed
`,
    tests:[
      {type:'assert', expr:'allowed == TRUE', label:'allowed equals TRUE'}
    ]
  }
},
{
  key:'week4', num:4, title:'Doing It Again: for Loops',
  scenarioTag:'Real world: going through every student, one at a time',
  scenario:`Filtering (Week 2) and if/else (Week 3) work on a whole vector or a single value. But sometimes you need
    to go through EVERY student one at a time, doing something with each — adding up a total, counting how many
    pass, or building a new list as you go. That's exactly what a for loop does.`,
  objectives:[
    'Write a for loop that iterates over a vector with for (i in x)',
    'Accumulate a running total inside a loop',
    'Count how many elements meet a condition using a loop + if',
    'Build up a new vector inside a loop with c(x, new_value)'
  ],
  conceptHtml:`
    <p>A <code>for</code> loop runs a block of code once for each value in a vector:</p>
    <pre class="code-block">scores &lt;- c(65, 72, 58, 90, 81)
total &lt;- 0
for (s in scores) {
  total &lt;- total + s
}
print(total)</pre>
    <p>You can combine a loop with <code>if</code> to only act on values that meet a condition — here, counting how
    many scores are 70 or above:</p>
    <pre class="code-block">count &lt;- 0
for (s in scores) {
  if (s &gt;= 70) {
    count &lt;- count + 1
  }
}
print(count)</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">scores &lt;- c(65, 72, 58, 90, 81)
total &lt;- 0
for (s in scores) {
  total &lt;- total + s
}
print(total)</pre>
    <ul>
      <li><code>total &lt;- 0</code> — before adding anything up, you need a starting point. This is called an
        <strong>accumulator</strong> — a variable that builds up a result across every trip through the loop.</li>
      <li><code>for (s in scores)</code> — this reads as "for each value in scores, call it s, do the following".
        The loop runs once per element — 5 times here, once with s = 65, once with s = 72, and so on.</li>
      <li><code>{ total &lt;- total + s }</code> — each time through the loop, this takes whatever total is so far
        and adds the current s to it. After all 5 trips, total holds the full sum (366).</li>
      <li><code>print(total)</code> — this runs once, AFTER the loop has finished, since it's outside the curly
        braces <code>{...}</code>.</li>
    </ul>
    <p>The second example follows the exact same accumulator shape, but instead of always adding, it only adds 1 to
    <code>count</code> when <code>s &gt;= 70</code> is TRUE — combining what you learned about <code>if</code> in
    Week 3 with the looping pattern here.</p>`,
  sandboxStarter:`scores <- c(65, 72, 58, 90, 81)
total <- 0
for (s in scores) {
  total <- total + s
}
print(total)
`,
  sandboxStarter2:`scores <- c(65, 72, 58, 90, 81)
count <- 0
for (s in scores) {
  if (s >= 70) {
    count <- count + 1
  }
}
print(count)
`,
  exercises:[
    {
      title:'Write your first for loop',
      desc:`Create a vector called days with the values "Mon", "Tue", "Wed". Write a for loop that prints each
        value: for (d in days) { print(d) }. It should print all three days.`,
      starter:`# Create your vector, then write your for loop below
`,
      tests:[{type:'output', contains:['Mon','Tue','Wed'], label:'Prints all three days (Mon, Tue, Wed)'}]
    },
    {
      title:'Accumulate a total',
      desc:`Create scores &lt;- c(10, 20, 30). Write a for loop that adds up all the scores into a variable called
        total (start total at 0 before the loop). Use stopifnot() to confirm that total == 60.`,
      starter:`# Create scores and total, then write your for loop below
`,
      tests:[{type:'assert', expr:'total == 60', label:'total equals 60'}]
    },
    {
      title:'Count matches with a loop',
      desc:`Create scores &lt;- c(45, 82, 63, 91, 55). Using a for loop with if inside it, count how many scores
        are 60 or above into a variable called count (start count at 0). Use stopifnot() to confirm that
        count == 3.`,
      starter:`# Create scores and count, then write your for loop below
`,
      tests:[{type:'assert', expr:'count == 3', label:'count equals 3'}]
    },
    {
      title:'Print index and value',
      desc:`Create a vector called temps with the values 12, 18, 9. Write for (i in 1:length(temps)) { print(temps[i]) }
        — this loops over the POSITIONS 1, 2, 3 instead of the values directly, then uses temps[i] to look each one
        up. It should print all three temperatures.`,
      starter:`# Create your vector, then write your for loop below
`,
      tests:[{type:'output', contains:['12','18','9'], label:'Prints all three temperatures (12, 18, 9)'}]
    },
    {
      title:'Find the maximum by hand',
      desc:`Create scores &lt;- c(45, 82, 63, 91, 55). Using a for loop (no max() allowed!), find the highest value
        and store it in a variable called highest — start by setting highest to scores[1], then inside the loop,
        update highest whenever you find a bigger value. Use stopifnot() to confirm that highest == 91.`,
      starter:`# Create scores and highest, then write your for loop below
`,
      tests:[{type:'assert', expr:'highest == 91', label:'highest equals 91'}]
    },
    {
      title:'Build a results vector inside a loop',
      desc:`Create scores &lt;- c(45, 82, 63). Create an empty vector labels &lt;- c(). Loop through scores; for
        each one, use if/else to append "Pass" (if the score is 60 or above) or "Fail" (otherwise) onto labels,
        using labels &lt;- c(labels, "Pass") or labels &lt;- c(labels, "Fail"). Use stopifnot() to confirm that
        length(labels) == 3 and labels[2] == "Pass".`,
      starter:`# Create scores and labels, then write your loop below
`,
      tests:[{type:'assert', expr:'length(labels) == 3 && labels[2] == "Pass"', label:'labels has 3 entries and the second one is "Pass"'}]
    }
  ],
  quiz:[
    {
      q:'What does for (s in scores) do?',
      options:['Loops through each value in the vector scores, one at a time','Loops exactly once, no matter the vector size','Only works if scores contains numbers','Loops through scores in reverse order'],
      correct:0,
      explain:'A for loop runs its body once per element in the vector, with s taking each value in turn.'
    },
    {
      q:'What must you do before accumulating a total inside a loop?',
      options:['Set the total variable to 0 (or another starting value) first','Nothing - R sets it up automatically','Sort the vector first','Call stopifnot() first'],
      correct:0,
      explain:'An accumulator variable needs a starting value before the loop begins adding to it.'
    },
    {
      q:'What does 1:length(x) produce for a vector of 5 elements?',
      options:['1, 2, 3, 4, 5','0, 1, 2, 3, 4','Just the number 5','An error'],
      correct:0,
      explain:'length(x) is 5, so 1:length(x) is 1:5, the sequence of positions from 1 to 5.'
    },
    {
      q:'How do you add a new value onto the end of an existing vector in R?',
      options:['x <- c(x, new_value)','x.append(new_value)','x += new_value','x[length(x)] <- new_value only'],
      correct:0,
      explain:'R has no in-place append() like Python lists - c(x, new_value) rebuilds the vector with the new value added on the end.'
    }
  ],
  sandboxStarter3:`scores <- c(65, 72, 58, 90, 81)
highest <- scores[1]
for (s in scores) {
  if (s > highest) {
    highest <- s
  }
}
print(highest)
`,
  stretchChallenge:{
    title:'Count and total together',
    desc:`Create scores &lt;- c(45, 82, 63, 91, 55, 68). Using a single for loop with if inside it, add up ONLY the
      scores that are 60 or above into a variable called passing_total (start it at 0). Use stopifnot() to confirm
      that passing_total == 304.`,
    starter:`# Create scores and passing_total, then write your loop below
`,
    tests:[
      {type:'assert', expr:'passing_total == 304', label:'passing_total equals 304'}
    ]
  }
},
{
  key:'week5', num:5, title:'Writing Your Own Functions',
  scenarioTag:'Real world: building a reusable grading tool',
  scenario:`So far you've written code for one specific vector at a time. A function lets you package up a piece
    of logic ONCE, then reuse it on any input you like — like building your own custom grading tool.`,
  objectives:[
    'Define your own function with function(x) { ... }',
    'Return a value with return(), or implicitly (the last line of the function)',
    'Call a user-defined function with one or more arguments',
    'Write a function that uses if/else or a loop inside it'
  ],
  conceptHtml:`
    <p>A function packages up code so you can reuse it. You define one with <code>function(...)</code>, and give
    it a name using <code>&lt;-</code> just like any other variable:</p>
    <pre class="code-block">add_five &lt;- function(x) {
  return(x + 5)
}
print(add_five(10))  # 15</pre>
    <p>R also supports an <strong>implicit return</strong> — if you don't write <code>return()</code>, the LAST
    expression evaluated inside the function is automatically returned:</p>
    <pre class="code-block">square &lt;- function(x) {
  x * x
}
print(square(4))  # 16</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">add_five &lt;- function(x) {
  return(x + 5)
}
print(add_five(10))</pre>
    <ul>
      <li><code>add_five &lt;- function(x) { ... }</code> — this defines a function called add_five that takes ONE
        input, which it calls x inside the function body. Nothing runs yet — this line just creates the function,
        ready to be called later.</li>
      <li><code>return(x + 5)</code> — when add_five is actually called, this is the value it hands back.</li>
      <li><code>add_five(10)</code> — this is a <strong>function call</strong>: x becomes 10 for this call, so
        x + 5 becomes 15.</li>
      <li><code>print(add_five(10))</code> — R works from the inside out, just like Week 1: first add_five(10)
        runs and produces 15, then print() displays it.</li>
    </ul>
    <p>The second example shows the same shape, but without <code>return()</code> — <code>x * x</code> is the last
    (and only) line inside the function body, so R automatically returns whatever it evaluates to.</p>`,
  sandboxStarter:`add_five <- function(x) {
  return(x + 5)
}
print(add_five(10))
`,
  sandboxStarter2:`square <- function(x) {
  x * x
}
print(square(4))
`,
  exercises:[
    {
      title:'Write your first function',
      desc:`Define a function called double_it that takes one parameter x and returns x * 2, using return(). Then
        call print(double_it(6)) — it should print 12.`,
      starter:`# Define double_it below, then call it
`,
      tests:[{type:'output', contains:['12'], label:'Prints 12 (double_it(6))'}]
    },
    {
      title:'Use an implicit return',
      desc:`Define a function called cube that takes one parameter x and returns x * x * x — but DON'T use
        return(), just let x * x * x be the last line of the function body. Then call print(cube(3)) — it should
        print 27.`,
      starter:`# Define cube below, then call it
`,
      tests:[{type:'output', contains:['27'], label:'Prints 27 (cube(3))'}]
    },
    {
      title:'Write a function with two parameters',
      desc:`Define a function called add_two that takes two parameters, a and b, and returns a + b. Then call
        print(add_two(4, 9)) — it should print 13.`,
      starter:`# Define add_two below, then call it
`,
      tests:[{type:'output', contains:['13'], label:'Prints 13 (add_two(4, 9))'}]
    },
    {
      title:'Call your function on different inputs',
      desc:`Define a function called is_even that takes one parameter x and returns x %% 2 == 0 (%% is the
        remainder/modulo operator). Call print(is_even(8)) and print(is_even(7)) — it should print TRUE then
        FALSE.`,
      starter:`# Define is_even below, then call it twice
`,
      tests:[{type:'output', contains:['TRUE','FALSE'], label:'Prints TRUE then FALSE'}]
    },
    {
      title:'Write a function that uses if/else',
      desc:`Define a function called grade_label that takes one parameter score, and returns "Pass" if
        score &gt;= 50, otherwise "Fail" (using if/else inside the function). Use stopifnot() to confirm that
        grade_label(30) == "Fail" and grade_label(80) == "Pass".`,
      starter:`# Define grade_label below
`,
      tests:[{type:'assert', expr:'grade_label(30) == "Fail" && grade_label(80) == "Pass"', label:'grade_label works for both a Fail (30) and a Pass (80) score'}]
    },
    {
      title:'Write a function that uses a loop',
      desc:`Define a function called total_of that takes one parameter v (a vector), and uses a for loop to add
        up all its values, returning the total. Use stopifnot() to confirm that total_of(c(5, 10, 15)) == 30.`,
      starter:`# Define total_of below
`,
      tests:[{type:'assert', expr:'total_of(c(5, 10, 15)) == 30', label:'total_of(c(5, 10, 15)) equals 30'}]
    }
  ],
  quiz:[
    {
      q:'How do you define a function that takes one input called x?',
      options:['function(x) { ... }','def function(x):','x => { ... }','function x() { ... }'],
      correct:0,
      explain:'R functions are defined with function(parameters) { body }, assigned to a name with <-.'
    },
    {
      q:'What is an "implicit return" in R?',
      options:['The last evaluated expression in a function is automatically returned','You must always write return()','Functions never return anything without print()','Only numbers can be returned implicitly'],
      correct:0,
      explain:"If a function doesn't call return() explicitly, R returns whatever the last line evaluates to."
    },
    {
      q:'How many arguments does add_two(a, b) expect when called?',
      options:['2','1','0','As many as you want'],
      correct:0,
      explain:'The function is defined with two parameters, a and b, so it expects exactly 2 arguments when called.'
    },
    {
      q:'What does %% do in R?',
      options:['Gives the remainder of division (modulo)','Multiplies two numbers','Comments out a line','Compares two values for equality'],
      correct:0,
      explain:'%% is the modulo operator - x %% 2 gives the remainder when x is divided by 2, which is 0 for even numbers.'
    }
  ],
  sandboxStarter3:`grade_pass <- function(score) {
  if (score >= 50) {
    "Pass"
  } else {
    "Fail"
  }
}
print(grade_pass(45))
print(grade_pass(72))
`,
  stretchChallenge:{
    title:'Combine parameters and a loop',
    desc:`Define a function called count_above that takes TWO parameters, v (a vector) and threshold, and uses a
      for loop to count how many values in v are greater than threshold. Use stopifnot() to confirm that
      count_above(c(5, 12, 8, 20, 3, 17), 10) == 3.`,
    starter:`# Define count_above below
`,
    tests:[
      {type:'assert', expr:'count_above(c(5, 12, 8, 20, 3, 17), 10) == 3', label:'count_above(c(5, 12, 8, 20, 3, 17), 10) equals 3'}
    ]
  }
},
{
  key:'week6', num:6, title:'Tables of Data: data.frame Basics',
  scenarioTag:'Real world: a proper table of students, not just one vector at a time',
  scenario:`So far every student fact has lived in its own separate vector — names in one, scores in another. A
    data.frame ties them together into a proper table, like a real spreadsheet, where each row is one student.`,
  objectives:[
    'Create a data.frame with data.frame()',
    'Access a column with $',
    'Use nrow() and ncol() to check the size of a data.frame',
    'Combine $ column access with vector functions like mean() and sum()'
  ],
  conceptHtml:`
    <p>A <strong>data.frame</strong> combines several vectors of equal length into one table — each vector becomes
    a named column:</p>
    <pre class="code-block">students &lt;- data.frame(
  name = c("Ada", "Ben", "Cy"),
  score = c(85, 62, 90)
)
print(students$name)
print(students$score)</pre>
    <p>Use <code>nrow()</code> and <code>ncol()</code> to check the table's size:</p>
    <pre class="code-block">print(nrow(students))  # 3 - three students
print(ncol(students))  # 2 - two columns (name and score)</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">students &lt;- data.frame(
  name = c("Ada", "Ben", "Cy"),
  score = c(85, 62, 90)
)
print(students$name)
print(students$score)</pre>
    <ul>
      <li><code>data.frame(name = c(...), score = c(...))</code> — each argument becomes a column. name and score
        must have the SAME number of values (3 each here), since each position across all columns describes one
        row — one student.</li>
      <li><code>students$name</code> — the <code>$</code> operator picks out ONE column by name. Importantly, what
        you get back is just an ordinary vector — exactly like the ones from Week 1-5.</li>
      <li><code>students$score</code> — same idea for the score column. Because it's an ordinary vector, every
        trick you already know (mean(), sum(), indexing with [ ], filtering with a condition) still works on it.</li>
    </ul>
    <p>The second example follows the same shape but calls <code>nrow()</code>/<code>ncol()</code> on the whole
    data.frame instead of <code>$</code> on a single column — nrow() counts rows (students), ncol() counts columns
    (pieces of information about each student).</p>`,
  sandboxStarter:`students <- data.frame(
  name = c("Ada", "Ben", "Cy"),
  score = c(85, 62, 90)
)
print(students$name)
print(students$score)
`,
  sandboxStarter2:`students <- data.frame(
  name = c("Ada", "Ben", "Cy"),
  score = c(85, 62, 90)
)
print(nrow(students))
print(ncol(students))
`,
  exercises:[
    {
      title:'Create your first data.frame',
      desc:`Create a data.frame called pupils with two columns: name = c("Maya", "Tom", "Zoe") and
        age = c(11, 12, 10). Print pupils$name — it should print all three names.`,
      starter:`# Create pupils, then print its name column
`,
      tests:[{type:'output', contains:['Maya','Tom','Zoe'], label:'Prints all three names (Maya, Tom, Zoe)'}]
    },
    {
      title:'Access a numeric column',
      desc:`Create the same pupils data.frame as before: name = c("Maya", "Tom", "Zoe"), age = c(11, 12, 10).
        Print pupils$age — it should print 11, 12 and 10.`,
      starter:`# Create pupils, then print its age column
`,
      tests:[{type:'output', contains:['11','12','10'], label:'Prints all three ages (11, 12, 10)'}]
    },
    {
      title:'Count the rows',
      desc:`Create a data.frame called pupils with name = c("Maya", "Tom", "Zoe", "Sam") and
        age = c(11, 12, 10, 13). Use stopifnot() to confirm that nrow(pupils) == 4.`,
      starter:`# Create pupils, then check its row count
`,
      tests:[{type:'assert', expr:'nrow(pupils) == 4', label:'nrow(pupils) equals 4'}]
    },
    {
      title:'Count the columns',
      desc:`Create a data.frame called subjects with three columns: name = c("Maya", "Tom"),
        score = c(70, 85), grade = c("B", "A"). Use stopifnot() to confirm that ncol(subjects) == 3.`,
      starter:`# Create subjects, then check its column count
`,
      tests:[{type:'assert', expr:'ncol(subjects) == 3', label:'ncol(subjects) equals 3'}]
    },
    {
      title:'Combine $ with mean()',
      desc:`Create a data.frame called pupils with name = c("Maya", "Tom", "Zoe") and age = c(11, 12, 10). Print
        mean(pupils$age) — it should print 11 (the average of 11, 12 and 10).`,
      starter:`# Create pupils, then print the mean of its age column
`,
      tests:[{type:'output', contains:['11'], label:'Prints the mean age (11)'}]
    },
    {
      title:'Combine $ with sum()',
      desc:`Create a data.frame called pupils with name = c("Maya", "Tom", "Zoe") and
        score = c(70, 85, 90). Use stopifnot() to confirm that sum(pupils$score) == 245.`,
      starter:`# Create pupils, then check the sum of its score column
`,
      tests:[{type:'assert', expr:'sum(pupils$score) == 245', label:'sum(pupils$score) equals 245'}]
    }
  ],
  quiz:[
    {
      q:'How do you access the score column of a data.frame called df?',
      options:['df$score','df[score]','df.score','score(df)'],
      correct:0,
      explain:'The $ operator picks out a single named column, returning it as an ordinary vector.'
    },
    {
      q:'What does nrow(df) tell you?',
      options:['How many rows the data.frame has','How many columns the data.frame has','The names of the columns','The average of all the numbers in it'],
      correct:0,
      explain:'nrow() counts the rows - in a student table, that means the number of students.'
    },
    {
      q:'What does data.frame(name = c("A","B"), age = c(10,11)) create?',
      options:['A table with 2 rows and 2 columns','A vector of 4 values','A single row','An error, because two vectors cannot be combined'],
      correct:0,
      explain:'Each argument becomes a column, and since both vectors have 2 values, the result is a 2-row, 2-column table.'
    },
    {
      q:'What kind of R value does students$score return?',
      options:['An ordinary vector - all your vector functions like mean() still work on it','A brand new data type only usable with $','A single number','Another data.frame'],
      correct:0,
      explain:'$ extracts one column as a plain vector, so everything you learned about vectors in Weeks 1-5 still applies.'
    }
  ],
  sandboxStarter3:`students <- data.frame(
  name = c("Ada", "Ben", "Cy"),
  score = c(85, 62, 90)
)
print(mean(students$score))
print(sum(students$score))
`,
  stretchChallenge:{
    title:'Build a 3-column data.frame and check a calculation',
    desc:`Create a data.frame called students with name = c("Ada", "Ben", "Cy", "Dee"),
      score = c(85, 62, 90, 74). Use stopifnot() to confirm that nrow(students) == 4 AND
      round(mean(students$score)) == 78.`,
    starter:`# Create students, then check both conditions
`,
    tests:[
      {type:'assert', expr:'nrow(students) == 4 && round(mean(students$score)) == 78', label:'students has 4 rows and its average score rounds to 78'}
    ]
  }
},
{
  key:'week7', num:7, title:'Filtering Rows in a Data Frame',
  scenarioTag:'Real world: who actually passed?',
  scenario:`Week 2 taught you to filter a plain vector down to just the values you want. Now you'll do the same
    thing to a whole data.frame — keeping only the ROWS (whole students) that match a condition, not just values.`,
  objectives:[
    'Filter rows of a data.frame using df[df$col >= value, ]',
    'Understand that the comma inside [ ] separates ROWS from COLUMNS',
    'Combine row-filtering with $ to pull out a specific column afterward',
    'Combine two row-filter conditions with & (not &&)'
  ],
  conceptHtml:`
    <p>To filter a data.frame down to matching ROWS, use square brackets with a comma — everything BEFORE the
    comma picks rows, everything AFTER picks columns:</p>
    <pre class="code-block">students &lt;- data.frame(
  name = c("Ada", "Ben", "Cy", "Dee"),
  score = c(85, 45, 90, 55)
)
passing &lt;- students[students$score &gt;= 50, ]
print(passing)</pre>
    <p>Leaving the space AFTER the comma blank means "keep every column". You can combine filtering with
    <code>$</code> to go straight to one column of just the matching rows:</p>
    <pre class="code-block">print(passing$name)  # "Ada" "Cy" "Dee" - Ben is excluded</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">passing &lt;- students[students$score &gt;= 50, ]
print(passing)</pre>
    <ul>
      <li><code>students$score &gt;= 50</code> — exactly like Week 2, this builds a logical vector: TRUE for Ada, Cy
        and Dee, FALSE for Ben.</li>
      <li><code>students[ ... , ]</code> — the square brackets on a data.frame take TWO things separated by a
        comma: <code>df[rows, columns]</code>. Putting the logical vector BEFORE the comma keeps only the rows
        where it's TRUE. Leaving AFTER the comma empty means "every column, unchanged".</li>
      <li><code>print(passing)</code> — passing is still a full data.frame, just with fewer rows — Ben's whole row
        is gone.</li>
    </ul>
    <p>If you want to combine TWO conditions when filtering rows, use <code>&amp;</code> (not <code>&amp;&amp;</code>
    from Week 3) — row-filtering needs to check EVERY row at once, and <code>&amp;</code> (like the <code>|</code>
    you haven't met yet, its OR counterpart) works element-by-element across a whole vector, exactly like the
    filtering you did on plain vectors in Week 2.</p>`,
  sandboxStarter:`students <- data.frame(
  name = c("Ada", "Ben", "Cy", "Dee"),
  score = c(85, 45, 90, 55)
)
passing <- students[students$score >= 50, ]
print(passing)
`,
  sandboxStarter2:`students <- data.frame(
  name = c("Ada", "Ben", "Cy", "Dee"),
  score = c(85, 45, 90, 55)
)
passing <- students[students$score >= 50, ]
print(passing$name)
`,
  exercises:[
    {
      title:'Filter rows with a condition',
      desc:`Create pupils &lt;- data.frame(name = c("Maya", "Tom", "Zoe", "Sam"), score = c(88, 42, 95, 60)). Create
        high_scorers &lt;- pupils[pupils$score &gt;= 60, ]. Use stopifnot() to confirm that nrow(high_scorers) == 3
        AND that "Tom" is NOT in high_scorers$name (use !("Tom" %in% high_scorers$name)).`,
      starter:`# Create pupils, then filter it into high_scorers
`,
      tests:[{type:'assert', expr:'nrow(high_scorers) == 3 && !("Tom" %in% high_scorers$name)', label:'high_scorers has exactly 3 rows and excludes Tom'}]
    },
    {
      title:'Filter for a different condition',
      desc:`Create pupils &lt;- data.frame(name = c("Maya", "Tom", "Zoe", "Sam"), score = c(88, 42, 95, 60)). Create
        low_scorers &lt;- pupils[pupils$score &lt; 60, ]. Use stopifnot() to confirm that nrow(low_scorers) == 1 AND
        that low_scorers$name[1] == "Tom".`,
      starter:`# Create pupils, then filter it into low_scorers
`,
      tests:[{type:'assert', expr:'nrow(low_scorers) == 1 && low_scorers$name[1] == "Tom"', label:'low_scorers has exactly 1 row, and it is Tom'}]
    },
    {
      title:'Pull a column from filtered rows',
      desc:`Create pupils &lt;- data.frame(name = c("Maya", "Tom", "Zoe", "Sam"), score = c(88, 42, 95, 60)). Create
        high_scorers &lt;- pupils[pupils$score &gt;= 60, ], then high_names &lt;- high_scorers$name. Use
        stopifnot() to confirm that length(high_names) == 3 AND that "Tom" is NOT in high_names.`,
      starter:`# Create pupils, filter it, then pull out the name column
`,
      tests:[{type:'assert', expr:'length(high_names) == 3 && !("Tom" %in% high_names)', label:'high_names has exactly 3 entries and excludes Tom'}]
    },
    {
      title:'Filter and access $ in one step',
      desc:`Create pupils &lt;- data.frame(name = c("Maya", "Tom", "Zoe", "Sam"), score = c(88, 42, 95, 60)). Create
        matched &lt;- pupils[pupils$score &gt;= 90, ]$name — filtering and $ in a single line. Use stopifnot() to
        confirm that length(matched) == 1 AND matched == "Zoe".`,
      starter:`# Create pupils, then filter+access in one line
`,
      tests:[{type:'assert', expr:'length(matched) == 1 && matched == "Zoe"', label:'matched has exactly 1 entry, and it is Zoe'}]
    },
    {
      title:"Count filtered rows with nrow()",
      desc:`Create pupils &lt;- data.frame(name = c("Maya", "Tom", "Zoe", "Sam"), score = c(88, 42, 95, 60)). Use
        stopifnot() to confirm that nrow(pupils[pupils$score &lt; 60, ]) == 1 — counting the filtered rows directly,
        without storing them in a variable first.`,
      starter:`# Create pupils, then check the filtered row count directly
`,
      tests:[{type:'assert', expr:'nrow(pupils[pupils$score < 60, ]) == 1', label:'nrow(pupils[pupils$score < 60, ]) equals 1'}]
    },
    {
      title:'Filter rows with two combined conditions',
      desc:`Create pupils &lt;- data.frame(name = c("Maya", "Tom", "Zoe", "Sam"), score = c(88, 42, 95, 60)). Create
        mid_scorers &lt;- pupils[pupils$score &gt;= 50 &amp; pupils$score &lt; 90, ] (note the single &amp;, since
        this checks every row). Use stopifnot() to confirm that nrow(mid_scorers) == 2, "Tom" is NOT in
        mid_scorers$name, and "Zoe" is NOT in mid_scorers$name.`,
      starter:`# Create pupils, then filter with two combined conditions
`,
      tests:[{type:'assert', expr:'nrow(mid_scorers) == 2 && !("Tom" %in% mid_scorers$name) && !("Zoe" %in% mid_scorers$name)', label:'mid_scorers has exactly 2 rows, excluding Tom and Zoe'}]
    }
  ],
  quiz:[
    {
      q:'What does the comma inside df[rows, columns] separate?',
      options:['Rows from columns','Two different data.frames','Column names from row names','Nothing - it is optional and never needed'],
      correct:0,
      explain:'Everything before the comma selects rows; everything after selects columns. Leaving one side blank means "keep everything" on that side.'
    },
    {
      q:'To keep only students with score >= 50, what would you write?',
      options:['df[df$score >= 50, ]','df[, df$score >= 50]','df$score[>= 50]','df(score >= 50)'],
      correct:0,
      explain:'The logical condition goes BEFORE the comma, since it is selecting rows.'
    },
    {
      q:'Why use & instead of && when combining two row-filter conditions?',
      options:['& checks every row (element-wise); && only checks a single value','&& is faster to run','& only works with numbers, not text','They are identical, just different symbols'],
      correct:0,
      explain:'Row-filtering needs a TRUE/FALSE for every row at once, which is exactly what the vector-wise & (and |) provide - && only evaluates a single TRUE/FALSE.'
    },
    {
      q:'What does df[df$score >= 50, ]$name give you?',
      options:['The name column, but only for the rows where score is 50 or above','Every name in the whole data.frame','The number of matching rows only','An error, because you cannot combine filtering and $'],
      correct:0,
      explain:'The filtering happens first (picking rows), then $name pulls out just the name column of those remaining rows.'
    }
  ],
  sandboxStarter3:`students <- data.frame(
  name = c("Ada", "Ben", "Cy", "Dee"),
  score = c(85, 45, 90, 55)
)
mid_scorers <- students[students$score >= 50 & students$score < 90, ]
print(mid_scorers)
`,
  stretchChallenge:{
    title:'Filter, then summarize with mean()',
    desc:`Create students &lt;- data.frame(name = c("Ada", "Ben", "Cy", "Dee"), score = c(85, 42, 90, 55)). Create
      pass_students &lt;- students[students$score &gt;= 50, ]. Use stopifnot() to confirm that
      nrow(pass_students) == 3 AND round(mean(pass_students$score)) == 77.`,
    starter:`# Create students, filter into pass_students, then check both conditions
`,
    tests:[
      {type:'assert', expr:'nrow(pass_students) == 3 && round(mean(pass_students$score)) == 77', label:'pass_students has 3 rows and its average score rounds to 77'}
    ]
  }
},
{
  key:'week8', num:8, title:'Working with Text',
  scenarioTag:'Real world: building name tags and welcome messages',
  scenario:`Every report so far has worked with numbers. But real class data is full of text too — names, IDs,
    welcome messages. R has a small toolkit of functions just for building and slicing up text.`,
  objectives:[
    'Join strings together with paste() and paste0()',
    'Count characters in a string with nchar()',
    'Convert case with toupper() and tolower()',
    'Extract part of a string with substr()'
  ],
  conceptHtml:`
    <p><code>paste()</code> joins pieces of text together, with a space automatically added between them:</p>
    <pre class="code-block">name &lt;- "Ada"
greeting &lt;- paste("Hello,", name)
print(greeting)  # "Hello, Ada"</pre>
    <p><code>paste0()</code> does the same thing, but with NO space between the pieces — useful for building IDs
    or tags:</p>
    <pre class="code-block">tag &lt;- paste0("student_", 42)
print(tag)  # "student_42"</pre>
    <p>Three more handy text functions: <code>nchar()</code> counts characters, <code>toupper()</code>/
    <code>tolower()</code> convert case, and <code>substr(text, start, stop)</code> extracts part of a string by
    position:</p>
    <pre class="code-block">print(nchar("Hello"))          # 5
print(toupper("hello"))        # "HELLO"
print(substr("Hello", 1, 3))   # "Hel" - characters 1 through 3</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">name &lt;- "Ada"
greeting &lt;- paste("Hello,", name)
print(greeting)</pre>
    <ul>
      <li><code>name &lt;- "Ada"</code> — an ordinary text (string) variable.</li>
      <li><code>paste("Hello,", name)</code> — paste() takes any number of pieces and glues them into one string,
        automatically inserting a single space between each piece. Here it combines "Hello," and "Ada" into
        "Hello, Ada".</li>
      <li><code>print(greeting)</code> — displays the combined string.</li>
    </ul>
    <p>The second example follows the same shape as <code>paste()</code>, but uses <code>paste0()</code> instead —
    notice there's no space between "student_" and 42 in the result, since paste0() never adds one automatically.</p>`,
  sandboxStarter:`name <- "Ada"
greeting <- paste("Hello,", name)
print(greeting)
`,
  sandboxStarter2:`tag <- paste0("student_", 42)
print(tag)
print(nchar(tag))
`,
  exercises:[
    {
      title:'Join strings with paste()',
      desc:`Create a variable called name with the value "Ben". Create message &lt;- paste("Welcome,", name), then
        print(message). It should print "Welcome, Ben".`,
      starter:`# Create name and message, then print message
`,
      tests:[{type:'output', contains:['Welcome, Ben'], label:'Prints "Welcome, Ben"'}]
    },
    {
      title:'Join strings without spaces using paste0()',
      desc:`Create id &lt;- paste0("ID", 7), then print(id). It should print "ID7" (no space, unlike paste()).`,
      starter:`# Create id, then print it
`,
      tests:[{type:'output', contains:['ID7'], label:'Prints "ID7"'}]
    },
    {
      title:'Count characters with nchar()',
      desc:`Create a variable called word with the value "Elephant". Use stopifnot() to confirm that
        nchar(word) == 8.`,
      starter:`# Create word, then check its character count
`,
      tests:[{type:'assert', expr:'nchar(word) == 8', label:'nchar(word) equals 8'}]
    },
    {
      title:'Convert case',
      desc:`Create shout &lt;- toupper("quiet"). Use stopifnot() to confirm that shout == "QUIET".`,
      starter:`# Create shout below
`,
      tests:[{type:'assert', expr:'shout == "QUIET"', label:'shout equals "QUIET"'}]
    },
    {
      title:'Extract part of a string with substr()',
      desc:`Create a variable called word with the value "Butterfly". Create first3 &lt;- substr(word, 1, 3). Use
        stopifnot() to confirm that first3 == "But".`,
      starter:`# Create word and first3
`,
      tests:[{type:'assert', expr:'first3 == "But"', label:'first3 equals "But"'}]
    },
    {
      title:'Combine paste0() and substr() to build initials',
      desc:`Create first &lt;- "Ada" and last &lt;- "Lovelace". Create
        initials &lt;- paste0(substr(first, 1, 1), substr(last, 1, 1)). Use stopifnot() to confirm that
        initials == "AL".`,
      starter:`# Create first, last, and initials
`,
      tests:[{type:'assert', expr:'initials == "AL"', label:'initials equals "AL"'}]
    }
  ],
  quiz:[
    {
      q:'What does paste("Hello,", "Ada") return?',
      options:['"Hello, Ada"','"Hello,Ada"','An error','"HelloAda"'],
      correct:0,
      explain:'paste() automatically inserts a space between the pieces it joins.'
    },
    {
      q:'What is the difference between paste() and paste0()?',
      options:['paste0() joins with no separator by default; paste() adds a space','They are identical','paste0() only works with numbers','paste() is faster to run'],
      correct:0,
      explain:'paste0(a, b) is shorthand for paste(a, b, sep="") - no space is inserted.'
    },
    {
      q:'What does nchar("Hello") return?',
      options:['5','4','"Hello"','An error'],
      correct:0,
      explain:'nchar() counts the number of characters in a string - "Hello" has 5.'
    },
    {
      q:'What does substr("Hello", 1, 3) return?',
      options:['"Hel" - characters 1 through 3','"Hello" - the whole string','"H" - just the first character','An error, because substr needs 4 arguments'],
      correct:0,
      explain:'substr(text, start, stop) extracts the characters from position start to position stop, inclusive.'
    }
  ],
  sandboxStarter3:`print(toupper("hello"))
print(tolower("WORLD"))
print(substr("Hello", 1, 3))
`,
  stretchChallenge:{
    title:'Build a formatted tag combining everything',
    desc:`Create name &lt;- "maya" and id &lt;- 5. Create
      tag &lt;- paste0(toupper(substr(name, 1, 1)), substr(name, 2, nchar(name)), "_", id) — this capitalizes just
      the first letter, keeps the rest as-is, then appends an underscore and the id. Use stopifnot() to confirm
      that tag == "Maya_5".`,
    starter:`# Create name, id, and tag
`,
    tests:[
      {type:'assert', expr:'tag == "Maya_5"', label:'tag equals "Maya_5"'}
    ]
  }
},
{
  key:'week9', num:9, title:'Real Stats: median, sd, and Summarizing',
  scenarioTag:'Real world: describing the WHOLE spread of a class, not just the average',
  scenario:`mean() (Week 1) tells you the average, but it can hide a lot — two classes can have the same average
    score with completely different spreads. This week adds two more real statistics tools: median() and sd().`,
  objectives:[
    'Calculate the median of a vector with median()',
    'Calculate the standard deviation with sd()',
    'Understand that a small sd means values are close together, a large sd means they are spread out',
    'Combine min(), max(), mean(), median() and sd() to fully describe a vector'
  ],
  conceptHtml:`
    <p><code>median()</code> finds the MIDDLE value when a vector is sorted — unlike mean(), it isn't pulled
    around by one unusually high or low value:</p>
    <pre class="code-block">scores &lt;- c(65, 72, 58, 90, 81)
print(median(scores))          # 72 - the middle value once sorted
print(round(sd(scores), 1))    # 12.7 - how spread out the scores are</pre>
    <p><code>sd()</code> (standard deviation) measures spread: a SMALL sd means the values are all close
    together, a LARGE sd means they're spread far apart. Since sd() often produces long decimals, wrap it in
    <code>round(..., 1)</code> to keep 1 decimal place, just like you did with mean() in earlier weeks.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">scores &lt;- c(65, 72, 58, 90, 81)
print(median(scores))
print(round(sd(scores), 1))</pre>
    <ul>
      <li><code>median(scores)</code> — R sorts the values (58, 65, 72, 81, 90) and picks the middle one: 72. For
        an EVEN number of values, median() averages the two middle ones instead.</li>
      <li><code>sd(scores)</code> — measures how far, on average, the values wander from the mean. This dataset's
        scores range from 58 to 90, giving a moderate spread of about 12.7.</li>
      <li><code>round(..., 1)</code> — sd() usually returns a long decimal, so rounding to 1 decimal place keeps
        the output readable, exactly like round(mean(...), 1) in earlier weeks.</li>
    </ul>
    <p>The second example applies the exact same two functions to a data.frame column with <code>$</code>, tying
    together everything from Weeks 6-7 with this week's new stats functions.</p>`,
  sandboxStarter:`scores <- c(65, 72, 58, 90, 81)
print(median(scores))
print(round(sd(scores), 1))
`,
  sandboxStarter2:`students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
print(median(students$score))
print(round(sd(students$score), 1))
`,
  exercises:[
    {
      title:'Find the median of an odd-length vector',
      desc:`Create scores &lt;- c(10, 20, 30, 40, 1000). Print median(scores) — median() sorts the values first
        (10, 20, 30, 40, 1000) and picks the middle one, so it should print 30, NOT the mean (which the 1000
        would drag much higher).`,
      starter:`# Create scores, then print its median
`,
      tests:[{type:'output', contains:['30'], label:'Prints the median (30), not the mean'}]
    },
    {
      title:'Find the median of an even-length vector',
      desc:`Create scores &lt;- c(10, 20, 30, 1000). Print median(scores) — with an EVEN number of values, median()
        averages the two middle ones once sorted (20 and 30), so it should print 25, NOT the mean (which the 1000
        would drag much higher).`,
      starter:`# Create scores, then print its median
`,
      tests:[{type:'output', contains:['25'], label:'Prints the median of an even-length vector (25), not the mean'}]
    },
    {
      title:'A vector with zero spread',
      desc:`Create values &lt;- c(5, 5, 5, 5). Use stopifnot() to confirm that sd(values) == 0 — since every value
        is identical, there's no spread at all.`,
      starter:`# Create values, then check its standard deviation
`,
      tests:[{type:'assert', expr:'sd(values) == 0', label:'sd(values) equals 0'}]
    },
    {
      title:'Calculate standard deviation',
      desc:`Create scores &lt;- c(10, 20, 30, 40, 50). Use stopifnot() to confirm that round(sd(scores), 1) == 15.8.`,
      starter:`# Create scores, then check its standard deviation
`,
      tests:[{type:'assert', expr:'round(sd(scores), 1) == 15.8', label:'round(sd(scores), 1) equals 15.8'}]
    },
    {
      title:'Combine median() with a data.frame column',
      desc:`Create pupils &lt;- data.frame(name = c("Maya", "Tom", "Zoe"), score = c(85, 62, 90)). Use stopifnot()
        to confirm that median(pupils$score) == 85.`,
      starter:`# Create pupils, then check the median of its score column
`,
      tests:[{type:'assert', expr:'median(pupils$score) == 85', label:'median(pupils$score) equals 85'}]
    },
    {
      title:'Combine sd() with a data.frame column',
      desc:`Create pupils &lt;- data.frame(name = c("Maya", "Tom", "Zoe"), score = c(85, 62, 90)). Use stopifnot()
        to confirm that round(sd(pupils$score), 1) == 14.9.`,
      starter:`# Create pupils, then check the standard deviation of its score column
`,
      tests:[{type:'assert', expr:'round(sd(pupils$score), 1) == 14.9', label:'round(sd(pupils$score), 1) equals 14.9'}]
    }
  ],
  quiz:[
    {
      q:'What does median() return for c(10, 20, 30, 40, 50)?',
      options:['30 - the middle value once sorted','25 - the average','10 - the smallest value','50 - the largest value'],
      correct:0,
      explain:'median() sorts the vector and picks the middle value - here, 30.'
    },
    {
      q:'What does median() return for an EVEN-length vector like c(10, 20, 30, 40)?',
      options:['The average of the two middle values','The larger of the two middle values','An error - median only works on odd-length vectors','The first value in the vector'],
      correct:0,
      explain:'With an even number of values, there are two "middle" values, so median() averages them - (20+30)/2 = 25.'
    },
    {
      q:'What does a standard deviation of 0 tell you?',
      options:['Every value in the vector is identical - there is no spread at all','The vector is empty','The mean is 0','The vector contains negative numbers'],
      correct:0,
      explain:'sd() measures spread around the mean - if every value is the same, there is nothing to spread, so sd is exactly 0.'
    },
    {
      q:'What does sd() measure?',
      options:['How spread out the values are around the mean','The middle value','The total of all values','The number of values in the vector'],
      correct:0,
      explain:'Standard deviation measures how far, on average, values wander from the mean - a small sd means values are close together.'
    }
  ],
  sandboxStarter3:`scores <- c(65, 72, 58, 90, 81)
print(min(scores))
print(max(scores))
print(round(mean(scores), 1))
print(median(scores))
print(round(sd(scores), 1))
`,
  stretchChallenge:{
    title:'Describe a vector fully',
    desc:`Create readings &lt;- c(65, 72, 58, 90, 81). Use stopifnot() to confirm ALL of the following at once:
      min(readings) == 58, max(readings) == 90, round(mean(readings), 1) == 73.2, median(readings) == 72, AND
      round(sd(readings), 1) == 12.7.`,
    starter:`# Create readings, then check all five statistics
`,
    tests:[
      {type:'assert', expr:'min(readings) == 58 && max(readings) == 90 && round(mean(readings), 1) == 73.2 && median(readings) == 72 && round(sd(readings), 1) == 12.7', label:'readings has the correct min, max, mean, median, and sd'}
    ]
  }
}
];

/* =========================================================================
   R Academy — Intermediate Level content data
   ========================================================================= */

const R_INTERMEDIATE_WEEKS = [
{
  key:'week1', num:1, title:'Skipping the Loop: sapply and lapply',
  scenarioTag:'Real world: applying the same calculation to every student, without writing a loop',
  scenario:`Beginner Week 4 taught you the for loop — great for building up a total step by step. But R has a
    faster, cleaner way to apply the SAME function to every value in a vector: sapply() and lapply() do the
    looping for you.`,
  objectives:[
    'Use sapply() to apply a function to every value in a vector',
    'Use a named function (not just an anonymous one) with sapply()',
    'Use lapply() to get a list back instead of a simplified vector',
    'Access one element of a list with [[ ]]'
  ],
  conceptHtml:`
    <p><code>sapply(vector, function)</code> applies <code>function</code> to EVERY value in <code>vector</code>,
    and simplifies the results back into a plain vector — no for loop needed:</p>
    <pre class="code-block">nums &lt;- c(3, 5, 8)
doubled &lt;- sapply(nums, function(x) x * 2)
print(doubled)   # 6 10 16</pre>
    <p>You can also pass a function you've already written a name for (Beginner Week 5), instead of writing it
    inline each time:</p>
    <pre class="code-block">square &lt;- function(x) x^2
squared &lt;- sapply(c(2, 3, 4), square)
print(squared)   # 4 9 16</pre>
    <p><code>lapply()</code> works the same way, but ALWAYS returns a <strong>list</strong> instead of simplifying
    to a vector — useful when each result might be a different shape. Access one item with double brackets
    <code>[[ ]]</code>:</p>
    <pre class="code-block">squared_list &lt;- lapply(c(1, 2, 3), function(x) x^2)
print(squared_list[[1]])   # 1
print(squared_list[[2]])   # 4</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">nums &lt;- c(3, 5, 8)
doubled &lt;- sapply(nums, function(x) x * 2)
print(doubled)</pre>
    <ul>
      <li><code>function(x) x * 2</code> — an <strong>anonymous function</strong> (no name given) that takes one
        value <code>x</code> and doubles it. Beginner Week 5 always gave functions a name first
        (<code>my_func &lt;- function(x) ...</code>) — sapply() lets you skip that step for a quick one-off.</li>
      <li><code>sapply(nums, function(x) x * 2)</code> — runs that function once for EACH value in
        <code>nums</code> (3, then 5, then 8), collecting every result into one new vector.</li>
      <li>The result, <code>doubled</code>, is an ordinary vector — every trick from Weeks 1-9 (indexing, sum(),
        filtering) still works on it.</li>
    </ul>
    <p>The second example follows the same shape but uses a function that was DEFINED first and given a name
    (<code>square</code>), then passed to sapply() by that name, with no brackets after it — sapply() calls it for
    you.</p>`,
  sandboxStarter:`nums <- c(3, 5, 8)
doubled <- sapply(nums, function(x) x * 2)
print(doubled)
`,
  sandboxStarter2:`square <- function(x) x^2
squared <- sapply(c(2, 3, 4), square)
print(squared)
`,
  exercises:[
    {
      title:'Double every value with sapply',
      desc:`Create a vector called nums with the values 4, 6, 9. Print sapply(nums, function(x) x * 2) — it should
        print 8, 12 and 18.`,
      starter:`# Create your vector, then sapply a doubling function over it and print the result
`,
      tests:[{type:'output', contains:['8','12','18'], label:'Prints all three doubled values (8, 12, 18)'}]
    },
    {
      title:'Use a named function with sapply',
      desc:`Define a function called add_five that returns x + 5. Create a vector nums with the values 1, 2, 3.
        Print sapply(nums, add_five) — it should print 6, 7 and 8.`,
      starter:`# Define add_five, create nums, then sapply it and print the result
add_five <- function(x) x + 5
`,
      tests:[{type:'output', contains:['6','7','8'], label:'Prints all three results (6, 7, 8)'}]
    },
    {
      title:'Get string lengths with sapply',
      desc:`Create a vector called words with the values "cat", "elephant", "dog". Print sapply(words, nchar) —
        the built-in nchar() function counts letters, so this should print 3, 8 and 3.`,
      starter:`# Create your vector, then sapply nchar over it and print the result
`,
      tests:[{type:'output', contains:['3','8'], label:'Prints the correct lengths (3, 8, 3)'}]
    },
    {
      title:'Total after doubling',
      desc:`Create a vector called nums with the values 2, 4, 6. Calculate total_doubled as
        sum(sapply(nums, function(x) x * 2)). Use stopifnot() to confirm that total_doubled == 24.`,
      starter:`# Create nums, then calculate total_doubled below
nums <- c(2, 4, 6)
`,
      tests:[{type:'assert', expr:'total_doubled == 24', label:'total_doubled equals 24'}]
    },
    {
      title:'Use lapply to build a list',
      desc:`Create a vector called nums with the values 2, 3, 4. Calculate squared_list as lapply(nums,
        function(x) x^2). Use stopifnot() to confirm that squared_list[[2]] == 9 — the SECOND item in the list,
        accessed with double brackets.`,
      starter:`# Create nums, then calculate squared_list below
nums <- c(2, 3, 4)
`,
      tests:[{type:'assert', expr:'squared_list[[2]] == 9', label:'squared_list[[2]] equals 9'}]
    },
    {
      title:'Count how many pass, using sapply',
      desc:`Create a vector called scores with the values 45, 82, 91, 38. Calculate passes as sapply(scores,
        function(x) x >= 50) — a vector of TRUE/FALSE values. Use stopifnot() to confirm that sum(passes) == 2 —
        TRUE counts as 1 and FALSE counts as 0, so summing a TRUE/FALSE vector counts how many were TRUE.`,
      starter:`# Create scores, then calculate passes below
scores <- c(45, 82, 91, 38)
`,
      tests:[{type:'assert', expr:'sum(passes) == 2', label:'sum(passes) equals 2'}]
    }
  ],
  quiz:[
    {
      q:'What does sapply(nums, function(x) x * 2) do?',
      options:['Doubles only the first value in nums','Applies the doubling function to EVERY value in nums and returns the results as a vector, without writing a for loop','Multiplies the whole vector together','Creates a new empty vector'],
      correct:1,
      explain:'sapply() applies a function once per element and collects every result — the loop happens for you, behind the scenes.'
    },
    {
      q:'What is the main difference between sapply() and lapply()?',
      options:['There is no difference, they are identical','sapply() simplifies its results into a plain vector when possible; lapply() always returns a list','lapply() is only for text, sapply() is only for numbers','sapply() cannot use named functions'],
      correct:1,
      explain:'Both apply a function across every element, but sapply() tries to simplify the result to a vector, while lapply() always keeps the list shape.'
    },
    {
      q:'How do you get the 2nd item out of a list called my_list?',
      options:['my_list[2]','my_list.2','my_list[[2]]','my_list$2'],
      correct:2,
      explain:'Double square brackets [[ ]] pull out ONE element of a list, unlike single brackets which are used differently for lists.'
    },
    {
      q:'Why does sum(sapply(c(45,82,91,38), function(x) x >= 50)) equal 2?',
      options:['Because sapply() always returns 2','Because two of the four values (82 and 91) are >= 50, and summing a TRUE/FALSE vector counts the TRUEs (TRUE=1, FALSE=0)','Because 45+38=83 which rounds to 2','It actually equals 4, not 2'],
      correct:1,
      explain:'R treats TRUE as 1 and FALSE as 0 when you do arithmetic on a logical vector, so sum() on a TRUE/FALSE vector is a quick way to count how many conditions were met.'
    }
  ],
  sandboxStarter3:`nums <- c(1, 2, 3)
squared_list <- lapply(nums, function(x) x^2)
print(squared_list[[1]])
print(squared_list[[2]])
print(squared_list[[3]])
`,
  stretchChallenge:{
    title:'Count words longer than 4 letters',
    desc:`Create a vector called words with the values "cat", "elephant", "dog", "giraffe". Calculate long_count as
      sum(sapply(words, function(x) nchar(x) > 4)). Use stopifnot() to confirm that long_count == 2 — only
      "elephant" and "giraffe" have more than 4 letters.`,
    starter:`# Create words, then calculate long_count below
words <- c("cat", "elephant", "dog", "giraffe")
`,
    tests:[
      {type:'assert', expr:'long_count == 2', label:'long_count equals 2'}
    ]
  }
},
{
  key:'week2', num:2, title:'Vectorized Decisions: ifelse()',
  scenarioTag:'Real world: labelling an entire class register at once, not one student at a time',
  scenario:`Beginner Week 3's if/else only works on ONE value at a time. But real class data is a whole vector of
    scores. ifelse() applies a yes/no decision to EVERY value in a vector at once, no loop and no sapply needed.`,
  objectives:[
    'Use ifelse(condition, value_if_true, value_if_false) on a whole vector',
    'Use ifelse() to clamp or replace values based on a condition',
    'Nest ifelse() inside another ifelse() for three or more categories',
    'Combine ifelse() with sum() to count how many values met a condition'
  ],
  conceptHtml:`
    <p><code>ifelse(condition, yes, no)</code> checks a condition for EVERY element of a vector at once, and picks
    <code>yes</code> or <code>no</code> for each position:</p>
    <pre class="code-block">scores &lt;- c(45, 82, 91, 38)
results &lt;- ifelse(scores >= 50, "Pass", "Fail")
print(results)   # "Fail" "Pass" "Pass" "Fail"</pre>
    <p>You can nest one ifelse() inside another to handle THREE or more categories, not just two:</p>
    <pre class="code-block">temps &lt;- c(-5, 10, 25)
labels &lt;- ifelse(temps < 0, "Freezing", ifelse(temps < 20, "Cool", "Warm"))
print(labels)   # "Freezing" "Cool" "Warm"</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">scores &lt;- c(45, 82, 91, 38)
results &lt;- ifelse(scores >= 50, "Pass", "Fail")
print(results)</pre>
    <ul>
      <li><code>scores >= 50</code> — builds a TRUE/FALSE vector first, exactly like Week 2's filtering
        (<code>scores[scores > 70]</code>), just without the square brackets this time.</li>
      <li><code>ifelse(scores >= 50, "Pass", "Fail")</code> — for each position, if that TRUE/FALSE value is TRUE
        it picks <code>"Pass"</code>, otherwise it picks <code>"Fail"</code> — one single call handles the WHOLE
        vector.</li>
      <li>Compare this to Beginner Week 3's <code>if (score >= 50) {...} else {...}</code> — that only works on
        ONE score. ifelse() is the vector-friendly version.</li>
    </ul>
    <p>The second example follows the same shape but NESTS a second ifelse() inside the "no" slot of the first
    one — R first checks <code>temps < 0</code>; wherever that's FALSE, it then checks the INNER condition
    (<code>temps < 20</code>) to decide between "Cool" and "Warm".</p>`,
  sandboxStarter:`scores <- c(45, 82, 91, 38)
results <- ifelse(scores >= 50, "Pass", "Fail")
print(results)
`,
  sandboxStarter2:`temps <- c(-5, 10, 25)
labels <- ifelse(temps < 0, "Freezing", ifelse(temps < 20, "Cool", "Warm"))
print(labels)
`,
  exercises:[
    {
      title:'Label pass and fail for a whole vector',
      desc:`Create a vector called scores with the values 70, 40, 55, 90. Calculate results as ifelse(scores >=
        50, "Pass", "Fail"). Use stopifnot() to confirm that all(results == c("Pass", "Fail", "Pass", "Pass")).`,
      starter:`# Create scores, then calculate results below
scores <- c(70, 40, 55, 90)
`,
      tests:[{type:'assert', expr:'all(results == c("Pass", "Fail", "Pass", "Pass"))', label:'results exactly equals c("Pass", "Fail", "Pass", "Pass")'}]
    },
    {
      title:'Clamp negative numbers to zero',
      desc:`Create a vector called nums with the values -3, 5, -1, 8. Print ifelse(nums < 0, 0, nums) — any
        negative value becomes 0, others stay the same. It should print 0, 5, 0, 8.`,
      starter:`# Create your vector, then ifelse it and print the result
`,
      tests:[{type:'output', contains:['0','5','8'], label:'Prints the clamped values (0, 5, 0, 8)'}]
    },
    {
      title:'Three categories with nested ifelse',
      desc:`Create a vector called temps with the values -5, 10, 25. Calculate labels as ifelse(temps < 0,
        "Freezing", ifelse(temps < 20, "Cool", "Warm")). Use stopifnot() to confirm that all(labels ==
        c("Freezing", "Cool", "Warm")).`,
      starter:`# Create temps, then calculate labels below
temps <- c(-5, 10, 25)
`,
      tests:[{type:'assert', expr:'all(labels == c("Freezing", "Cool", "Warm"))', label:'labels exactly equals c("Freezing", "Cool", "Warm")'}]
    },
    {
      title:'Count how many pass, using ifelse and sum',
      desc:`Create a vector called scores with the values 45, 82, 91, 38. Calculate pass_count as
        sum(ifelse(scores >= 50, 1, 0)). Use stopifnot() to confirm that pass_count == 2.`,
      starter:`# Create scores, then calculate pass_count below
scores <- c(45, 82, 91, 38)
`,
      tests:[{type:'assert', expr:'pass_count == 2', label:'pass_count equals 2'}]
    },
    {
      title:'Check the clamped vector exactly',
      desc:`Create a vector called nums with the values -2, 4, -6, 8. Calculate clamped as ifelse(nums < 0, 0,
        nums). Use stopifnot() to confirm that all(clamped == c(0, 4, 0, 8)) — all() checks that EVERY comparison
        in the vector is TRUE.`,
      starter:`# Create nums, then calculate clamped below
nums <- c(-2, 4, -6, 8)
`,
      tests:[{type:'assert', expr:'all(clamped == c(0, 4, 0, 8))', label:'clamped exactly equals c(0, 4, 0, 8)'}]
    },
    {
      title:'Check the height boundary exactly',
      desc:`Create a vector called heights with the values 140, 139, 145. Calculate results as ifelse(heights >=
        140, "Allowed", "Not tall enough"). Use stopifnot() to confirm that all(results == c("Allowed", "Not tall
        enough", "Allowed")) — notice 140 itself counts as Allowed, since the condition is >= not just >.`,
      starter:`# Create heights, then calculate results below
heights <- c(140, 139, 145)
`,
      tests:[{type:'assert', expr:'all(results == c("Allowed", "Not tall enough", "Allowed"))', label:'results exactly equals c("Allowed", "Not tall enough", "Allowed")'}]
    }
  ],
  quiz:[
    {
      q:'What is the main advantage of ifelse() over a plain if/else statement (Beginner Week 3)?',
      options:['ifelse() only works on a single value, same as if/else','ifelse() works on a WHOLE vector at once, applying the decision to every element, while if/else only checks one value','ifelse() is only for text values','There is no real difference'],
      correct:1,
      explain:'if/else branches on one condition at a time; ifelse() vectorizes that same decision across every element of a vector in one call.'
    },
    {
      q:'What does ifelse(nums < 0, 0, nums) do?',
      options:['Replaces every value in nums with 0','Keeps every negative value the same, replaces positives with 0','Replaces negative values with 0, and leaves other values unchanged','Removes negative values from the vector entirely'],
      correct:2,
      explain:'Wherever the condition (nums < 0) is TRUE, ifelse() picks the "yes" value (0); wherever it\'s FALSE, it picks the "no" value (the original number) — this is a common "clamping" pattern.'
    },
    {
      q:'In ifelse(temps < 0, "Freezing", ifelse(temps < 20, "Cool", "Warm")), when does a temperature get labelled "Warm"?',
      options:['Whenever temps < 0 is TRUE','Whenever temps < 0 is FALSE, no matter what','Only when temps < 0 is FALSE AND temps < 20 is also FALSE','Every value gets labelled "Warm"'],
      correct:2,
      explain:'The inner ifelse() only runs when the outer condition is FALSE — and within that, "Warm" is only picked when the inner condition (temps < 20) is ALSO FALSE.'
    },
    {
      q:'Why does sum(ifelse(scores >= 50, 1, 0)) correctly count how many scores passed?',
      options:['sum() only works with ifelse()','ifelse() converts each TRUE/FALSE decision into a 1 or 0, and summing those 1s and 0s counts how many were 1 (i.e. passed)','It doesn\'t work correctly, this is a common mistake','ifelse() automatically counts things without sum()'],
      correct:1,
      explain:'ifelse() explicitly returns 1 for a pass and 0 for a fail here, so adding them all up gives a running count of passes — the same idea as summing a TRUE/FALSE vector directly.'
    }
  ],
  sandboxStarter3:`scores <- c(45, 82, 91, 38)
pass_count <- sum(ifelse(scores >= 50, 1, 0))
print(pass_count)
`,
  stretchChallenge:{
    title:'Label three grade bands with nested ifelse',
    desc:`Create a vector called scores with the values 95, 72, 40. Calculate grades as ifelse(scores >= 90, "A",
      ifelse(scores >= 60, "B", "F")). Use stopifnot() to confirm that all(grades == c("A", "B", "F")).`,
    starter:`# Create scores, then calculate grades below
scores <- c(95, 72, 40)
`,
    tests:[
      {type:'assert', expr:'all(grades == c("A", "B", "F"))', label:'grades exactly equals c("A", "B", "F")'}
    ]
  }
},
{
  key:'week3', num:3, title:'Categories in R: Factors',
  scenarioTag:'Real world: house colours and t-shirt sizes are categories, not free text',
  scenario:`So far every text vector has just been ordinary text — nothing stops a typo like "Rde" sneaking in.
    A factor tells R "this column can ONLY be one of these specific categories" — and, when the categories have
    a natural order (like t-shirt sizes), lets you compare them directly.`,
  objectives:[
    'Create a factor with factor() and a fixed set of levels',
    'Check how many categories exist with nlevels()',
    'Create an ORDERED factor and compare two categories directly',
    'Convert a factor back to text or to its underlying integer code'
  ],
  conceptHtml:`
    <p><code>factor(vector, levels = c(...))</code> creates a category vector — R remembers the FULL set of
    allowed categories, not just whichever ones happen to appear:</p>
    <pre class="code-block">houses &lt;- factor(c("Red", "Blue", "Red", "Green"), levels = c("Red", "Blue", "Green"))
print(levels(houses))    # "Red"   "Blue"  "Green"
print(nlevels(houses))   # 3</pre>
    <p>Add <code>ordered = TRUE</code> when the categories have a natural order — this lets you compare them
    directly with <code>&lt;</code>/<code>&gt;</code>, something plain text can never do:</p>
    <pre class="code-block">sizes &lt;- factor(c("S", "L", "M"), levels = c("S", "M", "L"), ordered = TRUE)
print(sizes[2] > sizes[1])   # TRUE - "L" comes after "S" in the level order</pre>
    <p>Underneath, R stores each factor value as a plain integer code matching its position in <code>levels</code>
    — get it back with <code>as.integer()</code>, or get the original text back with <code>as.character()</code>:</p>
    <pre class="code-block">print(as.integer(houses))     # 1 2 1 3 - Red=1, Blue=2, Green=3
print(as.character(houses[1]))  # "Red"</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">houses &lt;- factor(c("Red", "Blue", "Red", "Green"), levels = c("Red", "Blue", "Green"))
print(levels(houses))
print(nlevels(houses))</pre>
    <ul>
      <li><code>levels = c("Red", "Blue", "Green")</code> — this fixes the COMPLETE set of allowed categories,
        in a specific order. Even though "Green" only appears once in the data, it's still a recognised level.</li>
      <li><code>levels(houses)</code> — returns that full set of categories, as an ordinary text vector.</li>
      <li><code>nlevels(houses)</code> — just counts how many categories there are (3), regardless of how many
        times each one appears in the actual data.</li>
    </ul>
    <p>The second example follows a similar shape but adds <code>ordered = TRUE</code>, which is what unlocks
    <code>&gt;</code>/<code>&lt;</code> comparisons between factor values — comparing plain text with
    <code>&gt;</code> wouldn't mean anything, but comparing ORDERED categories does.</p>`,
  sandboxStarter:`houses <- factor(c("Red", "Blue", "Red", "Green"), levels = c("Red", "Blue", "Green"))
print(levels(houses))
print(nlevels(houses))
`,
  sandboxStarter2:`sizes <- factor(c("S", "L", "M"), levels = c("S", "M", "L"), ordered = TRUE)
print(sizes[2] > sizes[1])
`,
  exercises:[
    {
      title:'Build a factor and check its levels',
      desc:`Create a factor called houses from c("Red", "Blue", "Red", "Green") with levels = c("Red", "Blue",
        "Green"). Use stopifnot() to confirm that all(levels(houses) == c("Red", "Blue", "Green")).`,
      starter:`# Create houses below
houses <- factor(c("Red", "Blue", "Red", "Green"), levels = c("Red", "Blue", "Green"))
`,
      tests:[{type:'assert', expr:'all(levels(houses) == c("Red", "Blue", "Green"))', label:'levels(houses) exactly equals c("Red", "Blue", "Green")'}]
    },
    {
      title:'Count how many categories exist',
      desc:`Using the same houses factor (c("Red", "Blue", "Red", "Green"), levels = c("Red", "Blue", "Green")),
        use stopifnot() to confirm that nlevels(houses) == 3.`,
      starter:`houses <- factor(c("Red", "Blue", "Red", "Green"), levels = c("Red", "Blue", "Green"))
# Check nlevels(houses) below
`,
      tests:[{type:'assert', expr:'nlevels(houses) == 3', label:'nlevels(houses) equals 3'}]
    },
    {
      title:'Get one value back as text',
      desc:`Using the same houses factor, use stopifnot() to confirm that as.character(houses[1]) == "Red" —
        as.character() converts a single factor value back into an ordinary piece of text.`,
      starter:`houses <- factor(c("Red", "Blue", "Red", "Green"), levels = c("Red", "Blue", "Green"))
# Check as.character(houses[1]) below
`,
      tests:[{type:'assert', expr:'as.character(houses[1]) == "Red"', label:'as.character(houses[1]) equals "Red"'}]
    },
    {
      title:'Compare ordered factor values',
      desc:`Create an ordered factor called sizes from c("S", "L", "M") with levels = c("S", "M", "L"), ordered =
        TRUE. Use stopifnot() to confirm that sizes[2] > sizes[1] — "L" (the 2nd value) comes after "S" (the 1st
        value) in the level order.`,
      starter:`# Create sizes below
sizes <- factor(c("S", "L", "M"), levels = c("S", "M", "L"), ordered = TRUE)
`,
      tests:[{type:'assert', expr:'sizes[2] > sizes[1]', label:'sizes[2] is correctly greater than sizes[1]'}]
    },
    {
      title:'Get the underlying integer code',
      desc:`Using the same houses factor, use stopifnot() to confirm that as.integer(houses)[1] == 1 — "Red" is
        the FIRST level, so its underlying code is 1.`,
      starter:`houses <- factor(c("Red", "Blue", "Red", "Green"), levels = c("Red", "Blue", "Green"))
# Check as.integer(houses)[1] below
`,
      tests:[{type:'assert', expr:'as.integer(houses)[1] == 1', label:'as.integer(houses)[1] equals 1'}]
    },
    {
      title:'Count how many of one category',
      desc:`Using the same houses factor, calculate house_count as sum(houses == "Red"). Use stopifnot() to
        confirm that house_count == 2 — "Red" appears twice in the data.`,
      starter:`houses <- factor(c("Red", "Blue", "Red", "Green"), levels = c("Red", "Blue", "Green"))
# Calculate house_count below
`,
      tests:[{type:'assert', expr:'house_count == 2', label:'house_count equals 2'}]
    }
  ],
  quiz:[
    {
      q:'What does levels = c("Red", "Blue", "Green") do when creating a factor?',
      options:['It sorts the data alphabetically','It fixes the COMPLETE set of allowed categories, even ones that might not appear in the actual data','It deletes any value not in the list','It converts the vector into numbers only'],
      correct:1,
      explain:'A factor remembers its full category set independently of how many times (or whether) each one actually appears in the data.'
    },
    {
      q:'Why can you compare sizes[2] > sizes[1] for an ORDERED factor, but not for plain text?',
      options:['You actually can\'t, this would error','Ordered factors have a defined level ORDER ("S" < "M" < "L"), so R knows what ">" means; plain text has no defined order for ">" to use','Ordered factors are automatically converted to numbers first, losing their labels','Comparison operators only work on numbers, never on categories'],
      correct:1,
      explain:'ordered = TRUE attaches a meaningful sequence to the levels, which is exactly what > and < need to make sense of "bigger" or "smaller".'
    },
    {
      q:'What does as.integer(houses) return for a factor like houses <- factor(c("Red","Blue"), levels=c("Red","Blue","Green"))?',
      options:['The original text, unchanged','The position (index) of each value within the levels list — e.g. "Red" becomes 1, since it\'s the first level','A random unique ID for each value','An error, since factors cannot be converted to integers'],
      correct:1,
      explain:'Underneath, R stores every factor value as its integer position in the levels vector — as.integer() reveals that underlying code.'
    },
    {
      q:'Why use a factor instead of just leaving house colours as plain text?',
      options:['There is no real benefit, they behave identically','A factor fixes the exact set of valid categories up front, which helps catch typos/invalid values and enables features like ordering that plain text doesn\'t have','Factors take up less memory than text, which is the only reason to use them','Factors can only ever store numbers'],
      correct:1,
      explain:'Declaring the valid categories in advance is exactly what makes a factor more useful than free-form text for genuinely categorical data.'
    }
  ],
  sandboxStarter3:`houses <- factor(c("Red", "Blue", "Red", "Green"), levels = c("Red", "Blue", "Green"))
print(as.integer(houses))
print(as.character(houses[1]))
print(sum(houses == "Red"))
`,
  stretchChallenge:{
    title:'Compare two ordered sizes the other way round',
    desc:`Using sizes <- factor(c("S", "L", "M"), levels = c("S", "M", "L"), ordered = TRUE), calculate
      size_check as (sizes[3] > sizes[1]) && (sizes[3] < sizes[2]) — "M" (3rd value) should be bigger than "S"
      (1st) but smaller than "L" (2nd). Use stopifnot() to confirm that size_check == TRUE.`,
    starter:`sizes <- factor(c("S", "L", "M"), levels = c("S", "M", "L"), ordered = TRUE)
# Calculate size_check below
`,
    tests:[
      {type:'assert', expr:'size_check == TRUE', label:'size_check equals TRUE'}
    ]
  }
},
{
  key:'week4', num:4, title:'Reading Real Data: read.csv',
  scenarioTag:'Real world: a class roster arrives as a CSV file, not typed into c()',
  scenario:`Every data.frame so far has been typed by hand with data.frame(). Real class data usually arrives as
    a CSV (comma-separated values) file — read.csv() turns that raw text straight into a data.frame, ready to use.`,
  objectives:[
    'Use read.csv(text = ...) to turn CSV text into a data.frame',
    'Check the resulting data.frame\'s column names and row count',
    'Use head() to preview just the first few rows',
    'Filter and summarise a data.frame loaded from CSV, exactly like one built by hand'
  ],
  conceptHtml:`
    <p><code>read.csv()</code> normally reads a CSV FILE — but it can also read CSV text directly from a string
    using <code>text = ...</code>, which is exactly what a real file's contents would look like once loaded:</p>
    <pre class="code-block">csv_text &lt;- "name,score,age
Ada,85,11
Ben,62,12
Cy,90,10
Dee,74,11"
students &lt;- read.csv(text = csv_text)
print(students)</pre>
    <p>Once loaded, it's an ORDINARY data.frame — every trick from Week 6 (Beginner) still applies:
    <code>students$score</code>, <code>nrow(students)</code>, filtering with <code>[ ]</code>.</p>
    <p><code>head(df, n)</code> previews just the first <code>n</code> rows — useful for a quick look without
    printing an entire (possibly huge) table:</p>
    <pre class="code-block">print(head(students, 2))   # just Ada and Ben's rows</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">csv_text &lt;- "name,score\\nAda,85\\nBen,62"
students &lt;- read.csv(text = csv_text)
print(students$name)</pre>
    <ul>
      <li><code>csv_text</code> — an ordinary piece of text, with <code>\\n</code> marking where each new LINE (new
        row) would begin, exactly like a real CSV file's raw contents.</li>
      <li><code>read.csv(text = csv_text)</code> — parses that text as CSV: the FIRST line becomes the column
        names, every line after that becomes one row.</li>
      <li><code>students$name</code> — once parsed, it behaves exactly like any other data.frame from Beginner
        Week 6, so <code>$</code> column access works immediately.</li>
    </ul>
    <p>The second example follows the same shape but calls <code>head()</code> afterward — a habit worth building
    for ANY newly-loaded data, real or CSV, before working with the whole thing.</p>`,
  sandboxStarter:`csv_text <- "name,score
Ada,85
Ben,62"
students <- read.csv(text = csv_text)
print(students$name)
print(students$score)
`,
  sandboxStarter2:`csv_text <- "name,score,age
Ada,85,11
Ben,62,12
Cy,90,10
Dee,74,11"
students <- read.csv(text = csv_text)
print(head(students, 2))
`,
  exercises:[
    {
      title:'Read CSV text and check its column names',
      desc:`Create csv_text as "name,score,age\\nAda,85,11\\nBen,62,12\\nCy,90,10\\nDee,74,11" (the \\n marks each
        new row). Calculate df as read.csv(text = csv_text). Use stopifnot() to confirm that all(names(df) ==
        c("name", "score", "age")).`,
      starter:`# Create csv_text, then calculate df below
csv_text <- "name,score,age
Ada,85,11
Ben,62,12
Cy,90,10
Dee,74,11"
`,
      tests:[{type:'assert', expr:'all(names(df) == c("name", "score", "age"))', label:'names(df) exactly equals c("name", "score", "age")'}]
    },
    {
      title:'Check how many rows were loaded',
      desc:`Using the same csv_text and df as before, use stopifnot() to confirm that nrow(df) == 4 — four
        students were loaded from the CSV text.`,
      starter:`csv_text <- "name,score,age
Ada,85,11
Ben,62,12
Cy,90,10
Dee,74,11"
df <- read.csv(text = csv_text)
# Check nrow(df) below
`,
      tests:[{type:'assert', expr:'nrow(df) == 4', label:'nrow(df) equals 4'}]
    },
    {
      title:'Access a value after loading',
      desc:`Using the same df as before, use stopifnot() to confirm that df$score[3] == 90 — the 3rd student
        (Cy)'s score.`,
      starter:`csv_text <- "name,score,age
Ada,85,11
Ben,62,12
Cy,90,10
Dee,74,11"
df <- read.csv(text = csv_text)
# Check df$score[3] below
`,
      tests:[{type:'assert', expr:'df$score[3] == 90', label:'df$score[3] equals 90'}]
    },
    {
      title:'Preview just the first two rows',
      desc:`Using the same df as before, calculate first_two as head(df, 2). Use stopifnot() to confirm that
        nrow(first_two) == 2 && first_two$name[1] == "Ada".`,
      starter:`csv_text <- "name,score,age
Ada,85,11
Ben,62,12
Cy,90,10
Dee,74,11"
df <- read.csv(text = csv_text)
# Calculate first_two below
`,
      tests:[{type:'assert', expr:'nrow(first_two) == 2 && first_two$name[1] == "Ada"', label:'first_two correctly has 2 rows, starting with Ada'}]
    },
    {
      title:'Summarise a loaded column',
      desc:`Using the same df as before, calculate avg_score as mean(df$score). Use stopifnot() to confirm that
        round(avg_score) == 78.`,
      starter:`csv_text <- "name,score,age
Ada,85,11
Ben,62,12
Cy,90,10
Dee,74,11"
df <- read.csv(text = csv_text)
# Calculate avg_score below
`,
      tests:[{type:'assert', expr:'round(avg_score) == 78', label:'round(avg_score) equals 78'}]
    },
    {
      title:'Filter a loaded data.frame',
      desc:`Using the same df as before, calculate over_80 as df[df$score >= 80, ] — students scoring 80 or
        above. Use stopifnot() to confirm that nrow(over_80) == 2 (Ada and Cy).`,
      starter:`csv_text <- "name,score,age
Ada,85,11
Ben,62,12
Cy,90,10
Dee,74,11"
df <- read.csv(text = csv_text)
# Calculate over_80 below
`,
      tests:[{type:'assert', expr:'nrow(over_80) == 2', label:'nrow(over_80) equals 2'}]
    }
  ],
  quiz:[
    {
      q:'What does read.csv(text = csv_text) do?',
      options:['Reads a file called csv_text from disk','Parses CSV-formatted TEXT directly (no actual file needed) into a data.frame, using the first line as column names','Converts a data.frame into CSV text','Deletes any commas found in the text'],
      correct:1,
      explain:'text = lets you parse CSV content that\'s already a string in R, rather than requiring an actual file on disk — useful for practising with sample data.'
    },
    {
      q:'Once read.csv() has created a data.frame, how does it behave compared to one built with data.frame() by hand?',
      options:['It is a completely different, incompatible type','It behaves exactly like any other data.frame — $, nrow(), filtering with [ ], and every other trick still works','It can only be read, never filtered or modified','It automatically deletes any row with a missing value'],
      correct:1,
      explain:'Once loaded, a CSV-derived data.frame is indistinguishable from one built by hand — the SOURCE of the data doesn\'t change how you work with it.'
    },
    {
      q:'What does head(df, 2) return?',
      options:['The last 2 rows of df','A data.frame containing only the FIRST 2 rows of df','The 2nd column of df','The 2 largest values in df'],
      correct:1,
      explain:'head() previews the first n rows of a data.frame (or vector) — a quick way to check what was loaded without printing everything.'
    },
    {
      q:'Why is it useful that a CSV-loaded data.frame supports the same filtering syntax (df[df$score >= 80, ]) as one built by hand?',
      options:['It isn\'t useful, CSV data needs its own special syntax','It means everything learned about data.frames (Beginner Week 6-7) transfers directly to REAL data files, without learning a new system just because the data came from a file','Filtering only works on data.frames built by hand','CSV files cannot contain numeric columns'],
      correct:1,
      explain:'This is exactly why data.frame is such a useful foundation — once data is loaded into one, it doesn\'t matter whether it came from c(), a CSV file, or anywhere else.'
    }
  ],
  sandboxStarter3:`csv_text <- "name,score,age
Ada,85,11
Ben,62,12
Cy,90,10
Dee,74,11"
df <- read.csv(text = csv_text)
print(nrow(df))
print(mean(df$score))
print(df[df$score >= 80, ])
`,
  stretchChallenge:{
    title:'Load a CSV with a text column and check a filtered count',
    desc:`Create csv_text as "name,house,score\\nAda,Red,85\\nBen,Blue,62\\nCy,Red,90\\nDee,Blue,74". Calculate df
      as read.csv(text = csv_text), then red_house as df[df$house == "Red", ]. Use stopifnot() to confirm that
      nrow(red_house) == 2.`,
    starter:`csv_text <- "name,house,score
Ada,Red,85
Ben,Blue,62
Cy,Red,90
Dee,Blue,74"
# Calculate df, then red_house below
`,
    tests:[
      {type:'assert', expr:'nrow(red_house) == 2', label:'nrow(red_house) equals 2'}
    ]
  }
},
{
  key:'week5', num:5, title:'Functions with Defaults',
  scenarioTag:'Real world: most students pass at 50, but some tests have a stricter pass mark',
  scenario:`Beginner Week 5 wrote functions with every argument required every time. But most calls to a
    pass/fail checker will use the SAME pass mark — R lets a function argument have a DEFAULT value, so you only
    need to override it on the rare occasions it's actually different.`,
  objectives:[
    'Write a function with a default value for one of its arguments',
    'Call that function WITHOUT the optional argument, using the default',
    'Call the SAME function overriding the default with a different value',
    'Combine a default-argument function with sapply() across a whole vector'
  ],
  conceptHtml:`
    <p>Adding <code>= value</code> after a parameter name gives it a DEFAULT — callers can leave it out entirely:</p>
    <pre class="code-block">is_pass &lt;- function(score, threshold = 50) {
  return(score >= threshold)
}
print(is_pass(65))       # TRUE - uses the default threshold of 50
print(is_pass(65, 70))   # FALSE - 70 overrides the default this time</pre>
    <p>This is exactly the same function either way — the default just saves you from repeating
    <code>threshold = 50</code> on every single call where 50 is what you wanted anyway.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">is_pass &lt;- function(score, threshold = 50) {
  return(score >= threshold)
}
print(is_pass(65))</pre>
    <ul>
      <li><code>function(score, threshold = 50)</code> — <code>score</code> has no default, so it's REQUIRED every
        time; <code>threshold = 50</code> gives threshold a default, so it's OPTIONAL.</li>
      <li><code>is_pass(65)</code> — only one argument is given. R fills in <code>threshold = 50</code>
        automatically, since none was provided.</li>
      <li><code>is_pass(65, 70)</code> — providing a SECOND argument overrides the default for just this call —
        the function definition itself never changes.</li>
    </ul>
    <p>The second example follows the same shape, but calls <code>is_pass</code> from INSIDE <code>sapply()</code>
    (Week 1) — the default still applies unless you explicitly wrap it to pass something else.</p>`,
  sandboxStarter:`is_pass <- function(score, threshold = 50) {
  return(score >= threshold)
}
print(is_pass(65))
print(is_pass(65, 70))
`,
  sandboxStarter2:`is_pass <- function(score, threshold = 50) {
  return(score >= threshold)
}
scores <- c(45, 65, 80)
print(sapply(scores, is_pass))
`,
  exercises:[
    {
      title:'Write a function with a default and use it',
      desc:`Define is_pass(score, threshold = 50) returning score >= threshold. Use stopifnot() to confirm that
        is_pass(65) == TRUE — called with just one argument, using the default threshold of 50.`,
      starter:`# Define is_pass below
is_pass <- function(score, threshold = 50) {
  return(score >= threshold)
}
`,
      tests:[{type:'assert', expr:'is_pass(65) == TRUE', label:'is_pass(65) equals TRUE using the default threshold'}]
    },
    {
      title:'Override the default',
      desc:`Using the same is_pass function, use stopifnot() to confirm that is_pass(65, 70) == FALSE — providing
        a second argument overrides the default threshold of 50 with 70.`,
      starter:`is_pass <- function(score, threshold = 50) {
  return(score >= threshold)
}
# Check is_pass(65, 70) below
`,
      tests:[{type:'assert', expr:'is_pass(65, 70) == FALSE', label:'is_pass(65, 70) equals FALSE using the overridden threshold'}]
    },
    {
      title:'Confirm the default applies again',
      desc:`Using the same is_pass function, use stopifnot() to confirm that is_pass(30) == FALSE — 30 is below
        the default threshold of 50.`,
      starter:`is_pass <- function(score, threshold = 50) {
  return(score >= threshold)
}
# Check is_pass(30) below
`,
      tests:[{type:'assert', expr:'is_pass(30) == FALSE', label:'is_pass(30) equals FALSE using the default threshold'}]
    },
    {
      title:'Use the default with sapply across a vector',
      desc:`Using is_pass (given) and a vector scores with the values 45, 65, 80, calculate results as
        sapply(scores, is_pass) (using the default threshold for every value). Use stopifnot() to confirm that
        sum(results) == 2.`,
      starter:`is_pass <- function(score, threshold = 50) {
  return(score >= threshold)
}
scores <- c(45, 65, 80)
# Calculate results below
`,
      tests:[{type:'assert', expr:'sum(results) == 2', label:'sum(results) equals 2 using the default threshold'}]
    },
    {
      title:'Override the threshold inside sapply',
      desc:`Using is_pass and the same scores vector, calculate results_strict as sapply(scores, function(s)
        is_pass(s, 70)) — this time explicitly overriding the threshold to 70 for every value. Use stopifnot() to
        confirm that sum(results_strict) == 1.`,
      starter:`is_pass <- function(score, threshold = 50) {
  return(score >= threshold)
}
scores <- c(45, 65, 80)
# Calculate results_strict below
`,
      tests:[{type:'assert', expr:'sum(results_strict) == 1', label:'sum(results_strict) equals 1 using the overridden threshold'}]
    },
    {
      title:'Write a function with two defaults',
      desc:`Define trip_cost(people, price = 10, discount = 0) returning people * price - discount. Use
        stopifnot() to confirm that trip_cost(4) == 40 — called with just one argument, using BOTH defaults
        (price = 10, discount = 0).`,
      starter:`# Define trip_cost below
trip_cost <- function(people, price = 10, discount = 0) {
  return(people * price - discount)
}
`,
      tests:[{type:'assert', expr:'trip_cost(4) == 40', label:'trip_cost(4) equals 40 using both defaults'}]
    }
  ],
  quiz:[
    {
      q:'What does threshold = 50 mean in function(score, threshold = 50)?',
      options:['threshold must always be exactly 50, no other value is ever allowed','threshold is OPTIONAL — if a caller doesn\'t provide it, R automatically uses 50 instead','This is a syntax error in R','threshold gets multiplied by 50 automatically'],
      correct:1,
      explain:'A default value makes an argument optional — callers can still override it whenever they need something different.'
    },
    {
      q:'After defining is_pass(score, threshold = 50), what happens when you call is_pass(65, 70)?',
      options:['It ignores the 70 and always uses 50','It uses 70 as the threshold for this call, overriding the default — the function definition itself never changes','It causes an error, since threshold already has a default','It changes the default to 70 for all FUTURE calls too'],
      correct:1,
      explain:'Providing a value for an optional argument simply overrides the default for THAT call — the function\'s own default stays 50 for any future call that omits it.'
    },
    {
      q:'Why is sapply(scores, is_pass) able to work even though is_pass technically has two parameters?',
      options:['It can\'t work, this would be an error','sapply() only supplies the FIRST argument (score) for each element; threshold is left to use its default (50) automatically, since sapply never mentions it','sapply() automatically fills threshold with the mean of scores','is_pass secretly ignores its second parameter'],
      correct:1,
      explain:'sapply() just calls the function once per element with that one value as the first argument — any other parameters simply keep their defaults unless you wrap the call yourself.'
    },
    {
      q:'In sapply(scores, function(s) is_pass(s, 70)), what is the purpose of wrapping is_pass in an anonymous function(s) {...}?',
      options:['It has no purpose, this is unnecessary','It lets you explicitly pass 70 as the threshold for every element, since sapply(scores, is_pass) alone has no way to specify a NON-default threshold','It converts is_pass into a different kind of function entirely','It only works with exactly one value in scores'],
      correct:1,
      explain:'Wrapping the call lets you supply BOTH arguments explicitly for each element — this is the standard pattern whenever you need to override a default from inside sapply().'
    }
  ],
  sandboxStarter3:`is_pass <- function(score, threshold = 50) {
  return(score >= threshold)
}
scores <- c(45, 65, 80)
print(sapply(scores, is_pass))
print(sapply(scores, function(s) is_pass(s, 70)))
`,
  stretchChallenge:{
    title:'Override every default at once',
    desc:`Using trip_cost(people, price = 10, discount = 0) (given), use stopifnot() to confirm that
      trip_cost(4, 12, 5) == 43 — overriding BOTH defaults this time (price = 12, discount = 5).`,
    starter:`trip_cost <- function(people, price = 10, discount = 0) {
  return(people * price - discount)
}
# Check trip_cost(4, 12, 5) below
`,
    tests:[
      {type:'assert', expr:'trip_cost(4, 12, 5) == 43', label:'trip_cost(4, 12, 5) equals 43 with both defaults overridden'}
    ]
  }
},
{
  key:'week6', num:6, title:'More Data Frame Moves: order() and New Columns',
  scenarioTag:'Real world: a leaderboard needs sorting, and a report needs an extra column',
  scenario:`A class table is only half useful sitting in its original order — a real report usually needs it
    SORTED (best score first), and often needs a brand-new column computed FROM the existing ones (like a
    pass/fail flag or a grade).`,
  objectives:[
    'Sort a data.frame\'s rows using order()',
    'Sort in DESCENDING order',
    'Add a new column to a data.frame, computed from an existing column',
    'Combine sorting and new columns in one report'
  ],
  conceptHtml:`
    <p><code>order(vector)</code> doesn't sort the vector itself — it returns the POSITIONS that would put it in
    order. Using that inside <code>[ ]</code> reorders the WHOLE data.frame's rows to match:</p>
    <pre class="code-block">students &lt;- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
sorted &lt;- students[order(students$score), ]
print(sorted$name)   # "Ben" "Ada" "Cy" - lowest score first</pre>
    <p>Add <code>decreasing = TRUE</code> to sort the OTHER way (highest first):</p>
    <pre class="code-block">sorted_desc &lt;- students[order(students$score, decreasing = TRUE), ]
print(sorted_desc$name)   # "Cy" "Ada" "Ben" - highest score first</pre>
    <p>Adding a brand-new column is just like creating a variable — but with <code>$</code> in front of a NEW
    name, using an EXISTING column on the right:</p>
    <pre class="code-block">students$pass &lt;- students$score >= 70
print(students$pass)   # TRUE FALSE TRUE</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">students &lt;- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
sorted &lt;- students[order(students$score), ]
print(sorted$name)</pre>
    <ul>
      <li><code>order(students$score)</code> — for scores 85, 62, 90 (in that original ROW order), this returns
        <code>2, 1, 3</code> — "the 2nd row has the smallest score, then the 1st, then the 3rd."</li>
      <li><code>students[order(students$score), ]</code> — using those positions to pick ROWS (remember, the
        comma inside <code>[ ]</code> separates rows from columns, from Beginner Week 7) reorders every column
        together, keeping each student's name matched to their own score.</li>
      <li><code>sorted$name</code> — now reads out in score order, since the WHOLE row moved together, not just
        one column.</li>
    </ul>
    <p>The second example follows the same shape for adding a column: <code>students$pass &lt;- ...</code> creates
    a column called <code>pass</code> that didn't exist before, filled in using the EXISTING <code>score</code>
    column.</p>`,
  sandboxStarter:`students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
sorted <- students[order(students$score), ]
print(sorted$name)
`,
  sandboxStarter2:`students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
students$pass <- students$score >= 70
print(students$pass)
`,
  exercises:[
    {
      title:'Sort ascending by score',
      desc:`Create students as data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90)). Calculate sorted
        as students[order(students$score), ]. Use stopifnot() to confirm that all(sorted$name == c("Ben", "Ada",
        "Cy")) — lowest score first.`,
      starter:`# Create students, then calculate sorted below
students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
`,
      tests:[{type:'assert', expr:'all(sorted$name == c("Ben", "Ada", "Cy"))', label:'sorted$name exactly equals c("Ben", "Ada", "Cy")'}]
    },
    {
      title:'Sort descending by score',
      desc:`Using the same students data.frame, calculate sorted_desc as students[order(students$score,
        decreasing = TRUE), ]. Use stopifnot() to confirm that all(sorted_desc$name == c("Cy", "Ada", "Ben")) —
        highest score first.`,
      starter:`students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
# Calculate sorted_desc below
`,
      tests:[{type:'assert', expr:'all(sorted_desc$name == c("Cy", "Ada", "Ben"))', label:'sorted_desc$name exactly equals c("Cy", "Ada", "Ben")'}]
    },
    {
      title:'Add a pass/fail column',
      desc:`Using the same students data.frame, add a new column: students$pass <- students$score >= 70. Use
        stopifnot() to confirm that sum(students$pass) == 2 — two students (Ada and Cy) pass.`,
      starter:`students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
# Add the pass column below
`,
      tests:[{type:'assert', expr:'sum(students$pass) == 2', label:'sum(students$pass) equals 2'}]
    },
    {
      title:'Add a computed numeric column',
      desc:`Using the same students data.frame, add a new column: students$bonus <- round(students$score * 0.1,
        1). Use stopifnot() to confirm that students$bonus[3] == 9 — Cy's bonus (90 * 0.1 = 9).`,
      starter:`students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
# Add the bonus column below
`,
      tests:[{type:'assert', expr:'students$bonus[3] == 9', label:'students$bonus[3] equals 9'}]
    },
    {
      title:'Combine a new column with sorting',
      desc:`Using the same students data.frame, add students$pass <- students$score >= 70, then calculate sorted
        as students[order(students$score), ]. Use stopifnot() to confirm that sorted$pass[1] == FALSE — the
        lowest-scoring student (Ben) did not pass.`,
      starter:`students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
# Add the pass column, then calculate sorted below
`,
      tests:[{type:'assert', expr:'sorted$pass[1] == FALSE', label:'sorted$pass[1] equals FALSE'}]
    },
    {
      title:'Add a three-way grade column',
      desc:`Using the same students data.frame, add students$grade <- ifelse(students$score >= 90, "A",
        ifelse(students$score >= 70, "B", "C")). Use stopifnot() to confirm that sum(students$grade == "B") == 1
        — only Ada (85) falls in the "B" band.`,
      starter:`students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
# Add the grade column below
`,
      tests:[{type:'assert', expr:'sum(students$grade == "B") == 1', label:'sum(students$grade == "B") equals 1'}]
    }
  ],
  quiz:[
    {
      q:'What does order(students$score) actually return?',
      options:['The scores themselves, sorted','The ROW POSITIONS that would put the scores in ascending order — e.g. 2, 1, 3, not the scores 62, 85, 90 themselves','A TRUE/FALSE vector','The names of the students, sorted'],
      correct:1,
      explain:'order() returns positions (indices), not the sorted values themselves — that\'s exactly what lets you reorder an ENTIRE data.frame\'s rows by using those positions inside [ ].'
    },
    {
      q:'Why does students[order(students$score), ] reorder the WHOLE data.frame, not just the score column?',
      options:['It only reorders the score column, this is a common misconception','Because the comma inside [ ] selects ROWS, and reordering rows moves every column together, keeping each student\'s name matched to their own score','It reorders columns, not rows','It creates a brand new data.frame with random values'],
      correct:1,
      explain:'Row-selection with [rows, ] (Beginner Week 7) applies to the ENTIRE row, so every column moves together — no student ends up mismatched with someone else\'s score.'
    },
    {
      q:'What does students$pass <- students$score >= 70 do?',
      options:['It deletes the score column','It creates a brand NEW column called pass, filled in using the EXISTING score column — the data.frame now has one more column than before','It only works if pass already exists as a column','It changes every value in score to TRUE or FALSE'],
      correct:1,
      explain:'Assigning to a NEW $column name (one that didn\'t exist before) adds it to the data.frame, computed from whatever is on the right-hand side.'
    },
    {
      q:'Why does sorted$pass[1] == FALSE after sorting ascending by score?',
      options:['It\'s a coincidence with no real explanation','Because sorted was built by reordering ALL of students\' columns together, so the FIRST row after sorting is genuinely the lowest-scoring student (Ben), whose pass value is correctly FALSE','pass is always FALSE for the first row of any data.frame','Sorting resets every column to its default value'],
      correct:1,
      explain:'Because row-reordering keeps every column together, whatever ends up in row 1 after sorting is a real, complete row — including whichever pass/fail value that student actually earned.'
    }
  ],
  sandboxStarter3:`students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
students$pass <- students$score >= 70
students$grade <- ifelse(students$score >= 90, "A", ifelse(students$score >= 70, "B", "C"))
sorted_desc <- students[order(students$score, decreasing = TRUE), ]
print(sorted_desc)
`,
  stretchChallenge:{
    title:'Check the full sorted order after adding a grade column',
    desc:`Using the same students data.frame, add students$grade <- ifelse(students$score >= 90, "A",
      ifelse(students$score >= 70, "B", "C")), then calculate sorted as students[order(students$score,
      decreasing = TRUE), ]. Use stopifnot() to confirm that all(sorted$grade == c("A", "B", "C")) — Cy (A), Ada
      (B), Ben (C), in that highest-to-lowest order.`,
    starter:`students <- data.frame(name = c("Ada", "Ben", "Cy"), score = c(85, 62, 90))
# Add the grade column, then calculate sorted below
`,
    tests:[
      {type:'assert', expr:'all(sorted$grade == c("A", "B", "C"))', label:'sorted$grade exactly equals c("A", "B", "C")'}
    ]
  }
},
{
  key:'week7', num:7, title:'Group Summaries: aggregate()',
  scenarioTag:'Real world: what\'s the average score for EACH house, not the whole class at once?',
  scenario:`mean(students$score) gives ONE number for the whole class. But a real report usually wants it broken
    down BY GROUP — the average for Red house, separately from the average for Blue house. aggregate() is R's
    tool for exactly this: "summarise Y, grouped by X."`,
  objectives:[
    'Use aggregate() to compute one summary value PER GROUP',
    'Read the formula syntax value ~ group used by aggregate()',
    'Swap FUN=mean for other summary functions (sum, length, max)',
    'Pull a specific group\'s result out of an aggregate() table'
  ],
  conceptHtml:`
    <p><code>aggregate(value ~ group, data = df, FUN = function)</code> splits <code>df</code> into groups
    (based on the <code>group</code> column), and applies <code>FUN</code> to the <code>value</code> column
    WITHIN each group separately:</p>
    <pre class="code-block">students &lt;- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
house_avg &lt;- aggregate(score ~ house, data = students, FUN = mean)
print(house_avg)
#   house    score
# 1  Blue 68.00000
# 2   Red 76.66667</pre>
    <p>The result is a NEW, smaller data.frame — one row per group, not one row per original student.</p>
    <p>Swap <code>FUN = mean</code> for a different function to get a different summary — the GROUPING stays the
    same, only the calculation changes:</p>
    <pre class="code-block">house_count &lt;- aggregate(score ~ house, data = students, FUN = length)
print(house_count)   # how many students are in each house</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">students &lt;- data.frame(house = c("Red", "Blue", "Red"), score = c(85, 62, 90))
house_avg &lt;- aggregate(score ~ house, data = students, FUN = mean)
print(house_avg$house)</pre>
    <ul>
      <li><code>score ~ house</code> — read this as "score, BY house" — the <code>~</code> (tilde) separates
        WHAT to summarise (score) from WHAT to group by (house).</li>
      <li><code>data = students</code> — tells aggregate() which data.frame these column names refer to.</li>
      <li><code>FUN = mean</code> — the function applied to EACH group's scores separately — swap this for
        <code>sum</code>, <code>max</code>, <code>length</code>, or any function that takes a vector.</li>
      <li><code>house_avg$house</code> — the result has its OWN <code>house</code> and <code>score</code>
        columns, exactly like any other data.frame from Beginner Week 6.</li>
    </ul>`,
  sandboxStarter:`students <- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
house_avg <- aggregate(score ~ house, data = students, FUN = mean)
print(house_avg)
`,
  sandboxStarter2:`students <- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
house_count <- aggregate(score ~ house, data = students, FUN = length)
print(house_count)
`,
  exercises:[
    {
      title:'Group into a summary table',
      desc:`Create students as data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90,
        74, 55)). Calculate house_avg as aggregate(score ~ house, data = students, FUN = mean). Use stopifnot()
        to confirm that nrow(house_avg) == 2 — one row per house, not one row per student.`,
      starter:`# Create students, then calculate house_avg below
students <- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
`,
      tests:[{type:'assert', expr:'nrow(house_avg) == 2', label:'nrow(house_avg) equals 2'}]
    },
    {
      title:'Check one group\'s average',
      desc:`Using the same house_avg, use stopifnot() to confirm that round(house_avg$score[house_avg$house ==
        "Red"]) == 77 — Red house's average score (85, 90, 55) rounds to 77.`,
      starter:`students <- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
house_avg <- aggregate(score ~ house, data = students, FUN = mean)
# Check Red's average below
`,
      tests:[{type:'assert', expr:'round(house_avg$score[house_avg$house == "Red"]) == 77', label:'Red house\'s average correctly rounds to 77'}]
    },
    {
      title:'Check the other group\'s average',
      desc:`Using the same house_avg, use stopifnot() to confirm that house_avg$score[house_avg$house == "Blue"]
        == 68 — Blue house's average score (62, 74).`,
      starter:`students <- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
house_avg <- aggregate(score ~ house, data = students, FUN = mean)
# Check Blue's average below
`,
      tests:[{type:'assert', expr:'house_avg$score[house_avg$house == "Blue"] == 68', label:'Blue house\'s average correctly equals 68'}]
    },
    {
      title:'Swap mean for sum',
      desc:`Using the same students data.frame, calculate house_sum as aggregate(score ~ house, data = students,
        FUN = sum). Use stopifnot() to confirm that house_sum$score[house_sum$house == "Red"] == 230.`,
      starter:`students <- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
# Calculate house_sum below
`,
      tests:[{type:'assert', expr:'house_sum$score[house_sum$house == "Red"] == 230', label:'house_sum for Red correctly equals 230'}]
    },
    {
      title:'Count students per group',
      desc:`Using the same students data.frame, calculate house_count as aggregate(score ~ house, data =
        students, FUN = length). Use stopifnot() to confirm that house_count$score[house_count$house == "Red"]
        == 3 — three students are in Red house.`,
      starter:`students <- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
# Calculate house_count below
`,
      tests:[{type:'assert', expr:'house_count$score[house_count$house == "Red"] == 3', label:'house_count for Red correctly equals 3'}]
    },
    {
      title:'Find the top score per group',
      desc:`Using the same students data.frame, calculate house_max as aggregate(score ~ house, data = students,
        FUN = max). Use stopifnot() to confirm that house_max$score[house_max$house == "Blue"] == 74.`,
      starter:`students <- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
# Calculate house_max below
`,
      tests:[{type:'assert', expr:'house_max$score[house_max$house == "Blue"] == 74', label:'house_max for Blue correctly equals 74'}]
    }
  ],
  quiz:[
    {
      q:'What does the formula score ~ house mean inside aggregate()?',
      options:['Divide score by house','Summarise the score column, GROUPED BY the house column — read the ~ as "by"','Compare score to house for equality','It has no special meaning'],
      correct:1,
      explain:'The ~ (tilde) formula syntax means "score, broken down by house" — exactly what you\'d say describing the summary out loud.'
    },
    {
      q:'How many rows does aggregate(score ~ house, data = students, FUN = mean) return, if students has 3 different house values?',
      options:['Always exactly the same number of rows as students','One row per DISTINCT house value (3 rows), regardless of how many students are in each','Exactly 1 row, always','It depends on the FUN used, not on the number of houses'],
      correct:1,
      explain:'aggregate() collapses each group down to ONE summary row — the row count matches the number of distinct groups, not the number of original rows.'
    },
    {
      q:'What changes if you swap FUN = mean for FUN = length in the exact same aggregate() call?',
      options:['Nothing changes at all','The GROUPING stays identical (still one row per house), but now each group\'s value is a COUNT of students instead of an average score','It groups by a completely different column','It causes an error, since length() cannot be used with aggregate()'],
      correct:1,
      explain:'FUN is just the function applied WITHIN each group — swapping it changes what\'s calculated, not how the data is split into groups.'
    },
    {
      q:'Why does house_avg$score[house_avg$house == "Red"] correctly pull out just Red\'s average?',
      options:['It doesn\'t work, this is invalid R syntax','house_avg$house == "Red" builds a TRUE/FALSE vector marking which row(s) are Red, and house_avg$score[...] uses that to filter down to just that row\'s score — the same indexing pattern from Beginner Week 7','It always returns the first row no matter what','It searches every data.frame in the session for a house called Red'],
      correct:1,
      explain:'This is exactly the same logical-indexing pattern used throughout this course — a TRUE/FALSE condition inside [ ] filters down to matching rows/values.'
    }
  ],
  sandboxStarter3:`students <- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
house_avg <- aggregate(score ~ house, data = students, FUN = mean)
house_count <- aggregate(score ~ house, data = students, FUN = length)
print(house_avg)
print(house_count)
`,
  stretchChallenge:{
    title:'Check every group\'s count at once',
    desc:`Using students (given), calculate house_count as aggregate(score ~ house, data = students, FUN =
      length), then sorted_count as house_count[order(house_count$house), ]. Use stopifnot() to confirm that
      all(sorted_count$score == c(2, 3)) — Blue (2 students) comes before Red (3 students) alphabetically.`,
    starter:`students <- data.frame(house = c("Red", "Blue", "Red", "Blue", "Red"), score = c(85, 62, 90, 74, 55))
# Calculate house_count, then sorted_count below
`,
    tests:[
      {type:'assert', expr:'all(sorted_count$score == c(2, 3))', label:'sorted_count$score exactly equals c(2, 3)'}
    ]
  }
},
{
  key:'week8', num:8, title:'Text Patterns: grepl and Basic Regex',
  scenarioTag:'Real world: which words in a whole vector contain a pattern, not just one word',
  scenario:`Beginner Week 8 checked properties of ONE piece of text at a time. grepl() checks a WHOLE vector of
    text at once, returning TRUE/FALSE for each element — and with a couple of extra symbols, you can check
    "starts with" or "ends with", not just "contains anywhere".`,
  objectives:[
    'Use grepl() to check which elements of a vector contain a pattern',
    'Use ^ to check whether text STARTS WITH a pattern',
    'Use $ to check whether text ENDS WITH a pattern',
    'Combine grepl() with row-filtering and case-insensitive matching'
  ],
  conceptHtml:`
    <p><code>grepl(pattern, vector)</code> checks EVERY element of <code>vector</code> for <code>pattern</code>,
    returning a TRUE/FALSE for each one:</p>
    <pre class="code-block">words &lt;- c("cat", "caterpillar", "dog", "scatter")
print(grepl("cat", words))   # TRUE TRUE FALSE TRUE - "scatter" contains "cat" too (s-CAT-ter)</pre>
    <p>Two special symbols make the pattern more precise: <code>^</code> means "the text must START with this",
    and <code>$</code> means "the text must END with this":</p>
    <pre class="code-block">print(grepl("^cat", words))   # TRUE TRUE FALSE FALSE - "scatter" no longer counts, it doesn't START with cat
print(grepl("er$", words))   # FALSE FALSE FALSE TRUE - only "scatter" ENDS with "er"</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">words &lt;- c("cat", "caterpillar", "dog", "scatter")
matches &lt;- grepl("cat", words)
print(sum(matches))</pre>
    <ul>
      <li><code>grepl("cat", words)</code> — returns a TRUE/FALSE vector, one value per element of
        <code>words</code>, marking whether that element CONTAINS "cat" anywhere.</li>
      <li><code>sum(matches)</code> — exactly like Week 2's ifelse()-based counting, summing a TRUE/FALSE vector
        counts how many were TRUE.</li>
    </ul>
    <p>The second example follows the same shape but adds <code>^</code> to the pattern — a small change that
    makes the check strictly more specific ("contains" becomes "starts with").</p>`,
  sandboxStarter:`words <- c("cat", "caterpillar", "dog", "scatter")
matches <- grepl("cat", words)
print(sum(matches))
`,
  sandboxStarter2:`words <- c("cat", "caterpillar", "dog", "scatter")
starts_with_cat <- grepl("^cat", words)
print(starts_with_cat)
`,
  exercises:[
    {
      title:'Find words containing a pattern',
      desc:`Create words as c("cat", "caterpillar", "dog", "scatter", "catalog"). Calculate matches as
        grepl("cat", words). Use stopifnot() to confirm that sum(matches) == 4.`,
      starter:`# Create words, then calculate matches below
words <- c("cat", "caterpillar", "dog", "scatter", "catalog")
`,
      tests:[{type:'assert', expr:'sum(matches) == 4', label:'sum(matches) equals 4'}]
    },
    {
      title:'Find words that START WITH a pattern',
      desc:`Using the same words vector, calculate starts as grepl("^cat", words). Use stopifnot() to confirm
        that sum(starts) == 3 — "scatter" contains "cat" but does NOT start with it, so it's correctly excluded.`,
      starter:`words <- c("cat", "caterpillar", "dog", "scatter", "catalog")
# Calculate starts below
`,
      tests:[{type:'assert', expr:'sum(starts) == 3', label:'sum(starts) equals 3'}]
    },
    {
      title:'Find words that END WITH a pattern',
      desc:`Using the same words vector, calculate ends as grepl("er$", words). Use stopifnot() to confirm that
        sum(ends) == 1 — only "scatter" ends with "er".`,
      starter:`words <- c("cat", "caterpillar", "dog", "scatter", "catalog")
# Calculate ends below
`,
      tests:[{type:'assert', expr:'sum(ends) == 1', label:'sum(ends) equals 1'}]
    },
    {
      title:'Count a different pattern',
      desc:`Using the same words vector, calculate og_matches as grepl("og", words). Use stopifnot() to confirm
        that sum(og_matches) == 2 — "dog" and "catalog" both contain "og".`,
      starter:`words <- c("cat", "caterpillar", "dog", "scatter", "catalog")
# Calculate og_matches below
`,
      tests:[{type:'assert', expr:'sum(og_matches) == 2', label:'sum(og_matches) equals 2'}]
    },
    {
      title:'Filter a data.frame using grepl',
      desc:`Create animals as data.frame(name = words, length = c(3, 11, 3, 7, 7)) (using the same words
        vector). Calculate matches_df as animals[grepl("^cat", animals$name), ]. Use stopifnot() to confirm that
        nrow(matches_df) == 3.`,
      starter:`words <- c("cat", "caterpillar", "dog", "scatter", "catalog")
animals <- data.frame(name = words, length = c(3, 11, 3, 7, 7))
# Calculate matches_df below
`,
      tests:[{type:'assert', expr:'nrow(matches_df) == 3', label:'nrow(matches_df) equals 3'}]
    },
    {
      title:'Match regardless of capitalisation',
      desc:`Create mixed as c("Cat", "DOG", "Catalog"). Calculate case_matches as grepl("cat", mixed, ignore.case
        = TRUE). Use stopifnot() to confirm that sum(case_matches) == 2 — "Cat" and "Catalog" both match "cat"
        once capitalisation is ignored.`,
      starter:`# Create mixed, then calculate case_matches below
mixed <- c("Cat", "DOG", "Catalog")
`,
      tests:[{type:'assert', expr:'sum(case_matches) == 2', label:'sum(case_matches) equals 2'}]
    }
  ],
  quiz:[
    {
      q:'What does grepl("cat", words) return?',
      options:['The actual matching words, as text','A TRUE/FALSE vector — one value per element of words, marking whether each one contains "cat" anywhere','The number of matches found, as one single number','An error, since grepl only works on one piece of text at a time'],
      correct:1,
      explain:'grepl() checks every element of the vector and returns a matching TRUE/FALSE vector — exactly the shape needed for counting with sum() or filtering with [ ].'
    },
    {
      q:'Why does grepl("^cat", words) match fewer words than grepl("cat", words), for the same words vector?',
      options:['^ is a typo and has no real effect','^ anchors the pattern to the START of the text — a word like "scatter" contains "cat" in the middle, but doesn\'t START with it, so ^ correctly excludes it','^ makes the match case-insensitive','^ only works on numbers, not text'],
      correct:1,
      explain:'^ is a real regex anchor meaning "the match must begin right here" — it\'s what turns "contains" into the stricter "starts with".'
    },
    {
      q:'What does the $ symbol mean at the end of a grepl() pattern like "er$"?',
      options:['It means "the price is in dollars"','It anchors the match to the END of the text — the pattern must be the LAST characters, not just appear somewhere inside','It has no special meaning in R','It means the pattern must appear exactly once'],
      correct:1,
      explain:'$ is the end-of-text anchor — combined with ^, these two symbols let you check "starts with" and "ends with" precisely, not just "contains anywhere".'
    },
    {
      q:'Why does animals[grepl("^cat", animals$name), ] correctly filter the data.frame\'s ROWS, not just check the name column?',
      options:['It doesn\'t actually filter rows, only the name column changes','grepl() produces a TRUE/FALSE vector matching animals$name\'s length, and putting that inside [ ] before the comma selects matching ROWS — the same row-filtering pattern from Beginner Week 7, just using a text condition instead of a numeric one','grepl() can only be used on numeric columns','It selects columns, not rows'],
      correct:1,
      explain:'This is the exact same [rows, ] filtering pattern used throughout this course — the only difference here is that the TRUE/FALSE condition comes from grepl() instead of a numeric comparison.'
    }
  ],
  sandboxStarter3:`words <- c("cat", "caterpillar", "dog", "scatter", "catalog")
animals <- data.frame(name = words, length = c(3, 11, 3, 7, 7))
matches_df <- animals[grepl("^cat", animals$name), ]
print(matches_df)
print(sum(grepl("er$", words)))
`,
  stretchChallenge:{
    title:'Combine start and end anchors',
    desc:`Using words <- c("cat", "caterpillar", "dog", "scatter", "catalog"), calculate cat_start_count as
      sum(grepl("^cat", words)) and total_count as length(words). Use stopifnot() to confirm that
      cat_start_count == 3 && total_count == 5.`,
    starter:`words <- c("cat", "caterpillar", "dog", "scatter", "catalog")
# Calculate cat_start_count and total_count below
`,
    tests:[
      {type:'assert', expr:'cat_start_count == 3 && total_count == 5', label:'cat_start_count and total_count are both correct'}
    ]
  }
},
{
  key:'week9', num:9, title:'Lists: When a Vector Isn\'t Enough',
  scenarioTag:'Real world: bundling DIFFERENT types of information about one thing together',
  scenario:`Every data structure so far — vectors, factors, data.frames — holds ONE type of thing per column/
    slot. But one student really has a name (text), several scores (numbers), and a pass/fail flag (logical) all
    at once. A list() bundles all of that together under one name, whatever the mix of types.`,
  objectives:[
    'Create a list() that bundles together values of different types',
    'Access a named element of a list using $',
    'Use names() and length() to inspect a list\'s structure',
    'Add a new named element to a list, and combine a list\'s contents into a summary with paste()'
  ],
  conceptHtml:`
    <p>A vector like <code>c(85, 90, 78)</code> can only hold ONE type of value. A <code>list()</code> can hold
    ANYTHING — text, numbers, TRUE/FALSE, even another vector — each piece given its own name:</p>
    <pre class="code-block">student &lt;- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
print(student$name)     # "Ada"
print(student$scores)   # 85 90 78</pre>
    <p><code>$</code> pulls out one named piece — exactly the same <code>$</code> you've already used on
    data.frames since Beginner Week 6, just applied to a list instead of a table.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">student &lt;- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
print(student$name)
print(student$scores)</pre>
    <ul>
      <li><code>list(name = ..., scores = ..., passed = ...)</code> — builds one list with three named pieces,
        mixing a character value, a numeric vector, and a logical value in a single object.</li>
      <li><code>student$name</code> — reaches inside the list and pulls out just the piece named
        <code>name</code>, the same way <code>df$score</code> pulls out one column of a data.frame.</li>
    </ul>
    <p>Two more useful checks: <code>names(student)</code> lists every element's name, and
    <code>length(student)</code> counts how many named elements the list has — not the length of any vector
    inside it.</p>`,
  sandboxStarter:`student <- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
print(student$name)
print(student$scores)
`,
  sandboxStarter2:`student <- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
print(names(student))
print(length(student))
`,
  exercises:[
    {
      title:'Access a named element',
      desc:`Create student as list(name = "Ada", scores = c(85, 90, 78), passed = TRUE). Calculate student_name
        as student$name. Use stopifnot() to confirm that student_name == "Ada".`,
      starter:`# Create student, then calculate student_name below
student <- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
`,
      tests:[{type:'assert', expr:'student_name == "Ada"', label:'student_name equals "Ada"'}]
    },
    {
      title:'Summarize a numeric element inside a list',
      desc:`Using the same student, calculate avg_score as round(mean(student$scores)). Use stopifnot() to
        confirm that avg_score == 84 — the average of 85, 90, and 78, rounded.`,
      starter:`student <- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
# Calculate avg_score below
`,
      tests:[{type:'assert', expr:'avg_score == 84', label:'avg_score equals 84'}]
    },
    {
      title:'Check a logical element',
      desc:`Using the same student, calculate passed_flag as student$passed. Use stopifnot() to confirm that
        passed_flag == TRUE.`,
      starter:`student <- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
# Calculate passed_flag below
`,
      tests:[{type:'assert', expr:'passed_flag == TRUE', label:'passed_flag equals TRUE'}]
    },
    {
      title:'List every element\'s name',
      desc:`Using the same student, calculate student_fields as names(student). Use stopifnot() to confirm that
        all(student_fields == c("name", "scores", "passed")) — the three names, in the order they were created.`,
      starter:`student <- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
# Calculate student_fields below
`,
      tests:[{type:'assert', expr:'all(student_fields == c("name", "scores", "passed"))', label:'student_fields exactly equals c("name", "scores", "passed")'}]
    },
    {
      title:'Add a new element to a list',
      desc:`Using the same student, add a new element by running student$age <- 12. Then calculate list_length as
        length(student). Use stopifnot() to confirm that list_length == 4 — the list started with 3 named
        elements, and now has 4.`,
      starter:`student <- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
# Add student$age, then calculate list_length below
`,
      tests:[{type:'assert', expr:'list_length == 4', label:'list_length equals 4'}]
    },
    {
      title:'Combine a list\'s contents into a summary',
      desc:`Using the same student (without the age addition), calculate summary as paste(student$name, "scored
        an average of", round(mean(student$scores))). Use stopifnot() to confirm that summary == "Ada scored an
        average of 84".`,
      starter:`student <- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
# Calculate summary below
`,
      tests:[{type:'assert', expr:'summary == "Ada scored an average of 84"', label:'summary exactly equals "Ada scored an average of 84"'}]
    }
  ],
  quiz:[
    {
      q:'What can a list() hold that a vector c() cannot?',
      options:['Lists can only hold numbers, same as vectors','A mix of DIFFERENT types together — text, a numeric vector, TRUE/FALSE — all bundled into one object','Lists can only hold one single value','There is no real difference between the two'],
      correct:1,
      explain:'A vector forces every element to the same type; a list has no such restriction — that\'s exactly why it fits "one student\'s name, scores, and pass flag" so naturally.'
    },
    {
      q:'What does student$scores return, if student <- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)?',
      options:['The word "scores", as text','The numeric vector c(85, 90, 78) — the whole piece stored under that name','Just the number 85','An error, since $ only works on data.frames'],
      correct:1,
      explain:'$ reaches into the list and returns whatever was stored under that name — here, that\'s a whole numeric vector, not just one number.'
    },
    {
      q:'What does names(student) return?',
      options:['The values stored inside the list','A character vector of the list\'s element NAMES, e.g. c("name", "scores", "passed")','The number of elements in the list','Nothing — names() only works on data.frames'],
      correct:1,
      explain:'names() lists what each piece is CALLED, not what it contains — length() is the one that counts how many pieces there are.'
    },
    {
      q:'Why does length(student) become 4 after running student$age <- 12, if student started with 3 named elements?',
      options:['It doesn\'t change — length() always returns 3 for this list','Assigning to a NEW name (student$age) inside a list adds a brand new named element, so the list now has one more piece than before','age overwrites the existing name element','length() counts something unrelated to the number of elements'],
      correct:1,
      explain:'Just like adding a new column to a data.frame with df$new <- ..., assigning to a list element that doesn\'t exist yet CREATES it — growing the list by one.'
    }
  ],
  sandboxStarter3:`student <- list(name = "Ada", scores = c(85, 90, 78), passed = TRUE)
summary <- paste(student$name, "scored an average of", round(mean(student$scores)))
print(summary)
print(length(student))
`,
  stretchChallenge:{
    title:'Build a list from scratch and summarize it',
    desc:`Create classmate as list(name = "Ben", scores = c(60, 72, 68), passed = FALSE). Calculate ben_summary as
      paste(classmate$name, "averaged", round(mean(classmate$scores)), "and passed:", classmate$passed). Use
      stopifnot() to confirm that ben_summary == "Ben averaged 67 and passed: FALSE".`,
    starter:`# Create classmate, then calculate ben_summary below
`,
    tests:[
      {type:'assert', expr:'ben_summary == "Ben averaged 67 and passed: FALSE"', label:'ben_summary exactly matches the expected text'}
    ]
  }
}
];

const R_INTERMEDIATE_MP1 = {
  key:'mp1',
  title:'Load and Summarize the Class Roster',
  intro:`Three doors, combining all four weeks: load a real class roster from CSV text and check its shape
    (Week 4), turn its house column into a factor (Week 3), label pass/fail with ifelse() (Week 2), then use
    sapply() to summarise scores per house without writing a single loop (Week 1).`,
  fixtureNote:`All three doors build on this same roster:`,
  fixtureCode:`csv_text <- "name,house,score
Ada,Red,85
Ben,Blue,62
Cy,Red,45
Dee,Blue,90
Eve,Red,55"`,
  doors:[
    {
      key:'a', title:'Door 1 — Load the roster and check its shape',
      desc:`Using read.csv and factor (Weeks 4 and 3), calculate df as read.csv(text = csv_text), then houses as
        factor(df$house, levels = c("Red", "Blue")). Calculate row_count as nrow(df) and house_levels as
        levels(houses). Use stopifnot() to confirm that row_count == 5 && all(house_levels == c("Red", "Blue")).`,
      starter:`csv_text <- "name,house,score
Ada,Red,85
Ben,Blue,62
Cy,Red,45
Dee,Blue,90
Eve,Red,55"
# Calculate df, houses, row_count, and house_levels below
`,
      tests:[
        {type:'assert', expr:'row_count == 5 && all(house_levels == c("Red", "Blue"))', label:'row_count and house_levels are both correct'}
      ]
    },
    {
      key:'b', title:'Door 2 — Label pass/fail, then count passes per house',
      desc:`Using ifelse and sapply (Weeks 2 and 1), calculate results as ifelse(df$score >= 50, "Pass", "Fail"),
        then house_pass_counts as sapply(c("Red", "Blue"), function(h) sum(df$house == h & results == "Pass")).
        Use stopifnot() to confirm that house_pass_counts[["Red"]] == 2 && house_pass_counts[["Blue"]] == 2.`,
      starter:`csv_text <- "name,house,score
Ada,Red,85
Ben,Blue,62
Cy,Red,45
Dee,Blue,90
Eve,Red,55"
df <- read.csv(text = csv_text)
# Calculate results, then house_pass_counts below
`,
      tests:[
        {type:'assert', expr:'house_pass_counts[["Red"]] == 2 && house_pass_counts[["Blue"]] == 2', label:'house_pass_counts is correct for both houses'}
      ]
    },
    {
      key:'c', title:'Door 3 — Summarise average score per house with sapply',
      desc:`Using sapply (Week 1), calculate avg_by_house as sapply(c("Red", "Blue"), function(h)
        mean(df$score[df$house == h])). Use stopifnot() to confirm that round(avg_by_house[["Red"]]) == 62 &&
        round(avg_by_house[["Blue"]]) == 76.`,
      starter:`csv_text <- "name,house,score
Ada,Red,85
Ben,Blue,62
Cy,Red,45
Dee,Blue,90
Eve,Red,55"
df <- read.csv(text = csv_text)
# Calculate avg_by_house below
`,
      tests:[
        {type:'assert', expr:'round(avg_by_house[["Red"]]) == 62 && round(avg_by_house[["Blue"]]) == 76', label:'avg_by_house is correct for both houses'}
      ]
    }
  ]
};

const R_INTERMEDIATE_MP2 = {
  key:'mp2',
  title:'Build the Class Roster Report Tool',
  intro:`Three doors, combining all nine Intermediate weeks: load and label a roster with a default-argument
    function (Weeks 4, 5, 1, 2), sort and summarise it (Weeks 6, 7), then flag names with a text pattern and pull
    it all together into one list-based report (Weeks 8, 9).`,
  fixtureNote:`All three doors build on this same roster:`,
  fixtureCode:`csv_text <- "name,house,score
Ada,Red,85
Ben,Blue,62
Cy,Red,45
Dee,Blue,90
Eve,Red,55
Fay,Blue,38"`,
  doors:[
    {
      key:'a', title:'Door 1 — Load the roster and label pass/fail',
      desc:`Using read.csv (Week 4), calculate df as read.csv(text = csv_text). Write is_pass as
        function(score, threshold = 50) score >= threshold (Week 5). Calculate results as sapply(df$score,
        is_pass) (Week 1), then labels as ifelse(results, "Pass", "Fail") (Week 2). Calculate pass_count as
        sum(results). Use stopifnot() to confirm that pass_count == 4 && labels[3] == "Fail" — Cy (row 3) scored
        45, below the default threshold of 50.`,
      starter:`csv_text <- "name,house,score
Ada,Red,85
Ben,Blue,62
Cy,Red,45
Dee,Blue,90
Eve,Red,55
Fay,Blue,38"
# Calculate df, is_pass, results, labels, and pass_count below
`,
      tests:[
        {type:'assert', expr:'pass_count == 4 && labels[3] == "Fail"', label:'pass_count and labels[3] are both correct'}
      ]
    },
    {
      key:'b', title:'Door 2 — Sort by score and summarise per house',
      desc:`Using order and aggregate (Weeks 6 and 7), calculate sorted_df as df[order(-df$score), ] and
        top_scorer as sorted_df$name[1]. Calculate house_avg as aggregate(score ~ house, data = df, FUN = mean).
        Use stopifnot() to confirm that top_scorer == "Dee" && round(house_avg$score[house_avg$house == "Red"])
        == 62 — Dee's score of 90 is the highest, and Red house's average (85, 45, 55) rounds to 62.`,
      starter:`csv_text <- "name,house,score
Ada,Red,85
Ben,Blue,62
Cy,Red,45
Dee,Blue,90
Eve,Red,55
Fay,Blue,38"
df <- read.csv(text = csv_text)
# Calculate sorted_df, top_scorer, and house_avg below
`,
      tests:[
        {type:'assert', expr:'top_scorer == "Dee" && round(house_avg$score[house_avg$house == "Red"]) == 62', label:'top_scorer and house_avg are both correct'}
      ]
    },
    {
      key:'c', title:'Door 3 — Flag a text pattern and build the final report',
      desc:`Using grepl and list (Weeks 8 and 9), calculate early_names_count as sum(grepl("^[A-C]", df$name)) —
        names starting with A, B, or C. Build report as list(red_avg = round(mean(df$score[df$house == "Red"])),
        blue_avg = round(mean(df$score[df$house == "Blue"])), early_count = early_names_count). Calculate
        final_line as paste("Red avg:", report$red_avg, "| Blue avg:", report$blue_avg, "| Early names:",
        report$early_count). Use stopifnot() to confirm that final_line == "Red avg: 62 | Blue avg: 63 | Early
        names: 3".`,
      starter:`csv_text <- "name,house,score
Ada,Red,85
Ben,Blue,62
Cy,Red,45
Dee,Blue,90
Eve,Red,55
Fay,Blue,38"
df <- read.csv(text = csv_text)
# Calculate early_names_count, report, and final_line below
`,
      tests:[
        {type:'assert', expr:'final_line == "Red avg: 62 | Blue avg: 63 | Early names: 3"', label:'final_line exactly matches the expected report text'}
      ]
    }
  ]
};

const R_ADVANCED_WEEKS = [
{
  key:'week1', num:1, title:'Cross-Tabulation: table()',
  scenarioTag:'Real world: counting how often each category shows up, and how two categories overlap',
  scenario:`Intermediate Week 3 turned a text column into a factor with fixed categories. table() takes that
    one step further — it counts how many times each category appears, and can even cross-tabulate TWO
    categories together to show how they overlap, all in one line.`,
  objectives:[
    'Use table() to count occurrences of each value in a vector',
    'Use table() with TWO vectors to build a cross-tabulation',
    'Access a specific count from a table using [] and [ , ]',
    'Use sum() and names() to inspect a table\'s totals and categories'
  ],
  conceptHtml:`
    <p><code>table(x)</code> counts how many times each unique value in <code>x</code> appears:</p>
    <pre class="code-block">house &lt;- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
print(table(house))   # Blue: 3   Red: 3</pre>
    <p>Give <code>table()</code> TWO vectors and it builds a cross-tabulation — a small grid counting every
    combination of the two:</p>
    <pre class="code-block">pass &lt;- c("Pass", "Pass", "Fail", "Pass", "Pass", "Fail")
cross_table &lt;- table(house, pass)
print(cross_table)
#       pass
# house  Fail Pass
#  Blue     1    2
#  Red      1    2</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">house &lt;- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
house_table &lt;- table(house)
print(house_table[["Red"]])</pre>
    <ul>
      <li><code>table(house)</code> — builds a named count for every distinct value in <code>house</code>, the
        same way <code>aggregate()</code> built one row per group in Intermediate Week 7.</li>
      <li><code>house_table[["Red"]]</code> — pulls out just the Red count, using the same <code>[[ ]]</code>
        named-access pattern from Intermediate Week 9's lists.</li>
    </ul>
    <p>For the two-way version, <code>cross_table["Red", "Pass"]</code> reaches into the grid using
    <code>[row, column]</code> — the same <code>[ , ]</code> pattern used for data.frames since Beginner Week 7,
    just applied to a table instead.</p>`,
  sandboxStarter:`house <- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
house_table <- table(house)
print(house_table[["Red"]])
`,
  sandboxStarter2:`house <- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
pass <- c("Pass", "Pass", "Fail", "Pass", "Pass", "Fail")
cross_table <- table(house, pass)
print(cross_table["Red", "Pass"])
`,
  exercises:[
    {
      title:'Count one category',
      desc:`Create house as c("Red", "Blue", "Red", "Blue", "Red", "Blue"). Calculate house_table as
        table(house), then count_red as house_table[["Red"]]. Use stopifnot() to confirm that count_red == 3.`,
      starter:`# Create house, then calculate house_table and count_red below
house <- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
`,
      tests:[{type:'assert', expr:'count_red == 3', label:'count_red equals 3'}]
    },
    {
      title:'Count a different category',
      desc:`Create pass as c("Pass", "Pass", "Fail", "Pass", "Pass", "Fail"). Calculate pass_table as
        table(pass), then count_fail as pass_table[["Fail"]]. Use stopifnot() to confirm that count_fail == 2.`,
      starter:`# Create pass, then calculate pass_table and count_fail below
pass <- c("Pass", "Pass", "Fail", "Pass", "Pass", "Fail")
`,
      tests:[{type:'assert', expr:'count_fail == 2', label:'count_fail equals 2'}]
    },
    {
      title:'Build a cross-tabulation and read one cell',
      desc:`Using house and pass (both given), calculate cross_table as table(house, pass), then red_pass as
        cross_table["Red", "Pass"]. Use stopifnot() to confirm that red_pass == 2.`,
      starter:`house <- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
pass <- c("Pass", "Pass", "Fail", "Pass", "Pass", "Fail")
# Calculate cross_table, then red_pass below
`,
      tests:[{type:'assert', expr:'red_pass == 2', label:'red_pass equals 2'}]
    },
    {
      title:'Read a different cell',
      desc:`Using the same cross_table, calculate blue_fail as cross_table["Blue", "Fail"]. Use stopifnot() to
        confirm that blue_fail == 1.`,
      starter:`house <- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
pass <- c("Pass", "Pass", "Fail", "Pass", "Pass", "Fail")
cross_table <- table(house, pass)
# Calculate blue_fail below
`,
      tests:[{type:'assert', expr:'blue_fail == 1', label:'blue_fail equals 1'}]
    },
    {
      title:'Check the total using sum()',
      desc:`Using house (given), calculate total as sum(table(house)). Use stopifnot() to confirm that total ==
        6 — the total count always matches the length of the original vector.`,
      starter:`house <- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
# Calculate total below
`,
      tests:[{type:'assert', expr:'total == 6', label:'total equals 6'}]
    },
    {
      title:'Check the category names',
      desc:`Using house (given), calculate house_names as names(table(house)). Use stopifnot() to confirm that
        all(house_names == c("Blue", "Red")) — table() lists category names in ALPHABETICAL order, not the
        order they first appeared in the vector.`,
      starter:`house <- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
# Calculate house_names below
`,
      tests:[{type:'assert', expr:'all(house_names == c("Blue", "Red"))', label:'house_names exactly equals c("Blue", "Red")'}]
    }
  ],
  quiz:[
    {
      q:'What does table(house) return, if house is a character vector?',
      options:['The original vector, unchanged','A named count of how many times each DISTINCT value appears in house','Just the single most common value','An error, since table() only works on numbers'],
      correct:1,
      explain:'table() tallies every unique value in the vector — the result is a named set of counts, one per distinct category.'
    },
    {
      q:'What does table(house, pass) build, compared to table(house) alone?',
      options:['Exactly the same result as table(house)','A two-way CROSS-TABULATION — a grid counting every combination of a house value AND a pass value together, not just each column separately','It multiplies house by pass','It only works if house and pass are both numeric'],
      correct:1,
      explain:'Giving table() two vectors builds a grid of combined counts — how many Red-and-Pass, how many Blue-and-Fail, and so on, all at once.'
    },
    {
      q:'Why does cross_table["Red", "Pass"] correctly pull out ONE specific count from the cross-tabulation?',
      options:['It doesn\'t work, cross-tabulations can\'t be indexed this way','It uses the [row, column] pattern already familiar from data.frame indexing — "Red" picks the row, "Pass" picks the column, and their intersection is one count','It searches the whole table for the word "Red"','It always returns the first cell, regardless of what\'s inside the brackets'],
      correct:1,
      explain:'A two-way table is really just a small grid, so the same [row, column] indexing used for data.frames since Beginner Week 7 works here too.'
    },
    {
      q:'Why does names(table(house)) return c("Blue", "Red") instead of c("Red", "Blue"), even though "Red" appeared FIRST in the original vector?',
      options:['This is a bug in R','table() always lists category names in ALPHABETICAL order by default, not the order values first appeared in the data','names() always returns results in reverse order','It depends on which value has the higher count'],
      correct:1,
      explain:'table() sorts its output alphabetically by category name — this is worth knowing, since it means the ORDER of a table\'s names doesn\'t reflect the original data\'s order.'
    }
  ],
  sandboxStarter3:`house <- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
pass <- c("Pass", "Pass", "Fail", "Pass", "Pass", "Fail")
house_table <- table(house)
cross_table <- table(house, pass)
print(sum(house_table))
print(names(house_table))
`,
  stretchChallenge:{
    title:'Compare two counts from the same table',
    desc:`Create house2 as c("Red", "Red", "Blue"). Calculate house2_table as table(house2), then more_red as
      house2_table[["Red"]] > house2_table[["Blue"]]. Use stopifnot() to confirm that more_red == TRUE — Red
      appears twice, Blue only once.`,
    starter:`# Create house2, then calculate house2_table and more_red below
`,
    tests:[
      {type:'assert', expr:'more_red == TRUE', label:'more_red equals TRUE'}
    ]
  }
},
{
  key:'week2', num:2, title:'Are They Related? cor()',
  scenarioTag:'Real world: does more study time actually go with a higher score?',
  scenario:`Beginner Week 9 summarised ONE numeric column at a time with mean(), median(), and sd(). cor()
    compares TWO numeric columns at once, giving a single number that says how strongly they move together —
    the foundation for the model-fitting Week 3 builds next.`,
  objectives:[
    'Use cor() to measure the relationship between two numeric vectors',
    'Interpret a correlation close to 1, close to -1, and close to 0',
    'Use comparison operators to check whether a correlation is positive or negative',
    'Use abs() to compare the STRENGTH of two correlations, regardless of sign'
  ],
  conceptHtml:`
    <p><code>cor(x, y)</code> returns a single number between -1 and 1 describing how strongly two numeric
    vectors move together:</p>
    <pre class="code-block">hours &lt;- c(1, 2, 3, 4, 5)
score &lt;- c(50, 60, 65, 75, 90)
print(round(cor(hours, score), 2))   # 0.99 - strongly POSITIVE: more hours goes with a higher score</pre>
    <p>A value near <strong>1</strong> means "as one goes up, so does the other." A value near
    <strong>-1</strong> means "as one goes up, the other goes DOWN." A value near <strong>0</strong> means
    there's little to no straight-line relationship at all.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">hours &lt;- c(1, 2, 3, 4, 5)
score &lt;- c(50, 60, 65, 75, 90)
hours_score_cor &lt;- round(cor(hours, score), 2)
print(hours_score_cor)</pre>
    <ul>
      <li><code>cor(hours, score)</code> — compares the two vectors position-by-position (student 1's hours with
        student 1's score, and so on) and returns one summary number.</li>
      <li><code>round(..., 2)</code> — the same rounding function used since Beginner Week 9, applied here to
        keep the correlation readable.</li>
    </ul>
    <p>To compare the STRENGTH of two correlations regardless of direction, wrap each in <code>abs()</code> first
    — a correlation of -0.99 is just as strong a relationship as +0.99, only pointing the opposite way.</p>`,
  sandboxStarter:`hours <- c(1, 2, 3, 4, 5)
score <- c(50, 60, 65, 75, 90)
hours_score_cor <- round(cor(hours, score), 2)
print(hours_score_cor)
`,
  sandboxStarter2:`hours <- c(1, 2, 3, 4, 5)
score <- c(50, 60, 65, 75, 90)
absences <- c(5, 4, 3, 2, 0)
print(round(cor(absences, score), 2))
`,
  exercises:[
    {
      title:'Measure a positive relationship',
      desc:`Create hours as c(1, 2, 3, 4, 5) and score as c(50, 60, 65, 75, 90). Calculate hours_score_cor as
        round(cor(hours, score), 2). Use stopifnot() to confirm that hours_score_cor == 0.99.`,
      starter:`# Create hours and score, then calculate hours_score_cor below
hours <- c(1, 2, 3, 4, 5)
score <- c(50, 60, 65, 75, 90)
`,
      tests:[{type:'assert', expr:'hours_score_cor == 0.99', label:'hours_score_cor equals 0.99'}]
    },
    {
      title:'Measure a negative relationship',
      desc:`Using score (given) and absences as c(5, 4, 3, 2, 0), calculate absences_score_cor as
        round(cor(absences, score), 2). Use stopifnot() to confirm that absences_score_cor == -1 — more
        absences strongly goes with a LOWER score.`,
      starter:`score <- c(50, 60, 65, 75, 90)
# Create absences, then calculate absences_score_cor below
`,
      tests:[{type:'assert', expr:'absences_score_cor == -1', label:'absences_score_cor equals -1'}]
    },
    {
      title:'Check whether a correlation is positive',
      desc:`Using hours and score (both given), calculate hours_positive as cor(hours, score) > 0. Use
        stopifnot() to confirm that hours_positive == TRUE.`,
      starter:`hours <- c(1, 2, 3, 4, 5)
score <- c(50, 60, 65, 75, 90)
# Calculate hours_positive below
`,
      tests:[{type:'assert', expr:'hours_positive == TRUE', label:'hours_positive equals TRUE'}]
    },
    {
      title:'Check whether a correlation is negative',
      desc:`Using score (given) and absences as c(5, 4, 3, 2, 0), calculate absences_negative as
        cor(absences, score) < 0. Use stopifnot() to confirm that absences_negative == TRUE.`,
      starter:`score <- c(50, 60, 65, 75, 90)
# Create absences, then calculate absences_negative below
`,
      tests:[{type:'assert', expr:'absences_negative == TRUE', label:'absences_negative equals TRUE'}]
    },
    {
      title:'Round to a different precision',
      desc:`Using hours and score (both given), calculate rounded_to_1dp as round(cor(hours, score), 1). Use
        stopifnot() to confirm that rounded_to_1dp == 1 — 0.9851 rounds UP to 1.0 at one decimal place.`,
      starter:`hours <- c(1, 2, 3, 4, 5)
score <- c(50, 60, 65, 75, 90)
# Calculate rounded_to_1dp below
`,
      tests:[{type:'assert', expr:'rounded_to_1dp == 1', label:'rounded_to_1dp equals 1'}]
    },
    {
      title:'Compare the STRENGTH of two relationships',
      desc:`Using hours, score (both given) and absences as c(5, 4, 3, 2, 0), calculate stronger as
        abs(cor(absences, score)) > abs(cor(hours, score)). Use stopifnot() to confirm that stronger == TRUE —
        the absences relationship (-0.997) is slightly STRONGER than the hours relationship (0.985), once you
        ignore direction.`,
      starter:`hours <- c(1, 2, 3, 4, 5)
score <- c(50, 60, 65, 75, 90)
# Create absences, then calculate stronger below
`,
      tests:[{type:'assert', expr:'stronger == TRUE', label:'stronger equals TRUE'}]
    }
  ],
  quiz:[
    {
      q:'What range of values can cor(x, y) return?',
      options:['0 to 100','-1 to 1','Any number, with no fixed range','Only 0 or 1'],
      correct:1,
      explain:'Correlation is always between -1 (perfectly opposite) and 1 (perfectly together), with 0 meaning no straight-line relationship.'
    },
    {
      q:'What does a correlation close to -1 mean, like the one between absences and score?',
      options:['The two vectors are unrelated','As ONE value goes up, the OTHER tends to go DOWN — a strong relationship, just pointing in opposite directions','There was an error in the calculation','It means the values are identical'],
      correct:1,
      explain:'Negative correlation is still a STRONG relationship — it just means the two things move in opposite directions, not that there\'s no connection.'
    },
    {
      q:'What would a correlation close to 0 suggest?',
      options:['A very strong positive relationship','A very strong negative relationship','Little to no straight-line relationship between the two vectors','That one vector is much larger than the other'],
      correct:2,
      explain:'A correlation near 0 means knowing one value tells you almost nothing about the other — there\'s no clear straight-line pattern between them.'
    },
    {
      q:'Why use abs() when comparing whether the absences-score relationship is STRONGER than the hours-score relationship?',
      options:['abs() is required by cor() to run at all','Without abs(), a negative correlation (like -0.997) would always look "smaller" than a positive one (like 0.985), even though -0.997 actually represents the STRONGER relationship once direction is ignored','abs() converts the correlation into a percentage','abs() has no real effect here'],
      correct:1,
      explain:'Comparing raw correlation values mixes up STRENGTH with DIRECTION — abs() strips away the sign so you\'re comparing strength alone, which is usually the fair comparison.'
    }
  ],
  sandboxStarter3:`hours <- c(1, 2, 3, 4, 5)
score <- c(50, 60, 65, 75, 90)
absences <- c(5, 4, 3, 2, 0)
print(round(cor(hours, score), 2))
print(abs(cor(absences, score)) > abs(cor(hours, score)))
`,
  stretchChallenge:{
    title:'Check a vector\'s correlation with itself',
    desc:`Using hours (given), calculate self_cor as round(cor(hours, hours), 2). Use stopifnot() to confirm
      that self_cor == 1 — any vector is PERFECTLY correlated with itself.`,
    starter:`hours <- c(1, 2, 3, 4, 5)
# Calculate self_cor below
`,
    tests:[
      {type:'assert', expr:'self_cor == 1', label:'self_cor equals 1'}
    ]
  }
},
{
  key:'week3', num:3, title:'A Simple Model: lm()',
  scenarioTag:'Real world: fitting the actual best-fit line, not just measuring how related two things are',
  scenario:`Week 2's cor() said HOW STRONGLY hours studied and exam score move together. lm() goes one step
    further — it fits the actual best-fit straight line through the data, giving you a real formula you can use
    to predict a score for hours you haven't seen yet.`,
  objectives:[
    'Use lm(y ~ x, data = df) to fit a straight line to two numeric columns',
    'Use coef() to read the fitted intercept and slope out of a model',
    'Use predict() to estimate y for a brand new x value',
    'Use fitted() to see the model\'s predictions for the ORIGINAL data, and calculate a residual'
  ],
  conceptHtml:`
    <p><code>lm(y ~ x, data = df)</code> fits the straight line that best predicts <code>y</code> from
    <code>x</code> — the same <code>~</code> formula syntax from Intermediate Week 7's aggregate(), read as
    "score explained by hours":</p>
    <pre class="code-block">df &lt;- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
model &lt;- lm(score ~ hours, data = df)
print(coef(model))
# (Intercept)       hours
#        39.5         9.5</pre>
    <p><code>coef(model)</code> returns the fitted line's formula as a named vector:
    <code>score = 39.5 + 9.5 * hours</code>. Once you have that formula, <code>predict()</code> estimates
    <code>score</code> for a NEW <code>hours</code> value the model has never seen:</p>
    <pre class="code-block">predicted_6 &lt;- predict(model, newdata = data.frame(hours = 6))
print(predicted_6)   # 96.5</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">df &lt;- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
model &lt;- lm(score ~ hours, data = df)
coefs &lt;- coef(model)
slope &lt;- coefs[["hours"]]</pre>
    <ul>
      <li><code>lm(score ~ hours, data = df)</code> — fits the line, storing everything about it inside
        <code>model</code>.</li>
      <li><code>coefs[["hours"]]</code> — the same named-access pattern from Intermediate Week 9's lists, here
        pulling out just the SLOPE (how much score changes per extra hour).</li>
    </ul>
    <p><code>fitted(model)</code> gives the model's predictions for the ORIGINAL data — comparing a fitted value
    to the real value gives a <strong>residual</strong>, how far off that one prediction was.</p>`,
  sandboxStarter:`df <- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
model <- lm(score ~ hours, data = df)
print(coef(model))
`,
  sandboxStarter2:`df <- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
model <- lm(score ~ hours, data = df)
predicted_6 <- predict(model, newdata = data.frame(hours = 6))
print(predicted_6)
`,
  exercises:[
    {
      title:'Fit a model and read its slope',
      desc:`Create df as data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90)). Calculate model as
        lm(score ~ hours, data = df), coefs as coef(model), then slope as coefs[["hours"]]. Use stopifnot() to
        confirm that round(slope, 2) == 9.5.`,
      starter:`# Create df, then calculate model, coefs, and slope below
df <- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
`,
      tests:[{type:'assert', expr:'round(slope, 2) == 9.5', label:'slope equals 9.5'}]
    },
    {
      title:'Read the intercept',
      desc:`Using the same df and model, calculate intercept as coefs[["(Intercept)"]]. Use stopifnot() to
        confirm that round(intercept, 2) == 39.5.`,
      starter:`df <- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
model <- lm(score ~ hours, data = df)
coefs <- coef(model)
# Calculate intercept below
`,
      tests:[{type:'assert', expr:'round(intercept, 2) == 39.5', label:'intercept equals 39.5'}]
    },
    {
      title:'Predict by hand using the coefficients',
      desc:`Using intercept and slope (both calculated from df/model as before), calculate predicted_6 as
        intercept + slope * 6. Use stopifnot() to confirm that predicted_6 == 96.5.`,
      starter:`df <- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
model <- lm(score ~ hours, data = df)
coefs <- coef(model)
intercept <- coefs[["(Intercept)"]]
slope <- coefs[["hours"]]
# Calculate predicted_6 below
`,
      tests:[{type:'assert', expr:'predicted_6 == 96.5', label:'predicted_6 equals 96.5'}]
    },
    {
      title:'Predict using predict()',
      desc:`Using df and model (as before), calculate predicted_via_predict as predict(model, newdata =
        data.frame(hours = 6)). Use stopifnot() to confirm that round(predicted_via_predict, 1) == 96.5 — the
        same answer as fitting it by hand.`,
      starter:`df <- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
model <- lm(score ~ hours, data = df)
# Calculate predicted_via_predict below
`,
      tests:[{type:'assert', expr:'round(predicted_via_predict, 1) == 96.5', label:'predicted_via_predict equals 96.5'}]
    },
    {
      title:'Calculate a residual',
      desc:`Using intercept and slope (both calculated from df/model as before), calculate predicted_1 as
        intercept + slope * 1, then residual_1 as round(df$score[1] - predicted_1, 1). Use stopifnot() to
        confirm that residual_1 == 1 — the model predicted 49 for the first student, who actually scored 50.`,
      starter:`df <- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
model <- lm(score ~ hours, data = df)
coefs <- coef(model)
intercept <- coefs[["(Intercept)"]]
slope <- coefs[["hours"]]
# Calculate predicted_1, then residual_1 below
`,
      tests:[{type:'assert', expr:'residual_1 == 1', label:'residual_1 equals 1'}]
    },
    {
      title:'Check the model\'s fitted values',
      desc:`Using df and model (as before), calculate fitted_values as fitted(model), then first_fitted as
        round(fitted_values[[1]], 1). Use stopifnot() to confirm that first_fitted == 49.`,
      starter:`df <- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
model <- lm(score ~ hours, data = df)
# Calculate fitted_values, then first_fitted below
`,
      tests:[{type:'assert', expr:'first_fitted == 49', label:'first_fitted equals 49'}]
    }
  ],
  quiz:[
    {
      q:'What does lm(score ~ hours, data = df) do?',
      options:['Counts how many rows are in df','Fits the straight line that best predicts score FROM hours, based on the data in df','Sorts df by score','Checks whether score and hours are the same length'],
      correct:1,
      explain:'lm() finds the intercept and slope that make the fitted line\'s predictions as close as possible to the real score values.'
    },
    {
      q:'What does coef(model) return?',
      options:['The original data.frame, unchanged','A named vector with the fitted line\'s (Intercept) and slope — the formula the model learned','The correlation between score and hours','A single "yes/no" telling you if the model is good'],
      correct:1,
      explain:'coef() exposes the two numbers that define the fitted line: where it starts ((Intercept)) and how steeply it rises (the slope, named after the predictor).'
    },
    {
      q:'How do you use a fitted model to predict score for an hours value that ISN\'T in the original data?',
      options:['You can\'t — models only work on data they were trained on','predict(model, newdata = data.frame(hours = ...)) — passing a NEW data.frame with just the x value you want a prediction for','By re-running lm() with the new value added','By calling coef(model) again'],
      correct:1,
      explain:'predict() is built exactly for this — feed it a newdata data.frame shaped like the original predictor column, and it returns the model\'s estimate.'
    },
    {
      q:'What is a "residual"?',
      options:['Another name for the slope','The difference between a REAL value and the model\'s FITTED (predicted) value for that same point','The total number of data points used to fit the model','The correlation between two variables'],
      correct:1,
      explain:'A residual measures how far off one specific prediction was — real value minus fitted value — which is exactly what lm() tries to make as small as possible overall.'
    }
  ],
  sandboxStarter3:`df <- data.frame(hours = c(1, 2, 3, 4, 5), score = c(50, 60, 65, 75, 90))
model <- lm(score ~ hours, data = df)
fitted_values <- fitted(model)
print(fitted_values)
print(df$score - fitted_values)
`,
  stretchChallenge:{
    title:'Fit a model on different data and check its slope',
    desc:`Create df2 as data.frame(x = c(1, 2, 3, 4), y = c(10, 20, 30, 40)). Calculate model2 as lm(y ~ x, data
      = df2), then slope2 as coef(model2)[["x"]]. Use stopifnot() to confirm that slope2 == 10 — y increases by
      exactly 10 for every 1 increase in x.`,
    starter:`# Create df2, then calculate model2 and slope2 below
`,
    tests:[
      {type:'assert', expr:'slope2 == 10', label:'slope2 equals 10'}
    ]
  }
},
{
  key:'week4', num:4, title:'Functions That Return Many Things',
  scenarioTag:'Real world: one function call that hands back a whole bundle of related results at once',
  scenario:`Intermediate Week 5 wrote functions that return ONE value. But often you want several RELATED
    results from the same calculation — a mean, a max, and a min from the same scores, say. Since Intermediate
    Week 9 you know list() can bundle different values together — a function's LAST expression can be a list(),
    handing back everything at once from a single call.`,
  objectives:[
    'Write a function whose last expression is a list(), returning multiple named results',
    'Call the function once and access several of its results with $',
    'Call the same function on different data and compare results across calls',
    'Recognise why bundling related results in ONE list is cleaner than several separate function calls'
  ],
  conceptHtml:`
    <p>A function's return value is just its LAST expression — so if that expression is a <code>list()</code>,
    the caller gets every named piece back from ONE call:</p>
    <pre class="code-block">analyze &lt;- function(x) {
  list(mean_val = mean(x), max_val = max(x), min_val = min(x), range_val = max(x) - min(x))
}
result &lt;- analyze(c(70, 85, 60, 90, 75))
print(result$mean_val)   # 76
print(result$max_val)    # 90</pre>
    <p>Without this, you'd need three or four separate function calls (or re-compute <code>mean(x)</code> and
    <code>max(x)</code> more than once) just to get related answers about the SAME data.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">analyze &lt;- function(x) {
  list(mean_val = mean(x), max_val = max(x), min_val = min(x), range_val = max(x) - min(x))
}
result &lt;- analyze(c(70, 85, 60, 90, 75))
print(result$mean_val)</pre>
    <ul>
      <li><code>function(x) { list(...) }</code> — same function-writing syntax from Intermediate Week 5, just
        with a <code>list()</code> as the body's last (and only) expression.</li>
      <li><code>result$mean_val</code> — the same <code>$</code> access from Intermediate Week 9, now reaching
        into a list that a FUNCTION produced, not one you typed by hand.</li>
    </ul>
    <p>Calling <code>analyze()</code> again on different data produces a completely independent list — nothing
    from the first call carries over.</p>`,
  sandboxStarter:`analyze <- function(x) {
  list(mean_val = mean(x), max_val = max(x), min_val = min(x), range_val = max(x) - min(x))
}
result <- analyze(c(70, 85, 60, 90, 75))
print(result$mean_val)
print(result$max_val)
`,
  sandboxStarter2:`analyze <- function(x) {
  list(mean_val = mean(x), max_val = max(x), min_val = min(x), range_val = max(x) - min(x))
}
result2 <- analyze(c(40, 50, 60))
print(result2)
`,
  exercises:[
    {
      title:'Write a function that returns a list, then access one piece',
      desc:`Write analyze as function(x) { list(mean_val = mean(x), max_val = max(x), min_val = min(x),
        range_val = max(x) - min(x)) }. Call it on scores <- c(70, 85, 60, 90, 75), storing the result in
        result. Calculate rounded_mean as round(result$mean_val, 1). Use stopifnot() to confirm that
        rounded_mean == 76.`,
      starter:`# Write analyze, create scores, then calculate result and rounded_mean below
scores <- c(70, 85, 60, 90, 75)
`,
      tests:[{type:'assert', expr:'rounded_mean == 76', label:'rounded_mean equals 76'}]
    },
    {
      title:'Access a second piece from the same result',
      desc:`Using the same analyze and result (from calling analyze(scores)), calculate max_val as
        result$max_val. Use stopifnot() to confirm that max_val == 90.`,
      starter:`analyze <- function(x) {
  list(mean_val = mean(x), max_val = max(x), min_val = min(x), range_val = max(x) - min(x))
}
scores <- c(70, 85, 60, 90, 75)
result <- analyze(scores)
# Calculate max_val below
`,
      tests:[{type:'assert', expr:'max_val == 90', label:'max_val equals 90'}]
    },
    {
      title:'Access a third piece',
      desc:`Using the same result, calculate min_val as result$min_val. Use stopifnot() to confirm that
        min_val == 60.`,
      starter:`analyze <- function(x) {
  list(mean_val = mean(x), max_val = max(x), min_val = min(x), range_val = max(x) - min(x))
}
scores <- c(70, 85, 60, 90, 75)
result <- analyze(scores)
# Calculate min_val below
`,
      tests:[{type:'assert', expr:'min_val == 60', label:'min_val equals 60'}]
    },
    {
      title:'Access a calculated piece',
      desc:`Using the same result, calculate range_val as result$range_val. Use stopifnot() to confirm that
        range_val == 30.`,
      starter:`analyze <- function(x) {
  list(mean_val = mean(x), max_val = max(x), min_val = min(x), range_val = max(x) - min(x))
}
scores <- c(70, 85, 60, 90, 75)
result <- analyze(scores)
# Calculate range_val below
`,
      tests:[{type:'assert', expr:'range_val == 30', label:'range_val equals 30'}]
    },
    {
      title:'Call the function on different data',
      desc:`Using analyze (defined as before), call it on c(40, 50, 60), storing the result in result2.
        Calculate avg2 as round(result2$mean_val, 1). Use stopifnot() to confirm that avg2 == 50.`,
      starter:`analyze <- function(x) {
  list(mean_val = mean(x), max_val = max(x), min_val = min(x), range_val = max(x) - min(x))
}
# Call analyze on c(40, 50, 60), then calculate avg2 below
`,
      tests:[{type:'assert', expr:'avg2 == 50', label:'avg2 equals 50'}]
    },
    {
      title:'Compare results across two calls',
      desc:`Using analyze (defined as before), calculate result as analyze(c(70, 85, 60, 90, 75)) and result2 as
        analyze(c(40, 50, 60)). Calculate wider_range as result$range_val > result2$range_val. Use stopifnot()
        to confirm that wider_range == TRUE — the first dataset's range (30) is bigger than the second's (20).`,
      starter:`analyze <- function(x) {
  list(mean_val = mean(x), max_val = max(x), min_val = min(x), range_val = max(x) - min(x))
}
# Calculate result, result2, then wider_range below
`,
      tests:[{type:'assert', expr:'wider_range == TRUE', label:'wider_range equals TRUE'}]
    }
  ],
  quiz:[
    {
      q:'What does a function return, if its LAST expression is a list(...)?',
      options:['Only the first item in the list','The WHOLE list — every named piece is handed back to the caller from that one call','Nothing, lists cannot be returned from functions','Only the last item in the list'],
      correct:1,
      explain:'A function\'s return value is just its last-evaluated expression — when that\'s a list(), the entire bundle of named results comes back at once.'
    },
    {
      q:'Why is analyze(x) returning a list better than writing 4 separate functions (get_mean, get_max, get_min, get_range)?',
      options:['It isn\'t better — separate functions are always preferred','One call computes and bundles every RELATED result together, avoiding repeated calls and keeping results that belong together, together','R doesn\'t allow more than one function definition','list() is required by R for any function with more than one line'],
      correct:1,
      explain:'When several results all come from the same underlying data, bundling them in one call is both less repetitive and keeps them logically grouped.'
    },
    {
      q:'After running result <- analyze(scores) and then result2 <- analyze(other_scores), what is true about result and result2?',
      options:['They are the same object — the second call overwrites data inside the first','They are two COMPLETELY INDEPENDENT lists — calling analyze() again never changes a previously-stored result','result2 is always empty','Calling analyze() twice causes an error'],
      correct:1,
      explain:'Each function call creates a brand new list — storing it in a different variable name means both results exist independently, side by side.'
    },
    {
      q:'What does result$range_val access?',
      options:['The word "range_val", as text','The specific named piece of the list called range_val — the same $ access pattern used since Intermediate Week 9','The 4th character of result','It causes an error, since $ only works on data.frames'],
      correct:1,
      explain:'$ reaches into any named list (whether typed by hand or returned by a function) and pulls out the piece with that exact name.'
    }
  ],
  sandboxStarter3:`analyze <- function(x) {
  list(mean_val = mean(x), max_val = max(x), min_val = min(x), range_val = max(x) - min(x))
}
result <- analyze(c(70, 85, 60, 90, 75))
result2 <- analyze(c(40, 50, 60))
print(result$range_val)
print(result2$range_val)
`,
  stretchChallenge:{
    title:'Write your own two-result function',
    desc:`Write summarize_pass as function(scores, threshold) { list(pass_count = sum(scores >= threshold),
      fail_count = sum(scores < threshold)) }. Call it as summary <- summarize_pass(c(45, 60, 70, 30, 90), 50).
      Use stopifnot() to confirm that summary$pass_count == 3 && summary$fail_count == 2.`,
    starter:`# Write summarize_pass, then call it and store the result in summary below
`,
    tests:[
      {type:'assert', expr:'summary$pass_count == 3 && summary$fail_count == 2', label:'summary$pass_count and summary$fail_count are both correct'}
    ]
  }
},
{
  key:'week5', num:5, title:'When Things Go Wrong: tryCatch()',
  scenarioTag:'Real world: handling bad input gracefully instead of letting the whole script crash',
  scenario:`So far, a bad input (like calculating a mean of an empty vector, or dividing by zero) would stop a
    script cold. tryCatch() lets a function catch a problem the moment it happens and hand back a sensible
    fallback value instead — critical for a function that needs to process many different inputs, some of
    which might be messy.`,
  objectives:[
    'Use stop() to deliberately signal an error under a specific condition',
    'Wrap risky code in tryCatch(expr, error = function(e) {...}) to catch that error',
    'Return a fallback value (like NA) from the error handler instead of crashing',
    'Combine tryCatch() with sapply() to safely process a whole list of inputs, some good and some bad'
  ],
  conceptHtml:`
    <p><code>stop("message")</code> deliberately raises an error — normally that would halt everything. Wrapping
    the risky code in <code>tryCatch()</code> catches it instead:</p>
    <pre class="code-block">safe_average &lt;- function(x) {
  tryCatch({
    if (length(x) == 0) stop("Empty vector")
    mean(x)
  }, error = function(e) {
    NA
  })
}
print(safe_average(c(10, 20, 30)))   # 20
print(safe_average(c()))             # NA - caught, no crash</pre>
    <p>The first argument to <code>tryCatch()</code> is the code to attempt. <code>error = function(e) {...}</code>
    only runs if something inside that code calls <code>stop()</code> (or hits a real R error) — otherwise it's
    skipped entirely and the normal result is returned.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">safe_average &lt;- function(x) {
  tryCatch({
    if (length(x) == 0) stop("Empty vector")
    mean(x)
  }, error = function(e) {
    NA
  })
}</pre>
    <ul>
      <li><code>if (length(x) == 0) stop("Empty vector")</code> — deliberately signals a problem BEFORE
        <code>mean()</code> would fail confusingly on its own.</li>
      <li><code>error = function(e) { NA }</code> — the fallback: whatever this function returns becomes
        <code>tryCatch()</code>'s result when an error was caught.</li>
    </ul>
    <p>This pattern is especially powerful combined with <code>sapply()</code> — processing a whole list of
    inputs where some might be bad, without one bad input stopping everything else.</p>`,
  sandboxStarter:`safe_average <- function(x) {
  tryCatch({
    if (length(x) == 0) stop("Empty vector")
    mean(x)
  }, error = function(e) {
    NA
  })
}
print(safe_average(c(10, 20, 30)))
print(safe_average(c()))
`,
  sandboxStarter2:`safe_average <- function(x) {
  tryCatch({
    if (length(x) == 0) stop("Empty vector")
    mean(x)
  }, error = function(e) {
    NA
  })
}
inputs <- list(c(1, 2, 3), c(), c(4, 5))
results <- sapply(inputs, safe_average)
print(results)
`,
  exercises:[
    {
      title:'Call a tryCatch-protected function on valid data',
      desc:`Write safe_average as function(x) { tryCatch({ if (length(x) == 0) stop("Empty vector"); mean(x) },
        error = function(e) { NA }) }. Calculate result as safe_average(c(10, 20, 30)). Use stopifnot() to
        confirm that result == 20.`,
      starter:`# Write safe_average, then calculate result below
`,
      tests:[{type:'assert', expr:'result == 20', label:'result equals 20'}]
    },
    {
      title:'Call it on data that triggers the error',
      desc:`Using the same safe_average, calculate result as safe_average(c()). Use stopifnot() to confirm that
        is.na(result) — an empty vector triggers stop(), caught by tryCatch(), returning NA instead of crashing.`,
      starter:`safe_average <- function(x) {
  tryCatch({
    if (length(x) == 0) stop("Empty vector")
    mean(x)
  }, error = function(e) {
    NA
  })
}
# Calculate result below
`,
      tests:[{type:'assert', expr:'is.na(result)', label:'result is NA'}]
    },
    {
      title:'Write your own tryCatch-protected function',
      desc:`Write safe_divide as function(a, b) { tryCatch({ if (b == 0) stop("Cannot divide by zero"); a / b },
        error = function(e) { NA }) }. Calculate result as safe_divide(10, 2). Use stopifnot() to confirm that
        result == 5.`,
      starter:`# Write safe_divide, then calculate result below
`,
      tests:[{type:'assert', expr:'result == 5', label:'result equals 5'}]
    },
    {
      title:'Trigger the error in your own function',
      desc:`Using the same safe_divide, calculate result as safe_divide(10, 0). Use stopifnot() to confirm that
        is.na(result).`,
      starter:`safe_divide <- function(a, b) {
  tryCatch({
    if (b == 0) stop("Cannot divide by zero")
    a / b
  }, error = function(e) {
    NA
  })
}
# Calculate result below
`,
      tests:[{type:'assert', expr:'is.na(result)', label:'result is NA'}]
    },
    {
      title:'Safely process a whole list of inputs',
      desc:`Using safe_average (as before), calculate results as sapply(list(c(1, 2, 3), c(), c(4, 5)),
        safe_average), then na_count as sum(is.na(results)). Use stopifnot() to confirm that na_count == 1 —
        only the empty vector fails.`,
      starter:`safe_average <- function(x) {
  tryCatch({
    if (length(x) == 0) stop("Empty vector")
    mean(x)
  }, error = function(e) {
    NA
  })
}
# Calculate results, then na_count below
`,
      tests:[{type:'assert', expr:'na_count == 1', label:'na_count equals 1'}]
    },
    {
      title:'Combine two safe functions into one report',
      desc:`Using safe_average and safe_divide (both as before), write process as function(x, a, b) { list(avg =
        safe_average(x), div = safe_divide(a, b)) }. Calculate result as process(c(1, 2, 3), 10, 0). Use
        stopifnot() to confirm that result$avg == 2 && is.na(result$div).`,
      starter:`safe_average <- function(x) {
  tryCatch({
    if (length(x) == 0) stop("Empty vector")
    mean(x)
  }, error = function(e) {
    NA
  })
}
safe_divide <- function(a, b) {
  tryCatch({
    if (b == 0) stop("Cannot divide by zero")
    a / b
  }, error = function(e) {
    NA
  })
}
# Write process, then calculate result below
`,
      tests:[{type:'assert', expr:'result$avg == 2 && is.na(result$div)', label:'result$avg and result$div are both correct'}]
    }
  ],
  quiz:[
    {
      q:'What does stop("Empty vector") do inside a function?',
      options:['Prints a warning but continues running','Deliberately raises an error with that message, which would normally halt execution','Returns the string "Empty vector" as the function\'s result','Skips the rest of the function silently'],
      correct:1,
      explain:'stop() is how you deliberately signal that something has gone wrong — normally that error propagates and stops the program.'
    },
    {
      q:'What does tryCatch(expr, error = function(e) { NA }) do?',
      options:['It has no effect on errors','It attempts expr; if an error occurs anywhere inside it, the error handler runs instead and its result (NA here) becomes the overall result','It prevents expr from ever running','It only works with numeric expressions'],
      correct:1,
      explain:'tryCatch() intercepts an error before it can crash the program, running your fallback code instead and using ITS return value.'
    },
    {
      q:'What would happen to safe_average(c()) WITHOUT the tryCatch() wrapper?',
      options:['Nothing different — the result would still be NA','stop("Empty vector") would halt execution with an error, since nothing would catch it','It would silently return 0','R would automatically skip empty vectors'],
      correct:1,
      explain:'Without tryCatch(), stop() has nothing catching it — the error propagates up and stops the calling code entirely.'
    },
    {
      q:'Why is tryCatch() especially useful when combined with sapply() over a list of many inputs?',
      options:['It isn\'t useful in that situation','One bad input (that would trigger an error) can\'t stop the ENTIRE sapply() call — each input is handled safely, so good inputs still get processed', 'sapply() requires tryCatch() to run at all','tryCatch() makes sapply() run faster'],
      correct:1,
      explain:'Without tryCatch(), a single bad input partway through the list would crash the whole sapply() call — with it, each input is handled independently.'
    }
  ],
  sandboxStarter3:`safe_average <- function(x) {
  tryCatch({
    if (length(x) == 0) stop("Empty vector")
    mean(x)
  }, error = function(e) {
    NA
  })
}
safe_divide <- function(a, b) {
  tryCatch({
    if (b == 0) stop("Cannot divide by zero")
    a / b
  }, error = function(e) {
    NA
  })
}
process <- function(x, a, b) {
  list(avg = safe_average(x), div = safe_divide(a, b))
}
print(process(c(1, 2, 3), 10, 0))
`,
  stretchChallenge:{
    title:'Catch a different kind of bad input',
    desc:`Write safe_sqrt as function(x) { tryCatch({ if (x < 0) stop("Negative number"); sqrt(x) }, error =
      function(e) { NA }) }. Calculate result1 as safe_sqrt(16) and result2 as safe_sqrt(-4). Use stopifnot() to
      confirm that result1 == 4 && is.na(result2).`,
    starter:`# Write safe_sqrt, then calculate result1 and result2 below
`,
    tests:[
      {type:'assert', expr:'result1 == 4 && is.na(result2)', label:'result1 and result2 are both correct'}
    ]
  }
},
{
  key:'week6', num:6, title:'Formatting Output: sprintf()',
  scenarioTag:'Real world: turning raw numbers into clean, consistent report lines',
  scenario:`paste() (since Beginner Week 8) joins pieces together, but it doesn't control HOW numbers look —
    84.566666 would print exactly as-is, decimal places and all. sprintf() gives full control: pick exactly how
    many decimal places, pad numbers, and build clean formatted lines every time.`,
  objectives:[
    'Use %s and %d placeholders in sprintf() for text and whole numbers',
    'Use %.1f / %.2f to control exactly how many decimal places a number shows',
    'Use %% to include a literal percent sign in a formatted string',
    'Use sprintf() on whole VECTORS at once to format many lines in one call'
  ],
  conceptHtml:`
    <p><code>sprintf("format", values...)</code> builds a formatted string, with placeholders standing in for
    each value:</p>
    <pre class="code-block">name &lt;- "Ada"
score &lt;- 84.567
line &lt;- sprintf("%s scored %.1f", name, score)
print(line)   # "Ada scored 84.6"</pre>
    <p><code>%s</code> stands in for text, <code>%d</code> for a whole number, and <code>%.1f</code> for a
    decimal number rounded to exactly 1 decimal place (<code>%.2f</code> for 2 places, and so on). Since
    <code>%</code> is used for placeholders, a LITERAL percent sign needs <code>%%</code>:</p>
    <pre class="code-block">print(sprintf("%.1f%%", score))   # "84.6%" - %.1f formats the number, %% prints a real percent sign</pre>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">name &lt;- "Ada"
score &lt;- 84.567
line &lt;- sprintf("%s scored %.1f", name, score)
print(line)</pre>
    <ul>
      <li><code>"%s scored %.1f"</code> — the FORMAT string, with one placeholder per value that follows.</li>
      <li><code>sprintf(format, name, score)</code> — fills in <code>%s</code> with <code>name</code> and
        <code>%.1f</code> with <code>score</code>, rounded to 1 decimal, IN ORDER.</li>
    </ul>
    <p>Like most R functions, <code>sprintf()</code> is vectorized — passing a whole vector of names and a whole
    vector of scores formats every row at once, returning a character vector of formatted lines.</p>`,
  sandboxStarter:`name <- "Ada"
score <- 84.567
line <- sprintf("%s scored %.1f", name, score)
print(line)
`,
  sandboxStarter2:`names <- c("Ada", "Ben", "Cy")
scores <- c(84.567, 72.333, 90.125)
lines <- sprintf("%s: %.1f", names, scores)
print(lines)
`,
  exercises:[
    {
      title:'Format a name and a decimal score',
      desc:`Create names as c("Ada", "Ben", "Cy") and scores as c(84.567, 72.333, 90.125). Calculate line as
        sprintf("%s scored %.1f", names[1], scores[1]). Use stopifnot() to confirm that line == "Ada scored
        84.6".`,
      starter:`# Create names and scores, then calculate line below
names <- c("Ada", "Ben", "Cy")
scores <- c(84.567, 72.333, 90.125)
`,
      tests:[{type:'assert', expr:'line == "Ada scored 84.6"', label:'line exactly equals "Ada scored 84.6"'}]
    },
    {
      title:'Format with 2 decimal places instead of 1',
      desc:`Using the same names and scores, calculate line2 as sprintf("%s scored %.2f", names[2], scores[2]).
        Use stopifnot() to confirm that line2 == "Ben scored 72.33".`,
      starter:`names <- c("Ada", "Ben", "Cy")
scores <- c(84.567, 72.333, 90.125)
# Calculate line2 below
`,
      tests:[{type:'assert', expr:'line2 == "Ben scored 72.33"', label:'line2 exactly equals "Ben scored 72.33"'}]
    },
    {
      title:'Format as a whole-number percentage',
      desc:`Using the same names and scores, calculate percent_line as sprintf("%.0f%%", scores[3]). Use
        stopifnot() to confirm that percent_line == "90%" — %.0f rounds to a whole number, and %% adds a real
        percent sign.`,
      starter:`names <- c("Ada", "Ben", "Cy")
scores <- c(84.567, 72.333, 90.125)
# Calculate percent_line below
`,
      tests:[{type:'assert', expr:'percent_line == "90%"', label:'percent_line exactly equals "90%"'}]
    },
    {
      title:'Combine multiple placeholders in one line',
      desc:`Using the same names and scores, calculate full_line as sprintf("%s: %.1f%% (%s)", names[1],
        scores[1], "Pass"). Use stopifnot() to confirm that full_line == "Ada: 84.6% (Pass)".`,
      starter:`names <- c("Ada", "Ben", "Cy")
scores <- c(84.567, 72.333, 90.125)
# Calculate full_line below
`,
      tests:[{type:'assert', expr:'full_line == "Ada: 84.6% (Pass)"', label:'full_line exactly equals "Ada: 84.6% (Pass)"'}]
    },
    {
      title:'Format a whole number with %d',
      desc:`Using the same names, calculate count_line as sprintf("%d students", length(names)). Use
        stopifnot() to confirm that count_line == "3 students".`,
      starter:`names <- c("Ada", "Ben", "Cy")
# Calculate count_line below
`,
      tests:[{type:'assert', expr:'count_line == "3 students"', label:'count_line exactly equals "3 students"'}]
    },
    {
      title:'Format a whole vector at once',
      desc:`Using the same names and scores, calculate lines as sprintf("%s: %.1f", names, scores), then
        first_line as lines[1]. Use stopifnot() to confirm that first_line == "Ada: 84.6" — sprintf() formatted
        all 3 rows in one call.`,
      starter:`names <- c("Ada", "Ben", "Cy")
scores <- c(84.567, 72.333, 90.125)
# Calculate lines, then first_line below
`,
      tests:[{type:'assert', expr:'first_line == "Ada: 84.6"', label:'first_line exactly equals "Ada: 84.6"'}]
    }
  ],
  quiz:[
    {
      q:'What does %.1f do inside a sprintf() format string?',
      options:['Formats the value as text','Formats a NUMBER rounded to exactly 1 decimal place','Repeats the value once','Formats the value as a whole percentage'],
      correct:1,
      explain:'The number after the dot controls exactly how many decimal places are shown — %.1f always shows exactly one, %.2f exactly two, and so on.'
    },
    {
      q:'Why does sprintf("%.0f%%", 90.125) produce "90%" and not "90.125%"?',
      options:['It doesn\'t — this is invalid syntax','%.0f rounds the number to 0 decimal places (a whole number), and %% separately inserts a literal percent sign','%% strips out any decimal places automatically','sprintf() always rounds down'],
      correct:1,
      explain:'%.0f controls the number\'s precision (zero decimals here); %% is a completely separate placeholder that just outputs a literal % character.'
    },
    {
      q:'Why is %% needed instead of just writing % directly in a sprintf() format string?',
      options:['% has no special meaning in sprintf(), %% is just a style choice','% marks the START of a placeholder (like %s or %.1f) — writing a literal % would be misread as the start of one, so %% escapes it into a real percent sign','%% is faster to type', '%% only works at the end of a string'],
      correct:1,
      explain:'Since % always signals "a placeholder starts here," a literal percent sign needs to be escaped as %% so sprintf() doesn\'t try to interpret it as one.'
    },
    {
      q:'What does sprintf("%s: %.1f", names, scores) return, if names and scores are both vectors of length 3?',
      options:['A single formatted string combining all 3 rows into one line','A character VECTOR of length 3 — one formatted line per row, since sprintf() is vectorized just like most R functions','An error, since sprintf() only accepts single values','Exactly the same result as sprintf() on just the first element'],
      correct:1,
      explain:'sprintf() applies the format to each position across all the input vectors simultaneously, returning one formatted string per row.'
    }
  ],
  sandboxStarter3:`names <- c("Ada", "Ben", "Cy")
scores <- c(84.567, 72.333, 90.125)
lines <- sprintf("%s: %.1f%% (%d chars)", names, scores, nchar(names))
print(lines)
`,
  stretchChallenge:{
    title:'Build a report line combining count and percentage',
    desc:`Create pass_count as 18 and total_count as 20. Calculate report as sprintf("%d/%d students passed
      (%.1f%%)", pass_count, total_count, 100 * pass_count / total_count). Use stopifnot() to confirm that
      report == "18/20 students passed (90.0%)".`,
    starter:`# Create pass_count and total_count, then calculate report below
`,
    tests:[
      {type:'assert', expr:'report == "18/20 students passed (90.0%)"', label:'report exactly matches the expected text'}
    ]
  }
},
{
  key:'week7', num:7, title:'Applying a Function Across Columns',
  scenarioTag:'Real world: getting a summary of EVERY subject at once, not just one at a time',
  scenario:`Intermediate Week 1 used sapply() on a plain vector. But a data.frame is really just a LIST of
    column vectors — so sapply(df, FUN) applies FUN to every COLUMN at once, giving you one result per subject
    in a single line, instead of writing mean(df$math), mean(df$science), mean(df$english) separately.`,
  objectives:[
    'Use sapply(df, FUN) to apply a function to every column of a data.frame at once',
    'Access one column\'s result using [[ ]] with the column name',
    'Confirm that the result is named after each column',
    'Apply a CUSTOM function (not just mean/max) across every column'
  ],
  conceptHtml:`
    <p>A data.frame is really a named list of column vectors — so <code>sapply()</code> works on it exactly the
    same way it works on a list, applying the function once PER COLUMN:</p>
    <pre class="code-block">df &lt;- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55))
col_means &lt;- sapply(df, mean)
print(col_means)
#    math science
#    75.0    77.5</pre>
    <p>Instead of writing <code>mean(df$math)</code>, <code>mean(df$science)</code>, ... separately for every
    subject, one <code>sapply()</code> call handles all of them, and the result is NAMED after each column —
    so <code>col_means[["math"]]</code> pulls out just that subject's average.</p>
    <h3>Let's break down the starter code, line by line</h3>
    <pre class="code-block">df &lt;- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
col_means &lt;- sapply(df, mean)
math_mean &lt;- col_means[["math"]]</pre>
    <ul>
      <li><code>sapply(df, mean)</code> — runs <code>mean()</code> once per column, returning a named numeric
        vector, one value per subject.</li>
      <li><code>col_means[["math"]]</code> — the same named-access pattern used since Intermediate Week 9's
        lists, here pulling out just the math column's result.</li>
    </ul>
    <p>This isn't limited to built-in functions like <code>mean()</code> or <code>max()</code> — any function,
    including one you write yourself, can be applied across every column the same way.</p>`,
  sandboxStarter:`df <- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
col_means <- sapply(df, mean)
print(col_means)
`,
  sandboxStarter2:`df <- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
col_maxes <- sapply(df, max)
print(col_maxes)
`,
  exercises:[
    {
      title:'Apply mean() across every column',
      desc:`Create df as data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60,
        40, 90)). Calculate col_means as sapply(df, mean), then math_mean as col_means[["math"]]. Use
        stopifnot() to confirm that math_mean == 75.`,
      starter:`# Create df, then calculate col_means and math_mean below
df <- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
`,
      tests:[{type:'assert', expr:'math_mean == 75', label:'math_mean equals 75'}]
    },
    {
      title:'Access a different column\'s result',
      desc:`Using the same col_means, calculate science_mean as col_means[["science"]]. Use stopifnot() to
        confirm that science_mean == 77.5.`,
      starter:`df <- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
col_means <- sapply(df, mean)
# Calculate science_mean below
`,
      tests:[{type:'assert', expr:'science_mean == 77.5', label:'science_mean equals 77.5'}]
    },
    {
      title:'Apply a different function across columns',
      desc:`Using df (as before), calculate col_maxes as sapply(df, max), then english_max as
        col_maxes[["english"]]. Use stopifnot() to confirm that english_max == 90.`,
      starter:`df <- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
# Calculate col_maxes, then english_max below
`,
      tests:[{type:'assert', expr:'english_max == 90', label:'english_max equals 90'}]
    },
    {
      title:'Check the result is named after each column',
      desc:`Using col_means (as before), calculate col_names as names(col_means). Use stopifnot() to confirm
        that all(col_names == c("math", "science", "english")).`,
      starter:`df <- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
col_means <- sapply(df, mean)
# Calculate col_names below
`,
      tests:[{type:'assert', expr:'all(col_names == c("math", "science", "english"))', label:'col_names exactly equals c("math", "science", "english")'}]
    },
    {
      title:'Apply a custom function across columns',
      desc:`Using df (as before), calculate col_ranges as sapply(df, function(x) max(x) - min(x)), then
        science_range as col_ranges[["science"]]. Use stopifnot() to confirm that science_range == 40.`,
      starter:`df <- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
# Calculate col_ranges, then science_range below
`,
      tests:[{type:'assert', expr:'science_range == 40', label:'science_range equals 40'}]
    },
    {
      title:'Count values above a threshold per column',
      desc:`Using df (as before), calculate col_counts as sapply(df, function(x) sum(x >= 70)), then
        english_count as col_counts[["english"]]. Use stopifnot() to confirm that english_count == 2 — only 2
        of the 4 english scores are 70 or above.`,
      starter:`df <- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
# Calculate col_counts, then english_count below
`,
      tests:[{type:'assert', expr:'english_count == 2', label:'english_count equals 2'}]
    }
  ],
  quiz:[
    {
      q:'What does sapply(df, mean) do when df is a data.frame?',
      options:['It computes ONE overall mean across all values in the whole data.frame','It applies mean() to each COLUMN separately, returning one result per column — since a data.frame is really a list of column vectors','It computes the mean of each ROW instead of each column','It causes an error, since sapply() only works on plain vectors'],
      correct:1,
      explain:'A data.frame is internally a list of columns, so sapply() treats each column exactly like one element of a list — running the function once per column.'
    },
    {
      q:'Why is col_means[["math"]] able to pull out just the math column\'s result?',
      options:['It can\'t — sapply() results aren\'t accessible this way','sapply(df, mean) returns a result NAMED after each column, so [["math"]] works the same named-access pattern used for lists since Intermediate Week 9','It always returns the first column\'s result','[["math"]] searches the whole data.frame for the word "math"'],
      correct:1,
      explain:'sapply() preserves the column names from df in its output, so named [[ ]] access works exactly like it does on any other named list or vector.'
    },
    {
      q:'What does sapply(df, function(x) max(x) - min(x)) compute for each column?',
      options:['The average of each column','The RANGE — the difference between the highest and lowest value in that column','The number of rows in df','Nothing, this is invalid syntax'],
      correct:1,
      explain:'The custom function receives one column\'s full vector as x, so max(x) - min(x) computes that column\'s range — applied automatically to every column.'
    },
    {
      q:'Why is sapply(df, function(x) sum(x >= 70)) more useful than checking each column\'s threshold count by hand?',
      options:['It isn\'t more useful','One call handles ALL columns at once with the same logic, instead of repeating sum(df$math >= 70), sum(df$science >= 70), sum(df$english >= 70) separately','sum() cannot be used inside sapply()','It only works for exactly 2 columns'],
      correct:1,
      explain:'Writing the check once inside a function and letting sapply() apply it to every column avoids repeating the same logic for each subject by hand.'
    }
  ],
  sandboxStarter3:`df <- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
col_ranges <- sapply(df, function(x) max(x) - min(x))
col_counts <- sapply(df, function(x) sum(x >= 70))
print(col_ranges)
print(col_counts)
`,
  stretchChallenge:{
    title:'Combine sapply() with sprintf() formatting',
    desc:`Using df (given), calculate col_summary as sapply(df, function(x) sprintf("%.1f", mean(x))), then
      math_summary as col_summary[["math"]]. Use stopifnot() to confirm that math_summary == "75.0".`,
    starter:`df <- data.frame(math = c(80, 70, 90, 60), science = c(75, 85, 95, 55), english = c(70, 60, 40, 90))
# Calculate col_summary, then math_summary below
`,
    tests:[
      {type:'assert', expr:'math_summary == "75.0"', label:'math_summary exactly equals "75.0"'}
    ]
  }
}
];

const R_ADVANCED_MP1 = {
  key:'mp1',
  title:'Build a Class Trends Report',
  intro:`Three doors, combining all four weeks: cross-tabulate house and pass/fail with table() (Week 1),
    measure how strongly hours studied relates to score with cor() (Week 2), then fit a real model with lm()
    and bundle its results into a list using a function (Weeks 3 and 4).`,
  fixtureNote:`All three doors build on this same class roster:`,
  fixtureCode:`house <- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
pass <- c("Pass", "Pass", "Fail", "Pass", "Pass", "Fail")
hours <- c(1, 2, 3, 4, 5, 6)
score <- c(42, 58, 55, 75, 70, 95)`,
  doors:[
    {
      key:'a', title:'Door 1 — Cross-tabulate house and pass/fail',
      desc:`Using table (Week 1), calculate cross_table as table(house, pass), then red_pass as
        cross_table["Red", "Pass"]. Calculate total_students as sum(table(house)). Use stopifnot() to confirm
        that red_pass == 2 && total_students == 6.`,
      starter:`house <- c("Red", "Blue", "Red", "Blue", "Red", "Blue")
pass <- c("Pass", "Pass", "Fail", "Pass", "Pass", "Fail")
# Calculate cross_table, red_pass, and total_students below
`,
      tests:[
        {type:'assert', expr:'red_pass == 2 && total_students == 6', label:'red_pass and total_students are both correct'}
      ]
    },
    {
      key:'b', title:'Door 2 — Measure the hours/score relationship',
      desc:`Using cor (Week 2), calculate hours_score_cor as round(cor(hours, score), 2), then cor_positive as
        cor(hours, score) > 0. Use stopifnot() to confirm that hours_score_cor == 0.93 && cor_positive == TRUE.`,
      starter:`hours <- c(1, 2, 3, 4, 5, 6)
score <- c(42, 58, 55, 75, 70, 95)
# Calculate hours_score_cor and cor_positive below
`,
      tests:[
        {type:'assert', expr:'hours_score_cor == 0.93 && cor_positive == TRUE', label:'hours_score_cor and cor_positive are both correct'}
      ]
    },
    {
      key:'c', title:'Door 3 — Fit a model and bundle its results',
      desc:`Using lm/coef (Week 3) and a function that returns a list (Week 4): calculate df as
        data.frame(hours = hours, score = score), model as lm(score ~ hours, data = df). Write summarize_model
        as function(m) { list(slope = round(coef(m)[["hours"]], 2), intercept = round(coef(m)[["(Intercept)"]],
        2)) }. Calculate model_summary as summarize_model(model). Use stopifnot() to confirm that
        model_summary$slope == 9.17 && model_summary$intercept == 33.73.`,
      starter:`hours <- c(1, 2, 3, 4, 5, 6)
score <- c(42, 58, 55, 75, 70, 95)
# Calculate df and model, write summarize_model, then calculate model_summary below
`,
      tests:[
        {type:'assert', expr:'model_summary$slope == 9.17 && model_summary$intercept == 33.73', label:'model_summary$slope and model_summary$intercept are both correct'}
      ]
    }
  ]
};

const R_MP1 = {
  key:'mp1',
  title:'Class Attendance Report',
  intro:`Riverside Academy wants a proper attendance report. You'll build the register, pick out useful information,
    decide about one student, then summarize everyone with a loop — combining everything from Weeks 1-4.`,
  newTrick:`This project doesn't teach a brand new R feature — it combines vectors, filtering, if/else, and for
    loops from the last four weeks into one real task, the same way a real attendance report would be built.`,
  stages:[
    {
      key:'stageA',
      title:'Build and Filter the Register',
      desc:`Create a vector called attendance with the values 92, 78, 100, 65, 88, 95 — attendance percentages for
        6 students. Create a new vector called low_attendance using low_attendance &lt;- attendance[attendance &lt;
        80] — this keeps only the students below 80%. Use stopifnot() to confirm that length(low_attendance) == 2.`,
      starter:`# Create attendance, then filter it into low_attendance
`,
      tests:[{type:'assert', expr:'length(low_attendance) == 2', label:'low_attendance has exactly 2 entries'}]
    },
    {
      key:'stageB',
      title:'Classify One Student',
      desc:`One student, Priya, has an attendance score of 72. Create a variable called priya_score with the value
        72. Write category &lt;- if (priya_score &gt;= 80) "Good" else "Needs Improvement" and store the result in
        a variable called status. Use stopifnot() to confirm that status == "Needs Improvement".`,
      starter:`# Create priya_score, then store the if/else result in status
`,
      tests:[{type:'assert', expr:'status == "Needs Improvement"', label:'status equals "Needs Improvement"'}]
    },
    {
      key:'stageC',
      title:'Summarize Everyone with a Loop',
      desc:`Create attendance &lt;- c(92, 78, 100, 65, 88, 95) again. Using a for loop with if inside it, count how
        many students have attendance below 80 into a variable called low_count (start it at 0), AND add up their
        attendance into a variable called low_total (start it at 0). Use stopifnot() to confirm that low_count == 2
        and low_total == 143 (78 + 65).`,
      starter:`# Create attendance, low_count and low_total, then write your loop below
`,
      tests:[{type:'assert', expr:'low_count == 2 && low_total == 143', label:'low_count equals 2 and low_total equals 143'}]
    }
  ]
};

const R_MP2 = {
  key:'mp2',
  title:'Class Exam Report in R',
  intro:`Riverside Academy's exam season is over. You'll build the exam results table, write a function to label
    each grade, and compute class-wide statistics — bringing together everything from Weeks 1-9.`,
  fixtureNote:`Here's the exam data you'll be working with in every door of this project (recreate it fresh in
    each door's own code — nothing carries over between doors in R):`,
  fixtureCode:`exam <- data.frame(
  name = c("Ada", "Ben", "Cy", "Dee", "Eli", "Fay"),
  score = c(88, 45, 72, 91, 58, 67)
)`,
  doors:[
    {
      key:'doorA',
      title:'Build and Filter the Results Table',
      desc:`Create exam &lt;- data.frame(name = c("Ada", "Ben", "Cy", "Dee", "Eli", "Fay"),
        score = c(88, 45, 72, 91, 58, 67)). Create passing &lt;- exam[exam$score &gt;= 60, ]. Use stopifnot() to
        confirm that nrow(passing) == 4, "Ben" is NOT in passing$name, and "Eli" is NOT in passing$name.`,
      starter:`# Create exam, then filter it into passing
`,
      tests:[{type:'assert', expr:'nrow(passing) == 4 && !("Ben" %in% passing$name) && !("Eli" %in% passing$name)', label:'passing has exactly 4 rows, excluding Ben and Eli'}]
    },
    {
      key:'doorB',
      title:'Write and Apply a grade_label() Function',
      desc:`Recreate exam &lt;- data.frame(name = c("Ada", "Ben", "Cy", "Dee", "Eli", "Fay"),
        score = c(88, 45, 72, 91, 58, 67)). Define a function grade_label(score) that returns "A" if score &gt;= 80,
        "B" if score &gt;= 60 (but below 80), otherwise "C". Then use a for loop to build a vector called grades by
        calling grade_label() on each value in exam$score, appending each result with c(grades, ...). Use
        stopifnot() to confirm that length(grades) == 6, grades[1] == "A" (Ada, 88), grades[2] == "C" (Ben, 45),
        and grades[4] == "A" (Dee, 91).`,
      starter:`# Recreate exam, define grade_label, then build grades with a loop
`,
      tests:[{type:'assert', expr:'length(grades) == 6 && grades[1] == "A" && grades[2] == "C" && grades[4] == "A"', label:'grades has 6 entries with the correct labels for Ada, Ben, and Dee'}]
    },
    {
      key:'doorC',
      title:'Compute Class-Wide Statistics',
      desc:`Recreate exam &lt;- data.frame(name = c("Ada", "Ben", "Cy", "Dee", "Eli", "Fay"),
        score = c(88, 45, 72, 91, 58, 67)). Use stopifnot() to confirm ALL of the following: round(mean(exam$score),
        1) == 70.2, median(exam$score) == 69.5, AND round(sd(exam$score), 1) == 17.6.`,
      starter:`# Recreate exam, then check the class-wide statistics
`,
      tests:[{type:'assert', expr:'round(mean(exam$score), 1) == 70.2 && median(exam$score) == 69.5 && round(sd(exam$score), 1) == 17.6', label:'exam$score has the correct mean, median, and sd'}]
    }
  ]
};

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.r = {
  b: {weeks: R_WEEKS, mp1: R_MP1, mp2: R_MP2},
  i: {weeks: R_INTERMEDIATE_WEEKS, mp1: R_INTERMEDIATE_MP1, mp2: R_INTERMEDIATE_MP2},
  a: {weeks: R_WEEKS, mp1: R_MP1, mp2: R_MP2}
};
