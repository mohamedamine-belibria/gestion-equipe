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
              <a
                class="m-link active"
                data-bs-toggle="collapse"
                data-bs-target="#menu-report"
                href="#"
              >
                <i class="icofont-chart-pie fs-5"></i><span>Tous les utilisateurs</span
                ><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse show" id="menu-report">
                <li>
                  <router-link class="ms-link" to="/Listdevloppeurpo"
                    >Développeur</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="collapsed">
              <a
                class="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#widget"
                href="#"
              >
                <i class="icofont-code fs-5"></i><span>Gestion des utilisateurs</span
                ><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="widget">
                <li>
                  <router-link class="ms-link" to="/AjouterDevloppeurpo"
                    >AjouterDeveloppeur</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/ModifierDeveloppeurpo"
                    >ModifierDeveloppeur</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/SupprimerDeveloppeurpo"
                    >SupprimerDeveloppeur</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="collapsed">
              <a
                class="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#menu-order"
                href="#"
              >
                <i class="icofont-tasks fs-5"></i> <span>Projets</span>
                <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="menu-order">
                <li>
                  <router-link class="ms-link" to="/ListeDeProjetsmod"
                    >Liste De Mes Projets
                  </router-link>
                </li>
                <li>
                  <router-link class="ms-link" to="/Divisiondestachesmod"
                    >Cree une tâche</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="collapsed">
              <a class="m-link" data-bs-toggle="collapse" data-bs-target="#form" href="#">
                <i class="icofont-file-text fs-5"></i> <span>Affectation</span
                ><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="form">
                <li>
                  <router-link class="ms-link" to="/Affectationdetachemod"
                    >Affectation de tache</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/Affectationtacheprojet"
                    >Affectation tache projet</router-link
                  >
                </li>

                <li>
                  <router-link class="ms-link" to="/ModifierAffectationdetachemod"
                    >Modifier Affectation de tache</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="collapsed">
              <a class="m-link" data-bs-toggle="collapse" data-bs-target="#font" href="#">
                <i class="icofont-brand-icofont fs-5"></i><span>Statistique</span
                ><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="font">
                <li>
                  <router-link class="ms-link" to="/TacheEnCoursmod"
                    >Tache En Cours</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/TacheEnTerminemod"
                    >Tache Termine</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/ProjetTerminemod"
                    >ProjetTermine</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/ProjetEnCoursmod"
                    >ProjetEnCours</router-link
                  >
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
    <div class="projects-page">
      <h2>tache termine</h2>
      <table>
        <!-- Tableau des projets terminés -->
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Dedline</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="projet in projetsTermines" :key="projet.id">
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

<style scoped>
.sidebar {
  height: 100%;
  width: 100%;
  max-width: 100%;
  margin-right: 10;
  margin-left: -60%;
  margin-top: 10%;
}
</style>

<script>
export default {
  data() {
    return {
      projets: [],
    };
  },
  mounted() {
    this.fetchProjets();
  },
  computed: {
    projetsTermines() {
      return this.projets.filter((projet) => projet.item.statut === "TERMINER");
    },
  },
  methods: {
    getUser() {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user).id : null;
    },
    fetchProjets() {
      const userId = this.getUser();
      fetch(`http://localhost:8080/getAllTaskByUser/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          this.projets = data;
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des projets :", error);
        });
    },
  },
};
</script>

<style scoped>
.projects-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>
