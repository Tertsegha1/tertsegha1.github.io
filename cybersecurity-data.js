/* =========================================================================
   Cybersecurity Academy — Phase 0 placeholder content
   One placeholder week, reused across all 3 levels until each level's real
   curriculum is authored in its own build phase. Reuses the plain Pyodide
   runtime (no extra installs needed — hashlib is part of the Python
   standard library) — content is deliberately defensive/educational only:
   password hygiene, hashing, and spotting insecure code, never exploit
   techniques.
   ========================================================================= */

const CY_WEEKS = [
{
  key:'week1', num:1, title:'Why Passwords Matter',
  scenarioTag:'Real world: securing the new student portal',
  scenario:`Your school is launching a new student portal, and the IT team has asked you to help them understand
    what makes a password weak or strong — before they decide on the rules new accounts must follow.`,
  objectives:[
    'Explain why short, predictable passwords are a security risk',
    'Check whether text contains a digit',
    'Combine checks into a password-strength function',
    'Use hashlib to avoid ever storing a password in plain text'
  ],
  conceptHtml:`
    <p>A weak password is one that's <strong>short</strong> or <strong>easy to guess</strong> — attackers don't
    need to "hack" anything if they can just guess "password123" in a few tries. Two simple checks catch a lot of
    weak passwords: is it <strong>long enough</strong>, and does it <strong>mix letters and numbers</strong>?</p>
    <pre class="code-block">password = "sunshine7"
print(len(password) >= 8)          # long enough?
print(any(c.isdigit() for c in password))  # contains a digit?</pre>
    <p>Real systems never store your actual password — they store a <strong>hash</strong>, a scrambled fingerprint
    that can't be reversed back into the original text. Python's <code>hashlib</code> module can do this:</p>
    <pre class="code-block">import hashlib
password = "letmein123"
print(hashlib.sha256(password.encode()).hexdigest())</pre>
    <h3>Let's break down the strength check, line by line</h3>
    <pre class="code-block">password = "sunshine7"
print(len(password) >= 8)
print(any(c.isdigit() for c in password))</pre>
    <ul>
      <li><code>password = "sunshine7"</code> — stores the text in a variable so we can check it more than once
        without retyping it.</li>
      <li><code>len(password) >= 8</code> — <code>len()</code> counts the characters in the password (9 here),
        and <code>>= 8</code> checks whether that count is 8 or more. The whole expression evaluates to either
        <code>True</code> or <code>False</code>, which is what gets printed.</li>
      <li><code>any(c.isdigit() for c in password)</code> — this reads a new piece of syntax: it looks at
        <code>password</code> one character (<code>c</code>) at a time, checks <code>c.isdigit()</code> (is this
        one character a digit?) for each, and <code>any(...)</code> returns <code>True</code> the moment it finds
        even a single digit. It's a compact way of asking "does at least one character pass this test?" without
        writing a full loop yourself.</li>
    </ul>
    <p>The hashing example follows a similar shape: <code>password.encode()</code> turns the text into raw bytes
    (hashing functions work on bytes, not directly on text), <code>hashlib.sha256(...)</code> runs the actual
    hashing algorithm on those bytes, and <code>.hexdigest()</code> converts the scrambled result into a readable
    string of hex characters — which is what actually gets stored/printed.</p>`,
  sandboxStarter:`password = "cat123"
print(len(password))
print(any(c.isdigit() for c in password))
`,
  sandboxStarter2:`def has_digit(text):
    for ch in text:
        if ch.isdigit():
            return True
    return False

print(has_digit("hello"))
print(has_digit("hello1"))
`,
  exercises:[
    {
      title:'Is it long enough?',
      desc:`Given password = "sunshine", print True if it has 8 or more characters, otherwise print False. This is
        the exact len(password) >= 8 check from the concept box, just printed directly.`,
      starter:`password = "sunshine"
# Print True or False below
`,
      tests:[{type:'output', contains:['True'], label:'Correctly prints True for an 8+ character password'}]
    },
    {
      title:'Does it have a number?',
      desc:`Write a function has_digit(text) that returns True if any character in text is a digit. Then print
        has_digit("sunshine7"). You can use the any(c.isdigit() for c in text) pattern from the concept box inside
        your function's return statement.`,
      starter:`def has_digit(text):
    # TODO: return True if any character in text is a digit
    pass

print(has_digit("sunshine7"))
`,
      tests:[{type:'output', contains:['True'], label:'Correctly detects a digit in the password'}]
    },
    {
      title:'Build a strength checker',
      desc:`Write a function is_strong(pw) that returns True only if pw is 8+ characters AND contains at least
        one digit. Combine the two checks from the last two exercises with Python's and keyword — both conditions
        have to be True for the whole expression to be True.`,
      starter:`def is_strong(pw):
    # TODO: return True only if pw is long enough AND has a digit
    pass
`,
      tests:[
        {type:'assert', expr:'is_strong("sunshine7") == True', label:'"sunshine7" is correctly marked strong'},
        {type:'assert', expr:'is_strong("cat") == False', label:'"cat" is correctly marked not strong'}
      ]
    },
    {
      title:'Never store the plain password',
      desc:`The line below prints the password in plain text — real systems never do this. Replace it so it
        prints the SHA-256 hash of the password instead, using hashlib. Follow the three-step pattern from the
        concept box: password.encode() to get bytes, hashlib.sha256(...) to hash those bytes, then .hexdigest()
        to turn the result into a printable string — all chained together in one line.`,
      starter:`import hashlib
password = "letmein123"
# Replace the line below to print the SHA-256 hex digest instead
print(password)
`,
      tests:[{type:'output', contains:['9b0eb22aef89516d6fb4b31ccf008a68abe0d10a3fc606316389613eccf96854'], label:'Prints the correct SHA-256 hash, not the plain password'}]
    },
    {
      title:'Reject a password with spaces',
      desc:`Write a function has_no_spaces(pw) that returns True if pw contains no space character, False
        otherwise (hint: ' ' not in pw). Assert that has_no_spaces("sunshine7") == True and
        has_no_spaces("sun shine7") == False.`,
      starter:`def has_no_spaces(pw):
    # TODO: return True if pw contains no space character
    pass
`,
      tests:[
        {type:'assert', expr:'has_no_spaces("sunshine7") == True', label:'"sunshine7" correctly has no spaces'},
        {type:'assert', expr:'has_no_spaces("sun shine7") == False', label:'"sun shine7" correctly contains a space'}
      ]
    },
    {
      title:'Same password, same hash',
      desc:`Using hashlib, calculate hash1 and hash2 by hashing the SAME password "letmein123" twice,
        independently (two separate hashlib.sha256(...).hexdigest() calls). Assert that hash1 == hash2 —
        hashing is deterministic, which is exactly why a login system can compare hashes instead of ever
        storing the real password.`,
      starter:`import hashlib
# Calculate hash1 and hash2 below, both by hashing "letmein123"
`,
      tests:[{type:'assert', expr:'hash1 == hash2', label:'hash1 and hash2 correctly match'}]
    }
  ],
  quiz:[
    {
      q:'Why is a short password like "cat" risky?',
      options:['It uses too much memory','It is quick for an attacker to guess or crack','It is hard to type','It cannot contain letters'],
      correct:1,
      explain:'Short passwords have far fewer possible combinations, so they can be guessed or cracked quickly.'
    },
    {
      q:'What does a password hash let a system do?',
      options:['Recover the original password whenever needed','Check a password is correct without ever storing the real password','Make passwords load faster','Encrypt the whole website'],
      correct:1,
      explain:'Systems store a hash and compare hashes at login — the real password is never kept on file.'
    },
    {
      q:'Which of these makes a password meaningfully stronger?',
      options:['Using your name','Keeping it short so it is easy to remember','Making it longer and mixing in numbers','Using the same password everywhere'],
      correct:2,
      explain:'Length and mixing character types are the two biggest factors in password strength.'
    },
    {
      q:'Which Python module was used to hash a password in this lesson?',
      options:['random','hashlib','os','string'],
      correct:1,
      explain:'hashlib provides secure hash functions like SHA-256, part of the Python standard library.'
    }
  ],
  sandboxStarter3:`import hashlib
password_a = "letmein123"
password_b = "sunshine7"
hash_a = hashlib.sha256(password_a.encode()).hexdigest()
hash_b = hashlib.sha256(password_b.encode()).hexdigest()
print(password_a, "->", hash_a)
print(password_b, "->", hash_b)
print("hashes match:", hash_a == hash_b)
`,
  stretchChallenge:{
    title:'Different passwords, different hashes',
    desc:`Using hashlib, calculate hash_a (from "letmein123") and hash_b (from "differentpw1"). Assert that
      hash_a != hash_b — even a small change in the password produces a completely different hash.`,
    starter:`import hashlib
# Calculate hash_a (from "letmein123") and hash_b (from "differentpw1") below
`,
    tests:[
      {type:'assert', expr:'hash_a != hash_b', label:'hash_a and hash_b are correctly different'}
    ]
  }
},
{
  key:'week2', num:2, title:'Cleaning Up What Users Type: Input Validation',
  scenarioTag:'Real world: what if a student\'s sign-up form is broken or blank?',
  scenario:`The student portal's sign-up form needs a username and an email address — but users don't always type
    what you expect. Someone might submit a blank name, or an email with no "@" at all. This week you'll write
    validation functions that catch bad input BEFORE it's ever accepted, rejecting it safely instead of letting a
    broken account get created.`,
  objectives:[
    'Reject an empty or blank username',
    'Check an email address has a basic valid shape, using split() and in',
    'Combine multiple checks to validate a whole sign-up form',
    'Handle missing input (like None) safely, without the program crashing'
  ],
  conceptHtml:`
    <p>Never trust that user input will be "normal." A username might be blank, or just spaces:</p>
    <pre class="code-block">def is_valid_username(name):
    return len(name.strip()) > 0

print(is_valid_username("Ada"))   # True
print(is_valid_username("   "))  # False — just spaces</pre>
    <p><code>.strip()</code> removes leading/trailing spaces before checking length — a name of just spaces would
    otherwise slip past a plain <code>len(name) > 0</code> check.</p>
    <p>A basic (not perfect — real email validation is more complex) shape check for an email uses
    <code>.split()</code> and <code>in</code>, no special libraries needed:</p>
    <pre class="code-block">def is_valid_email(email):
    parts = email.split("@")
    if len(parts) != 2:
        return False
    return "." in parts[1]

print(is_valid_email("ada@school.com"))  # True
print(is_valid_email("ada.school.com"))  # False — no "@" at all</pre>
    <h3>Let's break down the email check, line by line</h3>
    <ul>
      <li><code>email.split("@")</code> — splits the text everywhere an <code>"@"</code> appears, returning a
        list of pieces. A valid email should split into EXACTLY two pieces.</li>
      <li><code>len(parts) != 2</code> — catches both no <code>"@"</code> at all (1 piece) and more than one
        <code>"@"</code> (3+ pieces), rejecting both immediately.</li>
      <li><code>"." in parts[1]</code> — checks the part AFTER the <code>"@"</code> specifically contains a dot,
        like <code>school.com</code> — checking the whole email string wouldn't catch an email with a dot only
        before the <code>"@"</code>, like <code>ada.smith@school</code>.</li>
    </ul>`,
  sandboxStarter:`def is_valid_username(name):
    return len(name.strip()) > 0

for name in ["Ada", "", "   ", "Ben"]:
    print(repr(name), "->", is_valid_username(name))
`,
  sandboxStarter2:`def is_valid_username(name):
    return len(name.strip()) > 0

def is_valid_email(email):
    parts = email.split("@")
    if len(parts) != 2:
        return False
    return "." in parts[1]

def is_valid_signup(name, email):
    return is_valid_username(name) and is_valid_email(email)

print(is_valid_signup("Ada", "ada@school.com"))
print(is_valid_signup("", "ada@school.com"))
print(is_valid_signup("Ada", "ada@school"))
`,
  exercises:[
    {
      title:'Reject an empty username',
      desc:`Write is_valid_username(name) that returns True if name has at least one non-space character (hint:
        len(name.strip()) > 0). Assert that is_valid_username("Ada") == True and
        is_valid_username("   ") == False.`,
      starter:`def is_valid_username(name):
    # TODO: return True if name has at least one non-space character
    pass
`,
      tests:[
        {type:'assert', expr:'is_valid_username("Ada") == True', label:'"Ada" is correctly valid'},
        {type:'assert', expr:'is_valid_username("   ") == False', label:'"   " (just spaces) is correctly invalid'}
      ]
    },
    {
      title:'Check for a basic email shape',
      desc:`Write is_valid_email(email) using the split("@") pattern from the concept box: it must split into
        exactly 2 parts, and the second part must contain a ".". Assert that
        is_valid_email("ada@school.com") == True, is_valid_email("ada.school.com") == False, and
        is_valid_email("ada@school") == False (has an "@" but no "." after it).`,
      starter:`def is_valid_email(email):
    # TODO: split on "@", check there are exactly 2 parts, and "." is in the second part
    pass
`,
      tests:[
        {type:'assert', expr:'is_valid_email("ada@school.com") == True', label:'"ada@school.com" is correctly valid'},
        {type:'assert', expr:'is_valid_email("ada.school.com") == False', label:'"ada.school.com" (no @) is correctly invalid'},
        {type:'assert', expr:'is_valid_email("ada@school") == False', label:'"ada@school" (@ but no dot after it) is correctly invalid'}
      ]
    },
    {
      title:'Combine checks for a full form',
      desc:`Using is_valid_username(name) and is_valid_email(email) (rewrite both below), write
        is_valid_signup(name, email) that returns True only if BOTH are valid. Assert that
        is_valid_signup("Ada", "ada@school.com") == True and is_valid_signup("", "ada@school.com") == False.`,
      starter:`def is_valid_username(name):
    return len(name.strip()) > 0

def is_valid_email(email):
    parts = email.split("@")
    if len(parts) != 2:
        return False
    return "." in parts[1]

def is_valid_signup(name, email):
    # TODO: return True only if both checks pass
    pass
`,
      tests:[
        {type:'assert', expr:'is_valid_signup("Ada", "ada@school.com") == True', label:'A valid name+email is correctly accepted'},
        {type:'assert', expr:'is_valid_signup("", "ada@school.com") == False', label:'A blank name is correctly rejected'}
      ]
    },
    {
      title:'Reject a form with multiple bad fields',
      desc:`Write find_invalid_fields(form) where form is a dict like {"name": ..., "email": ...}. Return a list
        of field names ("name" and/or "email") that fail validation, using is_valid_username/is_valid_email.
        Assert that find_invalid_fields({"name": "", "email": "ada@school"}) == ["name", "email"].`,
      starter:`def is_valid_username(name):
    return len(name.strip()) > 0

def is_valid_email(email):
    parts = email.split("@")
    if len(parts) != 2:
        return False
    return "." in parts[1]

def find_invalid_fields(form):
    # TODO: return a list of invalid field names ("name" and/or "email")
    pass
`,
      tests:[{type:'assert', expr:'find_invalid_fields({"name": "", "email": "ada@school"}) == ["name", "email"]', label:'Both invalid fields are correctly listed, in order'}]
    },
    {
      title:'Reject a username that\'s too short',
      desc:`Write is_valid_username(name) so it ALSO requires at least 2 non-space characters (not just 1).
        Assert that is_valid_username("A") == False and is_valid_username("Ada") == True.`,
      starter:`def is_valid_username(name):
    # TODO: return True only if name (stripped) has 2 or more characters
    pass
`,
      tests:[
        {type:'assert', expr:'is_valid_username("A") == False', label:'A single-character name is correctly rejected'},
        {type:'assert', expr:'is_valid_username("Ada") == True', label:'"Ada" is still correctly accepted'}
      ]
    },
    {
      title:'Handle missing input safely',
      desc:`Write safe_is_valid_email(email) that returns False immediately if email is None (checked with an
        if statement BEFORE calling split), otherwise runs the normal is_valid_email check. Assert that
        safe_is_valid_email(None) == False and safe_is_valid_email("ada@school.com") == True.`,
      starter:`def is_valid_email(email):
    parts = email.split("@")
    if len(parts) != 2:
        return False
    return "." in parts[1]

def safe_is_valid_email(email):
    # TODO: return False if email is None, otherwise use is_valid_email(email)
    pass
`,
      tests:[
        {type:'assert', expr:'safe_is_valid_email(None) == False', label:'None is correctly rejected without crashing'},
        {type:'assert', expr:'safe_is_valid_email("ada@school.com") == True', label:'A real email is still correctly accepted'}
      ]
    }
  ],
  quiz:[
    {
      q:'Why does is_valid_username use name.strip() before checking length?',
      options:['strip() has no real purpose here','Without it, a name made only of spaces would incorrectly count as non-empty','strip() makes the function run faster','strip() converts the name to lowercase'],
      correct:1,
      explain:'strip() removes leading/trailing spaces, so a blank-looking name of just spaces is correctly caught as invalid.'
    },
    {
      q:'Why check that email.split("@") gives exactly 2 parts, not just "at least 1"?',
      options:['It doesn\'t matter how many parts there are','This also catches emails with TWO or more "@" symbols, which are invalid too, not just emails missing "@" entirely','2 parts is required by Python','Splitting always gives exactly 2 parts'],
      correct:1,
      explain:'Checking for exactly 2 parts rejects both "no @" and "too many @" in one check.'
    },
    {
      q:'Why check for "." specifically in parts[1] (after the @), not the whole email string?',
      options:['It doesn\'t matter where the dot is','An email could have a dot before the @ (like a full name) without having a valid domain after it — checking after the @ specifically verifies the domain part','Checking the whole string is faster','Dots are not allowed anywhere in an email'],
      correct:1,
      explain:'A dot before the @ (e.g. in "ada.smith@school") wouldn\'t mean the domain itself is valid — the check must look specifically at the part after the @.'
    },
    {
      q:'Why is it important to handle a None email safely, instead of letting split() crash?',
      options:['It isn\'t important','A real sign-up form can receive missing/blank data, and the whole program should reject it gracefully rather than crash for every user','None values never occur in real programs','Crashing is the correct way to reject bad input'],
      correct:1,
      explain:'Real-world input isn\'t always well-formed — safely rejecting missing data (rather than crashing) keeps the whole system reliable.'
    }
  ],
  sandboxStarter3:`def is_valid_username(name):
    return len(name.strip()) >= 2

def is_valid_email(email):
    parts = email.split("@")
    if len(parts) != 2:
        return False
    return "." in parts[1]

def find_invalid_fields(form):
    invalid = []
    if not is_valid_username(form["name"]):
        invalid.append("name")
    if not is_valid_email(form["email"]):
        invalid.append("email")
    return invalid

forms = [
    {"name": "Ada", "email": "ada@school.com"},
    {"name": "", "email": "ada@school"},
    {"name": "B", "email": "ben.school.com"},
]
for form in forms:
    print(form, "-> invalid fields:", find_invalid_fields(form))
`,
  stretchChallenge:{
    title:'Find a tricky edge case',
    desc:`This simple check isn't a perfect email validator — using is_valid_email(email) from the concept box,
      calculate result = is_valid_email("ada@school."). Assert that result == True — even though a trailing dot
      with nothing after it isn't really a valid domain, this simple check only looks for A dot, so it slips
      through. Real production systems use more thorough checks (often a dedicated library) for exactly this
      reason.`,
    starter:`def is_valid_email(email):
    parts = email.split("@")
    if len(parts) != 2:
        return False
    return "." in parts[1]

# Calculate result below, using "ada@school."
`,
    tests:[
      {type:'assert', expr:'result == True', label:'result correctly equals True (a known limitation of this simple check)'}
    ]
  }
},
{
  key:'week3', num:3, title:'Spot the Insecure Code',
  scenarioTag:'Real world: reading someone else\'s code and finding what\'s wrong with it',
  scenario:`A big part of defensive security is reading code OTHER people wrote and spotting a specific weakness
    before it causes real harm. This week's snippets are all toy examples (fictional usernames, no real systems)
    — but each one has exactly one real, common flaw. You'll read each one, name the flaw, and fix it.`,
  objectives:[
    'Read a short function and identify a specific security weakness',
    'Fix a password check that is missing a real requirement',
    'Fix a login check that compares plain-text passwords instead of hashes',
    'Fix code that trusts data it should never trust'
  ],
  conceptHtml:`
    <p>Here's the process this whole week follows, worked through once: this <code>is_strong</code> function LOOKS
    reasonable, but it's missing something Week 1 already established matters:</p>
    <pre class="code-block">def is_strong(pw):
    return len(pw) >= 8   # flaw: never checks for a digit at all!</pre>
    <p><strong>The flaw:</strong> it only checks length — <code>"aaaaaaaa"</code> would count as "strong," even
    though it has no digit at all. <strong>The fix</strong> adds the missing check back in:</p>
    <pre class="code-block">def is_strong(pw):
    return len(pw) >= 8 and any(c.isdigit() for c in pw)</pre>
    <p>Every exercise this week follows this exact two-step process: <strong>name the one specific thing that's
    wrong</strong>, then <strong>fix only that thing</strong> — don't rewrite the whole function from scratch.</p>
    <h3>A second worked example, since one flaw type repeats a lot in real code</h3>
    <pre class="code-block">def check_login(input_pw, stored_pw):
    return input_pw == stored_pw   # flaw: stored_pw looks like a PLAIN password, never hashed!</pre>
    <p><strong>The flaw:</strong> comparing against <code>stored_pw</code> directly implies the real password is
    sitting in storage as plain text — exactly what Week 1 said never to do. <strong>The fix</strong> hashes the
    input and compares against a stored HASH instead:</p>
    <pre class="code-block">import hashlib
def check_login(input_pw, stored_hash):
    return hashlib.sha256(input_pw.encode()).hexdigest() == stored_hash</pre>`,
  sandboxStarter:`def is_strong(pw):
    return len(pw) >= 8   # flaw: never checks for a digit

print(is_strong("aaaaaaaa"))  # should be weak, but this flawed version says True
`,
  sandboxStarter2:`import hashlib

def check_login(input_pw, stored_pw):
    return input_pw == stored_pw   # flaw: comparing against a PLAIN password

stored_hash = hashlib.sha256("letmein123".encode()).hexdigest()
# The flawed check_login can't even be used correctly here, since stored_hash
# isn't a plain password anymore - that's exactly the bug this week fixes.
print("stored_hash:", stored_hash)
`,
  exercises:[
    {
      title:'Fix the missing digit check',
      desc:`This is_strong only checks length, never a digit — the exact flaw from the concept box. Fix it to
        require BOTH 8+ characters AND at least one digit. Assert that is_strong("longpassword") == False (still
        missing a digit) and is_strong("longpass1") == True.`,
      starter:`def is_strong(pw):
    return len(pw) >= 8   # TODO: fix the flaw - this never checks for a digit
`,
      tests:[
        {type:'assert', expr:'is_strong("longpassword") == False', label:'A password with no digit is correctly rejected'},
        {type:'assert', expr:'is_strong("longpass1") == True', label:'A password with a digit is correctly accepted'}
      ]
    },
    {
      title:'Fix the plain-text password comparison',
      desc:`check_login compares against stored_pw directly, implying the password is stored as plain text. Fix
        it to take stored_hash instead, and compare hashlib.sha256(input_pw.encode()).hexdigest() against it.
        Assert that check_login("letmein123", stored_hash) == True and
        check_login("wrongpw", stored_hash) == False, where stored_hash is the SHA-256 hash of "letmein123".`,
      starter:`import hashlib
stored_hash = hashlib.sha256("letmein123".encode()).hexdigest()

def check_login(input_pw, stored_pw):
    return input_pw == stored_pw
    # TODO: fix the flaw - this compares against a PLAIN password, never a hash
`,
      tests:[
        {type:'assert', expr:'check_login("letmein123", stored_hash) == True', label:'The correct password is correctly accepted'},
        {type:'assert', expr:'check_login("wrongpw", stored_hash) == False', label:'A wrong password is correctly rejected'}
      ]
    },
    {
      title:'Fix the crash on missing data',
      desc:`get_age(user) crashes with a KeyError if "age" is missing from user entirely. Fix it to safely return
        0 in that case instead (hint: user.get("age", 0)). Assert that get_age({"age": 15}) == 15 and
        get_age({}) == 0 (no crash).`,
      starter:`def get_age(user):
    return user["age"]
    # TODO: fix the flaw - this crashes if "age" is missing
`,
      tests:[
        {type:'assert', expr:'get_age({"age": 15}) == 15', label:'A user with an age is handled correctly'},
        {type:'assert', expr:'get_age({}) == 0', label:'A user with no age field is handled safely, without crashing'}
      ]
    },
    {
      title:'Fix trusting user input for admin status',
      desc:`create_account(username, is_admin) lets WHOEVER calls it decide if the new account is an admin —
        exactly the kind of input nothing should ever trust blindly. Fix it so create_account(username) never
        accepts is_admin as an input at all, and always creates a normal (non-admin) account. Assert that
        create_account("student1")["is_admin"] == False.`,
      starter:`def create_account(username, is_admin):
    return {"username": username, "is_admin": is_admin}
    # TODO: fix the flaw - is_admin should never be trusted from the caller
`,
      tests:[{type:'assert', expr:'create_account("student1")["is_admin"] == False', label:'New accounts are correctly never admin by default'}]
    },
    {
      title:'Fix printing sensitive data in a message',
      desc:`validate_login builds a failure message that includes the ACTUAL password the user typed — never
        acceptable, even in an error message. Fix it so the returned message never includes password. Assert
        that "wrongpw" not in validate_login("ben", "wrongpw", stored_hash) and that the message still contains
        "ben", where stored_hash is the SHA-256 hash of "correctpw".`,
      starter:`import hashlib
stored_hash = hashlib.sha256("correctpw".encode()).hexdigest()

def validate_login(username, password, stored_hash):
    if hashlib.sha256(password.encode()).hexdigest() != stored_hash:
        return "Login failed for " + username + " using password " + password
        # TODO: fix the flaw - never include the actual password in any message
    return "Login successful"
`,
      tests:[
        {type:'assert', expr:'"wrongpw" not in validate_login("ben", "wrongpw", stored_hash)', label:'The raw password no longer appears in the failure message'},
        {type:'assert', expr:'"ben" in validate_login("ben", "wrongpw", stored_hash)', label:'The username is still included in the failure message'}
      ]
    },
    {
      title:'Fix the hardcoded reset password',
      desc:`reset_password always resets EVERY account to the exact same hardcoded string — a real, predictable
        password anyone could guess. Fix it to hash whatever new_password is actually PASSED IN, instead of a
        hardcoded value. Assert that reset_password("ben", "temp_x9K2") equals the SHA-256 hash of "temp_x9K2".`,
      starter:`import hashlib

def reset_password(username, new_password):
    return hashlib.sha256("password123".encode()).hexdigest()
    # TODO: fix the flaw - this ignores new_password and always resets to the same hardcoded value
`,
      tests:[{type:'assert', expr:'reset_password("ben", "temp_x9K2") == hashlib.sha256("temp_x9K2".encode()).hexdigest()', label:'reset_password correctly hashes the given new password, not a hardcoded one'}]
    }
  ],
  quiz:[
    {
      q:'What was the flaw in the original is_strong function this week?',
      options:['It required too many characters','It only checked length and never checked for a digit at all','It crashed on empty input','It printed the password'],
      correct:1,
      explain:'The flawed version never checked for a digit, so "aaaaaaaa" would incorrectly count as strong.'
    },
    {
      q:'Why is comparing input_pw == stored_pw directly a security flaw?',
      options:['It is not a flaw at all','It implies the real password is stored as plain text, which should never happen','== is slower than other comparisons','It only works for short passwords'],
      correct:1,
      explain:'If you can compare directly against stored_pw, the system must be keeping the actual plain-text password somewhere — exactly what hashing is meant to prevent.'
    },
    {
      q:'Why should create_account never accept is_admin directly from whoever calls it?',
      options:['is_admin should always be True','Accepting it as an input means anyone calling the function could grant themselves admin access','Functions cannot have more than one parameter','It has no security implications either way'],
      correct:1,
      explain:'Privilege flags like is_admin should never be set directly by untrusted input — a real system would grant admin status through a separate, controlled process.'
    },
    {
      q:'Why is it a problem to include the actual password in an error message, even a "for debugging" one?',
      options:['It is not a problem','Anyone who can see that message (logs, screen, support staff) now has the real password in plain text','Error messages are always private','Only successful logins produce messages'],
      correct:1,
      explain:'Error messages, logs, and debug output are often seen by more people/systems than expected — the real password should never appear in any of them.'
    }
  ],
  sandboxStarter3:`import hashlib

def get_age(user):
    return user.get("age", 0)   # fixed version - safe default instead of crashing

print(get_age({"age": 15}))
print(get_age({}))

def create_account(username):
    return {"username": username, "is_admin": False}   # fixed version - never trusts external is_admin

print(create_account("student1"))
`,
  stretchChallenge:{
    title:'Fix one more login flaw',
    desc:`This login_attempt function returns the ACTUAL stored_hash value in its result on failure — a hash
      should never be exposed like this either, since a leaked hash is still a real security risk (attackers can
      try to crack it offline). Fix it so the failure result never includes the stored_hash value at all. Assert
      that stored_hash not in str(login_attempt("wrongpw", stored_hash)), where stored_hash is the SHA-256 hash
      of "correctpw" (checking the actual hash VALUE doesn't appear anywhere in the returned result).`,
    starter:`import hashlib
stored_hash = hashlib.sha256("correctpw".encode()).hexdigest()

def login_attempt(input_pw, stored_hash):
    if hashlib.sha256(input_pw.encode()).hexdigest() != stored_hash:
        return {"success": False, "stored_hash_was": stored_hash}
        # TODO: fix the flaw - never return the actual stored_hash to the caller
    return {"success": True}
`,
    tests:[
      {type:'assert', expr:'stored_hash not in str(login_attempt("wrongpw", stored_hash))', label:'The stored hash no longer appears anywhere in the failure result'}
    ]
  }
},
{
  key:'week4', num:4, title:'Secrets Hidden in Plain Sight: the Caesar Cipher',
  scenarioTag:'Real world: an old-school way to hide a message, and why it isn\'t real security',
  scenario:`The portal team wants a way to store a "recovery hint" that isn't immediately readable at a glance —
    not a real secret, just something a casual look shouldn't reveal instantly. The Caesar cipher shifts every
    letter by a fixed amount. It's centuries old, and it's a great way to practice ord()/chr() — but by the end of
    this week you'll see exactly why it's obfuscation, not real security, and why Week 1's hashing is what
    actually protects a password.`,
  objectives:[
    'Shift letters using ord() and chr() to build a Caesar cipher encoder',
    'Reverse the shift to decode a message back to the original',
    'Handle spaces, punctuation, and both letter cases correctly',
    'Explain why a cipher (reversible) is fundamentally different from a hash (never reversible)'
  ],
  conceptHtml:`
    <p>A Caesar cipher shifts every LETTER forward in the alphabet by a fixed amount, wrapping back to "a" after
    "z". Non-letters (spaces, punctuation) are left completely unchanged:</p>
    <pre class="code-block">def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

print(caesar_encode("mango", 5))   # "rfslt"</pre>
    <p>Decoding is just encoding with the OPPOSITE shift:</p>
    <pre class="code-block">def caesar_decode(text, shift):
    return caesar_encode(text, -shift)

print(caesar_decode("rfslt", 5))   # "mango"</pre>
    <h3>Let's break down the encode function, line by line</h3>
    <ul>
      <li><code>ch.isalpha()</code> — only letters get shifted; a space or comma passes through <code>else</code>
        completely unchanged.</li>
      <li><code>base = ord("A") if ch.isupper() else ord("a")</code> — remembers where THIS letter's alphabet
        starts (uppercase or lowercase), so the shift math stays within the same case.</li>
      <li><code>(ord(ch) - base + shift) % 26 + base</code> — <code>ord(ch) - base</code> turns the letter into a
        position 0-25 within its alphabet, adding <code>shift</code> moves it forward, <code>% 26</code> wraps
        back to the start once it goes past "z", and <code>+ base</code> converts the position back into a real
        letter with <code>chr()</code>.</li>
      <li><code>caesar_decode</code> reuses <code>caesar_encode</code> with a NEGATIVE shift — shifting backward
        undoes shifting forward, which is exactly why this is called REVERSIBLE.</li>
    </ul>
    <p><strong>This reversibility is the key difference from Week 1's hashing.</strong> A cipher is designed to be
    decoded by anyone who knows the shift — it hides a message from a casual glance, nothing more. A hash is
    designed so it can NEVER be reversed, which is why passwords get hashed, never "encoded."</p>`,
  sandboxStarter:`def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

print(caesar_encode("mango", 5))
print(caesar_encode("Hello, World!", 5))
`,
  sandboxStarter2:`def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

def caesar_decode(text, shift):
    return caesar_encode(text, -shift)

encoded = caesar_encode("secret", 3)
print("encoded:", encoded)
print("decoded:", caesar_decode(encoded, 3))
`,
  exercises:[
    {
      title:'Encode with a shift',
      desc:`Write caesar_encode(text, shift) following the pattern from the concept box. Assert that
        caesar_encode("mango", 5) == "rfslt".`,
      starter:`def caesar_encode(text, shift):
    # TODO: shift each letter forward by shift, wrapping with % 26, leaving non-letters unchanged
    pass
`,
      tests:[{type:'assert', expr:'caesar_encode("mango", 5) == "rfslt"', label:'"mango" encodes correctly to "rfslt" with shift 5'}]
    },
    {
      title:'Decode with the same shift',
      desc:`Write caesar_decode(text, shift), reusing caesar_encode with a NEGATIVE shift. Assert that
        caesar_decode("rfslt", 5) == "mango".`,
      starter:`def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

def caesar_decode(text, shift):
    # TODO: decode by re-using caesar_encode with the opposite shift
    pass
`,
      tests:[{type:'assert', expr:'caesar_decode("rfslt", 5) == "mango"', label:'"rfslt" decodes correctly back to "mango" with shift 5'}]
    },
    {
      title:'Keep punctuation and case correct',
      desc:`Using caesar_encode from before, assert that caesar_encode("Hello, World!", 5) == "Mjqqt, Btwqi!" —
        the comma, space, and "!" stay exactly the same, and uppercase letters stay uppercase.`,
      starter:`def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result
`,
      tests:[{type:'assert', expr:'caesar_encode("Hello, World!", 5) == "Mjqqt, Btwqi!"', label:'Punctuation, spaces, and case are all handled correctly'}]
    },
    {
      title:'Wrap around the alphabet',
      desc:`Using caesar_encode, assert that caesar_encode("zebra", 5) == "ejgwf" — "z" shifted by 5 wraps back
        around to "e" instead of going past "z".`,
      starter:`def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result
`,
      tests:[{type:'assert', expr:'caesar_encode("zebra", 5) == "ejgwf"', label:'"z" correctly wraps around to "e" with shift 5'}]
    },
    {
      title:'A cipher is reversible — a hash never is',
      desc:`Using caesar_encode and caesar_decode, calculate encoded = caesar_encode("secret", 3), then
        decoded = caesar_decode(encoded, 3). Assert that decoded == "secret" — you get the EXACT original text
        back. (Contrast this with Week 1's hashing: there is no "unhash" function, ever.)`,
      starter:`def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

def caesar_decode(text, shift):
    return caesar_encode(text, -shift)

# Calculate encoded, then decoded below
`,
      tests:[{type:'assert', expr:'decoded == "secret"', label:'decoded correctly equals the original "secret"'}]
    },
    {
      title:'Encode a recovery hint',
      desc:`Using caesar_encode, calculate hint = caesar_encode("bluewhale", 7). Assert that
        hint == "isbldohsl".`,
      starter:`def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

# Calculate hint below
`,
      tests:[{type:'assert', expr:'hint == "isbldohsl"', label:'hint correctly equals "isbldohsl"'}]
    }
  ],
  quiz:[
    {
      q:'What does the Caesar cipher do to non-letter characters like spaces and punctuation?',
      options:['Deletes them','Leaves them completely unchanged','Shifts them too','Converts them to numbers'],
      correct:1,
      explain:'Only letters (ch.isalpha()) get shifted — everything else passes through the else branch untouched.'
    },
    {
      q:'Why does the code use % 26 when shifting a letter?',
      options:['To slow down the program','To wrap back around to the start of the alphabet after passing "z"','26 is a random number with no purpose','To convert lowercase to uppercase'],
      correct:1,
      explain:'Modulo 26 wraps the shifted position back into the 0-25 range, so shifting past "z" correctly continues from "a".'
    },
    {
      q:'How does caesar_decode reverse a caesar_encode call?',
      options:['It cannot be reversed at all','By calling caesar_encode again with the NEGATIVE of the original shift','By reversing the string\'s character order','By converting to uppercase'],
      correct:1,
      explain:'Shifting backward by the same amount undoes shifting forward — decode is just encode with -shift.'
    },
    {
      q:'What is the key difference between a cipher (like Caesar) and a hash (like SHA-256)?',
      options:['There is no real difference','A cipher is designed to be reversed by anyone who knows the shift; a hash is designed to NEVER be reversed, which is why passwords are hashed, not "encoded"','Hashes are always shorter than ciphers','Ciphers only work on numbers'],
      correct:1,
      explain:'Reversibility is the defining difference — a cipher hides a message but can be undone, while a hash is a one-way fingerprint that can never be turned back into the original.'
    }
  ],
  sandboxStarter3:`def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

def caesar_decode(text, shift):
    return caesar_encode(text, -shift)

for shift in [1, 5, 13]:
    encoded = caesar_encode("The Blue Dragon", shift)
    print("shift", shift, "-> encoded:", encoded, "-> decoded:", caesar_decode(encoded, shift))
`,
  stretchChallenge:{
    title:'Try a much bigger shift',
    desc:`Using caesar_encode, calculate result = caesar_encode("zebra", 31) — a shift bigger than the alphabet
      itself. Assert that result == "ejgwf" — the exact same result as shift 5, since 31 wraps around to the
      same effective shift (31 % 26 == 5).`,
    starter:`def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

# Calculate result below, using shift = 31
`,
    tests:[
      {type:'assert', expr:'result == "ejgwf"', label:'result correctly equals "ejgwf", matching shift 5\'s effective result'}
    ]
  }
},
{
  key:'week5', num:5, title:'Safe vs Unsafe String Handling',
  scenarioTag:'Real world: what if a student\'s name or note contains a strange character?',
  scenario:`So far you've validated whether input LOOKS right (Week 2) and fixed code with a known flaw (Week 3).
    This week is about a subtler habit: never blindly trust raw text just because it passed validation — some
    characters need to be escaped (given a safe stand-in) before they're combined with anything else, displayed,
    or stored alongside other data. Everything here is pure string handling — no real web page or database is
    involved, but the pattern is exactly what keeps real ones safe.`,
  objectives:[
    'Escape a special character (like a quote) so it can\'t break a combined string',
    'Escape HTML-special characters so text can be displayed safely',
    'Detect obviously suspicious character patterns in input',
    'Keep separate pieces of data as separate fields, instead of blending them into one string'
  ],
  conceptHtml:`
    <p>If text might contain a character that has special meaning elsewhere (like a quote in a quoted string),
    <strong>escaping</strong> replaces it with a safe stand-in BEFORE it's used:</p>
    <pre class="code-block">def escape_quotes(text):
    return text.replace('"', '\\\\"')

print(escape_quotes('Ben says "hi"'))   # Ben says \\"hi\\"</pre>
    <p>The same idea protects text that will be DISPLAYED somewhere that treats certain characters specially —
    like <code>&lt;</code> and <code>&gt;</code>, which have special meaning in HTML:</p>
    <pre class="code-block">def escape_html(text):
    text = text.replace("&", "&amp;")
    text = text.replace("<", "&lt;")
    text = text.replace(">", "&gt;")
    return text

print(escape_html("<script>"))   # &lt;script&gt;</pre>
    <h3>Let's break down why the ORDER of replacements matters</h3>
    <ul>
      <li><code>&</code> is escaped to <code>&amp;amp;</code> — and <code>&amp;amp;</code> ITSELF contains an
        <code>&amp;</code>. If <code>&lt;</code> and <code>&gt;</code> were escaped first, then <code>&</code>
        escaped LAST, the <code>&amp;</code> inside <code>&amp;lt;</code>/<code>&amp;gt;</code> would get
        escaped AGAIN, corrupting the result.</li>
      <li><strong>Rule: always escape <code>&</code> first</strong>, before escaping anything that produces a
        new <code>&</code> character.</li>
      <li>Beyond escaping single characters, another safe habit is keeping separate pieces of information as
        SEPARATE fields (like a dictionary), rather than blending them into one combined string — a single
        string is easy to misparse if either piece happens to contain the separator character you were relying
        on.</li>
    </ul>`,
  sandboxStarter:`def escape_quotes(text):
    return text.replace('"', '\\\\"')

print(escape_quotes('Ben says "hi"'))
`,
  sandboxStarter2:`def escape_html(text):
    text = text.replace("&", "&amp;")
    text = text.replace("<", "&lt;")
    text = text.replace(">", "&gt;")
    return text

print(escape_html("<script>"))
print(escape_html("Tom & Jerry"))
`,
  exercises:[
    {
      title:'Escape double quotes safely',
      desc:`Write escape_quotes(text) that replaces every " with \\\\" (a backslash followed by a quote). Assert
        that escape_quotes('Ben says "hi"') == 'Ben says \\\\"hi\\\\"'.`,
      starter:`def escape_quotes(text):
    # TODO: replace every " with \\\\"
    pass
`,
      tests:[{type:'assert', expr:'escape_quotes(\'Ben says "hi"\') == \'Ben says \\\\"hi\\\\"\'', label:'Quotes are correctly escaped'}]
    },
    {
      title:'Escape HTML-special characters, in the right order',
      desc:`Write escape_html(text) that replaces &, <, and > with &amp;, &lt;, and &gt; — escaping & FIRST, then
        < and >. Assert that escape_html("<script>") == "&lt;script&gt;" and
        escape_html("Tom & Jerry") == "Tom &amp; Jerry".`,
      starter:`def escape_html(text):
    # TODO: replace &, then <, then > with their safe versions (in that order)
    pass
`,
      tests:[
        {type:'assert', expr:'escape_html("<script>") == "&lt;script&gt;"', label:'"<script>" is correctly escaped'},
        {type:'assert', expr:'escape_html("Tom & Jerry") == "Tom &amp; Jerry"', label:'"Tom & Jerry" is correctly escaped'}
      ]
    },
    {
      title:'Prove the escaping order matters',
      desc:`Using escape_html from before, assert that escape_html("<") == "&lt;" — NOT "&amp;lt;". If & were
        escaped AFTER < and >, the & inside "&lt;" would get escaped again, corrupting the result.`,
      starter:`def escape_html(text):
    text = text.replace("&", "&amp;")
    text = text.replace("<", "&lt;")
    text = text.replace(">", "&gt;")
    return text
`,
      tests:[{type:'assert', expr:'escape_html("<") == "&lt;"', label:'"<" is correctly escaped to exactly "&lt;", not double-escaped'}]
    },
    {
      title:'Detect suspicious characters',
      desc:`Write contains_suspicious_chars(text) that returns True if text contains any of these three patterns:
        ";", "--", or "'" (a very basic first-pass check, not a complete defense on its own). Assert that
        contains_suspicious_chars("Ben; DROP TABLE") == True and
        contains_suspicious_chars("Ben Smith") == False.`,
      starter:`def contains_suspicious_chars(text):
    # TODO: return True if text contains ";", "--", or "'"
    pass
`,
      tests:[
        {type:'assert', expr:'contains_suspicious_chars("Ben; DROP TABLE") == True', label:'Suspicious input is correctly flagged'},
        {type:'assert', expr:'contains_suspicious_chars("Ben Smith") == False', label:'Normal input is correctly not flagged'}
      ]
    },
    {
      title:'Never blend fields into one string',
      desc:`Write build_safe_record(name, note) that returns a DICTIONARY {"name": name, "note": note}, keeping
        the two pieces of data separate, instead of combining them into one string like f"{name}: {note}" (which
        could misparse if note itself contains a colon). Assert that
        build_safe_record("Ben", "Loves: chess") == {"name": "Ben", "note": "Loves: chess"}.`,
      starter:`def build_safe_record(name, note):
    # TODO: return a dict with "name" and "note" keys, not a combined string
    pass
`,
      tests:[{type:'assert', expr:'build_safe_record("Ben", "Loves: chess") == {"name": "Ben", "note": "Loves: chess"}', label:'The record correctly keeps name and note as separate fields'}]
    },
    {
      title:'Build a safe welcome message',
      desc:`Write safe_welcome_message(name) that returns "Welcome, " + escape_html(name) + "!". Assert that
        safe_welcome_message("<b>Ben</b>") == "Welcome, &lt;b&gt;Ben&lt;/b&gt;!".`,
      starter:`def escape_html(text):
    text = text.replace("&", "&amp;")
    text = text.replace("<", "&lt;")
    text = text.replace(">", "&gt;")
    return text

def safe_welcome_message(name):
    # TODO: return a welcome message using the ESCAPED name
    pass
`,
      tests:[{type:'assert', expr:'safe_welcome_message("<b>Ben</b>") == "Welcome, &lt;b&gt;Ben&lt;/b&gt;!"', label:'The welcome message correctly escapes the name'}]
    }
  ],
  quiz:[
    {
      q:'What does "escaping" a character mean?',
      options:['Deleting it entirely','Replacing it with a safe stand-in so it can\'t be confused with special formatting','Converting it to a number','Making it invisible'],
      correct:1,
      explain:'Escaping replaces a character that has special meaning with a safe representation, so it\'s treated as plain data instead.'
    },
    {
      q:'Why must & be escaped BEFORE < and > in escape_html?',
      options:['Order never matters','Escaping & produces "&amp;", which itself contains an &— escaping it last would corrupt the &lt;/&gt; already inserted','& is not actually a special character','< and > must always be escaped first'],
      correct:1,
      explain:'If & were escaped after < and >, the & inside the newly-inserted "&lt;"/"&gt;" would get escaped again, breaking the result.'
    },
    {
      q:'Why keep name and note as separate dictionary fields instead of one combined string?',
      options:['Dictionaries are always faster','A single combined string can be misread if either piece of data happens to contain the character you were using as a separator','Strings cannot hold multiple pieces of information','It doesn\'t matter either way'],
      correct:1,
      explain:'Blending fields into one string risks ambiguity if the data itself contains your separator character — keeping fields separate avoids that entirely.'
    },
    {
      q:'Is checking for ";" or "--" a complete defense against unsafe input?',
      options:['Yes, this fully solves the problem forever','No — it\'s only a basic first-pass check; real systems combine multiple defenses, not just one keyword search','These characters never appear in normal text','This check is unnecessary'],
      correct:1,
      explain:'A simple pattern check like this is one useful layer, but real defensive systems rely on multiple techniques together, not a single keyword search.'
    }
  ],
  sandboxStarter3:`def escape_html(text):
    text = text.replace("&", "&amp;")
    text = text.replace("<", "&lt;")
    text = text.replace(">", "&gt;")
    return text

def contains_suspicious_chars(text):
    suspicious = [";", "--", "'"]
    return any(s in text for s in suspicious)

samples = ["Ben Smith", "Ben; DROP TABLE", "<script>alert(1)</script>"]
for s in samples:
    print(repr(s), "-> escaped:", escape_html(s), "-> suspicious:", contains_suspicious_chars(s))
`,
  stretchChallenge:{
    title:'Escape a trickier case',
    desc:`Using escape_html, calculate result = escape_html("A & B < C"). Assert that
      result == "A &amp; B &lt; C" — both the & and the < are escaped correctly, in one pass, with & handled
      first.`,
    starter:`def escape_html(text):
    text = text.replace("&", "&amp;")
    text = text.replace("<", "&lt;")
    text = text.replace(">", "&gt;")
    return text

# Calculate result below, using "A & B < C"
`,
    tests:[
      {type:'assert', expr:'result == "A &amp; B &lt; C"', label:'result correctly equals "A &amp; B &lt; C"'}
    ]
  }
},
{
  key:'week6', num:6, title:'Why We Never Store Plain Passwords: Auth Concepts',
  scenarioTag:'Real world: building an actual hash-and-compare login system',
  scenario:`Week 1 introduced hashing, and Week 3 fixed a login function that compared plain-text passwords. This
    week puts the whole pattern together into a real login system: create accounts that store only a hash, check
    a password by hashing and comparing, look an account up by username, and — the subtlest habit of all — never
    let a login failure reveal WHETHER a username even exists.`,
  objectives:[
    'Create an account that stores a password hash, never the real password',
    'Check a password by hashing the input and comparing it to the stored hash',
    'Look up an account by username in a list of accounts',
    'Return the same generic failure whether the username or the password was wrong'
  ],
  conceptHtml:`
    <p>Creating an account means hashing the password immediately — the real password is never kept anywhere:</p>
    <pre class="code-block">import hashlib

def create_account(username, password):
    return {"username": username, "password_hash": hashlib.sha256(password.encode()).hexdigest()}

def check_password(input_pw, stored_hash):
    return hashlib.sha256(input_pw.encode()).hexdigest() == stored_hash</pre>
    <p>Logging in means finding the right account, THEN checking the password against ITS stored hash:</p>
    <pre class="code-block">def find_account(username, accounts):
    for acc in accounts:
        if acc["username"] == username:
            return acc
    return None

def login(username, password, accounts):
    account = find_account(username, accounts)
    if account is None:
        return False
    return check_password(password, account["password_hash"])</pre>
    <h3>Let's break down why login returns False in BOTH failure cases</h3>
    <ul>
      <li>If the username doesn't exist at all, <code>login</code> returns <code>False</code> immediately.</li>
      <li>If the username DOES exist but the password is wrong, <code>login</code> ALSO just returns
        <code>False</code> — the exact same value.</li>
      <li>This is deliberate: if a wrong username and a wrong password produced visibly DIFFERENT results, an
        attacker could use that difference to figure out which usernames are real accounts, one guess at a time —
        even without ever getting the password right.</li>
    </ul>`,
  sandboxStarter:`import hashlib

def create_account(username, password):
    return {"username": username, "password_hash": hashlib.sha256(password.encode()).hexdigest()}

account = create_account("zara", "riverside9")
print(account)
`,
  sandboxStarter2:`import hashlib

def create_account(username, password):
    return {"username": username, "password_hash": hashlib.sha256(password.encode()).hexdigest()}

def check_password(input_pw, stored_hash):
    return hashlib.sha256(input_pw.encode()).hexdigest() == stored_hash

def find_account(username, accounts):
    for acc in accounts:
        if acc["username"] == username:
            return acc
    return None

def login(username, password, accounts):
    account = find_account(username, accounts)
    if account is None:
        return False
    return check_password(password, account["password_hash"])

accounts = [create_account("zara", "riverside9")]
print(login("zara", "riverside9", accounts))
print(login("zara", "wrongpw", accounts))
print(login("ben", "anything", accounts))
`,
  exercises:[
    {
      title:'Create an account with a hashed password',
      desc:`Write create_account(username, password) that returns {"username": username, "password_hash": ...}
        using hashlib.sha256(password.encode()).hexdigest(). Assert that
        create_account("zara", "riverside9")["password_hash"] ==
        "f89042aaac736fc2186865a06e806575994f73d2d11861be452caec8dac4c5ad".`,
      starter:`import hashlib
def create_account(username, password):
    # TODO: return a dict with "username" and a "password_hash" (never the real password)
    pass
`,
      tests:[{type:'assert', expr:'create_account("zara", "riverside9")["password_hash"] == "f89042aaac736fc2186865a06e806575994f73d2d11861be452caec8dac4c5ad"', label:'The account correctly stores a password hash'}]
    },
    {
      title:'Check a password against a stored hash',
      desc:`Write check_password(input_pw, stored_hash) that hashes input_pw and compares it to stored_hash.
        Using stored_hash = the SHA-256 hash of "riverside9", assert that
        check_password("riverside9", stored_hash) == True and check_password("wrongpw", stored_hash) == False.`,
      starter:`import hashlib
stored_hash = hashlib.sha256("riverside9".encode()).hexdigest()

def check_password(input_pw, stored_hash):
    # TODO: hash input_pw and compare to stored_hash
    pass
`,
      tests:[
        {type:'assert', expr:'check_password("riverside9", stored_hash) == True', label:'The correct password is correctly accepted'},
        {type:'assert', expr:'check_password("wrongpw", stored_hash) == False', label:'A wrong password is correctly rejected'}
      ]
    },
    {
      title:'Look up an account by username',
      desc:`Write find_account(username, accounts) that returns the matching account dict from the accounts
        list, or None if no account has that username. Using
        accounts = [{"username": "zara", "password_hash": "abc"}], assert that
        find_account("zara", accounts) == {"username": "zara", "password_hash": "abc"} and
        find_account("ben", accounts) == None.`,
      starter:`accounts = [{"username": "zara", "password_hash": "abc"}]

def find_account(username, accounts):
    # TODO: return the matching account dict, or None if not found
    pass
`,
      tests:[
        {type:'assert', expr:'find_account("zara", accounts) == {"username": "zara", "password_hash": "abc"}', label:'An existing username is correctly found'},
        {type:'assert', expr:'find_account("ben", accounts) == None', label:'A missing username correctly returns None'}
      ]
    },
    {
      title:'Combine into a full login function',
      desc:`Write login(username, password, accounts) that finds the account, then checks the password against
        its stored hash, returning True or False. Using accounts containing "zara" with password "riverside9",
        assert that login("zara", "riverside9", accounts) == True and
        login("zara", "wrongpw", accounts) == False.`,
      starter:`import hashlib

def create_account(username, password):
    return {"username": username, "password_hash": hashlib.sha256(password.encode()).hexdigest()}

def check_password(input_pw, stored_hash):
    return hashlib.sha256(input_pw.encode()).hexdigest() == stored_hash

def find_account(username, accounts):
    for acc in accounts:
        if acc["username"] == username:
            return acc
    return None

accounts = [create_account("zara", "riverside9")]

def login(username, password, accounts):
    # TODO: find the account, then check the password against its stored hash
    pass
`,
      tests:[
        {type:'assert', expr:'login("zara", "riverside9", accounts) == True', label:'A correct login is correctly accepted'},
        {type:'assert', expr:'login("zara", "wrongpw", accounts) == False', label:'A wrong password is correctly rejected'}
      ]
    },
    {
      title:'Never reveal whether a username exists',
      desc:`Using the same login(username, password, accounts) function, assert that
        login("zara", "wrongpw", accounts) == login("ben", "anything", accounts) — a wrong password on a REAL
        username and a login attempt on a username that doesn't exist AT ALL must return the exact same result.`,
      starter:`import hashlib

def create_account(username, password):
    return {"username": username, "password_hash": hashlib.sha256(password.encode()).hexdigest()}

def check_password(input_pw, stored_hash):
    return hashlib.sha256(input_pw.encode()).hexdigest() == stored_hash

def find_account(username, accounts):
    for acc in accounts:
        if acc["username"] == username:
            return acc
    return None

def login(username, password, accounts):
    account = find_account(username, accounts)
    if account is None:
        return False
    return check_password(password, account["password_hash"])

accounts = [create_account("zara", "riverside9")]
`,
      tests:[{type:'assert', expr:'login("zara", "wrongpw", accounts) == login("ben", "anything", accounts)', label:'Both failure cases correctly return the exact same result'}]
    },
    {
      title:'Add an account and log in with it',
      desc:`Starting from accounts = [], use create_account to add a new account for username "ben" with
        password "campfire3", append it to accounts, then log in with login("ben", "campfire3", accounts).
        Assert that the login result == True.`,
      starter:`import hashlib

def create_account(username, password):
    return {"username": username, "password_hash": hashlib.sha256(password.encode()).hexdigest()}

def check_password(input_pw, stored_hash):
    return hashlib.sha256(input_pw.encode()).hexdigest() == stored_hash

def find_account(username, accounts):
    for acc in accounts:
        if acc["username"] == username:
            return acc
    return None

def login(username, password, accounts):
    account = find_account(username, accounts)
    if account is None:
        return False
    return check_password(password, account["password_hash"])

accounts = []
# Add ben's account below, then log in and store the result in "result"
`,
      tests:[{type:'assert', expr:'result == True', label:'The newly added account can correctly log in'}]
    }
  ],
  quiz:[
    {
      q:'What does create_account store, instead of the real password?',
      options:['The password, reversed','A SHA-256 hash of the password','The password, in a separate file','Nothing at all'],
      correct:1,
      explain:'Only a hash of the password is stored — the real password is never kept anywhere.'
    },
    {
      q:'How does check_password verify a login attempt without ever storing the real password?',
      options:['It cannot verify anything without the real password','It hashes the INPUT password and compares that hash to the STORED hash — matching hashes means matching passwords','It asks the user to type their password twice','It uses a random guess'],
      correct:1,
      explain:'Since hashing is deterministic, hashing the input and comparing to the stored hash proves the password matches, with no need to ever store the real one.'
    },
    {
      q:'Why should login() return the SAME result for a wrong username and a wrong password?',
      options:['It doesn\'t matter, they should be different','If the results differed, an attacker could tell which usernames are real accounts just by watching how login responds, even without knowing any password','Usernames and passwords are the same thing','This has no security implication at all'],
      correct:1,
      explain:'A different response for "no such user" vs "wrong password" would let an attacker discover valid usernames one guess at a time — returning the same generic result closes that gap.'
    },
    {
      q:'What does find_account(username, accounts) do?',
      options:['Creates a new account','Searches the accounts list for a matching username and returns it (or None if not found)','Deletes an account','Always returns True'],
      correct:1,
      explain:'find_account loops through the list looking for a matching username, returning the account dict if found or None otherwise.'
    }
  ],
  sandboxStarter3:`import hashlib

def create_account(username, password):
    return {"username": username, "password_hash": hashlib.sha256(password.encode()).hexdigest()}

def check_password(input_pw, stored_hash):
    return hashlib.sha256(input_pw.encode()).hexdigest() == stored_hash

def find_account(username, accounts):
    for acc in accounts:
        if acc["username"] == username:
            return acc
    return None

def login(username, password, accounts):
    account = find_account(username, accounts)
    if account is None:
        return False
    return check_password(password, account["password_hash"])

accounts = [create_account("zara", "riverside9")]
attempts = [("zara", "riverside9"), ("zara", "wrongpw"), ("ben", "anything")]
for username, password in attempts:
    print(username, password, "-> login result:", login(username, password, accounts))
`,
  stretchChallenge:{
    title:'Support two accounts at once',
    desc:`Starting from accounts = [create_account("zara", "riverside9")], add a SECOND account for "ben" with
      password "campfire3" (using create_account and append). Assert that both
      login("zara", "riverside9", accounts) == True and login("ben", "campfire3", accounts) == True.`,
    starter:`import hashlib

def create_account(username, password):
    return {"username": username, "password_hash": hashlib.sha256(password.encode()).hexdigest()}

def check_password(input_pw, stored_hash):
    return hashlib.sha256(input_pw.encode()).hexdigest() == stored_hash

def find_account(username, accounts):
    for acc in accounts:
        if acc["username"] == username:
            return acc
    return None

def login(username, password, accounts):
    account = find_account(username, accounts)
    if account is None:
        return False
    return check_password(password, account["password_hash"])

accounts = [create_account("zara", "riverside9")]
# Add ben's account below
`,
    tests:[
      {type:'assert', expr:'login("zara", "riverside9", accounts) == True', label:'zara can still log in correctly'},
      {type:'assert', expr:'login("ben", "campfire3", accounts) == True', label:'ben\'s newly added account can also log in correctly'}
    ]
  }
},
{
  key:'week7', num:7, title:'Don\'t Take the Bait: Phishing Awareness',
  scenarioTag:'Real world: you\'re the analyst reviewing messages reported by students',
  scenario:`Students at the school keep forwarding suspicious-looking messages to IT, asking "is this real?" This
    week, YOU are the analyst reviewing what's already been reported — reading a message and scoring how many
    warning signs it contains. You will never write a phishing message yourself, only analyze ones that have
    already been sent in to be checked.`,
  objectives:[
    'Detect urgency language, a common phishing warning sign',
    'Detect a request for a password, another common warning sign',
    'Detect a suspicious "click here" link pattern',
    'Combine multiple warning signs into an overall suspicion score, using a sensible threshold'
  ],
  conceptHtml:`
    <p>No single word proves a message is fake — real, legitimate messages sometimes use urgent language too. The
    defensive approach is to look for SEVERAL warning signs together, and only flag a message once enough of them
    show up:</p>
    <pre class="code-block">def has_urgency_language(text):
    phrases = ["24 hours", "immediately", "urgent", "suspended"]
    return any(p in text.lower() for p in phrases)

def asks_for_password(text):
    return "password" in text.lower()

def has_suspicious_link_pattern(text):
    return "click here" in text.lower()</pre>
    <p>Combine all three into a single suspicion score, then decide using a THRESHOLD — not just one flag alone:</p>
    <pre class="code-block">def count_red_flags(text):
    return sum([has_urgency_language(text), asks_for_password(text), has_suspicious_link_pattern(text)])

def is_likely_phishing(text):
    return count_red_flags(text) >= 2</pre>
    <h3>Let's break down why a THRESHOLD matters, not just one flag</h3>
    <ul>
      <li><code>sum([bool, bool, bool])</code> — in Python, <code>True</code> counts as 1 and <code>False</code>
        counts as 0 when summed, so this adds up how many of the three checks came back <code>True</code>.</li>
      <li><code>count_red_flags(text) >= 2</code> — requiring AT LEAST TWO warning signs (not just one) avoids
        wrongly flagging a genuinely urgent, real message that happens to use one phrase like "immediately."</li>
      <li>This is exactly the same "spot it, don't write it" skill from Week 3 — reading something someone else
        wrote and identifying specific, concrete problems with it.</li>
    </ul>`,
  sandboxStarter:`message_a = "Dear Student, Your account will be suspended in 24 hours unless you verify your password immediately. Click here now to confirm your details."

def has_urgency_language(text):
    phrases = ["24 hours", "immediately", "urgent", "suspended"]
    return any(p in text.lower() for p in phrases)

print(has_urgency_language(message_a))
`,
  sandboxStarter2:`message_a = "Dear Student, Your account will be suspended in 24 hours unless you verify your password immediately. Click here now to confirm your details."
message_b = "Hi, this is a reminder that the library closes early on Friday for the holidays. See you in class next week!"

def has_urgency_language(text):
    phrases = ["24 hours", "immediately", "urgent", "suspended"]
    return any(p in text.lower() for p in phrases)

def asks_for_password(text):
    return "password" in text.lower()

def has_suspicious_link_pattern(text):
    return "click here" in text.lower()

def count_red_flags(text):
    return sum([has_urgency_language(text), asks_for_password(text), has_suspicious_link_pattern(text)])

def is_likely_phishing(text):
    return count_red_flags(text) >= 2

print("message_a flags:", count_red_flags(message_a), "-> flagged:", is_likely_phishing(message_a))
print("message_b flags:", count_red_flags(message_b), "-> flagged:", is_likely_phishing(message_b))
`,
  exercises:[
    {
      title:'Detect urgency language',
      desc:`Write has_urgency_language(text) that returns True if text (lowercased) contains any of "24 hours",
        "immediately", "urgent", or "suspended". Using message_a (the suspicious one) and message_b (a normal
        reminder), assert that has_urgency_language(message_a) == True and
        has_urgency_language(message_b) == False.`,
      starter:`message_a = "Dear Student, Your account will be suspended in 24 hours unless you verify your password immediately. Click here now to confirm your details."
message_b = "Hi, this is a reminder that the library closes early on Friday for the holidays. See you in class next week!"

def has_urgency_language(text):
    # TODO: return True if text (lowercased) contains any urgency phrase
    pass
`,
      tests:[
        {type:'assert', expr:'has_urgency_language(message_a) == True', label:'The suspicious message correctly flags urgency language'},
        {type:'assert', expr:'has_urgency_language(message_b) == False', label:'The normal message correctly has no urgency language'}
      ]
    },
    {
      title:'Detect a password request',
      desc:`Write asks_for_password(text) that returns True if "password" appears in text (lowercased). Assert
        that asks_for_password(message_a) == True and asks_for_password(message_b) == False.`,
      starter:`message_a = "Dear Student, Your account will be suspended in 24 hours unless you verify your password immediately. Click here now to confirm your details."
message_b = "Hi, this is a reminder that the library closes early on Friday for the holidays. See you in class next week!"

def asks_for_password(text):
    # TODO: return True if "password" appears in the lowercased text
    pass
`,
      tests:[
        {type:'assert', expr:'asks_for_password(message_a) == True', label:'The suspicious message correctly asks for a password'},
        {type:'assert', expr:'asks_for_password(message_b) == False', label:'The normal message correctly does not ask for a password'}
      ]
    },
    {
      title:'Detect a suspicious link phrase',
      desc:`Write has_suspicious_link_pattern(text) that returns True if "click here" appears in text
        (lowercased). Assert that has_suspicious_link_pattern(message_a) == True and
        has_suspicious_link_pattern(message_b) == False.`,
      starter:`message_a = "Dear Student, Your account will be suspended in 24 hours unless you verify your password immediately. Click here now to confirm your details."
message_b = "Hi, this is a reminder that the library closes early on Friday for the holidays. See you in class next week!"

def has_suspicious_link_pattern(text):
    # TODO: return True if "click here" appears in the lowercased text
    pass
`,
      tests:[
        {type:'assert', expr:'has_suspicious_link_pattern(message_a) == True', label:'The suspicious message correctly contains "click here"'},
        {type:'assert', expr:'has_suspicious_link_pattern(message_b) == False', label:'The normal message correctly has no such link phrase'}
      ]
    },
    {
      title:'Count the red flags',
      desc:`Using the three detection functions from before, write count_red_flags(text) that returns how many of
        the three checks came back True (hint: sum([check1(text), check2(text), check3(text)])). Assert that
        count_red_flags(message_a) == 3 and count_red_flags(message_b) == 0.`,
      starter:`message_a = "Dear Student, Your account will be suspended in 24 hours unless you verify your password immediately. Click here now to confirm your details."
message_b = "Hi, this is a reminder that the library closes early on Friday for the holidays. See you in class next week!"

def has_urgency_language(text):
    phrases = ["24 hours", "immediately", "urgent", "suspended"]
    return any(p in text.lower() for p in phrases)

def asks_for_password(text):
    return "password" in text.lower()

def has_suspicious_link_pattern(text):
    return "click here" in text.lower()

def count_red_flags(text):
    # TODO: return how many of the three checks are True
    pass
`,
      tests:[
        {type:'assert', expr:'count_red_flags(message_a) == 3', label:'message_a correctly scores 3 red flags'},
        {type:'assert', expr:'count_red_flags(message_b) == 0', label:'message_b correctly scores 0 red flags'}
      ]
    },
    {
      title:'Decide if a message is likely phishing',
      desc:`Write is_likely_phishing(text) that returns True if count_red_flags(text) >= 2. Using
        message_c = "Reminder: science fair registration closes immediately after Friday, do not miss out on
        your spot!" (only urgency language, nothing else), assert that is_likely_phishing(message_a) == True and
        is_likely_phishing(message_c) == False.`,
      starter:`message_a = "Dear Student, Your account will be suspended in 24 hours unless you verify your password immediately. Click here now to confirm your details."
message_c = "Reminder: science fair registration closes immediately after Friday, do not miss out on your spot!"

def has_urgency_language(text):
    phrases = ["24 hours", "immediately", "urgent", "suspended"]
    return any(p in text.lower() for p in phrases)

def asks_for_password(text):
    return "password" in text.lower()

def has_suspicious_link_pattern(text):
    return "click here" in text.lower()

def count_red_flags(text):
    return sum([has_urgency_language(text), asks_for_password(text), has_suspicious_link_pattern(text)])

def is_likely_phishing(text):
    # TODO: return True if count_red_flags(text) >= 2
    pass
`,
      tests:[
        {type:'assert', expr:'is_likely_phishing(message_a) == True', label:'message_a is correctly flagged as likely phishing'},
        {type:'assert', expr:'is_likely_phishing(message_c) == False', label:'message_c (urgency alone) is correctly NOT flagged'}
      ]
    },
    {
      title:'One red flag isn\'t always enough',
      desc:`Using message_c from before, assert that count_red_flags(message_c) == 1 and
        is_likely_phishing(message_c) == False — a message that only uses urgent-sounding language, with no
        password request and no suspicious link, isn't automatically treated as phishing. Plenty of real messages
        (like an actual deadline reminder) use urgency too.`,
      starter:`message_c = "Reminder: science fair registration closes immediately after Friday, do not miss out on your spot!"

def has_urgency_language(text):
    phrases = ["24 hours", "immediately", "urgent", "suspended"]
    return any(p in text.lower() for p in phrases)

def asks_for_password(text):
    return "password" in text.lower()

def has_suspicious_link_pattern(text):
    return "click here" in text.lower()

def count_red_flags(text):
    return sum([has_urgency_language(text), asks_for_password(text), has_suspicious_link_pattern(text)])

def is_likely_phishing(text):
    return count_red_flags(text) >= 2
`,
      tests:[
        {type:'assert', expr:'count_red_flags(message_c) == 1', label:'message_c correctly scores exactly 1 red flag'},
        {type:'assert', expr:'is_likely_phishing(message_c) == False', label:'message_c is correctly NOT flagged, since one flag alone isn\'t enough'}
      ]
    }
  ],
  quiz:[
    {
      q:'Why does is_likely_phishing require 2+ red flags, instead of flagging on just 1?',
      options:['It doesn\'t matter, 1 would work the same','A single warning sign (like urgent language) can appear in genuinely real messages too — requiring several together reduces wrongly flagging legitimate messages','Checking one flag is not possible in Python','More flags always means a message is longer'],
      correct:1,
      explain:'Real messages sometimes use urgent language for genuine reasons — requiring multiple signals together is more reliable than any single keyword alone.'
    },
    {
      q:'Why does this week only ever ask you to ANALYZE messages, never write one?',
      options:['There is no particular reason','This track stays strictly defensive — the skill being practiced is spotting and reviewing threats, never creating them','Writing a message is technically impossible in Python','Analyzing is easier than writing'],
      correct:1,
      explain:'The whole cybersecurity track focuses on defensive skills: reviewing and identifying problems, not producing attack content.'
    },
    {
      q:'What is a real limitation of a purely keyword-based check like this one?',
      options:['It has no limitations at all','A cleverly worded message could avoid all the exact phrases checked for, while still being a real phishing attempt — keyword matching is one useful layer, not a complete solution','Keyword checks are always 100% accurate','This approach cannot be written in Python'],
      correct:1,
      explain:'A message that avoids the specific phrases being checked for could slip past a simple keyword-based check — real systems use this as one layer among several defenses.'
    },
    {
      q:'Why might a real, legitimate message still use urgent-sounding language?',
      options:['Legitimate messages never use urgency','A genuine deadline (like a real registration closing) is naturally time-sensitive, without being any kind of attack','All urgent messages are phishing by definition','Urgency only appears in attacks'],
      correct:1,
      explain:'Real deadlines and time-sensitive announcements are a normal part of school life — urgency alone doesn\'t prove a message is fake.'
    }
  ],
  sandboxStarter3:`message_a = "Dear Student, Your account will be suspended in 24 hours unless you verify your password immediately. Click here now to confirm your details."
message_b = "Hi, this is a reminder that the library closes early on Friday for the holidays. See you in class next week!"
message_c = "Reminder: science fair registration closes immediately after Friday, do not miss out on your spot!"

def has_urgency_language(text):
    phrases = ["24 hours", "immediately", "urgent", "suspended"]
    return any(p in text.lower() for p in phrases)

def asks_for_password(text):
    return "password" in text.lower()

def has_suspicious_link_pattern(text):
    return "click here" in text.lower()

def count_red_flags(text):
    return sum([has_urgency_language(text), asks_for_password(text), has_suspicious_link_pattern(text)])

def is_likely_phishing(text):
    return count_red_flags(text) >= 2

for label, message in [("message_a", message_a), ("message_b", message_b), ("message_c", message_c)]:
    print(label, "-> red flags:", count_red_flags(message), "-> flagged:", is_likely_phishing(message))
`,
  stretchChallenge:{
    title:'A different combination of red flags',
    desc:`Using message_d = "Please click here to confirm your password so we can keep your account active."
      (a password request AND a suspicious link, but NO urgency language), calculate flags = count_red_flags(message_d)
      and flagged = is_likely_phishing(message_d). Assert that flags == 2 and flagged == True — a different PAIR
      of red flags still crosses the threshold.`,
    starter:`message_d = "Please click here to confirm your password so we can keep your account active."

def has_urgency_language(text):
    phrases = ["24 hours", "immediately", "urgent", "suspended"]
    return any(p in text.lower() for p in phrases)

def asks_for_password(text):
    return "password" in text.lower()

def has_suspicious_link_pattern(text):
    return "click here" in text.lower()

def count_red_flags(text):
    return sum([has_urgency_language(text), asks_for_password(text), has_suspicious_link_pattern(text)])

def is_likely_phishing(text):
    return count_red_flags(text) >= 2

# Calculate flags and flagged below
`,
    tests:[
      {type:'assert', expr:'flags == 2', label:'flags correctly equals 2'},
      {type:'assert', expr:'flagged == True', label:'flagged correctly equals True'}
    ]
  }
},
{
  key:'week8', num:8, title:'Reading the Logs: Spotting Suspicious Activity',
  scenarioTag:'Real world: you\'re the analyst reviewing the portal\'s login history',
  scenario:`The student portal keeps a login log — every attempt, successful or failed, gets one line. Once
    again, YOU are the analyst reviewing what's already there — never generating attack traffic yourself, just
    reading real recorded history and counting how many times each student's login has failed, to flag anyone
    worth a closer look.`,
  objectives:[
    'Extract the username from a single log line',
    'Detect whether a log line represents a failed login',
    'Count failed logins per user across a whole log',
    'Flag any user whose failed-login count crosses a threshold'
  ],
  conceptHtml:`
    <p>Each log line is plain text with a consistent shape: a date, a status, and <code>user=&lt;name&gt;</code>
    at the end. Splitting on <code>"="</code> and taking the LAST piece pulls out just the username:</p>
    <pre class="code-block">line = "2024-01-10 08:15 LOGIN_FAILED user=zara"
print(line.split("=")[-1])   # "zara"</pre>
    <p>Checking whether a line is a failed login is just a substring check, same pattern as Weeks 2 and 7:</p>
    <pre class="code-block">def is_failed_login(line):
    return "LOGIN_FAILED" in line</pre>
    <p>Counting failures per user means looping over every log line, and building up a running total in a
    dictionary — one count per username:</p>
    <pre class="code-block">def count_failed_logins(logs):
    counts = {}
    for line in logs:
        if is_failed_login(line):
            username = line.split("=")[-1]
            counts[username] = counts.get(username, 0) + 1
    return counts</pre>
    <h3>Let's break down the counting loop, line by line</h3>
    <ul>
      <li><code>counts = {}</code> — starts with an empty dictionary; nobody has been counted yet.</li>
      <li><code>if is_failed_login(line):</code> — successful logins are completely ignored; only failures get
        counted at all.</li>
      <li><code>counts.get(username, 0) + 1</code> — the same safe-default pattern from Week 3's
        <code>get_age</code> fix: if this is the user's FIRST recorded failure, <code>counts.get(username, 0)</code>
        safely returns 0 to start counting from, instead of crashing on a missing key.</li>
      <li>Once every user has a failure count, flagging just means checking which counts are AT OR ABOVE some
        chosen threshold — exactly the same idea as Week 7's <code>count_red_flags(...) >= 2</code>.</li>
    </ul>`,
  sandboxStarter:`logs = [
    "2024-01-10 08:15 LOGIN_FAILED user=zara",
    "2024-01-10 08:16 LOGIN_FAILED user=zara",
    "2024-01-10 08:17 LOGIN_SUCCESS user=zara",
]

def extract_username(line):
    return line.split("=")[-1]

for line in logs:
    print(extract_username(line))
`,
  sandboxStarter2:`logs = [
    "2024-01-10 08:15 LOGIN_FAILED user=zara",
    "2024-01-10 08:16 LOGIN_FAILED user=zara",
    "2024-01-10 08:17 LOGIN_SUCCESS user=zara",
    "2024-01-10 08:20 LOGIN_FAILED user=ben",
    "2024-01-10 08:21 LOGIN_FAILED user=ben",
    "2024-01-10 08:22 LOGIN_FAILED user=ben",
    "2024-01-10 08:23 LOGIN_FAILED user=ben",
    "2024-01-10 09:00 LOGIN_SUCCESS user=maya",
]

def is_failed_login(line):
    return "LOGIN_FAILED" in line

def count_failed_logins(logs):
    counts = {}
    for line in logs:
        if is_failed_login(line):
            username = line.split("=")[-1]
            counts[username] = counts.get(username, 0) + 1
    return counts

print(count_failed_logins(logs))
`,
  exercises:[
    {
      title:'Extract the username from a log line',
      desc:`Write extract_username(line) that returns everything after the last "=" in the line. Assert that
        extract_username("2024-01-10 08:15 LOGIN_FAILED user=zara") == "zara".`,
      starter:`def extract_username(line):
    # TODO: return the text after the last "=" in the line
    pass
`,
      tests:[{type:'assert', expr:'extract_username("2024-01-10 08:15 LOGIN_FAILED user=zara") == "zara"', label:'The username is correctly extracted'}]
    },
    {
      title:'Detect a failed login line',
      desc:`Write is_failed_login(line) that returns True if "LOGIN_FAILED" appears in line. Assert that
        is_failed_login("2024-01-10 08:15 LOGIN_FAILED user=zara") == True and
        is_failed_login("2024-01-10 08:17 LOGIN_SUCCESS user=zara") == False.`,
      starter:`def is_failed_login(line):
    # TODO: return True if "LOGIN_FAILED" appears in line
    pass
`,
      tests:[
        {type:'assert', expr:'is_failed_login("2024-01-10 08:15 LOGIN_FAILED user=zara") == True', label:'A failed login line is correctly detected'},
        {type:'assert', expr:'is_failed_login("2024-01-10 08:17 LOGIN_SUCCESS user=zara") == False', label:'A successful login line is correctly not flagged'}
      ]
    },
    {
      title:'Count failed logins per user',
      desc:`Using logs (8 lines: zara has 2 failures + 1 success, ben has 4 failures, maya has 1 success), write
        count_failed_logins(logs) that returns a dict of {username: failure_count}, counting ONLY the failed
        lines. Assert that count_failed_logins(logs) == {"zara": 2, "ben": 4}.`,
      starter:`logs = [
    "2024-01-10 08:15 LOGIN_FAILED user=zara",
    "2024-01-10 08:16 LOGIN_FAILED user=zara",
    "2024-01-10 08:17 LOGIN_SUCCESS user=zara",
    "2024-01-10 08:20 LOGIN_FAILED user=ben",
    "2024-01-10 08:21 LOGIN_FAILED user=ben",
    "2024-01-10 08:22 LOGIN_FAILED user=ben",
    "2024-01-10 08:23 LOGIN_FAILED user=ben",
    "2024-01-10 09:00 LOGIN_SUCCESS user=maya",
]

def is_failed_login(line):
    return "LOGIN_FAILED" in line

def count_failed_logins(logs):
    # TODO: return a dict of {username: failure_count}, counting only failed lines
    pass
`,
      tests:[{type:'assert', expr:'count_failed_logins(logs) == {"zara": 2, "ben": 4}', label:'Failed logins are correctly counted per user'}]
    },
    {
      title:'Flag users over the threshold',
      desc:`Using count_failed_logins from before, write flagged_users(logs, threshold) that returns a list of
        usernames whose failure count is >= threshold. Assert that flagged_users(logs, 3) == ["ben"] — zara's 2
        failures don't cross this threshold, but ben's 4 do.`,
      starter:`logs = [
    "2024-01-10 08:15 LOGIN_FAILED user=zara",
    "2024-01-10 08:16 LOGIN_FAILED user=zara",
    "2024-01-10 08:17 LOGIN_SUCCESS user=zara",
    "2024-01-10 08:20 LOGIN_FAILED user=ben",
    "2024-01-10 08:21 LOGIN_FAILED user=ben",
    "2024-01-10 08:22 LOGIN_FAILED user=ben",
    "2024-01-10 08:23 LOGIN_FAILED user=ben",
    "2024-01-10 09:00 LOGIN_SUCCESS user=maya",
]

def is_failed_login(line):
    return "LOGIN_FAILED" in line

def count_failed_logins(logs):
    counts = {}
    for line in logs:
        if is_failed_login(line):
            username = line.split("=")[-1]
            counts[username] = counts.get(username, 0) + 1
    return counts

def flagged_users(logs, threshold):
    # TODO: return a list of usernames whose failure count is >= threshold
    pass
`,
      tests:[{type:'assert', expr:'flagged_users(logs, 3) == ["ben"]', label:'flagged_users correctly identifies only ben at threshold 3'}]
    },
    {
      title:'Try a stricter threshold',
      desc:`Using the same logs and flagged_users, assert that flagged_users(logs, 2) == ["zara", "ben"] — with
        a stricter (lower) threshold, zara's 2 failures now cross the line too.`,
      starter:`logs = [
    "2024-01-10 08:15 LOGIN_FAILED user=zara",
    "2024-01-10 08:16 LOGIN_FAILED user=zara",
    "2024-01-10 08:17 LOGIN_SUCCESS user=zara",
    "2024-01-10 08:20 LOGIN_FAILED user=ben",
    "2024-01-10 08:21 LOGIN_FAILED user=ben",
    "2024-01-10 08:22 LOGIN_FAILED user=ben",
    "2024-01-10 08:23 LOGIN_FAILED user=ben",
    "2024-01-10 09:00 LOGIN_SUCCESS user=maya",
]

def is_failed_login(line):
    return "LOGIN_FAILED" in line

def count_failed_logins(logs):
    counts = {}
    for line in logs:
        if is_failed_login(line):
            username = line.split("=")[-1]
            counts[username] = counts.get(username, 0) + 1
    return counts

def flagged_users(logs, threshold):
    counts = count_failed_logins(logs)
    return [u for u in counts if counts[u] >= threshold]
`,
      tests:[{type:'assert', expr:'flagged_users(logs, 2) == ["zara", "ben"]', label:'flagged_users correctly identifies both zara and ben at threshold 2'}]
    },
    {
      title:'A user with only successful logins is never flagged',
      desc:`Using the same logs, assert that "maya" not in flagged_users(logs, 1) — even at the loosest possible
        threshold, a user who only ever appears with LOGIN_SUCCESS never gets flagged, since she has zero
        recorded failures at all.`,
      starter:`logs = [
    "2024-01-10 08:15 LOGIN_FAILED user=zara",
    "2024-01-10 08:16 LOGIN_FAILED user=zara",
    "2024-01-10 08:17 LOGIN_SUCCESS user=zara",
    "2024-01-10 08:20 LOGIN_FAILED user=ben",
    "2024-01-10 08:21 LOGIN_FAILED user=ben",
    "2024-01-10 08:22 LOGIN_FAILED user=ben",
    "2024-01-10 08:23 LOGIN_FAILED user=ben",
    "2024-01-10 09:00 LOGIN_SUCCESS user=maya",
]

def is_failed_login(line):
    return "LOGIN_FAILED" in line

def count_failed_logins(logs):
    counts = {}
    for line in logs:
        if is_failed_login(line):
            username = line.split("=")[-1]
            counts[username] = counts.get(username, 0) + 1
    return counts

def flagged_users(logs, threshold):
    counts = count_failed_logins(logs)
    return [u for u in counts if counts[u] >= threshold]
`,
      tests:[{type:'assert', expr:'"maya" not in flagged_users(logs, 1)', label:'maya is correctly never flagged, having zero failed logins'}]
    }
  ],
  quiz:[
    {
      q:'Why split the log line on "=" and take the LAST piece to get the username?',
      options:['It is arbitrary and could be done any other way','The line ends with "user=<name>", so the text after the final "=" is exactly the username','Usernames always contain an "=" sign','Splitting on "=" removes the username'],
      correct:1,
      explain:'The consistent "user=<name>" ending means the last piece after splitting on "=" is always the username.'
    },
    {
      q:'Why does count_failed_logins use counts.get(username, 0) + 1 instead of counts[username] + 1?',
      options:['They behave identically in every case','counts[username] would crash with a KeyError the first time that username is seen; .get(username, 0) safely defaults to 0 instead','.get() is required by Python for all dictionaries','counts[username] is faster'],
      correct:1,
      explain:'Just like Week 3\'s get_age fix, .get(key, default) avoids crashing on a key that hasn\'t been added yet.'
    },
    {
      q:'Why flag users based on a THRESHOLD rather than any single failed login?',
      options:['A threshold has no real purpose here','A single failed login is completely normal (mistyped passwords happen) — a run of MANY failures in the log is the actual warning sign worth reviewing','Every failed login should be flagged immediately','Thresholds only apply to numbers, not logins'],
      correct:1,
      explain:'One mistyped password is normal human error; a cluster of many failures for one account is the pattern worth an analyst\'s attention.'
    },
    {
      q:'Why does maya never appear in flagged_users, no matter how low the threshold is set?',
      options:['She is specifically excluded by name','count_failed_logins only ever adds an entry for users who have at least one FAILED login — maya has none, so she\'s never in the dictionary at all','maya\'s logins are not real','Successful logins count as failures too'],
      correct:1,
      explain:'Since maya has zero recorded failures, she never gets an entry in the counts dictionary in the first place, so she can\'t be flagged regardless of threshold.'
    }
  ],
  sandboxStarter3:`logs = [
    "2024-01-10 08:15 LOGIN_FAILED user=zara",
    "2024-01-10 08:16 LOGIN_FAILED user=zara",
    "2024-01-10 08:17 LOGIN_SUCCESS user=zara",
    "2024-01-10 08:20 LOGIN_FAILED user=ben",
    "2024-01-10 08:21 LOGIN_FAILED user=ben",
    "2024-01-10 08:22 LOGIN_FAILED user=ben",
    "2024-01-10 08:23 LOGIN_FAILED user=ben",
    "2024-01-10 09:00 LOGIN_SUCCESS user=maya",
]

def is_failed_login(line):
    return "LOGIN_FAILED" in line

def count_failed_logins(logs):
    counts = {}
    for line in logs:
        if is_failed_login(line):
            username = line.split("=")[-1]
            counts[username] = counts.get(username, 0) + 1
    return counts

def flagged_users(logs, threshold):
    counts = count_failed_logins(logs)
    return [u for u in counts if counts[u] >= threshold]

for threshold in [1, 2, 3, 5]:
    print("threshold", threshold, "-> flagged:", flagged_users(logs, threshold))
`,
  stretchChallenge:{
    title:'Add a third user to the log',
    desc:`Using logs (from the concept box) PLUS one extra line, "2024-01-10 10:00 LOGIN_FAILED user=chi", assert
      that count_failed_logins(extended_logs)["chi"] == 1 — a brand new user appearing in the log for the first
      time is still counted correctly.`,
    starter:`logs = [
    "2024-01-10 08:15 LOGIN_FAILED user=zara",
    "2024-01-10 08:16 LOGIN_FAILED user=zara",
    "2024-01-10 08:17 LOGIN_SUCCESS user=zara",
    "2024-01-10 08:20 LOGIN_FAILED user=ben",
    "2024-01-10 08:21 LOGIN_FAILED user=ben",
    "2024-01-10 08:22 LOGIN_FAILED user=ben",
    "2024-01-10 08:23 LOGIN_FAILED user=ben",
    "2024-01-10 09:00 LOGIN_SUCCESS user=maya",
]

def is_failed_login(line):
    return "LOGIN_FAILED" in line

def count_failed_logins(logs):
    counts = {}
    for line in logs:
        if is_failed_login(line):
            username = line.split("=")[-1]
            counts[username] = counts.get(username, 0) + 1
    return counts

# Build extended_logs (logs + the new chi line) below
`,
    tests:[
      {type:'assert', expr:'count_failed_logins(extended_logs)["chi"] == 1', label:'chi\'s single failed login is correctly counted'}
    ]
  }
},
{
  key:'week9', num:9, title:'Did the File Change? Checksums and Integrity',
  scenarioTag:'Real world: proving an important file hasn\'t been secretly modified',
  scenario:`The school keeps an official copy of the student handbook. If even one word were quietly changed
    without anyone noticing, that would be a real problem. A checksum — a hash of the file's exact content — lets
    you PROVE whether a file has changed at all, by comparing its current hash to a hash taken earlier, when the
    file was known to be correct.`,
  objectives:[
    'Calculate a checksum (SHA-256 hash) of a piece of text',
    'Confirm two checksums match when content is genuinely unchanged',
    'Detect that content has changed, even by a single character',
    'Check a whole set of files for changes at once'
  ],
  conceptHtml:`
    <p>A checksum is just Week 1's hashing, applied to a whole file's content instead of a password:</p>
    <pre class="code-block">import hashlib

def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

original = "Student Handbook v1.0 - Rules and Guidelines"
print(checksum(original))</pre>
    <p>To check for tampering, compare a NEWLY calculated checksum against one recorded earlier, when the file
    was known to be correct — matching checksums mean matching content:</p>
    <pre class="code-block">def has_file_changed(original, current):
    return checksum(original) != checksum(current)

print(has_file_changed(original, original))                    # False - identical
print(has_file_changed(original, original + " "))               # True - even one space differs</pre>
    <h3>Let's break down why this actually proves something</h3>
    <ul>
      <li>Hashing is deterministic (Week 1) — the EXACT same text always produces the EXACT same hash, every
        time, on any computer.</li>
      <li>SHA-256 also has a property called the "avalanche effect" — changing even a single character
        anywhere in the text produces a COMPLETELY different hash, not a similar one. This makes even the
        tiniest tampering immediately obvious.</li>
      <li><code>has_file_changed</code> never needs to compare the text directly, character by character — it
        only needs to compare two hashes, which is exactly the same hash-and-compare pattern as Week 6's login
        check.</li>
    </ul>`,
  sandboxStarter:`import hashlib

def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

original = "Student Handbook v1.0 - Rules and Guidelines"
print(checksum(original))
`,
  sandboxStarter2:`import hashlib

def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

def has_file_changed(original, current):
    return checksum(original) != checksum(current)

original = "Student Handbook v1.0 - Rules and Guidelines"
unchanged = "Student Handbook v1.0 - Rules and Guidelines"
changed = "Student Handbook v1.0 - Rules and Guidelines "

print(has_file_changed(original, unchanged))
print(has_file_changed(original, changed))
`,
  exercises:[
    {
      title:'Calculate a checksum',
      desc:`Write checksum(text) that returns hashlib.sha256(text.encode()).hexdigest(). Assert that
        checksum("Student Handbook v1.0 - Rules and Guidelines") ==
        "7a8495526ffe36e5e5ad36fbea498044a57250ea8f3f2c73f91a06fe360a4c88".`,
      starter:`import hashlib
def checksum(text):
    # TODO: return the SHA-256 hex digest of text
    pass
`,
      tests:[{type:'assert', expr:'checksum("Student Handbook v1.0 - Rules and Guidelines") == "7a8495526ffe36e5e5ad36fbea498044a57250ea8f3f2c73f91a06fe360a4c88"', label:'The checksum is correctly calculated'}]
    },
    {
      title:'Confirm unchanged content matches',
      desc:`Using checksum, calculate same_content: True if
        checksum("Student Handbook v1.0 - Rules and Guidelines") equals
        checksum("Student Handbook v1.0 - Rules and Guidelines"), False otherwise. Assert that
        same_content == True — the exact same text, hashed twice independently, always produces the exact same
        checksum.`,
      starter:`import hashlib
def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

# Calculate same_content below
`,
      tests:[{type:'assert', expr:'same_content == True', label:'Identical content correctly produces identical checksums'}]
    },
    {
      title:'Detect a change, even by one character',
      desc:`Using checksum, calculate content_changed: True if
        checksum("Student Handbook v1.0 - Rules and Guidelines") does NOT equal
        checksum("Student Handbook v1.0 - Rules and Guidelines "), False otherwise. Assert that
        content_changed == True — the SAME text with just one extra trailing space produces a completely
        different checksum.`,
      starter:`import hashlib
def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

# Calculate content_changed below
`,
      tests:[{type:'assert', expr:'content_changed == True', label:'A one-character difference correctly produces a different checksum'}]
    },
    {
      title:'Write has_file_changed',
      desc:`Write has_file_changed(original, current) that returns True if their checksums differ. Assert that
        has_file_changed("Rules v1", "Rules v1") == False and
        has_file_changed("Rules v1", "Rules v2") == True.`,
      starter:`import hashlib
def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

def has_file_changed(original, current):
    # TODO: return True if checksum(original) != checksum(current)
    pass
`,
      tests:[
        {type:'assert', expr:'has_file_changed("Rules v1", "Rules v1") == False', label:'Unchanged content is correctly detected as unchanged'},
        {type:'assert', expr:'has_file_changed("Rules v1", "Rules v2") == True', label:'Changed content is correctly detected as changed'}
      ]
    },
    {
      title:'One character really does change everything',
      desc:`Using checksum, calculate hash1 = checksum("password") and hash2 = checksum("Password") (only the
        first letter's capitalization differs). Assert that hash1 != hash2, AND that hash1[:4] != hash2[:4] —
        even the very FIRST few characters of the two hashes look completely different, not just "slightly off".`,
      starter:`import hashlib
def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

# Calculate hash1 (from "password") and hash2 (from "Password") below
`,
      tests:[
        {type:'assert', expr:'hash1 != hash2', label:'The two checksums are correctly different overall'},
        {type:'assert', expr:'hash1[:4] != hash2[:4]', label:'Even the first 4 characters look completely different'}
      ]
    },
    {
      title:'Check a whole set of files at once',
      desc:`Using files = {"handbook.txt": (checksum("Rules v1"), "Rules v1"), "schedule.txt": (checksum("Monday
        to Friday"), "Monday to Friday, weekends off")} — each value is (stored_checksum, current_content) — write
        check_files(files) that returns a list of filenames whose current content no longer matches its stored
        checksum. Assert that check_files(files) == ["schedule.txt"].`,
      starter:`import hashlib
def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

files = {
    "handbook.txt": (checksum("Rules v1"), "Rules v1"),
    "schedule.txt": (checksum("Monday to Friday"), "Monday to Friday, weekends off"),
}

def check_files(files):
    # TODO: return a list of filenames whose current content doesn't match its stored checksum
    pass
`,
      tests:[{type:'assert', expr:'check_files(files) == ["schedule.txt"]', label:'check_files correctly identifies only schedule.txt as changed'}]
    }
  ],
  quiz:[
    {
      q:'What is a checksum, in this context?',
      options:['A random number','A hash of a file\'s exact content, used to detect whether that content has changed','A password','A type of encryption key'],
      correct:1,
      explain:'A checksum is simply a hash calculated from a file\'s content, used later to check whether that content is still exactly the same.'
    },
    {
      q:'Why does comparing checksums work to detect tampering, without comparing the files directly?',
      options:['It does not actually work','Hashing is deterministic — identical content always produces an identical hash, so matching hashes prove matching content, without ever needing to compare the raw text','Checksums are randomly generated each time','Comparing checksums is only a rough guess'],
      correct:1,
      explain:'Because hashing always gives the same output for the same input, comparing hashes is a reliable proxy for comparing the underlying content.'
    },
    {
      q:'What is the "avalanche effect" in hashing?',
      options:['Hashes get slower over time','A tiny change to the input (even one character) produces a completely different hash, not a similar one','Hashes always start with the same characters','Hashing multiple files at once is unsafe'],
      correct:1,
      explain:'SHA-256\'s avalanche effect means even a one-character change produces a wildly different hash, making tampering immediately obvious.'
    },
    {
      q:'Why is has_file_changed built on comparing HASHES instead of comparing the two texts directly?',
      options:['There is no real reason, both approaches are identical','This mirrors the same hash-and-compare pattern from Week 6\'s login check, and works efficiently even for very large files where comparing every character would be slower','Text can never be compared directly in Python','Hash comparison is less reliable'],
      correct:1,
      explain:'The same hash-and-compare pattern used for passwords applies here too — and comparing fixed-length hashes stays efficient even for very large files.'
    }
  ],
  sandboxStarter3:`import hashlib

def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

def has_file_changed(original, current):
    return checksum(original) != checksum(current)

files = {
    "handbook.txt": ("Rules v1", "Rules v1"),
    "schedule.txt": ("Monday to Friday", "Monday to Friday, weekends off"),
}
for filename, (original, current) in files.items():
    print(filename, "-> changed:", has_file_changed(original, current))
`,
  stretchChallenge:{
    title:'Confirm the checksum length never changes',
    desc:`Using checksum, calculate len_short = len(checksum("hi")) and
      len_long = len(checksum("a very very very much longer piece of text than before")). Assert that
      len_short == len_long == 64 — SHA-256 always produces a checksum of exactly the same length, no matter
      how long or short the original text was.`,
    starter:`import hashlib
def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

# Calculate len_short and len_long below
`,
    tests:[
      {type:'assert', expr:'len_short == 64', label:'len_short correctly equals 64'},
      {type:'assert', expr:'len_long == 64', label:'len_long correctly equals 64'}
    ]
  }
}
];

