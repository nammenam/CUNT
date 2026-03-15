<script>
  import Product from '$lib/Product.svelte';
  import PsaBox from '$lib/PsaBox.svelte';

  import { base } from '$app/paths';
  import MsgText from '$lib/MsgText.svelte';

  const products = [
    {
      name: "PANTIES",
      fabric: "COTTON",
      weight: "50 G",
      status: "LOW STOCK",
      stock: 1,
      sizes: ["S"],
      images: [
        base + "/images/TruseiTre.webp",
        base + "/images/BRAGEMEDTRUSEPA.webp",
      ]
    },
    {
      name: "T-SHIRT",
      fabric: "COTTON",
      weight: "145 G",
      status: "LOW STOCK",
      stock: 1,
      sizes: ["L"],
      images: [
        base + "/images/Tskjorte.webp"
      ]
    },
    {
      name: "STRIPED SHIRT",
      fabric: "COTTON",
      weight: "145 G",
      status: "LOW STOCK",
      stock: 1,
      sizes: ["L"],
      images: [
        base + "/images/SKJORTE.webp",
        base + "/images/SKJORTE2.webp" ]
    },
    {
      name: "LONG SLEEVE",
      fabric: "POLYESTER",
      weight: "120 G",
      status: "LOW STOCK",
      stock: 1,
      sizes: ["M"],
      images: [
        base + "/images/BRUN_GENSER.webp",
        base + "/images/BrungenermLogo.webp",
      ]
    },
    {
      name: "STRIPED JEANS",
      fabric: "COTTON",
      weight: "250 G",
      status: "LOW STOCK",
      stock: 1,
      sizes: ["36"],
      images: [
        base + "/images/BUKSE.webp",
        base + "/images/BUKSE2.webp"
      ]
    },
    {
      name: "FRACTAL TANK TOP",
      fabric: "COTTON",
      weight: "90 G",
      status: "LOW_STOCK",
      stock: 1,
      sizes: ["L"],
      images: [
        base + "/images/SINGLET2.webp",
        base + "/images/SINGLET.webp",
        base + "/images/SINGLET3.webp"
      ]
    },
    {
      name: "STRIPED TANK TOP",
      fabric: "COTTON",
      weight: "90 G",
      status: "LOW_STOCK",
      stock: 1,
      sizes: ["L"],
      images: [
        base + "/images/BrageLiggende.webp"
      ]
    }
  ];

  const psaMessages = [ MsgText ];
</script>

<section class="catalog-section">
  <div class="header-wrapper">
    <h2 class="section-title"><strong>ITEM SHOP</strong></h2>
  </div>

  {#each products as product, index}
    <Product {product} />

    {#if index < products.length - 1}
      <div class="parallax-gap">
        <div class="center-box">
          <PsaBox speed={-0.4}>
            <svelte:component this={psaMessages[index % psaMessages.length]} index={index} />
          </PsaBox>
        </div>
      </div>
    {/if}
  {/each}
</section>

<style>
  .catalog-section {
    /* Synced with Editorial.svelte padding and sizing */
    padding: 8rem 2rem;
    background-color: transparent; 
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .header-wrapper {
    background: #f4f4f4;
    border: 4px solid #000;
    padding: 2rem;
    margin-bottom: 4rem;
    /* Center the internal text effectively */
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px rgba(244, 244, 244, 0.8);
  }

  .section-title {
    text-align: center;
    margin: 0;
    width: 100%;
  }

  /* --- The Programmatic Runway --- */
  .parallax-gap {
    position: relative;
    height: 350px; 
    width: 100%;
    z-index: -1; 
  }

  .center-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Using -50% Y-axis for better center precision */
  }  
</style>
