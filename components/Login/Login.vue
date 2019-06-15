<template>
    <v-layout row justify-center align-center fill-height>
        <v-flex md5>
            <v-toolbar
                color="primary-virtualy"
                dark
            >
                <v-layout row  justify-center>
                    <v-toolbar-title>
                        Login
                    </v-toolbar-title>
                </v-layout>
            </v-toolbar>
            <v-card>
                <v-card-text>
                    <v-text-field
                            v-model="user.email"
                            :rules="rules.email"
                            label="E-mail"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="user.password"
                            :append-icon="show1 ? 'visibility' : 'visibility_off'"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Senha"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="login()" block color="second-virtualy" dark >Entrar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat small>Esqueci Minha Senha</v-btn>
                    <newAccount/>
                </v-card-actions>
            </v-card>
        </v-flex>

    </v-layout>
</template>

<script>
    import newAccount from './newAccount'
    import nuxt from "../../.nuxt/components/nuxt";
    import axios from "../../.nuxt/axios";
    export default {
      components: { newAccount },
      data () {
        return {
          user: {
            email: 'andrey.rafah@hotmail.com',
            password: '741852',
          },
          show1: false,
          rules: {
            email: [
              v => !!v || 'O E-mail é obrigatório',
              v => /.+@.+/.test(v) || 'Por favor insira um email valido'
            ],
          }
        }
      },
      methods: {
        async login () {
          await this.$auth.login({data: this.user})

          this.$router.push({ name: 'index'});
        }
      }
    }
</script>