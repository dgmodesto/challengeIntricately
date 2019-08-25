import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import CompanyDataFormComponent from "@/components/CompanyDataFormComponent";
import CompanyData from "@/views/CompanyData";
import CompanyPage from "@/views/CompanyPage";
import CompanyTable from "@/views/CompanyTable";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "companyData",
      component: CompanyData
    },
    {
      path: "/companyData",
      name: "Company Data",
      component: CompanyData
    },
    {
      path: "/companyPage",
      name: "Company Page",
      component: CompanyPage
    },
    {
      path: "/companyTable",
      name: "Company Table",
      component: CompanyTable
    },
    {
      path: "/form",
      name: "CompanyPage",
      component: CompanyPage
    }
  ]
});
