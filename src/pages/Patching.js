import { Navbar } from '../components/Navbar.js';

export function Patching() {
  const container = document.createElement('div');
  container.className = 'dark-section'; // Force dark theme
  container.style.minHeight = '100vh';

  container.appendChild(Navbar());

  const content = document.createElement('main');
  content.className = 'container';
  content.style.padding = '4rem 1.5rem';
  content.style.textAlign = 'center';

  content.innerHTML = `
    <div style="text-align: center; margin-bottom: 5rem;">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem;">Closing the Door on <br/><span style="color: var(--accent-green)">Cyberattacks</span></h1>
        <p style="color: var(--text-muted); font-size: 1.25rem; max-width: 700px; margin: 0 auto;">
            60% of data breaches involve unpatched vulnerabilities. We automate the boring work so you stay safe without lifting a finger.
        </p>
    </div>

    <!-- Stats Section -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 6rem;">
        <div style="text-align: center;">
            <div style="font-size: 3.5rem; font-weight: 700; color: white;">14 <span style="font-size: 1rem; color: var(--text-muted); font-weight: 400;">days</span></div>
            <p style="color: var(--text-muted);">Avg time to exploit a new critical vulnerability</p>
        </div>
        <div style="text-align: center; border-left: 1px solid rgba(255,255,255,0.1); border-right: 1px solid rgba(255,255,255,0.1);">
            <div style="font-size: 3.5rem; font-weight: 700; color: var(--accent-green);">0 <span style="font-size: 1rem; color: var(--text-muted); font-weight: 400;">reboots</span></div>
            <p style="color: var(--text-muted);">Required for 95% of our updates to apply</p>
        </div>
        <div style="text-align: center;">
            <div style="font-size: 3.5rem; font-weight: 700; color: white;">350+ <span style="font-size: 1rem; color: var(--text-muted); font-weight: 400;">apps</span></div>
            <p style="color: var(--text-muted);">In our continuously monitored library</p>
        </div>
    </div>

    <!-- How It Works -->
    <h2 style="font-size: 2.5rem; margin-bottom: 3rem;">Silent Defense Workflow</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto 6rem;">
      
      <div class="glass-panel" style="padding: 2.5rem; text-align: left; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -20px; right: -20px; font-size: 8rem; opacity: 0.05; font-weight: 800;">1</div>
        <div style="width: 60px; height: 60px; background: rgba(52, 211, 153, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
            <span style="font-size: 1.75rem;">🔍</span>
        </div>
        <h3 style="color: white; margin-bottom: 1rem; font-size: 1.5rem;">Continuous Scan</h3>
        <p style="color: var(--text-muted); line-height: 1.6;">
          Our lightweight agent runs in the background, consuming < 1% CPU. It maintains a real-time inventory of every application version installed on your device.
        </p>
      </div>

      <div class="glass-panel" style="padding: 2.5rem; text-align: left; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -20px; right: -20px; font-size: 8rem; opacity: 0.05; font-weight: 800;">2</div>
        <div style="width: 60px; height: 60px; background: rgba(52, 211, 153, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
            <span style="font-size: 1.75rem;">⚡</span>
        </div>
        <h3 style="color: white; margin-bottom: 1rem; font-size: 1.5rem;">Smart Deploy</h3>
        <p style="color: var(--text-muted); line-height: 1.6;">
          When a vendor (e.g., Zoom, Adobe) releases a security fix, we verify it in our lab and push it to your device instantly. You don't click anything.
        </p>
      </div>

      <div class="glass-panel" style="padding: 2.5rem; text-align: left; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -20px; right: -20px; font-size: 8rem; opacity: 0.05; font-weight: 800;">3</div>
        <div style="width: 60px; height: 60px; background: rgba(52, 211, 153, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
            <span style="font-size: 1.75rem;">🛡️</span>
        </div>
        <h3 style="color: white; margin-bottom: 1rem; font-size: 1.5rem;">Exploit Neutralized</h3>
        <p style="color: var(--text-muted); line-height: 1.6;">
          By shrinking the "patch gap" from weeks to minutes, we render exploit kits useless. You are protected before the vulnerability is even widely known.
        </p>
      </div>

    </div>

    <!-- Supported Apps Ecosystem -->
    <div class="glass-panel" style="padding: 3rem; background: linear-gradient(135deg, rgba(20, 30, 50, 0.6) 0%, rgba(10, 10, 20, 0.8) 100%);">
      <h3 style="margin-bottom: 2rem; font-size: 2rem; color: white;">Comprehensive Coverage</h3>
      <p style="color: var(--text-muted); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          We support the most commonly targeted third-party applications.
      </p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; text-align: left;">
        <div>
            <h4 style="color: var(--accent-green); margin-bottom: 1rem; border-bottom: 1px solid rgba(52, 211, 153, 0.3); padding-bottom: 0.5rem;">Browsers</h4>
            <ul style="list-style: none; padding: 0; color: var(--text-muted); line-height: 2;">
                <li>Chrome, Firefox, Brave</li>
                <li>Edge, Opera, Safari</li>
            </ul>
        </div>
        <div>
            <h4 style="color: var(--accent-green); margin-bottom: 1rem; border-bottom: 1px solid rgba(52, 211, 153, 0.3); padding-bottom: 0.5rem;">Productivity</h4>
            <ul style="list-style: none; padding: 0; color: var(--text-muted); line-height: 2;">
                <li>Zoom, Teams, Slack</li>
                <li>Adobe Reader, Foxit</li>
                <li>Office 365, LibreOffice</li>
            </ul>
        </div>
        <div>
            <h4 style="color: var(--accent-green); margin-bottom: 1rem; border-bottom: 1px solid rgba(52, 211, 153, 0.3); padding-bottom: 0.5rem;">Utilities & Media</h4>
            <ul style="list-style: none; padding: 0; color: var(--text-muted); line-height: 2;">
                <li>VLC, Spotify, iTunes</li>
                <li>7-Zip, WinRAR</li>
                <li>Java, Python, Node.js</li>
            </ul>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div style="margin-top: 5rem;">
        <a href="#/purchase" class="btn btn-primary" style="font-size: 1.2rem; padding: 1rem 3rem;">Automate My Security</a>
    </div>
  `;

  container.appendChild(content);
  return container;
}
