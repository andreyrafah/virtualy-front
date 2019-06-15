<template>
    <v-layout row>
        <v-flex xs12>
            <v-text-field
                    v-model="user.name"
                    label="Nome"
            ></v-text-field>
            <v-text-field
                    v-model="user.position"
                    label="Cargo"
            ></v-text-field>
            <v-text-field
                    v-model="user.password"
                    v-validate="'required'"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    :type="show1 ? 'text' : 'password'"
                    label="Senha"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="user.passwordConfirmation"
                    v-validate="'required'"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    :type="show1 ? 'text' : 'password'"
                    label="Confirmação de Senha"
                    required
            ></v-text-field>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
      data () {
        return {
          user: {
            position: '',
            name: '',
            passwordConfirmation: '',
            password: ''
          },
          show1: false
        }
      }
    }
</script>