export function Testimonials() {
    const section = document.createElement('section');
    section.className = 'container';
    section.style.padding = '6rem 1.5rem';
    section.style.textAlign = 'center';

    const header = document.createElement('div');
    header.style.marginBottom = '4rem';
    header.innerHTML = `
    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Trusted by experts and our community</h2>
    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
        <span style="color: #F7931A;">★</span>
        <span style="color: #F7931A;">★</span>
        <span style="color: #F7931A;">★</span>
        <span style="color: #F7931A;">★</span>
        <span style="color: #F7931A;">★</span>
    </div>
  `;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    grid.style.gap = '2rem';

    const reviews = [
        {
            name: "TechRadar",
            author: "Security Expert",
            text: "The fastest implementation of a residential proxy network we've seen. It blurs the line between VPN and ISP.",
            initial: "T"
        },
        {
            name: "PrivacyWeekly",
            author: "Editor's Choice",
            text: "Finally a privacy solution that understands the modern need for streaming. It just works.",
            initial: "P"
        },
        {
            name: "Alex M.",
            author: "Verified User",
            text: "Ping went from 45ms to 28ms in Warzone. The direct peering path is legitimate.",
            initial: "A"
        }
    ];

    reviews.forEach(r => {
        const card = document.createElement('div');
        card.className = 'glass-panel';
        card.style.padding = '2rem';
        card.style.textAlign = 'left';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.gap = '1.5rem';

        card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div style="width: 40px; height: 40px; background: var(--bg-card); color: var(--text-main); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">
            ${r.initial}
        </div>
        <div>
            <div style="font-weight: 700;">${r.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${r.author}</div>
        </div>
      </div>
      <p style="margin: 0; color: var(--text-muted); font-style: italic;">"${r.text}"</p>
    `;
        grid.appendChild(card);
    });

    section.appendChild(grid);
    return section;
}
