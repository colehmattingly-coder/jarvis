// Person A: build the Hero section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #hero so your CSS only affects your section.
section("hero", () => `
  <style>
    #hero .hero-card {
      position: relative;
      overflow: hidden;
      padding: 64px 32px;
      border-radius: 20px;
      border: 1px solid #1f2d47;
      background:
        radial-gradient(circle at 20% 0%, ${SITE.color}33, transparent 55%),
        #101a2e;
    }
    #hero .hero-inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 48px;
    }
    #hero .hero-copy {
      flex: 1 1 320px;
      max-width: 520px;
      text-align: left;
    }
    #hero .hero-badge {
      display: inline-block;
      padding: 4px 14px;
      margin-bottom: 20px;
      border: 1px solid ${SITE.color};
      border-radius: 999px;
      color: ${SITE.color};
      font-size: .8rem;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    #hero h1 {
      margin: 0 0 16px;
      font-size: clamp(2.6rem, 8vw, 4.5rem);
      line-height: 1.05;
      color: ${SITE.color};
    }
    #hero .hero-headline {
      margin: 0 0 12px;
      font-size: clamp(1.3rem, 3.5vw, 1.8rem);
      line-height: 1.25;
      color: #eef3fa;
    }
    #hero .hero-tagline {
      margin: 0 0 32px;
      font-size: clamp(1rem, 2.5vw, 1.15rem);
      color: #c7d2e4;
    }
    #hero .hero-btn {
      display: inline-block;
      padding: 16px 40px;
      border-radius: 999px;
      background: ${SITE.color};
      color: #0b1220;
      font-size: 1.1rem;
      font-weight: 700;
      text-decoration: none;
      transition: transform .15s ease, box-shadow .15s ease;
    }
    #hero .hero-btn:hover,
    #hero .hero-btn:focus-visible {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px ${SITE.color}66;
    }
    #hero .hero-sub {
      margin: 16px 0 0;
      font-size: .85rem;
      color: #98a6bc;
    }
    #hero .hero-demo {
      flex: 0 1 280px;
      padding: 20px;
      border-radius: 18px;
      border: 1px solid #1f2d47;
      background: #0b1220;
      box-shadow: 0 16px 40px #00000066;
      text-align: center;
    }
    #hero .hero-photo {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      height: 150px;
      margin-bottom: 16px;
      border-radius: 12px;
      background: linear-gradient(160deg, #1a2a47, #101a2e);
      overflow: hidden;
    }
    #hero .hero-silhouette {
      width: 70px;
      height: 100px;
      border-radius: 35px 35px 0 0;
      background: #2c4066;
      position: relative;
    }
    #hero .hero-silhouette::before {
      content: "";
      position: absolute;
      top: -34px;
      left: 14px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #2c4066;
    }
    #hero .hero-score {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 110px;
      margin: 0 auto 12px;
      border-radius: 50%;
      background: conic-gradient(${SITE.color} 0 82%, #1f2d47 82% 100%);
    }
    #hero .hero-score-num {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 86px;
      height: 86px;
      border-radius: 50%;
      background: #0b1220;
      font-size: 1.9rem;
      font-weight: 800;
      color: ${SITE.color};
    }
    #hero .hero-bars {
      display: grid;
      gap: 8px;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: .78rem;
      color: #98a6bc;
      text-align: left;
    }
    #hero .hero-bars li {
      display: grid;
      grid-template-columns: 84px 1fr;
      align-items: center;
      gap: 8px;
    }
    #hero .hero-bar {
      height: 6px;
      border-radius: 999px;
      background: #1f2d47;
      overflow: hidden;
    }
    #hero .hero-bar i {
      display: block;
      height: 100%;
      border-radius: 999px;
      background: ${SITE.color};
    }
  </style>
  <div class="hero-card">
    <div class="hero-inner">
      <div class="hero-copy">
        <span class="hero-badge">Photo rating, by the numbers</span>
        <h1>${SITE.name}</h1>
        <h2 class="hero-headline">Upload a photo. Get your score.</h2>
        <p class="hero-tagline">${SITE.tagline}</p>
        <a class="hero-btn" href="#signup">Rate my photo</a>
        <p class="hero-sub">Free to join. Just for fun, and your photo stays yours.</p>
      </div>
      <div class="hero-demo" aria-hidden="true">
        <div class="hero-photo"><div class="hero-silhouette"></div></div>
        <div class="hero-score"><div class="hero-score-num">8.2</div></div>
        <ul class="hero-bars">
          <li>Symmetry <span class="hero-bar"><i style="width:86%"></i></span></li>
          <li>Proportions <span class="hero-bar"><i style="width:78%"></i></span></li>
          <li>Skin clarity <span class="hero-bar"><i style="width:84%"></i></span></li>
        </ul>
      </div>
    </div>
  </div>
`);
