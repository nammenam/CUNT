<script>
  import { base } from "$app/paths";
</script>

<section
  class="home-hero"
  style="background-image: url('{base}/images/HovedbildeLiggende.webp');"
>
  <div class="hero-content">
    <h1>CUNT</h1>
  </div>
</section>

<section class="info-text">
  <div class="container">
    <div class="manifesto">
      <p>
        CUNT was born from a conversation between friends. One daring to say
        something they hadn't said to anyone before: “Have you ever gotten
        orange patches in your dark underwear?” she asked. “Omg, yes!” she
        answered. And there it was. A taboo broken down. And then came a wish to
        break it down for every person with a vagina out there. The feeling of
        understanding, and telling the whole world it is normal. In a
        fashionable way of course. And here it is!
      </p>
      <p>A clothing collection inspired by your underwear!</p>

      <div class="divider"></div>

      <p class="signature">// CANESTEN</p>
    </div>
  </div>
</section>

<style>
  .home-hero {
    width: 100%;
    height: 100vh;
    transform: translate(0px, 1.25rem);
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-content h1 {
    font-size: clamp(5rem, 15vw, 12rem);
    font-family: "Inter", sans-serif;
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
    font-family: "Departure Mono", monospace; /* Keeping your persistent font */
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