const CY_MP1 = {
  key:'mp1',
  title:'Mini Project 1 — Harden the Sign-Up Form',
  intro:`A new student, Zara, is signing up for the portal with a username, email, and password, plus a recovery
    hint in case she forgets her password later. Three stages, combining everything from Weeks 1-4: validate her
    form, hash her password before "storing" it, and encode her recovery hint so it isn't sitting in plain sight.`,
  newTrick:`Combining THREE separate defensive habits — validating input, hashing secrets, and obscuring a hint —
    into one realistic sign-up flow, instead of practicing each one in isolation.`,
  stages:[
    {
      key:'a', title:'Stage A — Validate the sign-up form',
      desc:`Using name = "Zara", email = "zara@school.com", and password = "riverside9", write
        is_valid_username(name), is_valid_email(email), and is_strong(password) (from Weeks 1-2), then calculate
        form_valid: True only if all three checks pass. Assert that form_valid == True.`,
      starter:`name = "Zara"
email = "zara@school.com"
password = "riverside9"
# Write is_valid_username, is_valid_email, is_strong, then calculate form_valid below
`,
      tests:[{type:'assert', expr:'form_valid == True', label:'form_valid correctly equals True'}]
    },
    {
      key:'b', title:'Stage B — Hash the password before storing',
      desc:`Using password = "riverside9", calculate stored_hash = hashlib.sha256(password.encode()).hexdigest().
        Assert that stored_hash == "f89042aaac736fc2186865a06e806575994f73d2d11861be452caec8dac4c5ad".`,
      starter:`import hashlib
password = "riverside9"
# Calculate stored_hash below
`,
      tests:[{type:'assert', expr:'stored_hash == "f89042aaac736fc2186865a06e806575994f73d2d11861be452caec8dac4c5ad"', label:'stored_hash is correctly calculated'}]
    },
    {
      key:'c', title:'Stage C — Encode a recovery hint',
      desc:`Using recovery_hint = "bluewhale" and shift = 4, write caesar_encode (from Week 4) and calculate
        encoded_hint = caesar_encode(recovery_hint, 4). Assert that encoded_hint == "fpyialepi".`,
      starter:`recovery_hint = "bluewhale"
# Write caesar_encode, then calculate encoded_hint below
`,
      tests:[{type:'assert', expr:'encoded_hint == "fpyialepi"', label:'encoded_hint is correctly calculated'}]
    }
  ]
};

