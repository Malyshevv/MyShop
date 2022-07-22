<script>
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
    import { product } from '@store/store';
    import { productData } from '@utils/fetchProduct';

    const id = window.location.pathname.split('/');
    let data = [];

    onMount(async () => {
        try {
            const res =  await productData(id[2])
            if(res !== product) {
                data = res[0];
            } else {
                data = get(product[0]);
            }
        } catch (e) {
            console.error('Error fetching data')
        }
    });
</script>
<svelte:head>
    <title>Product</title>
</svelte:head>

<h1>About this product</h1>
<div class="main">
    {#if data}
        <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <img src={data.image} width="150" alt=""/>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}
</div>
