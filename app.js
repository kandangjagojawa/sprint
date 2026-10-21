// ==========================================
// APLIKASI QUIZ HANACARAKA (PEERJS MULTIPLAYER)
// ==========================================

// Database Soal
const QUESTIONS_DATABASE = {
  level1: [
    { q: "Manakah aksara 'Ha' (ꦲ)?", options: ["ꦲ", "ꦤ", "ꦕ", "ꦫ"], answer: 0 },
    { q: "Manakah aksara 'Na' (ꦤ)?", options: ["ꦲ", "ꦤ", "ꦕ", "ꦫ"], answer: 1 },
    { q: "Manakah aksara 'Ca' (ꦕ)?", options: ["ꦲ", "ꦤ", "ꦕ", "ꦫ"], answer: 2 },
    { q: "Manakah aksara 'Ra' (ꦫ)?", options: ["ꦲ", "ꦤ", "ꦕ", "ꦫ"], answer: 3 },
    { q: "Manakah aksara 'Ka' (ꦏ)?", options: ["ꦏ", "ꦝ", "ꦠ", "ꦭ"], answer: 0 }
  ],
  level2: [
    { q: "Manakah aksara 'Da' (ꦢ)?", options: ["ꦢ", "ꦠ", "ꦱ", "ꦮ"], answer: 0 },
    { q: "Manakah aksara 'Ta' (ꦠ)?", options: ["ꦢ", "ꦠ", "ꦱ", "ꦮ"], answer: 1 },
    { q: "Manakah aksara 'Sa' (ꦱ)?", options: ["ꦢ", "ꦠ", "ꦱ", "ꦮ"], answer: 2 },
    { q: "Manakah aksara 'Wa' (ꦮ)?", options: ["ꦢ", "ꦠ", "ꦱ", "ꦮ"], answer: 3 },
    { q: "Manakah aksara 'La' (ꦭ)?", options: ["ꦏ", "ꦝ", "ꦠ", "ꦭ"], answer: 3 }
  ]
};

// State Aplikasi
let hostState = {
  code: "",
  peer: null,
  conns: {},
  players: {},
  questions: [],
  qIndex: 0,
  timer: null,
  timeLeft: 0
};

let playerState = {
  name: "",
  code: "",
  conn: null,
  totalPoints: 0,
  streak: 0,
  bestStreak: 0,
  hasAnswered: false
};

window.conns = {};

// Fungsi Pembersihan State & Koneksi
function cleanupAll() {
  if (hostState.timer) clearInterval(hostState.timer);
  if (hostState.peer) {
    try { hostState.peer.destroy(); } catch (e) {}
  }
  if (window.peer) {
    try { window.peer.destroy(); } catch (e) {}
  }
  Object.values(window.conns).forEach(conn => {
    try { conn.close(); } catch (e) {}
  });
  window.conns = {};
  
  hostState = { code: "", peer: null, conns: {}, players: {}, questions: [], qIndex: 0, timer: null, timeLeft: 0 };
  playerState = { name: "", code: "", conn: null, totalPoints: 0, streak: 0, bestStreak: 0, hasAnswered: false };
}

// Generasi Kode Ruang
function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// ------------------------------------------
// LOGIKA HOST (GURU)
// ------------------------------------------
function initHost() {
  cleanupAll();
  const code = generateRoomCode();
  hostState.code = code;
  const peerId = "hanacaraka-" + code.toLowerCase();

  const peer = new Peer(peerId, { debug: 0 });
  hostState.peer = peer;

  const hostCodeEl = document.getElementById("hostCode");
  const hostFullIdEl = document.getElementById("hostFullId");
  if (hostCodeEl) hostCodeEl.textContent = code;
  if (hostFullIdEl) hostFullIdEl.textContent = peerId;

  peer.on("open", (id) => {
    console.log("Host Peer siap dengan ID:", id);
  });

  peer.on("connection", (conn) => {
    conn.on("open", () => {
      console.log("Pemain terhubung:", conn.peer);
    });

    conn.on("data", (data) => handleHostData(conn, data));

    conn.on("close", () => {
      delete hostState.conns[conn.peer];
      delete hostState.players[conn.peer];
      updateHostLobby();
    });
  });

  peer.on("error", (err) => {
    console.error("Peer Error:", err);
    if (err.type === "unavailable-id") {
      initHost();
    }
  });
}

