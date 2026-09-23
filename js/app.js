/* Git & GitHub Guide — чистый JS без React и сборки.
   Открывается двойным кликом или через VS Code (Live Server / Open with Live Server).
   Прогресс сохраняется в localStorage. */

"use strict";

var STEPS = [
  {
    id: 8,
    icon: "🎨",
    newContext: true,
    tag: "FIGMA MCP",
    tagClass: "tag-sky",
    title: "Подключение Figma MCP",
    subtitle: "MCP-сервер для Figma в opencode — двумя промптами",
    description:
      "MCP (Model Context Protocol) — это «мост» между opencode и внешними сервисами: подключили сервер — и opencode научился сам ходить в Figma. Figma Context MCP от GLips умеет вытаскивать данные макета по ссылке (get_figma_data) и скачивать картинки из макета (download_figma_image). Нужен токен: figma.com → Settings → Security → Personal access tokens.",
    steps: [
      {
        label: "Установить MCP-сервер",
        description:
          "Скопируйте промпт, вставьте свой Figma API-токен вместо [ТОКЕН] и отправьте:",
        prompt:
          "Подключи мне Figma Context MCP-сервер (пакет figma-developer-mcp от GLips). Установи его как local-сервер через npx в мой opencode.json. Figma API-токен у меня такой: [ТОКЕН] — добавь его в environment сервера. Покажи итоговый конфиг и объясни каждую строку.",
        note: "Проверка: opencode показал итоговый opencode.json с сервером figma и вашим токеном в environment"
      },
      {
        label: "Проверить, что всё работает",
        description:
          "Вставьте ссылку на любой ваш макет в Figma вместо [ссылка] и отправьте промпт:",
        prompt2:
          "Проверь, что Figma Context MCP подключён: покажи его инструменты (get_figma_data, download_figma_image) и сделай тестовый запрос по этой ссылке на макет: [ссылка]. Если есть ошибки — почини конфиг.",
        bullets: [
          "opencode должен показать инструменты get_figma_data и download_figma_image",
          "Тестовый запрос вернул данные макета — ошибки нет",
          "После изменения конфига перезапустите opencode — MCP подхватится заново"
        ],
        note: "Если есть ошибки — opencode починит конфиг сам. После правки opencode.json перезапуск обязателен"
      }
    ]
  },
  {
    id: 1,
    icon: "⚙️",
    newContext: true,
    tag: "НАСТРОЙКА",
    tagClass: "tag-indigo",
    title: "Настройка окружения",
    subtitle: "Git установлен и настроен через opencode",
    description:
      "Первым делом проверяем, что Git установлен на компьютере, и привязываем его к вашему имени и почте. Это делается один раз за всё время работы — потом забыть. Вставьте свои данные в промпт перед отправкой.",
    steps: [
      {
        label: "Скопировать и вставить промпт в opencode",
        description:
          "Вставьте свои имя и почту от GitHub в промпт, затем отправьте его opencode:",
        prompt:
          "Проверь, установлен ли git на моём компьютере. Если нет — установи его сам. Затем настрой git глобально: моё имя — [Имя], почта — [почта от GitHub]. В конце покажи итоговую конфигурацию и объясни в двух словах, что ты сделал.",
        note: "Проверка: opencode показал ваши имя и почту в итоговой конфигурации"
      }
    ]
  },
  {
    id: 2,
    icon: "📁",
    newContext: true,
    tag: "ПРОЕКТ",
    tagClass: "tag-violet",
    title: "Репозиторий и первая страница",
    subtitle: "Создаём репозиторий и файл index.html",
    description:
      "Репозиторий — это папка проекта плюс вся его история. Обычная папка помнит только последнее состояние файлов, репозиторий — каждый момент во времени. После этого шага в папке появятся index.html и скрытая папка .git — «чёрный ящик», в котором живёт история. Удалять её нельзя.",
    steps: [
      {
        label: "Скопировать и вставить промпт в opencode",
        description:
          "Вставьте своё имя в промпт и отправьте:",
        prompt:
          "Создай в текущей папке новый git-репозиторий и файл index.html с простой страничкой: заголовок с моим именем — [Имя] — и пара абзацев о том, что я учусь веб-разработке. Открой страницу через Live Server, чтобы я посмотрел, как она выглядит. Объясни, что появилось в папке.",
        note: "Проверка: страница открылась в браузере, в папке есть index.html и .git"
      }
    ]
  },
  {
    id: 3,
    icon: "📸",
    newContext: true,
    tag: "КОММИТЫ",
    tagClass: "tag-gray",
    title: "Первый коммит",
    subtitle: "Делаем снимок проекта и учимся циклу работы",
    description:
      "Коммит — фотография проекта в моменте, слот сохранения в игре. Сделайте первый коммит, потом попросите opencode изменить страницу — и закоммитьте ещё раз. Цикл «изменил → закоммитил» — главный рефлекс этого шага.",
    steps: [
      {
        label: "Сделать первый коммит",
        description: "Скопируйте промпт и отправьте:",
        prompt:
          "Сделай первый коммит всех файлов с осмысленным сообщением. Покажи, какие команды git ты выполнил, и объясни каждую одним предложением.",
        note: "opencode покажет команды — читайте их, запоминать не надо"
      },
      {
        label: "Посмотреть историю и сделать второй коммит",
        description:
          "Сначала отправьте этот промпт, потом попросите opencode изменить что-то на странице (цвет, текст) и отправьте второй промпт:",
        prompt:
          "Покажи историю моих коммитов и подожди — дальше я скажу, что поменять.",
        prompt2:
          "Проверь git status, объясни, что видишь, и сделай второй коммит.",
        note: "Проверка: в истории минимум 2 коммита с разными сообщениями"
      }
    ]
  },
  {
    id: 4,
    icon: "🐙",
    newContext: true,
    tag: "GITHUB",
    tagClass: "tag-indigo",
    title: "Подключение к GitHub",
    subtitle: "Создаём удалённый репозиторий и пушим код",
    description:
      "Локальный репозиторий живёт на вашем компьютере, удалённый — на GitHub. Сейчас свяжем их: opencode создаст репозиторий на GitHub через gh (GitHub CLI), отправит туда код и объяснит каждую команду. Это единственный шаг, где вы нужны руками — разовая авторизация.",
    steps: [
      {
        label: "Скопировать и вставить промпт в opencode",
        description:
          "Вставьте свой никнейм на GitHub и придумайте имя проекта:",
        prompt:
          "Мой никнейм на GitHub — [никнейм]. Подключи мой локальный репозиторий к GitHub: проверь, установлен ли gh (GitHub CLI), установи, если его нет, и авторизуй меня. Если для авторизации нужен код — покажи его мне, я введу его на сайте. Затем создай удалённый репозиторий с именем [имя проекта], сделай ветку main основной и отправь туда все мои коммиты. Покажи каждую выполненную команду и объясни её.",
        note: "Единственное действие руками: opencode покажет код — введите его на github.com/login/device. Это разовая авторизация"
      },
      {
        label: "Проверить результат на GitHub",
        description:
          "Откройте github.com → свой профиль → вкладка Repositories:",
        link: { text: "github.com", href: "https://github.com/" },
        bullets: [
          "Репозиторий создан, код на месте",
          "Вкладка Commits показывает историю — тот же git log, только красивый"
        ]
      }
    ]
  },
  {
    id: 5,
    icon: "🔄",
    newContext: true,
    tag: "СИНХРОНИЗАЦИЯ",
    tagClass: "tag-sky",
    title: "Проверка на понимание",
    subtitle: "Убедиться, что репозитория два и они могут расходиться",
    description:
      "Локальный и удалённый репозитории — две независимые копии, они могут отставать друг от друга. Сейчас мы специально сделаем так, чтобы они «разъехались», и посмотрим, как opencode это чинит через git pull.",
    steps: [
      {
        label: "Скопировать и вставить промпт в opencode",
        description: "Отправьте промпт и читайте объяснение:",
        prompt:
          "Открой мой репозиторий на GitHub и отредактируй README через gh, добавив строку \"Учебный проект\". Объясни, почему теперь локальный репозиторий отстал от удалённого, и синхронизируй их.",
        note: "Проверка: изменения появились у вас на компьютере — opencode сделал git pull"
      }
    ]
  },
  {
    id: 6,
    icon: "🌐",
    newContext: true,
    tag: "ПУБЛИКАЦИЯ",
    tagClass: "tag-blue",
    title: "Живая ссылка — GitHub Pages",
    subtitle: "Ваш сайт открывается из интернета, бесплатно",
    description:
      "Кульминация: GitHub Pages бесплатно хостит статические сайты (HTML/CSS/JS) прямо из репозитория. Обновление ссылки = новый push: внес правку — сайт обновился через минуту. Каждый пет-проект курса закончит такой ссылкой — к концу курса у вас целое портфолио на твойник.github.io.",
    steps: [
      {
        label: "Включить GitHub Pages",
        description: "Скопируйте промпт и отправьте:",
        prompt:
          "Включи для моего репозитория GitHub Pages: источником сделай ветку main, папку /root. Дождись деплоя и дай мне финальную ссылку на сайт. Проверь, что она открывается.",
        note: "Ссылка будет вида https://твойник.github.io/имя-проекта/"
      },
      {
        label: "Закрепить рефлекс",
        description:
          "Попросите opencode изменить что-то на странице (цвет, текст, картинку), затем отправьте:",
        prompt:
          "Закоммить это, отправь на GitHub и напомни мне, через сколько обновится страница на GitHub Pages.",
        bullets: [
          "Откройте ссылку с телефона — сайт работает",
          "Изменения появляются после push через минуту"
        ]
      }
    ]
  },
  {
    id: 7,
    icon: "🚀",
    newContext: true,
    tag: "ДЕПЛОЙ",
    tagClass: "tag-blue",
    title: "Mini-Figma на GitHub Pages",
    subtitle: "React-проект публикуется сам — одним промптом",
    description:
      "Mini-Figma написана на React, и это не проблема: GitHub Pages хостит и React-приложения. Не нужно переписывать на чистый HTML/CSS/JS — opencode соберёт проект через npm run build, настроит автодеплой через GitHub Actions и включит Pages через API. Ваше участие: вставить промпт и подождать пару минут.",
    steps: [
      {
        label: "Скопировать и вставить промпт в opencode",
        description:
          "Откройте в opencode папку с проектом mini-figma, вставьте свои данные в промпт и отправьте:",
        prompt:
          "Перед тобой React-проект на Vite (mini-figma). Опубликуй его на GitHub Pages полностью автоматически: 1) проверь, что я авторизован в gh (GitHub CLI) — если нет, помоги авторизоваться; 2) создай репозиторий на GitHub с именем [имя-проекта] и отправь туда весь код; 3) добавь в vite.config.ts параметр base: \"/[имя-проекта]/\"; 4) создай файл .github/workflows/deploy.yml — workflow, который при каждом push запускает npm ci, npm run build и публикует папку dist через actions/configure-pages + actions/upload-pages-artifact + actions/deploy-pages; 5) закоммить и запушь всё; 6) включи GitHub Pages с источником \"GitHub Actions\" через gh api; 7) дождись завершения workflow и дай мне финальную ссылку, проверь, что она открывается. Покажи каждую выполненную команду и объясни её в двух словах.",
        note: "Единственное действие руками: если opencode покажет код авторизации — введите его на github.com/login/device"
      },
      {
        label: "Проверить живую ссылку",
        description:
          "Через 1–2 минуты после деплоя откройте ссылку вида:",
        bullets: [
          "https://твойник.github.io/имя-проекта/ — mini-figma работает",
          "Ссылка обновляется сама после каждого git push — деплой трогать больше не нужно"
        ],
        note: "Если страница белая — скорее всего не подставился base в vite.config.ts. Спросите opencode: «Моя страница на GitHub Pages белая, найди причину и почини»"
      }
    ]
  }
];

