/* ══════════════════════════════════════════
   GIRLS NEXT STOP — quiz.js
   ══════════════════════════════════════════ */

// ── QUIZ QUESTIONS ──────────────────────────
const questions = [
  {
    q: "Your ideal girls' trip vibe is...",
    opts: [
      { text: "Dancing all night and sleeping till noon",         emoji: "💃", scores: { lasvegas:3, miami:3, nyc:2, nashville:1 } },
      { text: "Exploring nature, hiking & outdoor adventures",    emoji: "🥾", scores: { aspen:3, honolulu:3, scottsdale:2 } },
      { text: "Brunching, boutique shopping & wandering pretty streets", emoji: "🛍", scores: { charleston:3, nashville:2, nyc:2, scottsdale:1 } },
      { text: "Poolside relaxation with spa days & good food",    emoji: "🧖‍♀️", scores: { scottsdale:3, miami:2, honolulu:2, lasvegas:1 } }
    ]
  },
  {
    q: "Pick your dream Friday night...",
    opts: [
      { text: "VIP table at a world-class nightclub",             emoji: "🎰", scores: { lasvegas:3, miami:3, nyc:2 } },
      { text: "Rooftop cocktails watching the sunset over mountains", emoji: "🏔", scores: { aspen:3, scottsdale:2 } },
      { text: "Wine & live music in a charming neighborhood bar", emoji: "🍷", scores: { charleston:3, nashville:3, nyc:1 } },
      { text: "Beachside bar with tiki cocktails & ocean breeze", emoji: "🌊", scores: { honolulu:3, miami:2 } }
    ]
  },
  {
    q: "Your group's activity priority is...",
    opts: [
      { text: "Skiing, hiking, or watersports — something active", emoji: "⛷️", scores: { aspen:3, honolulu:3, scottsdale:2 } },
      { text: "Shows, museums & world-class restaurants",          emoji: "🎭", scores: { nyc:3, lasvegas:2, charleston:1 } },
      { text: "Pool parties, clubs & non-stop nightlife",          emoji: "🎉", scores: { lasvegas:3, miami:3, nashville:2 } },
      { text: "Charming walks, local history & hidden gems",       emoji: "🗺",  scores: { charleston:3, nashville:2, honolulu:1 } }
    ]
  },
  {
    q: "Your ideal weather is...",
    opts: [
      { text: "Tropical — hot, sunny, palm trees & ocean",         emoji: "🌴", scores: { miami:3, honolulu:3 } },
      { text: "Desert warm — sunshine, dry heat & blue skies",     emoji: "☀️", scores: { scottsdale:3, lasvegas:1 } },
      { text: "Mountain crisp — cool air, fresh snow or wildflowers", emoji: "🏔", scores: { aspen:3, honolulu:1 } },
      { text: "Doesn't matter — the vibes matter more than weather", emoji: "😎", scores: { nashville:2, charleston:2, nyc:2, lasvegas:1 } }
    ]
  },
  {
    q: "Your girls' trip budget vibe is...",
    opts: [
      { text: "Full send — we're treating ourselves",              emoji: "💸", scores: { lasvegas:2, aspen:3, miami:2, nyc:2 } },
      { text: "Mid-range — we like nice things but aren't reckless", emoji: "💳", scores: { nashville:2, charleston:2, scottsdale:2, honolulu:2 } },
      { text: "Smart spenders — we splurge on what matters",       emoji: "🎯", scores: { nyc:2, miami:1, charleston:2, honolulu:2 } },
      { text: "Whatever gets us there — just make it happen",      emoji: "✈️", scores: { nashville:2, charleston:2, miami:1 } }
    ]
  }
];

// ── CITY RESULT DATA ─────────────────────────
const cityData = {
  miami: {
    name: "Miami",
    img:  "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&q=80",
    desc: "Sun-drenched beaches, legendary nightlife, world-class food, and an energy unlike anywhere else. Miami was made for your crew.",
    url:  "cities/miami.html"
  },
  nashville: {
    name: "Nashville",
    img:  "https://images.unsplash.com/photo-1545450733-0d3c5d7b7571?w=800&q=80",
    desc: "Hot chicken, honky-tonks, and non-stop good vibes. Nashville is the ultimate girls' trip city — fun, affordable, and unforgettable.",
    url:  "cities/nashville.html"
  },
  scottsdale: {
    name: "Scottsdale",
    img:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    desc: "Luxury resorts, desert spa days, rooftop pools, and a surprisingly great nightlife scene. Scottsdale is a girls' trip hidden gem.",
    url:  "cities/scottsdale.html"
  },
  charleston: {
    name: "Charleston",
    img:  "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    desc: "Pastel row houses, James Beard restaurants, and southern charm you'll want to bottle up and take home. Charleston is pure magic.",
    url:  "cities/charleston.html"
  },
  lasvegas: {
    name: "Las Vegas",
    img:  "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=800&q=80",
    desc: "World-class clubs, incredible restaurants, residency shows, and dayclub pool parties. What happens in Vegas becomes your best story ever.",
    url:  "cities/lasvegas.html"
  },
  nyc: {
    name: "New York City",
    img:  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    desc: "Broadway, rooftop bars, SoHo shopping, and the best food scene on earth. NYC will never stop surprising and delighting your crew.",
    url:  "cities/nyc.html"
  },
  aspen: {
    name: "Aspen",
    img:  "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
    desc: "Ski slopes, mountain hikes, cozy cabin nights, and incredible après-ski. For the girls who want adventure AND luxury — Aspen delivers both.",
    url:  "cities/aspen.html"
  },
  honolulu: {
    name: "Honolulu",
    img:  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    desc: "Turquoise waves, Diamond Head hikes, surf lessons, and the most beautiful sunsets on the planet. Honolulu is paradise — plain and simple.",
    url:  "cities/honolulu.html"
  }
};