function handleHostData(conn, data) {
  if (data.type === "join") {
    hostState.conns[conn.peer] = conn;
    hostState.players[conn.peer] = {
      id: conn.peer,
      name: data.name,
      totalPoints: 0,
      streak: 0,
      history: [],
      lastAnswer: null
    };
    updateHostLobby();
    conn.send({ type: "joined", success: true });
  } else if (data.type === "submitAnswer") {
    const player = hostState.players[conn.peer];
    if (player && !player.lastAnswer) {
      const q = hostState.questions[hostState.qIndex];
      const isCorrect = data.answerIndex === q.answer;
      const timeTaken = (15000 - hostState.timeLeft) / 1000;
      const points = isCorrect ? Math.max(10, Math.round(100 - (timeTaken * 5))) : 0;

      if (isCorrect) {
        player.streak += 1;
        player.totalPoints += points + (player.streak * 5);
      } else {
        player.streak = 0;
      }

      player.lastAnswer = {
        correct: isCorrect,
        points: points,
        time: timeTaken,
        attempts: data.attempts || 1
      };

      player.history.push(player.lastAnswer);
      updateHostTrack();

      const totalAnswered = Object.values(hostState.players).filter(p => p.lastAnswer !== null).length;
      if (totalAnswered >= Object.keys(hostState.players).length) {
        finishHostQuestion();
      }
    }
  }
}

function updateHostLobby() {
  const listEl = document.getElementById("hostLobbyList");
  if (!listEl) return;
  const playersArr = Object.values(hostState.players);
  if (playersArr.length === 0) {
    listEl.innerHTML = '<div style="color:#5D403760">Menunggu siswa bergabung...</div>';
  } else {
    listEl.innerHTML = playersArr.map(p => `<div class="pill">${p.name}</div>`).join("");
  }
  const startBtn = document.getElementById("btnStartGame");
  if (startBtn) startBtn.disabled = playersArr.length === 0;
}

function startHostGame(levelKey) {
  hostState.questions = QUESTIONS_DATABASE[levelKey] || QUESTIONS_DATABASE.level1;
  hostState.qIndex = 0;

  document.getElementById("hostLevelCard").style.display = "none";
  document.getElementById("hostLobbyList").style.display = "none";
  document.getElementById("hostGame").style.display = "block";
  document.getElementById("hostTrack").style.display = "block";

  broadcastQuestion();
}

function broadcastQuestion() {
  const q = hostState.questions[hostState.qIndex];
  Object.values(hostState.players).forEach(p => { p.lastAnswer = null; });

  document.getElementById("hostPodium").style.display = "none";
  document.getElementById("hostQuestionText").textContent = `Soal ${hostState.qIndex + 1}/${hostState.questions.length}: ${q.q}`;

  Object.values(hostState.conns).forEach(conn => {
    conn.send({
      type: "question",
      qIndex: hostState.qIndex,
      total: hostState.questions.length,
      question: q.q,
      options: q.options
    });
  });

  updateHostTrack();
  startHostTimer();
}

function startHostTimer() {
  if (hostState.timer) clearInterval(hostState.timer);
  hostState.timeLeft = 15000;
  
  const timerEl = document.getElementById("hostTimer");
  if (timerEl) timerEl.textContent = "15";

  hostState.timer = setInterval(() => {
    hostState.timeLeft -= 100;
    if (timerEl) timerEl.textContent = Math.ceil(hostState.timeLeft / 1000);

    if (hostState.timeLeft <= 0) {
      clearInterval(hostState.timer);
      finishHostQuestion();
    }
  }, 100);
}

function updateHostTrack() {
  const trackEl = document.getElementById("hostTrackList");
  if (!trackEl) return;

  const players = Object.values(hostState.players);
  trackEl.innerHTML = players.map(p => {
    const status = p.lastAnswer ? (p.lastAnswer.correct ? "✅ Jawaban Terkirim" : "❌ Jawaban Terkirim") : "⏳ Menjawab...";
    return `<div class="studentRow"><div style="font-weight:800;flex:1">${p.name}</div><div>${status}</div></div>`;
  }).join("");
}

