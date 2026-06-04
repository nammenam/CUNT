<script>
  export let index = 0;

  const messages = [
    "<p> Did you know that vaginas are not supposed to smell like flowers? A healthy vagina has a natural, slightly musky or tangy scent. And the smell of your vagina is a good indicator on your vaginal health. </p>",

    "<p>Discharge cleans out your vagina! Clear og white fluid in your underwear is a sign your body is flushing out old cells and bacteria to stay clean. </p>",

    '<p>The bleaching of your underwear is totally normal! The natural pH of the vagina is usually between 3.8 to 4.5 which makes it able to bleach your clothes! Maybe you are making your own CUNT design right now?</p>',

    '<p>Be aware of the feminine intimate soaps! Your vagina is self-cleaning, so no products are needed up there;) Remember, it’s not supposed to smell like flowers!</p>',

    '<p>All vulvas are different. There is no standard to how a vulva looks. Some have lips hanging out, while others are “tucked in”. Some have pink ones while others are darker. All are normal!</p>',

    "<p>Hair is there for a reason. Whether you choose to keep it or groom it, pubic hair exists to reduce friction and act as a barrier against certain bacteria.</p>",

    "<p>Lumps and bumps happen. Small, painless bumps are very common and usually nothing to worry about. And if you shave your pubic hair, it’s to count on!</p>",

    '<p>Ever queefed during sex? Also totally normal. It’s just air passing through from your vagina during exercise or intimacy. It’s not a fart!</p>',

    "<p>Your vagina doesn't get loose just because you have sex with many people. The internal walls of the vagina have ridges called rugae, which allow the tissue to expand and contract.</p>",

    '<p>Your cycle dictates your "wetness." It is normal for your level of natural lubrication and the consistency of your discharge to shift significantly depending on where you are in your hormonal month.</p>',

    "<p>Thrush is not a STD. It is simply a common overgrowth of the yeast that already lives in your body. And it doesn't mean that you have bad hygiene. It can actually mean the washing your vagina too much!</p>",
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
