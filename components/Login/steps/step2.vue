<template>
    <v-layout row>
        <v-flex xs12>
            <v-text-field
                    v-model="company.cnpj"
                    label="CNPJ"
                    mask="##.###.###/####-##"
            ></v-text-field>
            <v-text-field
                    v-model="company.name"
                    label="Razão Social"
                    required
            ></v-text-field>
            <v-select
                    v-model="company.marketSegment"
                    :items="items"
                    label="Segmento"
                    item-text="segment"
                    required
            ></v-select>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
      data () {
        return {
          company: {
            cnpj: '',
            name: '',
            marketSegment: ''
          },
          anwerBack: '',
          items: [
            { id: 1, segment: 'Cobrança'},
            { id: 2, segment: 'Promotoria'},
            { id: 2, segment: 'Outro'},
          ]
        }
      },
      watch: {
        company: {
          deep: true,
          handler (val) {
            console.log(val.cnpj.length)
            if (val.cnpj.length > 13) {
              this.$axios.get('verifyCnpj?XDEBUG_SESSION_START=PHPSTORM', {
                params: {
                  cnpj: val.cnpj
                }
              })
              .then(response => { this.company.name = response.data})
            }
          }
        }
      }
    }
</script>