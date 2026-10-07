const baseDataByTimeframe = {
  '1m': [
    { time: '00:00', o: 1.8458, h: 1.8468, l: 1.8447, c: 1.8459 },
    { time: '00:01', o: 1.8459, h: 1.8471, l: 1.8452, c: 1.8463 },
    { time: '00:02', o: 1.8463, h: 1.8474, l: 1.8457, c: 1.8468 },
    { time: '00:03', o: 1.8468, h: 1.8483, l: 1.8462, c: 1.8475 },
    { time: '00:04', o: 1.8475, h: 1.8481, l: 1.8463, c: 1.8465 },
    { time: '00:05', o: 1.8465, h: 1.8476, l: 1.8454, c: 1.8462 },
    { time: '00:06', o: 1.8462, h: 1.8477, l: 1.8459, c: 1.8468 },
    { time: '00:07', o: 1.8468, h: 1.8479, l: 1.8458, c: 1.8469 },
    { time: '00:08', o: 1.8469, h: 1.8486, l: 1.8465, c: 1.8478 },
    { time: '00:09', o: 1.8478, h: 1.8489, l: 1.8469, c: 1.8481 },
    { time: '00:10', o: 1.8481, h: 1.8491, l: 1.8475, c: 1.8486 },
    { time: '00:11', o: 1.8486, h: 1.8494, l: 1.8478, c: 1.8482 },
    { time: '00:12', o: 1.8482, h: 1.8488, l: 1.8471, c: 1.8476 },
    { time: '00:13', o: 1.8476, h: 1.8487, l: 1.8471, c: 1.8481 },
    { time: '00:14', o: 1.8481, h: 1.849, l: 1.8475, c: 1.8484 },
    { time: '00:15', o: 1.8484, h: 1.8501, l: 1.8478, c: 1.8492 },
    { time: '00:16', o: 1.8492, h: 1.8504, l: 1.8484, c: 1.8497 },
    { time: '00:17', o: 1.8497, h: 1.8508, l: 1.849, c: 1.8503 },
    { time: '00:18', o: 1.8503, h: 1.8514, l: 1.8495, c: 1.8508 },
    { time: '00:19', o: 1.8508, h: 1.852, l: 1.8504, c: 1.8519 },
    { time: '00:20', o: 1.8519, h: 1.8532, l: 1.8511, c: 1.8526 },
    { time: '00:21', o: 1.8526, h: 1.8534, l: 1.8517, c: 1.8531 },
    { time: '00:22', o: 1.8531, h: 1.8544, l: 1.8524, c: 1.8539 },
    { time: '00:23', o: 1.8539, h: 1.855, l: 1.8534, c: 1.8542 },
    { time: '00:24', o: 1.8542, h: 1.8553, l: 1.8531, c: 1.8535 },
    { time: '00:25', o: 1.8535, h: 1.8546, l: 1.8526, c: 1.8539 },
    { time: '00:26', o: 1.8539, h: 1.8551, l: 1.8532, c: 1.8544 },
    { time: '00:27', o: 1.8544, h: 1.8557, l: 1.8539, c: 1.8552 },
    { time: '00:28', o: 1.8552, h: 1.8561, l: 1.8543, c: 1.8555 },
    { time: '00:29', o: 1.8555, h: 1.8568, l: 1.8548, c: 1.8563 },
    { time: '00:30', o: 1.8563, h: 1.857, l: 1.855, c: 1.8558 },
    { time: '00:31', o: 1.8558, h: 1.8569, l: 1.8549, c: 1.8556 },
    { time: '00:32', o: 1.8556, h: 1.8563, l: 1.8541, c: 1.8547 },
    { time: '00:33', o: 1.8547, h: 1.856, l: 1.8538, c: 1.8551 },
    { time: '00:34', o: 1.8551, h: 1.8564, l: 1.8542, c: 1.8559 },
    { time: '00:35', o: 1.8559, h: 1.8575, l: 1.8551, c: 1.8567 },
    { time: '00:36', o: 1.8567, h: 1.8578, l: 1.8558, c: 1.8561 },
    { time: '00:37', o: 1.8561, h: 1.8577, l: 1.8555, c: 1.8569 },
    { time: '00:38', o: 1.8569, h: 1.8587, l: 1.8562, c: 1.8574 },
    { time: '00:39', o: 1.8574, h: 1.859, l: 1.8566, c: 1.8581 },
    { time: '00:40', o: 1.8581, h: 1.8596, l: 1.8573, c: 1.8589 },
    { time: '00:41', o: 1.8589, h: 1.8601, l: 1.8576, c: 1.8584 },
    { time: '00:42', o: 1.8584, h: 1.8592, l: 1.8572, c: 1.8581 },
    { time: '00:43', o: 1.8581, h: 1.8593, l: 1.8568, c: 1.8577 },
    { time: '00:44', o: 1.8577, h: 1.8585, l: 1.8569, c: 1.8579 },
    { time: '00:45', o: 1.8579, h: 1.8598, l: 1.8572, c: 1.8586 },
    { time: '00:46', o: 1.8586, h: 1.8602, l: 1.8578, c: 1.8591 },
    { time: '00:47', o: 1.8591, h: 1.8606, l: 1.8584, c: 1.8598 },
    { time: '00:48', o: 1.8598, h: 1.8611, l: 1.8589, c: 1.8599 },
    { time: '00:49', o: 1.8599, h: 1.8617, l: 1.8592, c: 1.8607 },
    { time: '00:50', o: 1.8607, h: 1.8621, l: 1.8596, c: 1.8612 },
    { time: '00:51', o: 1.8612, h: 1.8628, l: 1.8604, c: 1.8618 },
    { time: '00:52', o: 1.8618, h: 1.8629, l: 1.8609, c: 1.8624 },
    { time: '00:53', o: 1.8624, h: 1.8635, l: 1.8615, c: 1.8629 },
    { time: '00:54', o: 1.8629, h: 1.8644, l: 1.8621, c: 1.8637 },
    { time: '00:55', o: 1.8637, h: 1.8648, l: 1.8629, c: 1.8642 },
    { time: '00:56', o: 1.8642, h: 1.8656, l: 1.8638, c: 1.8648 },
    { time: '00:57', o: 1.8648, h: 1.8659, l: 1.8642, c: 1.8651 },
    { time: '00:58', o: 1.8651, h: 1.8665, l: 1.8646, c: 1.8658 },
    { time: '00:59', o: 1.8658, h: 1.8672, l: 1.865, c: 1.8664 }
  ],
  '2m': [
    { time: '00:00', o: 1.8461, h: 1.8474, l: 1.8454, c: 1.8466 },
    { time: '00:02', o: 1.8466, h: 1.8482, l: 1.8458, c: 1.8472 },
    { time: '00:04', o: 1.8472, h: 1.8489, l: 1.8467, c: 1.8483 },
    { time: '00:06', o: 1.8483, h: 1.8498, l: 1.8472, c: 1.8487 },
    { time: '00:08', o: 1.8487, h: 1.8501, l: 1.8478, c: 1.8494 },
    { time: '00:10', o: 1.8494, h: 1.8511, l: 1.8485, c: 1.8506 },
    { time: '00:12', o: 1.8506, h: 1.8522, l: 1.8497, c: 1.8518 },
    { time: '00:14', o: 1.8518, h: 1.853, l: 1.8509, c: 1.8521 },
    { time: '00:16', o: 1.8521, h: 1.8536, l: 1.8517, c: 1.8531 },
    { time: '00:18', o: 1.8531, h: 1.8544, l: 1.8522, c: 1.8537 },
    { time: '00:20', o: 1.8537, h: 1.8551, l: 1.8529, c: 1.8548 },
    { time: '00:22', o: 1.8548, h: 1.856, l: 1.8538, c: 1.8552 },
    { time: '00:24', o: 1.8552, h: 1.8567, l: 1.8545, c: 1.8561 },
    { time: '00:26', o: 1.8561, h: 1.8573, l: 1.8552, c: 1.8565 },
    { time: '00:28', o: 1.8565, h: 1.8579, l: 1.8558, c: 1.8572 },
    { time: '00:30', o: 1.8572, h: 1.8586, l: 1.8566, c: 1.8579 },
    { time: '00:32', o: 1.8579, h: 1.8591, l: 1.857, c: 1.8583 },
    { time: '00:34', o: 1.8583, h: 1.8596, l: 1.8575, c: 1.8588 },
    { time: '00:36', o: 1.8588, h: 1.8604, l: 1.8579, c: 1.8597 },
    { time: '00:38', o: 1.8597, h: 1.8611, l: 1.8589, c: 1.8605 },
    { time: '00:40', o: 1.8605, h: 1.8619, l: 1.8598, c: 1.8612 },
    { time: '00:42', o: 1.8612, h: 1.8628, l: 1.8605, c: 1.8619 },
    { time: '00:44', o: 1.8619, h: 1.8633, l: 1.8612, c: 1.8626 },
    { time: '00:46', o: 1.8626, h: 1.864, l: 1.8619, c: 1.8634 },
    { time: '00:48', o: 1.8634, h: 1.8649, l: 1.8628, c: 1.8641 },
    { time: '00:50', o: 1.8641, h: 1.8657, l: 1.8634, c: 1.8648 },
    { time: '00:52', o: 1.8648, h: 1.866, l: 1.8642, c: 1.8653 },
    { time: '00:54', o: 1.8653, h: 1.8669, l: 1.8647, c: 1.8662 },
    { time: '00:56', o: 1.8662, h: 1.8675, l: 1.8655, c: 1.8669 },
    { time: '00:58', o: 1.8669, h: 1.8684, l: 1.8661, c: 1.8677 }
  ],
  '5m': [
    { time: '00:00', o: 1.8448, h: 1.8472, l: 1.8441, c: 1.8467 },
    { time: '00:05', o: 1.8467, h: 1.8494, l: 1.8459, c: 1.8482 },
    { time: '00:10', o: 1.8482, h: 1.8513, l: 1.8476, c: 1.8501 },
    { time: '00:15', o: 1.8501, h: 1.8535, l: 1.8493, c: 1.8527 },
    { time: '00:20', o: 1.8527, h: 1.8552, l: 1.8518, c: 1.8541 },
    { time: '00:25', o: 1.8541, h: 1.8568, l: 1.8538, c: 1.8562 },
    { time: '00:30', o: 1.8562, h: 1.8591, l: 1.8554, c: 1.8581 },
    { time: '00:35', o: 1.8581, h: 1.8606, l: 1.8575, c: 1.8594 },
    { time: '00:40', o: 1.8594, h: 1.8623, l: 1.8587, c: 1.8612 },
    { time: '00:45', o: 1.8612, h: 1.864, l: 1.8604, c: 1.8631 },
    { time: '00:50', o: 1.8631, h: 1.8657, l: 1.8624, c: 1.8649 },
    { time: '00:55', o: 1.8649, h: 1.8679, l: 1.8641, c: 1.8668 }
  ],
  '15m': [
    { time: '00:00', o: 1.8424, h: 1.84, l: 1.8439, c: 1.8451 },
    { time: '00:15', o: 1.8451, h: 1.8484, l: 1.8449, c: 1.8477 },
    { time: '00:30', o: 1.8477, h: 1.8512, l: 1.8471, c: 1.8503 },
    { time: '00:45', o: 1.8503, h: 1.854, l: 1.8498, c: 1.8531 },
    { time: '01:00', o: 1.8531, h: 1.8562, l: 1.8524, c: 1.8557 },
    { time: '01:15', o: 1.8557, h: 1.8593, l: 1.855, c: 1.8584 },
    { time: '01:30', o: 1.8584, h: 1.8627, l: 1.8578, c: 1.8612 }
  ]
};

