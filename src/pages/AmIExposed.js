import { Navbar } from '../components/Navbar.js';

export function AmIExposed() {
  const container = document.createElement('div');
  container.appendChild(Navbar());

  const content = document.createElement('main');
  content.className = 'container';
  content.style.padding = '4rem 1.5rem';
  content.style.textAlign = 'center';

  const heading = document.createElement('h1');
  heading.textContent = 'Am I Exposed?';
  heading.style.fontSize = '3rem';
  heading.style.marginBottom = '2rem';
  content.appendChild(heading);

  const card = document.createElement('div');
  card.className = 'glass-panel';
  card.style.maxWidth = '600px';
  card.style.margin = '0 auto';
  card.style.padding = '3rem';
  card.style.position = 'relative';

  // Simulation of loading state
  card.innerHTML = `<p class="fade-in">Analyzing Connection...</p>`;

  // Fetch Real IP Data
  fetch('http://ip-api.com/json/')
    .then(response => response.json())
    .then(data => {
      // Smart Detection: If user is on Cato/BetterThanVPN, show SUCCESS
      const isProtected = data.isp.includes('Cato') || data.isp.includes('BetterThanVPN');

      setTimeout(() => {
        if (isProtected) {
          // SUCCESS STATE
          card.innerHTML = `
            <div class="fade-in">
              <div style="font-size: 5rem; margin-bottom: 1rem;">🛡️</div>
              <h2 style="color: var(--accent-green); margin-bottom: 1rem;">You Are Protected</h2>
              <div style="background: rgba(0, 255, 148, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid var(--accent-green);">
                <p style="margin: 0; color: white; font-size: 0.9rem;">Your Public Connection:</p>
                <div style="margin: 0.5rem 0;">
                    <span style="font-size: 1.5rem; font-weight: 700; color: white;">${data.query}</span>
                </div>
                <div style="margin-bottom: 1rem; color: var(--accent-green);">
                    ✓ ${data.isp} <span style="opacity: 0.7; color: white;">(${data.city})</span>
                </div>
                <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: var(--accent-green); font-weight: 600;">
                    ISP Trust Score: 100/100 (Excellent)
                </p>
              </div>
              <p style="color: var(--text-muted); margin-bottom: 2rem;">
                Great work! You are connected to the <strong style="color: white;">Private Backbone</strong>. 
                Your IP is clean, trusted by banks, and optimized for speed.
              </p>
            </div>
            `;
        } else {
          // WARNING STATE (Default)
          const trustScore = 24;
          card.innerHTML = `
            <div class="fade-in">
              <div style="font-size: 5rem; margin-bottom: 1rem;">⚠️</div>
              <h2 style="color: var(--accent-red); margin-bottom: 1rem;">Low Trust Detected</h2>
              <div style="background: rgba(255, 77, 77, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                <p style="margin: 0; color: var(--text-muted); font-size: 0.9rem;">Your Public Connection:</p>
                <div style="margin: 0.5rem 0;">
                    <span style="font-size: 1.5rem; font-weight: 700; color: white;">${data.query}</span>
                </div>
                <div style="margin-bottom: 1rem; color: var(--text-muted);">
                    ${data.isp} <span style="opacity: 0.5;">(${data.city}, ${data.countryCode})</span>
                </div>
                <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: var(--accent-red); font-weight: 600;">
                    ISP Trust Score: ${trustScore}/100 (Flagged)
                </p>
              </div>
              <p style="color: var(--text-muted); margin-bottom: 2rem;">
                Your connection via <strong>${data.isp}</strong> is shared with thousands of other users. 
                Financial institutions may flag your IP as "High Risk" due to neighbors' activity.
              </p>
              <button class="btn btn-primary" style="width: 100%;">Upgrade to High Trust IP</button>
            </div>
          `;
        }
      }, 1500);
    })
    .catch(err => {
      console.error(err);
      // Fallback if fetch fails (e.g. adblocker)
      card.innerHTML = `<p style="color: var(--accent-red)">Could not verify connection. Please disable adblockers.</p>`;
    });

  content.appendChild(card);
  container.appendChild(content);
  return container;
}
