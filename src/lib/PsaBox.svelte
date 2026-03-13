<script>
  export let speed = -0.5; 
  
  let y = 0;
  let innerHeight = 0;
  let wrapper;

  // By including 'y' in this line, Svelte recalculates the position 
  // every single time the user scrolls the mouse.
  $: rectTop = (wrapper && y !== undefined) ? wrapper.getBoundingClientRect().top : 0;
  
  // This calculates how far the element is from the exact vertical center of your screen.
  // When it is dead-center, distance is 0, so the box sits perfectly still.
  $: distance = (innerHeight / 2) - rectTop;
  
  // Multiply the distance by your speed variable
  $: offset = distance * speed;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight} />

<div bind:this={wrapper} class="psa-measure-wrapper">
  
  <div class="psa-box" style="transform: translateY({offset}px);">
    <slot></slot>
  </div>
  
</div>

<style>
  .psa-measure-wrapper {
    /* Prevents the floating box from accidentally expanding the width of the page */
    width: 150%;
    transform: translate(-17%);
    display: flex;
    justify-content: center;
  }

  .psa-box {
    border: 3px dashed rgba(0, 0, 0, 0.2);
    background-color: #eaeaea;
    padding: 1rem;
    color: rgba(0, 0, 0, 0.6);
    width: 75%;
    word-wrap: break-word;
    pointer-events: none; /* Stops it from blocking clicks on the gallery */
  }
</style>
