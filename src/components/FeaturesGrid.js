export function FeaturesGrid() {
    const section = document.createElement('section');
    section.className = 'container';
    section.style.padding = '6rem 1.5rem';

    const header = document.createElement('div');
    header.style.textAlign = 'center';
    header.style.marginBottom = '4rem';
    header.innerHTML = `
    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Why choose <span class="text-indigo">BetterThanVPN</span></h2>
    <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">
       Unlike traditional VPNs, we own the network. Experience the difference of a Fortune 500 backbone.
    </p>
  `;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'bento-grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))'; // Responsive
    grid.style.gap = '2rem';
    grid.style.padding = '0';

    const features = [
        {
            title: "Fortune 500 Backbone",
            text: "Direct peerings with major ISPs. No cheap datacenter hops.",
            icon: `<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" fill="none"/>` // Lightning
        },
        {
            title: "Banking Grade IPs",
            text: "Strictly regulated residential IPs that never get flagged as 'Proxy'.",
            icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" fill="none"/>` // Shield
        },
        {
            title: "Zero-Log Privacy",
            text: "We don't know who you are. We just route your packets.",
            icon: `<path d="M2 12h20M2 12a10 10 0 0110-10M2 12a10 10 0 0010 10m0-20a10 10 0 0110 10m-10 10a10 10 0 0010-10" stroke="currentColor" stroke-width="2" fill="none"/>` // Globe/Net
        },
        {
            title: "Automated Patching",
            text: "We patch your device vulnerabilities before hackers find them.",
            icon: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" fill="none"/>` // Wrench/Tool
        },
        {
            title: "Stream Anywhere",
            text: "Unlock Netflix, Hulu, and HBO Max from any location.",
            icon: `<path d="M21 16.8115C21 17.5 20.2 18 19 18H5C3.8 18 3 17.5 3 16.8115V7.18847C3 6.5 3.8 6 5 6H19C20.2 6 21 6.5 21 7.18847V16.8115ZM21 16.8115L12 12" stroke="currentColor" stroke-width="2" fill="none"/>` // Screen/Email... replaced with screen
        },
        {
            title: "Device Agnostic",
            text: "One account, 3 devices. iOS, Android, Windows, Mac.",
            icon: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>` // Phone
        }
    ];

    features.forEach(f => {
        const card = document.createElement('div');
        card.className = 'glass-panel';
        card.style.padding = '2rem';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.gap = '1rem';

        card.innerHTML = `
      <div style="width: 48px; height: 48px; background: rgba(99, 102, 241, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--accent-indigo);">
        <svg width="24" height="24" viewBox="0 0 24 24">
          ${f.icon}
        </svg>
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">${f.title}</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0; line-height: 1.5;">${f.text}</p>
    `;
        grid.appendChild(card);
    });

    section.appendChild(grid);
    return section;
}
