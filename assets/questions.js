window.INTERVIEW_BANK = {
  star: [
    {
      id: "s1",
      q: "Tell me about a time you improved a student’s academic outcomes over several months.",
      tip: "Show extended support (6+ months), measurement, and independence — not just one lesson.",
      answer: {
        S: "As Stage 6 Mathematics Leader, I supported senior students struggling with HSC Mathematics Advanced.",
        T: "Move them from repeated misconception patterns to stronger assessment performance and independent study habits.",
        A: "I analysed assessment data, mapped recurring gaps, broke concepts into sequenced goals, built revision plans, and coached study routines with checkpoints.",
        R: "Students showed clearer understanding, higher confidence, and stronger subsequent assessment results. The key was strategy + accountability, not more content alone."
      }
    },
    {
      id: "s2",
      q: "Describe a time you partnered with parents/families to support a student.",
      tip: "Kalibrate-Ed’s clients are parents. Show calm advisory language and shared goals.",
      answer: {
        S: "My MEd research focused on parents’ experiences of their children’s mathematics education, and in teaching I regularly communicate with families about progress and next steps.",
        T: "Help parents understand barriers and agree a practical plan they can support at home.",
        A: "I translated assessment evidence into plain language, explained what the student could control this week, and set shared milestones (notes, practice sets, confidence check-ins).",
        R: "Families felt clearer and less overwhelmed; students became more consistent because home and school expectations aligned."
      }
    },
    {
      id: "s3",
      q: "Give an example of designing a personalised learning system for a student.",
      tip: "Use Unique Learning Profile language: needs, preferences, barriers, checkpoints.",
      answer: {
        S: "I worked with students with different profiles — high achievers needing extension and students needing confidence rebuilds, including EAL learners.",
        T: "Design an efficient trajectory to goals without overloading the student.",
        A: "I diagnosed barriers first (misconception, organisation, language load, motivation), then built a lean weekly system: priority topics, spaced practice, feedback loop, and a visible tracker.",
        R: "Students could self-manage more of the week; I spent session time on strategy and sticky misconceptions rather than re-teaching everything."
      }
    },
    {
      id: "s4",
      q: "Tell me about a time you had to course-correct when a plan wasn’t working.",
      tip: "Logic over emotion. Show diagnosis, reset priorities, new schedule.",
      answer: {
        S: "A student had strong intention but slipped behind before a major assessment block.",
        T: "Recover quickly without burnout and protect the highest-weighted outcomes.",
        A: "We paused, listed overdue items, dropped non-urgent tasks, prioritised by weighting and proximity, rebuilt a realistic calendar, and booked short accountability check-ins.",
        R: "The student regained control, completed critical preparation, and learned a repeatable recovery process for future setbacks."
      }
    },
    {
      id: "s5",
      q: "How have you used data/evidence to guide educational decisions?",
      tip: "Link NESA/HSC assessment analysis to strategic choices.",
      answer: {
        S: "In Stage 6 leadership I design assessments and analyse results across cohorts.",
        T: "Identify what to teach next and what to stop spending time on.",
        A: "I looked for recurring error patterns, separated content gaps from exam technique/process issues, then adjusted Scope & Sequence pacing and individual interventions.",
        R: "Interventions became more precise; students practised the right skills instead of broadly revising everything."
      }
    },
    {
      id: "s6",
      q: "Describe your experience with NSW secondary pathways (HSC/ATAR/university).",
      tip: "Be concrete but humble: curriculum expertise + pathway conversations.",
      answer: {
        S: "I currently teach Stage 6 Mathematics in NSW and lead curriculum planning aligned to NESA requirements.",
        T: "Help students and families connect subject performance to pathway goals.",
        A: "I discuss goal realism (target courses/ATARs), subject demands, assessment calendars, and efficient preparation systems; I focus students on controllable ranking/skill levers.",
        R: "Students make clearer choices about effort allocation and families understand trade-offs earlier."
      }
    }
  ],
  situational: [
    {
      id: "x1",
      q: "A Year 11 parent says tutoring hasn’t helped. Their child is demotivated and ‘behind’. How would you run the first consult?",
      answer: "Open with listening and goals. Clarify desired outcomes (marks, confidence, pathway). Diagnose barriers (content vs skills vs organisation vs wellbeing). Explain Kalibrate-Ed difference: strategy + execution, not more content. Propose a first 2–4 week roadmap with measurable checkpoints and what parent/student/strategist each own. Book a follow-up review."
    },
    {
      id: "x2",
      q: "A top student wants 99+ ATAR but is overloaded with sport and burnout risk. What do you advise?",
      answer: "Validate ambition, then run a SMART goal check (importance 1–10, sacrifice willingness). Map calendar constraints. Prioritise high-leverage subjects/assessments. Protect recovery time as strategy, not weakness. Offer an ambitious-but-sustainable plan with mid-term review points to adjust goal/effort with logic, not panic."
    },
    {
      id: "x3",
      q: "A student ‘does past papers’ but marks aren’t improving. What’s your approach?",
      answer: "Stop reverse-engineering answers. Diagnose: notes quality, syllabus inventory, exam technique, feedback use. Rebuild sequence: syllabus inventory → study notes → exam notes → targeted practice → timed simulations → feedback tracker. Measure improvement by question type, not hours spent."
    },
    {
      id: "x4",
      q: "Two assessments due the same week. How do you prioritise with the student?",
      answer: "Use early planning + weighting + nature of task. Finish hand-in tasks earlier; keep in-class test revision closer to the date. Factor recent weak areas. Decide with logic (weighting/impact), not comfort. Put start dates and checkpoints in an assessment tracker."
    },
    {
      id: "x5",
      q: "An EAL Year 10 student freezes in Maths worded questions. How do you support?",
      answer: "Separate language load from mathematical understanding. Pre-teach key command terms, use visual scaffolds, model annotation of questions, reduce cognitive load in early practice, then gradually increase independence. Keep goals visible and celebrate process wins to rebuild confidence."
    },
    {
      id: "x6",
      q: "A parent asks: ‘Why aren’t you just tutoring Maths content?’ How do you respond?",
      answer: "Respectfully: content tutoring helps when the barrier is missing content. If barriers are strategy, organisation, exam process, or learning habits, more content can overwhelm. Our role is designing an efficient trajectory and coaching execution so students become independent. We can coordinate with tutors when content catch-up is needed."
    },
    {
      id: "x7",
      q: "You notice a student may need special provisions or wellbeing support. What do you do?",
      answer: "Stay in scope: strategist, not clinician. Flag observations carefully to parent; recommend school counsellor/careers advisor/GP pathways and documentation processes. Adjust learning system for attention/energy (shorter blocks, routines). Never promise provisions; guide family to proper channels early."
    },
    {
      id: "x8",
      q: "How would you report progress to a parent after one month?",
      answer: "Use a simple dashboard: goals, actions completed, skill/result/mindset indicators, what’s working, what’s stuck, next-month plan. Keep language calm and evidence-based. End with clear asks for parent and student."
    }
  ],
  clientScripts: [
    {
      id: "c1",
      title: "Opening a parent consult (2 minutes)",
      lines: [
        "Thank you for meeting with me. My role is education strategy — helping your child learn how to learn and follow a clear roadmap.",
        "Today I’d like to understand your goals, what’s been tried, and what gets in the way.",
        "By the end, we’ll agree one practical next-step plan with checkpoints."
      ]
    },
    {
      id: "c2",
      title: "Explaining Kalibrate-Ed difference",
      lines: [
        "Traditional tutoring often adds content. That helps when content is the only gap.",
        "Many students also need strategy: organisation, exam process, motivation systems, and an efficient trajectory.",
        "We design a personalised roadmap around your child’s unique learning profile, then coach execution and track measurable progress."
      ]
    },
    {
      id: "c3",
      title: "Closing / next steps",
      lines: [
        "Here’s what I heard as the priority outcome…",
        "Here’s the first 2–4 week plan: weekly focus, practice structure, and checkpoints.",
        "You will support X at home; your child owns Y; I’ll coach Z and report progress.",
        "Does this feel realistic for your family’s capacity right now?"
      ]
    }
  ],
  rapidFire: [
    {
      id: "r1",
      q: "In one sentence, what does an Education Strategist do?",
      answer: "I design and coach personalised learning strategies that help students reach goals efficiently — building skills and independence, not just covering more content."
    },
    {
      id: "r2",
      q: "What is your superpower?",
      answer: "I diagnose the real barrier — misconception, organisation, language load, or confidence — then build a personalised system that grows both competence and independence."
    },
    {
      id: "r3",
      q: "Why Kalibrate-Ed?",
      answer: "Because your philosophy matches mine: build capable humans through strategy, mindset and adaptability — and my Stage 6 leadership + family-focused research prepare me to advise parents well."
    },
    {
      id: "r4",
      q: "What are you hoping to get from the role?",
      answer: "Longer-horizon impact with students and families, deeper strategy work, flexibility as a contractor, and the chance to specialise in personalised learning systems."
    }
  ]
};
