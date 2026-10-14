# Casos de Teste — SauceDemo

**Aplicação testada:** https://www.saucedemo.com/

**Ferramenta:** Cypress

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT-01 | Login com credenciais válidas | Acesso à página de produtos |
| CT-02 | Login com senha inválida | Exibição de mensagem de erro |
| CT-03 | Login com usuário bloqueado | Acesso negado e mensagem de bloqueio |
| CT-04 | Adicionar produto ao carrinho | Contador atualizado e opção de remover exibida |
| CT-05 | Remover produto do carrinho | Produto removido do carrinho |

**Comando de execução:** `npx cypress run`

**Resultado:** 5 testes aprovados.