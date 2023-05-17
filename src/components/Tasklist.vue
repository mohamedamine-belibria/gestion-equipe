<template>
  <div class="body d-flex py-lg-3 py-md-2">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="border-0 mb-4">
          <div
            class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
          >
            <h3 class="h4 mb-0">Tickets</h3>
            <div class="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
              <button
                type="button"
                class="btn btn-dark btn-set-task w-sm-100"
                data-bs-toggle="modal"
                data-bs-target="#tickadd"
              >
                <i class="icofont-plus-circle me-2 fs-6"></i>Add Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Row end  -->
      <div class="row clearfix g-3">
        <div class="col-sm-12">
          <div class="card mb-3">
            <div class="card-body">
              <div
                id="myProjectTable_wrapper"
                class="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div class="row">
                  <div class="col-sm-12">
                    <table
                      id="myProjectTable"
                      class="table table-hover align-middle mb-0 nowrap dataTable no-footer dtr-inline"
                      style="width: 100%"
                      role="grid"
                      aria-describedby="myProjectTable_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 230.2px"
                            aria-label="Subject: activate to sort column ascending"
                          >
                            Titel
                          </th>

                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 216.2px"
                            aria-label="Assigned: activate to sort column ascending"
                          >
                            DESCRIPTION
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 230.2px"
                            aria-label="Subject: activate to sort column ascending"
                          >
                            datedecreation
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 230.2px"
                            aria-label="Subject: activate to sort column ascending"
                          >
                            dedline
                          </th>
                          <th
                            class="dt-body-right sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 143.2px"
                            aria-label="Created Date: activate to sort column ascending"
                          >
                            Statut
                          </th>
                          <th
                            class="dt-body-right sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 143.2px"
                            aria-label="Created Date: activate to sort column ascending"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" class="odd" v-for="task in tasks" :key="task.id">
                          <td tabindex="0" class="sorting_1">
                            <span class="fw-bold ms-1">{{ task.title }} </span>
                          </td>
                          <td>
                            <router-link class="ms-link" to="/TicketDetail">{{
                              task.description
                            }}</router-link>
                          </td>
                          <td tabindex="0" class="sorting_1">
                            <span class="fw-bold ms-1">{{ task.datedecreation }} </span>
                          </td>
                          <td tabindex="0" class="sorting_1">
                            <span class="fw-bold ms-1">{{ task.dedline }} </span>
                          </td>

                          <td>
                            <a>{{ task.state.statut }}</a>
                          </td>

                          <td class="dt-body-right" style="">
                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <button
                                type="button"
                                class="btn btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#editTask"
                                @click="editTask(task)"
                              >
                                <i class="icofont-edit text-success"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-outline-secondary deleterow"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteEmployee"
                                @click="deleteTask(task.id)"
                              >
                                <i class="icofont-ui-delete text-danger"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-5"></div>
                  <div class="col-sm-12 col-md-7">
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="myProjectTable_paginate"
                    >
                      <ul class="pagination">
                        <li
                          class="paginate_button page-item previous disabled"
                          id="myProjectTable_previous"
                        >
                          <a
                            href="#"
                            aria-controls="myProjectTable"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                            >Previous</a
                          >
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="myProjectTable"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                            >1</a
                          >
                        </li>
                        <li
                          class="paginate_button page-item next disabled"
                          id="myProjectTable_next"
                        >
                          <a
                            href="#"
                            aria-controls="myProjectTable"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                            >Next</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Row End -->
    </div>
    <div listt class="modal fade" id="tickadd" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div class="modal-content">
          <form @submit.prevent="saveTask">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="leaveaddLabel">task Add</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="objectif" class="form-label">title</label>
                <input
                  type="text"
                  class="form-control"
                  id="objectif"
                  v-model="newTask.title"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">description</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="newTask.description"
                />
              </div>
              <div class="mb-3">
                <label for="objectif" class="form-label">datedecreation</label>
                <input
                  type="date"
                  class="form-control"
                  id="objectif"
                  v-model="newTask.datedecreation"
                />
              </div>
              <div class="mb-3">
                <label for="objectif" class="form-label">dedline</label>
                <input
                  type="date"
                  class="form-control"
                  id="objectif"
                  v-model="newTask.dedline"
                />
              </div>

              <div class="mb-3">
                <label for="status" class="form-label">Statut</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="newTask.state.id"
                  required
                >
                  <option v-for="state in states" :key="state.id" :value="state.id">
                    {{ state.statut }}
                  </option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Done
              </button>
              <button type="submit" class="btn btn-primary">sent</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div listt class="modal fade" id="deleteEmployee" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="deleteEmployeeLabel">
              Delete item Permanently?
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="closedelete"
            ></button>
          </div>
          <div class="modal-body justify-content-center flex-column d-flex">
            <i class="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
            <p class="mt-4 fs-5 text-center">You can only delete this item Permanently</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger color-fff"
              @click="deleteTask(task.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div listt class="modal fade" id="editTask" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div class="modal-content">
          <form v-if="editingTask" @submit.prevent="updateTask">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="leaveaddLabel">updateTask</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="objectif" class="form-label">title</label>
                <input
                  type="text"
                  class="form-control"
                  id="objectif"
                  v-model="editingTask.title"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">description</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="editingTask.description"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="objectif" class="form-label">datedecreation</label>
                <input
                  type="date"
                  class="form-control"
                  id="objectif"
                  v-model="editingTask.datedecreation"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="objectif" class="form-label">dedline</label>
                <input
                  type="date"
                  class="form-control"
                  id="objectif"
                  v-model="editingTask.dedline"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="status" class="form-label">state</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="editingTask.state.id"
                >
                  <option v-for="state in states" :key="state.id" :value="state.id">
                    {{ state.statut }}
                  </option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Done
              </button>
              <button type="submit" class="btn btn-primary">sent</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tasks: [],
      states: [],
      newTask: {
        title: "",
        description: "",
        datedecreation: "",
        dedline: "",

        state: {
          id: 0,
          code: "",
          statut: "",
        },
      },
      editingTask: null,
    };
  },
  created() {
    this.fetchTasks();
    this.fetchStates();
  },
  methods: {
    fetchTasks() {
      // Fetch all tasks
      // GET http://localhost:8080/getALLtask
      fetch("http://localhost:8080/getALLtask")
        .then((response) => response.json())
        .then((data) => {
          this.tasks = data;
        });
    },
    fetchStates() {
      // Fetch all states
      // GET http://localhost:8080/getALLState
      fetch("http://localhost:8080/getALLState")
        .then((response) => response.json())
        .then((data) => {
          this.states = data;
        });
    },
    saveTask() {
      // Save a new task
      // POST http://localhost:8080/savetask
      fetch("http://localhost:8080/savetask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.newTask),
      })
        .then((response) => response.json())
        .then((data) => {
          this.tasks.push(data);
          this.newTask.title = "";
          this.newTask.description = "";
          this.newTask.datedecreation = "";
          this.newTask.dedline = "";

          this.newTask.state.id = 0;
          this.newTask.state.code = "";
          this.newTask.state.statut = "";
        });
    },
    deleteTask(id) {
      // DELETE http://localhost:8080/delettask/{{id}}
      fetch(`http://localhost:8080/delettask/${id}`, {
        method: "DELETE",
      }).then(() => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      });
    },
    editTask(task) {
      this.editingTask = { ...task };
    },

    updateTask() {
      if (this.editingTask && this.editingTask.state) {
        const updatedTask = {
          id: this.editingTask.id,
          title: this.editingTask.title,
          description: this.editingTask.description,
          datedecreation: this.editingTask.datedecreation,
          dedline: this.editingTask.dedline,
          state: this.editingTask.state,
        };

        fetch(`http://localhost:8080/updatetask`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTask),
        })
          .then((response) => response.json())
          .then((data) => {
            const index = this.tasks.findIndex((task) => task.id === this.editingTask.id);
            if (index !== -1) {
              this.tasks[index] = data;
            }
            this.cancelEdit();
          });
      }
    },

    cancelEdit() {
      this.editingTask = null;
    },
  },
};
</script>
