<template>
  <div class="body d-flex py-lg-3 py-md-2">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="border-0 mb-4">
          <div
            class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
          >
            <h3 class="h4 mb-0">Project Management</h3>
          </div>
        </div>
      </div>
      <!-- Row end  -->
      <div class="row clearfix g-3">
        <div class="col-lg-12 col-md-12 flex-column">
          <div class="row taskboard g-3 pb-xxl-4">
            <div
              class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4"
              v-for="task in tasks"
              :key="task.key"
            >
              <div class="progress_task">
                <div class="dd" data-plugin="nestable">
                  <ol class="dd-list">
                    <li class="dd-item" data-id="5">
                      <div class="dd-handle">
                        <div
                          class="task-info d-flex align-items-center justify-content-between"
                        >
                          <h6
                            class="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0"
                          >
                            {{ task.title }}
                          </h6>
                          <div
                            class="task-priority d-flex flex-column align-items-center justify-content-center"
                          >
                            <div class="avatar-list avatar-list-stacked m-0"></div>
                          </div>
                        </div>
                        <p class="py-2 mb-0">
                          {{ task.description }}
                        </p>
                        <div class="tikit-info row g-3 align-items-center">
                          <div class="col-sm text-end">
                            <div
                              class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"
                            >
                              {{ task.dateCreationTask }}
                            </div>
                          </div>
                          <div class="col-sm text-end">
                            <div
                              class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"
                            >
                              {{ task.dateFinTask }}
                            </div>
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
            ></div>
            <div
              class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-0 mt-sm-0 mt-0"
            ></div>
          </div>
        </div>
      </div>
      <!-- Row end  -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mytask",
  data() {
    return {
      task: {
        id: "",
        title: "",
        description: "",
        dateCreationTask: "",
        dateFinTask: "",
        stateid: "",

        state: {
          id: "",
          code: "",
          description: "",
        },
      },
      datatask: {
        title: "",
        description: "",
        dateCreationTask: "",
        dateFinTask: "",
        stateid: "",

        stateobject: {
          id: "",
          code: "",
          description: "",
        },
      },
      tasks: [],
      state: {
        id: "",
        code: "",
        description: "",
      },
      states: [],
    };
  },

  mounted() {
    this.getTasks();
    console.log(this.getTasks());
    this.getstates();
    console.log(this.getstates());
  },
  methods: {
    getdata(id, title, description, dateCreationTask, dateFinTask) {
      this.datatask.id = id;
      this.datatask.title = title;
      this.datatask.description = description;
      this.datatask.dateCreationTask = dateCreationTask;
      this.datatask.dateFinTask = dateFinTask;
      console.log(this.datatask);
    },
    createTask() {
      const data = {
        title: this.title,
        description: this.description,
        dateCreationTask: this.dateCreationTask,
        dateFinTask: this.dateFinTask,
        state: this.state,
        stateid: this.stateid,
      };
      console.log(data);
      axios
        .post("http://localhost:8080/savetask", data)
        .then((response) => {
          console.log(response.data);
          this.tasks.push(data);
          document.getElementById("closecreate").click();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getstates() {
      axios.get("http://localhost:8080/getALLState").then((response) => {
        this.states = response.data;
        console.log(this.states);
      });
    },
    getTasks() {
      axios.get("http://localhost:8080/getALLtask").then((response) => {
        this.tasks = response.data;
      });
    },
    deleteselect(task) {
      this.task = task;
      console.log(this.task);
    },

    deleteTask(task) {
      const url = `http://localhost:8080/delettask/${task.id}`;
      axios
        .delete(url)
        .then((response) => {
          console.log(response.data);
          document.getElementById("closedelete").click();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
@import url("../assets/Style.css");
@import url("../assets/plugin/nestable/jquery-nestable.css");
@import url("../assets/css/timetracker.style.min.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
