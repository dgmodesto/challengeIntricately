<template>
  <div class="containerHome">
    <HeaderComponent class="header" />

    <header>
      <label>{{ routesNavigation }}</label>
    </header>
    <aside>
      <ul class="list-group">
        <router-link to="CompanyData">
          <li
            class="list-group-item list-group-item-action"
            @click="setActiveMenu(0)"
            :class="[{active : (menuActive == 0)}]"
            href="#"
          >Company Data</li>
        </router-link>
        <router-link to="CompanyTable">
          <li
            class="list-group-item list-group-item-action"
            @click="setActiveMenu(1)"
            :class="[{active : (menuActive == 1)}]"
            href="#"
          >Company Table</li>
        </router-link>
        <router-link to="CompanyPage">
          <li
            class="list-group-item list-group-item-action"
            @click="setActiveMenu(2)"
            :class="[{active : (menuActive == 2)}]"
            href="#"
          >Company Page</li>
        </router-link>
      </ul>
    </aside>
    <main>
      <router-view />
    </main>

    <cFooter class="footer" />
  </div>
</template>

<script>
import router from "../router";
import HeaderComponent from "../components/HeaderComponent";
import cFooter from "../components/FooterComponent";
import CompanyData from "./CompanyData";
import CompanyPage from "./CompanyPage";
import CompanyTable from "./CompanyTable";
export default {
  name: "Home",
  components: {
    router,
    HeaderComponent,
    CompanyData,
    CompanyPage,
    CompanyTable,
    cFooter
  },
  watch: {
    $route: function(to, from) {
      this.routesNavigation =
        this.complementRoutesNavigation + this.$route.name;
    }
  },
  data() {
    return {
      complementRoutesNavigation: "Home / ",
      routesNavigation: "",
      menuActive: 1
    };
  },
  created() {
    this.routesNavigation = this.complementRoutesNavigation + this.$route.name;
  },
  methods: {
    setActiveMenu(itemMenu) {
      console.log("setActiveMenu");

      this.menuActive = itemMenu;
    }
  }
};
</script>


<style scoped>
.containerHome {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #e7e9f3;
}

.header {
  grid-area: header;
}

header {
  padding-top: 2%;
  padding-left: 10%;
  background: transparent;
  grid-area: top;
}

header label {
  text-transform: uppercase;
  color: #999;
  word-spacing: 0.5rem;
  font-weight: normal;
}

aside {
  background: transparent;
  grid-area: aside;
  padding-left: 20%;
  padding-top: 1%;
}

aside ul {
  list-style: none;
  margin: 2rem;
  border: #ccc solid 1px;
  border-radius: 5px;
}

aside ul li {
  padding: 2rem;
  height: 80%;
  text-transform: uppercase;
  color: #1f2b5a;
  font-weight: bold;
  height: 100%;
}
aside ul li a {
  height: 100%;
}

aside ul .list-group-item.active {
  z-index: 2;
  color: #5b5b65;
  border: none;
  border-left: #1f2b5a solid 5px;
  background: #fafbfc;
}

main {
  padding: 0.5rem;
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

.footer {
  grid-area: footer;
  background: #f3f3f3;
  height: 100%;
}

.containerHome {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 15vh 10vh 80% 20vh;

  grid-template-areas:
    "header header"
    "top    top"
    "aside  main"
    "footer footer";

  /* grid-column-gap: 20px; */
}
</style>

