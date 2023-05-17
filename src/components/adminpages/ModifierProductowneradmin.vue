<template>
  <div class="product-owner-list">
    <h1>Liste des product owners</h1>
    <table>
      <thead>
        <tr>
          <th>Nom d'utilisateur</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="productOwner in productOwners" :key="productOwner.id">
          <td v-if="editingProductOwner.id !== productOwner.id">{{ productOwner.username }}</td>
          <td v-else><input v-model="editingProductOwner.username" /></td>
          <td v-if="editingProductOwner.id !== productOwner.id">{{ productOwner.email }}</td>
          <td v-else><input v-model="editingProductOwner.email" /></td>
          <td>
            <button v-if="editingProductOwner.id !== productOwner.id" @click="startEditing(productOwner)">Modifier</button>
            <button v-else @click="submitEdit">Enregistrer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productOwners: [],
      editingProductOwner: {
        id: null,
        username: '',
        email: '',
      },
    };
  },
  mounted() {
    this.fetchProductOwners();
  },
  methods: {
    fetchProductOwners() {
      axios
        .get('http://localhost:8080/api/test/getAllROLE_MODERATOR')
        .then(response => {
          this.productOwners = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    startEditing(productOwner) {
      this.editingProductOwner = { ...productOwner };
    },
    submitEdit() {
  const updatedProductOwner = {
    id: this.editingProductOwner.id, // Include the id in the request body
    username: this.editingProductOwner.username,
    email: this.editingProductOwner.email,
    password: this.editingProductOwner.password,
    roles: this.editingProductOwner.roles
  };

  axios
    .put(`http://localhost:8080/api/test/updateuser`, updatedProductOwner) // Remove the id from the URL
    .then(response => {
      console.log(response.data);
      this.fetchProductOwners(); // Re-fetch the product owners to update the table with the latest data
      this.editingProductOwner = { // Reset the editingProductOwner state
        id: null,
        username: '',
        email: '',
      };
    })
    .catch(error => {
      console.error("There was an error while updating the product owner:", error);
    });
}

  }
};
</script>
