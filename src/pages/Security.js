import { Navbar } from '../components/Navbar.js';

export function Security() {
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
    <h1 style="font-size: 3rem; margin-bottom: 1rem;">Enterprise-Grade <span style="color: var(--accent-indigo)">Security</span></h1>
    <p style="color: var(--text-muted); font-size: 1.25rem; margin-bottom: 4rem;">Comprehensive threat prevention built directly into the network backbone.</p>
  `;
    content.appendChild(header);

    // Illustration
    const imageSection = document.createElement('div');
    imageSection.style.marginBottom = '4rem';
    imageSection.innerHTML = `
      <div style="position: relative; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 0 40px rgba(0, 255, 148, 0.2);">
        <img src="/security_house_v2.png" alt="Protected Home Network" style="width: 100%; height: auto; display: block;">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 30%; background: linear-gradient(to top, rgba(10,10,10,1), transparent);"></div>
      </div>
    `;
    content.appendChild(imageSection);

    // Grid
    const grid = document.createElement('div');
    grid.className = 'bento-grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr))'; // Responsive override
    grid.style.gap = '2rem';
    grid.style.textAlign = 'left';

    const features = [
        {
            title: "Firewall-as-a-Service (FWaaS)",
            cat: "Threat Prevention",
            desc: "Cloud-native firewall that inspects all traffic across all ports and protocols, eliminating the need for physical appliances.",
            icon: "🔥"
        },
        {
            title: "Threat Protection",
            cat: "Threat Prevention",
            desc: "Scans for viruses, malware, ransomware, and blocks access to malicious URLs.",
            icon: "🛡️"
        },
        {
            title: "Intrusion Prevention System (IPS)",
            cat: "Threat Prevention",
            desc: "Actively monitors network traffic for malicious activity and known attack signatures, blocking them instantly.",
            icon: "🚨"
        },
        {
            title: "Zero Trust Network Access (ZTNA)",
            cat: "Threat Prevention",
            desc: "Ensures users only access specific applications they are authorized for, verifying identity and context every time.",
            icon: "🔐"
        },
        {
            title: "Malware Prevention",
            cat: "Malware Prevention",
            desc: "Multi-layered defense using signature-based detection and machine learning to stop known and zero-day threats.",
            icon: "🦠"
        },
        {
            title: "DNS Security",
            cat: "Malware Prevention",
            desc: "Blocks command-and-control (C2) connections and prevents data exfiltration by inspecting DNS requests.",
            icon: "🌐"
        },
        {
            title: "Remote Browser Isolation (RBI)",
            cat: "Malware Prevention",
            desc: "Executes web content in a remote container, preventing malicious code from ever reaching the end-user device.",
            icon: "📦"
        }
    ];

    features.forEach(feat => {
        const card = document.createElement('div');
        card.className = 'glass-panel';
        card.style.padding = '2rem';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.gap = '1rem';

        card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span style="font-size: 2.5rem;">${feat.icon}</span>
        <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-indigo); border: 1px solid var(--accent-indigo); padding: 4px 8px; border-radius: 4px;">${feat.cat}</span>
      </div>
      <h3 style="font-size: 1.25rem; margin: 0; color: white;">${feat.title}</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0; line-height: 1.5;">${feat.desc}</p>
    `;
        grid.appendChild(card);
    });

    content.appendChild(grid);

    // New Threats Visualization Section
    const visualSection = document.createElement('div');
    visualSection.style.marginTop = '6rem';
    visualSection.style.position = 'relative';
    visualSection.style.borderRadius = '16px';
    visualSection.style.overflow = 'hidden';
    visualSection.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
    visualSection.innerHTML = `
        <img src="/security-threats.jpg" alt="Understand the extent of online threats" style="width: 100%; height: auto; display: block;">
    `;
    content.appendChild(visualSection);

    content.appendChild(grid);
    container.appendChild(content);
    return container; // Ensure we return the wrapper
}
