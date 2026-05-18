// AI-COLLECTOR · v2 · terminal-style interactions

const FORM_ENDPOINT = '/api/contact'; // Cloudflare Worker — Phase 8

// === Header clock (MSK)
(() => {
  const el = document.getElementById('time-text');
  if (!el) return;

  const tick = () => {
    const d = new Date();
    // approximate MSK = UTC+3
    const msk = new Date(d.getTime() + (d.getTimezoneOffset() + 180) * 60000);
    const hh = String(msk.getHours()).padStart(2, '0');
    const mm = String(msk.getMinutes()).padStart(2, '0');
    const ss = String(msk.getSeconds()).padStart(2, '0');
    el.textContent = `SYS / ${hh}:${mm}:${ss} MSK`;
  };
  tick();
  setInterval(tick, 1000);
})();

// === Hero live counter — animate from 0 to target on load, then small drift
(() => {
  const el = document.getElementById('live-calls');
  const lastTick = document.getElementById('last-tick');
  if (!el) return;

  const target = 1247;
  const duration = 1200;
  const start = performance.now();

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const animate = (now) => {
    const elapsed = Math.min((now - start) / duration, 1);
    const v = Math.floor(easeOut(elapsed) * target);
    el.textContent = v.toLocaleString('ru-RU');
    if (elapsed < 1) requestAnimationFrame(animate);
    else el.textContent = target.toLocaleString('ru-RU');
  };
  requestAnimationFrame(animate);

  // After load: drift +1 every 8-15s; refresh tick timestamp
  let n = target;
  setInterval(() => {
    if (document.hidden) return;
    n += Math.random() > 0.5 ? 1 : 0;
    el.textContent = n.toLocaleString('ru-RU');

    if (lastTick) {
      const d = new Date();
      const msk = new Date(d.getTime() + (d.getTimezoneOffset() + 180) * 60000);
      const hh = String(msk.getHours()).padStart(2, '0');
      const mm = String(msk.getMinutes()).padStart(2, '0');
      const ss = String(msk.getSeconds()).padStart(2, '0');
      lastTick.textContent = `${hh}:${mm}:${ss} MSK`;
    }
  }, 8000 + Math.random() * 7000);
})();

// === Contact form — Telegram deeplink (no backend required for MVP)
const TG_BOT = 'aicollector_demo'; // Phase 8: replace with real bot username

(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const success = form.querySelector('.form-msg.success');
  const errEl = form.querySelector('.form-msg.error');
  const submit = form.querySelector('.prompt-submit');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    success.classList.remove('show');
    errEl.classList.remove('show');

    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    if (!data.name || !data.company || !data.contact) {
      errEl.textContent = '✗ Заполните имя, компанию и контакт.';
      errEl.classList.add('show');
      return;
    }

    // Build a pre-filled message for Telegram
    const message = [
      `Заявка с AI-Collector:`,
      ``,
      `Имя: ${data.name}`,
      `Компания: ${data.company}`,
      `Контакт: ${data.contact}`,
      data.telegram ? `Telegram: ${data.telegram}` : '',
      data.note ? `\nЗапрос: ${data.note}` : '',
    ].filter(Boolean).join('\n');

    // Open Telegram with pre-filled message
    const url = `https://t.me/${TG_BOT}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');

    success.textContent = '✓ Открыли Telegram с вашей заявкой. Отправьте сообщение чтобы завершить.';
    success.classList.add('show');
    submit.textContent = 'Отправлено · открыть Telegram ещё раз';
    submit.disabled = false;
  });
})();

// === Smooth scroll + focus shift for accessibility
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});
