<script>
    import TableHead from '../components/TableHead.svelte'
    import TableRow from '../components/TableRow.svelte'


    export let Gpeople;


</script>


<table>
        <TableHead headers={Object.keys(Gpeople[0])}/>
        {#each Gpeople as person}
            <TableRow {person} />
        {/each}
    

</table>

<style>

table {
		border: 1px solid black;
		border-collapse: collapse;
        background: #eee;
		width: 50%;
		text-align: center;
	}
</style>