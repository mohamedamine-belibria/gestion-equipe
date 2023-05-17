<template>
  <div class="add-product-owner">
    <h1>Ajouter un product owner</h1>
    <form @submit.prevent="addProductOwner">
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" id="username" v-model="productOwner.username" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="productOwner.email" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="productOwner.password" required>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<style>
.add-product-owner {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productOwner: {
        username: '',
        email: '',
        password: '',
        roles: [
          {
            id: 2,
            name: 'ROLE_MODERATOR'
          }
        ]
      },
      accessToken: '', // Ajout de la variable accessToken
      tokenType: '' // Ajout de la variable tokenType
    };
  },
  methods: {
    addProductOwner() {
      axios
        .post('http://localhost:8080/api/test/saveuser', this.productOwner, {
          headers: {
            Authorization: `${this.tokenType} ${this.accessToken}` // Ajout de l'en-tête Authorization avec accessToken et tokenType
          }
        })
        .then(response => {
          console.log(response.data); // Gérer la réponse de l'API selon vos besoins
          // Redirection vers la page ListProductOwnerAdmin
          this.$router.push('/listproductowneradmin');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
