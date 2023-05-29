<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <!-- Sidebar code -->
        <div class="sidebar px-4 py-4 py-md-5 me-0 open">
          <div class="d-flex flex-column h-100">
            <a href="index.html" class="mb-0 brand-icon">
              <span class="logo-icon">
                <i class="icofont-stopwatch fs-2"></i>
              </span>
              <span>
                <router-link class="logo-text" to="/user">Time-Tracker</router-link>
              </span>
            </a>
            <!-- Menu: main ul -->
            <ul class="menu-list flex-grow-1 mt-3">
              <li>
                <router-link class="m-link" to="/user">
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
                  <i class="icofont-chart-pie fs-5"></i><span>Tous les Développeurs</span
                  ><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
                </a>
                <!-- Menu: Sub menu ul -->
                <ul class="sub-menu collapse show" id="menu-report">
                  <li>
                    <router-link class="ms-link" to="/listedevloppeur"
                      >Développeur</router-link
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
                    <router-link class="ms-link" to="/listedemestache"
                      >Mes tâches</router-link
                    >
                  </li>

                  <li>
                    <router-link class="ms-link" to="/pagevide">pagevide</router-link>
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
                    <router-link class="ms-link" to="/tacheEncouruser"
                      >Tâches en cours</router-link
                    >
                  </li>
                  <li>
                    <router-link class="ms-link" to="/tachetermineruser"
                      >Tâches terminées</router-link
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
        <div style="margin-top: 10%">
          <div class="container-fluid">
            <h1>Liste des développeurs</h1>

            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Nom de Développeur</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
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
  },
};
</script>
