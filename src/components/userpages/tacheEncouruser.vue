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
                <i class="icofont-chart-pie fs-5"></i><span>Tous les utilisateurs</span
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
              <a class="m-link" data-bs-toggle="collapse" data-bs-target="#form" href="#">
                <i class="icofont-file-text fs-5"></i> <span>Affectation</span
                ><span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="form">
                <li>
                  <router-link class="ms-link" to="/listedemestache"
                    >Mes tache</router-link
                  >
                </li>

                <li>
                  <router-link class="ms-link" to="/pagevide">pagevide</router-link>
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
                  <router-link class="ms-link" to="/tacheEncouruser"
                    >Tache En Cours</router-link
                  >
                </li>
                <li>
                  <router-link class="ms-link" to="/tachetermineruser"
                    >Tache Termine</router-link
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
    <div style="margin-top: -40%; margin-left: 12%">
      <div class="container-fluid">
        <h2>List De Tache Encours</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="projet in projetsEnCours" :key="projet.id">
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
  </div>
</template>

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
    projetsEnCours() {
      return this.projets.filter((projet) => projet.item.statut === "ENCOURS");
    },
  },
  methods: {
    getUser() {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user).id : null;
    },
    fetchProjets() {
      const userId = this.getUser();
      fetch(`http://localhost:8080/getTacheversResponsable/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          this.projets = data;
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
        });
    },
  },
};
</script>
