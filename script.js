// Vars
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
const keys = document.querySelectorAll('.key');

// --Listeners --//
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// -- Handlers -- //
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);

  if (!noteAudio) {
    return;
  }

  noteAudio.currentTime = 0;
  noteAudio.play();

  key.classList.add('active');

  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  }, { once: true });
}

function playNoteByName(noteName) {
  const key = document.querySelector(`.key[data-note="${noteName}"]`);

  if (key) {
    playNote(key);
  }
}

document.addEventListener('keydown', (e) => {
  if (e.repeat) {
    return;
  }

  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});

function playMelody() {
  const melody = ['E', 'F', 'G', 'F', 'E', 'D', 'E', 'E', 'E', 'F', 'F', 'D', 'E', 'E', 'E', 'F', 'F', 'D', 'E', 'E'];
  melody.forEach((note, index) => {
    setTimeout(() => {
      const key = document.querySelector(`.key[data-note="${note}"]`);
      if (key) {
        playNote(key);
      }
    }, index * 300);
  });
}

function playRhythm(pattern, beat = 350) {
  pattern.forEach((note, index) => {
    setTimeout(() => {
      playNoteByName(note);
    }, index * beat);
  });
}

function playHickoryDickoryDock() {
  const melody = [
    { note: 'E', time: 0 },
    { note: 'F', time: 500 },
    { note: 'G', time: 1000 },
    { note: 'F', time: 1500 },
    { note: 'E', time: 2000 },
    { note: 'D', time: 2500 },
    { note: 'E', time: 3000 },
    { note: 'C', time: 4000 },
    { note: 'E', time: 4500 },
    { note: 'G', time: 5000 },
    { note: 'F', time: 5500 },
    { note: 'D', time: 6000 },
    { note: 'E', time: 6500 },
    { note: 'G', time: 7500 },
    { note: 'C', time: 8000 },
    { note: 'E', time: 8500 },
    { note: 'E', time: 9000 },
    { note: 'G', time: 9500 },
    { note: 'C', time: 10500 },
    { note: 'F', time: 11000 },
    { note: 'F', time: 11500},
    { note: 'A', time: 12000 },
    { note: 'G', time: 13500 },
    { note: 'A', time: 14000 },
    { note: 'G', time: 14500 },
    { note: 'F', time: 15000 },
    { note: 'E', time: 15500 },
    { note: 'D', time: 16000 },
    { note: 'C', time: 16500 },
  ];

  melody.forEach((entry) => {
    setTimeout(() => {
      playNoteByName(entry.note);
    }, entry.time);
  });
}

document.getElementById('play-melody')?.addEventListener('click', playHickoryDickoryDock);

