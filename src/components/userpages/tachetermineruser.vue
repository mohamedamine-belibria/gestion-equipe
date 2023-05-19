<template>
  <div class="projects-page">
    <h2>All taches</h2>
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
      return this.projets.filter(projet => projet.item.statut === 'TERMINER');
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
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
}
</style>
