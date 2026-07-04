/* =========================================================================
   Python Academy — Beginner Level content data
   Data-driven: the app.js render engine turns these objects into pages.
   ========================================================================= */

const BEGINNER_WEEKS = [

/* ================= WEEK 1 ================= */
{
  key:'week1', num:1, title:'Hello, Python!',
  scenarioTag:'Real world: the school announcement board',
  scenario:`Riverside Academy is installing a digital sign in the school foyer, and you've been asked to write the very
    first messages it will show. Every line you print() is a line that appears on the big screen students walk past
    every morning.`,
  objectives:[
    'Explain what a program is and run your first line of Python',
    'Use print() to display text',
    'Write comments that Python ignores',
    'Spot and fix a simple syntax error (like a missing quote)'
  ],
  conceptHtml:`
    <p>A computer program is just a list of instructions, followed in order, top to bottom. Python reads your code
    one line at a time and does exactly what it says — nothing more, nothing less.</p>
    <p>The most common instruction you'll use is <code>print()</code>, which displays text on the screen:</p>
    <pre class="code-block">print("Good morning, Riverside Academy!")</pre>
    <p>Text like <code>"Good morning, Riverside Academy!"</code> is called a <strong>string</strong> — you can wrap it
    in either double quotes <code>"..."</code> or single quotes <code>'...'</code>, but the opening and closing quote
    must match.</p>
    <p>You can leave notes for humans reading your code using <strong>comments</strong> — anything after a
    <code>#</code> is ignored by Python:</p>
    <pre class="code-block"># This line reminds staff about assembly
print("Assembly starts at 9am in the main hall")</pre>
    <p>If you forget a closing quote, or mix your quote marks up, Python will refuse to run the line and show a
    <strong>SyntaxError</strong>. That's not a crash to panic about — it's Python telling you exactly what to fix.</p>`,
  sandboxStarter:`# Try editing these announcements, then press Run!
print("Good morning, Riverside Academy!")
print("Today's lunch: Pizza Friday 🍕")
# Add your own announcement below this line
`,
  exercises:[
    {
      title:'Fix the broken sign',
      desc:`The school office typed today's announcements in a hurry and the sign is now stuck showing errors instead
        of messages. Fix both lines below so they run without any errors and both announcements are printed.`,
      starter:`print("Assembly starts at 9am)
print('Don't forget your PE kit!')`,
      tests:[
        {type:'output', contains:['Assembly starts at 9am'], label:'Prints the assembly announcement'},
        {type:'output', contains:["Don't forget your PE kit!"], label:'Prints the PE kit announcement'}
      ]
    },
    {
      title:'Add your own announcement',
      desc:`Keep the existing line below, then add ONE more print() line announcing the school's upcoming
        "Sports Day" event. Your line must include the words "Sports Day".`,
      starter:`print("Good morning, Riverside Academy!")
# Add your Sports Day announcement below
`,
      tests:[
        {type:'output', contains:['Sports Day'], label:'Announcement mentions Sports Day'}
      ]
    }
  ],
  quiz:[
    {q:'Which symbol tells Python that the rest of a line is a comment (and should be ignored)?',
     options:['//','#','--','<!--'], correct:1,
     explain:'In Python, everything after a # on a line is a comment and is ignored when the code runs.'},
    {q:'What will print("5" + "5") display?',
     options:['10','55','Error','5 5'], correct:1,
     explain:`Because both "5"s are strings (text), + joins them together as text rather than adding numbers — the
       result is the text "55".`},
    {q:'Which of these is a valid, correctly-quoted string in Python?',
     options:[`"Hello there`, `'Hello there'`, `"Hello there'`, `Hello there`], correct:1,
     explain:'A string needs matching opening and closing quotes of the same type — either both single or both double.'},
    {q:'What happens if you forget the closing quote mark on a string?',
     options:['Python guesses where it should end','Python shows a SyntaxError','The program runs but prints nothing','Python deletes the line'], correct:1,
     explain:'Python cannot tell where the text ends, so it reports a SyntaxError rather than guessing.'}
  ]
},

/* ================= WEEK 2 ================= */
{
  key:'week2', num:2, title:'Variables & Data Types',
  scenarioTag:'Real world: the digital student ID card',
  scenario:`The school is trialling digital ID cards shown on students' phones. Your job is to store each student's
    details in named boxes of memory — <strong>variables</strong> — and use them to build the card.`,
  objectives:[
    'Create variables to store information',
    'Recognise the four core data types: str, int, float, bool',
    'Use type() to check a variable\'s data type',
    'Build formatted text using f-strings'
  ],
  conceptHtml:`
    <p>A <strong>variable</strong> is a named box that stores a value so you can use it later:</p>
    <pre class="code-block">name = "Ada"
year_group = 9
height_m = 1.62
has_bus_pass = True</pre>
    <p>Python automatically works out the <strong>data type</strong>:</p>
    <ul>
      <li><code>str</code> — text, e.g. <code>"Ada"</code></li>
      <li><code>int</code> — whole numbers, e.g. <code>9</code></li>
      <li><code>float</code> — decimal numbers, e.g. <code>1.62</code></li>
      <li><code>bool</code> — <code>True</code> or <code>False</code> (capital letters, no quotes)</li>
    </ul>
    <p>You can check any variable's type with <code>type(name)</code>. To build a message from several variables,
    use an <strong>f-string</strong> — put <code>f</code> just before the opening quote, and drop variables inside
    curly braces:</p>
    <pre class="code-block">print(f"ID CARD — {name}, Year {year_group}")</pre>`,
  sandboxStarter:`name = "Ada"
year_group = 9
has_bus_pass = True
print(f"ID CARD — {name}, Year {year_group}, Bus pass: {has_bus_pass}")
print(type(name), type(year_group), type(has_bus_pass))
`,
  exercises:[
    {
      title:'Build your own ID card',
      desc:`Fill in the three variables below with real values — your own name, a year_group as a whole number
        between 7 and 11, and True or False for has_bus_pass. Then run your code.`,
      starter:`# TODO: fill these in with real values
name = ""
year_group = 0
has_bus_pass = False

print(f"ID CARD — {name}, Year {year_group}, Bus pass: {has_bus_pass}")`,
      tests:[
        {type:'assert', expr:`isinstance(name, str) and len(name.strip()) > 0`, label:'name is a non-empty piece of text'},
        {type:'assert', expr:`isinstance(year_group, int) and 7 <= year_group <= 11`, label:'year_group is a whole number between 7 and 11'},
        {type:'assert', expr:`isinstance(has_bus_pass, bool)`, label:'has_bus_pass is True or False'}
      ]
    },
    {
      title:'Fix the type bug',
      desc:`The office stored a student's age as text by mistake, so calculating next year's age crashes the
        program. Fix the bug so the code runs and correctly prints "Next year you'll be 14".`,
      starter:`age = "13"          # bug: this should be a whole number, not text
next_year_age = age + 1
print(f"Next year you'll be {next_year_age}")`,
      tests:[
        {type:'output', contains:["Next year you'll be 14"], label:'Correctly prints next year\'s age'}
      ]
    }
  ],
  quiz:[
    {q:'Which data type is 3.14?',
     options:['int','float','str','bool'], correct:1,
     explain:'Numbers with a decimal point are floats.'},
    {q:'What data type is "13" (with the quote marks)?',
     options:['int','float','str','bool'], correct:2,
     explain:'Anything inside quote marks is text — a string — even if it looks like a number.'},
    {q:'Which of these correctly creates a boolean variable?',
     options:[`is_ready = "True"`, `is_ready = true`, `is_ready = True`, `is_ready = 1.0`], correct:2,
     explain:'Python booleans must be written as True or False, capitalised, with no quote marks.'},
    {q:'What does f"Hi {name}" do?',
     options:['Prints the literal text {name}','Inserts the value of the variable name into the string','Causes a SyntaxError','Converts name to a float'], correct:1,
     explain:'An f-string replaces {name} with the current value stored in the name variable.'}
  ]
},

/* ================= WEEK 3 ================= */
{
  key:'week3', num:3, title:'Input & Operators',
  scenarioTag:'Real world: the school trip cost calculator',
  scenario:`The Year 9 trip to the science museum needs a quick calculator so the office can work out costs on the
    fly — total ticket price, and how to split a box of snacks fairly between friends.`,
  objectives:[
    'Use input() to collect information from a user',
    'Convert text input into numbers with int() and float()',
    'Use the arithmetic operators + - * / // % **',
    'Understand the order operators are applied in (precedence)'
  ],
  conceptHtml:`
    <p><code>input()</code> pauses your program and waits for someone to type a reply — but it always hands back
    a <strong>string</strong>, even if they type a number:</p>
    <pre class="code-block">name = input("What's your name? ")
age_text = input("How old are you? ")
age = int(age_text)   # convert the text "13" into the number 13</pre>
    <p>Python's arithmetic operators:</p>
    <ul>
      <li><code>+ - *</code> — add, subtract, multiply</li>
      <li><code>/</code> — divide (always gives a decimal answer)</li>
      <li><code>//</code> — <strong>floor division</strong> — divides and throws away the remainder</li>
      <li><code>%</code> — <strong>modulo</strong> — gives you only the remainder</li>
      <li><code>**</code> — power, e.g. <code>2 ** 3</code> is 8</li>
    </ul>
    <p>Just like in maths, <code>*</code> and <code>/</code> happen before <code>+</code> and <code>-</code> unless
    you use brackets to force an order.</p>`,
  sandboxStarter:`# Try it yourself — real input() prompts will pop up when you press Run
name = input("What's your name? ")
people = int(input("How many people are going on the trip? "))
ticket_price = 6
print(f"{name}, the total cost for {people} people is £{people * ticket_price}")
`,
  exercises:[
    {
      title:'Trip cost calculator',
      desc:`Write a function trip_cost(people, price_per_person) that returns the total cost of the trip
        (a whole group's tickets).`,
      starter:`def trip_cost(people, price_per_person):
    # TODO: return the total cost
    pass`,
      tests:[
        {type:'assert', expr:`trip_cost(4, 15) == 60`, label:'trip_cost(4, 15) == 60'},
        {type:'assert', expr:`trip_cost(1, 9.5) == 9.5`, label:'trip_cost(1, 9.5) == 9.5'},
        {type:'assert', expr:`trip_cost(0, 20) == 0`, label:'trip_cost(0, 20) == 0'}
      ]
    },
    {
      title:'Fair snack split',
      desc:`Write a function split_pizza(slices, friends) that returns a tuple of
        (slices_each, leftover) using // and % — how many whole slices each friend gets, and how many
        slices are left over.`,
      starter:`def split_pizza(slices, friends):
    # TODO: return (slices_each, leftover)
    pass`,
      tests:[
        {type:'assert', expr:`split_pizza(10, 3) == (3, 1)`, label:'split_pizza(10, 3) == (3, 1)'},
        {type:'assert', expr:`split_pizza(8, 4) == (2, 0)`, label:'split_pizza(8, 4) == (2, 0)'},
        {type:'assert', expr:`split_pizza(7, 2) == (3, 1)`, label:'split_pizza(7, 2) == (3, 1)'}
      ]
    }
  ],
  quiz:[
    {q:'What data type does input() always return, no matter what someone types?',
     options:['int','str','float','bool'], correct:1,
     explain:'input() always returns text (a string) — you must convert it with int() or float() if you need a number.'},
    {q:'What is 7 // 2 ?',
     options:['3.5','3','4','1'], correct:1,
     explain:'// is floor division — it divides and throws away anything after the decimal point.'},
    {q:'What is 7 % 2 ?',
     options:['3','0','1','3.5'], correct:2,
     explain:'% gives you the remainder after dividing — 7 divided by 2 is 3 remainder 1.'},
    {q:'What is the result of 2 + 3 * 4 ?',
     options:['20','14','9','24'], correct:1,
     explain:'Multiplication happens before addition, so it is 2 + (3 * 4) = 2 + 12 = 14.'}
  ]
},

/* ================= WEEK 4 ================= */
{
  key:'week4', num:4, title:'Making Decisions',
  scenarioTag:'Real world: the theme park ride checker',
  scenario:`A theme park needs a quick height-and-safety checker at the entrance to each ride, so staff can tell
    visitors instantly whether they're tall enough to ride.`,
  objectives:[
    'Use if / elif / else to make decisions',
    'Use comparison operators == != > < >= <=',
    'Combine conditions with and, or, not',
    'Understand why indentation matters in Python'
  ],
  conceptHtml:`
    <p><code>if</code> lets your program choose what to do based on a condition:</p>
    <pre class="code-block">height_cm = 145
if height_cm >= 140:
    print("Allowed on the ride!")
else:
    print("Sorry, not tall enough yet.")</pre>
    <p>Notice the colon <code>:</code> and the <strong>indentation</strong> (4 spaces) — Python uses indentation
    instead of curly braces to know which lines belong inside the if. Get the indentation wrong and you'll get an
    <code>IndentationError</code>.</p>
    <p>Chain more conditions with <code>elif</code> ("else if"):</p>
    <pre class="code-block">if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "F"</pre>
    <p>Combine conditions with <code>and</code> (both must be true), <code>or</code> (at least one must be true),
    and <code>not</code> (flips True/False).</p>`,
  sandboxStarter:`height_cm = int(input("Rider's height in cm? "))
if height_cm >= 140:
    print("Allowed on the ride!")
else:
    print("Sorry, not tall enough yet.")
`,
  exercises:[
    {
      title:'Ride height checker',
      desc:`Write a function can_ride(height_cm) that returns the exact text "Allowed" if height_cm is 140 or
        more, otherwise "Not tall enough".`,
      starter:`def can_ride(height_cm):
    # TODO: return "Allowed" or "Not tall enough"
    pass`,
      tests:[
        {type:'assert', expr:`can_ride(150) == "Allowed"`, label:'can_ride(150) == "Allowed"'},
        {type:'assert', expr:`can_ride(140) == "Allowed"`, label:'can_ride(140) == "Allowed" (exactly on the line)'},
        {type:'assert', expr:`can_ride(139) == "Not tall enough"`, label:'can_ride(139) == "Not tall enough"'}
      ]
    },
    {
      title:'Grade calculator',
      desc:`Write a function grade_from_score(score) that returns "A" for 90+, "B" for 80-89, "C" for 70-79,
        "D" for 60-69, and "F" below 60.`,
      starter:`def grade_from_score(score):
    # TODO: return the correct letter grade
    pass`,
      tests:[
        {type:'assert', expr:`grade_from_score(95) == "A"`, label:'grade_from_score(95) == "A"'},
        {type:'assert', expr:`grade_from_score(82) == "B"`, label:'grade_from_score(82) == "B"'},
        {type:'assert', expr:`grade_from_score(60) == "D"`, label:'grade_from_score(60) == "D"'},
        {type:'assert', expr:`grade_from_score(45) == "F"`, label:'grade_from_score(45) == "F"'}
      ]
    }
  ],
  quiz:[
    {q:'What does Python use instead of curly braces {} to group code inside an if statement?',
     options:['Semicolons','Indentation (spaces)','Brackets ()','Nothing needed'], correct:1,
     explain:'Python uses consistent indentation to show which lines belong inside a block.'},
    {q:'What does the and operator require to be true?',
     options:['At least one condition','Both conditions','Neither condition','Exactly one condition'], correct:1,
     explain:'and is only True when both sides of it are True.'},
    {q:'Which symbol checks if two values are equal (not assigning a value)?',
     options:['=','==','!=','equals'], correct:1,
     explain:'A single = assigns a value; == compares two values for equality.'},
    {q:'How many elif blocks can follow one if statement?',
     options:['None','Exactly one','As many as you need','Exactly three'], correct:2,
     explain:'You can chain as many elif blocks as you need between an if and an optional else.'}
  ]
}

,

/* ================= WEEK 5 ================= */
{
  key:'week5', num:5, title:'Loops',
  scenarioTag:'Real world: rocket launch countdown & times-table trainer',
  scenario:`The Year 7 science club is building a rocket-launch countdown display for their assembly demo, and a
    quick-fire times-table trainer for younger students. Both need to repeat an action automatically — perfect for
    a loop.`,
  objectives:[
    'Use a for loop with range() to repeat code a set number of times',
    'Use a while loop to repeat until a condition becomes false',
    'Build up a list of results inside a loop',
    'Understand break and the risk of an infinite loop'
  ],
  conceptHtml:`
    <p>A <strong>for loop</strong> repeats code a set number of times using <code>range()</code>:</p>
    <pre class="code-block">for i in range(5):
    print(i)   # prints 0, 1, 2, 3, 4</pre>
    <p>A <strong>while loop</strong> keeps going as long as a condition stays true — perfect for a countdown:</p>
    <pre class="code-block">count = 10
while count >= 1:
    print(count)
    count = count - 1
print("Liftoff!")</pre>
    <p>Careful — if the condition never becomes false, you get an <strong>infinite loop</strong> that never stops!
    You can also add values to a list one at a time inside a loop using <code>.append()</code>:</p>
    <pre class="code-block">squares = []
for n in range(1, 4):
    squares.append(n * n)
print(squares)   # [1, 4, 9]</pre>`,
  sandboxStarter:`count = 5
while count >= 1:
    print(count)
    count = count - 1
print("Liftoff! 🚀")
`,
  exercises:[
    {
      title:'Countdown list',
      desc:`Write a function countdown_list(n) that returns a list counting down from n to 1, e.g.
        countdown_list(5) should return [5, 4, 3, 2, 1].`,
      starter:`def countdown_list(n):
    result = []
    # TODO: use a loop to build the countdown list
    return result`,
      tests:[
        {type:'assert', expr:`countdown_list(5) == [5, 4, 3, 2, 1]`, label:'countdown_list(5) == [5, 4, 3, 2, 1]'},
        {type:'assert', expr:`countdown_list(1) == [1]`, label:'countdown_list(1) == [1]'},
        {type:'assert', expr:`countdown_list(3) == [3, 2, 1]`, label:'countdown_list(3) == [3, 2, 1]'}
      ]
    },
    {
      title:'Times table trainer',
      desc:`Write a function times_table(n) that returns a list of the first 10 multiples of n
        (n×1 up to n×10).`,
      starter:`def times_table(n):
    result = []
    # TODO: use a loop to fill result with n*1 .. n*10
    return result`,
      tests:[
        {type:'assert', expr:`times_table(2) == [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`, label:'times_table(2) is correct'},
        {type:'assert', expr:`len(times_table(3)) == 10`, label:'times_table(n) always has 10 items'},
        {type:'assert', expr:`times_table(5)[0] == 5 and times_table(5)[9] == 50`, label:'times_table(5) starts at 5 and ends at 50'}
      ]
    }
  ],
  quiz:[
    {q:'What does range(5) produce inside a for loop?',
     options:['1,2,3,4,5','0,1,2,3,4','0,1,2,3,4,5','5 only'], correct:1,
     explain:'range(5) counts from 0 up to (but not including) 5.'},
    {q:'What is the main risk with a while loop?',
     options:['It runs only once','It can never repeat','It can become infinite if the condition never becomes false','It cannot use variables'], correct:2,
     explain:'If nothing inside the loop changes the condition towards False, the loop repeats forever.'},
    {q:'Which method adds one new item to the end of a list?',
     options:['.add()','.append()','.insert()','.push()'], correct:1,
     explain:'.append(value) adds value to the end of a list.'},
    {q:'What keyword immediately stops a loop early?',
     options:['stop','exit','break','end'], correct:2,
     explain:'break immediately exits the loop it is inside.'}
  ]
},

/* ================= WEEK 6 ================= */
{
  key:'week6', num:6, title:'Lists',
  scenarioTag:'Real world: the class quiz leaderboard',
  scenario:`Your school's inter-form quiz competition needs a live leaderboard. You'll store everyone's name and
    score in lists, then work out who's winning.`,
  objectives:[
    'Create and index into a list',
    'Use negative indexing and slicing',
    'Loop over a list with a for loop',
    'Sort a list with sorted()'
  ],
  conceptHtml:`
    <p>A <strong>list</strong> stores many values in order, in one variable:</p>
    <pre class="code-block">names = ["Ada", "Sam", "Lee"]
scores = [12, 19, 15]
print(names[0])    # "Ada" — indexing starts at 0
print(names[-1])   # "Lee" — negative index counts from the end</pre>
    <p>You can loop over every item:</p>
    <pre class="code-block">for name in names:
    print(name)</pre>
    <p>And sort a list into a new order without changing the original:</p>
    <pre class="code-block">print(sorted(scores))                # [12, 15, 19]
print(sorted(scores, reverse=True))  # [19, 15, 12]</pre>`,
  sandboxStarter:`names = ["Ada", "Sam", "Lee"]
scores = [12, 19, 15]
for i in range(len(names)):
    print(f"{names[i]}: {scores[i]} points")
print("Sorted scores:", sorted(scores, reverse=True))
`,
  exercises:[
    {
      title:'Find the top scorer',
      desc:`Write a function top_scorer(names, scores) that returns the name of whoever has the highest score.
        names and scores are matching lists (same position = same person). If there's a tie, return whoever
        appears first.`,
      starter:`def top_scorer(names, scores):
    best_index = 0
    # TODO: loop through and update best_index whenever you find a higher score
    return names[best_index]`,
      tests:[
        {type:'assert', expr:`top_scorer(["Ada","Sam","Lee"], [12,19,15]) == "Sam"`, label:'Finds Sam as the top scorer'},
        {type:'assert', expr:`top_scorer(["Ada","Sam"], [20,20]) == "Ada"`, label:'On a tie, returns whoever appears first'},
        {type:'assert', expr:`top_scorer(["Only"], [5]) == "Only"`, label:'Works with a single competitor'}
      ]
    },
    {
      title:'Sort the scores',
      desc:`Write a function sort_scores_desc(scores) that returns the scores list sorted from highest to
        lowest.`,
      starter:`def sort_scores_desc(scores):
    # TODO: return scores sorted highest first
    pass`,
      tests:[
        {type:'assert', expr:`sort_scores_desc([3, 9, 1]) == [9, 3, 1]`, label:'sort_scores_desc([3,9,1]) == [9,3,1]'},
        {type:'assert', expr:`sort_scores_desc([5, 5, 2]) == [5, 5, 2]`, label:'Handles ties correctly'},
        {type:'assert', expr:`sort_scores_desc([]) == []`, label:'Handles an empty list'}
      ]
    }
  ],
  quiz:[
    {q:'What is names[0] if names = ["Ada", "Sam", "Lee"]?',
     options:['"Sam"','"Ada"','Error — lists start at 1','"Lee"'], correct:1,
     explain:'List indexing starts at 0, so names[0] is the first item, "Ada".'},
    {q:'What does names[-1] give you?',
     options:['An error','The first item','The last item','A random item'], correct:2,
     explain:'A negative index counts backwards from the end, so -1 is the last item.'},
    {q:'What does len(scores) return?',
     options:['The highest score','The number of items in the list','The lowest score','The sum of all scores'], correct:1,
     explain:'len() gives you the number of items in a list.'},
    {q:'Does sorted(scores) change the original scores list?',
     options:['Yes, it sorts it in place','No, it returns a new sorted list and leaves the original unchanged','It deletes the original','It only works on strings'], correct:1,
     explain:'sorted() returns a brand-new sorted list; the original list stays exactly as it was.'}
  ]
},

/* ================= WEEK 7 ================= */
{
  key:'week7', num:7, title:'Strings & Ciphers',
  scenarioTag:'Real world: secret notes for the spy club',
  scenario:`The Year 8 "Spy Club" wants to pass secret notes safely. You'll clean up messy text and build a
    Caesar cipher — the same shifting-letters trick used by real spies for centuries — to scramble and unscramble
    messages.`,
  objectives:[
    'Use string methods: .strip(), .title(), .upper(), .lower()',
    'Loop over the individual characters of a string',
    'Use ord() and chr() to shift letters',
    'Build up a new string character by character'
  ],
  conceptHtml:`
    <p>Strings come with built-in cleanup tools:</p>
    <pre class="code-block">name = "  ada lovelace  "
print(name.strip())        # "ada lovelace" — removes leading/trailing spaces
print(name.strip().title()) # "Ada Lovelace" — capitalises each word</pre>
    <p>You can loop over every character in a string, and every letter has a number behind the scenes
    (its position in the alphabet), which <code>ord()</code> and <code>chr()</code> let you use:</p>
    <pre class="code-block">print(ord('a'))   # 97
print(chr(98))    # 'b'</pre>
    <p>A Caesar cipher shifts every letter forward by a fixed amount, wrapping back to 'a' after 'z':</p>
    <pre class="code-block">shift = 1
print(chr((ord('a') - ord('a') + shift) % 26 + ord('a')))  # 'b'</pre>`,
  sandboxStarter:`message = "meet me at the library"
shift = 3
result = ""
for ch in message:
    if ch.isalpha():
        result += chr((ord(ch) - ord('a') + shift) % 26 + ord('a'))
    else:
        result += ch
print("Secret message:", result)
`,
  exercises:[
    {
      title:'Clean up messy names',
      desc:`Write a function clean_name(raw) that strips extra whitespace from the start/end and returns the
        name in Title Case (e.g. "Ada Lovelace").`,
      starter:`def clean_name(raw):
    # TODO: strip whitespace and title-case the name
    pass`,
      tests:[
        {type:'assert', expr:`clean_name("  ada LOVELACE  ") == "Ada Lovelace"`, label:'Cleans "  ada LOVELACE  "'},
        {type:'assert', expr:`clean_name("grace HOPPER") == "Grace Hopper"`, label:'Cleans "grace HOPPER"'},
        {type:'assert', expr:`clean_name("alan turing") == "Alan Turing"`, label:'Cleans "alan turing"'}
      ]
    },
    {
      title:'Caesar cipher',
      desc:`Write a function caesar_shift(text, shift) that shifts every lowercase letter forward by shift
        places (wrapping from 'z' back to 'a'), and leaves spaces and other characters unchanged. You can assume
        the text only contains lowercase letters and spaces.`,
      starter:`def caesar_shift(text, shift):
    result = ""
    for ch in text:
        # TODO: shift letters, leave everything else unchanged
        pass
    return result`,
      tests:[
        {type:'assert', expr:`caesar_shift("abc", 1) == "bcd"`, label:'caesar_shift("abc", 1) == "bcd"'},
        {type:'assert', expr:`caesar_shift("xyz", 3) == "abc"`, label:'caesar_shift("xyz", 3) == "abc" (wraps around)'},
        {type:'assert', expr:`caesar_shift("hello world", 2) == "jgnnq yqtnf"`, label:'caesar_shift("hello world", 2) == "jgnnq yqtnf"'}
      ]
    }
  ],
  quiz:[
    {q:'What does "  hi  ".strip() return?',
     options:['"  hi  "','"hi"','"hi  "','Error'], correct:1,
     explain:'.strip() removes whitespace from both the start and end of a string.'},
    {q:'Can you change a single character inside a string directly, e.g. text[0] = "H"?',
     options:['Yes, always','No — strings are immutable, you must build a new string','Only for the first character','Only in loops'], correct:1,
     explain:'Strings cannot be changed in place in Python — you build a new string instead.'},
    {q:'What does chr(ord(\'a\') + 1) evaluate to?',
     options:["'a'","'b'","'z'","1"], correct:1,
     explain:"ord('a') gives 97, +1 is 98, and chr(98) converts that back to the letter 'b'."},
    {q:'Which method would you use to split "one two three" into a list of words?',
     options:['.join()','.split()','.strip()','.title()'], correct:1,
     explain:'.split() breaks a string into a list of pieces, using spaces by default.'}
  ]
},

/* ================= WEEK 8 ================= */
{
  key:'week8', num:8, title:'Functions',
  scenarioTag:'Real world: the board-game night toolkit',
  scenario:`You're organising a family board-game night and want a reusable toolkit of little Python helpers —
    a dice roller, a fairness checker, a score averager — that any game can call on.`,
  objectives:[
    'Define your own functions with def',
    'Use parameters and default parameter values',
    'Return a value from a function instead of just printing it',
    'Understand that variables inside a function stay inside it (scope)'
  ],
  conceptHtml:`
    <p>You've already been writing functions this term! Here's the anatomy:</p>
    <pre class="code-block">def greet(name):        # def starts a function, name is a parameter
    return f"Hi {name}!" # return sends a value back to whoever called it

message = greet("Ada")  # calling the function
print(message)</pre>
    <p>Parameters can have a <strong>default value</strong>, used if the caller doesn't provide one:</p>
    <pre class="code-block">def roll_dice(sides=6):
    import random
    return random.randint(1, sides)

roll_dice()     # rolls a normal 6-sided die
roll_dice(20)   # rolls a 20-sided die</pre>
    <p>Variables created inside a function only exist inside it — this is called <strong>scope</strong>. Also
    remember: <code>return</code> sends a value back (so you can use it later); <code>print()</code> just
    displays it and forgets it.</p>`,
  sandboxStarter:`import random

def roll_dice(sides=6):
    return random.randint(1, sides)

print("You rolled:", roll_dice())
print("D20 roll:", roll_dice(20))
`,
  exercises:[
    {
      title:'Dice roller',
      desc:`Write a function roll_dice(sides=6) that returns a random whole number between 1 and sides
        (inclusive), defaulting to a 6-sided die if no argument is given. Use random.randint.`,
      starter:`import random

def roll_dice(sides=6):
    # TODO: return a random number between 1 and sides
    pass`,
      tests:[
        {type:'assert', expr:`all(1 <= roll_dice() <= 6 for _ in range(60))`, label:'roll_dice() with no arguments always returns 1-6'},
        {type:'assert', expr:`all(1 <= roll_dice(20) <= 20 for _ in range(60))`, label:'roll_dice(20) always returns 1-20'}
      ]
    },
    {
      title:'Average score',
      desc:`Write a function average_score(scores) that returns the mean of a list of numbers, rounded to
        1 decimal place.`,
      starter:`def average_score(scores):
    # TODO: return the mean, rounded to 1 decimal place
    pass`,
      tests:[
        {type:'assert', expr:`average_score([10, 20, 30]) == 20.0`, label:'average_score([10,20,30]) == 20.0'},
        {type:'assert', expr:`average_score([5, 5, 5, 5]) == 5.0`, label:'average_score([5,5,5,5]) == 5.0'},
        {type:'assert', expr:`average_score([1, 2]) == 1.5`, label:'average_score([1,2]) == 1.5'}
      ]
    }
  ],
  quiz:[
    {q:'What keyword starts a function definition?',
     options:['func','function','def','define'], correct:2,
     explain:'def is the keyword that starts a function definition in Python.'},
    {q:'What is the difference between return and print inside a function?',
     options:['No difference','return sends a value back to be used later; print only displays it','print is faster','return only works with numbers'], correct:1,
     explain:'return hands a value back to the caller so it can be stored or reused; print just shows text and the value is not kept.'},
    {q:'What happens if you call roll_dice() when it is defined as def roll_dice(sides=6):?',
     options:['Error — you must always pass sides','It uses 6 as the sides value','It returns None','It rolls a 1-sided die'], correct:1,
     explain:'Because sides has a default value of 6, calling the function with no arguments uses that default.'},
    {q:'If a variable is created inside a function, can code outside the function see it?',
     options:['Yes, always','No — it is local to that function unless returned','Only if it is a number','Only if you use print'], correct:1,
     explain:'Variables created inside a function have local scope — they only exist while that function runs, unless their value is returned.'}
  ]
},

/* ================= WEEK 9 ================= */
{
  key:'week9', num:9, title:'Dictionaries & Debugging',
  scenarioTag:'Real world: the school contact book',
  scenario:`The office wants a quick digital contact book to look up which year group any student is in — and
    you'll also put on your detective hat to hunt down bugs in some broken code, just like a real programmer does
    every day.`,
  objectives:[
    'Create and use a dictionary of key : value pairs',
    'Look up values safely with .get()',
    'Recognise common error types: SyntaxError, NameError, TypeError, IndentationError',
    'Fix bugs in someone else\'s code'
  ],
  conceptHtml:`
    <p>A <strong>dictionary</strong> stores information as key : value pairs, so you can look things up by name
    instead of by position:</p>
    <pre class="code-block">directory = {"Ada": "Year 9", "Sam": "Year 8"}
print(directory["Ada"])          # "Year 9"
print(directory.get("Zoe", "Not found"))  # "Not found" — safe lookup, no crash</pre>
    <p>Using <code>directory["Zoe"]</code> directly would crash with a <code>KeyError</code> if "Zoe" isn't in the
    dictionary — <code>.get()</code> lets you provide a safe fallback instead.</p>
    <p>Every programmer spends time fixing bugs. A few common error types you'll now recognise:</p>
    <ul>
      <li><strong>SyntaxError</strong> — the code isn't valid Python (missing quote, missing colon...)</li>
      <li><strong>IndentationError</strong> — spacing inside a block is wrong</li>
      <li><strong>NameError</strong> — you used a variable that was never created (often a typo)</li>
      <li><strong>TypeError</strong> — you mixed data types that don't work together, e.g. text + number</li>
    </ul>`,
  sandboxStarter:`directory = {"Ada": "Year 9", "Sam": "Year 8", "Lee": "Year 10"}
name = "Ada"
print(f"{name} is in {directory.get(name, 'Not found')}")
print(f"Zoe is in {directory.get('Zoe', 'Not found')}")
`,
  exercises:[
    {
      title:'Student lookup',
      desc:`Write a function lookup_student(directory, name) that returns the year group for name if they're in
        directory, or the exact text "Not found" if they aren't. Use .get().`,
      starter:`def lookup_student(directory, name):
    # TODO: return directory value for name, or "Not found"
    pass`,
      tests:[
        {type:'assert', expr:`lookup_student({"Ada":"Year 9","Sam":"Year 8"}, "Ada") == "Year 9"`, label:'Finds Ada'},
        {type:'assert', expr:`lookup_student({"Ada":"Year 9","Sam":"Year 8"}, "Sam") == "Year 8"`, label:'Finds Sam'},
        {type:'assert', expr:`lookup_student({"Ada":"Year 9","Sam":"Year 8"}, "Zoe") == "Not found"`, label:'Returns "Not found" for an unknown name'}
      ]
    },
    {
      title:'Bug hunt',
      desc:`This code has THREE bugs in it (a wrong comparison symbol, a missing indent, and mixing text with a
        number). Fix all three so the program runs with no errors and prints "Score is 85".`,
      starter:`score = 85
if score = 90:
    print("Excellent")
else:
print("Score is " + score)`,
      tests:[
        {type:'output', contains:['Score is 85'], label:'Program runs and prints "Score is 85"'}
      ]
    }
  ],
  quiz:[
    {q:'How do you create a dictionary linking "Ada" to "Year 9"?',
     options:[`{"Ada", "Year 9"}`, `["Ada", "Year 9"]`, `{"Ada": "Year 9"}`, `("Ada": "Year 9")`], correct:2,
     explain:'Dictionaries use curly braces with key : value pairs separated by a colon.'},
    {q:'What is the safest way to look up a key that might not exist in a dictionary?',
     options:['Use square brackets directly','Use .get() with a default value','It is always safe either way','Use a for loop'], correct:1,
     explain:'.get(key, default) returns the default instead of crashing if the key is missing.'},
    {q:'Which error would you get from using a variable you never created (often a typo)?',
     options:['SyntaxError','TypeError','NameError','IndentationError'], correct:2,
     explain:'A NameError means Python cannot find a variable with that name.'},
    {q:'Which error would "hello" + 5 cause?',
     options:['NameError','TypeError','IndentationError','No error'], correct:1,
     explain:'You cannot directly add text and a number together — convert the number with str() first.'}
  ]
}

]; // end BEGINNER_WEEKS


