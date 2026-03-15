<script>
  import { base } from '$app/paths'; // Import base for GitHub Pages path handling
</script>

<header class="system-header">
  <div class="brand">
    <h2>C U N T</h2>
    <p>CLOTHES USING NATURAL TIEDYE</p>
    <div class="by-line">
      <p>// BY</p>
      <img src="{base}/images/LOGO.webp" alt="LOGO" class="header-logo" />
    </div>
  </div>
  <div class="meta">
    <p>DATE: 2026-11-04</p>
    <p>LOC: OSLO, NO</p>
  </div>
</header>

<style>
  .system-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid #000;
    padding: .4rem 2rem;
    margin-bottom: 1.4rem;
    position: relative;
    z-index:20;
    background: #f4f4f4;
  }

  .system-header h2 {
    /* Squished Bold Font */
    font-family: 'Inter', 'Arial Black', sans-serif;
    font-weight: 900;
    font-size: 3rem;
    color: #a1191b;
    display: inline-block;
    transform: scaleY(0.7); 
    transform-origin: left bottom;
    letter-spacing: -0.05em;
    margin: 0;
    line-height: 1;
  }

  .by-line {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: -0.4rem; /* Adjusts for the h2 scale gap */
  }

  /* Controlled smaller logo size */
  .header-logo {
    height: 60px !important; /* Reduced size */
    width: auto;
    object-fit: contain !important;
    transform: translate(0px,10px);
    display: block;
  }

  .meta {
    text-align: right;
  }

  .system-header p {
    color: #000;
    font-size: 0.8rem;
  }
</style>
