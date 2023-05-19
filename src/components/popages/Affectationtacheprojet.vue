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
<div style="margin-top: -50%; margin-left: 20%">
    <div class="affectation-page">
      <h2>Tache Assignment</h2>
      <div class="form-container">
        <label for="selectedTache">Select Task:</label>
        <select v-model="selectedTache" id="selectedTache" class="input-field">
          <option v-for="tache in taches" :value="tache.item.id" :key="tache.item.id">
            {{ tache.item.name }}
          </option>
        </select>

        <label for="selectedProjet">Select Project:</label>
        <select v-model="selectedProjet" id="selectedProjet" class="input-field">
          <option v-for="projet in projets" :value="projet.item.id" :key="projet.item.id">
            {{ projet.item.name }}
          </option>
        </select>

        <button @click="affecter" class="submit-button">Assign Project</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTache: '',
      selectedProjet: '',
      taches: [],
      projets: []
    };
  },
  mounted() {
    this.fetchTaches();
    this.fetchProjets();
  },
  methods: {
    getUser() {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user).id : null;
    },
    fetchTaches() {
      const userId = this.getUser();
      fetch(`http://localhost:8080/getAllProjectByUserAndType/${userId}`)
        .then(response => response.json())
        .then(data => {
          this.taches = data;
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
    },
    fetchProjets() {
      const userId = this.getUser();
      fetch(`http://localhost:8080/getAllTaskByUser/${userId}`)
        .then(response => response.json())
        .then(data => {
          this.projets = data;
        })
        .catch(error => {
          console.error('Error fetching projects:', error);
        });
    },
    affecter() {
      const tacheId = this.selectedTache;
      const projetId = this.selectedProjet;

      fetch(`http://localhost:8080/assignment/tache/${tacheId}/${projetId}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          console.log('Assignment successful:', data);
          // You can perform any additional actions after successful assignment
        })
        .catch(error => {
          console.error('Error assigning project:', error);
        });
    }
  }
};
</script>
<style scoped>
.affectation-page {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
}

.form-container {
  display: grid;
  gap: 10px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

label {
  font-weight: bold;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
