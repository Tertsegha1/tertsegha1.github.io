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
print(hashlib.sha256(password.encode()).hexdigest())</pre>`,
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
      desc:`Given password = "sunshine", print True if it has 8 or more characters, otherwise print False.`,
      starter:`password = "sunshine"
# Print True or False below
`,
      tests:[{type:'output', contains:['True'], label:'Correctly prints True for an 8+ character password'}]
    },
    {
      title:'Does it have a number?',
      desc:`Write a function has_digit(text) that returns True if any character in text is a digit. Then print
        has_digit("sunshine7").`,
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
        one digit.`,
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
        prints the SHA-256 hash of the password instead, using hashlib.`,
      starter:`import hashlib
password = "letmein123"
# Replace the line below to print the SHA-256 hex digest instead
print(password)
`,
      tests:[{type:'output', contains:['9b0eb22aef89516d6fb4b31ccf008a68abe0d10a3fc606316389613eccf96854'], label:'Prints the correct SHA-256 hash, not the plain password'}]
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
  ]
}
];

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.cy = { b: {weeks: CY_WEEKS}, i: {weeks: CY_WEEKS}, a: {weeks: CY_WEEKS} };
