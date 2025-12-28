import { config } from '../config.js';

export function Pricing() {
  const section = document.createElement('section');
  section.className = 'container';
  section.style.padding = '4rem 1.5rem';
  section.style.textAlign = 'center';

  // Trust Indicators
  const trust = document.createElement('div');
  trust.style.marginBottom = '4rem';
  trust.innerHTML = `
    <p style="color: var(--text-muted); margin-bottom: 1.5rem; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px;">Optimized For</p>
    <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; opacity: 0.7; filter: grayscale(100%);">
      <span style="font-weight: 700; font-size: 1.25rem;">CHASE</span>
      <span style="font-weight: 700; font-size: 1.25rem;">WELLS FARGO</span>
      <span style="font-weight: 700; font-size: 1.25rem;">COINBASE</span>
      <span style="font-weight: 700; font-size: 1.25rem;">ROBINHOOD</span>
      <span style="font-weight: 700; font-size: 1.25rem;">CALL OF DUTY</span>
    </div>
    <div style="margin-top: 2rem;">
      <span style="border: 1px solid var(--accent-green); color: var(--accent-green); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; letter-spacing: 1px;">
        🛡 US RESIDENTIAL COMPLIANCE
      </span>
    </div>
  `;
  section.appendChild(trust);

  // Pricing Cards
  const grid = document.createElement('div');
  grid.style.display = 'flex';
  grid.style.justifyContent = 'center';
  grid.style.maxWidth = '100%';
  grid.style.margin = '0 auto';

  // Single Consolidated Plan
  const card = document.createElement('div');
  card.className = 'glass-panel';
  card.style.padding = '3rem';
  card.style.textAlign = 'left';
  card.style.maxWidth = '500px';
  card.style.width = '100%';
  card.style.border = '1px solid var(--accent-indigo)';
  card.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.15)';
  card.style.position = 'relative';

  card.innerHTML = `
    <div style="position: absolute; top: -12px; right: 2rem; background: var(--accent-indigo); color: white; padding: 2px 10px; border-radius: 10px; font-size: 0.8rem; font-weight: 600;">
      ALL-ACCESS
    </div>
    <h3 style="font-size: 2rem;">Universal Access</h3>
    <div style="font-size: 3.5rem; font-weight: 700; margin: 1rem 0;">$15<span style="font-size: 1.25rem; color: var(--text-muted); font-weight: 400;">/mo</span></div>
    <p style="color: var(--text-muted); margin-bottom: 2.5rem; font-size: 1.1rem;">
       For Home, Gaming, Trading, and Coffee Shop security. The ultimate single source of truth for your digital life.
       Take your security with you wherever you go—from airport Wi-Fi to hotels and cafes.
    </p>
    <a href="${config.stripe.commuter}" target="_blank" class="btn btn-primary" style="width: 100%; text-align: center; box-sizing: border-box; display: inline-block; text-decoration: none; padding: 1rem; font-size: 1.1rem;">Start Protection</a>
    
    <div style="margin-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;">
      <ul style="list-style: none; padding: 0; font-size: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <li style="display: flex; gap: 10px;"><span>✓</span> Premium Backbone</li>
        <li style="display: flex; gap: 10px;"><span>✓</span> AES-256 Encryption</li>
        <li style="display: flex; gap: 10px;"><span>✓</span> Zero-Hops Routing</li>
        <li style="display: flex; gap: 10px;"><span>✓</span> Banking Protection</li>
        <li style="display: flex; gap: 10px;"><span>✓</span> Packet Loss Prevention</li>
        <li style="display: flex; gap: 10px;"><span>✓</span> Automated Patching</li>
      </ul>
      <div style="margin-top: 1.5rem; text-align: center; color: var(--accent-green); font-weight: 600;">
        ✓ 3 Devices Included
      </div>
    </div>
  `;

  grid.appendChild(card);
  section.appendChild(grid);

  return section;
}
