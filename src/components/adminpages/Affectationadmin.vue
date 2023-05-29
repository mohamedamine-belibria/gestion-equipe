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
                  <router-link class="ms-link" to="/Listproductowneradmin"
                    >Productowner</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/Listdevloppeuradmin"
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
                  <router-link class="ms-link" to="/AjouterProductowneradmin"
                    >AjouterProductowner</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/ModifierProductowneradmin"
                    >ModifierProductowner</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/SupprimerProductowneradmin"
                    >SupprimerProductowner</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/AjouterDeveloppeuradmin"
                    >AjouterDeveloppeur</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/ModifierDeveloppeuradmin"
                    >ModifierDeveloppeur</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/SupprimerDeveloppeuradmin"
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
                  <router-link class="ms-link" to="/AjouterProjetadmin"
                    >AjouterProjet</router-link
                  >
                </li>

                <li>
                  <router-link class="ms-link" to="/ListeDeProjetsadmin"
                    >ListeDeProjets</router-link
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
                  <router-link class="ms-link" to="/Affectationadmin"
                    >Affectation</router-link
                  >
                </li>

                <li>
                  <router-link class="ms-link" to="/ModifierAffectationadmin"
                    >ModifierAffectation</router-link
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
                  <router-link class="ms-link" to="/ProjetTermineadmin"
                    >ProjetTermine</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/ProjetEnCoursadmin"
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
    <div class="affectation-page">
      <div class="background-image"></div>
      <div>
        <!-- Le reste de votre contenu -->
        <h2>Project Assignment</h2>
        <div class="form-container">
          <label for="selectedProjet">Select Project:</label>
          <select v-model="selectedProjet" id="selectedProjet" class="input-field">
            <option v-for="projet in projets" :value="projet.id" :key="projet.id">
              {{ projet.name }}
            </option>
          </select>

          <label for="selectedModerateur">Select Product Owner:</label>
          <select
            v-model="selectedModerateur"
            id="selectedModerateur"
            class="input-field"
          >
            <option
              v-for="moderateur in moderateurs"
              :value="moderateur.id"
              :key="moderateur.id"
            >
              {{ moderateur.username }}
            </option>
          </select>

          <button @click="affecter" class="submit-button">Assign Project</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProjet: "",
      selectedModerateur: "",
      projets: [],
      moderateurs: [],
    };
  },
  mounted() {
    this.fetchProjets();
    this.fetchModerateurs();
  },
  methods: {
    fetchProjets() {
      fetch("http://localhost:8080/getAllProjets")
        .then((response) => response.json())
        .then((data) => {
          this.projets = data;
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
        });
    },
    fetchModerateurs() {
      fetch("http://localhost:8080/api/test/getAllROLE_MODERATOR")
        .then((response) => response.json())
        .then((data) => {
          this.moderateurs = data;
        })
        .catch((error) => {
          console.error("Error fetching moderators:", error);
        });
    },
    affecter() {
      const userId = this.selectedModerateur;
      const itemId = this.selectedProjet;

      fetch(`http://localhost:8080/assignment/assign/${userId}/${itemId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Assignment successful:", data);
          // You can perform any additional actions after successful assignment
        })
        .catch((error) => {
          console.error("Error assigning project:", error);
        });
    },
  },
};
</script>
<style scoped>
.affectation-page {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("poo.png");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
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
  background-color: #213122;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
