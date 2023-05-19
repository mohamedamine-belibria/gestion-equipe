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
              <a class="m-link" data-bs-toggle="collapse" data-bs-target="#widget" href="#">
                <i class="icofont-code fs-5"></i><span>Gestion des utilisateurs</span><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="widget">
                
                <li>
                  <router-link class="ms-link" to="/AjouterDeveloppeuradmin">AjouterDeveloppeur</router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/ModifierDeveloppeuradmin">ModifierDeveloppeur</router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/SupprimerDeveloppeuradmin">SupprimerDeveloppeur</router-link>
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
                  <router-link class="ms-link" to="/Divisiondestachesmod">Projet:Division des tâches</router-link>
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
</div>
<div>
  
 <div style="margin-top: -40%; margin-left:20%">
    <h2>List of Projects Assigned to Me</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Deadline</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projet in projets" :key="projet.id">
          <td>{{ projet.item.name }}</td>
          <td>{{ projet.item.description }}</td>
          <td>{{ projet.item.dateCreation }}</td>
          <td>{{ projet.item.dateFinProjet }}</td>
          <td>{{ projet.item.dedline }}</td>
          <td>{{ projet.item.statut }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      projets: []
    };
  },
  mounted() {
    this.fetchProjets();
  },
  methods: {
    getUser() {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user).id : null;
    },
    fetchProjets() {
      const userId = this.getUser();
      fetch(`http://localhost:8080/getAllProjectByUserAndType/${userId}`)
        .then(response => response.json())
        .then(data => {
          this.projets = data;
        })
        .catch(error => {
          console.error('Error fetching projects:', error);
        });
    }
  }
};
</script>


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