<template>
  <div class="ContainerCompanyDataFormComponent">
    <main>
      <form>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident, exercitationem distinctio rem totam aliquam dolores neque laudantium. Laboriosam omnis beatae corporis vero sunt sequi dolorum totam suscipit atque error.</p>

        <br />
        <div class="form-group">
          <label for="exampleInputEmail1">COMPANY NAME</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="e.g. Your Company Name"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="exampleInputPassword1">COMPANY SPEND</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="e.g. $150,000"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="exampleInputPassword1">COMPANY SPEND ABILITY</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="e.g. $150,000 - $333,000"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="exampleFormControlTextarea1">NOTES</label>
          <textarea
            v-b-modal.my-modal
            v-model="valueTextArea"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="e.g. Good tech Company"
          ></textarea>
        </div>
      </form>
    </main>

    <!-- MODAL  -->
    <b-modal
      id="my-modal"
      centered
      title="ADITIONAL NOTES"
      header-text-variant="secondary"
      size="lg"
    >
      <div class="form-group">
        <textarea
          v-model="valueTextArea"
          class="form-control"
          id="exampleFormControlTextarea2"
          rows="8"
          placeholder="e.g. Good tech Company"
        ></textarea>
      </div>
      <div slot="modal-footer" class="modalSave w-100">
        <b-button variant="primary" size="sm" class="float-right" @click="show=false">Save</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "CompanyDataFormComponent",
  data() {
    return {
      routesNavigation: "Home / ComponentData",
      modaSaveShow: false,
      valueTextArea: ""
    };
  }
};
</script>

<style scoped>
.ContainerCompanyDataFormComponent {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  padding: 2rem;
  background: transparent;
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

.modalSave button {
  background: #5d699a;
  border: #5d699a;
  width: 6rem;
}

#my-modal body {
  color: #c7c3c3 !important;
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
