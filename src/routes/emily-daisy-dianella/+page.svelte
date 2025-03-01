<h1>Welcome to Cookie Clicker</h1>
<div>
    <p>Click the Cookie!</p>
    <p>Cookie Count: {count}</p>
    <p> Milk Count: {count}</p>
</div>

<button 
    on:click={() => count++} 
    class="cookie-button">
    <img 
        alt="Perfect Cookie" 
        src="https://i.pinimg.com/736x/dc/4d/21/dc4d21953049b5f11687ce7f681c583c.jpg"
        class="cookie-image"
    />

</button>

<button
    on:click={() => count++} 
    class="milk-button">
    <img 
        alt="Cute Milk" 
        src="https://i.pinimg.com/736x/b6/fc/fb/b6fcfb02627e6ab2d6ad33e2ddaef2b7.jpg"
        class="milk-image"
    />

</button>

<script>
    let count = 0;
    let mulltiplier = 1;
</script>

<style>
    .cookie-button {
        background: none; 
        border: none; 
        padding: 0;
        cursor: pointer; 
    }
</style>
