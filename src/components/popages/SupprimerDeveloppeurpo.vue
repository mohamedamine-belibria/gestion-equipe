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
    <div class="add-product-owner">
      <div class="background-image"></div>
      <h1>Liste des développeurs</h1>
      <table>
        <thead>
          <tr>
            <th>Nom d'utilisateur</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="confirmDeleteUser(user.id)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

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
  background-image: url("devv.jpg");
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
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get("http://localhost:8080/api/test/getAllROLE_USER")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    confirmDeleteUser(id) {
      if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
        this.deleteUser(id);
      }
    },
    deleteUser(id) {
      axios
        .delete(`http://localhost:8080/api/test/deletUser/${id}`)
        .then(() => {
          this.users = this.users.filter((user) => user.id !== id);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
