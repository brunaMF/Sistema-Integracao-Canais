import { db } from '$lib/server/db.js';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        //console.log(data)
        //const teste = data.get('teste')
        //console.log("teste:", teste)
        const endereco = data.get('logradouro') + '-' + data.get('bairro') + '-' + data.get('cidade')
        db.prepare(`INSERT INTO usuario (nome, email, telefone, cep, endereco, 
            cpf, data_nascimento, senha, preferencia_comunicacao) 
            VALUES ($nome, $email, $telefone, $cep, $endereco, 
                $cpf, $data_nascimento, $senha, $preferencia_comunicacao)`).run({ 
                    nome: data.get('nome'), email: data.get('email'), telefone: data.get('telefone'), 
                    cep: data.get('cep'), endereco: endereco, cpf: data.get('cpf'), 
                    data_nascimento: data.get('data_nascimento'), senha: data.get('senha'),
                    preferencia_comunicacao: data.get('preferencia_comunicacao')
                })
    }
}

