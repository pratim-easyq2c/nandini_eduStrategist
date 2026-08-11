function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return [...root.querySelectorAll(sel)]; }

function setActiveNav() {
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  $all(".nav a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === page || (page === "" && href === "index.html")) a.classList.add("active");
  });
}

function renderStarList(targetId) {
  const el = document.getElementById(targetId);
  if (!el || !window.INTERVIEW_BANK) return;
  el.innerHTML = INTERVIEW_BANK.star.map((item) => `
    <details class="qa">
      <summary>${item.q}</summary>
      <div class="body">
        <p><span class="tag">Tip</span> ${item.tip}</p>
        ${item.fullAnswerHtml || ""}
      </div>
    </details>
  `).join("");
}

function renderSituationalList(targetId) {
  const el = document.getElementById(targetId);
  if (!el || !window.INTERVIEW_BANK) return;
  el.innerHTML = INTERVIEW_BANK.situational.map((item) => `
    <details class="qa">
      <summary>${item.q}</summary>
      <div class="body">${item.answer}</div>
    </details>
  `).join("");
}

function renderScripts(targetId) {
  const el = document.getElementById(targetId);
  if (!el || !window.INTERVIEW_BANK) return;
  el.innerHTML = INTERVIEW_BANK.clientScripts.map((s) => `
    <article class="card">
      <div class="label">${s.id.toUpperCase()}</div>
      <h3>${s.title}</h3>
      <div class="script-block">
        ${s.lines.map((line) => `<p>“${line}”</p>`).join("")}
      </div>
    </article>
  `).join("");
}

function createPracticeDeck(mode) {
  const bank = window.INTERVIEW_BANK;
  if (!bank) return [];
  if (mode === "star") {
    return bank.star.map((x) => ({
      type: "STAR",
      q: x.q,
      a: x.fullAnswerHtml || `<p>${x.spoken || ""}</p>`
    }));
  }
  if (mode === "situational") {
    return bank.situational.map((x) => ({ type: "Situational", q: x.q, a: x.answer }));
  }
  if (mode === "rapid") {
    return bank.rapidFire.map((x) => ({ type: "Rapid fire", q: x.q, a: `<p>${x.answer}</p>` }));
  }
  return [
    ...createPracticeDeck("rapid"),
    ...createPracticeDeck("star"),
    ...createPracticeDeck("situational")
  ];
}

function initPractice() {
  const root = document.getElementById("practice-app");
  if (!root) return;

  let mode = "mixed";
  let index = 0;
  let revealed = false;
  let deck = createPracticeDeck(mode);

  function render() {
    if (!deck.length) return;
    const item = deck[index];
    const pct = Math.round(((index + 1) / deck.length) * 100);
    root.innerHTML = `
      <div class="btn-row">
        <button class="btn btn-secondary" data-mode="mixed">Mixed</button>
        <button class="btn btn-secondary" data-mode="rapid">Rapid</button>
        <button class="btn btn-secondary" data-mode="star">STAR</button>
        <button class="btn btn-secondary" data-mode="situational">Situational</button>
      </div>
      <div class="progress"><span style="width:${pct}%"></span></div>
      <div class="card flash">
        <div class="meta">${item.type} · ${index + 1} / ${deck.length}</div>
        <div class="q">${item.q}</div>
        ${revealed ? `<div class="a">${item.a}</div>` : `<p class="lede">Say your answer aloud first, then reveal.</p>`}
        <div class="btn-row" style="justify-content:center">
          <button class="btn btn-secondary" id="prev">Previous</button>
          <button class="btn btn-primary" id="reveal">${revealed ? "Hide answer" : "Reveal answer"}</button>
          <button class="btn btn-secondary" id="next">Next</button>
        </div>
      </div>
    `;

    $all("[data-mode]", root).forEach((btn) => {
      btn.addEventListener("click", () => {
        mode = btn.getAttribute("data-mode");
        deck = createPracticeDeck(mode);
        index = 0;
        revealed = false;
        render();
      });
    });
    $("#prev", root).addEventListener("click", () => {
      index = (index - 1 + deck.length) % deck.length;
      revealed = false;
      render();
    });
    $("#next", root).addEventListener("click", () => {
      index = (index + 1) % deck.length;
      revealed = false;
      render();
    });
    $("#reveal", root).addEventListener("click", () => {
      revealed = !revealed;
      render();
    });
  }

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  renderStarList("star-list");
  renderSituationalList("situational-list");
  renderScripts("script-list");
  initPractice();
});
