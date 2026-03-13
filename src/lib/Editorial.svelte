<script>
  import PsaBox from '$lib/PsaBox.svelte';
  
  import { base } from '$app/paths';
  // Make sure you have these imported just like in Catalog!
  import MsgText from '$lib/MsgText.svelte';

  const psaMessages = [ MsgText ];

  // Add your real image filenames here!
  const galleryItems = [
    {
      title: "01. UTILITARIAN FORMS",
      img: base + "/images/Singlet_og_Tskjorte.webp", // <--- Put gallery-01.jpg in static/images/
      desc: "Garments designed for absolute utility. No excess. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "02. TECHNICAL TEXTILES",
      img: base + "/images/Nikoline_paa_bakken.webp", // <--- Put gallery-02.jpg in static/images/
      desc: "Synthetic weaves engineered for maximum durability. Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
    },
    {
      title: "03. NATURAL DYE PROCESS",
      img: base + "/images/DeminLook.webp", // <--- Put gallery-03.jpg in static/images/
      desc: "Pigments sourced directly from the earth. Unpredictable, unrepeatable, strictly organic."
    },
    {
      title: "03. NATURAL DYE PROCESS",
      img: base + "/images/CUNT_I_JAKKE.webp", // <--- Put gallery-03.jpg in static/images/
      desc: "Pigments sourced directly from the earth. Unpredictable, unrepeatable, strictly organic."
    },
    {
      title: "03. NATURAL DYE PROCESS",
      img: base + "/images/BrungenermLogo.webp", // <--- Put gallery-03.jpg in static/images/
      desc: "Pigments sourced directly from the earth. Unpredictable, unrepeatable, strictly organic."
    },
    {
      title: "03. NATURAL DYE PROCESS",
      img: base + "/images/Bragepaafanget.webp", // <--- Put gallery-03.jpg in static/images/
      desc: "Pigments sourced directly from the earth. Unpredictable, unrepeatable, strictly organic."
    },
    {
      title: "03. NATURAL DYE PROCESS",
      img: base + "/images/BRAGEMEDTRUSEPAA.webp", // <--- Put gallery-03.jpg in static/images/
      desc: "Pigments sourced directly from the earth. Unpredictable, unrepeatable, strictly organic."
    },
    {
      title: "03. NATURAL DYE PROCESS",
      img: base + "/images/BrageLiggende.webp", // <--- Put gallery-03.jpg in static/images/
      desc: "Pigments sourced directly from the earth. Unpredictable, unrepeatable, strictly organic."
    },
    {
      title: "03. NATURAL DYE PROCESS",
      img: base + "/images/Brage_Klemme_Closeup.webp", // <--- Put gallery-03.jpg in static/images/
      desc: "Pigments sourced directly from the earth. Unpredictable, unrepeatable, strictly organic."
    }
  ];
</script>

<section class="editorial-section">
  
  <div class="header-wrapper">
    <h2 class="section-title"><strong>COLLECTION GALLERY</strong></h2>
  </div>

  {#each galleryItems as item, index}
    
    <div class="editorial-block">
      <img src={item.img} alt={item.title} class="inline-image" />
      <div class="text-block">
        <h3><strong>{item.title}</strong></h3>
        <p>{item.desc}</p>
      </div>
    </div>

    {#if index < galleryItems.length - 1}
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
  .editorial-section {
    padding: 4rem 2rem;
    background-color: transparent; 
    position: relative;
    max-width: 900px;
    margin: 0 auto;
  }

  .header-wrapper {
    background: #f4f4f4;
    border: 4px solid #000;
    padding: 2rem;
    margin-bottom: 4rem;
    box-shadow: 0 0 20px rgba(244, 244, 244, 0.8);
  }

  .section-title {
    text-align: center;
    margin: 0;
  }

  .editorial-block {
    background: #e2e2e2;
    border: 4px solid #000;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .inline-image {
    border: 0px solid #000;
    width: 100%;
    height: auto;
    display: block;
    background-color: #000; /* Shows black if image hasn't loaded yet */
  }

  .text-block h3 {
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #000;
    padding-bottom: 0.5rem;
    display: inline-block;
  }

  /* --- The Programmatic Runway (Exact match to Catalog) --- */
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
    transform: translate(-50%, -50%);
  }
</style>
