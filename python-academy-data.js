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
  sandboxStarter3:`# The office wants a countdown-style set of announcements for Sports Day
print("5 days until Sports Day!")
print("Don't forget to bring your PE kit and a water bottle.")
# Mixing quote styles is fine, as long as each string's quotes match
print('See the noticeboard for your house colour.')
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
    },
    {
      title:'Print the canteen menu',
      desc:`Write three separate print() lines advertising today's canteen menu: one mentioning "Pizza", one
        mentioning "Salad", and one mentioning "Juice". Add a comment above the first line explaining what the
        block of code does.`,
      starter:`# TODO: print three menu lines - one mentioning "Pizza", one "Salad", one "Juice"

`,
      tests:[
        {type:'output', contains:['Pizza'], label:'Output mentions "Pizza"'},
        {type:'output', contains:['Salad'], label:'Output mentions "Salad"'},
        {type:'output', contains:['Juice'], label:'Output mentions "Juice"'}
      ]
    },
    {
      title:'Fix the sports hall sign',
      desc:`The sports hall's booking sign has THREE separate mistakes stopping it from running: a missing closing
        quote, mismatched quote marks, and a missing closing quote again. Fix all three lines so the sign runs with
        no errors and shows all three messages.`,
      starter:`print("Sports hall booked 3-4pm)
print('Badminton club starts at 4pm")
print("Please wear indoor trainers)`,
      tests:[
        {type:'output', contains:['Sports hall booked 3-4pm'], label:'Prints the booking message'},
        {type:'output', contains:['Badminton club starts at 4pm'], label:'Prints the badminton message'},
        {type:'output', contains:['Please wear indoor trainers'], label:'Prints the trainers reminder'}
      ]
    }
  ],
  stretchChallenge:{
    title:'Print a boxed announcement',
    desc:`Finished early? Try printing a 3-line "boxed" announcement using only print() — a line of asterisks, a
      message line that includes the words "Sports Day", then another line of asterisks, like:
      <pre class="code-block">***********************
* Sports Day is here! *
***********************</pre>
      The border doesn't need to line up perfectly — just three print() lines, with asterisks on the first and
      last, and "Sports Day" somewhere in the middle line.`,
    starter:`# Print a 3-line boxed announcement below
# Line 1: a row of asterisks
# Line 2: a message that includes "Sports Day"
# Line 3: a row of asterisks
`,
    tests:[
      {type:'output', contains:['***'], label:'Uses a row of asterisks for the border'},
      {type:'output', contains:['Sports Day'], label:'Message line mentions Sports Day'}
    ]
  },
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
  sandboxStarter3:`# The school club sign-up sheet needs the same four data types
club_name = "Chess Club"
weekly_fee = 2.50
places_left = 6
is_full = False
print(f"{club_name}: £{weekly_fee}/week, {places_left} places left, full: {is_full}")
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
    },
    {
      title:'Build a library card',
      desc:`Fill in three variables about a borrowed book — book_title as text, days_overdue as a whole number
        between 0 and 30, and fine_waived as True or False — then run the code to print the library card line.`,
      starter:`# TODO: fill these in with real values
book_title = ""
days_overdue = 0
fine_waived = False

print(f"LIBRARY CARD — {book_title}, {days_overdue} days overdue, fine waived: {fine_waived}")`,
      tests:[
        {type:'assert', expr:`isinstance(book_title, str) and len(book_title.strip()) > 0`, label:'book_title is a non-empty piece of text'},
        {type:'assert', expr:`isinstance(days_overdue, int) and 0 <= days_overdue <= 30`, label:'days_overdue is a whole number between 0 and 30'},
        {type:'assert', expr:`isinstance(fine_waived, bool)`, label:'fine_waived is True or False'}
      ]
    },
    {
      title:'Fix the attendance bug',
      desc:`The register stores a student's absences as text by mistake, so adding today's absence crashes the
        program. Fix the bug so it runs and prints "You have missed 3 sessions total".`,
      starter:`absences = "2"      # bug: this should be a whole number, not text
total = absences + 1
print(f"You have missed {total} sessions total")`,
      tests:[
        {type:'output', contains:['You have missed 3 sessions total'], label:'Correctly prints the total absences'}
      ]
    }
  ],
  stretchChallenge:{
    title:'Convert and combine',
    desc:`The tuck shop stores its price as text (from a spreadsheet import). Convert price_text to a float using
      float(), multiply it by quantity, and print "Total cost: £29.97" using an f-string — this introduces
      float(), a function that converts text into a decimal number, similar to how int() converts text into a
      whole number.`,
    starter:`price_text = "9.99"
quantity = 3
# Convert price_text to a float, then compute and print the total cost
`,
    tests:[
      {type:'output', contains:['Total cost: £29.97'], label:'Correctly prints the total cost'}
    ]
  },
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
  sandboxStarter3:`# // and % are useful together whenever you're splitting things into equal groups
total_students = 47
seats_per_bus = 12
buses_needed = total_students // seats_per_bus + (1 if total_students % seats_per_bus else 0)
print(f"{buses_needed} buses needed for {total_students} students")
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
    },
    {
      title:'Ticket refund',
      desc:`Write a function refund_amount(tickets, price_per_ticket, fee) that returns
        round(tickets * price_per_ticket - fee, 2) — the total refunded once a fixed cancellation fee is
        subtracted.`,
      starter:`def refund_amount(tickets, price_per_ticket, fee):
    # TODO: return round(tickets * price_per_ticket - fee, 2)
    pass`,
      tests:[
        {type:'assert', expr:`refund_amount(3, 8, 2) == 22`, label:'refund_amount(3, 8, 2) == 22'},
        {type:'assert', expr:`refund_amount(1, 5, 0) == 5`, label:'refund_amount(1, 5, 0) == 5'},
        {type:'assert', expr:`refund_amount(2, 4.5, 1) == 8`, label:'refund_amount(2, 4.5, 1) == 8'}
      ]
    },
    {
      title:'Bus seating',
      desc:`Write a function bus_seating(students, seats_per_bus) that returns a tuple of
        (full_buses, students_left_over) using // and % — how many completely full buses you can make, and
        how many students are left without a full bus of their own.`,
      starter:`def bus_seating(students, seats_per_bus):
    # TODO: return (students // seats_per_bus, students % seats_per_bus)
    pass`,
      tests:[
        {type:'assert', expr:`bus_seating(47, 12) == (3, 11)`, label:'bus_seating(47, 12) == (3, 11)'},
        {type:'assert', expr:`bus_seating(24, 12) == (2, 0)`, label:'bus_seating(24, 12) == (2, 0)'},
        {type:'assert', expr:`bus_seating(5, 10) == (0, 5)`, label:'bus_seating(5, 10) == (0, 5)'}
      ]
    }
  ],
  stretchChallenge:{
    title:'Playground area',
    desc:`Write a function square_area(side) that returns side ** 2 (using the power operator), then print
      f"Area: {square_area(6)} square metres" — this introduces ** for exponents/powers, the last of the core
      arithmetic operators from this week's concept box.`,
    starter:`def square_area(side):
    # TODO: return side ** 2
    pass

print(f"Area: {square_area(6)} square metres")
`,
    tests:[
      {type:'output', contains:['Area: 36 square metres'], label:'Correctly prints the square area'}
    ]
  },
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
  sandboxStarter3:`# not flips a True/False the other way round
has_excuse = False
days_overdue = 3
if days_overdue > 0 and not has_excuse:
    print("A fine applies.")
else:
    print("No fine.")
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
    },
    {
      title:'Cinema ticket pricing',
      desc:`Write a function ticket_price(age) that returns 0 for under 5s, 4 for ages 5-15, 8 for ages 16-64,
        and 5 for 65 and over — chaining several elif blocks together.`,
      starter:`def ticket_price(age):
    # TODO: return 0, 4, 8 or 5 depending on age
    pass`,
      tests:[
        {type:'assert', expr:`ticket_price(3) == 0`, label:'ticket_price(3) == 0'},
        {type:'assert', expr:`ticket_price(10) == 4`, label:'ticket_price(10) == 4'},
        {type:'assert', expr:`ticket_price(30) == 8`, label:'ticket_price(30) == 8'},
        {type:'assert', expr:`ticket_price(70) == 5`, label:'ticket_price(70) == 5'}
      ]
    },
    {
      title:'Sports day final qualifier',
      desc:`Write a function qualifies_for_final(time_seconds, is_house_captain) that returns True if
        time_seconds is 15 or under, OR is_house_captain is True (house captains get an automatic place),
        otherwise False.`,
      starter:`def qualifies_for_final(time_seconds, is_house_captain):
    # TODO: return time_seconds <= 15 or is_house_captain
    pass`,
      tests:[
        {type:'assert', expr:`qualifies_for_final(14, False) == True`, label:'qualifies_for_final(14, False) == True'},
        {type:'assert', expr:`qualifies_for_final(20, True) == True`, label:'qualifies_for_final(20, True) == True'},
        {type:'assert', expr:`qualifies_for_final(20, False) == False`, label:'qualifies_for_final(20, False) == False'}
      ]
    }
  ],
  stretchChallenge:{
    title:'Library fine checker',
    desc:`Write a function fine_applies(days_overdue, has_excuse) that returns True only if days_overdue is
      greater than 0 AND has_excuse is False — using not to flip has_excuse the other way round, combined
      with and.`,
    starter:`def fine_applies(days_overdue, has_excuse):
    # TODO: return days_overdue > 0 and not has_excuse
    pass`,
    tests:[
      {type:'assert', expr:`fine_applies(3, False) == True`, label:'fine_applies(3, False) == True'},
      {type:'assert', expr:`fine_applies(3, True) == False`, label:'fine_applies(3, True) == False'},
      {type:'assert', expr:`fine_applies(0, False) == False`, label:'fine_applies(0, False) == False'}
    ]
  },
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
  sandboxStarter3:`# range(start, stop) lets you begin somewhere other than 0
squares = []
for i in range(1, 6):
    squares.append(i * i)
print(squares)
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
    },
    {
      title:'Square numbers',
      desc:`Write a function square_numbers(n) that returns a list of the squares of 1 up to and including n,
        e.g. square_numbers(3) should return [1, 4, 9].`,
      starter:`def square_numbers(n):
    result = []
    # TODO: use a loop to append i*i for i from 1 to n
    return result`,
      tests:[
        {type:'assert', expr:`square_numbers(5) == [1, 4, 9, 16, 25]`, label:'square_numbers(5) == [1, 4, 9, 16, 25]'},
        {type:'assert', expr:`square_numbers(1) == [1]`, label:'square_numbers(1) == [1]'},
        {type:'assert', expr:`square_numbers(3) == [1, 4, 9]`, label:'square_numbers(3) == [1, 4, 9]'}
      ]
    },
    {
      title:'Countdown by steps',
      desc:`Write a function countdown_by(start, step) that returns a list counting down from start to (but not
        below) 1, subtracting step each time, using a while loop, e.g. countdown_by(10, 2) should return
        [10, 8, 6, 4, 2].`,
      starter:`def countdown_by(start, step):
    result = []
    count = start
    # TODO: use a while loop to append count, then subtract step, while count > 0
    return result`,
      tests:[
        {type:'assert', expr:`countdown_by(10, 2) == [10, 8, 6, 4, 2]`, label:'countdown_by(10, 2) == [10, 8, 6, 4, 2]'},
        {type:'assert', expr:`countdown_by(5, 5) == [5]`, label:'countdown_by(5, 5) == [5]'},
        {type:'assert', expr:`countdown_by(9, 3) == [9, 6, 3]`, label:'countdown_by(9, 3) == [9, 6, 3]'}
      ]
    }
  ],
  stretchChallenge:{
    title:'First multiple over the limit',
    desc:`Write a function first_multiple_over(n, limit) that uses a while True loop, returning as soon as it
      finds the first multiple of n greater than limit — e.g. first_multiple_over(7, 50) should return 56
      (7×8), the first multiple of 7 past 50. Returning immediately exits the loop early, just like break would.`,
    starter:`def first_multiple_over(n, limit):
    i = 1
    while True:
        candidate = n * i
        # TODO: if candidate > limit, return it (this is how you'd use break's cousin, an early return)
        i += 1`,
    tests:[
      {type:'assert', expr:`first_multiple_over(7, 50) == 56`, label:'first_multiple_over(7, 50) == 56'},
      {type:'assert', expr:`first_multiple_over(4, 10) == 12`, label:'first_multiple_over(4, 10) == 12'},
      {type:'assert', expr:`first_multiple_over(10, 5) == 10`, label:'first_multiple_over(10, 5) == 10'}
    ]
  },
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
  sandboxStarter3:`# [::-1] is a shorthand slice that reverses a whole list
order = ["1st", "2nd", "3rd", "4th"]
print("Reversed:", order[::-1])
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
    },
    {
      title:'Top N scores',
      desc:`Write a function top_n_scores(scores, n) that returns the top n scores, highest first, using
        sorted() and a slice, e.g. top_n_scores([45, 92, 67, 88, 71], 3) should return [92, 88, 71].`,
      starter:`def top_n_scores(scores, n):
    # TODO: return sorted(scores, reverse=True)[:n]
    pass`,
      tests:[
        {type:'assert', expr:`top_n_scores([45, 92, 67, 88, 71], 3) == [92, 88, 71]`, label:'top_n_scores([45,92,67,88,71], 3) is correct'},
        {type:'assert', expr:`top_n_scores([10, 20], 5) == [20, 10]`, label:'top_n_scores([10,20], 5) returns all items when n is larger'},
        {type:'assert', expr:`top_n_scores([5], 1) == [5]`, label:'top_n_scores([5], 1) == [5]'}
      ]
    },
    {
      title:'Total points',
      desc:`Write a function total_points(points) that returns the sum of every value in the list, using the
        built-in sum() function.`,
      starter:`def total_points(points):
    # TODO: return sum(points)
    pass`,
      tests:[
        {type:'assert', expr:`total_points([10, 20, 30]) == 60`, label:'total_points([10,20,30]) == 60'},
        {type:'assert', expr:`total_points([]) == 0`, label:'total_points([]) == 0'},
        {type:'assert', expr:`total_points([7]) == 7`, label:'total_points([7]) == 7'}
      ]
    }
  ],
  stretchChallenge:{
    title:'Reverse the leaderboard',
    desc:`Write a function reverse_list(items) that returns the list reversed, using the [::-1] slicing
      shorthand from today's concept box — no loop needed at all.`,
    starter:`def reverse_list(items):
    # TODO: return items[::-1]
    pass`,
    tests:[
      {type:'assert', expr:`reverse_list([1, 2, 3]) == [3, 2, 1]`, label:'reverse_list([1,2,3]) == [3,2,1]'},
      {type:'assert', expr:`reverse_list(["a", "b"]) == ["b", "a"]`, label:'reverse_list(["a","b"]) == ["b","a"]'},
      {type:'assert', expr:`reverse_list([]) == []`, label:'reverse_list([]) == []'}
    ]
  },
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
  sandboxStarter3:`# Combine split() and join() with slicing to reverse the order of words
sentence = "meet me at the library"
words = sentence.split()
reversed_sentence = " ".join(words[::-1])
print(reversed_sentence)
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
    },
    {
      title:'Reverse the words',
      desc:`Write a function reverse_words(sentence) that returns the sentence with the ORDER of its words
        reversed (not the letters) — e.g. reverse_words("meet me at the library") should return
        "library the at me meet". Use .split(), a slice, and " ".join().`,
      starter:`def reverse_words(sentence):
    words = sentence.split()
    # TODO: return " ".join(words[::-1])
    pass`,
      tests:[
        {type:'assert', expr:`reverse_words("meet me at the library") == "library the at me meet"`, label:'reverse_words correctly reverses word order'},
        {type:'assert', expr:`reverse_words("hello world") == "world hello"`, label:'reverse_words("hello world") == "world hello"'},
        {type:'assert', expr:`reverse_words("one") == "one"`, label:'reverse_words("one") == "one" (single word unchanged)'}
      ]
    },
    {
      title:'Caesar decoder',
      desc:`Write a function caesar_unshift(text, shift) that reverses a Caesar shift — shifting every
        lowercase letter BACKWARD by shift places (wrapping from 'a' back to 'z'), leaving spaces unchanged.
        This undoes what caesar_shift did earlier in the week.`,
      starter:`def caesar_unshift(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            # TODO: shift ch backward by shift places, wrapping around
            pass
        else:
            result += ch
    return result`,
      tests:[
        {type:'assert', expr:`caesar_unshift("bcd", 1) == "abc"`, label:'caesar_unshift("bcd", 1) == "abc"'},
        {type:'assert', expr:`caesar_unshift("abc", 3) == "xyz"`, label:'caesar_unshift("abc", 3) == "xyz" (wraps around)'},
        {type:'assert', expr:`caesar_unshift("jgnnq yqtnf", 2) == "hello world"`, label:'caesar_unshift("jgnnq yqtnf", 2) == "hello world"'}
      ]
    }
  ],
  stretchChallenge:{
    title:'Palindrome checker',
    desc:`Write a function is_palindrome(text) that returns True if text reads the same forwards and backwards,
      ignoring case and spaces — e.g. is_palindrome("racecar") and is_palindrome("was it a car or a cat I saw")
      should both return True. Combine .lower(), .replace(" ", ""), and the [::-1] reversal slice.`,
    starter:`def is_palindrome(text):
    cleaned = text.lower().replace(" ", "")
    # TODO: return True if cleaned reads the same forwards and backwards
    pass`,
    tests:[
      {type:'assert', expr:`is_palindrome("racecar") == True`, label:'is_palindrome("racecar") == True'},
      {type:'assert', expr:`is_palindrome("was it a car or a cat I saw") == True`, label:'is_palindrome correctly handles spaces and case'},
      {type:'assert', expr:`is_palindrome("hello") == False`, label:'is_palindrome("hello") == False'}
    ]
  },
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
  sandboxStarter3:`# Default parameter values keep a function flexible without extra arguments every time
def total_with_handicap(scores, handicap=0):
    return sum(scores) + handicap

print(total_with_handicap([10, 20, 30]))       # no handicap given, defaults to 0
print(total_with_handicap([10, 20, 30], 5))    # handicap overridden to 5
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
    },
    {
      title:'Total with handicap',
      desc:`Write a function total_with_handicap(scores, handicap=0) that returns the sum of scores plus
        handicap, defaulting handicap to 0 if not given.`,
      starter:`def total_with_handicap(scores, handicap=0):
    # TODO: return sum(scores) + handicap
    pass`,
      tests:[
        {type:'assert', expr:`total_with_handicap([10, 20, 30]) == 60`, label:'total_with_handicap([10,20,30]) uses the default handicap of 0'},
        {type:'assert', expr:`total_with_handicap([10, 20, 30], 5) == 65`, label:'total_with_handicap([10,20,30], 5) overrides the default'},
        {type:'assert', expr:`total_with_handicap([], 100) == 100`, label:'total_with_handicap([], 100) == 100'}
      ]
    },
    {
      title:'Highest score',
      desc:`Write a function highest_score(scores) that returns the largest value in the scores list, using
        the built-in max() function.`,
      starter:`def highest_score(scores):
    # TODO: return max(scores)
    pass`,
      tests:[
        {type:'assert', expr:`highest_score([10, 20, 30]) == 30`, label:'highest_score([10,20,30]) == 30'},
        {type:'assert', expr:`highest_score([5]) == 5`, label:'highest_score([5]) == 5'},
        {type:'assert', expr:`highest_score([3, 3, 3]) == 3`, label:'highest_score([3,3,3]) == 3'}
      ]
    }
  ],
  stretchChallenge:{
    title:'Score summary',
    desc:`Write a function score_summary(scores) that returns a tuple of (average, highest) by CALLING your
      average_score and highest_score functions from earlier this week — functions calling other functions is
      how real toolkits are built, instead of copy-pasting the same logic twice.`,
    starter:`def average_score(scores):
    return round(sum(scores) / len(scores), 1)

def highest_score(scores):
    return max(scores)

def score_summary(scores):
    # TODO: return (average_score(scores), highest_score(scores))
    pass`,
    tests:[
      {type:'assert', expr:`score_summary([10, 20, 30]) == (20.0, 30)`, label:'score_summary([10,20,30]) == (20.0, 30)'},
      {type:'assert', expr:`score_summary([5, 5]) == (5.0, 5)`, label:'score_summary([5,5]) == (5.0, 5)'}
    ]
  },
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
  sandboxStarter3:`# Adding or updating a key is as simple as directory[key] = value
directory = {"Ada": "Year 9"}
directory["Sam"] = "Year 8"    # adds a new key
directory["Ada"] = "Year 10"   # updates an existing key
print(directory)
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
    },
    {
      title:'Update the directory',
      desc:`Write a function update_year(directory, name, year) that adds name (or updates it if it already
        exists) to directory with the value year, then returns directory.`,
      starter:`def update_year(directory, name, year):
    # TODO: set directory[name] = year, then return directory
    pass`,
      tests:[
        {type:'assert', expr:`update_year({"Ada":"Year 9"}, "Sam", "Year 8") == {"Ada":"Year 9","Sam":"Year 8"}`, label:'Adds a new name correctly'},
        {type:'assert', expr:`update_year({"Ada":"Year 9"}, "Ada", "Year 10") == {"Ada":"Year 10"}`, label:'Updates an existing name correctly'},
        {type:'assert', expr:`update_year({}, "Zoe", "Year 7") == {"Zoe":"Year 7"}`, label:'Works starting from an empty directory'}
      ]
    },
    {
      title:'Bug hunt: the exam pass checker',
      desc:`This code has TWO bugs — a typo causing a NameError, and mixing text with a number causing a
        TypeError. Fix both so the program runs with no errors and prints "Pass: 72".`,
      starter:`score = 72
