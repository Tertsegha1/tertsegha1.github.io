/* =========================================================================
   AutoML Academy — Phase 0 placeholder content
   One placeholder week, reused across all 3 levels until each level's real
   curriculum is authored in its own build phase. Reuses the Python/Pyodide
   runtime entirely (see ensurePyodideML in app.js) — the only difference
   from the Python track is the one-time scikit-learn/pandas micropip
   install gated to this subject.
   ========================================================================= */

const ML_WEEKS = [
{
  key:'week1', num:1, title:'Meet Your First Model',
  scenarioTag:'Real world: will a student pass the resit?',
  scenario:`The school wants a quick way to estimate whether a student is likely to pass a resit exam, based on how
    many hours they spent revising. You'll train a tiny model on a handful of past students' data and use it to
    make a prediction — the same basic idea behind every "AutoML" tool, just at a small, understandable scale.`,
  objectives:[
    'Confirm pandas and scikit-learn are ready to use',
    'Build a small DataFrame of training data',
    'Train a LogisticRegression model on it',
    'Use the trained model to make a prediction'
  ],
  conceptHtml:`
    <p><strong>pandas</strong> organises data into tables called DataFrames. <strong>scikit-learn</strong> provides
    ready-made model classes like <code>LogisticRegression</code> that you train ("fit") on example data, then use
    to predict on new data:</p>
    <pre class="code-block">import pandas as pd
from sklearn.linear_model import LogisticRegression

hours = [[1],[2],[3],[7],[8],[9]]
passed = [0,0,0,1,1,1]

model = LogisticRegression()
model.fit(hours, passed)
print(model.predict([[6]]))</pre>
    <p>Every AutoML pipeline follows this same shape: gather data, train a model, then predict — the "auto" part
    just means the tool tries this automatically across many model types and settings for you.</p>
    <h3>Let's break down the training code, line by line</h3>
    <pre class="code-block">import pandas as pd
from sklearn.linear_model import LogisticRegression

hours = [[1],[2],[3],[7],[8],[9]]
passed = [0,0,0,1,1,1]

model = LogisticRegression()
model.fit(hours, passed)
print(model.predict([[6]]))</pre>
    <ul>
      <li><code>import pandas as pd</code> / <code>from sklearn.linear_model import LogisticRegression</code> —
        these load in code that other people have already written, so you don't have to build a whole machine
        learning algorithm from nothing. <code>as pd</code> just gives pandas a shorter nickname to type.</li>
      <li><code>hours = [[1],[2],[3],[7],[8],[9]]</code> — six past students' revision hours. Notice each number is
        wrapped in its own tiny list, like <code>[1]</code> not just <code>1</code> — scikit-learn always expects
        a "list of lists" for its inputs, one inner list per student, even when there's only one piece of
        information about them.</li>
      <li><code>passed = [0,0,0,1,1,1]</code> — whether each of those six students passed (1) or didn't (0), in the
        same order as <code>hours</code>. This is the "answer key" the model learns from.</li>
      <li><code>model = LogisticRegression()</code> — creates a brand new, completely untrained model object and
        stores it in the variable <code>model</code>. At this point it doesn't know anything yet.</li>
      <li><code>model.fit(hours, passed)</code> — this is the actual "learning" step: it looks at the hours/passed
        pairs and works out the relationship between them. After this line runs, <code>model</code> is trained.</li>
      <li><code>print(model.predict([[6]]))</code> — asks the now-trained model to guess whether a new student,
        who studied for 6 hours (a value it never saw during training), would pass. <code>[[6]]</code> uses the
        same "list of lists" shape as the training data, just for one new student instead of six.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
from sklearn.linear_model import LogisticRegression
print("scikit-learn and pandas are ready!")
`,
  sandboxStarter2:`from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[7],[8],[9]]
passed = [0,0,0,1,1,1]
model = LogisticRegression()
model.fit(hours, passed)
print(model.predict([[6]]))
`,
  exercises:[
    {
      title:'Check your tools are ready',
      desc:`Import pandas as pd and print the exact message "Ready to build models!". This just confirms the
        import line works — import pandas as pd, then a normal print() on its own line underneath.`,
      starter:`# Import pandas and print the message below
`,
      tests:[{type:'output', contains:['Ready to build models!'], label:'Prints the ready message'}]
    },
    {
      title:'Build a small DataFrame',
      desc:`Create a pandas DataFrame called df with one column "hours" containing the values 1, 2, 3, and print
        len(df). It should print 3. Build it like this: df = pd.DataFrame({"hours": [1, 2, 3]}) — the curly
        braces {} define a column name and its list of values together.`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['3'], label:'Prints the correct row count (3)'}]
    },
    {
      title:'Train a model',
      desc:`Using the training data from the concept box (hours and passed), train a LogisticRegression model
        called model, then print model.predict([[8]])[0]. Follow the exact same three steps from the concept
        walkthrough: create the model with LogisticRegression(), train it with model.fit(hours, passed), then
        predict. The [0] at the end of predict([[8]])[0] just unwraps the single answer from its list.`,
      starter:`from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[7],[8],[9]]
passed = [0,0,0,1,1,1]
# Train your model and print a prediction below
`,
      tests:[{type:'assert', expr:'model.predict([[8]])[0] == 1', label:'Model predicts a pass (1) for 8 hours of revision'}]
    },
    {
      title:'Check the model exists',
      desc:`Keep the training code from before, then confirm your model object has a predict method by asserting
        hasattr(model, "predict"). hasattr(object, "name") checks whether something has a particular method or
        property available on it — a quick way to confirm your model was really built correctly.`,
      starter:`from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[7],[8],[9]]
passed = [0,0,0,1,1,1]
model = LogisticRegression()
model.fit(hours, passed)
`,
      tests:[{type:'assert', expr:'hasattr(model, "predict")', label:'model has a predict method'}]
    },
    {
      title:'Build the full training DataFrame',
      desc:`Create a pandas DataFrame called df with two columns: "hours" containing [1, 2, 3, 7, 8, 9] and
        "passed" containing [0, 0, 0, 1, 1, 1]. Print df["passed"].sum(). It should print 3 — three of the six
        students in the training data passed.`,
      starter:`import pandas as pd
# Create df with both columns below, then print df["passed"].sum()
`,
      tests:[{type:'output', contains:['3'], label:'Prints the correct passed count (3)'}]
    },
    {
      title:'Predict for a different student',
      desc:`Using the same training data (hours and passed from the concept box), train a LogisticRegression
        model called model, then print model.predict([[4]])[0]. Assert that model.predict([[4]])[0] == 0 — a
        student who only studied for 4 hours is predicted not to pass.`,
      starter:`from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[7],[8],[9]]
passed = [0,0,0,1,1,1]
# Train your model and print a prediction for 4 hours below
`,
      tests:[{type:'assert', expr:'model.predict([[4]])[0] == 0', label:'Model predicts a fail (0) for 4 hours of revision'}]
    }
  ],
  quiz:[
    {
      q:'What does scikit-learn\'s .fit() method do?',
      options:['Deletes the data','Trains the model on example data','Prints the data','Deploys the model to a server'],
      correct:1,
      explain:'.fit() is how a scikit-learn model learns patterns from your training data.'
    },
    {
      q:'What is a pandas DataFrame?',
      options:['A single number','A table of rows and columns','A type of chart','A trained model'],
      correct:1,
      explain:'A DataFrame is pandas\' table structure, similar to a spreadsheet.'
    },
    {
      q:'After training, how do you get a prediction for new data?',
      options:['model.fit(new_data)','model.predict(new_data)','model.train(new_data)','model.data(new_data)'],
      correct:1,
      explain:'.predict() uses the already-trained model to make predictions on new input.'
    },
    {
      q:'What does "AutoML" mean, roughly?',
      options:['Manually writing every model by hand','Automatically trying models/settings so you do not have to pick by hand','A type of database','A programming language'],
      correct:1,
      explain:'AutoML tools automate trying different models and settings to find one that works well.'
    }
  ],
  sandboxStarter3:`from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[7],[8],[9]]
passed = [0,0,0,1,1,1]
model = LogisticRegression()
model.fit(hours, passed)
for h in [2, 4, 6, 8]:
    print(h, "hours ->", model.predict([[h]])[0])
`,
  stretchChallenge:{
    title:'Check the model\'s confidence',
    desc:`Using the same training data, train model, then use model.predict_proba([[8]])[0][1] to get the
      probability the model assigns to "passed" for a student who studied 8 hours. Assert that
      round(model.predict_proba([[8]])[0][1], 2) == 0.95 — the model is quite confident this student passes,
      not just guessing.`,
    starter:`from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[7],[8],[9]]
passed = [0,0,0,1,1,1]
model = LogisticRegression()
model.fit(hours, passed)
# Print round(model.predict_proba([[8]])[0][1], 2) below
`,
    tests:[
      {type:'assert', expr:'round(model.predict_proba([[8]])[0][1], 2) == 0.95', label:'model is correctly ~95% confident this student passes'}
    ]
  }
},
{
  key:'week2', num:2, title:'Splitting Data the Easy Way',
  scenarioTag:'Real world: will your model actually work on students it has never seen?',
  scenario:`Last week you trained a model and predicted on hours it never saw — but you never PROVED it works well
    on new students in general. If you test a model using the same data it learned from, it can look perfect even
    when it's really just memorised the answers. This week you'll use scikit-learn's train_test_split to hold back
    some students the model never trains on, then honestly check performance on them.`,
  objectives:[
    'Use train_test_split to automatically split data into training and test portions',
    'Train a model using ONLY the training portion',
    'Score the model honestly on the held-out test portion',
    'Understand why scoring on training data alone can be misleading'
  ],
  conceptHtml:`
    <p>scikit-learn's <code>train_test_split</code> does the splitting for you — no manual slicing needed:</p>
    <pre class="code-block">from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]

X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
print(len(X_train), len(X_test))</pre>
    <p>Train only on the training portion, then use <code>.score()</code> to check accuracy on BOTH portions:</p>
    <pre class="code-block">model = LogisticRegression()
model.fit(X_train, y_train)
train_score = model.score(X_train, y_train)
test_score = model.score(X_test, y_test)
print(train_score, test_score)</pre>
    <h3>Let's break down the split code, line by line</h3>
    <ul>
      <li><code>train_test_split(hours, passed, test_size=0.3, random_state=42)</code> — shuffles the data, then
        holds back 30% of it as the test set. <code>random_state=42</code> makes the "random" shuffle the same
        every time you run the code, so results are repeatable — without it, you'd get a different split every
        run.</li>
      <li>It returns FOUR things at once: <code>X_train</code>/<code>y_train</code> (the training portion) and
        <code>X_test</code>/<code>y_test</code> (the held-out portion) — always in that order.</li>
      <li><code>model.fit(X_train, y_train)</code> — the model only ever sees the training portion. It has never
        seen <code>X_test</code> at all.</li>
      <li><code>model.score(X, y)</code> — a shortcut that predicts on <code>X</code> and compares to <code>y</code>,
        returning the fraction correct (like Week 1's accuracy, but built into the model itself). Scoring on
        <code>X_test</code>/<code>y_test</code> is the only honest way to know how the model does on students it
        has never seen — scoring on <code>X_train</code>/<code>y_train</code> only tells you how well it
        remembered its own training data.</li>
    </ul>`,
  sandboxStarter:`from sklearn.model_selection import train_test_split
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
print("train:", X_train)
print("test:", X_test)
`,
  sandboxStarter2:`from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)

model = LogisticRegression()
model.fit(X_train, y_train)
print("train score:", model.score(X_train, y_train))
print("test score:", model.score(X_test, y_test))
`,
  exercises:[
    {
      title:'Split the data automatically',
      desc:`Using hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]] and passed = [0,0,0,0,1,1,1,1,1,1], use
        train_test_split(hours, passed, test_size=0.3, random_state=42) to get X_train, X_test, y_train, y_test.
        Assert that len(X_train) == 7 and len(X_test) == 3.`,
      starter:`from sklearn.model_selection import train_test_split
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
# Split the data below
`,
      tests:[
        {type:'assert', expr:'len(X_train) == 7', label:'X_train correctly contains 7 students'},
        {type:'assert', expr:'len(X_test) == 3', label:'X_test correctly contains 3 students'}
      ]
    },
    {
      title:'Train only on the training portion',
      desc:`Using X_train and y_train from the split, train a LogisticRegression model called model. Then
        calculate train_score = model.score(X_train, y_train). Assert that train_score == 1.0.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
# Train model on X_train/y_train, then calculate train_score below
`,
      tests:[{type:'assert', expr:'train_score == 1.0', label:'train_score correctly equals 1.0'}]
    },
    {
      title:'Score honestly on the test set',
      desc:`Using the model trained in the previous exercise, calculate test_score = model.score(X_test, y_test).
        Assert that test_score == 1.0 — the model generalises correctly to students it never trained on.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
model = LogisticRegression()
model.fit(X_train, y_train)
# Calculate test_score below
`,
      tests:[{type:'assert', expr:'test_score == 1.0', label:'test_score correctly equals 1.0'}]
    },
    {
      title:'Compare train and test scores',
      desc:`Using train_score = 1.0 and test_score = 1.0 (from the previous two exercises), calculate
        scores_match: whether train_score equals test_score. Assert that scores_match == True.`,
      starter:`train_score = 1.0
test_score = 1.0
# Calculate scores_match below
`,
      tests:[{type:'assert', expr:'scores_match == True', label:'scores_match correctly equals True'}]
    },
    {
      title:'Try a different split ratio',
      desc:`Using the same hours and passed, split again but with test_size = 0.5 instead of 0.3 (keep
        random_state = 42). Assert that len(X_train) == 5 and len(X_test) == 5 — an even 50/50 split.`,
      starter:`from sklearn.model_selection import train_test_split
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
# Split with test_size=0.5 below
`,
      tests:[
        {type:'assert', expr:'len(X_train) == 5', label:'X_train correctly contains 5 students'},
        {type:'assert', expr:'len(X_test) == 5', label:'X_test correctly contains 5 students'}
      ]
    },
    {
      title:'Confirm the test set is truly held out',
      desc:`Using X_train and X_test from the test_size=0.3 split, confirm no student appears in both. Build
        held_out: True if no value in X_test also appears in X_train, False otherwise (hint: compare
        set(x[0] for x in X_test) against set(x[0] for x in X_train) using .isdisjoint()). Assert that
        held_out == True — this is WHY test_score means something: the model genuinely never saw these students.`,
      starter:`from sklearn.model_selection import train_test_split
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
# Build held_out below
`,
      tests:[{type:'assert', expr:'held_out == True', label:'held_out correctly equals True'}]
    }
  ],
  quiz:[
    {
      q:'What does train_test_split do?',
      options:['Deletes half the data permanently','Automatically splits data into a training portion and a held-out test portion','Trains two separate models','Doubles the size of the dataset'],
      correct:1,
      explain:'train_test_split shuffles and divides your data into a training set and a test set.'
    },
    {
      q:'Why is random_state=42 used?',
      options:['It makes the model more accurate','It makes the "random" shuffle repeatable, so you get the same split every time you run the code','It is required by Python','It doubles the test set size'],
      correct:1,
      explain:'Without a fixed random_state, you would get a different split every run, making results hard to reproduce.'
    },
    {
      q:'Why is scoring only on training data misleading?',
      options:['It isn\'t misleading at all','A model can look perfect on data it already memorised during training, without proving it works on new, unseen data','Training data is always wrong','.score() only works on test data'],
      correct:1,
      explain:'A model can appear to perform perfectly on data it has already seen, which says nothing about how well it generalises to new students.'
    },
    {
      q:'What does model.score(X, y) return?',
      options:['The number of rows in X','The fraction of predictions on X that matched the real answers in y','The model\'s training time','A list of all predictions'],
      correct:1,
      explain:'.score() predicts on X and compares to y, returning the fraction of correct predictions (like accuracy).'
    }
  ],
  sandboxStarter3:`from sklearn.model_selection import train_test_split
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
for size in [0.2, 0.3, 0.5]:
    X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=size, random_state=42)
    print("test_size", size, "-> train:", len(X_train), "test:", len(X_test))
`,
  stretchChallenge:{
    title:'Split with a different random_state',
    desc:`Using the same hours/passed and test_size=0.3, but random_state=7 instead of 42, split the data. Assert
      that len(X_train) == 7 and len(X_test) == 3 — the SIZES stay the same regardless of random_state, only WHICH
      students end up in each portion changes.`,
    starter:`from sklearn.model_selection import train_test_split
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
# Split with random_state=7 below
`,
    tests:[
      {type:'assert', expr:'len(X_train) == 7', label:'X_train correctly contains 7 students'},
      {type:'assert', expr:'len(X_test) == 3', label:'X_test correctly contains 3 students'}
    ]
  }
},
{
  key:'week3', num:3, title:'Predicting a Number: LinearRegression',
  scenarioTag:'Real world: predicting an exact exam score, not just pass/fail',
  scenario:`So far your models have predicted a category — pass or fail. But sometimes you want an exact NUMBER,
    like a predicted exam score. scikit-learn's LinearRegression works exactly like LogisticRegression (same
    fit/predict shape), just for numbers instead of categories. This week you'll train one, then use
    mean_absolute_error to honestly measure how close its predictions are to reality.`,
  objectives:[
    'Train a LinearRegression model to predict a number instead of a category',
    'Understand a model\'s coefficient and intercept',
    'Split fairly before measuring error, just like Week 2',
    'Use mean_absolute_error from sklearn.metrics to measure prediction quality'
  ],
  conceptHtml:`
    <p><code>LinearRegression</code> follows the exact same shape as <code>LogisticRegression</code> — create it,
    <code>.fit()</code> it, <code>.predict()</code> with it — but predicts a NUMBER instead of a category:</p>
    <pre class="code-block">from sklearn.linear_model import LinearRegression

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]

model = LinearRegression()
model.fit(hours, scores)
print(model.coef_[0], model.intercept_)
print(model.predict([[6]]))</pre>
    <p>To honestly measure how good the predictions are, split fairly first (Week 2's <code>train_test_split</code>),
    then use <code>mean_absolute_error</code> from <code>sklearn.metrics</code>:</p>
    <pre class="code-block">from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

X_train, X_test, y_train, y_test = train_test_split(hours, scores, test_size=0.3, random_state=42)
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
mae = mean_absolute_error(y_test, predictions)
print(mae)</pre>
    <h3>Let's break down the regression code, line by line</h3>
    <ul>
      <li><code>model.coef_[0]</code> — how much the predicted score changes for every extra hour studied (it's a
        list, <code>[0]</code> because there's only one feature — hours — this week).</li>
      <li><code>model.intercept_</code> — the predicted score when hours = 0 — the model's starting point before
        any studying at all.</li>
      <li><code>model.predict([[6]])</code> — same "list of lists" shape from Week 1, just returning a NUMBER
        instead of a 0/1 category this time.</li>
      <li><code>mean_absolute_error(y_test, predictions)</code> — takes the real test scores and the model's
        predicted scores, and returns the average size of the mistake (ignoring whether it was too high or too
        low) — exactly the same idea as Week 1's mean absolute error in the Machine Learning track, just computed
        by a library function instead of by hand.</li>
    </ul>`,
  sandboxStarter:`from sklearn.linear_model import LinearRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]
model = LinearRegression()
model.fit(hours, scores)
print("coefficient:", model.coef_[0])
print("intercept:", model.intercept_)
`,
  sandboxStarter2:`from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]
X_train, X_test, y_train, y_test = train_test_split(hours, scores, test_size=0.3, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
mae = mean_absolute_error(y_test, predictions)
print("predictions:", predictions)
print("actual:", y_test)
print("mean absolute error:", mae)
`,
  exercises:[
    {
      title:'Train a LinearRegression model',
      desc:`Using hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]] and scores = [40, 45, 50, 58, 62, 68, 74, 78,
        85, 90], train a LinearRegression model called model. Assert that round(model.coef_[0], 2) == 5.6.`,
      starter:`from sklearn.linear_model import LinearRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]
# Train model below
`,
      tests:[{type:'assert', expr:'round(model.coef_[0], 2) == 5.6', label:'model coefficient is correctly 5.6'}]
    },
    {
      title:'Predict a score',
      desc:`Using the model trained in the previous exercise, calculate predicted_score = model.predict([[6]])[0].
        Assert that round(predicted_score, 2) == 67.8.`,
      starter:`from sklearn.linear_model import LinearRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]
model = LinearRegression()
model.fit(hours, scores)
# Calculate predicted_score below
`,
      tests:[{type:'assert', expr:'round(predicted_score, 2) == 67.8', label:'predicted_score is correctly 67.8'}]
    },
    {
      title:'Split fairly first',
      desc:`Using the same hours and scores, use train_test_split(hours, scores, test_size=0.3, random_state=42)
        to get X_train, X_test, y_train, y_test. Assert that len(X_train) == 7 and len(X_test) == 3 — the same
        splitting mechanic from Week 2 works for regression data too.`,
      starter:`from sklearn.model_selection import train_test_split
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]
# Split the data below
`,
      tests:[
        {type:'assert', expr:'len(X_train) == 7', label:'X_train correctly contains 7 students'},
        {type:'assert', expr:'len(X_test) == 3', label:'X_test correctly contains 3 students'}
      ]
    },
    {
      title:'Calculate mean absolute error',
      desc:`Using X_train/X_test/y_train/y_test from the split, train a NEW LinearRegression model on X_train/
        y_train only, predict on X_test, then calculate mae = mean_absolute_error(y_test, predictions). Assert
        that round(mae, 2) == 0.47.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]
X_train, X_test, y_train, y_test = train_test_split(hours, scores, test_size=0.3, random_state=42)
# Train a new model on X_train/y_train, predict on X_test, then calculate mae below
`,
      tests:[{type:'assert', expr:'round(mae, 2) == 0.47', label:'mae is correctly 0.47'}]
    },
    {
      title:'Check the intercept',
      desc:`Using the model trained on the FULL data (hours and scores, not the split), assert that
        round(model.intercept_, 2) == 34.2 — the model's predicted score for a student who studied 0 hours.`,
      starter:`from sklearn.linear_model import LinearRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]
model = LinearRegression()
model.fit(hours, scores)
`,
      tests:[{type:'assert', expr:'round(model.intercept_, 2) == 34.2', label:'model intercept is correctly 34.2'}]
    },
    {
      title:'Predict for zero hours',
      desc:`Using the same full-data model, calculate zero_hours_prediction = model.predict([[0]])[0]. Assert that
        round(zero_hours_prediction, 2) == 34.2 — predicting at hours=0 gives back exactly the intercept.`,
      starter:`from sklearn.linear_model import LinearRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]
model = LinearRegression()
model.fit(hours, scores)
# Calculate zero_hours_prediction below
`,
      tests:[{type:'assert', expr:'round(zero_hours_prediction, 2) == 34.2', label:'zero_hours_prediction is correctly 34.2'}]
    }
  ],
  quiz:[
    {
      q:'How does LinearRegression differ from LogisticRegression?',
      options:['It predicts a number instead of a category, using the exact same fit/predict shape','It cannot be trained','It only works with pandas DataFrames','It has no coefficient'],
      correct:0,
      explain:'LinearRegression predicts numeric values, but is trained and used identically to LogisticRegression.'
    },
    {
      q:'What does model.coef_[0] represent?',
      options:['The total number of training rows','How much the predicted value changes per extra unit of the input feature','The model\'s name','The test set size'],
      correct:1,
      explain:'The coefficient tells you how much the prediction changes for every one-unit increase in the input.'
    },
    {
      q:'Why split the data before calculating mean_absolute_error?',
      options:['There is no reason to','So the error is measured on students the model never trained on, giving an honest measure of real-world performance','Splitting makes the model train faster','mean_absolute_error requires a split to work at all'],
      correct:1,
      explain:'Measuring error on held-out test data (not training data) tells you how well the model generalises, matching Week 2\'s lesson.'
    },
    {
      q:'What does mean_absolute_error measure?',
      options:['The percentage of exactly correct predictions','The average size of the mistake between predicted and real values','The number of features used','The model\'s training time'],
      correct:1,
      explain:'mean_absolute_error averages how far off each prediction was from the real value, regardless of direction.'
    }
  ],
  sandboxStarter3:`from sklearn.linear_model import LinearRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]
model = LinearRegression()
model.fit(hours, scores)
for h in [0, 3, 6, 9]:
    print(h, "hours -> predicted score:", round(model.predict([[h]])[0], 1))
`,
  stretchChallenge:{
    title:'Predict for a maximum study session',
    desc:`Using the full-data model (hours and scores), calculate max_prediction = model.predict([[10]])[0].
      Assert that round(max_prediction, 2) == 90.2.`,
    starter:`from sklearn.linear_model import LinearRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
scores = [40, 45, 50, 58, 62, 68, 74, 78, 85, 90]
model = LinearRegression()
model.fit(hours, scores)
# Calculate max_prediction below
`,
    tests:[
      {type:'assert', expr:'round(max_prediction, 2) == 90.2', label:'max_prediction is correctly 90.2'}
    ]
  }
},
{
  key:'week4', num:4, title:'A Different Kind of Model: Decision Trees',
  scenarioTag:'Real world: same problem, a completely different kind of model',
  scenario:`So far you've only used one type of model (LogisticRegression) for pass/fail predictions. scikit-learn
    has dozens of different model types — but they nearly all follow the SAME shape: create it, .fit() it,
    .predict()/.score() it. This week you'll swap in a DecisionTreeClassifier, which makes its decisions using a
    series of yes/no questions instead of a mathematical formula, and see how little of your code actually needs
    to change.`,
  objectives:[
    'Train a DecisionTreeClassifier using the exact same interface as LogisticRegression',
    'Understand that a decision tree makes yes/no splits rather than fitting a formula',
    'Predict for several new students at once',
    'Compare a decision tree\'s score to a logistic regression model\'s score on the same split'
  ],
  conceptHtml:`
    <p><code>DecisionTreeClassifier</code> follows the EXACT same shape as <code>LogisticRegression</code> — this
    is the whole point of scikit-learn's consistent interface: swap the model class, keep everything else the
    same:</p>
    <pre class="code-block">from sklearn.tree import DecisionTreeClassifier

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]

model = DecisionTreeClassifier(random_state=42)
model.fit(hours, passed)
print(model.predict([[6]]))</pre>
    <p>Instead of a formula, a decision tree learns a series of yes/no QUESTIONS about the data (like "is hours
    greater than 4.5?") and follows them down to a final answer. You can even predict for several new students at
    once by passing more than one row:</p>
    <pre class="code-block">predictions = model.predict([[2], [6], [9]])
print(predictions)</pre>
    <h3>Let's break down what's genuinely new here</h3>
    <ul>
      <li><code>random_state=42</code> — decision trees can make different choices between equally-good splits, so
        fixing this keeps results repeatable, the same reason it's used in <code>train_test_split</code>.</li>
      <li><code>model.fit(hours, passed)</code> / <code>model.predict(...)</code> — IDENTICAL method names and
        argument shapes to Week 1's LogisticRegression. Nothing about how you call the model changed at all.</li>
      <li><code>model.predict([[2], [6], [9]])</code> — passing multiple rows returns multiple predictions at
        once, in the same order — this already worked for LogisticRegression too, just hadn't come up yet.</li>
      <li><code>model.get_depth()</code> — a decision-tree-specific detail (LogisticRegression has no such method)
        showing how many yes/no questions deep the tree goes before reaching an answer.</li>
    </ul>`,
  sandboxStarter:`from sklearn.tree import DecisionTreeClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
model = DecisionTreeClassifier(random_state=42)
model.fit(hours, passed)
print("predict 6:", model.predict([[6]]))
print("tree depth:", model.get_depth())
`,
  sandboxStarter2:`from sklearn.tree import DecisionTreeClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
model = DecisionTreeClassifier(random_state=42)
model.fit(hours, passed)
predictions = model.predict([[2], [6], [9]])
print("predictions for 2, 6, 9 hours:", predictions)
`,
  exercises:[
    {
      title:'Swap in a DecisionTreeClassifier',
      desc:`Using hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]] and passed = [0,0,0,0,1,1,1,1,1,1], train a
        DecisionTreeClassifier(random_state=42) called model. Assert that model.predict([[6]])[0] == 1 and
        model.predict([[3]])[0] == 0.`,
      starter:`from sklearn.tree import DecisionTreeClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
# Train model below
`,
      tests:[
        {type:'assert', expr:'model.predict([[6]])[0] == 1', label:'model predicts a pass (1) for 6 hours'},
        {type:'assert', expr:'model.predict([[3]])[0] == 0', label:'model predicts a fail (0) for 3 hours'}
      ]
    },
    {
      title:'Check the tree\'s depth',
      desc:`Using the model trained in the previous exercise, calculate tree_depth = model.get_depth(). Assert
        that tree_depth == 1 — this simple data only needs a single yes/no question to separate pass from fail.`,
      starter:`from sklearn.tree import DecisionTreeClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
model = DecisionTreeClassifier(random_state=42)
model.fit(hours, passed)
# Calculate tree_depth below
`,
      tests:[{type:'assert', expr:'tree_depth == 1', label:'tree_depth correctly equals 1'}]
    },
    {
      title:'Score the tree',
      desc:`Using the same model and data, calculate full_score = model.score(hours, passed). Assert that
        full_score == 1.0.`,
      starter:`from sklearn.tree import DecisionTreeClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
model = DecisionTreeClassifier(random_state=42)
model.fit(hours, passed)
# Calculate full_score below
`,
      tests:[{type:'assert', expr:'full_score == 1.0', label:'full_score correctly equals 1.0'}]
    },
    {
      title:'Split fairly, then train the tree',
      desc:`Using train_test_split(hours, passed, test_size=0.3, random_state=42) to get X_train/X_test/y_train/
        y_test, train a NEW DecisionTreeClassifier(random_state=42) on X_train/y_train, then calculate
        test_score = model.score(X_test, y_test). Assert that test_score == 1.0.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
# Train a new DecisionTreeClassifier on X_train/y_train, then calculate test_score below
`,
      tests:[{type:'assert', expr:'test_score == 1.0', label:'test_score correctly equals 1.0'}]
    },
    {
      title:'Compare the tree to logistic regression',
      desc:`Using the same X_train/X_test/y_train/y_test split, train BOTH a DecisionTreeClassifier(random_state=42)
        called tree AND a LogisticRegression called logit on X_train/y_train. Calculate tree_score =
        tree.score(X_test, y_test) and logit_score = logit.score(X_test, y_test). Assert that
        tree_score == logit_score — two very different kinds of model, reaching the same result on this data.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
# Train tree and logit below, then calculate tree_score and logit_score
`,
      tests:[{type:'assert', expr:'tree_score == logit_score', label:'tree_score correctly equals logit_score'}]
    },
    {
      title:'Predict for a batch of new students',
      desc:`Using the full-data model (hours and passed, DecisionTreeClassifier(random_state=42)), calculate
        batch_predictions = list(model.predict([[2], [6], [9]])). Assert that batch_predictions == [0, 1, 1].`,
      starter:`from sklearn.tree import DecisionTreeClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
model = DecisionTreeClassifier(random_state=42)
model.fit(hours, passed)
# Calculate batch_predictions below
`,
      tests:[{type:'assert', expr:'batch_predictions == [0, 1, 1]', label:'batch_predictions correctly equals [0, 1, 1]'}]
    }
  ],
  quiz:[
    {
      q:'How does a decision tree make its predictions?',
      options:['By fitting a mathematical formula, like LogisticRegression','By following a series of learned yes/no questions down to a final answer','By storing every training example and comparing distances','It cannot make predictions'],
      correct:1,
      explain:'A decision tree splits the data using yes/no questions (like "is hours > 4.5?") until it reaches an answer.'
    },
    {
      q:'What had to change in your code to swap LogisticRegression for DecisionTreeClassifier?',
      options:['Almost nothing — just the import and the class name; .fit()/.predict()/.score() stayed identical','The entire training process had to be rewritten','DecisionTreeClassifier does not support .predict()','You need a different dataset format entirely'],
      correct:0,
      explain:'scikit-learn\'s consistent interface means swapping model types barely changes your code at all.'
    },
    {
      q:'What does model.get_depth() tell you about a decision tree?',
      options:['The number of training rows','How many yes/no questions deep the tree goes before reaching an answer','The model\'s accuracy','The number of features'],
      correct:1,
      explain:'Depth measures how many splits the tree needed to make its decisions.'
    },
    {
      q:'Why is comparing a decision tree\'s score to a logistic regression\'s score useful?',
      options:['It isn\'t useful','Different model types can be tried on the exact same split and compared fairly, since both follow the same fit/predict/score interface','Only one of them can actually be scored','Scores can only be compared within the same model type'],
      correct:1,
      explain:'Because every scikit-learn model shares the same interface, you can fairly compare different model types on the same train/test split.'
    }
  ],
  sandboxStarter3:`from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)

tree = DecisionTreeClassifier(random_state=42)
tree.fit(X_train, y_train)
logit = LogisticRegression()
logit.fit(X_train, y_train)

print("tree score:", tree.score(X_test, y_test))
print("logistic regression score:", logit.score(X_test, y_test))
`,
  stretchChallenge:{
    title:'Predict for a wider batch',
    desc:`Using the full-data model (hours and passed, DecisionTreeClassifier(random_state=42)), calculate
      wide_predictions = list(model.predict([[1], [5], [10]])). Assert that wide_predictions == [0, 1, 1].`,
    starter:`from sklearn.tree import DecisionTreeClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
model = DecisionTreeClassifier(random_state=42)
model.fit(hours, passed)
# Calculate wide_predictions below
`,
    tests:[
      {type:'assert', expr:'wide_predictions == [0, 1, 1]', label:'wide_predictions correctly equals [0, 1, 1]'}
    ]
  }
},
{
  key:'week5', num:5, title:'Teaching From Multiple Clues',
  scenarioTag:'Real world: hours alone don\'t tell the whole story',
  scenario:`Some students study a lot but skip class, others attend everything but barely study — hours revised
    alone can't always predict who passes. This week you'll train a model on TWO clues at once: hours revised AND
    attendance. Using a DataFrame with more than one feature column needs almost no new code — just select more
    columns.`,
  objectives:[
    'Select multiple feature columns from a DataFrame at once',
    'Train a model using more than one feature',
    'Compare a single-feature model\'s score to a multi-feature model\'s score',
    'Predict for a new student using both clues together'
  ],
  conceptHtml:`
    <p>Selecting multiple columns for training is just a longer list inside the square brackets:</p>
    <pre class="code-block">import pandas as pd
from sklearn.linear_model import LogisticRegression

hours =      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
attendance = [60, 65, 70, 90, 60, 95, 65, 85, 90, 95]
passed =     [0, 0, 0, 1, 0, 1, 0, 1, 1, 1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "passed": passed})

X = df[["hours", "attendance"]]
y = df["passed"]
model = LogisticRegression()
model.fit(X, y)
print(model.score(X, y))</pre>
    <p>To predict for a new student, build a small DataFrame with the SAME column names, in the SAME order:</p>
    <pre class="code-block">new_student = pd.DataFrame({"hours": [5], "attendance": [90]})
print(model.predict(new_student))</pre>
    <h3>Let's break down what's different from single-feature training</h3>
    <ul>
      <li><code>df[["hours", "attendance"]]</code> — the double square brackets select MULTIPLE columns at once
        (a list of column names), returning a DataFrame with both columns, instead of one Series.</li>
      <li><code>model.fit(X, y)</code> — the exact same method call as single-feature training. The model itself
        figures out how to weigh both clues together — nothing about how you CALL <code>.fit()</code> changes.</li>
      <li><code>pd.DataFrame({"hours": [5], "attendance": [90]})</code> — building a tiny one-row DataFrame with
        matching column names lets you predict for a brand new student using both features at once.</li>
      <li>A student with only 5 hours but 90% attendance can still be predicted to pass — something a
        single-feature (hours-only) model could never capture, since it only ever looks at one clue.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
from sklearn.linear_model import LogisticRegression

hours =      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
attendance = [60, 65, 70, 90, 60, 95, 65, 85, 90, 95]
passed =     [0, 0, 0, 1, 0, 1, 0, 1, 1, 1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "passed": passed})

X_single = df[["hours"]]
X_multi = df[["hours", "attendance"]]
y = df["passed"]

model_single = LogisticRegression()
model_single.fit(X_single, y)
model_multi = LogisticRegression()
model_multi.fit(X_multi, y)

print("single-feature score:", model_single.score(X_single, y))
print("multi-feature score:", model_multi.score(X_multi, y))
`,
  sandboxStarter2:`import pandas as pd
from sklearn.linear_model import LogisticRegression

hours =      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
attendance = [60, 65, 70, 90, 60, 95, 65, 85, 90, 95]
passed =     [0, 0, 0, 1, 0, 1, 0, 1, 1, 1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "passed": passed})

X = df[["hours", "attendance"]]
y = df["passed"]
model = LogisticRegression()
model.fit(X, y)

new_student = pd.DataFrame({"hours": [5], "attendance": [90]})
print("prediction for 5 hours, 90% attendance:", model.predict(new_student))
`,
  exercises:[
    {
      title:'Build a multi-feature DataFrame',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10], attendance = [60,65,70,90,60,95,65,85,90,95], and
        passed = [0,0,0,1,0,1,0,1,1,1], create a DataFrame df with all three as columns. Assert that
        len(df.columns) == 3.`,
      starter:`import pandas as pd
hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [60,65,70,90,60,95,65,85,90,95]
passed = [0,0,0,1,0,1,0,1,1,1]
# Create df below
`,
      tests:[{type:'assert', expr:'len(df.columns) == 3', label:'df correctly has 3 columns'}]
    },
    {
      title:'Train on a single feature',
      desc:`Using df from the previous exercise, select X_single = df[["hours"]] and y = df["passed"], train a
        LogisticRegression called model_single, then calculate score_single = model_single.score(X_single, y).
        Assert that round(score_single, 2) == 0.8.`,
      starter:`import pandas as pd
from sklearn.linear_model import LogisticRegression
hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [60,65,70,90,60,95,65,85,90,95]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "passed": passed})
# Train model_single on X_single = df[["hours"]], then calculate score_single below
`,
      tests:[{type:'assert', expr:'round(score_single, 2) == 0.8', label:'score_single correctly equals 0.8'}]
    },
    {
      title:'Train on multiple features',
      desc:`Using the same df, select X_multi = df[["hours", "attendance"]] and y = df["passed"], train a
        LogisticRegression called model_multi, then calculate score_multi = model_multi.score(X_multi, y). Assert
        that score_multi == 1.0.`,
      starter:`import pandas as pd
