export function Hero() {
  const section = document.createElement('section');
  section.className = 'container fade-in dark-section';
  section.style.minHeight = '80vh';
  section.style.display = 'grid';
  section.style.gridTemplateColumns = '1fr 1fr';
  section.style.alignItems = 'center';
  section.style.gap = '4rem';
  section.style.paddingTop = '4rem';

  // Left Content
  const content = document.createElement('div');
  content.innerHTML = `
    <h1 style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem;">
      The Public Internet is <span style="color: var(--accent-red)">Broken</span>.<br>
      We <span class="text-green">Fixed It</span>.
    </h1>
    <p style="font-size: 1.25rem; color: var(--text-muted); margin-bottom: 2.5rem; max-width: 500px;">
      Experience the first consumer network powered by a Fortune 500 Enterprise Backbone. Low latency, zero-trust security, and US-based reliability.
    </p>
    <div style="display: flex; gap: 1rem;">
      <button class="btn btn-primary">Get Early Access</button>
    </div>
  `;

  // Right Visual (SVG Animation)
  const visual = document.createElement('div');
  visual.className = 'glass-panel';
  visual.style.height = '400px';
  visual.style.position = 'relative';
  visual.style.overflow = 'hidden';
  visual.style.display = 'flex';
  visual.style.alignItems = 'center';
  visual.style.justifyContent = 'center';

  // Custom SVG visualization
  visual.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:var(--accent-red);stop-opacity:1" />
          <stop offset="100%" style="stop-color:var(--accent-red);stop-opacity:0" />
        </linearGradient>
        <filter id="glow-green">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Grid Background -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />

      <!-- Labels -->
      <text x="20" y="30" fill="var(--accent-red)" font-family="var(--font-header)" font-size="12">PUBLIC INTERNET</text>
      <text x="20" y="230" fill="var(--accent-green)" font-family="var(--font-header)" font-size="12">BETTERTHANVPN</text>

      <!-- Slow Path (Jagged Red) -->
      <path d="M 50,80 L 100,120 L 150,50 L 200,100 L 250,60 L 300,110 L 350,70 L 450,80" 
            stroke="var(--accent-red)" stroke-width="2" fill="none" stroke-opacity="0.6">
        <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" duration="5s" repeatCount="indefinite" />
      </path>
      
      <!-- Packet on Slow Path -->
      <circle r="4" fill="#fff">
        <animateMotion path="M 50,80 L 100,120 L 150,50 L 200,100 L 250,60 L 300,110 L 350,70 L 450,80" dur="4s" repeatCount="indefinite" calcMode="linear" />
      </circle>

      <!-- Fast Path (Straight Green) -->
      <line x1="50" y1="280" x2="450" y2="280" stroke="var(--accent-green)" stroke-width="3" filter="url(#glow-green)" />
      
      <!-- Packet on Fast Path -->
      <circle r="4" fill="#fff" filter="url(#glow-green)">
        <animateMotion path="M 50,280 L 450,280" dur="1.5s" repeatCount="indefinite" calcMode="linear" />
      </circle>

      <!-- Comparison Nodes -->
      <circle cx="50" cy="80" r="4" fill="var(--accent-red)"/>
      <circle cx="450" cy="80" r="4" fill="var(--accent-red)"/>
      <circle cx="50" cy="280" r="4" fill="var(--accent-green)"/>
      <circle cx="450" cy="280" r="4" fill="var(--accent-green)"/>
    </svg>
  `;

  section.appendChild(content);
  section.appendChild(visual);

  return section;
}
