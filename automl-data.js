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
}
];

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.ml = {
  b: {weeks: ML_WEEKS, mp1: ML_MP1, mp2: ML_MP2},
  i: {weeks: ML_INTERMEDIATE_WEEKS, mp1: ML_MP1, mp2: ML_MP2},
  a: {weeks: ML_WEEKS, mp1: ML_MP1, mp2: ML_MP2}
};