// ---------- состояние ----------
var completed = loadJson("git-lecture-completed", []);
var subChecked = loadJson("git-lecture-subchecked", {});
var completedSet = {};
completed.forEach(function (id) { completedSet[id] = true; });

function loadJson(key, fallback) {
  try {
    var raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) { return fallback; }
}
function save() {
  try {
    localStorage.setItem("git-lecture-completed", JSON.stringify(Object.keys(completedSet).map(Number)));
    localStorage.setItem("git-lecture-subchecked", JSON.stringify(subChecked));
  } catch (e) {}
}

// ---------- svg ----------
function svgCheck(cls) {
  return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
}
function svgExternal(cls) {
  return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
}
function svgCopy(cls) {
  return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
}
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------- копирование ----------
function copyText(text, btn) {
  function done() {
    if (!btn) return;
    var original = btn.innerHTML;
    btn.innerHTML = svgCheck("") + "<span>скопировано</span>";
    btn.classList.add("copy-ok");
    setTimeout(function () { btn.innerHTML = original; btn.classList.remove("copy-ok"); }, 2000);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text); done(); });
  } else { fallbackCopy(text); done(); }
}
function fallbackCopy(text) {
  var ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}

// ---------- рендер ----------
function pad(n) { return String(n).padStart(2, "0"); }