function finishHostQuestion() {
  if (hostState.timer) clearInterval(hostState.timer);

  const sorted = Object.values(hostState.players).map(p => ({
    name: p.name,
    correct: p.lastAnswer ? p.lastAnswer.correct : false,
    points: p.lastAnswer ? p.lastAnswer.points : 0,
    time: p.lastAnswer ? p.lastAnswer.time : 0,
    attempts: p.lastAnswer ? p.lastAnswer.attempts : 0
  })).sort((a, b) => b.points - a.points);

  const podiumEl = document.getElementById("hostPodium");
  podiumEl.style.display = "block";
  podiumEl.innerHTML = `
    <h3 style="margin-bottom:12px">Hasil Soal ${hostState.qIndex + 1}</h3>
    ${sorted.length === 0 ? '<div style="color:#5D403760;font-weight:700">Tidak ada data</div>' : sorted.slice(0, 5).map((p, i) => {
      return `<div class="studentRow" style="${i === 0 ? 'border:2px solid #D4A017;background:#FFFBEB' : ''}">
        <div style="font-weight:800;width:24px">${i + 1}</div>
        <div style="flex:1">
          <div style="font-weight:800">${p.name}</div>
          <div style="font-size:11px;opacity:.7">${p.correct ? '✅ Benar' : '⚠️ Salah'} ${p.points \vert{}\vert{} 0} poin • ${(p.time || 0).toFixed(1)}s</div>
        </div>
        <div class="pill" style="background:${i === 0 ? '#D4A017' : '#FFF8E7'};color:#5D4037">${p.points || 0}</div>
      </div>`;
    }).join("")}
    <button id="btnNextQuestion" class="btn btn-primary" style="margin-top:12px;width:100%">
      ${hostState.qIndex + 1 < hostState.questions.length ? 'SOAL BERIKUTNYA ➡️' : 'LIHAT KLASEMEN AKHIR 🏆'}
    </button>
  `;

  document.getElementById("btnNextQuestion").onclick = () => {
    if (hostState.qIndex + 1 < hostState.questions.length) {
      hostState.qIndex += 1;
      broadcastQuestion();
    } else {
      showFinalStandings();
    }
  };
}

function showFinalStandings() {
  document.getElementById("hostGame").style.display = "none";
  document.getElementById("hostTrack").style.display = "none";
  document.getElementById("hostPodium").style.display = "none";
  
  const finalEl = document.getElementById("hostFinal");
  finalEl.style.display = "block";

  const finalSorted = Object.values(hostState.players).sort((a, b) => b.totalPoints - a.totalPoints);

  finalEl.innerHTML = `
    <h2>🏆 Klasemen Akhir</h2>
    ${finalSorted.map((p, i) => `
      <div class="studentRow" style="${i < 3 ? 'background:#FFFBEB;border:2px solid #D4A017' : ''}">
        <div style="width:28px;height:28px;border-radius:50%;background:${i === 0 ? '#D4A017' : i === 1 ? '#9E9E9E' : i === 2 ? '#8D6E63' : '#EEE'};color:#fff;display:grid;place-items:center;font-weight:800;font-size:12px">${i + 1}</div>
        <div style="flex:1">
          <div style="font-weight:800">${p.name}</div>
          <div style="font-size:11px;opacity:.7">Total ${p.totalPoints || 0} poin • ${(p.history \vert{}\vert{} []).filter(h => h.correct).length} benar dari${hostState.questions.length}</div>
        </div>
        <div style="font-weight:800">${p.totalPoints || 0}</div>
      </div>
    `).join("")}
    <div style="display:flex;gap:8px;margin-top:12px">
      <button id="hostRestart" class="btn btn-primary btn-big" style="flex:1">ULANG LEVEL SAMA</button>
      <button id="hostBackToLevel" class="btn btn-ghost" style="flex:1">GANTI LEVEL</button>
    </div>
  `;

  document.getElementById("hostRestart").onclick = () => {
    hostState.qIndex = 0;
    Object.values(hostState.players).forEach(p => { p.totalPoints = 0; p.history = []; p.streak = 0; });
    document.getElementById("hostFinal").style.display = "none";
    document.getElementById("hostGame").style.display = "block";
    document.getElementById("hostTrack").style.display = "block";
    broadcastQuestion();
  };

  document.getElementById("hostBackToLevel").onclick = () => {
    document.getElementById("hostLevelCard").style.display = "block";
    document.getElementById("hostLobbyList").style.display = "block";
    document.getElementById("hostGame").style.display = "none";
    document.getElementById("hostTrack").style.display = "none";
    document.getElementById("hostPodium").style.display = "none";
    document.getElementById("hostFinal").style.display = "none";
  };
}

