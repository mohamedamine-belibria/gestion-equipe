<template>
  <div>
    <h1>Liste des tâches</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.description }}
        <button @click="deleteTask(task.id)">Supprimer</button>
        <button @click="editTask(task)">Modifier</button>
      </li>
    </ul>
    <button @click="showAddTaskPopup">Ajouter une tâche</button>

    <div v-if="showPopup">
      <h2>{{ popupTitle }}</h2>
      <form v-if="!editingTask" @submit.prevent="addTask">
        <input type="text" v-model="newTask.title" placeholder="Titre" required />
        <input
          type="text"
          v-model="newTask.description"
          placeholder="Description"
          required
        />
        <input
          type="text"
          v-model="newTask.dateCreationTask"
          placeholder="Date de création"
          required
        />
        <input
          type="text"
          v-model="newTask.dateFinTask"
          placeholder="Date de fin"
          required
        />
        <select v-model="newTask.stateId" required>
          <option v-for="state in states" :key="state.id" :value="state.id">
            {{ state.description }}
          </option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
      <form v-else @submit.prevent="updateTask">
        <input
          type="text"
          v-model="newTask.title"
          :placeholder="editingTask.title"
          required
        />
        <input
          type="text"
          v-model="newTask.description"
          :placeholder="editingTask.description"
          required
        />
        <input type="text" v-model="newTask.dateCreationTask" required />

        <input type="text" v-model="newTask.dateFinTask" required />

        <select v-model="newTask.stateId" required>
          <option v-for="state in states" :key="state.id" :value="state.id">
            {{ state.description }}
          </option>
        </select>
        <button type="submit">Modifier</button>
        <button @click="cancel">Annuler</button>
      </form>
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
        dateCreationTask: "",
        dateFinTask: "",
        stateId: null,
      },
      editingTask: null,
      popupTitle: "Ajouter une tâche",
      showPopup: false,
    };
  },
  mounted() {
    this.fetchTasks();
    this.fetchStates();
  },
  methods: {
    fetchTasks() {
      fetch("http://localhost:8080/getALLtask")
        .then((response) => response.json())
        .then((data) => {
          this.tasks = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchStates() {
      fetch("http://localhost:8080/getALLState")
        .then((response) => response.json())
        .then((data) => {
          this.states = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addTask() {
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
          this.newTask = {
            title: "",
            description: "",
            dateCreationTask: "",
            dateFinTask: "",
            stateId: "",
          };
          this.closePopup();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // ...
    deleteTask(taskId) {
      fetch(`http://localhost:8080/deletetask/${taskId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            this.tasks = this.tasks.filter((task) => task.id !== taskId);
          } else {
            console.log("Une erreur s'est produite lors de la suppression de la tâche.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editTask(task) {
      this.editingTask = task;
      this.newTask = {
        id: task.id, // Ajouter l'identifiant de la tâche à modifier
        title: task.title,
        description: task.description,
        dateCreationTask: task.dateCreationTask,
        dateFinTask: task.dateFinTask,
        stateId: task.stateId,
      };
      this.popupTitle = "Modifier la tâche";
      this.showPopup = true;
    },
    updateTask() {
      const taskId = this.editingTask.id;
      fetch(`http://localhost:8080/updatetask/${taskId}`, {
        // Ajouter un slash avant l'identifiant
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.newTask),
      })
        .then((response) => response.json())
        .then((data) => {
          const taskIndex = this.tasks.findIndex((task) => task.id === data.id);
          if (taskIndex !== -1) {
            this.tasks[taskIndex] = data;
            this.newTask = {
              id: null, // Réinitialiser l'identifiant
              title: "",
              description: "",
              dateCreationTask: "",
              dateFinTask: "",
              stateId: null,
            };
            this.editingTask = null;
            this.popupTitle = "Ajouter une tâche";
            this.closePopup();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // ...
    cancel() {
      this.closePopup();
      this.newTask = {
        title: "",
        description: "",
        dateCreationTask: "",
        dateFinTask: "",
        stateId: null,
      };
      this.editingTask = null;
      this.popupTitle = "Ajouter une tâche";
    },
    showAddTaskPopup() {
      this.newTask = {
        title: "",
        description: "",
        dateCreationTask: "",
        dateFinTask: "",
        stateId: null,
      };
      this.editingTask = null;
      this.popupTitle = "Ajouter une tâche";
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>
