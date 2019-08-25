<template>
  <div class="containerHeader">
    <b-navbar class="navbarHead" toggleable="lg" type="dark">
      <b-navbar-brand class="logo-company">
        <router-link to="/">
          <img src="../assets/icon-challenge.png" alt="icon-challenge" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-form>
            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text">
                  <svg class="icon icon-search">
                    <use xlink:href="#icon-search" />
                  </svg>
                </span>
              </b-input-group-prepend>

              <b-form-input class="input-head" size="lg" placeholder="Search Companies"></b-form-input>
            </b-input-group>
          </b-nav-form>

          <label class="label-head m-2">OR</label>

          <b-button class="btn-head">NEW SMARTLIST</b-button>

          <b-nav-item-dropdown class="drop-head" text="PROSPECT" right>
            <b-dropdown-item href="#">PROSPECT 1</b-dropdown-item>
            <b-dropdown-item href="#">PROSPECT 2</b-dropdown-item>
            <b-dropdown-item href="#">PROSPECT 4</b-dropdown-item>
            <b-dropdown-item href="#">PROSPECT 4</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown class="drop-head" text="ALERT" right>
            <b-dropdown-item href="#">ALERT 1</b-dropdown-item>
            <b-dropdown-item href="#">ALERT 2</b-dropdown-item>
            <b-dropdown-item href="#">ALERT 4</b-dropdown-item>
            <b-dropdown-item href="#">ALERT 4</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown class="drop-head" text="LEARN" right>
            <b-dropdown-item href="#">LEARN 1</b-dropdown-item>
            <b-dropdown-item href="#">LEARN 2</b-dropdown-item>
            <b-dropdown-item href="#">LEARN 4</b-dropdown-item>
            <b-dropdown-item href="#">LEARN 4</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-brand href="#">
            <img class="icon-head" src="../assets/icon-chrome.png" alt="icon-chrome" />
          </b-navbar-brand>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>
                <img class="icon-head" src="../assets/icon-avatar-user.png" alt="avatar" />
              </em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<style scoped>
.navbarHead {
  background-color: rgba(57, 71, 131, 1);
  height: 100px;
}

.logo-company {
  margin-right: 5rem;
  margin-left: 3rem;
}

.input-head {
  width: 20rem;
  background: #1f2b5a;
  border: none;
  color: white;
}

.input-head::placeholder {
  color: white;
}

.containerHeader .input-group-text {
  width: 48px;
  border: none;
  background-color: #1f2b5a;
}
.containerHeader [class^="fa-"],
[class*=" fa-"] {
  display: inline-block;
  width: 100%;
}
.containerHeader .input-group-head {
  border-left: none;
}

.label-head {
  color: white;
}

.btn-head {
  background-color: #5d699a;
  width: 15rem;
}

.drop-head {
  margin-left: 1rem;
}

.icon-head {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;

  border: solid 1px #fff;
}
</style>
