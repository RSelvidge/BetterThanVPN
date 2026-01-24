export function VideoSection() {
  const section = document.createElement('section');
  section.className = 'dark-section'; // As per user's "hybrid" preference or sticking to light if image dictates? 
  // Image shows play button on a purple/gradient card. Section background is white.
  // I'll make the section light, but the card dark/gradient.
  section.className = 'container';
  section.style.padding = '6rem 1.5rem';
  section.style.display = 'grid';
  section.style.gridTemplateColumns = '1fr 1fr';
  section.style.gap = '4rem';
  section.style.alignItems = 'center';

  const content = document.createElement('div');
  content.innerHTML = `
    <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Your internet without surveillance</h2>
    <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1.1rem;">
      We believe privacy is a fundamental human right. That's why we operate with a strict no-logs policy, protecting your browsing history from prying eyes.
    </p>
    <ul style="list-style: none; padding: 0; color: var(--text-main);">
      <li style="margin-bottom: 0.5rem; display: flex; gap: 10px; align-items: center;"><span style="color: var(--accent-indigo)">✓</span> US-based Physical Infrastructure</li>
      <li style="margin-bottom: 0.5rem; display: flex; gap: 10px; align-items: center;"><span style="color: var(--accent-indigo)">✓</span> Open Source Client</li>
    </ul>
  `;

  const videoCard = document.createElement('div');
  videoCard.className = 'glass-panel';
  videoCard.style.padding = '0';
  videoCard.style.aspectRatio = '16/9';
  videoCard.style.background = 'linear-gradient(135deg, #1e1e24 0%, #2a2a35 100%)';
  videoCard.style.display = 'flex';
  videoCard.style.alignItems = 'center';
  videoCard.style.justifyContent = 'center';
  videoCard.style.position = 'relative';
  videoCard.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
  videoCard.style.cursor = 'pointer';
  videoCard.style.overflow = 'hidden';

  videoCard.innerHTML = `
    <div style="position: absolute; inset: 0; background: url('/privacy-shield.png'); background-size: cover; opacity: 0.8;"></div>
  `;

  section.appendChild(content);
  section.appendChild(videoCard);

  return section;
}
