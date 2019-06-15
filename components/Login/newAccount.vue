<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="600">
            <template v-slot:activator="{ on }">
                <v-btn flat small v-on="on">Criar Conta</v-btn>
            </template>
            <v-card>
                <v-card-title class="headline"></v-card-title>
                <v-card-text>
                    <keep-alive>
                        <component :is="currentComponent" @step="handleReceivedDataFromSteps"></component>
                    </keep-alive>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="currentStep--"
                           color="green darken-1"
                           flat>
                        Voltar
                    </v-btn>
                    <v-btn
                            v-if="currentStep < 2"
                            :disabled="!btnNextStepIsEnable"
                            @click="currentStep++"
                            color="green darken-1"
                            flat>
                        Proximo
                    </v-btn>
                    <v-btn
                            v-else
                            :disabled="!btnNextStepIsEnable"
                            @click="saveNewAccount"
                            color="green darken-1"
                            flat>
                        Criar Conta
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
  import step1 from './steps/step1'
  import step2 from './steps/step2'
  import step3 from './steps/step3'

  export default {
    components: {step1, step2, step3},
    data() {
      return {
        dialog: false,
        steps: [
          'step1',
          'step2',
          'step3'
        ],
        btnNextStepIsEnable: false,
        currentStep: 0
      }
    },
    methods: {
      handleReceivedDataFromSteps(val) {
        this.btnNextStepIsEnable = false
        if (val.step === 1) {
          this.btnNextStepIsEnable = val.valid
        }
      },
      saveNewAccount () {

      }
    },
    computed: {
      currentComponent() {
        if (this.currentStep < 0) {
          this.dialog = false
          this.currentStep = 0
        }
        return this.steps[this.currentStep]
      }
    }
  }
</script>