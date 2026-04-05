const STORAGE_KEYS = {
  config: "pascua_config_v1",
  found: "pascua_found_v1",
};

const DEFAULT_EGGS = [
  { code: 1, clue: "Buscá donde guardamos los vasos para la merienda.", location: "Cocina", scripture: "Juan 3:16", message: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito…", artEmoji: "🌸", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Noel-coypel-the-resurrection-of-christ-1700.jpg" },
  { code: 2, clue: "Revisá cerca de los almohadones del sillón grande.", location: "Living", scripture: "Lucas 24:6", message: "No está aquí, sino que ha resucitado.", artEmoji: "🐇", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Clevelandart_1926.247.jpg" },
  { code: 3, clue: "Mirá donde dejamos los zapatos al entrar.", location: "Entrada", scripture: "Mateo 28:5-6", message: "No temáis… porque ha resucitado, como dijo.", artEmoji: "🥚", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Carravagio%20-%20The%20Supper%20at%20Emmaus%20-%201601.jpg" },
  { code: 4, clue: "Andá al lugar donde se lava la ropa.", location: "Lavadero", scripture: "Juan 11:25", message: "Yo soy la resurrección y la vida.", artEmoji: "🕊️", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Titian%20-%20Noli%20me%20tangere%20-%20WGA22880.jpg" },
  { code: 5, clue: "Buscá una maceta especial en el patio.", location: "Patio", scripture: "Romanos 6:9", message: "Cristo, habiendo resucitado de los muertos, ya no muere.", artEmoji: "🌼", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pieter%20Bruegel%20the%20Elder%20-%20The%20Procession%20to%20Calvary.jpg" },
  { code: 6, clue: "Mirá cerca del lugar de los juguetes.", location: "Dormitorio niños", scripture: "1 Corintios 15:22", message: "Porque así como en Adán todos mueren, también en Cristo todos serán vivificados.", artEmoji: "🧸", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Veronese%20-%20The%20Resurrection%20of%20Jesus%20Christ.jpg" },
  { code: 7, clue: "Revisá donde se guardan las toallas.", location: "Baño", scripture: "Lucas 24:34", message: "Ha resucitado el Señor verdaderamente.", artEmoji: "💛", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Raphael%20-%20The%20Transfiguration%20-%20Google%20Art%20Project.jpg" },
  { code: 8, clue: "Fijate en el lugar donde se hacen asados.", location: "Parrillero", scripture: "Hechos 4:12", message: "En ningún otro hay salvación.", artEmoji: "🔥", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/El_Greco_-_The_Resurrection.jpg" },
  { code: 9, clue: "Buscá cerca de una planta alta o árbol.", location: "Jardín", scripture: "Mosíah 16:7-8", message: "La muerte no tendrá poder sobre ellos… Cristo ha resucitado.", artEmoji: "🌳", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Piero_della_Francesca_046.jpg" },
  { code: 10, clue: "Mirá en la biblioteca o estante de libros.", location: "Estudio", scripture: "Alma 11:42", message: "El espíritu y el cuerpo serán reunidos otra vez.", artEmoji: "📚", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Caravaggio_%28Michelangelo_Merisi%29_-_The_Incredulity_of_Saint_Thomas_-_Google_Art_Project.jpg" },
  { code: 11, clue: "Buscá donde se guardan los cubiertos.", location: "Cocina", scripture: "Alma 40:23", message: "El alma será restaurada al cuerpo.", artEmoji: "🍽️", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rembrandt_Harmensz._van_Rijn_132.jpg" },
  { code: 12, clue: "Andá a la cama principal y mirá en una esquina.", location: "Dormitorio principal", scripture: "Helamán 14:15-17", message: "Para que sepan que deben arrepentirse… y resucitarán.", artEmoji: "🛏️", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Supper_at_Emmaus-Caravaggio_%281601%29.jpg" },
  { code: 13, clue: "Buscá cerca de la heladera.", location: "Cocina", scripture: "3 Nefi 11:10-11", message: "He bebido de aquella copa amarga… he glorificado al Padre.", artEmoji: "❄️", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Matthias_Gr%C3%BCnewald_-_The_Resurrection_-_WGA10728.jpg" },
  { code: 14, clue: "Mirá debajo de una mesa del comedor.", location: "Comedor", scripture: "3 Nefi 27:14-15", message: "Seré levantado… para atraer a todos hacia mí.", artEmoji: "🍽️", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Giotto%20di%20Bondone%20-%20No.%2039%20Scenes%20from%20the%20Life%20of%20Christ%20-%2010.%20Noli%20me%20Tangere%20-%20WGA09257.jpg" },
  { code: 15, clue: "Fijate en una ventana con cortina clara.", location: "Living", scripture: "Mormón 9:13", message: "Cristo ha resucitado… y ha traído la redención.", artEmoji: "🪟", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fra_Angelico_041.jpg" },
  { code: 16, clue: "Último: buscá un rincón secreto cerca de mamá/papá.", location: "Sorpresa final", scripture: "2 Nefi 2:8", message: "No hay carne que pueda morar en la presencia de Dios, sino por los méritos de Cristo.", artEmoji: "👑", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rubens%20-%20Resurrection.jpg" },
];

const state = {
  config: loadConfig(),
  found: loadFound(),
};

const refs = {
  codeInput: document.getElementById("code-input"),
  findBtn: document.getElementById("find-btn"),
  clueDialog: document.getElementById("clue-dialog"),
  clueCode: document.getElementById("clue-code"),
  clueMessage: document.getElementById("clue-message"),
  clueArt: document.getElementById("clue-art"),
  closeClue: document.getElementById("close-clue"),
  status: document.getElementById("status"),
  resultCard: document.getElementById("result-card"),
  resultCode: document.getElementById("result-code"),
  resultMessage: document.getElementById("result-message"),
  resultScripture: document.getElementById("result-scripture"),
  resultClue: document.getElementById("result-clue"),
  resultArt: document.getElementById("result-art"),
  album: document.getElementById("album"),
  map: document.getElementById("map"),
  progress: document.getElementById("progress"),
  progressText: document.getElementById("progress-text"),
  resetProgress: document.getElementById("reset-progress"),
  adminList: document.getElementById("admin-list"),
  saveConfig: document.getElementById("save-config"),
  resetConfig: document.getElementById("reset-config"),
  importJson: document.getElementById("import-json"),
  importBtn: document.getElementById("import-btn"),
  exportBtn: document.getElementById("export-btn"),
  body: document.body,
};

let statusTimer = null;

init();

function init() {
  bindEvents();
  renderAdmin();
  renderAll();
}

function bindEvents() {
  refs.findBtn.addEventListener("click", () => onFind());
  refs.codeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") onFind();
  });

  refs.resetProgress.addEventListener("click", () => {
    if (!confirm("¿Seguro querés reiniciar el progreso de la búsqueda?")) return;
    state.found = [];
    persistFound();
    refs.resultCard.hidden = true;
    setStatus("Progreso reiniciado. ¡A buscar de nuevo! ✨");
    renderAll();
  });

  refs.saveConfig.addEventListener("click", saveConfigFromForm);
  refs.resetConfig.addEventListener("click", resetConfig);
  refs.importBtn.addEventListener("click", importConfig);
  refs.exportBtn.addEventListener("click", exportConfig);
  refs.closeClue.addEventListener("click", closeCluePopup);
  refs.clueDialog.addEventListener("click", (event) => {
    const bounds = refs.clueDialog.getBoundingClientRect();
    const outsideClick = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outsideClick) closeCluePopup();
  });
}

function onFind(codeFromScan) {
  const isDomEvent = typeof Event !== "undefined" && codeFromScan instanceof Event;
  const raw = (!isDomEvent && codeFromScan != null) ? codeFromScan : refs.codeInput.value.trim();
  const code = extractCode(raw);

  if (!Number.isInteger(code) || code < 1 || code > 16) {
    setStatus("Ese código no sirve 😅. Probá con un número entre 1 y 16.");
    return;
  }

  const egg = state.config.find((item) => item.code === code);
  if (!egg) {
    setStatus(`No encontré configuración para el código ${code}.`);
    return;
  }

  const isNewEgg = !state.found.includes(code);

  if (isNewEgg) {
    state.found.push(code);
    state.found.sort((a, b) => a - b);
    persistFound();
  }

  renderResult(egg);
  showCluePopup(egg);
  launchEggParty(code);
  renderAll();
  if (isNewEgg) {
    setStatus(`✅ Código ${code} correcto: ${egg.message}`);
  } else {
    setStatus(`🔁 Ya habías descubierto el huevo #${code}. Igual, ¡bien ahí!`);
  }
  refs.codeInput.value = "";
}

function extractCode(rawValue) {
  const normalized = String(rawValue || "").normalize("NFKC").trim();
  if (!normalized) return Number.NaN;

  const digits = normalized.match(/\d+/u);
  if (!digits) return Number.NaN;

  return Number.parseInt(digits[0], 10);
}

function launchEggParty(code) {
  refs.body.classList.add("egg-party-mode");

  const layer = document.createElement("div");
  layer.className = "egg-party-layer";
  layer.setAttribute("aria-hidden", "true");

  const eggIcons = ["🥚", "🐣", "🐰", "🌸", "✨"];
  const totalEggs = 42;

  for (let i = 0; i < totalEggs; i += 1) {
    const egg = document.createElement("span");
    egg.className = "party-egg";
    egg.textContent = eggIcons[i % eggIcons.length];
    egg.style.left = `${Math.random() * 100}%`;
    egg.style.animationDelay = `${Math.random() * 0.6}s`;
    egg.style.animationDuration = `${1.8 + Math.random() * 1.3}s`;
    layer.appendChild(egg);
  }

  const banner = document.createElement("p");
  banner.className = "party-banner";
  banner.textContent = `¡Código ${code} desbloqueado!`;
  layer.appendChild(banner);

  refs.body.appendChild(layer);

  window.setTimeout(() => {
    layer.remove();
  }, 2600);
}

function showCluePopup(egg) {
  refs.clueCode.textContent = String(egg.code);
  refs.clueMessage.textContent = `Pista siguiente: ${egg.clue}`;
  refs.clueArt.innerHTML = "";

  if (egg.artUrl) {
    const img = document.createElement("img");
    img.src = egg.artUrl;
    img.alt = `Obra de arte del huevo ${egg.code}`;
    refs.clueArt.appendChild(img);
  } else {
    refs.clueArt.textContent = egg.artEmoji || "🥚";
  }

  if (typeof refs.clueDialog.showModal === "function") {
    refs.clueDialog.showModal();
  }
}

function closeCluePopup() {
  if (refs.clueDialog.open) refs.clueDialog.close();
}

function renderResult(egg) {
  refs.resultCard.hidden = false;
  refs.resultCode.textContent = egg.code;
  refs.resultMessage.textContent = egg.message;
  refs.resultScripture.textContent = egg.scripture;
  refs.resultClue.textContent = egg.clue;

  refs.resultArt.innerHTML = "";
  if (egg.artUrl) {
    const img = document.createElement("img");
    img.src = egg.artUrl;
    img.alt = `Premio artístico del huevo ${egg.code}`;
    refs.resultArt.appendChild(img);
  } else {
    refs.resultArt.textContent = egg.artEmoji || "🎨";
  }
}

function renderAlbum() {
  refs.album.innerHTML = "";

  for (let code = 1; code <= 16; code += 1) {
    const egg = state.config.find((item) => item.code === code);
    const found = state.found.includes(code);
    const div = document.createElement("article");
    div.className = `egg-card ${found ? "found" : ""}`;
    div.innerHTML = found
      ? `<strong>Huevo #${code}</strong><br>${egg?.artEmoji || "🎁"}<br><small>${egg?.location || ""}</small>`
      : `<strong>Huevo #${code}</strong><br>🔒<br><small>No descubierto</small>`;
    refs.album.appendChild(div);
  }
}

function renderMap() {
  refs.map.innerHTML = "";
  const locations = [...new Set(state.config.map((item) => item.location).filter(Boolean))];

  locations.forEach((location) => {
    const foundCodes = state.config
      .filter((egg) => egg.location === location && state.found.includes(egg.code))
      .map((egg) => egg.code);

    const room = document.createElement("div");
    room.className = "room";
    room.innerHTML = `<h4>${location}</h4>`;

    if (!foundCodes.length) {
      const p = document.createElement("p");
      p.className = "hint";
      p.textContent = "Aún no hay huevos descubiertos aquí.";
      room.appendChild(p);
    } else {
      foundCodes.forEach((code) => {
        const span = document.createElement("span");
        span.className = "pill";
        span.textContent = `Huevo #${code}`;
        room.appendChild(span);
      });
    }

    refs.map.appendChild(room);
  });
}

function renderProgress() {
  refs.progress.value = state.found.length;
  refs.progressText.textContent = `${state.found.length} / 16 encontrados`;
}

function renderAdmin() {
  refs.adminList.innerHTML = "";

  state.config
    .slice()
    .sort((a, b) => a.code - b.code)
    .forEach((egg) => {
      const item = document.createElement("div");
      item.className = "admin-item";
      item.innerHTML = `
        <strong>Huevo #${egg.code}</strong>
        <div class="admin-item-grid">
          <label>Pista
            <input data-field="clue" data-code="${egg.code}" value="${escapeHtml(egg.clue || "")}" />
          </label>
          <label>Ubicación
            <input data-field="location" data-code="${egg.code}" value="${escapeHtml(egg.location || "")}" />
          </label>
          <label>Referencia bíblica
            <input data-field="scripture" data-code="${egg.code}" value="${escapeHtml(egg.scripture || "")}" />
          </label>
          <label>Mensaje
            <input data-field="message" data-code="${egg.code}" value="${escapeHtml(egg.message || "")}" />
          </label>
          <label>Emoji premio
            <input data-field="artEmoji" data-code="${egg.code}" value="${escapeHtml(egg.artEmoji || "")}" />
          </label>
          <label>URL imagen premio
            <input data-field="artUrl" data-code="${egg.code}" value="${escapeHtml(egg.artUrl || "")}" placeholder="https://..." />
          </label>
        </div>
      `;
      refs.adminList.appendChild(item);
    });
}

function saveConfigFromForm() {
  const inputs = refs.adminList.querySelectorAll("input[data-code][data-field]");
  const nextConfig = deepClone(state.config);

  inputs.forEach((input) => {
    const code = Number.parseInt(input.dataset.code, 10);
    const field = input.dataset.field;
    const egg = nextConfig.find((item) => item.code === code);
    if (!egg) return;
    egg[field] = input.value.trim();
  });

  state.config = nextConfig;
  persistConfig();
  setStatus("Configuración guardada ✅");
  renderAll();
}

function resetConfig() {
  if (!confirm("¿Seguro querés restaurar la configuración por defecto?")) return;
  state.config = deepClone(DEFAULT_EGGS);
  persistConfig();
  renderAdmin();
  renderAll();
  setStatus("Configuración restaurada.");
}

function importConfig() {
  const raw = refs.importJson.value.trim();
  if (!raw) {
    setStatus("Pegá un JSON para importar.");
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length !== 16) {
      setStatus("El JSON debe ser un array de 16 objetos.");
      return;
    }

    const normalized = parsed.map((egg, index) => ({
      code: index + 1,
      clue: String(egg.clue || ""),
      location: String(egg.location || ""),
      scripture: String(egg.scripture || ""),
      message: String(egg.message || ""),
      artEmoji: String(egg.artEmoji || "🎁"),
      artUrl: String(egg.artUrl || ""),
    }));

    state.config = normalized;
    persistConfig();
    renderAdmin();
    renderAll();
    setStatus("Configuración importada correctamente ✅");
  } catch {
    setStatus("JSON inválido. Revisá el formato.");
  }
}

function exportConfig() {
  const text = JSON.stringify(state.config, null, 2);
  refs.importJson.value = text;
  navigator.clipboard?.writeText(text).catch(() => {});
  setStatus("Configuración exportada (también copiada al portapapeles si fue posible). ✨");
}

function renderAll() {
  renderAlbum();
  renderMap();
  renderProgress();
}

function loadConfig() {
  try {
    const fromStorage = localStorage.getItem(STORAGE_KEYS.config);
    if (!fromStorage) return deepClone(DEFAULT_EGGS);
    const parsed = JSON.parse(fromStorage);
    if (!Array.isArray(parsed) || parsed.length !== 16) return deepClone(DEFAULT_EGGS);
    return parsed;
  } catch {
    return deepClone(DEFAULT_EGGS);
  }
}


function deepClone(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}
function loadFound() {
  try {
    const fromStorage = localStorage.getItem(STORAGE_KEYS.found);
    if (!fromStorage) return [];
    const parsed = JSON.parse(fromStorage);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((n) => Number.isInteger(n) && n >= 1 && n <= 16);
  } catch {
    return [];
  }
}

function persistConfig() {
  localStorage.setItem(STORAGE_KEYS.config, JSON.stringify(state.config));
}

function persistFound() {
  localStorage.setItem(STORAGE_KEYS.found, JSON.stringify(state.found));
}

function setStatus(text) {
  refs.status.textContent = text;
  refs.status.classList.add("visible");

  if (statusTimer) {
    window.clearTimeout(statusTimer);
  }

  statusTimer = window.setTimeout(() => {
    refs.status.classList.remove("visible");
  }, 4200);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
