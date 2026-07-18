/* =========================================================================
   Machine Learning Academy — Phase 0 placeholder content
   One placeholder week, reused across all 3 levels until each level's real
   curriculum is authored in its own build phase. Deliberately reuses the
   plain Pyodide runtime with ZERO extra package installs — no numpy, no
   scikit-learn — because this track's whole point (distinct from AutoML)
   is teaching how a model works underneath, built by hand in pure Python,
   before AutoML introduces "let a library do the searching for you."
   ========================================================================= */

const MLR_WEEKS = [
{
  key:'week1', num:1, title:'What Is a Model?',
  scenarioTag:'Real world: predicting exam scores from study hours',
  scenario:`A teacher has noticed that students who revise more tend to score higher, and wants a simple way to
    estimate a score from hours studied. You'll build that estimate yourself, by hand, using nothing but plain
    Python — the same idea every machine learning model is built on, just done manually first so you can see
    exactly how it works.`,
  objectives:[
    'Explain what a "model" is: a function that turns input into a prediction',
    'Calculate the average (mean) of a list of numbers',
    'Fit a simple straight-line model by hand using the least-squares formulas',
    'Use the fitted model to predict a new value, and measure how wrong it is'
  ],
  conceptHtml:`
    <p>A <strong>model</strong> is just a function: you give it an input, it gives you a prediction. The simplest
    useful model is a straight line: <code>score = m &times; hours + b</code>, where <code>m</code> is the slope
    (how much the score rises per extra hour) and <code>b</code> is the intercept (the starting point at 0 hours).</p>
    <p>"Fitting" the model means finding the <code>m</code> and <code>b</code> that best match your data. For a
    straight line, that has a direct formula (no trial-and-error needed):</p>
    <pre class="code-block">hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]

mean_x = sum(hours) / len(hours)
mean_y = sum(scores) / len(scores)

numerator = sum((hours[i]-mean_x)*(scores[i]-mean_y) for i in range(len(hours)))
denominator = sum((hours[i]-mean_x)**2 for i in range(len(hours)))

m = numerator / denominator
b = mean_y - m*mean_x
print(m, b)</pre>
    <p>Once you have <code>m</code> and <code>b</code>, predicting is just plugging in a new x value:
    <code>predict(x) = m*x + b</code>. And you can check how good the model is by comparing its predictions to the
    real values it was trained on — the average difference is called the <strong>error</strong>.</p>
    <h3>Let's break down the fitting code, line by line</h3>
    <ul>
      <li><code>mean_x = sum(hours) / len(hours)</code> — the plain "add them all up, divide by how many there
        are" average, calculated separately for the hours and for the scores (<code>mean_y</code>).</li>
      <li><code>numerator = sum((hours[i]-mean_x)*(scores[i]-mean_y) for i in range(len(hours)))</code> — this
        looks dense, but it's doing one thing repeatedly: for each student (index <code>i</code>), it measures how
        far their hours were from the average hours, how far their score was from the average score, and
        multiplies those two differences together. <code>sum(... for i in range(...))</code> then adds up that
        result across every student in one line — this pattern is called a <strong>generator expression</strong>,
        and it's a compact way of writing "do this calculation for every item, then combine the results."</li>
      <li><code>denominator</code> follows the exact same shape, just squaring each hours-difference instead of
        multiplying two different differences together.</li>
      <li><code>m = numerator / denominator</code> and <code>b = mean_y - m*mean_x</code> — these are just the
        least-squares formulas from a moment ago, typed directly as Python. There's no loop needed here since
        <code>numerator</code>/<code>denominator</code> already did the heavy lifting above.</li>
    </ul>
    <p>The second box shows the reverse step — once <code>predict(x, m, b)</code> exists, using the model is just
    a normal function call, exactly like any other Python function you've written before.</p>`,
  sandboxStarter:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]

mean_x = sum(hours) / len(hours)
mean_y = sum(scores) / len(scores)

numerator = sum((hours[i]-mean_x)*(scores[i]-mean_y) for i in range(len(hours)))
denominator = sum((hours[i]-mean_x)**2 for i in range(len(hours)))

m = numerator / denominator
b = mean_y - m*mean_x
print("m =", m, " b =", b)
`,
  sandboxStarter2:`def predict(x, m, b):
    return m*x + b

m = 7.5
b = 41.5
print(predict(6, m, b))
print(predict(10, m, b))
`,
  exercises:[
    {
      title:'Find the average',
      desc:`Write a function mean(values) that returns the average of a list of numbers. Print mean([2, 4, 6, 8]) —
        it should print 5.0. An average is always sum(values) / len(values) — add everything up, divide by the
        count.`,
      starter:`def mean(values):
    # TODO: return the average of values
    pass

print(mean([2, 4, 6, 8]))
`,
      tests:[{type:'output', contains:['5.0'], label:'Prints the correct mean (5.0)'}]
    },
    {
      title:'Fit the model',
      desc:`Using hours = [1, 2, 3, 4, 5] and scores = [50, 55, 65, 70, 80], calculate m and b using the
        least-squares formulas from the concept box, then print them. Copy the four calculation steps
        (mean_x, mean_y, numerator, denominator) exactly as shown, then m = numerator/denominator and
        b = mean_y - m*mean_x.`,
      starter:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
# Calculate m and b below, then print them
`,
      tests:[
        {type:'assert', expr:'abs(m - 7.5) < 0.001', label:'m is correctly calculated (7.5)'},
        {type:'assert', expr:'abs(b - 41.5) < 0.001', label:'b is correctly calculated (41.5)'}
      ]
    },
    {
      title:'Make a prediction',
      desc:`Write a function predict(x, m, b) that returns m*x + b. Using m = 7.5 and b = 41.5, assert that
        predict(6, m, b) equals 86.5. This is the whole model in one line — multiply the input by the slope, then
        add the intercept.`,
      starter:`def predict(x, m, b):
    # TODO: return the predicted value
    pass

m = 7.5
b = 41.5
`,
      tests:[{type:'assert', expr:'predict(6, m, b) == 86.5', label:'predict(6, m, b) correctly equals 86.5'}]
    },
    {
      title:'Measure the error',
      desc:`Given actual = [50, 55, 65, 70, 80] and predicted = [predict(x, 7.5, 41.5) for x in [1,2,3,4,5]],
        calculate the mean absolute error (the average of the absolute differences) and assert it is less than 5.
        For each pair, subtract predicted from actual, take abs() of the difference (so a too-high guess and a
        too-low guess both count as equally wrong), then average all those differences together — the same
        mean() idea from the first exercise, just applied to errors instead of raw scores.`,
      starter:`def predict(x, m, b):
    return m*x + b

actual = [50, 55, 65, 70, 80]
hours = [1, 2, 3, 4, 5]
predicted = [predict(x, 7.5, 41.5) for x in hours]
# Calculate mae below
`,
      tests:[{type:'assert', expr:'mae < 5', label:'Mean absolute error is under 5 points'}]
    },
    {
      title:'Fit a model for a new class',
      desc:`A different class has hours = [2, 4, 6, 8] and scores = [60, 68, 74, 82]. Using the exact same
        least-squares steps from the concept box, calculate m and b for this new data. Assert that m is
        approximately 3.6 and b is approximately 53.0.`,
      starter:`hours = [2, 4, 6, 8]
scores = [60, 68, 74, 82]
# Calculate m and b below, then print them
`,
      tests:[
        {type:'assert', expr:'abs(m - 3.6) < 0.001', label:'m is correctly calculated (3.6)'},
        {type:'assert', expr:'abs(b - 53.0) < 0.001', label:'b is correctly calculated (53.0)'}
      ]
    },
    {
      title:'Predict for the new class',
      desc:`Using predict(x, m, b) and the new class's m = 3.6, b = 53.0, assert that predict(10, m, b) equals
        89.0 — a student who studies 10 hours is predicted to score 89.`,
      starter:`def predict(x, m, b):
    # TODO: return the predicted value
    pass

m = 3.6
b = 53.0
`,
      tests:[{type:'assert', expr:'predict(10, m, b) == 89.0', label:'predict(10, m, b) correctly equals 89.0'}]
    }
  ],
  quiz:[
    {
      q:'What is a "model" in machine learning?',
      options:['A 3D printed object','A function that turns an input into a prediction','A type of database','A chart showing data'],
      correct:1,
      explain:'A model takes an input (like hours studied) and produces a prediction (like an exam score).'
    },
    {
      q:'In score = m*hours + b, what does m represent?',
      options:['The starting score at 0 hours','How much the score changes per extra hour','The number of students','The total score'],
      correct:1,
      explain:'m is the slope — how steeply the prediction rises as the input increases.'
    },
    {
      q:'What does "fitting" a model mean?',
      options:['Buying the right size','Finding the m and b that best match your training data','Deleting bad data','Running the model faster'],
      correct:1,
      explain:'Fitting is the process of calculating the parameters (like m and b) from your data.'
    },
    {
      q:'Why do we measure the error between predicted and actual values?',
      options:['To make the code run faster','To see how good the model’s predictions really are','To delete the model','To find more data'],
      correct:1,
      explain:'Error tells you how far off your model’s predictions are from reality — lower is better.'
    }
  ],
  sandboxStarter3:`def predict(x, m, b):
    return m*x + b

hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
m, b = 7.5, 41.5

for i in range(len(hours)):
    pred = predict(hours[i], m, b)
    error = scores[i] - pred
    direction = "under-predicted" if error > 0 else "over-predicted" if error < 0 else "exact"
    print(f"hours={hours[i]}: error={error}, model {direction}")
`,
  stretchChallenge:{
    title:'A closer look at Week 1',
    desc:`Using hours = [1, 2, 3, 4, 5], scores = [50, 55, 65, 70, 80], m = 7.5, b = 41.5, build
      predicted = [predict(x, m, b) for x in hours], then errors = [scores[i] - predicted[i] for i in
      range(len(scores))]. Assert errors == [1.0, -1.5, 1.0, -1.5, 1.0].`,
    starter:`def predict(x, m, b):
    return m*x + b

hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
m, b = 7.5, 41.5
# Build predicted, then errors, below
`,
    tests:[
      {type:'assert', expr:'errors == [1.0, -1.5, 1.0, -1.5, 1.0]', label:'errors is correctly calculated'}
    ]
  }
}

,

/* ================= WEEK 2 ================= */
{
  key:'week2', num:2, title:'Is It Even a Straight Line?',
  scenarioTag:'Real world: checking the model against every single student, not just the average',
  scenario:`Week 1's model gets the average error down to a small number, but "small on average" can still hide
    students the model gets badly wrong. This week you'll compare the model's prediction to the REAL score for
    every student individually, and work out whether the model guessed too high or too low each time.`,
  objectives:[
    'Print a model\'s predictions next to the real values, side by side',
    'Calculate the signed error (actual minus predicted) for every data point',
    'Explain the difference between an over-prediction and an under-prediction',
    'Find the single best and single worst prediction in a dataset'
  ],
  conceptHtml:`
    <p>Mean absolute error (from Week 1) tells you how wrong the model is <em>on average</em> — but it throws away
    one important detail: whether each guess was too high or too low. The <strong>signed error</strong> keeps that
    information: <code>error = actual - predicted</code>. A positive error means the model guessed too LOW (the
    real score was higher); a negative error means the model guessed too HIGH.</p>
    <pre class="code-block">def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
scores = [60, 68, 74, 82, 85]
m, b = 3.6, 53.0

for i in range(len(hours)):
    pred = predict(hours[i], m, b)
    error = scores[i] - pred
    print(hours[i], scores[i], round(pred, 1), round(error, 1))</pre>
    <p>Once you have every point's signed error, two questions become easy to answer: which prediction was the
    model's WORST (biggest error, ignoring the sign — use <code>abs()</code>), and which was its BEST (smallest
    error)?</p>
    <h3>Let's break down the comparison code, line by line</h3>
    <ul>
      <li><code>pred = predict(hours[i], m, b)</code> — the exact same <code>predict()</code> function from Week
        1, just called once per student inside a loop instead of once overall.</li>
      <li><code>error = scores[i] - pred</code> — subtracting in this specific order (actual minus predicted)
        is what makes the sign meaningful: positive always means "real score was higher than the guess."</li>
      <li><code>round(pred, 1)</code>/<code>round(error, 1)</code> — since <code>m</code> and <code>b</code>
        aren't always round numbers, the raw prediction can come out as something like
        <code>60.199999999999996</code> due to how computers store decimals — <code>round(x, 1)</code> tidies
        that up to one decimal place for a cleaner print, without changing the underlying value used for
        further maths.</li>
    </ul>`,
  sandboxStarter:`def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
scores = [60, 68, 74, 82, 85]
m, b = 3.6, 53.0

for i in range(len(hours)):
    pred = predict(hours[i], m, b)
    print("hours:", hours[i], " actual:", scores[i], " predicted:", round(pred, 1))
`,
  sandboxStarter2:`def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
scores = [60, 68, 74, 82, 85]
m, b = 3.6, 53.0

for i in range(len(hours)):
    pred = predict(hours[i], m, b)
    error = scores[i] - pred
    direction = "under-predicted" if error > 0 else "over-predicted" if error < 0 else "exact"
    print("hours:", hours[i], " error:", round(error, 1), " model", direction)
`,
  exercises:[
    {
      title:'List the predictions',
      desc:`Using hours = [2, 4, 6, 8, 10], m = 3.6, b = 53.0, build predicted = [predict(x, m, b) for x in hours].
        Assert that [round(p, 1) for p in predicted] == [60.2, 67.4, 74.6, 81.8, 89.0].`,
      starter:`def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
m, b = 3.6, 53.0
# Build predicted below
`,
      tests:[{type:'assert', expr:'[round(p, 1) for p in predicted] == [60.2, 67.4, 74.6, 81.8, 89.0]', label:'predicted is correctly calculated'}]
    },
    {
      title:'Compute the signed errors',
      desc:`Using scores = [60, 68, 74, 82, 85] and predicted from the previous exercise, build
        errors = [scores[i] - predicted[i] for i in range(len(scores))]. Assert that
        [round(e, 1) for e in errors] == [-0.2, 0.6, -0.6, 0.2, -4.0].`,
      starter:`def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
scores = [60, 68, 74, 82, 85]
m, b = 3.6, 53.0
predicted = [predict(x, m, b) for x in hours]
# Build errors below
`,
      tests:[{type:'assert', expr:'[round(e, 1) for e in errors] == [-0.2, 0.6, -0.6, 0.2, -4.0]', label:'errors is correctly calculated'}]
    },
    {
      title:'Count the under-predictions',
      desc:`Using errors from the previous exercise, count how many are positive (the model guessed too low).
        Assert that under_count == 2.`,
      starter:`def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
scores = [60, 68, 74, 82, 85]
m, b = 3.6, 53.0
predicted = [predict(x, m, b) for x in hours]
errors = [scores[i] - predicted[i] for i in range(len(scores))]
# Count under-predictions below, store as under_count
`,
      tests:[{type:'assert', expr:'under_count == 2', label:'under_count correctly equals 2'}]
    },
    {
      title:'Find the worst prediction',
      desc:`Using errors, find the biggest error IGNORING its sign (use abs()). Assert that
        round(worst, 1) == 4.0 — the model's single worst guess was 4 whole points off.`,
      starter:`def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
scores = [60, 68, 74, 82, 85]
m, b = 3.6, 53.0
predicted = [predict(x, m, b) for x in hours]
errors = [scores[i] - predicted[i] for i in range(len(scores))]
# Find worst (the biggest absolute error) below
`,
      tests:[{type:'assert', expr:'round(worst, 1) == 4.0', label:'worst correctly equals 4.0'}]
    },
    {
      title:'Count the over-predictions',
      desc:`Using errors, count how many are negative (the model guessed too high). Assert that
        over_count == 3.`,
      starter:`def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
scores = [60, 68, 74, 82, 85]
m, b = 3.6, 53.0
predicted = [predict(x, m, b) for x in hours]
errors = [scores[i] - predicted[i] for i in range(len(scores))]
# Count over-predictions below, store as over_count
`,
      tests:[{type:'assert', expr:'over_count == 3', label:'over_count correctly equals 3'}]
    },
    {
      title:'Find the best prediction',
      desc:`Using errors, find the smallest error IGNORING its sign. Assert that round(best, 1) == 0.2 — the
        model's single best guess was only 0.2 points off.`,
      starter:`def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
scores = [60, 68, 74, 82, 85]
m, b = 3.6, 53.0
predicted = [predict(x, m, b) for x in hours]
errors = [scores[i] - predicted[i] for i in range(len(scores))]
# Find best (the smallest absolute error) below
`,
      tests:[{type:'assert', expr:'round(best, 1) == 0.2', label:'best correctly equals 0.2'}]
    }
  ],
  quiz:[
    {
      q:'What does a POSITIVE signed error (actual - predicted) mean?',
      options:['The model guessed too high','The model guessed too low','The model was exactly right','There is no data'],
      correct:1,
      explain:'If actual - predicted is positive, the real value was higher than the guess, meaning the model under-predicted.'
    },
    {
      q:'Why isn\'t mean absolute error alone always enough to judge a model?',
      options:['It is impossible to calculate','It hides whether individual predictions were too high or too low, and can hide one very bad prediction among many good ones','It only works with one data point','It is always equal to zero'],
      correct:1,
      explain:'Averaging can hide a lot of detail - two very different sets of errors can produce the same average.'
    },
    {
      q:'Why use abs() when finding the single worst prediction?',
      options:['To make the number smaller','So a large negative error (over-prediction) counts as equally bad as a large positive error (under-prediction)','abs() is not actually needed here','To convert the number to text'],
      correct:1,
      explain:'Without abs(), a very negative error could look "smaller" than a small positive one, even though it is actually worse.'
    },
    {
      q:'Why might round(pred, 1) show a tidier number than pred itself?',
      options:['round() fixes bugs in the model','Computers store decimals in a way that can produce long, imprecise-looking numbers, and round() tidies the display without changing later maths','pred is always wrong until rounded','round() deletes the original value permanently'],
      correct:1,
      explain:'Floating-point numbers can display with tiny imprecision (like 60.199999999999996) - round() is just for a cleaner print, the underlying value used in later calculations is unaffected.'
    }
  ],
  sandboxStarter3:`def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
scores = [60, 68, 74, 82, 85]
m, b = 3.6, 53.0

for i in range(len(hours)):
    pred = predict(hours[i], m, b)
    error = scores[i] - pred
    print(f"hours={hours[i]}: predicted={round(pred, 1)}, actual={scores[i]}, error={round(error, 1)}")
`,
  stretchChallenge:{
    title:'Find the hours value with the smallest error',
    desc:`Using hours, scores, m = 3.6, b = 53.0, build predicted and errors as before, then find
      best_hours: the hours value belonging to the student with the smallest absolute error. Assert that
      best_hours == 2.`,
    starter:`def predict(x, m, b):
    return m*x + b

hours = [2, 4, 6, 8, 10]
scores = [60, 68, 74, 82, 85]
m, b = 3.6, 53.0
predicted = [predict(x, m, b) for x in hours]
errors = [scores[i] - predicted[i] for i in range(len(scores))]
# Find best_hours below (the hours value with the smallest absolute error)
`,
    tests:[
      {type:'assert', expr:'best_hours == 2', label:'best_hours correctly equals 2'}
    ]
  }
}

,

