import Database from "better-sqlite3";

const db = new Database("bancoDeDados.db", { verbose: console.log });
const schema = `
PRAGMA foreign_keys = ON; 
CREATE TABLE IF NOT EXISTS usuario ( 
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
  nome TEXT NOT NULL, 
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  cep TEXT NOT NULL,
  endereco TEXT NOT NULL,
  cpf TEXT NOT NULL, 
  data_nascimento TEXT NOT NULL,
  senha TEXT NOT NULL,
  preferencia_comunicacao TEXT NOT NULL
) STRICT;`

db.exec(schema)

export { db }