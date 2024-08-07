<template>
    <div>
        <div>
            <h1>Consumindo de API</h1>
        </div>
        <hr>
        <br>
        <div>

            <table id="table">

                <thead>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Sobre Nome</th>
                    <th>Idade</th>
                    <th>Sexo</th>
                </thead>

                <tbody>
                    <td>
                        <tr v-for="users in user" :key="user.id">
                            {{ users.id }}
                        </tr>
                    </td>
                    <td>
                        <tr v-for="users in user" :key="user.nome">
                            {{ users.nome }}
                        </tr>
                    </td>
                    <td>
                        <tr v-for="users in user" :key="user.sobrenome">
                            {{ users.sobrenome }}
                        </tr>
                    </td>
                    <td>
                        <tr v-for="users in user" :key="user.idade">
                            {{ users.idade }}
                        </tr>
                    </td>
                    <td>
                        <tr v-for="users in user" :key="user.sexo">
                            {{ users.sexo }}
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
#table {
    font-family: 'Courier New', Courier, monospace;
    font-size: 25px;
    width: 100%;
}

tr,
td,
th {
    padding: 10px;
    text-align: left;
}
</style>