/* ================= WEEK 3 ================= */
{
  key:'week3', num:3, title:'Splitting Fair: Train and Test',
  scenarioTag:'Real world: will the model work on students it has never seen?',
  scenario:`So far you've fitted a model, then checked how well it fits the SAME data it was fitted on. That's a
    bit like marking your own homework with the answers already in front of you — it always looks better than it
    really is. This week you'll hold some students back, fit the model only on the rest, then test it on the
    students it has genuinely never seen.`,
  objectives:[
    'Split a dataset into a training portion and a held-out test portion',
    'Fit a model using ONLY the training data',
    'Calculate the mean absolute error on the test data the model never saw',
    'Explain why testing on training data gives an overly optimistic (too low) error'
  ],
  conceptHtml:`
    <p>A <strong>train/test split</strong> holds some of your data back, so you have genuinely new data to check
    the model against. The simplest way to split is by slicing: use most of the list to fit, and hold back the
    rest to test.</p>
    <pre class="code-block">hours = [1,2,3,4,5,6,7,8,9,10]
scores = [52, 58, 60, 65, 70, 74, 78, 80, 88, 92]

split_point = int(len(hours) * 0.8)   # 80% for training
train_hours = hours[:split_point]
train_scores = scores[:split_point]
test_hours = hours[split_point:]
test_scores = scores[split_point:]</pre>
    <p>Then fit <code>m</code> and <code>b</code> using ONLY the training portion — the least-squares formulas
    from Week 1, unchanged, just run on <code>train_hours</code>/<code>train_scores</code> instead of the whole
    dataset. Finally, use that fitted model to predict the TEST hours, and compare against the TEST scores — data
    the fitting process never got to look at.</p>
    <h3>Let's break down why this matters, line by line</h3>
    <ul>
      <li><code>split_point = int(len(hours) * 0.8)</code> — 80% of 10 students is 8, so the first 8 students
        train the model and the last 2 test it. <code>int(...)</code> rounds down to a whole number of students.</li>
      <li><code>hours[:split_point]</code>/<code>hours[split_point:]</code> — ordinary list slicing: everything
        before the split point, and everything from the split point onward.</li>
      <li>Fitting only on <code>train_hours</code>/<code>train_scores</code> means the formula never "sees" the
        test students at all — so its predictions for them are a genuine test, not a lookup.</li>
      <li>If you calculated MAE on the TRAINING data instead, it would usually come out LOWER than the test MAE —
        not because the model is actually better, but because the training data is what shaped the model in the
        first place, so it's always going to fit that data more closely than genuinely new data.</li>
    </ul>`,
  sandboxStarter:`hours = [1,2,3,4,5,6,7,8,9,10]
scores = [52, 58, 60, 65, 70, 74, 78, 80, 88, 92]

split_point = int(len(hours) * 0.8)
train_hours = hours[:split_point]
train_scores = scores[:split_point]
test_hours = hours[split_point:]
test_scores = scores[split_point:]

print("Training on:", train_hours)
print("Testing on:", test_hours)
`,
  sandboxStarter2:`def predict(x, m, b):
    return m*x + b

train_hours = [1,2,3,4,5,6,7,8]
train_scores = [52,58,60,65,70,74,78,80]

mean_x = sum(train_hours) / len(train_hours)
mean_y = sum(train_scores) / len(train_scores)
numerator = sum((train_hours[i]-mean_x)*(train_scores[i]-mean_y) for i in range(len(train_hours)))
denominator = sum((train_hours[i]-mean_x)**2 for i in range(len(train_hours)))
m = numerator / denominator
b = mean_y - m*mean_x

test_hours = [9, 10]
test_scores = [88, 92]
test_pred = [predict(x, m, b) for x in test_hours]
print("Predicted:", [round(p, 1) for p in test_pred])
print("Actual:", test_scores)
`,
  exercises:[
    {
      title:'Split the dataset',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10] and scores = [52,58,60,65,70,74,78,80,88,92], build
        train_hours, train_scores, test_hours, test_scores using split_point = 8. Assert that
        train_hours == [1,2,3,4,5,6,7,8] and test_hours == [9,10].`,
      starter:`hours = [1,2,3,4,5,6,7,8,9,10]
scores = [52, 58, 60, 65, 70, 74, 78, 80, 88, 92]
split_point = 8
# Build train_hours, train_scores, test_hours, test_scores below
`,
      tests:[
        {type:'assert', expr:'train_hours == [1,2,3,4,5,6,7,8]', label:'train_hours correctly holds the first 8 students'},
        {type:'assert', expr:'test_hours == [9,10]', label:'test_hours correctly holds the last 2 students'}
      ]
    },
    {
      title:'Fit on training data only',
      desc:`Using train_hours = [1,2,3,4,5,6,7,8] and train_scores = [52,58,60,65,70,74,78,80], calculate m and b
        using the least-squares formulas — the exact same steps as Week 1, just run on the training data only.
        Assert that round(m, 2) == 4.08 and round(b, 2) == 48.75.`,
      starter:`train_hours = [1,2,3,4,5,6,7,8]
train_scores = [52,58,60,65,70,74,78,80]
# Calculate m and b below
`,
      tests:[
        {type:'assert', expr:'round(m, 2) == 4.08', label:'m is correctly calculated (4.08)'},
        {type:'assert', expr:'round(b, 2) == 48.75', label:'b is correctly calculated (48.75)'}
      ]
    },
    {
      title:'Predict on the test set',
      desc:`Using m = 4.083333333333333, b = 48.75, and test_hours = [9, 10], build test_pred = [predict(x, m, b)
        for x in test_hours]. Assert that [round(p, 1) for p in test_pred] == [85.5, 89.6].`,
      starter:`def predict(x, m, b):
    return m*x + b

m = 4.083333333333333
b = 48.75
test_hours = [9, 10]
# Build test_pred below
`,
      tests:[{type:'assert', expr:'[round(p, 1) for p in test_pred] == [85.5, 89.6]', label:'test_pred is correctly calculated'}]
    },
    {
      title:'Calculate the test MAE',
      desc:`Using test_pred from the previous exercise and test_scores = [88, 92], calculate test_mae: the
        average of the absolute differences between test_scores and test_pred. Assert that
        round(test_mae, 2) == 2.46.`,
      starter:`test_pred = [85.5, 89.58333333333333]
test_scores = [88, 92]
# Calculate test_mae below
`,
      tests:[{type:'assert', expr:'round(test_mae, 2) == 2.46', label:'test_mae is correctly calculated (2.46)'}]
    },
    {
      title:'Calculate the training MAE for comparison',
      desc:`Using the SAME m = 4.083333333333333, b = 48.75, now predict on train_hours = [1,2,3,4,5,6,7,8]
        instead, and calculate train_mae against train_scores = [52,58,60,65,70,74,78,80]. Assert that
        round(train_mae, 2) == 0.83 — notice this is much lower than the test MAE.`,
      starter:`def predict(x, m, b):
    return m*x + b

m = 4.083333333333333
b = 48.75
train_hours = [1,2,3,4,5,6,7,8]
train_scores = [52,58,60,65,70,74,78,80]
# Calculate train_mae below
`,
      tests:[{type:'assert', expr:'round(train_mae, 2) == 0.83', label:'train_mae is correctly calculated (0.83)'}]
    },
    {
      title:'Compare training error to test error',
      desc:`Using test_mae = 2.4583333333333357 and train_mae = 0.8333333333333339, assert that
        test_mae > train_mae — confirming the model looks better on the data it was trained on than on genuinely
        new data.`,
      starter:`test_mae = 2.4583333333333357
train_mae = 0.8333333333333339
# Add your assert below
`,
      tests:[{type:'assert', expr:'test_mae > train_mae', label:'test_mae is correctly greater than train_mae'}]
    }
  ],
  quiz:[
    {
      q:'Why do you hold back a test set instead of fitting on all the data?',
      options:['To make the code run faster','So you have genuinely new data to check the model against, instead of marking it against its own answers','Because Python requires it','To use less memory'],
      correct:1,
      explain:'A held-out test set lets you check how the model performs on data it never saw while being fitted.'
    },
    {
      q:'When fitting m and b in this week\'s exercises, which data should you use?',
      options:['The test data only','The full dataset, always','Only the training data','It does not matter'],
      correct:2,
      explain:'The model must be fitted using only the training portion, so the test portion stays genuinely unseen.'
    },
    {
      q:'Why does training error usually come out LOWER than test error?',
      options:['Training error is always wrong','The training data is what shaped the model, so the model naturally fits it more closely than new data','Test error is calculated incorrectly on purpose','There is no real difference between them'],
      correct:1,
      explain:'The model was built to fit the training data specifically, so it is expected to match that data more closely than data it never saw.'
    },
    {
      q:'What does split_point = int(len(hours) * 0.8) calculate?',
      options:['The exact middle of the data','The index that marks 80% of the way through the data, rounded down to a whole number','A random position','The total number of students'],
      correct:1,
      explain:'Multiplying the length by 0.8 finds 80% of the way through, and int() rounds it down to a usable list index.'
    }
  ],
  sandboxStarter3:`hours = [1,2,3,4,5,6,7,8,9,10]
scores = [52, 58, 60, 65, 70, 74, 78, 80, 88, 92]

split_point = int(len(hours) * 0.8)
train_hours = hours[:split_point]
train_scores = scores[:split_point]
test_hours = hours[split_point:]
test_scores = scores[split_point:]

def predict(x, m, b):
    return m*x + b

mean_x = sum(train_hours) / len(train_hours)
mean_y = sum(train_scores) / len(train_scores)
numerator = sum((train_hours[i]-mean_x)*(train_scores[i]-mean_y) for i in range(len(train_hours)))
denominator = sum((train_hours[i]-mean_x)**2 for i in range(len(train_hours)))
m = numerator / denominator
b = mean_y - m*mean_x

train_pred = [predict(x, m, b) for x in train_hours]
test_pred = [predict(x, m, b) for x in test_hours]

train_mae = sum(abs(train_scores[i]-train_pred[i]) for i in range(len(train_scores))) / len(train_scores)
test_mae = sum(abs(test_scores[i]-test_pred[i]) for i in range(len(test_scores))) / len(test_scores)

print("Training MAE:", round(train_mae, 2))
print("Test MAE:", round(test_mae, 2))
`,
  stretchChallenge:{
    title:'Try a different split point',
    desc:`Using the same hours/scores, split with split_point = int(len(hours) * 0.7) instead (70% training this
      time), fit m/b on the new training portion, then calculate test_mae on the new test portion. Assert that
      round(test_mae, 2) == 1.57.`,
    starter:`def predict(x, m, b):
    return m*x + b

hours = [1,2,3,4,5,6,7,8,9,10]
scores = [52, 58, 60, 65, 70, 74, 78, 80, 88, 92]
split_point = int(len(hours) * 0.7)
# Build train/test lists, fit m/b on the training portion, then calculate test_mae
`,
    tests:[
      {type:'assert', expr:'round(test_mae, 2) == 1.57', label:'test_mae is correctly calculated (1.57)'}
    ]
  }
}

,

/* ================= WEEK 4 ================= */
{
  key:'week4', num:4, title:'Yes or No: Classifying by Hand',
  scenarioTag:'Real world: will this student pass or not?',
  scenario:`Predicting an exact score is useful, but sometimes the question is simpler: will this student pass or
    not? A "yes or no" model like this is called a classifier. This week you'll build the simplest possible one —
    a threshold rule — and measure how often it gets the right answer.`,
  objectives:[
    'Write a threshold-based classifier: predict "yes" if a value is at or above a cutoff',
    'Compare a classifier\'s predictions to the real yes/no answers',
    'Count how many predictions were correct',
    'Calculate accuracy: the fraction of predictions that were correct'
  ],
  conceptHtml:`
    <p>A <strong>classifier</strong> predicts a category (like "pass" or "fail") instead of a number. The simplest
    kind is a <strong>threshold classifier</strong>: pick a cutoff, and predict "yes" for anything at or above it,
    "no" otherwise.</p>
    <pre class="code-block">def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
threshold = 5

for h in hours:
    print(h, classify(h, threshold))</pre>
    <p>Once you have predictions, you can compare them to the real answers, one student at a time, and count how
    many matched. <strong>Accuracy</strong> is just that count divided by the total number of students:</p>
    <pre class="code-block">predictions = [classify(h, threshold) for h in hours]
passed = [False, False, False, False, True, True, False, True, True, True]

correct_count = sum(1 for i in range(len(hours)) if predictions[i] == passed[i])
accuracy = correct_count / len(hours)
print(accuracy)</pre>
    <h3>Let's break down the accuracy code, line by line</h3>
    <ul>
      <li><code>classify(x, threshold)</code> returns <code>True</code> or <code>False</code> directly, since
        <code>x >= threshold</code> is already a comparison — no separate if/else needed.</li>
      <li><code>predictions[i] == passed[i]</code> — checking whether the predicted True/False matches the real
        True/False for that same student, one at a time.</li>
      <li><code>sum(1 for i in range(len(hours)) if predictions[i] == passed[i])</code> — the same
        generator-expression pattern from Week 1, just summing 1 for every match instead of summing a difference.</li>
      <li><code>correct_count / len(hours)</code> — accuracy is always "how many right" divided by "how many
        total," giving a fraction between 0 (nothing right) and 1 (everything right).</li>
    </ul>`,
  sandboxStarter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
threshold = 5

for h in hours:
    print(h, classify(h, threshold))
`,
  sandboxStarter2:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
threshold = 5

predictions = [classify(h, threshold) for h in hours]
for i in range(len(hours)):
    match = "correct" if predictions[i] == passed[i] else "WRONG"
    print(hours[i], "predicted:", predictions[i], "actual:", passed[i], match)
`,
  exercises:[
    {
      title:'Write the classifier',
      desc:`Write classify(x, threshold) that returns True if x is AT OR ABOVE threshold, False otherwise. Assert
        that classify(6, 5) == True, classify(3, 5) == False, and classify(5, 5) == True — a value exactly equal
        to the threshold should still count as a "yes".`,
      starter:`def classify(x, threshold):
    # TODO: return True if x >= threshold, False otherwise
    pass
`,
      tests:[
        {type:'assert', expr:'classify(6, 5) == True', label:'classify(6, 5) correctly equals True'},
        {type:'assert', expr:'classify(3, 5) == False', label:'classify(3, 5) correctly equals False'},
        {type:'assert', expr:'classify(5, 5) == True', label:'classify(5, 5) correctly equals True (equal to the threshold still counts)'}
      ]
    },
    {
      title:'Make predictions for the whole class',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10] and threshold = 5, build predictions = [classify(h, threshold)
        for h in hours]. Assert that predictions == [False, False, False, False, True, True, True, True, True,
        True].`,
      starter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
threshold = 5
# Build predictions below
`,
      tests:[{type:'assert', expr:'predictions == [False, False, False, False, True, True, True, True, True, True]', label:'predictions is correctly calculated'}]
    },
    {
      title:'Count the correct predictions',
      desc:`Using predictions from the previous exercise and passed = [False, False, False, False, True, True,
        False, True, True, True], count how many match. Assert that correct_count == 9.`,
      starter:`predictions = [False, False, False, False, True, True, True, True, True, True]
passed = [False, False, False, False, True, True, False, True, True, True]
# Count correct_count below
`,
      tests:[{type:'assert', expr:'correct_count == 9', label:'correct_count correctly equals 9'}]
    },
    {
      title:'Calculate accuracy',
      desc:`Using correct_count = 9 and hours = [1,2,3,4,5,6,7,8,9,10] (10 students), calculate accuracy:
        correct_count divided by the total number of students. Assert that accuracy == 0.9.`,
      starter:`correct_count = 9
hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# Calculate accuracy below
`,
      tests:[{type:'assert', expr:'accuracy == 0.9', label:'accuracy correctly equals 0.9'}]
    },
    {
      title:'Find who was misclassified',
      desc:`Using predictions and passed from the earlier exercises, and hours = [1,2,3,4,5,6,7,8,9,10], build
        wrong_hours: a list of the hours values where the prediction did NOT match the actual result. Assert that
        wrong_hours == [7].`,
      starter:`hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
predictions = [False, False, False, False, True, True, True, True, True, True]
passed = [False, False, False, False, True, True, False, True, True, True]
# Build wrong_hours below
`,
      tests:[{type:'assert', expr:'wrong_hours == [7]', label:'wrong_hours correctly equals [7]'}]
    },
    {
      title:'Try a different threshold',
      desc:`Using hours, passed, and classify() from before, but with threshold = 6 instead of 5, calculate
        accuracy again. Assert that accuracy == 0.8 — a worse threshold gives a lower accuracy.`,
      starter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
threshold = 6
# Build predictions, count correct_count, then calculate accuracy below
`,
      tests:[{type:'assert', expr:'accuracy == 0.8', label:'accuracy correctly equals 0.8'}]
    }
  ],
  quiz:[
    {
      q:'What does a classifier predict, compared to Week 1\'s model?',
      options:['An exact number','A category, like "pass" or "fail" instead of a number','Nothing different at all','Only True, never False'],
      correct:1,
      explain:'A classifier predicts a category (like yes/no), while Week 1\'s regression model predicted a number.'
    },
    {
      q:'In classify(x, threshold) using x >= threshold, what happens right at the threshold value itself?',
      options:['It always returns False','It counts as meeting the threshold, so it returns True','It raises an error','It is skipped entirely'],
      correct:1,
      explain:'>= includes the threshold value itself - a student exactly at the cutoff is classified as a "yes".'
    },
    {
      q:'How is accuracy calculated?',
      options:['Total students divided by correct predictions','Correct predictions divided by total students','The number of wrong predictions','The average of all the hours values'],
      correct:1,
      explain:'Accuracy is the fraction of predictions that were correct: correct_count / total.'
    },
    {
      q:'Why might changing the threshold change the accuracy?',
      options:['It never does','A different cutoff draws the "yes/no" line in a different place, which can match the real data better or worse','Accuracy is unrelated to the threshold','Only training data can affect accuracy'],
      correct:1,
      explain:'Moving the threshold changes which students get classified as "yes" vs "no", which can improve or worsen how many predictions match reality.'
    }
  ],
  sandboxStarter3:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]

for threshold in [4, 5, 6]:
    predictions = [classify(h, threshold) for h in hours]
    correct_count = sum(1 for i in range(len(hours)) if predictions[i] == passed[i])
    accuracy = correct_count / len(hours)
    print("threshold", threshold, "-> accuracy", accuracy)
`,
  stretchChallenge:{
    title:'Find the best threshold',
    desc:`Try threshold = 4 (instead of 5 or 6) with the same hours/passed data, and calculate accuracy. Assert
      that accuracy == 0.8 — same as threshold 6, both worse than threshold 5's 0.9.`,
    starter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
threshold = 4
# Build predictions, count correct_count, then calculate accuracy below
`,
    tests:[
      {type:'assert', expr:'accuracy == 0.8', label:'accuracy correctly equals 0.8'}
    ]
  }
},
{
  key:'week5', num:5, title:'Getting Closer, Step by Step: Gradient Descent',
  scenarioTag:'Real world: how a computer actually finds the best-fit line',
  scenario:`Back in Week 1, you found the best m and b using a formula that jumps straight to the exact answer.
    That works for a simple line, but most real models can't be solved that way — there's no neat formula, just
    a starting guess and a way to check how wrong it is. This week you'll build the method real machine learning
    actually uses: start with a bad guess, nudge it a little, check again, and repeat — thousands of times —
    until the guess gets closer and closer to the exact answer.`,
  objectives:[
    'Calculate the gradient: which direction, and how strongly, to nudge m and b',
    'Update m and b using the gradient and a learning rate',
    'Run a training loop that repeats this update thousands of times',
    'Watch the loss (error) shrink over the training loop, and compare the final result to Week 1\'s exact formula'
  ],
  conceptHtml:`
    <p>This week uses a new dataset: hours = [1, 2, 3, 4, 5], scores = [50, 55, 65, 70, 80].</p>
    <p>Instead of solving for m and b directly, <strong>gradient descent</strong> starts with a guess — usually
    m = 0, b = 0 — and repeatedly nudges it. Each nudge is calculated from the <strong>gradient</strong>: a pair
    of numbers (one for m, one for b) that says which direction makes the error WORSE. Since we want the error to
    get SMALLER, we always move in the OPPOSITE direction of the gradient.</p>
    <pre class="code-block">hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
n = len(hours)

m, b = 0.0, 0.0
predictions = [m*hours[i] + b for i in range(n)]

dm = (-2/n) * sum(hours[i] * (scores[i] - predictions[i]) for i in range(n))
db = (-2/n) * sum(scores[i] - predictions[i] for i in range(n))
print(dm, db)</pre>
    <p>Once you have the gradient (dm, db), update m and b by subtracting a small fraction of it — the
    <strong>learning rate</strong> controls how big that fraction is:</p>
    <pre class="code-block">learning_rate = 0.01
m = m - learning_rate * dm
b = b - learning_rate * db
print(m, b)</pre>
    <p>One update barely moves m and b. The real trick is to repeat it thousands of times in a loop, recalculating
    the gradient fresh every time using the CURRENT m and b:</p>
    <pre class="code-block">m, b = 0.0, 0.0
learning_rate = 0.01

for step in range(5000):
    predictions = [m*hours[i] + b for i in range(n)]
    dm = (-2/n) * sum(hours[i] * (scores[i] - predictions[i]) for i in range(n))
    db = (-2/n) * sum(scores[i] - predictions[i] for i in range(n))
    m = m - learning_rate * dm
    b = b - learning_rate * db

print(m, b)</pre>
    <h3>Let's break down the training loop, line by line</h3>
    <ul>
      <li><code>predictions</code> is recalculated every single step, using whatever m and b are RIGHT NOW — not
        the original m = 0, b = 0.</li>
      <li><code>dm</code> and <code>db</code> are the gradient — how much (and in which direction) the error would
        grow if m or b increased slightly.</li>
      <li><code>m - learning_rate * dm</code> moves m the OPPOSITE way from its gradient, since the gradient
        points toward MORE error and we want LESS.</li>
      <li>After 5000 steps, m and b land extremely close to 7.5 and 41.5 — the exact same answer Week 1's formula
        would have jumped to directly, just reached step by step instead of in one shot.</li>
    </ul>`,
  sandboxStarter:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
n = len(hours)

m, b = 0.0, 0.0
learning_rate = 0.01

for step in range(5):
    predictions = [m*hours[i] + b for i in range(n)]
    dm = (-2/n) * sum(hours[i] * (scores[i] - predictions[i]) for i in range(n))
    db = (-2/n) * sum(scores[i] - predictions[i] for i in range(n))
    m = m - learning_rate * dm
    b = b - learning_rate * db
    print("step", step, "-> m", round(m,2), "b", round(b,2))
`,
  sandboxStarter2:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
n = len(hours)

m, b = 0.0, 0.0
learning_rate = 0.01

for step in range(5000):
    predictions = [m*hours[i] + b for i in range(n)]
    dm = (-2/n) * sum(hours[i] * (scores[i] - predictions[i]) for i in range(n))
    db = (-2/n) * sum(scores[i] - predictions[i] for i in range(n))
    m = m - learning_rate * dm
    b = b - learning_rate * db

print("after 5000 steps: m =", round(m,4), "b =", round(b,4))
print("Week 1's exact formula gave: m = 7.5, b = 41.5")
`,
  exercises:[
    {
      title:'Calculate one gradient step',
      desc:`Using hours = [1,2,3,4,5], scores = [50,55,65,70,80], and a starting guess of m = 0.0, b = 0.0,
        calculate predictions, then dm and db using the formulas from the concept box. Assert that dm == -414.0
        and db == -128.0.`,
      starter:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
n = len(hours)
m, b = 0.0, 0.0
# Build predictions, then calculate dm and db below
`,
      tests:[
        {type:'assert', expr:'dm == -414.0', label:'dm correctly equals -414.0'},
        {type:'assert', expr:'db == -128.0', label:'db correctly equals -128.0'}
      ]
    },
    {
      title:'Update m and b once',
      desc:`Using dm = -414.0, db = -128.0, m = 0.0, b = 0.0, and learning_rate = 0.01, calculate new_m and new_b
        using new_m = m - learning_rate * dm (same for b). Assert that new_m == 4.14 and new_b == 1.28.`,
      starter:`dm = -414.0
db = -128.0
m = 0.0
b = 0.0
learning_rate = 0.01
# Calculate new_m and new_b below
`,
      tests:[
        {type:'assert', expr:'new_m == 4.14', label:'new_m correctly equals 4.14'},
        {type:'assert', expr:'new_b == 1.28', label:'new_b correctly equals 1.28'}
      ]
    },
    {
      title:'Run the training loop',
      desc:`Using hours, scores, starting m = 0.0, b = 0.0, and learning_rate = 0.01, run the full training loop
        for 5000 steps (recalculating predictions, dm, and db fresh every step). Assert that abs(m - 7.5) < 0.001
        and abs(b - 41.5) < 0.001 — the loop should land almost exactly on Week 1's exact answer.`,
      starter:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
n = len(hours)
m, b = 0.0, 0.0
learning_rate = 0.01
# Run the training loop for 5000 steps below
`,
      tests:[
        {type:'assert', expr:'abs(m - 7.5) < 0.001', label:'m converges to almost exactly 7.5'},
        {type:'assert', expr:'abs(b - 41.5) < 0.001', label:'b converges to almost exactly 41.5'}
      ]
    },
    {
      title:'Track the loss decreasing',
      desc:`Loss is the mean squared error between predictions and the real scores. Calculate initial_loss using
        the STARTING guess (m = 0.0, b = 0.0), then run the 5000-step training loop, then calculate final_loss
        using the FINAL m and b. Assert that initial_loss == 4210.0 and round(final_loss, 2) == 1.5 — the loss
        should shrink enormously over training.`,
      starter:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
n = len(hours)

m, b = 0.0, 0.0
# Calculate initial_loss here, using m = 0.0, b = 0.0

learning_rate = 0.01
for step in range(5000):
    predictions = [m*hours[i] + b for i in range(n)]
    dm = (-2/n) * sum(hours[i] * (scores[i] - predictions[i]) for i in range(n))
    db = (-2/n) * sum(scores[i] - predictions[i] for i in range(n))
    m = m - learning_rate * dm
    b = b - learning_rate * db

# Calculate final_loss here, using the final m and b
`,
      tests:[
        {type:'assert', expr:'initial_loss == 4210.0', label:'initial_loss correctly equals 4210.0'},
        {type:'assert', expr:'round(final_loss, 2) == 1.5', label:'final_loss correctly rounds to 1.5'}
      ]
    },
    {
      title:'Compare gradient descent to the exact formula',
      desc:`Using hours and scores, calculate exact_m and exact_b using Week 1's exact mean-based formula (the
        same one from Week 1's concept box). Then run the 5000-step gradient descent training loop to get gd_m
        and gd_b. Assert that abs(gd_m - exact_m) < 0.01 and abs(gd_b - exact_b) < 0.01 — two very different
        methods, landing on the same answer.`,
      starter:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
n = len(hours)

mean_x = sum(hours) / n
mean_y = sum(scores) / n
# Calculate exact_m and exact_b below, using Week 1's formula

gd_m, gd_b = 0.0, 0.0
learning_rate = 0.01
for step in range(5000):
    predictions = [gd_m*hours[i] + gd_b for i in range(n)]
    dm = (-2/n) * sum(hours[i] * (scores[i] - predictions[i]) for i in range(n))
    db = (-2/n) * sum(scores[i] - predictions[i] for i in range(n))
    gd_m = gd_m - learning_rate * dm
    gd_b = gd_b - learning_rate * db
`,
      tests:[
        {type:'assert', expr:'abs(gd_m - exact_m) < 0.01', label:'gradient descent\'s m matches the exact formula\'s m'},
        {type:'assert', expr:'abs(gd_b - exact_b) < 0.01', label:'gradient descent\'s b matches the exact formula\'s b'}
      ]
    },
    {
      title:'Fewer steps, a worse answer',
      desc:`Run the SAME training loop as before, but with only 500 steps instead of 5000, starting from m = 0.0,
        b = 0.0. Assert that abs(m - 7.5) > 0.5 — with far fewer steps, the loop hasn't had time to get nearly as
        close to the exact answer.`,
      starter:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
n = len(hours)
m, b = 0.0, 0.0
learning_rate = 0.01
# Run the training loop for only 500 steps below
`,
      tests:[
        {type:'assert', expr:'abs(m - 7.5) > 0.5', label:'with only 500 steps, m is still noticeably far from 7.5'}
      ]
    }
  ],
  quiz:[
    {
      q:'What does the gradient (dm, db) tell you?',
      options:['The exact final answer','Which direction (and how strongly) the error would get WORSE if m or b increased','A random guess','Nothing useful'],
      correct:1,
      explain:'The gradient points toward more error, so training moves m and b in the OPPOSITE direction to reduce error.'
    },
    {
      q:'Why do we subtract the gradient instead of adding it?',
      options:['Subtracting is just a convention with no reason','The gradient points toward MORE error, so subtracting moves toward LESS error','Addition would cause an error in Python','It only works with subtraction for other reasons'],
      correct:1,
      explain:'Since the gradient points toward increasing error, moving the opposite way (subtracting it) decreases error.'
    },
    {
      q:'What does the learning rate control?',
      options:['How many datasets are used','How big each nudge to m and b is on every step','The number of columns in the data','Whether the loop runs at all'],
      correct:1,
      explain:'The learning rate scales the gradient before it\'s applied — a bigger learning rate means bigger steps each time.'
    },
    {
      q:'How does gradient descent\'s final answer compare to Week 1\'s exact formula, after enough steps?',
      options:['It is completely different','It lands extremely close to the same m and b, just reached gradually instead of directly','It always overshoots and never matches','It only works for classification, not regression'],
      correct:1,
      explain:'Given enough steps and a suitable learning rate, gradient descent converges to essentially the same answer the exact formula computes directly.'
    }
  ],
  sandboxStarter3:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
n = len(hours)

for learning_rate in [0.001, 0.01]:
    m, b = 0.0, 0.0
    for step in range(5000):
        predictions = [m*hours[i] + b for i in range(n)]
        dm = (-2/n) * sum(hours[i] * (scores[i] - predictions[i]) for i in range(n))
        db = (-2/n) * sum(scores[i] - predictions[i] for i in range(n))
        m = m - learning_rate * dm
        b = b - learning_rate * db
    print("learning_rate", learning_rate, "-> m", round(m,2), "b", round(b,2))
`,
  stretchChallenge:{
    title:'A learning rate that\'s too slow',
    desc:`Run the SAME 5000-step training loop, but with learning_rate = 0.001 instead of 0.01. Assert that
      abs(m - 7.5) > 1 — a much smaller learning rate is still far from converged even after the same number of
      steps, showing the learning rate matters just as much as the step count.`,
    starter:`hours = [1, 2, 3, 4, 5]
scores = [50, 55, 65, 70, 80]
n = len(hours)
m, b = 0.0, 0.0
learning_rate = 0.001
# Run the training loop for 5000 steps below
`,
    tests:[
      {type:'assert', expr:'abs(m - 7.5) > 1', label:'with a smaller learning rate, m is still noticeably far from 7.5 after 5000 steps'}
    ]
  }
},
{
  key:'week6', num:6, title:'How Wrong, How Confident: Confusion Counts',
  scenarioTag:'Real world: not every mistake is the same kind of mistake',
  scenario:`Week 4's accuracy told you HOW OFTEN a classifier was right, but not WHAT KIND of mistakes it made.
    Saying a student will pass when they actually fail is a different kind of mistake from saying they'll fail
    when they actually pass — and in real decisions (medical tests, spam filters, admissions) those two mistakes
    can matter very differently. This week you'll break "right or wrong" into four precise outcomes, and use them
    to calculate two new scores: precision and recall.`,
  objectives:[
    'Name and count the four outcomes: true positive, false positive, true negative, false negative',
    'Calculate precision: of everything predicted "yes", how much really was?',
    'Calculate recall: of everything that really was "yes", how much did we catch?',
    'See how a different threshold trades precision for recall, or recall for precision'
  ],
  conceptHtml:`
    <p>Every prediction from a yes/no classifier falls into exactly one of four boxes, comparing what was
    <strong>predicted</strong> to what was <strong>actually true</strong>:</p>
    <ul>
      <li><strong>True Positive (TP)</strong> — predicted yes, actually yes (a correct "yes")</li>
      <li><strong>False Positive (FP)</strong> — predicted yes, actually no (a WRONG "yes")</li>
      <li><strong>True Negative (TN)</strong> — predicted no, actually no (a correct "no")</li>
      <li><strong>False Negative (FN)</strong> — predicted no, actually yes (a WRONG "no")</li>
    </ul>
    <pre class="code-block">predictions = [False, False, True, True, True, False, False, True, True, True]
actual =      [False, False, False, False, True, True, False, True, True, True]
n = len(predictions)

TP = sum(1 for i in range(n) if predictions[i] == True and actual[i] == True)
FP = sum(1 for i in range(n) if predictions[i] == True and actual[i] == False)
TN = sum(1 for i in range(n) if predictions[i] == False and actual[i] == False)
FN = sum(1 for i in range(n) if predictions[i] == False and actual[i] == True)
print(TP, FP, TN, FN)</pre>
    <p>From these four counts, two new scores answer two different questions:</p>
    <pre class="code-block">precision = TP / (TP + FP)   # of everything predicted "yes", how much really was "yes"?
