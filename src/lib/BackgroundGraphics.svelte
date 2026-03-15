<script>
  import { base } from '$app/paths';
  
  let y = 0; // Binds to window scroll position

  // Update these strings to match your actual filenames in static/images/
  const graphics = [
    { src: '/images/splat.svg', x: 5,  y: 10, speed: 0.15, size: 180 },
    { src: '/images/splat.svg', x: 80, y: 30, speed: -0.3,  size: 220 },
    { src: '/images/splat.svg', x: 70, y: 60, speed: 0.5,   size: 140 },
    { src: '/images/splat.svg', x: 30, y: 300, speed: -1.5,   size: 140 },
    { src: '/images/splat.svg', x: 15, y: 85, speed: -0.25, size: 200 },
    { src: '/images/splat.svg', x: 80, y: 120, speed: -0.20, size: 200 },
    { src: '/images/splat.svg', x: 45, y: 40, speed: 0.3,   size: 160 },
    { src: '/images/splat.svg', x: 65, y: 540, speed: -1.3,   size: 160 },
    { src: '/images/splat.svg', x: 5,  y: 500, speed: 0.15, size: 180 },
    { src: '/images/splat.svg', x: 80, y: 250, speed: -0.3,  size: 220 },
    { src: '/images/splat.svg', x: 70, y: 400, speed: 0.5,   size: 140 },
    { src: '/images/splat.svg', x: 30, y: 300, speed: -1.5,   size: 140 },
    { src: '/images/splat.svg', x: 15, y: 400, speed: -0.25, size: 200 },
    { src: '/images/splat.svg', x: 80, y: 302, speed: -0.20, size: 200 },
    { src: '/images/splat.svg', x: 45, y: 300, speed: 0.3,   size: 160 },
    { src: '/images/splat.svg', x: 65, y: 104, speed: -1.3,   size: 160 }
  ];
</script>

<svelte:window bind:scrollY={y} />

<div class="graphics-container">
  {#each graphics as item}
    <div 
      class="floating-graphic"
      style="
        left: {item.x}%; 
        top: {item.y}%; 
        transform: translateY({y * item.speed}px);
        width: {item.size}px;
      "
    >
      <img src="{base}{item.src}" alt="" />
    </div>
  {/each}
</div>

<style>
  .graphics-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2; /* Sits behind everything but on top of the base body */
    pointer-events: none; /* User can still click products and buttons */
    overflow: hidden;
    opacity: 1; /* Subtle technical look */
  }

  .floating-graphic {
    position: absolute;
    display: block;
  }

  .floating-graphic img {
    width: 100%;
    height: auto !important;
    object-fit: contain !important; /* Prevents global img styles from warping your SVGs */
  }
</style>