const state = {
  tab: 'activated',
  timeframe: '1m',
  connection: 'offline',
  countdown: 59,
  zoom: 1,
  pan: 0,
  hoverIndex: null,
  isDragging: false,
  lastDragX: 0,
  marketConfig: {
    apiKey: '',
    wsUrl: '',
    restUrl: '',
    provider: 'none'
  }
};

const connectionStatusMap = {
  offline: 'Offline',
  reconnecting: 'Reconnecting',
  connected: 'Connected'
};

const timelineByTimeframe = {
  '1m': 60,
  '2m': 120,
  '5m': 300,
  '15m': 900
};

const countdownTarget = {
  '1m': 59,
  '2m': 119,
  '5m': 299,
  '15m': 899
};

const chartCanvas = document.getElementById('candlesChart');
const ctx = chartCanvas.getContext('2d');

function formatPrice(value) {
  return Number(value).toFixed(4);
}

function getCandles() {
  return baseDataByTimeframe[state.timeframe];
}

function formatClock(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function updateCountdown() {
  const display = document.getElementById('countdown-display');
  const current = state.countdown;
  display.textContent = formatClock(current);

  const sync = document.getElementById('last-update');
  const now = new Date();
  sync.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function getSignalMetrics(candles) {
  const closes = candles.map((candle) => candle.c);
  const lastClose = closes[closes.length - 1];
  const average = closes.reduce((sum, value) => sum + value, 0) / closes.length;

  const ema9 = closes.slice(-9).reduce((sum, value, index, arr) => {
    const multiplier = 2 / (index + 2);
    return index === 0 ? value : (value * multiplier) + (sum * (1 - multiplier));
  }, closes[closes.length - 1]);

  const ema21 = closes.slice(-21).reduce((sum, value, index, arr) => {
    const multiplier = 2 / (index + 2);
    return index === 0 ? value : (value * multiplier) + (sum * (1 - multiplier));
  }, closes[closes.length - 1]);

  const rsi = (() => {
    const gains = [];
    const losses = [];
    for (let i = 1; i < closes.length; i += 1) {
      const delta = closes[i] - closes[i - 1];
      gains.push(Math.max(delta, 0));
      losses.push(Math.abs(Math.min(delta, 0)));
    }
    const avgGain = gains.slice(-14).reduce((sum, value) => sum + value, 0) / 14;
    const avgLoss = losses.slice(-14).reduce((sum, value) => sum + value, 0) / 14;
    const relativeStrength = avgLoss === 0 ? 100 : avgGain / avgLoss;
    return 100 - (100 / (1 + relativeStrength));
  })();

  const macd = (ema9 - ema21).toFixed(4);
  const support = Math.min(...candles.map((candle) => candle.l));
  const resistance = Math.max(...candles.map((candle) => candle.h));

  const bullish = lastClose > average && ema9 > ema21 && rsi > 55;
  const bearish = lastClose < average && ema9 < ema21 && rsi < 45;

  const signal = bullish ? 'CALL' : bearish ? 'PUT' : 'NEUTRAL';
  const trend = bullish ? 'BULLISH' : bearish ? 'BEARISH' : 'SIDEWAYS';
  const confidence = Math.min(88, Math.max(58, Math.round((Math.abs(ema9 - ema21) / 0.004) * 100 + 60)));

  return {
    signal,
    trend,
    confidence,
    rsi: rsi.toFixed(1),
    ema9: ema9.toFixed(4),
    ema21: ema21.toFixed(4),
    macd,
    support: support.toFixed(4),
    resistance: resistance.toFixed(4),
    price: formatPrice(lastClose)
  };
}

function updateSignalPanel() {
  const metrics = getSignalMetrics(getCandles());
  const signalBadge = document.getElementById('signal-badge');
  const signalName = document.getElementById('signal-name');
  const signalConfidence = document.getElementById('signal-confidence');
  const signalTrend = document.getElementById('signal-trend');

  signalBadge.textContent = metrics.signal;
  signalBadge.className = `signal-badge ${metrics.signal.toLowerCase()}`;
  signalName.textContent = metrics.signal;
  signalConfidence.textContent = `${metrics.confidence}%`;
  signalTrend.textContent = metrics.trend;

  document.getElementById('status-signal').textContent = metrics.trend === 'BULLISH' ? 'Bullish bias' : metrics.trend === 'BEARISH' ? 'Bearish bias' : 'Sideways';
  document.getElementById('live-price').textContent = metrics.price;

  document.getElementById('ind-rsi').textContent = metrics.rsi;
  document.getElementById('ind-ema9').textContent = metrics.ema9;
  document.getElementById('ind-ema21').textContent = metrics.ema21;
  document.getElementById('ind-macd').textContent = `+${metrics.macd}`;
  document.getElementById('ind-support').textContent = metrics.support;
  document.getElementById('ind-resistance').textContent = metrics.resistance;
}

function setConnectionStatus(status) {
  state.connection = status;
  const element = document.getElementById('connection-status');
  element.textContent = connectionStatusMap[status] || 'Offline';
  element.className = `state-value ${status}`;
}

function renderChart() {
  const dpr = window.devicePixelRatio || 1;
  const rect = chartCanvas.getBoundingClientRect();
  chartCanvas.width = rect.width * dpr;
  chartCanvas.height = rect.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const width = rect.width;
  const height = rect.height;
  const padding = { top: 12, right: 12, bottom: 26, left: 34 };
  const candles = getCandles();
  const visibleCandles = candles.slice(Math.max(0, candles.length - 20));
  const values = visibleCandles.flatMap((candle) => [candle.h, candle.l]);
  const min = Math.min(...values) - 0.0008;
  const max = Math.max(...values) + 0.0008;
  const priceRange = max - min || 0.0001;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#08131d';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 5; i += 1) {
    const y = padding.top + (i / 4) * (height - padding.top - padding.bottom);
    ctx.strokeStyle = 'rgba(180, 193, 227, 0.12)';
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
  }

  const lastCandle = visibleCandles[visibleCandles.length - 1];
  const priceLineY = padding.top + ((max - lastCandle.c) / priceRange) * (height - padding.top - padding.bottom);

  ctx.strokeStyle = 'rgba(189, 196, 255, 0.35)';
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(padding.left, priceLineY);
  ctx.lineTo(width - padding.right, priceLineY);
  ctx.stroke();
  ctx.setLineDash([]);

  const candleWidth = Math.max(4, ((width - padding.left - padding.right) / visibleCandles.length) * 0.68 * state.zoom);
  const offset = state.pan;

  visibleCandles.forEach((candle, index) => {
    const x = padding.left + (index + 0.5) * ((width - padding.left - padding.right) / visibleCandles.length) + offset;
    const openY = padding.top + ((max - candle.o) / priceRange) * (height - padding.top - padding.bottom);
    const closeY = padding.top + ((max - candle.c) / priceRange) * (height - padding.top - padding.bottom);
    const highY = padding.top + ((max - candle.h) / priceRange) * (height - padding.top - padding.bottom);
    const lowY = padding.top + ((max - candle.l) / priceRange) * (height - padding.top - padding.bottom);
    const isBullish = candle.c >= candle.o;
    const color = isBullish ? '#2ad39e' : '#ff4d6d';

    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x, highY);
    ctx.lineTo(x, lowY);
    ctx.stroke();

    const bodyTop = Math.min(openY, closeY);
    const bodyHeight = Math.max(4, Math.abs(closeY - openY));

    ctx.fillStyle = isBullish ? '#2ad39e' : '#ff4d6d';
    ctx.fillRect(x - candleWidth / 2, bodyTop, candleWidth, bodyHeight);

    if (state.hoverIndex !== null && index === state.hoverIndex) {
      ctx.strokeStyle = 'rgba(255,255,255,0.9)';
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, height - padding.bottom);
      ctx.stroke();
    }
  });

  const priceLabel = document.getElementById('live-price');
  if (priceLabel) {
    priceLabel.textContent = formatPrice(lastCandle.c);
  }

  ctx.fillStyle = 'rgba(163, 180, 217, 0.8)';
  ctx.font = '11px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(formatPrice(max), padding.left + 4, padding.top + 6);
  ctx.fillText(formatPrice(min), padding.left + 4, height - padding.bottom + 16);

  ctx.textAlign = 'center';
  visibleCandles.forEach((candle, index) => {
    if (index % 4 === 0 || index === visibleCandles.length - 1) {
      const x = padding.left + (index + 0.5) * ((width - padding.left - padding.right) / visibleCandles.length);
      ctx.fillText(candle.time, x, height - 8);
    }
  });
}