recall = TP / (TP + FN)      # of everything that really was "yes", how much did we catch?
print(precision, recall)</pre>
    <h3>Let's break down the four-box counting, line by line</h3>
    <ul>
      <li><code>predictions[i] == True and actual[i] == True</code> — both are True, so this student was correctly
        predicted to be a "yes": a true positive.</li>
      <li><code>predictions[i] == True and actual[i] == False</code> — predicted "yes" but was really "no": a
        false positive, a wrong "yes".</li>
      <li>Accuracy from Week 4 lumps TP and TN together as simply "correct" — precision and recall separate out
        the two DIFFERENT kinds of "yes" (correct vs wrong) instead.</li>
      <li><code>TP / (TP + FP)</code> — the denominator is every "yes" prediction made (right or wrong), so
        precision measures how trustworthy a "yes" prediction is.</li>
      <li><code>TP / (TP + FN)</code> — the denominator is every real "yes" in the data, so recall measures how
        many of the real "yes" cases the classifier actually found.</li>
    </ul>`,
  sandboxStarter:`predictions = [False, False, True, True, True, False, False, True, True, True]
actual =      [False, False, False, False, True, True, False, True, True, True]

for i in range(len(predictions)):
    if predictions[i] == True and actual[i] == True:
        label = "TP"
    elif predictions[i] == True and actual[i] == False:
        label = "FP"
    elif predictions[i] == False and actual[i] == False:
        label = "TN"
    else:
        label = "FN"
    print("predicted:", predictions[i], "actual:", actual[i], "->", label)
`,
  sandboxStarter2:`predictions = [False, False, True, True, True, False, False, True, True, True]
actual =      [False, False, False, False, True, True, False, True, True, True]
n = len(predictions)

TP = sum(1 for i in range(n) if predictions[i] == True and actual[i] == True)
FP = sum(1 for i in range(n) if predictions[i] == True and actual[i] == False)
TN = sum(1 for i in range(n) if predictions[i] == False and actual[i] == False)
FN = sum(1 for i in range(n) if predictions[i] == False and actual[i] == True)
print("TP", TP, "FP", FP, "TN", TN, "FN", FN)

precision = TP / (TP + FP)
recall = TP / (TP + FN)
print("precision", precision, "recall", recall)
`,
  exercises:[
    {
      title:'Count the four outcomes',
      desc:`Using predictions = [False, False, True, True, True, False, False, True, True, True] and
        actual = [False, False, False, False, True, True, False, True, True, True], count TP, FP, TN, and FN.
        Assert that TP == 4, FP == 2, TN == 3, and FN == 1.`,
      starter:`predictions = [False, False, True, True, True, False, False, True, True, True]
actual =      [False, False, False, False, True, True, False, True, True, True]
n = len(predictions)
# Count TP, FP, TN, FN below
`,
      tests:[
        {type:'assert', expr:'TP == 4', label:'TP correctly equals 4'},
        {type:'assert', expr:'FP == 2', label:'FP correctly equals 2'},
        {type:'assert', expr:'TN == 3', label:'TN correctly equals 3'},
        {type:'assert', expr:'FN == 1', label:'FN correctly equals 1'}
      ]
    },
    {
      title:'Calculate precision',
      desc:`Using TP = 4 and FP = 2, calculate precision = TP / (TP + FP). Assert that
        abs(precision - (2/3)) < 0.0001.`,
      starter:`TP = 4
FP = 2
# Calculate precision below
`,
      tests:[{type:'assert', expr:'abs(precision - (2/3)) < 0.0001', label:'precision correctly equals 2/3'}]
    },
    {
      title:'Calculate recall',
      desc:`Using TP = 4 and FN = 1, calculate recall = TP / (TP + FN). Assert that recall == 0.8.`,
      starter:`TP = 4
FN = 1
# Calculate recall below
`,
      tests:[{type:'assert', expr:'recall == 0.8', label:'recall correctly equals 0.8'}]
    },
    {
      title:'Compare precision and recall',
      desc:`Using precision = 2/3 and recall = 0.8, compare the two. Assert that precision < recall — this
        classifier misses fewer real "yes" cases (good recall) than it makes wrong "yes" predictions (weaker
        precision).`,
      starter:`precision = 2 / 3
recall = 0.8
# Compare them below (no new variable needed, just make sure precision and recall are set)
`,
      tests:[{type:'assert', expr:'precision < recall', label:'precision is correctly less than recall for this data'}]
    },
    {
      title:'Count outcomes at a stricter threshold',
      desc:`Using classify(x, threshold) from Week 4, hours = [1,2,3,4,5,6,7,8,9,10], passed = [False, False,
        False, False, True, True, False, True, True, True], and threshold = 7, build predictions, then count TP,
        FP, TN, and FN against passed. Assert that TP == 3, FP == 1, TN == 4, and FN == 2.`,
      starter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
threshold = 7
# Build predictions, then count TP, FP, TN, FN below
`,
      tests:[
        {type:'assert', expr:'TP == 3', label:'TP correctly equals 3'},
        {type:'assert', expr:'FP == 1', label:'FP correctly equals 1'},
        {type:'assert', expr:'TN == 4', label:'TN correctly equals 4'},
        {type:'assert', expr:'FN == 2', label:'FN correctly equals 2'}
      ]
    },
    {
      title:'A stricter threshold flips the trade-off',
      desc:`Using TP = 3, FP = 1, FN = 2 from the stricter threshold = 7, calculate precision and recall. Assert
        that precision == 0.75, recall == 0.6, and precision > recall — the OPPOSITE trade-off from
        threshold = 5, where recall was higher than precision.`,
      starter:`TP = 3
FP = 1
FN = 2
# Calculate precision and recall below
`,
      tests:[
        {type:'assert', expr:'precision == 0.75', label:'precision correctly equals 0.75'},
        {type:'assert', expr:'recall == 0.6', label:'recall correctly equals 0.6'},
        {type:'assert', expr:'precision > recall', label:'precision is correctly greater than recall at this stricter threshold'}
      ]
    }
  ],
  quiz:[
    {
      q:'What is a false positive?',
      options:['Predicted no, actually no','Predicted yes, actually no — a WRONG "yes"','Predicted yes, actually yes','Any correct prediction'],
      correct:1,
      explain:'A false positive is a wrong "yes" prediction: the classifier said yes, but the real answer was no.'
    },
    {
      q:'What does precision measure?',
      options:['How many real "yes" cases were found','Of everything predicted "yes", how much really was "yes"','How many students there are in total','The same thing as accuracy'],
      correct:1,
      explain:'Precision = TP / (TP + FP): out of every "yes" prediction made, how many were actually correct.'
    },
    {
      q:'What does recall measure?',
      options:['Of everything that really was "yes", how much did the classifier catch','How trustworthy a "yes" prediction is','The total number of predictions','The same thing as precision'],
      correct:0,
      explain:'Recall = TP / (TP + FN): out of every real "yes" case in the data, how many did the classifier actually find.'
    },
    {
      q:'Why might a stricter (higher) threshold raise precision but lower recall?',
      options:['It never changes anything','A stricter threshold predicts "yes" less often, so the "yes" predictions it does make are more likely correct (higher precision), but it now misses more real "yes" cases (lower recall)','It only affects true negatives','Precision and recall always move together'],
      correct:1,
      explain:'Being more selective about predicting "yes" tends to make those predictions more reliable (precision up) at the cost of missing more real positives (recall down).'
    }
  ],
  sandboxStarter3:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]

for threshold in [5, 7]:
    predictions = [classify(h, threshold) for h in hours]
    TP = sum(1 for i in range(len(hours)) if predictions[i] == True and passed[i] == True)
    FP = sum(1 for i in range(len(hours)) if predictions[i] == True and passed[i] == False)
    FN = sum(1 for i in range(len(hours)) if predictions[i] == False and passed[i] == True)
    precision = TP / (TP + FP)
    recall = TP / (TP + FN)
    print("threshold", threshold, "-> precision", round(precision, 2), "recall", round(recall, 2))
`,
  stretchChallenge:{
    title:'Combine precision and recall: the F1 score',
    desc:`Using precision = 2/3 and recall = 0.8 (from threshold = 5), calculate the F1 score: F1 = 2 * precision *
      recall / (precision + recall) — a single number that balances both. Assert that round(f1, 4) == 0.7273.`,
    starter:`precision = 2 / 3
recall = 0.8
# Calculate f1 below
`,
    tests:[
      {type:'assert', expr:'round(f1, 4) == 0.7273', label:'f1 correctly rounds to 0.7273'}
    ]
  }
},
{
  key:'week7', num:7, title:'Finding Your Neighbors: k-NN by Hand',
  scenarioTag:'Real world: judging a new student by the ones most like them',
  scenario:`So far your classifiers have used a single rule (a threshold). But there's a completely different way
    to classify something: look at the students who are MOST SIMILAR to the new one, and copy whatever most of
    them did. This is called k-Nearest Neighbors (k-NN) — "k" is just how many similar students you look at. This
    week each student is described by TWO numbers (hours studied AND attendance), so "similar" means close
    together as points on a grid.`,
  objectives:[
    'Calculate the squared distance between two points (and understand why the square root can be skipped)',
    'Sort a list of existing students by distance from a new student',
    'Take the k closest students\' labels and predict by majority vote',
    'See how changing k can change the predicted answer'
  ],
  conceptHtml:`
    <p>This week, each student is a point: (hours, attendance). The straight-line distance between two points
    (x1, y1) and (x2, y2) is normally <code>sqrt((x1-x2)**2 + (y1-y2)**2)</code> — but for FINDING THE CLOSEST
    points, the square root doesn't actually matter: if A is closer than B using the real distance, A is also
    closer than B using just the squared distance (since square root never changes which of two numbers is
    bigger). So k-NN usually skips the square root entirely and works with <strong>squared distance</strong>.</p>
    <pre class="code-block">students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
labels =   ['fail', 'fail', 'fail', 'pass', 'pass', 'pass']
new_point = (6, 5)

sq_distances = [(students[i][0]-new_point[0])**2 + (students[i][1]-new_point[1])**2 for i in range(len(students))]
print(sq_distances)</pre>
    <p>Once you have the distances, sort the student INDICES by distance (closest first), then look at the labels
    of the closest k:</p>
    <pre class="code-block">sorted_indices = sorted(range(len(students)), key=lambda i: sq_distances[i])
k = 3
nearest_labels = [labels[i] for i in sorted_indices[:k]]
print(nearest_labels)

pass_votes = nearest_labels.count('pass')
fail_votes = nearest_labels.count('fail')
predicted = 'pass' if pass_votes > fail_votes else 'fail'
print(predicted)</pre>
    <h3>Let's break down the k-NN code, line by line</h3>
    <ul>
      <li><code>sorted(range(len(students)), key=lambda i: sq_distances[i])</code> — sorts the INDICES (0, 1, 2...)
        by how far away that student is, closest first, instead of sorting the points themselves.</li>
      <li><code>sorted_indices[:k]</code> — slicing off just the first k, i.e. the k closest students.</li>
      <li><code>nearest_labels.count('pass')</code> — Python lists have a built-in <code>.count()</code> method
        that counts how many times a value appears — no loop needed.</li>
      <li>Changing <code>k</code> changes WHICH students get counted, so it can change which label wins the vote —
        a small k listens to only the very closest students, a larger k averages over more of them.</li>
    </ul>`,
  sandboxStarter:`students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
labels =   ['fail', 'fail', 'fail', 'pass', 'pass', 'pass']
new_point = (6, 5)

sq_distances = [(students[i][0]-new_point[0])**2 + (students[i][1]-new_point[1])**2 for i in range(len(students))]
for i in range(len(students)):
    print(students[i], labels[i], "-> squared distance", sq_distances[i])
`,
  sandboxStarter2:`students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
labels =   ['fail', 'fail', 'fail', 'pass', 'pass', 'pass']
new_point = (6, 5)

sq_distances = [(students[i][0]-new_point[0])**2 + (students[i][1]-new_point[1])**2 for i in range(len(students))]
sorted_indices = sorted(range(len(students)), key=lambda i: sq_distances[i])

k = 3
nearest_labels = [labels[i] for i in sorted_indices[:k]]
pass_votes = nearest_labels.count('pass')
fail_votes = nearest_labels.count('fail')
predicted = 'pass' if pass_votes > fail_votes else 'fail'
print("nearest", k, "labels:", nearest_labels)
print("predicted:", predicted)
`,
  exercises:[
    {
      title:'Calculate squared distances',
      desc:`Using students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)] and new_point = (6, 5), calculate
        sq_distances: the squared distance from new_point to each student, in the same order. Assert that
        sq_distances == [25, 10, 5, 4, 4, 18].`,
      starter:`students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
new_point = (6, 5)
# Build sq_distances below
`,
      tests:[{type:'assert', expr:'sq_distances == [25, 10, 5, 4, 4, 18]', label:'sq_distances is correctly calculated'}]
    },
    {
      title:'Sort by distance',
      desc:`Using sq_distances = [25, 10, 5, 4, 4, 18], build sorted_indices: the student indices (0 to 5) sorted
        so the closest student comes first. Assert that sorted_indices == [3, 4, 2, 1, 5, 0].`,
      starter:`sq_distances = [25, 10, 5, 4, 4, 18]
# Build sorted_indices below
`,
      tests:[{type:'assert', expr:'sorted_indices == [3, 4, 2, 1, 5, 0]', label:'sorted_indices is correctly calculated'}]
    },
    {
      title:'Find the k=3 nearest neighbors\' labels',
      desc:`Using sorted_indices = [3, 4, 2, 1, 5, 0], labels = ['fail', 'fail', 'fail', 'pass', 'pass', 'pass'],
        and k = 3, build nearest_labels: the labels of the k closest students, in distance order. Assert that
        nearest_labels == ['pass', 'pass', 'fail'].`,
      starter:`sorted_indices = [3, 4, 2, 1, 5, 0]
labels = ['fail', 'fail', 'fail', 'pass', 'pass', 'pass']
k = 3
# Build nearest_labels below
`,
      tests:[{type:'assert', expr:"nearest_labels == ['pass', 'pass', 'fail']", label:'nearest_labels is correctly calculated'}]
    },
    {
      title:'Take the majority vote',
      desc:`Using nearest_labels = ['pass', 'pass', 'fail'], count how many are 'pass' and how many are 'fail'
        using .count(), then set predicted to whichever has more votes. Assert that predicted == 'pass'.`,
      starter:`nearest_labels = ['pass', 'pass', 'fail']
# Count votes, then set predicted below
`,
      tests:[{type:'assert', expr:"predicted == 'pass'", label:'predicted correctly equals pass'}]
    },
    {
      title:'A different k gives a different answer',
      desc:`Using students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)], labels = ['fail', 'fail', 'fail', 'pass',
        'pass', 'pass'], and new_point = (5, 6), run the full k-NN pipeline (squared distances, sort, vote) TWICE:
        once with k = 3 to get predicted3, and once with k = 5 to get predicted5. Assert that predicted3 == 'fail'
        and predicted5 == 'pass' — the SAME new student gets a different answer depending on k.`,
      starter:`students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
labels = ['fail', 'fail', 'fail', 'pass', 'pass', 'pass']
new_point = (5, 6)

sq_distances = [(students[i][0]-new_point[0])**2 + (students[i][1]-new_point[1])**2 for i in range(len(students))]
sorted_indices = sorted(range(len(students)), key=lambda i: sq_distances[i])
# Build predicted3 (k=3) and predicted5 (k=5) below
`,
      tests:[
        {type:'assert', expr:"predicted3 == 'fail'", label:'predicted3 (k=3) correctly equals fail'},
        {type:'assert', expr:"predicted5 == 'pass'", label:'predicted5 (k=5) correctly equals pass'}
      ]
    },
    {
      title:'Classify a completely new student',
      desc:`Using the same students and labels, but new_point2 = (2, 3), run the full k-NN pipeline with k = 3 to
        get predicted2. Assert that predicted2 == 'fail'.`,
      starter:`students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
labels = ['fail', 'fail', 'fail', 'pass', 'pass', 'pass']
new_point2 = (2, 3)
k = 3
# Run the full pipeline below to get predicted2
`,
      tests:[{type:'assert', expr:"predicted2 == 'fail'", label:'predicted2 correctly equals fail'}]
    }
  ],
  quiz:[
    {
      q:'Why can k-NN skip the square root and use squared distance instead?',
      options:['It can\'t — the square root is required','Square root never changes which of two distances is bigger, so the ORDER of closest-to-farthest stays the same either way','Squared distance is always more accurate','Python cannot calculate square roots'],
      correct:1,
      explain:'Since square root is always increasing, if A\'s real distance is smaller than B\'s, A\'s squared distance is smaller too — the ordering used to find "closest" doesn\'t change.'
    },
    {
      q:'What does k mean in k-NN?',
      options:['The number of features per student','The number of nearest neighbors whose labels get counted in the vote','The total number of students in the dataset','The distance formula used'],
      correct:1,
      explain:'k is how many of the closest existing points are looked at before taking a majority vote.'
    },
    {
      q:'If k = 1, how is the prediction made?',
      options:['By averaging every student in the dataset','By copying the label of the single closest student','By always predicting "pass"','By ignoring distance entirely'],
      correct:1,
      explain:'With k = 1, there\'s only one neighbor to vote, so the prediction is simply that one neighbor\'s label.'
    },
    {
      q:'Why might increasing k from 3 to 5 change the prediction?',
      options:['It never does','A larger k brings in more (and possibly differently-labeled) neighbors into the vote, which can shift the majority','Increasing k always increases accuracy','k only affects the distance calculation, not the vote'],
      correct:1,
      explain:'A bigger k counts more neighbors in the vote — if those extra neighbors have a different label, the majority (and therefore the prediction) can flip.'
    }
  ],
  sandboxStarter3:`students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
labels =   ['fail', 'fail', 'fail', 'pass', 'pass', 'pass']
new_point = (5, 6)

sq_distances = [(students[i][0]-new_point[0])**2 + (students[i][1]-new_point[1])**2 for i in range(len(students))]
sorted_indices = sorted(range(len(students)), key=lambda i: sq_distances[i])

for k in [1, 3, 5]:
    nearest_labels = [labels[i] for i in sorted_indices[:k]]
    pass_votes = nearest_labels.count('pass')
    fail_votes = nearest_labels.count('fail')
    predicted = 'pass' if pass_votes > fail_votes else 'fail'
    print("k =", k, "-> nearest:", nearest_labels, "-> predicted:", predicted)
`,
  stretchChallenge:{
    title:'The simplest case: k = 1',
    desc:`Using students, labels, and new_point2 = (2, 3) from before, run the pipeline with k = 1 (just the
      single closest student) to get predicted_k1. Assert that predicted_k1 == 'fail'.`,
    starter:`students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
labels = ['fail', 'fail', 'fail', 'pass', 'pass', 'pass']
new_point2 = (2, 3)
k = 1
# Run the full pipeline below to get predicted_k1
`,
    tests:[
      {type:'assert', expr:"predicted_k1 == 'fail'", label:'predicted_k1 correctly equals fail'}
    ]
  }
},
{
  key:'week8', num:8, title:'Grouping Without Labels: Simple Clustering',
  scenarioTag:'Real world: finding natural groups when nobody labeled the data',
  scenario:`Every model so far had labels to learn from — pass/fail, a real score. But sometimes nobody has
    labeled anything yet, and the question is simpler: do these students naturally fall into groups AT ALL? This
    week's students are the same (hours, attendance) points as Week 7 — but with no 'pass'/'fail' labels this
    time. You'll discover groups yourself using clustering: guess some starting centers, assign each point to its
    closest one, then move each center to the middle of its own group, and repeat.`,
  objectives:[
    'Assign each point to its nearest of two cluster centers, using squared distance',
    'Recompute a cluster center as the mean of the points assigned to it',
    'Repeat assignment and recomputation until the groups stop changing',
    'See that clustering finds groups with no labels at all — the grouping itself is the answer'
  ],
  conceptHtml:`
    <p>This week's points have NO labels — just (hours, attendance). <strong>Clustering</strong> starts by
    guessing two starting centers, then repeats two steps:</p>
    <ol>
      <li><strong>Assign</strong>: put each point into whichever center is closest (using squared distance, same
        trick as Week 7).</li>
      <li><strong>Recompute</strong>: move each center to the MEAN of the points now assigned to it.</li>
    </ol>
    <pre class="code-block">points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
center_A = (2, 2)
center_B = (9, 8)

assignments = []
for p in points:
    dA = (p[0]-center_A[0])**2 + (p[1]-center_A[1])**2
    dB = (p[0]-center_B[0])**2 + (p[1]-center_B[1])**2
    assignments.append('A' if dA < dB else 'B')
print(assignments)</pre>
    <p>Now recompute each center as the mean of its own assigned points:</p>
    <pre class="code-block">cluster_a_points = [points[i] for i in range(len(points)) if assignments[i] == 'A']
new_center_A = (sum(p[0] for p in cluster_a_points) / len(cluster_a_points),
                sum(p[1] for p in cluster_a_points) / len(cluster_a_points))
print(new_center_A)</pre>
    <h3>Let's break down the clustering code, line by line</h3>
    <ul>
      <li><code>assignments.append('A' if dA < dB else 'B')</code> — each point picks whichever center is
        currently closer, with no idea what "A" or "B" really mean yet.</li>
      <li><code>[points[i] for i in range(len(points)) if assignments[i] == 'A']</code> — filters down to just the
        points CURRENTLY assigned to cluster A.</li>
      <li><code>sum(p[0] for p in cluster_a_points) / len(cluster_a_points)</code> — the mean x-coordinate of
        cluster A's points, exactly like Week 1's <code>mean()</code>, just applied to one coordinate at a time.</li>
      <li>After recomputing both centers, you repeat the ASSIGN step again with the NEW centers — if nobody
        changes cluster, the algorithm has <strong>converged</strong> and you can stop.</li>
    </ul>`,
  sandboxStarter:`points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
center_A = (2, 2)
center_B = (9, 8)

assignments = []
for p in points:
    dA = (p[0]-center_A[0])**2 + (p[1]-center_A[1])**2
    dB = (p[0]-center_B[0])**2 + (p[1]-center_B[1])**2
    assignments.append('A' if dA < dB else 'B')
    print(p, "-> distance to A:", dA, "distance to B:", dB, "-> assigned:", assignments[-1])
`,
  sandboxStarter2:`points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
center_A = (2, 2)
center_B = (9, 8)

assignments = []
for p in points:
    dA = (p[0]-center_A[0])**2 + (p[1]-center_A[1])**2
    dB = (p[0]-center_B[0])**2 + (p[1]-center_B[1])**2
    assignments.append('A' if dA < dB else 'B')

cluster_a_points = [points[i] for i in range(len(points)) if assignments[i] == 'A']
cluster_b_points = [points[i] for i in range(len(points)) if assignments[i] == 'B']

new_center_A = (sum(p[0] for p in cluster_a_points) / len(cluster_a_points),
                sum(p[1] for p in cluster_a_points) / len(cluster_a_points))
new_center_B = (sum(p[0] for p in cluster_b_points) / len(cluster_b_points),
                sum(p[1] for p in cluster_b_points) / len(cluster_b_points))
print("new center A:", new_center_A)
print("new center B:", new_center_B)
`,
  exercises:[
    {
      title:'Assign each point to the nearest center',
      desc:`Using points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)], center_A = (2, 2), and center_B = (9, 8),
        build assignments: a list of 'A' or 'B' for each point, whichever center is closer (using squared
        distance). Assert that assignments == ['A', 'A', 'A', 'B', 'B', 'B'].`,
      starter:`points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
center_A = (2, 2)
center_B = (9, 8)
# Build assignments below
`,
      tests:[{type:'assert', expr:"assignments == ['A', 'A', 'A', 'B', 'B', 'B']", label:'assignments is correctly calculated'}]
    },
    {
      title:'Recompute center A',
      desc:`Using cluster_a_points = [(2,2), (3,4), (5,3)] (the points assigned to A), calculate new_center_A as a
        tuple (mean_x, mean_y). Assert that round(new_center_A[0], 2) == 3.33 and round(new_center_A[1], 2) == 3.0.`,
      starter:`cluster_a_points = [(2,2), (3,4), (5,3)]
# Build new_center_A below, as a tuple (mean_x, mean_y)
`,
      tests:[
        {type:'assert', expr:'round(new_center_A[0], 2) == 3.33', label:'new_center_A x-coordinate is correctly calculated'},
        {type:'assert', expr:'round(new_center_A[1], 2) == 3.0', label:'new_center_A y-coordinate is correctly calculated'}
      ]
    },
    {
      title:'Recompute center B',
      desc:`Using cluster_b_points = [(6,7), (8,5), (9,8)] (the points assigned to B), calculate new_center_B as a
        tuple (mean_x, mean_y). Assert that round(new_center_B[0], 2) == 7.67 and round(new_center_B[1], 2) == 6.67.`,
      starter:`cluster_b_points = [(6,7), (8,5), (9,8)]
# Build new_center_B below, as a tuple (mean_x, mean_y)
`,
      tests:[
        {type:'assert', expr:'round(new_center_B[0], 2) == 7.67', label:'new_center_B x-coordinate is correctly calculated'},
        {type:'assert', expr:'round(new_center_B[1], 2) == 6.67', label:'new_center_B y-coordinate is correctly calculated'}
      ]
    },
    {
      title:'Run one full clustering step',
      desc:`Using points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)], center_A = (2, 2), and center_B = (9, 8), do
        BOTH steps together: build assignments, then compute new_center_A and new_center_B from them. Assert that
        assignments == ['A', 'A', 'A', 'B', 'B', 'B'], round(new_center_A[0], 2) == 3.33, and
        round(new_center_B[0], 2) == 7.67.`,
      starter:`points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
