# Backend Recrutamento Processo Rápido

- Desenvolvimento da Rota Principal;
- Desenvolvimento da Rota de Inserção de Dados em Alunos;
- Desenvolvimento da Rota de Listagem de Dados em Alunos;
- Download de Arquivos e Interpretação dos Dados.

## Tecnologias utilizadas:

- NodeJS
- ExpressJS
- ProstgreSQL(Banco de Dados de Minha Segurança)
- SequelizeJS
- PostgreSQL
- Eslint(Para padronização do código)

### Estrutura do Projeto

```
processorapidobe
 microservice_listing              → Separando o Serviço de Listagem do Serviço de Criação de Usuário. O intuito é evitar parada de funcionalidade.
   └ application                   → Aplicação da camada de serviço.
       └ security                  → Se necessário, estrutura de segurança.
       └ business_rules            → Aplicar a regra de negócio.
   └ bin                           → Estrutura de Funcionamento do Servidor.
      └ cors_options.js            → Configuração para evitar error de Cors Origin.
      └ error-handles.js           → Configuração caso ocorra durante o processo de subida do Servidor.
      └ error-status.js            → Filtro do Código HTTP Status de Error para Retorno caso ocorra.
      └ www                        → Funcionamento do Servidor.
   └ domain                        → Camada central das Regras de Negócio do Projeto.
   └ infrastructure                → Ferramentas relacionada ao Banco de Dados.
      └ config                     → Estrutura de Confiração do Banco de Dados.
         └ connect_database.js     → Regra de conexão do Banco de Dados.
         └ db_config.js            → Regra de configuração do Banco de Dados.
      └ database                   → Estrutura do Banco de Dados em PostgreSQL.
   └ interfaces                    → Estrutura dos Casos de Usos por parte do AcessoExterno(Web) e/ou Banco de Dados.
      └ controllers                → Hapi.js Manipuladores das Rotas de Acesso.
      └ routes                     → Hapi.js Criação e Definição das Rotas de Acesso.
   └ node_modules (generated)      → Biblioteca de Dependências do NPM.
   └ app.js                        → Início de Tudo.
```

### Rota do Micro Serviço

https://processorapido.herokuapp.com

https://processorapido.herokuapp.com/aluno/listar
