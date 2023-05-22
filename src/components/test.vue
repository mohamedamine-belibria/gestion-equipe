<template>
<div class="body d-flex py-lg-3 py-md-2">
    <div class="container-xxl">
        
        <!-- Row end  -->
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 flex-column">
                <div class="tab-content mt-4 project-board">
                    <div class="tab-pane fade show active" id="All-list">
                        <div class="row g-3 gy-5 py-3 row-deck">
                            <div class="lista col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6" v-for="projet in projetsEnCours" :key="projet.id">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between mt-5">
                                            <div>
                                                <div class="project-block light-info-bg">
                                                    <i class="icofont-paint"></i>
                                                </div>

                                                <span class="small text-muted project_name fw-bold">
                                                   {{ projet.item.name }}
                                                </span>

                                                <h7 class="mb-0 fw-bold fs-6 mb-2">
                           {{ projet.item.description }}</h7>
                                            </div>

                                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editproject" v-on:click="getdata(project.projectnom,project.projectdescription,project.projectobjectif,project.nbsprints,project.nbtaches,project.projectid)">
                                                    <i class="icofont-edit text-success"></i>
                                                </button>

                                                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deleteproject" v-on:click="deleteselect(project)">
                                                    <i class="icofont-ui-delete text-danger"></i>
                                                </button>
                                            </div>

                                            <div class="progress-bar bg-secondary" role="progressbar" style="width: 25%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>

                                            <div class="progress-bar bg-secondary ms-1" role="progressbar" style="width: 25%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>

                                            <div class="progress-bar bg-secondary ms-1" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="Started-list">
                        <div class="row g-3 gy-5 py-3 row-deck">
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between mt-5">
                                            <div class="lesson_name">
                                                <div class="project-block light-info-bg">
                                                    <i class="icofont-paint"></i>
                                                </div>

                                                <span class="small text-muted project_name fw-bold">
                                                    Social Geek Made
                                                </span>

                                                <h6 class="mb-0 fw-bold fs-6 mb-2">UI/UX Design</h6>
                                            </div>

                                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editproject">
                                                    <i class="icofont-edit text-success"></i>
                                                </button>

                                                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deleteproject">
                                                    <i class="icofont-ui-delete text-danger"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-center">
                                            <div class="avatar-list avatar-list-stacked pt-2">
                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar2.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar1.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar3.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar4.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar8.svg" alt="" />

                                                <span class="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                                            </div>
                                        </div>

                                        <div class="row g-2 pt-4">
                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-paper-clip"></i>

                                                    <span class="ms-2">5 Attach</span>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-sand-clock"></i>

                                                    <span class="ms-2">4 Month</span>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-group-students"></i>

                                                    <span class="ms-2">5 Members</span>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-ui-text-chat"></i>

                                                    <span class="ms-2">10</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="dividers-block"></div>

                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <h4 class="small fw-bold mb-0">Progress</h4>

                                            <span class="small light-danger-bg p-1 rounded"><i class="icofont-ui-clock"></i> 35 Days Left</span>
                                        </div>

                                        <div class="progress" style="height: 8px">
                                            <div class="progress-bar bg-secondary" role="progressbar" style="width: 25%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>

                                            <div class="progress-bar bg-secondary ms-1" role="progressbar" style="width: 25%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>

                                            <div class="progress-bar bg-secondary ms-1" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="Approval-list">
                        <div class="row g-3 gy-5 py-3 row-deck">
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between mt-5">
                                            <div class="lesson_name">
                                                <div class="project-block light-info-bg">
                                                    <i class="icofont-paint"></i>
                                                </div>

                                                <span class="small text-muted project_name fw-bold">
                                                    Software Chasers
                                                </span>

                                                <h6 class="mb-0 fw-bold fs-6 mb-2">UI/UX Design</h6>
                                            </div>

                                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editproject">
                                                    <i class="icofont-edit text-success"></i>
                                                </button>

                                                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deleteproject">
                                                    <i class="icofont-ui-delete text-danger"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-center">
                                            <div class="avatar-list avatar-list-stacked pt-2">
                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar2.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar1.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar3.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar4.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar8.svg" alt="" />

                                                <span class="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                                            </div>
                                        </div>

                                        <div class="row g-2 pt-4">
                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-paper-clip"></i>

                                                    <span class="ms-2">5 Attach</span>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-sand-clock"></i>

                                                    <span class="ms-2">4 Month</span>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-group-students"></i>

                                                    <span class="ms-2">5 Members</span>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-ui-text-chat"></i>

                                                    <span class="ms-2">10</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="dividers-block"></div>

                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <h4 class="small fw-bold mb-0">Progress</h4>

                                            <span class="small light-warning-bg p-1 rounded"><i class="icofont-ui-clock"></i> Approval</span>
                                        </div>

                                        <div class="progress" style="height: 8px">
                                            <div class="progress-bar bg-secondary" role="progressbar" style="width: 0%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>

                                            <div class="progress-bar bg-secondary ms-1" role="progressbar" style="width: 0%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>

                                            <div class="progress-bar bg-secondary ms-1" role="progressbar" style="width: 0%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="Completed-list">
                        <div class="row g-3 gy-5 py-3 row-deck">
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between mt-5">
                                            <div class="lesson_name">
                                                <div class="project-block light-info-bg">
                                                    <i class="icofont-paint"></i>
                                                </div>

                                                <span class="small text-muted project_name fw-bold">
                                                    Sunburst
                                                </span>

                                                <h6 class="mb-0 fw-bold fs-6 mb-2">UI/UX Design</h6>
                                            </div>

                                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deleteproject">
                                                    <i class="icofont-ui-delete text-danger"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-center">
                                            <div class="avatar-list avatar-list-stacked pt-2">
                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar2.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar1.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar3.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar4.svg" alt="" />

                                                <img class="avatar rounded-circle sm" src="../assets/images/xs/avatar8.svg" alt="" />
                                            </div>
                                        </div>

                                        <div class="row g-2 pt-4">
                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-paper-clip"></i>

                                                    <span class="ms-2">5 Attach</span>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-sand-clock"></i>

                                                    <span class="ms-2 text-success">Completed</span>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-group-students"></i>

                                                    <span class="ms-2">5 Members</span>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="d-flex align-items-center">
                                                    <i class="icofont-ui-text-chat"></i>

                                                    <span class="ms-2">10</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="dividers-block"></div>

                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <h4 class="small fw-bold mb-0">Progress</h4>

                                            <span class="small light-success-bg p-1 rounded"><i class="icofont-ui-clock"></i> Completed</span>
                                        </div>

                                        <div class="progress" style="height: 8px">
                                            <div class="progress-bar bg-secondary" role="progressbar" style="width: 25%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>

                                            <div class="progress-bar bg-secondary ms-1" role="progressbar" style="width: 25%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>

                                            <div class="progress-bar bg-secondary ms-1" role="progressbar" style="width: 50%" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            projets: []
        };
    },
    mounted() {
        this.fetchProjets();
    },
    computed: {
        projetsEnCours() {
            return this.projets.filter(projet => projet.item.statut === 'ENCOURS');
        }
    },
    methods: {
        getUser() {
            const user = localStorage.getItem("user");
            return user ? JSON.parse(user).id : null;
        },
        fetchProjets() {
            const userId = this.getUser();
            fetch(`http://localhost:8080/getTacheversResponsable/${userId}`)
                .then(response => response.json())
                .then(data => {
                    this.projets = data;
                })
                .catch(error => {
                    console.error('Error fetching projects:', error);
                });
        }
    }
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
table {
    width: 90%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
}
</style>
