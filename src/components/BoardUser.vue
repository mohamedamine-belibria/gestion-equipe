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
              <router-link class="logo-text" to="/user">Time-Tracker</router-link>
            </span>
          </a>
          <!-- Menu: main ul -->
          <ul class="menu-list flex-grow-1 mt-3">
            <li>
              <router-link class="m-link" to="/user">
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
                  <router-link class="ms-link" to="/listedevloppeur">Développeur</router-link>
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
<div style="margin-top: -50%; margin-left:20%">
  <div class="body d-flex py-3">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="border-0 mb-4">
          <div
            class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
          >
            <h3 class="h4 mb-0">Profil</h3>
          </div>
        </div>
      </div>
      <!-- Row end  -->
      <div class="row g-3 mb-3">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-12 col-lg-3">
                  <img
                    src="../assets/images/profile_av.svg"
                    class="img-thumbnail"
                    alt="..."
                    style="width: 260px"
                  />
                  <ul class="list-unstyled custom d-flex mb-3 mt-3">
                    <li class="me-3">
                      <a href="#" class="card-link"
                        ><i class="fa fa-lg fa-facebook"></i
                      ></a>
                    </li>
                    <li class="me-3">
                      <a href="#" class="card-link"
                        ><i class="fa fa-lg fa-twitter"></i
                      ></a>
                    </li>
                    <li class="me-3">
                      <a href="#" class="card-link"
                        ><i class="fa fa-lg fa-instagram"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-12 col-lg-9">
                  <h4> Profil <strong>{{currentUser.username}}</strong> </h4>
                  <div
                    class="d-flex flex-row flex-wrap align-items-center mb-3 mt-2"
                  >
                  </div>
                  <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>
    
                  
                  <ul class="design-box ps-0">
                    <li>
                      <div class="icon text-center">
                        <i class="fa fa-map-marker text-secondary"></i>
                      </div>
                     
                      <span><strong>ID:</strong>
                           {{currentUser.id}}</span>
                           
                    </li>
                    
                    
                    <li>
                      <div class="icon text-center">
                        <i class="fa fa-envelope text-secondary"></i>
                      </div>
                      <div class="fw-bold mb-0"><strong>Email:</strong>
      {{currentUser.email}} </div>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-12">
          <ul class="nav nav-tabs tab-body-header rounded d-inline-flex">
            <li class="nav-item">
              <a
                class="nav-link show active"
                data-bs-toggle="tab"
                href="#Company_Settings"
                >Company</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#Notifications"
                >Notifications
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#Change_Password"
                >Change Password
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
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
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
     if (!this.currentUser) {
      this.$router.push('/login');
    }
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
