<script>
    export let headers
</script>


<tr>
{#each headers as column}
        <th>{column}</th>
{/each}
</tr>

<style>
    tr {
		border: 1px solid black;
		border-collapse: collapse;
	}
</style>


