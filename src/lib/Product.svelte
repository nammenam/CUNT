
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
  
  <article class="panel spec-panel">
    <div class="panel-header">
      <h3><strong>{product.name}</strong></h3>
    </div>
    <div class="panel-body">
      <p><strong>FABRIC:</strong> {product.fabric}</p>
      <p><strong>WEIGHT:</strong> {product.weight}</p>
      <p><strong>WATERPROOF:</strong> {product.waterproof}</p>
      
      <div class="divider"></div>
      
      <p><strong>STATUS:</strong> {product.status}</p>
      <p><strong>UNITS_ON_HAND:</strong> {product.stock}</p>
      <br>
      <p>SIZES_AVAILABLE: [ {product.sizes.join(', ')} ]</p>
      
      <button class="action-btn">
        > ADD_TO_CART
      </button>
    </div>
  </article>
  
  <article class="panel image-panel" on:wheel|preventDefault={handleScroll}>
    <div class="panel-header">
      <h3><strong>IMG // {activeIndex + 1} OF {product.images.length}</strong></h3>
    </div>
    
    <div class="image-wrapper">
      <img src={product.images[activeIndex]} alt="{product.name} view" />
      
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

</div>

<style>
  .product-entry {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em; /* Tabular layout, borders touch */
    margin-bottom: 2rem;
  }

  .panel {
    border: 4px solid #000;
    // border-radius: 1em;
    background-color: #e2e2e2;
    width: 90%;
    max-width: 500px; /* Slightly wider to give the images breathing room */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .panel-header {
    border: 0px solid #000;
    // border-radius: 1em;
    padding: .4rem;
    background-color: #000;
    color: #f0f0f0; 
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
    margin-top: auto; /* Pushes button to the bottom */
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
    padding: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border: 0px solid #000;
    margin-bottom: 1rem;
  }

  .index-squares {
    display: flex;
    gap: 8px;
    justify-content: center;
    padding: 0.5rem 0;
  }

  .square {
    width: 10px;
    height: 10px;
    border: 0px solid #000;
    background-color: #b0b0b0;
    cursor: pointer;
    padding: 0;
    transition: all 0s;
  }

  .square.active {
    background-color: #000;
  }

  .square:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