const CY_MP2 = {
  key:'mp2',
  title:'Mini Project 2 — Secure the Student Portal',
  intro:`The student portal needs a full security review before launch. Three doors, combining everything from
    Weeks 1-9: validate and hash a new sign-up, fix an insecure login check and scan the login history for
    suspicious activity, then verify a policy file hasn't been tampered with and decode a recovery hint.`,
  fixtureNote:`All three doors build on this same new student, Ben, signing up for the portal:`,
  fixtureCode:`name = "Ben"
email = "ben@school.com"
password = "lakeside7"`,
  doors:[
    {
      key:'a', title:'Door 1 — Validate and hash a new sign-up',
      desc:`Using name = "Ben", email = "ben@school.com", and password = "lakeside7", write
        is_valid_username(name), is_valid_email(email), and is_strong(password) (from Weeks 1-2), then calculate
        form_valid: True only if all three pass. Also calculate stored_hash =
        hashlib.sha256(password.encode()).hexdigest(). Assert that form_valid == True and stored_hash ==
        "51d309ed08194f2d228e64606298992f1e1f22a8e9e2c4fe741c15c2a6fb64b2".`,
      starter:`import hashlib
name = "Ben"
email = "ben@school.com"
password = "lakeside7"
# Write is_valid_username, is_valid_email, is_strong, then calculate form_valid and stored_hash below
`,
      tests:[
        {type:'assert', expr:'form_valid == True', label:'form_valid correctly equals True'},
        {type:'assert', expr:'stored_hash == "51d309ed08194f2d228e64606298992f1e1f22a8e9e2c4fe741c15c2a6fb64b2"', label:'stored_hash is correctly calculated'}
      ]
    },
    {
      key:'b', title:'Door 2 — Fix the login check, then scan the log',
      desc:`Fix check_login(input_pw, stored_hash) so it hashes input_pw and compares it to stored_hash (like
        Weeks 3/6), instead of comparing plain text. Using stored_hash (the hash of "lakeside7"), assert that
        check_login("lakeside7", stored_hash) == True and check_login("wrongpw", stored_hash) == False. Then,
        using logs = ["2024-02-01 10:00 LOGIN_FAILED user=maya", "2024-02-01 10:01 LOGIN_FAILED user=maya",
        "2024-02-01 10:02 LOGIN_FAILED user=maya", "2024-02-01 10:05 LOGIN_SUCCESS user=maya"], write
        flagged_users(logs, threshold) (from Week 8) and calculate flagged = flagged_users(logs, 3). Assert that
        flagged == ["maya"].`,
      starter:`import hashlib
stored_hash = hashlib.sha256("lakeside7".encode()).hexdigest()

def check_login(input_pw, stored_hash):
    return input_pw == stored_hash
    # TODO: fix the flaw - hash input_pw and compare to stored_hash instead

logs = [
    "2024-02-01 10:00 LOGIN_FAILED user=maya",
    "2024-02-01 10:01 LOGIN_FAILED user=maya",
    "2024-02-01 10:02 LOGIN_FAILED user=maya",
    "2024-02-01 10:05 LOGIN_SUCCESS user=maya",
]

def is_failed_login(line):
    return "LOGIN_FAILED" in line

def count_failed_logins(logs):
    counts = {}
    for line in logs:
        if is_failed_login(line):
            username = line.split("=")[-1]
            counts[username] = counts.get(username, 0) + 1
    return counts

def flagged_users(logs, threshold):
    # TODO: return a list of usernames whose failure count is >= threshold
    pass

# Calculate flagged below
`,
      tests:[
        {type:'assert', expr:'check_login("lakeside7", stored_hash) == True', label:'The correct password is correctly accepted'},
        {type:'assert', expr:'check_login("wrongpw", stored_hash) == False', label:'A wrong password is correctly rejected'},
        {type:'assert', expr:'flagged == ["maya"]', label:'flagged correctly identifies maya'}
      ]
    },
    {
      key:'c', title:'Door 3 — Verify integrity and decode the hint',
      desc:`Using file_original = "Portal Policy v2.1" and file_current = "Portal Policy v2.1" (unchanged), write
        checksum(text) (from Week 9) and calculate file_unchanged: True if their checksums match. Then, using
        encoded_hint = "uikgtbokc" and shift = 6, write caesar_decode (from Week 4) and calculate decoded_hint =
        caesar_decode(encoded_hint, 6). Assert that file_unchanged == True and decoded_hint == "oceanview".`,
      starter:`import hashlib
file_original = "Portal Policy v2.1"
file_current = "Portal Policy v2.1"
encoded_hint = "uikgtbokc"

def checksum(text):
    return hashlib.sha256(text.encode()).hexdigest()

# Calculate file_unchanged below

def caesar_encode(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

def caesar_decode(text, shift):
    # TODO: decode by re-using caesar_encode with the opposite shift
    pass

# Calculate decoded_hint below
`,
      tests:[
        {type:'assert', expr:'file_unchanged == True', label:'file_unchanged correctly equals True'},
        {type:'assert', expr:'decoded_hint == "oceanview"', label:'decoded_hint is correctly calculated'}
      ]
    }
  ]
};

