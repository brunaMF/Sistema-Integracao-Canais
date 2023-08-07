<script>
	//export let data;
	let cepDigitado, cep, senha, confirmacao_senha, erroSenha='';

	$: cep = cepDigitado
		? fetch(`http://viacep.com.br/ws/${cepDigitado}/json/`).then((v) => v.json())
		: '';
	
	function validacaoSenha(e){
		if (senha != confirmacao_senha){
			e.preventDefault()
			erroSenha = "As senhas são diferentes!"
		}
	}

</script>

<main class="container">
	<form method="POST">
		<h1>Cadastrar conta</h1>
		<label>
			Nome completo
			<input type="text" name="nome" placeholder="Digite seu nome" required/>
		</label>
		<label>
			Telefone
			<input type="text" name="telefone" placeholder="Digite seu número de telefone" required/>
		</label>
		<label>
			CPF
			<input type="text" name="cpf" placeholder="Digite seu número de CPF" required/>
		</label>
		<label>
			Digite seu CEP
			<input type="text" bind:value={cepDigitado} required name="cep" placeholder="Digite seu CEP"/>
		</label>
		{#await cep}
			Carregando
		{:then resultado}
			{#if resultado?.logradouro}
				<label>
					Logradouro
					<input type="text" value={resultado.logradouro ?? ''} readonly name="logradouro" disabled/>
				</label>
				<label>
					Bairro
					<input type="text" value={resultado.bairro ?? ''} readonly name="bairro" disabled/>
				</label>
				<label>
					Cidade
					<input type="text" value={resultado.localidade ?? ''} readonly name="cidade" disabled/>
				</label>
			{:else if resultado}
				Digite um CEP que exista!	
			{/if}
		{:catch}
			Digite um CEP válido!
		{/await}
		<label>
			Email
			<input type="email" name="email" placeholder="Digite seu email" required/>
		</label>
		<label>
			Data de nascimento
			<input type="date" name="data_nascimento" id="">
		</label>
		<fieldset	>
			<legend>Preferência de comunicação</legend>
			<label for="sms">
			<input type="radio" id="sms" name="preferencia_comunicacao" value="sms" checked>
			SMS
			</label>
			<label for="email">
			<input type="radio" id="email" name="preferencia_comunicacao" value="email">
			Email
			</label>
			<label for="ligacao">
			<input type="radio" id="ligacao" name="preferencia_comunicacao" value="ligacao">
			Ligação
			</label>
		</fieldset>
		<label>
			Senha
			<input type="password" name="senha" id="senha" bind:value={senha} required placeholder="Digite sua senha">
		</label>
		<label>
			Confirmação da senha
			<input type="password" name="confirmacao_senha" id="confirmacao_senha" bind:value={confirmacao_senha} required placeholder="Confirme sua senha">
			<p class="msgErro">{erroSenha}</p>
		</label>
		<button type="submit" on:click={validacaoSenha}>Enviar</button>
	</form>
</main>

<style>
	.msgErro{
		color:red;
	}
</style>