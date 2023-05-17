<template>
  <div class="projects-page">
    <h2>All Projects</h2>
    <table>
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
        <tr v-for="projet in projets" :key="projet.id">
          <td>{{ projet.name }}</td>
          <td>{{ projet.description }}</td>
          <td>{{ projet.dateCreation }}</td>
          <td>{{ projet.dateFinProjet }}</td>
          <td>{{ projet.dedline }}</td>
          <td>{{ projet.statut }}</td>
        </tr>
      </tbody>
    </table>
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
    }
  }
};
</script>

<style scoped>
.projects-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>
