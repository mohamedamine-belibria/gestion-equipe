<template>
  <div class="affectation-page">
    <h2>Project Assignment</h2>
    <div class="form-container">
      <label for="selectedProjet">Select Project:</label>
      <select v-model="selectedProjet" id="selectedProjet" class="input-field">
        <option v-for="projet in projets" :value="projet.id" :key="projet.id">
          {{ projet.name }}
        </option>
      </select>

      <label for="selectedModerateur">Select Moderator:</label>
      <select v-model="selectedModerateur" id="selectedModerateur" class="input-field">
        <option v-for="moderateur in moderateurs" :value="moderateur.id" :key="moderateur.id">
          {{ moderateur.username }}
        </option>
      </select>

      <button @click="affecter" class="submit-button">Assign Project</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProjet: '',
      selectedModerateur: '',
      projets: [],
      moderateurs: []
    };
  },
  mounted() {
    this.fetchProjets();
    this.fetchModerateurs();
  },
  methods: {
    fetchProjets() {
      fetch('http://localhost:8080/getAllProjets')
        .then(response => response.json())
        .then(data => {
          this.projets = data;
        })
        .catch(error => {
          console.error('Error fetching projects:', error);
        });
    },
    fetchModerateurs() {
      fetch('http://localhost:8080/api/test/getAllROLE_MODERATOR')
        .then(response => response.json())
        .then(data => {
          this.moderateurs = data;
        })
        .catch(error => {
          console.error('Error fetching moderators:', error);
        });
    },
    affecter() {
      const userId = this.selectedModerateur;
      const itemId = this.selectedProjet;

      fetch(`http://localhost:8080/assignment/assign/${userId}/${itemId}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          console.log('Assignment successful:', data);
          // You can perform any additional actions after successful assignment
        })
        .catch(error => {
          console.error('Error assigning project:', error);
        });
    }
  }
};
</script>

<style scoped>
.affectation-page {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
}

.form-container {
  display: grid;
  gap: 10px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

label {
  font-weight: bold;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