// ------------------------------------------
// LOGIKA SISWA (PLAYER)
// ------------------------------------------
async function joinAsPlayer() {
  const rawCode = document.getElementById("joinCode").value.trim().toUpperCase();
  const code = rawCode.replace(/[^A-Z0-9]/g, '');
  const name = document.getElementById("joinName").value.trim() || "Siswa";
  const errBox = document.getElementById("joinErr");

  if (code.length !== 4) {
    errBox.style.display = "block";
    errBox.textContent = "Kode harus 4 huruf/angka";
    return;
  }
  if (name.length < 2) {
    errBox.style.display = "block";
    errBox.textContent = "Nama minimal 2 huruf";
    return;
  }

  errBox.style.display = "none";
  cleanupAll();

  playerState.name = name;
  playerState.code = code;
  playerState.totalPoints = 0;
  playerState.streak = 0;
  playerState.bestStreak = 0;

  const fixedId = "hanacaraka-" + code.toLowerCase();
  const myPeer = new Peer(null, { debug: 0 });
  window.peer = myPeer;

  const joinBtn = document.getElementById("btnJoin");
  if (joinBtn) {
    joinBtn.textContent = "MENGHUBUNGKAN...";
    joinBtn.disabled = true;
  }

  myPeer.on("open", () => {
    let attempted = false;

    function tryConnect(targetId) {
      const conn = myPeer.connect(targetId, { reliable: true });
      window.conns[targetId] = conn;

      let timeout = setTimeout(() => {
        try { conn.close(); } catch (e) {}
        if (!attempted) attemptFullScan();
      }, 3500);

      conn.on("open", () => {
        clearTimeout(timeout);
        playerState.conn = conn;
        conn.send({ type: "join", name: name });

        document.getElementById("playerLobby").style.display = "block";
        document.getElementById("playerLobbyName").textContent = name;
        if (joinBtn) {
          joinBtn.textContent = "GABUNG 🚀";
          joinBtn.disabled = false;
        }
        document.getElementById("playerJoinCard").style.display = "none";
      });

      conn.on("data", (d) => handlePlayerData(d));
    }

    function attemptFullScan() {
      if (attempted) return;
      attempted = true;
      errBox.style.display = "block";
      errBox.innerHTML = 'Kode 4 huruf tidak langsung ketemu. Minta guru <b>Peer ID lengkap</b> dari layar host (contoh: hanacaraka-abcd) dan tempel di bawah.<br><br><input id="fullIdInput" placeholder="Tempel Peer ID lengkap" style="width:100%;padding:10px;border-radius:10px;border:1.5px solid #5D403720;margin-top:8px"/><button id="tryFull" class="btn btn-primary" style="margin-top:8px;width:100%">COBA LAGI DENGAN PEER ID</button>';

      const tryBtn = document.getElementById("tryFull");
      if (tryBtn) {
        tryBtn.onclick = () => {
          const fid = document.getElementById("fullIdInput").value.trim();
          if (fid) tryConnect(fid);
        };
      }
      if (joinBtn) {
        joinBtn.textContent = "GABUNG 🚀";
        joinBtn.disabled = false;
      }
    }

    tryConnect(fixedId);
  });

  myPeer.on("error", (e) => {
    errBox.style.display = "block";
    errBox.textContent = "Gagal konek: " + e.type + " " + (e.message || "");
    if (joinBtn) {
      joinBtn.textContent = "GABUNG 🚀";
      joinBtn.disabled = false;
    }
  });
}

function handlePlayerData(data) {
  if (data.type === "question") {
    playerState.hasAnswered = false;
    document.getElementById("playerLobby").style.display = "none";
    document.getElementById("playerGame").style.display = "block";
    document.getElementById("playerResult").style.display = "none";

    document.getElementById("playerQTitle").textContent = `Soal ${data.qIndex + 1}/${data.total}`;
    document.getElementById("playerQuestion").textContent = data.question;

    const optContainer = document.getElementById("playerOptions");
    optContainer.innerHTML = data.options.map((opt, idx) => `
      <button class="btn btn-option" onclick="submitPlayerAnswer(${idx})">${opt}</button>
    `).join("");
  }
}

window.submitPlayerAnswer = function(optIdx) {
  if (playerState.hasAnswered) return;
  playerState.hasAnswered = true;

  if (playerState.conn) {
    playerState.conn.send({
      type: "submitAnswer",
      answerIndex: optIdx,
      attempts: 1
    });
  }

  document.getElementById("playerOptions").innerHTML = `<div style="text-align:center;padding:20px;font-weight:700">Jawaban terkirim! Menunggu guru... ⏳</div>`;
};

// ------------------------------------------
// INISIALISASI EVENT LISTENERS
// ------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const btnHost = document.getElementById("btnHostMode");
  const btnJoin = document.getElementById("btnJoin");
  const btnStart = document.getElementById("btnStartGame");

  if (btnHost) {
    btnHost.onclick = () => {
      document.getElementById("roleSelectCard").style.display = "none";
      document.getElementById("hostSection").style.display = "block";
      initHost();
    };
  }

  if (btnJoin) {
    btnJoin.onclick = () => joinAsPlayer();
  }

  if (btnStart) {
    btnStart.onclick = () => {
      const levelSelect = document.getElementById("hostLevelSelect");
      const selectedLevel = levelSelect ? levelSelect.value : "level1";
      startHostGame(selectedLevel);
    };
  }
});
