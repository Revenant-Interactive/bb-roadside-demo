const services = [
  { icon: "01", title: "Tire Changes", copy: "Flat tire or damaged wheel? Get help changing to your usable spare and get moving again." },
  { icon: "02", title: "Jumpstarts", copy: "A dead battery can stop the day cold. B&B helps get your vehicle started and back on the road." },
  { icon: "03", title: "Vehicle Lockouts", copy: "Locked your keys inside? Request roadside help without adding more stress to the situation." },
  { icon: "04", title: "Fuel Delivery", copy: "Ran out before the next station? B&B can bring enough fuel to help you reach one safely." },
  { icon: "05", title: "Battery Installation", copy: "Need more than a jump? Ask about on-site battery installation for your vehicle." },
];

const steps = [
  ["01", "Send your location", "Share where you are, what you drive, and what happened."],
  ["02", "Confirm the help you need", "B&B reviews the details and confirms the next step with you."],
  ["03", "Get back on the road", "Roadside help comes to you so you can keep your day moving."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="B and B Roadside home">
          <span className="brand-mark">B&amp;B</span>
          <span className="brand-copy"><strong>ROADSIDE</strong><small>LLC · MANTENO, ILLINOIS</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a><a href="#process">How it works</a><a href="#areas">Service areas</a>
        </nav>
        <a className="button button-small" href="#request-help">Request help</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> LOCAL ROADSIDE ASSISTANCE</p>
          <h1>STUCK DOESN’T<br />HAVE TO MEAN<br /><em>STRANDED.</em></h1>
          <p className="hero-lede">Reliable, affordable roadside help for drivers in Manteno, Aurora, Joliet, and nearby communities.</p>
          <div className="hero-actions">
            <a className="button" href="#request-help">Get roadside help <span>→</span></a>
            <a className="text-link" href="#services">Explore services <span>↘</span></a>
          </div>
        </div>
        <div className="hero-note"><strong>YOUR DAY ISN’T OVER.</strong><span>Tell us what happened. We’ll help you figure out the next move.</span></div>
      </section>

      <section className="trust-strip">
        <div><strong>MANTENO-BASED</strong><span>Local help when the road gets complicated.</span></div>
        <div><strong>STRAIGHTFORWARD SERVICE</strong><span>Clear communication before the next step.</span></div>
        <div><strong>PEOPLE COME FIRST</strong><span>Customers matter more than profit.</span></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div><p className="kicker">WHAT WE DO</p><h2>THE HELP YOU NEED.<br /><em>RIGHT WHERE YOU ARE.</em></h2></div>
          <p>From a dead battery to a flat tire, B&amp;B Roadside helps remove the obstacle between you and the rest of your day.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className={`service-card ${index === 0 ? "featured" : ""}`} key={service.title}>
              <span className="service-number">{service.icon}</span>
              <div className="service-icon" aria-hidden="true">{index === 0 ? "✦" : index === 1 ? "↯" : index === 2 ? "⌁" : index === 3 ? "◒" : "＋"}</div>
              <h3>{service.title}</h3><p>{service.copy}</p><a href="#request-help">Ask for this service →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="mission">
        <div className="mission-image" role="img" aria-label="Roadside technician helping a driver" />
        <div className="mission-copy">
          <p className="kicker light">WHY B&amp;B</p>
          <h2>HELPING PEOPLE<br />ISN’T A SLOGAN.<br /><em>IT’S THE MISSION.</em></h2>
          <p>Car trouble is already stressful. B&amp;B Roadside LLC exists to make the next step simpler with dependable help, fair communication, and respect for the person behind the wheel.</p>
          <blockquote>“Our customers are more important than profit.”</blockquote>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading compact"><div><p className="kicker">HOW IT WORKS</p><h2>THREE SIMPLE STEPS.<br /><em>ONE CLEAR NEXT MOVE.</em></h2></div></div>
        <div className="steps">
          {steps.map(([num, title, copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="areas" id="areas">
        <p className="kicker light">SERVICE AREA</p><h2>LOCAL HELP FOR<br /><em>CHICAGOLAND DRIVERS.</em></h2>
        <div className="area-list"><span>MANTENO</span><span>AURORA</span><span>JOLIET</span><span>NEARBY AREAS</span></div>
        <p>Not sure if you’re within range? Send your location and ask.</p>
      </section>

      <section className="request section" id="request-help">
        <div className="request-copy"><p className="kicker">REQUEST ROADSIDE HELP</p><h2>TELL B&amp;B<br /><em>WHAT HAPPENED.</em></h2><p>Share the basics so the right kind of help can be confirmed before anyone heads your way.</p><div className="demo-note"><strong>Demo concept</strong><span>The final contact route and business phone will be connected after approval.</span></div></div>
        <form className="request-form">
          <label>Your name<input type="text" placeholder="First and last name" /></label>
          <div className="form-row"><label>Your location<input type="text" placeholder="Street, town, or landmark" /></label><label>Vehicle<input type="text" placeholder="Year, make, model" /></label></div>
          <label>What do you need?<select defaultValue=""><option value="" disabled>Select a service</option><option>Tire change</option><option>Jumpstart</option><option>Vehicle lockout</option><option>Fuel delivery</option><option>Battery installation</option><option>Something else</option></select></label>
          <label>What happened?<textarea placeholder="Tell us what is going on and anything we should know." rows={4} /></label>
          <button type="button" className="button form-button">Request help <span>→</span></button>
          <small>Demo form only. No information is submitted from this preview.</small>
        </form>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">B&amp;B</span><span className="brand-copy"><strong>ROADSIDE</strong><small>LLC · MANTENO, ILLINOIS</small></span></a><p>Jumpstarts · Tire Changes · Lockouts · Fuel Delivery · Battery Installation</p><span>DEMO CONCEPT FOR B&amp;B ROADSIDE LLC</span></footer>
    </main>
  );
}
