<template>
  <div class="moderator-list">
    <h1>Liste des modérateurs</h1>
    <table>
      <thead>
        <tr>
          <th>Nom d'utilisateur</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="moderator in moderators" :key="moderator.id">
          <td>{{ moderator.username }}</td>
          <td>{{ moderator.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.moderator-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
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
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #f2f2f2;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      moderators: []
    };
  },
  mounted() {
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
    }
  }
};
</script>
