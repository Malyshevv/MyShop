<script>
/*Main*/
import { onMount } from 'svelte';
import { get } from 'svelte/store';

/* My */
import { category } from '@store/store';
import { categoryData } from '@utils/fetchCategory';

    const name = "svelte"
    const image = "svelte_cap.png"
    let categoryList = [];

    onMount(async () => {
        try {
            const res =  await categoryData()
            if(res !== category) {
                categoryList = res;
            } else {
                categoryList = get(category);
            }
        } catch (e) {
            console.error('Error fetching data')
        }
    });
</script>

<svelte:head>
    <title>Main page</title>
</svelte:head>

<div class="main">
    <img src={image} alt=""/>
    <h1>Welcome to {name}!</h1>
    {#if categoryList}
        {#each categoryList as data}
        <div>
            <a href="/category/{data.id}" class="categoryBlock">
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
                <img src={data.image} width="150" alt=""/>
            </a>
        </div>
        {/each}
    {:else}
        <p>Loading...</p>
    {/if}
</div>

<style>

    img {
        max-width: 100%;
    }

    .categoryBlock {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f73f3f;
        border-radius: 10px;
        color: white;
        text-decoration: none;
        margin-bottom: 10px;
    }
</style>
