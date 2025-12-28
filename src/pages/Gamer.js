import { Navbar } from '../components/Navbar.js';

export function Gamer() {
  const container = document.createElement('div');
  container.className = 'dark-section'; // Force dark theme
  container.style.minHeight = '100vh';

  container.appendChild(Navbar());

  const content = document.createElement('main');
  content.className = 'container';
  content.style.padding = '4rem 1.5rem';
  content.style.textAlign = 'center';

  // Header
  const header = document.createElement('div');
  header.innerHTML = `
    <h1 style="font-size: 3rem; margin-bottom: 1rem;">The Gamer's <span style="color: var(--accent-indigo)">Edge</span></h1>
    <p style="color: var(--text-muted); font-size: 1.25rem; margin-bottom: 4rem;">Don't let lag kill your streak. Experience the private backbone difference.</p>
  `;
  content.appendChild(header);

  // Illustration
  const imageSection = document.createElement('div');
  imageSection.style.marginBottom = '4rem';
  imageSection.innerHTML = `
      <div style="position: relative; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 0 40px rgba(99, 102, 241, 0.2);">
        <img src="/gamer_pro.png" alt="Pro Gamer with stable connection" style="width: 100%; height: auto; display: block;">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 50%; background: linear-gradient(to top, rgba(10,10,10,1), transparent);"></div>
      </div>
    `;
  content.appendChild(imageSection);

  // Ping Test Visual
  const testBox = document.createElement('div');
  testBox.className = 'glass-panel';
  testBox.style.maxWidth = '800px';
  testBox.style.margin = '0 auto';
  testBox.style.padding = '2rem';

  testBox.innerHTML = `
    <h3 style="margin-bottom: 2rem;">Live Ping Test Simulation</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; text-align: left;">
      <!-- Public Internet -->
      <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px;">
        <div style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.5rem;">Public Internet (Chicago Server)</div>
        <div style="font-size: 3rem; font-weight: 700; color: var(--accent-red);" id="ping-public">124<span style="font-size: 1rem;">ms</span></div>
        <div style="height: 4px; background: rgba(255,255,255,0.1); margin-top: 1rem; border-radius: 2px; overflow: hidden;">
          <div style="height: 100%; width: 0%; background: var(--accent-red); transition: width 0.2s;" id="bar-public"></div>
        </div>
        <div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">Jitter: <span style="color: var(--accent-red)">45ms</span> | Loss: <span style="color: var(--accent-red)">2.4%</span></div>
      </div>

      <!-- BetterThanVPN -->
      <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid var(--accent-indigo); padding: 1.5rem; border-radius: 8px; box-shadow: 0 0 20px rgba(99, 102, 241, 0.1);">
        <div style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.5rem;">BetterThanVPN Backbone</div>
        <div style="font-size: 3rem; font-weight: 700; color: var(--accent-green);" id="ping-private">28<span style="font-size: 1rem;">ms</span></div>
        <div style="height: 4px; background: rgba(255,255,255,0.1); margin-top: 1rem; border-radius: 2px; overflow: hidden;">
          <div style="height: 100%; width: 0%; background: var(--accent-green); transition: width 0.2s;" id="bar-private"></div>
        </div>
        <div style="margin-top: 0.5rem; font-size: 0.8rem; color: white;">Jitter: <span style="color: var(--accent-green)">2ms</span> | Loss: <span style="color: var(--accent-green)">0%</span></div>
      </div>
    </div>
  `;
  content.appendChild(testBox);

  // Animation Logic
  const updatePing = () => {
    if (!document.contains(testBox)) return; // Stop if unmounted

    const pingPub = 80 + Math.random() * 80;
    const pingPriv = 25 + Math.random() * 5;

    testBox.querySelector('#ping-public').innerHTML = `${Math.floor(pingPub)}<span style="font-size: 1rem;">ms</span>`;
    testBox.querySelector('#ping-private').innerHTML = `${Math.floor(pingPriv)}<span style="font-size: 1rem;">ms</span>`;

    testBox.querySelector('#bar-public').style.width = `${Math.min(pingPub, 100)}%`;
    testBox.querySelector('#bar-private').style.width = `${Math.min(pingPriv, 100)}%`;

    requestAnimationFrame(() => setTimeout(updatePing, 500));
  };
  setTimeout(updatePing, 100);

  container.appendChild(content);
  return container;
}
