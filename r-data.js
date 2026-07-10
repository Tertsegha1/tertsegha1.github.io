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
  i: {weeks: R_WEEKS, mp1: R_MP1, mp2: R_MP2},
  a: {weeks: R_WEEKS, mp1: R_MP1, mp2: R_MP2}
};
