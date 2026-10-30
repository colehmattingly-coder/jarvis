// Person D: build the Sign up section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #signup so your CSS only affects your section.
section("signup", () => `
  <style>
    #signup .signup-card {
      position: relative;
      overflow: hidden;
      padding: clamp(28px, 6vw, 52px);
      border: 1px solid #27405f;
      border-radius: 20px;
      background:
        radial-gradient(circle at 100% 0%, ${SITE.color}2e, transparent 38%),
        radial-gradient(circle at 0% 100%, #6e66ff20, transparent 34%),
        #101a2e;
      box-shadow: 0 18px 48px #00000035;
      text-align: center;
    }
    #signup .signup-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 14px;
      color: ${SITE.color};
      font-size: .78rem;
      font-weight: 750;
      letter-spacing: .1em;
      text-transform: uppercase;
    }
    #signup .signup-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${SITE.color};
      box-shadow: 0 0 14px ${SITE.color};
    }
    #signup h2 {
      max-width: 620px;
      margin: 0 auto 10px;
      color: #f4f7fc;
      font-size: clamp(1.8rem, 5vw, 2.7rem);
      line-height: 1.12;
    }
    #signup .signup-copy {
      max-width: 550px;
      margin: 0 auto 26px;
      color: #b9c7dc;
      font-size: 1.04rem;
    }
    #signup .signup-form {
      display: flex;
      max-width: 520px;
      margin: 0 auto;
      padding: 6px;
      gap: 8px;
      border: 1px solid #334a6d;
      border-radius: 14px;
      background: #0a1324;
    }
    #signup .signup-email {
      min-width: 0;
      flex: 1;
      border: 0;
      outline: 0;
      padding: 12px 14px;
      background: transparent;
      color: #eef3fa;
      font: inherit;
    }
    #signup .signup-email::placeholder { color: #7586a3; }
    #signup .signup-submit {
      flex: 0 0 auto;
      border: 0;
      border-radius: 10px;
      padding: 12px 18px;
      cursor: pointer;
      background: ${SITE.color};
      color: #08111f;
      font: inherit;
      font-weight: 800;
      transition: transform .15s ease, box-shadow .15s ease;
    }
    #signup .signup-submit:hover,
    #signup .signup-submit:focus-visible {
      transform: translateY(-1px);
      box-shadow: 0 7px 20px ${SITE.color}55;
    }
    #signup .signup-note {
      margin: 16px 0 0;
      color: #8fa1bd;
      font-size: .84rem;
    }
    #signup .signup-status {
      min-height: 1.5em;
      margin: 12px 0 0;
      color: ${SITE.color};
      font-weight: 650;
    }
    #signup .signup-perks {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px 20px;
      margin: 28px 0 0;
      padding: 0;
      list-style: none;
      color: #c5d1e4;
      font-size: .88rem;
    }
    #signup .signup-perks li::before {
      content: "✓";
      margin-right: 7px;
      color: ${SITE.color};
      font-weight: 800;
    }
    @media (max-width: 520px) {
      #signup .signup-form { flex-direction: column; }
      #signup .signup-submit { width: 100%; }
    }
  </style>
  <div class="signup-card">
    <div class="signup-eyebrow"><span class="signup-dot"></span> Early access</div>
    <h2>See your features from a fresh perspective.</h2>
    <p class="signup-copy">Join the ${SITE.name} waitlist for an approachable, math-led look at facial proportions and photo presentation.</p>
    <form class="signup-form" onsubmit="event.preventDefault(); var email=this.querySelector('input'); var status=this.parentElement.querySelector('.signup-status'); status.textContent=email.checkValidity() ? 'You’re on the list — we’ll be in touch.' : 'Enter a valid email address to join.'; if (email.checkValidity()) email.value='';">
      <input class="signup-email" type="email" aria-label="Email address" placeholder="you@example.com" autocomplete="email" required>
      <button class="signup-submit" type="submit">Join the waitlist</button>
    </form>
    <p class="signup-status" role="status" aria-live="polite"></p>
    <p class="signup-note">No photo needed to join. Your email stays on this page in this demo.</p>
    <ul class="signup-perks" aria-label="Waitlist benefits">
      <li>Free to join</li>
      <li>Private by design</li>
      <li>Early feature access</li>
    </ul>
  </div>
`);
