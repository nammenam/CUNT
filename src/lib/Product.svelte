<script>
  // Svelte receives the 'product' object from the Catalog
  export let product;

  let activeIndex = 0;
  let isThrottled = false;

  // Handle the mouse scroll to switch images
  function handleScroll(e) {
    // Prevent the scroll from flying through 10 images in a millisecond
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(() => isThrottled = false, 300); // 300ms cooldown

    if (e.deltaY > 0) {
      // Scrolled down -> Next Image
      activeIndex = (activeIndex + 1) % product.images.length;
    } else {
      // Scrolled up -> Previous Image
      activeIndex = (activeIndex - 1 + product.images.length) % product.images.length;
    }
  }
</script>

<div class="product-entry">
  
  <article class="panel image-panel black-panel" on:wheel|preventDefault={handleScroll}>
    <div class="image-wrapper">
      <img src={product.images[activeIndex]} alt="{product.name} view" />
    </div>

    <div class="panel-header image-footer">
      <div class="index-squares">
        {#each product.images as _, i}
          <button 
            class="square {i === activeIndex ? 'active' : ''}" 
            on:click={() => activeIndex = i}
            aria-label="View image {i + 1}"
          ></button>
        {/each}
      </div>
    </div>
  </article>

  <article class="panel spec-panel">
    <div class="panel-header">
      <h3><strong>{product.name}</strong></h3>
    </div>
    <div class="panel-body">
      <p><strong>FABRIC:</strong> {product.fabric}</p>
      <p><strong>WEIGHT:</strong> {product.weight}</p>
      
      <div class="divider"></div>
      
      <p><strong>STATUS:</strong> {product.status}</p>
      <p><strong>UNITS_ON_HAND:</strong> {product.stock}</p>
      <br>
      <p>SIZES_AVAILABLE:<br>
        [ {product.sizes.join(', ')} ]
      </p>
      
      <button class="action-btn">
        > ADD_TO_CART
      </button>
    </div>
  </article>

</div>

<style>
  .product-entry {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em; 
    margin-bottom: 2rem;
  }

  .panel {
    border: 4px solid #000;
    background-color: #e2e2e2;
    width:100%;
    max-width: 465px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Ensures content doesn't bleed past borders */
  }

  /* Specific override for the image side */
  .black-panel {
    background-color: #000;
  }

  .panel-header {
    padding: 1rem;
    background-color: #000;
    color: #fff; 
  }

  .image-footer {
    padding: 0.5rem;
    border-top: 4px solid #000;
  }

  .panel-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    height: 100%;
    justify-content: center;
  }

  .divider {
    border-bottom: 2px dashed #000;
    margin: 1rem 0;
  }

  /* --- Button Styles --- */
  .action-btn {
    margin-top: auto;
    background: transparent;
    border: 3px solid #000;
    color: #000;
    padding: 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    text-align: left;
    transition: all 0s; 
  }

  .action-btn:hover {
    background: #000;
    color: #f4f4f4;
  }

  /* --- Image Gallery Styles --- */
  .image-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
  }

  img {
    width: 100%;
    height: auto !important; /* Critical fix for mobile warping */
    display: block;
    object-fit: contain;
  }

  .index-squares {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  .square {
    width: 12px;
    height: 12px;
    border: none;
    background-color: #888; /* Darker for inactive state on black */
    cursor: pointer;
    padding: 0;
  }

  .square.active {
    background-color: #fff; /* High contrast white for active state */
  }

  .square:hover {
    background-color: #888;
  }
</style>
