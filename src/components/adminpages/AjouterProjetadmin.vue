<template>
  <div>
    <h1>Créer un projet</h1>
    <form @submit.prevent="createProject">
      <div>
        <label for="name">Nom du projet:</label>
        <input type="text" id="name" v-model="project.name" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="project.description" required></textarea>
      </div>
      <div>
        <label for="dateCreation">Date de création:</label>
        <input type="date" id="dateCreation" v-model="project.dateCreation" required>
      </div>
      <div>
        <label for="dateFinProjet">Date de fin du projet:</label>
        <input type="date" id="dateFinProjet" v-model="project.dateFinProjet" required>
      </div>
      <div>
        <label for="dedline">Date limite:</label>
        <input type="date" id="dedline" v-model="project.dedline" required>
      </div>
      <div>
        <label for="statut">Statut:</label>
        <select id="statut" v-model="project.statut">
          <option value="ENCOURS">En cours</option>
          <option value="TERMINER">Terminé</option>
        </select>
      </div>
      <button type="submit">Créer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {
        itemType: 'PROJET',
        name: '',
        description: '',
        dateCreation: '',
        dateFinProjet: '',
        dedline: '',
        statut: 'ENCOURS'
      }
    };
  },
    methods: {
    getUser() {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user).id : null;
    },
        createProject() {
        
      // Récupérer userId depuis le localStorage
         const userId = this.getUser();

      // Faire une requête à l'API
      fetch(`http://localhost:8080/creationitem/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.project)
      })
        .then(response => {
          if (response.ok) {
            // Le projet a été créé avec succès
            console.log('Projet créé !');
          } else {
            // Gérer les erreurs de requête
            console.error('Erreur lors de la création du projet.');
          }
        })
        .catch(error => {
          // Gérer les erreurs de connexion
          console.error('Erreur de connexion :', error);
        });
    }
  }
};
</script>