pass_mark = 70
if score >= pass_mark:
    print("Pass: " + score)
else:
    print("Fail: " + scor)`,
      tests:[
        {type:'output', contains:['Pass: 72'], label:'Program runs and prints "Pass: 72"'}
      ]
    }
  ],
  stretchChallenge:{
    title:'Most common pet',
    desc:`Write a function most_common_pet(pets) that returns whichever animal type appears most often in the
      pets list. Build a counts dictionary the same way count_pets did earlier this week, then use
      max(counts, key=counts.get) to find the key with the highest count.`,
    starter:`def most_common_pet(pets):
    counts = {}
    for pet in pets:
        counts[pet] = counts.get(pet, 0) + 1
    # TODO: return max(counts, key=counts.get)
    pass`,
    tests:[
      {type:'assert', expr:`most_common_pet(["cat","dog","dog"]) == "dog"`, label:'most_common_pet(["cat","dog","dog"]) == "dog" (not just the first item)'},
      {type:'assert', expr:`most_common_pet(["fish"]) == "fish"`, label:'most_common_pet(["fish"]) == "fish"'},
      {type:'assert', expr:`most_common_pet(["dog","dog","cat","cat","cat"]) == "cat"`, label:'most_common_pet(["dog","dog","cat","cat","cat"]) == "cat" (not just the first item)'}
    ]
  },
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
    },
    {
      title:'Unpack the timetable slot',
      desc:`A tuple <code>slot</code> holds <code>("Maths", "Room 12", "9:00am")</code>. Unpack it into three
        variables called <code>subject</code>, <code>room</code>, and <code>time</code>, then print:
        <code>Maths is in Room 12 at 9:00am</code>`,
      starter:`slot = ("Maths", "Room 12", "9:00am")
# TODO: unpack slot into subject, room, time, then print the sentence
`,
      tests:[
        {type:'output', contains:['Maths is in Room 12 at 9:00am'], label:'Prints the unpacked sentence'}
      ]
    },
    {
      title:'Students in exactly one club',
      desc:`Two sets: <code>chess = {"Ada","Alan","Grace","Tom"}</code> and
        <code>book_club = {"Grace","Tom","Priya"}</code>. Print the <strong>sorted list</strong> of students who are
        in exactly one of the two clubs (not both), using <code>sorted(chess ^ book_club)</code>.`,
      starter:`chess = {"Ada","Alan","Grace","Tom"}
book_club = {"Grace","Tom","Priya"}
# TODO: print sorted(chess ^ book_club)
`,
      tests:[
        {type:'output', contains:["['Ada', 'Alan', 'Priya']"], label:"Prints ['Ada', 'Alan', 'Priya']"}
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
  ],
  sandboxStarter3:`# The '-' operator finds items in one set but not the other
all_books = {"Fantasy", "Mystery", "Sci-Fi", "Comedy", "Poetry"}
borrowed = {"Mystery", "Poetry"}
still_on_shelf = all_books - borrowed
print(sorted(still_on_shelf))

# The '^' operator finds items in EITHER set, but not both (symmetric difference)
chess = {"Ada", "Alan", "Grace"}
book_club = {"Grace", "Tom"}
print(sorted(chess ^ book_club))
`,
  stretchChallenge:{
    title:'Find the missing genres',
    desc:`Students requested these genres: <code>requested = {"Mystery","Romance","Sci-Fi"}</code>. The library
      currently has: <code>available = {"Fantasy","Mystery","Sci-Fi","Comedy"}</code>. Print the
      <strong>sorted list</strong> of requested genres that aren't available yet, using
      <code>sorted(requested - available)</code>.`,
    starter:`requested = {"Mystery","Romance","Sci-Fi"}
available = {"Fantasy","Mystery","Sci-Fi","Comedy"}
# TODO: print sorted(requested - available)
`,
    tests:[
      {type:'output', contains:["['Romance']"], label:"Prints ['Romance']"}
    ]
  }
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
    },
    {
      title:'Save and list the reading corner books',
      desc:`Write each of these book titles to <code>books.txt</code>, one per line, then loop directly over the
        open file object (<code>for line in f:</code>) and print each title with a leading <code>"- "</code>,
        after removing the newline with <code>.strip()</code>.`,
      starter:`book_titles = ["Charlie and the Chocolate Factory", "Holes", "Wonder"]
# TODO: write each title to books.txt on its own line, then loop over the file and print each with "- " in front
`,
      tests:[
        {type:'output', contains:['- Charlie and the Chocolate Factory'], label:'Shows the first book with a dash'},
        {type:'output', contains:['- Holes'], label:'Shows the second book with a dash'},
        {type:'output', contains:['- Wonder'], label:'Shows the third book with a dash'}
      ]
    },
    {
      title:'Merge two lesson notes',
      desc:`Save <code>morning_notes</code> to <code>notes.txt</code> (mode <code>"w"</code>), then append
        <code>afternoon_notes</code> to the same file (mode <code>"a"</code>). Finally, read the whole file back
        and print how many lines it now has.`,
      starter:`morning_notes = ["Bring wellies for the nature walk", "PE kit needed on Tuesday"]
afternoon_notes = ["Library books due back Friday"]
# TODO: write morning_notes to notes.txt, append afternoon_notes, then print the total number of lines
`,
      tests:[
        {type:'output', contains:['3'], label:'Prints the correct total number of lines (3)'}
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
  ],
  sandboxStarter3:`# You can loop directly over a file object, line by line
with open("notices.txt", "w") as f:
    f.writelines(["Notice A\\n", "Notice B\\n", "Notice C\\n"])

with open("notices.txt", "r") as f:
    for line in f:
        print("->", line.strip())
