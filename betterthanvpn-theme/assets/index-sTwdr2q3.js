(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function d(){const e=document.createElement("nav");e.className="glass-panel dark-mode",e.style.position="sticky",e.style.top="1rem",e.style.zIndex="1000",e.style.margin="1rem auto",e.style.maxWidth="1200px",e.style.padding="0.75rem 2rem",e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.width="calc(100% - 4rem)",e.innerHTML=`
    <a href="#/" style="font-family: var(--font-header); font-weight: 700; font-size: 1.25rem;">
      <span style="color: white;">BetterThan</span><span style="color: var(--accent-green);">VPN</span>
    </a>
    <div style="display: flex; gap: 1.5rem; align-items: center;">
      <a href="#/security" class="nav-link">Security</a>
      <a href="#/patching" class="nav-link">Patching</a>
      <a href="#/gaming" class="nav-link">Gaming</a>
      <a href="#/public-wifi" class="nav-link">Public Wi-Fi</a>
      <a href="#/exposed" class="nav-link" style="color: var(--accent-red);">Check Exposure</a>
    </div>
  `;const t=document.createElement("style");return t.textContent=`
    .nav-link { color: var(--text-muted); font-size: 0.9rem; font-weight: 500; }
    .nav-link:hover { color: white; }
  `,document.head.appendChild(t),e}function h(){const e=document.createElement("section");e.className="container fade-in dark-section",e.style.minHeight="80vh",e.style.display="grid",e.style.gridTemplateColumns="1fr 1fr",e.style.alignItems="center",e.style.gap="4rem",e.style.paddingTop="4rem";const t=document.createElement("div");t.innerHTML=`
    <h1 style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem;">
      The Public Internet is <span style="color: var(--accent-red)">Broken</span>.<br>
      We <span class="text-green">Fixed It</span>.
    </h1>
    <p style="font-size: 1.25rem; color: var(--text-muted); margin-bottom: 2.5rem; max-width: 500px;">
      Experience the first consumer network powered by a Fortune 500 Enterprise Backbone. Low latency, zero-trust security, and US-based reliability.
    </p>
    <div style="display: flex; gap: 1rem;">
      <a href="#/purchase" class="btn btn-primary">Start Protection</a>
    </div>
  `;const r=document.createElement("div");return r.className="glass-panel",r.style.height="400px",r.style.position="relative",r.style.overflow="hidden",r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center",r.innerHTML=`
    <svg width="100%" height="100%" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:var(--accent-red);stop-opacity:1" />
          <stop offset="100%" style="stop-color:var(--accent-red);stop-opacity:0" />
        </linearGradient>
        <filter id="glow-green">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Grid Background -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />

      <!-- Labels -->
      <text x="20" y="30" fill="var(--accent-red)" font-family="var(--font-header)" font-size="12">PUBLIC INTERNET</text>
      <text x="20" y="230" fill="var(--accent-green)" font-family="var(--font-header)" font-size="12">BETTERTHANVPN</text>

      <!-- Slow Path (Jagged Red) -->
      <path d="M 50,80 L 100,120 L 150,50 L 200,100 L 250,60 L 300,110 L 350,70 L 450,80" 
            stroke="var(--accent-red)" stroke-width="2" fill="none" stroke-opacity="0.6">
        <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" duration="5s" repeatCount="indefinite" />
      </path>
      
      <!-- Packet on Slow Path -->
      <circle r="4" fill="#fff">
        <animateMotion path="M 50,80 L 100,120 L 150,50 L 200,100 L 250,60 L 300,110 L 350,70 L 450,80" dur="4s" repeatCount="indefinite" calcMode="linear" />
      </circle>

      <!-- Fast Path (Straight Green) -->
      <line x1="50" y1="280" x2="450" y2="280" stroke="var(--accent-green)" stroke-width="3" filter="url(#glow-green)" />
      
      <!-- Packet on Fast Path -->
      <circle r="4" fill="#fff" filter="url(#glow-green)">
        <animateMotion path="M 50,280 L 450,280" dur="1.5s" repeatCount="indefinite" calcMode="linear" />
      </circle>

      <!-- Comparison Nodes -->
      <circle cx="50" cy="80" r="4" fill="var(--accent-red)"/>
      <circle cx="450" cy="80" r="4" fill="var(--accent-red)"/>
      <circle cx="50" cy="280" r="4" fill="var(--accent-green)"/>
      <circle cx="450" cy="280" r="4" fill="var(--accent-green)"/>
    </svg>
  `,e.appendChild(t),e.appendChild(r),e}function u(){const e=document.createElement("section");e.className="container",e.style.padding="6rem 1.5rem";const t=document.createElement("div");t.style.textAlign="center",t.style.marginBottom="4rem",t.innerHTML=`
    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Why choose <span class="text-indigo">BetterThanVPN</span></h2>
    <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">
       Unlike traditional VPNs, we own the network. Experience the difference of a Fortune 500 backbone.
    </p>
  `,e.appendChild(t);const r=document.createElement("div");return r.className="bento-grid",r.style.gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))",r.style.gap="2rem",r.style.padding="0",[{title:"Fortune 500 Backbone",text:"Direct peerings with major ISPs. No cheap datacenter hops.",icon:'<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Banking Grade IPs",text:"Strictly regulated residential IPs that never get flagged as 'Proxy'.",icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Zero-Log Privacy",text:"We don't know who you are. We just route your packets.",icon:'<path d="M2 12h20M2 12a10 10 0 0110-10M2 12a10 10 0 0010 10m0-20a10 10 0 0110 10m-10 10a10 10 0 0010-10" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Automated Patching",text:"We patch your device vulnerabilities before hackers find them.",icon:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Stream Anywhere",text:"Unlock Netflix, Hulu, and HBO Max from any location.",icon:'<path d="M21 16.8115C21 17.5 20.2 18 19 18H5C3.8 18 3 17.5 3 16.8115V7.18847C3 6.5 3.8 6 5 6H19C20.2 6 21 6.5 21 7.18847V16.8115ZM21 16.8115L12 12" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Device Agnostic",text:"One account, 3 devices. iOS, Android, Windows, Mac.",icon:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Firewall-as-a-Service (FWaaS)",text:"Cloud-native firewall inspecting all traffic across all ports and protocols.",icon:'<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Secure Web Gateway (SWG)",text:"Protect your users from web-based threats with URL filtering and anti-malware.",icon:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Intrusion Prevention (IPS)",text:"Actively monitors network traffic for malicious activity and blocks threats instantly.",icon:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Zero Trust Access (ZTNA)",text:"Secure remote access based on identity and context, not just network connection.",icon:'<path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-2V7m-5 9h10" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Malware Prevention",text:"Advanced detection engines to stop ransomware and zero-day attacks.",icon:'<path d="M16 16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m4 0h2a2 2 0 0 1 2 2v2m-6 0h.01" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"DNS Security",text:"Block malicious domains and prevent command-and-control callbacks at the DNS layer.",icon:'<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2" fill="none"/>'},{title:"Remote Browser Isolation",text:"Execute web content in a remote container to prevent threats from reaching your device.",icon:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/><path d="M9 3v18" stroke="currentColor" stroke-width="2" fill="none"/>'}].forEach(i=>{const o=document.createElement("div");o.className="glass-panel",o.style.padding="2rem",o.style.display="flex",o.style.flexDirection="column",o.style.gap="1rem",o.innerHTML=`
      <div style="width: 48px; height: 48px; background: rgba(99, 102, 241, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--accent-indigo);">
        <svg width="24" height="24" viewBox="0 0 24 24">
          ${i.icon}
        </svg>
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">${i.title}</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0; line-height: 1.5;">${i.text}</p>
    `,r.appendChild(o)}),e.appendChild(r),e}function v(){const e=document.createElement("div");e.className="container",e.style.padding="4rem 1.5rem",e.style.textAlign="center";const t=document.createElement("div");t.innerHTML=`
    <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Why We Are <span class="text-indigo">Better</span></h2>
    <div class="switch-container">
      <span id="label-standard" style="color: var(--text-muted); font-weight: 600;">Standard VPN</span>
      <label class="switch">
        <input type="checkbox" id="vpn-toggle">
        <span class="slider"></span>
      </label>
      <span id="label-better" style="color: var(--text-muted); font-weight: 600;">BetterThanVPN</span>
    </div>
  `,e.appendChild(t);const r=document.createElement("div");r.className="glass-panel feature-card bad",r.style.maxWidth="600px",r.style.margin="0 auto",r.style.padding="3rem",r.style.textAlign="left";const n=o=>{o?(r.className="glass-panel feature-card good",r.innerHTML=`
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
      `):(r.className="glass-panel feature-card bad",r.innerHTML=`
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
      `)};return n(!1),e.appendChild(r),t.querySelector("#vpn-toggle").addEventListener("change",o=>{const a=o.target.checked;n(a);const l=t.querySelector("#label-standard"),s=t.querySelector("#label-better");a?(l.style.color="var(--text-muted)",s.style.color="var(--text-main)",s.style.textShadow="0 0 10px rgba(99, 102, 241, 0.2)",l.style.textShadow="none"):(l.style.color="var(--text-main)",l.style.textShadow="0 0 10px rgba(255, 77, 77, 0.2)",s.style.color="var(--text-muted)",s.style.textShadow="none")}),e}function f(){const e=document.createElement("section");e.className="dark-section",e.className="container",e.style.padding="6rem 1.5rem",e.style.display="grid",e.style.gridTemplateColumns="1fr 1fr",e.style.gap="4rem",e.style.alignItems="center";const t=document.createElement("div");t.innerHTML=`
    <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Your internet without surveillance</h2>
    <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1.1rem;">
      We believe privacy is a fundamental human right. That's why we operate with a strict no-logs policy, protecting your browsing history from prying eyes.
    </p>
    <ul style="list-style: none; padding: 0; color: var(--text-main);">
      <li style="margin-bottom: 0.5rem; display: flex; gap: 10px; align-items: center;"><span style="color: var(--accent-indigo)">✓</span> US-based Physical Infrastructure</li>
      <li style="margin-bottom: 0.5rem; display: flex; gap: 10px; align-items: center;"><span style="color: var(--accent-indigo)">✓</span> Open Source Client</li>
    </ul>
  `;const r=document.createElement("div");return r.className="glass-panel",r.style.padding="0",r.style.aspectRatio="16/9",r.style.background="linear-gradient(135deg, #1e1e24 0%, #2a2a35 100%)",r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center",r.style.position="relative",r.style.boxShadow="0 20px 40px rgba(0,0,0,0.2)",r.style.cursor="pointer",r.style.overflow="hidden",r.innerHTML=`
    <div style="position: absolute; inset: 0; background: url('/privacy-shield.png'); background-size: cover; opacity: 0.8;"></div>
  `,e.appendChild(t),e.appendChild(r),e}function x(){const e=document.createElement("section");e.className="container",e.style.padding="6rem 1.5rem",e.style.display="flex",e.style.alignItems="center",e.style.flexDirection="row-reverse",e.style.gap="4rem";const t=document.createElement("div");t.style.flex="1",t.innerHTML=`
      <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
        <span style="background: #000; color: #E50914; font-weight: 900; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">NETFLIX</span>
        <span style="background: #1CE783; color: #000; font-weight: 700; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">HULU</span>
        <span style="background: #00A8E1; color: #fff; font-weight: 700; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">PRIME</span>
      </div>
      <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Watch your favorite TV shows from anywhere</h2>
      <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1.1rem;">
        With our Residential IP network, streaming services see you as a real home user, not a VPN. Avoid "Proxy Detected" errors forever.
      </p>
      <a href="#/pricing" class="btn btn-primary">Get BetterThanVPN</a>
    `;const r=document.createElement("div");return r.style.flex="1",r.className="glass-panel",r.style.height="400px",r.style.position="relative",r.style.overflow="hidden",r.style.background="#f0f0f0",r.innerHTML=`
       <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: 60%; background: #111; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.2); display: flex; flex-direction: column;">
          <div style="height: 100%; position: relative;">
            <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                <span style="color: white; font-weight: 700; opacity: 0.2; font-size: 2rem;">4K HDR</span>
            </div>
             <!-- Play Bar -->
            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1rem;">
                <div style="height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px; overflow: hidden;">
                    <div style="width: 45%; height: 100%; background: #E50914;"></div>
                </div>
            </div>
          </div>
       </div>
       <div style="position: absolute; top: 20px; right: 20px; background: white; padding: 0.5rem 1rem; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-weight: 600; display: flex; align-items: center; gap: 6px;">
          <div style="width: 8px; height: 8px; background: #00D632; border-radius: 50%;"></div>
          Unblocked
       </div>
    `,e.appendChild(r),e.appendChild(t),e}const b={stripe:{commuter:"#"}};function w(){const e=document.createElement("section");e.className="container",e.style.padding="4rem 1.5rem",e.style.textAlign="center";const t=document.createElement("div");t.style.marginBottom="4rem",t.innerHTML=`
    <p style="color: var(--text-muted); margin-bottom: 1.5rem; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px;">Optimized For</p>
    <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; opacity: 0.7; filter: grayscale(100%);">
      <span style="font-weight: 700; font-size: 1.25rem;">CHASE</span>
      <span style="font-weight: 700; font-size: 1.25rem;">WELLS FARGO</span>
      <span style="font-weight: 700; font-size: 1.25rem;">COINBASE</span>
      <span style="font-weight: 700; font-size: 1.25rem;">ROBINHOOD</span>
      <span style="font-weight: 700; font-size: 1.25rem;">CALL OF DUTY</span>
    </div>
    <div style="margin-top: 2rem;">
      <span style="border: 1px solid var(--accent-green); color: var(--accent-green); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; letter-spacing: 1px;">
        🛡 US RESIDENTIAL COMPLIANCE
      </span>
    </div>
  `,e.appendChild(t);const r=document.createElement("div");r.style.display="flex",r.style.justifyContent="center",r.style.maxWidth="100%",r.style.margin="0 auto";const n=document.createElement("div");return n.className="glass-panel",n.style.padding="3rem",n.style.textAlign="left",n.style.maxWidth="500px",n.style.width="100%",n.style.border="1px solid var(--accent-indigo)",n.style.boxShadow="0 0 30px rgba(99, 102, 241, 0.15)",n.style.position="relative",n.innerHTML=`
    <div style="position: absolute; top: -12px; right: 2rem; background: var(--accent-indigo); color: white; padding: 2px 10px; border-radius: 10px; font-size: 0.8rem; font-weight: 600;">
      ALL-ACCESS
    </div>
    <h3 style="font-size: 2rem;">Universal Access</h3>
    <div style="font-size: 3.5rem; font-weight: 700; margin: 1rem 0;">$15<span style="font-size: 1.25rem; color: var(--text-muted); font-weight: 400;">/mo</span></div>
    <div style="margin-bottom: 2rem; color: var(--accent-green); font-weight: 600; font-size: 1.1rem;">
      ✓ 3 Devices Included
    </div>
    <p style="color: var(--text-muted); margin-bottom: 2.5rem; font-size: 1.1rem;">
       For Home, Gaming, Trading, and Coffee Shop security. The ultimate single source of truth for your digital life.
       Take your security with you wherever you go—from airport Wi-Fi to hotels and cafes.
    </p>
    <a href="#/purchase" class="btn btn-primary" style="width: 100%; text-align: center; box-sizing: border-box; display: inline-block; text-decoration: none; padding: 1rem; font-size: 1.1rem;">
      Activate Real Security — $15/month
      <div style="font-size: 0.8rem; font-weight: normal; opacity: 0.9; margin-top: 4px;">Up to 3 devices · Cancel anytime</div>
    </a>
    
    <div style="margin-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;">
      <ul style="list-style: none; padding: 0; font-size: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <li style="display: flex; gap: 10px;"><span>✓</span> Premium Backbone</li>
        <li style="display: flex; gap: 10px;"><span>✓</span> AES-256 Encryption</li>
        <li style="display: flex; gap: 10px;"><span>✓</span> Zero-Hops Routing</li>
        <li style="display: flex; gap: 10px;"><span>✓</span> Banking Protection</li>
        <li style="display: flex; gap: 10px;"><span>✓</span> Packet Loss Prevention</li>
        <li style="display: flex; gap: 10px;"><span>✓</span> Automated Patching</li>
      </ul>
      </ul>
    </div>
  `,r.appendChild(n),e.appendChild(r),e}function k(){const e=document.createElement("section");e.className="container",e.style.padding="6rem 1.5rem",e.style.textAlign="center";const t=document.createElement("div");t.style.marginBottom="4rem",t.innerHTML=`
    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Trusted by experts and our community</h2>
    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
        <span style="color: #F7931A;">★</span>
        <span style="color: #F7931A;">★</span>
        <span style="color: #F7931A;">★</span>
        <span style="color: #F7931A;">★</span>
        <span style="color: #F7931A;">★</span>
    </div>
  `,e.appendChild(t);const r=document.createElement("div");return r.style.display="grid",r.style.gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))",r.style.gap="2rem",[{name:"TechRadar",author:"Security Expert",text:"The fastest implementation of a residential proxy network we've seen. It blurs the line between VPN and ISP.",initial:"T"},{name:"PrivacyWeekly",author:"Editor's Choice",text:"Finally a privacy solution that understands the modern need for streaming. It just works.",initial:"P"},{name:"Alex M.",author:"Verified User",text:"Ping went from 45ms to 28ms in Warzone. The direct peering path is legitimate.",initial:"A"}].forEach(i=>{const o=document.createElement("div");o.className="glass-panel",o.style.padding="2rem",o.style.textAlign="left",o.style.display="flex",o.style.flexDirection="column",o.style.gap="1.5rem",o.innerHTML=`
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div style="width: 40px; height: 40px; background: var(--bg-card); color: var(--text-main); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">
            ${i.initial}
        </div>
        <div>
            <div style="font-weight: 700;">${i.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${i.author}</div>
        </div>
      </div>
      <p style="margin: 0; color: var(--text-muted); font-style: italic;">"${i.text}"</p>
    `,r.appendChild(o)}),e.appendChild(r),e}function C(){const e=document.createElement("section");e.className="container",e.style.padding="4rem 1.5rem",e.style.maxWidth="800px",e.style.margin="0 auto 4rem auto";const t=document.createElement("h2");t.textContent="Technical FAQ",t.style.textAlign="center",t.style.marginBottom="2rem",e.appendChild(t);const r=[{q:"Why is this better than Nord/Express?",a:"We own the network routes; they just rent servers. This means we control the entire path your data takes, ensuring lower latency and higher security."},{q:"Will this work with my Bank?",a:"Yes. Unlike standard VPNs that use blacklisted 'datacenter IPs', we use reputation-based residential IPs that are trusted by major US financial institutions like Chase and Wells Fargo."},{q:"Do I need to configure servers?",a:"No. Our Smart Client automatically routes you to the nearest US fiber node. There's no complex setup—just one click to connect."}],n=document.createElement("div");return n.style.display="flex",n.style.flexDirection="column",n.style.gap="1rem",r.forEach((i,o)=>{const a=document.createElement("div");a.className="glass-panel",a.style.cursor="pointer",a.style.overflow="hidden";const l=document.createElement("div");l.style.padding="1.5rem",l.style.display="flex",l.style.justifyContent="space-between",l.style.alignItems="center",l.style.fontWeight="600",l.innerHTML=`<span>${i.q}</span><span style="color: var(--accent-indigo)">+</span>`;const s=document.createElement("div");s.style.padding="0 1.5rem 1.5rem 1.5rem",s.style.color="var(--text-muted)",s.style.display="none",s.textContent=i.a,a.addEventListener("click",()=>{s.style.display==="block"?(s.style.display="none",l.querySelector("span:last-child").textContent="+",a.style.borderColor="rgba(255, 255, 255, 0.05)"):(s.style.display="block",s.style.animation="fadeIn 0.3s ease",l.querySelector("span:last-child").textContent="-",a.style.borderColor="var(--accent-indigo)")}),a.appendChild(l),a.appendChild(s),n.appendChild(a)}),e.appendChild(n),e}function g(){const e=document.createElement("div"),t=document.createElement("div");return t.className="dark-section hero-bg",t.style.paddingBottom="2rem",t.appendChild(d()),t.appendChild(h()),e.appendChild(t),e.appendChild(u()),e.appendChild(v()),e.appendChild(f()),e.appendChild(x()),e.appendChild(w()),e.appendChild(k()),e.appendChild(C()),e}function z(){const e=document.createElement("div");e.className="dark-section",e.style.minHeight="100vh",e.appendChild(d());const t=document.createElement("main");t.className="container",t.style.padding="4rem 1.5rem",t.style.textAlign="center";const r=document.createElement("div");r.innerHTML=`
    <h1 style="font-size: 3rem; margin-bottom: 1rem;">The Gamer's <span style="color: var(--accent-indigo)">Edge</span></h1>
    <p style="color: var(--text-muted); font-size: 1.25rem; margin-bottom: 4rem;">Don't let lag kill your streak. Experience the private backbone difference.</p>
  `,t.appendChild(r);const n=document.createElement("div");n.style.marginBottom="4rem",n.innerHTML=`
      <div style="position: relative; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 0 40px rgba(99, 102, 241, 0.2);">
        <img src="/gamer_pro.png" alt="Pro Gamer with stable connection" style="width: 100%; height: auto; display: block;">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 50%; background: linear-gradient(to top, rgba(10,10,10,1), transparent);"></div>
      </div>
    `,t.appendChild(n);const i=document.createElement("div");i.className="glass-panel",i.style.maxWidth="800px",i.style.margin="0 auto",i.style.padding="2rem",i.innerHTML=`
    <h3 style="margin-bottom: 2rem;">Live Ping Test Simulation</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; text-align: left;">
      <!-- Public Internet -->
      <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px;">
        <div style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.5rem;">Public Internet (Chicago Server)</div>
        <div style="font-size: 3rem; font-weight: 700; color: var(--accent-red);" id="ping-public">124<span style="font-size: 1rem;">ms</span></div>
        <div style="height: 4px; background: rgba(255,255,255,0.1); margin-top: 1rem; border-radius: 2px; overflow: hidden;">
          <div style="height: 100%; width: 0%; background: var(--accent-red); transition: width 0.2s;" id="bar-public"></div>
        </div>
        <div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">Jitter: <span style="color: var(--accent-red)">45ms</span> | Loss: <span style="color: var(--accent-red)">2.4%</span></div>
      </div>

      <!-- BetterThanVPN -->
      <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid var(--accent-indigo); padding: 1.5rem; border-radius: 8px; box-shadow: 0 0 20px rgba(99, 102, 241, 0.1);">
        <div style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.5rem;">BetterThanVPN Backbone</div>
        <div style="font-size: 3rem; font-weight: 700; color: var(--accent-green);" id="ping-private">28<span style="font-size: 1rem;">ms</span></div>
        <div style="height: 4px; background: rgba(255,255,255,0.1); margin-top: 1rem; border-radius: 2px; overflow: hidden;">
          <div style="height: 100%; width: 0%; background: var(--accent-green); transition: width 0.2s;" id="bar-private"></div>
        </div>
        <div style="margin-top: 0.5rem; font-size: 0.8rem; color: white;">Jitter: <span style="color: var(--accent-green)">2ms</span> | Loss: <span style="color: var(--accent-green)">0%</span></div>
      </div>
    </div>
  `,t.appendChild(i);const o=()=>{if(!document.contains(i))return;const l=80+Math.random()*80,s=25+Math.random()*5;i.querySelector("#ping-public").innerHTML=`${Math.floor(l)}<span style="font-size: 1rem;">ms</span>`,i.querySelector("#ping-private").innerHTML=`${Math.floor(s)}<span style="font-size: 1rem;">ms</span>`,i.querySelector("#bar-public").style.width=`${Math.min(l,100)}%`,i.querySelector("#bar-private").style.width=`${Math.min(s,100)}%`,requestAnimationFrame(()=>setTimeout(o,500))};setTimeout(o,100);const a=document.createElement("div");return a.style.marginTop="6rem",a.style.textAlign="left",a.innerHTML=`
    <div style="max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 4rem;">
        
        <div style="text-align: center; margin-bottom: 2rem;">
            <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">The <span style="color: var(--accent-indigo)">Private Backbone</span> Advantage</h2>
            <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.6; max-width: 700px; margin: 0 auto;">
                Normal VPNs route your traffic over the congested public internet, adding hops and instability. 
                <strong>BetterThanVPN</strong> owns the road. We route your game data through our dedicated fiber-optic backbone, bypassing ISP throttle points and bad routing tables.
            </p>
        </div>

        <div class="glass-panel" style="padding: 3rem; background: linear-gradient(180deg, rgba(20,20,30,0.4) 0%, rgba(99, 102, 241, 0.05) 100%); border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 3rem;">
                
                <div>
                    <h3 style="font-size: 1.5rem; color: white; display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                        <span style="color: var(--accent-green)">⚡</span> Direct Routing
                    </h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">
                        We use BGP optimization to find the absolute shortest physical path to game servers. No bouncing between 15 different ISPs before reaching the destination.
                    </p>
                </div>

                <div>
                    <h3 style="font-size: 1.5rem; color: white; display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                        <span style="color: var(--accent-green)">🛡️</span> DDoS Immunity
                    </h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">
                        Streamers and pros are targets. Our backbone absorbs terabits of attack traffic instantly, so your lobby never crashes even if you are being targeted.
                    </p>
                </div>

                <div>
                    <h3 style="font-size: 1.5rem; color: white; display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                        <span style="color: var(--accent-green)">📉</span> Zero Jitter
                    </h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">
                        Packet loss and jitter cause rubber-banding. Our dedicated capacity ensures your packets arrive in perfect order, every single millisecond.
                    </p>
                </div>

                <div>
                     <h3 style="font-size: 1.5rem; color: white; display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                        <span style="color: var(--accent-green)">🌍</span> Region Unlocking
                    </h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">
                        Play with friends in Asia or Europe on our optimized trans-oceanic cables. We reduce ping on cross-region gaming by up to 40%.
                    </p>
                </div>
                
            </div>
            
            <div style="margin-top: 3rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;">
                <p style="color: var(--text-inverse); font-weight: 600; font-size: 1.1rem; margin-bottom: 1.5rem;">Ready to frag?</p>
                 <a href="#/purchase" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2.5rem;">Get Pro Gaming Access</a>
            </div>
        </div>

    </div>
  `,t.appendChild(a),e.appendChild(t),e}function P(){const e=document.createElement("div");e.className="dark-section",e.style.minHeight="100vh",e.appendChild(d());const t=document.createElement("main");return t.className="container",t.style.padding="4rem 1.5rem",t.style.maxWidth="800px",t.style.margin="0 auto",t.innerHTML=`
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
    `,e.appendChild(t),e}function S(){const e=document.createElement("div");e.appendChild(d());const t=document.createElement("main");t.className="container",t.style.padding="4rem 1.5rem",t.style.textAlign="center";const r=document.createElement("h1");r.textContent="Am I Exposed?",r.style.fontSize="3rem",r.style.marginBottom="2rem",t.appendChild(r);const n=document.createElement("div");return n.className="glass-panel",n.style.maxWidth="600px",n.style.margin="0 auto",n.style.padding="3rem",n.style.position="relative",n.innerHTML='<p class="fade-in">Analyzing Connection...</p>',fetch("http://ip-api.com/json/").then(i=>i.json()).then(i=>{const o=i.isp.includes("Cato")||i.isp.includes("BetterThanVPN");setTimeout(()=>{o?n.innerHTML=`
            <div class="fade-in">
              <div style="font-size: 5rem; margin-bottom: 1rem;">🛡️</div>
              <h2 style="color: var(--accent-green); margin-bottom: 1rem;">You Are Protected</h2>
              <div style="background: rgba(0, 255, 148, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid var(--accent-green);">
                <p style="margin: 0; color: white; font-size: 0.9rem;">Your Public Connection:</p>
                <div style="margin: 0.5rem 0;">
                    <span style="font-size: 1.5rem; font-weight: 700; color: white;">${i.query}</span>
                </div>
                <div style="margin-bottom: 1rem; color: var(--accent-green);">
                    ✓ ${i.isp} <span style="opacity: 0.7; color: white;">(${i.city})</span>
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
            `:n.innerHTML=`
            <div class="fade-in">
              <div style="font-size: 5rem; margin-bottom: 1rem;">⚠️</div>
              <h2 style="color: var(--accent-red); margin-bottom: 1rem;">Low Trust Detected</h2>
              <div style="background: rgba(255, 77, 77, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                <p style="margin: 0; color: var(--text-muted); font-size: 0.9rem;">Your Public Connection:</p>
                <div style="margin: 0.5rem 0;">
                    <span style="font-size: 1.5rem; font-weight: 700; color: white;">${i.query}</span>
                </div>
                <div style="margin-bottom: 1rem; color: var(--text-muted);">
                    ${i.isp} <span style="opacity: 0.5;">(${i.city}, ${i.countryCode})</span>
                </div>
                <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: var(--accent-red); font-weight: 600;">
                    ISP Trust Score: 24/100 (Flagged)
                </p>
              </div>
              <p style="color: var(--text-muted); margin-bottom: 2rem;">
                Your connection via <strong>${i.isp}</strong> is shared with thousands of other users. 
                Financial institutions may flag your IP as "High Risk" due to neighbors' activity.
              </p>
              <button class="btn btn-primary" style="width: 100%;">Upgrade to High Trust IP</button>
            </div>
          `},1500)}).catch(i=>{console.error(i),n.innerHTML='<p style="color: var(--accent-red)">Could not verify connection. Please disable adblockers.</p>'}),t.appendChild(n),e.appendChild(t),e}function T(){const e=document.createElement("div");e.appendChild(d());const t=document.createElement("main");return t.className="container",t.style.padding="4rem 1.5rem",t.style.maxWidth="800px",t.style.margin="0 auto",t.style.textAlign="center",t.innerHTML=`
    <h1 style="font-size: 3rem; margin-bottom: 2rem;">Get Connected in Seconds</h1>
    <p style="color: var(--text-muted); font-size: 1.25rem; margin-bottom: 4rem;">Enterprise security, consumer simplicity. No configuration required.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
      <!-- Step 1 -->
      <div class="glass-panel" style="padding: 2rem;">
        <div style="background: var(--accent-indigo); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; margin: 0 auto 1.5rem auto;">1</div>
        <h3 style="margin-bottom: 1rem;">Download</h3>
        <p style="color: var(--text-muted);">Get the BetterThanVPN Smart Client for Windows, Mac, or iOS.</p>
      </div>

      <!-- Step 2 -->
      <div class="glass-panel" style="padding: 2rem;">
        <div style="background: var(--accent-indigo); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; margin: 0 auto 1.5rem auto;">2</div>
        <h3 style="margin-bottom: 1rem;">Verify</h3>
        <p style="color: var(--text-muted);">Enter your unique Magic Link code sent to your email.</p>
      </div>

      <!-- Step 3 -->
      <div class="glass-panel" style="padding: 2rem;">
        <div style="background: var(--accent-green); color: black; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; margin: 0 auto 1.5rem auto;">3</div>
        <h3 style="margin-bottom: 1rem;">Connect</h3>
        <p style="color: var(--text-muted);">Click the big green button. That's it. You're secure.</p>
      </div>
    </div>
    
    <div style="margin-top: 4rem;">
      <button class="btn btn-primary" style="font-size: 1.25rem; padding: 1rem 3rem;">Download Now</button>
    </div>
  `,e.appendChild(t),e}function E(){const e=document.createElement("div");e.className="dark-section",e.style.minHeight="100vh",e.appendChild(d());const t=document.createElement("main");t.className="container",t.style.padding="4rem 1.5rem",t.style.textAlign="center";const r=document.createElement("div");r.innerHTML=`
    <h1 style="font-size: 3rem; margin-bottom: 1rem;">Enterprise-Grade <span style="color: var(--accent-indigo)">Security</span></h1>
    <p style="color: var(--text-muted); font-size: 1.25rem; margin-bottom: 4rem;">Comprehensive threat prevention built directly into the network backbone.</p>
  `,t.appendChild(r);const n=document.createElement("div");n.style.marginBottom="4rem",n.innerHTML=`
      <div style="position: relative; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 0 40px rgba(0, 255, 148, 0.2);">
        <img src="/security_house_v2.png" alt="Protected Home Network" style="width: 100%; height: auto; display: block;">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 30%; background: linear-gradient(to top, rgba(10,10,10,1), transparent);"></div>
      </div>
    `,t.appendChild(n);const i=document.createElement("div");i.className="bento-grid",i.style.gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))",i.style.gap="2rem",i.style.textAlign="left",[{title:"Firewall-as-a-Service (FWaaS)",cat:"Threat Prevention",desc:"Cloud-native firewall that inspects all traffic across all ports and protocols, eliminating the need for physical appliances.",icon:"🔥"},{title:"Threat Protection",cat:"Threat Prevention",desc:"Scans for viruses, malware, ransomware, and blocks access to malicious URLs.",icon:"🛡️"},{title:"Intrusion Prevention System (IPS)",cat:"Threat Prevention",desc:"Actively monitors network traffic for malicious activity and known attack signatures, blocking them instantly.",icon:"🚨"},{title:"Zero Trust Network Access (ZTNA)",cat:"Threat Prevention",desc:"Ensures users only access specific applications they are authorized for, verifying identity and context every time.",icon:"🔐"},{title:"Malware Prevention",cat:"Malware Prevention",desc:"Multi-layered defense using signature-based detection and machine learning to stop known and zero-day threats.",icon:"🦠"},{title:"DNS Security",cat:"Malware Prevention",desc:"Blocks command-and-control (C2) connections and prevents data exfiltration by inspecting DNS requests.",icon:"🌐"},{title:"Remote Browser Isolation (RBI)",cat:"Malware Prevention",desc:"Executes web content in a remote container, preventing malicious code from ever reaching the end-user device.",icon:"📦"}].forEach(l=>{const s=document.createElement("div");s.className="glass-panel",s.style.padding="2rem",s.style.display="flex",s.style.flexDirection="column",s.style.gap="1rem",s.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span style="font-size: 2.5rem;">${l.icon}</span>
        <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-indigo); border: 1px solid var(--accent-indigo); padding: 4px 8px; border-radius: 4px;">${l.cat}</span>
      </div>
      <h3 style="font-size: 1.25rem; margin: 0; color: white;">${l.title}</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0; line-height: 1.5;">${l.desc}</p>
    `,i.appendChild(s)}),t.appendChild(i);const a=document.createElement("div");return a.style.marginTop="6rem",a.style.position="relative",a.style.borderRadius="16px",a.style.overflow="hidden",a.style.boxShadow="0 10px 40px rgba(0,0,0,0.3)",a.innerHTML=`
        <img src="/security-threats.jpg" alt="Understand the extent of online threats" style="width: 100%; height: auto; display: block;">
    `,t.appendChild(a),t.appendChild(i),e.appendChild(t),e}function N(){const e=document.createElement("div");e.className="dark-section",e.style.minHeight="100vh",e.appendChild(d());const t=document.createElement("main");return t.className="container",t.style.padding="4rem 1.5rem",t.style.textAlign="center",t.innerHTML=`
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
  `,e.appendChild(t),e}function L(){const e=document.createElement("footer");e.style.background="var(--bg-dark)",e.style.color="white",e.style.padding="4rem 2rem 2rem",e.style.marginTop="4rem";const t=document.createElement("div");t.className="container",t.style.display="grid",t.style.gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))",t.style.gap="3rem",t.style.marginBottom="4rem";const r=[{title:"Product",links:["Download","Pricing","Features"]},{title:"Resources",links:["Support","Blog","Community","Privacy Tools"]},{title:"Company",links:["About Us","Careers","Press","Contact"]},{title:"Legal",links:["Privacy Policy","Terms of Service"]}],n=document.createElement("div");n.innerHTML=`
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
  `,t.appendChild(n),r.forEach(l=>{const s=document.createElement("div");s.innerHTML=`
      <h4 style="margin-bottom: 1.5rem; font-size: 1rem; color: white;">${l.title}</h4>
      <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem;">
        ${l.links.map(c=>{let m="#";return c==="Privacy Policy"&&(m="#/privacy"),c==="Terms of Service"&&(m="#/terms"),`<li><a href="${m}" style="color: var(--text-muted-dark); font-size: 0.9rem;">${c}</a></li>`}).join("")}
      </ul>
    `,t.appendChild(s)}),e.appendChild(t);const i=document.createElement("div");i.style.borderTop="1px solid rgba(255,255,255,0.1)",i.style.paddingTop="2rem",i.style.textAlign="center",i.style.color="var(--text-muted-dark)",i.style.fontSize="0.9rem",i.innerHTML=`&copy; ${new Date().getFullYear()} BetterThanVPN Inc. All rights reserved.`;const o=document.createElement("div");o.style.textAlign="center",o.style.marginBottom="1.5rem",o.style.color="#555",o.style.fontSize="0.8rem",o.innerHTML="Service not available in China, Vietnam, Morocco.",e.appendChild(o),e.appendChild(i);const a=document.createElement("style");return a.textContent=`
    footer a:hover { color: white !important; }
  `,e.appendChild(a),e}function M(){const e=document.createElement("div"),t=document.createElement("div");t.className="dark-section",t.style.paddingBottom="2rem",t.appendChild(d());const r=document.createElement("div");r.className="container",r.style.padding="4rem 1.5rem",r.style.textAlign="center",r.innerHTML=`
    <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Privacy Policy</h1>
    <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">
      Transparency is at the core of our mission. Here is exactly how we handle your data.
    </p>
  `,t.appendChild(r),e.appendChild(t);const n=document.createElement("main");return n.className="container",n.style.padding="4rem 1.5rem",n.style.maxWidth="800px",n.style.margin="0 auto",n.innerHTML=`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">1. No Logs Policy</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          BetterThanVPN maintains a strict zero-logs policy. We do not collect, store, or share any of the following information:
        </p>
        <ul style="list-style: disc; padding-left: 1.5rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.6;">
          <li>Your originating IP address.</li>
          <li>Your browsing history.</li>
          <li>DNS queries.</li>
          <li>Traffic destination or content.</li>
        </ul>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">2. Information We Collect</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          To operate our specific service, we collect minimal data required for account management:
        </p>
        <ul style="list-style: disc; padding-left: 1.5rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.6;">
          <li><strong>Account Information:</strong> An email address for account management and password reset purposes.</li>
          <li><strong>Payment Data:</strong> All payments are processed by Stripe. We do not store your credit card details.</li>
        </ul>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">3. Residential IP Usage</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          Our network utilizes legitimate residential IP addresses carried over enterprise backbones. While this provides superior access to streaming and banking services, it operates differently from traditional datacenter VPNs. We ensure that all IP usage complies with US carrier regulations.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">4. Jurisdiction</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          BetterThanVPN is incorporated in the United States and is subject to US law. However, because we do not store logs, we cannot produce user activity data even if compelled by a subpoena.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">5. Changes to This Policy</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          We may update this policy to reflect changes in our services or legal requirements. You will be notified of significant changes via email or a prominent notice on our website.
        </p>
      </section>

      <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          Last Updated: December 2025
        </p>
      </div>
    </div>
  `,e.appendChild(n),e}function A(){const e=document.createElement("div"),t=document.createElement("div");t.className="dark-section",t.style.paddingBottom="2rem",t.appendChild(d());const r=document.createElement("div");r.className="container",r.style.padding="4rem 1.5rem",r.style.textAlign="center",r.innerHTML=`
    <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Terms of Service</h1>
    <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">
      Please read these terms carefully before using our services.
    </p>
  `,t.appendChild(r),e.appendChild(t);const n=document.createElement("main");return n.className="container",n.style.padding="4rem 1.5rem",n.style.maxWidth="800px",n.style.margin="0 auto",n.innerHTML=`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">1. Acceptance of Terms</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          By accessing or using BetterThanVPN, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">2. User Conduct</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          You are responsible for all activities that occur under your account. You agree NOT to use the Service to:
        </p>
        <ul style="list-style: disc; padding-left: 1.5rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.6;">
          <li>Violate any applicable national or international law.</li>
          <li>Infringe upon the rights of others (e.g., copyright infringement).</li>
          <li>Distribute malware, viruses, or other harmful code.</li>
          <li>Engage in abusive behavior toward our network infrastructure (e.g., DDoS attacks).</li>
        </ul>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">3. Residential IP Usage</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          Our service provides access to legitimate residential IP addresses. You agree to use these IPs responsibly. We reserve the right to terminate accounts that flagrantly abuse these IPs, causing them to be blacklisted.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">4. Payment & Refunds</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          <strong>Subscriptions:</strong> Service is billed on a subscription basis. You will be billed in advance on a recurring and periodic basis.<br><br>
          <strong>Refunds:</strong> We offer a 3-day money-back guarantee for new users who are unsatisfied with the service performance.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">5. Limitation of Liability</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          In no event shall BetterThanVPN, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">6. Termination</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">
          We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
      </section>

      <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          Last Updated: December 2025
        </p>
      </div>
    </div>
  `,e.appendChild(n),e}function I(){const e=document.createElement("div");e.className="dark-section",e.style.minHeight="100vh",e.appendChild(d());const t=document.createElement("main");return t.className="container",t.style.padding="4rem 1.5rem",t.style.maxWidth="800px",t.style.margin="0 auto",t.style.textAlign="center",t.innerHTML=`
    <h1 style="font-size: 3rem; margin-bottom: 1rem;">Choose Your <span style="color: var(--accent-indigo)">Protection</span></h1>
    <p style="color: var(--text-muted); font-size: 1.25rem; margin-bottom: 4rem;">Simple, transparent pricing. No hidden fees.</p>

    <!-- Unified Plan Card (Resembling the Home Pricing) -->
    <div class="glass-panel" style="padding: 3rem; text-align: left; border: 1px solid var(--accent-indigo); box-shadow: 0 0 30px rgba(99, 102, 241, 0.15); position: relative;">
        <div style="position: absolute; top: -12px; right: 2rem; background: var(--accent-indigo); color: white; padding: 2px 10px; border-radius: 10px; font-size: 0.8rem; font-weight: 600;">
          ALL-ACCESS
        </div>
        
        <h3 style="font-size: 2rem; color: white;">Universal Access</h3>
        <div style="font-size: 3.5rem; font-weight: 700; margin: 1rem 0; color: white;">$15<span style="font-size: 1.25rem; color: var(--text-muted); font-weight: 400;">/mo</span></div>
        
        <div style="margin-bottom: 2rem; color: var(--accent-green); font-weight: 600; font-size: 1.1rem;">
          ✓ 3 Devices Included
        </div>

        <p style="color: var(--text-muted); margin-bottom: 2.5rem; font-size: 1.1rem;">
          Complete protection for Home, Gaming, Trading, and Public Wi-Fi.
        </p>

        <form style="display: flex; flex-direction: column; gap: 1rem;">
           <!-- Placeholder for potential direct checkout integration later -->
          <a href="${b.stripe.commuter}" target="_blank" class="btn btn-primary" style="width: 100%; text-align: center; box-sizing: border-box; display: inline-block; text-decoration: none; padding: 1rem; font-size: 1.2rem;">
            Activate Real Security — $15/month
            <div style="font-size: 0.8rem; font-weight: normal; opacity: 0.9; margin-top: 4px;">Up to 3 devices · Cancel anytime</div>
          </a>
          <p style="text-align: center; color: var(--text-muted); font-size: 0.8rem; margin-top: 1rem;">
            Processed securely by Stripe. 30-day money-back guarantee.
          </p>
        </form>

        <div style="margin-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;">
           <ul style="list-style: none; padding: 0; font-size: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; color: var(--text-inverse);">
            <li style="display: flex; gap: 10px;"><span>✓</span> Premium Backbone</li>
            <li style="display: flex; gap: 10px;"><span>✓</span> AES-256 Encryption</li>
            <li style="display: flex; gap: 10px;"><span>✓</span> Zero-Hops Routing</li>
            <li style="display: flex; gap: 10px;"><span>✓</span> Banking Protection</li>
          </ul>
        </div>
    </div>

    <!-- Trust Seals -->
    <div style="margin-top: 4rem; display: flex; justify-content: center; gap: 2rem; opacity: 0.6; filter: grayscale(100%);">
       <!-- Use placeholders or SVGs for Visa/Mastercard/Amex/Stripe -->
       <span style="color: white; font-weight: bold;">STRIPE SECURE</span>
       <span style="color: white; font-weight: bold;">SSL ENCRYPTED</span>
       <span style="color: white; font-weight: bold;">MONEY BACK GUARANTEE</span>
    </div>
  `,e.appendChild(t),e}const p=document.querySelector("#app"),H={"/":g,"/gaming":z,"/public-wifi":P,"/exposed":S,"/setup":T,"/security":E,"/patching":N,"/privacy":M,"/terms":A,"/purchase":I};function y(){const e=window.location.hash.slice(1)||"/",t=H[e]||g;p.innerHTML="",p.appendChild(t()),p.appendChild(L()),window.scrollTo(0,0)}window.addEventListener("hashchange",y);window.addEventListener("load",y);
