import { Navbar } from '../components/Navbar.js';

export function Patching() {
  const container = document.createElement('div');
  container.className = 'dark-section'; // Force dark theme
  container.style.minHeight = '100vh';

  container.appendChild(Navbar());

  const content = document.createElement('main');
  content.className = 'container';
  content.style.padding = '4rem 1.5rem';
  content.style.textAlign = 'center';

  content.innerHTML = `
    <h1 style="font-size: 3rem; margin-bottom: 2rem;">Automated <span style="color: var(--accent-green)">Patching</span></h1>
    <p style="color: var(--text-muted); font-size: 1.25rem; margin-bottom: 4rem; max-width: 700px; margin-left: auto; margin-right: auto;">
        Vulnerabilities in outdated software are the #1 entry point for cyberattacks. We close the doors before hackers can get in.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto;">
      
      <!-- Feature 1 -->
      <div class="glass-panel" style="padding: 2rem; text-align: left;">
        <h3 style="color: white; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.5rem;">🔍</span> Silent Scanning
        </h3>
        <p style="color: var(--text-muted);">
          Our lightweight agent continuously monitors your installed applications (Chrome, Zoom, Adobe, etc.) for known vulnerabilities (CVEs).
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="glass-panel" style="padding: 2rem; text-align: left;">
        <h3 style="color: white; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.5rem;">⚡</span> Instant Updates
        </h3>
        <p style="color: var(--text-muted);">
          When a critical patch is released, we automatically deploy it to your device in the background. No reboots, no interruptions.
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="glass-panel" style="padding: 2rem; text-align: left;">
        <h3 style="color: white; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.5rem;">🛡️</span> Zero-Day Defense
        </h3>
        <p style="color: var(--text-muted);">
          By shrinking the time window between disclosure and patch, we effectively neutralize zero-day exploits before they can be used against you.
        </p>
      </div>

    </div>

    <!-- Supported Apps Visual -->
    <div style="margin-top: 4rem;">
      <h3 style="margin-bottom: 2rem; color: var(--text-muted);">Supported Applications</h3>
      <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; opacity: 0.8;">
        <div class="glass-panel" style="padding: 0.5rem 1.5rem; border-radius: 50px; font-size: 0.9rem; display: flex; align-items: center; gap: 10px;">
          <span style="color: var(--accent-green);">●</span> Google Chrome
        </div>
        <div class="glass-panel" style="padding: 0.5rem 1.5rem; border-radius: 50px; font-size: 0.9rem; display: flex; align-items: center; gap: 10px;">
          <span style="color: var(--accent-green);">●</span> Zoom
        </div>
        <div class="glass-panel" style="padding: 0.5rem 1.5rem; border-radius: 50px; font-size: 0.9rem; display: flex; align-items: center; gap: 10px;">
          <span style="color: var(--accent-green);">●</span> Firefox
        </div>
        <div class="glass-panel" style="padding: 0.5rem 1.5rem; border-radius: 50px; font-size: 0.9rem; display: flex; align-items: center; gap: 10px;">
          <span style="color: var(--accent-green);">●</span> Adobe Reader
        </div>
        <div class="glass-panel" style="padding: 0.5rem 1.5rem; border-radius: 50px; font-size: 0.9rem; display: flex; align-items: center; gap: 10px;">
          <span style="color: var(--accent-green);">●</span> VLC Player
        </div>
      </div>
    </div>
  `;

  container.appendChild(content);
  return container;
}
