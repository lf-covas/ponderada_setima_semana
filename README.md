<h1>Atividade ponderada semana 7</h1>

<h2>Caso de teste de software</h2>

<h3>Criação de iniciativas via POST</h3>

**Objetivo:**
<p>O objetivo do teste e verificar se o nosso backend consegue receber as informações corretamente para efetuar a criação de uma nova iniciativa em nosso banco de dados, identificando o que deve ser armazenado como string e inteiro e se todas as informações obrigatorias foram preenchidas, persistindo corretamente em nosso banco de dados ou retornando um erro caso as informações sejam inconsistentes<p>

**Pré-condição:**
<p>O código deve conter um endpoint que possibilita criação de uma nova iniciativa com as variáveis necessárias para serem enviadas ao banco de dados.<p>

**Procedimento de teste:**
<p>Deve se criar uma função utilizando Jest para validar as informações passadas como parâmetro;
Simular o POST das informações fornecendo diferentes tipos de valores nos parâmetros para tentar identificar possíveis falhas;<p>

**Resultado esperado:**
<p>Espera que se tenha como resposta o código 200 informando que o obejto enviado foi salvo no banco de dados corretamente ou o codigo de erro 400 caso as informações fornecidas não sejam as informações esperadas.<p>

**Resultado obtido:**
<p>Codigo 200 quando fornecido as informações esperada (um objeto contendo obrigatoriamente o atributos name, status, companyId e moduleId sendo companyId e moduleId valores inteiros e os demais strings), informando que os dados foram salvos no banco de dados corretamente. Também foi recebido codigo 200 quando faltou informações (status) e quando foi passado apenas valores inteiros. Além disso, recebemos dois codigos 500 quando não passamos dados nem um ou quando informamos todos os dados como string<p>


Figura 1: Resultado obtidos quando as informações são como esperadas


Figura 2: Resultado obtido quando as informações não são como esperadas

**Pós-condição:**
<p> <p> 