<h1>Welcome to Kookie Clicker</h1>
<div>
    <p>Click the Kookie!</p>
    <p>Kookie Count: {count}</p>
</div>

<button 
    on:click={() => count++} 
    <div style="background-color: {backgroundColor}; height: 100vh;">
    class="cookie-button">
    <img 
        alt="Perfect Cookie" 
        src="https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/1564405684712279574/1bc4c860ff322d9a08a73a29c8e04e25_large.png&width=512&type=webp&quality=90" 
        class="cookie_img"
    />
</button>

<script>
    let count = 0;
    let backgroundColor ='skyblue';
</script>

<style>
    .cookie-button {
        background: none; 
        border: none; 
        padding: 0;
        cursor: pointer; 
    }
    .cookie_img{
        width: 100px;
        height: 100px;
        border: none;
        background: none;
    }

</style>