from sklearn.linear_model import LogisticRegression
hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [60,65,70,90,60,95,65,85,90,95]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "passed": passed})
# Train model_multi on X_multi = df[["hours", "attendance"]], then calculate score_multi below
`,
      tests:[{type:'assert', expr:'score_multi == 1.0', label:'score_multi correctly equals 1.0'}]
    },
    {
      title:'Compare the two scores',
      desc:`Using score_single = 0.8 and score_multi = 1.0, calculate multi_is_better: whether score_multi is
        greater than score_single. Assert that multi_is_better == True.`,
      starter:`score_single = 0.8
score_multi = 1.0
# Calculate multi_is_better below
`,
      tests:[{type:'assert', expr:'multi_is_better == True', label:'multi_is_better correctly equals True'}]
    },
    {
      title:'Predict for a new student using both clues',
      desc:`Using model_multi (trained on X_multi/y from before), build new_student =
        pd.DataFrame({"hours": [5], "attendance": [90]}) and calculate prediction =
        model_multi.predict(new_student)[0]. Assert that prediction == 1 — even with only 5 hours, high
        attendance is enough to predict a pass.`,
      starter:`import pandas as pd
from sklearn.linear_model import LogisticRegression
hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [60,65,70,90,60,95,65,85,90,95]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "passed": passed})
X_multi = df[["hours", "attendance"]]
y = df["passed"]
model_multi = LogisticRegression()
model_multi.fit(X_multi, y)
# Build new_student, then calculate prediction below
`,
      tests:[{type:'assert', expr:'prediction == 1', label:'prediction correctly equals 1 (pass)'}]
    },
    {
      title:'Predict for a different combination',
      desc:`Using the same model_multi, build another_student = pd.DataFrame({"hours": [9], "attendance": [60]})
        and calculate prediction2 = model_multi.predict(another_student)[0]. Assert that prediction2 == 0 — even
        with 9 hours studied, low attendance is enough to predict a fail.`,
      starter:`import pandas as pd
from sklearn.linear_model import LogisticRegression
hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [60,65,70,90,60,95,65,85,90,95]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "passed": passed})
X_multi = df[["hours", "attendance"]]
y = df["passed"]
model_multi = LogisticRegression()
model_multi.fit(X_multi, y)
# Build another_student, then calculate prediction2 below
`,
      tests:[{type:'assert', expr:'prediction2 == 0', label:'prediction2 correctly equals 0 (fail)'}]
    }
  ],
  quiz:[
    {
      q:'What does df[["hours", "attendance"]] select?',
      options:['Just the hours column','Both the hours and attendance columns together, as a DataFrame','A single random column','Nothing — this is invalid syntax'],
      correct:1,
      explain:'Double square brackets with a list of column names selects multiple columns at once.'
    },
    {
      q:'Why might a multi-feature model score higher than a single-feature model?',
      options:['It never does','Extra genuinely relevant clues can help the model separate cases a single feature alone cannot distinguish','More features always makes training slower with no benefit','Multi-feature models cannot be scored'],
      correct:1,
      explain:'Attendance can distinguish students that hours alone would classify the same way, improving the model\'s accuracy.'
    },
    {
      q:'How do you predict for a new student using multiple features?',
      options:['Pass a plain Python list with no column names','Build a small DataFrame with matching column names, then call .predict() on it','You cannot predict using more than one feature','Call .fit() again with the new student\'s data'],
      correct:1,
      explain:'A DataFrame with the same column names used in training lets .predict() know which value belongs to which feature.'
    },
    {
      q:'What changed in the CODE when moving from one feature to two?',
      options:['Everything had to be rewritten from scratch','Only the column selection (df[[...]]) — .fit()/.predict()/.score() stayed exactly the same','LogisticRegression cannot handle two features','A different import was required'],
      correct:1,
      explain:'scikit-learn\'s consistent interface means adding another feature column barely changes the surrounding code.'
    }
  ],
  sandboxStarter3:`import pandas as pd
from sklearn.linear_model import LogisticRegression

hours =      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
attendance = [60, 65, 70, 90, 60, 95, 65, 85, 90, 95]
passed =     [0, 0, 0, 1, 0, 1, 0, 1, 1, 1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "passed": passed})

X = df[["hours", "attendance"]]
y = df["passed"]
model = LogisticRegression()
model.fit(X, y)

for h, a in [(2, 95), (9, 60), (5, 90)]:
    new_student = pd.DataFrame({"hours": [h], "attendance": [a]})
    print(h, "hours,", a, "% attendance -> predicted:", model.predict(new_student)[0])
`,
  stretchChallenge:{
    title:'Predict for a low-hours, high-attendance student',
    desc:`Using model_multi (trained on X_multi/y), build low_hours_student = pd.DataFrame({"hours": [2],
      "attendance": [95]}) and calculate prediction3 = model_multi.predict(low_hours_student)[0]. Assert that
      prediction3 == 1 — very high attendance can outweigh very few hours studied.`,
    starter:`import pandas as pd
from sklearn.linear_model import LogisticRegression
hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [60,65,70,90,60,95,65,85,90,95]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "passed": passed})
X_multi = df[["hours", "attendance"]]
y = df["passed"]
model_multi = LogisticRegression()
model_multi.fit(X_multi, y)
# Build low_hours_student, then calculate prediction3 below
`,
    tests:[
      {type:'assert', expr:'prediction3 == 1', label:'prediction3 correctly equals 1 (pass)'}
    ]
  }
},
{
  key:'week6', num:6, title:'Words Into Numbers: Encoding Categories',
  scenarioTag:'Real world: a feature that\'s a word, not a number',
  scenario:`Some useful clues aren't numbers at all — like whether a student studies "solo" or in a "group".
    scikit-learn models can only work with numbers, so text categories need to be converted first. This week
    you'll use pandas' get_dummies() to turn a text column into numeric columns a model can actually use.`,
  objectives:[
    'See why scikit-learn cannot train directly on text categories',
    'Use pd.get_dummies() to convert a text column into numeric columns',
    'Combine encoded columns with other numeric features',
    'Predict for a new student by encoding their category by hand'
  ],
  conceptHtml:`
    <p>Trying to train directly on text raises an error — models only understand numbers:</p>
    <pre class="code-block">import pandas as pd
from sklearn.linear_model import LogisticRegression

method = ["solo", "group", "solo", "group"]
passed = [0, 1, 0, 1]
df = pd.DataFrame({"method": method, "passed": passed})

model = LogisticRegression()
model.fit(df[["method"]], df["passed"])   # raises an error — text isn't a number</pre>
    <p><code>pd.get_dummies()</code> converts a text column into one numeric column PER category (0 or 1, "does
    this row belong to this category?"):</p>
    <pre class="code-block">dummies = pd.get_dummies(df["method"]).astype(int)
print(dummies)
#    group  solo
# 0      0     1
# 1      1     0
# 2      0     1
# 3      1     0</pre>
    <p>Combine the encoded columns with any other numeric features using <code>pd.concat</code>, then train
    exactly as before:</p>
    <pre class="code-block">X = pd.concat([df[["hours"]], dummies], axis=1)
y = df["passed"]
model = LogisticRegression()
model.fit(X, y)</pre>
    <h3>Let's break down the encoding code, line by line</h3>
    <ul>
      <li><code>pd.get_dummies(df["method"])</code> — creates one new column per unique category found (here,
        "group" and "solo"), each holding whether that row belongs to that category.</li>
      <li><code>.astype(int)</code> — makes sure the encoded columns are the numbers 0/1 (not True/False), so
        every model behaves consistently regardless of exactly how <code>get_dummies</code> represents them
        internally.</li>
      <li><code>pd.concat([df[["hours"]], dummies], axis=1)</code> — glues the original numeric column and the
        new encoded columns together side by side (<code>axis=1</code> means "add columns," not more rows).</li>
      <li>Once encoded, <code>method</code> is no longer text at all — it's now two ordinary numeric columns the
        model can use exactly like <code>hours</code>.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
hours = [1,2,3,4,5,6,7,8,9,10]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "method": method, "passed": passed})

dummies = pd.get_dummies(df["method"]).astype(int)
print(dummies)
`,
  sandboxStarter2:`import pandas as pd
from sklearn.linear_model import LogisticRegression

hours = [1,2,3,4,5,6,7,8,9,10]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "method": method, "passed": passed})

dummies = pd.get_dummies(df["method"]).astype(int)
X = pd.concat([df[["hours"]], dummies], axis=1)
y = df["passed"]

model = LogisticRegression()
model.fit(X, y)
print("score:", model.score(X, y))
print(X)
`,
  exercises:[
    {
      title:'See why text breaks a model',
      desc:`Using method = ["solo", "group", "solo", "group"] and passed = [0, 1, 0, 1], build a DataFrame df,
        then try to model.fit(df[["method"]], df["passed"]) inside a try/except. Set raised_error = True inside
        the except block. Assert that raised_error == True.`,
      starter:`import pandas as pd
from sklearn.linear_model import LogisticRegression
method = ["solo", "group", "solo", "group"]
passed = [0, 1, 0, 1]
df = pd.DataFrame({"method": method, "passed": passed})
raised_error = False
# Try to fit directly on df[["method"]] below, setting raised_error = True in the except block
`,
      tests:[{type:'assert', expr:'raised_error == True', label:'raised_error correctly equals True'}]
    },
    {
      title:'Encode the category',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10], method = ["solo","group","solo","group","solo","group","solo",
        "group","solo","group"], and passed = [0,0,0,1,0,1,0,1,1,1], build df, then calculate
        dummies = pd.get_dummies(df["method"]).astype(int). Assert that list(dummies.columns) == ["group", "solo"]
        and dummies["solo"].sum() == 5.`,
      starter:`import pandas as pd
hours = [1,2,3,4,5,6,7,8,9,10]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "method": method, "passed": passed})
# Calculate dummies below
`,
      tests:[
        {type:'assert', expr:"list(dummies.columns) == ['group', 'solo']", label:'dummies has the correct columns, in order'},
        {type:'assert', expr:'dummies["solo"].sum() == 5', label:'dummies["solo"].sum() correctly equals 5'}
      ]
    },
    {
      title:'Combine hours with the encoded columns',
      desc:`Using df and dummies from before, calculate X = pd.concat([df[["hours"]], dummies], axis=1). Assert
        that len(X.columns) == 3.`,
      starter:`import pandas as pd
hours = [1,2,3,4,5,6,7,8,9,10]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "method": method, "passed": passed})
dummies = pd.get_dummies(df["method"]).astype(int)
# Calculate X below
`,
      tests:[{type:'assert', expr:'len(X.columns) == 3', label:'X correctly has 3 columns'}]
    },
    {
      title:'Train and score using the encoded features',
      desc:`Using X from before and y = df["passed"], train a LogisticRegression called model, then calculate
        score = model.score(X, y). Assert that round(score, 2) == 0.8.`,
      starter:`import pandas as pd
from sklearn.linear_model import LogisticRegression
hours = [1,2,3,4,5,6,7,8,9,10]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "method": method, "passed": passed})
dummies = pd.get_dummies(df["method"]).astype(int)
X = pd.concat([df[["hours"]], dummies], axis=1)
y = df["passed"]
# Train model, then calculate score below
`,
      tests:[{type:'assert', expr:'round(score, 2) == 0.8', label:'score correctly rounds to 0.8'}]
    },
    {
      title:'Check a student\'s encoded row',
      desc:`Using X from before, calculate first_row = list(X.iloc[0]). Assert that first_row == [1, 0, 1] — the
        first student studied 1 hour, solo (group=0, solo=1).`,
      starter:`import pandas as pd
hours = [1,2,3,4,5,6,7,8,9,10]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "method": method, "passed": passed})
dummies = pd.get_dummies(df["method"]).astype(int)
X = pd.concat([df[["hours"]], dummies], axis=1)
# Calculate first_row below
`,
      tests:[{type:'assert', expr:'first_row == [1, 0, 1]', label:'first_row correctly equals [1, 0, 1]'}]
    },
    {
      title:'Predict for a new student, encoded by hand',
      desc:`Using the model trained on X/y, build new_student = pd.DataFrame({"hours": [6], "group": [1],
        "solo": [0]}) (a student who studies 6 hours, in a group) and calculate
        prediction = model.predict(new_student)[0]. Assert that prediction == 1.`,
      starter:`import pandas as pd
from sklearn.linear_model import LogisticRegression
hours = [1,2,3,4,5,6,7,8,9,10]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "method": method, "passed": passed})
dummies = pd.get_dummies(df["method"]).astype(int)
X = pd.concat([df[["hours"]], dummies], axis=1)
y = df["passed"]
model = LogisticRegression()
model.fit(X, y)
# Build new_student, then calculate prediction below
`,
      tests:[{type:'assert', expr:'prediction == 1', label:'prediction correctly equals 1 (pass)'}]
    }
  ],
  quiz:[
    {
      q:'Why can\'t scikit-learn train directly on a text column?',
      options:['It can, no changes are needed','scikit-learn models only work with numbers, so text categories must be converted first','Text columns are always empty','Only pandas can read text, not scikit-learn'],
      correct:1,
      explain:'scikit-learn models are built entirely around numeric calculations — text has to be converted to numbers first.'
    },
    {
      q:'What does pd.get_dummies() do?',
      options:['Deletes a text column','Creates one numeric column per category, marking which rows belong to which category','Trains a model automatically','Sorts a DataFrame alphabetically'],
      correct:1,
      explain:'get_dummies() turns a text column into several 0/1 columns, one per unique category.'
    },
    {
      q:'Why use .astype(int) after get_dummies()?',
      options:['It is not necessary and does nothing','It ensures the encoded columns are consistently 0/1 numbers rather than True/False','It deletes the encoded columns','It converts numbers back into text'],
      correct:1,
      explain:'.astype(int) guarantees numeric 0/1 values regardless of how get_dummies represents them internally.'
    },
    {
      q:'When predicting for a new student, why must you build their row with matching encoded columns?',
      options:['It doesn\'t matter what columns are used','The model was trained expecting specific column names/order, so a new row needs to match that same shape exactly','New predictions never need any columns','Only the "hours" column matters for predictions'],
      correct:1,
      explain:'A model expects input shaped exactly like its training data — the same columns, representing the same features.'
    }
  ],
  sandboxStarter3:`import pandas as pd
from sklearn.linear_model import LogisticRegression

hours = [1,2,3,4,5,6,7,8,9,10]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "method": method, "passed": passed})
dummies = pd.get_dummies(df["method"]).astype(int)
X = pd.concat([df[["hours"]], dummies], axis=1)
y = df["passed"]
model = LogisticRegression()
model.fit(X, y)

for h, grp, solo in [(6, 1, 0), (6, 0, 1), (9, 1, 0)]:
    new_student = pd.DataFrame({"hours": [h], "group": [grp], "solo": [solo]})
    print(h, "hours, group=" + str(grp), "solo=" + str(solo), "-> predicted:", model.predict(new_student)[0])
`,
  stretchChallenge:{
    title:'Same hours, different category',
    desc:`Using the model trained on X/y, build solo_student = pd.DataFrame({"hours": [6], "group": [0],
      "solo": [1]}) (SAME hours as before, but studying solo instead of in a group) and calculate
      solo_prediction = model.predict(solo_student)[0]. Assert that solo_prediction == 0 — the encoded category
      alone changes the prediction, even with identical hours.`,
    starter:`import pandas as pd
from sklearn.linear_model import LogisticRegression
hours = [1,2,3,4,5,6,7,8,9,10]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "method": method, "passed": passed})
dummies = pd.get_dummies(df["method"]).astype(int)
X = pd.concat([df[["hours"]], dummies], axis=1)
y = df["passed"]
model = LogisticRegression()
model.fit(X, y)
# Build solo_student, then calculate solo_prediction below
`,
    tests:[
      {type:'assert', expr:'solo_prediction == 0', label:'solo_prediction correctly equals 0 (fail)'}
    ]
  }
},
{
  key:'week7', num:7, title:'Neighbors, Automatically: KNeighborsClassifier',
  scenarioTag:'Real world: automating the "compare to similar students" idea',
  scenario:`If you've done the Machine Learning track, you already built k-NN by hand — comparing a new student
    to their most similar past students and taking a majority vote. scikit-learn's KNeighborsClassifier does the
    exact same idea automatically, using the same fit/predict/score interface as every model so far. This week
    you'll swap it in and compare it against the models from Weeks 1 and 4.`,
  objectives:[
    'Train a KNeighborsClassifier using the familiar fit/predict/score interface',
    'Understand what n_neighbors controls',
    'Compare KNeighborsClassifier\'s score to LogisticRegression and DecisionTreeClassifier on the same split',
    'Predict for a batch of new students using k-NN'
  ],
  conceptHtml:`
    <p><code>KNeighborsClassifier</code> automates the "compare to similar past students" idea — for a new
    student, it finds the <code>n_neighbors</code> closest students in the training data and takes a majority
    vote, exactly like hand-built k-NN, just without writing the distance/sorting/voting code yourself:</p>
    <pre class="code-block">from sklearn.neighbors import KNeighborsClassifier

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]

model = KNeighborsClassifier(n_neighbors=3)
model.fit(hours, passed)
print(model.predict([[6]]))</pre>
    <p>Same fit/predict/score shape as every model so far — comparing it to earlier models just means training
    each on the SAME split and checking their scores side by side:</p>
    <pre class="code-block">from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)

knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)
logit = LogisticRegression()
logit.fit(X_train, y_train)

print(knn.score(X_test, y_test), logit.score(X_test, y_test))</pre>
    <h3>Let's break down what's genuinely new here</h3>
    <ul>
      <li><code>n_neighbors=3</code> — how many of the closest training students get a vote, exactly like the
        <code>k</code> in hand-built k-NN.</li>
      <li>Unlike <code>LogisticRegression</code> (a formula) or <code>DecisionTreeClassifier</code> (yes/no
        splits), <code>KNeighborsClassifier</code> doesn't really "learn" anything during <code>.fit()</code> — it
        just remembers the training data, and does all its work at prediction time by comparing to it.</li>
      <li><code>.fit()</code>/<code>.predict()</code>/<code>.score()</code> are IDENTICAL across all three model
        types — this is what makes comparing them on the same split so easy.</li>
    </ul>`,
  sandboxStarter:`from sklearn.neighbors import KNeighborsClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
model = KNeighborsClassifier(n_neighbors=3)
model.fit(hours, passed)
print("predict 6:", model.predict([[6]]))
print("predict 3:", model.predict([[3]]))
`,
  sandboxStarter2:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)

knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)
logit = LogisticRegression()
logit.fit(X_train, y_train)
tree = DecisionTreeClassifier(random_state=42)
tree.fit(X_train, y_train)

print("knn score:", knn.score(X_test, y_test))
print("logistic regression score:", logit.score(X_test, y_test))
print("decision tree score:", tree.score(X_test, y_test))
`,
  exercises:[
    {
      title:'Swap in a KNeighborsClassifier',
      desc:`Using hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]] and passed = [0,0,0,0,1,1,1,1,1,1], train a
        KNeighborsClassifier(n_neighbors=3) called model. Assert that model.predict([[6]])[0] == 1 and
        model.predict([[3]])[0] == 0.`,
      starter:`from sklearn.neighbors import KNeighborsClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
# Train model below
`,
      tests:[
        {type:'assert', expr:'model.predict([[6]])[0] == 1', label:'model predicts a pass (1) for 6 hours'},
        {type:'assert', expr:'model.predict([[3]])[0] == 0', label:'model predicts a fail (0) for 3 hours'}
      ]
    },
    {
      title:'Split, then score the k-NN model',
      desc:`Using train_test_split(hours, passed, test_size=0.3, random_state=42) to get X_train/X_test/y_train/
        y_test, train a KNeighborsClassifier(n_neighbors=3) on X_train/y_train, then calculate
        knn_score = model.score(X_test, y_test). Assert that knn_score == 1.0.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
# Train a KNeighborsClassifier on X_train/y_train, then calculate knn_score below
`,
      tests:[{type:'assert', expr:'knn_score == 1.0', label:'knn_score correctly equals 1.0'}]
    },
    {
      title:'Compare k-NN to logistic regression',
      desc:`Using the same split, train BOTH a KNeighborsClassifier(n_neighbors=3) called knn AND a
        LogisticRegression called logit on X_train/y_train. Calculate knn_score = knn.score(X_test, y_test) and
        logit_score = logit.score(X_test, y_test). Assert that knn_score == logit_score.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
# Train knn and logit below, then calculate knn_score and logit_score
`,
      tests:[{type:'assert', expr:'knn_score == logit_score', label:'knn_score correctly equals logit_score'}]
    },
    {
      title:'Compare k-NN to the decision tree',
      desc:`Using the same split, train BOTH a KNeighborsClassifier(n_neighbors=3) called knn AND a
        DecisionTreeClassifier(random_state=42) called tree on X_train/y_train. Calculate
        knn_score = knn.score(X_test, y_test) and tree_score = tree.score(X_test, y_test). Assert that
        knn_score == tree_score.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
