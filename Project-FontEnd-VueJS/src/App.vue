<template>

  <div id="Superior">

    <div id="logo">
      <img src="./img/logo.png" alt="VueJs" width="205" height="150">
    </div>
    <div id="header">
      <h1>CADASTRO DE USUARIO</h1>
      <p>Projeto VueJs para Cadastro de Clientes</p>
    </div>

  </div>

  <div id="Centro">

    <div id="Nav">
      <RouterLink to="/">
        <button>HOME</button>
      </RouterLink>

      <RouterLink to="/cadastro">
        <button>CADASTRO</button>
      </RouterLink>

      <RouterLink to="/clientes">
        <button>CLIENTES</button>
      </RouterLink>
    </div>

    <div id="corpo">
      <RouterView />
    </div>

  </div>



</template>

<script>
import { RouterLink } from 'vue-router';

</script>

<style>
#Superior {
  display: flex;
  width: 100%;
  border: 3px solid black;
  height: 150px;
}

#header {
  text-align: center;
  width: 85%;
  font-family: 'Courier New', Courier, monospace;
  background-color: black;
  color: white;
}

#Centro {
  display: flex;
  width: 100%;
  height: 550px;
}

#Nav {
  background-color: black;
  width: 60px;
  height: 500px;
  color: white;


}

button {
  background-color: black;
  color: white;
  font-size: 20px;
  border: 3px solid white;
  margin: 10px;
  font-family: 'Courier New', Courier, monospace;
}

#corpo {
  margin-left: 12%;
  text-align: center;
  width: 100%;
}
</style>
