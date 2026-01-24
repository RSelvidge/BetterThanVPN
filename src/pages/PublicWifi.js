import { Navbar } from '../components/Navbar.js';

export function PublicWifi() {
    const container = document.createElement('div');
    container.className = 'dark-section'; // Force dark theme
    container.style.minHeight = '100vh';

    container.appendChild(Navbar());

    const content = document.createElement('main');
    content.className = 'container';
    content.style.padding = '4rem 1.5rem';
    content.style.maxWidth = '800px';
    content.style.margin = '0 auto';

    content.innerHTML = `
    <div style="text-align: center; margin-bottom: 4rem;">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem;">Bank-Grade Security on <br/><span style="color: var(--accent-indigo)">Unknown Networks</span></h1>
        <p style="color: var(--text-muted); font-size: 1.25rem; max-width: 600px; margin: 0 auto;">
            Transform any public hotspot into your own private residential connection. Stop hackers, trackers, and sniffers instantly.
        </p>
    </div>

    <!-- Illustration remains, but styled -->
    <div style="margin: 3rem auto; text-align: center; max-width: 800px; position: relative; border-radius: 16px; overflow: hidden; box-shadow: 0 0 50px rgba(99, 102, 241, 0.25);">
      <img src="/banking_tunnel_v2.png" alt="Secure Public Wi-Fi Tunnel" style="width: 100%; height: auto; display: block;">
      <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 50%; background: linear-gradient(to top, var(--bg-dark), transparent);"></div>
    </div>

    <!-- The Threats -->
    <h2 style="font-size: 2rem; text-align: center; margin: 4rem 0 2rem;">Real World Threats</h2>
    <div class="bento-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; padding: 0;">
        <div class="glass-panel" style="padding: 1.5rem; border-left: 4px solid var(--accent-red);">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🕵️‍♂️</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: white;">Man-in-the-Middle</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Attackers position themselves between you and the Wi-Fi point to intercept emails, passwords, and messages.</p>
        </div>
        <div class="glass-panel" style="padding: 1.5rem; border-left: 4px solid var(--accent-red);">
            <div style="font-size: 2rem; margin-bottom: 1rem;">📡</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: white;">Evil Twin Attacks</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Hackers set up fake Wi-Fi spots (e.g., "Starbucks_Free") to trick you into connecting to their malicious device.</p>
        </div>
        <div class="glass-panel" style="padding: 1.5rem; border-left: 4px solid var(--accent-red);">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🔎</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: white;">Packet Sniffing</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Passive monitoring tools capture your unencrypted data traversing the airwaves in real-time.</p>
        </div>
    </div>

    <!-- The Solution -->
    <div style="margin-top: 6rem;">
        <h2 style="font-size: 2rem; text-align: center; margin-bottom: 3rem;">How We Protect You</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
            <div>
                 <h3 style="font-size: 1.75rem; margin-bottom: 1rem; color: var(--accent-green);">The Invisible Tunnel</h3>
                 <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1.1rem; line-height: 1.7;">
                    Unlike standard TLS which only wraps the website content, <strong>BetterThanVPN</strong> wraps your entire connection in AES-256 encryption. To the Wi-Fi admin or a hacker, your traffic looks like meaningless static.
                 </p>
                 <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 1rem; display: flex; gap: 10px; color: var(--text-inverse);">
                        <span style="color: var(--accent-green)">✓</span> 
                        <span><strong>Kill Switch:</strong> Cuts internet if the VPN drops, preventing data leaks.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; gap: 10px; color: var(--text-inverse);">
                        <span style="color: var(--accent-green)">✓</span> 
                        <span><strong>DNS Leak Protection:</strong> Your DNS requests are handled by our secure servers, not the coffee shop's ISP.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; gap: 10px; color: var(--text-inverse);">
                        <span style="color: var(--accent-green)">✓</span> 
                        <span><strong>Perfect Forward Secrecy:</strong> New encryption keys are generated for every session.</span>
                    </li>
                 </ul>
            </div>
            
            <div class="glass-panel" style="padding: 2rem; background: linear-gradient(135deg, rgba(52, 211, 153, 0.1) 0%, rgba(15, 23, 42, 0) 100%); border: 1px solid rgba(52, 211, 153, 0.2);">
                 <h4 style="color: white; margin-bottom: 1.5rem; text-align: center;">Verified Use Cases</h4>
                 <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <span style="background: rgba(255,255,255,0.1); padding: 8px; border-radius: 8px;">☕</span>
                        <div>
                            <div style="color: white; font-weight: 600;">Coffee Shops</div>
                            <div style="color: var(--text-muted); font-size: 0.8rem;">Secure remote work & banking</div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <span style="background: rgba(255,255,255,0.1); padding: 8px; border-radius: 8px;">✈️</span>
                        <div>
                            <div style="color: white; font-weight: 600;">Airports</div>
                            <div style="color: var(--text-muted); font-size: 0.8rem;">Protect passport & travel data</div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <span style="background: rgba(255,255,255,0.1); padding: 8px; border-radius: 8px;">🏨</span>
                        <div>
                            <div style="color: white; font-weight: 600;">Hotels</div>
                            <div style="color: var(--text-muted); font-size: 0.8rem;">Private browsing on shared networks</div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>

    <!-- CTA -->
    <div style="text-align: center; margin-top: 6rem; padding: 4rem; background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%);">
        <h3 style="font-size: 2rem; margin-bottom: 1rem;">Never Worry About "Free Wi-Fi" Again</h3>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">Get verified protection for all your devices.</p>
        <a href="#/purchase" class="btn btn-primary" style="font-size: 1.2rem; padding: 1rem 3rem;">Secure My Connection</a>
    </div>
    `;

    container.appendChild(content);
    return container;
}
