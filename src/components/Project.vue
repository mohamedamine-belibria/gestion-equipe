<template>
  <div class="body d-flex py-lg-3 py-md-2">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="border-0 mb-4">
          <div
            class="card-header p-0 no-bg bg-transparent align-items-center px-0 d-flex border-bottom flex-wrap"
          >
            <h3 class="h4 py-3 mb-0">Projects</h3>
            <div class="d-flex py-2 project-tab flex-wrap w-sm-100 ms-auto">
              <button
                type="button"
                class="btn btn-dark w-sm-100 mb-2 mb-md-0"
                data-bs-toggle="modal"
                data-bs-target="#createproject"
              >
                <i class="icofont-plus-circle me-2 fs-6"></i>Create Project
              </button>
              <ul
                class="nav nav-tabs tab-body-header rounded ms-0 ms-md-3 prtab-set w-sm-100"
                role="tablist"
              >
               
               
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Row end  -->
      <div class="row align-items-center">
        <div class="col-lg-12 col-md-12 flex-column">
          <div class="tab-content mt-4 project-board">
            <div class="tab-pane fade show active" id="All-list">
              <div class="row g-3 gy-5 py-3 row-deck">
                <div
                  class="lista col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6"
                  v-for="project in projects" :key="project.key">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="d-flex align-items-center justify-content-between mt-5"
                      >
                        <div>
                          <div class="project-block light-info-bg">
                            <i class="icofont-paint"></i>
                          </div>

                          <span class="small text-muted project_name fw-bold">NAME
                            {{ project.name }}
                          </span>
                            <div class="col-6">
                                                            <div class="d-flex align-items-center">
                                                                <i class="icofont-group-students "></i>
                                                                <span class="ms-2">DESCRIPTION:{{ project.description }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="d-flex align-items-center">
                                                                <i class="icofont-group-students "></i>
                                                                <span class="ms-2">STATE:{{ project.state.description }}</span>
                                                            </div>
                                                        </div>
                          

                          <h6 class="mb-0 fw-bold fs-6 mb-2">{{project.dateCreation}}</h6>
                        </div>

                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#editproject"
                            v-on:click="getdata(project.projectnom,project.projectdescription,project.projectobjectif,project.nbsprints,project.nbtaches,project.projectid)">
                            <i class="icofont-edit text-success"></i>
                          </button>

                          <button
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteproject"
                            v-on:click="deleteselect(project)"
                          >
                            <i class="icofont-ui-delete text-danger"></i>
                          </button>
                        </div>

                        <div
                          class="progress-bar bg-secondary"
                          role="progressbar"
                          style="width: 25%"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>

                        <div
                          class="progress-bar bg-secondary ms-1"
                          role="progressbar"
                          style="width: 25%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>

                        <div
                          class="progress-bar bg-secondary ms-1"
                          role="progressbar"
                          style="width: 10%"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
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
                      <div
                        class="d-flex align-items-center justify-content-between mt-5"
                      >
                        <div class="lesson_name">
                          <div class="project-block light-info-bg">
                            <i class="icofont-paint"></i>
                          </div>

                          <span class="small text-muted project_name fw-bold">
                            Social Geek Made
                          </span>

                          <h6 class="mb-0 fw-bold fs-6 mb-2">UI/UX Design</h6>
                        </div>

                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#editproject"
                          >
                            <i class="icofont-edit text-success"></i>
                          </button>

                          <button
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteproject"
                          >
                            <i class="icofont-ui-delete text-danger"></i>
                          </button>
                        </div>
                      </div>

                      <div class="d-flex align-items-center">
                        <div class="avatar-list avatar-list-stacked pt-2">
                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar2.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar1.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar3.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar4.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar8.svg"
                            alt=""
                          />

                          <span
                            class="avatar rounded-circle text-center pointer sm"
                            data-bs-toggle="modal"
                            data-bs-target="#addUser"
                            ><i class="icofont-ui-add"></i
                          ></span>
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

                      <div
                        class="d-flex align-items-center justify-content-between mb-2"
                      >
                        <h4 class="small fw-bold mb-0">Progress</h4>

                        <span class="small light-danger-bg p-1 rounded"
                          ><i class="icofont-ui-clock"></i> 35 Days Left</span
                        >
                      </div>

                      <div class="progress" style="height: 8px">
                        <div
                          class="progress-bar bg-secondary"
                          role="progressbar"
                          style="width: 25%"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>

                        <div
                          class="progress-bar bg-secondary ms-1"
                          role="progressbar"
                          style="width: 25%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>

                        <div
                          class="progress-bar bg-secondary ms-1"
                          role="progressbar"
                          style="width: 10%"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
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
                      <div
                        class="d-flex align-items-center justify-content-between mt-5"
                      >
                        <div class="lesson_name">
                          <div class="project-block light-info-bg">
                            <i class="icofont-paint"></i>
                          </div>

                          <span class="small text-muted project_name fw-bold">
                            Software Chasers
                          </span>

                          <h6 class="mb-0 fw-bold fs-6 mb-2">UI/UX Design</h6>
                        </div>

                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#editproject"
                          >
                            <i class="icofont-edit text-success"></i>
                          </button>

                          <button
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteproject"
                          >
                            <i class="icofont-ui-delete text-danger"></i>
                          </button>
                        </div>
                      </div>

                      <div class="d-flex align-items-center">
                        <div class="avatar-list avatar-list-stacked pt-2">
                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar2.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar1.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar3.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar4.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar8.svg"
                            alt=""
                          />

                          <span
                            class="avatar rounded-circle text-center pointer sm"
                            data-bs-toggle="modal"
                            data-bs-target="#addUser"
                            ><i class="icofont-ui-add"></i
                          ></span>
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

                      <div
                        class="d-flex align-items-center justify-content-between mb-2"
                      >
                        <h4 class="small fw-bold mb-0">Progress</h4>

                        <span class="small light-warning-bg p-1 rounded"
                          ><i class="icofont-ui-clock"></i> Approval</span
                        >
                      </div>

                      <div class="progress" style="height: 8px">
                        <div
                          class="progress-bar bg-secondary"
                          role="progressbar"
                          style="width: 0%"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>

                        <div
                          class="progress-bar bg-secondary ms-1"
                          role="progressbar"
                          style="width: 0%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>

                        <div
                          class="progress-bar bg-secondary ms-1"
                          role="progressbar"
                          style="width: 0%"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
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
                      <div
                        class="d-flex align-items-center justify-content-between mt-5"
                      >
                        <div class="lesson_name">
                          <div class="project-block light-info-bg">
                            <i class="icofont-paint"></i>
                          </div>

                          <span class="small text-muted project_name fw-bold">
                            Sunburst
                          </span>

                          <h6 class="mb-0 fw-bold fs-6 mb-2">UI/UX Design</h6>
                        </div>

                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteproject"
                          >
                            <i class="icofont-ui-delete text-danger"></i>
                          </button>
                        </div>
                      </div>

                      <div class="d-flex align-items-center">
                        <div class="avatar-list avatar-list-stacked pt-2">
                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar2.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar1.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar3.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar4.svg"
                            alt=""
                          />

                          <img
                            class="avatar rounded-circle sm"
                            src="../assets/images/xs/avatar8.svg"
                            alt=""
                          />
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

                      <div
                        class="d-flex align-items-center justify-content-between mb-2"
                      >
                        <h4 class="small fw-bold mb-0">Progress</h4>

                        <span class="small light-success-bg p-1 rounded"
                          ><i class="icofont-ui-clock"></i> Completed</span
                        >
                      </div>

                      <div class="progress" style="height: 8px">
                        <div
                          class="progress-bar bg-secondary"
                          role="progressbar"
                          style="width: 25%"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>

                        <div
                          class="progress-bar bg-secondary ms-1"
                          role="progressbar"
                          style="width: 25%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>

                        <div
                          class="progress-bar bg-secondary ms-1"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="39"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
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

    <div class="modal fade" id="createproject" tabindex="-1" aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable"
      >
        <div class="modal-content">
          <form @submit.prevent="createProject">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="createprojectlLabel">
                Create Project
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closecreate"
              ></button>
            </div>

            <div class="modal-body">
              <div class="mb-3">
                <label for="projectnom" class="form-label"> Name</label>

                <input
                  type="text"
                  class="form-control"
                  id="projectnom"
                  placeholder="Explain what the project name is"
                  v-model="name"
                />

                <label for="projectdescription" class="form-label"
                  >Project Description</label
                >

                <input
                  type="text"
                  class="form-control"
                  id="projectdescription"
                  placeholder="Explain what the project is about"
                  v-model="description"
                />

                <label for="projectobjective" class="form-label"
                  >Project Objective</label
                >

                <input
                  type="date"
                  class="form-control"
                  id="projectobjectif"
                  placeholder="Explain the objective of the project"
                  v-model="dateCreation"
                />
                <input
                  type="date"
                  class="form-control"
                  id="projectobjectif"
                  placeholder="Explain the objective of the project"
                  v-model="dateFinProjet"
                />

                <div class="mb-3">
                <label for="status" class="form-label">state</label>
                <select class="form-select" aria-label="Default select example" v-model="state">
    <option v-for="stateobject in states" :key="stateobject.key" :value="stateobject">{{ stateobject.description }}</option>
</select>
              </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="btn btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div  listt  class="modal fade" id="editproject"  tabindex="-1"   aria-hidden="true" >
      <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable" >
        <div class="modal-content">
          <form @submit.prevent="updateProject">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="editprojectlLabel">
                Edit project
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <div class="mb-3">
                <label for="projectnom" class="form-label">Project Name</label>

                <input
                  type="text"
                  class="form-control"
                  id="projectnom"
                  placeholder="Explain what the project name is"
                  v-model="dataproject.projectnom"
                />

                <label for="projectdescription" class="form-label"
                  >Project Description</label
                >

                <input
                  type="text"
                  class="form-control"
                  id="projectdescription"
                  placeholder="Explain what the project is about"
                  v-model="dataproject.projectdescription"
                />

                <label for="projectobjective" class="form-label"
                  >Project Objective</label
                >

                <input
                  type="text"
                  class="form-control"
                  id="projectobjectif"
                  placeholder="Explain the objective of the project"
                  v-model="dataproject.projectobjectif"
                />

                <label for="projectnbsprints" class="form-label"
                  >Number of Sprints</label
                >

                <input
                  type="text"
                  class="form-control"
                  id="nbsprints"
                  placeholder="Explain the number of sprints the project will have"
                  v-model="dataproject.nbsprints"
                />

                <label for="projectnbtaches" class="form-label"
                  >Number of Taches</label
                >

                <input
                  type="text"
                  class="form-control"
                  id="nbtaches"
                  placeholder="Explain the number of tasks the project will have"
                  v-model="dataproject.nbtaches"

                />
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="btn btn-primary"
                
              >
                edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


<div listt class="modal fade" id="deleteproject" tabindex="-1" aria-hidden="true"   >
    <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">

    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title  fw-bold" id="deleteprojectLabel"> Delete item Permanently?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closedelete"></button>
                    </div>
                    <div class="modal-body justify-content-center flex-column d-flex">
                        <i class="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
                        <p class="mt-4 fs-5 text-center">You can only delete this item Permanently</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger color-fff"        @click="deleteProject(project)">Delete</button>
                    </div>
                </div>
                </div>
                </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'myproject',
  data() {
    return {
      project: {
        id:"",
        name: "",
      description: "",
        dateCreation: "",
        dateFinProjet: "",
        stateid:"",
       
      state: {
        
        id: "",
        code: "",
        description:""
      },
      
      },
      dataproject: {
        name: "",
      description: "",
        dateCreation: "",
        dateFinProjet: "",
        stateid:"",
     
       
       stateobject: {
        
        id: "",
        code: "",
        description:""
      },
      
      
      },
      projects: [],
      state: {
         id: "",
        code: "",
        description:""
        
      },
      states:[],
    }
  },
  
  mounted() {
    this.getProjects();
    console.log(this.getProjects());
    this.getstates();
    console.log(this.getstates());
  },
  methods: {
    getdata(id, name, description, dateCreation, dateFinProjet) {
      this.dataproject.id = id
      this.dataproject.name = name
      this.dataproject.description = description
      this.dataproject.dateCreation = dateCreation
      this.dataproject.dateFinProjet = dateFinProjet
      
      console.log(this.dataproject)
  

    
    },
  
    createProject() {
      const data = {
        name: this.name,
        description: this.description,
        dateCreation: this.dateCreation,
        dateFinProjet: this.dateFinProjet,
        state:this.state,
        stateid: this.stateid,
      
        
   
      };
      console.log(data);
      axios
        .post("http://localhost:8080/saveproject", data)
        .then((response) => {
          console.log(response.data); 
          this.projects.push(data);
          document.getElementById('closecreate').click();     
        
        })
        .catch((error) => {
          console.log(error);
        });
    },
     getstates() {
      axios
        .get("http://localhost:8080/getALLState")
        .then((response) => {
          this.states = response.data;
          console.log(this.states)
          
        });
    },
    getProjects() {
      axios
        .get("http://localhost:8080/getALLproject")
        .then((response) => {
          this.projects = response.data;
          
        });
    },
     deleteselect(project) {
      this.project = project;
      console.log(this.project)
    },

    deleteProject(project) {
      const url = `http://localhost:8080/project/${project.id}`;
      axios
        .delete(url)
        .then((response) => {
          console.log(response.data);
          document.getElementById('closedelete').click();
          
           
        })
        .catch((error) => {
          console.log(error);
        });
    },
     
    

   
  }
  
}

</script>
