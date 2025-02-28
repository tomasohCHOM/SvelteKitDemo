<script>
  import { playSound } from './fartsound';
  let count = 0;
  function increment() {
    count++;
    const sound = { sound: `fart-movie-gregory-title1-extracted${Math.floor(Math.random() * 10)}.wav` };
    playSound(sound);
  }
</script>

<h1>Welcome to Fart Clicker</h1>

<button id="cookie-button" on:click={increment}
  ><img
    id="cookie-image"
    src="https://thumbs.dreamstime.com/b/cartoon-brain-having-fart-vector-clip-art-illustration-simple-gradients-all-single-layer-134247800.jpg"
    alt="cookie-clicker"
  />The Fart Count is {count}</button
>

<style>
  #cookie-image {
    width: 200px;
    height: 200px;
  }

  #cookie-button {
    border: none;
    /* background: none; */
  }
</style>