/* =========================================================================
   MINI PROJECT 1 — "Crack the Locker Code" (mid-level checkpoint, after Week 4)
   Uses only what's been taught so far: variables, operators, conditionals,
   plus one small "new trick" (string indexing) introduced just for this puzzle.
   No functions yet — each stage is top-level code, graded by checking variables.
   ========================================================================= */
const BEGINNER_MP1 = {
  key:'mp1', title:'Mini Project 1 — Crack the Locker Code',
  intro:`Someone jammed locker 47 shut, and the caretaker only remembers one clue about the 4-digit code: its
    digits add up to a specific number. You'll write code across three stages to check whether a guess is even a
    valid code, add up its digits, and finally combine both checks to see if a guess actually opens the locker.`,
  newTrick:`Strings act like a row of boxes you can peek into with square brackets. If <code>code = "8391"</code>,
    then <code>code[0]</code> is <code>"8"</code> (the 1st character), <code>code[1]</code> is <code>"3"</code>,
    and so on. Wrap it in <code>int(...)</code> to turn that single-character text into a real number.`,
  stages:[
    {
      key:'a', title:'Stage A — Is it even a valid code?',
      desc:`A valid locker code is always exactly 4 characters long, and every character must be a digit.
        Using the given code, set a variable called <strong>valid</strong> to True or False using len() and the
        string method .isdigit().`,
      starter:`code = "83a1"

# TODO: set valid to True if code is exactly 4 digit characters, else False
valid = None

print("valid:", valid)`,
      tests:[
        {type:'assert', expr:`valid == False`, label:'Correctly identifies "83a1" as NOT a valid 4-digit code'}
      ]
    },
    {
      key:'b', title:'Stage B — Sum the digits',
      desc:`Using the "new trick" above, set a variable called <strong>digit_total</strong> to the sum of all
        4 digits in code.`,
      starter:`code = "6304"

# TODO: add up the 4 digits using code[0], code[1], code[2], code[3]
digit_total = None

print("digit_total:", digit_total)`,
      tests:[
        {type:'assert', expr:`digit_total == 13`, label:'digit_total correctly equals 13 for code "6304"'}
      ]
    },
    {
      key:'c', title:'Stage C — Crack the locker',
      desc:`The caretaker's clue: the code's digits add up to target_sum. Combine Stage A and Stage B: set
        <strong>valid</strong>, then <strong>digit_total</strong>, then set <strong>unlocked</strong> to True only
        if the code is valid AND its digit total matches target_sum.`,
      starter:`code = "4321"
target_sum = 10

# TODO: set valid (Stage A logic)
valid = None

# TODO: set digit_total (Stage B logic)
digit_total = None

# TODO: set unlocked to True only if valid AND digit_total == target_sum
unlocked = None

print("valid:", valid, "| digit_total:", digit_total, "| unlocked:", unlocked)`,
      tests:[
        {type:'assert', expr:`valid == True`, label:'"4321" is correctly identified as valid'},
        {type:'assert', expr:`digit_total == 10`, label:'digit_total correctly equals 10'},
        {type:'assert', expr:`unlocked == True`, label:'The locker correctly unlocks!'}
      ]
    }
  ]
};


