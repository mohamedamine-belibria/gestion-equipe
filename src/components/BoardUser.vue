<template>
<div class="row">
    <div class="col-md-3">
      <div class="sidebar px-4 py-4 py-md-5 me-0 open">
        <div class="d-flex flex-column h-100">
          <a href="index.html" class="mb-0 brand-icon">
            <span class="logo-icon">
              <i class="icofont-stopwatch fs-2"></i>
            </span>
            <span>
              <router-link class="logo-text" to="/admin">Time-Tracker</router-link>
            </span>
          </a>
          <!-- Menu: main ul -->
          <ul class="menu-list flex-grow-1 mt-3">
            <li>
              <router-link class="m-link" to="/admin">
                <i class="icofont-home fs-5"></i>
                <span>Tableau de bord</span>
              </router-link>
            </li>
            <li class="collapsed">
              <a class="m-link active" data-bs-toggle="collapse" data-bs-target="#menu-report" href="#">
                <i class="icofont-chart-pie fs-5"></i><span>Tous les utilisateurs</span><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse show" id="menu-report">
              
                <li>
                  <router-link class="ms-link" to="/Listdevloppeuradmin">Développeur</router-link>
                </li>
              </ul>
            </li>
           
            
            <li class="collapsed">
              <a class="m-link" data-bs-toggle="collapse" data-bs-target="#form" href="#">
                <i class="icofont-file-text fs-5"></i> <span>Affectation</span><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="form">
               
                <li>
                  <router-link class="ms-link" to="/listedemestache">Mes tache</router-link>
                </li>
                
                <li>
                  <router-link class="ms-link" to="/pagevide">pagevide</router-link>
                </li>
              </ul>
            </li>
            <li class="collapsed">
              <a class="m-link" data-bs-toggle="collapse" data-bs-target="#font" href="#">
                <i class="icofont-brand-icofont fs-5"></i><span>Statistique</span><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="font">
                <li>
                  <router-link class="ms-link" to="/tacheEncouruser">Tache En Cours</router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/tachetermineruser">Tache Termine</router-link>
                </li>
                
              </ul>
            </li>
          </ul>
          <!-- Menu: menu collapse btn -->
          <button type="button" class="btn btn-link sidebar-mini-btn text-light">
            <span class="ms-2"><i class="icofont-bubble-right"></i></span>
          </button>
        </div>
      </div>
    </div>

    <div class="col-md-9">
        <header class="jumbotron">
            <h3>{{ content }}</h3>

            <div>cc</div>

        </header>
        <!-- Contenu de la page -->
    </div>
</div>
</template>

<style scoped>
.sidebar {
  width: 100%;
  max-width: 100%;
  margin-right: 10px;
  margin-left: -60%;
  margin-top: 10%;
}

.home-page {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome-section {
  width: 70%;
  padding: 20px;
  background-color: #f2f2f2;
  color: #333;
}

.statistics-section {
  width: 30%;
  background-color: #eaeaea;
  padding: 20px;
  color: #555;
}
</style>

<script>
import UserService from "../services/user.service";

export default {
  name: "User",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
