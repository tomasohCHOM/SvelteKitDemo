<script>
  let count = 0;
</script>

<div class="container">
  <title>me</title>
  <h1>Clicker</h1>
  <button class="cookie-button" on:click={() => count++}>
    <img
      alt="cookie"
      src="https://purepng.com/public/uploads/large/purepng.com-cookiescookiessnacksbaked-snacksflour-cookies-1411527249204pxztg.png"
      class="cookie-img"
    />
    the count is {count}
  </button>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>

<style>
  :global(body) {
    background-color: red;
  }

  h1 {
    color: green;
    font-family: sans-serif;
  }

  p {
    color: green;
    font-family: sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cookie-button {
    border: none;
    width: 200px;
    color: blue;
    background-color: magenta;
    font-size: 20px;
  }

  .cookie-img {
    width: 300%;
    height: 50%;
  }
</style>
