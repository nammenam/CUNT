<script>
  import PsaBox from '$lib/PsaBox.svelte';
  
  import { base } from '$app/paths';
  // Make sure you have these imported just like in Catalog!
  import MsgText from '$lib/MsgText.svelte';

  const psaMessages = [ MsgText ];

  // Add your real image filenames here!
  const galleryItems = [
    {
      title: "01.",
      img: base + "/images/Singlet_og_Tskjorte.webp", // <--- Put gallery-01.jpg in static/images/
    },
    {
      title: "02.",
      img: base + "/images/DeminLook.webp", // <--- Put gallery-03.jpg in static/images/
    },
    {
      title: "03.",
      img: base + "/images/CUNT_I_JAKKE.webp", // <--- Put gallery-03.jpg in static/images/
    },
    {
      title: "04.",
      img: base + "/images/BrungenermLogo.webp", // <--- Put gallery-03.jpg in static/images/
    },
    {
      title: "05.",
      img: base + "/images/Bragepafanget.webp", // <--- Put gallery-03.jpg in static/images/
    },
    {
      title: "06.",
      img: base + "/images/Nikoline_pa_bakken.webp", // <--- Put gallery-02.jpg in static/images/
    },
    {
      title: "09.",
      img: base + "/images/Brage_Klemme_Closeup.webp", // <--- Put gallery-03.jpg in static/images/
    },
    {
      title: "07.",
      img: base + "/images/BRAGEMEDTRUSEPA.webp", // <--- Put gallery-03.jpg in static/images/
    },
    {
      title: "08.",
      img: base + "/images/BrageLiggende.webp", // <--- Put gallery-03.jpg in static/images/
    },
    {
      title: "08.",
      img: base + "/images/CUNT_I_JAKKE.webp", // <--- Put gallery-03.jpg in static/images/
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
    padding: 8rem 2rem;
    background-color: transparent; 
    position: relative;
    max-width: 1000px;
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
    background: #000;
    border: 4px solid #000;
    padding: 0rem;
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
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    display: inline-block;
    color: #fff;
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