# Train knn and tree below, then calculate knn_score and tree_score
`,
      tests:[{type:'assert', expr:'knn_score == tree_score', label:'knn_score correctly equals tree_score'}]
    },
    {
      title:'Try a different number of neighbors',
      desc:`Using the same split, train a KNeighborsClassifier(n_neighbors=1) (instead of 3) on X_train/y_train,
        then calculate score_k1 = model.score(X_test, y_test). Assert that score_k1 == 1.0.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)
# Train a KNeighborsClassifier(n_neighbors=1), then calculate score_k1 below
`,
      tests:[{type:'assert', expr:'score_k1 == 1.0', label:'score_k1 correctly equals 1.0'}]
    },
    {
      title:'Predict for a batch using k-NN',
      desc:`Using the full-data model (hours and passed, KNeighborsClassifier(n_neighbors=3)), calculate
        batch_predictions = list(model.predict([[2], [6], [9]])). Assert that batch_predictions == [0, 1, 1].`,
      starter:`from sklearn.neighbors import KNeighborsClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
model = KNeighborsClassifier(n_neighbors=3)
model.fit(hours, passed)
# Calculate batch_predictions below
`,
      tests:[{type:'assert', expr:'batch_predictions == [0, 1, 1]', label:'batch_predictions correctly equals [0, 1, 1]'}]
    }
  ],
  quiz:[
    {
      q:'What does KNeighborsClassifier do that is similar to hand-built k-NN?',
      options:['Nothing, they are unrelated','It finds the closest training examples to a new point and takes a majority vote, automatically','It fits a straight line formula','It builds a series of yes/no questions'],
      correct:1,
      explain:'KNeighborsClassifier automates the exact same "compare to similar examples, then vote" idea as hand-built k-NN.'
    },
    {
      q:'What does n_neighbors control?',
      options:['The number of training rows','How many of the closest training examples get a vote when predicting','The test set size','The number of features'],
      correct:1,
      explain:'n_neighbors is scikit-learn\'s version of "k" — how many nearby examples are consulted.'
    },
    {
      q:'What is different about how KNeighborsClassifier "learns", compared to LogisticRegression or DecisionTreeClassifier?',
      options:['It learns nothing at all, ever','.fit() mostly just remembers the training data — the real work happens at prediction time, comparing to that stored data','It cannot be trained','It requires a completely different fit() method name'],
      correct:1,
      explain:'Unlike models that fit a formula or build splits during training, k-NN does its comparison work when you call .predict(), not .fit().'
    },
    {
      q:'Why is it easy to compare KNeighborsClassifier, LogisticRegression, and DecisionTreeClassifier on the same data?',
      options:['It is not easy, each requires totally different code','They all share the exact same fit/predict/score interface, so only the class name changes','Only one of them can be scored at a time','They cannot be trained on the same split'],
      correct:1,
      explain:'scikit-learn\'s consistent interface across model types is exactly what makes fair side-by-side comparison so simple.'
    }
  ],
  sandboxStarter3:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.3, random_state=42)

for k in [1, 3, 5]:
    model = KNeighborsClassifier(n_neighbors=k)
    model.fit(X_train, y_train)
    print("n_neighbors =", k, "-> score:", model.score(X_test, y_test))
`,
  stretchChallenge:{
    title:'Predict for a wider batch with k-NN',
    desc:`Using the full-data model (hours and passed, KNeighborsClassifier(n_neighbors=3)), calculate
      wide_predictions = list(model.predict([[1], [5], [10]])). Assert that wide_predictions == [0, 1, 1].`,
    starter:`from sklearn.neighbors import KNeighborsClassifier
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,1,1,1,1,1,1]
model = KNeighborsClassifier(n_neighbors=3)
model.fit(hours, passed)
# Calculate wide_predictions below
`,
    tests:[
      {type:'assert', expr:'wide_predictions == [0, 1, 1]', label:'wide_predictions correctly equals [0, 1, 1]'}
    ]
  }
},
{
  key:'week8', num:8, title:'Is My Model Actually Good?',
  scenarioTag:'Real world: accuracy alone can hide a real problem',
  scenario:`.score() gives you accuracy, but accuracy alone doesn't always tell the full story — a model can be
    "right" most of the time while still missing many of the real cases that matter. This week you'll use
    sklearn.metrics functions to get the full picture: accuracy, precision, and recall, computed automatically
    instead of counting TP/FP/FN/TN by hand.`,
  objectives:[
    'Use accuracy_score, precision_score, and recall_score from sklearn.metrics',
    'See a real case where precision and recall genuinely differ',
    'Use f1_score to combine precision and recall into one number',
    'Use confusion_matrix to see all four outcome counts at once'
  ],
  conceptHtml:`
    <p><code>sklearn.metrics</code> provides ready-made functions for everything you built by hand in the
    Machine Learning track's confusion-counts week:</p>
    <pre class="code-block">from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,0,1,0,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.4, random_state=42)

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
predictions = model.predict(X_test)

print(accuracy_score(y_test, predictions))
print(precision_score(y_test, predictions))
print(recall_score(y_test, predictions))</pre>
    <p><code>confusion_matrix</code> gives you all four outcome counts (TN, FP, FN, TP) at once:</p>
    <pre class="code-block">from sklearn.metrics import confusion_matrix
tn, fp, fn, tp = confusion_matrix(y_test, predictions).ravel()
print(tn, fp, fn, tp)</pre>
    <h3>Let's break down why this matters</h3>
    <ul>
      <li>Every metric function takes the SAME two arguments — real answers first, predictions second:
        <code>metric(y_test, predictions)</code>.</li>
      <li>On this specific data, precision comes out HIGHER than recall — the model's "yes" predictions are all
        genuinely correct (precision), but it MISSES some real "yes" cases entirely (lower recall). Accuracy alone
        would hide this difference.</li>
      <li><code>confusion_matrix(...).ravel()</code> flattens the 2×2 grid into four plain numbers, in the fixed
        order true-negative, false-positive, false-negative, true-positive — the exact same four boxes from the
        Machine Learning track's TP/FP/TN/FN, just computed by a library function.</li>
    </ul>`,
  sandboxStarter:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,0,1,0,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.4, random_state=42)

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
predictions = model.predict(X_test)

print("accuracy:", accuracy_score(y_test, predictions))
print("precision:", precision_score(y_test, predictions))
print("recall:", recall_score(y_test, predictions))
`,
  sandboxStarter2:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import confusion_matrix

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,0,1,0,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.4, random_state=42)

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
predictions = model.predict(X_test)

tn, fp, fn, tp = confusion_matrix(y_test, predictions).ravel()
print("TN:", tn, "FP:", fp, "FN:", fn, "TP:", tp)
`,
  exercises:[
    {
      title:'Calculate accuracy with sklearn.metrics',
      desc:`Using hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]] and passed = [0,0,0,0,0,1,0,1,1,1], split with
        train_test_split(hours, passed, test_size=0.4, random_state=42), train a KNeighborsClassifier(n_neighbors=3)
        on X_train/y_train, predict on X_test, then calculate accuracy = accuracy_score(y_test, predictions).
        Assert that accuracy == 0.75.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,0,1,0,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.4, random_state=42)
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
predictions = model.predict(X_test)
# Calculate accuracy below
`,
      tests:[{type:'assert', expr:'accuracy == 0.75', label:'accuracy correctly equals 0.75'}]
    },
    {
      title:'Calculate precision',
      desc:`Using the same predictions and y_test, calculate precision = precision_score(y_test, predictions).
        Assert that precision == 1.0 — every student the model predicted would pass, genuinely did.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import precision_score
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,0,1,0,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.4, random_state=42)
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
predictions = model.predict(X_test)
# Calculate precision below
`,
      tests:[{type:'assert', expr:'precision == 1.0', label:'precision correctly equals 1.0'}]
    },
    {
      title:'Calculate recall',
      desc:`Using the same predictions and y_test, calculate recall = recall_score(y_test, predictions). Assert
        that recall == 0.5 — the model missed half of the students who really did pass.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import recall_score
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,0,1,0,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.4, random_state=42)
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
predictions = model.predict(X_test)
# Calculate recall below
`,
      tests:[{type:'assert', expr:'recall == 0.5', label:'recall correctly equals 0.5'}]
    },
    {
      title:'Compare precision and recall',
      desc:`Using precision = 1.0 and recall = 0.5, calculate precision_higher: whether precision is greater than
        recall. Assert that precision_higher == True — this model's "yes" predictions are trustworthy (precision),
        but it misses real passes too often (lower recall).`,
      starter:`precision = 1.0
recall = 0.5
# Calculate precision_higher below
`,
      tests:[{type:'assert', expr:'precision_higher == True', label:'precision_higher correctly equals True'}]
    },
    {
      title:'Combine precision and recall with f1_score',
      desc:`Using the same predictions and y_test, calculate f1 = f1_score(y_test, predictions). Assert that
        round(f1, 4) == 0.6667.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import f1_score
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,0,1,0,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.4, random_state=42)
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
predictions = model.predict(X_test)
# Calculate f1 below
`,
      tests:[{type:'assert', expr:'round(f1, 4) == 0.6667', label:'f1 correctly rounds to 0.6667'}]
    },
    {
      title:'See all four counts with confusion_matrix',
      desc:`Using the same predictions and y_test, calculate tn, fp, fn, tp =
        confusion_matrix(y_test, predictions).ravel(). Assert that tn == 2, fp == 0, fn == 1, and tp == 1.`,
      starter:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import confusion_matrix
hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,0,1,0,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.4, random_state=42)
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
predictions = model.predict(X_test)
# Calculate tn, fp, fn, tp below
`,
      tests:[
        {type:'assert', expr:'tn == 2', label:'tn correctly equals 2'},
        {type:'assert', expr:'fp == 0', label:'fp correctly equals 0'},
        {type:'assert', expr:'fn == 1', label:'fn correctly equals 1'},
        {type:'assert', expr:'tp == 1', label:'tp correctly equals 1'}
      ]
    }
  ],
  quiz:[
    {
      q:'Why might accuracy alone be misleading?',
      options:['Accuracy is never misleading','A model can have high precision (trustworthy "yes" predictions) while still missing many real "yes" cases (low recall) — accuracy alone hides this','Accuracy always equals precision','Accuracy cannot be calculated automatically'],
      correct:1,
      explain:'A model can look "mostly right" by accuracy while still having a real, hidden weakness that precision or recall would reveal.'
    },
    {
      q:'What arguments does every sklearn.metrics function take, in order?',
      options:['predictions, then real answers','The real answers first, then the predictions','Only the model object','The training data'],
      correct:1,
      explain:'Every metric function is called as metric(y_test, predictions) — real answers first.'
    },
    {
      q:'What does confusion_matrix(...).ravel() return, and in what order?',
      options:['A single accuracy number','Four numbers in a fixed order: true-negative, false-positive, false-negative, true-positive','A random shuffle of the data','The model\'s coefficients'],
      correct:1,
      explain:'ravel() flattens the confusion matrix into (tn, fp, fn, tp), in that fixed order.'
    },
    {
      q:'What does f1_score represent?',
      options:['The same thing as accuracy','A single number combining precision and recall together','The total number of predictions','The training time'],
      correct:1,
      explain:'f1_score balances precision and recall into one combined number, useful when you care about both.'
    }
  ],
  sandboxStarter3:`from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

hours = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
passed = [0,0,0,0,0,1,0,1,1,1]
X_train, X_test, y_train, y_test = train_test_split(hours, passed, test_size=0.4, random_state=42)

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
predictions = model.predict(X_test)

for name, fn in [("accuracy", accuracy_score), ("precision", precision_score), ("recall", recall_score), ("f1", f1_score)]:
    print(name, "->", round(fn(y_test, predictions), 4))
`,
  stretchChallenge:{
    title:'Check f1_score against the formula',
    desc:`Using precision = 1.0 and recall = 0.5, calculate f1_manual = 2 * precision * recall / (precision + recall).
      Assert that round(f1_manual, 4) == 0.6667 — matching sklearn's own f1_score exactly.`,
    starter:`precision = 1.0
recall = 0.5
# Calculate f1_manual below
`,
    tests:[
      {type:'assert', expr:'round(f1_manual, 4) == 0.6667', label:'f1_manual correctly rounds to 0.6667'}
    ]
  }
},
{
  key:'week9', num:9, title:'Chaining It Together: a Simple Pipeline',
  scenarioTag:'Real world: encoding and predicting in one single step',
  scenario:`Every week so far has meant encoding first, THEN training, as two separate steps. scikit-learn's
    Pipeline chains steps together into a single object — encode, then classify, in one .fit() and one .predict()
    call. This week you'll build a Pipeline combining an encoder and a classifier, and see it behave like one
    single, self-contained model.`,
  objectives:[
    'Build a Pipeline combining an encoder step and a classifier step',
    'Fit and predict using the whole Pipeline as one single object',
    'Access a Pipeline\'s named steps directly',
    'Predict for a batch of new students using the combined Pipeline'
  ],
  conceptHtml:`
    <p><code>Pipeline</code> chains multiple steps into ONE object — each step's output feeds into the next:</p>
    <pre class="code-block">import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression

method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})

pipe = Pipeline([
    ("encoder", OneHotEncoder()),
    ("classifier", LogisticRegression())
])
pipe.fit(df[["method"]], df["passed"])
print(pipe.predict(pd.DataFrame({"method": ["solo"]})))</pre>
    <p>Notice there's no separate <code>get_dummies()</code> step anymore — the Pipeline's own
    <code>OneHotEncoder</code> does the encoding internally, automatically, every time you call
    <code>.fit()</code> or <code>.predict()</code>.</p>
    <h3>Let's break down the Pipeline code, line by line</h3>
    <ul>
      <li><code>Pipeline([("encoder", OneHotEncoder()), ("classifier", LogisticRegression())])</code> — a list of
        (name, step) pairs. Each name is just a label YOU choose, so you can refer back to that step later.</li>
      <li><code>pipe.fit(df[["method"]], df["passed"])</code> — ONE call runs both steps: first the encoder
        transforms the text into numbers, then the classifier trains on those numbers.</li>
      <li><code>pipe.predict(...)</code> — ONE call again: the SAME input passes through the SAME encoder, then
        the trained classifier, in order — you never have to remember to encode new data by hand.</li>
      <li><code>pipe.named_steps</code> — a dictionary letting you look up any step by the name you gave it, e.g.
        <code>pipe.named_steps["classifier"]</code> gets you directly at the LogisticRegression inside.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression

method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})

pipe = Pipeline([("encoder", OneHotEncoder()), ("classifier", LogisticRegression())])
pipe.fit(df[["method"]], df["passed"])
print("predict solo:", pipe.predict(pd.DataFrame({"method": ["solo"]})))
print("predict group:", pipe.predict(pd.DataFrame({"method": ["group"]})))
`,
  sandboxStarter2:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression

method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})

pipe = Pipeline([("encoder", OneHotEncoder()), ("classifier", LogisticRegression())])
pipe.fit(df[["method"]], df["passed"])
print("score:", pipe.score(df[["method"]], df["passed"]))
print("named steps:", list(pipe.named_steps.keys()))
`,
  exercises:[
    {
      title:'Build a Pipeline',
      desc:`Using method = ["solo","group","solo","group","solo","group","solo","group","solo","group"] and
        passed = [0,0,0,1,0,1,0,1,1,1], build df, then create pipe = Pipeline([("encoder", OneHotEncoder()),
        ("classifier", LogisticRegression())]) and fit it on df[["method"]] and df["passed"]. Assert that
        hasattr(pipe, "predict").`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})
# Build and fit pipe below
`,
      tests:[{type:'assert', expr:'hasattr(pipe, "predict")', label:'pipe has a predict method'}]
    },
    {
      title:'Predict with the whole pipeline at once',
      desc:`Using the pipe trained in the previous exercise, calculate
        prediction_solo = pipe.predict(pd.DataFrame({"method": ["solo"]}))[0]. Assert that prediction_solo == 0.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})
pipe = Pipeline([("encoder", OneHotEncoder()), ("classifier", LogisticRegression())])
pipe.fit(df[["method"]], df["passed"])
# Calculate prediction_solo below
`,
      tests:[{type:'assert', expr:'prediction_solo == 0', label:'prediction_solo correctly equals 0 (fail)'}]
    },
    {
      title:'Predict for the other category',
      desc:`Using the same pipe, calculate
        prediction_group = pipe.predict(pd.DataFrame({"method": ["group"]}))[0]. Assert that
        prediction_group == 1.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})
pipe = Pipeline([("encoder", OneHotEncoder()), ("classifier", LogisticRegression())])
pipe.fit(df[["method"]], df["passed"])
# Calculate prediction_group below
`,
      tests:[{type:'assert', expr:'prediction_group == 1', label:'prediction_group correctly equals 1 (pass)'}]
    },
    {
      title:'Score the pipeline',
      desc:`Using the same pipe, calculate score = pipe.score(df[["method"]], df["passed"]). Assert that
        round(score, 2) == 0.8.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})
pipe = Pipeline([("encoder", OneHotEncoder()), ("classifier", LogisticRegression())])
pipe.fit(df[["method"]], df["passed"])
# Calculate score below
`,
      tests:[{type:'assert', expr:'round(score, 2) == 0.8', label:'score correctly rounds to 0.8'}]
    },
    {
      title:'Check the pipeline\'s named steps',
      desc:`Using the same pipe, calculate step_names = list(pipe.named_steps.keys()). Assert that
        step_names == ["encoder", "classifier"].`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})
pipe = Pipeline([("encoder", OneHotEncoder()), ("classifier", LogisticRegression())])
pipe.fit(df[["method"]], df["passed"])
# Calculate step_names below
`,
      tests:[{type:'assert', expr:"step_names == ['encoder', 'classifier']", label:'step_names correctly equals [encoder, classifier]'}]
    },
    {
      title:'Predict for a batch using the pipeline',
      desc:`Using the same pipe, calculate batch_predictions = list(pipe.predict(pd.DataFrame({"method": ["solo",
        "group", "solo"]}))). Assert that batch_predictions == [0, 1, 0].`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})
pipe = Pipeline([("encoder", OneHotEncoder()), ("classifier", LogisticRegression())])
pipe.fit(df[["method"]], df["passed"])
# Calculate batch_predictions below
`,
      tests:[{type:'assert', expr:'batch_predictions == [0, 1, 0]', label:'batch_predictions correctly equals [0, 1, 0]'}]
    }
  ],
  quiz:[
    {
      q:'What does a Pipeline do?',
      options:['Deletes unnecessary columns','Chains multiple steps (like an encoder and a classifier) into one single object, so .fit()/.predict() run all of them in order','Only works with one specific model type','Removes the need to import scikit-learn'],
      correct:1,
      explain:'Pipeline combines a sequence of steps so calling .fit() or .predict() once runs every step, in order.'
    },
    {
      q:'What does pipe.fit(X, y) do, if the pipeline has an encoder step and a classifier step?',
      options:['Only trains the classifier, ignoring the encoder','Runs the encoder to transform X, then trains the classifier on the transformed result — all in one call','Fits the encoder only','Raises an error — pipelines cannot be fit'],
      correct:1,
      explain:'A single .fit() call runs every step in sequence, feeding each step\'s output into the next.'
    },
    {
      q:'How do you look up a specific step inside a Pipeline by name?',
      options:['pipe.named_steps["name"]','You cannot access individual steps once combined','pipe.steps_by_name()','Only by counting positions'],
      correct:0,
      explain:'named_steps is a dictionary mapping the name you chose for each step to that actual step object.'
    },
    {
      q:'Why is a Pipeline useful, compared to encoding and training as two separate steps?',
      options:['It is not useful, they work identically either way','New data automatically goes through the SAME encoding before prediction — you never risk forgetting to encode new data the same way','Pipelines are always more accurate','Pipelines only work with numeric data'],
      correct:1,
      explain:'Bundling encoding and prediction into one object guarantees new data is always transformed consistently before being predicted on.'
    }
  ],
  sandboxStarter3:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression

method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})

pipe = Pipeline([("encoder", OneHotEncoder()), ("classifier", LogisticRegression())])
pipe.fit(df[["method"]], df["passed"])

new_students = pd.DataFrame({"method": ["solo", "group", "solo", "group"]})
predictions = pipe.predict(new_students)
for m, p in zip(new_students["method"], predictions):
    print(m, "-> predicted:", p)
`,
  stretchChallenge:{
    title:'Predict for a longer batch',
    desc:`Using the same pipe, calculate long_predictions = list(pipe.predict(pd.DataFrame({"method": ["group",
      "group", "solo", "solo"]}))). Assert that long_predictions == [1, 1, 0, 0].`,
    starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"method": method, "passed": passed})
pipe = Pipeline([("encoder", OneHotEncoder()), ("classifier", LogisticRegression())])
pipe.fit(df[["method"]], df["passed"])
# Calculate long_predictions below
`,
    tests:[
      {type:'assert', expr:'long_predictions == [1, 1, 0, 0]', label:'long_predictions correctly equals [1, 1, 0, 0]'}
    ]
  }
}
];

