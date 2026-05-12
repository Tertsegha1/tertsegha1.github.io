/**
 * data.js — all site content for Dr. Tertsegha Joseph Anande's portfolio.
 *
 * To update the site, edit the objects below and push to GitHub.
 * No rebuild step required — GitHub Pages serves static files directly.
 */

const DATA = {

  /* ── Personal ─────────────────────────────────────────── */
  personal: {
    name:       'Dr. Tertsegha Joseph Anande',
    credentials:'PhD · FHEA · MBCS',
    title:      'Deputy Programme Leader · Lecturer in Computing · ML Researcher',
    location:   'Birmingham, UK',
    email:      'tertseghaanande@gmail.com',
    github:     'https://github.com/Tertsegha1',
    linkedin:   'https://www.linkedin.com/in/tertsegha-anande-phd-msc-mbcs-afhea-71939520a/',
    scholar:    'https://scholar.google.com/citations?user=J5pMcosAAAAJ&hl=en',
    latestPub:  'https://doi.org/10.1007/s42979-024-03544-3',
    // ── Booking config ──────────────────────────────────────
    // Set your Calendly URL to enable the inline scheduling widget.
    // Leave empty ('') to show the inquiry form only.
    // Example: 'https://calendly.com/tertsegha-anande'
    calendlyUrl: '',
    // Sign up free at formspree.io → New Form → copy the form ID here.
    // Leave empty ('') to use the mailto: fallback instead.
    formspreeId: '',
    bio: `PhD-trained engineer and computing lecturer with 10+ years of combined experience
in software engineering, applied machine learning, and higher education. Currently leading
MSc Computing programmes at QAHE / Ulster University, Birmingham, driving student success
through innovative AI-powered tools and structured pedagogical frameworks.`,
    roleTags: ['Machine Learning', 'AutoML', 'Cyber Security', 'AI in Education', 'Ensemble Learning', 'EV Security'],
    stats: [
      { num: '10+', label: 'Years Experience' },
      { num: '14+', label: 'Publications'     },
      { num: '98%', label: 'Digital Transformation Pass Rate' },
      { num: '5+',  label: 'EdTech Projects'   },
    ],
    memberships: ['BCS — MBCS', 'IET Member', 'IEEE & ComSoc', 'HEA — FHEA', 'INSTICC'],
    education: [
      { degree: 'PhD, Engineering (Communication Systems)', institution: 'University of Warwick, UK' },
      { degree: 'MSc, Communication Systems',               institution: 'Swansea University, UK'   },
      { degree: 'B.Tech., ICT',                             institution: 'Federal University of Technology, Yola, Nigeria' },
    ],
    about: [
      `I am a PhD-trained engineer and computing lecturer based in Birmingham, UK. I hold a PhD in
Engineering (Communication Systems) from the University of Warwick, an MSc from Swansea University,
and a B.Tech. from the Federal University of Technology, Yola, Nigeria.`,
      `My work sits at the intersection of <strong>machine learning research</strong>,
<strong>cyber and cyber-physical systems security</strong>, and
<strong>AI-powered educational technology</strong>. I specialise in ensemble and meta-learning
frameworks, AutoML pipeline design, GAN-based synthetic data generation, and trustworthy ML
for high-stakes applications.`,
      `As Deputy Programme Leader at QAHE&nbsp;/&nbsp;Ulster University, I oversee curriculum quality
assurance for MSc Computing programmes, lead three core modules, and have driven Digital Transformation student
pass rates to <strong>98%+</strong> through the Digital Transformation Studio initiative and the
AI-powered Automated Marking &amp; Grading System I designed and built.`,
      `I am an active open-source contributor with production-grade projects on GitHub, a Fellow
of the Higher Education Academy (FHEA), and a Member of the BCS, IET, and IEEE.`,
    ],
  },

  /* ── Skills ───────────────────────────────────────────── */
  skills: [
    {
      icon: '🤖', title: 'ML / AI',
      tags: ['PyTorch','TensorFlow','Keras','scikit-learn','XGBoost','LightGBM','Optuna','GANs','Transformers','Ensemble Learning','Meta-Learning','AutoML','SHAP'],
    },
    {
      icon: '💻', title: 'Languages',
      tags: ['Python','JavaScript','SQL','Java','C','MATLAB','R','Bash'],
    },
    {
      icon: '📊', title: 'Data Engineering',
      tags: ['pandas','NumPy','SciPy','MLflow','Leakage Auditing','Fold-safe Preprocessing','Repeated CV','Reproducible ML'],
    },
    {
      icon: '⚙️', title: 'Software Engineering',
      tags: ['Git / GitHub','FastAPI','Docker','REST API','OOP Design','CI Workflows','MLflow'],
    },
    {
      icon: '🔒', title: 'Cyber Security',
      tags: ['Network Intrusion Detection','DDoS Analysis','Cyber-Physical Security','Rootkit Analysis','SDN Security','OCPP 1.6/2.0+','ISO 15118'],
    },
    {
      icon: '🏫', title: 'AI in EdTech',
      tags: ['Cloudflare Workers AI','Llama 3.3 70B','Whisper AI','PDF.js','Mammoth.js','JSZip','Rubric-based Assessment'],
    },
  ],

  /* ── Experience ───────────────────────────────────────── */
  experience: [
    {
      date:   'Mar 2025 – Present',
      title:  'Deputy Programme Leader & Module Leader',
      org:    'QAHE Limited / Ulster University — Birmingham, UK',
      bullets: [
        'Oversees curriculum QA across MSc Computing programmes; leads UX Strategies, Advanced Database Systems, and Object-Oriented Design &amp; Development',
        'Created a tracker system for monitoring delivery, marking, and moderation across all MSc modules',
        'Conducted standardisation and moderation trainings for Module Leaders',
        'Mentored new teaching staff, supporting onboarding and professional development',
        'Created bio data pages for all MSc teaching staff and a student feedback wall',
        'Collaborates with awarding partners and academic committees to validate alignment with QAA frameworks and industry standards',
      ],
    },
    {
      date:   'Jan 2024 – Present',
      title:  'Lecturer in Computing & Module Leader',
      org:    'QAHE Limited / Ulster University — Birmingham, UK',
      bullets: [
        'Teaches UG and PG modules across programming, databases, software engineering, and web/UX engineering',
        'Module leader for four core MSc / UG modules; designs assessments and provides structured technical feedback at scale',
        'Introduced the <strong>Digital Transformation Studio (DT Studio)</strong> — a 12-week formative scaffold with weekly Guild Quest tasks; drove student pass rate to <strong>98%+</strong> and failure rate to <strong>1.14%</strong> (2025–26 cohort)',
        'Designed and deployed the <strong>Automated Marking &amp; Grading System</strong> — AI-powered browser-based tool (Llama 3.3 70B / Whisper) for rubric-driven grading and Blackboard-ready feedback at zero server cost',
        'Created a tracking system for monitoring and managing marking across cohorts',
        'Collaborated with counterpart lecturers for cross-moderation, content development and delivery',
        'Completed standardisation and internal moderation in line with QAA and awarding body requirements',
      ],
    },
    {
      date:   'Dec 2023 – May 2024',
      title:  'Research Fellow — ML for Power Grid & EV Charging Security',
      org:    'University of Warwick, School of Engineering — Coventry, UK',
      bullets: [
        'Applied state-of-the-art ML to detect cyber and cyber-physical attacks on EV charging systems and the wider smart-grid ecosystem',
        'Obtained OCPP certification (v1.6, v1.6 Advanced, v2.0+); hands-on with ISO 15118 secure-charging standards',
        'Authored peer-reviewed scientific papers for project stakeholders',
      ],
    },
    {
      date:   'Oct 2019 – Sept 2023',
      title:  'Full-time PhD Researcher — Engineering (Communication Systems)',
      org:    'University of Warwick, School of Engineering — Coventry, UK',
      bullets: [
        'Built end-to-end ML pipelines for synthetic-traffic generation and multi-class attack classification; achieved <strong>&gt;99% detection accuracy</strong> and <strong>~100% meta-classification accuracy</strong> on imbalanced datasets',
        'Developed enhanced Stack Ensemble Meta-Learning framework — boosting performance and speed by <strong>over 80%</strong>',
        'Presented at international conferences and authored 8+ peer-reviewed publications',
      ],
    },
    {
      date:   'Oct 2021 – Dec 2023',
      title:  'Senior Graduate Teaching Assistant',
      org:    'University of Warwick — Coventry, UK',
      bullets: [
        'Led programming and lab sessions; coordinated GTAs supporting 80+ students in seminars and practical labs',
      ],
    },
    {
      date:   'Nov 2014 – Oct 2019',
      title:  'Lecturer & Module Leader',
      org:    'Federal University of Agriculture, Makurdi — Nigeria',
      bullets: [
        'Designed and delivered six computing/engineering modules; supervised 30+ students with a <strong>100% pass rate</strong>',
      ],
    },
  ],

  /* ── Projects ─────────────────────────────────────────── */
  projects: [
    {
      icon:  '🤖',
      badge: '2025–Present',
      title: 'MoSELA AutoML — General-Purpose Tabular AutoML Framework',
      desc:  'Modular, production-grade AutoML framework implementing the MoSELA staged pipeline: Profile → Preprocess → Coarse Search (Optuna) → Refinement → Champion Selection → Bundle → REST Serve (FastAPI). Features structural, semantic, and correlation-based leakage auditing; family-aware preprocessing; cost-aware multi-objective champion selection; MLflow integration; Docker support.',
      tech:  ['Python','scikit-learn','Optuna','XGBoost','LightGBM','FastAPI','Docker','MLflow'],
      links: [{ label: '🔧 In Development', url: '#contact' }],
    },
    {
      icon:  '🎓',
      badge: 'Private · EdTech',
      title: 'Digital Transformation Studio',
      desc:  'Full-lifecycle studio management system for the Digital Transformation module — deployed across London, Birmingham, and Manchester campuses. Manages cohort setup, guild formation, weekly quest publishing, artefact submission, peer review, and AI-powered formative feedback. Student portal, lecturer view, and module-leader admin are role-gated. All data syncs live via Firebase Realtime Database; zero server cost. Integrates Claude API for per-submission feedback including an AI-writing estimate to guide students before Turnitin submission.',
      tech:  ['Vanilla JS','Firebase','HTML/CSS','Claude API','GitHub Pages'],
      links: [
        { label: '🔒 Request Access', url: 'https://cmp701-studio.tertseghaanande.workers.dev' },
      ],
    },
    {
      icon:  '📋',
      badge: 'Private · EdTech',
      title: 'Marking Tracker',
      desc:  'Live marking-coordination tool across all campuses. Markers sign in by name; the module leader uses a PIN-protected admin view. KPI dashboard tracks allocation, completion, and non-submissions in real time. Supports per-cohort CSV import, role-based access (module leader / marker), inline status and notes editing, and one-click CSV export for board reporting. Firebase-backed with offline localStorage fallback — changes sync the moment connectivity resumes.',
      tech:  ['Vanilla JS','Firebase','HTML/CSS','GitHub Pages'],
      links: [
        { label: '🔒 Request Access', url: 'https://cmp701-tracker.tertseghaanande.workers.dev' },
      ],
    },
    {
      icon:  '🏫',
      badge: 'Private · EdTech',
      title: 'Automated Marking & Grading System',
      desc:  'Browser-based AI-powered automated marking tool for Digital Transformation (MSc). Supports CW1 (Video Presentation), CW2 (Written Report), and DT Studio Guild Quest verification. Integrates Cloudflare Workers AI (Llama 3.3 70B) for rubric-driven grading and Whisper for video transcription. Role-based access, AI-generation detection, in-browser file extraction — zero server cost. Directly contributed to <strong>98%+ pass rate</strong> (2025–26 cohort).',
      tech:  ['HTML/CSS/JS','Cloudflare Workers AI','Llama 3.3 70B','Whisper AI','PDF.js','GitHub Pages'],
      links: [
        { label: '🌐 Live Demo', url: 'https://cmp701-grading-system.tertseghaanande.workers.dev' },
        { label: '🔒 Request Access', url: 'https://cmp701-grading-system.tertseghaanande.workers.dev' },
      ],
    },
    {
      icon:  '🏥',
      badge: '2025–Present',
      title: 'THA-AutoML — Trustworthy AutoML for Health Tabular Data',
      desc:  'Research-grade AutoML framework for health-oriented tabular classification with leakage auditing, fold-safe preprocessing, repeated cross-validation benchmarking, Optuna-based hyperparameter optimisation, and cost-aware model selection. Produces reproducible benchmark artefacts, publication-ready reports, and deployment-ready model outputs.',
      tech:  ['Python','scikit-learn','Optuna','XGBoost','LightGBM','pandas'],
      links: [{ label: '🔧 In Development', url: '#contact' }],
    },
    {
      icon:  '📈',
      badge: 'PhD Core',
      title: 'Ensemble Meta-Learning for Cyber-Attack Classification',
      desc:  'Engineered a stacked ensemble + Optuna-tuned meta-learner achieving up to <strong>100% multi-class classification accuracy</strong> on imbalanced network-traffic data with near-zero misclassification; 80%+ training throughput uplift via custom stacking architecture. Published in <em>SN Computer Science</em> (2025).',
      tech:  ['Python','Ensemble Learning','Meta-Learning','Optuna','Network Traffic'],
      links: [{ label: '📖 Paper (DOI)', url: 'https://doi.org/10.1007/s42979-024-03544-3' }],
    },
    {
      icon:  '🔁',
      badge: 'PhD',
      title: 'GAN-based Synthetic Network Traffic Generation',
      desc:  'Built deep generative pipelines (GANs) producing synthetic network traffic with >85% indistinguishability from real samples. Downstream attack-detection accuracy >99% across multiple cyber-attack classes. Focused on APT sample classification using GANs and XGBoost.',
      tech:  ['GANs','XGBoost','PyTorch','Network Traffic','APT Classification'],
      links: [{ label: '📖 Related Paper', url: 'https://doi.org/10.1007/s42979-024-03544-3' }],
    },
    {
      icon:  '⚡',
      badge: 'Research Fellow',
      title: 'ML-driven Cyber-Physical Security for EV Charging Systems',
      desc:  'Investigated DDoS and protocol-level attacks on EV charging infrastructure; built explainable ensemble models for anomaly detection on OCPP/ISO-15118 traffic. OCPP v1.6, v1.6 Advanced, and v2.0+ certified. Applied ML explainability (SHAP) for cyber-physical security in the smart grid ecosystem.',
      tech:  ['Ensemble ML','SHAP','OCPP 1.6/2.0+','ISO 15118','DDoS Detection','EV Security'],
      links: [],
    },
  ],

  /* ── Publications ─────────────────────────────────────── */
  publications: {
    journal: [
      {
        year:    '2024 — SN Computer Science, 6(1), 12',
        title:   'Enhanced Modelling Performance with Boosting Ensemble Meta-Learning and Optuna Optimization',
        authors: 'Anande, T., Alsaadi, S., & Leeson, M. (2024)',
        venue:   '<a href="https://doi.org/10.1007/s42979-024-03544-3" target="_blank">doi.org/10.1007/s42979-024-03544-3</a>',
      },
      {
        year:    '2023 — IJCA',
        title:   'Generative Adversarial Networks for Network Traffic Feature Generation',
        authors: 'Anande, T. J., Al-Saadi, S., & Leeson, M. S. (2023)',
        venue:   'International Journal of Computer Applications',
      },
      {
        year:    '2022 — IJMLC, 12(6), 333–343',
        title:   'Generative Adversarial Networks (GANs): A Survey of Network Traffic Generation',
        authors: 'Anande, T. J., & Leeson, M. S. (2022)',
      },
      {
        year:    '2016 — IJAIS, 10(8)',
        title:   'Combating Kernel Rootkits on Linux Version 2.6',
        authors: 'Anande, T.J., Genger, T.K., Abasiene, J.U. (2016)',
      },
      {
        year:    '2016 — IJAIS, 10(10)',
        title:   'Design and Development of a Diabetes Management App on Android',
        authors: 'Anande, T.J., Al-Shehri, S., Genger, T.K. (2016)',
      },
      {
        year:    '2017 — IJAREE',
        title:   'Design and Implementation of an Arduino-based Wireless Home Appliances Control System',
        authors: 'Odinya, J.O., Anande, T.J., & Kureve, D.T. (2017)',
        venue:   'International Journal of Advance Research and Innovative Ideas in Education',
      },
      {
        year:    '2017 — Development, 4(7)',
        title:   'Data Mining Using WEKA Tool for Internally Displaced Persons Dataset in Northeastern Nigeria',
        authors: 'Lawal, S.N., Anande, T.J., & Genger, T.K. (2017)',
      },
      {
        year:    '2017 — Development, 4(7)',
        title:   'Design and Construction of a Two-Way Security Authentication Electronic Safe Locks Using Arduino Microcontroller',
        authors: 'Anande, T.J., Abunku, M., & Morkat, Y.M. (2017)',
      },
      {
        year:    '2017 — Computer Simulation, 12(1)',
        title:   'Computer Simulation of Chaotic Systems',
        authors: 'Genger, T.K., Anande, T.J., & Al-Shehri, S. (2017)',
      },
      {
        year:    '2017 — IJAREE',
        title:   'Implementation of 12V to 330V Boost Converter with Closed Loop Control Using Push Pull Topology',
        authors: 'Anande, J.T., Odinya, J.O., & Yilwatda, M.M. (2017)',
        venue:   'International Journal of Advance Research and Innovative Ideas in Education',
      },
    ],
    conference: [
      {
        year:    '2024 — EIDWT, Springer, pp. 480–491',
        title:   'Comparative Analysis of 1D-CNN and 2D-CNN for Network Intrusion Detection in Software Defined Networks',
        authors: 'Alsaadi, S., Anande, T. J., & Leeson, M. S. (2024)',
        cls:     'conf',
      },
      {
        year:    '2023 — DeLTA, Springer, pp. 1–18',
        title:   'Synthetic Network Traffic Data Generation and Classification of Advanced Persistent Threat Samples: A Case Study with GANs and XGBoost',
        authors: 'Anande, T. J., & Leeson, M. S. (2023)',
        cls:     'conf',
      },
    ],
    book: [
      {
        year:    'Book — LAP Lambert Academic Publishing',
        title:   'Mobile Rootkits: A Case Study of Android, Windows Phone and SE Linux',
        authors: 'Anande, T.J.',
        venue:   'ISBN: 978-620-0-29969-7',
        cls:     'chap',
      },
    ],
    inPrep: [
      {
        year:    'In Preparation',
        title:   'Exploring Explainability and Detection of DDoS Attacks on Electric Vehicle Charging Systems using Ensemble Learning',
        authors: 'T.J. Anande and S. Lakshminarayana',
        cls:     'prep',
      },
      {
        year:    'In Preparation',
        title:   'A Multi-class Meta-Classification Test-bed for Imbalanced Network Traffic Data',
        authors: 'T.J. Anande and M.S. Leeson',
        cls:     'prep',
      },
    ],
  },

  /* ── Research Interests ───────────────────────────────── */
  research: [
    { icon: '🧠', title: 'Machine Learning & Deep Learning'          },
    { icon: '📈', title: 'Ensemble & Meta-Learning'                  },
    { icon: '🤖', title: 'AutoML & Trustworthy ML'                   },
    { icon: '🔁', title: 'Synthetic Data Generation (GANs)'          },
    { icon: '🔒', title: 'Cyber & Cyber-Physical Security'           },
    { icon: '⚡', title: 'EV Charging Security & OCPP'               },
    { icon: '🏥', title: 'Health-Oriented Tabular ML'                },
    { icon: '🏫', title: 'AI-Powered Educational Technology'         },
    { icon: '📊', title: 'Multi-class Imbalanced Classification'     },
  ],

  /* ── Teaching ─────────────────────────────────────────── */
  teaching: {
    postgraduate: [
      { label: 'Digital Transformation (MSc)',           leader: true  },
      { label: 'Scalable Advanced Software Solutions (MSc)', leader: true },
      { label: 'Network Traffic Control and Organization (MSc)'        },
      { label: 'Network Modelling and Simulation (MSc)'                },
      { label: 'Mobile Robotics (Y4 / MSc)'                            },
      { label: 'Social Informatics (Y4 / MSc)'                         },
      { label: 'High Performance Computing (Y4 / MSc)'                 },
      { label: 'Numerical Methods (PGD)'                               },
      { label: 'Computer Programming (PGD)'                            },
      { label: 'Principles of Engineering Communication (PGD)'         },
    ],
    undergraduate: [
      { label: 'UX Strategies (Y3)',                              leader: true },
      { label: 'Advanced Database Systems (Y2)',                  leader: true },
      { label: 'Object-Oriented Design & Development (Y2)',       leader: true },
      { label: 'Computer Security (Y1)'              },
      { label: 'Web Application Development (Y2)'    },
      { label: 'Database Systems (Y2)'               },
      { label: 'Contemporary Web Applications (Y3)'  },
      { label: 'High Performance Computing (Y3)'     },
      { label: 'Programming for Scientists (Y1)'     },
      { label: 'Design of Information Structures (Y1)' },
      { label: 'Mobile Robotics (Y3)'                },
      { label: 'Digital Systems Design (Y2)'         },
      { label: 'High Performance Embedded Systems Design (Y2)' },
      { label: 'Professional Communication Skills (Y1)' },
      { label: 'Problem Solving — C Programming (Y1)'   },
    ],
  },

  /* ── Certifications ───────────────────────────────────── */
  certifications: [
    {
      icon: '⚡',
      title: 'Open Charge Point Protocol (OCPP)',
      desc:  'v1.6, v1.6 Advanced Features & v2.0+ Certified — EV Charging Infrastructure',
    },
    {
      icon: '🎓',
      title: 'Fellow of the Higher Education Academy',
      desc:  'FHEA — PR336175 — Advance HE, May 2026',
      highlight: true,
    },
    {
      icon: '🤖',
      title: 'Build Basic Generative Adversarial Networks (GANs)',
      desc:  'DeepLearning.AI / Coursera — <a href="https://coursera.org/verify/NPH4FQ5PAQ6Y" target="_blank">Verify: NPH4FQ5PAQ6Y</a>',
    },
    {
      icon: '🏫',
      title: 'Preparing to Teach in Higher Education',
      desc:  'Warwick Doctoral College',
    },
    {
      icon: '📄',
      title: 'Project Management & Science Communication',
      desc:  'Warwick Doctoral College',
    },
    {
      icon: '💼',
      title: 'Business, Innovation & Commercialisation for Researchers',
      desc:  'Warwick Doctoral College',
    },
  ],

};
