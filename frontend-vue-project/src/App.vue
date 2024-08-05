<template>
  <div>
    <div>
      <h1>Tabela Carro</h1>
    </div>
    
      <hr>
    <table id="table" border="1">
      <th>
        <th>ID</th>
        <tr v-for="carro in user" :key="carro.id" >{{ carro.ID }}</tr>
      </th>
      <th>
        <th>MARCA</th>
        <tr v-for="carro in user" :key="carro.marca" >{{ carro.MARCA }}</tr>
      </th>
      <th>
        <th>MODELO</th>
        <tr v-for="carro in user" :key="carro.modelo" >{{ carro.MODELO }}</tr>
      </th>
      <th>
        <th>ANO</th>
        <tr v-for="carro in user" :key="carro.ano" >{{ carro.ANO }}</tr>
      </th>
      <th>
        <th>VALOR</th>
        <tr v-for="carro in user" :key="carro.valor" >{{ carro.VALOR }}</tr>
      </th>
      <th>
        <th>COR</th>
        <tr v-for="carro in user" :key="carro.cor" >{{ carro.COR }}</tr>
      </th>
      <th>
        <th>STATUS</th>
        <tr v-for="carro in user" :key="carro._Status" >{{ carro.STATUS }}</tr>
      </th>
    </table>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "user",
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
        .get("http://localhost:3000/api/carros")
        .then((res) => {
          this.user = res.data.result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
*{
  background-color: white;
}

table{
  background-color: white;
  color: black; 
  text-align: center;
  width: 100%;
  padding: 3px;
}
th, tr, td {
  width: 14%;
}
h1 {
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  font-weight: 600;
  background-color: black;
  color: white;
}
</style>
