// city -> IANA time zone mapping
const cityTimeZones = {
  newyork: 'America/New_York',
  shanghai: 'Asia/Shanghai',
  tokyo: 'Asia/Tokyo',
  paris: 'Europe/Paris',
  sydney: 'Australia/Sydney'
};

function updateTime() {
  const select = document.getElementById('city');
  const city = select ? select.value : 'shanghai';
  const tz = cityTimeZones[city] || 'Asia/Shanghai';

  const now = new Date();
  const options = {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  const timeString = now.toLocaleString('en-US', options).replace(',', '');
  const el = document.getElementById('timeshow');
  if (el) el.textContent = timeString;

  // update label
  const locinfo = document.querySelector('.locinfo');
  if (locinfo) {
    const name = select ? select.options[select.selectedIndex].text : '';
    locinfo.textContent = `Current city: ${name}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 1000);

  const select = document.getElementById('city');
  if (select) {
    select.addEventListener('change', updateTime);
  }
});

function loadRandomImage() {
  const timestamp = new Date().getTime();
  const imageUrl = `https://picsum.photos/800/600?random=${timestamp}`;
  document.getElementById('random-image').src = imageUrl;
}

// ページ読み込み時に実行
loadRandomImage();

async function loadRandomQuote() {
  const quoteTextEl = document.getElementById('quote-text');
  const quoteAuthorEl = document.getElementById('quote-author');
  try {
    // ローカルに置いた quotes.json を読み込む
    const res = await axios.get('./quotes.json');
    const list = res.data;
    if (Array.isArray(list) && list.length > 0) {
      const pick = list[Math.floor(Math.random() * list.length)];
      quoteTextEl.textContent = `“${pick.q}”`;
      quoteAuthorEl.textContent = pick.a ? `— ${pick.a}` : '';
    } else {
      throw new Error('quotes.json が不正');
    }
  } catch (err) {
    console.warn('quote fetch failed', err);
    // フォールバック
    const fallback = [
      {c: '努力は必ず報われる', a: 'Author不明'},
      {c: '今日できることを明日に延ばすな', a: 'ベンジャミン・フランクリン'},
      {c: '失敗は成功のもと', a: '日本のことわざ'}
    ];
    const pick = fallback[Math.floor(Math.random() * fallback.length)];
    quoteTextEl.textContent = `“${pick.c}”`;
    quoteAuthorEl.textContent = `— ${pick.a}`;
  }
}

// ページ読み込み時に名言を取得して表示
document.addEventListener('DOMContentLoaded', () => {
  loadRandomQuote();
});