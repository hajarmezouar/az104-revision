(() => {
  const questions = window.AZ104_LEARN_QUESTIONS || [];
  if (!questions.length) return;

  const nav = document.querySelector('.sidebar nav');
  const notesButton = nav?.querySelector('[data-view="notes"]');
  const button = document.createElement('button');
  button.className = 'nav';
  button.dataset.view = 'learn-bank';
  button.innerHTML = '✓ <span>Banque vérifiée</span>';
  nav?.insertBefore(button, notesButton || null);

  const key = 'az104-learn-bank-v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch {}

  const state = { domain: 'all', difficulty: 'all', status: 'all', search: '', index: 0, selected: null, shown: false };
  const app = document.getElementById('app');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const domainNames = Object.fromEntries([...new Set(questions.map(q => q.domain))].map(domain => [domain, questions.find(q => q.domain === domain).domainName]));

  const harmonizeCourseCopy = () => {
    const intro = app.querySelector('.section-intro');
    if (intro?.textContent.startsWith('Cinq domaines du programme actuel')) {
      intro.textContent = 'Six parcours Microsoft Learn · 28 modules relus section par section : les prérequis, puis les cinq domaines notés. Les introductions, exercices et évaluations ont été contrôlés, tandis que les fiches retiennent les connaissances et gestes utiles à l’examen.';
    }
    const eyebrow = app.querySelector('.module-head .eyebrow');
    if (eyebrow?.textContent.toUpperCase().includes('PRÉ-REQUIS DE L’EXAMEN')) eyebrow.textContent = 'PARCOURS 1 · BASES À MAÎTRISER';
    const activeModule = app.querySelector('.module-tab.active')?.dataset.module;
    const course = window.AZ104_CURRICULUM?.[activeModule];
    app.querySelectorAll('.curriculum-section').forEach((section, index) => {
      if (section.querySelector('.module-source') || !course?.sections[index]?.source) return;
      const link = document.createElement('a');
      link.className = 'module-source';
      link.href = course.sections[index].source;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Ouvrir ce module sur Microsoft Learn ↗';
      section.querySelector('.subline')?.insertAdjacentElement('afterend', link);
    });
  };
  new MutationObserver(harmonizeCourseCopy).observe(app, { childList: true, subtree: true });

  function persist() {
    try { localStorage.setItem(key, JSON.stringify(saved)); } catch {}
  }

  function filtered() {
    const query = state.search.trim().toLowerCase();
    return questions.filter(q =>
      (state.domain === 'all' || q.domain === Number(state.domain)) &&
      (state.difficulty === 'all' || q.difficulty === state.difficulty) &&
      (state.status === 'all' || (state.status === 'unseen' && !saved[q.id]) || (state.status === 'wrong' && saved[q.id]?.result === 'wrong')) &&
      (!query || [q.question, q.subtopic, q.tags.join(' '), ...q.choices].join(' ').toLowerCase().includes(query))
    );
  }

  function render() {
    document.querySelectorAll('.nav').forEach(item => item.classList.toggle('active', item === button));
    document.getElementById('viewTitle').textContent = 'Banque Microsoft Learn';
    const list = filtered();
    if (state.index >= list.length) state.index = Math.max(0, list.length - 1);
    const q = list[state.index];
    const done = questions.filter(item => saved[item.id]?.result).length;
    const good = questions.filter(item => saved[item.id]?.result === 'correct').length;
    app.innerHTML = `<div class="content"><div class="source-banner"><strong>Section séparée · 500 questions du ZIP</strong><span>Les 500 lignes ont un identifiant unique, une réponse cohérente avec le corrigé et un lien Microsoft Learn. Les explications restent à confronter à la page liée si le service évolue.</span></div><div class="toolbar"><input id="bankSearch" type="search" placeholder="Rechercher une notion…" value="${esc(state.search)}"><select id="bankDomain"><option value="all">Tous les domaines</option>${Object.entries(domainNames).map(([id, name]) => `<option value="${id}" ${state.domain == id ? 'selected' : ''}>Domaine ${id} · ${esc(name)}</option>`).join('')}</select><select id="bankDifficulty"><option value="all">Toutes difficultés</option>${['easy','medium','hard'].map(value => `<option value="${value}" ${state.difficulty === value ? 'selected' : ''}>${value === 'easy' ? 'Facile' : value === 'medium' ? 'Moyen' : 'Difficile'}</option>`).join('')}</select><select id="bankStatus"><option value="all">Toutes</option><option value="unseen" ${state.status === 'unseen' ? 'selected' : ''}>Non vues</option><option value="wrong" ${state.status === 'wrong' ? 'selected' : ''}>Erreurs</option></select><span class="statline">${list.length} résultats</span></div>${!q ? '<div class="panel">Aucune question pour ces filtres.</div>' : `<div class="workspace"><article class="question-card"><div class="q-head"><span class="chip">DOMAINE ${q.domain} · ${esc(q.id)}</span><span class="muted">${esc(q.difficulty)} · ${state.index + 1}/${list.length}</span></div><p class="subline"><strong>${esc(q.subtopic)}</strong></p><div class="stem"><p>${esc(q.question)}</p></div><div class="options">${q.choices.map((choice, index) => `<button class="option ${state.shown ? (index === q.answer ? 'correct' : state.selected === index ? 'wrong' : '') : state.selected === index ? 'selected' : ''}" data-bank-opt="${index}"><span class="letter">${'ABCD'[index]}</span><span>${esc(choice)}</span></button>`).join('')}</div><div class="actions"><button class="btn" id="bankCheck">${state.shown ? 'Réponse affichée' : 'Vérifier ma réponse'}</button><button class="btn secondary" id="bankNext">Question suivante →</button></div>${state.shown ? `<div class="answer-panel"><div class="feedback ${state.selected === q.answer ? 'game-feedback win' : 'game-feedback retry'}"><strong>${state.selected === q.answer ? 'Bonne réponse.' : 'À revoir.'}</strong> ${esc(q.choices[q.answer])}</div><h3>Explication liée au corrigé</h3><p>${esc(q.explanation)}</p><p class="verification-note"><strong>Source Microsoft Learn :</strong> <a href="${esc(q.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(q.sourceTitle)} ↗</a></p><p class="muted">Import : ${esc(q.sourceFile)} · aucun visuel intégré dans les cinq classeurs.</p></div>` : ''}</article><aside><div class="panel"><span class="eyebrow">PROGRESSION DE CETTE BANQUE</span><h3>${done} / ${questions.length} traitées</h3><div class="progress-track"><span style="width:${Math.round(done / questions.length * 100)}%"></span></div><div class="mini-grid"><div class="mini"><strong>${good}</strong><small>Réussies</small></div><div class="mini"><strong>${done - good}</strong><small>À revoir</small></div></div><p class="subline">Cette progression est indépendante des six tests DOCX.</p></div></aside></div>`}</div>`;

    document.getElementById('bankSearch').oninput = event => { state.search = event.target.value; state.index = 0; state.shown = false; state.selected = null; render(); document.getElementById('bankSearch').focus(); };
    for (const [id, field] of [['bankDomain','domain'],['bankDifficulty','difficulty'],['bankStatus','status']]) document.getElementById(id).onchange = event => { state[field] = event.target.value; state.index = 0; state.shown = false; state.selected = null; render(); };
    if (!q) return;
    document.querySelectorAll('[data-bank-opt]').forEach(option => option.onclick = () => { if (!state.shown) { state.selected = Number(option.dataset.bankOpt); render(); } });
    document.getElementById('bankCheck').onclick = () => { if (state.selected === null || state.shown) return; state.shown = true; saved[q.id] = { result: state.selected === q.answer ? 'correct' : 'wrong', updated: Date.now() }; persist(); render(); };
    document.getElementById('bankNext').onclick = () => { state.index = (state.index + 1) % list.length; state.selected = null; state.shown = false; render(); scrollTo({ top: 0, behavior: 'smooth' }); };
  }

  button.onclick = render;
})();
