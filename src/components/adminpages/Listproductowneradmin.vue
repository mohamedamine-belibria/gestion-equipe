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
    <div class="moderator-list" style="margin-top: -50vh; margin-left: 20%">
      <div class="background-image"></div>

      <h1>List Product-Owner</h1>

      <table class="table">
        <thead>
          <tr>
            <th>Nom Product-Owner</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="moderator in moderators" :key="moderator.id">
            <td>{{ moderator.username }}</td>
            <td>{{ moderator.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #f4f4f4; /* Arrière-plan pour l'ensemble de la page */
}

.container {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.menu-list {
  list-style: none;
  padding: 0;
}

.m-link {
  color: #fff; /* Couleur de lien claire pour le menu latéral */
  text-decoration: none;
  padding: 10px 0;
}

.m-link:hover {
  color: #fff; /* Couleur de survol pour les liens du menu latéral */
}

.sub-menu {
  padding-left: 20px;
}

.ms-link {
  color: #1a5199; /* Couleur de lien plus claire pour le sous-menu */
}

.ms-link:hover {
  color: #38b2ac; /* Couleur de survol pour les liens du sous-menu */
}

.user-list {
  background-color: #fff; /* Couleur de fond claire pour la liste des utilisateurs */
  padding: 20px;
  border-radius: 5px; /* Bord arrondi pour la liste des utilisateurs */
}

.table {
  width: 90%;
  margin-top: 30px;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 25px;
  border: 1px solid #fff; /* Bordure de la table */
}

.table th {
  background-color: #7187ad; /* Couleur de fond des en-têtes de table */
  color: #fff; /* Couleur de texte des en-têtes de table */
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      moderators: [], // Vos données des product owners
      columns: ["Nom d'utilisateur", "Email"], // Titres des colonnes du tableau
    };
  },
  mounted() {
    this.fetchModerators();
  },
  methods: {
    fetchModerators() {
      axios
        .get("http://localhost:8080/api/test/getAllROLE_MODERATOR")
        .then((response) => {
          this.moderators = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
