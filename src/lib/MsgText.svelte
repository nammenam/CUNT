<script>
  export let index = 0;

const messages = [
"<p>Vaginas are not scentless. A healthy vagina has a natural, slightly musky or acidic scent that changes throughout your cycle; it is not meant to smell like flowers.</p>",

"<p>Discharge is a cleaning service. Seeing white or clear fluid in your underwear is a sign your body is effectively flushing out old cells and bacteria to stay clean.</p>",

"<p>The \"bleaching\" effect is normal. Because the natural pH of a vagina is acidic (usually between 3.8 and 4.5), it can actually lighten or \"bleach\" the fabric of dark underwear over time.</p>",

"<p>Self-cleaning is the gold standard. You don't need special soaps, \"feminine washes\", or douches; the internal environment maintains itself perfectly with just warm water on the outside.</p>",

"<p>Vulvas come in all shapes and sizes. There is no \"standard\" look; variation in the size, color, and symmetry of the labia is the biological norm.</p>",

"<p>Hair is there for a reason. Whether you choose to keep it or groom it, pubic hair exists to reduce friction and act as a barrier against certain bacteria.</p>",

"<p>Lumps and bumps happen. Small, painless bumps (like Fordyce spots or the occasional ingrown hair) are very common and usually nothing to worry about.</p>",

"<p>The \"queef\" is just air. Passing air from the vagina during exercise or intimacy is a simple mechanical process of air being displaced—it’s not gas, and it’s nothing to be embarrassed by.</p>",

"<p>Texture isn't perfectly smooth. The internal walls of the vagina have ridges called rugae, which allow the tissue to expand and contract; they aren't \"growths\".</p>",

"<p>Your cycle dictates your \"wetness\". It is normal for your level of natural lubrication and the consistency of your discharge to shift significantly depending on where you are in your hormonal month.</p>",

"<p>Thrush is a completely normal biological hiccup. It is simply a common overgrowth of the yeast that already lives in your body—it happens to almost everyone and is a standard health event, not a reflection of hygiene.</p>",
];

</script>

<div class="dynamic-text">
  {@html messages[index % messages.length]}
</div>

<style>
  .dynamic-text :global(p) {
    margin: 0 0 0.5rem 0;
  }
  
  .dynamic-text :global(p:last-child) {
    margin-bottom: 0;
  }
</style>