`,
  stretchChallenge:{
    title:'Print the shopping list backwards',
    desc:`Write each of these supply items to <code>supplies.txt</code>, one per line, then read all the lines
      back and print them in <strong>reverse order</strong> (last item first) using slicing (<code>lines[::-1]</code>),
      with each item's newline removed.`,
    starter:`items = ["Pencils", "Glue sticks", "Coloured paper"]
# TODO: write each item to supplies.txt on its own line, then print the lines in reverse order
`,
    tests:[
      {type:'output', contains:['Coloured paper\nGlue sticks\nPencils'], label:'Prints the items in reverse order'}
    ]
  }
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
    },
    {
      title:'Save and describe the snack orders',
      desc:`Write these snack orders to <code>snacks.csv</code> with a header row <code>Name,Snack,Price</code>
        (use <code>writer.writerows(snacks)</code> to write them all at once), then read the file back with
        <code>csv.DictReader</code> and print, for each row: <code>Ada ordered Crisps for £1.20</code>.`,
      starter:`import csv

snacks = [("Ada", "Crisps", "1.20"), ("Sam", "Popcorn", "1.50")]
# TODO: write snacks.csv with a header row then all the snack rows, then read it back with DictReader
# and print "Name ordered Snack for £Price" for each row
`,
      tests:[
        {type:'output', contains:['Ada ordered Crisps for £1.20'], label:"Prints Ada's snack sentence"},
        {type:'output', contains:['Sam ordered Popcorn for £1.50'], label:"Prints Sam's snack sentence"}
      ]
    },
    {
      title:'Find the expensive orders',
      desc:`The code below creates <code>orders3.csv</code> for you. Use <code>csv.DictReader</code> to collect the
        name of everyone whose Price (converted to a float) is greater than <code>3.00</code> into a list called
        <code>expensive</code>, then print <code>sorted(expensive)</code>.`,
      starter:`import csv
with open("orders3.csv", "w", newline="") as f:
    f.write("Name,Meal,Price\\nAda,Pizza,3.50\\nSam,Pasta,2.20\\nTom,Pizza,3.50\\nPriya,Salad,2.80\\n")

expensive = []
# TODO: fill expensive with the names whose Price is greater than 3.00, then print sorted(expensive)
`,
      tests:[
        {type:'output', contains:["['Ada', 'Tom']"], label:"Prints ['Ada', 'Tom']"}
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
  ],
  sandboxStarter3:`import csv

# writerows() writes several rows in one go, instead of one writerow() call each
drinks = [("Ada", "Juice", "1.00"), ("Sam", "Water", "0.80")]

with open("drinks.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Drink", "Price"])
    writer.writerows(drinks)

with open("drinks.csv", "r", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["Name"], "chose", row["Drink"])
`,
  stretchChallenge:{
    title:'Find the most popular meal',
    desc:`The code below creates <code>meals.csv</code> for you. Use <code>csv.DictReader</code> and a dictionary to
      count how many times each meal appears, then print the name of the <strong>most popular</strong> meal using
      <code>max(counts, key=counts.get)</code>.`,
    starter:`import csv
with open("meals.csv", "w", newline="") as f:
    f.write("Name,Meal\\nAda,Burger\\nSam,Salad\\nTom,Burger\\nPriya,Burger\\n")

counts = {}
# TODO: use DictReader to count how many times each meal appears in counts,
# then print the most popular meal
`,
    tests:[
      {type:'output', contains:['Burger'], label:'Prints the most popular meal (Burger)'}
    ]
  }
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
    },
    {
      title:'Validate the entry fee',
      desc:`Try converting <code>fee_text</code> to a float. If it fails with a <code>ValueError</code>, print
        <code>Invalid fee entered</code>. If it succeeds, use an <code>else</code> clause to print
        <code>Entry fee accepted: £5.50</code> (use an f-string with <code>{fee:.2f}</code>).`,
      starter:`fee_text = "5.50"
# TODO: try converting fee_text to float; catch ValueError and print "Invalid fee entered";
# otherwise print "Entry fee accepted: £{fee:.2f}"
`,
      tests:[
        {type:'output', contains:['Entry fee accepted: £5.50'], label:'Prints the accepted-fee message'}
      ]
    },
    {
      title:'Validate the team size',
      desc:`Call <code>validate_team_size(1)</code> inside a try/except block. Since 1 is fewer than the allowed
        minimum, it will raise a <code>ValueError</code> — catch it and print the error's message.`,
      starter:`def validate_team_size(n):
    if n < 2 or n > 6:
        raise ValueError("Team size must be between 2 and 6")
    return f"Team of {n} confirmed"

# TODO: call validate_team_size(1) inside a try/except ValueError, printing the error message if it fails
`,
      tests:[
        {type:'output', contains:['Team size must be between 2 and 6'], label:"Prints the validation error's message"}
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
  ],
  sandboxStarter3:`# You can catch several error types in one except clause, using a tuple
def safe_divide(a, b):
    try:
        return a / b
    except (ZeroDivisionError, TypeError) as e:
        print("Could not divide:", e)
        return None

print(safe_divide(10, 2))
print(safe_divide(10, 0))
print(safe_divide(10, "two"))
`,
  stretchChallenge:{
    title:'Validate a batch of ticket requests',
    desc:`For each request in <code>requests</code>, try converting it to a whole number. If it's not a valid
      number, or if it's greater than <code>10</code> (raise your own <code>ValueError</code> for this case),
      print <code>Skipping: &lt;request&gt;</code> and move on. Otherwise add it to the <code>valid</code> list.
      Finally, print <code>sum(valid)</code>.`,
    starter:`requests = ["5", "12", "oops", "3"]
valid = []
# TODO: for each request, try converting to int and check it's not over 10 (raise ValueError if it is);
# on any ValueError print "Skipping:" and the request; otherwise append to valid.
# Finally print sum(valid)
`,
    tests:[
      {type:'output', contains:['Skipping: 12'], label:'Skips the too-high request (12)'},
      {type:'output', contains:['Skipping: oops'], label:'Skips the non-numeric request (oops)'},
      {type:'output', contains:['8'], label:'Prints the correct total of valid tickets (8)'}
    ]
  }
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
    },
    {
      title:'Pick two runners-up',
      desc:`Use <code>random.sample(names, 2)</code> to pick <strong>two distinct</strong> runners-up from
        <code>names</code>, store the result in a variable called <code>runner_ups</code>, then print it.`,
      starter:`import random

names = ["Ada", "Sam", "Tom", "Priya", "Grace"]
# TODO: pick 2 distinct runner-ups using random.sample(names, 2), store as runner_ups, then print it
`,
      tests:[
        {type:'assert', expr:`len(runner_ups) == 2`, label:'runner_ups has exactly 2 names'},
        {type:'assert', expr:`all(r in names for r in runner_ups)`, label:'both names come from the names list'},
        {type:'assert', expr:`runner_ups[0] != runner_ups[1]`, label:'the two runner-ups are different people'}
      ]
    },
    {
      title:'Count down in weeks',
      desc:`Using <code>from datetime import date</code>, work out how many <strong>whole weeks</strong> there are
        between <code>date(2026, 3, 1)</code> and the heats night on <code>date(2026, 3, 22)</code>. Store the
        result in <code>weeks_left</code> (use <code>// 7</code>) and print it.`,
      starter:`from datetime import date

quiz_night = date(2026, 3, 1)
heats_night = date(2026, 3, 22)
# TODO: work out how many whole weeks are between quiz_night and heats_night, store in weeks_left, then print it
`,
      tests:[
        {type:'assert', expr:`weeks_left == 3`, label:'weeks_left == 3'}
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
  ],
  sandboxStarter3:`import random
import math

# random.sample picks several DISTINCT items at once, unlike choice which picks just one
names = ["Ada", "Sam", "Tom", "Priya", "Grace"]
pair = random.sample(names, 2)
print("Quiz pair:", pair)

print(math.ceil(7.2))   # rounds up to 8
print(math.floor(7.8))  # rounds down to 7
`,
  stretchChallenge:{
    title:'Find the average quiz score',
    desc:`Using <code>import statistics as stats</code>, find the mean of <code>scores</code> and print it rounded
      to 2 decimal places with <code>round(...)</code>.`,
    starter:`import statistics as stats

scores = [12, 15, 9, 18, 6]
# TODO: find the mean of scores using stats.mean(), then print it rounded to 2 decimal places
`,
    tests:[
      {type:'output', contains:['12'], label:'Prints the correct average score (12)'}
    ]
  }
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
    },
    {
      title:'Add a remove_member method',
      desc:`Finish the <code>remove_member(self, student)</code> method so it removes <code>student</code> from
        the club's members list if they're in it.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(self, student):
        self.members.append(student)

    def remove_member(self, student):
        # TODO: remove student from self.members if they're in it
        pass

    def member_count(self):
        return len(self.members)

club = Club("Book Club")
club.add_member("Priya")
club.add_member("Grace")
club.remove_member("Priya")
print(club.member_count())`,
      tests:[
        {type:'output', contains:['1'], label:'Prints the correct member count after removal (1)'}
      ]
    },
    {
      title:'Add a summary method',
      desc:`Finish the <code>summary(self)</code> method so it returns
        <code>"&lt;name&gt; has &lt;count&gt; members"</code>, e.g. <code>Art Club has 2 members</code>.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(self, student):
        self.members.append(student)

    def summary(self):
        # TODO: return f"{self.name} has {len(self.members)} members"
        pass

club = Club("Art Club")
club.add_member("Tom")
club.add_member("Priya")
print(club.summary())`,
      tests:[
        {type:'output', contains:['Art Club has 2 members'], label:'Prints "Art Club has 2 members"'}
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
  ],
  sandboxStarter3:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(self, student):
        self.members.append(student)

    def remove_member(self, student):
        if student in self.members:
            self.members.remove(student)

    def summary(self):
        return f"{self.name}: {len(self.members)} members"

club = Club("Drama Club")
club.add_member("Ada")
club.add_member("Sam")
club.remove_member("Ada")
print(club.summary())
`,
  stretchChallenge:{
    title:'Track the youngest member',
    desc:`Members are now stored as <code>(name, age)</code> tuples. Finish the <code>youngest(self)</code> method
      so it returns the <strong>name</strong> of the member with the smallest age, using
      <code>min(self.members, key=lambda m: m[1])[0]</code>.`,
    starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []

    def add_member(self, name, age):
        self.members.append((name, age))

    def youngest(self):
        # TODO: return the name of the member with the smallest age
        pass

club = Club("Chess Club")
club.add_member("Ada", 13)
club.add_member("Sam", 11)
club.add_member("Tom", 14)
print(club.youngest())`,
    tests:[
      {type:'output', contains:['Sam'], label:'Prints the youngest member (Sam)'}
    ]
  }
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
    },
    {
      title:'Create an ArtClub subclass',
      desc:`Using the given <code>Club</code> and <code>ArtClub</code> classes, create an ArtClub called
        "Art Club" with medium "painting", then print <code>art.describe()</code>. Notice ArtClub
        <strong>overrides</strong> describe() with its own version.`,
      starter:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []
    def add_member(self, student):
        self.members.append(student)
    def member_count(self):
        return len(self.members)
    def describe(self):
        return f"{self.name} is a club"

class ArtClub(Club):
    def __init__(self, name, medium):
        super().__init__(name)
        self.medium = medium
    def describe(self):
        return f"{self.name} focuses on {self.medium}"

# TODO: create an ArtClub called "Art Club" with medium "painting", store it as "art", then print art.describe()
`,
      tests:[
        {type:'output', contains:['Art Club focuses on painting'], label:'Prints "Art Club focuses on painting"'}
      ]
    },
    {
      title:'Reject a negative deposit',
      desc:`Finish the <code>deposit(self, amount)</code> method so it only adds <code>amount</code> to
        <code>_balance</code> when <code>amount</code> is positive — a negative deposit should do nothing.`,
      starter:`class BankAccount:
    def __init__(self, balance):
        self._balance = balance

    def deposit(self, amount):
        # TODO: only add amount to self._balance if amount > 0
        pass

    def get_balance(self):
        return self._balance

account = BankAccount(50)
account.deposit(-20)  # should be rejected
account.deposit(10)   # should succeed
print(account.get_balance())`,
      tests:[
        {type:'assert', expr:`account.get_balance() == 60`, label:'account.get_balance() == 60'}
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
  ],
  sandboxStarter3:`class Club:
    def __init__(self, name):
        self.name = name
        self.members = []
    def add_member(self, student):
        self.members.append(student)
    def member_count(self):
        return len(self.members)
    def describe(self):
        return f"{self.name} is a club"

class ArtClub(Club):
    def __init__(self, name, medium):
        super().__init__(name)
        self.medium = medium
    def describe(self):  # overriding the parent's method with its own version
        return f"{self.name} focuses on {self.medium}"

art = ArtClub("Art Club", "painting")
art.add_member("Tom")
print(art.describe())      # uses ArtClub's own version, not Club's
print(art.member_count())  # still inherited from Club
`,
  stretchChallenge:{
    title:'Apply interest to a savings account',
    desc:`<code>SavingsAccount</code> inherits from <code>BankAccount</code> and adds an interest <code>rate</code>.
      Finish <code>apply_interest(self)</code> so it adds <code>self._balance * self.rate</code> to the balance.`,
    starter:`class BankAccount:
    def __init__(self, balance):
        self._balance = balance
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
    def get_balance(self):
        return self._balance

class SavingsAccount(BankAccount):
    def __init__(self, balance, rate):
        super().__init__(balance)
        self.rate = rate
    def apply_interest(self):
        # TODO: add self._balance * self.rate to self._balance
        pass

account = SavingsAccount(100, 0.05)
account.apply_interest()
print(account.get_balance())`,
    tests:[
      {type:'assert', expr:`account.get_balance() == 105.0`, label:'account.get_balance() == 105.0'}
    ]
  }
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
    },
    {
      title:'Save and reload a class register',
      desc:`Write <code>register</code> to a file called <code>register.json</code> using <code>json.dump()</code>,
        then read it back with <code>json.load()</code> and print its <code>"students"</code> list.`,
      starter:`import json

register = {"class": "9A", "students": ["Ada", "Sam", "Tom"]}
# TODO: write register to register.json, read it back, then print the "students" list
`,
      tests:[
        {type:'output', contains:["['Ada', 'Sam', 'Tom']"], label:"Prints ['Ada', 'Sam', 'Tom']"}
      ]
    },
    {
      title:'Find everyone in Year 9',
      desc:`Loop through the <code>people</code> list, collect the names of everyone whose <code>"year"</code> is
        <code>9</code> into a list called <code>year9</code>, then print <code>sorted(year9)</code>.`,
      starter:`people = [
    {"name": "Ada", "year": 9},
    {"name": "Sam", "year": 8},
    {"name": "Tom", "year": 9}
]
year9 = []
# TODO: fill year9 with the names of everyone whose "year" is 9, then print sorted(year9)
`,
      tests:[
        {type:'output', contains:["['Ada', 'Tom']"], label:"Prints ['Ada', 'Tom']"}
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
  ],
  sandboxStarter3:`import json

student = {"name": "Ada", "year": 9, "clubs": ["Chess", "Art"]}

# indent= makes the JSON text much easier for a human to read
pretty = json.dumps(student, indent=2)
print(pretty)

# You can update a value like any normal dict, then convert back to JSON
student["year"] = 10
print(json.dumps(student))
`,
  stretchChallenge:{
    title:'Find the most popular event',
    desc:`Loop through <code>bookings</code> and use a dictionary to count how many times each event appears,
      then print the name of the <strong>most popular</strong> event using
      <code>max(counts, key=counts.get)</code>.`,
    starter:`bookings = [
    {"student": "Ada", "event": "Coding"},
    {"student": "Sam", "event": "Drama"},
    {"student": "Tom", "event": "Coding"},
    {"student": "Priya", "event": "Coding"}
]
counts = {}
# TODO: count how many times each event appears in counts, then print the most popular event
`,
    tests:[
      {type:'output', contains:['Coding'], label:'Prints the most popular event (Coding)'}
    ]
  }
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
    },
    {
      title:'Write a sum-to-n function',
      desc:`Write <code>sum_to_n(n)</code> recursively: the base case returns 0 when <code>n &lt;= 0</code>,
        otherwise it returns <code>n</code> plus <code>sum_to_n(n - 1)</code>. Print <code>sum_to_n(5)</code>.`,
      starter:`def sum_to_n(n):
    # TODO: base case - return 0 if n <= 0
    # TODO: recursive case - return n + sum_to_n(n - 1)
    pass

print(sum_to_n(5))`,
      tests:[
        {type:'assert', expr:`sum_to_n(5) == 15`, label:'sum_to_n(5) == 15'},
        {type:'assert', expr:`sum_to_n(1) == 1`, label:'sum_to_n(1) == 1'}
      ]
    },
    {
      title:'Reverse a string recursively',
      desc:`Write <code>reverse_string(s)</code> recursively: the base case returns <code>s</code> itself when its
        length is 1 or less, otherwise it returns <code>reverse_string(s[1:]) + s[0]</code>. Print
        <code>reverse_string("hello")</code>.`,
      starter:`def reverse_string(s):
    # TODO: base case - return s if len(s) <= 1
    # TODO: recursive case - return reverse_string(s[1:]) + s[0]
    pass

print(reverse_string("hello"))`,
      tests:[
        {type:'assert', expr:`reverse_string("hello") == "olleh"`, label:'reverse_string("hello") == "olleh"'},
        {type:'assert', expr:`reverse_string("a") == "a"`, label:'reverse_string("a") == "a"'}
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
  ],
  sandboxStarter3:`def sum_to_n(n):
    if n <= 0:
        return 0
    return n + sum_to_n(n - 1)

print(sum_to_n(5))   # 5+4+3+2+1 = 15

def reverse_string(s):
    if len(s) <= 1:
        return s
    return reverse_string(s[1:]) + s[0]

print(reverse_string("hello"))
`,
  stretchChallenge:{
    title:'Write a recursive power function',
    desc:`Write <code>pow_recursive(base, exp)</code>: the base case returns 1 when <code>exp == 0</code>,
      otherwise it returns <code>base * pow_recursive(base, exp - 1)</code>. Print
      <code>pow_recursive(2, 5)</code>.`,
    starter:`def pow_recursive(base, exp):
    # TODO: base case - return 1 if exp == 0
    # TODO: recursive case - return base * pow_recursive(base, exp - 1)
    pass

print(pow_recursive(2, 5))`,
    tests:[
      {type:'assert', expr:`pow_recursive(2, 5) == 32`, label:'pow_recursive(2, 5) == 32'}
    ]
  }
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

/* =========================================================================
   Python Academy — Advanced Level content data
   Builds on Beginner and Intermediate: functions, files, error handling,
   modules, classes, JSON, recursion.
   ========================================================================= */

const ADVANCED_WEEKS = [

/* ================= WEEK 1 ================= */
{
  key:'week1', num:1, title:'Algorithmic Thinking',
  scenarioTag:'Real world: how fast can you find a locker?',
  scenario:`Two students both need to find a specific locker in a corridor of 100 lockers. One checks every
    locker one by one from the start. The other has a hunch about roughly where to look and gets there in a
    fraction of the checks. Both "work" — but not all working solutions are equally good. This week is about
    <strong>measuring</strong> how much work a piece of code actually does.`,
  objectives:[
    'Explain what "efficiency" means for a piece of code',
    'Count how many steps an approach takes to solve a problem',
    'Compare the best case and worst case for the same algorithm',
    'Recognise that nested loops over the same data grow much faster than a single loop'
  ],
  conceptHtml:`
    <p>Two programs can both give the correct answer while doing very different amounts of work. Measuring
    <strong>efficiency</strong> usually means counting how many basic steps (like comparisons) an approach takes
    — not timing it in seconds, which depends on the computer running it.</p>
    <pre class="code-block">def count_linear_search(data, target):
    steps = 0
    for item in data:
        steps += 1
        if item == target:
            return steps
    return steps</pre>
    <p>Searching for something near the <strong>start</strong> of a list is the <em>best case</em> — very few
    steps. Searching for something near the <strong>end</strong> (or not present at all) is the <em>worst case</em>
    — it has to check almost everything. Programmers often care most about the worst case, since that's the
    guarantee you get for any input.</p>
    <p>Some code contains a loop <em>inside</em> another loop, checking every pair of items in a list. As the list
    grows, the number of pairs grows much faster than the list itself — 5 items means 10 pairs, but 10 items means
    45 pairs. This kind of growth is exactly what programmers mean when they informally say an approach "doesn't
    scale".</p>`,
  sandboxStarter:`def count_linear_search(data, target):
    steps = 0
    for item in data:
        steps += 1
        if item == target:
            return steps
    return steps

numbers = [4, 8, 15, 16, 23, 42]
print("Finding 4:", count_linear_search(numbers, 4), "steps")
print("Finding 42:", count_linear_search(numbers, 42), "steps")
`,
  sandboxStarter2:`def count_pair_checks(data):
    steps = 0
    for i in range(len(data)):
        for j in range(i + 1, len(data)):
            steps += 1
    return steps

for size in [3, 5, 10, 20]:
    data = list(range(size))
    print(size, "items ->", count_pair_checks(data), "pair checks")
`,
  exercises:[
    {
      title:'Count linear search steps',
      desc:`Write <code>count_linear_search(data, target)</code>: loop through <code>data</code>, counting each
        item checked, and return the step count as soon as you find <code>target</code> (or after checking
        everything if it's never found). Test it by finding 15 in <code>numbers</code>.`,
      starter:`def count_linear_search(data, target):
    # TODO: loop through data, count each step, return the count as soon as you find target
    pass

numbers = [4, 8, 15, 16, 23, 42]
print(count_linear_search(numbers, 15))`,
      tests:[
        {type:'assert', expr:`count_linear_search(numbers, 15) == 3`, label:'count_linear_search(numbers, 15) == 3'},
        {type:'assert', expr:`count_linear_search(numbers, 4) == 1`, label:'count_linear_search(numbers, 4) == 1'}
      ]
    },
    {
      title:'Compare best and worst case',
      desc:`Using <code>count_linear_search</code> on <code>numbers2</code> (the numbers 1 to 100), find how many
        steps it takes to find <code>1</code> (store as <code>best_steps</code>) and how many steps to find
        <code>100</code> (store as <code>worst_steps</code>).`,
      starter:`def count_linear_search(data, target):
    steps = 0
    for item in data:
        steps += 1
        if item == target:
            return steps
    return steps

numbers2 = list(range(1, 101))
# TODO: find best_steps (searching for 1) and worst_steps (searching for 100)
`,
      tests:[
        {type:'assert', expr:`best_steps == 1`, label:'best_steps == 1'},
        {type:'assert', expr:`worst_steps == 100`, label:'worst_steps == 100'}
      ]
    },
    {
      title:'Count nested loop steps',
      desc:`Write <code>count_pair_checks(data)</code>: using two nested loops, count how many <em>pairs</em> of
        items exist in <code>data</code> (compare every item to every item that comes after it, don't double-count
        or compare an item to itself).`,
      starter:`def count_pair_checks(data):
    # TODO: use two nested loops to count every pair of items in data (no repeats, no comparing an item to itself)
    pass

print(count_pair_checks([1, 2, 3, 4, 5]))`,
      tests:[
        {type:'assert', expr:`count_pair_checks([1, 2, 3, 4, 5]) == 10`, label:'count_pair_checks([1,2,3,4,5]) == 10'},
        {type:'assert', expr:`count_pair_checks([1, 2, 3]) == 3`, label:'count_pair_checks([1,2,3]) == 3'}
      ]
    },
    {
      title:'Fix the broken step counter',
      desc:`This search function should count every step correctly, but a bug means it always reports too few
        steps. Fix the one bug so it counts correctly.`,
      starter:`def count_linear_search(data, target):
    steps = 0
    for item in data:
        if item == target:      # BUG: steps is only counted for a match, not for every item checked
            steps += 1
            return steps
    return steps

print(count_linear_search([10, 20, 30, 40], 40))`,
      tests:[
        {type:'assert', expr:`count_linear_search([10, 20, 30, 40], 40) == 4`, label:'count_linear_search([10,20,30,40], 40) == 4'}
      ]
    },
    {
      title:'Count steps to find a duplicate (the slow way)',
      desc:`Write <code>has_duplicate_slow(data)</code>: using two nested loops (compare every item to every item
        that comes after it), return <code>(True, steps)</code> as soon as a duplicate is found, counting one step
        per comparison. If none is found, return <code>(False, steps)</code>.`,
      starter:`def has_duplicate_slow(data):
    # TODO: use two nested loops to find a duplicate, counting one step per comparison;
    # return (True, steps) as soon as a match is found, otherwise (False, steps)
    pass

print(has_duplicate_slow([1, 2, 3, 2, 5]))`,
      tests:[
        {type:'assert', expr:`has_duplicate_slow([1, 2, 3, 2, 5]) == (True, 6)`, label:'has_duplicate_slow([1,2,3,2,5]) == (True, 6)'}
      ]
    },
    {
      title:'Count steps with a smarter check',
      desc:`Write <code>has_duplicate_fast(data)</code>: loop through <code>data</code> once, keeping a
        <code>set</code> of items already <code>seen</code>. Count one step per item. Return
        <code>(True, steps)</code> as soon as an item is already in <code>seen</code>, otherwise
        <code>(False, steps)</code> at the end.`,
      starter:`def has_duplicate_fast(data):
    # TODO: loop through data once, tracking seen items in a set, counting one step per item;
    # return (True, steps) as soon as an item is already in seen, otherwise (False, steps)
    pass

print(has_duplicate_fast([1, 2, 3, 2, 5]))`,
      tests:[
        {type:'assert', expr:`has_duplicate_fast([1, 2, 3, 2, 5]) == (True, 4)`, label:'has_duplicate_fast([1,2,3,2,5]) == (True, 4)'}
      ]
    }
  ],
  quiz:[
    {q:"What does it usually mean to measure a piece of code's efficiency?",
     options:['How many lines of code it has','How many basic steps it takes to solve a problem','How many variables it uses','How long the variable names are'], correct:1,
     explain:'Efficiency is usually measured by counting the basic operations (like comparisons) an algorithm performs, since actual timing depends on the computer running it.'},
    {q:'For a linear search, what is the "worst case"?',
     options:['The target is the very first item checked','The target is near the middle only','The target is the last item checked, or is not present at all','There is no such thing as a worst case'], correct:2,
     explain:'The worst case for linear search is when the target is last (or missing entirely), forcing every item to be checked.'},
    {q:'If a list has 10 items, how many unique pairs of items are there (each pair counted once)?',
     options:['10','20','45','100'], correct:2,
     explain:'For n items, the number of pairs is n(n-1)/2 - for 10 items that is 10*9/2 = 45.'},
    {q:'Why do two nested loops over the same list tend to "not scale" as the list grows?',
     options:['They use more variable names','The number of pairs to check grows much faster than the list size itself','Python runs nested loops slower on purpose','They always crash on large lists'], correct:1,
     explain:'As the list grows, the number of pairs grows roughly with the square of the size, far outpacing the size of the list itself.'}
  ],
  sandboxStarter3:`def has_duplicate_slow(data):
    steps = 0
    for i in range(len(data)):
        for j in range(i + 1, len(data)):
            steps += 1
            if data[i] == data[j]:
                return True, steps
    return False, steps

def has_duplicate_fast(data):
    steps = 0
    seen = set()
    for item in data:
        steps += 1
        if item in seen:
            return True, steps
        seen.add(item)
    return False, steps

data = [4, 8, 15, 16, 23, 8]
print(has_duplicate_slow(data))   # nested loops - more steps
print(has_duplicate_fast(data))   # a set - fewer steps for the same answer
`,
  stretchChallenge:{
    title:'Print the worst-case steps for growing list sizes',
    desc:`For each size in <code>sizes</code>, build a list <code>data = list(range(size))</code>, use
      <code>count_linear_search(data, -1)</code> (searching for a value that's never there, forcing the worst
      case) to find the step count, then print <code>"&lt;size&gt; items -&gt; &lt;steps&gt; steps"</code>.`,
    starter:`def count_linear_search(data, target):
    steps = 0
    for item in data:
        steps += 1
        if item == target:
            return steps
    return steps

sizes = [10, 20, 50]
# TODO: for each size, build data = list(range(size)), find the worst-case steps with
# count_linear_search(data, -1), then print f"{size} items -> {steps} steps"
`,
    tests:[
      {type:'output', contains:['10 items -> 10 steps'], label:'Prints the worst-case count for size 10'},
      {type:'output', contains:['20 items -> 20 steps'], label:'Prints the worst-case count for size 20'},
      {type:'output', contains:['50 items -> 50 steps'], label:'Prints the worst-case count for size 50'}
    ]
  }
}