const CY_INTERMEDIATE_WEEKS = [
{
  key:'week1', num:1, title:'Allow-Lists vs Deny-Lists',
  scenarioTag:'Real world: the student portal now accepts profile picture uploads — how do you decide what\'s safe?',
  scenario:`Beginner Week 2 rejected obviously bad input (blank, wrong shape). This week asks a sharper question:
    when checking whether a FILE is safe to accept, should you list what's ALLOWED, or list what's BLOCKED? A
    <strong>deny-list</strong> tries to name every dangerous thing and block it. An <strong>allow-list</strong>
    instead names every SAFE thing and blocks everything else by default. One of these has a serious blind spot.`,
  objectives:[
    'Extract a file extension safely, ignoring case',
    'Build an allow-list check that only accepts known-safe extensions',
    'Build a naive deny-list check that only blocks known-bad extensions',
    'Demonstrate the exact gap where a deny-list wrongly accepts something dangerous'
  ],
  conceptHtml:`
    <p>Two ways to decide if a file upload is safe:</p>
    <pre class="code-block">ALLOWED_EXTENSIONS = {"jpg", "png", "gif"}
DENIED_EXTENSIONS  = {"exe", "bat", "sh"}

def get_extension(filename):
    return filename.split(".")[-1].lower()

def is_allowed(filename):          # ALLOW-LIST: only these are OK, everything else is blocked
    return get_extension(filename) in ALLOWED_EXTENSIONS

def is_denied_naive(filename):     # DENY-LIST: only these are blocked, everything else passes
    return get_extension(filename) not in DENIED_EXTENSIONS</pre>
    <p>Now try a file with a <code>.php</code> extension — not a picture, and not on anyone's mind when the deny
    list was written:</p>
    <pre class="code-block">print(is_allowed("hack.php"))         # False — correctly rejected, php was never on the safe list
print(is_denied_naive("hack.php"))    # True  — WRONGLY accepted! php was never added to the danger list either</pre>
    <h3>Why the deny-list has a blind spot the allow-list doesn't</h3>
    <ul>
      <li>A deny-list is only as good as the list of dangers someone thought to write down. New, unusual, or
        simply forgotten-about extensions slip straight through, because the default behaviour is "accept unless
        I recognize this as bad."</li>
      <li>An allow-list flips the default: "reject unless I recognize this as safe." Anything unexpected —
        including something nobody thought to block — is rejected automatically, with zero extra effort.</li>
      <li>This is why real systems almost always prefer allow-lists for anything security-sensitive: file
        uploads, accepted input formats, permitted characters. Deny-lists are easier to write at first, but they
        require you to correctly predict every future danger — which is exactly the kind of guarantee security
        work can't rely on.</li>
    </ul>`,
  sandboxStarter:`def get_extension(filename):
    return filename.split(".")[-1].lower()

print(get_extension("photo.JPG"))
print(get_extension("report.PDF"))
`,
  sandboxStarter2:`ALLOWED_EXTENSIONS = {"jpg", "png", "gif"}

def get_extension(filename):
    return filename.split(".")[-1].lower()

def is_allowed(filename):
    return get_extension(filename) in ALLOWED_EXTENSIONS

print(is_allowed("photo.jpg"))
print(is_allowed("hack.php"))
`,
  exercises:[
    {
      title:'Extract the extension safely',
      desc:`Write get_extension(filename) that returns the part after the last "." in filename, in lowercase.
        Assert that get_extension("photo.JPG") == "jpg" and get_extension("notes.txt") == "txt".`,
      starter:`# Write get_extension(filename) below
`,
      tests:[
        {type:'assert', expr:'get_extension("photo.JPG") == "jpg"', label:'get_extension correctly lowercases "photo.JPG" to "jpg"'},
        {type:'assert', expr:'get_extension("notes.txt") == "txt"', label:'get_extension correctly returns "txt" for "notes.txt"'}
      ]
    },
    {
      title:'Build the allow-list check',
      desc:`Using ALLOWED_EXTENSIONS = {"jpg", "png", "gif"} and get_extension (given), write is_allowed(filename)
        returning True only if the extension is in ALLOWED_EXTENSIONS. Assert that is_allowed("photo.jpg") == True
        and is_allowed("hack.php") == False.`,
      starter:`ALLOWED_EXTENSIONS = {"jpg", "png", "gif"}

def get_extension(filename):
    return filename.split(".")[-1].lower()
# Write is_allowed(filename) below
`,
      tests:[
        {type:'assert', expr:'is_allowed("photo.jpg") == True', label:'"photo.jpg" is correctly allowed'},
        {type:'assert', expr:'is_allowed("hack.php") == False', label:'"hack.php" is correctly rejected'}
      ]
    },
    {
      title:'Build the naive deny-list check',
      desc:`Using DENIED_EXTENSIONS = {"exe", "bat", "sh"} and get_extension (given), write is_denied_naive(filename)
        returning True if the extension is NOT in DENIED_EXTENSIONS (i.e. it "passes" the deny-list). Assert that
        is_denied_naive("hack.exe") == False (correctly blocked) and is_denied_naive("hack.php") == True (the gap —
        php was never on the danger list, so it wrongly passes).`,
      starter:`DENIED_EXTENSIONS = {"exe", "bat", "sh"}

def get_extension(filename):
    return filename.split(".")[-1].lower()
# Write is_denied_naive(filename) below
`,
      tests:[
        {type:'assert', expr:'is_denied_naive("hack.exe") == False', label:'"hack.exe" is correctly blocked by the deny-list'},
        {type:'assert', expr:'is_denied_naive("hack.php") == True', label:'"hack.php" incorrectly passes the deny-list (the blind spot)'}
      ]
    },
    {
      title:'Confirm the exact gap',
      desc:`Using is_allowed and is_denied_naive (given) on "hack.php", calculate gap_shown = (is_allowed("hack.php")
        != is_denied_naive("hack.php")). Assert that gap_shown == True — the allow-list and the naive deny-list
        disagree on this exact file, and the allow-list is the one that got it right.`,
      starter:`ALLOWED_EXTENSIONS = {"jpg", "png", "gif"}
DENIED_EXTENSIONS = {"exe", "bat", "sh"}

def get_extension(filename):
    return filename.split(".")[-1].lower()

def is_allowed(filename):
    return get_extension(filename) in ALLOWED_EXTENSIONS

def is_denied_naive(filename):
    return get_extension(filename) not in DENIED_EXTENSIONS
# Calculate gap_shown below
`,
      tests:[{type:'assert', expr:'gap_shown == True', label:'gap_shown correctly equals True'}]
    },
    {
      title:'Check a whole batch of uploads',
      desc:`Using is_allowed (given) and filenames = ["photo.jpg", "hack.php", "notes.txt", "avatar.png",
        "virus.exe", "picture.gif"], calculate allowed_count, the number of filenames that pass is_allowed.
        Assert that allowed_count == 3.`,
      starter:`ALLOWED_EXTENSIONS = {"jpg", "png", "gif"}

def get_extension(filename):
    return filename.split(".")[-1].lower()

def is_allowed(filename):
    return get_extension(filename) in ALLOWED_EXTENSIONS

filenames = ["photo.jpg", "hack.php", "notes.txt", "avatar.png", "virus.exe", "picture.gif"]
# Calculate allowed_count below
`,
      tests:[{type:'assert', expr:'allowed_count == 3', label:'allowed_count correctly equals 3'}]
    },
    {
      title:'Write the final upload validator',
      desc:`Using is_allowed (given), write validate_upload(filename) returning "accepted" if is_allowed(filename)
        else "rejected". Assert that validate_upload("avatar.png") == "accepted" and
        validate_upload("hack.php") == "rejected".`,
      starter:`ALLOWED_EXTENSIONS = {"jpg", "png", "gif"}

def get_extension(filename):
    return filename.split(".")[-1].lower()

def is_allowed(filename):
    return get_extension(filename) in ALLOWED_EXTENSIONS
# Write validate_upload(filename) below
`,
      tests:[
        {type:'assert', expr:'validate_upload("avatar.png") == "accepted"', label:'validate_upload correctly accepts "avatar.png"'},
        {type:'assert', expr:'validate_upload("hack.php") == "rejected"', label:'validate_upload correctly rejects "hack.php"'}
      ]
    }
  ],
  quiz:[
    {
      q:'What does an ALLOW-LIST do by default with something unexpected?',
      options:['Accepts it, since it wasn\'t explicitly blocked','Rejects it, since it wasn\'t explicitly named as safe','Crashes the program','Asks the user to confirm'],
      correct:1,
      explain:'An allow-list flips the default to "reject unless known-safe" — anything unexpected is automatically blocked.'
    },
    {
      q:'Why did is_denied_naive("hack.php") wrongly return True in this week\'s example?',
      options:['php files are always safe','"php" was never added to the DENIED_EXTENSIONS list, so the naive deny-list had no reason to block it','The function has a bug unrelated to the list contents','php files can\'t be uploaded'],
      correct:1,
      explain:'A deny-list only blocks what someone thought to write down — anything not on that list passes through by default.'
    },
    {
      q:'Why do security-sensitive checks (file uploads, accepted formats) usually prefer allow-lists?',
      options:['Allow-lists are always faster to run','A deny-list requires correctly predicting every future danger in advance, which isn\'t a safe guarantee to rely on','Deny-lists don\'t work in Python','Allow-lists never need updating'],
      correct:1,
      explain:'An allow-list only needs to know what\'s safe — it doesn\'t need to anticipate every possible bad case the way a deny-list does.'
    },
    {
      q:'In gap_shown = (is_allowed("hack.php") != is_denied_naive("hack.php")), why does this evaluate to True?',
      options:['Because both functions returned the same value','Because is_allowed correctly returned False while is_denied_naive incorrectly returned True for the same file','Because "hack.php" is not a valid filename','Because DENIED_EXTENSIONS is empty'],
      correct:1,
      explain:'The two functions disagree on this exact file — that disagreement IS the blind spot the allow-list avoids.'
    }
  ],
  sandboxStarter3:`ALLOWED_EXTENSIONS = {"jpg", "png", "gif"}
DENIED_EXTENSIONS = {"exe", "bat", "sh"}

def get_extension(filename):
    return filename.split(".")[-1].lower()

def is_allowed(filename):
    return get_extension(filename) in ALLOWED_EXTENSIONS

def is_denied_naive(filename):
    return get_extension(filename) not in DENIED_EXTENSIONS

for f in ["photo.jpg", "hack.php", "virus.exe", "avatar.png"]:
    print(f, "-> allow-list:", is_allowed(f), " naive deny-list:", is_denied_naive(f))
`,
  stretchChallenge:{
    title:'Find every file the deny-list gets wrong',
    desc:`Using is_allowed and is_denied_naive (given) and stretch_filenames = ["photo.jpg", "hack.php",
      "script.js", "virus.exe", "avatar.png", "archive.zip"], calculate mismatches, a list of filenames where
      is_allowed(f) != is_denied_naive(f). Assert that mismatches == ["hack.php", "script.js", "archive.zip"] —
      every one of these is correctly rejected by the allow-list, but wrongly waved through by the naive deny-list.`,
    starter:`ALLOWED_EXTENSIONS = {"jpg", "png", "gif"}
DENIED_EXTENSIONS = {"exe", "bat", "sh"}

def get_extension(filename):
    return filename.split(".")[-1].lower()

def is_allowed(filename):
    return get_extension(filename) in ALLOWED_EXTENSIONS

def is_denied_naive(filename):
    return get_extension(filename) not in DENIED_EXTENSIONS

stretch_filenames = ["photo.jpg", "hack.php", "script.js", "virus.exe", "avatar.png", "archive.zip"]
# Calculate mismatches below
`,
    tests:[
      {type:'assert', expr:'mismatches == ["hack.php", "script.js", "archive.zip"]', label:'mismatches is correctly calculated'}
    ]
  }
}
];

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.cy = {
  b: {weeks: CY_WEEKS, mp1: CY_MP1, mp2: CY_MP2},
  i: {weeks: CY_WEEKS, mp1: CY_MP1, mp2: CY_MP2},
  a: {weeks: CY_WEEKS, mp1: CY_MP1, mp2: CY_MP2}
};