center_A = (2, 2)
center_B = (9, 8)
# Build assignments, then new_center_A and new_center_B below
`,
      tests:[
        {type:'assert', expr:"assignments == ['A', 'A', 'A', 'B', 'B', 'B']", label:'assignments is correctly calculated'},
        {type:'assert', expr:'round(new_center_A[0], 2) == 3.33', label:'new_center_A is correctly calculated'},
        {type:'assert', expr:'round(new_center_B[0], 2) == 7.67', label:'new_center_B is correctly calculated'}
      ]
    },
    {
      title:'Check whether the clustering has converged',
      desc:`Using points, the ORIGINAL assignments = ['A', 'A', 'A', 'B', 'B', 'B'], and the new centers
        new_center_A = (3.3333333333333335, 3.0) and new_center_B = (7.666666666666667, 6.666666666666667),
        re-assign every point to its nearest of the NEW centers to get assignments2. Assert that
        assignments2 == assignments — the groups didn't change, so the clustering has converged.`,
      starter:`points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
assignments = ['A', 'A', 'A', 'B', 'B', 'B']
new_center_A = (3.3333333333333335, 3.0)
new_center_B = (7.666666666666667, 6.666666666666667)
# Build assignments2 below, using new_center_A and new_center_B
`,
      tests:[{type:'assert', expr:'assignments2 == assignments', label:'assignments2 correctly matches the original assignments (converged)'}]
    },
    {
      title:'Try different starting centers',
      desc:`Using the same points, but starting from center_A = (3, 4) and center_B = (8, 5) instead (two points
        from the middle of the data, not the extremes), build assignments3. Assert that
        assignments3 == ['A', 'A', 'A', 'B', 'B', 'B'] — the SAME grouping as before, showing that when groups are
        clearly separated, different starting centers can still find the same answer.`,
      starter:`points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
center_A = (3, 4)
center_B = (8, 5)
# Build assignments3 below
`,
      tests:[{type:'assert', expr:"assignments3 == ['A', 'A', 'A', 'B', 'B', 'B']", label:'assignments3 correctly matches the expected grouping'}]
    }
  ],
  quiz:[
    {
      q:'What is different about clustering, compared to every model earlier in this track?',
      options:['It requires labels just like classification','It has no labels at all — it discovers groups purely from how close points are to each other','It only works with one feature','It is identical to k-NN'],
      correct:1,
      explain:'Clustering is unsupervised: there are no pass/fail labels to learn from, only the points themselves.'
    },
    {
      q:'What are the two steps repeated in clustering?',
      options:['Sort, then filter','Assign each point to its nearest center, then recompute each center as the mean of its assigned points','Train, then test','Classify, then hash'],
      correct:1,
      explain:'Clustering alternates between assigning points to the nearest current center and moving each center to the mean of its group.'
    },
    {
      q:'How do you know clustering has "converged"?',
      options:['After exactly one step, always','When re-assigning with the new centers gives the exact same groups as before — nothing changes anymore','When every point is in the same cluster','It never converges'],
      correct:1,
      explain:'If assigning points to the newly-recomputed centers doesn\'t move anyone to a different group, the algorithm has stabilized.'
    },
    {
      q:'Why might different starting centers sometimes lead to a different final grouping?',
      options:['They never do','Clustering only looks at whichever center is CURRENTLY closest, so a different starting point can lead the assign/recompute steps down a different path, especially if groups aren\'t clearly separated','Only Week 1\'s formula is affected by starting values','Starting centers are always ignored'],
      correct:1,
      explain:'Because each step only reacts to the current centers, a different starting guess can settle into a different (sometimes worse) grouping, particularly when clusters overlap.'
    }
  ],
  sandboxStarter3:`points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]

def assign(points, center_A, center_B):
    assignments = []
    for p in points:
        dA = (p[0]-center_A[0])**2 + (p[1]-center_A[1])**2
        dB = (p[0]-center_B[0])**2 + (p[1]-center_B[1])**2
        assignments.append('A' if dA < dB else 'B')
    return assignments

def recompute(points, assignments, label):
    group = [points[i] for i in range(len(points)) if assignments[i] == label]
    return (sum(p[0] for p in group)/len(group), sum(p[1] for p in group)/len(group))

center_A, center_B = (2, 2), (9, 8)
for step in range(3):
    assignments = assign(points, center_A, center_B)
    center_A = recompute(points, assignments, 'A')
    center_B = recompute(points, assignments, 'B')
    print("step", step, "-> assignments:", assignments, "-> center_A:", center_A, "center_B:", center_B)
`,
  stretchChallenge:{
    title:'Cluster a smaller group of points',
    desc:`Using points = [(1,1), (2,2), (9,9)], center_A = (1, 1), and center_B = (9, 9), build assignments.
      Assert that assignments == ['A', 'A', 'B'].`,
    starter:`points = [(1,1), (2,2), (9,9)]
center_A = (1, 1)
center_B = (9, 9)
# Build assignments below
`,
    tests:[
      {type:'assert', expr:"assignments == ['A', 'A', 'B']", label:'assignments correctly equals [A, A, B]'}
    ]
  }
},
{
  key:'week9', num:9, title:'Putting It All Together',
  scenarioTag:'Real world: picking the right tool for the question you actually have',
  scenario:`You've now built four completely different kinds of models by hand: regression (predicting a number),
    a threshold classifier and precision/recall (predicting yes/no with labels), k-NN (predicting yes/no by
    comparing to similar past examples), and clustering (finding groups with no labels at all). This final week
    revisits each one — using the exact same datasets you've already solved — and then asks the real question a
    machine learning practitioner has to answer FIRST, before writing any code: which of these four approaches
    actually fits the question being asked?`,
  objectives:[
    'Recall and re-run each of the four approaches built so far: regression, classification, k-NN, clustering',
    'Recognize what kind of question each approach answers',
    'Decide which approach fits a new, unfamiliar scenario',
    'See all four side by side on real data, to compare how differently they work'
  ],
  conceptHtml:`
    <p>Four different questions need four different tools:</p>
    <ul>
      <li><strong>Regression</strong> (Weeks 1, 5) — "What NUMBER will this be?" Needs numeric labels to learn
        from (like real scores).</li>
      <li><strong>Classification</strong> (Weeks 4, 6) — "Is this a YES or a NO?" Needs yes/no labels to learn
        from, and a rule (like a threshold) to apply to new cases.</li>
      <li><strong>k-NN</strong> (Week 7) — Also answers yes/no, but instead of a fixed rule, it looks at the
        MOST SIMILAR labeled examples and copies what most of them did.</li>
      <li><strong>Clustering</strong> (Week 8) — "What groups exist in this data?" Used when there are NO labels
        at all — the groups themselves are the answer, discovered from scratch.</li>
    </ul>
    <p>The single most important question before writing any model: <strong>do I have labels, and what KIND of
      answer do I actually need?</strong> If you need a number, and you have numeric labels — regression. If you
      need yes/no, and you have yes/no labels — classification or k-NN. If you have no labels at all — clustering.</p>
    <pre class="code-block">hours = [2, 4, 6, 8]
scores = [60, 68, 74, 82]
mean_x = sum(hours) / len(hours)
mean_y = sum(scores) / len(scores)
num = sum((hours[i]-mean_x)*(scores[i]-mean_y) for i in range(len(hours)))
den = sum((hours[i]-mean_x)**2 for i in range(len(hours)))
m = num / den
b = mean_y - m * mean_x
print(m, b)   # 3.6 53.0 — Week 1's original numbers</pre>
    <h3>Why revisit old datasets instead of new ones?</h3>
    <ul>
      <li>Every dataset used this week is one you've already solved correctly in an earlier week — the numbers
        haven't changed, only the LENS you're looking at them through has.</li>
      <li>This is deliberate: the goal this week isn't learning new arithmetic, it's building the judgment to
        recognize which of the four tools a brand-new problem calls for.</li>
    </ul>`,
  sandboxStarter:`hours = [2, 4, 6, 8]
scores = [60, 68, 74, 82]
mean_x = sum(hours) / len(hours)
mean_y = sum(scores) / len(scores)
num = sum((hours[i]-mean_x)*(scores[i]-mean_y) for i in range(len(hours)))
den = sum((hours[i]-mean_x)**2 for i in range(len(hours)))
m = num / den
b = mean_y - m * mean_x
print("Regression (Week 1) ->", "m =", m, "b =", b)
`,
  sandboxStarter2:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
threshold = 5

predictions = [classify(h, threshold) for h in hours]
correct_count = sum(1 for i in range(len(hours)) if predictions[i] == passed[i])
accuracy = correct_count / len(hours)
print("Classification (Week 4) -> accuracy =", accuracy)
`,
  exercises:[
    {
      title:'Revisit Week 1\'s regression',
      desc:`Using hours = [2, 4, 6, 8] and scores = [60, 68, 74, 82], fit m and b using the least-squares formula
        from Week 1. Assert that m == 3.6 and b == 53.0.`,
      starter:`hours = [2, 4, 6, 8]
scores = [60, 68, 74, 82]
# Fit m and b below
`,
      tests:[
        {type:'assert', expr:'m == 3.6', label:'m correctly equals 3.6'},
        {type:'assert', expr:'b == 53.0', label:'b correctly equals 53.0'}
      ]
    },
    {
      title:'Revisit Week 4\'s classifier',
      desc:`Using hours = [1..10], passed = [False, False, False, False, True, True, False, True, True, True], and
        threshold = 5, calculate accuracy using classify() and a match count, just like Week 4. Assert that
        accuracy == 0.9.`,
      starter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
threshold = 5
# Build predictions, then calculate accuracy below
`,
      tests:[{type:'assert', expr:'accuracy == 0.9', label:'accuracy correctly equals 0.9'}]
    },
    {
      title:'Revisit Week 6\'s precision and recall',
      desc:`Using predictions = [False, False, True, True, True, False, False, True, True, True] and
        actual = [False, False, False, False, True, True, False, True, True, True], count TP, FP, FN, then
        calculate precision and recall. Assert that abs(precision - (2/3)) < 0.0001 and recall == 0.8.`,
      starter:`predictions = [False, False, True, True, True, False, False, True, True, True]
actual =      [False, False, False, False, True, True, False, True, True, True]
n = len(predictions)
# Count TP, FP, FN, then calculate precision and recall below
`,
      tests:[
        {type:'assert', expr:'abs(precision - (2/3)) < 0.0001', label:'precision correctly equals 2/3'},
        {type:'assert', expr:'recall == 0.8', label:'recall correctly equals 0.8'}
      ]
    },
    {
      title:'Revisit Week 7\'s k-NN',
      desc:`Using students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)], labels = ['fail', 'fail', 'fail', 'pass',
        'pass', 'pass'], new_point = (6, 5), and k = 3, run the full k-NN pipeline to get predicted. Assert that
        predicted == 'pass'.`,
      starter:`students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
labels = ['fail', 'fail', 'fail', 'pass', 'pass', 'pass']
new_point = (6, 5)
k = 3
# Run the full k-NN pipeline below to get predicted
`,
      tests:[{type:'assert', expr:"predicted == 'pass'", label:'predicted correctly equals pass'}]
    },
    {
      title:'Revisit Week 8\'s clustering',
      desc:`Using points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)], center_A = (2, 2), and center_B = (9, 8),
        build assignments. Assert that assignments == ['A', 'A', 'A', 'B', 'B', 'B'].`,
      starter:`points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
center_A = (2, 2)
center_B = (9, 8)
# Build assignments below
`,
      tests:[{type:'assert', expr:"assignments == ['A', 'A', 'A', 'B', 'B', 'B']", label:'assignments is correctly calculated'}]
    },
    {
      title:'Choose the right approach',
      desc:`For each scenario below, decide which of 'regression', 'classification', 'knn', or 'clustering' fits
        best, and build answers as a list of your 4 choices, in order:
        1. "Predict a student's exact exam score from their study hours"
        2. "Decide yes/no whether a student will pass, using a fixed rule learned from past pass/fail records"
        3. "Guess a brand new student's pass/fail by comparing them to the most similar past students"
        4. "Group students into natural clusters when nobody has labeled any of them"
        Assert that answers == ['regression', 'classification', 'knn', 'clustering'].`,
      starter:`# Build answers as a list of 4 strings, in order, below
answers = []
`,
      tests:[{type:'assert', expr:"answers == ['regression', 'classification', 'knn', 'clustering']", label:'answers correctly matches the expected 4 techniques, in order'}]
    }
  ],
  quiz:[
    {
      q:'Which approach should you reach for when you need to predict an exact NUMBER, and you have numeric labels to learn from?',
      options:['Clustering','Regression','k-NN only','None of these can predict a number'],
      correct:1,
      explain:'Regression is built specifically for predicting a numeric value, using numeric labels like real scores.'
    },
    {
      q:'You have yes/no labels for past students, and want to classify a BRAND NEW student by comparing them to the most similar past examples. Which approach fits best?',
      options:['Regression','Clustering','k-NN','None of these'],
      correct:2,
      explain:'k-NN classifies by finding the most similar labeled examples and taking a majority vote — exactly this situation.'
    },
    {
      q:'You have a pile of student data with NO labels at all, and want to find out if natural groups exist. Which approach fits?',
      options:['Classification','Clustering','Regression','k-NN'],
      correct:1,
      explain:'Clustering is the only one of the four that needs no labels — it discovers groups directly from the data.'
    },
    {
      q:'What is the single most important question to ask before picking an approach?',
      options:['Which one is fastest to code','Do I have labels, and what KIND of answer (a number, a yes/no, or unlabeled groups) do I actually need?','Which approach uses the most data','None of these matter'],
      correct:1,
      explain:'The type of answer needed (number vs. yes/no) and whether labels exist at all determines which of the four tools is appropriate.'
    }
  ],
  sandboxStarter3:`students = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
labels =   ['fail', 'fail', 'fail', 'pass', 'pass', 'pass']
new_point = (6, 5)
sq_distances = [(students[i][0]-new_point[0])**2 + (students[i][1]-new_point[1])**2 for i in range(len(students))]
sorted_indices = sorted(range(len(students)), key=lambda i: sq_distances[i])
nearest_labels = [labels[i] for i in sorted_indices[:3]]
predicted = 'pass' if nearest_labels.count('pass') > nearest_labels.count('fail') else 'fail'
print("k-NN (Week 7) -> predicted:", predicted)

points = [(2,2), (3,4), (5,3), (6,7), (8,5), (9,8)]
center_A, center_B = (2, 2), (9, 8)
assignments = []
for p in points:
    dA = (p[0]-center_A[0])**2 + (p[1]-center_A[1])**2
    dB = (p[0]-center_B[0])**2 + (p[1]-center_B[1])**2
    assignments.append('A' if dA < dB else 'B')
print("Clustering (Week 8) -> assignments:", assignments)
`,
  stretchChallenge:{
    title:'Match one more scenario',
    desc:`Decide which approach fits: "A school wants to predict how many minutes late the school bus will be,
      based on how much traffic there is." Set answer to your choice. Assert that answer == 'regression' — this
      is predicting an exact number (minutes late), not a yes/no or an unlabeled group.`,
    starter:`# Set answer below to one of: 'regression', 'classification', 'knn', 'clustering'
answer = ''
`,
    tests:[
      {type:'assert', expr:"answer == 'regression'", label:'answer correctly equals regression'}
    ]
  }
}
];