,

/* ================= WEEK 2 ================= */
{
  key:'week2', num:2, title:'Searching & Sorting',
  scenarioTag:'Real world: the class register lookup',
  scenario:`Once a class register is sorted alphabetically, you don't have to check every single name to find
    someone — you can jump straight to roughly the right spot, the same way you'd flip to the middle of a
    dictionary rather than reading it cover to cover. This week combines a genuinely faster search with real
    sorting techniques.`,
  objectives:[
    'Implement binary search on a sorted list',
    'Implement selection sort to sort a list from scratch',
    "Use Python's built-in sorted() with a key function",
    'Explain why binary search requires the data to already be sorted'
  ],
  conceptHtml:`
    <p><strong>Binary search</strong> only works on already-sorted data, but it's dramatically faster than
    checking every item: it looks at the middle item, and immediately rules out half the remaining data based on
    whether the target is bigger or smaller.</p>
    <pre class="code-block">def binary_search(data, target):
    low, high = 0, len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        elif data[mid] < target:
            low = mid + 1     # target must be in the right half
        else:
            high = mid - 1    # target must be in the left half
    return -1</pre>
    <p><strong>Selection sort</strong> is a simple way to sort from scratch: repeatedly find the smallest
    remaining item and swap it into place.</p>
    <pre class="code-block">def selection_sort(data):
    result = data[:]
    for i in range(len(result)):
        min_idx = i
        for j in range(i + 1, len(result)):
            if result[j] < result[min_idx]:
                min_idx = j
        result[i], result[min_idx] = result[min_idx], result[i]
    return result</pre>
    <p>In practice, you'll almost always use Python's built-in <code>sorted()</code> rather than writing your own
    sort — and its <code>key</code> parameter lets you sort by any property, not just the plain value:</p>
    <pre class="code-block">students = [{"name": "Ada", "score": 88}, {"name": "Sam", "score": 95}]
ranked = sorted(students, key=lambda s: s["score"], reverse=True)</pre>`,
  sandboxStarter:`def binary_search(data, target):
    low, high = 0, len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        elif data[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

names = ["Ada", "Grace", "Priya", "Sam", "Tom"]
print(binary_search(names, "Sam"))
print(binary_search(names, "Zoe"))
`,
  sandboxStarter2:`def selection_sort(data):
    result = data[:]
    for i in range(len(result)):
        min_idx = i
        for j in range(i + 1, len(result)):
            if result[j] < result[min_idx]:
                min_idx = j
        result[i], result[min_idx] = result[min_idx], result[i]
    return result

scores = [88, 95, 72, 60, 100]
print(selection_sort(scores))
print(sorted(scores))  # Python's built-in sort does the same job
`,
  exercises:[
    {
      title:'Binary search for a name',
      desc:`Write <code>binary_search(data, target)</code> on the already-sorted <code>names</code> list, returning
        the index of <code>target</code> if found, or <code>-1</code> if not.`,
      starter:`def binary_search(data, target):
    # TODO: use low/high/mid to search - return the index if found, -1 if not
    pass

names = ["Ada", "Grace", "Priya", "Sam", "Tom"]
print(binary_search(names, "Priya"))
print(binary_search(names, "Zoe"))`,
      tests:[
        {type:'assert', expr:`binary_search(names, "Priya") == 2`, label:'binary_search(names, "Priya") == 2'},
        {type:'assert', expr:`binary_search(names, "Zoe") == -1`, label:'binary_search(names, "Zoe") == -1 (not found)'}
      ]
    },
    {
      title:'Selection sort a list of scores',
      desc:`Write <code>selection_sort(data)</code>: repeatedly find the smallest remaining item and swap it into
        place, returning a new sorted list (don't modify the original).`,
      starter:`def selection_sort(data):
    # TODO: repeatedly find the smallest remaining item and swap it into place
    pass

scores = [88, 95, 72, 60, 100]
print(selection_sort(scores))`,
      tests:[
        {type:'assert', expr:`selection_sort(scores) == [60, 72, 88, 95, 100]`, label:'selection_sort(scores) == [60, 72, 88, 95, 100]'},
        {type:'assert', expr:`scores == [88, 95, 72, 60, 100]`, label:'the original scores list is left unchanged'}
      ]
    },
    {
      title:'Sort students by score',
      desc:`Use <code>sorted(students, key=..., reverse=True)</code> to rank <code>students</code> from highest
        score to lowest, then build <code>names_in_order</code>: a list of just their names, in that ranked order.`,
      starter:`students = [{"name": "Ada", "score": 88}, {"name": "Sam", "score": 95}, {"name": "Tom", "score": 72}]
# TODO: use sorted() with a key function to rank students by score, highest first
# then build names_in_order - a list of just the names, in ranked order
`,
      tests:[
        {type:'assert', expr:`names_in_order == ["Sam", "Ada", "Tom"]`, label:'names_in_order == ["Sam", "Ada", "Tom"]'}
      ]
    },
    {
      title:'Fix the broken binary search',
      desc:`This binary search has its comparison the wrong way round, so it searches the wrong half of the list
        each time. Fix the one bug so it finds the correct index.`,
      starter:`def binary_search(data, target):
    low, high = 0, len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        elif data[mid] > target:  # BUG: this comparison is the wrong way round
            low = mid + 1
        else:
            high = mid - 1
    return -1

names = ["Ada", "Grace", "Priya", "Sam", "Tom"]
print(binary_search(names, "Sam"))`,
      tests:[
        {type:'assert', expr:`binary_search(names, "Sam") == 3`, label:'binary_search(names, "Sam") == 3'}
      ]
    },
    {
      title:'Binary search a list of numbers',
      desc:`Write <code>binary_search(data, target)</code> for the already-sorted <code>numbers</code> list of
        numbers, returning the index of <code>target</code> if found, or <code>-1</code> if not.`,
      starter:`def binary_search(data, target):
    # TODO: use low/high/mid to search - return the index if found, -1 if not
    pass

numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
print(binary_search(numbers, 23))
print(binary_search(numbers, 100))`,
      tests:[
        {type:'assert', expr:`binary_search(numbers, 23) == 5`, label:'binary_search(numbers, 23) == 5'},
        {type:'assert', expr:`binary_search(numbers, 100) == -1`, label:'binary_search(numbers, 100) == -1 (not found)'}
      ]
    },
    {
      title:'Selection sort in descending order',
      desc:`Write <code>selection_sort_desc(data)</code>: like selection sort, but each pass finds the
        <strong>largest</strong> remaining item instead of the smallest, returning a new list sorted highest to
        lowest.`,
      starter:`def selection_sort_desc(data):
    # TODO: repeatedly find the LARGEST remaining item and swap it into place
    pass

scores = [88, 95, 72, 60, 100]
print(selection_sort_desc(scores))`,
      tests:[
        {type:'assert', expr:`selection_sort_desc(scores) == [100, 95, 88, 72, 60]`, label:'selection_sort_desc(scores) == [100, 95, 88, 72, 60]'}
      ]
    }
  ],
  quiz:[
    {q:'What must be true about a list before you can binary search it?',
     options:['It must contain only numbers','It must already be sorted','It must have fewer than 100 items','Nothing - it works on any list'], correct:1,
     explain:'Binary search relies on being able to rule out half the data based on a comparison, which only works if the data is already sorted.'},
    {q:'Each time binary search checks the middle item without finding a match, roughly how much of the remaining data does it rule out?',
     options:['None of it','About a quarter','About half','All of it'], correct:2,
     explain:"Binary search rules out about half of the remaining possibilities with each comparison, which is what makes it so much faster than checking every item."},
    {q:'What does selection sort do on each pass?',
     options:['Picks a random item and moves it','Finds the smallest remaining item and swaps it into place','Reverses the whole list','Removes duplicate items'], correct:1,
     explain:'Selection sort repeatedly finds the smallest remaining item and swaps it into its correct position.'},
    {q:'What does the key parameter do in sorted(data, key=lambda x: x["score"])?',
     options:['It filters out items missing a score','It tells sorted() what value to compare items by','It reverses the sort order','It converts every item to a string first'], correct:1,
     explain:'The key function tells sorted() which value on each item to actually compare, instead of comparing the whole item directly.'}
  ],
  sandboxStarter3:`students = [
    {"name": "Ada", "score": 88},
    {"name": "Sam", "score": 95},
    {"name": "Priya", "score": 88}
]

# Sort by score (highest first), then by name alphabetically as a tie-breaker
ranked = sorted(students, key=lambda s: (-s["score"], s["name"]))
for s in ranked:
    print(s["name"], s["score"])
`,
  stretchChallenge:{
    title:'Sort by score, then break ties by name',
    desc:`Use <code>sorted(students, key=lambda s: (-s["score"], s["name"]))</code> to rank <code>students</code> by
      score (highest first), breaking ties alphabetically by name. Build <code>names_in_order</code>: a list of
      just the names, in that ranked order, then print it.`,
    starter:`students = [
    {"name": "Ada", "score": 88},
    {"name": "Sam", "score": 95},
    {"name": "Priya", "score": 88}
]
# TODO: sort students by (-score, name), build names_in_order (just the names, in ranked order), then print it
`,
    tests:[
      {type:'output', contains:["['Sam', 'Ada', 'Priya']"], label:"Prints ['Sam', 'Ada', 'Priya']"}
    ]
  }
}

,

