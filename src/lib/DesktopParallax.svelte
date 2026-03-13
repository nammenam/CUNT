<script>
  import PsaBox from '$lib/PsaBox.svelte';
</script>

<div class="parallax-container desktop-only">
  
  <div class="layer" style="top: 60%; left: 30%;">
    <PsaBox speed={-0.5}>
      <p>
        LOREM IPSUM sDJKSLA SKLDJ ASLKDJ SALKJSALDK JASLKDJ SLAKJD ALKSJD
        JKLDSD SKAJ SLKJAALKSDJ SLKA DJLKASDJSK ALKJSDSL KJALKJSD ALK AKL
        SAKLDJLK SAJLKS KLAJLKJASLKJSALKDJ SKLD JALKSDJKLSAJ LKJASD L
        SAK JLKASJDASLKD JLKASJDLKSAKSKJLSK KS KLJ ALKJSKLJALK LKAJSD
      </p>
    </PsaBox>
  </div>

  <div class="layer" style="top: 90%; right: 60%;">
    <PsaBox speed={-0.5}>
      <pre class="ascii">
      LOREM
      </pre>
    </PsaBox>
  </div>

  <div class="layer" style="top: 80%; left: 40%;">
    <PsaBox speed={-0.5}>
      <p>ATTN: CITIZEN</p>
      <p>YOUR ATTENTION IS A COMMODITY.</p>
      <p>RECLAIM IT.</p>
    </PsaBox>
  </div>
  <div class="layer" style="top: 30%; right: 70%;">
    <PsaBox speed={-0.5}>
      <p>LOREM</p>
      <p>IPSUML</p>
      <p>BLABLA</p>
    </PsaBox>
  </div>

</div>

<style>
  .parallax-container {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: -1; 
    pointer-events: none; 
    overflow: hidden;
  }

  .layer {
    position: absolute;
  }

  .ascii {
    margin: 0;
    font-family: inherit;
    line-height: 1.2;
  }
</style>
