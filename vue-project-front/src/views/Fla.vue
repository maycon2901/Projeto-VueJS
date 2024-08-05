<template>
  <div>
    <div>
      <h1>Consumindo de API</h1>
    </div>
    <hr>
    <br>
    <div>

      <table id="User" border="1">

        <thead>
          <th>Id</th>
          <th>Modelo</th>
          <th>Placa</th>
          <th>Ano</th>
        </thead>

        <tbody>
          <td>
            <tr v-for="users in user" :key="user.id">
              {{ users.id }}
            </tr>
          </td>
          <td>
            <tr v-for="users in user" :key="user.modelo">
              {{ users.modelo }}
            </tr>
          </td>
          <td>
            <tr v-for="users in user" :key="user.placa">
              {{ users.placa }}
            </tr>
          </td>
          <td>
            <tr v-for="users in user" :key="user.ano">
              {{ users.ano }}
            </tr>
          </td>
        </tbody>

      </table>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "User",
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get("http://localhost:3001/users")
        .then((res) => {
          this.user = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#api {
  font-family: 'Courier New', Courier, monospace;
  font-size: 30px;
}

#User {
  font-family: 'Courier New', Courier, monospace;
  font-size: 30px;
  padding: 5px;
}

tr,
td,
th {
  padding: 5px;
}
</style>