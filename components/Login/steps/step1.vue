<template>
    <v-layout row>
        <v-flex xs12>
            <v-form
                ref="form"
                v-model="valid"
            >
                <v-text-field
                        v-model="user.phone"
                        label="Telefone"
                        :rules="rules.phone"
                        :mask="maskPhone"
                        placeholder="(DD) NUMERO"
                ></v-text-field>
                <v-text-field
                        v-model="user.email"
                        :rules="rules.email"
                        label="E-mail"
                        required
                ></v-text-field>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
      data () {
        return {
          valid: false,
          user: {
            phone: '',
            email: ''
          },
          rules: {
            email: [
                v => !!v || 'O E-mail é obrigatório',
                v => /.+@.+/.test(v) || 'Por favor insira um email válido'
            ],
            phone: [
              v => !!v || 'Telefone é obrigatório',
              v => (v.length > 9 && v.length < 12) || 'o número deve ser ter no mínimo de 10 a 11 caracteres'
            ]
          }
        }
      },
      watch: {
        user: {
          deep: true,
          handler (val) {
            const emit = { ...val }
            val.valid = this.valid
            val.step = 1
            this.$emit('step', emit)
          }
        }
      },
      computed: {
        maskPhone () {
          const thirdNumberPhone = this.user.phone.substr(2, 1)

          if (thirdNumberPhone < 7) {
            return '## ####-####'
          }
          return '## #####-####'
        }
      }
    }
</script>