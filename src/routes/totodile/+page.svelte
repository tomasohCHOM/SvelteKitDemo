<script>
  let count = 0;
</script>

<h1>Totodile Clicker</h1>
<div>
  <p>Click the Totodile!</p>
  <p>Totodile Count: {count}</p>
</div>

<button on:click={() => count++} class="cookie-button">
  <img
    src="https://archives.bulbagarden.net/media/upload/f/f7/0158Totodile.png"
    class="cookie-image"
    alt="Totodile"
  />
</button>

<style>
  .cookie-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
</style>
