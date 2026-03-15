<script>
  import { base } from '$app/paths';
</script>

<section class="home-hero" style="background-image: url('{base}/images/HovedbildeLiggende.webp');">
  <div class="hero-content">
    <h1>CUNT</h1>
  </div>
</section>

<section class="info-text">
  <div class="container">
    <div class="manifesto">
      <p>
        If you have ever noticed lightened patches on your dark underwear, you are witnessing a silent, biological duty. This "bleaching" effect is a byproduct of the natural pH of a healthy vagina—typically between 3.8 and 4.5. This acidity is the body’s primary defense mechanism, a self-regulating cleaning service that flushes out bacteria and maintains equilibrium. 
      </p>
      
      <p>
        <strong>CUNT (Clothes Using Natural Tiedye)</strong> was born from this exact phenomenon. Rather than viewing this biological reality with shame or as a "stain" to be hidden, this collection uses it as an aesthetic foundation. We take the unpredictability of natural tie-dye to mimic the way a body interacts with fabric. Our garments are designed to honor the fact that a healthy body is an active, chemical, and changing environment.
      </p>

      <div class="divider"></div>

      <p>
        Discharge is a sign of health, not a lack of hygiene. A vagina is self-cleaning, requiring no "feminine washes" or douches—warm water on the outside is the gold standard. Just as the internal walls are lined with rugae to expand and contract, our textiles are engineered for utility and movement. 
      </p>
      
      <p>
        From the "queef"—which is simply displaced air—to the natural, musky scent that shifts with your cycle, the collection celebrates these mechanical and biological processes. Variations in labia size, hair density, and cycle-driven texture are not flaws; they are the biological norm. Thrush is a standard hiccup, and "wetness" is a hormonal map. We should not be ashamed that our bodies are doing their duties.
      </p>
      
      <p class="signature">
        // BY CANESTEN
      </p>
    </div>
  </div>
</section>

<style>
  .home-hero {
    width: 100%;
    height: 100vh;
    transform:translate(0px,1.25rem);
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-content h1 {
    font-size: clamp(5rem, 15vw, 12rem);
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    color: #a1191b;
    transform: scaleY(0.7);
    transform-origin: center;
    letter-spacing: -0.05em;
    line-height: 0.8;
  }

  .info-text {
    padding: 8rem 2rem;
    background: #e2e2e2; /* Matching your existing panel color */
    border-top: 4px solid #000;
  }

  .container {
    max-width: 750px; /* Narrower width for better justification legibility */
    margin: 0 auto;
  }

  .manifesto {
    /* TYPOGRAPHIC SQUISH & JUSTIFICATION */
    text-align: justify;
    text-justify: inter-word; /* Distributes space between words like LaTeX */
    hyphens: auto; /* Required for proper justification on narrow screens */
    font-family: 'Departure Mono', monospace; /* Keeping your persistent font */
    line-height: 1.6;
    color: #000;
  }

  .manifesto p {
    margin-bottom: 1.5rem;
  }

  .divider {
    border-top: 2px dashed #000;
    margin: 3rem 0;
    width: 50px;
  }

  .signature {
    margin-top: 3rem;
    font-weight: 900;
    letter-spacing: 0.2em;
  }
</style>
