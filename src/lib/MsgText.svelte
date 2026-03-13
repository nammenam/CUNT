<script>
  // This receives the number from the Catalog loop
  export let index = 0;

  // Store as many text messages as you want in here!
  const messages = [
    `<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.</p>`,
    `<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>`,
    `<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo. Tempus leo eu aenean sed diam urna tempor. Urna tempor pulvinar vivamus fringilla lacus nec metus.</p>`,
    `<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>`
  ];
</script>

<div class="dynamic-text">
  {@html messages[index % messages.length]}
</div>

<style>
  /* CRITICAL SVELTE RULE: 
    When you use {@html}, Svelte cannot auto-scope the CSS for those tags.
    You must wrap it in :global() so it knows how to style the injected <p> tags!
  */
  .dynamic-text :global(p) {
    margin: 0 0 0.5rem 0;
  }
  
  .dynamic-text :global(p:last-child) {
    margin-bottom: 0;
  }
</style>