function attachChartInteractions() {
  chartCanvas.addEventListener('mousemove', (event) => {
    const rect = chartCanvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const candles = getCandles();
    const visibleCandles = candles.slice(Math.max(0, candles.length - 20));
    const step = (rect.width - 66) / visibleCandles.length;
    const hoverIndex = Math.max(0, Math.min(visibleCandles.length - 1, Math.round((x - 34) / step)));
    state.hoverIndex = hoverIndex;
    renderChart();
  });

  chartCanvas.addEventListener('mouseleave', () => {
    state.hoverIndex = null;
    renderChart();
  });

  chartCanvas.addEventListener('wheel', (event) => {
    event.preventDefault();
    state.zoom = Math.min(1.8, Math.max(0.85, state.zoom + (event.deltaY > 0 ? -0.12 : 0.12)));
    renderChart();
  }, { passive: false });

  chartCanvas.addEventListener('pointerdown', (event) => {
    state.isDragging = true;
    state.lastDragX = event.clientX;
    chartCanvas.setPointerCapture(event.pointerId);
  });

  chartCanvas.addEventListener('pointermove', (event) => {
    if (!state.isDragging) return;
    const deltaX = event.clientX - state.lastDragX;
    state.pan += deltaX * 0.4;
    state.lastDragX = event.clientX;
    renderChart();
  });

  chartCanvas.addEventListener('pointerup', () => {
    state.isDragging = false;
  });

  chartCanvas.addEventListener('pointerleave', () => {
    state.isDragging = false;
  });
}

