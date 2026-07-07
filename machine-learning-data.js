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
  ]
}
];

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.mlr = { b: {weeks: MLR_WEEKS}, i: {weeks: MLR_WEEKS}, a: {weeks: MLR_WEEKS} };
