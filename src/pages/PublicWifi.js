import { Navbar } from '../components/Navbar.js';

export function PublicWifi() {
  const container = document.createElement('div');
  container.className = 'dark-section'; // Force dark theme
  container.style.minHeight = '100vh';

  container.appendChild(Navbar());

  const content = document.createElement('main');
  content.className = 'container';
  content.style.padding = '4rem 1.5rem';
  content.style.maxWidth = '800px';
  content.style.margin = '0 auto';

  content.innerHTML = `
    <h1 style="font-size: 3rem; margin-bottom: 2rem; text-align: center;">Secure Public Wi-Fi</h1>
    
    <div class="glass-panel" style="padding: 2rem; margin-bottom: 2rem;">
      <h2 style="color: var(--accent-red); font-size: 1.5rem; margin-bottom: 1rem;">The Problem: Open Networks</h2>
      <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
        Coffee shops, airports, and hotels often have unsecured Wi-Fi. Hackers can easily intercept your data, and standard VPNs often slow you down or get blocked by the services you need.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; opacity: 0.5;">
        <span style="font-size: 3rem;">🔓</span>
        <span style="font-size: 3rem;">📡</span>
      </div>
    </div>
    
    <!-- Illustration -->
    <div style="margin: 3rem auto; text-align: center; max-width: 600px; position: relative; border-radius: 12px; overflow: hidden; box-shadow: 0 0 40px rgba(99, 102, 241, 0.2);">
      <img src="/banking_tunnel_v2.png" alt="Secure Public Wi-Fi Tunnel" style="width: 100%; height: auto; display: block;">
      <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 30%; background: linear-gradient(to top, rgba(10,10,10,1), transparent);"></div>
    </div>

    <div class="glass-panel" style="padding: 2rem; border-color: var(--accent-green);">
      <h2 style="color: var(--accent-green); font-size: 1.5rem; margin-bottom: 1rem;">The Solution: Private Tunnel</h2>
      <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
        BetterThanVPN creates an impenetrable encrypted tunnel for your data. We verify your device instantly, giving you a "Clean IP" that feels like a secure residential line—even at Starbucks.
      </p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.5rem;">✓ AES-256 Encryption</li>
        <li style="margin-bottom: 0.5rem;">✓ Invisible to Sniffers</li>
        <li style="margin-bottom: 0.5rem;">✓ Works with Banking Apps</li>
      </ul>
    </div>
  `;

  container.appendChild(content);
  return container;
}