const ML_MP1 = {
  key:'mp1',
  title:'Mini Project 1 — Build a Resit Predictor Pipeline',
  intro:`The school has resit exam data for a class of 10 students: hours revised and their actual resit score.
    You'll build this into a real DataFrame, then use it to answer two different questions: will they pass (a
    classifier), and what exact score will they get (a regressor) — three stages combining everything from
    Weeks 1-4.`,
  newTrick:`Building ONE DataFrame that feeds TWO completely different kinds of models — a classifier answering
    "pass or fail?" and a regressor answering "what exact score?" — showing the same data can support different
    questions depending on what you ask of it.`,
  stages:[
    {
      key:'a', title:'Stage A — Build the resit DataFrame',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10] and resit_score = [38, 44, 50, 55, 60, 66, 70, 76, 82, 88], create
        a DataFrame df with both columns, then add a "passed" column: 1 if resit_score >= 60, else 0 (hint:
        (df["resit_score"] >= 60).astype(int)). Assert that df["passed"].sum() == 6.`,
      starter:`import pandas as pd
hours = [1,2,3,4,5,6,7,8,9,10]
resit_score = [38, 44, 50, 55, 60, 66, 70, 76, 82, 88]
# Create df with hours, resit_score, and passed columns below
`,
      tests:[{type:'assert', expr:'df["passed"].sum() == 6', label:'df["passed"].sum() correctly equals 6'}]
    },
    {
      key:'b', title:'Stage B — Split and score a classifier',
      desc:`Using df from Stage A, split X = df[["hours"]] and y = df["passed"] with
        train_test_split(X, y, test_size=0.3, random_state=42), train a LogisticRegression on the training
        portion, then calculate clf_score = model.score(X_test, y_test). Assert that clf_score == 1.0.`,
      starter:`import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
hours = [1,2,3,4,5,6,7,8,9,10]
resit_score = [38, 44, 50, 55, 60, 66, 70, 76, 82, 88]
df = pd.DataFrame({"hours": hours, "resit_score": resit_score})
df["passed"] = (df["resit_score"] >= 60).astype(int)
# Split X/y, train a LogisticRegression, then calculate clf_score below
`,
      tests:[{type:'assert', expr:'clf_score == 1.0', label:'clf_score correctly equals 1.0'}]
    },
    {
      key:'c', title:'Stage C — Train and score a regressor for comparison',
      desc:`Using df from before, split X = df[["hours"]] and y = df["resit_score"] with the SAME
        train_test_split(X, y, test_size=0.3, random_state=42) call, train a LinearRegression on the training
        portion, predict on X_test, then calculate mae = mean_absolute_error(y_test, predictions). Assert that
        round(mae, 2) == 0.28 — a very small average error, since resit_score and hours are closely related here.`,
      starter:`import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error
hours = [1,2,3,4,5,6,7,8,9,10]
resit_score = [38, 44, 50, 55, 60, 66, 70, 76, 82, 88]
df = pd.DataFrame({"hours": hours, "resit_score": resit_score})
# Split X/y (predicting resit_score this time), train a LinearRegression, predict, then calculate mae below
`,
      tests:[{type:'assert', expr:'round(mae, 2) == 0.28', label:'mae correctly rounds to 0.28'}]
    }
  ]
};

const ML_MP2 = {
  key:'mp2',
  title:'Mini Project 2 — The School AutoML Lab',
  intro:`The school wants a real pass/fail predictor using everything available: hours revised, attendance, AND
    how a student studies (solo or in a group). Three doors: build the full multi-feature, encoded dataset, then
    compare two different model types on the same split, then wrap the categorical signal in a Pipeline to see
    how it stacks up against the fuller feature set.`,
  fixtureNote:`All three doors build on this same class of 10 students:`,
  fixtureCode:`hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [60,65,70,90,60,95,65,85,90,95]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]`,
  doors:[
    {
      key:'a', title:'Door 1 — Build the full feature set',
      desc:`Using hours, attendance, method, and passed above, create df with all four as columns. Calculate
        dummies = pd.get_dummies(df["method"]).astype(int), then X = pd.concat([df[["hours", "attendance"]],
        dummies], axis=1). Assert that len(X.columns) == 4.`,
      starter:`import pandas as pd
hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [60,65,70,90,60,95,65,85,90,95]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
# Create df, dummies, and X below
`,
      tests:[{type:'assert', expr:'len(X.columns) == 4', label:'X correctly has 4 columns'}]
    },
    {
      key:'b', title:'Door 2 — Compare two models on the same split',
      desc:`Using X and y = df["passed"] from Door 1, split with train_test_split(X, y, test_size=0.3,
        random_state=42). Train BOTH a LogisticRegression called logit AND a KNeighborsClassifier(n_neighbors=3)
        called knn on X_train/y_train. Calculate logit_score = logit.score(X_test, y_test) and
        knn_score = knn.score(X_test, y_test). Assert that logit_score == 1.0 and knn_score == 1.0.`,
      starter:`import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [60,65,70,90,60,95,65,85,90,95]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
dummies = pd.get_dummies(df["method"]).astype(int)
X = pd.concat([df[["hours", "attendance"]], dummies], axis=1)
y = df["passed"]
# Split X/y, train logit and knn, then calculate logit_score and knn_score below
`,
      tests:[
        {type:'assert', expr:'logit_score == 1.0', label:'logit_score correctly equals 1.0'},
        {type:'assert', expr:'knn_score == 1.0', label:'knn_score correctly equals 1.0'}
      ]
    },
    {
      key:'c', title:'Door 3 — Wrap the category alone in a Pipeline',
      desc:`Using df from before, build pipe = Pipeline([("encoder", OneHotEncoder()), ("classifier",
        LogisticRegression())]) and fit it on df[["method"]] and df["passed"] ONLY (no hours or attendance this
        time). Calculate pipe_score = pipe.score(df[["method"]], df["passed"]). Assert that
        round(pipe_score, 2) == 0.8 — using the study-method category alone doesn't capture the full picture that
        combining hours, attendance, AND method together does.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LogisticRegression
hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [60,65,70,90,60,95,65,85,90,95]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,1,0,1,0,1,1,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
# Build and fit pipe on df[["method"]]/df["passed"] only, then calculate pipe_score below
`,
      tests:[{type:'assert', expr:'round(pipe_score, 2) == 0.8', label:'pipe_score correctly rounds to 0.8'}]
    }
  ]
};

/* =========================================================================
   AutoML Academy — Intermediate level
   Focus: making models more robust — feature scaling, stronger model types
   (RandomForest), handling missing data automatically, fair evaluation with
   cross-validation, mixed numeric/categorical preprocessing, detailed
   evaluation reports, basic hyperparameter search, systematic model
   comparison, and cleaner end-to-end pipelines.
   ========================================================================= */

const ML_INTERMEDIATE_WEEKS = [
{
  key:'week1', num:1, title:'Scaling Features: StandardScaler',
  scenarioTag:'Real world: attendance percentage is quietly drowning out hours studied',
  scenario:`A model uses two clues to predict pass/fail: hours studied (roughly 1-10) and attendance percentage
    (roughly 50-98). Distance-based models like KNeighborsClassifier measure "closeness" using raw numbers — and a
    difference of 40 in attendance looks far bigger than a difference of 8 in hours, even though both matter.
    StandardScaler puts every feature on the same footing before the model ever sees it.`,
  objectives:[
    'Scale features with StandardScaler',
    'Read a scaler\'s learned mean_ and scale_ attributes',
    'Fit a scaler on training data only, then transform test data with the SAME scaler',
    'Combine a scaler and a model in one Pipeline'
  ],
  conceptHtml:`
    <p><strong>StandardScaler</strong> rescales each feature so it has a mean of 0 and a standard deviation of 1 —
    "how many standard deviations from average" instead of raw units:</p>
    <pre class="code-block">from sklearn.preprocessing import StandardScaler

X = [[1, 50], [2, 55], [3, 60], [7, 90], [8, 95], [9, 98]]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print(scaler.mean_)    # [5.0, 74.67] — the average of each column
print(scaler.scale_)   # [3.11, 20.01] — the spread of each column</pre>
    <p>Once fitted, <code>scaler.transform()</code> (not <code>fit_transform</code>) applies that SAME learned
    scale to new data — critical when scaling test data, so the test set is judged against the training set's
    scale, not its own:</p>
    <pre class="code-block">new_sample = [[5, 75]]
print(scaler.transform(new_sample))   # [[0.0, 0.017]] — 5 hours is exactly average, so it scales to 0</pre>
    <h3>Let's break down the key distinction, line by line</h3>
    <ul>
      <li><code>fit_transform(X)</code> — learns the mean/spread FROM X, then immediately scales X using what it
        just learned. Use this ONCE, on training data.</li>
      <li><code>transform(new_data)</code> — applies an ALREADY-LEARNED scale to new data, without re-learning
        anything. Use this for test data or any new sample — re-fitting on test data would let the test set's own
        statistics leak into the process, which isn't a fair test.</li>
      <li><code>scaler.mean_</code> / <code>scaler.scale_</code> — read back exactly what the scaler learned, one
        value per feature column.</li>
      <li>A <code>Pipeline</code> chains a scaler and a model together as one object — call <code>.fit()</code>
        once, and both fitting steps happen in the right order automatically.</li>
    </ul>`,
  sandboxStarter:`from sklearn.preprocessing import StandardScaler
X = [[1, 50], [2, 55], [3, 60], [7, 90], [8, 95], [9, 98]]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print(scaler.mean_)
print(scaler.scale_)
`,
  sandboxStarter2:`from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import Pipeline

hours = [1,2,3,4,5,6,7,8,9,2,3,8]
attendance = [50,55,60,65,70,60,90,95,98,52,58,92]
passed = [0,0,0,0,0,0,1,1,1,0,0,1]
X = list(zip(hours, attendance))

pipe = Pipeline([("scaler", StandardScaler()), ("knn", KNeighborsClassifier(n_neighbors=3))])
pipe.fit(X, passed)
print(pipe.predict([[1, 90]]))
`,
  exercises:[
    {
      title:'Check the learned mean',
      desc:`Create X = [[1, 50], [2, 55], [3, 60], [7, 90], [8, 95], [9, 98]]. Create scaler = StandardScaler(),
        then X_scaled = scaler.fit_transform(X). Print round(scaler.mean_[0], 1). It should print 5.0.`,
      starter:`from sklearn.preprocessing import StandardScaler
# Create X, scaler and X_scaled below
`,
      tests:[{type:'output', contains:['5.0'], label:"Prints the correctly learned mean for the first feature (5.0)"}]
    },
    {
      title:'Check the learned spread',
      desc:`Using the same X and scaler, print round(scaler.scale_[0], 2). It should print 3.11.`,
      starter:`from sklearn.preprocessing import StandardScaler
X = [[1, 50], [2, 55], [3, 60], [7, 90], [8, 95], [9, 98]]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
# Print round(scaler.scale_[0], 2) below
`,
      tests:[{type:'output', contains:['3.11'], label:"Prints the correctly learned spread for the first feature (3.11)"}]
    },
    {
      title:'Transform a brand new sample',
      desc:`Using the same X, create scaler = StandardScaler() and scaler.fit(X) (fit only, no transform yet).
        Create new_sample = [[5, 75]] and scaled_new = scaler.transform(new_sample). Assert that
        round(float(scaled_new[0][0]), 2) == 0.0 — 5 hours is exactly the training average, so it scales to 0.`,
      starter:`from sklearn.preprocessing import StandardScaler
X = [[1, 50], [2, 55], [3, 60], [7, 90], [8, 95], [9, 98]]
# Create scaler, new_sample and scaled_new below
`,
      tests:[{type:'assert', expr:'round(float(scaled_new[0][0]), 2) == 0.0', label:'The new sample scales correctly to 0.0 (exactly average)'}]
    },
    {
      title:'Fit on train, transform test',
      desc:`Create Xtr = [[1,50],[2,55],[7,90],[8,95]] and Xte = [[3,60],[9,98]]. Create scaler = StandardScaler()
        and scaler.fit(Xtr) (fit on TRAIN only). Create Xte_scaled = scaler.transform(Xte). Assert that
        round(float(Xte_scaled[0][0]), 2) == -0.49.`,
      starter:`from sklearn.preprocessing import StandardScaler
# Create Xtr, Xte, scaler and Xte_scaled below
`,
      tests:[{type:'assert', expr:'round(float(Xte_scaled[0][0]), 2) == -0.49', label:'The test set is correctly scaled using the training set\'s learned scale'}]
    },
    {
      title:'Use fit_transform then transform, not two separate fits',
      desc:`Create Xtr = [[1,50],[2,55],[7,90],[8,95]] and Xte = [[3,60],[9,98]]. Create scaler = StandardScaler(),
        then Xtr_scaled = scaler.fit_transform(Xtr) and Xte_scaled = scaler.transform(Xte) — the SAME scaler
        object for both, not a new one for Xte. Assert that round(float(Xte_scaled[0][0]), 2) == -0.49.`,
      starter:`from sklearn.preprocessing import StandardScaler
# Create Xtr, Xte, scaler, Xtr_scaled and Xte_scaled below
`,
      tests:[{type:'assert', expr:'round(float(Xte_scaled[0][0]), 2) == -0.49', label:'Test data is correctly scaled with the training scaler, not a freshly-fit one'}]
    },
    {
      title:'Prove scaling changes the prediction',
      desc:`Create hours = [1,2,3,4,5,6,7,8,9,2,3,8], attendance = [50,55,60,65,70,60,90,95,98,52,58,92], and
        passed = [0,0,0,0,0,0,1,1,1,0,0,1]. Create X = list(zip(hours, attendance)). Build
        pipe = Pipeline([("scaler", StandardScaler()), ("knn", KNeighborsClassifier(n_neighbors=3))]), fit it on
        X/passed, then create pred = int(pipe.predict([[1, 90]])[0]) — a student with only 1 hour studied but 90%
        attendance. Assert that pred == 0 — scaling correctly lets low hours outweigh high attendance, predicting
        a fail.`,
      starter:`from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import Pipeline
# Create hours, attendance, passed, X, pipe and pred below
`,
      tests:[{type:'assert', expr:'pred == 0', label:'Scaling correctly lets hours studied outweigh attendance for this student'}]
    }
  ],
  quiz:[
    {
      q:'What does StandardScaler do to a feature?',
      options:['Deletes it','Rescales it to have a mean of 0 and a standard deviation of 1','Rounds it to the nearest integer','Sorts the data'],
      correct:1,
      explain:'StandardScaler transforms each feature onto a common "how many standard deviations from average" scale.'
    },
    {
      q:'Why do distance-based models like KNeighborsClassifier need scaled features?',
      options:['They don\'t, scaling never matters','A feature with a naturally larger numeric range can dominate the distance calculation even if it isn\'t actually more important','Scaling makes the model train faster, nothing else','Only true for regression models'],
      correct:1,
      explain:'Without scaling, a feature like attendance (50-98) can swamp a feature like hours (1-10) purely due to its larger raw numbers.'
    },
    {
      q:'What is the difference between fit_transform() and transform()?',
      options:['No difference, they do the same thing','fit_transform() learns AND applies the scale in one step; transform() applies an already-learned scale without re-learning','transform() is only for training data','fit_transform() is deprecated'],
      correct:1,
      explain:'fit_transform() is for training data (learn + apply); transform() reuses an existing fit on new data (like test data), avoiding data leakage.'
    },
    {
      q:'Why fit a scaler on training data only, not on the full dataset (train + test)?',
      options:['It\'s not actually necessary','Fitting on the full dataset lets test-set statistics leak into training, making evaluation unfairly optimistic','It\'s faster to fit on less data','Test data doesn\'t need scaling at all'],
      correct:1,
      explain:'The test set is supposed to represent unseen data — if its own statistics helped shape the scaler, the evaluation is no longer a fair test.'
    }
  ],
  sandboxStarter3:`from sklearn.preprocessing import StandardScaler
Xtr = [[1,50],[2,55],[7,90],[8,95]]
Xte = [[3,60],[9,98]]
scaler = StandardScaler()
Xtr_scaled = scaler.fit_transform(Xtr)
Xte_scaled = scaler.transform(Xte)
print(Xte_scaled)
`,
  stretchChallenge:{
    title:'Scale, train, and score end to end',
    desc:`Create hours = [1,2,3,4,5,6,7,8,9,2,3,8], attendance = [50,55,60,65,70,60,90,95,98,52,58,92], and
      passed = [0,0,0,0,0,0,1,1,1,0,0,1]. Create X = list(zip(hours, attendance)). Split it manually:
      Xtr = X[:9], ytr = passed[:9], Xte = X[9:], yte = passed[9:]. Create scaler = StandardScaler(),
      Xtr_scaled = scaler.fit_transform(Xtr), and Xte_scaled = scaler.transform(Xte). Create
      model = KNeighborsClassifier(n_neighbors=3), fit it on Xtr_scaled/ytr, then create
      score = model.score(Xte_scaled, yte). Assert that score == 1.0.`,
    starter:`from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
# Create hours, attendance, passed, X, the train/test split, scaler, model and score below
`,
    tests:[
      {type:'assert', expr:'score == 1.0', label:'The full scale-train-score pipeline correctly achieves a perfect held-out score'}
    ]
  }
},
{
  key:'week2', num:2, title:'A Stronger Tree: RandomForestClassifier',
  scenarioTag:'Real world: one decision tree can be a bit too opinionated',
  scenario:`A single DecisionTreeClassifier can latch onto quirks in the training data that don't generalise well.
    A RandomForestClassifier trains many trees on slightly different slices of the data and lets them vote — the
    same "swap the model" pattern from the Beginner level, just with a sturdier model type.`,
  objectives:[
    'Train a RandomForestClassifier with the same fit/predict/score interface',
    'Read the number of trees it built via .estimators_',
    'Confirm a random forest\'s prediction on a new sample',
    'Check that .feature_importances_ exists for every feature used'
  ],
  conceptHtml:`
    <p><code>RandomForestClassifier</code> follows the exact same interface as every other scikit-learn model —
    <code>.fit()</code>, <code>.predict()</code>, <code>.score()</code> — the "swap the model" pattern from the
    Beginner level:</p>
    <pre class="code-block">from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1]
X = [[h] for h in hours]

model = RandomForestClassifier(n_estimators=50, random_state=42)
model.fit(X, passed)
print(model.predict([[6]]))   # [1]</pre>
    <p>Under the hood, it's actually training MANY decision trees (<code>n_estimators</code> of them) on different
    random slices of the data, then having them vote on the final answer — hence "forest."</p>
    <h3>Let's break down what's different from a single tree</h3>
    <ul>
      <li><code>n_estimators=50</code> — how many individual trees to build and combine. More trees generally
        means a steadier, less quirky prediction (at the cost of more computation).</li>
      <li><code>random_state=42</code> — fixes the randomness used to build those trees, so the same code always
        produces the same forest — useful for reproducible results while learning.</li>
      <li><code>model.estimators_</code> — after fitting, this holds the actual list of individual trees that were
        built; <code>len(model.estimators_)</code> equals <code>n_estimators</code>.</li>
      <li><code>model.feature_importances_</code> — one number per input feature, showing roughly how much each
        one contributed to the forest's decisions (used more deeply in the Advanced level).</li>
    </ul>`,
  sandboxStarter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1]
X = [[h] for h in hours]
model = RandomForestClassifier(n_estimators=50, random_state=42)
model.fit(X, passed)
print(model.predict([[6]]))
`,
  sandboxStarter2:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1]
X = [[h] for h in hours]
Xtr, Xte, ytr, yte = train_test_split(X, passed, test_size=0.3, random_state=42)
model = RandomForestClassifier(n_estimators=50, random_state=42)
model.fit(Xtr, ytr)
print(round(model.score(Xte, yte), 2))
`,
  exercises:[
    {
      title:'Train and predict with a random forest',
      desc:`Create hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9] and passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1]. Create
        X = [[h] for h in hours]. Create model = RandomForestClassifier(n_estimators=50, random_state=42), fit it
        on X/passed, then create pred = int(model.predict([[6]])[0]). Assert that pred == 1.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
# Create hours, passed, X, model and pred below
`,
      tests:[{type:'assert', expr:'pred == 1', label:'The forest correctly predicts a pass for 6 hours studied'}]
    },
    {
      title:'Score on a held-out split',
      desc:`Using the same hours/passed/X, split with
        Xtr, Xte, ytr, yte = train_test_split(X, passed, test_size=0.3, random_state=42). Create
        model = RandomForestClassifier(n_estimators=50, random_state=42), fit it on Xtr/ytr, then create
        score = round(model.score(Xte, yte), 2). Assert that score == 0.8.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1]
X = [[h] for h in hours]
# Create the split, model and score below
`,
      tests:[{type:'assert', expr:'score == 0.8', label:'The held-out score is correctly computed (0.8)'}]
    },
    {
      title:'Swap the model, keep the pattern',
      desc:`Using the same hours/passed/X, create model = RandomForestClassifier(n_estimators=50, random_state=42)
        and fit it. Create model_type = type(model).__name__. Assert that model_type == "RandomForestClassifier"
        — the exact same fit/predict pattern as DecisionTreeClassifier, just a different class.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1]
X = [[h] for h in hours]
# Create model and model_type below
`,
      tests:[{type:'assert', expr:'model_type == "RandomForestClassifier"', label:'The model is correctly a RandomForestClassifier'}]
    },
    {
      title:'Check a perfect training score',
      desc:`Using the same hours/passed/X, create model = RandomForestClassifier(n_estimators=50, random_state=42)
        and fit it on X/passed. Assert that model.score(X, passed) == 1.0 — a forest fit and scored on the SAME
        data it trained on should classify every training example correctly.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1]
X = [[h] for h in hours]
# Create model below
`,
      tests:[{type:'assert', expr:'model.score(X, passed) == 1.0', label:"The forest correctly scores 1.0 on its own training data"}]
    },
    {
      title:'Count how many trees were built',
      desc:`Using the same hours/passed/X, create model = RandomForestClassifier(n_estimators=50, random_state=42)
        and fit it. Create tree_count = len(model.estimators_). Assert that tree_count == 50.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1]
X = [[h] for h in hours]
# Create model and tree_count below
`,
      tests:[{type:'assert', expr:'tree_count == 50', label:'The forest correctly built 50 trees'}]
    },
    {
      title:'Check feature importances exist for every feature',
      desc:`Create hours = [1,2,3,4,5,6,7,8,9,10], attendance = [50,55,60,65,70,80,85,90,95,98], and
        passed = [0,0,0,0,0,1,1,1,1,1]. Create X = list(zip(hours, attendance)). Create
        model = RandomForestClassifier(n_estimators=50, random_state=42), fit it on X/passed, then create
        num_features = len(model.feature_importances_). Assert that num_features == 2.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
# Create hours, attendance, passed, X, model and num_features below
`,
      tests:[{type:'assert', expr:'num_features == 2', label:'The forest correctly reports importances for both features'}]
    }
  ],
  quiz:[
    {
      q:'What does RandomForestClassifier actually build internally?',
      options:['A single, very large decision tree','Many individual decision trees, trained on different random slices of the data, that vote on the answer','A neural network','Nothing different from a single DecisionTreeClassifier'],
      correct:1,
      explain:'A random forest is an "ensemble" of many decision trees, each trained slightly differently, combined by voting.'
    },
    {
      q:'What does n_estimators control?',
      options:['How accurate the model is guaranteed to be','How many individual trees are built and combined','The maximum depth of each tree','The number of features used'],
      correct:1,
      explain:'n_estimators sets how many trees the forest builds — more trees generally means steadier predictions.'
    },
    {
      q:'Why is RandomForestClassifier considered "swapping the model, keeping the pattern"?',
      options:['It requires a totally different training process','It uses the exact same .fit()/.predict()/.score() interface as every other scikit-learn classifier','It only works with regression problems','It cannot be used with train_test_split'],
      correct:1,
      explain:'Every scikit-learn model shares the same fit/predict/score interface, so switching model classes barely changes your code.'
    },
    {
      q:'What does model.estimators_ hold after fitting a random forest?',
      options:['The predicted labels','The list of individual trees that make up the forest','The original training data','The feature names'],
      correct:1,
      explain:'.estimators_ is the actual collection of individual decision trees the forest trained — len() of it equals n_estimators.'
    }
  ],
  sandboxStarter3:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [50,55,60,65,70,80,85,90,95,98]
passed = [0,0,0,0,0,1,1,1,1,1]
X = list(zip(hours, attendance))
model = RandomForestClassifier(n_estimators=50, random_state=42)
model.fit(X, passed)
print(model.feature_importances_)
`,
  stretchChallenge:{
    title:'Score a random forest on two features',
    desc:`Create hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7],
      attendance = [50,55,60,62,68,72,85,90,95,98,52,58,92,88,61,64,75,80], and
      passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1]. Create X = list(zip(hours, attendance)). Split with
      Xtr, Xte, ytr, yte = train_test_split(X, passed, test_size=0.3, random_state=7). Create
      model = RandomForestClassifier(n_estimators=100, random_state=42), fit it on Xtr/ytr, then create
      score = round(model.score(Xte, yte), 2). Assert that score == 0.83.`,
    starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
# Create hours, attendance, passed, X, the split, model and score below
`,
    tests:[
      {type:'assert', expr:'score == 0.83', label:'The two-feature forest correctly achieves the expected held-out score (0.83)'}
    ]
  }
},
{
  key:'week3', num:3, title:'Filling Gaps Automatically: SimpleImputer',
  scenarioTag:'Real world: not every student\'s attendance got recorded',
  scenario:`Real data is never perfectly complete — a few students are missing an attendance percentage because a
    register wasn't submitted that week. Most scikit-learn models can't handle missing values (NaN) at all —
    SimpleImputer fills the gaps automatically with a sensible value, computed FROM the data itself.`,
  objectives:[
    'Fill missing values with SimpleImputer using the "mean" strategy',
    'Read back what value a fitted imputer learned via .statistics_',
    'Compare the "mean" and "median" strategies',
    'Fit an imputer on training data only, then transform test data with it'
  ],
  conceptHtml:`
    <p><code>SimpleImputer</code> replaces missing values (<code>NaN</code>) with a value computed from the rest
    of that column — by default, the column's mean:</p>
    <pre class="code-block">import numpy as np
from sklearn.impute import SimpleImputer

X = [[1, 50], [2, np.nan], [3, 60], [4, 70], [5, np.nan]]
imputer = SimpleImputer(strategy="mean")
X_filled = imputer.fit_transform(X)
print(X_filled[1][1])   # 60.0 — the average of 50, 60, 70</pre>
    <p>The <code>strategy</code> parameter controls HOW the fill value is chosen — <code>"mean"</code> (average),
    <code>"median"</code> (middle value, less swayed by outliers), <code>"most_frequent"</code>, or
    <code>"constant"</code>:</p>
    <pre class="code-block">imputer_median = SimpleImputer(strategy="median")</pre>
    <h3>Let's break down the key ideas, line by line</h3>
    <ul>
      <li><code>np.nan</code> — the standard "missing value" marker used throughout pandas/scikit-learn code.</li>
      <li><code>imputer.fit_transform(X)</code> — learns the fill value(s) FROM X (one per column), then
        immediately fills X's own gaps — same "fit once, on training data" idea as StandardScaler.</li>
      <li><code>imputer.statistics_</code> — after fitting, holds the actual learned fill value for each column,
        readable just like a scaler's <code>.mean_</code>.</li>
      <li>Just like StandardScaler, use <code>imputer.transform(new_data)</code> (not <code>fit_transform</code>)
        on test data, so the SAME learned fill values are reused — never let test-set gaps influence what "typical"
        looks like.</li>
    </ul>`,
  sandboxStarter:`import numpy as np
from sklearn.impute import SimpleImputer
X = [[1, 50], [2, np.nan], [3, 60], [4, 70], [5, np.nan]]
imputer = SimpleImputer(strategy="mean")
X_filled = imputer.fit_transform(X)
print(X_filled)
`,
  sandboxStarter2:`import numpy as np
from sklearn.impute import SimpleImputer
X = [[1, 50], [2, np.nan], [3, 60], [4, 200]]
imputer_mean = SimpleImputer(strategy="mean")
imputer_median = SimpleImputer(strategy="median")
print(imputer_mean.fit_transform(X)[1][1])
print(imputer_median.fit_transform(X)[1][1])
`,
  exercises:[
    {
      title:'Fill a missing value with the mean',
      desc:`Create X = [[1, 50], [2, np.nan], [3, 60], [4, 70], [5, np.nan]]. Create
        imputer = SimpleImputer(strategy="mean"), then X_filled = imputer.fit_transform(X). Create
        filled_value = round(float(X_filled[1][1]), 1). Assert that filled_value == 60.0 — the average of 50, 60,
        and 70.`,
      starter:`import numpy as np
from sklearn.impute import SimpleImputer
# Create X, imputer, X_filled and filled_value below
`,
      tests:[{type:'assert', expr:'filled_value == 60.0', label:'The missing value is correctly filled with the mean (60.0)'}]
    },
    {
      title:'Read the learned fill value',
      desc:`Using the same X, create imputer = SimpleImputer(strategy="mean") and imputer.fit(X). Create
        learned_value = round(float(imputer.statistics_[1]), 1). Assert that learned_value == 60.0.`,
      starter:`import numpy as np
from sklearn.impute import SimpleImputer
X = [[1, 50], [2, np.nan], [3, 60], [4, 70], [5, np.nan]]
# Create imputer and learned_value below
`,
      tests:[{type:'assert', expr:'learned_value == 60.0', label:"The imputer's learned fill value is correctly read (60.0)"}]
    },
    {
      title:'Compare mean vs median',
      desc:`Create X = [[1, 50], [2, np.nan], [3, 60], [4, 200]] — 200 is an outlier. Create
        imputer = SimpleImputer(strategy="median"), then X_filled = imputer.fit_transform(X). Create
        filled_value = round(float(X_filled[1][1]), 1). Assert that filled_value == 60.0 — the median (60) isn't
        dragged up by the 200 outlier the way a mean would be.`,
      starter:`import numpy as np
from sklearn.impute import SimpleImputer
# Create X, imputer, X_filled and filled_value below
`,
      tests:[{type:'assert', expr:'filled_value == 60.0', label:'The median-based fill correctly avoids being skewed by the outlier'}]
    },
    {
      title:'Confirm every gap is filled',
      desc:`Using X = [[1, 50], [2, np.nan], [3, 60], [4, 70], [5, np.nan]], create
        imputer = SimpleImputer(strategy="mean") and X_filled = imputer.fit_transform(X). Create
        has_missing = bool(np.isnan(X_filled).any()). Assert that has_missing == False — no NaN values remain.`,
      starter:`import numpy as np
from sklearn.impute import SimpleImputer
X = [[1, 50], [2, np.nan], [3, 60], [4, 70], [5, np.nan]]
# Create imputer, X_filled and has_missing below
`,
      tests:[{type:'assert', expr:'has_missing == False', label:'No missing values remain after imputation'}]
    },
    {
      title:'Fit on train, transform test',
      desc:`Create Xtr = [[1, 50], [2, np.nan], [3, 60]] and Xte = [[4, np.nan]]. Create
        imputer = SimpleImputer(strategy="mean") and imputer.fit(Xtr) (fit on TRAIN only). Create
        Xte_filled = imputer.transform(Xte). Create filled_value = round(float(Xte_filled[0][1]), 1). Assert that
        filled_value == 55.0 — the training set's average (50 and 60), reused for the test row.`,
      starter:`import numpy as np
from sklearn.impute import SimpleImputer
# Create Xtr, Xte, imputer, Xte_filled and filled_value below
`,
      tests:[{type:'assert', expr:'filled_value == 55.0', label:"The test row is correctly filled using the training set's learned average"}]
    },
    {
      title:'Combine an imputer with a model',
      desc:`Create hours = [1,2,3,4,5,6,7,8,9,10], attendance = [50, np.nan, 60, 65, 70, 80, 85, np.nan, 95, 98], and
        passed = [0,0,0,0,0,1,1,1,1,1]. Create X = list(zip(hours, attendance)). Build
        pipe = Pipeline([("imputer", SimpleImputer(strategy="mean")), ("rf", RandomForestClassifier(n_estimators=50,
        random_state=42))]), fit it on X/passed, then create pred = int(pipe.predict([[6, 75]])[0]). Assert that
        pred == 1.`,
      starter:`import numpy as np
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
# Create hours, attendance, passed, X, pipe and pred below
`,
      tests:[{type:'assert', expr:'pred == 1', label:'The imputer+model pipeline correctly handles the missing attendance values'}]
    }
  ],
  quiz:[
    {
      q:'What does SimpleImputer do?',
      options:['Deletes rows with missing values','Fills in missing values with a value computed from the rest of that column','Deletes columns with any missing data','Rounds all numbers'],
      correct:1,
      explain:'SimpleImputer replaces NaN values with a computed fill value (mean, median, etc.), keeping every row.'
    },
    {
      q:'When might "median" be a better strategy than "mean" for filling gaps?',
      options:['Never, mean is always better','When the column has outliers that would skew the mean upward or downward','Median only works on text columns','They always produce the same result'],
      correct:1,
      explain:'The median is the middle value, so it isn\'t dragged toward extreme outliers the way an average can be.'
    },
    {
      q:'What does imputer.statistics_ hold after fitting?',
      options:['The original data with gaps','The learned fill value for each column','A count of missing values','Nothing, this attribute doesn\'t exist'],
      correct:1,
      explain:'.statistics_ stores the actual value (e.g. the mean) that was learned and will be used to fill gaps in each column.'
    },
    {
      q:'Why fit an imputer on training data only, then use .transform() on test data?',
      options:['It doesn\'t matter which data you fit on','Fitting on test data would let the test set\'s own values leak into what counts as "typical", making evaluation unfair','.transform() is faster than fit_transform()','Test data never has missing values'],
      correct:1,
      explain:'Same data-leakage principle as StandardScaler — the test set should be treated as genuinely unseen when computing fill values.'
    }
  ],
  sandboxStarter3:`import numpy as np
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline

hours = [1,2,3,4,5,6,7,8,9,10]
attendance = [50, np.nan, 60, 65, 70, 80, 85, np.nan, 95, 98]
passed = [0,0,0,0,0,1,1,1,1,1]
X = list(zip(hours, attendance))

pipe = Pipeline([("imputer", SimpleImputer(strategy="mean")), ("rf", RandomForestClassifier(n_estimators=50, random_state=42))])
pipe.fit(X, passed)
print(pipe.predict([[6, 75]]))
`,
  stretchChallenge:{
    title:'Impute, scale, train, and score end to end',
    desc:`Create hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9] and
      attendance = [50, np.nan, 60, 65, 70, 80, 85, np.nan, 95, 98, 52, 58, 92, 88], and
      passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1]. Create X = list(zip(hours, attendance)). Split with
      Xtr, Xte, ytr, yte = train_test_split(X, passed, test_size=0.3, random_state=42). Build
      pipe = Pipeline([("imputer", SimpleImputer(strategy="mean")), ("scaler", StandardScaler()),
      ("knn", KNeighborsClassifier(n_neighbors=3))]), fit it on Xtr/ytr, then create
      score = round(pipe.score(Xte, yte), 2). Assert that score == 1.0.`,
    starter:`import numpy as np
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
# Create hours, attendance, passed, X, the split, pipe and score below
`,
    tests:[
      {type:'assert', expr:'score == 1.0', label:'The full impute-scale-train-score pipeline correctly achieves a perfect held-out score'}
    ]
  }
},
{
  key:'week4', num:4, title:'Fair Evaluation: cross_val_score',
  scenarioTag:'Real world: what if the one test split you happened to pick was a lucky (or unlucky) one?',
  scenario:`A single train_test_split gives ONE score — but which rows randomly land in the test set can make a
    model look better or worse than it really is. cross_val_score splits the data several different ways, scores
    the model on each split, and reports all of them — a far more trustworthy picture of real performance.`,
  objectives:[
    'Evaluate a model fairly with cross_val_score',
    'Read how many fold scores come back for a given cv value',
    'See how a single lucky/unlucky split can mislead, compared to cross-validation',
    'Cross-validate a full Pipeline, not just a bare model'
  ],
  conceptHtml:`
    <p><code>cross_val_score</code> handles the entire "split, train, score" cycle several times automatically,
    each time using a different slice of the data as the test set:</p>
    <pre class="code-block">from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score

model = RandomForestClassifier(n_estimators=50, random_state=42)
scores = cross_val_score(model, X, y, cv=5)
print(scores)          # [1.0, 1.0, 1.0, 1.0, 1.0] — one score per fold
print(scores.mean())   # 1.0 — the average, a fairer overall estimate</pre>
    <p>Compare that to a SINGLE train/test split — depending on which rows randomly land in the test set, the
    score you get can look much better or much worse than the model's true performance:</p>
    <pre class="code-block">Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=6)
model.fit(Xtr, ytr)
print(model.score(Xte, yte))   # 0.62 — a misleadingly low score, just from bad luck in this one split</pre>
    <h3>Let's break down cross_val_score, line by line</h3>
    <ul>
      <li><code>cv=5</code> — splits the data into 5 roughly equal chunks ("folds"). Each fold takes a turn being
        the test set, while the model trains on the other 4.</li>
      <li>The function handles the fitting and scoring for you internally — you don't call <code>.fit()</code>
        yourself first.</li>
      <li>The RETURNED array has one score per fold (so <code>cv=5</code> returns 5 numbers) — reading the spread
        of these numbers tells you how CONSISTENT the model's performance is, not just its average.</li>
      <li>You can pass a whole <code>Pipeline</code> (scaler + model, imputer + model, etc.) to
        <code>cross_val_score</code> exactly like a bare model — every step gets refit correctly on each fold.</li>
    </ul>`,
  sandboxStarter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
X = [[h] for h in hours]

model = RandomForestClassifier(n_estimators=50, random_state=42)
scores = cross_val_score(model, X, passed, cv=5)
print(scores)
print(scores.mean())
`,
  sandboxStarter2:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
X = [[h] for h in hours]

Xtr, Xte, ytr, yte = train_test_split(X, passed, test_size=0.3, random_state=6)
model = RandomForestClassifier(n_estimators=50, random_state=42)
model.fit(Xtr, ytr)
print(model.score(Xte, yte))
`,
  exercises:[
    {
      title:'Cross-validate a model',
      desc:`Create hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10] and
        passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]. Create X = [[h] for h in hours]. Create
        model = RandomForestClassifier(n_estimators=50, random_state=42), then
        scores = cross_val_score(model, X, passed, cv=5). Create cv_mean = round(float(scores.mean()), 2). Assert
        that cv_mean == 1.0.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
# Create hours, passed, X, model, scores and cv_mean below
`,
      tests:[{type:'assert', expr:'cv_mean == 1.0', label:'The cross-validated mean score is correctly computed (1.0)'}]
    },
    {
      title:'Count the folds',
      desc:`Using the same hours/passed/X and model, create scores = cross_val_score(model, X, passed, cv=5).
        Create fold_count = len(scores). Assert that fold_count == 5.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
X = [[h] for h in hours]
model = RandomForestClassifier(n_estimators=50, random_state=42)
# Create scores and fold_count below
`,
      tests:[{type:'assert', expr:'fold_count == 5', label:'cv=5 correctly produces 5 fold scores'}]
    },
    {
      title:'See a misleading single split',
      desc:`Using the same hours/passed/X, create Xtr, Xte, ytr, yte = train_test_split(X, passed, test_size=0.3,
        random_state=6). Create model1 = RandomForestClassifier(n_estimators=50, random_state=42), fit it on
        Xtr/ytr, then single_score = round(model1.score(Xte, yte), 2). Separately, create
        model2 = RandomForestClassifier(n_estimators=50, random_state=42) and
        cv_mean = round(float(cross_val_score(model2, X, passed, cv=5).mean()), 2). Assert that
        single_score == 0.62 and cv_mean == 1.0 — this ONE split happened to look much worse than the model
        truly performs.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
X = [[h] for h in hours]
# Create the split, model1, single_score, model2 and cv_mean below
`,
      tests:[{type:'assert', expr:'single_score == 0.62 and cv_mean == 1.0', label:'The single misleading split and the fairer cross-validated mean are both correct'}]
    },
    {
      title:'Check the weakest fold',
      desc:`Using the same hours/passed/X and model, create scores = cross_val_score(model, X, passed, cv=5).
        Create weakest = round(float(scores.min()), 2). Assert that weakest == 1.0 — even the WORST fold still
        scored perfectly here.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
X = [[h] for h in hours]
model = RandomForestClassifier(n_estimators=50, random_state=42)
# Create scores and weakest below
`,
      tests:[{type:'assert', expr:'weakest == 1.0', label:"The weakest fold's score is correctly read (1.0)"}]
    },
    {
      title:'Try 3 folds instead of 5',
      desc:`Using the same hours/passed/X and model, create scores = cross_val_score(model, X, passed, cv=3).
        Create fold_count = len(scores). Assert that fold_count == 3.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
X = [[h] for h in hours]
model = RandomForestClassifier(n_estimators=50, random_state=42)
# Create scores and fold_count below
`,
      tests:[{type:'assert', expr:'fold_count == 3', label:'cv=3 correctly produces 3 fold scores'}]
    },
    {
      title:'Cross-validate a whole pipeline',
      desc:`Create hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10],
        attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99], and
        passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]. Create X = list(zip(hours, attendance)). Build
        pipe = Pipeline([("scaler", StandardScaler()), ("rf", RandomForestClassifier(n_estimators=50,
        random_state=42))]). Create scores = cross_val_score(pipe, X, passed, cv=5). Create
        cv_mean = round(float(scores.mean()), 2). Assert that cv_mean == 1.0.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import cross_val_score
# Create hours, attendance, passed, X, pipe, scores and cv_mean below
`,
      tests:[{type:'assert', expr:'cv_mean == 1.0', label:'The full pipeline is correctly cross-validated (1.0)'}]
    }
  ],
  quiz:[
    {
      q:'Why can a single train_test_split give a misleading score?',
      options:['It never can, single splits are always accurate','Which rows randomly land in the test set can make the model look better or worse than its true performance','Splitting always gives the same result every time','Only true for regression, never classification'],
      correct:1,
      explain:'A single split is really just one sample of "how did this happen to go" — cross-validation averages over several such samples for a fairer picture.'
    },
    {
      q:'What does cv=5 mean in cross_val_score?',
      options:['Train the model 5 times on the same data','Split the data into 5 folds, each taking a turn as the test set while training on the rest','Only use 5 rows of data','Run the model for 5 seconds'],
      correct:1,
      explain:'cv=5 creates 5 folds; each one is held out as a test set once, while the model trains on the remaining folds.'
    },
    {
      q:'What does cross_val_score return?',
      options:['A single number','An array of scores, one per fold','The trained model itself','The original dataset'],
      correct:1,
      explain:'It returns one score per fold, letting you see both the average AND how consistent performance is across different splits.'
    },
    {
      q:'Can you pass a whole Pipeline (not just a bare model) into cross_val_score?',
      options:['No, only single models are supported','Yes — every step in the pipeline gets correctly refit on each fold','Only if the pipeline has no preprocessing steps','Pipelines must be cross-validated manually, one fold at a time'],
      correct:1,
      explain:'cross_val_score works with any scikit-learn estimator, including a full Pipeline — each fold gets its own properly-refit copy of every step.'
    }
  ],
  sandboxStarter3:`from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import cross_val_score

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

pipe = Pipeline([("scaler", StandardScaler()), ("rf", RandomForestClassifier(n_estimators=50, random_state=42))])
scores = cross_val_score(pipe, X, passed, cv=5)
print(scores)
print(round(scores.mean(), 2))
`,
  stretchChallenge:{
    title:'Cross-validate two different models',
    desc:`Create hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10],
      attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99], and
      passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]. Create X = list(zip(hours, attendance)). Create
      rf = RandomForestClassifier(n_estimators=50, random_state=42) and
      knn = KNeighborsClassifier(n_neighbors=3). Create rf_mean = round(float(cross_val_score(rf, X, passed,
      cv=5).mean()), 2) and knn_mean = round(float(cross_val_score(knn, X, passed, cv=5).mean()), 2). Assert that
      rf_mean == 1.0 and knn_mean == 1.0 — both model types perform equally well on this clean dataset.`,
    starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
# Create hours, attendance, passed, X, rf, knn, rf_mean and knn_mean below
`,
    tests:[
      {type:'assert', expr:'rf_mean == 1.0 and knn_mean == 1.0', label:'Both models are correctly cross-validated and compared'}
    ]
  }
},
{
  key:'week5', num:5, title:'Numeric and Categorical Together: ColumnTransformer',
  scenarioTag:'Real world: real school data is never all-numbers — some columns are categories like "solo" or "group".',
  scenario:`Hours and attendance are numbers that need scaling. But "study method" (solo or group) is a category —
    scaling doesn't make sense for it, it needs encoding instead. ColumnTransformer applies a DIFFERENT
    preprocessing step to each column, all in one call.`,
  objectives:[
    'Build a ColumnTransformer that scales numeric columns and encodes a categorical column at once',
    'Train a model on the combined, transformed features',
    'Confirm scaling and encoding were both genuinely applied',
    'Combine a ColumnTransformer with a model in one Pipeline'
  ],
  conceptHtml:`
    <p><code>ColumnTransformer</code> lets you point DIFFERENT preprocessing steps at DIFFERENT columns, and runs
    them all together, returning one combined array:</p>
    <pre class="code-block">from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder

ct = ColumnTransformer([
    ("num", StandardScaler(), ["hours", "attendance"]),
    ("cat", OneHotEncoder(), ["method"])
])
Xt = ct.fit_transform(df[["hours", "attendance", "method"]])
print(Xt.shape)   # (24, 4) — 2 scaled numeric columns + 2 one-hot category columns</pre>
    <h3>Let's break down ColumnTransformer, line by line</h3>
    <ul>
      <li>Each entry in the list is a 3-part tuple: <code>(name, transformer, columns)</code> — a label you choose,
        the preprocessing step to apply, and WHICH columns it applies to.</li>
      <li><code>"num"</code> applies <code>StandardScaler()</code> only to <code>["hours", "attendance"]</code> —
        the categorical column is completely untouched by this step.</li>
      <li><code>"cat"</code> applies <code>OneHotEncoder()</code> only to <code>["method"]</code> — turning each
        category into its own 0/1 column, exactly like Week 6's encoding, but scoped to just this one column.</li>
      <li><code>fit_transform</code> runs BOTH steps and glues the results together into one array — that's why
        the output has more columns than the input (each category becomes multiple 0/1 columns).</li>
      <li>You can feed <code>Xt</code> straight into any model's <code>.fit()</code> exactly like before — the
        model never needs to know some of its input used to be text.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group"]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method})

ct = ColumnTransformer([
    ("num", StandardScaler(), ["hours", "attendance"]),
    ("cat", OneHotEncoder(), ["method"])
])
Xt = ct.fit_transform(df)
print(Xt.shape)
print(Xt[0])
`,
  sandboxStarter2:`import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})

