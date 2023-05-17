<template>
  <div>
    <h1>Ajouter un utilisateur</h1>
    <form @submit="saveUser">
      <label for="username">Nom d'utilisateur:</label>
      <input type="text" id="username" v-model="user.username" required>
      <br>
      <label for="email">Adresse e-mail:</label>
      <input type="email" id="email" v-model="user.email" required>
      <br>
      <label for="password">Mot de passe:</label>
      <input type="password" id="password" v-model="user.password" required>
      <br>
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        roles: [
          {
            id: 1,
            name: 'ROLE_USER'
          }
        ]
      }
    };
  },
  methods: {
    saveUser() {
      // Effectuer la requête POST à l'API
      fetch('http://localhost:8080/api/test/saveuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
      })
      .then(response => {
        if (response.ok) {
          // L'utilisateur a été ajouté avec succès
          console.log('Utilisateur ajouté avec succès');
          // Réinitialiser le formulaire
          this.user.username = '';
          this.user.email = '';
          this.user.password = '';
          // Redirection vers la page Listdevloppeuradmin
          this.$router.push('/Listdevloppeuradmin');
        } else {
          // Gérer les erreurs de requête
          throw new Error('Erreur lors de l\'ajout de l\'utilisateur');
        }
      })
      .catch(error => {
        console.error('Erreur lors de la communication avec l\'API', error);
      });
    }
  }
};
</script>