const MLR_MP1 = {
  key:'mp1',
  title:'Mini Project 1 — Build a Pass/Fail Predictor',
  intro:`A full class of 10 students has study hours and exam scores on record. You'll fit a model by hand,
    honestly check how well it generalises using a train/test split, then turn it into a pass/fail predictor —
    three stages, combining everything from Weeks 1-4.`,
  newTrick:`Reusing a REGRESSION model's own predicted scores to drive a CLASSIFIER — instead of classifying
    directly from hours studied, Stage C classifies from the model's predicted score, so the fitting and the
    classifying work together as one pipeline.`,
  stages:[
    {
      key:'a', title:'Stage A — Fit the model',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10] and scores = [45,50,55,60,68,72,75,80,85,90], fit m and b using
        the least-squares formulas from Week 1. Assert that round(m, 2) == 4.99 and round(b, 2) == 40.53.`,
      starter:`hours = [1,2,3,4,5,6,7,8,9,10]
scores = [45,50,55,60,68,72,75,80,85,90]
# Calculate m and b below
`,
      tests:[
        {type:'assert', expr:'round(m, 2) == 4.99', label:'m is correctly calculated (4.99)'},
        {type:'assert', expr:'round(b, 2) == 40.53', label:'b is correctly calculated (40.53)'}
      ]
    },
    {
      key:'b', title:'Stage B — Check it honestly with a train/test split',
      desc:`Using the same hours/scores, split with split_point = 8 (Week 3's approach), fit NEW m/b values using
        only the training portion, then calculate test_mae on the held-out test portion. Assert that
        round(test_mae, 2) == 1.16 — the model generalises well to students it never saw while fitting.`,
      starter:`def predict(x, m, b):
    return m*x + b

hours = [1,2,3,4,5,6,7,8,9,10]
scores = [45,50,55,60,68,72,75,80,85,90]
split_point = 8
# Split into train/test, fit m/b on the training portion only, then calculate test_mae
`,
      tests:[{type:'assert', expr:'round(test_mae, 2) == 1.16', label:'test_mae is correctly calculated (1.16)'}]
    },
    {
      key:'c', title:'Stage C — Turn it into a pass/fail predictor',
      desc:`Using m = 4.993939393939394, b = 40.53333333333333 (fitted on the FULL class in Stage A), predict a
        score for every student in hours, then classify each as "predicted pass" if their PREDICTED score is at
        least 60. Compare against "actual pass" (their real score is at least 60), and calculate accuracy across
        all 10 students. Assert that accuracy == 1.0 — the model correctly predicts pass/fail for every student.`,
      starter:`def predict(x, m, b):
    return m*x + b

hours = [1,2,3,4,5,6,7,8,9,10]
scores = [45,50,55,60,68,72,75,80,85,90]
m = 4.993939393939394
b = 40.53333333333333
# Predict a score for each student, classify predicted_pass (predicted score >= 60) and
# actual_pass (real score >= 60), then calculate accuracy
`,
      tests:[{type:'assert', expr:'accuracy == 1.0', label:'accuracy correctly equals 1.0'}]
    }
  ]
};

const MLR_MP2 = {
  key:'mp2',
  title:'Mini Project 2 — Student Success Predictor — By Hand',
  intro:`A new class of 10 students has study hours and exam scores on record — but this time one student's
    score is a surprise (much lower than their hours would suggest). Three doors: fit a regression model, turn it
    into a classifier and honestly measure precision/recall (not just accuracy), then cluster the raw hours into
    two natural groups with no labels at all — and see whether clustering agrees with reality even when the
    regression-based classifier gets fooled.`,
  fixtureNote:`All three doors build on this same class of 10 students:`,
  fixtureCode:`hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
scores = [42, 48, 58, 55, 55, 74, 78, 82, 88, 92]`,
  doors:[
    {
      key:'a', title:'Door 1 — Fit the model',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10] and scores = [42,48,58,55,55,74,78,82,88,92], fit m and b using
        the least-squares formulas from Week 1. Assert that round(m, 2) == 5.68 and round(b, 2) == 35.93.`,
      starter:`hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
scores = [42, 48, 58, 55, 55, 74, 78, 82, 88, 92]
# Calculate m and b below
`,
      tests:[
        {type:'assert', expr:'round(m, 2) == 5.68', label:'m is correctly calculated (5.68)'},
        {type:'assert', expr:'round(b, 2) == 35.93', label:'b is correctly calculated (35.93)'}
      ]
    },
    {
      key:'b', title:'Door 2 — Classify pass/fail, and check precision and recall (not just accuracy)',
      desc:`Using m = 5.684848484848485, b = 35.93333333333334 (fitted in Door 1), predict a score for every
        student, then build predicted_pass (predicted score >= 60) and actual_pass (real score >= 60). Count TP,
        FP, and FN, then calculate accuracy, precision, and recall. Assert that accuracy == 0.9,
        round(precision, 4) == 0.8333, and recall == 1.0 — one student's predicted score crosses 60 even though
        their real score didn't, so accuracy alone hides that this is really a false positive.`,
      starter:`def predict(x, m, b):
    return m*x + b

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
scores = [42, 48, 58, 55, 55, 74, 78, 82, 88, 92]
m = 5.684848484848485
b = 35.93333333333334
# Build predicted_pass and actual_pass, count TP/FP/FN, then calculate accuracy, precision, recall
`,
      tests:[
        {type:'assert', expr:'accuracy == 0.9', label:'accuracy correctly equals 0.9'},
        {type:'assert', expr:'round(precision, 4) == 0.8333', label:'precision correctly rounds to 0.8333'},
        {type:'assert', expr:'recall == 1.0', label:'recall correctly equals 1.0'}
      ]
    },
    {
      key:'c', title:'Door 3 — Cluster the raw hours, with no labels at all',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10] (ignore scores completely this time), cluster with
        center_A = 1 and center_B = 10, using squared distance (h - center)**2. Assert that
        assignments == ['A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B'] — clustering, using NO labels at all,
        lands on the exact same split as the real pass/fail results, even though Door 2's regression-based
        classifier got one student wrong.`,
      starter:`hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
center_A = 1
center_B = 10
# Build assignments below
`,
      tests:[{type:'assert', expr:"assignments == ['A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B']", label:'assignments correctly matches the true pass/fail split'}]
    }
  ]
};

const MLR_INTERMEDIATE_WEEKS = [
{
  key:'week1', num:1, title:'More Than One Clue: Multi-Feature Regression by Hand',
  scenarioTag:'Real world: hours studied AND practice tests taken — two clues beat one',
  scenario:`Week 1's model used a single clue: hours studied. But a teacher also has practice-test counts on
    record, and scores clearly depend on BOTH. Instead of fitting brand-new weights by hand (that needs more
    algebra than we'll do here), you'll be GIVEN a weighted-sum formula and see, very concretely, how using two
    clues instead of one can dramatically cut down prediction error.`,
  objectives:[
    'Extend a single-feature model into a weighted sum of two features',
    'Compute predictions using two weights and an intercept',
    'Measure mean absolute error for a multi-feature model',
    'Compare a two-feature model against a one-feature model on the SAME data'
  ],
  conceptHtml:`
    <p>Week 1's model was <code>score = m &times; hours + b</code> — one input, one weight. A
    <strong>multi-feature</strong> model just adds more weighted inputs to the same sum:</p>
    <pre class="code-block">def predict2(hours, tests, w1, w2, b):
    return w1*hours + w2*tests + b

w1, w2, b = 6, 8, 38
print(predict2(5, 2, w1, w2, b))</pre>
    <p>Each weight tells you how much THAT feature contributes: <code>w1</code> is hours' weight, <code>w2</code>
    is tests' weight, and <code>b</code> is still the intercept — the starting point when every feature is 0.
    Fitting these weights by hand from scratch needs more algebra than Week 1's single-feature formulas (it's
    exactly what <code>LinearRegression</code> does automatically in the AutoML track) — here, the weights are
    GIVEN, and the focus is on what using two clues together actually buys you.</p>
    <h3>Let's break down why two clues can beat one</h3>
    <ul>
      <li><code>w1*hours + w2*tests + b</code> — the SAME weighted-sum idea as Week 1, just with a second term
        added. Nothing new mechanically: multiply each feature by its own weight, add them all up, add
        <code>b</code>.</li>
      <li>If two students study the SAME number of hours but took a different number of practice tests, a
        single-feature (hours-only) model predicts the exact SAME score for both — it has no way to tell them
        apart. A two-feature model can, because <code>tests</code> is doing real work in the formula.</li>
      <li>The error-measuring idea from Week 1 (mean absolute error, or MAE) doesn't change at all — you still
        compare <code>predicted</code> against <code>actual</code> and average the absolute differences. What
        changes is how <code>predicted</code> gets built in the first place.</li>
    </ul>`,
  sandboxStarter:`def predict2(hours, tests, w1, w2, b):
    return w1*hours + w2*tests + b

w1, w2, b = 6, 8, 38
print("Student A (5 hours, 2 tests):", predict2(5, 2, w1, w2, b))
print("Student B (5 hours, 0 tests):", predict2(5, 0, w1, w2, b))
`,
  sandboxStarter2:`def predict2(hours, tests, w1, w2, b):
    return w1*hours + w2*tests + b

hours = [1, 2, 3, 4]
tests = [0, 4, 0, 4]
w1, w2, b = 6, 8, 38
predicted = [predict2(h, t, w1, w2, b) for h, t in zip(hours, tests)]
print(predicted)
`,
  exercises:[
    {
      title:'Predict with two clues',
      desc:`Write a function predict2(hours, tests, w1, w2, b) that returns w1*hours + w2*tests + b. Using
        w1 = 6, w2 = 8, b = 38, assert that predict2(5, 2, w1, w2, b) equals 84.`,
      starter:`def predict2(hours, tests, w1, w2, b):
    # TODO: return the weighted-sum prediction
    pass

w1, w2, b = 6, 8, 38
`,
      tests:[{type:'assert', expr:'predict2(5, 2, w1, w2, b) == 84', label:'predict2(5, 2, w1, w2, b) correctly equals 84'}]
    },
    {
      title:'Predict for the whole class',
      desc:`Using hours = [1,2,3,4,5,6,7,8], tests = [0,4,0,4,0,4,0,4] and w1 = 6, w2 = 8, b = 38, build
        predicted = [predict2(h, t, w1, w2, b) for h, t in zip(hours, tests)]. Assert that
        predicted == [44, 82, 56, 94, 68, 106, 80, 118].`,
      starter:`def predict2(hours, tests, w1, w2, b):
    return w1*hours + w2*tests + b

hours = [1, 2, 3, 4, 5, 6, 7, 8]
tests = [0, 4, 0, 4, 0, 4, 0, 4]
w1, w2, b = 6, 8, 38
# Build predicted below
`,
      tests:[{type:'assert', expr:'predicted == [44, 82, 56, 94, 68, 106, 80, 118]', label:'predicted is correctly calculated for the whole class'}]
    },
    {
      title:'Measure one student\'s error',
      desc:`Using actual = [45, 81, 57, 93, 69, 105, 81, 117] and predicted from before, calculate
        error = actual[3] - predicted[3] (student index 3: 4 hours, 4 tests). Assert that error == -1.`,
      starter:`def predict2(hours, tests, w1, w2, b):
    return w1*hours + w2*tests + b

hours = [1, 2, 3, 4, 5, 6, 7, 8]
tests = [0, 4, 0, 4, 0, 4, 0, 4]
w1, w2, b = 6, 8, 38
predicted = [predict2(h, t, w1, w2, b) for h, t in zip(hours, tests)]
actual = [45, 81, 57, 93, 69, 105, 81, 117]
# Calculate error below
`,
      tests:[{type:'assert', expr:'error == -1', label:'error is correctly calculated (-1)'}]
    },
    {
      title:'Measure the whole class\'s error',
      desc:`Using actual and predicted from before, calculate errors = [actual[i] - predicted[i] for i in
        range(len(actual))], then mae = sum(abs(e) for e in errors) / len(errors) (Week 1's MAE idea, applied to
        the two-feature model). Assert that mae == 1.0.`,
      starter:`def predict2(hours, tests, w1, w2, b):
    return w1*hours + w2*tests + b

hours = [1, 2, 3, 4, 5, 6, 7, 8]
tests = [0, 4, 0, 4, 0, 4, 0, 4]
w1, w2, b = 6, 8, 38
predicted = [predict2(h, t, w1, w2, b) for h, t in zip(hours, tests)]
actual = [45, 81, 57, 93, 69, 105, 81, 117]
# Calculate errors, then mae, below
`,
      tests:[{type:'assert', expr:'mae == 1.0', label:'mae is correctly calculated (1.0)'}]
    },
    {
      title:'Fit a one-feature model on the SAME data',
      desc:`Using hours and actual from before, fit m and b using Week 1's least-squares formulas (ignoring tests
        completely, just like Week 1). Assert that round(m, 2) == 7.43 and round(b, 2) == 47.57.`,
      starter:`hours = [1, 2, 3, 4, 5, 6, 7, 8]
actual = [45, 81, 57, 93, 69, 105, 81, 117]
# Calculate m and b below, using Week 1's least-squares steps
`,
      tests:[
        {type:'assert', expr:'round(m, 2) == 7.43', label:'m is correctly calculated (7.43)'},
        {type:'assert', expr:'round(b, 2) == 47.57', label:'b is correctly calculated (47.57)'}
      ]
    },
    {
      title:'Compare the two models',
      desc:`Using m = 7.428571428571429, b = 47.57142857142857 (fitted in the previous exercise) and hours,
        actual from before, build pred1 = [m*h + b for h in hours], then
        errors1 = [actual[i] - pred1[i] for i in range(len(actual))], then
        mae1 = sum(abs(e) for e in errors1) / len(errors1). Assert that round(mae1, 2) == 14.29 and
        two_features_better = mae1 > 1.0 (Week 1's mae for the two-feature model). Assert that
        two_features_better == True — ignoring the tests clue makes the model MUCH worse on this exact data.`,
      starter:`hours = [1, 2, 3, 4, 5, 6, 7, 8]
actual = [45, 81, 57, 93, 69, 105, 81, 117]
m = 7.428571428571429
b = 47.57142857142857
# Build pred1, errors1, mae1 and two_features_better below
`,
      tests:[
        {type:'assert', expr:'round(mae1, 2) == 14.29', label:'mae1 (one-feature model) is correctly calculated (14.29)'},
        {type:'assert', expr:'two_features_better == True', label:'The two-feature model is confirmed to be far more accurate'}
      ]
    }
  ],
  quiz:[
    {
      q:'In predict2(hours, tests, w1, w2, b) = w1*hours + w2*tests + b, what does w2 represent?',
      options:['The total number of students','How much the "tests" feature contributes to the prediction','The intercept','The mean absolute error'],
      correct:1,
      explain:'Each weight scales its OWN feature — w2 is specifically how much practice-test count contributes to the predicted score.'
    },
    {
      q:'Two students studied the exact same number of hours but took a different number of practice tests. What does a HOURS-ONLY model predict for them?',
      options:['Two different scores, based on their tests count','The exact same score for both — it has no way to use the tests information at all','It refuses to make a prediction','It always predicts 0'],
      correct:1,
      explain:'A model that never looks at a feature can never use it to tell two students apart, no matter how different that feature actually is.'
    },
    {
      q:'Why is mae1 (14.29, hours-only) so much worse than mae (1.0, two-feature) on the SAME class in this week\'s exercises?',
      options:['The hours-only model has a bug','Practice-test count carries real, useful signal that the hours-only model has no way to use','The two-feature model was just lucky','mae1 was measured incorrectly'],
      correct:1,
      explain:'When a second feature genuinely predicts the target, ignoring it throws away real information — and the model\'s error grows accordingly.'
    },
    {
      q:'Why were the weights (w1, w2, b) GIVEN this week instead of fitted by hand from scratch, like Week 1\'s m and b were?',
      options:['Multi-feature weights can never be fitted','Fitting multiple weights by hand needs more algebra than a simple formula — real tools like AutoML\'s LinearRegression do this automatically','It is not possible to have two weights','The weights don\'t actually matter'],
      correct:1,
      explain:'Week 1\'s single-feature formula has a direct algebraic solution; fitting several weights at once needs more machinery — exactly the job scikit-learn\'s LinearRegression does under the hood in the AutoML track.'
    }
  ],
  sandboxStarter3:`def predict2(hours, tests, w1, w2, b):
    return w1*hours + w2*tests + b

hours = [1, 2, 3, 4, 5, 6, 7, 8]
tests = [0, 4, 0, 4, 0, 4, 0, 4]
actual = [45, 81, 57, 93, 69, 105, 81, 117]
w1, w2, b = 6, 8, 38

predicted = [predict2(h, t, w1, w2, b) for h, t in zip(hours, tests)]
errors = [actual[i] - predicted[i] for i in range(len(actual))]
mae = sum(abs(e) for e in errors) / len(errors)
print("Two-feature MAE:", mae)

m, b1 = 7.428571428571429, 47.57142857142857
pred1 = [m*h + b1 for h in hours]
errors1 = [actual[i] - pred1[i] for i in range(len(actual))]
mae1 = sum(abs(e) for e in errors1) / len(errors1)
print("One-feature MAE:", round(mae1, 2))
`,
  stretchChallenge:{
    title:'A different class, different weights',
    desc:`Using hours = [2, 4, 6, 8], tests = [1, 3, 1, 3], w1 = 5, w2 = 10, b = 30, build
      predicted = [predict2(h, t, w1, w2, b) for h, t in zip(hours, tests)]. Using
      actual = [52, 78, 72, 98], calculate errors = [actual[i] - predicted[i] for i in range(len(actual))], then
      mae = sum(abs(e) for e in errors) / len(errors). Assert that mae == 2.0.`,
    starter:`def predict2(hours, tests, w1, w2, b):
    return w1*hours + w2*tests + b

hours = [2, 4, 6, 8]
tests = [1, 3, 1, 3]
w1, w2, b = 5, 10, 30
actual = [52, 78, 72, 98]
# Build predicted, errors and mae below
`,
    tests:[
      {type:'assert', expr:'mae == 2.0', label:'mae is correctly calculated for the new class (2.0)'}
    ]
  }
},
{
  key:'week2', num:2, title:'Making It Fair: Feature Scaling by Hand',
  scenarioTag:'Real world: hours studied (0-10) vs total assignment score (0-500) — unscaled distance lies',
  scenario:`Week 7's k-NN (Beginner) compared students using squared distance across two features. But what if
    one feature is measured 0-10 (hours studied) and the other 0-500 (total assignment score)? Raw squared
    distance ends up almost entirely decided by whichever feature has the BIGGER numbers, even when that's not
    actually the more important clue. This week fixes that with min-max scaling, by hand.`,
  objectives:[
    'Explain why features on very different scales distort a distance calculation',
    'Apply the min-max scaling formula: (x - min) / (max - min)',
    'Scale both a training set AND a new point using the SAME min/max',
    'See a nearest-neighbor answer actually change once scaling is applied'
  ],
  conceptHtml:`
    <p><strong>Min-max scaling</strong> squashes every value in a feature into the range 0 to 1, using the
    feature's own minimum and maximum:</p>
    <pre class="code-block">def scale(x, xmin, xmax):
    return (x - xmin) / (xmax - xmin)

hours = [8, 2, 6, 4]
hmin, hmax = min(hours), max(hours)
scaled_hours = [scale(h, hmin, hmax) for h in hours]
print(scaled_hours)</pre>
    <p>The smallest value always scales to 0.0, the largest always scales to 1.0, and everything else lands
    proportionally in between. Crucially, the SAME <code>xmin</code>/<code>xmax</code> (taken from the training
    data) must be reused to scale any NEW point too — otherwise the new point isn't being compared on the same
    footing as everyone else.</p>
    <p>Why does this matter for distance? Squared distance adds up <code>(difference)**2</code> for EACH feature.
    If one feature's raw differences are routinely in the hundreds (like a 0-500 score) and another's are just
    single digits (like 0-10 hours), the big-numbered feature completely swamps the squared-distance total — the
    small-numbered feature barely matters at all, even if it's actually the more meaningful clue.</p>
    <h3>Let's break down why scaling fixes this</h3>
    <ul>
      <li><code>scale(x, xmin, xmax)</code> — the exact same idea for every feature: how far is this value from
        the minimum, as a FRACTION of the whole range? A value equal to the minimum scores 0.0, a value equal to
        the maximum scores 1.0.</li>
      <li>After scaling, EVERY feature's values live in the same 0-to-1 range — so no single feature can dominate
        a distance calculation just because its raw numbers happened to be bigger.</li>
      <li>The new point must be scaled using the TRAINING data's min/max, not its own — otherwise you'd be
        comparing two differently-scaled rulers.</li>
    </ul>`,
  sandboxStarter:`def scale(x, xmin, xmax):
    return (x - xmin) / (xmax - xmin)

hours = [8, 2, 6, 4]
scores = [400, 140, 200, 300]

hmin, hmax = min(hours), max(hours)
smin, smax = min(scores), max(scores)

scaled_hours = [scale(h, hmin, hmax) for h in hours]
scaled_scores = [scale(s, smin, smax) for s in scores]
print("scaled hours:", [round(x, 4) for x in scaled_hours])
print("scaled scores:", [round(x, 4) for x in scaled_scores])
`,
  sandboxStarter2:`def scale(x, xmin, xmax):
    return (x - xmin) / (xmax - xmin)

hours = [8, 2, 6, 4]
scores = [400, 140, 200, 300]
new_hours, new_score = 7, 150

raw_sq = [(hours[i]-new_hours)**2 + (scores[i]-new_score)**2 for i in range(len(hours))]
print("raw squared distances:", raw_sq)
nearest_raw = min(range(len(hours)), key=lambda i: raw_sq[i])
print("nearest (raw):", nearest_raw)
`,
  exercises:[
    {
      title:'Scale one feature',
      desc:`Write scale(x, xmin, xmax) returning (x - xmin) / (xmax - xmin). Using hours = [8, 2, 6, 4], build
        scaled_hours = [scale(h, min(hours), max(hours)) for h in hours]. Assert that
        [round(x, 4) for x in scaled_hours] == [1.0, 0.0, 0.6667, 0.3333].`,
      starter:`def scale(x, xmin, xmax):
    # TODO: return the min-max scaled value
    pass

hours = [8, 2, 6, 4]
# Build scaled_hours below
`,
      tests:[{type:'assert', expr:'[round(x, 4) for x in scaled_hours] == [1.0, 0.0, 0.6667, 0.3333]', label:'scaled_hours is correctly calculated'}]
    },
    {
      title:'Scale the second feature',
      desc:`Using scores = [400, 140, 200, 300], build scaled_scores = [scale(s, min(scores), max(scores)) for s
        in scores]. Assert that [round(x, 4) for x in scaled_scores] == [1.0, 0.0, 0.2308, 0.6154].`,
      starter:`def scale(x, xmin, xmax):
    return (x - xmin) / (xmax - xmin)

scores = [400, 140, 200, 300]
# Build scaled_scores below
`,
      tests:[{type:'assert', expr:'[round(x, 4) for x in scaled_scores] == [1.0, 0.0, 0.2308, 0.6154]', label:'scaled_scores is correctly calculated'}]
    },
    {
      title:'Scale the new student, using the SAME min/max',
      desc:`Using hours = [8, 2, 6, 4], scores = [400, 140, 200, 300], and new_hours = 7, new_score = 150,
        calculate new_h_scaled = scale(new_hours, min(hours), max(hours)) and
        new_s_scaled = scale(new_score, min(scores), max(scores)). Assert that round(new_h_scaled, 4) == 0.8333
        and round(new_s_scaled, 4) == 0.0385 — the SAME training min/max used to scale the new point, not its
        own.`,
      starter:`def scale(x, xmin, xmax):
    return (x - xmin) / (xmax - xmin)

hours = [8, 2, 6, 4]
scores = [400, 140, 200, 300]
new_hours, new_score = 7, 150
# Calculate new_h_scaled and new_s_scaled below
`,
      tests:[
        {type:'assert', expr:'round(new_h_scaled, 4) == 0.8333', label:'new_h_scaled is correctly calculated (0.8333)'},
        {type:'assert', expr:'round(new_s_scaled, 4) == 0.0385', label:'new_s_scaled is correctly calculated (0.0385)'}
      ]
    },
    {
      title:'Find the nearest neighbor WITHOUT scaling',
      desc:`Using hours = [8, 2, 6, 4], scores = [400, 140, 200, 300], and new_point = (7, 150), build
        raw_sq = [(hours[i]-7)**2 + (scores[i]-150)**2 for i in range(4)], then
        raw_nearest_idx = min(range(4), key=lambda i: raw_sq[i]). Assert that raw_nearest_idx == 1 — the raw
        distance calculation is dominated by the score feature's much bigger numbers.`,
      starter:`hours = [8, 2, 6, 4]
scores = [400, 140, 200, 300]
# Build raw_sq, then raw_nearest_idx, below
`,
      tests:[{type:'assert', expr:'raw_nearest_idx == 1', label:'raw_nearest_idx is correctly calculated (1)'}]
    },
    {
      title:'Find the nearest neighbor WITH scaling',
      desc:`Using scaled_hours = [1.0, 0.0, 0.6666666666666666, 0.3333333333333333], scaled_scores = [1.0, 0.0,
        0.23076923076923078, 0.6153846153846154], new_h_scaled = 0.8333333333333334, and
        new_s_scaled = 0.038461538461538464, build scaled_sq = [(scaled_hours[i]-new_h_scaled)**2 +
        (scaled_scores[i]-new_s_scaled)**2 for i in range(4)], then
        scaled_nearest_idx = min(range(4), key=lambda i: scaled_sq[i]). Assert that scaled_nearest_idx == 2 — a
        DIFFERENT answer from the unscaled version.`,
      starter:`scaled_hours = [1.0, 0.0, 0.6666666666666666, 0.3333333333333333]
scaled_scores = [1.0, 0.0, 0.23076923076923078, 0.6153846153846154]
new_h_scaled = 0.8333333333333334
new_s_scaled = 0.038461538461538464
# Build scaled_sq, then scaled_nearest_idx, below
`,
      tests:[{type:'assert', expr:'scaled_nearest_idx == 2', label:'scaled_nearest_idx is correctly calculated (2)'}]
    },
    {
      title:'See the label actually flip',
      desc:`Using labels = ['pass', 'fail', 'pass', 'fail'], raw_nearest_idx = 1, and scaled_nearest_idx = 2, set
        raw_label = labels[raw_nearest_idx] and scaled_label = labels[scaled_nearest_idx]. Assert that
        raw_label == 'fail' and scaled_label == 'pass' and raw_label != scaled_label — scaling didn't just change
        a number, it changed the actual predicted label.`,
      starter:`labels = ['pass', 'fail', 'pass', 'fail']
raw_nearest_idx = 1
scaled_nearest_idx = 2
# Set raw_label and scaled_label below
`,
      tests:[{type:'assert', expr:"raw_label == 'fail' and scaled_label == 'pass' and raw_label != scaled_label", label:'raw_label and scaled_label are correctly identified as different'}]
    }
  ],
  quiz:[
    {
      q:'What does scale(x, xmin, xmax) = (x - xmin) / (xmax - xmin) actually do?',
      options:['Rounds x to the nearest whole number','Maps x into the range 0 to 1, based on where it falls between the feature\'s own min and max','Multiplies x by a fixed constant','Removes x from the dataset'],
      correct:1,
      explain:'The minimum always scales to 0.0, the maximum always scales to 1.0, and everything else lands proportionally between them.'
    },
    {
      q:'Why did the raw (unscaled) squared distance in this week get dominated by the "scores" feature?',
      options:['Scores were sorted first','Scores have a much bigger numeric range (0-500) than hours (0-10), so score differences contribute far more to the squared-distance total','Python always weighs the second feature more','The hours values were all identical'],
      correct:1,
      explain:'Squared distance adds up each feature\'s squared difference — a feature with naturally bigger numbers produces bigger squared differences, and ends up dominating the total.'
    },
    {
      q:'Why must a NEW point be scaled using the TRAINING data\'s min/max, not its own?',
      options:['It doesn\'t matter which min/max is used','Using a different ruler for the new point would make the comparison unfair — everyone needs to be measured against the SAME reference range','New points can never be scaled','Scaling a new point is optional'],
      correct:1,
      explain:'Scaling is only meaningful as a shared reference — the new point has to be placed on the exact same 0-to-1 scale that the training data was measured against.'
    },
    {
      q:'In this week\'s exercises, scaling actually changed which student was the "nearest neighbor." What does that show?',
      options:['Scaling is just a cosmetic change that never affects real answers','Scaling can genuinely change a model\'s prediction — an unscaled distance-based model can give a MISLEADING answer','The raw calculation was always correct','Scaled and unscaled distances always agree'],
      correct:1,
      explain:'This week\'s exact numbers show scaling isn\'t just tidying up — it can flip which neighbor is "closest," and therefore flip the predicted label itself.'
    }
  ],
  sandboxStarter3:`def scale(x, xmin, xmax):
    return (x - xmin) / (xmax - xmin)

hours = [8, 2, 6, 4]
scores = [400, 140, 200, 300]
labels = ['pass', 'fail', 'pass', 'fail']
new_hours, new_score = 7, 150

hmin, hmax = min(hours), max(hours)
smin, smax = min(scores), max(scores)
scaled_hours = [scale(h, hmin, hmax) for h in hours]
scaled_scores = [scale(s, smin, smax) for s in scores]
new_h_scaled = scale(new_hours, hmin, hmax)
new_s_scaled = scale(new_score, smin, smax)

raw_sq = [(hours[i]-new_hours)**2 + (scores[i]-new_score)**2 for i in range(4)]
scaled_sq = [(scaled_hours[i]-new_h_scaled)**2 + (scaled_scores[i]-new_s_scaled)**2 for i in range(4)]

raw_nearest = min(range(4), key=lambda i: raw_sq[i])
scaled_nearest = min(range(4), key=lambda i: scaled_sq[i])
print("Unscaled nearest neighbor:", labels[raw_nearest])
print("Scaled nearest neighbor:", labels[scaled_nearest])
`,
  stretchChallenge:{
    title:'Scale a completely new pair of students',
    desc:`Using hours = [3, 9], scores = [500, 120], labels = ['fail', 'pass'], and new_point = (8, 130), scale
      both features (min-max, using the training min/max), scale the new point the same way, calculate
      scaled_sq for both students, and find scaled_nearest_idx. Assert that
      scaled_label = labels[scaled_nearest_idx] equals 'pass'.`,
    starter:`def scale(x, xmin, xmax):
    return (x - xmin) / (xmax - xmin)

hours = [3, 9]
scores = [500, 120]
labels = ['fail', 'pass']
new_hours, new_score = 8, 130
# Scale both features and the new point, calculate scaled_sq, then scaled_nearest_idx and scaled_label
`,
    tests:[
      {type:'assert', expr:"scaled_label == 'pass'", label:'scaled_label is correctly identified (pass)'}
    ]
  }
},
{
  key:'week3', num:3, title:'Splitting K Ways: Cross-Validation by Hand',
  scenarioTag:'Real world: one lucky (or unlucky) test split can mislead you',
  scenario:`Week 3's (Beginner) train/test split held back just ONE chunk of students to test on — but what if
    that particular chunk happened to be easy (or hard) to predict, just by luck? k-fold cross-validation fixes
    this by splitting the class into k equal chunks ("folds"), and testing on EVERY fold in turn — so every
    single student gets used as a test case exactly once, and the final error estimate is an average across all
    of them, not just one lucky slice.`,
  objectives:[
    'Split a dataset into k equal folds',
    'For one fold, build its train set (every OTHER fold) and test set (that fold)',
    'Fit and score a model on a single fold, the same way as a normal train/test split',
    'Average the error across all k folds into one cross-validated score'
  ],
  conceptHtml:`
    <p><strong>k-fold cross-validation</strong> splits the data into k equal-sized folds. For EACH fold in turn,
    that fold becomes the test set, and every OTHER fold combined becomes the training set:</p>
    <pre class="code-block">hours = [1,2,3,4,5,6,7,8,9]
scores = [50,54,60,63,68,74,77,82,88]
k = 3
fold_size = len(hours) // k   # 3

folds_hours = [hours[i*fold_size:(i+1)*fold_size] for i in range(k)]
print(folds_hours)   # [[1,2,3], [4,5,6], [7,8,9]]</pre>
    <p>For fold <code>i</code>, the test set is that fold, and the training set is everything BEFORE it plus
    everything AFTER it, joined together:</p>
    <pre class="code-block">i = 1
test_start = i*fold_size
test_end = test_start + fold_size
test_hours = hours[test_start:test_end]              # [4, 5, 6]
train_hours = hours[:test_start] + hours[test_end:]   # [1,2,3,7,8,9]</pre>
    <p>Fit and score that fold exactly like a normal train/test split (Week 3, Beginner) — but do this k times,
    once per fold, and average the k resulting MAE values into one <strong>cross-validated MAE</strong>. Because
    EVERY student ends up in a test fold exactly once, the final average reflects the WHOLE dataset, not just
    whichever 20% happened to be held back.</p>
    <h3>Let's break down why this is more trustworthy than one split</h3>
    <ul>
      <li><code>hours[:test_start] + hours[test_end:]</code> — list concatenation (<code>+</code>) joins
        everything BEFORE the test fold with everything AFTER it, which is exactly "every other fold" without
        needing to loop over the other folds individually.</li>
      <li>A single 80/20 split only ever tests on 20% of the students — with k=3 folds, by the time all 3 folds
        have taken a turn as the test set, EVERY student has been tested on exactly once.</li>
      <li>Averaging <code>fold_maes</code> gives one number that reflects performance across the WHOLE dataset,
        smoothing out the "what if that one held-back chunk happened to be unusually easy or hard" risk that a
        single split carries.</li>
    </ul>`,
  sandboxStarter:`hours = [1,2,3,4,5,6,7,8,9]
scores = [50,54,60,63,68,74,77,82,88]
k = 3
fold_size = len(hours) // k

folds_hours = [hours[i*fold_size:(i+1)*fold_size] for i in range(k)]
folds_scores = [scores[i*fold_size:(i+1)*fold_size] for i in range(k)]
for i in range(k):
    print("fold", i, ":", folds_hours[i], folds_scores[i])
`,
  sandboxStarter2:`def predict(x, m, b):
    return m*x + b

hours = [1,2,3,4,5,6,7,8,9]
scores = [50,54,60,63,68,74,77,82,88]
fold_size = 3

i = 1
test_start = i*fold_size
test_end = test_start + fold_size
test_hours = hours[test_start:test_end]
test_scores = scores[test_start:test_end]
train_hours = hours[:test_start] + hours[test_end:]
train_scores = scores[:test_start] + scores[test_end:]

mean_x = sum(train_hours)/len(train_hours)
mean_y = sum(train_scores)/len(train_scores)
numerator = sum((train_hours[j]-mean_x)*(train_scores[j]-mean_y) for j in range(len(train_hours)))
denominator = sum((train_hours[j]-mean_x)**2 for j in range(len(train_hours)))
m = numerator/denominator
b = mean_y - m*mean_x

preds = [predict(x, m, b) for x in test_hours]
fold_mae = sum(abs(test_scores[j]-preds[j]) for j in range(len(test_scores)))/len(test_scores)
print("fold", i, "test:", test_hours, "fold_mae:", round(fold_mae, 2))
`,
  exercises:[
    {
      title:'Build the folds',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9] and k = 3, calculate fold_size = len(hours) // k, then build
        folds_hours = [hours[i*fold_size:(i+1)*fold_size] for i in range(k)]. Assert that
        folds_hours == [[1,2,3],[4,5,6],[7,8,9]].`,
      starter:`hours = [1,2,3,4,5,6,7,8,9]
k = 3
# Calculate fold_size, then build folds_hours, below
`,
      tests:[{type:'assert', expr:'folds_hours == [[1,2,3],[4,5,6],[7,8,9]]', label:'folds_hours is correctly calculated'}]
    },
    {
      title:'Build fold 1\'s train/test split',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9], scores = [50,54,60,63,68,74,77,82,88], fold_size = 3, and i = 1,
        calculate test_start = i*fold_size, test_end = test_start+fold_size, then build test_hours, test_scores
        (that fold) and train_hours, train_scores (every OTHER fold, joined). Assert that
        test_hours == [4,5,6] and train_hours == [1,2,3,7,8,9].`,
      starter:`hours = [1,2,3,4,5,6,7,8,9]
scores = [50,54,60,63,68,74,77,82,88]
fold_size = 3
i = 1
# Build test_hours, test_scores, train_hours, train_scores below
`,
      tests:[
        {type:'assert', expr:'test_hours == [4,5,6]', label:'test_hours is correctly calculated'},
        {type:'assert', expr:'train_hours == [1,2,3,7,8,9]', label:'train_hours is correctly calculated'}
      ]
    },
    {
      title:'Fit and score fold 1',
      desc:`Using train_hours = [1,2,3,7,8,9], train_scores = [50,54,60,77,82,88], test_hours = [4,5,6], and
        test_scores = [63,68,74], fit m and b on the training portion (Week 1's least-squares formulas), predict
        on test_hours, then calculate fold_mae. Assert that round(m, 2) == 4.66 and round(fold_mae, 2) == 0.73.`,
      starter:`def predict(x, m, b):
    return m*x + b

train_hours = [1,2,3,7,8,9]
train_scores = [50,54,60,77,82,88]
test_hours = [4,5,6]
test_scores = [63,68,74]
# Fit m and b on the training portion, predict on test_hours, then calculate fold_mae
`,
      tests:[
        {type:'assert', expr:'round(m, 2) == 4.66', label:'m is correctly calculated (4.66)'},
        {type:'assert', expr:'round(fold_mae, 2) == 0.73', label:'fold_mae is correctly calculated (0.73)'}
      ]
    },
    {
      title:'Average the fold errors',
      desc:`Using fold_maes = [1.1905, 0.7299, 0.7619] (fold 0, 1 and 2's exact errors), calculate
        cv_mae = sum(fold_maes) / len(fold_maes) — the cross-validated error, averaged across every fold. Assert
        that round(cv_mae, 2) == 0.89.`,
      starter:`fold_maes = [1.1905, 0.7299, 0.7619]
# Calculate cv_mae below
`,
      tests:[{type:'assert', expr:'round(cv_mae, 2) == 0.89', label:'cv_mae is correctly calculated (0.89)'}]
    },
    {
      title:'Compare to a single train/test split',
      desc:`A normal 80/20 split on this same data only tests on hours = [8, 9] — just 2 students out of 9. Using
        cv_mae_students_tested = 9 (every student, across all 3 folds) and
        single_split_students_tested = 2, assert that cv_mae_students_tested > single_split_students_tested —
        cross-validation gets its more trustworthy estimate by testing on EVERY student, not just a lucky (or
        unlucky) held-back 20%.`,
      starter:`cv_mae_students_tested = 9
single_split_students_tested = 2
# Add your assert below
`,
      tests:[{type:'assert', expr:'cv_mae_students_tested > single_split_students_tested', label:'cv_mae_students_tested is correctly greater'}]
    },
    {
      title:'Taking it to the extreme: leave-one-out',
      desc:`If k equals the TOTAL number of students, fold_size = len(hours) // k works out to exactly 1 — every
        single student becomes their own test fold, one at a time. This is called "leave-one-out"
        cross-validation. Using hours = [1,2,3,4,5,6,7,8,9] and k = 9, calculate fold_size = len(hours) // k and
        n_folds = k. Assert that fold_size == 1 and n_folds == 9.`,
      starter:`hours = [1,2,3,4,5,6,7,8,9]
k = 9
# Calculate fold_size and n_folds below
`,
      tests:[
        {type:'assert', expr:'fold_size == 1', label:'fold_size is correctly calculated (1)'},
        {type:'assert', expr:'n_folds == 9', label:'n_folds is correctly calculated (9)'}
      ]
    }
  ],
  quiz:[
    {
      q:'What does k-fold cross-validation do differently from a single train/test split?',
      options:['It fits the model twice as fast','It tests on EVERY data point exactly once (each fold takes a turn as the test set), then averages the error across all folds','It only uses half the data','It removes the need for a test set entirely'],
      correct:1,
      explain:'Instead of holding back just one chunk, k-fold CV rotates which chunk is held back, so every point contributes to the final error estimate exactly once.'
    },
    {
      q:'In train_hours = hours[:test_start] + hours[test_end:], what does the + do?',
      options:['Adds the numbers in the two lists together','Concatenates (joins) the part before the test fold with the part after it, into one combined training list','Multiplies the lists','Deletes the test fold from hours'],
      correct:1,
      explain:'For lists, + joins them end-to-end — everything before the test fold followed by everything after it, which together is every OTHER fold.'
    },
    {
      q:'Why might a single 80/20 train/test split give a misleading error estimate?',
      options:['It never can','The held-back 20% might happen to be unusually easy or unusually hard to predict, just by chance — a single split only tells you about that one slice','80/20 splits are mathematically impossible','It always overestimates the error'],
      correct:1,
      explain:'Whichever students happen to land in the test slice determine the whole error estimate — if that slice is unusual, the single-split estimate can be misleading.'
    },
    {
      q:'If k equals the total number of students (leave-one-out cross-validation), how many students are in EACH test fold?',
      options:['Exactly 1','Half the dataset','It depends on k','Zero'],
      correct:0,
      explain:'With k folds and fold_size = len(data) // k, setting k to the total count makes fold_size exactly 1 — each student gets tested completely on their own.'
    }
  ],
  sandboxStarter3:`def predict(x, m, b):
    return m*x + b

hours = [1,2,3,4,5,6,7,8,9]
scores = [50,54,60,63,68,74,77,82,88]
k = 3
fold_size = len(hours) // k

fold_maes = []
for i in range(k):
    test_start = i*fold_size
    test_end = test_start + fold_size
    test_hours = hours[test_start:test_end]
    test_scores = scores[test_start:test_end]
    train_hours = hours[:test_start] + hours[test_end:]
    train_scores = scores[:test_start] + scores[test_end:]

    mean_x = sum(train_hours)/len(train_hours)
    mean_y = sum(train_scores)/len(train_scores)
    numerator = sum((train_hours[j]-mean_x)*(train_scores[j]-mean_y) for j in range(len(train_hours)))
    denominator = sum((train_hours[j]-mean_x)**2 for j in range(len(train_hours)))
    m = numerator/denominator
    b = mean_y - m*mean_x

    preds = [predict(x, m, b) for x in test_hours]
    fold_mae = sum(abs(test_scores[j]-preds[j]) for j in range(len(test_scores)))/len(test_scores)
    print("fold", i, "fold_mae:", round(fold_mae, 2))
    fold_maes.append(fold_mae)

cv_mae = sum(fold_maes) / len(fold_maes)
print("Cross-validated MAE:", round(cv_mae, 2))
`,
  stretchChallenge:{
    title:'Average a fresh set of fold errors',
    desc:`A different class of 8 students was cross-validated with k = 4, giving
      fold_maes = [0.46, 0.9561, 0.962, 0.9267]. Calculate cv_mae = sum(fold_maes) / len(fold_maes). Assert that
      round(cv_mae, 2) == 0.83.`,
    starter:`fold_maes = [0.46, 0.9561, 0.962, 0.9267]
# Calculate cv_mae below
`,
    tests:[
      {type:'assert', expr:'round(cv_mae, 2) == 0.83', label:'cv_mae is correctly calculated (0.83)'}
    ]
  }
},
{
  key:'week4', num:4, title:'Yes, No, or Maybe: Logistic Thinking by Hand',
  scenarioTag:'Real world: how CONFIDENT is the model, not just yes or no?',
  scenario:`Week 4's (Beginner) classifier gave a hard True/False answer — but a student just barely past the
    threshold feels very different from one way beyond it, even though both get classified "pass." This week
    introduces the <strong>sigmoid function</strong>, which turns any distance-from-threshold into a smooth
    probability between 0 and 1 — real confidence, not just a coin-flip yes/no.`,
  objectives:[
    'Write the sigmoid function: 1 / (1 + e^-z)',
    'Turn a raw value into a "distance from threshold" score, then into a probability',
    'Classify by checking whether the probability is at least 0.5',
    'Confirm probability-based classification exactly matches Week 4\'s threshold rule'
  ],
  conceptHtml:`
    <p>The <strong>sigmoid function</strong> squashes ANY real number into a value strictly between 0 and 1 —
    perfect for representing a probability:</p>
    <pre class="code-block">import math

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

print(sigmoid(0))    # 0.5 - exactly balanced
print(sigmoid(2))    # 0.8808 - fairly confident "yes"
print(sigmoid(-2))   # 0.1192 - fairly confident "no"</pre>
    <p>To use it for classifying, first turn a raw value into a "distance from threshold" score
    <code>z = k*(x - threshold)</code>, where <code>k</code> controls how STEEP the transition is. Then
    <code>probability = sigmoid(z)</code>, and classify "yes" whenever <code>probability >= 0.5</code>:</p>
    <pre class="code-block">threshold = 5
k = 1
x = 7
z = k*(x - threshold)          # 2
probability = sigmoid(z)       # 0.8808
predicted_yes = probability >= 0.5   # True</pre>
    <h3>Let's break down why this connects to Week 4's threshold classifier</h3>
    <ul>
      <li><code>z = k*(x - threshold)</code> is exactly 0 when <code>x</code> equals the threshold — and
        <code>sigmoid(0) == 0.5</code> exactly, so a student AT the threshold gets a perfectly 50/50 probability.</li>
      <li>Sigmoid is always increasing: bigger <code>z</code> always gives a bigger probability. So
        <code>probability >= 0.5</code> happens EXACTLY when <code>z >= 0</code>, which happens EXACTLY when
        <code>x >= threshold</code> (for a positive <code>k</code>) — the SAME yes/no answer as Week 4's plain
        <code>x >= threshold</code> rule, just with a confidence number attached.</li>
      <li><code>k</code> (steepness) doesn't change WHICH side of the threshold wins, only HOW confident the
        probability gets for a given distance — a bigger <code>k</code> pushes probabilities further toward 0 or
        1 for the same <code>x - threshold</code> gap.</li>
    </ul>`,
  sandboxStarter:`import math

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

print("sigmoid(0):", sigmoid(0))
print("sigmoid(2):", round(sigmoid(2), 4))
print("sigmoid(-2):", round(sigmoid(-2), 4))
`,
  sandboxStarter2:`import math

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
threshold = 5
k = 1

zs = [k*(h-threshold) for h in hours]
probs = [sigmoid(z) for z in zs]
for i in range(len(hours)):
    print(hours[i], "-> probability:", round(probs[i], 4))
`,
  exercises:[
    {
      title:'Write the sigmoid function',
      desc:`Write sigmoid(z) returning 1 / (1 + math.exp(-z)) (import math). Assert that round(sigmoid(0), 4) ==
        0.5 and round(sigmoid(2), 4) == 0.8808.`,
      starter:`import math

def sigmoid(z):
    # TODO: return 1 / (1 + math.exp(-z))
    pass
`,
      tests:[
        {type:'assert', expr:'round(sigmoid(0), 4) == 0.5', label:'sigmoid(0) is correctly calculated (0.5)'},
        {type:'assert', expr:'round(sigmoid(2), 4) == 0.8808', label:'sigmoid(2) is correctly calculated (0.8808)'}
      ]
    },
    {
      title:'Turn hours into a score',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10], threshold = 5, and k = 1, build
        zs = [k*(h-threshold) for h in hours]. Assert that zs == [-4,-3,-2,-1,0,1,2,3,4,5].`,
      starter:`hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
threshold = 5
k = 1
# Build zs below
`,
      tests:[{type:'assert', expr:'zs == [-4,-3,-2,-1,0,1,2,3,4,5]', label:'zs is correctly calculated'}]
    },
    {
      title:'Convert scores to probabilities',
      desc:`Using zs = [-4,-3,-2,-1,0,1,2,3,4,5], build probs = [sigmoid(z) for z in zs]. Assert that
        [round(p, 4) for p in probs] == [0.018, 0.0474, 0.1192, 0.2689, 0.5, 0.7311, 0.8808, 0.9526, 0.982,
        0.9933].`,
      starter:`import math

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

zs = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
# Build probs below
`,
      tests:[{type:'assert', expr:'[round(p, 4) for p in probs] == [0.018, 0.0474, 0.1192, 0.2689, 0.5, 0.7311, 0.8808, 0.9526, 0.982, 0.9933]', label:'probs is correctly calculated'}]
    },
    {
      title:'Classify by probability',
      desc:`Using probs = [0.018, 0.0474, 0.1192, 0.2689, 0.5, 0.7311, 0.8808, 0.9526, 0.982, 0.9933], build
        classified = [p >= 0.5 for p in probs]. Assert that
        classified == [False, False, False, False, True, True, True, True, True, True].`,
      starter:`probs = [0.018, 0.0474, 0.1192, 0.2689, 0.5, 0.7311, 0.8808, 0.9526, 0.982, 0.9933]
# Build classified below
`,
      tests:[{type:'assert', expr:'classified == [False, False, False, False, True, True, True, True, True, True]', label:'classified is correctly calculated'}]
    },
    {
      title:'Confirm it matches the threshold classifier',
      desc:`Using classified = [False, False, False, False, True, True, True, True, True, True] and
        hours = [1,2,3,4,5,6,7,8,9,10] with threshold = 5, build direct = [h >= threshold for h in hours] (Week
        4, Beginner's plain threshold rule). Assert that classified == direct — the sigmoid-probability
        classifier agrees EXACTLY with the plain threshold rule.`,
      starter:`classified = [False, False, False, False, True, True, True, True, True, True]
hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
threshold = 5
# Build direct below
`,
      tests:[{type:'assert', expr:'classified == direct', label:'classified correctly matches direct'}]
    },
    {
      title:'See what steepness (k) changes',
      desc:`Using threshold = 5 and x = 6 (1 unit past the threshold either way), calculate
        prob_gentle = sigmoid(0.5*(x-threshold)) and prob_steep = sigmoid(2*(x-threshold)). Assert that
        round(prob_gentle, 4) == 0.6225 and round(prob_steep, 4) == 0.8808 and prob_steep > prob_gentle — a
        bigger k makes the model MORE confident for the exact same distance from the threshold.`,
      starter:`import math

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

threshold = 5
x = 6
# Calculate prob_gentle and prob_steep below
`,
      tests:[
        {type:'assert', expr:'round(prob_gentle, 4) == 0.6225', label:'prob_gentle is correctly calculated (0.6225)'},
        {type:'assert', expr:'round(prob_steep, 4) == 0.8808', label:'prob_steep is correctly calculated (0.8808)'},
        {type:'assert', expr:'prob_steep > prob_gentle', label:'prob_steep is correctly greater than prob_gentle'}
      ]
    }
  ],
  quiz:[
    {
      q:'What kind of value does sigmoid(z) = 1 / (1 + e^-z) always produce?',
      options:['A value strictly between 0 and 1, usable as a probability','A value between -1 and 1','A whole number','A value that can be negative'],
      correct:0,
      explain:'No matter how large or small z is, sigmoid squashes it into the open interval (0, 1) — never quite reaching 0 or 1.'
    },
    {
      q:'What is sigmoid(0) exactly, and why does that matter for classification?',
      options:['1.0 — it always predicts yes','0.5 — right at the threshold, the model is exactly 50/50, maximally uncertain','0.0 — it always predicts no','It is undefined at 0'],
      correct:1,
      explain:'z = 0 happens exactly when x equals the threshold, and sigmoid(0) = 0.5 — the model has no lean either way at that exact point.'
    },
    {
      q:'Why does probability >= 0.5 classification give the EXACT same answer as Beginner Week 4\'s x >= threshold rule?',
      options:['It is a coincidence','Sigmoid is always increasing, so probability >= 0.5 happens exactly when z >= 0, which happens exactly when x >= threshold','It only works for some values of x','sigmoid() ignores the threshold entirely'],
      correct:1,
      explain:'Since z = k*(x-threshold) crosses 0 exactly at x = threshold, and sigmoid crosses 0.5 exactly at z = 0, the two classifiers are guaranteed to agree.'
    },
    {
      q:'What does increasing the steepness k do to the predicted probability, for the SAME distance from the threshold?',
      options:['Nothing changes','Pushes the probability further toward 0 or 1 — the model becomes more confident for the same gap','Always pushes probability toward exactly 0.5','Flips which side of the threshold is predicted'],
      correct:1,
      explain:'A bigger k multiplies the same (x - threshold) gap into a bigger z, and sigmoid maps a bigger |z| to a probability closer to the extremes.'
    }
  ],
  sandboxStarter3:`import math

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
threshold = 5

for k in [0.5, 1, 2]:
    zs = [k*(h-threshold) for h in hours]
    probs = [round(sigmoid(z), 2) for z in zs]
    print("k =", k, "->", probs)
`,
  stretchChallenge:{
    title:'Classify by attendance instead',
    desc:`Using attendance = [40, 55, 70, 85], threshold = 65, and k = 0.2, build
      zs = [k*(a-threshold) for a in attendance], then probs = [sigmoid(z) for z in zs], then
      classified = [p >= 0.5 for p in probs]. Assert that
      classified == [False, False, True, True].`,
    starter:`import math

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

attendance = [40, 55, 70, 85]
threshold = 65
k = 0.2
# Build zs, probs and classified below
`,
    tests:[
      {type:'assert', expr:'classified == [False, False, True, True]', label:'classified is correctly calculated'}
    ]
  }
},
{
  key:'week5', num:5, title:'Splitting the Data: Decision Tree Logic by Hand',
  scenarioTag:'Real world: which cutoff actually separates pass from fail BEST?',
  scenario:`Beginner Week 4 picked threshold = 5 somewhat by trial and error, then just measured its accuracy. A
    <strong>decision tree</strong> does this SYSTEMATICALLY: try several candidate split points, predict the
    MAJORITY label on each side of the split, count how many students that split gets wrong, and pick whichever
    split has the FEWEST errors. That systematic search is exactly what you'll do by hand this week.`,
  objectives:[
    'Split a dataset into "left" (below a candidate split) and "right" (at or above it) groups',
    'Find the majority label within a group',
    'Count how many predictions a given split gets wrong',
    'Try several candidate splits and pick the one with the fewest errors'
  ],
  conceptHtml:`
    <p>For ONE candidate split value, a decision tree predicts the MAJORITY label for everyone on each side:</p>
    <pre class="code-block">def majority(labels):
    return labels.count(True) >= labels.count(False)

hours = [1,2,3,4,5,6,7,8,9,10]
passed = [False, False, False, False, True, True, False, True, True, True]
split = 5

left_idx = [i for i in range(len(hours)) if hours[i] < split]
right_idx = [i for i in range(len(hours)) if hours[i] >= split]
left_maj = majority([passed[i] for i in left_idx])
right_maj = majority([passed[i] for i in right_idx])</pre>
    <p>Then count how many students that split gets WRONG, by comparing the predicted label (left_maj or
    right_maj, depending which side each student falls on) to their real label:</p>
    <pre class="code-block">preds = [left_maj if hours[i] < split else right_maj for i in range(len(hours))]
errors = sum(1 for i in range(len(hours)) if preds[i] != passed[i])
print(errors)   # 1 — only ONE student is misclassified by this split</pre>
    <h3>Let's break down why trying MULTIPLE splits matters</h3>
    <ul>
      <li><code>left_idx</code>/<code>right_idx</code> — the same list-comprehension filtering pattern used
        throughout this project, just filtering on "which side of the split" instead of a fixed condition.</li>
      <li><code>majority(labels)</code> is the SAME idea as Beginner Week 4's threshold classifier — predict
        whichever label wins by count — just computed separately for each side of the split.</li>
      <li>A decision tree doesn't just try ONE split — it tries several CANDIDATES (e.g. 3, 4, 5, 6, 7), counts
        errors for each, and picks whichever candidate has the FEWEST errors as "the best split."</li>
    </ul>`,
  sandboxStarter:`def majority(labels):
    return labels.count(True) >= labels.count(False)

print(majority([True, True, False]))
print(majority([False, False, True]))
`,
  sandboxStarter2:`def majority(labels):
    return labels.count(True) >= labels.count(False)

hours = [1,2,3,4,5,6,7,8,9,10]
passed = [False, False, False, False, True, True, False, True, True, True]
split = 5

left_idx = [i for i in range(len(hours)) if hours[i] < split]
right_idx = [i for i in range(len(hours)) if hours[i] >= split]
left_maj = majority([passed[i] for i in left_idx])
right_maj = majority([passed[i] for i in right_idx])

preds = [left_maj if hours[i] < split else right_maj for i in range(len(hours))]
errors = sum(1 for i in range(len(hours)) if preds[i] != passed[i])
print("split", split, "-> errors:", errors)
`,
  exercises:[
    {
      title:'Find the majority label',
      desc:`Write majority(labels) returning labels.count(True) >= labels.count(False). Assert that
        majority([True, True, False]) == True and majority([False, False, True]) == False.`,
      starter:`def majority(labels):
    # TODO: return labels.count(True) >= labels.count(False)
    pass
`,
      tests:[
        {type:'assert', expr:'majority([True, True, False]) == True', label:'majority([True, True, False]) correctly equals True'},
        {type:'assert', expr:'majority([False, False, True]) == False', label:'majority([False, False, True]) correctly equals False'}
      ]
    },
    {
      title:'Split into left and right groups',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10] and split = 5, build left_idx (indices where hours[i] < split)
        and right_idx (indices where hours[i] >= split). Assert that left_idx == [0,1,2,3] and
        right_idx == [4,5,6,7,8,9].`,
      starter:`hours = [1,2,3,4,5,6,7,8,9,10]
split = 5
# Build left_idx and right_idx below
`,
      tests:[
        {type:'assert', expr:'left_idx == [0,1,2,3]', label:'left_idx is correctly calculated'},
        {type:'assert', expr:'right_idx == [4,5,6,7,8,9]', label:'right_idx is correctly calculated'}
      ]
    },
    {
      title:'Find each side\'s majority label',
      desc:`Using passed = [False, False, False, False, True, True, False, True, True, True], left_idx =
        [0,1,2,3], and right_idx = [4,5,6,7,8,9], build left_labels, right_labels, then left_maj = majority(
        left_labels) and right_maj = majority(right_labels). Assert that left_maj == False and
        right_maj == True.`,
      starter:`def majority(labels):
    return labels.count(True) >= labels.count(False)

passed = [False, False, False, False, True, True, False, True, True, True]
left_idx = [0,1,2,3]
right_idx = [4,5,6,7,8,9]
# Build left_labels, right_labels, left_maj and right_maj below
`,
      tests:[
        {type:'assert', expr:'left_maj == False', label:'left_maj correctly equals False'},
        {type:'assert', expr:'right_maj == True', label:'right_maj correctly equals True'}
      ]
    },
    {
      title:'Count the errors for split = 5',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10], passed = [False, False, False, False, True, True, False, True,
        True, True], split = 5, left_maj = False, and right_maj = True, build preds = [left_maj if hours[i] <
        split else right_maj for i in range(len(hours))], then errors: how many preds don't match passed. Assert
        that errors == 1.`,
      starter:`hours = [1,2,3,4,5,6,7,8,9,10]
passed = [False, False, False, False, True, True, False, True, True, True]
split = 5
left_maj = False
right_maj = True
# Build preds, then errors, below
`,
      tests:[{type:'assert', expr:'errors == 1', label:'errors correctly equals 1'}]
    },
    {
      title:'Try a worse split',
      desc:`Using hours and passed from before, but split = 3 this time (both left_maj and right_maj come out
        False and True respectively, same as split=5), rebuild left_idx/right_idx, left_maj/right_maj, preds and
        errors for split = 3. Assert that errors == 3 — noticeably worse than split=5's error of 1.`,
      starter:`def majority(labels):
    return labels.count(True) >= labels.count(False)

hours = [1,2,3,4,5,6,7,8,9,10]
passed = [False, False, False, False, True, True, False, True, True, True]
split = 3
# Build left_idx, right_idx, left_maj, right_maj, preds and errors below
`,
      tests:[{type:'assert', expr:'errors == 3', label:'errors correctly equals 3'}]
    },
    {
      title:'Search all candidate splits for the best one',
      desc:`Using errors_for_split(s) (provided below — do not modify it) and
        candidates = [3, 4, 5, 6, 7, 8], build errors_by_split = {s: errors_for_split(s) for s in candidates},
        then best_split = min(errors_by_split, key=errors_by_split.get). Assert that
        errors_by_split[5] == 1 and best_split == 5 — the systematic search lands on the SAME split Beginner
        Week 4 found by trial and error.`,
      starter:`def majority(labels):
    return labels.count(True) >= labels.count(False)

hours = [1,2,3,4,5,6,7,8,9,10]
passed = [False, False, False, False, True, True, False, True, True, True]

def errors_for_split(s):
    left_idx = [i for i in range(len(hours)) if hours[i] < s]
    right_idx = [i for i in range(len(hours)) if hours[i] >= s]
    left_maj = majority([passed[i] for i in left_idx])
    right_maj = majority([passed[i] for i in right_idx])
    preds = [left_maj if hours[i] < s else right_maj for i in range(len(hours))]
    return sum(1 for i in range(len(hours)) if preds[i] != passed[i])

candidates = [3, 4, 5, 6, 7, 8]
# Build errors_by_split, then best_split, below
`,
      tests:[
        {type:'assert', expr:'errors_by_split[5] == 1', label:'errors_by_split[5] correctly equals 1'},
        {type:'assert', expr:'best_split == 5', label:'best_split correctly equals 5'}
      ]
    }
  ],
  quiz:[
    {
      q:'What is a decision tree doing when it searches for the "best split" on one feature?',
      options:['Randomly guessing a cutoff','Trying several candidate threshold values, and picking whichever one produces the fewest misclassifications','Averaging every value in the feature','Sorting the data alphabetically'],
      correct:1,
      explain:'The tree systematically compares candidate splits by counting errors, and keeps the one that separates the classes best.'
    },
    {
      q:'When predicting a label for everyone in a group (left or right of a split), why use the MAJORITY label?',
      options:['It is always 100% correct','The majority label is the one choice that gets the FEWEST students in that group wrong','Majority label is chosen at random','It ignores the labels entirely'],
      correct:1,
      explain:'Predicting the majority label minimizes mistakes within that specific group — any other choice would get more of that group wrong.'
    },
    {
      q:'Why did split = 5 win over split = 3 in this week\'s exercises?',
      options:['It was chosen arbitrarily','It produced fewer total misclassifications (1) than split = 3 did (3)','split = 5 is always the correct answer for any dataset','Because 5 is the middle of the range'],
      correct:1,
      explain:'The "best" split is whichever candidate minimizes errors on THIS specific dataset — here, that happened to be 5.'
    },
    {
      q:'How does this week\'s systematic split search connect to Beginner Week 4\'s threshold classifier?',
      options:['They are unrelated ideas','It is the exact same "predict by cutoff" idea — this week just tries several candidates and picks the best one systematically, instead of picking one threshold by trial and error','Decision trees never use thresholds','Week 4\'s classifier ignores accuracy'],
      correct:1,
      explain:'Both use a cutoff on one feature to predict a category — the decision tree approach just formalizes HOW that cutoff gets chosen.'
    }
  ],
  sandboxStarter3:`def majority(labels):
    return labels.count(True) >= labels.count(False)

hours = [1,2,3,4,5,6,7,8,9,10]
passed = [False, False, False, False, True, True, False, True, True, True]

def errors_for_split(s):
    left_idx = [i for i in range(len(hours)) if hours[i] < s]
    right_idx = [i for i in range(len(hours)) if hours[i] >= s]
    left_maj = majority([passed[i] for i in left_idx])
    right_maj = majority([passed[i] for i in right_idx])
    preds = [left_maj if hours[i] < s else right_maj for i in range(len(hours))]
    return sum(1 for i in range(len(hours)) if preds[i] != passed[i])

for s in [3, 4, 5, 6, 7, 8]:
    print("split", s, "-> errors:", errors_for_split(s))
`,
  stretchChallenge:{
    title:'Find the best split for a new class',
    desc:`Using attendance = [10, 20, 30, 40, 50, 60, 70, 80], passed = [False, False, False, True, False, True,
      True, True], and errors_for_split(s) adapted for this data (provided below), find the best split among
      candidates = [25, 35, 45, 55]. Assert that best_split == 35.`,
    starter:`def majority(labels):
    return labels.count(True) >= labels.count(False)

attendance = [10, 20, 30, 40, 50, 60, 70, 80]
passed = [False, False, False, True, False, True, True, True]

def errors_for_split(s):
    left_idx = [i for i in range(len(attendance)) if attendance[i] < s]
    right_idx = [i for i in range(len(attendance)) if attendance[i] >= s]
    left_maj = majority([passed[i] for i in left_idx])
    right_maj = majority([passed[i] for i in right_idx])
    preds = [left_maj if attendance[i] < s else right_maj for i in range(len(attendance))]
    return sum(1 for i in range(len(attendance)) if preds[i] != passed[i])

candidates = [25, 35, 45, 55]
# Build errors_by_split, then best_split, below
`,
    tests:[
      {type:'assert', expr:'best_split == 35', label:'best_split is correctly calculated (35)'}
    ]
  }
},
{
  key:'week6', num:6, title:'Wisdom of the Crowd: Voting by Hand',
  scenarioTag:'Real world: three imperfect classifiers can combine into a perfect one',
  scenario:`Three simple classifiers — voter_a, voter_b and voter_c — each get exactly ONE student wrong, but a
    DIFFERENT student each. On their own, none of them is perfect. But combine their predictions with a
    <strong>majority vote</strong>, and for every single student at least 2 of the 3 voters are still correct — so
    the combined vote matches the true answer every time.`,
  objectives:[
    'Count how many votes are True vs False for a group of predictions',
    'Combine multiple classifiers\' predictions into one via majority vote',
    'Measure each individual voter\'s accuracy AND the combined vote\'s accuracy',
    'See how combining models can outperform every single one of them'
  ],
  conceptHtml:`
    <p><strong>Majority voting</strong> combines several classifiers' predictions for the SAME student into one
    final answer — whichever label the majority of them picked:</p>
    <pre class="code-block">votes = [True, True, False]   # 3 voters' predictions for one student
true_votes = votes.count(True)
false_votes = votes.count(False)
combined = true_votes > false_votes
print(combined)   # True - 2 out of 3 voters said True</pre>
    <p>Doing this for every student, one at a time, combines three separate prediction lists into ONE combined
    prediction list:</p>
    <pre class="code-block">voter_a = [False, False, True,  False, True, True, False, True, True, True]
voter_b = [False, False, False, False, True, False, False, True, True, True]
voter_c = [False, False, False, False, True, True, False, True, False, True]

combined = []
for i in range(len(voter_a)):
    votes = [voter_a[i], voter_b[i], voter_c[i]]
    combined.append(votes.count(True) > votes.count(False))</pre>
    <h3>Let's break down why the combined vote can beat every individual voter</h3>
    <ul>
      <li>Each voter above is wrong about exactly ONE student — but a DIFFERENT one each (voter_a is wrong at
        index 2, voter_b at index 5, voter_c at index 8).</li>
      <li>For ANY given student, at most ONE of the three voters is wrong about them — so the other TWO still
        agree on the correct answer, and majority vote picks up on that.</li>
      <li>This only works because the voters' MISTAKES don't overlap. If two voters were wrong about the SAME
        student, the vote would repeat their mistake instead of fixing it.</li>
    </ul>`,
  sandboxStarter:`votes = [True, True, False]
true_votes = votes.count(True)
false_votes = votes.count(False)
combined = true_votes > false_votes
print("true_votes:", true_votes, "false_votes:", false_votes, "-> combined:", combined)
`,
  sandboxStarter2:`voter_a = [False, False, True,  False, True, True, False, True, True, True]
voter_b = [False, False, False, False, True, False, False, True, True, True]
voter_c = [False, False, False, False, True, True, False, True, False, True]

combined = []
for i in range(len(voter_a)):
    votes = [voter_a[i], voter_b[i], voter_c[i]]
    combined.append(votes.count(True) > votes.count(False))
print(combined)
`,
  exercises:[
    {
      title:'Count the votes for one student',
      desc:`Using votes = [True, True, False], count true_votes and false_votes with .count(), then
        combined = true_votes > false_votes. Assert that combined == True. Then, using
        votes2 = [False, False, True], build combined2 the same way. Assert that combined2 == False.`,
      starter:`votes = [True, True, False]
# Build true_votes, false_votes and combined below
votes2 = [False, False, True]
# Build combined2 below
`,
      tests:[
        {type:'assert', expr:'combined == True', label:'combined correctly equals True'},
        {type:'assert', expr:'combined2 == False', label:'combined2 correctly equals False'}
      ]
    },
    {
      title:'Combine 3 voters for one student',
      desc:`Using voter_a = [False, False, True, False, True, True, False, True, True, True],
        voter_b = [False, False, False, False, True, False, False, True, True, True], and
        voter_c = [False, False, False, False, True, True, False, True, False, True], build
        votes_2 = [voter_a[2], voter_b[2], voter_c[2]] (student index 2, where voter_a alone is wrong), then
        combined_2 = votes_2.count(True) > votes_2.count(False). Assert that votes_2 == [True, False, False] and
        combined_2 == False — the majority (2 of 3) correctly overrides voter_a's mistake.`,
      starter:`voter_a = [False, False, True, False, True, True, False, True, True, True]
voter_b = [False, False, False, False, True, False, False, True, True, True]
voter_c = [False, False, False, False, True, True, False, True, False, True]
# Build votes_2 and combined_2 below
`,
      tests:[
        {type:'assert', expr:'votes_2 == [True, False, False]', label:'votes_2 is correctly calculated'},
        {type:'assert', expr:'combined_2 == False', label:'combined_2 correctly equals False'}
      ]
    },
    {
      title:'Combine for the whole class',
      desc:`Using voter_a, voter_b and voter_c from before, build combined: a list where each entry is the
        majority vote (votes.count(True) > votes.count(False)) of the three voters at that same index. Assert
        that combined == [False, False, False, False, True, True, False, True, True, True].`,
      starter:`voter_a = [False, False, True, False, True, True, False, True, True, True]
voter_b = [False, False, False, False, True, False, False, True, True, True]
voter_c = [False, False, False, False, True, True, False, True, False, True]
# Build combined below
`,
      tests:[{type:'assert', expr:'combined == [False, False, False, False, True, True, False, True, True, True]', label:'combined is correctly calculated'}]
    },
    {
      title:'Measure each voter\'s own accuracy',
      desc:`Using voter_a = [False, False, True, False, True, True, False, True, True, True] and
        actual = [False, False, False, False, True, True, False, True, True, True], calculate acc_a: how many of
        voter_a's predictions match actual, divided by the total. Assert that acc_a == 0.9.`,
      starter:`voter_a = [False, False, True, False, True, True, False, True, True, True]
actual = [False, False, False, False, True, True, False, True, True, True]
# Calculate acc_a below
`,
      tests:[{type:'assert', expr:'acc_a == 0.9', label:'acc_a correctly equals 0.9'}]
    },
    {
      title:'Measure the combined vote\'s accuracy',
      desc:`Using combined = [False, False, False, False, True, True, False, True, True, True] and
        actual = [False, False, False, False, True, True, False, True, True, True], calculate acc_combined, then
        combined_better = acc_combined > 0.9 (acc_a from the previous exercise). Assert that acc_combined == 1.0
        and combined_better == True.`,
      starter:`combined = [False, False, False, False, True, True, False, True, True, True]
actual = [False, False, False, False, True, True, False, True, True, True]
# Calculate acc_combined and combined_better below
`,
      tests:[
        {type:'assert', expr:'acc_combined == 1.0', label:'acc_combined correctly equals 1.0'},
        {type:'assert', expr:'combined_better == True', label:'combined_better correctly equals True'}
      ]
    },
    {
      title:'Confirm every voter alone is imperfect',
      desc:`Using acc_a = 0.9, acc_b = 0.9, acc_c = 0.9 (each voter's own accuracy) and
        acc_combined = 1.0, assert that acc_a < 1.0 and acc_b < 1.0 and acc_c < 1.0 and acc_combined == 1.0 — no
        single voter reached perfect accuracy, but the combined crowd did.`,
      starter:`acc_a = 0.9
acc_b = 0.9
acc_c = 0.9
acc_combined = 1.0
# Add your assert below
`,
      tests:[{type:'assert', expr:'acc_a < 1.0 and acc_b < 1.0 and acc_c < 1.0 and acc_combined == 1.0', label:'Every voter is correctly confirmed imperfect while the combined vote is not'}]
    }
  ],
  quiz:[
    {
      q:'What does "majority vote" mean when combining several classifiers\' predictions?',
      options:['Always trust the first classifier','Take whichever label the MAJORITY of the individual classifiers predicted for that student','Average the classifiers\' accuracy scores','Pick a classifier at random each time'],
      correct:1,
      explain:'Majority voting looks at what each voter predicted for the SAME student and goes with whichever answer most of them agree on.'
    },
    {
      q:'Why can majority vote fix ONE classifier\'s mistake about a specific student?',
      options:['It cannot — mistakes always carry through','As long as fewer than half of the voters are wrong about that student, the other voters still outnumber the mistake and the correct answer wins','Voting always guarantees 100% accuracy','Only the newest classifier\'s vote counts'],
      correct:1,
      explain:'A single wrong voter is outvoted by the other, correct voters — the mistake gets outnumbered rather than passed through.'
    },
    {
      q:'In this week\'s data, why does the combined vote reach 100% accuracy when NO individual voter does?',
      options:['It is a coincidence with no explanation','Each voter\'s single mistake happens to be about a DIFFERENT student, so for every student at least 2 of the 3 voters are correct','The combined vote always beats every individual voter, for any data','acc_combined was calculated incorrectly'],
      correct:1,
      explain:'Because the three voters\' mistakes don\'t overlap, every student has at least 2 correct voters backing them — enough to always win the majority.'
    },
    {
      q:'When would majority voting NOT help fix a mistake?',
      options:['It always helps, no matter what','If most of the voters make the SAME mistake about the same student, the vote will repeat that mistake instead of fixing it','When there are exactly 3 voters','When accuracy is already 100%'],
      correct:1,
      explain:'Voting only helps when mistakes are spread out across different voters — if the majority of voters share the same blind spot, the vote inherits it.'
    }
  ],
  sandboxStarter3:`voter_a = [False, False, True,  False, True, True, False, True, True, True]
voter_b = [False, False, False, False, True, False, False, True, True, True]
voter_c = [False, False, False, False, True, True, False, True, False, True]
actual  = [False, False, False, False, True, True, False, True, True, True]

combined = []
for i in range(len(voter_a)):
    votes = [voter_a[i], voter_b[i], voter_c[i]]
    combined.append(votes.count(True) > votes.count(False))

for name, preds in [("voter_a", voter_a), ("voter_b", voter_b), ("voter_c", voter_c), ("combined", combined)]:
    acc = sum(1 for i in range(len(actual)) if preds[i] == actual[i]) / len(actual)
    print(name, "accuracy:", acc)
`,
  stretchChallenge:{
    title:'Combine a fresh trio of voters',
    desc:`Using va = [False, True, False, False, True], vb = [True, True, False, True, True], and
      vc = [True, True, False, False, False] (each wrong about exactly one DIFFERENT student, compared to
      actual = [True, True, False, False, True]), build combined: the majority vote at each index. Assert that
      combined == actual.`,
    starter:`va = [False, True, False, False, True]
vb = [True, True, False, True, True]
vc = [True, True, False, False, False]
actual = [True, True, False, False, True]
# Build combined below
`,
    tests:[
      {type:'assert', expr:'combined == actual', label:'combined correctly matches actual'}
    ]
  }
},
{
  key:'week7', num:7, title:'How Sure Are We? Precision vs Recall Trade-offs',
  scenarioTag:'Real world: sweeping across thresholds to find the best precision/recall balance',
  scenario:`Beginner Week 6 compared precision and recall at just TWO thresholds (5 and 7). This week sweeps
    across FIVE candidate thresholds, calculates precision, recall AND the F1 score (which balances both) for
    each one, and finds which threshold gives the best overall BALANCE — not just the highest accuracy.`,
  objectives:[
    'Calculate precision and recall for several different thresholds',
    'Calculate the F1 score, which balances precision and recall into one number',
    'Sweep across multiple thresholds and compare their F1 scores',
    'Find the threshold that gives the best precision/recall balance'
  ],
  conceptHtml:`
    <p>Beginner Week 6 introduced the <strong>F1 score</strong> as a stretch challenge:
    <code>F1 = 2 * precision * recall / (precision + recall)</code> — a single number that's high only when
    BOTH precision and recall are reasonably high. This week uses it to compare several thresholds at once:</p>
    <pre class="code-block">def stats(threshold):
    preds = [classify(h, threshold) for h in hours]
    TP = sum(1 for i in range(len(hours)) if preds[i] and passed[i])
    FP = sum(1 for i in range(len(hours)) if preds[i] and not passed[i])
    FN = sum(1 for i in range(len(hours)) if not preds[i] and passed[i])
    precision = TP / (TP + FP)
    recall = TP / (TP + FN)
    f1 = 2 * precision * recall / (precision + recall)
    return f1

for t in [3, 4, 5, 6, 7]:
    print(t, round(stats(t), 4))</pre>
    <h3>Let's break down the sweep, and what it reveals</h3>
    <ul>
      <li>As the threshold gets STRICTER (bigger), the classifier predicts "yes" less often — this tends to raise
        precision (fewer wrong "yes" calls) while lowering recall (more missed real "yes" cases).</li>
      <li>F1 rises as long as precision improves faster than recall drops, then FALLS once the threshold gets so
        strict that real "yes" cases start being missed — so the F1 sweep has a peak, not a straight line.</li>
      <li>Collecting every threshold's F1 into one <code>{threshold: f1}</code> dict makes finding the BEST one
        a simple <code>max(..., key=...)</code> lookup — the exact same pattern used for finding the best split
        in Week 5 and the winning model in earlier tracks.</li>
    </ul>`,
  sandboxStarter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
threshold = 3

predictions = [classify(h, threshold) for h in hours]
TP = sum(1 for i in range(len(hours)) if predictions[i] and passed[i])
FP = sum(1 for i in range(len(hours)) if predictions[i] and not passed[i])
FN = sum(1 for i in range(len(hours)) if not predictions[i] and passed[i])
precision = TP / (TP + FP)
recall = TP / (TP + FN)
print("threshold", threshold, "-> precision", round(precision, 4), "recall", round(recall, 4))
`,
  sandboxStarter2:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]

def stats(threshold):
    preds = [classify(h, threshold) for h in hours]
    TP = sum(1 for i in range(len(hours)) if preds[i] and passed[i])
    FP = sum(1 for i in range(len(hours)) if preds[i] and not passed[i])
    FN = sum(1 for i in range(len(hours)) if not preds[i] and passed[i])
    precision = TP / (TP + FP)
    recall = TP / (TP + FN)
    f1 = 2 * precision * recall / (precision + recall)
    return round(f1, 4)

for t in [3, 4, 5, 6, 7]:
    print("threshold", t, "-> f1", stats(t))
`,
  exercises:[
    {
      title:'Compute precision/recall for threshold = 3',
      desc:`Using classify(x, threshold) from Beginner Week 4, hours = [1,2,3,4,5,6,7,8,9,10],
        passed = [False, False, False, False, True, True, False, True, True, True], and threshold = 3, build
        predictions, then calculate precision and recall. Assert that precision == 0.625 and recall == 1.0.`,
      starter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
threshold = 3
# Build predictions, then calculate precision and recall, below
`,
      tests:[
        {type:'assert', expr:'precision == 0.625', label:'precision correctly equals 0.625'},
        {type:'assert', expr:'recall == 1.0', label:'recall correctly equals 1.0'}
      ]
    },
    {
      title:'Compute precision/recall for threshold = 6',
      desc:`Using the same setup but threshold = 6, build predictions, then calculate precision and recall.
        Assert that precision == 0.8 and recall == 0.8 — at THIS threshold, they happen to be exactly equal.`,
      starter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
threshold = 6
# Build predictions, then calculate precision and recall, below
`,
      tests:[
        {type:'assert', expr:'precision == 0.8', label:'precision correctly equals 0.8'},
        {type:'assert', expr:'recall == 0.8', label:'recall correctly equals 0.8'}
      ]
    },
    {
      title:'Calculate F1 at threshold = 6',
      desc:`Using precision = 0.8 and recall = 0.8, calculate
        f1 = 2 * precision * recall / (precision + recall). Assert that round(f1, 4) == 0.8 — when precision and
        recall are EQUAL, F1 equals them too.`,
      starter:`precision = 0.8
recall = 0.8
# Calculate f1 below
`,
      tests:[{type:'assert', expr:'round(f1, 4) == 0.8', label:'f1 correctly rounds to 0.8'}]
    },
    {
      title:'Sweep across all 5 thresholds',
      desc:`Using stats(threshold) (provided below — do not modify it) and
        candidates = [3, 4, 5, 6, 7], build f1_by_threshold = {t: stats(t) for t in candidates}. Assert that
        f1_by_threshold[5] == 0.9091.`,
      starter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]

def stats(threshold):
    preds = [classify(h, threshold) for h in hours]
    TP = sum(1 for i in range(len(hours)) if preds[i] and passed[i])
    FP = sum(1 for i in range(len(hours)) if preds[i] and not passed[i])
    FN = sum(1 for i in range(len(hours)) if not preds[i] and passed[i])
    precision = TP / (TP + FP)
    recall = TP / (TP + FN)
    return round(2 * precision * recall / (precision + recall), 4)

candidates = [3, 4, 5, 6, 7]
# Build f1_by_threshold below
`,
      tests:[{type:'assert', expr:'f1_by_threshold[5] == 0.9091', label:'f1_by_threshold[5] is correctly calculated (0.9091)'}]
    },
    {
      title:'Find the threshold with the best F1',
      desc:`Using f1_by_threshold = {3: 0.7692, 4: 0.8333, 5: 0.9091, 6: 0.8, 7: 0.6667}, calculate
        best_threshold = max(f1_by_threshold, key=f1_by_threshold.get). Assert that best_threshold == 5 — the
        SAME threshold Week 5's decision tree search and Beginner Week 4's accuracy search both landed on.`,
      starter:`f1_by_threshold = {3: 0.7692, 4: 0.8333, 5: 0.9091, 6: 0.8, 7: 0.6667}
# Calculate best_threshold below
`,
      tests:[{type:'assert', expr:'best_threshold == 5', label:'best_threshold is correctly calculated (5)'}]
    },
    {
      title:'Confirm the trade-off direction',
      desc:`Using recall_at_3 = 1.0, recall_at_7 = 0.6, precision_at_3 = 0.625, and precision_at_7 = 0.75, assert
        that recall_at_3 > recall_at_7 and precision_at_7 > precision_at_3 — moving from a LOOSE threshold (3) to
        a STRICT one (7) trades recall away in exchange for higher precision.`,
      starter:`recall_at_3 = 1.0
recall_at_7 = 0.6
precision_at_3 = 0.625
precision_at_7 = 0.75
# Add your assert below
`,
      tests:[{type:'assert', expr:'recall_at_3 > recall_at_7 and precision_at_7 > precision_at_3', label:'The trade-off direction is correctly confirmed'}]
    }
  ],
  quiz:[
    {
      q:'Why sweep across MULTIPLE thresholds instead of just comparing two, like Beginner Week 6 did?',
      options:['It makes no real difference','It reveals the FULL trade-off curve, so you can find the threshold that gives the best actual balance instead of guessing between two options','More thresholds always means better accuracy','Sweeping is required by Python'],
      correct:1,
      explain:'Comparing only two points can miss a better option in between — a full sweep shows the whole shape of the trade-off.'
    },
    {
      q:'What does it mean when precision and recall come out EQUAL at a threshold (like 0.8 and 0.8 at threshold=6)?',
      options:['It is always a mistake','At that specific point, the classifier is equally good at avoiding wrong "yes" calls and avoiding missed real "yes" cases — and F1 there equals both, since F1 is the balance of the two','Precision and recall are the same thing','It means accuracy is 100%'],
      correct:1,
      explain:'F1 is a balance between precision and recall — when the two inputs are already equal, the balanced result equals them too.'
    },
    {
      q:'Why does F1 in this week\'s sweep rise from threshold 3 to 5, then fall from 5 to 7?',
      options:['F1 always rises then falls, for any dataset','From 3 to 5, precision improves without losing recall (F1 rises); past 5, the threshold gets so strict real "yes" cases start being missed, recall drops, and F1 falls','F1 is random','F1 only depends on recall'],
      correct:1,
      explain:'The sweep has a peak because early on, stricter thresholds only remove wrong "yes" calls — but eventually they start removing correct ones too.'
    },
    {
      q:'What does the "best F1 threshold" actually represent?',
      options:['The threshold with the highest recall, ignoring precision','The threshold that gives the best overall BALANCE between precision and recall, rather than maximizing either one alone','The threshold with the most True Positives','The strictest threshold possible'],
      correct:1,
      explain:'F1 specifically rewards a good balance — maximizing it finds the threshold that doesn\'t sacrifice one metric too much for the other.'
    }
  ],
  sandboxStarter3:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]

def stats(threshold):
    preds = [classify(h, threshold) for h in hours]
    TP = sum(1 for i in range(len(hours)) if preds[i] and passed[i])
    FP = sum(1 for i in range(len(hours)) if preds[i] and not passed[i])
    FN = sum(1 for i in range(len(hours)) if not preds[i] and passed[i])
    precision = TP / (TP + FP)
    recall = TP / (TP + FN)
    return round(2 * precision * recall / (precision + recall), 4)

candidates = [3, 4, 5, 6, 7]
f1_by_threshold = {t: stats(t) for t in candidates}
best_threshold = max(f1_by_threshold, key=f1_by_threshold.get)
print("F1 by threshold:", f1_by_threshold)
print("Best threshold:", best_threshold)
`,
  stretchChallenge:{
    title:'Sweep a fresh class by attendance',
    desc:`Using attendance = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      passed = [False, False, False, True, False, True, True, False, True, True], and stats(threshold) adapted
      for this data (provided below), sweep candidates = [35, 45, 55, 65, 75] and find best_threshold. Assert
      that best_threshold == 35.`,
    starter:`def classify(x, threshold):
    return x >= threshold

attendance = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
passed = [False, False, False, True, False, True, True, False, True, True]

def stats(threshold):
    preds = [classify(a, threshold) for a in attendance]
    TP = sum(1 for i in range(len(attendance)) if preds[i] and passed[i])
    FP = sum(1 for i in range(len(attendance)) if preds[i] and not passed[i])
    FN = sum(1 for i in range(len(attendance)) if not preds[i] and passed[i])
    precision = TP / (TP + FP)
    recall = TP / (TP + FN)
    return round(2 * precision * recall / (precision + recall), 4)

candidates = [35, 45, 55, 65, 75]
# Build f1_by_threshold, then best_threshold, below
`,
    tests:[
      {type:'assert', expr:'best_threshold == 35', label:'best_threshold is correctly calculated (35)'}
    ]
  }
},
{
  key:'week8', num:8, title:'Grouping Smarter: Choosing k by Hand',
  scenarioTag:'Real world: is 2 groups really the right number?',
  scenario:`Beginner Week 8 always clustered into exactly 2 groups. But what if the data actually has THREE
    natural groups? Forcing k = 2 merges two groups that don't really belong together, and the fit gets
    noticeably worse. This week compares k = 2 against k = 3 using a "total distance" quality score — the sum
    of every point's squared distance to its OWN assigned center — where a LOWER score means a tighter, better
    fit.`,
  objectives:[
    'Assign each point to its nearest of SEVERAL cluster centers (not just 2)',
    'Calculate a clustering\'s total squared distance as a quality score',
    'Compare the total distance for different values of k',
    'See how choosing too FEW clusters forces unrelated points together'
  ],
  conceptHtml:`
    <p>With more than 2 centers, each point still picks whichever center is closest — just checking ALL of them,
    not just two:</p>
    <pre class="code-block">def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

def assign_many(points, centers):
    assignments = []
    for p in points:
        dists = [sqdist(p, c) for c in centers]
        assignments.append(dists.index(min(dists)))
    return assignments</pre>
    <p><code>dists.index(min(dists))</code> finds WHICH center (by position: 0, 1, 2...) gave the smallest
    distance — the same "find where the smallest value is" idea, just using a list's built-in
    <code>.index()</code> instead of writing the comparison by hand. The TOTAL distance across every point is a
    single number you can use to compare different values of k:</p>
    <pre class="code-block">def total_distance(points, centers):
    total = 0
    for p in points:
        dists = [sqdist(p, c) for c in centers]
        total += min(dists)
    return total</pre>
    <h3>Let's break down why comparing k values matters</h3>
    <ul>
      <li>Lower total distance means points sit CLOSER to their own assigned center — a tighter, more faithful
        grouping.</li>
      <li>If the data genuinely has 3 separate groups but you only allow k = 2 centers, one center gets forced to
        "cover" points from TWO different real groups — and since it can't be close to both, the total distance
        balloons.</li>
      <li>Giving the data enough centers to match its TRUE natural groups (k = 3 here) lets every point sit close
        to a center that actually represents its own group.</li>
    </ul>`,
  sandboxStarter:`def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)]
centers2 = [(2,2), (8,2)]

for p in points:
    dists = [sqdist(p, c) for c in centers2]
    print(p, "-> distances:", dists, "-> nearest center:", dists.index(min(dists)))
`,
  sandboxStarter2:`def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

def total_distance(points, centers):
    total = 0
    for p in points:
        dists = [sqdist(p, c) for c in centers]
        total += min(dists)
    return total

points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)]
centers2 = [(2,2), (8,2)]
centers3 = [(2,2), (8,2), (5,8)]
print("k=2 total distance:", total_distance(points, centers2))
print("k=3 total distance:", total_distance(points, centers3))
`,
  exercises:[
    {
      title:'Assign to the nearest of 2 centers',
      desc:`Using points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)] and
        centers2 = [(2,2), (8,2)], build assignments: for each point, the INDEX (0 or 1) of its nearest center.
        Assert that assignments == [0, 0, 0, 1, 1, 1, 0, 0, 1].`,
      starter:`def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)]
centers2 = [(2,2), (8,2)]
# Build assignments below
`,
      tests:[{type:'assert', expr:'assignments == [0, 0, 0, 1, 1, 1, 0, 0, 1]', label:'assignments is correctly calculated'}]
    },
    {
      title:'Calculate the total distance for k = 2',
      desc:`Using points and centers2 from before, build total2: the sum of each point's squared distance to its
        assigned nearest center. Assert that total2 == 146.`,
      starter:`def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)]
centers2 = [(2,2), (8,2)]
# Calculate total2 below
`,
      tests:[{type:'assert', expr:'total2 == 146', label:'total2 correctly equals 146'}]
    },
    {
      title:'Assign to the nearest of 3 centers',
      desc:`Using the same points and centers3 = [(2,2), (8,2), (5,8)], build assignments3. Assert that
        assignments3 == [0, 0, 0, 1, 1, 1, 2, 2, 2] — with a THIRD center available, the top cluster finally gets
        its own group instead of being split between the other two.`,
      starter:`def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)]
centers3 = [(2,2), (8,2), (5,8)]
# Build assignments3 below
`,
      tests:[{type:'assert', expr:'assignments3 == [0, 0, 0, 1, 1, 1, 2, 2, 2]', label:'assignments3 is correctly calculated'}]
    },
    {
      title:'Calculate the total distance for k = 3',
      desc:`Using points and centers3 from before, build total3: the sum of each point's squared distance to its
        assigned nearest center. Assert that total3 == 11.`,
      starter:`def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)]
centers3 = [(2,2), (8,2), (5,8)]
# Calculate total3 below
`,
      tests:[{type:'assert', expr:'total3 == 11', label:'total3 correctly equals 11'}]
    },
    {
      title:'Compare the two k values',
      desc:`Using total2 = 146 and total3 = 11, calculate k3_better = total3 < total2. Assert that
        k3_better == True — k = 3 fits this data FAR more tightly than k = 2.`,
      starter:`total2 = 146
total3 = 11
# Calculate k3_better below
`,
      tests:[{type:'assert', expr:'k3_better == True', label:'k3_better correctly equals True'}]
    },
    {
      title:'Measure HOW much better k = 3 is',
      desc:`Using total2 = 146 and total3 = 11, calculate improvement_ratio = total2 / total3. Assert that
        round(improvement_ratio, 2) == 13.27 — k = 3 isn't just slightly better here, it fits more than 13 times
        more tightly.`,
      starter:`total2 = 146
total3 = 11
# Calculate improvement_ratio below
`,
      tests:[{type:'assert', expr:'round(improvement_ratio, 2) == 13.27', label:'improvement_ratio is correctly calculated (13.27)'}]
    }
  ],
  quiz:[
    {
      q:'What does "total distance" measure when comparing different values of k?',
      options:['How many points there are','The sum of every point\'s squared distance to its OWN assigned center — lower means a tighter, more faithful grouping','The number of clusters chosen','The distance between the two farthest points'],
      correct:1,
      explain:'Total distance adds up how far every point is from the center it was assigned to — a tight, well-matched clustering keeps this number small.'
    },
    {
      q:'Why did k = 2\'s total distance (146) come out so much worse than k = 3\'s (11) in this week\'s data?',
      options:['It was a coding mistake','Forcing 3 genuinely separate groups into only 2 clusters merges points from DIFFERENT real groups under one center, and that shared center ends up far from at least one of them','k = 2 always performs worse than k = 3, for any dataset','Total distance does not depend on k'],
      correct:1,
      explain:'When there are more true groups than available centers, some center has to "cover" more than one group — and can\'t be close to both, so total distance grows.'
    },
    {
      q:'What real risk does choosing too FEW clusters create?',
      options:['No risk — fewer clusters is always simpler and better','It can force genuinely different groups to share one center, making that center a poor representative of any of them','It makes the code run slower','It has no effect on the total distance score'],
      correct:1,
      explain:'Too few centers means some real groups get blended together, and the shared center ends up not truly representing either group well.'
    },
    {
      q:'Does a LOWER total distance always mean k was chosen correctly?',
      options:['Yes, always — the lowest possible total distance is always the right choice','Not on its own — pushed to the extreme (as many centers as points), total distance would trivially hit zero; the comparison is meaningful specifically when it reveals the data\'s TRUE natural grouping being merged incorrectly','Total distance is unrelated to how good a k is','Lower total distance always means k is too small'],
      correct:1,
      explain:'Total distance keeps shrinking as k grows, even trivially — its real value here is revealing when TOO FEW clusters are forcing separate groups together, not as a blind "smaller is always better" rule.'
    }
  ],
  sandboxStarter3:`def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

def total_distance(points, centers):
    total = 0
    for p in points:
        dists = [sqdist(p, c) for c in centers]
        total += min(dists)
    return total

points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)]
candidates = {
    2: [(2,2), (8,2)],
    3: [(2,2), (8,2), (5,8)],
}
for k, centers in candidates.items():
    print("k =", k, "-> total distance:", total_distance(points, centers))
`,
  stretchChallenge:{
    title:'Compare k = 2 and k = 3 for a new set of points',
    desc:`Using points2 = [(0,0),(1,0), (10,0),(11,0), (5,10),(6,10)], centers2 = [(0,0), (10,0)], and
      centers3 = [(0,0), (10,0), (5,10)], calculate total2 and total3 (total squared distance for each), then
      k3_better = total3 < total2. Assert that total2 == 243 and total3 == 3 and k3_better == True.`,
    starter:`def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

def total_distance(points, centers):
    total = 0
    for p in points:
        dists = [sqdist(p, c) for c in centers]
        total += min(dists)
    return total

points2 = [(0,0),(1,0), (10,0),(11,0), (5,10),(6,10)]
centers2 = [(0,0), (10,0)]
centers3 = [(0,0), (10,0), (5,10)]
# Calculate total2, total3 and k3_better below
`,
    tests:[
      {type:'assert', expr:'total2 == 243', label:'total2 correctly equals 243'},
      {type:'assert', expr:'total3 == 3', label:'total3 correctly equals 3'},
      {type:'assert', expr:'k3_better == True', label:'k3_better correctly equals True'}
    ]
  }
},
{
  key:'week9', num:9, title:'Comparing Everything We\'ve Built',
  scenarioTag:'Real world: which of EIGHT techniques actually fits the problem in front of you?',
  scenario:`This level added six new techniques on top of Beginner's regression/classification/k-NN/clustering
    toolkit: fair comparisons across differently-scaled features (Week 2), more trustworthy error estimates
    (Week 3), confidence instead of a flat yes/no (Week 4), systematic threshold search (Week 5), combining
    several classifiers (Week 6), and separating two DIFFERENT kinds of classifier mistakes (Week 7) — plus
    choosing how many groups even exist in unlabeled data (Week 8). This final week revisits several of them, then
    asks the real practitioner question: which technique actually fits a NEW situation?`,
  objectives:[
    'Recall and re-run several techniques built across this level: regression, cross-validation, decision-tree splits, precision/recall, clustering',
    'Recognize what kind of problem each technique is built to solve',
    'Decide which technique fits a new, unfamiliar scenario',
    'See the full toolkit side by side, to compare how differently each piece works'
  ],
  conceptHtml:`
    <p>Seven tools now exist for seven different jobs:</p>
    <ul>
      <li><strong>Multi-feature regression</strong> (Week 1) — combine more than one clue into a single weighted
        prediction.</li>
      <li><strong>Scaling</strong> (Week 2) — make features on different numeric scales comparable, before
        measuring distance between them.</li>
      <li><strong>Cross-validation</strong> (Week 3) — get a MORE TRUSTWORTHY error estimate than one lucky (or
        unlucky) train/test split.</li>
      <li><strong>Sigmoid / confidence</strong> (Week 4) — turn a plain yes/no into a probability.</li>
      <li><strong>Decision-tree split search</strong> (Week 5) — systematically try several cutoffs and keep the
        one with fewest errors.</li>
      <li><strong>Voting</strong> (Week 6) — combine several classifiers so their mistakes can cancel out.</li>
      <li><strong>Precision/recall</strong> (Week 7) — separate "how trustworthy are the yes predictions" from
        "how many real yeses did we actually catch."</li>
      <li><strong>Choosing k</strong> (Week 8) — decide how many groups actually exist in unlabeled data.</li>
    </ul>
    <p>The practitioner's real skill isn't memorizing formulas — it's recognizing which SHAPE of problem you're
    looking at, and picking the matching tool.</p>`,
  sandboxStarter:`def predict2(hours, tests, w1, w2, b):
    return w1*hours + w2*tests + b

w1, w2, b = 6, 8, 38
print("Multi-feature regression (Week 1) ->", predict2(5, 2, w1, w2, b))
`,
  sandboxStarter2:`def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)]
centers3 = [(2,2), (8,2), (5,8)]
total3 = 0
for p in points:
    dists = [sqdist(p, c) for c in centers3]
    total3 += min(dists)
print("Clustering (Week 8) -> total distance for k=3:", total3)
`,
  exercises:[
    {
      title:'Revisit Week 1\'s multi-feature regression',
      desc:`Write predict2(hours, tests, w1, w2, b) returning w1*hours + w2*tests + b. Using w1 = 6, w2 = 8,
        b = 38, assert that predict2(5, 2, w1, w2, b) equals 84.`,
      starter:`def predict2(hours, tests, w1, w2, b):
    # TODO: return the weighted-sum prediction
    pass

w1, w2, b = 6, 8, 38
`,
      tests:[{type:'assert', expr:'predict2(5, 2, w1, w2, b) == 84', label:'predict2(5, 2, w1, w2, b) correctly equals 84'}]
    },
    {
      title:'Revisit Week 3\'s cross-validation',
      desc:`Using fold_maes = [1.1905, 0.7299, 0.7619], calculate cv_mae = sum(fold_maes) / len(fold_maes).
        Assert that round(cv_mae, 2) == 0.89.`,
      starter:`fold_maes = [1.1905, 0.7299, 0.7619]
# Calculate cv_mae below
`,
      tests:[{type:'assert', expr:'round(cv_mae, 2) == 0.89', label:'cv_mae is correctly calculated (0.89)'}]
    },
    {
      title:'Revisit Week 5\'s decision-tree split search',
      desc:`Using hours = [1,2,3,4,5,6,7,8,9,10], passed = [False, False, False, False, True, True, False, True,
        True, True], and majority(labels) (provided below), build errors_for_split(5): the number of
        misclassifications when splitting at 5. Assert that errors_5 == 1.`,
      starter:`def majority(labels):
    return labels.count(True) >= labels.count(False)

hours = [1,2,3,4,5,6,7,8,9,10]
passed = [False, False, False, False, True, True, False, True, True, True]
split = 5
# Build left_idx, right_idx, left_maj, right_maj, preds, then errors_5, below
`,
      tests:[{type:'assert', expr:'errors_5 == 1', label:'errors_5 correctly equals 1'}]
    },
    {
      title:'Revisit Week 7\'s precision and recall',
      desc:`Using classify(x, threshold) (provided below), hours = [1,2,3,4,5,6,7,8,9,10],
        passed = [False, False, False, False, True, True, False, True, True, True], and threshold = 3, build
        predictions, then calculate precision and recall. Assert that precision == 0.625 and recall == 1.0.`,
      starter:`def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
threshold = 3
# Build predictions, then calculate precision and recall, below
`,
      tests:[
        {type:'assert', expr:'precision == 0.625', label:'precision correctly equals 0.625'},
        {type:'assert', expr:'recall == 1.0', label:'recall correctly equals 1.0'}
      ]
    },
    {
      title:'Revisit Week 8\'s clustering with k = 3',
      desc:`Using points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)] and
        centers3 = [(2,2), (8,2), (5,8)], build total3: the sum of each point's squared distance to its nearest
        center. Assert that total3 == 11.`,
      starter:`def sqdist(p, c):
    return (p[0]-c[0])**2 + (p[1]-c[1])**2

points = [(1,1),(2,2),(3,1), (7,1),(8,2),(9,1), (4,8),(5,9),(6,8)]
centers3 = [(2,2), (8,2), (5,8)]
# Calculate total3 below
`,
      tests:[{type:'assert', expr:'total3 == 11', label:'total3 correctly equals 11'}]
    },
    {
      title:'Choose the right technique',
      desc:`For each scenario below, decide which ONE technique from this level fits best, and build answers as
        a list of your 7 choices, in order, using these exact strings: 'scaling', 'cross_validation', 'sigmoid',
        'decision_tree', 'voting', 'precision_recall', 'clustering'.
        1. "Two features are measured on very different numeric scales, and you need to compare distances fairly."
        2. "You want a MORE RELIABLE error estimate than one lucky train/test split gives, by testing on every student once."
        3. "You want a CONFIDENCE probability attached to each prediction, not just a flat yes/no."
        4. "You want to systematically try several candidate cutoffs and keep whichever has the fewest errors."
        5. "You have three separate classifiers and want to combine their predictions into one more reliable answer."
        6. "Accuracy alone hides that many 'yes' predictions were wrong — you need to separately measure how trustworthy the yes calls are AND how many real yes cases were caught."
        7. "You have no labels at all, and don't even know how many natural groups (k) the data has."
        Assert that answers == ['scaling', 'cross_validation', 'sigmoid', 'decision_tree', 'voting', 'precision_recall', 'clustering'].`,
      starter:`# Build answers as a list of 7 strings, in order, below
answers = []
`,
      tests:[{type:'assert', expr:"answers == ['scaling', 'cross_validation', 'sigmoid', 'decision_tree', 'voting', 'precision_recall', 'clustering']", label:'answers correctly matches the expected 7 techniques, in order'}]
    }
  ],
  quiz:[
    {
      q:'Which Week 3 technique should you reach for when a single train/test split might have been "lucky" or "unlucky"?',
      options:['Scaling','Cross-validation, since it tests on every point once and averages the result','Voting','Clustering'],
      correct:1,
      explain:'Cross-validation rotates which slice is held back so every point contributes to the final error estimate, avoiding the risk of one unrepresentative split.'
    },
    {
      q:'You have three separate classifiers and want their combined answer to be MORE reliable than any one alone. Which technique fits?',
      options:['Scaling','Sigmoid','Voting — as long as the three classifiers\' mistakes don\'t all overlap on the same students','Cross-validation'],
      correct:2,
      explain:'Majority voting lets correct voters outnumber a wrong one, as long as mistakes are spread across different voters rather than shared.'
    },
    {
      q:'Accuracy says a classifier is "90% right" — what might precision and recall reveal that accuracy alone hides?',
      options:['Nothing new','Whether the classifier\'s mistakes are mostly WRONG "yes" calls (precision) or mostly MISSED real "yes" cases (recall) — two very different problems that both count as "10% wrong"','Precision and recall always equal accuracy','They only apply to regression'],
      correct:1,
      explain:'Accuracy lumps every mistake together — precision and recall separate out which KIND of mistake is actually happening.'
    },
    {
      q:'Before picking a technique for a brand new problem, what is the most useful first question to ask?',
      options:['Which technique is fastest to type','What SHAPE is this problem — do I have labels, do I need a number vs yes/no vs confidence, are my features on different scales, and how many groups might exist?','Always default to regression','Whichever technique was used most recently'],
      correct:1,
      explain:'Recognizing the shape of the problem — labeled or not, numeric or categorical, single split or many candidates — is what actually determines which of the seven tools applies.'
    }
  ],
  sandboxStarter3:`def majority(labels):
    return labels.count(True) >= labels.count(False)

hours = [1,2,3,4,5,6,7,8,9,10]
passed = [False, False, False, False, True, True, False, True, True, True]

def errors_for_split(s):
    left_idx = [i for i in range(len(hours)) if hours[i] < s]
    right_idx = [i for i in range(len(hours)) if hours[i] >= s]
    left_maj = majority([passed[i] for i in left_idx])
    right_maj = majority([passed[i] for i in right_idx])
    preds = [left_maj if hours[i] < s else right_maj for i in range(len(hours))]
    return sum(1 for i in range(len(hours)) if preds[i] != passed[i])

for s in [3, 4, 5, 6, 7]:
    print("Decision-tree split (Week 5) -> split", s, "errors:", errors_for_split(s))
`,
  stretchChallenge:{
    title:'Match one more scenario',
    desc:`Decide which technique fits: "A school has hours studied (0-10) and total library minutes (0-500)
      recorded for each student, and wants to compare students by how similar their study habits are." Set
      answer to your choice. Assert that answer == 'scaling' — comparing similarity across two very
      differently-scaled numbers needs scaling FIRST, before any distance is measured.`,
    starter:`# Set answer below to one of: 'scaling', 'cross_validation', 'sigmoid', 'decision_tree', 'voting', 'precision_recall', 'clustering'
answer = ''
`,
    tests:[
      {type:'assert', expr:"answer == 'scaling'", label:'answer correctly equals scaling'}
    ]
  }
}
];

const MLR_INTERMEDIATE_MP1 = {
  key:'mp1',
  title:'Mini Project 1 — Build a Fairer Pass/Fail Predictor',
  intro:`A class of 8 students has hours studied and practice tests taken on record. Three stages: predict each
    student's score using both clues (Week 1), scale the features and cross-validate the model's honest error
    across folds (Weeks 2-3), then convert predicted scores into pass-probability confidence numbers (Week 4).`,
  newTrick:`Cross-validating a model that uses GIVEN weights (rather than weights re-fitted per fold) — proving
    the SAME fixed formula holds up consistently across different slices of students, connecting Week 3's folding
    technique to Week 1's multi-feature predictions for the first time.`,
  stages:[
    {
      key:'a', title:'Stage A — Predict with two clues',
      desc:`Using hours = [2, 3, 4, 6, 7, 8, 9, 10], tests = [0, 1, 1, 2, 3, 3, 4, 4], and w1 = 5, w2 = 10, b = 30,
        build predicted = [predict2(h, t, w1, w2, b) for h, t in zip(hours, tests)] (Week 1's predict2). Assert
        that predicted == [40, 55, 60, 80, 95, 100, 115, 120].`,
      starter:`def predict2(hours, tests, w1, w2, b):
    return w1*hours + w2*tests + b

hours = [2, 3, 4, 6, 7, 8, 9, 10]
tests = [0, 1, 1, 2, 3, 3, 4, 4]
w1, w2, b = 5, 10, 30
# Build predicted below
`,
      tests:[{type:'assert', expr:'predicted == [40, 55, 60, 80, 95, 100, 115, 120]', label:'predicted is correctly calculated'}]
    },
    {
      key:'b', title:'Stage B — Scale, then cross-validate the model',
      desc:`Using hours = [2, 3, 4, 6, 7, 8, 9, 10], build scaled_hours = [scale(h, min(hours), max(hours)) for h
        in hours] (Week 2). Assert that [round(x, 3) for x in scaled_hours] == [0.0, 0.125, 0.25, 0.5, 0.625,
        0.75, 0.875, 1.0]. Then, using predicted = [40, 55, 60, 80, 95, 100, 115, 120] and
        actual = [42, 53, 61, 79, 99, 97, 117, 117], cross-validate with k = 2 folds (Week 3): for each fold,
        calculate that fold's MAE using the SAME predicted/actual values (no re-fitting — the weights are fixed),
        then average into cv_mae. Assert that round(cv_mae, 2) == 2.25.`,
      starter:`def scale(x, xmin, xmax):
    return (x - xmin) / (xmax - xmin)

hours = [2, 3, 4, 6, 7, 8, 9, 10]
predicted = [40, 55, 60, 80, 95, 100, 115, 120]
actual = [42, 53, 61, 79, 99, 97, 117, 117]
k = 2
fold_size = len(hours) // k
# Build scaled_hours below, then compute fold_maes and cv_mae for k=2 folds
`,
      tests:[
        {type:'assert', expr:'[round(x, 3) for x in scaled_hours] == [0.0, 0.125, 0.25, 0.5, 0.625, 0.75, 0.875, 1.0]', label:'scaled_hours is correctly calculated'},
        {type:'assert', expr:'round(cv_mae, 2) == 2.25', label:'cv_mae is correctly calculated (2.25)'}
      ]
    },
    {
      key:'c', title:'Stage C — Convert predictions into pass probabilities',
      desc:`Using predicted = [40, 55, 60, 80, 95, 100, 115, 120], threshold = 70, and k = 0.1, build
        zs = [k*(p-threshold) for p in predicted], then probs = [sigmoid(z) for z in zs] (Week 4), then
        classified = [p >= 0.5 for p in probs]. Assert that
        classified == [False, False, False, True, True, True, True, True].`,
      starter:`import math

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

predicted = [40, 55, 60, 80, 95, 100, 115, 120]
threshold = 70
k = 0.1
# Build zs, probs and classified below
`,
      tests:[{type:'assert', expr:'classified == [False, False, False, True, True, True, True, True]', label:'classified is correctly calculated'}]
    }
  ]
};

const MLR_INTERMEDIATE_MP2 = {
  key:'mp2',
  title:'Mini Project 2 — The Fairer Predictor: Multi-Model Comparison',
  intro:`One last class of 10 students, the same familiar hours/pass-fail data from throughout this level. Three
    doors: scale the feature and cross-validate a classifier's accuracy across folds, compare THREE different
    classifiers (decision-tree split, sigmoid threshold, and majority vote) to find the best one, then confirm
    with unlabeled clustering whether grouping ALONE would have found the same answer.`,
  fixtureNote:`All three doors build on this same class of 10 students:`,
  fixtureCode:`hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]`,
  doors:[
    {
      key:'a', title:'Door 1 — Scale the feature, then cross-validate',
      desc:`Using hours = [1..10], build scaled_hours = [scale(h, min(hours), max(hours)) for h in hours] (Week
        2). Assert that [round(x, 4) for x in scaled_hours] == [0.0, 0.1111, 0.2222, 0.3333, 0.4444, 0.5556,
        0.6667, 0.7778, 0.8889, 1.0]. Then, using classify(x, 5) (Beginner Week 4), cross-validate with k = 2
        folds (Week 3): for each fold, calculate that fold's ACCURACY (not MAE this time) using the FIXED
        threshold = 5, then average into cv_accuracy. Assert that cv_accuracy == 0.9.`,
      starter:`def scale(x, xmin, xmax):
    return (x - xmin) / (xmax - xmin)

def classify(x, threshold):
    return x >= threshold

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
k = 2
fold_size = len(hours) // k
# Build scaled_hours below, then compute fold_accs and cv_accuracy for k=2 folds
`,
      tests:[
        {type:'assert', expr:'[round(x, 4) for x in scaled_hours] == [0.0, 0.1111, 0.2222, 0.3333, 0.4444, 0.5556, 0.6667, 0.7778, 0.8889, 1.0]', label:'scaled_hours is correctly calculated'},
        {type:'assert', expr:'cv_accuracy == 0.9', label:'cv_accuracy is correctly calculated (0.9)'}
      ]
    },
    {
      key:'b', title:'Door 2 — Compare three classifiers, and pick the best',
      desc:`Using hours, passed from before, build three classifiers: tree_preds using a decision-tree split at
        6 (Week 5), sigmoid_preds using classify(x, 5) directly (Week 4), and vote_preds combining classify at
        thresholds 3, 5 and 7 via majority vote (Week 6). Calculate each one's accuracy, then build
        scores = {"decision_tree": tree_acc, "sigmoid": sigmoid_acc, "voting": vote_acc} and
        best_model = max(scores, key=scores.get). Assert that scores == {"decision_tree": 0.8, "sigmoid": 0.9,
        "voting": 0.9} and best_model == "sigmoid".`,
      starter:`def classify(x, threshold):
    return x >= threshold

def majority(labels):
    return labels.count(True) >= labels.count(False)

hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]

def accuracy(preds):
    return sum(1 for i in range(len(hours)) if preds[i] == passed[i]) / len(hours)

# Build tree_preds (split=6), sigmoid_preds (threshold=5), and vote_preds (majority of thresholds 3,5,7) below
# Then calculate tree_acc, sigmoid_acc, vote_acc, scores and best_model
`,
      tests:[
        {type:'assert', expr:'scores == {"decision_tree": 0.8, "sigmoid": 0.9, "voting": 0.9}', label:'scores is correctly calculated'},
        {type:'assert', expr:'best_model == "sigmoid"', label:'best_model is correctly identified (sigmoid)'}
      ]
    },
    {
      key:'c', title:'Door 3 — Confirm with clustering: would grouping alone have found this?',
      desc:`Using hours = [1..10] ONLY (ignore passed completely), cluster with center_A = 1 and center_B = 10
        (Week 8, one-dimensional squared distance), building assignments. Then treat cluster "B" as a predicted
        pass and cluster "A" as a predicted fail, and calculate cluster_accuracy against the real passed labels.
        Assert that assignments == ['A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B'] and
        cluster_accuracy == 0.8 — clustering, with NO labels at all, still gets 8 of 10 students right, though
        not as well as Door 2's best supervised classifier (0.9).`,
      starter:`hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
passed = [False, False, False, False, True, True, False, True, True, True]
center_A = 1
center_B = 10
# Build assignments below, then cluster_accuracy (treating 'B' as predicted-pass)
`,
      tests:[
        {type:'assert', expr:"assignments == ['A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B']", label:'assignments is correctly calculated'},
        {type:'assert', expr:'cluster_accuracy == 0.8', label:'cluster_accuracy correctly equals 0.8'}
      ]
    }
  ]
};

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.mlr = {
  b: {weeks: MLR_WEEKS, mp1: MLR_MP1, mp2: MLR_MP2},
  i: {weeks: MLR_INTERMEDIATE_WEEKS, mp1: MLR_INTERMEDIATE_MP1, mp2: MLR_INTERMEDIATE_MP2},
  a: {weeks: MLR_WEEKS, mp1: MLR_MP1, mp2: MLR_MP2}
};
