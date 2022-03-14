<script>
    export let person;

    
</script>


<tr>
    {#each Object.keys(person) as key}
        {#if key.toString() != 'avatar'}
            <th>{person[key]}</th>
        {:else}
            <img src="{person[key]}" alt="">
        {/if}
    {/each}
</tr>

<style>
    tr {
		border: 1px solid black;
		border-collapse: collapse;
	}
</style>


