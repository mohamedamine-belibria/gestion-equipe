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
                                <router-link class="ms-link" to="/Listproductowneradmin">Productowner</router-link>
                            </li>
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
                                <router-link class="ms-link" to="/AjouterProductowneradmin">AjouterProductowner</router-link>
                            </li>
                            <li>
                                <router-link class="ms-link" to="/ModifierProductowneradmin">ModifierProductowner</router-link>
                            </li>
                            <li>
                                <router-link class="ms-link" to="/SupprimerProductowneradmin">SupprimerProductowner</router-link>
                            </li>
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
                                <router-link class="ms-link" to="/AjouterProjetadmin">AjouterProjet</router-link>
                            </li>
                            <li>
                                <router-link class="ms-link" to="/ModifierProjetadmin">ModifierProjet</router-link>
                            </li>
                            <li>
                                <router-link class="ms-link" to="/SupprimerProjetadmin">SupprimerProjet</router-link>
                            </li>

                            <li>
                                <router-link class="ms-link" to="/ListeDeProjetsadmin">ListeDeProjets</router-link>
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
                                <router-link class="ms-link" to="/ToutesLesAffectationsadmin">ToutesLesAffectations</router-link>
                            </li>
                            <li>
                                <router-link class="ms-link" to="/Affectationadmin">Affectation</router-link>
                            </li>
                            <li>
                                <router-link class="ms-link" to="/SupprimerAffectationadmin">SupprimerAffectation</router-link>
                            </li>
                            <li>
                                <router-link class="ms-link" to="/ModifierAffectationadmin">ModifierAffectation</router-link>
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
                                <router-link class="ms-link" to="/ProjetTermineadmin">ProjetTermine</router-link>
                            </li>
                            <li>
                                <router-link class="ms-link" to="/ProjetEnCoursadmin">ProjetEnCours</router-link>
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
    <h1>Ajouter un product owner</h1>
    <form @submit.prevent="addProductOwner">
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" id="username" v-model="productOwner.username" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="productOwner.email" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="productOwner.password" required>
      </div>
      <button type="submit">Ajouter</button>
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
import axios from 'axios';

export default {
  data() {
    return {
      productOwner: {
        username: '',
        email: '',
        password: '',
        roles: [
          {
            id: 2,
            name: 'ROLE_MODERATOR'
          }
        ]
      },
      accessToken: '', // Ajout de la variable accessToken
      tokenType: '' // Ajout de la variable tokenType
    };
  },
  methods: {
    addProductOwner() {
      axios
        .post('http://localhost:8080/api/test/saveuser', this.productOwner, {
          headers: {
            Authorization: `${this.tokenType} ${this.accessToken}` // Ajout de l'en-tête Authorization avec accessToken et tokenType
          }
        })
        .then(response => {
          console.log(response.data); // Gérer la réponse de l'API selon vos besoins
          // Redirection vers la page ListProductOwnerAdmin
          this.$router.push('/listproductowneradmin');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
