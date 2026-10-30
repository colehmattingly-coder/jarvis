// Features section only. The mesh is an illustration, not a detection result.
section("features", () => `
  <style>
    #features { --feature-accent: ${SITE.color}; padding: 38px 0; }
    #features .feature-shell { border: 1px solid #29384b; border-radius: 24px; overflow: hidden; background: #101b2b; }
    #features .feature-heading { padding: 36px 36px 28px; max-width: 740px; }
    #features .feature-eyebrow { margin: 0 0 12px; color: var(--feature-accent); font-size: 11px; font-weight: 750; letter-spacing: .16em; text-transform: uppercase; }
    #features h2 { margin: 0 0 14px; font-size: clamp(28px, 4vw, 43px); line-height: 1.15; letter-spacing: -.045em; }
    #features .feature-intro { margin: 0; color: #a9b8cb; max-width: 570px; font-size: 15px; }
    #features .feature-demo { display: grid; grid-template-columns: 1.1fr 1fr; margin: 0 24px 24px; border: 1px solid #2b3c51; border-radius: 16px; overflow: hidden; }
    #features .feature-portrait { position: relative; display: grid; place-items: center; min-height: 290px; background: radial-gradient(ellipse at center, #243c4b, #0b1624 72%); }
    #features .feature-portrait svg { width: 220px; height: 265px; color: var(--feature-accent); }
    #features .feature-demo-label { position: absolute; left: 16px; top: 14px; color: #a9b8cb; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; }
    #features .feature-preview-label { position: absolute; bottom: 12px; margin: 0; color: #8b9eb4; font-size: 11px; }
    #features .feature-detail { padding: 28px; align-self: center; }
    #features .feature-pill { display: inline-block; padding: 4px 9px; border: 1px solid var(--feature-accent); border-radius: 20px; color: var(--feature-accent); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }
    #features h3 { margin: 14px 0 8px; font-size: 21px; line-height: 1.3; letter-spacing: -.025em; }
    #features .feature-detail p { margin: 0; color: #a9b8cb; font-size: 14px; }
    #features .feature-measures { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
    #features .feature-measures span { border-radius: 6px; background: #1b2c40; padding: 5px 9px; color: #c4d2e3; font-size: 11px; }
    #features .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #29384b; }
    #features .feature-card { padding: 25px; }
    #features .feature-card + .feature-card { border-left: 1px solid #29384b; }
    #features .feature-number { color: var(--feature-accent); font-size: 12px; font-family: monospace; }
    #features .feature-card h3 { font-size: 17px; }
    #features .feature-card p { color: #a9b8cb; font-size: 13px; margin: 0; }
    #features .feature-note { padding: 18px 25px; border-top: 1px solid #29384b; color: #91a3ba; font-size: 12px; margin: 0; }
    #features .feature-site-context { margin: 14px 4px 0; color: #91a3ba; font-size: 12px; }
    #features .feature-site-context strong { color: #c4d2e3; }
    #features .analysis-panel { padding: 28px; border-top: 1px solid #29384b; }
    #features .analysis-panel label { display: block; font-weight: 650; margin: 16px 0 8px; }
    #features .analysis-panel input { max-width: 100%; color: #eef3fa; }
    #features .analysis-panel input::file-selector-button { padding: 12px 16px; margin-right: 12px; border: 0; border-radius: 8px; background: var(--feature-accent); cursor: pointer; }
    #features .analysis-panel p { color: #a9b8cb; font-size: 14px; }
    #features #analysis-status { min-height: 24px; color: #ffcf70; }
    #features #analysis-photo { display: block; max-width: 100%; max-height: 650px; width: auto; height: auto; margin: 20px auto; border-radius: 12px; }
    #features [hidden] { display: none !important; }
    #features .analysis-total { font-size: 32px; font-weight: 750; color: var(--feature-accent); }
    #features .analysis-table-wrap { overflow-x: auto; }
    #features table { width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; }
    #features th { font-weight: 600; }
    #features th, #features td { padding: 12px 10px; border-bottom: 1px solid #29384b; }
    @media (max-width: 640px) {
      #features .feature-heading { padding: 26px 22px; }
      #features .feature-demo { grid-template-columns: 1fr; margin: 0 14px 20px; }
      #features .feature-detail { padding: 22px; }
      #features .feature-grid { grid-template-columns: 1fr; }
      #features .feature-card + .feature-card { border-left: 0; border-top: 1px solid #29384b; }
    }
  </style>
  <div class="feature-shell">
    <header class="feature-heading">
      <p class="feature-eyebrow">${SITE.name} / A closer look</p>
      <h2>Your face. A new perspective.</h2>
      <p class="feature-intro">Explore the geometry behind your features, from facial proportions to profile angles. Clear measurements, with room for human individuality.</p>
    </header>
    <div class="feature-demo">
      <div class="feature-portrait">
        <span class="feature-demo-label">Landmark map / concept</span>
        <svg viewBox="0 0 220 265" role="img" aria-label="Illustrative facial landmark mesh with highlighted forehead, eyes, nose, mouth and chin points">
          <path d="M110 25 C65 25 43 58 46 110 C47 153 62 197 110 229 C158 197 173 153 174 110 C177 58 155 25 110 25Z" fill="#213747" stroke="currentColor" stroke-opacity=".5"/>
          <g fill="none" stroke="currentColor" stroke-width=".7" opacity=".45">
            <path d="M110 25V229 M48 95L110 70 172 95 110 113Z M48 95L77 115 57 151 110 172 163 151 143 115 172 95 M110 70L77 115 110 145 143 115Z M57 151L110 145 163 151 M57 151L79 188 110 172 141 188 163 151 M79 188L110 229 141 188 M63 58L110 70 157 58 M63 58L48 95 M157 58L172 95 M77 115L110 172 143 115 M79 188H141"/>
            <path d="M65 101Q78 91 93 102Q79 113 65 101 M127 102Q142 91 155 101Q141 113 127 102 M110 113L99 145H121Z M85 175Q110 165 135 175Q110 192 85 175"/>
          </g>
          <g fill="currentColor">
            <circle cx="110" cy="25" r="3"/><circle cx="110" cy="229" r="3"/>
            <circle cx="48" cy="95" r="3"/><circle cx="172" cy="95" r="3"/>
            <circle cx="65" cy="101" r="3"/><circle cx="93" cy="102" r="3"/>
            <circle cx="127" cy="102" r="3"/><circle cx="155" cy="101" r="3"/>
            <circle cx="110" cy="145" r="3"/><circle cx="85" cy="175" r="3"/><circle cx="135" cy="175" r="3"/>
          </g>
          <g fill="currentColor" font-size="8" font-family="monospace">
            <text x="117" y="25">10</text><text x="117" y="236">152</text>
            <text x="24" y="91">234</text><text x="180" y="91">454</text>
            <text x="50" y="119">33</text><text x="88" y="92">133</text>
            <text x="119" y="92">362</text><text x="157" y="119">263</text>
            <text x="119" y="144">1</text><text x="67" y="181">61</text><text x="142" y="181">291</text>
          </g>
        </svg>
        <p class="feature-preview-label">Illustration · no photo analyzed</p>
      </div>
      <div class="feature-detail">
        <span class="feature-pill">Designed for clarity</span>
        <h3>See the points.<br>Understand the proportions.</h3>
        <p>The detector maps 478 facial landmarks onto your photo, with key reference points labeled so you can see where each measurement starts.</p>
        <div class="feature-measures" aria-label="Planned measurement categories"><span>Angles</span><span>Ratios</span><span>Proportions</span></div>
      </div>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <span class="feature-number">01 / CAPTURE</span>
        <h3>Two views. More context.</h3>
        <p>Upload a front JPG or PNG to explore facial proportions. Side-profile analysis is coming soon.</p>
      </article>
      <article class="feature-card">
        <span class="feature-number">02 / EXPLORE</span>
        <h3>Geometry you can see.</h3>
        <p>A landmark overlay makes reference points visible. Clear feedback flags images that are too small or contain no detectable face.</p>
      </article>
      <article class="feature-card">
        <span class="feature-number">03 / STAY PRIVATE</span>
        <h3>Your photos stay yours.</h3>
        <p>Analysis runs in your browser. Photos stay on your device, with no image uploads to a server.</p>
      </article>
    </div>
    <div class="analysis-panel" aria-labelledby="analysis-heading">
      <h3 id="analysis-heading">Try your front photo</h3>
      <p>Use a JPG or PNG, at least 256 × 256 pixels, up to 20 MB. Hold the camera at arm’s length and eye level, look straight ahead, keep a neutral expression, and move hair off your face.</p>
      <label for="front-photo">Choose a front photo</label>
      <input id="front-photo" type="file" accept="image/jpeg,image/png" aria-describedby="analysis-status">
      <p>Your photo stays in this browser. Only detector assets are downloaded.</p>
      <p id="analysis-status" role="status" aria-live="polite"></p>
      <canvas id="analysis-photo" hidden aria-label="Uploaded photo with facial landmarks. Gold dots and numbers identify key reference points."></canvas>
      <div id="analysis-results" hidden aria-labelledby="proportion-label">
        <h3 id="proportion-label">Proportion Score</h3>
        <div class="analysis-total"><span id="proportion-total"></span> / 10</div>
        <p id="proportion-note">Measures similarity to reference ratios; photo angle affects results.</p>
        <p>Targets are editable example references, not validated scientific standards. Profile angles: coming soon.</p>
        <div class="analysis-table-wrap"><table>
          <caption>Front measurements and reference targets; metric scores use a 0–10 scale.</caption>
          <thead><tr><th scope="col">Measurement</th><th scope="col">Your value</th><th scope="col">Target range</th><th scope="col">Metric score</th></tr></thead>
          <tbody id="measurement-rows"></tbody>
        </table></div>
      </div>
    </div>
    <p class="feature-note"><strong>Proportion Score</strong><br>Measures similarity to reference ratios; photo angle affects results.</p>
  </div>
  <p class="feature-site-context"><strong>${SITE.name}</strong> · ${SITE.tagline}</p>
`);