/* ================= WEEK 3 ================= */
{
  key:'week3', num:3, title:'Recursion in Practice',
  scenarioTag:'Real world: counting files in nested folders',
  scenario:`A computer's file system is naturally recursive — a folder can contain files, but it can also contain
    more folders, which contain more folders, to any depth. Counting "how many files are in here?" is a perfect
    job for a function that calls itself.`,
  objectives:[
    'Write a recursive function for the Fibonacci sequence',
    'Write a recursive function that computes a power without using **',
    'Use recursion to explore a nested, tree-like data structure',
    'Debug an incorrect base case in a recursive function'
  ],
  conceptHtml:`
    <p>The <strong>Fibonacci sequence</strong> (each number is the sum of the two before it) is a classic
    recursive definition — the function's own definition literally describes it:</p>
    <pre class="code-block">def fibonacci(n):
    if n <= 1:      # base case
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)   # recursive case</pre>
    <p>Recursion also handles <strong>nested</strong> data naturally — like a folder that can contain files, or
    more folders, to any depth:</p>
    <pre class="code-block">folder = {
    "Documents": {"Homework": ["essay.docx"], "Photos": ["holiday.jpg"]},
    "Downloads": ["song.mp3", "movie.mp4"]
}

def count_files(node):
    if isinstance(node, list):
        return len(node)               # base case - a list of files
    total = 0
    for value in node.values():
        total += count_files(value)    # recursive case - a folder of folders
    return total</pre>
    <p>The structure of the recursive function mirrors the structure of the data itself: whenever you hit a plain
    list of files, you can count directly; whenever you hit a folder (a dictionary), you recurse into each of its
    contents.</p>`,
  sandboxStarter:`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i), end=" ")
print()
`,
  sandboxStarter2:`def power(base, exponent):
    if exponent == 0:
        return 1
    return base * power(base, exponent - 1)

print(power(2, 5))
print(power(3, 4))
print(power(10, 0))
`,
  exercises:[
    {
      title:'Write the Fibonacci function',
      desc:`Write <code>fibonacci(n)</code> recursively: the base case returns <code>n</code> itself when
        <code>n &lt;= 1</code>, otherwise it returns <code>fibonacci(n - 1) + fibonacci(n - 2)</code>.`,
      starter:`def fibonacci(n):
    # TODO: base case - return n if n <= 1
    # TODO: recursive case - return fibonacci(n - 1) + fibonacci(n - 2)
    pass

print([fibonacci(i) for i in range(8)])`,
      tests:[
        {type:'assert', expr:`fibonacci(0) == 0`, label:'fibonacci(0) == 0'},
        {type:'assert', expr:`fibonacci(1) == 1`, label:'fibonacci(1) == 1'},
        {type:'assert', expr:`fibonacci(7) == 13`, label:'fibonacci(7) == 13'}
      ]
    },
    {
      title:'Write a recursive power function',
      desc:`Write <code>power(base, exponent)</code> recursively (without using <code>**</code>): the base case
        returns 1 when <code>exponent == 0</code>, otherwise it returns <code>base</code> multiplied by
        <code>power(base, exponent - 1)</code>.`,
      starter:`def power(base, exponent):
    # TODO: base case - return 1 if exponent == 0
    # TODO: recursive case - return base * power(base, exponent - 1)
    pass

print(power(2, 5))`,
      tests:[
        {type:'assert', expr:`power(2, 5) == 32`, label:'power(2, 5) == 32'},
        {type:'assert', expr:`power(3, 0) == 1`, label:'power(3, 0) == 1'}
      ]
    },
    {
      title:'Count files in nested folders',
      desc:`Write <code>count_files(node)</code>: if <code>node</code> is a list, return its length (a plain
        list of files). Otherwise <code>node</code> is a folder (a dict) — recursively add up
        <code>count_files(value)</code> for every value inside it.`,
      starter:`folder = {
    "Documents": {
        "Homework": ["essay.docx", "notes.txt"],
        "Photos": ["holiday.jpg"]
    },
    "Downloads": ["song.mp3", "movie.mp4", "app.exe"]
}

def count_files(node):
    # TODO: if node is a list, return its length
    # TODO: otherwise, recursively add up count_files(value) for every value in node
    pass

print(count_files(folder))`,
      tests:[
        {type:'assert', expr:`count_files(folder) == 6`, label:'count_files(folder) == 6'}
      ]
    },
    {
      title:'Fix the broken Fibonacci function',
      desc:`This Fibonacci function's base case returns the wrong value, throwing off the whole sequence. Fix the
        one bug so it produces the correct sequence.`,
      starter:`def fibonacci(n):
    if n <= 1:
        return 1  # BUG: fibonacci(0) should be 0, not 1
    return fibonacci(n - 1) + fibonacci(n - 2)

print([fibonacci(i) for i in range(6)])`,
      tests:[
        {type:'assert', expr:`fibonacci(0) == 0`, label:'fibonacci(0) == 0'},
        {type:'assert', expr:`fibonacci(5) == 5`, label:'fibonacci(5) == 5'}
      ]
    },
    {
      title:'Write a recursive GCD function',
      desc:`Write <code>gcd(a, b)</code> recursively using Euclid's algorithm: the base case returns
        <code>a</code> when <code>b == 0</code>, otherwise it returns <code>gcd(b, a % b)</code>.`,
      starter:`def gcd(a, b):
    # TODO: base case - return a if b == 0
    # TODO: recursive case - return gcd(b, a % b)
    pass

print(gcd(48, 18))`,
      tests:[
        {type:'assert', expr:`gcd(48, 18) == 6`, label:'gcd(48, 18) == 6'},
        {type:'assert', expr:`gcd(17, 5) == 1`, label:'gcd(17, 5) == 1'}
      ]
    },
    {
      title:'Find the maximum folder depth',
      desc:`Write <code>max_depth(node)</code>: if <code>node</code> is a list, return 0 (a list of files has no
        further depth). If it's an empty folder, return 1. Otherwise return
        <code>1 + max(max_depth(v) for v in node.values())</code> — one level deeper than its deepest sub-folder.`,
      starter:`folder = {
    "Documents": {
        "Homework": ["essay.docx", "notes.txt"],
        "Photos": ["holiday.jpg"]
    },
    "Downloads": ["song.mp3", "movie.mp4", "app.exe"]
}

def max_depth(node):
    # TODO: if node is a list, return 0
    # TODO: if node is empty, return 1
    # TODO: otherwise return 1 + max(max_depth(v) for v in node.values())
    pass

print(max_depth(folder))`,
      tests:[
        {type:'assert', expr:`max_depth(folder) == 2`, label:'max_depth(folder) == 2'}
      ]
    }
  ],
  quiz:[
    {q:'In the Fibonacci function, what is the base case?',
     options:['When n is a negative number','When n <= 1, returning n itself','When fibonacci(n-1) equals fibonacci(n-2)','There is no base case'], correct:1,
     explain:'The base case handles n <= 1 directly (returning n itself), stopping the recursion.'},
    {q:'In count_files(node), why do you check "if node is a list" first?',
     options:['To skip empty folders','Because a list of files is the base case - you can count it directly without recursing further','Because dictionaries cannot be counted','It is not actually necessary'], correct:1,
     explain:'A list of files is the base case - there is nothing left to recurse into, so you can just return its length.'},
    {q:'What does power(base, exponent) return when exponent is 0?',
     options:['0','base','1','An error'], correct:2,
     explain:'Any number raised to the power of 0 is 1 - this is the base case that stops the recursion.'},
    {q:'If a recursive function’s base case returns the wrong value, what typically happens?',
     options:['Python automatically corrects it','Nothing - only the recursive case matters','Every value the function ever returns is affected, since they all build on the base case','It only affects the very first call'], correct:2,
     explain:'Every recursive call ultimately builds its answer from the base case, so a wrong base case value throws off every result that depends on it.'}
  ],
  sandboxStarter3:`def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

print(gcd(48, 18))   # 6
print(gcd(100, 75))  # 25
`,
  stretchChallenge:{
    title:'Flatten a nested folder into one file list',
    desc:`Write <code>flatten_files(node)</code>: if <code>node</code> is a list, return it directly. Otherwise
      build up a single list containing <code>flatten_files(value)</code> for every value inside
      <code>node</code>, combined together with <code>+=</code>.`,
    starter:`folder = {
    "Documents": {
        "Homework": ["essay.docx", "notes.txt"],
        "Photos": ["holiday.jpg"]
    },
    "Downloads": ["song.mp3", "movie.mp4", "app.exe"]
}

def flatten_files(node):
    # TODO: if node is a list, return it directly
    # TODO: otherwise, combine flatten_files(value) for every value into one list and return it
    pass

print(flatten_files(folder))`,
    tests:[
      {type:'assert', expr:`len(flatten_files(folder)) == 6`, label:'flatten_files(folder) has 6 items'},
      {type:'assert', expr:`"essay.docx" in flatten_files(folder)`, label:'flatten_files(folder) includes "essay.docx"'}
    ]
  }
}

,

/* ================= WEEK 4 ================= */
{
  key:'week4', num:4, title:'Working with Real Data Files',
  scenarioTag:'Real world: the exam results analysis',
  scenario:`The exam board has handed over a CSV file of results and wants real answers: what's the class
    average? Who scored highest and lowest? How many students actually passed? This week is about turning raw
    data in a file into genuine insight.`,
  objectives:[
    'Read a CSV file of numeric data and calculate its average',
    'Find the highest- and lowest-scoring record in a dataset',
    'Filter a dataset down to just the rows that meet a condition',
    'Combine file reading with real statistics to answer a specific question'
  ],
  conceptHtml:`
    <p>Combining file reading with basic maths turns raw data into real answers. Once you've read a CSV into a
    list of numbers (remembering to convert with <code>int()</code> or <code>float()</code>), everyday built-ins
    do the heavy lifting:</p>
    <pre class="code-block">scores = [88, 95, 72, 60]
print(sum(scores) / len(scores))   # average
print(max(scores))                 # highest
print(min(scores))                 # lowest</pre>
    <p>When your data is a list of dictionaries rather than plain numbers, <code>max()</code>/<code>min()</code>
    accept a <code>key</code> function too, exactly like <code>sorted()</code> did last week:</p>
    <pre class="code-block">students = [{"name": "Ada", "score": 88}, {"name": "Sam", "score": 95}]
top_student = max(students, key=lambda s: s["score"])
print(top_student["name"])   # Sam</pre>
    <p>A <strong>list comprehension</strong> with an <code>if</code> condition is a clean way to filter data down
    to just the rows you care about:</p>
    <pre class="code-block">passed = [s["name"] for s in students if s["score"] >= 75]</pre>`,
  sandboxStarter:`import csv

with open("scores.csv", "w", newline="") as f:
    f.write("Name,Score\nAda,88\nSam,95\nTom,72\nPriya,60\n")

scores = []
with open("scores.csv", "r", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        scores.append(int(row["Score"]))

print("Average:", round(sum(scores) / len(scores), 1))
print("Highest:", max(scores))
print("Lowest:", min(scores))
`,
  sandboxStarter2:`students = [
    {"name": "Ada", "score": 88},
    {"name": "Sam", "score": 95},
    {"name": "Tom", "score": 72},
    {"name": "Priya", "score": 60}
]

top_student = max(students, key=lambda s: s["score"])
print("Top scorer:", top_student["name"])

passed = [s["name"] for s in students if s["score"] >= 75]
print("Passed:", passed)
`,
  exercises:[
    {
      title:'Calculate the average score',
      desc:`The code below reads <code>scores.csv</code> into a list of ints called <code>scores</code>. Calculate
        the average and store it as <code>average</code>, then print it rounded to 1 decimal place.`,
      starter:`import csv

with open("scores.csv", "w", newline="") as f:
    f.write("Name,Score\\nAda,88\\nSam,95\\nTom,72\\nPriya,60\\n")

scores = []
with open("scores.csv", "r", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        scores.append(int(row["Score"]))

# TODO: calculate the average of scores, store as "average", print it rounded to 1 decimal place
`,
      tests:[
        {type:'assert', expr:`round(average, 1) == 78.8`, label:'average rounds to 78.8'}
      ]
    },
    {
      title:'Find the highest and lowest scorer',
      desc:`Using the given <code>students</code> list of dictionaries, find <code>top_student</code> (highest
        score) and <code>bottom_student</code> (lowest score) using <code>max()</code>/<code>min()</code> with a
        key function.`,
      starter:`students = [
    {"name": "Ada", "score": 88},
    {"name": "Sam", "score": 95},
    {"name": "Tom", "score": 72},
    {"name": "Priya", "score": 60}
]
# TODO: find top_student and bottom_student using max()/min() with a key function
`,
      tests:[
        {type:'assert', expr:`top_student["name"] == "Sam"`, label:'top_student is Sam'},
        {type:'assert', expr:`bottom_student["name"] == "Priya"`, label:'bottom_student is Priya'}
      ]
    },
    {
      title:'Filter students who passed',
      desc:`Using a list comprehension, build <code>passed</code>: the names of every student whose score is at
        least <code>pass_mark</code> (75).`,
      starter:`students = [
    {"name": "Ada", "score": 88},
    {"name": "Sam", "score": 95},
    {"name": "Tom", "score": 72},
    {"name": "Priya", "score": 60}
]
pass_mark = 75
# TODO: build "passed" - a list of names whose score >= pass_mark
`,
      tests:[
        {type:'assert', expr:`passed == ["Ada", "Sam"]`, label:'passed == ["Ada", "Sam"]'}
      ]
    },
    {
      title:'Fix the broken average calculator',
      desc:`This code should calculate a precise average, but it uses the wrong division operator and loses the
        decimal part. Fix the one bug so it prints the correct average.`,
      starter:`scores = [88, 95, 72, 60]
average = sum(scores) // len(scores)  # BUG: // does whole-number division, losing the decimal part
print(round(average, 1))`,
      tests:[
        {type:'assert', expr:`round(average, 1) == 78.8`, label:'average rounds to 78.8'}
      ]
    },
    {
      title:'Find the score range',
      desc:`Using the given <code>students</code> list, build a list of scores called <code>scores</code>, then
        calculate <code>score_range</code> (the highest score minus the lowest) and print it.`,
      starter:`students = [
    {"name": "Ada", "score": 88},
    {"name": "Sam", "score": 95},
    {"name": "Tom", "score": 72},
    {"name": "Priya", "score": 60}
]
# TODO: build scores (a list of just the scores), calculate score_range (max - min), then print it
`,
      tests:[
        {type:'assert', expr:`score_range == 35`, label:'score_range == 35'}
      ]
    },
    {
      title:'Count how many students passed',
      desc:`Using <code>sum(1 for s in students if s["score"] &gt;= pass_mark)</code>, count how many students
        scored at least <code>pass_mark</code> and store it as <code>pass_count</code>, then print it.`,
      starter:`students = [
    {"name": "Ada", "score": 88},
    {"name": "Sam", "score": 95},
    {"name": "Tom", "score": 72},
    {"name": "Priya", "score": 60}
]
pass_mark = 75
# TODO: count how many students scored at least pass_mark, store as pass_count, then print it
`,
      tests:[
        {type:'assert', expr:`pass_count == 2`, label:'pass_count == 2'}
      ]
    }
  ],
  quiz:[
    {q:'What does sum(scores) / len(scores) calculate?',
     options:['The highest score','The average (mean) score','The number of scores','The lowest score'], correct:1,
     explain:'Dividing the total by the count gives the average (mean) of the values.'},
    {q:'How do max()/min() let you find the highest/lowest item in a list of dictionaries?',
     options:['They cannot work on dictionaries at all','With a key function telling them which value to compare','They always compare the first key in each dictionary','You must convert to a list of numbers first'], correct:1,
     explain:'A key function tells max()/min() which value inside each dictionary to actually compare.'},
    {q:'What does [s["name"] for s in students if s["score"] >= 75] produce?',
     options:['Every score in students','Every name in students, regardless of score','Only the names of students whose score is 75 or higher','An error, since if cannot be used in a list comprehension'], correct:2,
     explain:'The if condition filters the list comprehension down to only the students meeting that condition.'},
    {q:'Why does // give a different (and often wrong) result from / when calculating an average?',
     options:['// is just a slower version of /','// (floor division) always rounds down to a whole number, discarding the decimal part','// only works with even numbers','There is no real difference'], correct:1,
     explain:'// performs floor division, discarding any decimal remainder - / (true division) is what you want for an accurate average.'}
  ],
  sandboxStarter3:`students = [
    {"name": "Ada", "score": 88},
    {"name": "Sam", "score": 95},
    {"name": "Tom", "score": 72},
    {"name": "Priya", "score": 60}
]

scores = [s["score"] for s in students]
score_range = max(scores) - min(scores)
print("Score range:", score_range)

pass_count = sum(1 for s in students if s["score"] >= 75)
print("Number who passed:", pass_count)
`,
  stretchChallenge:{
    title:'Find the class median score',
    desc:`Sort <code>scores</code>, then find the <strong>median</strong>: for an even number of scores, it's the
      average of the two middle values (<code>sorted_scores[n//2 - 1]</code> and <code>sorted_scores[n//2]</code>,
      where <code>n = len(sorted_scores)</code>). Print the median.`,
    starter:`scores = [88, 95, 72, 60]
# TODO: sort scores, find the median (average of the two middle values), store as "median", then print it
`,
    tests:[
      {type:'assert', expr:`median == 80.0`, label:'median == 80.0'}
    ]
  }
}

,

