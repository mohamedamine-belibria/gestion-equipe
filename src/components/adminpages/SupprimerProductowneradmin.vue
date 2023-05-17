<template>
  <div class="moderator-list">
    <h1>Liste des modérateurs</h1>
    <table>
      <thead>
        <tr>
          <th>Nom d'utilisateur</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="moderator in moderators" :key="moderator.id">
          <td>{{ moderator.username }}</td>
          <td>{{ moderator.email }}</td>
          <td>
            <button @click="confirmDeleteModerator(moderator.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
/* Styles */
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      moderators: []
    };
  },
  created() {
    this.fetchModerators();
  },
  methods: {
    fetchModerators() {
      axios
        .get('http://localhost:8080/api/test/getAllROLE_MODERATOR')
        .then(response => {
          this.moderators = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    confirmDeleteModerator(id) {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce modérateur ?")) {
        this.deleteModerator(id);
      }
    },
    deleteModerator(id) {
      axios
        .delete(`http://localhost:8080/api/test/deletUser/${id}`)
        .then(() => {
          this.moderators = this.moderators.filter((moderator) => moderator.id !== id);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
