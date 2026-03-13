<script>
  import Product from '$lib/Product.svelte';
  import PsaBox from '$lib/PsaBox.svelte';

  import { base } from '$app/paths';
  import MsgText from '$lib/MsgText.svelte';

  const products = [
    {
      id: "001",
      name: "FRACTAL TANK",
      fabric: "100% RIPSTOP NYLON",
      weight: "145 G/M2",
      waterproof: "10,000 MM",
      status: "IN_STOCK",
      stock: 1,
      sizes: ["L"],
      images: [
        base + "/images/Tskjorte.webp",
      ]
    },
    {
      id: "002",
      name: "STRIPED JEANS",
      fabric: "CORDURA BLEND",
      weight: "210 G/M2",
      waterproof: "5,000 MM",
      status: "LOW_STOCK",
      stock: 14,
      sizes: ["30", "32", "34", "36"],
      images: [
        base + "/images/BRUN_GENSER.webp",
        base + "/images/BrungenermLogo.webp",
      ]
    },
    {
      id: "003",
      name: "STRIPED SHIRT",
      fabric: "CORDURA BLEND",
      weight: "210 G/M2",
      waterproof: "5,000 MM",
      status: "LOW_STOCK",
      stock: 14,
      sizes: ["30", "32", "34", "36"],
      images: [
        base + "/images/BUKSE.webp",
      ]
    },
    {
      id: "004",
      name: "STRIPED LONG SLEEVE",
      fabric: "CORDURA BLEND",
      weight: "210 G/M2",
      waterproof: "5,000 MM",
      status: "LOW_STOCK",
      stock: 14,
      sizes: ["30", "32", "34", "36"],
      images: [
        base + "/images/TruseiTre.webp",
        base + "/images/BRAGEMEDTRUSEPAA.webp",
      ]
    },
    {
      id: "005",
      name: "STRIPED LONG SLEEVE",
      fabric: "CORDURA BLEND",
      weight: "210 G/M2",
      waterproof: "5,000 MM",
      status: "LOW_STOCK",
      stock: 14,
      sizes: ["30", "32", "34", "36"],
      images: [
        base + "/images/BrageLiggende.webp",
      ]
    }
  ];

const psaMessages = [ MsgText ];
</script>

<section class="catalog-section">
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
    padding-bottom: 4rem;
    padding-top: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

/* --- The Programmatic Runway --- */
  .parallax-gap {
    position: relative;
    /* THIS is your fixed runway size. Every gap will be exactly 350px tall, no matter what. */
    height: 350px; 
    width: 100%;
    z-index: -1; 
  }

/* Perfectly centers the element both horizontally and vertically */
  .center-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
  }  
</style>
