<template>
  <div class="ContainerCompanyTableFormComponent">
    <main>
      <form class="tableCompany">
        <p>Company Table</p>
        <template>
          <div>
            <b-table striped hover :items="items"></b-table>
          </div>
        </template>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "CompanyTableFormComponent",
  data() {
    return {
      items: [
        { code: 40, Company: "Microsoft", TypeService: "Cloud" },
        { code: 21, Company: "Apple", TypeService: "Iot" },
        { code: 89, Company: "Oracle", TypeService: "Data Base" },
        { code: 38, Company: "IBM", TypeService: "Cloud" }
      ]
    };
  }
};
</script>

<style scoped>
.ContainerCompanyTableFormComponent {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  padding: 2rem;
  background: #e7e9f3;
  grid-area: main;
}

main form {
  width: 90%;
  border-radius: 5px;
  border: #ccc 1px solid;
  padding: 1rem;
  color: #5b5b65;
}

main form .form-group label {
  color: #afafaf;
}

main form .form-group input::placeholder {
  color: #c7c7c7;
}

main form .form-group textarea::placeholder {
  color: #c7c3c3;
}

.tableCompany {
  background: white;
}
/* footer {
  background: #f3f3f3;
  grid-area: footer;
  position: relative;
  margin-bottom: 0;
  padding: 2rem;
}

footer p {
  margin-left: 1rem;
  color: rgba(93, 103, 154, 1);
  font-size: small;
}

footer .left {
  float: left;
  margin-left: 5rem;
}

footer .left .corp p {
  color: #999;
}

footer .right {
  float: right;
  margin-right: 5rem;
}

footer .right .icons-footer {
  margin-left: 50%;
} */

/* .ContainerCompanyDataFormComponent {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 10vh 80% 20vh;

  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";

  grid-column-gap: 20px;
} */

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
