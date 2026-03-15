<script>
  import Header from '$lib/Header.svelte';
  import Catalog from '$lib/Catalog.svelte';
  import Editorial from '$lib/Editorial.svelte';
  import Homepage from '$lib/Homepage.svelte';
  import BackgroundGraphics from '$lib/BackgroundGraphics.svelte'; // New import  

  let activeTab = 'home'; 
</script>

<main class="page-container">
  <BackgroundGraphics /> <Header />
  <nav class="tab-nav">
    <button 
      class="tab-btn {activeTab === 'home' ? 'active' : ''}" 
      on:click={() => activeTab = 'home'}
    >
      <span class="btn-label"><strong>[ HOME ]</strong></span>
    </button>
    
    <button 
      class="tab-btn {activeTab === 'shop' ? 'active' : ''}" 
      on:click={() => activeTab = 'shop'}
    >
      <span class="btn-label"><strong>[ SHOP ]</strong></span>
    </button>
    
    <button 
      class="tab-btn {activeTab === 'gallery' ? 'active' : ''}" 
      on:click={() => activeTab = 'gallery'}
    >
      <span class="btn-label"><strong>[ GALLERY ]</strong></span>
    </button>
  </nav>

  <div class="content-area">
    {#if activeTab === 'home'}
      <div class="fade-in">
        <Homepage />
      </div>
    {:else if activeTab === 'shop'}
      <div class="fade-in">
        <Catalog />
      </div>
    {:else if activeTab === 'gallery'}
      <div class="fade-in">
        <Editorial />
      </div>
    {/if}
  </div>
</main>

<style>
  /* --- GLOBAL STYLES --- */
  @font-face {
    font-family: 'Departure Mono';
    src: url('/fonts/DepartureMono-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  :global(body) {
    margin: 0;
    background-color: #f4f4f4;
    color: #000000;
    font-family: 'Departure Mono', monospace;
    font-weight: 600;
    -webkit-font-smoothing: none;
    font-smoothing: none;
    text-transform: uppercase; 
  }

  /* Global fix for mobile image warping */
  :global(img) {
    max-width: 100%;
    height: auto !important;
    display: block;
    object-fit: contain;
  }

  :global(h1), :global(h2), :global(h3), :global(p) {
    margin: 0;
    font-weight: bold; 
  }

  /* --- TAB NAVIGATION (Centered Grid) --- */
  .tab-nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns to anchor center */
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    background: transparent;
  }

  .tab-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.4);
    font-family: inherit;
    font-size: clamp(0.9rem, 4vw, 1.2rem);
    transition: color 0.2s ease;
    white-space: nowrap;
  }

  /* Manual alignment to pull side buttons toward the center SHOP button */
  .tab-btn:first-child { justify-content: flex-end; }
  .tab-btn:last-child { justify-content: flex-start; }

  /* The background box that only hugs the text */
  .btn-label {
    padding: 0.4rem 0.8rem;
    display: inline-block;
    transition: all 0s;
  }

  .tab-btn.active .btn-label {
    background-color: #000;
    color: #f4f4f4;
  }

  .tab-btn:hover {
    color: #000;
  }

  /* --- CONTENT AREA --- */
  .content-area {
    /* Negative margin allows Homepage background to go behind nav */
    margin-top: -6rem; 
    min-height: 100vh;
  }

  .fade-in {
    animation: simpleFade 0.2s linear;
  }

  @keyframes simpleFade {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Responsive tweaks for smaller phones */
  @media (max-width: 480px) {
    .tab-btn:first-child { padding-right: 0.5rem; }
    .tab-btn:last-child { padding-left: 0.5rem; }
  }
</style>
