<template>
  <div class="ContainerCompanyDataFormComponent">
    <main>
      <form>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident, exercitationem distinctio rem totam aliquam dolores neque laudantium. Laboriosam omnis beatae corporis vero sunt sequi dolorum totam suscipit atque error.</p>

        <br />
        <div class="form-group">
          <label for="nameCompany">COMPANY NAME</label>
          <input
            v-model="nameCompany"
            required
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="e.g. Your Company Name"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="companySpend">COMPANY SPEND</label>
          <input
            v-model="companySpend"
            type="text"
            class="form-control"
            id="companySpendText"
            required
            placeholder="e.g. $150,000"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="companySpendAbility">COMPANY SPEND ABILITY</label>
          <input
            type="text"
            v-model="companySpendAbility"
            class="form-control"
            required
            id="companySpendAbilityText"
            placeholder="e.g. $150,000 - $333,000"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="notes">NOTES</label>
          <textarea
            v-b-modal.my-modal
            v-model="notes"
            class="form-control"
            id="notesTextArea"
            rows="5"
            placeholder="e.g. Good tech Company"
          ></textarea>
        </div>
      </form>
    </main>

    <!-- MODAL  -->
    <b-modal
      id="my-modal"
      ref="modalForm"
      centered
      title="ADITIONAL NOTES"
      header-text-variant="secondary"
      size="lg"
    >
      <div class="form-group">
        <textarea
          v-model="notes"
          class="form-control"
          id="exampleFormControlTextarea2"
          rows="8"
          placeholder="e.g. Good tech Company"
        ></textarea>
      </div>
      <div slot="modal-footer" class="modalSave w-100">
        <b-button
          variant="primary"
          type="submit"
          size="sm"
          class="float-right"
          @click="saveCompanie"
        >Save</b-button>
      </div>
    </b-modal>

    <b-modal id="modalValidated" v-model="showValidatedForm" title="Validated Form">
      <b-container fluid>
        <ul>
          <li v-for="(item, index) in validFieldForm" :key="index">{{ item }}</li>
        </ul>
      </b-container>

      <div slot="modal-footer" class="w-100">
        <b-button
          variant="primary"
          size="sm"
          class="float-right"
          @click="showValidatedForm=false"
        >Close</b-button>
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
      nameCompany: "",
      companySpend: "",
      companySpendAbility: "",
      notes: "",
      company: {},
      validFieldForm: [],
      showValidatedForm: false
    };
  },
  methods: {
    saveCompanie() {
      debugger;
      if (this.validForm()) {
        var companies = this.$store.getters.companies;

        this.company.nameCompany = this.nameCompany;
        this.company.companySpend = this.companySpend;
        this.company.companySpendAbility = this.companySpendAbility;
        this.company.notes = this.notes;

        companies.push(this.company);
        this.change(companies);

        this.makeToast(
          "success",
          "Add Company",
          "successfully registered company"
        );

        this.$refs["modalForm"].hide();
        this.refreshScreen();
      } else {
        this.showModalValidated();
      }
    },
    showModalValidated() {
      this.$root.$emit("bv::show::modal", "modalValidated", "#btnShow");
    },
    change: function(companies) {
      debugger;
      this.$store.commit("change", companies);
    },
    validForm() {
      let validated = true;
      this.validFieldForm = [];
      if (!this.nameCompany) {
        this.validFieldForm.push("inform  the company name!");
        validated = false;
      }
      if (!this.companySpend) {
        this.validFieldForm.push("inform  the company spend!");
        validated = false;
      }

      if (!this.companySpendAbility) {
        this.validFieldForm.push("inform  the company spend ability!");
        validated = false;
      }

      return validated;
    },
    makeToast(variant = null, title, message) {
      this.$bvToast.toast(message, {
        toaster: "b-toaster-bottom-left",
        title: title,
        variant: variant,
        solid: true
      });
    },
    refreshScreen() {
      this.company = [];
      this.nameCompany = "";
      this.companySpend = "";
      this.companySpendAbility = "";
      this.notes = "";
    }
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
