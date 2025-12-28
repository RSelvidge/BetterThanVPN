export function Navbar() {
  const nav = document.createElement('nav');
  nav.className = 'glass-panel dark-mode';
  nav.style.position = 'sticky';
  nav.style.top = '1rem';
  nav.style.zIndex = '1000';
  nav.style.margin = '1rem auto';
  nav.style.maxWidth = '1200px';
  nav.style.padding = '0.75rem 2rem';
  nav.style.display = 'flex';
  nav.style.justifyContent = 'space-between';
  nav.style.alignItems = 'center';
  nav.style.width = 'calc(100% - 4rem)'; // Account for margins

  nav.innerHTML = `
    <div style="font-family: var(--font-header); font-weight: 700; font-size: 1.25rem;">
      <span style="color: white;">BetterThan</span><span style="color: var(--accent-green);">VPN</span>
    </div>
    <div style="display: flex; gap: 1.5rem; align-items: center;">
      <a href="#/security" class="nav-link">Security</a>
      <a href="#/patching" class="nav-link">Patching</a>
      <a href="#/gaming" class="nav-link">Gaming</a>
      <a href="#/public-wifi" class="nav-link">Public Wi-Fi</a>
      <a href="#/exposed" class="nav-link" style="color: var(--accent-red);">Check Exposure</a>
      <a href="#/" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Get Early Access</a>
    </div>
  `;

  // Add hover effect style for links dynamically or inline
  const style = document.createElement('style');
  style.textContent = `
    .nav-link { color: var(--text-muted); font-size: 0.9rem; font-weight: 500; }
    .nav-link:hover { color: white; }
  `;
  document.head.appendChild(style);

  return nav;
}
