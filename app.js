const STORAGE_KEYS = {
  config: "pascua_config_v1",
  found: "pascua_found_v1",
};

const DEFAULT_EGGS = [
  { code: 1, clue: "Buscá donde guardamos los vasos para la merienda.", location: "Cocina", scripture: "Juan 11:25", message: "Jesús dijo: yo soy la resurrección y la vida.", artEmoji: "🌸", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Noel-coypel-the-resurrection-of-christ-1700.jpg" },
  { code: 2, clue: "Revisá cerca de los almohadones del sillón grande.", location: "Living", scripture: "1 Pedro 1:3", message: "Tenemos una esperanza viva en Jesús.", artEmoji: "🐇", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Clevelandart_1926.247.jpg" },
  { code: 3, clue: "Mirá donde dejamos los zapatos al entrar.", location: "Entrada", scripture: "Mateo 28:6", message: "¡No está aquí, ha resucitado!", artEmoji: "🥚", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Carravagio%20-%20The%20Supper%20at%20Emmaus%20-%201601.jpg" },
  { code: 4, clue: "Andá al lugar donde se lava la ropa.", location: "Lavadero", scripture: "Romanos 6:9", message: "Cristo vive para siempre.", artEmoji: "🕊️", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Titian%20-%20Noli%20me%20tangere%20-%20WGA22880.jpg" },
  { code: 5, clue: "Buscá una maceta especial en el patio.", location: "Patio", scripture: "Salmo 118:24", message: "Este es el día que hizo el Señor.", artEmoji: "🌼", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pieter%20Bruegel%20the%20Elder%20-%20The%20Procession%20to%20Calvary.jpg" },
  { code: 6, clue: "Mirá cerca del lugar de los juguetes.", location: "Dormitorio niños", scripture: "Marcos 16:6", message: "No tengan miedo; Jesús resucitó.", artEmoji: "🧸", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Veronese%20-%20The%20Resurrection%20of%20Jesus%20Christ.jpg" },
  { code: 7, clue: "Revisá donde se guardan las toallas.", location: "Baño", scripture: "Juan 3:16", message: "Dios amó tanto al mundo que dio a su Hijo.", artEmoji: "💛", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Raphael%20-%20The%20Transfiguration%20-%20Google%20Art%20Project.jpg" },
  { code: 8, clue: "Fijate en el lugar donde se hacen asados.", location: "Parrillero", scripture: "Filipenses 4:4", message: "Alégrense siempre en el Señor.", artEmoji: "🔥", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/El_Greco_-_The_Resurrection.jpg" },
  { code: 9, clue: "Buscá cerca de una planta alta o árbol.", location: "Jardín", scripture: "Romanos 8:11", message: "El mismo poder que levantó a Jesús nos da vida.", artEmoji: "🌳", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Piero_della_Francesca_046.jpg" },
  { code: 10, clue: "Mirá en la biblioteca o estante de libros.", location: "Estudio", scripture: "Salmo 119:105", message: "Tu palabra es lámpara para mis pasos.", artEmoji: "📚", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Caravaggio_%28Michelangelo_Merisi%29_-_The_Incredulity_of_Saint_Thomas_-_Google_Art_Project.jpg" },
  { code: 11, clue: "Buscá donde se guardan los cubiertos.", location: "Cocina", scripture: "2 Corintios 5:17", message: "En Cristo somos nueva creación.", artEmoji: "🍽️", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rembrandt_Harmensz._van_Rijn_132.jpg" },
  { code: 12, clue: "Andá a la cama principal y mirá en una esquina.", location: "Dormitorio principal", scripture: "Efesios 2:8", message: "Por gracia somos salvos.", artEmoji: "🛏️", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Supper_at_Emmaus-Caravaggio_%281601%29.jpg" },
  { code: 13, clue: "Buscá cerca de la heladera.", location: "Cocina", scripture: "Juan 14:19", message: "Porque yo vivo, ustedes también vivirán.", artEmoji: "❄️", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Matthias_Gr%C3%BCnewald_-_The_Resurrection_-_WGA10728.jpg" },
  { code: 14, clue: "Mirá debajo de una mesa del comedor.", location: "Comedor", scripture: "Colosenses 3:1", message: "Pongan la mira en las cosas de arriba.", artEmoji: "🍽️", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Giotto%20di%20Bondone%20-%20No.%2039%20Scenes%20from%20the%20Life%20of%20Christ%20-%2010.%20Noli%20me%20Tangere%20-%20WGA09257.jpg" },
  { code: 15, clue: "Fijate en una ventana con cortina clara.", location: "Living", scripture: "Salmo 150:6", message: "Todo lo que respira alabe al Señor.", artEmoji: "🪟", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fra_Angelico_041.jpg" },
  { code: 16, clue: "Último: buscá un rincón secreto cerca de mamá/papá.", location: "Sorpresa final", scripture: "1 Corintios 15:57", message: "Gracias a Dios que nos da la victoria.", artEmoji: "👑", artUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rubens%20-%20Resurrection.jpg" },
];

const state = {
  config: loadConfig(),
  found: loadFound(),
  stream: null,
  scanInterval: null,
};

const refs = {
  codeInput: document.getElementById("code-input"),
  findBtn: document.getElementById("find-btn"),
  scanBtn: document.getElementById("scan-btn"),
  stopScan: document.getElementById("stop-scan"),
  clueDialog: document.getElementById("clue-dialog"),
  clueCode: document.getElementById("clue-code"),
  clueMessage: document.getElementById("clue-message"),
  clueArt: document.getElementById("clue-art"),
  closeClue: document.getElementById("close-clue"),
  scannerDialog: document.getElementById("scanner-dialog"),
  scannerVideo: document.getElementById("scanner-video"),
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
};

init();

function init() {
  bindEvents();
  renderAdmin();
  renderAll();
}

function bindEvents() {
  refs.findBtn.addEventListener("click", onFind);
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
  refs.scanBtn.addEventListener("click", startScan);
  refs.stopScan.addEventListener("click", stopScan);
  refs.closeClue.addEventListener("click", closeCluePopup);
  refs.clueDialog.addEventListener("click", (event) => {
    const bounds = refs.clueDialog.getBoundingClientRect();
    const outsideClick = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outsideClick) closeCluePopup();
  });
}

function onFind(codeFromScan) {
  const raw = codeFromScan || refs.codeInput.value.trim();
  const code = Number.parseInt(raw, 10);

  if (!Number.isInteger(code) || code < 1 || code > 16) {
    setStatus("Ingresá un código válido entre 1 y 16.");
    return;
  }

  const egg = state.config.find((item) => item.code === code);
  if (!egg) {
    setStatus(`No encontré configuración para el código ${code}.`);
    return;
  }

  if (!state.found.includes(code)) {
    state.found.push(code);
    state.found.sort((a, b) => a - b);
    persistFound();
  }

  renderResult(egg);
  showCluePopup(egg);
  renderAll();
  setStatus(`¡Excelente! Descubriste el huevo #${code}.`);
  refs.codeInput.value = "";
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
  const nextConfig = structuredClone(state.config);

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
  state.config = structuredClone(DEFAULT_EGGS);
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
    if (!fromStorage) return structuredClone(DEFAULT_EGGS);
    const parsed = JSON.parse(fromStorage);
    if (!Array.isArray(parsed) || parsed.length !== 16) return structuredClone(DEFAULT_EGGS);
    return parsed;
  } catch {
    return structuredClone(DEFAULT_EGGS);
  }
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
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function startScan() {
  if (!("BarcodeDetector" in window) || !navigator.mediaDevices?.getUserMedia) {
    setStatus("Tu navegador no soporta escaneo QR directo. Podés ingresar el código manualmente.");
    return;
  }

  try {
    state.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    refs.scannerVideo.srcObject = state.stream;
    refs.scannerDialog.showModal();

    const detector = new BarcodeDetector({ formats: ["qr_code"] });
    state.scanInterval = setInterval(async () => {
      if (!refs.scannerVideo.videoWidth) return;
      try {
        const results = await detector.detect(refs.scannerVideo);
        if (!results.length) return;
        const value = results[0].rawValue?.trim();
        if (!value) return;

        const code = Number.parseInt(value, 10);
        if (Number.isInteger(code) && code >= 1 && code <= 16) {
          stopScan();
          onFind(String(code));
        }
      } catch {
        // seguimos intentando
      }
    }, 400);
  } catch {
    setStatus("No pude acceder a la cámara. Revisá permisos del navegador.");
    stopScan();
  }
}

function stopScan() {
  if (state.scanInterval) {
    clearInterval(state.scanInterval);
    state.scanInterval = null;
  }

  if (state.stream) {
    state.stream.getTracks().forEach((track) => track.stop());
    state.stream = null;
  }

  refs.scannerVideo.srcObject = null;

  if (refs.scannerDialog.open) {
    refs.scannerDialog.close();
  }
}
