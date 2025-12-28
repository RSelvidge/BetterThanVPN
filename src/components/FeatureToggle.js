export function FeatureToggle() {
  const container = document.createElement('div');
  container.className = 'container';
  container.style.padding = '4rem 1.5rem';
  container.style.textAlign = 'center';

  // Toggle Header
  const header = document.createElement('div');
  header.innerHTML = `
    <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Why We Are <span class="text-indigo">Better</span></h2>
    <div class="switch-container">
      <span id="label-standard" style="color: var(--text-muted); font-weight: 600;">Standard VPN</span>
      <label class="switch">
        <input type="checkbox" id="vpn-toggle">
        <span class="slider"></span>
      </label>
      <span id="label-better" style="color: var(--text-muted); font-weight: 600;">BetterThanVPN</span>
    </div>
  `;
  container.appendChild(header);

  // Content Area
  const contentArea = document.createElement('div');
  contentArea.className = 'glass-panel feature-card bad'; // Default state
  contentArea.style.maxWidth = '600px';
  contentArea.style.margin = '0 auto';
  contentArea.style.padding = '3rem';
  contentArea.style.textAlign = 'left';

  // Initial Content (Standard VPN)
  const renderContent = (isBetter) => {
    if (isBetter) {
      contentArea.className = 'glass-panel feature-card good';
      contentArea.innerHTML = `
        <h3 class="text-green" style="font-size: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
          BetterThanVPN <span style="font-size: 1rem; background: rgba(0,255,148,0.1); padding: 2px 8px; border-radius: 4px;">ACTIVE</span>
        </h3>
        <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
          <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
            <span style="color: var(--accent-green)">✓</span> Dedicated Backbone (No Congestion)
          </li>
          <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
            <span style="color: var(--accent-green)">✓</span> Banking Grade Clean IPs
          </li>
          <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
            <span style="color: var(--accent-green)">✓</span> Active Threat Blocking
          </li>
          <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
            <span style="color: var(--accent-green)">✓</span> 40% Lower Ping in Games
          </li>
          <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
            <span style="color: var(--accent-green)">✓</span> Automated Patching Included
          </li>
        </ul>
      `;
    } else {
      contentArea.className = 'glass-panel feature-card bad';
      contentArea.innerHTML = `
        <h3 style="color: var(--text-muted); font-size: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
          Standard VPN <span style="font-size: 1rem; background: rgba(255,77,77,0.1); color: var(--accent-red); padding: 2px 8px; border-radius: 4px;">WARNING</span>
        </h3>
        <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
          <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px; color: var(--text-muted);">
            <span style="color: var(--accent-red)">⚠</span> Shared / Dirty IPs (Blacklisted)
          </li>
          <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px; color: var(--text-muted);">
             <span style="color: var(--accent-red)">⚠</span> High Latency & Jitter
          </li>
          <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px; color: var(--text-muted);">
             <span style="color: var(--accent-red)">⚠</span> Encryption Only (Viruses pass through)
          </li>
          <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px; color: var(--text-muted);">
             <span style="color: var(--accent-red)">⚠</span> Blocked by Netflix & Banks
          </li>
        </ul>
      `;
    }
  };

  renderContent(false); // Init
  container.appendChild(contentArea);

  // Logic
  const toggle = header.querySelector('#vpn-toggle');
  toggle.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    renderContent(isChecked);

    // Update labels styles
    const labelStd = header.querySelector('#label-standard');
    const labelBetter = header.querySelector('#label-better');

    if (isChecked) {
      labelStd.style.color = 'var(--text-muted)';
      labelBetter.style.color = 'var(--text-main)';
      labelBetter.style.textShadow = '0 0 10px rgba(99, 102, 241, 0.2)';
      labelStd.style.textShadow = 'none';
    } else {
      labelStd.style.color = 'var(--text-main)';
      labelStd.style.textShadow = '0 0 10px rgba(255, 77, 77, 0.2)';
      labelBetter.style.color = 'var(--text-muted)';
      labelBetter.style.textShadow = 'none';
    }
  });

  return container;
}