ct = ColumnTransformer([
    ("num", StandardScaler(), ["hours", "attendance"]),
    ("cat", OneHotEncoder(), ["method"])
])
Xt = ct.fit_transform(df[["hours", "attendance", "method"]])
model = RandomForestClassifier(n_estimators=50, random_state=42)
model.fit(Xt, df["passed"])
print(round(model.score(Xt, df["passed"]), 2))
`,
  exercises:[
    {
      title:'Build the combined transformer',
      desc:`Create hours, attendance, method (all 24 values, exactly as in the concept box), and put them in a
        DataFrame df with columns "hours", "attendance", "method". Build ct = ColumnTransformer([("num",
        StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])]). Create
        X = df[["hours", "attendance", "method"]] and Xt = ct.fit_transform(X). Create n_cols = Xt.shape[1].
        Assert that n_cols == 4.`,
      starter:`import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group"]
# Create df, ct, X, Xt and n_cols below
`,
      tests:[{type:'assert', expr:'n_cols == 4', label:'The transformed data correctly has 4 columns (2 scaled + 2 one-hot)'}]
    },
    {
      title:'Train a model on the combined features',
      desc:`Using Xt from before, create passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]. Create
        model = RandomForestClassifier(n_estimators=50, random_state=42), fit it on Xt/passed, then
        score = round(model.score(Xt, passed), 2). Assert that score == 1.0.`,
      starter:`import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group"]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method})
ct = ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])
Xt = ct.fit_transform(df[["hours", "attendance", "method"]])
# Create passed, model and score below
`,
      tests:[{type:'assert', expr:'score == 1.0', label:'The model correctly scores 1.0 on the combined features'}]
    },
    {
      title:'Confirm the numeric columns were really scaled',
      desc:`Using Xt from before, create first_hours_scaled = round(float(Xt[0][0]), 2). Assert that
        first_hours_scaled == -1.47 — proving the first student's hours value was genuinely standardized, not
        just passed through as the raw number 1.`,
      starter:`import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group"]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method})
ct = ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])
Xt = ct.fit_transform(df[["hours", "attendance", "method"]])
# Create first_hours_scaled below
`,
      tests:[{type:'assert', expr:'first_hours_scaled == -1.47', label:'The first row shows genuinely scaled hours (-1.47)'}]
    },
    {
      title:'Combine it all in one Pipeline',
      desc:`Create df with hours, attendance, method, passed (all as before) as columns. Create
        X = df[["hours", "attendance", "method"]] and y = df["passed"]. Build pipe = Pipeline([("prep",
        ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(),
        ["method"])])), ("rf", RandomForestClassifier(n_estimators=50, random_state=42))]), fit it directly on the
        RAW X (with the text column still in it) and y, then pipe_score = round(pipe.score(X, y), 2). Assert that
        pipe_score == 1.0.`,
      starter:`import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
# Create df, X, y, pipe and pipe_score below
`,
      tests:[{type:'assert', expr:'pipe_score == 1.0', label:'The full Pipeline correctly scores 1.0 fit directly on raw mixed data'}]
    },
    {
      title:'More categories, more columns',
      desc:`Create method3 = ["solo","group","pair","solo","group","pair","solo","group","pair","solo","group",
        "pair","solo","group","pair","solo","group","pair","solo","group","pair","solo","group","pair"] (three
        study methods instead of two). Create df3 with hours, attendance, method3 as columns (name the method3
        column "method"). Build ct3 the same way as before (StandardScaler on hours/attendance, OneHotEncoder on
        method), transform df3[["hours", "attendance", "method"]], and create n_cols3 = Xt3.shape[1]. Assert that
        n_cols3 == 5 — one more category means one more one-hot column.`,
      starter:`import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
method3 = ["solo","group","pair","solo","group","pair","solo","group","pair","solo","group","pair","solo","group","pair","solo","group","pair","solo","group","pair","solo","group","pair"]
# Create df3, ct3, Xt3 and n_cols3 below
`,
      tests:[{type:'assert', expr:'n_cols3 == 5', label:'Adding a third category correctly adds a 5th column'}]
    },
    {
      title:'Cross-validate the whole thing',
      desc:`Using df, X and y from the Pipeline exercise, build pipe the same way (a fresh ColumnTransformer
        wrapped with a fresh RandomForestClassifier(n_estimators=50, random_state=42) in a Pipeline). Create
        scores = cross_val_score(pipe, X, y, cv=5). Create cv_mean = round(float(scores.mean()), 2). Assert that
        cv_mean == 1.0.`,
      starter:`import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
# Create pipe, scores and cv_mean below
`,
      tests:[{type:'assert', expr:'cv_mean == 1.0', label:'The full pipeline cross-validates correctly (1.0)'}]
    }
  ],
  quiz:[
    {
      q:'What does ColumnTransformer let you do that a single StandardScaler or OneHotEncoder can\'t?',
      options:['Apply the SAME preprocessing step to every column','Apply DIFFERENT preprocessing steps to different columns in one combined call','Remove columns you don\'t want','Train a model directly, without any other step'],
      correct:1,
      explain:'ColumnTransformer routes each named group of columns to its own transformer, then glues the results together — exactly what mixed numeric+categorical data needs.'
    },
    {
      q:'In ColumnTransformer([("num", StandardScaler(), ["hours","attendance"]), ("cat", OneHotEncoder(), ["method"])]), what does the "num" and "cat" text do?',
      options:['They are required scikit-learn keywords','They are just labels you choose, to identify each step','They tell Python the data type of the column','They set the model\'s hyperparameters'],
      correct:1,
      explain:'The name in each tuple is an arbitrary label you pick — it has no special meaning to scikit-learn beyond identifying that step.'
    },
    {
      q:'Why does the transformed output have MORE columns than the original DataFrame?',
      options:['It always does, regardless of the data','Because OneHotEncoder turns one category column into multiple 0/1 columns, one per category','Because StandardScaler adds extra columns','It doesn\'t — the column count always stays the same'],
      correct:1,
      explain:'A single categorical column becomes one 0/1 column per category after one-hot encoding, so more categories means more resulting columns.'
    },
    {
      q:'Can a Pipeline combine a ColumnTransformer AND a model together?',
      options:['No, they must always be used separately','Yes — the ColumnTransformer becomes one step, the model becomes the next step, and .fit() runs both in order','Only if the ColumnTransformer has just one column','Only for regression models, not classifiers'],
      correct:1,
      explain:'Pipeline([("prep", ColumnTransformer(...)), ("model", SomeModel())]) lets you fit and predict directly on raw, mixed-type data in one call.'
    }
  ],
  sandboxStarter3:`import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]

pipe = Pipeline([
    ("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])),
    ("rf", RandomForestClassifier(n_estimators=50, random_state=42))
])
pipe.fit(X, y)
print(round(pipe.score(X, y), 2))
`,
  stretchChallenge:{
    title:'Does the category actually help?',
    desc:`Using df, X and y as before, build pipe_cat_only = Pipeline([("prep", ColumnTransformer([("cat",
      OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(n_estimators=50, random_state=42))]) and fit
      it on X[["method"]] and y ONLY. Calculate cat_only_score = round(pipe_cat_only.score(X[["method"]], y), 2).
      Separately, build pipe_full the same way as the earlier Pipeline exercise (numeric + categorical together)
      and fit it on the full X and y, calculating full_score = round(pipe_full.score(X, y), 2). Assert that
      cat_only_score == 0.67 and full_score == 1.0 — the study method alone doesn't capture nearly as much as
      combining it with hours and attendance.`,
    starter:`import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
method = ["solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group","solo","group"]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
# Create df, X, y, pipe_cat_only, cat_only_score, pipe_full and full_score below
`,
    tests:[
      {type:'assert', expr:'cat_only_score == 0.67 and full_score == 1.0', label:'Both the category-only and full-feature scores are correctly compared'}
    ]
  }
},
{
  key:'week6', num:6, title:'Reading the Full Report: classification_report',
  scenarioTag:'Real world: accuracy alone can hide a model that\'s bad at catching one specific class.',
  scenario:`The resit predictor ran on this term's group. Overall accuracy looks okay — but is it equally good at
    catching students who WILL pass as it is at catching students who WON'T? classification_report and
    confusion_matrix break a single accuracy number into the full picture.`,
  objectives:[
    'Read a confusion matrix\'s true/false positives and negatives',
    'Pull precision, recall, and f1-score for a specific class out of a classification_report',
    'Read support (how many actual examples of each class there were)',
    'Use precision_score directly and confirm it matches the report'
  ],
  conceptHtml:`
    <p><code>confusion_matrix</code> and <code>classification_report</code> both compare a model's predictions to
    what actually happened, but break it down far more than a single accuracy number:</p>
    <pre class="code-block">from sklearn.metrics import confusion_matrix, classification_report

cm = confusion_matrix(y_true, y_pred)
print(cm)
# [[5 1]
#  [3 5]]

report = classification_report(y_true, y_pred, output_dict=True)
print(report["1"]["precision"])   # 0.83 — of everyone predicted to pass, 83% actually did
print(report["1"]["recall"])      # 0.62 — of everyone who actually passed, only 62% were caught</pre>
    <h3>Let's break down what each piece means</h3>
    <ul>
      <li>In the confusion matrix, row = the ACTUAL class, column = the PREDICTED class. So
        <code>cm[1][1]</code> (bottom-right) is true positives — actually passed AND predicted to pass.</li>
      <li><code>cm[0][1]</code> is a false positive — actually failed, but predicted to pass (a false alarm).
        <code>cm[1][0]</code> is a false negative — actually passed, but predicted to fail (a miss).</li>
      <li><code>classification_report(..., output_dict=True)</code> returns a nested dictionary, keyed by class
        label as a STRING (<code>"0"</code>, <code>"1"</code>), then by metric name.</li>
      <li><b>precision</b> answers "of everyone I predicted positive, how many actually were?" — high precision
        means few false alarms. <b>recall</b> answers "of everyone actually positive, how many did I catch?" —
        high recall means few misses. A model can be strong on one and weak on the other.</li>
      <li><code>report["1"]["support"]</code> tells you how many students in the data actually belonged to class
        1 — useful context for whether a percentage is based on a handful of students or hundreds.</li>
    </ul>`,
  sandboxStarter:`from sklearn.metrics import confusion_matrix

y_true = [1,1,1,1,1,1,1,1, 0,0,0,0,0,0]
y_pred = [1,1,1,1,1,0,0,0, 1,0,0,0,0,0]

cm = confusion_matrix(y_true, y_pred)
print(cm)
`,
  sandboxStarter2:`from sklearn.metrics import classification_report

y_true = [1,1,1,1,1,1,1,1, 0,0,0,0,0,0]
y_pred = [1,1,1,1,1,0,0,0, 1,0,0,0,0,0]

print(classification_report(y_true, y_pred))
`,
  exercises:[
    {
      title:'Read the confusion matrix',
      desc:`Create y_true = [1,1,1,1,1,1,1,1,0,0,0,0,0,0] and y_pred = [1,1,1,1,1,0,0,0,1,0,0,0,0,0]. Create
        cm = confusion_matrix(y_true, y_pred). Create tp = int(cm[1][1]), fp = int(cm[0][1]), and
        fn = int(cm[1][0]). Assert that tp == 5 and fp == 1 and fn == 3.`,
      starter:`from sklearn.metrics import confusion_matrix
y_true = [1,1,1,1,1,1,1,1,0,0,0,0,0,0]
y_pred = [1,1,1,1,1,0,0,0,1,0,0,0,0,0]
# Create cm, tp, fp and fn below
`,
      tests:[{type:'assert', expr:'tp == 5 and fp == 1 and fn == 3', label:'True/false positives and negatives are correctly read from the confusion matrix'}]
    },
    {
      title:'Get the overall accuracy from the report',
      desc:`Using y_true and y_pred from before, create report = classification_report(y_true, y_pred,
        output_dict=True). Create accuracy = round(report["accuracy"], 2). Assert that accuracy == 0.71.`,
      starter:`from sklearn.metrics import classification_report
y_true = [1,1,1,1,1,1,1,1,0,0,0,0,0,0]
y_pred = [1,1,1,1,1,0,0,0,1,0,0,0,0,0]
# Create report and accuracy below
`,
      tests:[{type:'assert', expr:'accuracy == 0.71', label:'The overall accuracy is correctly read from the report'}]
    },
    {
      title:'Compare precision and recall for one class',
      desc:`Using report from before, create precision_1 = round(report["1"]["precision"], 2) and
        recall_1 = round(report["1"]["recall"], 2). Assert that precision_1 == 0.83 and recall_1 == 0.62 — the
        model is more trustworthy when it predicts a pass than it is at catching every actual pass.`,
      starter:`from sklearn.metrics import classification_report
y_true = [1,1,1,1,1,1,1,1,0,0,0,0,0,0]
y_pred = [1,1,1,1,1,0,0,0,1,0,0,0,0,0]
report = classification_report(y_true, y_pred, output_dict=True)
# Create precision_1 and recall_1 below
`,
      tests:[{type:'assert', expr:'precision_1 == 0.83 and recall_1 == 0.62', label:'precision and recall for class 1 are correctly told apart'}]
    },
    {
      title:'Read the support for each class',
      desc:`Using report from before, create support_0 = int(report["0"]["support"]) and
        support_1 = int(report["1"]["support"]). Assert that support_0 == 6 and support_1 == 8.`,
      starter:`from sklearn.metrics import classification_report
y_true = [1,1,1,1,1,1,1,1,0,0,0,0,0,0]
y_pred = [1,1,1,1,1,0,0,0,1,0,0,0,0,0]
report = classification_report(y_true, y_pred, output_dict=True)
# Create support_0 and support_1 below
`,
      tests:[{type:'assert', expr:'support_0 == 6 and support_1 == 8', label:'The number of actual examples in each class is correctly read'}]
    },
    {
      title:'Use precision_score directly',
      desc:`Using y_true and y_pred from before, create precision_score_0 = round(precision_score(y_true, y_pred,
        pos_label=0), 2). Assert that precision_score_0 == 0.62 — the same number classification_report gives
        for class 0's precision, just called directly.`,
      starter:`from sklearn.metrics import precision_score
y_true = [1,1,1,1,1,1,1,1,0,0,0,0,0,0]
y_pred = [1,1,1,1,1,0,0,0,1,0,0,0,0,0]
# Create precision_score_0 below
`,
      tests:[{type:'assert', expr:'precision_score_0 == 0.62', label:'precision_score() directly matches class 0\'s precision from the report'}]
    },
    {
      title:'Read the macro-averaged f1-score',
      desc:`Using report from before, create macro_f1 = round(report["macro avg"]["f1-score"], 2). Assert that
        macro_f1 == 0.71 — the plain, unweighted average of both classes' f1-scores.`,
      starter:`from sklearn.metrics import classification_report
y_true = [1,1,1,1,1,1,1,1,0,0,0,0,0,0]
y_pred = [1,1,1,1,1,0,0,0,1,0,0,0,0,0]
report = classification_report(y_true, y_pred, output_dict=True)
# Create macro_f1 below
`,
      tests:[{type:'assert', expr:'macro_f1 == 0.71', label:'The macro-averaged f1-score is correctly read'}]
    }
  ],
  quiz:[
    {
      q:'In a confusion matrix, what does cm[0][1] represent?',
      options:['A true positive','A false positive — actually class 0, but predicted class 1','A true negative','The overall accuracy'],
      correct:1,
      explain:'Row = actual class, column = predicted class, so cm[0][1] means "actually 0, but the model predicted 1" — a false alarm.'
    },
    {
      q:'What is the difference between precision and recall?',
      options:['They are always the same number','Precision asks "of my positive predictions, how many were right?"; recall asks "of all the actual positives, how many did I catch?"','Precision only applies to regression','Recall is just another name for accuracy'],
      correct:1,
      explain:'They measure different kinds of mistakes — precision is about false alarms, recall is about missed cases — and a model can be strong on one while weak on the other.'
    },
    {
      q:'What does classification_report(..., output_dict=True) return for report["1"]["support"]?',
      options:['The model\'s accuracy','How many actual examples of class 1 were in the data','The number of correct predictions','The precision for class 1'],
      correct:1,
      explain:'support is simply a count — how many rows in y_true actually belonged to that class — useful context for judging the other metrics.'
    },
    {
      q:'Does precision_score(y_true, y_pred, pos_label=0) give the same number as classification_report(...)["0"]["precision"]?',
      options:['No, they measure completely different things','Yes — classification_report is built from the same underlying metric functions','Only if pos_label is left out','Only for recall, never precision'],
      correct:1,
      explain:'classification_report is really a convenient bundle of precision_score, recall_score, and f1_score computed for every class at once.'
    }
  ],
  sandboxStarter3:`from sklearn.metrics import classification_report, confusion_matrix

y_true = [1,1,1,1,1,1,1,1, 0,0,0,0,0,0]
y_pred = [1,1,1,1,1,0,0,0, 1,0,0,0,0,0]

report = classification_report(y_true, y_pred, output_dict=True)
print("Class 1 precision:", round(report["1"]["precision"], 2))
print("Class 1 recall:", round(report["1"]["recall"], 2))
print("Confusion matrix:")
print(confusion_matrix(y_true, y_pred))
`,
  stretchChallenge:{
    title:'Two models, two different trade-offs',
    desc:`Create y_true = [1,1,1,1,1,1,1,1,0,0,0,0,0,0] (8 actual passes, 6 actual fails). Model A's predictions:
      y_pred_a = [1,1,1,1,1,1,1,1,1,1,1,0,0,0] (it catches every actual pass, but wrongly flags 3 failing
      students too). Model B's predictions: y_pred_b = [1,1,1,1,1,0,0,0,0,0,0,0,0,0] (it never wrongly flags a
      failing student, but misses 3 actual passes). Create recall_a = round(recall_score(y_true, y_pred_a), 2),
      precision_a = round(precision_score(y_true, y_pred_a), 2), recall_b = round(recall_score(y_true, y_pred_b),
      2), and precision_b = round(precision_score(y_true, y_pred_b), 2). Assert that recall_a == 1.0 and
      precision_a == 0.73 and recall_b == 0.62 and precision_b == 1.0 — Model A never misses a pass but cries
      wolf sometimes; Model B is never wrong when it predicts a pass, but misses some.`,
    starter:`from sklearn.metrics import precision_score, recall_score
y_true = [1,1,1,1,1,1,1,1,0,0,0,0,0,0]
y_pred_a = [1,1,1,1,1,1,1,1,1,1,1,0,0,0]
y_pred_b = [1,1,1,1,1,0,0,0,0,0,0,0,0,0]
# Create recall_a, precision_a, recall_b and precision_b below
`,
    tests:[
      {type:'assert', expr:'recall_a == 1.0 and precision_a == 0.73 and recall_b == 0.62 and precision_b == 1.0', label:'Both models\' precision/recall trade-off is correctly measured'}
    ]
  }
},
{
  key:'week7', num:7, title:'Searching for the Best Setting: GridSearchCV (intro)',
  scenarioTag:'Real world: how deep should the tree be allowed to grow? Trying every value by hand is slow.',
  scenario:`RandomForestClassifier has settings you can tune, like how deep each tree is allowed to grow. Trying
    every value by hand with cross_val_score works, but GridSearchCV automates the whole search — trying every
    setting, cross-validating each one, and reporting which one won.`,
  objectives:[
    'Search over a range of hyperparameter values with GridSearchCV',
    'Read the best-performing setting GridSearchCV found',
    'Read the best cross-validated score achieved during the search',
    'Use the best model GridSearchCV found directly, without refitting it yourself'
  ],
  conceptHtml:`
    <p><code>GridSearchCV</code> tries every value in a "grid" of settings, cross-validates each one, and keeps
    track of which one performed best:</p>
    <pre class="code-block">from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

param_grid = {"max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(RandomForestClassifier(n_estimators=50, random_state=42), param_grid, cv=5)
grid.fit(X, y)

print(grid.best_params_)   # {'max_depth': 1} — the setting that scored highest
print(grid.best_score_)    # 0.87 — the best cross-validated score found</pre>
    <h3>Let's break down GridSearchCV, line by line</h3>
    <ul>
      <li><code>param_grid</code> is a dictionary: each key is a setting name, each value is a LIST of values to
        try for that setting.</li>
      <li><code>GridSearchCV(model, param_grid, cv=5)</code> wraps a model — for EVERY value in the grid, it runs
        a full 5-fold cross-validation, exactly like Week 4's <code>cross_val_score</code>, just automated across
        every candidate setting.</li>
      <li><code>.fit(X, y)</code> runs the whole search — for a grid of 4 values with cv=5, that's 20 total
        model fits happening behind the scenes.</li>
      <li><code>grid.best_params_</code> is a dictionary showing which setting won. <code>grid.best_score_</code>
        is that setting's cross-validated score.</li>
      <li><code>grid.best_estimator_</code> is the actual trained model using the winning setting — already fit
        on the full data, ready to use directly, no need to retrain it yourself.</li>
    </ul>`,
  sandboxStarter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

param_grid = {"max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(RandomForestClassifier(n_estimators=50, random_state=42), param_grid, cv=5)
grid.fit(X, passed)
print(grid.best_params_)
print(round(grid.best_score_, 2))
`,
  sandboxStarter2:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

param_grid = {"max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(RandomForestClassifier(n_estimators=50, random_state=42), param_grid, cv=5)
grid.fit(X, passed)
best_model = grid.best_estimator_
print(round(best_model.score(X, passed), 2))
`,
  exercises:[
    {
      title:'Search for the best max_depth',
      desc:`Create hours, attendance and passed exactly as in the concept box (30 values each). Create
        X = list(zip(hours, attendance)). Build param_grid = {"max_depth": [1, 2, 3, 4]} and
        grid = GridSearchCV(RandomForestClassifier(n_estimators=50, random_state=42), param_grid, cv=5), then
        grid.fit(X, passed). Create best_depth = grid.best_params_["max_depth"]. Assert that best_depth == 1.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
# Create X, param_grid, grid and best_depth below
`,
      tests:[{type:'assert', expr:'best_depth == 1', label:'GridSearchCV correctly finds max_depth 1 as the best setting'}]
    },
    {
      title:'Read the best cross-validated score',
      desc:`Using grid from before, create best_score = round(grid.best_score_, 2). Assert that
        best_score == 0.87.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
param_grid = {"max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(RandomForestClassifier(n_estimators=50, random_state=42), param_grid, cv=5)
grid.fit(X, passed)
# Create best_score below
`,
      tests:[{type:'assert', expr:'best_score == 0.87', label:'The best cross-validated score is correctly read'}]
    },
    {
      title:'Count how many settings were tried',
      desc:`Using grid from before, create n_candidates = len(grid.cv_results_["params"]). Assert that
        n_candidates == 4 — one for each value in the grid.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
param_grid = {"max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(RandomForestClassifier(n_estimators=50, random_state=42), param_grid, cv=5)
grid.fit(X, passed)
# Create n_candidates below
`,
      tests:[{type:'assert', expr:'n_candidates == 4', label:'All 4 candidate settings were correctly tried'}]
    },
    {
      title:'Use the best model directly',
      desc:`Using grid from before, create best_model = grid.best_estimator_. Create
        best_full_score = round(best_model.score(X, passed), 2). Assert that best_full_score == 0.93 — the
        winning model, already trained, ready to use without refitting it yourself.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
param_grid = {"max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(RandomForestClassifier(n_estimators=50, random_state=42), param_grid, cv=5)
grid.fit(X, passed)
# Create best_model and best_full_score below
`,
      tests:[{type:'assert', expr:'best_full_score == 0.93', label:'The best_estimator_ is correctly used directly without refitting'}]
    },
    {
      title:'Search a different setting: n_estimators',
      desc:`Using the same hours/attendance/passed/X, build param_grid2 = {"n_estimators": [10, 50, 100]} and
        grid2 = GridSearchCV(RandomForestClassifier(random_state=42, max_depth=2), param_grid2, cv=5), then
        grid2.fit(X, passed). Create best_n = grid2.best_params_["n_estimators"]. Assert that best_n == 10.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
# Create param_grid2, grid2 and best_n below
`,
      tests:[{type:'assert', expr:'best_n == 10', label:'GridSearchCV correctly searches a different setting (n_estimators)'}]
    },
    {
      title:'Confirm the grid you actually searched',
      desc:`Using grid from the max_depth search, create searched_grid = grid.param_grid. Assert that
        searched_grid == {"max_depth": [1, 2, 3, 4]} — GridSearchCV remembers exactly what you asked it to try.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
param_grid = {"max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(RandomForestClassifier(n_estimators=50, random_state=42), param_grid, cv=5)
grid.fit(X, passed)
# Create searched_grid below
`,
      tests:[{type:'assert', expr:'searched_grid == {"max_depth": [1, 2, 3, 4]}', label:'The searched param_grid is correctly remembered by GridSearchCV'}]
    }
  ],
  quiz:[
    {
      q:'What does param_grid = {"max_depth": [1, 2, 3, 4]} tell GridSearchCV to do?',
      options:['Only try max_depth=4','Try every one of the 4 listed values for max_depth and cross-validate each one','Ignore max_depth entirely','Train exactly 1 model'],
      correct:1,
      explain:'Each key is a setting name and its list is every value GridSearchCV will try, cross-validating each candidate.'
    },
    {
      q:'What does grid.best_params_ contain after fitting?',
      options:['Every setting that was tried','A dictionary showing the specific setting(s) that scored best','The original param_grid, unchanged','The worst-performing setting'],
      correct:1,
      explain:'best_params_ is a dictionary with just the winning value(s) — the setting combination that achieved the highest cross-validated score.'
    },
    {
      q:'What is grid.best_estimator_?',
      options:['A brand new, untrained model','The actual trained model using the winning setting, already fit and ready to use','The same as grid.best_score_','A list of every model that was tried'],
      correct:1,
      explain:'best_estimator_ is the fully-trained model using the best setting found — you can call .predict() or .score() on it directly, no need to refit.'
    },
    {
      q:'For a grid of 4 values with cv=5, roughly how many model fits happen behind the scenes?',
      options:['Just 1','4','5','20 — each of the 4 settings gets a full 5-fold cross-validation'],
      correct:3,
      explain:'Every candidate setting gets its own full cross-validation, so the total number of fits multiplies: 4 settings × 5 folds = 20.'
    }
  ],
  sandboxStarter3:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

param_grid = {"n_estimators": [10, 50, 100]}
grid = GridSearchCV(RandomForestClassifier(random_state=42, max_depth=2), param_grid, cv=5)
grid.fit(X, passed)
print("Best n_estimators:", grid.best_params_["n_estimators"])
print("Best score:", round(grid.best_score_, 2))
`,
  stretchChallenge:{
    title:'Confirm the search by hand',
    desc:`Using hours, attendance, passed and X as before, manually loop over depths = [1, 2, 3, 4]: for each
      depth, create a RandomForestClassifier(n_estimators=50, random_state=42, max_depth=depth), run
      cross_val_score(model, X, passed, cv=5), and store round(float(scores.mean()), 3) in a list called
      manual_scores. Create manual_best_depth = depths[manual_scores.index(max(manual_scores))]. Assert that
      manual_best_depth == 1 — hand-searching the same grid finds the exact same winner GridSearchCV did.`,
    starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
depths = [1, 2, 3, 4]
# Create manual_scores and manual_best_depth below
`,
    tests:[
      {type:'assert', expr:'manual_best_depth == 1', label:'Hand-searching the grid finds the same best depth as GridSearchCV'}
    ]
  }
},
{
  key:'week8', num:8, title:'Comparing Models Systematically',
  scenarioTag:'Real world: which model type actually deserves to be used — not just the first one you tried?',
  scenario:`So far each week has used one model type at a time. But a real project should compare several model
    types on the SAME data, the SAME way, before picking a winner — looping over candidates and cross-validating
    each one, exactly like GridSearchCV does for settings, but now for entire model types.`,
  objectives:[
    'Loop over several model types and cross-validate each one the same way',
    'Store results in a dictionary for easy comparison',
    'Find the best and worst performing model from a results dictionary',
    'Sort models by score to build a simple leaderboard'
  ],
  conceptHtml:`
    <p>Comparing model TYPES works the same way as comparing settings — cross-validate each candidate, and store
    the results somewhere you can compare them:</p>
    <pre class="code-block">from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score

models = {
    "rf": RandomForestClassifier(n_estimators=50, random_state=42),
    "knn": KNeighborsClassifier(n_neighbors=3),
    "logit": LogisticRegression(),
}
results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5)
    results[name] = round(float(scores.mean()), 2)

print(results)   # {'rf': 0.77, 'knn': 0.9, 'logit': 0.9}</pre>
    <h3>Let's break down the comparison pattern</h3>
    <ul>
      <li>A dictionary of <code>{"name": model_object}</code> lets you loop over several completely different
        model types with the SAME code, rather than copy-pasting the cross-validation code for each one.</li>
      <li>Every model gets cross-validated the exact same way (same <code>X</code>, same <code>y</code>, same
        <code>cv=5</code>) — that's what makes the comparison fair.</li>
      <li>Storing each result in a <code>results</code> dictionary, keyed by model name, means you can look up
        any model's score, find the best with <code>max(results.values())</code>, or find WHICH model won with
        <code>max(results, key=results.get)</code>.</li>
      <li><code>sorted(results.items(), key=lambda x: -x[1])</code> turns the dictionary into a ranked
        leaderboard, best score first.</li>
    </ul>`,
  sandboxStarter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

models = {
    "rf": RandomForestClassifier(n_estimators=50, random_state=42),
    "knn": KNeighborsClassifier(n_neighbors=3),
    "logit": LogisticRegression(),
}
results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, passed, cv=5)
    results[name] = round(float(scores.mean()), 2)
print(results)
`,
  sandboxStarter2:`from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

models = {
    "rf": RandomForestClassifier(n_estimators=50, random_state=42),
    "knn": KNeighborsClassifier(n_neighbors=3),
    "logit": LogisticRegression(),
}
results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, passed, cv=5)
    results[name] = round(float(scores.mean()), 2)