/* ================= WEEK 5 ================= */
{
  key:'week5', num:5, title:'Building with Classes',
  scenarioTag:'Real world: the school library management system',
  scenario:`A real library system needs more than one class working together: a <code>Book</code> to represent
    each book, and a <code>Library</code> to manage the whole collection — adding books, lending them out, and
    reporting what's available. This is <strong>composition</strong>: one class using objects of another class as
    part of its own data.`,
  objectives:[
    'Design a class that represents a single real-world thing',
    'Design a second class that manages a collection of objects from the first class',
    "Have one class's method operate on another class's objects",
    'Explain the difference between "is-a" (inheritance) and "has-a" (composition)'
  ],
  conceptHtml:`
    <p>Last level's inheritance was about an "is-a" relationship — a SportsClub <em>is a</em> kind of Club.
    <strong>Composition</strong> is different: it's a "has-a" relationship, where one class simply <em>contains</em>
    objects of another class as part of its own data:</p>
    <pre class="code-block">class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []             # a Library HAS Book objects

    def add_book(self, book):
        self.books.append(book)</pre>
    <p>The <code>Library</code> class's methods can then read and change the <code>Book</code> objects it's
    holding onto:</p>
    <pre class="code-block">def borrow(self, title):
    for book in self.books:
        if book.title == title and book.available:
            book.available = False
            return True
    return False</pre>
    <p>This is exactly how most real software is built: not one giant class, but several focused classes that
    each do one job well, working together.</p>`,
  sandboxStarter:`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

library = Library()
library.add_book(Book("The Hobbit", "Tolkien"))
library.add_book(Book("Matilda", "Dahl"))
print(len(library.books), "books in the library")
`,
  sandboxStarter2:`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []
    def add_book(self, book):
        self.books.append(book)
    def borrow(self, title):
        for book in self.books:
            if book.title == title and book.available:
                book.available = False
                return True
        return False

library = Library()
library.add_book(Book("The Hobbit", "Tolkien"))
library.add_book(Book("Matilda", "Dahl"))
print(library.borrow("Matilda"))
print(library.borrow("Matilda"))  # already borrowed
`,
  exercises:[
    {
      title:'Create Books and add them to a Library',
      desc:`Using the given <code>Book</code> and <code>Library</code> classes, create three Book objects and add
        them all to <code>library</code>, then print how many books it holds.`,
      starter:`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []
    def add_book(self, book):
        self.books.append(book)

library = Library()
# TODO: create three Book objects and add them all to library, then print len(library.books)
`,
      tests:[
        {type:'assert', expr:`len(library.books) == 3`, label:'library.books has 3 books'}
      ]
    },
    {
      title:'Implement borrowing a book',
      desc:`Finish <code>borrow(self, title)</code>: find a book with the matching title that's still available,
        mark it unavailable and return <code>True</code>. If no such book exists (wrong title, or already
        borrowed), return <code>False</code>.`,
      starter:`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []
    def add_book(self, book):
        self.books.append(book)
    def borrow(self, title):
        # TODO: find a matching, available book, mark it unavailable and return True; else return False
        pass

library = Library()
library.add_book(Book("The Hobbit", "Tolkien"))
library.add_book(Book("Matilda", "Dahl"))
result1 = library.borrow("Matilda")
result2 = library.borrow("Matilda")
result3 = library.borrow("Nonexistent")
print(result1, result2, result3)`,
      tests:[
        {type:'assert', expr:`result1 == True`, label:'first borrow of Matilda succeeds'},
        {type:'assert', expr:`result2 == False`, label:'second borrow of Matilda fails (already borrowed)'},
        {type:'assert', expr:`result3 == False`, label:'borrowing a nonexistent title fails'}
      ]
    },
    {
      title:'Find available books',
      desc:`Finish <code>find_available(self)</code>: return a list of titles for every book that is still
        <code>available</code>.`,
      starter:`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []
    def add_book(self, book):
        self.books.append(book)
    def borrow(self, title):
        for book in self.books:
            if book.title == title and book.available:
                book.available = False
                return True
        return False
    def find_available(self):
        # TODO: return a list of titles for every book that is still available
        pass

library = Library()
library.add_book(Book("The Hobbit", "Tolkien"))
library.add_book(Book("Matilda", "Dahl"))
library.add_book(Book("1984", "Orwell"))
library.borrow("Matilda")
print(library.find_available())`,
      tests:[
        {type:'assert', expr:`library.find_available() == ["The Hobbit", "1984"]`, label:'find_available() excludes the borrowed book'}
      ]
    },
    {
      title:'Fix the broken Library',
      desc:`This <code>add_book</code> method never actually stores the book anywhere. Fix the one bug so books
        are properly added to the library.`,
      starter:`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []
    def add_book(self, book):
        pass  # BUG: this never adds book to self.books

library = Library()
library.add_book(Book("The Hobbit", "Tolkien"))
library.add_book(Book("Matilda", "Dahl"))
print(len(library.books))`,
      tests:[
        {type:'assert', expr:`len(library.books) == 2`, label:'library.books has 2 books'}
      ]
    },
    {
      title:'Implement returning a book',
      desc:`Finish <code>return_book(self, title)</code>: find a book with the matching title that's currently
        <strong>unavailable</strong>, mark it available again and return <code>True</code>. If no such book
        exists, return <code>False</code>.`,
      starter:`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []
    def add_book(self, book):
        self.books.append(book)
    def return_book(self, title):
        # TODO: find a matching, unavailable book, mark it available and return True; else return False
        pass

library = Library()
library.add_book(Book("The Hobbit", "Tolkien"))
library.books[0].available = False  # pretend it was already borrowed
print(library.return_book("The Hobbit"))
print(library.books[0].available)`,
      tests:[
        {type:'output', contains:['True\nTrue'], label:'Returns True, and the book becomes available again'}
      ]
    },
    {
      title:'Count books by an author',
      desc:`Finish <code>count_by_author(self, author)</code>: return how many books in the library were written
        by <code>author</code>.`,
      starter:`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []
    def add_book(self, book):
        self.books.append(book)
    def count_by_author(self, author):
        # TODO: return how many books in self.books were written by author
        pass

library = Library()
library.add_book(Book("The Hobbit", "Tolkien"))
library.add_book(Book("The Silmarillion", "Tolkien"))
library.add_book(Book("Matilda", "Dahl"))
print(library.count_by_author("Tolkien"))`,
      tests:[
        {type:'assert', expr:`library.count_by_author("Tolkien") == 2`, label:'count_by_author("Tolkien") == 2'}
      ]
    }
  ],
  quiz:[
    {q:'What kind of relationship is composition (a "has-a" relationship)?',
     options:['One class replaces another entirely','One class contains objects of another class as part of its data','One class inherits every method from another','There is no difference from inheritance'], correct:1,
     explain:'Composition means one class holds objects of another class as part of its own data, rather than inheriting from it.'},
    {q:'In the Library/Book example, which best describes the relationship?',
     options:['A Library is a kind of Book','A Library has Book objects inside it','A Book is a kind of Library','Book and Library are unrelated'], correct:1,
     explain:'This is composition - a Library HAS Book objects as part of its own data (self.books), which is different from inheritance ("is-a").'},
    {q:"Why might you split a system into several focused classes instead of one giant class?",
     options:['Python requires at least two classes per program','Each class can focus on doing one job well, making the whole system easier to understand and reuse','It makes the program run faster','It is required for the code to compile'], correct:1,
     explain:'Splitting responsibilities across focused classes (like Book and Library) makes each one simpler to understand, test, and reuse.'},
    {q:'In borrow(self, title), why check "book.available" as well as the title matching?',
     options:['It is not actually necessary','So you never mark an already-borrowed book as borrowed again, or report success when it is unavailable','To make the loop run faster','Because Python requires two conditions in every if statement'], correct:1,
     explain:"Checking availability stops the method from wrongly succeeding on a book that's already been borrowed by someone else."}
  ],
  sandboxStarter3:`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []
    def add_book(self, book):
        self.books.append(book)
    def return_book(self, title):
        for book in self.books:
            if book.title == title and not book.available:
                book.available = True
                return True
        return False

library = Library()
library.add_book(Book("The Hobbit", "Tolkien"))
library.books[0].available = False  # pretend it was already borrowed
print(library.return_book("The Hobbit"))
print(library.books[0].available)
`,
  stretchChallenge:{
    title:"Find the library's most-stocked author",
    desc:`Finish <code>most_stocked_author(self)</code>: use a dictionary to count how many books each author has
      in the library, then return the author with the most, using <code>max(counts, key=counts.get)</code>.`,
    starter:`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available

class Library:
    def __init__(self):
        self.books = []
    def add_book(self, book):
        self.books.append(book)
    def most_stocked_author(self):
        counts = {}
        # TODO: count how many books each author has in counts, then return the most-stocked author
        pass

library = Library()
library.add_book(Book("The Hobbit", "Tolkien"))
library.add_book(Book("The Silmarillion", "Tolkien"))
library.add_book(Book("Matilda", "Dahl"))
print(library.most_stocked_author())`,
    tests:[
      {type:'assert', expr:`library.most_stocked_author() == "Tolkien"`, label:'most_stocked_author() == "Tolkien"'}
    ]
  }
}

,

/* ================= WEEK 6 ================= */
{
  key:'week6', num:6, title:'Testing & Debugging',
  scenarioTag:'Real world: shipping code you can trust',
  scenario:`A discount calculator that's wrong even 1% of the time could cost a shop real money — or give
    customers the wrong price. Professional developers don't just hope their code works; they write tests that
    prove it, and add checks that reject bad input before it causes a problem.`,
  objectives:[
    'Write assert-based tests to check a function behaves correctly',
    'Use assertions to catch bugs before they cause real problems',
    'Add defensive checks that reject invalid input with a clear error',
    'Use assertions to pin down exactly which case in a function is broken'
  ],
  conceptHtml:`
    <p>An <code>assert</code> statement checks that something is true, and crashes loudly with an
    <code>AssertionError</code> if it isn't — which is exactly what you want while testing, since a silent wrong
    answer is far more dangerous than a loud error:</p>
    <pre class="code-block">def double(n):
    return n * 2

assert double(2) == 4
assert double(0) == 0
assert double(-5) == -10
print("All tests passed!")</pre>
    <p><strong>Defensive programming</strong> means checking that the input to a function actually makes sense
    before you rely on it — rejecting bad input early with a clear error, rather than letting it cause confusing
    problems somewhere else entirely:</p>
    <pre class="code-block">def add_discount(price, discount_percent):
    if price < 0:
        raise ValueError("Price cannot be negative")
    if not (0 <= discount_percent <= 100):
        raise ValueError("Discount must be between 0 and 100")
    return price * (1 - discount_percent / 100)</pre>
    <p>When a function fails one of your tests, the assertion tells you exactly <em>which</em> case is wrong —
    that's your starting point for debugging, not a guessing game.</p>`,
  sandboxStarter:`def double(n):
    return n * 2

assert double(2) == 4
assert double(0) == 0
assert double(-5) == -10
print("All tests passed!")
`,
  sandboxStarter2:`def add_discount(price, discount_percent):
    if price < 0:
        raise ValueError("Price cannot be negative")
    if not (0 <= discount_percent <= 100):
        raise ValueError("Discount must be between 0 and 100")
    return price * (1 - discount_percent / 100)

print(add_discount(100, 20))

try:
    add_discount(-10, 20)
except ValueError as e:
    print("Rejected:", e)
`,
  exercises:[
    {
      title:'Write tests for a function',
      desc:`Write three assert statements testing <code>double(n)</code>: <code>double(2) == 4</code>,
        <code>double(0) == 0</code>, and <code>double(-5) == -10</code>. If none of them fail, print
        <code>All tests passed!</code>`,
      starter:`def double(n):
    return n * 2

# TODO: write three assert statements testing double(2), double(0), and double(-5)
# TODO: then print "All tests passed!"
`,
      tests:[
        {type:'output', contains:['All tests passed!'], label:'All three assertions pass'}
      ]
    },
    {
      title:'Add defensive checks',
      desc:`Add validation to <code>add_discount(price, discount_percent)</code>: raise a <code>ValueError</code>
        if <code>price</code> is negative, or if <code>discount_percent</code> is not between 0 and 100
        (inclusive).`,
      starter:`def add_discount(price, discount_percent):
    # TODO: raise ValueError if price < 0, or if discount_percent is not between 0 and 100
    return price * (1 - discount_percent / 100)

print(add_discount(100, 10))

try:
    add_discount(-5, 10)
    print("Should have raised an error!")
except ValueError:
    print("Correctly rejected negative price")

try:
    add_discount(100, 150)
    print("Should have raised an error!")
except ValueError:
    print("Correctly rejected invalid discount")`,
      tests:[
        {type:'output', contains:['90.0'], label:'add_discount(100, 10) still works correctly (90.0)'},
        {type:'output', contains:['Correctly rejected negative price'], label:'Rejects a negative price'},
        {type:'output', contains:['Correctly rejected invalid discount'], label:'Rejects an invalid discount percentage'}
      ]
    },
    {
      title:'Test the edge case',
      desc:`The <code>average(numbers)</code> function already handles an empty list. Write an assert statement
        checking <code>average([]) == 0</code>, and another checking <code>average([10, 20, 30]) == 20</code>.
        Then print <code>All tests passed!</code>`,
      starter:`def average(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)

# TODO: write assert statements checking average([]) == 0 and average([10, 20, 30]) == 20
# TODO: then print "All tests passed!"
`,
      tests:[
        {type:'output', contains:['All tests passed!'], label:'Both assertions pass'}
      ]
    },
    {
      title:'Fix the function that fails its own test',
      desc:`This <code>average</code> function fails the assertions below it. Find the bug and fix it so both
        assertions pass and <code>All tests passed!</code> is printed.`,
      starter:`def average(numbers):
    return sum(numbers) / len(numbers) - 1  # BUG: this subtracts 1 for no good reason

assert average([2, 4, 6]) == 4
assert average([10, 20, 30]) == 20
print("All tests passed!")`,
      tests:[
        {type:'output', contains:['All tests passed!'], label:'Both assertions pass after your fix'}
      ]
    },
    {
      title:'Write tests for a square function',
      desc:`Write three assert statements testing <code>square(n)</code>: <code>square(3) == 9</code>,
        <code>square(-2) == 4</code>, and <code>square(0) == 0</code>. If none of them fail, print
        <code>All tests passed!</code>`,
      starter:`def square(n):
    return n * n

# TODO: write three assert statements testing square(3), square(-2), and square(0)
# TODO: then print "All tests passed!"
`,
      tests:[
        {type:'output', contains:['All tests passed!'], label:'All three assertions pass'}
      ]
    },
    {
      title:'Add a defensive check to a divide function',
      desc:`Add validation to <code>safe_divide(a, b)</code>: raise a <code>ValueError</code> if <code>b</code>
        is <code>0</code>, before dividing.`,
      starter:`def safe_divide(a, b):
    # TODO: raise ValueError if b == 0
    return a / b

print(safe_divide(10, 2))

try:
    safe_divide(10, 0)
    print("Should have raised an error!")
except ValueError:
    print("Correctly rejected division by zero")`,
      tests:[
        {type:'output', contains:['5.0'], label:'safe_divide(10, 2) still works correctly (5.0)'},
        {type:'output', contains:['Correctly rejected division by zero'], label:'Rejects division by zero'}
      ]
    }
  ],
  quiz:[
    {q:"What happens when an assert statement's condition is False?",
     options:['Nothing, it is ignored','Python raises an AssertionError','The program pauses for input','It automatically fixes the value'], correct:1,
     explain:'A failed assert statement raises an AssertionError, immediately stopping execution at that exact point.'},
    {q:'What is "defensive programming"?',
     options:['Writing code that is impossible to read','Checking that input makes sense before relying on it, rejecting bad input early','Only writing code that never uses functions','Adding as many comments as possible'], correct:1,
     explain:'Defensive programming means validating input before using it, so bad data is rejected early with a clear error rather than causing confusing problems later.'},
    {q:'Why is a loud AssertionError often better than a silently wrong answer?',
     options:['It is not actually better','A silent wrong answer can go unnoticed and cause real harm, while a loud error tells you immediately something is broken','Errors always look more professional','Python requires all programs to crash eventually'], correct:1,
     explain:"A wrong answer that nobody notices can cause real problems - a loud, immediate error is far easier to catch and fix."},
    {q:'If assert average([10, 20, 30]) == 20 fails, what does that tell you?',
     options:['Nothing useful','Exactly which test case is producing the wrong answer, giving you a concrete starting point to debug','That Python itself has a bug','That the numbers 10, 20, and 30 are invalid'], correct:1,
     explain:'A failing assertion pinpoints exactly which input/output pair is wrong, which is far more useful than guessing where a bug might be.'}
  ],
  sandboxStarter3:`def square(n):
    return n * n

def run_test(actual, expected, label):
    try:
        assert actual == expected
        print(f"PASS: {label}")
    except AssertionError:
        print(f"FAIL: {label} (got {actual}, expected {expected})")

run_test(square(3), 9, "square(3)")
run_test(square(-2), 4, "square(-2)")
run_test(square(0), 1, "square(0)")   # deliberately wrong expectation, to show a FAIL report
`,
  stretchChallenge:{
    title:'Test and defend a stock checker',
    desc:`Write assert statements checking <code>has_stock(5) == True</code> and <code>has_stock(0) == False</code>.
      Then, inside a try/except, call <code>has_stock(-1)</code> and print
      <code>Correctly rejected negative quantity</code> when it raises a <code>ValueError</code>. Finally print
      <code>All tests passed!</code>`,
    starter:`def has_stock(quantity):
    if quantity < 0:
        raise ValueError("Quantity cannot be negative")
    return quantity > 0

# TODO: assert has_stock(5) == True and has_stock(0) == False
# TODO: use try/except to confirm has_stock(-1) raises ValueError, printing "Correctly rejected negative quantity"
# TODO: then print "All tests passed!"
`,
    tests:[
      {type:'output', contains:['Correctly rejected negative quantity'], label:'Rejects a negative quantity'},
      {type:'output', contains:['All tests passed!'], label:'All assertions pass'}
    ]
  }
}

,

