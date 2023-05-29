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
                  <i class="icofont-chart-pie fs-5"></i><span>Tous les Développeurs</span>
                  <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
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
                  <i class="icofont-file-text fs-5"></i> <span>Affectation</span>
                  <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
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
                  <i class="icofont-brand-icofont fs-5"></i><span>Statistique</span>
                  <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
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
      <div class="row align-items-center">
        <div class="border-0 mb-4">
          <!-- Contenu du div -->
        </div>
      </div>

      <div
        class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
        style="margin-top: -100%; margin-left: 55%"
      >
        <h3 class="h4 mb-0">Mes Taches</h3>
        <div class="col-auto d-flex w-sm-100 mt-2 mt-sm-0"></div>
      </div>
    </div>
  </div>

  <div class="row clearfix g-3">
    <div style="margin-top: -47%; margin-left: 20%">
      <div class="col-lg-12 col-md-12 flex-column">
        <div class="row taskboard g-3 pb-xxl-4">
          <div
            class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4"
            style="margin-left: 2%"
          >
            <h6 class="fw-bold py-3 mb-0">En cours</h6>
            <div class="progress_task">
              <div class="dd" data-plugin="nestable">
                <ol class="dd-list">
                  <li
                    class="dd-item"
                    data-id="1"
                    v-for="projet in projetsEnCours"
                    :key="projet.id"
                  >
                    <draggable v-model="projetsEnCours" group="tasks" @change="onDragEnd">
                      <!-- ... -->
                    </draggable>
                    <div class="dd-handle">
                      <div
                        class="task-info d-flex align-items-center justify-content-between"
                      >
                        <h6
                          class="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0"
                        >
                          {{ projet.item.name }}
                        </h6>
                        <div
                          class="task-priority d-flex flex-column align-items-center justify-content-center"
                        >
                          <div class="avatar-list avatar-list-stacked m-0">
                            <img
                              class="avatar rounded-circle small-avt"
                              src="../../assets/images/xs/avatar2.svg"
                              alt=""
                            />
                            <img
                              class="../avatar rounded-circle small-avt"
                              src="../../assets/images/xs/avatar1.svg"
                              alt=""
                            />
                          </div>
                          <span class="badge bg-warning text-end mt-2">{{
                            projet.item.statut
                          }}</span>
                        </div>
                      </div>
                      <p class="py-2 mb-0"></p>
                      <div class="tikit-info row g-3 align-items-center">
                        <div class="col-sm">
                          <ul class="d-flex list-unstyled align-items-center flex-wrap">
                            <li class="me-2">
                              <div class="d-flex align-items-center">
                                <i class="icofont-flag"></i>
                                <span class="ms-1">{{ projet.item.dedline }}</span>
                              </div>
                            </li>
                            <li class="me-2">
                              <div class="d-flex align-items-center">
                                <i class="icofont-ui-text-chat"></i>
                                <span class="ms-1">5</span>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex align-items-center">
                                <i class="icofont-paper-clip"></i>
                                <span class="ms-1">5</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm text-end">
                          <div
                            class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div
            class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-0 mt-sm-0 mt-0"
            style="margin-left: 10%"
          >
            <h6 class="fw-bold py-3 mb-0">Terminer</h6>
            <div
              class="completed_task"
              v-for="projet in projetsTermines"
              :key="projet.id"
            >
              <draggable v-model="projetsTermines" group="tasks" @change="onDragEnd">
                <!-- ... -->
              </draggable>
              <div class="dd" data-plugin="nestable">
                <ol class="dd-list">
                  <li class="dd-item" data-id="1">
                    <div class="dd-handle">
                      <div
                        class="task-info d-flex align-items-center justify-content-between"
                      >
                        <h6
                          class="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0"
                        >
                          {{ projet.item.name }}
                        </h6>
                        <div
                          class="task-priority d-flex flex-column align-items-center justify-content-center"
                        >
                          <div class="avatar-list avatar-list-stacked m-0">
                            <img
                              class="avatar rounded-circle small-avt"
                              src="../../assets/images/xs/avatar6.svg"
                              alt=""
                            />
                            <img
                              class="avatar rounded-circle small-avt"
                              src="../../assets/images/xs/avatar7.svg"
                              alt=""
                            />
                          </div>
                          <span class="badge bg-warning text-end mt-2">{{
                            projet.item.statut
                          }}</span>
                        </div>
                      </div>
                      <p class="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec
                        scelerisque massa.
                      </p>
                      <div class="tikit-info row g-3 align-items-center">
                        <div class="col-sm">
                          <ul class="d-flex list-unstyled align-items-center flex-wrap">
                            <li class="me-2">
                              <div class="d-flex align-items-center">
                                <i class="icofont-flag"></i>
                                <span class="ms-1">13 Jan</span>
                              </div>
                            </li>
                            <li class="me-2">
                              <div class="d-flex align-items-center">
                                <i class="icofont-ui-text-chat"></i>
                                <span class="ms-1">4</span>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex align-items-center">
                                <i class="icofont-paper-clip"></i>
                                <span class="ms-1">1</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm text-end">
                          <div
                            class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"
                          >
                            Social Geek Made
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
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
  updateStatus(evt) {
    if (evt.added) {
      let project = evt.added.element;
      if (evt.added.newIndex != null && evt.added.newIndex >= 0) {
        project.item.statut = "TERMINER";
      } else {
        project.item.statut = "ENCOURS";
      }
      // vous devrez peut-être faire une requête PUT à votre serveur ici pour mettre à jour le statut du projet dans la base de données
    }
  },
  // ... vos autres méthodes

  computed: {
    projetsEnCours() {
      return this.projets.filter((projet) => projet.item.statut === "ENCOURS");
    },
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
