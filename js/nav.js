// ===== SHARED NAV & FOOTER INJECTION =====

function injectNav(activePage) {
  const nav = `
  <nav class="topbar">
    <div style="display:flex;align-items:center;gap:3rem">
      <a href="index.html" class="logo-link">
        <img src="assets/logo.png" alt="MAGNAVOX"/>
      </a>
      <div class="nav-links">
        <a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a>
        <a href="events.html" ${activePage==='events'?'class="active"':''}>Events</a>
        <a href="coaching.html" ${activePage==='coaching'?'class="active"':''}>Coaching</a>
      </div>
    </div>
    <div class="nav-actions">
      <button class="profile-btn" id="profile-btn">
        <span class="material-symbols-outlined" style="font-size:1.1rem">account_circle</span>
        Account
      </button>
      <div class="profile-dropdown" id="profile-dropdown">
        <a href="#">Sign In</a>
        <a href="#">Log In</a>
      </div>
    </div>
  </nav>`;

  const mobileNav = `
  <nav class="bottom-nav">
    <a href="index.html" class="nav-item ${activePage==='home'?'active':''}">
      <span class="icon material-symbols-outlined">grid_view</span>
      Home
    </a>
    <a href="events.html" class="nav-item ${activePage==='events'?'active':''}">
      <span class="icon material-symbols-outlined">sports_esports</span>
      Events
    </a>
    <a href="coaching.html" class="nav-item ${activePage==='coaching'?'active':''}">
      <span class="icon material-symbols-outlined">school</span>
      Coaching
    </a>
  </nav>`;

  const footer = `
  <footer style="background:#0e0e0e;padding:4rem 0 2rem;border-top:1px solid rgba(93,63,59,0.2)">
    <div class="container">
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:3rem;margin-bottom:3rem">
        <div>
          <a href="index.html"><img src="assets/logo.png" alt="MAGNAVOX" style="height:3rem;object-fit:contain"/></a>
          <p style="color:var(--on-surface-variant);margin-top:1rem;max-width:260px;font-size:0.9rem">Building the kinetic future for Tunisian creators and competitors.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:3rem">
          <div style="display:flex;flex-direction:column;gap:0.75rem">
            <span class="section-label" style="margin-bottom:0.25rem">Ecosystem</span>
            <a href="events.html" style="color:var(--on-surface-variant);text-decoration:none;font-size:0.9rem" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='var(--on-surface-variant)'">Events</a>
            <a href="coaching.html" style="color:var(--on-surface-variant);text-decoration:none;font-size:0.9rem" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='var(--on-surface-variant)'">Coaching</a>
            <a href="#" style="color:var(--on-surface-variant);text-decoration:none;font-size:0.9rem" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='var(--on-surface-variant)'">Community</a>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.75rem">
            <span class="section-label" style="margin-bottom:0.25rem">Support</span>
            <a href="#" style="color:var(--on-surface-variant);text-decoration:none;font-size:0.9rem">Contact</a>
            <a href="#" style="color:var(--on-surface-variant);text-decoration:none;font-size:0.9rem">Privacy</a>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.75rem">
            <span class="section-label" style="margin-bottom:0.25rem">Social</span>
            <a href="#" style="color:var(--on-surface-variant);text-decoration:none;font-size:0.9rem;font-weight:700;font-style:italic">DISCORD</a>
            <a href="#" style="color:var(--on-surface-variant);text-decoration:none;font-size:0.9rem;font-weight:700;font-style:italic">X.COM</a>
          </div>
        </div>
      </div>
      <div style="text-align:center;color:rgba(160,154,153,0.4);font-size:0.7rem;letter-spacing:0.3em;text-transform:uppercase;border-top:1px solid rgba(93,63,59,0.1);padding-top:2rem">
        © 2026 Magnavox Kinetic Labs. All Rights Reserved.
      </div>
    </div>
  </footer>`;

  document.getElementById('nav-placeholder').innerHTML = nav;
  document.getElementById('footer-placeholder').innerHTML = footer;
  const mobileEl = document.getElementById('mobile-nav-placeholder');
  if (mobileEl) mobileEl.innerHTML = mobileNav;
}
