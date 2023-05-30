<template>
<div class="row">

  
    <div class="col-md-3">
      <div class="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
    <div class="dropdown notifications">
        <a class="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 38 38">
                <path d="M36,34v-2h-2.98c-0.598-0.363-1.081-3.663-1.4-5.847c-0.588-4.075-1.415-9.798-4.146-13.723  C26.584,12.154,25.599,12,24.5,12c-3.646,0-5.576,1.657-7.106,4.086C15.089,19.746,14,30.126,14,33c0,2.757,2.243,5,5,5  c2.414,0,4.435-1.721,4.898-4H36z" style="fill:var(--primary-color);" data-st="fill:var(--chart-color4);"></path>
                <path class="st0" d="M33.02,32c-0.598-0.363-1.081-3.663-1.4-5.847c-0.851-5.899-2.199-15.254-9.101-17.604  C23.433,7.643,24,6.386,24,5c0-2.757-2.243-5-5-5s-5,2.243-5,5c0,1.386,0.567,2.643,1.482,3.549  c-6.902,2.35-8.25,11.705-9.101,17.604C6.209,27.324,5.991,28.813,5.733,30h2.042c0.192-0.961,0.376-2.127,0.586-3.562  C9.36,19.501,10.73,10,19,10c8.27,0,9.64,9.501,10.641,16.442c0.386,2.636,0.682,4.394,1.108,5.558H2v2h12.101  c0.464,2.279,2.485,4,4.899,4c2.415,0,4.435-1.721,4.899-4H36v-2H33.02z M19,8c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3  S20.654,8,19,8z M19,36c-1.304,0-2.416-0.836-2.829-2h5.658C21.416,35.164,20.304,36,19,36z"></path>
            </svg>
            <span class="pulse-ring"></span>
        </a>
        <div id="NotificationsDiv" class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0">
            <div class="card border-0 w380">
                <div class="card-header border-0 p-3">
                    <h5 class="mb-0 font-weight-light d-flex justify-content-between">
                        <span>Notifications</span>
                        <span class="badge text-white">06</span>
                    </h5>
                </div>
                <div class="tab-content card-body">
                    <div class="tab-pane fade show active">
                        <ul class="list-unstyled list mb-0">
                            <li class="py-2 mb-1 border-bottom" v-for="notification in notifications" :key="notification.id">
                                <a href="javascript:void(0);" class="d-flex">
                                    <img class="avatar rounded-circle" src="../assets/images/xs/avatar1.svg" alt="">
                                    <div class="flex-fill ms-2">
                                        <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">{{notification.user.username}}</span> <small>2MIN</small></p>
                                        <span class="">{{notification.message}} <span class="badge bg-success">Add</span></span>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <a class="card-footer text-center border-top-0" href="#"> View all notifications</a>
            </div>
        </div>
    </div>

</div>
      <div class="sidebar px-4 py-4 py-md-5 me-0 open" style="margin-left: -150px; margin-bottom: -20px; height: 89%;">
        <div class="d-flex flex-column h-100">
          <a href="index.html" class="mb-0 brand-icon">
            <span class="logo-icon">
              <i class="icofont-stopwatch fs-2"></i>
            </span>
            <span>
              <router-link class="logo-text" to="/mod">Time-Tracker</router-link>
            </span>
          </a>
          <!-- Menu: main ul -->
          <ul class="menu-list flex-grow-1 mt-3">
            <li>
              <router-link class="m-link" to="/mod">
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
                  <router-link class="ms-link" to="/Listdevloppeurpo">Développeur</router-link>
                </li>
              </ul>
            </li>
            <li class="collapsed">
              <a class="m-link" data-bs-toggle="collapse" data-bs-target="#widget" href="#">
                <i class="icofont-code fs-5"></i><span>Gestion des utilisateurs</span><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="widget">
                
                <li>
                  <router-link class="ms-link" to="/AjouterDevloppeurpo">AjouterDeveloppeur</router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/ModifierDeveloppeurpo">ModifierDeveloppeur</router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/SupprimerDeveloppeurpo">SupprimerDeveloppeur</router-link>
                </li>
              </ul>
            </li>
            <li class="collapsed">
              <a class="m-link" data-bs-toggle="collapse" data-bs-target="#menu-order" href="#">
                <i class="icofont-tasks fs-5"></i> <span>Projets</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="menu-order">
               
                
                
                <li>
                  <router-link class="ms-link" to="/ListeDeProjetsmod">Liste De Mes Projets </router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/Divisiondestachesmod">Cree une tâche</router-link>
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
                  <router-link class="ms-link" to="/Affectationdetachemod">Affectation de tache</router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/Affectationtacheprojet">Affectation tache projet</router-link>
                </li>
                
                <li>
                  <router-link class="ms-link" to="/ModifierAffectationdetachemod">Modifier Affectation de tache</router-link>
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
                  <router-link class="ms-link" to="/TacheEnCoursmod">Tache En Cours</router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/TacheEnTerminemod">Tache Termine</router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/ProjetTerminemod">ProjetTermine</router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/ProjetEnCoursmod">ProjetEnCours</router-link>
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
        


        <!-- Contenu de la page -->
 <div class="container-xxl">
      <div class="row align-items-center">
        <div class="border-0 mb-4">
          <div
            class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
          >
            <h3 class="h4 mb-0"></h3>
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
                    src="../assets/images/productowner.jpg"
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
  name: "Moderator",
  data() {
    return {
      content: "",
      notifications: []
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
    UserService.getModeratorBoard().then(
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
    this.getAllNotification();
  },
  methods: {
    getUser() {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user).id : null;
    },
    getAllNotification() {
      const userId = this.getUser();
      const url = `http://localhost:8080/getnotificationsByUser/${userId}`;

      // Fetch data from the API
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Assign the received notifications to the data property
          this.notifications = data;
          console.log(this.notifications);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

