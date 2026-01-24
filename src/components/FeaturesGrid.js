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
            icon: `<path d="M21 16.8115C21 17.5 20.2 18 19 18H5C3.8 18 3 17.5 3 16.8115V7.18847C3 6.5 3.8 6 5 6H19C20.2 6 21 6.5 21 7.18847V16.8115ZM21 16.8115L12 12" stroke="currentColor" stroke-width="2" fill="none"/>` // Screen
        },
        {
            title: "Device Agnostic",
            text: "One account, 3 devices. iOS, Android, Windows, Mac.",
            icon: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>` // Phone
        },
        {
            title: "Firewall-as-a-Service (FWaaS)",
            text: "Cloud-native firewall inspecting all traffic across all ports and protocols.",
            icon: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none"/>`
        },
        {
            title: "Secure Web Gateway (SWG)",
            text: "Protect your users from web-based threats with URL filtering and anti-malware.",
            icon: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" fill="none"/>`
        },
        {
            title: "Intrusion Prevention (IPS)",
            text: "Actively monitors network traffic for malicious activity and blocks threats instantly.",
            icon: `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01" stroke="currentColor" stroke-width="2" fill="none"/>`
        },
        {
            title: "Zero Trust Access (ZTNA)",
            text: "Secure remote access based on identity and context, not just network connection.",
            icon: `<path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-2V7m-5 9h10" stroke="currentColor" stroke-width="2" fill="none"/>`
        },
        {
            title: "Malware Prevention",
            text: "Advanced detection engines to stop ransomware and zero-day attacks.",
            icon: `<path d="M16 16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m4 0h2a2 2 0 0 1 2 2v2m-6 0h.01" stroke="currentColor" stroke-width="2" fill="none"/>`
        },
        {
            title: "DNS Security",
            text: "Block malicious domains and prevent command-and-control callbacks at the DNS layer.",
            icon: `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2" fill="none"/>`
        },
        {
            title: "Remote Browser Isolation",
            text: "Execute web content in a remote container to prevent threats from reaching your device.",
            icon: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/><path d="M9 3v18" stroke="currentColor" stroke-width="2" fill="none"/>`
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
