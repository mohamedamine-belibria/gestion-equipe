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

     <div style="margin-top: -60%; margin-left:20%">
<div class="add-product-owner">
  <h1>Créer un TACHE</h1>
  <form @submit.prevent="createProject">
    <div>
      <label for="name">Nom du TACHE:</label>
      <input type="text" id="name" v-model="project.name" required>
    </div>
    <br>
    <div>
      <label for="description">Description:</label>
      <textarea id="description" v-model="project.description" required></textarea>
    </div>
    <div>
      <label for="dateCreation">Date de création:</label>
      <input type="date" id="dateCreation" v-model="project.dateCreation" required>
    </div>
    <div>
      <label for="dateFinProjet">Date de fin du projet:</label>
      <input type="date" id="dateFinProjet" v-model="project.dateFinProjet" required>
    </div>
    <div>
      <label for="dedline">Date limite:</label>
      <input type="date" id="dedline" v-model="project.dedline" required>
    </div>
     <br>
    <div>
      <label for="statut">Statut:</label>
      <select id="statut" v-model="project.statut">
        <option value="ENCOURS">En cours</option>
        <option value="TERMINER">Terminé</option>
      </select>
    </div>
     <br>
      <br>
    <button type="submit">Créer</button>
  </form>
</div>


 </div>   

</template>


<style>
.sidebar {
  height: 100%;
    width: 100%;
    max-width: 100%;
    margin-right: 10;
    margin-left: -60%;
    margin-top: 10%;
}
.add-product-owner {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      project: {
        itemType: 'TACHE',
        name: '',
        description: '',
        dateCreation: '',
        dateFinProjet: '',
        dedline: '',
        statut: 'ENCOURS'
      }
    };
  },
    methods: {
    getUser() {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user).id : null;
    },
        createProject() {
        
      // Récupérer userId depuis le localStorage
         const userId = this.getUser();

      // Faire une requête à l'API
      fetch(`http://localhost:8080/creationitem/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.project)
      })
        .then(response => {
          if (response.ok) {
            // Le projet a été créé avec succès
            console.log('Projet créé !');
          } else {
            // Gérer les erreurs de requête
            console.error('Erreur lors de la création du projet.');
          }
        })
        .catch(error => {
          // Gérer les erreurs de connexion
          console.error('Erreur de connexion :', error);
        });
    }
  }
};
</script>
