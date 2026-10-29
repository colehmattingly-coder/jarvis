// Person A: build the Hero section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #hero so your CSS only affects your section.
section("hero", () => `
  <style>
    #hero .hero-card {
      position: relative;
      overflow: hidden;
      text-align: center;
      padding: 72px 24px;
      border-radius: 20px;
      border: 1px solid #1f2d47;
      background:
        radial-gradient(circle at 50% 0%, ${SITE.color}33, transparent 60%),
        #101a2e;
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
    #hero .hero-tagline {
      max-width: 560px;
      margin: 0 auto 32px;
      font-size: clamp(1.05rem, 2.5vw, 1.3rem);
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
  </style>
  <div class="hero-card">
    <span class="hero-badge">Study smarter</span>
    <h1>${SITE.name}</h1>
    <p class="hero-tagline">${SITE.tagline}</p>
    <a class="hero-btn" href="#signup">Get early access</a>
    <p class="hero-sub">Free to join. No spam.</p>
  </div>
`);
