<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { products } from '@store/store';
	import { productsData } from '@utils/fetchProduct';

	const id = window.location.pathname.split('/');
	let productsList = [];

	onMount(async () => {
		try {
			const res =  await productsData(id[2])
			if(res !== products) {
				productsList = res;
			} else {
				productsList = get(products);
			}
		} catch (e) {
			console.error('Error fetching data')
		}
	});
</script>
<svelte:head>
	<title>Category</title>
</svelte:head>

<h1>About this category</h1>

	{#if productsList}
		{#each productsList as data}
			<div>
				<a href="/product/{data.id}" class="productBlock">
					<div>
						<h2>{data.title}</h2>
						<p>{data.description}</p>
					</div>
					<img src={data.image} width="150" alt=""/>
				</a>
			</div>
		{/each}
		{#if productsList.length === 0}
			Товары не найдены
		{/if}
	{:else}
		<p>Loading...</p>
	{/if}

