<script>
	export let data;
</script>

<main class="container">
	<h1>Listagem dos usuários cadastrados</h1>
	<div style="">

	</div>
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>Nome</th>
				<th>Email</th>
				<th>Telefone</th>
			</tr>
		</thead>
		<tbody>
			{#each data.usuarios as user, i}
				<tr>
					<td>{user.id}</td>
					<td>{user.nome}</td>
					<td>{user.email}</td>
					<td>{user.telefone}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>
