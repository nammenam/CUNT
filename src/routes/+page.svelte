<script>
  import Header from '$lib/Header.svelte';
  import Catalog from '$lib/Catalog.svelte';
  import Editorial from '$lib/Editorial.svelte';
  
  let activeTab = 'shop'; 
</script>

<main class="page-container">
  <Header />

  <nav class="tab-nav">
    <button 
      class="tab-btn {activeTab === 'shop' ? 'active' : ''}" 
      on:click={() => activeTab = 'shop'}
    >
      <strong>[ SHOP ]</strong>
    </button>
    <button 
      class="tab-btn {activeTab === 'gallery' ? 'active' : ''}" 
      on:click={() => activeTab = 'gallery'}
    >
      <strong>[ GALLERY ]</strong>
    </button>
  </nav>

  <div class="content-area">
    {#if activeTab === 'shop'}
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
  :global(body) {
    margin: 0;
    background-color: #f4f4f4; 
    color: #000000; 
    font-family: 'Departure Mono', 'Courier New', Courier, monospace;
    // font-family: 'Geist Mono', 'Courier New', Courier, monospace;
    font-weight: 600;
    -webkit-font-smoothing: none;
    font-smoothing: none;
    text-transform: uppercase; 
  }

  :global(h1), :global(h2), :global(h3), :global(p) {
    margin: 0;
    font-weight: normal; 
  }

  /* --- TAB NAVIGATION --- */
  .tab-nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0 2rem 2rem 2rem;
    border: 0px solid #000;
    margin-bottom: 2rem;
  }

  .tab-btn {
    background: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.4);
    font-family: inherit;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0s; 
  }

  .tab-btn:hover {
    color: #000;
  }

  .tab-btn.active {
    color: #000;
    background-color: #000;
    color: #f4f4f4;
  }

  /* --- CONTENT AREA --- */
  .content-area {
    min-height: 100vh;
  }

  .fade-in {
    animation: simpleFade 0.2s linear;
  }

  @keyframes simpleFade {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