/* =========================================================================
   MINI PROJECT 2 — "Escape the Computer Lab" (capstone, after Week 9)
   Uses functions, strings, lists and dictionaries — everything from the level.
   ========================================================================= */
const BEGINNER_MP2 = {
  key:'mp2', title:'Mini Project 2 — Escape the Computer Lab',
  intro:`The computer lab door has locked automatically and the only way out is through your code. There are three
    doors between you and freedom — a coded message to decrypt, a wall of lockers to search, and a final combined
    challenge that ties everything from this level together.`,
  fixtureNote:`All three doors share this locker list — it's already provided in every editor below, you don't
    need to type it out yourself:`,
  fixtureCode:`lockers = [
    {"id": 12, "code": "nohtyp"},
    {"id": 7,  "code": "abcd"},
    {"id": 30, "code": "EDOC"},
]`,
  doors:[
    {
      key:'a', title:'Door 1 — Decode the message',
      desc:`Write a function decode_message(cipher) that reverses the text and then swaps the case of every
        letter (uppercase becomes lowercase and vice-versa). Python strings support slicing with a step of -1
        (<code>text[::-1]</code>) to reverse, and the built-in <code>.swapcase()</code> method to flip case.`,
      starter:`def decode_message(cipher):
    # TODO: reverse cipher, then swap its case, and return the result
    pass`,
      tests:[
        {type:'assert', expr:`decode_message("PYTHON") == "nohtyp"`, label:'decode_message("PYTHON") == "nohtyp"'},
        {type:'assert', expr:`decode_message("code") == "EDOC"`, label:'decode_message("code") == "EDOC"'}
      ]
    },
    {
      key:'b', title:'Door 2 — Search the lockers',
      desc:`Write a function find_key_locker(lockers, code) that loops through the lockers list (a list of
        dictionaries, each with an "id" and a "code") and returns the id of the locker whose code matches, or
        None if no locker matches.`,
      starter:`lockers = [
    {"id": 12, "code": "nohtyp"},
    {"id": 7,  "code": "abcd"},
    {"id": 30, "code": "EDOC"},
]

def find_key_locker(lockers, code):
    # TODO: loop through lockers and return the matching id, or None
    pass`,
      tests:[
        {type:'assert', expr:`find_key_locker(lockers, "nohtyp") == 12`, label:'Finds locker 12 for code "nohtyp"'},
        {type:'assert', expr:`find_key_locker(lockers, "EDOC") == 30`, label:'Finds locker 30 for code "EDOC"'},
        {type:'assert', expr:`find_key_locker(lockers, "zzzz") is None`, label:'Returns None when no locker matches'}
      ]
    },
    {
      key:'c', title:'Door 3 — Escape!',
      desc:`Write a function escape_lab(cipher, lockers) that calls decode_message() to reveal the key, then
        calls find_key_locker() to search for it, and returns the matching locker id — or the exact text
        "LOCKED" if nothing matches.`,
      starter:`lockers = [
    {"id": 12, "code": "nohtyp"},
    {"id": 7,  "code": "abcd"},
    {"id": 30, "code": "EDOC"},
]

def decode_message(cipher):
    return cipher[::-1].swapcase()

def find_key_locker(lockers, code):
    for locker in lockers:
        if locker["code"] == code:
            return locker["id"]
    return None

def escape_lab(cipher, lockers):
    # TODO: decode the cipher, search the lockers, return the id or "LOCKED"
    pass`,
      tests:[
        {type:'assert', expr:`escape_lab("PYTHON", lockers) == 12`, label:'escape_lab("PYTHON", lockers) == 12'},
        {type:'assert', expr:`escape_lab("code", lockers) == 30`, label:'escape_lab("code", lockers) == 30'},
        {type:'assert', expr:`escape_lab("zzzz", lockers) == "LOCKED"`, label:'escape_lab("zzzz", lockers) == "LOCKED"'}
      ]
    }
  ]
};

