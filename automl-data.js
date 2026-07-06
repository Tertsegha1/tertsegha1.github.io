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
    just means the tool tries this automatically across many model types and settings for you.</p>`,
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
      desc:`Import pandas as pd and print the exact message "Ready to build models!".`,
      starter:`# Import pandas and print the message below
`,
      tests:[{type:'output', contains:['Ready to build models!'], label:'Prints the ready message'}]
    },
    {
      title:'Build a small DataFrame',
      desc:`Create a pandas DataFrame called df with one column "hours" containing the values 1, 2, 3, and print
        len(df). It should print 3.`,
      starter:`import pandas as pd
# Create df below
`,
      tests:[{type:'output', contains:['3'], label:'Prints the correct row count (3)'}]
    },
    {
      title:'Train a model',
      desc:`Using the training data from the concept box (hours and passed), train a LogisticRegression model
        called model, then print model.predict([[8]])[0].`,
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
        hasattr(model, "predict").`,
      starter:`from sklearn.linear_model import LogisticRegression
hours = [[1],[2],[3],[7],[8],[9]]
passed = [0,0,0,1,1,1]
model = LogisticRegression()
model.fit(hours, passed)
`,
      tests:[{type:'assert', expr:'hasattr(model, "predict")', label:'model has a predict method'}]
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
  ]
}
];

window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.ml = { b: {weeks: ML_WEEKS}, i: {weeks: ML_WEEKS}, a: {weeks: ML_WEEKS} };
