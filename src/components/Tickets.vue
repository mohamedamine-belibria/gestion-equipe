<template>
  <div>
    <h1>Task Manager</h1>

    {{ avatar }}
    <form @submit.prevent="saveTask">
      <input type="text" v-model="newTask.title" placeholder="Title" required />
      <input
        type="text"
        v-model="newTask.description"
        placeholder="Description"
        required
      />
      <select v-model="newTask.state" required>
        <option value="">Select State</option>
        <option v-for="state in states" :key="state.id" :value="state">
          {{ state.statut }}
        </option>
      </select>
      <button type="submit">Add Task</button>
    </form>

    <h2>All Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.description }} - {{ task.state.statut }}
        <button @click="deleteTask(task.id)">Delete</button>
        <button @click="editTask(task)">Edit</button>
      </li>
    </ul>

    <h2>Edit Task</h2>
    <form v-if="editingTask" @submit.prevent="updateTask">
      <input type="text" v-model="editingTask.title" required />
      <input type="text" v-model="editingTask.description" required />
      <select v-model="editingTask.state" required>
        <option value="">Select State</option>
        <option v-for="state in states" :key="state.id" :value="state">
          {{ state.statut }}
        </option>
      </select>
      <button type="submit">Update</button>
      <button @click="cancelEdit">Cancel</button>
    </form>
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
        state: null,
      },
      editingTask: null,
    };
  },

  created() {
    this.fetchTasks();
    this.fetchStates();
  },
  computed: {
    avatar() {
      let str = this.$store.state.auth.user.username;
      return str;
    },
  },
  methods: {
    fetchTasks() {
      fetch("http://localhost:8080/getALLtask")
        .then((response) => response.json())
        .then((data) => {
          this.tasks = data;
        });
    },

    fetchStates() {
      fetch("http://localhost:8080/getALLState")
        .then((response) => response.json())
        .then((data) => {
          this.states = data;
        });
    },

    saveTask() {
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
          this.newTask.state = null;
        });
    },

    deleteTask(id) {
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