best_name = max(results, key=results.get)
print("Best model:", best_name, results[best_name])
`,
  exercises:[
    {
      title:'Compare three models',
      desc:`Create hours, attendance and passed exactly as in the concept box (30 values each). Create
        X = list(zip(hours, attendance)). Build models = {"rf": RandomForestClassifier(n_estimators=50,
        random_state=42), "knn": KNeighborsClassifier(n_neighbors=3), "logit": LogisticRegression()}. Loop over
        models.items(), cross-validate each with cv=5, and store results[name] = round(float(scores.mean()), 2).
        Assert that results == {"rf": 0.77, "knn": 0.9, "logit": 0.9}.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
# Create X, models, results (via a loop) below
`,
      tests:[{type:'assert', expr:'results == {"rf": 0.77, "knn": 0.9, "logit": 0.9}', label:'All three models are correctly cross-validated and compared'}]
    },
    {
      title:'Find the best score',
      desc:`Using results from before, create best_score = max(results.values()). Assert that best_score == 0.9.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
models = {"rf": RandomForestClassifier(n_estimators=50, random_state=42), "knn": KNeighborsClassifier(n_neighbors=3), "logit": LogisticRegression()}
results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, passed, cv=5)
    results[name] = round(float(scores.mean()), 2)
# Create best_score below
`,
      tests:[{type:'assert', expr:'best_score == 0.9', label:'The best score across all models is correctly found'}]
    },
    {
      title:'Find the worst-performing model',
      desc:`Using results from before, create worst_model = min(results, key=results.get). Assert that
        worst_model == "rf".`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
models = {"rf": RandomForestClassifier(n_estimators=50, random_state=42), "knn": KNeighborsClassifier(n_neighbors=3), "logit": LogisticRegression()}
results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, passed, cv=5)
    results[name] = round(float(scores.mean()), 2)
# Create worst_model below
`,
      tests:[{type:'assert', expr:'worst_model == "rf"', label:'The worst-performing model is correctly identified'}]
    },
    {
      title:'Count the strong models',
      desc:`Using results from before, create good_models = sum(1 for v in results.values() if v >= 0.9). Assert
        that good_models == 2.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
models = {"rf": RandomForestClassifier(n_estimators=50, random_state=42), "knn": KNeighborsClassifier(n_neighbors=3), "logit": LogisticRegression()}
results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, passed, cv=5)
    results[name] = round(float(scores.mean()), 2)
# Create good_models below
`,
      tests:[{type:'assert', expr:'good_models == 2', label:'The number of models scoring 0.9 or above is correctly counted'}]
    },
    {
      title:'Build a leaderboard',
      desc:`Using results from before, create sorted_models = sorted(results.items(), key=lambda x: -x[1]).
        Assert that sorted_models[0][1] == 0.9 and sorted_models[-1][0] == "rf" — the leaderboard's top score is
        0.9, and "rf" sits last.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
models = {"rf": RandomForestClassifier(n_estimators=50, random_state=42), "knn": KNeighborsClassifier(n_neighbors=3), "logit": LogisticRegression()}
results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, passed, cv=5)
    results[name] = round(float(scores.mean()), 2)
# Create sorted_models below
`,
      tests:[{type:'assert', expr:'sorted_models[0][1] == 0.9 and sorted_models[-1][0] == "rf"', label:'The leaderboard is correctly sorted, best score first'}]
    },
    {
      title:'Add a fourth model to the comparison',
      desc:`Using X and passed from before, add "dt": DecisionTreeClassifier(random_state=42) into the models
        dictionary (alongside rf, knn and logit), then rebuild results the same way as before, looping over ALL
        4 models. Assert that results["dt"] == 0.77 and len(results) == 4.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
# Create models (including "dt") and results below
`,
      tests:[{type:'assert', expr:'results["dt"] == 0.77 and len(results) == 4', label:'A 4th model type is correctly added to the comparison'}]
    }
  ],
  quiz:[
    {
      q:'Why store each model in a dictionary of {"name": model_object} rather than separate variables?',
      options:['Dictionaries are required by scikit-learn','It lets you loop over every model with the same code, instead of copy-pasting the cross-validation step for each one','It trains the models faster','It is the only way cross_val_score works'],
      correct:1,
      explain:'Looping over a dictionary means every model gets compared with identical code — same data, same cv, same rounding — which is exactly what makes the comparison fair.'
    },
    {
      q:'What does max(results, key=results.get) return?',
      options:['The highest score itself','The NAME of the model with the highest score','A list of every model name','An error, since results is a dictionary'],
      correct:1,
      explain:'key=results.get tells max() to compare dictionary VALUES while still returning the corresponding KEY — so you get the winning model\'s name, not its score.'
    },
    {
      q:'What does sorted(results.items(), key=lambda x: -x[1]) produce?',
      options:['The dictionary in its original order','A list of (name, score) pairs sorted from lowest score to highest','A list of (name, score) pairs sorted from highest score to lowest','Just the model names, alphabetically'],
      correct:2,
      explain:'The negative sign flips the usual ascending sort into descending order, so the best-scoring model comes first — a simple leaderboard.'
    },
    {
      q:'Why is it important that every model in the comparison uses the SAME cv value and the SAME X/y?',
      options:['It isn\'t important, any settings work','So the comparison is fair — every model is judged under identical conditions','To make the code run faster','Because scikit-learn requires it'],
      correct:1,
      explain:'If one model got 10-fold cross-validation and another got 3-fold, or they saw different data, the scores wouldn\'t be comparable — fairness comes from using identical conditions for every candidate.'
    }
  ],
  sandboxStarter3:`from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

models = {
    "rf": RandomForestClassifier(n_estimators=50, random_state=42),
    "dt": DecisionTreeClassifier(random_state=42),
    "knn": KNeighborsClassifier(n_neighbors=3),
    "logit": LogisticRegression(),
}
results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, passed, cv=5)
    results[name] = round(float(scores.mean()), 2)

leaderboard = sorted(results.items(), key=lambda x: -x[1])
for name, score in leaderboard:
    print(name, score)
`,
  stretchChallenge:{
    title:'Does tuning close the gap?',
    desc:`Using X and passed from before, create plain_score = results["rf"] (0.77, the untuned RandomForest from
      the comparison). Build tuned_grid = GridSearchCV(RandomForestClassifier(n_estimators=50, random_state=42),
      {"max_depth": [1, 2, 3, 4]}, cv=5), fit it on X/passed, then tuned_score = round(tuned_grid.best_score_, 2).
      Create knn_score = results["knn"]. Assert that tuned_score == 0.87 and tuned_score > plain_score and
      tuned_score < knn_score — tuning helps RandomForest, but it still doesn't catch up to the simpler KNN model
      on this particular dataset.`,
    starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score, GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
models = {"rf": RandomForestClassifier(n_estimators=50, random_state=42), "knn": KNeighborsClassifier(n_neighbors=3), "logit": LogisticRegression()}
results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, passed, cv=5)
    results[name] = round(float(scores.mean()), 2)
# Create plain_score, tuned_grid, tuned_score and knn_score below
`,
    tests:[
      {type:'assert', expr:'tuned_score == 0.87 and tuned_score > plain_score and tuned_score < knn_score', label:'Tuning is correctly shown to help, but not enough to beat the simpler model'}
    ]
  }
},
{
  key:'week9', num:9, title:'A Cleaner Pipeline: ColumnTransformer + Pipeline',
  scenarioTag:'Real world: preprocessing, tuning and predicting should all travel together as ONE object.',
  scenario:`Every skill from this term comes together here: a ColumnTransformer that handles mixed numeric and
    categorical data, wrapped in a Pipeline with a model, tuned with GridSearchCV — all as a single clean object
    you can fit, cross-validate, tune, and predict with.`,
  objectives:[
    'Combine ColumnTransformer and a model into one Pipeline',
    'Cross-validate a full pipeline in one call',
    'Tune a model setting INSIDE a pipeline using "stepname__paramname"',
    'Access individual pipeline steps directly with named_steps'
  ],
  conceptHtml:`
    <p>A <code>Pipeline</code> combining a <code>ColumnTransformer</code> and a model lets EVERYTHING — scaling,
    encoding, training, tuning — travel together as one object:</p>
    <pre class="code-block">from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

pipe = Pipeline([
    ("prep", ColumnTransformer([
        ("num", StandardScaler(), ["hours", "attendance"]),
        ("cat", OneHotEncoder(), ["method"])
    ])),
    ("rf", RandomForestClassifier(n_estimators=50, random_state=42))
])

param_grid = {"rf__max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
print(grid.best_params_)   # {'rf__max_depth': 1}</pre>
    <h3>Let's break down the new piece: tuning inside a pipeline</h3>
    <ul>
      <li>The pipeline's steps are named — here, <code>"prep"</code> and <code>"rf"</code> — exactly like Week 5's
        ColumnTransformer step names.</li>
      <li>To tune a SETTING that belongs to one specific step, use <code>"stepname__paramname"</code> — the
        DOUBLE UNDERSCORE tells GridSearchCV which step's setting to change. <code>"rf__max_depth"</code> means
        "the <code>max_depth</code> setting on the step named <code>rf</code>".</li>
      <li><code>GridSearchCV(pipe, param_grid, cv=5)</code> works exactly like tuning a bare model — the ENTIRE
        pipeline (preprocessing included) gets refit fresh for every candidate setting, on every fold.</li>
      <li><code>pipe.named_steps["rf"]</code> lets you reach into the fitted pipeline and inspect one specific
        step directly — useful for checking a setting or reading an attribute like
        <code>.feature_importances_</code> later on.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]

pipe = Pipeline([
    ("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])),
    ("rf", RandomForestClassifier(n_estimators=50, random_state=42))
])
pipe.fit(X, y)
print(round(pipe.score(X, y), 2))
`,
  sandboxStarter2:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]

pipe = Pipeline([
    ("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])),
    ("rf", RandomForestClassifier(n_estimators=50, random_state=42))
])
param_grid = {"rf__max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
print(grid.best_params_)
print(round(grid.best_score_, 2))
`,
  exercises:[
    {
      title:'Build the full pipeline',
      desc:`Create hours, attendance, method and passed exactly as in the concept box (30 values each), then
        build df with all four as columns. Create X = df[["hours", "attendance", "method"]] and y = df["passed"].
        Build pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]),
        ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(n_estimators=50,
        random_state=42))]), fit it on X/y, then pipe_score = round(pipe.score(X, y), 2). Create
        n_features = pipe.named_steps["prep"].transform(X).shape[1]. Assert that pipe_score == 1.0 and
        n_features == 4 — proving BOTH the numeric and the categorical columns were genuinely included.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
# Create df, X, y, pipe, pipe_score and n_features below
`,
      tests:[{type:'assert', expr:'pipe_score == 1.0 and n_features == 4', label:'The full ColumnTransformer + model pipeline is correctly built and scored'}]
    },
    {
      title:'Cross-validate the full pipeline',
      desc:`Using pipe, X and y from before, create scores = cross_val_score(pipe, X, y, cv=5). Create
        cv_mean = round(float(scores.mean()), 2). Assert that cv_mean == 0.8.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(n_estimators=50, random_state=42))])
# Create scores and cv_mean below
`,
      tests:[{type:'assert', expr:'cv_mean == 0.8', label:'The full pipeline is correctly cross-validated as one object'}]
    },
    {
      title:'Tune a setting inside the pipeline',
      desc:`Using pipe, X and y from before, build param_grid = {"rf__max_depth": [1, 2, 3, 4]} and
        grid = GridSearchCV(pipe, param_grid, cv=5), then grid.fit(X, y). Create
        best_depth = grid.best_params_["rf__max_depth"]. Assert that best_depth == 1.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(n_estimators=50, random_state=42))])
# Create param_grid, grid and best_depth below
`,
      tests:[{type:'assert', expr:'best_depth == 1', label:'A model setting is correctly tuned INSIDE the pipeline using rf__max_depth'}]
    },
    {
      title:'Read the best tuned score',
      desc:`Using grid from before, create best_score = round(grid.best_score_, 2). Assert that
        best_score == 0.87.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(n_estimators=50, random_state=42))])
param_grid = {"rf__max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
# Create best_score below
`,
      tests:[{type:'assert', expr:'best_score == 0.87', label:'The best tuned cross-validated score is correctly read'}]
    },
    {
      title:'Reach into one named step',
      desc:`Using pipe from before (already fit), create n_estimators_used = pipe.named_steps["rf"].n_estimators.
        Assert that n_estimators_used == 50.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(n_estimators=50, random_state=42))])
pipe.fit(X, y)
# Create n_estimators_used below
`,
      tests:[{type:'assert', expr:'n_estimators_used == 50', label:'A single named step is correctly reached into and inspected'}]
    },
    {
      title:'Use the tuned pipeline directly',
      desc:`Using grid from the tuning exercise, create best_pipe_score = round(grid.best_estimator_.score(X, y),
        2). Assert that best_pipe_score == 0.93 — the winning pipeline, ColumnTransformer and all, ready to use
        directly.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(n_estimators=50, random_state=42))])
param_grid = {"rf__max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
# Create best_pipe_score below
`,
      tests:[{type:'assert', expr:'best_pipe_score == 0.93', label:'The tuned pipeline is correctly used directly, without rebuilding it'}]
    }
  ],
  quiz:[
    {
      q:'What does "rf__max_depth" mean inside a param_grid?',
      options:['A typo that scikit-learn ignores','The max_depth setting belonging to the pipeline step named "rf"','A setting for the ColumnTransformer','It always refers to the first step in the pipeline'],
      correct:1,
      explain:'The double underscore is scikit-learn\'s syntax for "this setting belongs to this specific named step" — essential once a model lives inside a pipeline.'
    },
    {
      q:'When GridSearchCV tunes a pipeline, what gets refit for every candidate setting?',
      options:['Only the model step','Only the ColumnTransformer step','The ENTIRE pipeline — preprocessing and model together','Nothing is refit, only scored'],
      correct:2,
      explain:'Every candidate setting triggers a full pipeline refit — scaling, encoding, and training all happen fresh for each one, keeping the comparison fair.'
    },
    {
      q:'What does pipe.named_steps["rf"] give you?',
      options:['The step\'s name as a string','Direct access to that specific fitted step, so you can inspect its attributes','A new, empty model','An error, since pipelines cannot be inspected'],
      correct:1,
      explain:'named_steps is a dictionary of the pipeline\'s actual fitted objects, keyed by the name you gave each step — letting you reach in and check any of them directly.'
    },
    {
      q:'Why combine ColumnTransformer and a model into ONE Pipeline instead of keeping them separate?',
      options:['It is required by scikit-learn','It lets you fit, cross-validate, tune and predict using ONE object, with preprocessing always applied consistently','It makes the model train faster','It removes the need for a param_grid'],
      correct:1,
      explain:'A single pipeline object guarantees the same preprocessing is applied every time — fitting, cross-validating, and predicting — with no risk of forgetting a step or applying it inconsistently.'
    }
  ],
  sandboxStarter3:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]

