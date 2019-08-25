<template>
  <div class="ContainerCompanyPageFormComponent">
    <header></header>
    <div class="context">
      <div class="row microsoft-top">
        <img src="../assets/icon-ms.png" alt />
        <ul>
          <li>
            <p class="row">MICROSOFT</p>
          </li>
          <li>
            <span class="row">Redmond, WA USA</span>
          </li>
        </ul>
      </div>
      <div class="text">
        <p>At Microsoft, our mission is to empower every person and every organization on the planet to achieve more.</p>
        <p>
          Our Mission is grounded in both the world in which we live and the future we strive to create
          <a
            href="#"
          >View More</a>
        </p>
      </div>
    </div>
    <div class="activies">
      <ul class="list-group">
        <li class="list-group-item">
          <p>ACTIVITIES</p>
        </li>
        <li class="list-group-item">
          <span class="span-before">8 days ago</span>
          <img src="../assets/icon-play.png" alt />
          <span class="span-after">Cloud Ochestration</span> replaced
          <p class="p-property span-after">
            <span class="span-line-through">Microsoft</span> on 1 property
          </p>
        </li>
        <li class="list-group-item">
          <span class="span-before">10 days ago</span>
          <img src="../assets/icon-express-script.png" alt />
          <span class="span-after">Express Scripts</span>
          replaced
          <p class="p-property span-after">
            <span class="span-line-through">Microsoft</span> on 1 property
          </p>
        </li>
        <li class="list-group-item">
          <span class="span-before">12 days ago</span>
          <img src="../assets/icon-kaiser.png" alt />
          <span class="span-after">Kaiser Permanente</span>
          replaced
          <p class="p-property span-after">
            <span class="span-line-through">Microsoft</span> on 1 property
          </p>
        </li>
        <li class="list-group-item">
          <span class="span-before">14 days ago</span>
          <img src="../assets/icon-molina.png" alt />
          <span class="span-after">Molina Healthcare</span>
          replaced
          <p class="p-property span-after">
            <span class="span-line-through">Microsoft</span> on 1 property
          </p>
        </li>
        <li class="list-group-item">
          <span class="span-before">15 days ago</span>
          <img src="../assets/icon-express-script-violet.png" alt />
          <span class="span-after">Express Scripts</span>
          replaced
          <p class="p-property span-after">
            <span class="span-line-through">Microsoft</span> on 1 property
          </p>
        </li>
        <li class="list-group-item">
          <span class="span-before">16 days ago</span>
          <img src="../assets/icon-kaiser-blue.png" alt />
          <span class="span-after">Kaiser Permanente</span>
          replaced
          <p class="p-property span-after">
            <span class="span-line-through">Microsoft</span> on 1 property
          </p>
        </li>
        <li class="list-group-item">
          <span class="span-before">17 days ago</span>
          <img src="../assets/icon-molina-green.png" alt />
          <span class="span-after">Molina Healthcare</span>
          replaced
          <p class="p-property span-after">
            <span class="span-line-through">Microsoft</span> on 1 property
          </p>
        </li>
        <li class="list-group-item">
          <span class="span-before">18 days ago</span>
          <img src="../assets/icon-express-script.png" alt />
          <span class="span-after">Microsoft launched M-Cloud</span>
        </li>
      </ul>
    </div>
    <div class="smilarCompanies">
      <ul class="list-group" style="border:none;">
        <li
          class="list-group-item"
          style="border-bottom: solid 2px rgba(9, 9 ,9, 0.5)"
        >SIMILAR COMPANIES</li>
        <li class="list-group-item">
          <img src="../assets/icon-aws.png" alt />
          <span class="span-after">Amazon Web Service (AWS)</span>
        </li>
        <li class="list-group-item">
          <img src="../assets/icon-oracle.png" alt />
          <span class="span-after">Oracle Corportion</span>
        </li>
      </ul>
    </div>
    <div class="CompanySpendHistoryGraphs">
      <ul class="list-group">
        <li
          class="list-group-item"
          style="border-bottom: solid 2px rgba(9, 9 ,9, 0.5)"
        >COMPANY SPEND HISTORY</li>
        <li>
          <line-chart></line-chart>
        </li>
      </ul>
    </div>
    <div class="companySpendHistoryImages">
      <ul class="list-group">
        <li
          class="list-group-item"
          style="border-bottom: solid 2px rgba(9, 9 ,9, 0.5)"
        >COMPANY SPEND HISTORY</li>
        <li class="list-group-item">
          <img src="../assets/icon-google.png" style="float:left" alt />
          <span class="span-after" style="float:left">Google Cloud Platform</span>
          <br />
          <span style="float:left">Microsoft spend on product $500,000</span>
        </li>
        <li class="list-group-item">
          <img src="../assets/icon-century.png" style="float:left" alt />
          <span class="span-after" style="float:left">CenturyLink CDN</span>
          <br />
          <span style="float:left">Microsoft spend on product $500,000</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyPageFormComponent",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
.ContainerCompanyPageFormComponent {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #e7e9f3;
}

main {
  padding: 2rem;
  background: transparent;
  grid-area: main;
}

.context {
  grid-area: context;
  background: transparent;
  padding: 2rem;
}
.context .microsoft-top ul {
  list-style: none !important;
}

.context .microsoft-top ul li span {
  font-size: small;
  margin-left: 1rem;
  color: rgb(93, 93, 93);
}

.context .microsoft-top p {
  display: flex;
  font-weight: bolder;
  margin-left: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(59, 59, 59);
}

.context .text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
}

.context .text p {
  margin-bottom: 0;
}

.span-before {
  font-size: smaller;
  color: rgb(105, 105, 105);
}

.span-after {
  color: rgb(51, 51, 128);
}

.span-line-through {
  text-decoration: line-through;
  color: #999;
}

.p-property {
  margin-left: 16%;
}

.activies {
  grid-area: activies;
  background: transparent;
}

.activies ul li {
  padding-bottom: 0.26rem;
}

.smilarCompanies {
  grid-area: similarCompanies;
  background: transparent;
}

.smilarCompanies ul li {
  border: none;
}

.CompanySpendHistoryGraphs {
  grid-area: companySpendHistoryGraph;
  background: gred;
}

.companySpendHistoryImages {
  grid-area: companySpendHistoryImage;
  background: transparent;
}

.companySpendHistoryImages ul li {
  border: none;
}

.ContainerCompanyPageFormComponent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20vh 26vh 35vh 26vh;

  grid-template-areas:
    "context context"
    "activies similarCompanies"
    "activies companySpendHistoryGraph"
    "activies companySpendHistoryImage";
  grid-column-gap: 1rem;
}

/*
## Grid
- Bidimensional
- divisão de toda a página em linhas e colunas
- Coloca elementos onde quiser nessa divisão

 ## Propriedades
 # CONTAINER
 - display: grid
 - grid-template-columns
 - grid-template-rows;
 - grid-gap
  - grid-row-gap
  - grid-column-gap
- grid-template-areas

... e mais 4 propriedade de alinhamento

# ITEM(s)
- grid-column
 - grid-column-start
 - grid-column-end
- grid-row
 - grid-row-start
 - grid-row-end
-grid-area
... e mais 2 propriedades de alinhamento

#GRID ALINHAMENTO
- justify-content
- align-content
- justify-items
- align-items
- justify-self
- align-self

Vamos separar em 2 grupos
1 - justify e align
2 - content , items , self

#justify e align
O eixo X é o posicionamento horizontal, da esquerda para direita
O eixo Y é o posicionamento vertical, de cima para baixo



*/
</style>
