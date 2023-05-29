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
    <div class="add-product-owner">
      <div class="background-image"></div>
      <h1>Liste des utilisateurs</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Nom d'utilisateur</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td v-if="editingUser.id !== user.id">{{ user.username }}</td>
            <td v-else><input v-model="editingUser.username" class="form-control" /></td>
            <td v-if="editingUser.id !== user.id">{{ user.email }}</td>
            <td v-else><input v-model="editingUser.email" class="form-control" /></td>
            <td>
              <button
                v-if="editingUser.id !== user.id"
                @click="startEditing(user)"
                class="btn btn-primary"
              >
                Modifier
              </button>
              <button v-else @click="submitEdit" class="btn btn-success">
                Enregistrer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      editingUser: {
        id: null,
        username: "",
        email: "",
        password: "",
        roles: [],
      },
    };
  },
  mounted() {
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
    startEditing(user) {
      this.editingUser = { ...user };
    },
    submitEdit() {
      const updatedUser = {
        id: this.editingUser.id,
        username: this.editingUser.username,
        email: this.editingUser.email,
        password: this.editingUser.password,
        roles: this.editingUser.roles,
      };

      axios
        .put("http://localhost:8080/api/test/updateuser", updatedUser)
        .then((response) => {
          console.log(response.data);
          this.fetchUsers();
          this.editingUser = {
            id: null,
            username: "",
            email: "",
            password: "",
            roles: [],
          };
        })
        .catch((error) => {
          console.error(
            "Une erreur est survenue lors de la mise à jour de l'utilisateur:",
            error
          );
        });
    },
  },
};
</script>

<style>
.add-product-owner {
  margin-top: 20px;
  padding: 20px;
  background-color: #667f98;
  border-radius: 10px;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("lpo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  filter: contrast(0.8) blur(0px);
}

h1 {
  margin-bottom: 20px;
}
</style>