// ── STATE ────────────────────────────────────
let currentQ      = 0;
let selectedAnswer = null;
let scores = {};

function resetScores() {
  scores = {
    miami: 0, nashville: 0, scottsdale: 0, charleston: 0,
    lasvegas: 0, nyc: 0, aspen: 0, honolulu: 0
  };
}

// ── OPEN / CLOSE ─────────────────────────────
function openQuiz() {
  currentQ       = 0;
  selectedAnswer = null;
  resetScores();

  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizBody').style.display   = 'block';
  document.getElementById('quizProgress').style.width = '0%';

  renderQuestion();
  document.getElementById('quizOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuiz() {
  document.getElementById('quizOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('quizOverlay')) closeQuiz();
}

// ── RENDER QUESTION ──────────────────────────
function renderQuestion() {
  selectedAnswer = null;

  const q   = questions[currentQ];
  const pct = (currentQ / questions.length) * 100;
  document.getElementById('quizProgress').style.width = pct + '%';

  let html = `
    <div class="quiz-q-label">Question ${currentQ + 1} of ${questions.length}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">
  `;

  q.opts.forEach((opt, i) => {
    html += `
      <div class="quiz-option" onclick="selectOption(this, ${i})">
        <span class="quiz-option-emoji">${opt.emoji}</span>
        <span class="quiz-option-text">${opt.text}</span>
      </div>
    `;
  });

  html += `</div>`;

  // navigation buttons
  html += `<div class="quiz-nav">`;
  html += currentQ > 0
    ? `<button class="quiz-back-btn" onclick="goBack()">← Back</button>`
    : `<div></div>`;
  html += `
    <button class="quiz-next-btn" id="nextBtn" onclick="nextQuestion()">
      ${currentQ === questions.length - 1 ? 'See My Result ✨' : 'Next →'}
    </button>
  `;
  html += `</div>`;

  document.getElementById('quizBody').innerHTML = html;
}

// ── ANSWER SELECTION ─────────────────────────
function selectOption(el, idx) {
  document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedAnswer = idx;
  document.getElementById('nextBtn').classList.add('ready');
}

// ── NAVIGATION ───────────────────────────────
function nextQuestion() {
  if (selectedAnswer === null) return;

  // add scores for the chosen answer
  const chosen = questions[currentQ].opts[selectedAnswer];
  for (const [city, pts] of Object.entries(chosen.scores)) {
    if (scores[city] !== undefined) scores[city] += pts;
  }

  if (currentQ < questions.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    showResult();
  }
}

function goBack() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

// ── SHOW RESULT ──────────────────────────────
function showResult() {
  // fill progress bar to 100%
  document.getElementById('quizProgress').style.width = '100%';

  // find the highest-scoring city
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const city   = cityData[winner];

  // populate result card
  document.getElementById('resultImg').style.backgroundImage  = `url('${city.img}')`;
  document.getElementById('resultName').innerHTML              = city.name;
  document.getElementById('resultDesc').textContent            = city.desc;
  document.getElementById('resultGoBtn').onclick               = () => {
    closeQuiz();
    window.location.href = city.url;
  };

  // swap panels
  document.getElementById('quizBody').style.display   = 'none';
  document.getElementById('quizResult').style.display = 'block';
}

// ── RETAKE ───────────────────────────────────
function retakeQuiz() {
  currentQ       = 0;
  selectedAnswer = null;
  resetScores();

  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizBody').style.display   = 'block';
  document.getElementById('quizProgress').style.width = '0%';

  renderQuestion();
}

// ── TAB SWITCHER (used on city pages) ────────
function switchTab(btn, panelId) {
  const content = btn.closest('.city-content');
  content.querySelectorAll('.tab-btn').forEach(b  => b.classList.remove('active'));
  content.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}