pipe = Pipeline([
    ("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])),
    ("rf", RandomForestClassifier(n_estimators=50, random_state=42))
])
param_grid = {"rf__max_depth": [1, 2, 3, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
best_pipe = grid.best_estimator_
print("Best pipeline score:", round(best_pipe.score(X, y), 2))
`,
  stretchChallenge:{
    title:'Tune two settings at once',
    desc:`Using X and y as before, build a fresh pipe2 = Pipeline([("prep", ColumnTransformer([("num",
      StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf",
      RandomForestClassifier(random_state=42))]) (no n_estimators fixed this time). Build
      param_grid2 = {"rf__max_depth": [1, 2, 3, 4], "rf__n_estimators": [10, 50, 100]} and
      grid2 = GridSearchCV(pipe2, param_grid2, cv=5), then grid2.fit(X, y). Create
      best_depth2 = grid2.best_params_["rf__max_depth"], best_n2 = grid2.best_params_["rf__n_estimators"],
      best_score2 = round(grid2.best_score_, 2), and n_candidates2 = len(grid2.cv_results_["params"]). Assert
      that best_depth2 == 1 and best_n2 == 10 and best_score2 == 0.87 and n_candidates2 == 12 — searching TWO
      settings inside the pipeline at once, 4 depths times 3 estimator counts.`,
    starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
# Create pipe2, param_grid2, grid2, best_depth2, best_n2, best_score2 and n_candidates2 below
`,
    tests:[
      {type:'assert', expr:'best_depth2 == 1 and best_n2 == 10 and best_score2 == 0.87 and n_candidates2 == 12', label:'Two settings inside the pipeline are correctly tuned together'}
    ]
  }
}
];

const ML_INTERMEDIATE_MP1 = {
  key:'mp1',
  title:'Mini Project 1 — Build a Robust Resit Predictor',
  intro:`The resit records for this class of 24 students are realistically messy — a couple of students are
    missing an hours-revised value. You'll build a genuinely ROBUST pipeline: fill the gaps, scale the features,
    train a stronger model, then prove it with fair, cross-validated evaluation — combining everything from
    Weeks 1-4.`,
  newTrick:`Chaining every Week 1-4 skill into ONE pipeline that can handle real, imperfect data end to end —
    impute, scale, train, and fairly evaluate — rather than treating each skill as a one-off trick.`,
  stages:[
    {
      key:'a', title:'Stage A — Fill the missing hours',
      desc:`Create hours_raw = [1,2,3,None,5,6,7,8,9,10,1,2,8,9,3,4,6,None,2,9,5,6,1,10] (two students are missing
        their hours value). Create hours_2d = [[h] for h in hours_raw]. Create
        imputer = SimpleImputer(strategy="median"), then hours_filled = imputer.fit_transform(hours_2d). Create
        median_hours = round(float(imputer.statistics_[0]), 1). Assert that median_hours == 5.5.`,
      starter:`from sklearn.impute import SimpleImputer
hours_raw = [1,2,3,None,5,6,7,8,9,10,1,2,8,9,3,4,6,None,2,9,5,6,1,10]
# Create hours_2d, imputer, hours_filled and median_hours below
`,
      tests:[{type:'assert', expr:'median_hours == 5.5', label:'The missing hours are correctly filled with the median (5.5)'}]
    },
    {
      key:'b', title:'Stage B — Scale the features and train a stronger model',
      desc:`Using hours_filled from Stage A, create attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,
        75,80,56,96,72,78,53,99] and passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]. Create
        X = list(zip(hours_filled.ravel().tolist(), attendance)). Create scaler = StandardScaler(), then
        Xs = scaler.fit_transform(X). Create model = RandomForestClassifier(n_estimators=50, random_state=42), fit
        it on Xs/passed, then train_score = round(model.score(Xs, passed), 2) and
        first_scaled_hour = round(float(Xs[0][0]), 2). Assert that train_score == 1.0 and
        first_scaled_hour == -1.48 — proving the features were genuinely scaled, not just fed in raw.`,
      starter:`from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
hours_raw = [1,2,3,None,5,6,7,8,9,10,1,2,8,9,3,4,6,None,2,9,5,6,1,10]
hours_2d = [[h] for h in hours_raw]
imputer = SimpleImputer(strategy="median")
hours_filled = imputer.fit_transform(hours_2d)
# Create attendance, passed, X, scaler, Xs, model, train_score and first_scaled_hour below
`,
      tests:[{type:'assert', expr:'train_score == 1.0 and first_scaled_hour == -1.48', label:'The model is correctly trained on genuinely scaled features'}]
    },
    {
      key:'c', title:'Stage C — Cross-validate the full pipeline',
      desc:`Using hours_raw (the ORIGINAL list, still with the two missing values), attendance and passed from
        before, create X_raw = list(zip(hours_raw, attendance)). Build pipe = Pipeline([("imputer",
        SimpleImputer(strategy="median")), ("scaler", StandardScaler()), ("rf",
        RandomForestClassifier(n_estimators=50, random_state=42))]). Create
        scores = cross_val_score(pipe, X_raw, passed, cv=5). Create cv_mean = round(float(scores.mean()), 2) and
        fold2 = round(float(scores[1]), 2). Assert that cv_mean == 0.96 and fold2 == 0.8 — even a robust pipeline
        isn't always a perfect 1.0, and that's a fair, honest result.`,
      starter:`from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.model_selection import cross_val_score
hours_raw = [1,2,3,None,5,6,7,8,9,10,1,2,8,9,3,4,6,None,2,9,5,6,1,10]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99]
passed = [0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1]
# Create X_raw, pipe, scores, cv_mean and fold2 below
`,
      tests:[{type:'assert', expr:'cv_mean == 0.96 and fold2 == 0.8', label:'The full pipeline is correctly cross-validated end to end'}]
    }
  ]
};

const ML_INTERMEDIATE_MP2 = {
  key:'mp2',
  title:'Mini Project 2 — The Robust Model Comparison Lab',
  intro:`This term's resit data has BOTH a couple of missing hours values AND a categorical study-method column —
    genuinely messy, real-world-shaped data. Three doors: build a preprocessing pipeline robust enough to handle
    it, compare 3 model types fairly through that SAME pipeline, then tune the winner.`,
  fixtureNote:`All three doors build on this same class of 30 students:`,
  fixtureCode:`hours = [1,2,3,None,5,6,7,8,9,10,1,2,8,9,3,4,6,None,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]`,
  doors:[
    {
      key:'a', title:'Door 1 — Build the robust preprocessing pipeline',
      desc:`Using hours, attendance, method and passed above, build df with all four as columns. Create
        X = df[["hours", "attendance", "method"]]. Build num_pipe = Pipeline([("impute",
        SimpleImputer(strategy="median")), ("scale", StandardScaler())]), then ct = ColumnTransformer([("num",
        num_pipe, ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])]). Create
        Xt = ct.fit_transform(X). Create n_features = Xt.shape[1] and
        imputed_hours_scaled = round(float(Xt[3][0]), 2) (row 3 is one of the students whose hours value was
        missing). Assert that n_features == 4 and imputed_hours_scaled == 0.07 — proving the missing value was
        genuinely filled with the MEDIAN (not just some placeholder) before being scaled.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
hours = [1,2,3,None,5,6,7,8,9,10,1,2,8,9,3,4,6,None,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
# Create df, X, num_pipe, ct, Xt, n_features and imputed_hours_scaled below
`,
      tests:[{type:'assert', expr:'n_features == 4 and imputed_hours_scaled == 0.07', label:'The robust preprocessing pipeline correctly imputes, scales and encodes'}]
    },
    {
      key:'b', title:'Door 2 — Compare 3 models through the SAME pipeline',
      desc:`Using ct, X and y = df["passed"] from Door 1, build models = {"rf": RandomForestClassifier(
        n_estimators=50, random_state=42), "knn": KNeighborsClassifier(n_neighbors=3), "logit":
        LogisticRegression()}. Loop over models.items(); for each, build pipe = Pipeline([("prep", ct), ("model",
        model)]), cross-validate with cv=5, and store results[name] = round(float(scores.mean()), 2). Create
        best_name = max(results, key=results.get). Assert that results == {"rf": 0.77, "knn": 0.83, "logit":
        0.87} and best_name == "logit".`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
hours = [1,2,3,None,5,6,7,8,9,10,1,2,8,9,3,4,6,None,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
num_pipe = Pipeline([("impute", SimpleImputer(strategy="median")), ("scale", StandardScaler())])
ct = ColumnTransformer([("num", num_pipe, ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])
# Create models, results (via a loop) and best_name below
`,
      tests:[{type:'assert', expr:'results == {"rf": 0.77, "knn": 0.83, "logit": 0.87} and best_name == "logit"', label:'All three models are correctly compared through the same robust pipeline'}]
    },
    {
      key:'c', title:'Door 3 — Tune the winner',
      desc:`Using ct, X and y from before, build final_pipe = Pipeline([("prep", ct), ("model",
        LogisticRegression())]). Build param_grid = {"model__C": [0.1, 1, 10]} and
        grid = GridSearchCV(final_pipe, param_grid, cv=5), then grid.fit(X, y). Create
        best_C = grid.best_params_["model__C"] and best_score = round(grid.best_score_, 2). Assert that
        best_C == 0.1 and best_score == 0.9 — tuning the winning model type improves it even further.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,None,5,6,7,8,9,10,1,2,8,9,3,4,6,None,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
num_pipe = Pipeline([("impute", SimpleImputer(strategy="median")), ("scale", StandardScaler())])
ct = ColumnTransformer([("num", num_pipe, ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])
# Create final_pipe, param_grid, grid, best_C and best_score below
`,
      tests:[{type:'assert', expr:'best_C == 0.1 and best_score == 0.9', label:'The winning model type is correctly tuned for an even better score'}]
    }
  ]
};

const ML_ADVANCED_WEEKS = [
{
  key:'week1', num:1, title:'A Different Kind of Boundary: SVC',
  scenarioTag:'Real world: not every model draws the line between "pass" and "fail" the same way.',
  scenario:`Every model tried so far draws a decision boundary differently. SVC (Support Vector Classifier) finds
    the boundary that stays as far as possible from the nearest points of each class — often a genuinely stronger
    choice than a tree-based model, worth trying whenever accuracy matters more than explainability.`,
  objectives:[
    'Train an SVC exactly like any other classifier — same fit/predict/score interface',
    'Cross-validate SVC fairly against other model types',
    'See how the C setting controls how strict the boundary is',
    'Read a linear SVC\'s coefficients when interpretability matters'
  ],
  conceptHtml:`
    <p><code>SVC</code> uses the exact same interface as every model you've used so far — the only thing that
    changes is what shape of boundary it draws between classes:</p>
    <pre class="code-block">from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score

svc = SVC()
svc.fit(X, y)
print(round(svc.score(X, y), 2))

scores = cross_val_score(svc, X, y, cv=5)
print(round(float(scores.mean()), 2))</pre>
    <h3>Let's break down what makes SVC different</h3>
    <ul>
      <li>SVC tries to find the boundary with the LARGEST margin — the widest possible gap — between the two
        classes, rather than splitting on one feature at a time like a tree does.</li>
      <li>The <code>C</code> setting controls how strict that boundary is: a SMALL C allows more points to sit on
        the "wrong" side of the margin (a softer, more tolerant boundary); a LARGE C punishes those mistakes more
        heavily (a stricter boundary, which can also risk overfitting).</li>
      <li>With the default <code>kernel="rbf"</code>, SVC can draw curved boundaries — powerful, but the fitted
        model has no simple "coefficients" you can read directly.</li>
      <li>With <code>kernel="linear"</code>, SVC draws a straight-line boundary AND exposes
        <code>.coef_</code> — one weight per feature, similar in spirit to LogisticRegression's coefficients.</li>
    </ul>`,
  sandboxStarter:`from sklearn.svm import SVC

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

svc = SVC()
svc.fit(X, passed)
print(round(svc.score(X, passed), 2))
`,
  sandboxStarter2:`from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

svc = SVC()
scores = cross_val_score(svc, X, passed, cv=5)
print(round(float(scores.mean()), 2))
`,
  exercises:[
    {
      title:'Train and score an SVC',
      desc:`Create hours, attendance and passed exactly as in the concept box (30 values each). Create
        X = list(zip(hours, attendance)). Create svc = SVC(), fit it on X/passed, then
        svc_score = round(svc.score(X, passed), 2). Assert that svc_score == 0.9.`,
      starter:`from sklearn.svm import SVC
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
# Create X, svc and svc_score below
`,
      tests:[{type:'assert', expr:'svc_score == 0.9', label:'SVC is correctly trained and scored (0.9)'}]
    },
    {
      title:'Cross-validate the SVC fairly',
      desc:`Using X and passed from before, create svc = SVC(), then
        scores = cross_val_score(svc, X, passed, cv=5). Create svc_cv_mean = round(float(scores.mean()), 2).
        Assert that svc_cv_mean == 0.9.`,
      starter:`from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
# Create svc, scores and svc_cv_mean below
`,
      tests:[{type:'assert', expr:'svc_cv_mean == 0.9', label:'SVC is correctly cross-validated (0.9)'}]
    },
    {
      title:'See a weak C setting hurt performance',
      desc:`Using X and passed from before, create svc_weak = SVC(C=0.1), then
        weak_scores = cross_val_score(svc_weak, X, passed, cv=5). Create
        weak_cv_mean = round(float(weak_scores.mean()), 2). Assert that weak_cv_mean == 0.6 — a boundary that's
        too tolerant of mistakes performs noticeably worse here.`,
      starter:`from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
# Create svc_weak, weak_scores and weak_cv_mean below
`,
      tests:[{type:'assert', expr:'weak_cv_mean == 0.6', label:'A weak C setting is correctly shown to hurt performance (0.6)'}]
    },
    {
      title:'Confirm a stronger C recovers performance',
      desc:`Using X and passed from before, create svc_strong = SVC(C=10), then
        strong_scores = cross_val_score(svc_strong, X, passed, cv=5). Create
        strong_cv_mean = round(float(strong_scores.mean()), 2). Assert that strong_cv_mean == 0.9 and
        strong_cv_mean > 0.6.`,
      starter:`from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
# Create svc_strong, strong_scores and strong_cv_mean below
`,
      tests:[{type:'assert', expr:'strong_cv_mean == 0.9 and strong_cv_mean > 0.6', label:'A stronger C setting correctly recovers performance'}]
    },
    {
      title:'Compare SVC against RandomForest',
      desc:`Using X and passed from before, create rf = RandomForestClassifier(n_estimators=50, random_state=42),
        then rf_scores = cross_val_score(rf, X, passed, cv=5) and rf_cv_mean = round(float(rf_scores.mean()), 2).
        Create svc = SVC(), svc_scores = cross_val_score(svc, X, passed, cv=5), and
        svc_cv_mean = round(float(svc_scores.mean()), 2). Assert that svc_cv_mean == 0.9 and rf_cv_mean == 0.77
        and svc_cv_mean > rf_cv_mean — SVC genuinely outperforms the default RandomForest here.`,
      starter:`from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
# Create rf, rf_cv_mean, svc and svc_cv_mean below
`,
      tests:[{type:'assert', expr:'svc_cv_mean == 0.9 and rf_cv_mean == 0.77 and svc_cv_mean > rf_cv_mean', label:'SVC is correctly shown to outperform RandomForest here'}]
    },
    {
      title:'Count the support vectors',
      desc:`Using X and passed from before, create svc = SVC(), fit it on X/passed, then
        n_support = len(svc.support_vectors_). Assert that n_support == 18.`,
      starter:`from sklearn.svm import SVC
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
# Create svc and n_support below
`,
      tests:[{type:'assert', expr:'n_support == 18', label:'The number of support vectors is correctly counted'}]
    }
  ],
  quiz:[
    {
      q:'What does SVC try to find when drawing a decision boundary?',
      options:['The boundary closest to the most points','The boundary with the LARGEST margin — the widest possible gap between classes','A random boundary, retried until it works','The same boundary a decision tree would draw'],
      correct:1,
      explain:'SVC specifically searches for the maximum-margin boundary — the one that stays as far as possible from the nearest points of each class.'
    },
    {
      q:'What does a SMALL value of C do?',
      options:['Makes the boundary stricter, punishing mistakes more','Allows a softer, more tolerant boundary that permits more points on the "wrong" side','Has no effect on the model at all','Only applies to linear kernels'],
      correct:1,
      explain:'A small C relaxes the margin, tolerating more misclassified points during training — sometimes helpful, but too small can genuinely hurt performance, as seen with C=0.1 here.'
    },
    {
      q:'Why does kernel="linear" expose .coef_ but the default kernel="rbf" does not?',
      options:['It is a scikit-learn bug','A linear kernel draws a straight-line boundary describable by simple per-feature weights; rbf\'s curved boundary has no such simple weight representation','coef_ is available for every kernel equally','rbf models cannot be trained at all'],
      correct:1,
      explain:'A straight-line (linear) boundary can be described by one weight per feature, exactly like LogisticRegression — a curved (rbf) boundary fundamentally cannot be reduced to a simple set of weights.'
    },
    {
      q:'Does SVC use the same .fit()/.predict()/.score() interface as RandomForestClassifier or LogisticRegression?',
      options:['No, it needs a completely different API','Yes — every scikit-learn classifier shares the same interface, which is exactly what makes swapping model types so easy','Only .fit() is shared, not .predict()','Only for linear kernels'],
      correct:1,
      explain:'This consistent interface is why Week 8\'s model-comparison pattern (loop over a dict of models, cross-validate each the same way) works for ANY scikit-learn classifier, SVC included.'
    }
  ],
  sandboxStarter3:`from sklearn.svm import SVC

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

svc_linear = SVC(kernel="linear")
svc_linear.fit(X, passed)
print("Coefficients:", svc_linear.coef_.round(3))
`,
  stretchChallenge:{
    title:'Read a linear SVC\'s coefficients',
    desc:`Using X and passed from before, create svc_linear = SVC(kernel="linear"), fit it on X/passed, then
      n_coefs = svc_linear.coef_.shape[1]. Assert that n_coefs == 2 — one weight per feature (hours and
      attendance), readable directly because a linear kernel draws a straight-line boundary.`,
    starter:`from sklearn.svm import SVC
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
# Create svc_linear and n_coefs below
`,
    tests:[
      {type:'assert', expr:'n_coefs == 2', label:'The linear SVC\'s coefficients are correctly read (one per feature)'}
    ]
  }
},
{
  key:'week2', num:2, title:'Which Features Matter? Feature Importance',
  scenarioTag:'Real world: does shoe size actually help predict who passes? Let the model tell you.',
  scenario:`Someone on the school data team jokingly added shoe size to the resit dataset as a "feature" — clearly
    irrelevant to whether a student passes. A RandomForest can tell you exactly how much it actually used each
    feature, confirming (or busting) assumptions about what matters.`,
  objectives:[
    'Read a trained RandomForest\'s feature_importances_',
    'Identify which feature mattered most, and which mattered least',
    'Confirm importances always sum to 1.0',
    'Rank every feature from most to least useful'
  ],
  conceptHtml:`
    <p>Every fitted <code>RandomForestClassifier</code> can tell you how much it actually relied on each feature
    to make its decisions:</p>
    <pre class="code-block">from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(n_estimators=50, random_state=42)
rf.fit(X, y)
print(rf.feature_importances_)   # [0.344 0.532 0.124] — one value per feature, in column order</pre>
    <h3>Let's break down feature_importances_</h3>
    <ul>
      <li><code>feature_importances_</code> is a NumPy array with one number per feature, in the SAME column
        order as <code>X</code> — the first value corresponds to your first feature, and so on.</li>
      <li>Every value is between 0 and 1, and the WHOLE array always sums to exactly 1.0 — importance is a
        relative "share," not an absolute score.</li>
      <li>A LOW importance doesn't mean the feature is wrong or broken — it means the trees rarely found it useful
        for splitting the data, which is exactly what you'd expect from an irrelevant feature like shoe size.</li>
      <li><code>importances.argmax()</code>/<code>.argmin()</code> give you the INDEX of the highest/lowest value
        — pair that index with your feature name list to read which feature it refers to.</li>
    </ul>`,
  sandboxStarter:`from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
shoe_size = [7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance, shoe_size))

rf = RandomForestClassifier(n_estimators=50, random_state=42)
rf.fit(X, passed)
print(rf.feature_importances_.round(3))
`,
  sandboxStarter2:`from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
shoe_size = [7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance, shoe_size))

rf = RandomForestClassifier(n_estimators=50, random_state=42)
rf.fit(X, passed)
importances = rf.feature_importances_
names = ["hours", "attendance", "shoe_size"]
for name, value in zip(names, importances):
    print(name, round(float(value), 3))
`,
  exercises:[
    {
      title:'Find the most important feature',
      desc:`Create hours, attendance, shoe_size and passed exactly as in the concept box (30 values each). Create
        X = list(zip(hours, attendance, shoe_size)). Create rf = RandomForestClassifier(n_estimators=50,
        random_state=42), fit it on X/passed, then importances = rf.feature_importances_. Create
        most_important = int(importances.argmax()). Assert that most_important == 1 — attendance (column index
        1) mattered most.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
shoe_size = [7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
# Create X, rf, importances and most_important below
`,
      tests:[{type:'assert', expr:'most_important == 1', label:'Attendance is correctly identified as the most important feature'}]
    },
    {
      title:'Find the least important feature',
      desc:`Using importances from before, create least_important = int(importances.argmin()). Assert that
        least_important == 2 — shoe size (column index 2), exactly as you'd expect, mattered least.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
shoe_size = [7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance, shoe_size))
rf = RandomForestClassifier(n_estimators=50, random_state=42)
rf.fit(X, passed)
importances = rf.feature_importances_
# Create least_important below
`,
      tests:[{type:'assert', expr:'least_important == 2', label:'Shoe size is correctly identified as the least important feature'}]
    },
    {
      title:'Confirm the importances sum to 1',
      desc:`Using importances from before, create importance_sum = round(float(importances.sum()), 2). Assert
        that importance_sum == 1.0.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
shoe_size = [7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance, shoe_size))
rf = RandomForestClassifier(n_estimators=50, random_state=42)
rf.fit(X, passed)
importances = rf.feature_importances_
# Create importance_sum below
`,
      tests:[{type:'assert', expr:'importance_sum == 1.0', label:'The importances correctly sum to 1.0'}]
    },
    {
      title:'Read the exact attendance importance',
      desc:`Using importances from before, create attendance_importance = round(float(importances[1]), 3). Assert
        that attendance_importance == 0.532.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
shoe_size = [7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance, shoe_size))
rf = RandomForestClassifier(n_estimators=50, random_state=42)
rf.fit(X, passed)
importances = rf.feature_importances_
# Create attendance_importance below
`,
      tests:[{type:'assert', expr:'attendance_importance == 0.532', label:'The exact attendance importance value is correctly read'}]
    },
    {
      title:'Rank every feature',
      desc:`Using importances from before, create ranked = sorted(range(len(importances)), key=lambda i:
        -importances[i]). Assert that ranked == [1, 0, 2] — attendance first, hours second, shoe size last.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
shoe_size = [7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance, shoe_size))
rf = RandomForestClassifier(n_estimators=50, random_state=42)
rf.fit(X, passed)
importances = rf.feature_importances_
# Create ranked below
`,
      tests:[{type:'assert', expr:'ranked == [1, 0, 2]', label:'All three features are correctly ranked by importance'}]
    },
    {
      title:'Read the exact hours importance',
      desc:`Using importances from before, create hours_importance = round(float(importances[0]), 3). Assert
        that hours_importance == 0.344.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
shoe_size = [7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance, shoe_size))
rf = RandomForestClassifier(n_estimators=50, random_state=42)
rf.fit(X, passed)
importances = rf.feature_importances_
# Create hours_importance below
`,
      tests:[{type:'assert', expr:'hours_importance == 0.344', label:'The exact hours importance value is correctly read'}]
    }
  ],
  quiz:[
    {
      q:'What does a LOW feature_importances_ value mean?',
      options:['The feature is broken and should be removed from the dataset','The trees rarely found that feature useful for splitting the data — it didn\'t help much','The model failed to train','The feature has too few decimal places'],
      correct:1,
      explain:'Low importance simply reflects how often (and how usefully) the trees split on that feature — exactly what you\'d expect from something genuinely irrelevant, like shoe size.'
    },
    {
      q:'What do all the values in feature_importances_ always add up to?',
      options:['100','The number of features','1.0 — importance is a relative share, not an absolute score','It varies randomly each time'],
      correct:2,
      explain:'Importances are normalized to sum to 1.0, so each value represents that feature\'s SHARE of the total "credit" for the model\'s decisions.'
    },
    {
      q:'What does importances.argmax() return?',
      options:['The highest importance value itself','The INDEX (column position) of the feature with the highest importance','The feature\'s name as a string','Always 0'],
      correct:1,
      explain:'argmax() returns a position, not a value — you pair that index with your feature name list (in the same column order as X) to find out which feature it refers to.'
    },
    {
      q:'Why is it useful to add an obviously irrelevant feature like shoe_size to a test dataset?',
      options:['It never is, it just wastes memory','It is a sanity check — if the model correctly gives it low importance, that builds confidence the importance numbers are trustworthy','It always improves accuracy','Random Forests require an odd number of features'],
      correct:1,
      explain:'A feature you already KNOW is irrelevant is a great sanity check — if the model correctly ranks it lowest, that\'s good evidence the importance values for your real features are meaningful too.'
    }
  ],
  sandboxStarter3:`from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
shoe_size = [7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance, shoe_size))

rf = RandomForestClassifier(n_estimators=50, random_state=42)
rf.fit(X, passed)
importances = rf.feature_importances_
names = ["hours", "attendance", "shoe_size"]
ranked = sorted(zip(names, importances), key=lambda pair: -pair[1])
for name, value in ranked:
    print(name, round(float(value), 3))
`,
  stretchChallenge:{
    title:'Build a named importance report',
    desc:`Using importances from before, create names = ["hours", "attendance", "shoe_size"] and
      importance_dict = {name: round(float(value), 3) for name, value in zip(names, importances)}. Assert that
      importance_dict["shoe_size"] < 0.15 and importance_dict["attendance"] > importance_dict["hours"] and
      importance_dict["hours"] > importance_dict["shoe_size"] — a clean, named summary confirming the exact
      ranking by hand.`,
    starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
shoe_size = [7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8,6,9,7,8]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance, shoe_size))
rf = RandomForestClassifier(n_estimators=50, random_state=42)
rf.fit(X, passed)
importances = rf.feature_importances_
# Create names and importance_dict below
`,
    tests:[
      {type:'assert', expr:'importance_dict["shoe_size"] < 0.15 and importance_dict["attendance"] > importance_dict["hours"] and importance_dict["hours"] > importance_dict["shoe_size"]', label:'The named importance report correctly confirms the full ranking'}
    ]
  }
},
{
  key:'week3', num:3, title:'Tuning for Real: GridSearchCV Over Multiple Parameters',
  scenarioTag:'Real world: a model has more than one dial — tune them all at once, not one at a time.',
  scenario:`Week 7's GridSearchCV searched one setting at a time. RandomForestClassifier has SEVERAL settings that
    interact with each other — the best tree depth can depend on how many trees you use. Searching them together,
    all at once, finds combinations a one-at-a-time search could easily miss.`,
  objectives:[
    'Build a param_grid with more than one hyperparameter',
    'Read the full winning combination from best_params_',
    'Know exactly how many candidate combinations a multi-parameter grid tries',
    'Read which single candidate, by index, actually won'
  ],
  conceptHtml:`
    <p>A <code>param_grid</code> can list more than one setting — GridSearchCV tries every COMBINATION, not just
    every value of each setting separately:</p>
    <pre class="code-block">from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

param_grid = {
    "max_depth": [1, 2, 3, 4],
    "n_estimators": [10, 50, 100],
    "min_samples_leaf": [1, 2, 4]
}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5)
grid.fit(X, y)
print(grid.best_params_)
# {'max_depth': 1, 'min_samples_leaf': 1, 'n_estimators': 50}</pre>
    <h3>Let's break down a multi-parameter search</h3>
    <ul>
      <li>With 3 settings listed (4 values × 3 values × 3 values), GridSearchCV tries every COMBINATION —
        4 × 3 × 3 = 36 total candidates, each one fully 5-fold cross-validated.</li>
      <li><code>grid.best_params_</code> now returns a dictionary with ALL THREE winning values at once — the
        combination that scored highest together, not three separate "best" values found independently.</li>
      <li><code>grid.best_index_</code> tells you WHICH row, by position, in the full results table
        (<code>grid.cv_results_</code>) corresponds to that winning combination.</li>
      <li>Searching parameters together (rather than tuning <code>max_depth</code> alone, then
        <code>n_estimators</code> alone) can find a genuinely better combination, since settings can interact —
        the best depth for 10 trees isn't necessarily the best depth for 100 trees.</li>
    </ul>`,
  sandboxStarter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

param_grid = {"max_depth": [1, 2, 3, 4], "n_estimators": [10, 50, 100], "min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5)
grid.fit(X, passed)
print(grid.best_params_)
`,
  sandboxStarter2:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

param_grid = {"max_depth": [1, 2, 3, 4], "n_estimators": [10, 50, 100], "min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5)
grid.fit(X, passed)
print("Total candidates tried:", len(grid.cv_results_["params"]))
print("Best score:", round(grid.best_score_, 2))
`,
  exercises:[
    {
      title:'Search three settings at once',
      desc:`Create hours, attendance and passed exactly as in the concept box (30 values each). Create
        X = list(zip(hours, attendance)). Build param_grid = {"max_depth": [1, 2, 3, 4], "n_estimators": [10, 50,
        100], "min_samples_leaf": [1, 2, 4]} and grid = GridSearchCV(RandomForestClassifier(random_state=42),
        param_grid, cv=5), then grid.fit(X, passed). Create best_depth = grid.best_params_["max_depth"]. Assert
        that best_depth == 1.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
# Create X, param_grid, grid and best_depth below
`,
      tests:[{type:'assert', expr:'best_depth == 1', label:'The best max_depth from the multi-parameter search is correctly read'}]
    },
    {
      title:'Read the best n_estimators from the same search',
      desc:`Using grid from before, create best_n = grid.best_params_["n_estimators"]. Assert that best_n == 50.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
param_grid = {"max_depth": [1, 2, 3, 4], "n_estimators": [10, 50, 100], "min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5)
grid.fit(X, passed)
# Create best_n below
`,
      tests:[{type:'assert', expr:'best_n == 50', label:'The best n_estimators from the SAME winning combination is correctly read'}]
    },
    {
      title:'Read the best min_samples_leaf too',
      desc:`Using grid from before, create best_leaf = grid.best_params_["min_samples_leaf"]. Assert that
        best_leaf == 1 — all three winning values come from the SAME combination, found together.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
param_grid = {"max_depth": [1, 2, 3, 4], "n_estimators": [10, 50, 100], "min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5)
grid.fit(X, passed)
# Create best_leaf below
`,
      tests:[{type:'assert', expr:'best_leaf == 1', label:'The best min_samples_leaf from the winning combination is correctly read'}]
    },
    {
      title:'Read the winning score',
      desc:`Using grid from before, create best_score = round(grid.best_score_, 2). Assert that
        best_score == 0.87.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
param_grid = {"max_depth": [1, 2, 3, 4], "n_estimators": [10, 50, 100], "min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5)
grid.fit(X, passed)
# Create best_score below
`,
      tests:[{type:'assert', expr:'best_score == 0.87', label:'The winning cross-validated score is correctly read'}]
    },
    {
      title:'Count every candidate combination tried',
      desc:`Using grid from before, create n_candidates = len(grid.cv_results_["params"]). Assert that
        n_candidates == 36 — 4 depths times 3 estimator counts times 3 leaf sizes.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
param_grid = {"max_depth": [1, 2, 3, 4], "n_estimators": [10, 50, 100], "min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5)
grid.fit(X, passed)
# Create n_candidates below
`,
      tests:[{type:'assert', expr:'n_candidates == 36', label:'All 36 candidate combinations are correctly counted'}]
    },
    {
      title:'Find the winning candidate\'s position',
      desc:`Using grid from before, create best_index = int(grid.best_index_). Assert that best_index == 1 — the
        position, within the full results table, of the combination that actually won.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
param_grid = {"max_depth": [1, 2, 3, 4], "n_estimators": [10, 50, 100], "min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5)
grid.fit(X, passed)
# Create best_index below
`,
      tests:[{type:'assert', expr:'best_index == 1', label:'The winning candidate\'s position in the results table is correctly read'}]
    }
  ],
  quiz:[
    {
      q:'With param_grid = {"max_depth": [1,2,3,4], "n_estimators": [10,50,100], "min_samples_leaf": [1,2,4]}, how many total candidates does GridSearchCV try?',
      options:['4 + 3 + 3 = 10','4 \\u00d7 3 \\u00d7 3 = 36','Just 3, one per setting','It depends on cv'],
      correct:1,
      explain:'GridSearchCV tries every COMBINATION across all listed settings — multiply the number of values for each setting together.'
    },
    {
      q:'What does grid.best_params_ contain when the grid has 3 settings?',
      options:['Only the single most important setting','A dictionary with the winning value for ALL THREE settings, found together as one combination','Three separate best-of-each-setting dictionaries','The original param_grid, unchanged'],
      correct:1,
      explain:'best_params_ reflects the ONE combination that scored highest overall — not three independently-optimal values that might not even work well together.'
    },
    {
      q:'Why search multiple settings together instead of tuning one at a time?',
      options:['It never matters, one-at-a-time is just as good','Settings can interact — the best depth for 10 trees isn\'t necessarily the best depth for 100 trees, so searching together can find combinations a one-at-a-time search would miss','It is always faster','GridSearchCV cannot accept more than one setting'],
      correct:1,
      explain:'Hyperparameters often interact — searching them jointly is the only way to be sure you\'re not missing a genuinely better combination.'
    },
    {
      q:'What does grid.best_index_ tell you?',
      options:['The best score itself','The position, within the full results table, of the winning candidate','The number of settings searched','Always 0'],
      correct:1,
      explain:'best_index_ is a row position into grid.cv_results_ — useful for looking up any other detail about the winning candidate directly from the results table.'
    }
  ],
  sandboxStarter3:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
import numpy as np

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

param_grid = {"max_depth": [1, 2, 3, 4], "n_estimators": [10, 50, 100], "min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5)
grid.fit(X, passed)

scores = np.array(grid.cv_results_["mean_test_score"])
n_tied = int((scores.round(2) == round(grid.best_score_, 2)).sum())
print("Candidates tied for the best score:", n_tied)
`,
  stretchChallenge:{
    title:'How many candidates tied for first place?',
    desc:`Using grid from before, create scores = np.array(grid.cv_results_["mean_test_score"]). Create
      n_tied = int((scores.round(2) == round(grid.best_score_, 2)).sum()). Assert that n_tied == 28 — on this
      dataset, a LOT of combinations tie for the best rounded score, showing the model is fairly insensitive to
      several of these settings here.`,
    starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
import numpy as np
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
param_grid = {"max_depth": [1, 2, 3, 4], "n_estimators": [10, 50, 100], "min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5)
grid.fit(X, passed)
# Create scores and n_tied below
`,
    tests:[
      {type:'assert', expr:'n_tied == 28', label:'The number of tied-for-best candidates is correctly counted'}
    ]
  }
},
{
  key:'week4', num:4, title:'Spotting Overfitting with Real Scores',
  scenarioTag:'Real world: a model that scores 1.0 on its OWN training data isn\'t automatically a good model.',
  scenario:`A model trained with no limits can memorize the exact students in your training data — every quirk,
    every coincidence — rather than learning the real pattern. It'll then score perfectly on data it has already
    seen, while performing much worse on anyone new. Comparing a model's score on its OWN training data against
    its cross-validated score is how you catch this before it fools you.`,
  objectives:[
    'Compute a model\'s score on the exact data it was trained on',
    'Compare that training score against its cross-validated score',
    'Recognize a large gap between the two as a sign of overfitting',
    'See how limiting max_depth can shrink that gap'
  ],
  conceptHtml:`
    <p>Calling <code>.score()</code> on the SAME data a model was trained on tells you how well it fits data it has
    already memorized — not how well it will do on anyone new:</p>
    <pre class="code-block">from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score

model = RandomForestClassifier(random_state=42)
model.fit(X, y)
train_score = model.score(X, y)          # 1.0 — scored on data it already saw
cv_score = cross_val_score(model, X, y, cv=5).mean()   # 0.77 — scored on held-out folds
print(train_score, cv_score)
print(round(train_score - cv_score, 2))  # 0.23 — a big gap</pre>
    <h3>Let's break down what this gap means</h3>
    <ul>
      <li><code>model.score(X, y)</code> on the TRAINING data can look artificially perfect — an unrestricted tree
        can grow deep enough to carve out a rule for every single training example, including its noise.</li>
      <li><code>cross_val_score(...).mean()</code> always scores on data the model did NOT see while fitting that
        fold — a far more honest estimate of how the model performs on students it has never met.</li>
      <li>A LARGE gap between the two (train much higher than cross-validated) is the classic sign of
        overfitting — the model learned the training rows by heart instead of the underlying pattern.</li>
      <li>Limiting <code>max_depth</code> stops individual trees from growing complex enough to memorize every
        row, which usually shrinks the gap — sometimes without hurting the cross-validated score at all.</li>
    </ul>`,
  sandboxStarter:`from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

model = RandomForestClassifier(random_state=42)
model.fit(X, passed)
print("Training score:", model.score(X, passed))
`,
  sandboxStarter2:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

model = RandomForestClassifier(random_state=42)
model.fit(X, passed)
train_score = round(model.score(X, passed), 2)
cv_score = round(cross_val_score(model, X, passed, cv=5).mean(), 2)
print("Training score:", train_score)
print("Cross-validated score:", cv_score)
print("Gap:", round(train_score - cv_score, 2))
`,
  exercises:[
    {
      title:'Score a model on its own training data',
      desc:`Create hours, attendance and passed exactly as in the concept box (30 values each). Create
        X = list(zip(hours, attendance)). Build model = RandomForestClassifier(random_state=42) and
        model.fit(X, passed). Create train_score = round(model.score(X, passed), 2). Assert that
        train_score == 1.0 — a perfect score, on data it has already seen.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
# Create X, model and train_score below
`,
      tests:[{type:'assert', expr:'train_score == 1.0', label:'The training score is correctly computed'}]
    },
    {
      title:'Now score the SAME model fairly',
      desc:`Using the same model from before, create cv_score = round(cross_val_score(model, X, passed,
        cv=5).mean(), 2) (import cross_val_score from sklearn.model_selection). Assert that cv_score == 0.77 —
        noticeably lower than the training score.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
model = RandomForestClassifier(random_state=42)
model.fit(X, passed)
train_score = round(model.score(X, passed), 2)
# Create cv_score below
`,
      tests:[{type:'assert', expr:'cv_score == 0.77', label:'The cross-validated score is correctly computed'}]
    },
    {
      title:'Train a shallower, regularized model',
      desc:`Create model2 = RandomForestClassifier(max_depth=2, random_state=42) and model2.fit(X, passed). Create
        train_score_shallow = round(model2.score(X, passed), 2). Assert that train_score_shallow == 0.93 — lower
        than the unrestricted model's perfect training score.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
# Create model2 and train_score_shallow below
`,
      tests:[{type:'assert', expr:'train_score_shallow == 0.93', label:'The shallow model\'s training score is correctly computed'}]
    },
    {
      title:'Cross-validate the shallow model too',
      desc:`Using model2 from before, create cv_score_shallow = round(cross_val_score(model2, X, passed,
        cv=5).mean(), 2). Assert that cv_score_shallow == 0.87 — much closer to its training score than the
        unrestricted model was.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
model2 = RandomForestClassifier(max_depth=2, random_state=42)
model2.fit(X, passed)
train_score_shallow = round(model2.score(X, passed), 2)
# Create cv_score_shallow below
`,
      tests:[{type:'assert', expr:'cv_score_shallow == 0.87', label:'The shallow model\'s cross-validated score is correctly computed'}]
    },
    {
      title:'Measure the unrestricted model\'s overfitting gap',
      desc:`Using train_score and cv_score from the unrestricted model (fit exactly as in the concept box,
        model = RandomForestClassifier(random_state=42)), create gap = round(train_score - cv_score, 2). Assert
        that gap == 0.23.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
model = RandomForestClassifier(random_state=42)
model.fit(X, passed)
train_score = round(model.score(X, passed), 2)
cv_score = round(cross_val_score(model, X, passed, cv=5).mean(), 2)
# Create gap below
`,
      tests:[{type:'assert', expr:'gap == 0.23', label:'The unrestricted model\'s overfitting gap is correctly measured'}]
    },
    {
      title:'Measure the shallow model\'s gap and compare',
      desc:`Using train_score_shallow and cv_score_shallow from the max_depth=2 model, create
        gap_shallow = round(train_score_shallow - cv_score_shallow, 2). Assert that gap_shallow == 0.06 — a much
        smaller gap than the unrestricted model's 0.23, showing the shallower model generalizes more honestly.`,
      starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
model2 = RandomForestClassifier(max_depth=2, random_state=42)
model2.fit(X, passed)
train_score_shallow = round(model2.score(X, passed), 2)
cv_score_shallow = round(cross_val_score(model2, X, passed, cv=5).mean(), 2)
# Create gap_shallow below
`,
      tests:[{type:'assert', expr:'gap_shallow == 0.06', label:'The shallow model\'s overfitting gap is correctly measured'}]
    }
  ],
  quiz:[
    {
      q:'A model scores 1.0 on its own training data but only 0.77 when cross-validated. What does this suggest?',
      options:['The model is definitely the best possible choice','Overfitting — the model memorized the training rows instead of learning a generalizable pattern','The cross-validated score must be a bug','Nothing — training score is all that matters'],
      correct:1,
      explain:'A big gap between a near-perfect training score and a much lower cross-validated score is the classic signature of overfitting.'
    },
    {
      q:'Why is a model\'s score on its OWN training data potentially misleading?',
      options:['It isn\'t misleading, it\'s the most important number','The model has already seen every one of those exact examples while fitting, so a high score there doesn\'t prove it will work on anyone new','Training scores are always artificially low','It only applies to linear models'],
      correct:1,
      explain:'Training score measures fit to data the model has already memorized, not how well it generalizes to new, unseen students.'
    },
    {
      q:'What tends to happen to the overfitting gap when you limit max_depth on a RandomForest?',
      options:['The gap always grows larger','The gap can shrink, since shallower trees can\'t carve out a rule for every single training row','max_depth has no effect on overfitting at all','The training score always becomes 0'],
      correct:1,
      explain:'Limiting tree depth is a form of regularization — it prevents the model from growing complex enough to memorize noise in the training data.'
    },
    {
      q:'Which score should you trust more to estimate real-world performance?',
      options:['The training score, since it uses more data','The cross-validated score, since it\'s always measured on data the model didn\'t train on for that fold','Whichever score is higher','They are always identical, so it doesn\'t matter'],
      correct:1,
      explain:'Cross-validated score reflects performance on held-out data — a far more honest estimate of how the model will do on students it has never seen.'
    }
  ],
  sandboxStarter3:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

model2 = RandomForestClassifier(max_depth=2, random_state=42)
model2.fit(X, passed)
train_score_shallow = round(model2.score(X, passed), 2)
cv_score_shallow = round(cross_val_score(model2, X, passed, cv=5).mean(), 2)
print("Shallow model — training:", train_score_shallow, "cross-validated:", cv_score_shallow)
print("Shallow gap:", round(train_score_shallow - cv_score_shallow, 2), "vs unrestricted gap: 0.23")
`,
  stretchChallenge:{
    title:'Is a middle-depth model any better?',
    desc:`Create model3 = RandomForestClassifier(max_depth=3, random_state=42) and model3.fit(X, passed). Create
      train_score_mid = round(model3.score(X, passed), 2), cv_score_mid = round(cross_val_score(model3, X, passed,
      cv=5).mean(), 2), and gap_mid = round(train_score_mid - cv_score_mid, 2). Assert that gap_mid == 0.16 — worse
      than max_depth=2's gap of 0.06, even though its cross-validated score (0.77) is no better than the fully
      unrestricted model's — depth 3 gets the worst of both here, not a smooth middle ground.`,
    starter:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))
# Create model3, train_score_mid, cv_score_mid and gap_mid below
`,
    tests:[
      {type:'assert', expr:'gap_mid == 0.16', label:'The middle-depth model\'s overfitting gap is correctly measured'}
    ]
  }
},
{
  key:'week5', num:5, title:'The Full Preprocessing + Tuning Pipeline',
  scenarioTag:'Real world: real settings never come one at a time — tune the whole pipeline, all its dials, at once.',
  scenario:`Real school data mixes numeric columns (hours, attendance) with a categorical one (method: solo or
    group) — and a real model has SEVERAL settings worth tuning at once. Combining a ColumnTransformer, a model,
    and a multi-parameter GridSearchCV into one Pipeline lets every dial — preprocessing included — get searched
    together, as a single object.`,
  objectives:[
    'Build a Pipeline combining a ColumnTransformer and a model',
    'Tune more than one model setting INSIDE that pipeline at once',
    'Read every winning setting from best_params_',
    'Reach into the winning pipeline\'s own fitted model step'
  ],
  conceptHtml:`
    <p>A <code>param_grid</code> can tune SEVERAL settings that all belong to a pipeline step — combine that with a
    ColumnTransformer handling mixed data, and everything searches together as one object:</p>
    <pre class="code-block">from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

pipe = Pipeline([
    ("prep", ColumnTransformer([
        ("num", StandardScaler(), ["hours", "attendance"]),
        ("cat", OneHotEncoder(), ["method"])
    ])),
    ("rf", RandomForestClassifier(random_state=42))
])
param_grid = {
    "rf__max_depth": [1, 2, 3, 4],
    "rf__n_estimators": [10, 50, 100],
    "rf__min_samples_leaf": [1, 2, 4]
}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
print(grid.best_params_)
# {'rf__max_depth': 2, 'rf__min_samples_leaf': 2, 'rf__n_estimators': 10}</pre>
    <h3>Let's break down tuning several settings inside a full pipeline</h3>
    <ul>
      <li>Every key in <code>param_grid</code> still needs the <code>"rf__"</code> prefix — GridSearchCV has no
        other way to know which pipeline step a setting belongs to.</li>
      <li>The candidate count multiplies exactly like tuning a bare model (Week 3): 4 depths &times; 3 estimator
        counts &times; 3 leaf sizes = 36 candidates — the ColumnTransformer doesn't add any extra candidates, it
        just runs fresh on every one.</li>
      <li><code>grid.best_estimator_</code> is the WHOLE winning pipeline — preprocessing and model together,
        already fitted and ready to use directly.</li>
      <li><code>grid.best_estimator_.named_steps["rf"]</code> lets you reach into the winning pipeline and read the
        exact settings its model step ended up with — confirming, for example, how many trees the best combination
        actually used.</li>
    </ul>`,
  sandboxStarter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]

pipe = Pipeline([
    ("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])),
    ("rf", RandomForestClassifier(random_state=42))
])
pipe.fit(X, y)
print("Untuned pipeline score:", round(pipe.score(X, y), 2))
`,
  sandboxStarter2:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]

