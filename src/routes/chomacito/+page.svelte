<script>
    let count = 0;
    let facingFront = false;

    function handleCookieClick() {
        count = facingFront ? 0 : count + 1;
    }

    $: if (facingFront) {
        setTimeout(
            () => {
                facingFront = false;
            },
            Math.floor((Math.random() * 2 + 1) * 1000),
        );
    }
    $: if (!facingFront) {
        setTimeout(
            () => {
                facingFront = true;
            },
            Math.floor((Math.random() * 9 + 1) * 1000),
        );
    }
</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    </style>
</svelte:head>

<div>
    <p>
        Click on the cookie while he is facing the other way. Don't when is
        facing towards you!
    </p>
    <span>Counter: {count}</span>
    <button on:click={handleCookieClick}>
        {#if facingFront}
            <img
                src="https://png.pngtree.com/png-clipart/20230520/original/pngtree-angry-cookies-png-image_9166528.png"
                alt="Angry Cookie"
            />
        {:else}
            <img
                src="https://www.pngmart.com/files/23/Cartoon-Cookie-PNG-Picture.png"
                alt="Angry Cookie"
            />
        {/if}
    </button>
</div>

<style>
    * {
        font-family: "Lato", sans-serif;
    }
    div {
        max-width: 350px;
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    p {
        text-align: center;
    }
    button {
        outline: 0;
        border: 0;
        cursor: pointer;
        background-color: transparent;
    }
    button > img {
        width: 200px;
    }
    span {
        font-weight: 600;
        font-size: 2rem;
    }
</style>
