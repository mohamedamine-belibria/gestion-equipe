<template>
  <div class="container">
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
                <a
                  class="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#form"
                  href="#"
                >
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
                <a
                  class="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#font"
                  href="#"
                >
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

      <div class="col-md-9">
        <div class="add-product-owner">
          <h1>Liste des product owners</h1>
          <table class="table">
            <thead>
              <tr>
                <th>Nom d'utilisateur</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="productOwner in productOwners" :key="productOwner.id">
                <td v-if="editingProductOwner.id !== productOwner.id">
                  {{ productOwner.username }}
                </td>
                <td v-else>
                  <input v-model="editingProductOwner.username" class="form-control" />
                </td>
                <td v-if="editingProductOwner.id !== productOwner.id">
                  {{ productOwner.email }}
                </td>
                <td v-else>
                  <input v-model="editingProductOwner.email" class="form-control" />
                </td>
                <td>
                  <button
                    v-if="editingProductOwner.id !== productOwner.id"
                    @click="startEditing(productOwner)"
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
    </div>
  </div>
</template>

<style scoped>
.moderator-list {
  position: relative;
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
  filter: contrast(0.8) blur(0px); /* Applique le flou et le contraste */
}

.add-product-owner {
  position: relative;
  z-index: 1;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Couleur de fond semi-transparente pour le contenu */
  padding: 20px;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      productOwners: [],
      editingProductOwner: {
        id: null,
        username: "",
        email: "",
        password: "",
        roles: [],
      },
    };
  },
  mounted() {
    this.fetchProductOwners();
  },
  methods: {
    fetchProductOwners() {
      axios
        .get("http://localhost:8080/api/test/getAllROLE_MODERATOR")
        .then((response) => {
          this.productOwners = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    startEditing(productOwner) {
      this.editingProductOwner = { ...productOwner };
    },
    submitEdit() {
      const updatedProductOwner = {
        id: this.editingProductOwner.id,
        username: this.editingProductOwner.username,
        email: this.editingProductOwner.email,
        password: this.editingProductOwner.password,
        roles: this.editingProductOwner.roles,
      };

      axios
        .put("http://localhost:8080/api/test/updateuser", updatedProductOwner)
        .then((response) => {
          console.log(response.data);
          this.fetchProductOwners();
          this.editingProductOwner = {
            id: null,
            username: "",
            email: "",
            password: "",
            roles: [],
          };
          this.$router.push("/listproductowneradmin"); // Redirection vers la page "listproductowneradmin"
        })
        .catch((error) => {
          console.error(
            "Une erreur est survenue lors de la mise à jour du propriétaire du produit:",
            error
          );
        });
    },
  },
};
</script>
