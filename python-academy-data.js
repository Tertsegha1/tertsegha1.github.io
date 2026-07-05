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
  sandboxStarter2:`# The digital sign refreshes every 30 seconds — here's another batch
# The comment above this line is ignored by Python, just like this one
print("Next assembly: Friday period 1")
print("Well done Year 8 for 100% attendance this week! 🏆")
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
      title:'Print your school timetable',
      desc:`Write three separate print() lines: one that includes the words "Room 12", one that includes the word
        "Friday" (e.g. announcing a Friday lesson or trip), and one with your own message. Use comments above at
        least one line to say what it announces.`,
      starter:`# TODO: print three lines - one mentioning "Room 12", one mentioning "Friday", and one of your own

`,
      tests:[
        {type:'output', contains:['Room 12'], label:'Output mentions "Room 12"'},
        {type:'output', contains:['Friday'], label:'Output mentions "Friday"'}
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
    },
    {
      title:'Fix the library sign',
      desc:`The library's opening-hours sign is broken again — two mistakes are stopping it from running at all.
        Fix both lines so the sign runs with no errors and shows both messages.`,
      starter:`print("Welcome to the library) # opening hours 9-5
print("Please be quiet")`,
      tests:[
        {type:'output', contains:['Welcome to the library'], label:'Prints the welcome message'},
        {type:'output', contains:['Please be quiet'], label:'Prints the quiet reminder'}
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
  sandboxStarter2:`class_size = 28
average_mark = 67.5
teacher_name = "Ms Chen"
is_trip_day = False
for value in [class_size, average_mark, teacher_name, is_trip_day]:
    print(value, "->", type(value))
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
      title:'Class register',
      desc:`Fill in three variables about a lesson — subject as text, teacher as text, and is_double_period as
        True or False — then run the code to print the register line.`,
      starter:`# TODO: fill these in with real values
subject = ""
teacher = ""
is_double_period = False

print(f"{subject} with {teacher}, double period: {is_double_period}")`,
      tests:[
        {type:'assert', expr:`isinstance(subject, str) and len(subject.strip()) > 0`, label:'subject is a non-empty piece of text'},
        {type:'assert', expr:`isinstance(teacher, str) and len(teacher.strip()) > 0`, label:'teacher is a non-empty piece of text'},
        {type:'assert', expr:`isinstance(is_double_period, bool)`, label:'is_double_period is True or False'}
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
    },
    {
      title:'Fix the temperature bug',
      desc:`The weather board stores today's temperature as text by mistake, so adding the "feels like" adjustment
        crashes the program. Fix the bug so it runs and prints "It feels like 23 degrees".`,
      starter:`temperature = "20"   # bug: this should be a whole number, not text
feels_like = temperature + 3
print(f"It feels like {feels_like} degrees")`,
      tests:[
        {type:'output', contains:['It feels like 23 degrees'], label:'Correctly prints the adjusted temperature'}
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
  sandboxStarter2:`# Order of operations matters, just like in maths
ticket_price = 8
group_size = 5
discount = 2
total = group_size * ticket_price - discount
print(f"Total for the group: £{total}")
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
      title:'Sweet shop change',
      desc:`Write a function change_due(paid, cost) that returns how much change is due, rounded to 2 decimal
        places using round(...). For example, someone paying £5 for something costing £3.50 is owed £1.50.`,
      starter:`def change_due(paid, cost):
    # TODO: return round(paid - cost, 2)
    pass`,
      tests:[
        {type:'assert', expr:`change_due(5, 3.5) == 1.5`, label:'change_due(5, 3.5) == 1.5'},
        {type:'assert', expr:`change_due(10, 10) == 0`, label:'change_due(10, 10) == 0'},
        {type:'assert', expr:`change_due(2, 1.2) == 0.8`, label:'change_due(2, 1.2) == 0.8'}
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
    },
    {
      title:'Pack the supplies',
      desc:`Write a function pack_supplies(total_pens, pens_per_pack) that returns a tuple of
        (full_packs, leftover) — how many full packs of pens you can make, and how many pens are left over.`,
      starter:`def pack_supplies(total_pens, pens_per_pack):
    # TODO: return (full_packs, leftover)
    pass`,
      tests:[
        {type:'assert', expr:`pack_supplies(23, 5) == (4, 3)`, label:'pack_supplies(23, 5) == (4, 3)'},
        {type:'assert', expr:`pack_supplies(10, 2) == (5, 0)`, label:'pack_supplies(10, 2) == (5, 0)'},
        {type:'assert', expr:`pack_supplies(7, 10) == (0, 7)`, label:'pack_supplies(7, 10) == (0, 7)'}
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
  sandboxStarter2:`age = 14
has_permission_slip = True
if age >= 12 and has_permission_slip:
    print("You can join the trip!")
else:
    print("Sorry, you can't join this trip.")
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
      title:'Locker size picker',
      desc:`Write a function locker_size(items_count) that returns "Small" for 2 items or fewer, "Medium" for
        3-5 items, and "Large" for more than 5.`,
      starter:`def locker_size(items_count):
    # TODO: return "Small", "Medium" or "Large"
    pass`,
      tests:[
        {type:'assert', expr:`locker_size(1) == "Small"`, label:'locker_size(1) == "Small"'},
        {type:'assert', expr:`locker_size(2) == "Small"`, label:'locker_size(2) == "Small" (boundary)'},
        {type:'assert', expr:`locker_size(4) == "Medium"`, label:'locker_size(4) == "Medium"'},
        {type:'assert', expr:`locker_size(7) == "Large"`, label:'locker_size(7) == "Large"'}
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
    },
    {
      title:'Weather outfit picker',
      desc:`Write a function weather_outfit(temp_c, is_raining) that returns "Raincoat" if is_raining is True
        (whatever the temperature), otherwise "Coat" if temp_c is below 10, otherwise "T-shirt".`,
      starter:`def weather_outfit(temp_c, is_raining):
    # TODO: return "Raincoat", "Coat" or "T-shirt"
    pass`,
      tests:[
        {type:'assert', expr:`weather_outfit(5, True) == "Raincoat"`, label:'weather_outfit(5, True) == "Raincoat"'},
        {type:'assert', expr:`weather_outfit(5, False) == "Coat"`, label:'weather_outfit(5, False) == "Coat"'},
        {type:'assert', expr:`weather_outfit(20, False) == "T-shirt"`, label:'weather_outfit(20, False) == "T-shirt"'},
        {type:'assert', expr:`weather_outfit(20, True) == "Raincoat"`, label:'weather_outfit(20, True) == "Raincoat"'}
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
  sandboxStarter2:`# A nested loop can draw a simple pattern - here's a rocket launch pad decoration
for row in range(3):
    line = ""
    for col in range(5):
        line += "🚀"
    print(line)
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
      title:'Even numbers finder',
      desc:`Write a function even_numbers_up_to(n) that returns a list of every even number from 2 up to and
        including n.`,
      starter:`def even_numbers_up_to(n):
    result = []
    # TODO: use a loop to add each even number up to n
    return result`,
      tests:[
        {type:'assert', expr:`even_numbers_up_to(10) == [2, 4, 6, 8, 10]`, label:'even_numbers_up_to(10) == [2, 4, 6, 8, 10]'},
        {type:'assert', expr:`even_numbers_up_to(1) == []`, label:'even_numbers_up_to(1) == []'},
        {type:'assert', expr:`even_numbers_up_to(6) == [2, 4, 6]`, label:'even_numbers_up_to(6) == [2, 4, 6]'}
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
    },
    {
      title:'Sum it up',
      desc:`Write a function sum_up_to(n) that returns the sum of every whole number from 1 up to and including
        n, using a while loop.`,
      starter:`def sum_up_to(n):
    total = 0
    count = 1
    # TODO: use a while loop to add up 1 .. n
    return total`,
      tests:[
        {type:'assert', expr:`sum_up_to(5) == 15`, label:'sum_up_to(5) == 15'},
        {type:'assert', expr:`sum_up_to(1) == 1`, label:'sum_up_to(1) == 1'},
        {type:'assert', expr:`sum_up_to(10) == 55`, label:'sum_up_to(10) == 55'}
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
  sandboxStarter2:`# Slicing lets you grab just part of a list
scores = [45, 92, 67, 88, 71]
top_three = sorted(scores, reverse=True)[:3]
print("Top 3 scores:", top_three)
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
      title:'House points average',
      desc:`Write a function average_house_points(points) that returns the average of a list of numbers,
        rounded to 1 decimal place.`,
      starter:`def average_house_points(points):
    # TODO: return the average, rounded to 1 decimal place
    pass`,
      tests:[
        {type:'assert', expr:`average_house_points([10, 20, 30]) == 20.0`, label:'average_house_points([10,20,30]) == 20.0'},
        {type:'assert', expr:`average_house_points([5, 5]) == 5.0`, label:'average_house_points([5,5]) == 5.0'},
        {type:'assert', expr:`average_house_points([1, 2, 3, 4]) == 2.5`, label:'average_house_points([1,2,3,4]) == 2.5'}
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
    },
    {
      title:'Drop the lowest score',
      desc:`Write a function remove_lowest_score(scores) that returns a new list with only the first occurrence
        of the lowest score removed.`,
      starter:`def remove_lowest_score(scores):
    result = scores.copy()
    # TODO: remove the first occurrence of the lowest value from result
    return result`,
      tests:[
        {type:'assert', expr:`remove_lowest_score([5, 2, 8, 2]) == [5, 8, 2]`, label:'remove_lowest_score([5,2,8,2]) == [5,8,2]'},
        {type:'assert', expr:`remove_lowest_score([3, 3, 3]) == [3, 3]`, label:'remove_lowest_score([3,3,3]) == [3,3]'},
        {type:'assert', expr:`remove_lowest_score([9]) == []`, label:'remove_lowest_score([9]) == []'}
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
  sandboxStarter2:`# Splitting and joining text is another handy string trick
raw = "meet,me,at,the,library"
words = raw.split(",")
message = " ".join(words)
print(message)
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
      title:'Find the initials',
      desc:`Write a function initials(full_name) that returns the capital initials of each word in a name, e.g.
        initials("ada lovelace") should return "AL".`,
      starter:`def initials(full_name):
    words = full_name.split()
    result = ""
    # TODO: add the uppercase first letter of each word to result
    return result`,
      tests:[
        {type:'assert', expr:`initials("ada lovelace") == "AL"`, label:'initials("ada lovelace") == "AL"'},
        {type:'assert', expr:`initials("grace hopper") == "GH"`, label:'initials("grace hopper") == "GH"'},
        {type:'assert', expr:`initials("alan mathison turing") == "AMT"`, label:'initials("alan mathison turing") == "AMT"'}
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
    },
    {
      title:'Count the vowels',
      desc:`Write a function count_vowels(text) that returns how many vowels (a, e, i, o, u — either case)
        appear in text.`,
      starter:`def count_vowels(text):
    count = 0
    # TODO: loop over text.lower() and count the vowels
    return count`,
      tests:[
        {type:'assert', expr:`count_vowels("hello") == 2`, label:'count_vowels("hello") == 2'},
        {type:'assert', expr:`count_vowels("PYTHON") == 1`, label:'count_vowels("PYTHON") == 1'},
        {type:'assert', expr:`count_vowels("bcdfg") == 0`, label:'count_vowels("bcdfg") == 0'}
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
  sandboxStarter2:`# Functions can call other functions - here two dice rolls are added together
import random

def roll_dice(sides=6):
    return random.randint(1, sides)

def roll_twice(sides=6):
    return roll_dice(sides) + roll_dice(sides)

print("Two dice total:", roll_twice())
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
      title:'Welcome message with a default',
      desc:`Write a function greet_player(name, game="Python Quest") that returns f"Welcome to {game}, {name}!" —
        using a default parameter value so game doesn't have to be given every time.`,
      starter:`def greet_player(name, game="Python Quest"):
    # TODO: return the welcome message using an f-string
    pass`,
      tests:[
        {type:'assert', expr:`greet_player("Ada") == "Welcome to Python Quest, Ada!"`, label:'greet_player("Ada") uses the default game'},
        {type:'assert', expr:`greet_player("Sam", "Chess Club") == "Welcome to Chess Club, Sam!"`, label:'greet_player("Sam", "Chess Club") overrides the default'}
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
    },
    {
      title:'Apply a bonus',
      desc:`Write a function apply_bonus(scores, bonus) that returns a NEW list with bonus added to every
        score in scores.`,
      starter:`def apply_bonus(scores, bonus):
    result = []
    # TODO: add bonus to each score and append it to result
    return result`,
      tests:[
        {type:'assert', expr:`apply_bonus([10, 20, 30], 5) == [15, 25, 35]`, label:'apply_bonus([10,20,30], 5) == [15,25,35]'},
        {type:'assert', expr:`apply_bonus([], 5) == []`, label:'apply_bonus([], 5) == []'},
        {type:'assert', expr:`apply_bonus([0], 10) == [10]`, label:'apply_bonus([0], 10) == [10]'}
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
  sandboxStarter2:`# Looping over a dictionary with .items() gives you both the key and value
directory = {"Ada": "Year 9", "Sam": "Year 8", "Lee": "Year 10"}
for name, year in directory.items():
    print(f"{name} is in {year}")
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
      title:'Count the pets',
      desc:`Write a function count_pets(pets) where pets is a list of animal-type strings, that returns a
        dictionary counting how many times each type appears, e.g. count_pets(["cat","dog","cat"]) should
        return {"cat": 2, "dog": 1}.`,
      starter:`def count_pets(pets):
    result = {}
    # TODO: count each type of pet using result.get(pet, 0) + 1
    return result`,
      tests:[
        {type:'assert', expr:`count_pets(["cat","dog","cat"]) == {"cat":2,"dog":1}`, label:'count_pets(["cat","dog","cat"]) counts correctly'},
        {type:'assert', expr:`count_pets([]) == {}`, label:'count_pets([]) == {}'},
        {type:'assert', expr:`count_pets(["fish"]) == {"fish":1}`, label:'count_pets(["fish"]) == {"fish":1}'}
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
    },
    {
      title:'Bug hunt: the missing locker',
      desc:`This code has ONE bug — a missing indent — that stops it from running. Fix it so the program runs
        with no errors. Since "Zoe" isn't in scores, it should print "Zoe scored no score recorded".`,
      starter:`scores = {"Ada": 90, "Sam": 75}
name = "Zoe"
if name in scores:
print(f"{name} scored {scores[name]}")
else:
    print(f"{name} scored {scores.get(name, 'no score recorded')}")`,
      tests:[
        {type:'output', contains:['Zoe scored no score recorded'], label:'Program runs and prints "Zoe scored no score recorded"'}
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

/* =========================================================================
   Python Academy — Intermediate Level content data
   Builds on everything from Beginner: print, variables, input/operators,
   conditionals, loops, lists, strings, functions, dictionaries.
   ========================================================================= */

const INTERMEDIATE_WEEKS = [

/* ================= WEEK 1 ================= */
{
  key:'week1', num:1, title:'Tuples & Sets',
  scenarioTag:'Real world: the school library catalogue',
  scenario:`The school library is digitising its catalogue. Each book's core details — title, author, and year
    published — shouldn't be edited once entered, so the librarian wants them stored as fixed, unchangeable
    records. Meanwhile, sign-ups for the annual Book Fair keep arriving with accidental duplicates, and the
    librarian needs an easy way to keep only the unique names.`,
  objectives:[
    'Create and read from a tuple, and explain why tuples are immutable',
    'Unpack a tuple into separate variables in one line',
    'Create a set and use it to remove duplicate values',
    'Use set operators (& and |) to compare two groups'
  ],
  conceptHtml:`
    <p>You've already used <strong>lists</strong> to store groups of items that can change. Python has two more
    useful collection types for cases where lists aren't quite right.</p>
    <p>A <strong>tuple</strong> is like a list, but it's <em>immutable</em> — once created, you can't add, remove,
    or change its items. Tuples use round brackets:</p>
    <pre class="code-block">book = ("The Hobbit", "J.R.R. Tolkien", 1937)
print(book[0])        # The Hobbit</pre>
    <p>Tuples are perfect for grouping values that belong together and shouldn't be edited by accident — like a
    record that's already been officially saved. You can even <strong>unpack</strong> a tuple into separate
    variables in one line:</p>
    <pre class="code-block">title, author, year = book
print(author, "wrote", title)</pre>
    <p>A <strong>set</strong> is a collection of <em>unique</em> values with no fixed order — perfect for removing
    duplicates or checking membership. Sets use curly brackets, but an empty set must be written
    <code>set()</code>, never <code>{}</code> (that creates an empty dictionary instead):</p>
    <pre class="code-block">signups = {"Ada", "Grace", "Ada", "Alan"}
print(signups)          # duplicates are gone automatically
print("Ada" in signups) # True</pre>
    <p>Sets also support handy operators: <code>&amp;</code> for values in <em>both</em> sets (intersection), and
    <code>|</code> for values in <em>either</em> set (union).</p>`,
  sandboxStarter:`# Book records don't change once catalogued - tuples are perfect for this
book = ("The Hobbit", "J.R.R. Tolkien", 1937)
print(book[0])
print(book[1])

# Unpack the whole tuple into three variables in one line
title, author, year = book
print(title, "-", author, "-", year)
`,
  sandboxStarter2:`# Sign-ups keep arriving with accidental duplicates
signups = ["Ada", "Grace", "Ada", "Alan", "Grace"]
unique_signups = set(signups)
print(unique_signups)
print(len(unique_signups), "unique students signed up")

# Sets can check membership super fast
print("Ada" in unique_signups)
print("Priya" in unique_signups)
`,
  exercises:[
    {
      title:'Unpack the book record',
      desc:`A tuple <code>book</code> holds <code>("The Hobbit", "J.R.R. Tolkien", 1937)</code>. Unpack it into
        three variables called <code>title</code>, <code>author</code>, and <code>year</code>, then print:
        <code>The Hobbit was written by J.R.R. Tolkien in 1937</code>`,
      starter:`book = ("The Hobbit", "J.R.R. Tolkien", 1937)
# TODO: unpack book into title, author, year, then print the sentence
`,
      tests:[
        {type:'output', contains:['The Hobbit was written by J.R.R. Tolkien in 1937'], label:'Prints the unpacked sentence'}
      ]
    },
    {
      title:'Count the unique sign-ups',
      desc:`A list of Book Fair sign-ups has duplicate names: <code>signups = ["Ada","Grace","Ada","Alan","Grace","Ada"]</code>.
        Convert it into a set to remove duplicates, then print how many unique students signed up using
        <code>len(...)</code>. Your output should be just the number.`,
      starter:`signups = ["Ada","Grace","Ada","Alan","Grace","Ada"]
# TODO: convert to a set and print how many unique students signed up
`,
      tests:[
        {type:'output', contains:['3'], label:'Prints the correct number of unique sign-ups (3)'}
      ]
    },
    {
      title:'Find students in both clubs',
      desc:`Two sets: <code>chess = {"Ada","Alan","Grace","Tom"}</code> and
        <code>book_club = {"Grace","Tom","Priya"}</code>. Print the <strong>sorted list</strong> of students who
        are in both clubs, using <code>sorted(chess & book_club)</code> so the order is always predictable.`,
      starter:`chess = {"Ada","Alan","Grace","Tom"}
book_club = {"Grace","Tom","Priya"}
# TODO: print sorted(chess & book_club)
`,
      tests:[
        {type:'output', contains:["['Grace', 'Tom']"], label:"Prints ['Grace', 'Tom']"}
      ]
    },
    {
      title:'Fix the broken catalogue code',
      desc:`This code should build a set of unique visitor names, print them in sorted order, then print the
        library's corrected opening hours as a tuple. Fix both bugs (marked with comments) so it runs with no
        errors and both lines are correct.`,
      starter:`visitors = {}  # BUG: this creates an empty dictionary, not a set!
visitors.add("Maya")
visitors.add("Sam")
print(sorted(visitors))

hours = ("9am", "5pm")
hours[0] = "8am"  # BUG: tuples cannot be changed - fix this a different way
print(hours)`,
      tests:[
        {type:'output', contains:["['Maya', 'Sam']"], label:"Prints ['Maya', 'Sam']"},
        {type:'output', contains:["('8am', '5pm')"], label:"Prints the corrected hours tuple ('8am', '5pm')"}
      ]
    }
  ],
  quiz:[
    {q:'Which of these correctly creates an empty set (not an empty dictionary)?',
     options:['{}','set()','[]','()'], correct:1,
     explain:'{} creates an empty dictionary in Python — to make an empty set, you must use set().'},
    {q:'What happens if you try to change an item inside a tuple, like my_tuple[0] = 5?',
     options:['It works like a list','Python raises a TypeError','The tuple becomes a list automatically','Nothing happens, it is ignored'], correct:1,
     explain:'Tuples are immutable — once created, their contents cannot be changed. Attempting to do so raises a TypeError.'},
    {q:'What is true about a Python set?',
     options:['It keeps items in the order you added them','It can contain duplicate values','It automatically removes duplicate values','It uses square brackets []'], correct:2,
     explain:"Sets automatically discard duplicates — adding the same value twice has no extra effect — and don't guarantee any particular order."},
    {q:'If a = {1,2,3} and b = {2,3,4}, what does a & b give you?',
     options:['{1,2,3,4}','{2,3}','{1,4}','{}'], correct:1,
     explain:'& is the intersection operator — it returns only the values that appear in BOTH sets, here {2,3}.'}
  ]
}

,

/* ================= WEEK 2 ================= */
{
  key:'week2', num:2, title:'Reading & Writing Files',
  scenarioTag:'Real world: the school newsletter shout-outs',
  scenario:`The school newsletter team collects student shout-outs all week, then compiles them into the printed
    newsletter on Friday. Instead of retyping everything by hand, you'll save shout-outs to a real file and read
    them back — exactly how the newsletter team's actual system works.`,
  objectives:[
    'Open a file for writing and save text to it',
    'Open a file for reading and print its contents',
    "Use Python's with statement so files always close properly",
    "Use 'a' (append) mode to add to a file without erasing what's already there"
  ],
  conceptHtml:`
    <p>So far everything your programs have "remembered" has disappeared the moment they finished running. Files
    let you save data that sticks around. Python's <code>open()</code> function opens a file in a chosen
    <strong>mode</strong>:</p>
    <ul>
      <li><code>"w"</code> — write. Creates the file if it doesn't exist, and <strong>erases</strong> any existing content.</li>
      <li><code>"a"</code> — append. Adds new content to the end without erasing what's there.</li>
      <li><code>"r"</code> — read. Opens an existing file so you can read its contents.</li>
    </ul>
    <p>Always open files using a <code>with</code> statement — it automatically closes the file for you, even if
    something goes wrong partway through:</p>
    <pre class="code-block">with open("notes.txt", "w") as f:
    f.write("Hello!\\n")

with open("notes.txt", "r") as f:
    print(f.read())</pre>
    <p><code>f.read()</code> gets the whole file as one string. <code>f.readlines()</code> instead gives you a
    <strong>list</strong>, one entry per line — handy when you want to count or loop through lines.</p>`,
  sandboxStarter:`# Save today's shout-outs to a file
with open("shoutouts.txt", "w") as f:
    f.write("Well done Maya for the science fair!\\n")
    f.write("Great teamwork, Year 7B!\\n")

# Now read it back
with open("shoutouts.txt", "r") as f:
    print(f.read())
`,
  sandboxStarter2:`# Append mode adds on without erasing what's already there
with open("shoutouts.txt", "a") as f:
    f.write("Amazing effort in the recycling drive!\\n")

with open("shoutouts.txt", "r") as f:
    lines = f.readlines()
print("Total shout-outs:", len(lines))
for line in lines:
    print("-", line.strip())
`,
  exercises:[
    {
      title:"Save tonight's shout-outs",
      desc:`Write each of these shout-outs to a file called <code>shoutouts.txt</code>, one per line, then read the
        file back and print its contents.`,
      starter:`shoutouts = ["Well done Maya for the science fair!", "Great teamwork, Year 7B!"]
# TODO: write each shout-out to shoutouts.txt on its own line, then read it back and print it
`,
      tests:[
        {type:'output', contains:['Well done Maya for the science fair!'], label:'Shows the first shout-out'},
        {type:'output', contains:['Great teamwork, Year 7B!'], label:'Shows the second shout-out'}
      ]
    },
    {
      title:'Count the newsletter lines',
      desc:`The code below creates <code>draft.txt</code> for you. Open it, read its lines, and print how many
        lines it has.`,
      starter:`with open("draft.txt", "w") as f:
    f.write("Assembly moved to Thursday\\nSports Day is next Friday\\nLibrary closes early on Wednesdays\\n")

# TODO: open draft.txt, read its lines, and print how many lines it has
`,
      tests:[
        {type:'output', contains:['3'], label:'Prints the correct number of lines (3)'}
      ]
    },
    {
      title:'Append a late shout-out',
      desc:`The code below creates <code>shoutouts2.txt</code> with one shout-out already saved. Append the line
        "Great job on the recycling drive!" using append mode, then read the whole file back and print it.`,
      starter:`with open("shoutouts2.txt", "w") as f:
    f.write("Well done Year 9 for the bake sale!\\n")

# TODO: append "Great job on the recycling drive!" then read the whole file back and print it
`,
      tests:[
        {type:'output', contains:['Well done Year 9 for the bake sale!'], label:'Shows the original shout-out'},
        {type:'output', contains:['Great job on the recycling drive!'], label:'Shows the appended shout-out'}
      ]
    },
    {
      title:'Fix the broken log file',
      desc:`This code should save two log entries and print them both, but two mistakes (marked with comments)
        are stopping it from working correctly. Fix both so the file ends up containing both entries.`,
      starter:`with open("log.txt", "w") as f:
    f.write("First entry")  # BUG: missing a newline at the end

with open("log.txt", "w") as f:   # BUG: this mode erases First entry - it should add to the file instead
    f.write("Second entry")

with open("log.txt", "r") as f:
    print(f.read())`,
      tests:[
        {type:'output', contains:['First entry'], label:'Log still contains the first entry'},
        {type:'output', contains:['Second entry'], label:'Log contains the second entry'}
      ]
    }
  ],
  quiz:[
    {q:'What does opening a file with mode "r" let you do?',
     options:['Write new content',"Read the file's existing content",'Delete the file','Rename the file'], correct:1,
     explain:'"r" opens a file for reading — the file must already exist.'},
    {q:'What happens if you open an existing file using mode "w"?',
     options:['New content is added to the end','Python refuses to open it','Its existing content is erased','Nothing changes until you write'], correct:2,
     explain:'"w" mode erases any existing content in the file as soon as it is opened.'},
    {q:"What is the main benefit of using Python's with statement to open a file?",
     options:['It makes the file open faster','It automatically closes the file for you','It automatically fixes typos in the filename','It lets you open two files with one line'], correct:1,
     explain:'with automatically closes the file when the block finishes, even if an error happens partway through.'},
    {q:'Which mode adds new content to a file without erasing what is already there?',
     options:['"r"','"w"','"a"','"n"'], correct:2,
     explain:'"a" (append) mode adds new content to the end of the file, keeping the existing content intact.'}
  ]
},

/* ================= WEEK 3 ================= */
{
  key:'week3', num:3, title:'Working with CSV Data',
  scenarioTag:'Real world: the canteen lunch-order sheet',
  scenario:`The school canteen tracks lunch orders in a spreadsheet-style table: one row per order, with columns
    for name, meal, and price. That kind of table is usually stored as a <strong>CSV file</strong> ("comma-separated
    values") — and Python has a built-in module that makes reading and writing them easy.`,
  objectives:[
    'Write rows of data to a CSV file using the csv module',
    'Read a CSV file back using csv.reader',
    'Use csv.DictReader to access columns by name instead of position',
    'Process CSV data to answer a question, like a running total'
  ],
  conceptHtml:`
    <p>A CSV file is just a plain text file where each line is a row, and commas separate the columns. Python's
    built-in <code>csv</code> module reads and writes these files correctly (even when a value itself contains a
    comma), so you should always use it rather than splitting text by hand.</p>
    <pre class="code-block">import csv

with open("lunch.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Meal", "Price"])
    writer.writerow(["Ada", "Pizza", "3.50"])</pre>
    <p><code>csv.reader</code> gives you each row as a plain list, in column order — including the header row,
    which you often need to skip. <code>csv.DictReader</code> is usually more convenient: it uses the first row as
    column names, so you can access <code>row["Name"]</code> instead of <code>row[0]</code>:</p>
    <pre class="code-block">with open("lunch.csv", "r", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["Name"], "ordered", row["Meal"])</pre>
    <p>Every value read from a CSV file is text (a string) — even numbers — so convert with <code>int(...)</code>
    or <code>float(...)</code> before doing any maths with them.</p>`,
  sandboxStarter:`import csv

with open("lunch.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Meal", "Price"])
    writer.writerow(["Ada", "Pizza", "3.50"])
    writer.writerow(["Sam", "Pasta", "3.20"])

with open("lunch.csv", "r", newline="") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
`,
  sandboxStarter2:`import csv

# DictReader lets you access columns by name, which reads much more clearly
with open("lunch.csv", "r", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["Name"], "ordered", row["Meal"], "for £" + row["Price"])
`,
  exercises:[
    {
      title:'Write the order sheet',
      desc:`Write these orders to <code>orders.csv</code> with a header row <code>Name,Meal,Price</code>, then read
        the file back with <code>csv.reader</code> and print each row.`,
      starter:`import csv

orders = [("Ada", "Pizza", "3.50"), ("Sam", "Pasta", "3.20")]
# TODO: write orders.csv with a header row then each order, then read it back and print each row
`,
      tests:[
        {type:'output', contains:["['Name', 'Meal', 'Price']"], label:'Prints the header row'},
        {type:'output', contains:["['Ada', 'Pizza', '3.50']"], label:"Prints Ada's order row"},
        {type:'output', contains:["['Sam', 'Pasta', '3.20']"], label:"Prints Sam's order row"}
      ]
    },
    {
      title:'Total the lunch orders',
      desc:`The code below creates <code>lunch.csv</code> for you. Use <code>csv.DictReader</code> to add up every
        Price value (as a float), then print the total formatted to 2 decimal places, e.g. using
        <code>f"{total:.2f}"</code>.`,
      starter:`import csv
with open("lunch.csv", "w", newline="") as f:
    f.write("Name,Meal,Price\\nAda,Pizza,3.50\\nSam,Pasta,3.20\\nTom,Pizza,3.50\\n")

# TODO: use csv.DictReader to sum all the Price values, then print the total to 2 decimal places
`,
      tests:[
        {type:'output', contains:['10.20'], label:'Prints the correct total (10.20)'}
      ]
    },
    {
      title:'Find who ordered pizza',
      desc:`The code below creates <code>lunch2.csv</code> for you. Use <code>csv.DictReader</code> to print the
        name of everyone whose Meal was "Pizza" (one name per line).`,
      starter:`import csv
with open("lunch2.csv", "w", newline="") as f:
    f.write("Name,Meal,Price\\nAda,Pizza,3.50\\nSam,Pasta,3.20\\nTom,Pizza,3.50\\nPriya,Salad,2.80\\n")

# TODO: print the name of everyone who ordered "Pizza"
`,
      tests:[
        {type:'output', contains:['Ada'], label:'Prints Ada (ordered Pizza)'},
        {type:'output', contains:['Tom'], label:'Prints Tom (ordered Pizza)'}
      ]
    },
    {
      title:'Fix the broken scoreboard',
      desc:`This code should total up everyone's Score column, but it crashes because it never skips the header
        row before converting text to numbers. Fix the one bug so it correctly prints the total.`,
      starter:`import csv
with open("scores.csv", "w", newline="") as f:
    f.write("Student,Score\\nAda,88\\nSam,73\\n")

total = 0
with open("scores.csv", "r", newline="") as f:
    reader = csv.reader(f)
    for row in reader:
        total += int(row[1])  # BUG: this also runs on the header row - skip it first
print(total)`,
      tests:[
        {type:'output', contains:['161'], label:'Prints the correct total (161)'}
      ]
    }
  ],
  quiz:[
    {q:'What do you need to import to work with CSV files easily in Python?',
     options:['files','csv','pandas','data'], correct:1,
     explain:"Python's built-in csv module handles reading and writing CSV files correctly."},
    {q:'What does csv.reader give you for each row?',
     options:['A dictionary','A single string','A list of strings','A tuple of numbers'], correct:2,
     explain:'csv.reader gives each row as a plain list of strings, in column order.'},
    {q:'What does csv.DictReader let you do that plain csv.reader does not?',
     options:['Read faster','Access columns by their header name','Write to the file','Skip the header row automatically'], correct:1,
     explain:'DictReader uses the first row as column names, so you can write row["Name"] instead of row[0].'},
    {q:'Why do you usually need int() or float() when working with numbers from a CSV file?',
     options:['CSV files cannot store numbers','Every value read from a CSV is text, even numbers','It makes the file smaller','It is not actually necessary'], correct:1,
     explain:'Every value read from a CSV file is a string, even if it looks like a number, so you must convert it before doing maths.'}
  ]
},

/* ================= WEEK 4 ================= */
{
  key:'week4', num:4, title:'Error Handling & Validation',
  scenarioTag:'Real world: the sports day sign-up form',
  scenario:`The Sports Day sign-up form keeps crashing whenever a student types something unexpected — letters
    instead of numbers, or a ticket count that's too high. Instead of letting the whole program crash, you'll
    learn to catch problems gracefully and show a helpful message instead.`,
  objectives:[
    'Use try/except to catch an error instead of crashing',
    'Catch a specific error type, like ValueError or ZeroDivisionError',
    'Use an else clause to run code only when no error occurred',
    'Raise your own error with a helpful message using raise'
  ],
  conceptHtml:`
    <p>So far, a mistake like converting the text <code>"abc"</code> to a number would crash your whole program.
    A <code>try</code>/<code>except</code> block lets you catch that error and handle it instead:</p>
    <pre class="code-block">try:
    age = int("abc")
except ValueError:
    print("That's not a valid number!")</pre>
    <p>Python has different named errors for different problems — <code>ValueError</code> for a badly-formed
    value, <code>ZeroDivisionError</code> for dividing by zero, and more. Catching the <em>specific</em> error type
    is better than catching everything, since it won't accidentally hide a real bug elsewhere in your code.</p>
    <p>An <code>else</code> clause runs only when the <code>try</code> block succeeded with no error:</p>
    <pre class="code-block">try:
    result = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero")
else:
    print("Result:", result)</pre>
    <p>You can also deliberately raise your own error with a helpful message, using <code>raise</code> — useful
    inside a function to reject bad input before it causes problems elsewhere:</p>
    <pre class="code-block">def book_tickets(n):
    if n > 10:
        raise ValueError("Ticket count must be 10 or fewer")
    return f"Booked {n} tickets"</pre>`,
  sandboxStarter:`age_text = "abc"
try:
    age = int(age_text)
except ValueError:
    print("Invalid age entered")
else:
    print("Age doubled:", age * 2)
`,
  sandboxStarter2:`def book_tickets(n):
    if n < 0 or n > 10:
        raise ValueError("Ticket count must be between 0 and 10")
    return f"Booked {n} tickets"

try:
    print(book_tickets(15))
except ValueError as e:
    print("Booking failed:", e)
`,
  exercises:[
    {
      title:'Catch the bad age',
      desc:`Try to convert <code>age_text</code> to a whole number. If it fails with a <code>ValueError</code>,
        print <code>Invalid age entered</code>. If it succeeds, print the age doubled instead (use an
        <code>else</code> clause).`,
      starter:`age_text = "abc"
# TODO: try converting age_text to int; catch ValueError and print "Invalid age entered";
# otherwise print the age doubled
`,
      tests:[
        {type:'output', contains:['Invalid age entered'], label:'Prints the invalid-age message'}
      ]
    },
    {
      title:'Safe division',
      desc:`Try dividing <code>a</code> by <code>b</code>. If a <code>ZeroDivisionError</code> happens, print
        <code>Cannot divide by zero</code>. Otherwise print the result.`,
      starter:`a = 10
b = 0
# TODO: try a / b; catch ZeroDivisionError and print "Cannot divide by zero"; otherwise print the result
`,
      tests:[
        {type:'output', contains:['Cannot divide by zero'], label:'Prints the divide-by-zero message'}
      ]
    },
    {
      title:'Validate a ticket count',
      desc:`Call <code>book_tickets(15)</code> inside a try/except block. Since 15 is more than the allowed
        maximum, it will raise a <code>ValueError</code> — catch it and print the error's message.`,
      starter:`def book_tickets(n):
    if n < 0 or n > 10:
        raise ValueError("Ticket count must be between 0 and 10")
    return f"Booked {n} tickets"

# TODO: call book_tickets(15) inside a try/except ValueError, printing the error message if it fails
`,
      tests:[
        {type:'output', contains:['Ticket count must be between 0 and 10'], label:"Prints the validation error's message"}
      ]
    },
    {
      title:'Fix the broken totaliser',
      desc:`This code should skip invalid values and still add up all the valid ones, but one bug (marked with a
        comment) means the total ends up wrong. Fix it so the final total is correct.`,
      starter:`values = ["10", "20", "oops", "40"]
total = 0
for v in values:
    try:
        total = int(v)  # BUG: this replaces total instead of adding to it
    except ValueError:
        print("Skipping invalid value:", v)
print(total)`,
      tests:[
        {type:'output', contains:['Skipping invalid value: oops'], label:'Prints the skip message for "oops"'},
        {type:'output', contains:['70'], label:'Prints the correct total (70)'}
      ]
    }
  ],
  quiz:[
    {q:'What keyword pairing lets you handle an error instead of crashing?',
     options:['if/else','try/except','while/break','def/return'], correct:1,
     explain:'try/except lets your code attempt something risky and handle the error gracefully if it fails.'},
    {q:'What error does int("hello") raise?',
     options:['TypeError','ValueError','NameError','SyntaxError'], correct:1,
     explain:'ValueError is raised when a value cannot be converted to the requested type, like text that is not a number.'},
    {q:'What error is raised when you divide a number by zero?',
     options:['ZeroDivisionError','ValueError','MathError','OverflowError'], correct:0,
     explain:'Python raises ZeroDivisionError specifically for division (or modulo) by zero.'},
    {q:'How do you deliberately trigger your own error with a custom message?',
     options:['error("message")','except("message")','raise ValueError("message")','stop("message")'], correct:2,
     explain:'raise, followed by an exception type and a message, lets you deliberately signal that something went wrong.'}
  ]
},

/* ================= WEEK 5 ================= */
{
  key:'week5', num:5, title:'Modules & the Standard Library',
  scenarioTag:'Real world: the quiz-night organiser toolkit',
  scenario:`You've been asked to build a little toolkit for school quiz nights and events — picking a fair team
    captain, rolling dice for tie-breakers, and counting down the days to Sports Day. Python already has
    ready-made <strong>modules</strong> for all of this, so you don't need to write any of it from scratch.`,
  objectives:[
    'Import and use a module from the standard library, like random or math',
    'Use from module import name to import just one function directly',
    'Use a module alias with import module as name',
    'Explain why grouping related functions together makes code easier to reuse'
  ],
  conceptHtml:`
    <p>Python comes with a huge collection of ready-made <strong>modules</strong> — files full of useful functions
    you can import instead of writing yourself. You've already used one without necessarily calling it that:
    <code>csv</code>. Two more you'll use constantly are <code>random</code> and <code>math</code>:</p>
    <pre class="code-block">import random
print(random.choice(["Ada", "Sam", "Tom"]))  # picks one at random
print(random.randint(1, 6))                  # a random whole number 1-6

import math
print(math.sqrt(16))   # 4.0
print(math.pi)          # 3.14159...</pre>
    <p>Sometimes you only need one function from a module — <code>from module import name</code> lets you use it
    directly, without the module name in front:</p>
    <pre class="code-block">from datetime import date
today = date(2026, 3, 1)</pre>
    <p>And if a module's name is long or you'll type it a lot, give it a shorter <strong>alias</strong>:</p>
    <pre class="code-block">import statistics as stats
print(stats.mean([4, 8, 6]))</pre>
    <p>Grouping related functions together — whether in a standard library module or your own code — makes them
    easy to find, test once, and reuse everywhere instead of rewriting the same logic repeatedly.</p>`,
  sandboxStarter:`import random

names = ["Ada", "Sam", "Tom", "Priya"]
captain = random.choice(names)
print("Tonight's quiz captain is:", captain)

die_roll = random.randint(1, 6)
print("Tie-breaker roll:", die_roll)
`,
  sandboxStarter2:`from datetime import date
import math

today = date(2026, 3, 1)
sports_day = date(2026, 3, 15)
days_left = (sports_day - today).days
print("Days until Sports Day:", days_left)

radius = 5
area = math.pi * radius ** 2
print("Circle area:", round(area, 2))
`,
  exercises:[
    {
      title:'Pick a team captain',
      desc:`Use <code>random.choice(names)</code> to pick a captain from the <code>names</code> list, store it in
        a variable called <code>captain</code>, then print <code>The captain is: &lt;name&gt;</code>.`,
      starter:`import random

names = ["Ada", "Sam", "Tom", "Priya"]
# TODO: pick a random captain from names, store it in "captain", then print "The captain is: " + captain
`,
      tests:[
        {type:'output', contains:['The captain is:'], label:'Prints "The captain is:" followed by a name'},
        {type:'assert', expr:`captain in names`, label:'captain is one of the names in the list'}
      ]
    },
    {
      title:'Roll for the tie-breaker',
      desc:`Use <code>random.randint(1, 6)</code> to roll two dice, storing them in <code>die1</code> and
        <code>die2</code>, then print both.`,
      starter:`import random

# TODO: roll two dice using random.randint(1, 6), store as die1 and die2, then print both
`,
      tests:[
        {type:'assert', expr:`1 <= die1 <= 6`, label:'die1 is between 1 and 6'},
        {type:'assert', expr:`1 <= die2 <= 6`, label:'die2 is between 1 and 6'}
      ]
    },
    {
      title:'Count down to Sports Day',
      desc:`Using <code>from datetime import date</code>, work out how many days there are between
        <code>date(2026, 3, 1)</code> and Sports Day on <code>date(2026, 3, 15)</code>. Store the result in
        <code>days_left</code> and print it.`,
      starter:`from datetime import date

today = date(2026, 3, 1)
sports_day = date(2026, 3, 15)
# TODO: work out how many days are between today and sports_day, store in days_left, then print it
`,
      tests:[
        {type:'assert', expr:`days_left == 14`, label:'days_left == 14'}
      ]
    },
    {
      title:'Fix the broken area calculator',
      desc:`This code should calculate the area of a circle, but it imports a module that doesn't exist. Fix the
        one bug so it correctly prints the area rounded to 2 decimal places.`,
      starter:`import maths  # BUG: the module is called "math", not "maths"

radius = 5
area = maths.pi * radius ** 2
print(round(area, 2))`,
      tests:[
        {type:'assert', expr:`round(area,2) == 78.54`, label:'area rounds to 78.54'}
      ]
    }
  ],
  quiz:[
    {q:'Which module would you import to generate random numbers or make a random choice?',
     options:['math','random','datetime','choice'], correct:1,
     explain:'The random module provides functions like random.choice() and random.randint().'},
    {q:'What does "from datetime import date" let you do?',
     options:['Use date() directly instead of datetime.date()','Import every function in Python','Make dates faster to calculate','Nothing different from import datetime'], correct:0,
     explain:'Importing a specific name lets you use it directly, without the module name in front.'},
    {q:'What does "import math as m" let you do?',
     options:['Delete the math module','Use the shorter name m instead of math','Import only part of the module','Rename math permanently for every program'], correct:1,
     explain:'An alias just gives you a shorter name to refer to the same module within your code.'},
    {q:'Why is it useful to group related functions together into a module or toolkit?',
     options:['It makes your program run faster','Python requires it','It makes code easier to find, test, and reuse','It uses less memory'], correct:2,
     explain:'Grouping related functions together makes them easier to locate, test once, and reuse instead of rewriting logic repeatedly.'}
  ]
}

,

/* ================= WEEK 6 ================= */
{
  key:'week6', num:6, title:'Classes & Objects',
  scenarioTag:'Real world: the school club membership system',
  scenario:`Every school club — Chess Club, Book Club, Debate Club — needs to track its own name and its own
    list of members. Instead of juggling separate variables for every single club, you'll build a
    <strong>class</strong>: a blueprint for creating "Club" objects that each carry their own data around with
    them.`,
  objectives:[
    'Define a class with an __init__ method and instance attributes',
    'Create (instantiate) objects from a class',
    'Define and call methods on an object',
    'Explain why each object has its own independent copy of its attributes'
  ],
  conceptHtml:`
    <p>A <strong>class</strong> is a blueprint for creating objects that bundle data and behaviour together. The
    special <code>__init__</code> method runs automatically when you create a new object, and sets up its starting
    attributes:</p>
    <pre class="code-block">class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(self, student):
        self.members.append(student)

    def member_count(self):
        return len(self.members)</pre>
    <p><code>self</code> refers to "this particular object" — every method needs it as its first parameter, and
    you use <code>self.something</code> to store or read data that belongs to that object specifically.</p>
    <p>Creating an object from a class is called <strong>instantiation</strong>. Each object you create is
    completely independent — changing one doesn't affect another:</p>
    <pre class="code-block">chess_club = Club("Chess Club")
chess_club.add_member("Ada")

art_club = Club("Art Club")
art_club.add_member("Tom")

print(chess_club.member_count())  # 1 - unaffected by art_club</pre>`,
  sandboxStarter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(self, student):
        self.members.append(student)

    def member_count(self):
        return len(self.members)

chess_club = Club("Chess Club")
chess_club.add_member("Ada")
chess_club.add_member("Sam")
print(chess_club.name, "has", chess_club.member_count(), "members")
`,
  sandboxStarter2:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(self, student):
        self.members.append(student)

    def member_count(self):
        return len(self.members)

# Two separate objects, two separate lists of members
chess_club = Club("Chess Club")
chess_club.add_member("Ada")

art_club = Club("Art Club")
art_club.add_member("Tom")
art_club.add_member("Priya")

print(chess_club.name, "-", chess_club.member_count())
print(art_club.name, "-", art_club.member_count())
`,
  exercises:[
    {
      title:'Create a Club object and add members',
      desc:`Using the <code>Club</code> class below, create a Club called "Chess Club", add "Ada", "Sam", and
        "Tom" as members, then print how many members it has.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(self, student):
        self.members.append(student)

    def member_count(self):
        return len(self.members)

# TODO: create a Club called "Chess Club", add Ada, Sam and Tom, then print the member count
`,
      tests:[
        {type:'output', contains:['3'], label:'Prints the correct member count (3)'}
      ]
    },
    {
      title:'Add a has_member method',
      desc:`Finish the <code>has_member(self, name)</code> method so it returns <code>True</code> if
        <code>name</code> is in the club's members list, and <code>False</code> otherwise.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(self, student):
        self.members.append(student)

    def has_member(self, name):
        # TODO: return True if name is in self.members, otherwise False
        pass

club = Club("Book Club")
club.add_member("Priya")
club.add_member("Grace")
print(club.has_member("Priya"))
print(club.has_member("Sam"))`,
      tests:[
        {type:'assert', expr:`club.has_member("Priya") == True`, label:'has_member("Priya") is True'},
        {type:'assert', expr:`club.has_member("Sam") == False`, label:'has_member("Sam") is False'}
      ]
    },
    {
      title:'Two independent clubs',
      desc:`Create two separate <code>Club</code> objects: <code>chess_club</code> ("Chess Club") with members
        Ada and Sam, and <code>art_club</code> ("Art Club") with members Tom, Priya, and Grace. Each club's
        member list should be completely independent of the other's.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(self, student):
        self.members.append(student)

    def member_count(self):
        return len(self.members)

# TODO: create chess_club with members Ada and Sam, and art_club with members Tom, Priya, and Grace
`,
      tests:[
        {type:'assert', expr:`chess_club.member_count() == 2`, label:'chess_club has 2 members'},
        {type:'assert', expr:`art_club.member_count() == 3`, label:'art_club has 3 members'},
        {type:'assert', expr:`chess_club.name == "Chess Club"`, label:'chess_club.name is "Chess Club"'}
      ]
    },
    {
      title:'Fix the broken club class',
      desc:`This code should add a member and print the club's member count, but one method is missing the
        <code>self</code> parameter every method needs. Fix the bug so it runs correctly.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(student):  # BUG: missing "self" as the first parameter
        self.members.append(student)

    def member_count(self):
        return len(self.members)

club = Club("Debate Club")
club.add_member("Maya")
print(club.member_count())`,
      tests:[
        {type:'assert', expr:`club.member_count() == 1`, label:'club.member_count() == 1'}
      ]
    }
  ],
  quiz:[
    {q:'What does the __init__ method do?',
     options:['Deletes an object','Runs automatically when a new object is created, to set it up','Prints the object','Only runs once per program, ever'], correct:1,
     explain:'__init__ runs automatically every time you create a new object from the class, setting up its starting attributes.'},
    {q:'What does "self" refer to inside a method?',
     options:['The class itself, not any particular object','This particular object the method was called on','A built-in Python keyword with no real meaning','The first argument passed to the method by the caller'], correct:1,
     explain:"self refers to the specific object the method is being called on, letting you read and change that object's own data."},
    {q:'If chess_club and art_club are both Club objects, does changing chess_club.members affect art_club.members?',
     options:['Yes, always','No, each object has its own independent attributes','Only if they share the same name','Only the first time'], correct:1,
     explain:'Every object created from a class has its own independent copy of the attributes set up in __init__.'},
    {q:'What is the process of creating an object from a class called?',
     options:['Declaration','Importing','Instantiation','Inheritance'], correct:2,
     explain:'Creating an object from a class blueprint is called instantiation.'}
  ]
}

,

/* ================= WEEK 7 ================= */
{
  key:'week7', num:7, title:'Inheritance & Encapsulation',
  scenarioTag:'Real world: specialised school clubs',
  scenario:`Sports clubs are still clubs — they have a name and members, just like Book Club or Chess Club — but
    they also need extra information a general club doesn't, like which sport they play. Instead of rewriting
    everything from scratch, you'll build a specialised version of <code>Club</code> that reuses everything it
    already does.`,
  objectives:[
    'Create a subclass that inherits from a parent class',
    "Use super().__init__() to reuse the parent class's setup code",
    'Add a new method to a subclass that the parent class does not have',
    'Explain the idea of encapsulation using an underscore-prefixed attribute'
  ],
  conceptHtml:`
    <p><strong>Inheritance</strong> lets one class reuse everything another class already does, then add its own
    extras. Write the parent class name in brackets to inherit from it:</p>
    <pre class="code-block">class SportsClub(Club):
    def __init__(self, name, sport):
        super().__init__(name)   # reuse Club's setup (sets name and members)
        self.sport = sport

    def describe(self):
        return f"{self.name} plays {self.sport}"</pre>
    <p><code>super().__init__(name)</code> calls the parent class's own <code>__init__</code>, so you don't have
    to repeat <code>self.name = name</code> and <code>self.members = []</code> all over again. A
    <code>SportsClub</code> object can still use every method <code>Club</code> already has, like
    <code>add_member()</code>, for free.</p>
    <p><strong>Encapsulation</strong> means protecting an object's internal data from being changed carelessly
    from outside. By convention, a leading underscore like <code>self._balance</code> signals "this is internal —
    use the class's own methods to change it safely, don't touch it directly":</p>
    <pre class="code-block">class BankAccount:
    def __init__(self, balance):
        self._balance = balance

    def withdraw(self, amount):
        if amount <= self._balance:   # the method checks the rules for you
            self._balance -= amount</pre>`,
  sandboxStarter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []
    def add_member(self, student):
        self.members.append(student)
    def member_count(self):
        return len(self.members)

class SportsClub(Club):
    def __init__(self, name, sport):
        super().__init__(name)
        self.sport = sport
    def describe(self):
        return f"{self.name} plays {self.sport}"

rugby = SportsClub("Rugby Club", "rugby")
rugby.add_member("Ada")  # inherited from Club, no extra code needed!
print(rugby.describe())
print(rugby.member_count())
`,
  sandboxStarter2:`class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # underscore = "internal, use the methods instead"

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

    def withdraw(self, amount):
        if amount > 0 and amount <= self._balance:
            self._balance -= amount

    def get_balance(self):
        return self._balance

account = BankAccount(50)
account.deposit(20)
account.withdraw(200)  # rejected - not enough funds, the method protects the balance
print(account.get_balance())
`,
  exercises:[
    {
      title:'Create a SportsClub subclass',
      desc:`Using the given <code>Club</code> and <code>SportsClub</code> classes, create a SportsClub called
        "Rugby Club" that plays "rugby", then print <code>club.describe()</code>.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []
    def add_member(self, student):
        self.members.append(student)
    def member_count(self):
        return len(self.members)

class SportsClub(Club):
    def __init__(self, name, sport):
        super().__init__(name)
        self.sport = sport
    def describe(self):
        return f"{self.name} plays {self.sport}"

# TODO: create a SportsClub called "Rugby Club" that plays "rugby", store it as "club", then print club.describe()
`,
      tests:[
        {type:'output', contains:['Rugby Club plays rugby'], label:'Prints "Rugby Club plays rugby"'}
      ]
    },
    {
      title:'Use an inherited method',
      desc:`Create a <code>rugby</code> SportsClub ("Rugby Club", "rugby"), then use the <strong>inherited</strong>
        <code>add_member</code> method to add "Ada" and "Sam", and print <code>member_count()</code>.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []
    def add_member(self, student):
        self.members.append(student)
    def member_count(self):
        return len(self.members)

class SportsClub(Club):
    def __init__(self, name, sport):
        super().__init__(name)
        self.sport = sport

# TODO: create rugby = SportsClub("Rugby Club", "rugby"), add Ada and Sam using the inherited add_member, print member_count()
`,
      tests:[
        {type:'assert', expr:`rugby.member_count() == 2`, label:'rugby.member_count() == 2'}
      ]
    },
    {
      title:'Protect the balance',
      desc:`Finish the <code>withdraw(self, amount)</code> method so it only subtracts from <code>_balance</code>
        when <code>amount</code> is positive AND no more than the current balance — otherwise it should do
        nothing.`,
      starter:`class BankAccount:
    def __init__(self, balance):
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

    def withdraw(self, amount):
        # TODO: only subtract amount if amount > 0 and amount <= self._balance
        pass

    def get_balance(self):
        return self._balance

account = BankAccount(50)
account.deposit(20)
account.withdraw(100)  # should be rejected - not enough funds
account.withdraw(30)   # should succeed
print(account.get_balance())`,
      tests:[
        {type:'assert', expr:`account.get_balance() == 40`, label:'account.get_balance() == 40'}
      ]
    },
    {
      title:'Fix the broken subclass',
      desc:`This subclass forgets to set up the parent class's data, so <code>member_count()</code> crashes. Fix
        the one bug so it works correctly.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []
    def add_member(self, student):
        self.members.append(student)
    def member_count(self):
        return len(self.members)

class SportsClub(Club):
    def __init__(self, name, sport):
        # BUG: this never calls the parent class's __init__, so self.name/self.members are never set up
        self.sport = sport

club = SportsClub("Hockey Club", "hockey")
club.add_member("Maya")
print(club.member_count())`,
      tests:[
        {type:'assert', expr:`club.member_count() == 1`, label:'club.member_count() == 1'}
      ]
    }
  ],
  quiz:[
    {q:'What does class SportsClub(Club): mean?',
     options:['SportsClub replaces Club entirely','SportsClub inherits from Club, reusing its methods and attributes','Club inherits from SportsClub','Nothing - the brackets are optional decoration'], correct:1,
     explain:'Writing the parent class name in brackets makes SportsClub inherit everything Club already does.'},
    {q:"What does super().__init__(name) do inside a subclass's __init__?",
     options:['Deletes the parent class',"Calls the parent class's own __init__ to reuse its setup code",'Creates a brand new unrelated class','Only works if the subclass has no attributes'], correct:1,
     explain:"super().__init__(...) calls the parent class's __init__, so you don't have to repeat its setup code."},
    {q:'What does a leading underscore, like self._balance, usually signal in Python?',
     options:['That the attribute is required to be a number','That the value can never change',"That it is meant for internal use - access it through the class's own methods instead",'That it will automatically be deleted'], correct:2,
     explain:"It's a naming convention signalling encapsulation: this data should be accessed and changed through the class's own methods, not directly from outside."},
    {q:'If SportsClub inherits from Club, can a SportsClub object use methods defined only in Club?',
     options:['No, only its own methods','Yes, inherited methods work exactly as if SportsClub defined them itself','Only if you copy and paste the code','Only static methods'], correct:1,
     explain:'Inheritance means a subclass automatically gets every method (and attribute) the parent class defines.'}
  ]
}

,

/* ================= WEEK 8 ================= */
{
  key:'week8', num:8, title:'Working with JSON',
  scenarioTag:'Real world: the event booking system',
  scenario:`The school's new event-booking system stores everything as <strong>JSON</strong> — the same
    text format used by countless real websites and apps to send structured data around. You'll learn to convert
    Python data to JSON and back, save it to files, and dig through nested records to answer real questions.`,
  objectives:[
    'Convert a Python dict or list to a JSON string with json.dumps()',
    'Convert a JSON string back into Python data with json.loads()',
    'Read and write JSON files with json.dump() and json.load()',
    'Navigate nested JSON structures, like a list of dictionaries'
  ],
  conceptHtml:`
    <p>JSON ("JavaScript Object Notation") is a text format for structured data that looks almost identical to a
    Python dict or list. Python's built-in <code>json</code> module converts between the two:</p>
    <pre class="code-block">import json

student = {"name": "Ada", "year": 9, "clubs": ["Chess", "Art"]}
json_text = json.dumps(student)   # Python dict -> JSON string
print(json_text)

data = json.loads(json_text)     # JSON string -> Python dict
print(data["name"])</pre>
    <p>To save JSON straight to a file (or read it back), use <code>json.dump()</code> and <code>json.load()</code>
    with an open file — note there's no "s" on these two, unlike dumps/loads:</p>
    <pre class="code-block">with open("student.json", "w") as f:
    json.dump(student, f)

with open("student.json", "r") as f:
    loaded = json.load(f)</pre>
    <p>Real JSON data is often <strong>nested</strong> — a list of dictionaries, or a dictionary containing
    another dictionary. You navigate it exactly like any other Python data: square brackets for a list index or
    dictionary key, chained together.</p>`,
  sandboxStarter:`import json

student = {"name": "Ada", "year": 9, "clubs": ["Chess", "Art"]}
json_text = json.dumps(student)
print(json_text)

data = json.loads(json_text)
print(data["name"], "is in", data["clubs"])
`,
  sandboxStarter2:`import json

students = [
    {"name": "Ada", "clubs": ["Chess", "Art"]},
    {"name": "Sam", "clubs": ["Chess"]},
    {"name": "Tom", "clubs": ["Art", "Drama"]}
]

# Navigate the nested list of dictionaries
for s in students:
    print(s["name"], "is in", len(s["clubs"]), "club(s)")
`,
  exercises:[
    {
      title:'Convert a student profile to JSON',
      desc:`Convert the <code>student</code> dictionary to a JSON string using <code>json.dumps()</code> and
        print it.`,
      starter:`import json

student = {"name": "Ada", "year": 9, "clubs": ["Chess", "Art"]}
# TODO: convert student to a JSON string with json.dumps and print it
`,
      tests:[
        {type:'output', contains:['{"name": "Ada", "year": 9, "clubs": ["Chess", "Art"]}'], label:'Prints the correct JSON string'}
      ]
    },
    {
      title:'Save and reload club data',
      desc:`Write <code>club_data</code> to a file called <code>clubs.json</code> using <code>json.dump()</code>,
        then read it back with <code>json.load()</code> and print its <code>"members"</code> list.`,
      starter:`import json

club_data = {"name": "Chess Club", "members": ["Ada", "Sam"]}
# TODO: write club_data to clubs.json, read it back, then print the "members" list
`,
      tests:[
        {type:'output', contains:["['Ada', 'Sam']"], label:"Prints ['Ada', 'Sam']"}
      ]
    },
    {
      title:'Find everyone in Chess Club',
      desc:`Loop through the <code>students</code> list and print the name of every student whose
        <code>"clubs"</code> list includes <code>"Chess"</code>.`,
      starter:`students = [
    {"name": "Ada", "clubs": ["Chess", "Art"]},
    {"name": "Sam", "clubs": ["Chess"]},
    {"name": "Tom", "clubs": ["Art", "Drama"]}
]
# TODO: print the name of every student who is in "Chess" club
`,
      tests:[
        {type:'output', contains:['Ada'], label:'Prints Ada (in Chess club)'},
        {type:'output', contains:['Sam'], label:'Prints Sam (in Chess club)'}
      ]
    },
    {
      title:'Fix the broken profile lookup',
      desc:`This code should print the name from a JSON string, but it tries to use dictionary access on the
        string before parsing it. Fix the one bug so it prints the name correctly.`,
      starter:`import json

data_text = '{"name": "Priya", "year": 8}'
print(data_text["name"])  # BUG: data_text is still just a string here, not parsed yet`,
      tests:[
        {type:'output', contains:['Priya'], label:'Prints Priya'}
      ]
    }
  ],
  quiz:[
    {q:'What does json.dumps() do?',
     options:['Converts JSON text into a Python dict','Converts a Python dict/list into a JSON string','Deletes JSON data','Reads a JSON file from disk'], correct:1,
     explain:'json.dumps() (with an "s") converts Python data into a JSON-formatted string.'},
    {q:'Which pair of functions do you use to read and write JSON directly to a file (not a string)?',
     options:['json.reads() and json.writes()','json.loads() and json.dumps()','json.load() and json.dump()','json.open() and json.close()'], correct:2,
     explain:'json.load()/json.dump() (no "s") work directly with an open file, while loads()/dumps() work with strings.'},
    {q:'If students is a list of dictionaries, how do you access the "clubs" list of the first student?',
     options:['students["clubs"][0]','students[0]["clubs"]','students.clubs[0]','students(0).clubs'], correct:1,
     explain:"You index the list first to get one student's dictionary, then use the key to get their clubs."},
    {q:'What must you do before you can use dictionary-style access (like data["name"]) on JSON text?',
     options:['Nothing, it works immediately','Parse it first with json.loads()','Convert it to a list','Save it to a file first'], correct:1,
     explain:'Raw JSON text is just a string until you parse it with json.loads() into an actual Python dict or list.'}
  ]
}

,

/* ================= WEEK 9 ================= */
{
  key:'week9', num:9, title:'Recursion & Debugging',
  scenarioTag:'Real world: the assembly countdown display',
  scenario:`The assembly hall's digital display counts down before every event — "3, 2, 1, Liftoff!" — and the
    logic behind it is a great introduction to <strong>recursion</strong>: a function that solves a problem by
    calling itself with a smaller version of the same problem.`,
  objectives:[
    'Explain what a base case and a recursive case are',
    'Write a simple recursive function',
    'Trace through a recursive function call step by step',
    'Debug a broken base case that would otherwise recurse forever'
  ],
  conceptHtml:`
    <p>A <strong>recursive</strong> function is one that calls itself, each time with a smaller version of the
    problem, until it reaches a <strong>base case</strong> — the point where it can just answer directly without
    calling itself again:</p>
    <pre class="code-block">def countdown(n):
    if n <= 0:              # base case - stop here
        print("Liftoff!")
        return
    print(n)
    countdown(n - 1)         # recursive case - a smaller version of the same problem

countdown(3)
# 3
# 2
# 1
# Liftoff!</pre>
    <p>Every recursive function needs both parts: a base case that stops the recursion, and a recursive case that
    moves <em>closer</em> to that base case each time. Forget the base case, or move in the wrong direction, and
    Python will eventually raise a <code>RecursionError</code> rather than loop forever.</p>
    <p>A classic recursive example is <strong>factorial</strong> (multiplying a number by every whole number below
    it):</p>
    <pre class="code-block">def factorial(n):
    if n <= 1:          # base case
        return 1
    return n * factorial(n - 1)   # recursive case

print(factorial(5))  # 5 * 4 * 3 * 2 * 1 = 120</pre>`,
  sandboxStarter:`def countdown(n):
    if n <= 0:
        print("Liftoff!")
        return
    print(n)
    countdown(n - 1)

countdown(5)
`,
  sandboxStarter2:`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

for i in range(1, 6):
    print(i, "! =", factorial(i))
`,
  exercises:[
    {
      title:'Write a countdown function',
      desc:`Write <code>countdown(n)</code>: if <code>n</code> is 0 or less, print <code>Liftoff!</code> and stop.
        Otherwise print <code>n</code>, then call <code>countdown(n - 1)</code>. Call <code>countdown(3)</code>
        to test it.`,
      starter:`def countdown(n):
    # TODO: base case - if n <= 0, print "Liftoff!" and return
    # TODO: otherwise print n, then call countdown(n - 1)
    pass

countdown(3)`,
      tests:[
        {type:'output', contains:['3','2','1','Liftoff!'], label:'Counts down from 3 to Liftoff!'}
      ]
    },
    {
      title:'Write a factorial function',
      desc:`Write <code>factorial(n)</code> recursively: the base case returns 1 when <code>n &lt;= 1</code>,
        otherwise it returns <code>n</code> multiplied by <code>factorial(n - 1)</code>. Print
        <code>factorial(5)</code>.`,
      starter:`def factorial(n):
    # TODO: base case - return 1 if n <= 1
    # TODO: recursive case - return n * factorial(n - 1)
    pass

print(factorial(5))`,
      tests:[
        {type:'assert', expr:`factorial(5) == 120`, label:'factorial(5) == 120'},
        {type:'assert', expr:`factorial(1) == 1`, label:'factorial(1) == 1'}
      ]
    },
    {
      title:'Sum a nested list recursively',
      desc:`Write <code>deep_sum(data)</code> that adds up every number in <code>data</code>, no matter how deeply
        nested the lists are. For each item: if it's a list, recursively call <code>deep_sum</code> on it and add
        the result; otherwise just add the number itself.`,
      starter:`def deep_sum(data):
    # TODO: loop through data - if an item is a list, add deep_sum(item); otherwise add the item itself
    pass

nested = [1, [2, 3], [4, [5, 6]], 7]
print(deep_sum(nested))`,
      tests:[
        {type:'assert', expr:`deep_sum(nested) == 28`, label:'deep_sum(nested) == 28'},
        {type:'assert', expr:`deep_sum([1, [2, [3, [4]]]]) == 10`, label:'Works on more deeply nested lists too'}
      ]
    },
    {
      title:'Fix the runaway recursion',
      desc:`This factorial function's recursive case moves <strong>away</strong> from the base case instead of
        towards it, so it will never stop calling itself. Fix the one bug so it terminates correctly.`,
      starter:`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n + 1)  # BUG: this moves n further from the base case, not closer to it

print(factorial(6))`,
      tests:[
        {type:'assert', expr:`factorial(6) == 720`, label:'factorial(6) == 720'}
      ]
    }
  ],
  quiz:[
    {q:'What is a "base case" in a recursive function?',
     options:['The very first line of any function','The condition that stops the function calling itself again','A case that never actually runs','The slowest part of the function'], correct:1,
     explain:'The base case is the condition where the function returns an answer directly instead of calling itself again.'},
    {q:'What happens if a recursive function has no base case, or one that is never reached?',
     options:['It runs once and stops safely','Python fixes it automatically','It keeps calling itself until Python raises a RecursionError','It becomes a loop instead'], correct:2,
     explain:'Without a reachable base case, the function keeps calling itself until Python hits its recursion limit and raises a RecursionError.'},
    {q:'In factorial(n), what does the recursive case need to do to eventually reach the base case?',
     options:['Call itself with the exact same n every time','Call itself with a value moving closer to the base case, like n - 1','Call a completely different function','Print a message and stop'], correct:1,
     explain:'Each recursive call must move closer to the base case - here, by decreasing n - or the recursion never ends.'},
    {q:'In deep_sum(data), why do you check "if item is a list" before adding it?',
     options:['To skip lists entirely','To recursively add up the numbers inside that nested list instead of trying to add the list itself','Because lists cannot contain numbers','It is not actually necessary'], correct:1,
     explain:'A nested list is not a number itself - you need to recursively sum what is inside it before adding that to the running total.'}
  ]
}

]; // end INTERMEDIATE_WEEKS (all 9 weeks complete)

/* =========================================================================
   MINI PROJECT 1 — "Recover the Class Register" (mid-level checkpoint, after Week 4)
   Combines tuples, file/CSV handling, and error handling from Weeks 1-4.
   ========================================================================= */
const INTERMEDIATE_MP1 = {
  key:'mp1', title:'Mini Project 1 — Recover the Class Register',
  intro:`The register system crashed and left behind a messy raw text file — some lines are fine, some are
    missing a comma, and one has a blank name. You'll write code across three stages to clean it up, count who's
    present, and rebuild a proper CSV attendance report.`,
  newTrick:`When you try to unpack a badly-formed line like <code>"BadLine".split(",")</code> into two variables,
    Python raises a <code>ValueError</code> ("not enough values to unpack"). Wrapping the unpacking in
    <code>try/except ValueError</code> lets you skip bad lines instead of crashing.`,
  fixtureNote:`All three stages share this raw register text — it's already provided in every editor below, you
    don't need to type it out yourself:`,
  fixtureCode:`raw_register = """Ada,present
Sam,absent
BadLine
Tom,present
Priya,late
,absent
Grace,present
"""`,
  stages:[
    {
      key:'a', title:'Stage A — Parse the good lines',
      desc:`Write a function <code>parse_register(raw_text)</code> that splits the text into lines, and for each
        line tries to split it into <code>name, status</code> on the comma. Skip any line that can't be unpacked
        into exactly two parts (catch the <code>ValueError</code>), and also skip any line with a blank name.
        Return a list of <code>(name, status)</code> tuples for the valid lines.`,
      starter:`raw_register = """Ada,present
Sam,absent
BadLine
Tom,present
Priya,late
,absent
Grace,present
"""

def parse_register(raw_text):
    # TODO: split raw_text into lines, skip malformed/blank-name lines, return a list of (name, status) tuples
    pass`,
      tests:[
        {type:'assert', expr:`len(parse_register(raw_register)) == 5`, label:'parse_register(raw_register) returns 5 valid records'},
        {type:'assert', expr:`("Ada","present") in parse_register(raw_register)`, label:'Includes ("Ada", "present")'},
        {type:'assert', expr:`("Grace","present") in parse_register(raw_register)`, label:'Includes ("Grace", "present")'}
      ]
    },
    {
      key:'b', title:"Stage B — Count who's present",
      desc:`Write a function <code>count_present(records)</code> that takes a list of (name, status) tuples
        (like the ones <code>parse_register</code> returns) and counts how many have status exactly
        <code>"present"</code>.`,
      starter:`raw_register = """Ada,present
Sam,absent
BadLine
Tom,present
Priya,late
,absent
Grace,present
"""

def parse_register(raw_text):
    records = []
    for line in raw_text.strip().split("\\n"):
        try:
            name, status = line.split(",")
        except ValueError:
            continue
        if name == "":
            continue
        records.append((name, status))
    return records

def count_present(records):
    # TODO: count how many records have status == "present"
    pass`,
      tests:[
        {type:'assert', expr:`count_present(parse_register(raw_register)) == 3`, label:'count_present(...) == 3'},
        {type:'assert', expr:`count_present([("A","present"),("B","present")]) == 2`, label:'Works on a fresh list too'}
      ]
    },
    {
      key:'c', title:'Stage C — Rebuild the attendance report',
      desc:`Write a function <code>build_report(raw_text)</code> that combines everything: parse the register,
        write the valid records to <code>attendance.csv</code> with a <code>Name,Status</code> header, then read
        the CSV back with <code>csv.DictReader</code> and return how many rows have Status <code>"present"</code>
        — proving the round trip through the file worked correctly.`,
      starter:`import csv

raw_register = """Ada,present
Sam,absent
BadLine
Tom,present
Priya,late
,absent
Grace,present
"""

def parse_register(raw_text):
    records = []
    for line in raw_text.strip().split("\\n"):
        try:
            name, status = line.split(",")
        except ValueError:
            continue
        if name == "":
            continue
        records.append((name, status))
    return records

def build_report(raw_text):
    # TODO: parse the register, write attendance.csv (header Name,Status), read it back,
    # and return the count of rows where Status == "present"
    pass`,
      tests:[
        {type:'assert', expr:`build_report(raw_register) == 3`, label:'build_report(raw_register) == 3'}
      ]
    }
  ]
};

/* =========================================================================
   MINI PROJECT 2 — "Build the Club Directory System" (capstone, end of level)
   Combines classes, JSON, and file handling from Weeks 6-8.
   ========================================================================= */
const INTERMEDIATE_MP2 = {
  key:'mp2', title:'Mini Project 2 — Build the Club Directory System',
  intro:`The school wants a proper digital directory of every club — one that can be saved, reloaded, and
    searched. You'll make the <code>Club</code> class JSON-friendly, save a whole list of clubs to a file, and
    then load it back to answer a real question: which club is the busiest?`,
  fixtureNote:`All three doors build on this same Club class — it's already provided in every editor below, you
    don't need to type it out yourself:`,
  fixtureCode:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []
    def add_member(self, student):
        self.members.append(student)`,
  doors:[
    {
      key:'a', title:'Door 1 — Make Club JSON-friendly',
      desc:`Add a method <code>to_dict(self)</code> to the Club class that returns a plain dictionary with
        <code>"name"</code> and <code>"members"</code> keys — JSON can't store a Club object directly, but it can
        store a dictionary.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []
    def add_member(self, student):
        self.members.append(student)
    def to_dict(self):
        # TODO: return {"name": self.name, "members": self.members}
        pass

club = Club("Chess Club")
club.add_member("Ada")
club.add_member("Sam")
print(club.to_dict())`,
      tests:[
        {type:'assert', expr:`club.to_dict() == {"name": "Chess Club", "members": ["Ada", "Sam"]}`, label:'to_dict() returns the correct dictionary'}
      ]
    },
    {
      key:'b', title:'Door 2 — Save all clubs to JSON',
      desc:`Write <code>save_clubs(clubs, filename)</code> that converts every Club in the <code>clubs</code> list
        to a dictionary using <code>to_dict()</code>, then writes the whole list to <code>filename</code> using
        <code>json.dump()</code>.`,
      starter:`import json

class Club:
    def __init__(self, name):
        self.name = name
        self.members = []
    def add_member(self, student):
        self.members.append(student)
    def to_dict(self):
        return {"name": self.name, "members": self.members}

def save_clubs(clubs, filename):
    # TODO: convert each club to a dict with to_dict(), then write the whole list to filename with json.dump()
    pass

chess = Club("Chess Club")
chess.add_member("Ada")
art = Club("Art Club")
art.add_member("Tom")
art.add_member("Priya")

save_clubs([chess, art], "clubs.json")

with open("clubs.json", "r") as f:
    print(json.load(f))`,
      tests:[
        {type:'output', contains:["[{'name': 'Chess Club', 'members': ['Ada']}, {'name': 'Art Club', 'members': ['Tom', 'Priya']}]"], label:'clubs.json contains both clubs with the right members'}
      ]
    },
    {
      key:'c', title:'Door 3 — Find the busiest club',
      desc:`Write <code>busiest_club(filename)</code> that reads a JSON file of club dictionaries and returns the
        <code>"name"</code> of the club with the most members.`,
      starter:`import json

with open("clubs2.json", "w") as f:
    json.dump([
        {"name": "Chess Club", "members": ["Ada", "Sam", "Tom"]},
        {"name": "Art Club", "members": ["Priya"]},
        {"name": "Debate Club", "members": ["Maya", "Grace"]}
    ], f)

def busiest_club(filename):
    # TODO: read the JSON file, then return the "name" of the club with the most members
    pass

print(busiest_club("clubs2.json"))`,
      tests:[
        {type:'assert', expr:`busiest_club("clubs2.json") == "Chess Club"`, label:'busiest_club(...) == "Chess Club"'}
      ]
    }
  ]
};