/* ================= WEEK 7 ================= */
{
  key:'week7', num:7, title:'Working with API-Style Data',
  scenarioTag:'Real world: a weather widget for the school website',
  scenario:`The school website wants a small weather widget. Real weather websites work by calling an
    <strong>API</strong> that replies with structured JSON data — and whether or not you're online right now, you
    can practice working with exactly that shape of data using a realistic sample response.`,
  objectives:[
    'Explain what a typical API response looks like (structured, nested JSON)',
    'Navigate a nested API-style response to extract specific fields',
    'Handle a response that might be missing expected data, without crashing',
    'Combine several pieces of a response into a single useful answer'
  ],
  conceptHtml:`
    <p>When a real app talks to a weather API, it gets back structured data that looks exactly like the nested
    dictionaries and lists you already know from JSON:</p>
    <pre class="code-block">weather_response = {
    "location": "Birmingham",
    "current": {"temp_c": 14, "condition": "Cloudy"},
    "forecast": [
        {"day": "Mon", "temp_c": 15},
        {"day": "Tue", "temp_c": 13},
        {"day": "Wed", "temp_c": 16}
    ]
}
print(weather_response["current"]["temp_c"])   # 14</pre>
    <p>Real APIs don't always return exactly what you expect — a service might be down, or a field might be
    missing. <code>.get(key)</code> lets you ask for a key <em>safely</em>, returning <code>None</code> (or a
    default you choose) instead of crashing with a <code>KeyError</code>:</p>
    <pre class="code-block">current = response.get("current")   # None if "current" is missing, instead of crashing
if current is None:
    print("No current weather data available")</pre>
    <p>This code doesn't need real internet access to practice these exact skills — the sample data is shaped
    identically to what a genuine API would return.</p>`,
  sandboxStarter:`weather_response = {
    "location": "Birmingham",
    "current": {"temp_c": 14, "condition": "Cloudy"},
    "forecast": [
        {"day": "Mon", "temp_c": 15},
        {"day": "Tue", "temp_c": 13},
        {"day": "Wed", "temp_c": 16}
    ]
}

print(weather_response["location"], "-", weather_response["current"]["condition"])
for day in weather_response["forecast"]:
    print(day["day"], ":", day["temp_c"], "C")
`,
  sandboxStarter2:`error_response = {"location": "Manchester", "error": "Service unavailable"}

current = error_response.get("current")
if current is None:
    print("Weather data unavailable for", error_response["location"])
else:
    print(current["temp_c"])
`,
  exercises:[
    {
      title:'Extract the current temperature',
      desc:`From <code>weather_response</code>, get the location, the current temperature, and the current
        condition, then print exactly: <code>Birmingham: 14C, Cloudy</code>`,
      starter:`weather_response = {
    "location": "Birmingham",
    "current": {"temp_c": 14, "condition": "Cloudy"},
    "forecast": [
        {"day": "Mon", "temp_c": 15},
        {"day": "Tue", "temp_c": 13},
        {"day": "Wed", "temp_c": 16}
    ]
}
# TODO: extract location, current temp, and current condition, then print "Birmingham: 14C, Cloudy"
`,
      tests:[
        {type:'output', contains:['Birmingham: 14C, Cloudy'], label:'Prints "Birmingham: 14C, Cloudy"'}
      ]
    },
    {
      title:'Find the warmest forecast day',
      desc:`Using <code>max()</code> with a key function, find the day in <code>weather_response["forecast"]</code>
        with the highest <code>temp_c</code>, and print its <code>"day"</code> value.`,
      starter:`weather_response = {
    "location": "Birmingham",
    "current": {"temp_c": 14, "condition": "Cloudy"},
    "forecast": [
        {"day": "Mon", "temp_c": 15},
        {"day": "Tue", "temp_c": 13},
        {"day": "Wed", "temp_c": 16}
    ]
}
# TODO: find the warmest day in the forecast using max() with a key function, print its "day"
`,
      tests:[
        {type:'output', contains:['Wed'], label:'Prints Wed (the warmest forecast day)'}
      ]
    },
    {
      title:'Handle a missing field safely',
      desc:`<code>error_response</code> has no <code>"current"</code> key at all. Use <code>.get("current")</code>
        to fetch it safely (it will be <code>None</code>), and if it's missing, print
        <code>Weather data unavailable for Manchester</code> instead of crashing.`,
      starter:`error_response = {"location": "Manchester", "error": "Service unavailable"}
# TODO: safely get "current" with .get(); if it's None, print "Weather data unavailable for " + the location
`,
      tests:[
        {type:'output', contains:['Weather data unavailable for Manchester'], label:'Handles the missing field gracefully'}
      ]
    },
    {
      title:'Fix the wrong key name',
      desc:`This code crashes because it uses the wrong key name to look up the temperature. Fix the one bug so
        it prints the temperature correctly.`,
      starter:`weather_response = {
    "location": "Birmingham",
    "current": {"temp_c": 14, "condition": "Cloudy"}
}
temp = weather_response["current"]["temperature"]  # BUG: the actual key is "temp_c", not "temperature"
print(temp)`,
      tests:[
        {type:'assert', expr:`temp == 14`, label:'temp == 14'}
      ]
    },
    {
      title:'Find the coldest forecast day',
      desc:`Using <code>min()</code> with a key function, find the day in <code>weather_response["forecast"]</code>
        with the <strong>lowest</strong> <code>temp_c</code>, and print its <code>"day"</code> value.`,
      starter:`weather_response = {
    "location": "Birmingham",
    "current": {"temp_c": 14, "condition": "Cloudy"},
    "forecast": [
        {"day": "Mon", "temp_c": 15},
        {"day": "Tue", "temp_c": 13},
        {"day": "Wed", "temp_c": 16}
    ]
}
# TODO: find the coldest day in the forecast using min() with a key function, print its "day"
`,
      tests:[
        {type:'output', contains:['Tue'], label:'Prints Tue (the coldest forecast day)'}
      ]
    },
    {
      title:'Handle a missing field with a default value',
      desc:`<code>response["current"]</code> has no <code>"wind_kph"</code> key. Use
        <code>.get("wind_kph", 0)</code> to fetch it safely with a default of <code>0</code>, store it as
        <code>wind</code>, then print <code>Wind speed: 0 kph</code>.`,
      starter:`response = {"location": "Leeds", "current": {"temp_c": 10}}
# TODO: safely get "wind_kph" from response["current"] with a default of 0, store as wind,
# then print "Wind speed: " + str(wind) + " kph"
`,
      tests:[
        {type:'output', contains:['Wind speed: 0 kph'], label:'Prints "Wind speed: 0 kph"'}
      ]
    }
  ],
  quiz:[
    {q:'What does a typical API response look like?',
     options:['Plain unformatted text','Structured, often nested JSON data','A single number','An image file'], correct:1,
     explain:'APIs typically return structured JSON - the same nested dicts/lists shape you already know.'},
    {q:'What does response.get("current") return if "current" is not a key in response?',
     options:['It crashes with a KeyError','It returns None (or a default you specify)','It returns an empty string','It creates the key automatically'], correct:1,
     explain:'.get() returns None (or a chosen default) instead of crashing when the key is missing, unlike square-bracket access.'},
    {q:'Why might a real API response sometimes be missing a field you expect?',
     options:['APIs never return incomplete data','The service could be down, or that specific data might not be available for that request','JSON does not support missing fields','It is always a bug in your own code'], correct:1,
     explain:'Real-world services can be temporarily unavailable or simply not have every field for every request, so handling missing data gracefully matters.'},
    {q:'Why does this Advanced week use a pre-loaded sample response instead of a real live API call?',
     options:['Real APIs do not use JSON','Pyodide (in-browser Python) cannot reliably make live network calls in a classroom, so a realistic fixture teaches the same skills reliably','It is impossible to parse real API data in Python','There is no difference either way'], correct:1,
     explain:"In-browser Python cannot depend on live internet access working the same way in every classroom, so a fixture shaped exactly like a real response teaches the same parsing skills reliably."}
  ],
  sandboxStarter3:`weather_response = {
    "location": "Birmingham",
    "current": {"temp_c": 14, "condition": "Cloudy"}
}

# .get() can supply a default value instead of None
humidity = weather_response["current"].get("humidity", "unknown")
print("Humidity:", humidity)

# Combine several pieces of a response into one summary string
summary = f"{weather_response['location']}: {weather_response['current']['temp_c']}C, {weather_response['current']['condition']}, humidity {humidity}"
print(summary)
`,
  stretchChallenge:{
    title:'Build a one-line weather summary',
    desc:`Combine the location, current temperature and condition, and the warmest forecast day into one summary
      string: <code>"Birmingham: 14C and Cloudy now, warmest day ahead is Wed"</code>. Print it.`,
    starter:`weather_response = {
    "location": "Birmingham",
    "current": {"temp_c": 14, "condition": "Cloudy"},
    "forecast": [
        {"day": "Mon", "temp_c": 15},
        {"day": "Tue", "temp_c": 13},
        {"day": "Wed", "temp_c": 16}
    ]
}
# TODO: find the warmest forecast day, then print a summary combining location, current temp/condition,
# and the warmest day: "Birmingham: 14C and Cloudy now, warmest day ahead is Wed"
`,
    tests:[
      {type:'output', contains:['Birmingham: 14C and Cloudy now, warmest day ahead is Wed'], label:'Prints the full weather summary'}
    ]
  }
}

,

/* ================= WEEK 8 ================= */
{
  key:'week8', num:8, title:'Capstone — Design & Build',
  scenarioTag:'Real world: the school achievement tracker',
  scenario:`For your capstone, you're building a real system: a School Achievement Tracker that records student
    achievements and points, saves them, and ranks students by their total. This week you design the data model
    and get the core of it working — pulling together classes, JSON, and sorting from across this whole level.`,
  objectives:[
    'Design a class to represent a single real-world entity for your system',
    'Combine multiple classes together to build a working data model',
    "Save your system's data to a JSON file",
    'Rank multiple objects by a calculated value, not just a stored one'
  ],
  conceptHtml:`
    <p>A capstone project is a chance to combine everything into one real system, rather than learning one
    concept in isolation. This tracker uses two classes working together (composition, from Week 5):</p>
    <pre class="code-block">class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []

    def add_achievement(self, achievement):
        self.achievements.append(achievement)

    def total_points(self):
        return sum(a.points for a in self.achievements)</pre>
    <p>Notice <code>total_points()</code> is <em>calculated</em> each time from the achievements list, rather
    than stored directly — that's important, since it means the total is always correct even after you add more
    achievements later. You can rank a list of Student objects by this calculated value exactly like you ranked
    runners and exam scores earlier in the level.</p>`,
  sandboxStarter:`class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []

    def add_achievement(self, achievement):
        self.achievements.append(achievement)

    def total_points(self):
        return sum(a.points for a in self.achievements)

ada = Student("Ada")
ada.add_achievement(Achievement("Science Fair Winner", 50))
ada.add_achievement(Achievement("Perfect Attendance", 20))
print(ada.name, "-", ada.total_points(), "points")
`,
  sandboxStarter2:`class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(a.points for a in self.achievements)

ada = Student("Ada")
ada.add_achievement(Achievement("Science Fair", 50))
tom = Student("Tom")
tom.add_achievement(Achievement("Reading Challenge", 80))

students = [ada, tom]
ranked = sorted(students, key=lambda s: s.total_points(), reverse=True)
for s in ranked:
    print(s.name, "-", s.total_points())
`,
  exercises:[
    {
      title:'Create the achievement tracker',
      desc:`Using the given classes, create a Student called "Ada", add achievements
        <code>("Science Fair Winner", 50)</code> and <code>("Perfect Attendance", 20)</code>, then print her
        total points.`,
      starter:`class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(a.points for a in self.achievements)

# TODO: create a Student "Ada", add both achievements, then print student.total_points()
`,
      tests:[
        {type:'output', contains:['70'], label:'Prints the correct total points (70)'}
      ]
    },
    {
      title:"Save a student's data to JSON",
      desc:`Add a <code>to_dict(self)</code> method to <code>Student</code> returning
        <code>{"name": ..., "achievements": [...], "total": ...}</code>, then save it to
        <code>student.json</code> and read it back to confirm the total.`,
      starter:`import json

class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(a.points for a in self.achievements)
    def to_dict(self):
        # TODO: return {"name": self.name, "achievements": [...], "total": self.total_points()}
        pass

student = Student("Ada")
student.add_achievement(Achievement("Science Fair Winner", 50))
student.add_achievement(Achievement("Perfect Attendance", 20))

with open("student.json", "w") as f:
    json.dump(student.to_dict(), f)

with open("student.json", "r") as f:
    loaded = json.load(f)
print(loaded["total"])`,
      tests:[
        {type:'output', contains:['70'], label:"The saved and reloaded total is correct (70)"}
      ]
    },
    {
      title:'Rank students by total points',
      desc:`Using <code>sorted()</code> with a key function, rank the <code>students</code> list from highest
        total points to lowest, and build <code>names_in_order</code>: just their names, in ranked order.`,
      starter:`class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(a.points for a in self.achievements)

ada = Student("Ada")
ada.add_achievement(Achievement("Science Fair", 50))
sam = Student("Sam")
sam.add_achievement(Achievement("Sports Day", 25))
sam.add_achievement(Achievement("Attendance", 20))
tom = Student("Tom")
tom.add_achievement(Achievement("Reading Challenge", 80))
students = [ada, sam, tom]

# TODO: sort students by total_points() (highest first), build names_in_order - a list of just their names
`,
      tests:[
        {type:'assert', expr:`names_in_order == ["Tom", "Ada", "Sam"]`, label:'names_in_order == ["Tom", "Ada", "Sam"]'}
      ]
    },
    {
      title:'Fix the broken total_points method',
      desc:`This method tries to add up Achievement objects directly, which doesn't work. Fix the one bug so it
        correctly sums up each achievement's points.`,
      starter:`class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(self.achievements)  # BUG: you can't sum Achievement objects directly - need a.points

student = Student("Priya")
student.add_achievement(Achievement("Art Competition", 40))
student.add_achievement(Achievement("Volunteering", 15))
print(student.total_points())`,
      tests:[
        {type:'assert', expr:`student.total_points() == 55`, label:'student.total_points() == 55'}
      ]
    },
    {
      title:"Find a student's top achievement",
      desc:`Finish <code>top_achievement(self)</code>: use <code>max()</code> with a key function to return the
        <code>Achievement</code> object with the highest <code>points</code>.`,
      starter:`class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def top_achievement(self):
        # TODO: return the Achievement with the highest points, using max() with a key function
        pass

ada = Student("Ada")
ada.add_achievement(Achievement("Science Fair Winner", 50))
ada.add_achievement(Achievement("Perfect Attendance", 20))
print(ada.top_achievement().title)`,
      tests:[
        {type:'output', contains:['Science Fair Winner'], label:'Prints the top achievement title'}
      ]
    },
    {
      title:'Save the whole roster to JSON',
      desc:`Finish <code>save_roster(students, filename)</code>: write a JSON list of every student's
        <code>to_dict()</code> to <code>filename</code>. Then read it back and print how many entries it has.`,
      starter:`import json

class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(a.points for a in self.achievements)
    def to_dict(self):
        return {"name": self.name, "total": self.total_points()}

def save_roster(students, filename):
    # TODO: write json.dump([s.to_dict() for s in students], f) inside a "with open(filename, 'w')" block
    pass

ada = Student("Ada")
ada.add_achievement(Achievement("Science Fair", 50))
tom = Student("Tom")
tom.add_achievement(Achievement("Reading Challenge", 80))
students = [ada, tom]

save_roster(students, "roster.json")
with open("roster.json", "r") as f:
    loaded = json.load(f)
print(len(loaded))`,
      tests:[
        {type:'output', contains:['2'], label:'Prints the correct number of roster entries (2)'}
      ]
    }
  ],
  quiz:[
    {q:'Why is total_points() calculated fresh each time, rather than stored as a fixed number?',
     options:['It is not actually necessary','So it is always correct, even after more achievements are added later','To make the class use less memory','Python does not allow storing calculated values'], correct:1,
     explain:'Calculating it each time from the current achievements list means it is always accurate, even as new achievements get added.'},
    {q:'What does sum(a.points for a in self.achievements) do?',
     options:['Adds up every Achievement object directly','Adds up the .points value from every Achievement in the list','Counts how many achievements there are','Sorts the achievements by points'], correct:1,
     explain:'This is a generator expression that pulls out .points from each Achievement before summing them.'},
    {q:'Why does to_dict() exist on the Student class?',
     options:['To make the class run faster','To convert the object into a plain dictionary that JSON can actually store','Because __init__ requires it','It has no real purpose'], correct:1,
     explain:"JSON can't store a custom object directly - to_dict() converts it into a plain dictionary first, which json.dump() can handle."},
    {q:'What does sorted(students, key=lambda s: s.total_points(), reverse=True) do?',
     options:['Sorts students alphabetically by name','Sorts students by total_points(), highest first','Sorts students by total_points(), lowest first','Removes students with 0 points'], correct:1,
     explain:'The key function ranks by total_points(), and reverse=True puts the highest total first.'}
  ],
  sandboxStarter3:`class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(a.points for a in self.achievements)
    def top_achievement(self):
        return max(self.achievements, key=lambda a: a.points)

ada = Student("Ada")
ada.add_achievement(Achievement("Science Fair Winner", 50))
ada.add_achievement(Achievement("Perfect Attendance", 20))
top = ada.top_achievement()
print(top.title, "-", top.points, "points")
`,
  stretchChallenge:{
    title:'Count achievements above a threshold',
    desc:`Finish <code>count_achievements_over(self, threshold)</code>: return how many of the student's
      achievements have more than <code>threshold</code> points.`,
    starter:`class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def count_achievements_over(self, threshold):
        # TODO: return how many achievements have more than threshold points
        pass

ada = Student("Ada")
ada.add_achievement(Achievement("Science Fair", 50))
ada.add_achievement(Achievement("Attendance", 20))
ada.add_achievement(Achievement("Reading", 30))
print(ada.count_achievements_over(25))`,
    tests:[
      {type:'assert', expr:`ada.count_achievements_over(25) == 2`, label:'count_achievements_over(25) == 2'}
    ]
  }
}

,

