export function renderTicker(data) {
  const tickerItemsHtml = data.ticker.map(item => `
    <div class="ticker-item">
      <span class="ticker-dot"></span>
      <span>${item}</span>
    </div>
  `).join('');

  return `
    <div class="ticker-wrap">
      <div class="ticker-move">
        ${tickerItemsHtml}
        ${tickerItemsHtml}
      </div>
    </div>
  `;
}
