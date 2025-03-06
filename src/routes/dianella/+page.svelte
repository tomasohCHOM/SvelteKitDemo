<script>
  let cookieCount = 0;
  let milkCount = 0;
  let audioInitialized = false;

  function startAudio() {
    if (!audioInitialized) {
      const audioEl = document.querySelector('audio');
      // Unmute and play the audio
      audioEl.muted = false;
      audioEl.play().catch(err => console.error('Audio playback failed:', err));
      audioInitialized = true;
    }
  }

  function incrementCookie() {
    startAudio(); // trigger audio on user interaction
    cookieCount++;
  }

  function incrementMilk() {
    startAudio(); // trigger audio on user interaction
    milkCount += cookieCount * 2;
  }
</script>

<style>
  :global(body) {
    background: linear-gradient(400deg, #ffc0cb, #ff69b4);
  }
  .button-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    padding-left: 20px;
  }
  .cookie-button img,
  .milk-button img {
    width: 350px;
    height: auto;
    border-radius: 10px;
  }
  .cookie-button,
  .milk-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
</style>

<!-- Audio element (initially without muted so sound is audible) -->
<audio autoplay loop>
  <source src="/lofi.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<h1>cookie & milk clicker 🍪🥛</h1>
<div>
  <p>cookie count: {cookieCount}</p>
  <p>milk count: {milkCount}</p>
</div>

<div class="button-container">
  <button on:click={incrementCookie} class="cookie-button">
    <img 
      alt="cute cookie" 
      src="https://i.ytimg.com/vi/H6rkahTAP7w/maxresdefault.jpg" 
      class="cookie-image" 
    />
  </button>

  <button on:click={incrementMilk} class="milk-button">
    <img 
      alt="Cute Milk" 
      src="https://thumbs.dreamstime.com/b/cute-happy-funny-flavored-strawberry-milk-vector-flat-line-cartoon-kawaii-character-illustration-icon-isolated-white-cute-happy-194517365.jpg" 
      class="milk-image" 
    />
  </button>
</div>

<h1>instructions 📝</h1>
<div>
  <p>click on the cookie to increment by 1!</p>
  <p>click on the milk to increment twice the cookie count!</p>
</div>

<h1>credits 💗</h1>
<div>
  <p>designed by: dianella</p>
  <p>cookie & milk clicker inspo: kelsey</p>
  <p>modified source code from: emily</p>
  <p>audio: lawrence - tracktribe</p>
</div>

<h1>~thank you for visiting !</h1>
<div>
  <p>designed on march 6, 2025</p>
</div>