function renderProgress() {
  var total = STEPS.length;
  var doneCount = Object.keys(completedSet).length;
  var pct = Math.round((doneCount / total) * 100);
  document.getElementById("progressCount").textContent = doneCount + "/" + total + " шагов";
  var fill = document.getElementById("progressFill");
  fill.style.width = pct + "%";
  if (pct === 100) fill.classList.add("full"); else fill.classList.remove("full");
  var hint = document.getElementById("progressHint");
  if (pct === 0) { hint.textContent = ""; }
  else if (pct === 100) { hint.textContent = "🎉 Всё готово! Можно начинать работу."; }
  else { hint.textContent = pct + "% завершено — продолжайте!"; }
  document.getElementById("footerCount").textContent = doneCount + " из " + total + " выполнено";
}

function renderChips() {
  var box = document.getElementById("chips");
  box.innerHTML = STEPS.map(function (s) {
    var done = !!completedSet[s.id];
    return '<div class="chip' + (done ? " done" : "") + '">' +
      (done ? svgCheck("") : "<span>" + s.icon + "</span>") +
      "<span>" + esc(s.title) + "</span></div>";
  }).join("");
}

function substepHtml(stepId, sub, idx) {
  var key = stepId + "-" + idx;
  var checked = !!subChecked[key];
  var html = '<div class="substep' + (checked ? " checked" : "") + '" data-sub="' + key + '">';
  html += '<div class="checkbox">' + (checked ? svgCheck("") : "") + "</div>";
  html += '<div class="substep-body"><span class="substep-num">' + pad(idx + 1) + "</span>";
  html += '<div class="substep-content">';
  html += '<p class="substep-title">' + esc(sub.label) + "</p>";
  if (!checked) {
    if (sub.description) html += '<p class="substep-text">' + esc(sub.description) + "</p>";
    if (sub.link) {
      html += '<a class="substep-link" href="' + esc(sub.link.href) + '" target="_blank" rel="noopener noreferrer" data-stop="1">' +
        esc(sub.link.text) + svgExternal("") + "</a>";
    }
    if (sub.bullets) {
      html += '<ul class="bullets">' + sub.bullets.map(function (b) {
        return '<li><i>✦</i><span>' + esc(b) + "</span></li>";
      }).join("") + "</ul>";
    }
    if (sub.prompt) {
      html += '<div class="prompt-block"><div class="prompt-head"><span class="prompt-head-label"><span>✦</span> промпт для opencode</span>' +
        '<button class="copy-btn" data-copy="' + esc(sub.prompt).replace(/"/g, "&quot;") + '" data-stop="1">' + svgCopy("") + "<span>копировать</span></button></div>" +
        '<pre class="prompt-text">' + esc(sub.prompt) + "</pre></div>";
    }
    if (sub.prompt2) {
      html += '<div class="prompt-block"><div class="prompt-head"><span class="prompt-head-label"><span>✦</span> промпт для opencode — затем</span>' +
        '<button class="copy-btn" data-copy="' + esc(sub.prompt2).replace(/"/g, "&quot;") + '" data-stop="1">' + svgCopy("") + "<span>копировать</span></button></div>" +
        '<pre class="prompt-text">' + esc(sub.prompt2) + "</pre></div>";
    }
    if (sub.note) html += '<p class="note"><b>→</b><span>' + esc(sub.note) + "</span></p>";
  }
  html += "</div></div></div>";
  return html;
}

function renderCards() {
  var box = document.getElementById("steps");
  box.innerHTML = STEPS.map(function (step, i) {
    var done = !!completedSet[step.id];
    var html = '<article class="step-card animate-fade-up' + (done ? " completed-card" : "") + '" style="animation-delay:' + (i * 120) + 'ms">';
    html += '<div class="step-head"><div class="step-head-left">';
    html += '<div class="step-icon">' + (done ? '<span class="animate-check-pop">' + svgCheck("") + "</span>" : step.icon) + "</div>";
    html += "<div>";
    html += '<div class="step-meta"><span class="tag ' + step.tagClass + '">' + esc(step.tag) + "</span>" +
      '<span class="step-num">' + pad(i + 1) + " / " + pad(STEPS.length) + "</span></div>";
    html += "<h2>" + esc(step.title) + "</h2>";
    html += '<p class="step-sub">' + esc(step.subtitle) + "</p>";
    html += "</div></div>";
    if (step.url) {
      html += '<a class="site-link" href="' + esc(step.url) + '" target="_blank" rel="noopener noreferrer">' + svgExternal("") + "<span>сайт</span></a>";
    }
    html += "</div>";
    if (step.newContext) {
      html += '<div class="context-banner"><span>🗂️</span><p style="margin:0"><b>Каждый шаг — отдельный контекст.</b> Перед тем как вставлять промпт, создайте новую вкладку в opencode — не продолжайте в старом чате.</p></div>';
    }
    html += '<p class="step-desc">' + esc(step.description) + "</p>";
    html += '<div class="substeps">' + step.steps.map(function (s, j) { return substepHtml(step.id, s, j); }).join("") + "</div>";
    html += '<div class="done-row">';
    html += done
      ? '<div class="done-label animate-slide-right">' + svgCheck("") + "Выполнено</div>"
      : "<div></div>";
    html += '<button class="done-btn' + (done ? " is-done" : "") + '" data-done="' + step.id + '">' +
      (done ? svgCheck("") + "Готово — отменить?" : "Отметить как сделано ✓") + "</button>";
    html += "</div></article>";
    return html;
  }).join("");

  var allDone = Object.keys(completedSet).length === STEPS.length;
  document.getElementById("finalBanner").style.display = allDone ? "block" : "none";
}

function renderAll() { renderProgress(); renderChips(); renderCards(); }

// ---------- события (делегирование) ----------
document.addEventListener("click", function (e) {
  var stop = e.target.closest("[data-stop]");
  if (stop) e.stopPropagation();

  var copyBtn = e.target.closest("[data-copy]");
  if (copyBtn) {
    e.stopPropagation();
    copyText(copyBtn.getAttribute("data-copy"), copyBtn);
    return;
  }
  var doneBtn = e.target.closest("[data-done]");
  if (doneBtn) {
    var id = Number(doneBtn.getAttribute("data-done"));
    if (completedSet[id]) { delete completedSet[id]; }
    else {
      completedSet[id] = true;
      // мини-конфетти
      var card = doneBtn.closest(".step-card");
      if (card) burst(card);
    }
    save(); renderAll();
    return;
  }
  var sub = e.target.closest("[data-sub]");
  if (sub) {
    var key = sub.getAttribute("data-sub");
    // клик по ссылке/кнопке внутри — не переключать чекбокс
    if (e.target.closest("a,button")) return;
    subChecked[key] = !subChecked[key];
    save(); renderAll();
  }
});

function burst(card) {
  var colors = ["#4f46e5", "#16a34a", "#f59e0b", "#ec4899", "#06b6d4"];
  var wrap = document.createElement("div");
  wrap.className = "confetti-wrap";
  for (var i = 0; i < 18; i++) {
    var c = document.createElement("div");
    c.className = "confetti";
    c.style.left = (10 + (i * 5) % 80) + "%";
    c.style.backgroundColor = colors[i % colors.length];
    c.style.animationDelay = (i * 60) + "ms";
    c.style.transform = "rotate(" + (i * 20) + "deg)";
    wrap.appendChild(c);
  }
  card.appendChild(wrap);
  setTimeout(function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }, 1600);
}

document.getElementById("resetBtn").addEventListener("click", function () {
  completedSet = {}; subChecked = {}; save(); renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderAll();