function updateTabs() {
  document.querySelectorAll('.tab-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === state.tab);
  });
}

function updateTimeframeButtons() {
  document.querySelectorAll('.chip-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.timeframe === state.timeframe);
  });
}

function setTimeframe(timeframe) {
  state.timeframe = timeframe;
  state.countdown = countdownTarget[timeframe] || 59;
  updateCountdown();
  updateTimeframeButtons();
  renderChart();
  updateSignalPanel();
}

function bindEvents() {
  document.querySelectorAll('.chip-button').forEach((button) => {
    button.addEventListener('click', () => setTimeframe(button.dataset.timeframe));
  });

  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => {
      state.tab = button.dataset.tab;
      updateTabs();
    });
  });

  document.querySelector('.switch input').addEventListener('change', (event) => {
    const toggleState = document.querySelector('.toggle-state');
    toggleState.textContent = event.target.checked ? 'ON' : 'OFF';
  });
}

function bootDemoData() {
  const config = window.__TRADEPULSE_CONFIG__ || {};
  state.marketConfig.apiKey = config.apiKey || '';
  state.marketConfig.wsUrl = config.wsUrl || '';
  state.marketConfig.restUrl = config.restUrl || '';

  if (config.provider && config.provider !== 'none') {
    setConnectionStatus('connected');
  } else {
    setConnectionStatus('offline');
  }

  updateCountdown();
  updateSignalPanel();
  renderChart();
}

function startCountdown() {
  setInterval(() => {
    state.countdown = state.countdown > 0 ? state.countdown - 1 : countdownTarget[state.timeframe] || 59;
    updateCountdown();
  }, 1000);
}

window.addEventListener('resize', renderChart);

bindEvents();
attachChartInteractions();
updateTabs();
updateTimeframeButtons();
bootDemoData();
startCountdown();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch((error) => {
      console.warn('Service worker registration failed:', error);
    });
  });
}
