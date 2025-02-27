<h1>Welcome to Cookie Clicker</h1>
<div>
    <p>Click the Cookie!</p>
    <p>Cookie Count: {count}</p>
</div>

<button 
    on:click={() => count++} 
    class="cookie-button">
    <img 
        alt="Perfect Cookie" 
        src="https://cookieclicker.wiki.gg/images/thumb/5/5a/PerfectCookie.png/210px-PerfectCookie.png" 
        class="cookie-image"
    />
</button>

<script>
    let count = 0;
</script>

<style>
    .cookie-button {
        background: none; 
        border: none; 
        padding: 0;
        cursor: pointer; 
    }
</style>
