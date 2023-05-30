<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">Teamwill-group</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">productowner</router-link>
        </li>
        <li v-if="showUserBoard" class="nav-item">
          <router-link to="/user" class="nav-link">développeur bord</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
    <div>
      <footer class="footer">
        <div class="row">
          <div class="col-md-6">
            <h4 class="footer-title elegant-title">TeamWill Tunisia</h4>
            <p class="footer-description">
              Teamwill, leader des solutions métier et SI dédiées au crédit et aux
              financements spécialisés.
            </p>
          </div>
          <div class="col-md-4">
            <h4 class="footer-title elegant-title">Contact Us</h4>
            <ul class="footer-contact-list bigger-text">
              <li><i class="fa fa-map-marker"></i> 123 Street, City, Country</li>
              <li><i class="fa fa-phone"></i> 123-456-7890</li>
              <li><i class="fa fa-envelope"></i> info@example.com</li>
            </ul>
          </div>
        </div>

        <div class="bottom-bar text-center">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <!-- Remove the image from the bottom bar -->
                <!-- <img src="assets/img/team.png" alt="Logo" class="footer-logo"> -->
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <p class="footer-copyright text-center">
                  <strong>2023 TeamWill Consulting All rights reserved.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<style>
@import url("./assets/Style.css");
@import url("./assets/plugin/nestable/jquery-nestable.css");
@import url("./assets/css/timetracker.style.min.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4cm;
  margin-top: 100%;
  margin-block: -6%;
}

.footer h4 {
  color: #fff;
  font-size: 14px;
}

.footer p {
  color: #bbb;
}

   

</style>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }

      return false;
    },

    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_MODERATOR");
      }

      return false;
    },
    showUserBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_USER");
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