/* ================= WEEK 9 ================= */
{
  key:'week9', num:9, title:'Capstone — Finish & Polish',
  scenarioTag:'Real world: launching the achievement tracker',
  scenario:`Your achievement tracker's data model works — now it's time to make it usable. This week you'll load
    saved data back, generate a proper leaderboard report, protect the system from bad input, and write tests
    proving the whole thing genuinely works, start to finish.`,
  objectives:[
    'Load saved JSON data back and reconstruct a usable list',
    'Generate a formatted leaderboard report from multiple records',
    'Add defensive validation that rejects invalid input',
    'Write tests confirming the whole system behaves correctly together'
  ],
  conceptHtml:`
    <p>A system isn't finished when the core logic works — it needs to load its own saved data back reliably,
    present it clearly, and refuse to accept nonsense input. This week combines skills from across the whole
    Advanced level into one finished piece of work:</p>
    <pre class="code-block">with open("tracker.json", "r") as f:
    students_data = json.load(f)

ranked = sorted(students_data, key=lambda s: s["total"], reverse=True)
for i, s in enumerate(ranked, start=1):
    print(f"{i}. {s['name']} - {s['total']} points")</pre>
    <p><code>enumerate(ranked, start=1)</code> gives you both a running position number and each item, which is
    exactly what a leaderboard needs. Adding validation to <code>Achievement.__init__</code> means bad data (like
    negative points) is rejected the moment it's created, not somewhere confusing later:</p>
    <pre class="code-block">class Achievement:
    def __init__(self, title, points):
        if points < 0:
            raise ValueError("Points cannot be negative")
        self.title = title
        self.points = points</pre>
    <p>And finishing with a real test suite — assertions covering the whole system working together — is exactly
    how you'd want to leave any project you're proud of.</p>`,
  sandboxStarter:`import json

with open("tracker.json", "w") as f:
    json.dump([
        {"name": "Ada", "total": 70},
        {"name": "Sam", "total": 45},
        {"name": "Tom", "total": 80}
    ], f)

with open("tracker.json", "r") as f:
    students_data = json.load(f)

ranked = sorted(students_data, key=lambda s: s["total"], reverse=True)
for i, s in enumerate(ranked, start=1):
    print(f"{i}. {s['name']} - {s['total']} points")
`,
  sandboxStarter2:`class Achievement:
    def __init__(self, title, points):
        if points < 0:
            raise ValueError("Points cannot be negative")
        self.title = title
        self.points = points

try:
    Achievement("Broken", -10)
except ValueError as e:
    print("Rejected:", e)

good = Achievement("Valid entry", 10)
print(good.title, "-", good.points, "points")
`,
  exercises:[
    {
      title:'Load the tracker data back',
      desc:`The code below saves three students to <code>tracker.json</code>. Read it back into
        <code>students_data</code> and print how many students are in it.`,
      starter:`import json

with open("tracker.json", "w") as f:
    json.dump([
        {"name": "Ada", "total": 70},
        {"name": "Sam", "total": 45},
        {"name": "Tom", "total": 80}
    ], f)

# TODO: read tracker.json back into students_data, then print len(students_data)
`,
      tests:[
        {type:'output', contains:['3'], label:'Prints the correct student count (3)'}
      ]
    },
    {
      title:'Generate a leaderboard report',
      desc:`Sort <code>students_data</code> by <code>"total"</code> (highest first), then print each line as
        <code>1. Tom - 80 points</code>, <code>2. Ada - 70 points</code>, and so on, using
        <code>enumerate(ranked, start=1)</code>.`,
      starter:`students_data = [
    {"name": "Ada", "total": 70},
    {"name": "Sam", "total": 45},
    {"name": "Tom", "total": 80}
]
# TODO: sort students_data by "total" (highest first), then print a numbered leaderboard line for each
`,
      tests:[
        {type:'output', contains:['1. Tom - 80 points'], label:'Prints the correct 1st place line'},
        {type:'output', contains:['2. Ada - 70 points'], label:'Prints the correct 2nd place line'},
        {type:'output', contains:['3. Sam - 45 points'], label:'Prints the correct 3rd place line'}
      ]
    },
    {
      title:'Add defensive validation',
      desc:`Update <code>Achievement.__init__</code> to raise a <code>ValueError</code> if <code>points</code> is
        negative, before storing anything.`,
      starter:`class Achievement:
    def __init__(self, title, points):
        # TODO: raise ValueError if points is negative
        self.title = title
        self.points = points

try:
    Achievement("Broken", -10)
    print("Should have raised an error!")
except ValueError:
    print("Correctly rejected negative points")

good = Achievement("Valid entry", 10)
print(good.points)`,
      tests:[
        {type:'output', contains:['Correctly rejected negative points'], label:'Rejects negative points'},
        {type:'output', contains:['10'], label:'Still accepts valid points (10)'}
      ]
    },
    {
      title:'Test the whole system together',
      desc:`Using the given <code>Achievement</code> and <code>Student</code> classes, create Ada (50 points) and
        Tom (80 points), then write assertions checking both totals are correct AND that Tom ranks first when
        sorted. Print <code>All tests passed!</code> if everything holds.`,
      starter:`class Achievement:
    def __init__(self, title, points):
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(a.points for a in self.achievements)

ada = Student("Ada")
ada.add_achievement(Achievement("Science Fair", 50))
tom = Student("Tom")
tom.add_achievement(Achievement("Reading Challenge", 80))

# TODO: assert ada.total_points() == 50
# TODO: assert tom.total_points() == 80
# TODO: sort [ada, tom] by total_points() (highest first), assert the first one is tom
# TODO: print "All tests passed!"
`,
      tests:[
        {type:'output', contains:['All tests passed!'], label:'All assertions about the system pass'}
      ]
    },
    {
      title:'Filter the leaderboard to qualifiers',
      desc:`Build <code>qualifiers</code>: a list of names from <code>students_data</code> whose
        <code>"total"</code> is at least <code>min_score</code>, then print it.`,
      starter:`students_data = [
    {"name": "Ada", "total": 70},
    {"name": "Sam", "total": 45},
    {"name": "Tom", "total": 80}
]
min_score = 50
# TODO: build qualifiers - a list of names whose total >= min_score, then print it
`,
      tests:[
        {type:'output', contains:["['Ada', 'Tom']"], label:"Prints ['Ada', 'Tom']"}
      ]
    },
    {
      title:'Validate the achievement title too',
      desc:`Update <code>Achievement.__init__</code> to <strong>also</strong> raise a <code>ValueError</code> if
        <code>title</code> is empty or blank (i.e. <code>not title.strip()</code>), on top of the existing
        points check.`,
      starter:`class Achievement:
    def __init__(self, title, points):
        if points < 0:
            raise ValueError("Points cannot be negative")
        # TODO: also raise ValueError if title is empty/blank (not title.strip())
        self.title = title
        self.points = points

try:
    Achievement("", 10)
    print("Should have raised an error!")
except ValueError:
    print("Correctly rejected an empty title")

good = Achievement("Valid entry", 10)
print(good.title)`,
      tests:[
        {type:'output', contains:['Correctly rejected an empty title'], label:'Rejects an empty title'},
        {type:'output', contains:['Valid entry'], label:'Still accepts a valid title'}
      ]
    }
  ],
  quiz:[
    {q:'What does enumerate(ranked, start=1) give you in a for loop?',
     options:['Just the position number, not the item','Both a running position number and each item','A reversed copy of the list','Nothing extra beyond a normal for loop'], correct:1,
     explain:'enumerate() pairs each item with a running number, starting from whatever you pass to start= - perfect for numbered leaderboards.'},
    {q:'Where is the best place to reject invalid data, like negative points?',
     options:['Nowhere - just hope it never happens','As early as possible, right where the object is created','Only at the very end of the program','In a separate program entirely'], correct:1,
     explain:'Rejecting bad data as early as possible (right in __init__) stops it from causing confusing problems anywhere else in the system.'},
    {q:'Why write a test that checks total_points() AND the sorting order together, not just one or the other?',
     options:['It is not actually useful to combine them','Because a bug in either the totals or the sorting could otherwise slip through unnoticed','Python requires at least two assertions per test','It makes the code run faster'], correct:1,
     explain:'Testing multiple parts of the system together catches bugs that might only appear when pieces interact, not just in isolation.'},
    {q:'What is the main purpose of a capstone project like this achievement tracker?',
     options:['To learn one single new syntax rule','To combine many separate skills into one real, working system','To avoid using classes','To only practice printing text'], correct:1,
     explain:"A capstone deliberately pulls together skills learned separately - classes, files, JSON, sorting, testing - into one coherent, working system."}
  ],
  sandboxStarter3:`import json

with open("tracker.json", "w") as f:
    json.dump([
        {"name": "Ada", "total": 70},
        {"name": "Sam", "total": 45},
        {"name": "Tom", "total": 80}
    ], f)

with open("tracker.json", "r") as f:
    students_data = json.load(f)

# Only show students who cleared a minimum score
qualifiers = [s for s in students_data if s["total"] >= 50]
print("Qualifiers:", [s["name"] for s in qualifiers])

ranked = sorted(qualifiers, key=lambda s: s["total"], reverse=True)
for i, s in enumerate(ranked, start=1):
    print(f"{i}. {s['name']} - {s['total']} points")
`,
  stretchChallenge:{
    title:'Write a full validation test suite',
    desc:`Using an <code>Achievement</code> class that validates both <code>points</code> and <code>title</code>,
      assert a valid achievement can be created correctly, then use try/except to confirm both a negative-points
      achievement AND an empty-title achievement each raise a <code>ValueError</code>. Print
      <code>All tests passed!</code> if everything holds.`,
    starter:`class Achievement:
    def __init__(self, title, points):
        if points < 0:
            raise ValueError("Points cannot be negative")
        if not title.strip():
            raise ValueError("Title cannot be empty")
        self.title = title
        self.points = points

# TODO: create a = Achievement("Reading", 10), assert a.points == 10
# TODO: use try/except to confirm Achievement("Bad", -5) raises ValueError
# TODO: use try/except to confirm Achievement("", 5) raises ValueError
# TODO: then print "All tests passed!"
`,
    tests:[
      {type:'output', contains:['All tests passed!'], label:'All validation tests pass'}
    ]
  }
}

]; // end ADVANCED_WEEKS (all 9 weeks complete)

/* =========================================================================
   MINI PROJECT 1 — "Analyse the Sports Day Results" (mid-level checkpoint, after Week 4)
   Combines sorting, searching, and data analysis from Weeks 1-4.
   ========================================================================= */
const ADVANCED_MP1 = {
  key:'mp1', title:'Mini Project 1 — Analyse the Sports Day Results',
  intro:`Sports Day is over and the results are in. You'll rank every runner, work out the podium, and build a
    full results summary — exactly the kind of analysis a real events team would need.`,
  newTrick:`<code>sorted(times, key=lambda r: r["time"])</code> works just as well for racing (lowest time wins)
    as it did for exam scores (highest wins) — the key function just decides what "best" means.`,
  fixtureNote:`All three stages share this race_times list — it's already provided in every editor below, you
    don't need to type it out yourself:`,
  fixtureCode:`race_times = [
    {"name": "Ada", "time": 14.2},
    {"name": "Sam", "time": 13.8},
    {"name": "Tom", "time": 15.1},
    {"name": "Priya", "time": 13.5},
    {"name": "Grace", "time": 14.9}
]`,
  stages:[
    {
      key:'a', title:'Stage A — Rank the runners',
      desc:`Write <code>rank_runners(times)</code>: sort the runners by time (fastest/lowest first) and return
        just their names, in ranked order.`,
      starter:`race_times = [
    {"name": "Ada", "time": 14.2},
    {"name": "Sam", "time": 13.8},
    {"name": "Tom", "time": 15.1},
    {"name": "Priya", "time": 13.5},
    {"name": "Grace", "time": 14.9}
]

def rank_runners(times):
    # TODO: sort times by "time" (fastest first), return just the names in order
    pass`,
      tests:[
        {type:'assert', expr:`rank_runners(race_times) == ["Priya", "Sam", "Ada", "Grace", "Tom"]`, label:'rank_runners(race_times) returns the correct order'}
      ]
    },
    {
      key:'b', title:'Stage B — Find the podium',
      desc:`Write <code>podium(times)</code>, using your ranking, that returns just the top 3 fastest names.`,
      starter:`race_times = [
    {"name": "Ada", "time": 14.2},
    {"name": "Sam", "time": 13.8},
    {"name": "Tom", "time": 15.1},
    {"name": "Priya", "time": 13.5},
    {"name": "Grace", "time": 14.9}
]

def rank_runners(times):
    ranked = sorted(times, key=lambda r: r["time"])
    return [r["name"] for r in ranked]

def podium(times):
    # TODO: use rank_runners to return just the top 3 names
    pass`,
      tests:[
        {type:'assert', expr:`podium(race_times) == ["Priya", "Sam", "Ada"]`, label:'podium(race_times) == ["Priya", "Sam", "Ada"]'}
      ]
    },
    {
      key:'c', title:'Stage C — Build the full results summary',
      desc:`Write <code>race_summary(times, qualifying_time)</code> that returns a dictionary with
        <code>"average_time"</code> (rounded to 1 decimal place), <code>"fastest"</code> (the fastest runner's
        name), and <code>"qualified_count"</code> (how many runners finished at or under
        <code>qualifying_time</code>).`,
      starter:`race_times = [
    {"name": "Ada", "time": 14.2},
    {"name": "Sam", "time": 13.8},
    {"name": "Tom", "time": 15.1},
    {"name": "Priya", "time": 13.5},
    {"name": "Grace", "time": 14.9}
]

def race_summary(times, qualifying_time):
    # TODO: return {"average_time": ..., "fastest": ..., "qualified_count": ...}
    pass`,
      tests:[
        {type:'assert', expr:`race_summary(race_times, 14.5) == {"average_time": 14.3, "fastest": "Priya", "qualified_count": 3}`, label:'race_summary(race_times, 14.5) returns the correct summary'}
      ]
    }
  ]
};

/* =========================================================================
   MINI PROJECT 2 — "Launch the Achievement Tracker" (capstone, end of level)
   Combines classes, validation, JSON, and sorting from Weeks 5-9.
   ========================================================================= */
const ADVANCED_MP2 = {
  key:'mp2', title:'Mini Project 2 — Launch the Achievement Tracker',
  intro:`This is it — the final build. You'll create validated students and achievements, save the whole tracker
    to a file, and generate the finished leaderboard report, pulling together everything from across the entire
    Advanced level.`,
  fixtureNote:`All three doors share these classes — they're already provided in every editor below, you don't
    need to type them out yourself:`,
  fixtureCode:`class Achievement:
    def __init__(self, title, points):
        if points < 0:
            raise ValueError("Points cannot be negative")
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(a.points for a in self.achievements)`,
  doors:[
    {
      key:'a', title:'Door 1 — Build a validated student',
      desc:`Write <code>create_student(name, achievements)</code>, where <code>achievements</code> is a list of
        <code>(title, points)</code> tuples. Create a Student, add an Achievement for each tuple, and return the
        finished Student.`,
      starter:`class Achievement:
    def __init__(self, title, points):
        if points < 0:
            raise ValueError("Points cannot be negative")
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(a.points for a in self.achievements)

def create_student(name, achievements):
    # TODO: create a Student, add an Achievement for each (title, points) tuple, return the Student
    pass

ada = create_student("Ada", [("Science Fair", 50), ("Attendance", 20)])
print(ada.total_points())`,
      tests:[
        {type:'assert', expr:`ada.total_points() == 70`, label:'ada.total_points() == 70'}
      ]
    },
    {
      key:'b', title:'Door 2 — Save the whole tracker',
      desc:`Write <code>save_tracker(students, filename)</code>: convert every student to
        <code>{"name": ..., "total": ...}</code> and save the whole list to <code>filename</code> as JSON.`,
      starter:`import json

class Achievement:
    def __init__(self, title, points):
        if points < 0:
            raise ValueError("Points cannot be negative")
        self.title = title
        self.points = points

class Student:
    def __init__(self, name):
        self.name = name
        self.achievements = []
    def add_achievement(self, achievement):
        self.achievements.append(achievement)
    def total_points(self):
        return sum(a.points for a in self.achievements)

def create_student(name, achievements):
    student = Student(name)
    for title, points in achievements:
        student.add_achievement(Achievement(title, points))
    return student

def save_tracker(students, filename):
    # TODO: convert every student to {"name": ..., "total": ...}, save the whole list to filename with json.dump
    pass

ada = create_student("Ada", [("Science Fair", 50)])
tom = create_student("Tom", [("Reading Challenge", 80)])
save_tracker([ada, tom], "final_tracker.json")

with open("final_tracker.json", "r") as f:
    print(json.load(f))`,
      tests:[
        {type:'output', contains:["[{'name': 'Ada', 'total': 50}, {'name': 'Tom', 'total': 80}]"], label:'final_tracker.json contains both students with correct totals'}
      ]
    },
    {
      key:'c', title:'Door 3 — Generate the final leaderboard',
      desc:`Write <code>leaderboard_report(filename)</code>: read the saved tracker JSON, sort by total (highest
        first), and return one combined string with a numbered line per student, like
        <code>"1. Tom - 80 points\\n2. Ada - 50 points"</code>.`,
      starter:`import json

with open("final_tracker.json", "w") as f:
    json.dump([{"name": "Ada", "total": 50}, {"name": "Tom", "total": 80}], f)

def leaderboard_report(filename):
    # TODO: read filename, sort by "total" (highest first), return a "\\n"-joined string of numbered lines
    # e.g. "1. Tom - 80 points\\n2. Ada - 50 points"
    pass

print(leaderboard_report("final_tracker.json"))`,
      tests:[
        {type:'assert', expr:`leaderboard_report("final_tracker.json") == "1. Tom - 80 points\\n2. Ada - 50 points"`, label:'leaderboard_report(...) produces the correct ranked report'}
      ]
    }
  ]
};

