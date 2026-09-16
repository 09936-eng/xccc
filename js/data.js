// ═══════════════════════════════════════
// DATA — Song & Playlist definitions
// ═══════════════════════════════════════

const SONGS = [

  // ── เพลงเดิม (SoundHelix เดโม) ──
  {
    id: 1,
    title: "SoundHelix Song 1",
    artist: "SoundHelix",
    album: "Demo",
    cover: "",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },

  // ── 🆕 เพิ่มเพลงคืนจันทร์ (LOSO) ที่นี้ ──
  {
    id: 2,
    title: "คืนจันทร์",
    artist: "LOSO",
    album: "คืนจันทร์ (ซิงเกิล)",
    year: 2024,
    label: "GMM GRAMMY OFFICIAL",
    cover: "",
    // ⬇️ ตรงนี้ = ลิงก์เพลง (เลือก 1 ใน 2 แบบ)

    // แบบ A: มีไฟล์ MP3 ของคุณเอง → ชี้ไปไฟล์
    // src: "music/kun-chan.mp3"

    // แบบ B: ยังไม่มีไฟล์ → ใช้เพลงเดโมแทนชั่วคราว
    src: "https://www.soundhelix.com/examples/mp3/Song-2.mp3"
  }

];

const PLAYLISTS = [
  { id: "pl1", name: "ชิลล์ๆ เช้าวันงาน", emoji: "☕", songs: },
  { id: "pl2", name: "ออกกำลังกาย",      emoji: "🏋️", songs: },
  { id: "pl3", name: "ทำงานอย่างมีสมาธิ",  emoji: "🎯", songs: },
  { id: "pl4", name: "ป้ายรถยนต์",       emoji: "🚗", songs: },
];

const GENRES = [
  { name: "Pop",       hue: 320, emoji: "🎤" },
  { name: "Rock",      hue: 10,  emoji: "🎸" },
  { name: "Electronic",hue: 200, emoji: "🎹" },
  { name: "Jazz",      hue: 45,  emoji: "🎷" },
  { name: "Hip-Hop",   hue: 260, emoji: "🎧" },
  { name: "Classical", hue: 170, emoji: "🎻" },
  { name: "Lo-fi",     hue: 120, emoji: "🌙" },
  { name: "R&B",       hue: 280, emoji: "💜" },
];
