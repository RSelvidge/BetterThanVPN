export function Footer() {
  const footer = document.createElement('footer');
  footer.style.background = 'var(--bg-dark)';
  footer.style.color = 'white';
  footer.style.padding = '4rem 2rem 2rem';
  footer.style.marginTop = '4rem';

  // Columns Container
  const container = document.createElement('div');
  container.className = 'container';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
  container.style.gap = '3rem';
  container.style.marginBottom = '4rem';

  const columns = [
    {
      title: "Product",
      links: ["Download", "Pricing", "Features"]
    },
    {
      title: "Resources",
      links: ["Support", "Blog", "Community", "Privacy Tools"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Contact"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Transparency Report"]
    }
  ];

  // Brand Column
  const brandCol = document.createElement('div');
  brandCol.innerHTML = `
    <h3 style="margin-bottom: 1.5rem; font-size: 1.5rem;">BetterThan<span style="color: var(--accent-green)">VPN</span></h3>
    <p style="color: var(--text-muted-dark); font-size: 0.9rem;">
      The first consumer network powered by a Fortune 500 Enterprise Backbone.
    </p>
    <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
      <!-- Social Placeholders -->
      <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.1); border-radius: 4px;"></div>
      <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.1); border-radius: 4px;"></div>
      <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.1); border-radius: 4px;"></div>
    </div>
  `;
  container.appendChild(brandCol);

  // Link Columns
  columns.forEach(col => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <h4 style="margin-bottom: 1.5rem; font-size: 1rem; color: white;">${col.title}</h4>
      <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem;">
        ${col.links.map(link => {
      let href = '#';
      if (link === 'Privacy Policy') href = '#/privacy';
      if (link === 'Terms of Service') href = '#/terms';
      return `<li><a href="${href}" style="color: var(--text-muted-dark); font-size: 0.9rem;">${link}</a></li>`;
    }).join('')}
      </ul>
    `;
    container.appendChild(wrapper);
  });

  footer.appendChild(container);

  // Copyright
  const copyright = document.createElement('div');
  copyright.style.borderTop = '1px solid rgba(255,255,255,0.1)';
  copyright.style.paddingTop = '2rem';
  copyright.style.textAlign = 'center';
  copyright.style.color = 'var(--text-muted-dark)';
  copyright.style.fontSize = '0.9rem';
  copyright.innerHTML = `&copy; ${new Date().getFullYear()} BetterThanVPN Inc. All rights reserved.`;

  // Disclaimer matching user request
  const availability = document.createElement('div');
  availability.style.textAlign = 'center';
  availability.style.marginBottom = '1.5rem';
  availability.style.color = '#555'; // Darker text for disclaimer
  availability.style.fontSize = '0.8rem';
  availability.innerHTML = 'Service not available in China, Vietnam, Morocco.';
  footer.appendChild(availability);

  footer.appendChild(copyright);

  // Hover effects for footer links
  const style = document.createElement('style');
  style.textContent = `
    footer a:hover { color: white !important; }
  `;
  footer.appendChild(style);

  return footer;
}