pipe = Pipeline([
    ("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])),
    ("rf", RandomForestClassifier(random_state=42))
])
param_grid = {"rf__max_depth": [1, 2, 3, 4], "rf__n_estimators": [10, 50, 100], "rf__min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
print("Best settings:", grid.best_params_)
print("Best cross-validated score:", round(grid.best_score_, 2))
`,
  exercises:[
    {
      title:'Build and tune the full pipeline',
      desc:`Create hours, attendance, method and passed exactly as in the concept box (30 values each), then build
        df with all four as columns. Create X = df[["hours", "attendance", "method"]] and y = df["passed"]. Build
        pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat",
        OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(random_state=42))]). Build
        param_grid = {"rf__max_depth": [1, 2, 3, 4], "rf__n_estimators": [10, 50, 100], "rf__min_samples_leaf":
        [1, 2, 4]} and grid = GridSearchCV(pipe, param_grid, cv=5), then grid.fit(X, y). Create
        best_depth = grid.best_params_["rf__max_depth"]. Assert that best_depth == 2.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
# Create df, X, y, pipe, param_grid, grid and best_depth below
`,
      tests:[{type:'assert', expr:'best_depth == 2', label:'The best rf__max_depth from the full pipeline search is correctly read'}]
    },
    {
      title:'Read the best n_estimators too',
      desc:`Using grid from before, create best_n = grid.best_params_["rf__n_estimators"]. Assert that
        best_n == 10.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(random_state=42))])
param_grid = {"rf__max_depth": [1, 2, 3, 4], "rf__n_estimators": [10, 50, 100], "rf__min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
# Create best_n below
`,
      tests:[{type:'assert', expr:'best_n == 10', label:'The best rf__n_estimators from the SAME winning combination is correctly read'}]
    },
    {
      title:'Read the best cross-validated score',
      desc:`Using grid from before, create best_score = round(grid.best_score_, 2). Assert that
        best_score == 0.9.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(random_state=42))])
param_grid = {"rf__max_depth": [1, 2, 3, 4], "rf__n_estimators": [10, 50, 100], "rf__min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
# Create best_score below
`,
      tests:[{type:'assert', expr:'best_score == 0.9', label:'The winning cross-validated score is correctly read'}]
    },
    {
      title:'Count every candidate the pipeline search tried',
      desc:`Using grid from before, create n_candidates = len(grid.cv_results_["params"]). Assert that
        n_candidates == 36 — the ColumnTransformer doesn't change the candidate count, only the model's three
        settings do (4 &times; 3 &times; 3).`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(random_state=42))])
param_grid = {"rf__max_depth": [1, 2, 3, 4], "rf__n_estimators": [10, 50, 100], "rf__min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
# Create n_candidates below
`,
      tests:[{type:'assert', expr:'n_candidates == 36', label:'All 36 candidate combinations are correctly counted'}]
    },
    {
      title:'Read the third winning setting',
      desc:`Using grid from before, create best_leaf = grid.best_params_["rf__min_samples_leaf"]. Assert that
        best_leaf == 2 — all three winning values (depth, estimators, leaf size) came from the SAME combination,
        found together.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(random_state=42))])
param_grid = {"rf__max_depth": [1, 2, 3, 4], "rf__n_estimators": [10, 50, 100], "rf__min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
# Create best_leaf below
`,
      tests:[{type:'assert', expr:'best_leaf == 2', label:'The best rf__min_samples_leaf from the winning combination is correctly read'}]
    },
    {
      title:'Reach into the winning pipeline\'s own model step',
      desc:`Using grid from before, create best_pipe = grid.best_estimator_. Create
        winning_n_estimators = best_pipe.named_steps["rf"].n_estimators. Assert that winning_n_estimators == 10 —
        confirming, directly from the winning pipeline itself, the exact setting its model step ended up with.`,
      starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(random_state=42))])
param_grid = {"rf__max_depth": [1, 2, 3, 4], "rf__n_estimators": [10, 50, 100], "rf__min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
# Create best_pipe and winning_n_estimators below
`,
      tests:[{type:'assert', expr:'winning_n_estimators == 10', label:'The winning pipeline\'s own model step is correctly reached into'}]
    }
  ],
  quiz:[
    {
      q:'When param_grid = {"rf__max_depth": [...], "rf__n_estimators": [...], "rf__min_samples_leaf": [...]} is used with a pipeline, does the ColumnTransformer step add any extra candidates?',
      options:['Yes, it multiplies the candidate count further','No — only the settings actually listed in param_grid affect the candidate count, the preprocessing step just runs fresh on each one','Yes, it always doubles the candidates','It depends on how many columns the ColumnTransformer has'],
      correct:1,
      explain:'The candidate count only depends on the settings listed in param_grid — 4 \\u00d7 3 \\u00d7 3 = 36 here — the ColumnTransformer is refit consistently on every candidate but doesn\'t add candidates of its own.'
    },
    {
      q:'What is grid.best_estimator_ when grid was built from a Pipeline?',
      options:['Just the winning model, with preprocessing discarded','The ENTIRE winning pipeline — preprocessing and model together — already fitted and ready to use','A blank, unfitted copy of the pipeline','The original param_grid'],
      correct:1,
      explain:'best_estimator_ is the full pipeline object, refit with the winning settings — you can call .predict() on it directly, with preprocessing already built in.'
    },
    {
      q:'What does best_pipe.named_steps["rf"].n_estimators let you check?',
      options:['Nothing, named_steps only works on unfitted pipelines','The exact n_estimators setting the WINNING model ended up with, read directly from the fitted pipeline','The number of features used','The cross-validated score'],
      correct:1,
      explain:'named_steps reaches into the fitted pipeline\'s actual steps — letting you confirm precisely which setting a search landed on, straight from the object itself.'
    },
    {
      q:'Why tune the "rf__" settings together with the ColumnTransformer in ONE pipeline, rather than tuning the model separately afterward?',
      options:['It is not possible to tune them separately','Every candidate then gets IDENTICAL preprocessing, and the whole pipeline can be reused directly afterward with no risk of mismatched steps','It always produces a higher score','It removes the need for cross-validation'],
      correct:1,
      explain:'Bundling preprocessing and tuning into one pipeline guarantees consistency — every candidate is compared fairly, and the winning pipeline is immediately usable as a single, complete object.'
    }
  ],
  sandboxStarter3:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]

pipe = Pipeline([
    ("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])),
    ("rf", RandomForestClassifier(random_state=42))
])
param_grid = {"rf__max_depth": [1, 2, 3, 4], "rf__n_estimators": [10, 50, 100], "rf__min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)

best_pipe = grid.best_estimator_
print("Winning settings:", grid.best_params_)
print("Winning model's n_estimators, read directly:", best_pipe.named_steps["rf"].n_estimators)
`,
  stretchChallenge:{
    title:'Confirm both feature types survived tuning',
    desc:`Using grid from before, create best_pipe = grid.best_estimator_. Create
      n_features = best_pipe.named_steps["prep"].transform(X).shape[1]. Assert that n_features == 4 — proving the
      WINNING pipeline still correctly includes both numeric columns and the one-hot-encoded categorical column,
      not just whichever model settings happened to score best.`,
    starter:`import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(random_state=42))])
param_grid = {"rf__max_depth": [1, 2, 3, 4], "rf__n_estimators": [10, 50, 100], "rf__min_samples_leaf": [1, 2, 4]}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
# Create best_pipe and n_features below
`,
    tests:[
      {type:'assert', expr:'n_features == 4', label:'Both numeric and categorical features are confirmed present in the winning pipeline'}
    ]
  }
},
{
  key:'week6', num:6, title:'Saving Your Work: joblib',
  scenarioTag:'Real world: nobody wants to re-run last week\'s search every time they need a prediction.',
  scenario:`Week 5's search found a genuinely good pipeline — max_depth 2, 10 trees, min_samples_leaf 2, scoring
    0.9. Re-running that whole GridSearchCV every single time you want one prediction would be slow and pointless.
    joblib lets you save the EXACT fitted pipeline to a file once, then load it back instantly, ready to predict —
    no retraining required.`,
  objectives:[
    'Save a fitted model or pipeline to disk with joblib.dump',
    'Load it back with joblib.load, ready to use immediately',
    'Confirm a loaded object predicts identically to the original',
    'Explain why saving a fitted model matters for real use'
  ],
  conceptHtml:`
    <p><code>joblib.dump</code> saves a fitted object exactly as it is — <code>joblib.load</code> brings it back,
    fully ready, with no re-fitting needed:</p>
    <pre class="code-block">import joblib
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(max_depth=2, random_state=42)
model.fit(X, y)

joblib.dump(model, "model.joblib")     # save the FITTED model to a file
loaded = joblib.load("model.joblib")   # load it back later — no .fit() needed!

print(list(model.predict(X)) == list(loaded.predict(X)))   # True — identical predictions</pre>
    <h3>Let's break down saving and loading a fitted model</h3>
    <ul>
      <li><code>joblib.dump(obj, "file.joblib")</code> writes the object EXACTLY as it currently is — every
        learned setting, every tree, every fitted preprocessing step — to a file.</li>
      <li><code>joblib.load("file.joblib")</code> reads that file back into a brand-new variable that behaves
        IDENTICALLY to the original — you can call <code>.predict()</code> on it immediately.</li>
      <li>Saving a whole <code>Pipeline</code> (not just the bare model) saves EVERY step together — preprocessing
        and model — so the loaded object is just as complete and ready-to-use as the original.</li>
      <li>This matters because real training can take real time (and real data) — saving once and loading many
        times means a prediction is instant, and you always get the SAME model, not a freshly-retrained one that
        might come out slightly different.</li>
    </ul>`,
  sandboxStarter:`import joblib
from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
X = list(zip(hours, attendance))

model = RandomForestClassifier(max_depth=2, random_state=42)
model.fit(X, passed)
joblib.dump(model, "model.joblib")
loaded = joblib.load("model.joblib")
print("Predictions match:", list(model.predict(X)) == list(loaded.predict(X)))
`,
  sandboxStarter2:`import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]

pipe = Pipeline([
    ("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])),
    ("rf", RandomForestClassifier(max_depth=2, n_estimators=10, min_samples_leaf=2, random_state=42))
])
pipe.fit(X, y)
joblib.dump(pipe, "pipe.joblib")
loaded_pipe = joblib.load("pipe.joblib")
print("Original score:", round(pipe.score(X, y), 2))
print("Loaded score:", round(loaded_pipe.score(X, y), 2))
`,
  exercises:[
    {
      title:'Save and reload a fitted pipeline',
      desc:`Create hours, attendance, method and passed exactly as in the concept box (30 values each), then build
        df, X and y exactly as in Week 5. Build
        pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat",
        OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(max_depth=2, n_estimators=10,
        min_samples_leaf=2, random_state=42))]) — this is Week 5's actual winning combination. Fit it on X/y, then
        joblib.dump(pipe, "pipe.joblib") and loaded = joblib.load("pipe.joblib"). Create
        loaded_score = round(loaded.score(X, y), 2). Assert that loaded_score == 0.9.`,
      starter:`import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
# Create df, X, y, pipe, loaded and loaded_score below
`,
      tests:[{type:'assert', expr:'loaded_score == 0.9', label:'The reloaded pipeline scores identically to the original'}]
    },
    {
      title:'Confirm predictions match exactly',
      desc:`Using pipe and loaded from before, create
        predictions_match = (list(pipe.predict(X)) == list(loaded.predict(X))). Assert that
        predictions_match == True — the loaded pipeline predicts EXACTLY like the original, with zero retraining.`,
      starter:`import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(max_depth=2, n_estimators=10, min_samples_leaf=2, random_state=42))])
pipe.fit(X, y)
joblib.dump(pipe, "pipe.joblib")
loaded = joblib.load("pipe.joblib")
# Create predictions_match below
`,
      tests:[{type:'assert', expr:'predictions_match == True', label:'The loaded pipeline\'s predictions exactly match the original\'s'}]
    },
    {
      title:'Read a tuned setting from the reloaded pipeline',
      desc:`Using loaded from before, create loaded_n = loaded.named_steps["rf"].n_estimators. Assert that
        loaded_n == 10 — the exact tuned setting, still intact after saving and reloading.`,
      starter:`import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(max_depth=2, n_estimators=10, min_samples_leaf=2, random_state=42))])
pipe.fit(X, y)
joblib.dump(pipe, "pipe.joblib")
loaded = joblib.load("pipe.joblib")
# Create loaded_n below
`,
      tests:[{type:'assert', expr:'loaded_n == 10', label:'The tuned n_estimators setting survives saving and reloading'}]
    },
    {
      title:'Read a second tuned setting',
      desc:`Using loaded from before, create loaded_leaf = loaded.named_steps["rf"].min_samples_leaf. Assert that
        loaded_leaf == 2.`,
      starter:`import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(max_depth=2, n_estimators=10, min_samples_leaf=2, random_state=42))])
pipe.fit(X, y)
joblib.dump(pipe, "pipe.joblib")
loaded = joblib.load("pipe.joblib")
# Create loaded_leaf below
`,
      tests:[{type:'assert', expr:'loaded_leaf == 2', label:'The tuned min_samples_leaf setting survives saving and reloading'}]
    },
    {
      title:'Confirm no retraining happened',
      desc:`Using loaded from before, create loaded_depth = loaded.named_steps["rf"].max_depth. Assert that
        loaded_depth == 2 — all three of Week 5's winning settings (depth, estimators, leaf size) came back
        exactly as saved, with no re-fitting.`,
      starter:`import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(max_depth=2, n_estimators=10, min_samples_leaf=2, random_state=42))])
pipe.fit(X, y)
joblib.dump(pipe, "pipe.joblib")
loaded = joblib.load("pipe.joblib")
# Create loaded_depth below
`,
      tests:[{type:'assert', expr:'loaded_depth == 2', label:'The tuned max_depth setting survives saving and reloading'}]
    },
    {
      title:'Predict on a brand-new student with the loaded pipeline',
      desc:`Using loaded from before, create new_student = pd.DataFrame({"hours": [6], "attendance": [80],
        "method": ["group"]}). Create new_prediction = int(loaded.predict(new_student)[0]). Assert that
        new_prediction == 1 — a brand-new prediction, made with zero retraining, straight from the file you saved.`,
      starter:`import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(max_depth=2, n_estimators=10, min_samples_leaf=2, random_state=42))])
pipe.fit(X, y)
joblib.dump(pipe, "pipe.joblib")
loaded = joblib.load("pipe.joblib")
# Create new_student and new_prediction below
`,
      tests:[{type:'assert', expr:'new_prediction == 1', label:'The loaded pipeline correctly predicts on brand-new data'}]
    }
  ],
  quiz:[
    {
      q:'Why save a fitted model with joblib instead of just re-running the training code every time you need a prediction?',
      options:['There is no reason, retraining is always instant','Training can take real time — saving once and loading many times is far faster, and guarantees you get the SAME model every time, not a freshly-retrained one','joblib makes the model more accurate','It is required by scikit-learn'],
      correct:1,
      explain:'Saving a fitted model avoids repeated training cost AND guarantees consistency — the loaded model is bit-for-bit the one you saved.'
    },
    {
      q:'After loaded = joblib.load("model.joblib"), do you need to call loaded.fit(...) before using it?',
      options:['Yes, every time','No — the loaded object is already fully fitted and ready to call .predict() on immediately','Only if the data changed','Only for pipelines, not bare models'],
      correct:1,
      explain:'joblib.load() restores the object in its already-fitted state — no re-fitting is needed or expected.'
    },
    {
      q:'When you joblib.dump() a whole Pipeline rather than just the bare model, what gets saved?',
      options:['Only the final model step','Only the preprocessing step','EVERY step together — preprocessing and model — so loading it back gives the same complete, ready-to-use pipeline','Nothing, pipelines cannot be saved'],
      correct:2,
      explain:'The whole pipeline object is serialized as one unit — every fitted step travels together, exactly like it does when using the pipeline normally.'
    },
    {
      q:'What does joblib.dump(pipe, "pipe.joblib") actually do?',
      options:['Deletes the pipeline from memory','Prints the pipeline\'s settings','Serializes the exact fitted pipeline object to a file, so it can be reloaded later without recomputation','Retrains the pipeline on a saved copy of the data'],
      correct:2,
      explain:'dump() writes the object\'s exact current state to a file — nothing is retrained, and nothing is lost.'
    }
  ],
  sandboxStarter3:`import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier

hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]

pipe = Pipeline([
    ("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])),
    ("rf", RandomForestClassifier(max_depth=2, n_estimators=10, min_samples_leaf=2, random_state=42))
])
pipe.fit(X, y)
joblib.dump(pipe, "pipe.joblib")
loaded = joblib.load("pipe.joblib")

new_student = pd.DataFrame({"hours": [6], "attendance": [80], "method": ["group"]})
print("Prediction for a brand-new student, zero retraining:", int(loaded.predict(new_student)[0]))
`,
  stretchChallenge:{
    title:'Confirm feature importances survive too',
    desc:`Using pipe and loaded from before, create
      orig_importances = list(pipe.named_steps["rf"].feature_importances_.round(3)),
      loaded_importances = list(loaded.named_steps["rf"].feature_importances_.round(3)), and
      importances_match = (orig_importances == loaded_importances). Assert that importances_match == True —
      even the exact feature_importances_ from Week 2 survive saving and reloading, unchanged.`,
    starter:`import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
hours = [1,2,3,4,5,6,7,8,9,10,1,2,8,9,3,4,6,7,2,9,5,6,1,10,3,7,2,9,4,6]
attendance = [50,55,60,65,70,80,85,90,95,98,52,58,92,88,61,64,75,80,56,96,72,78,53,99,58,83,55,90,63,77]
method = ["solo","group"] * 15
passed = [0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1]
df = pd.DataFrame({"hours": hours, "attendance": attendance, "method": method, "passed": passed})
X = df[["hours", "attendance", "method"]]
y = df["passed"]
pipe = Pipeline([("prep", ColumnTransformer([("num", StandardScaler(), ["hours", "attendance"]), ("cat", OneHotEncoder(), ["method"])])), ("rf", RandomForestClassifier(max_depth=2, n_estimators=10, min_samples_leaf=2, random_state=42))])
pipe.fit(X, y)
joblib.dump(pipe, "pipe.joblib")
loaded = joblib.load("pipe.joblib")
# Create orig_importances, loaded_importances and importances_match below
`,
    tests:[
      {type:'assert', expr:'importances_match == True', label:'feature_importances_ are confirmed identical after saving and reloading'}
    ]
  }
}
];

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.ml = {
  b: {weeks: ML_WEEKS, mp1: ML_MP1, mp2: ML_MP2},
  i: {weeks: ML_INTERMEDIATE_WEEKS, mp1: ML_INTERMEDIATE_MP1, mp2: ML_INTERMEDIATE_MP2},
  a: {weeks: ML_ADVANCED_WEEKS, mp1: ML_MP1, mp2: ML_MP2}
};
