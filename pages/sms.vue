<template>
    <v-layout>
        <v-flex xs6>
            <v-card width="100%">
                <v-flex text-xs-center>
                    <v-form
                            ref="form"
                            v-model="form"
                            class="pa-3 pt-4"
                    >
                        <v-textarea
                                outline
                                name="input-7-4"
                                label="Mensagem"
                                counter="160"
                                value=""
                        ></v-textarea>
                        <v-layout align-center justify-space-between row fill-height>
                            <v-flex xs5>
                                <v-text-field
                                        v-model="phone"
                                        label="Telefone"
                                        :mask="maskPhone"
                                        placeholder="(DD) NUMERO"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs5>
                                <v-switch v-model="flash" color="green" label="Flash"></v-switch>
                            </v-flex>
                        </v-layout>
                    </v-form>
                </v-flex>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn
                            flat
                            @click="$refs.form.reset()"
                    >
                        Clear
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn fab color="green">
                        <v-icon color="white">send</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-dialog
                        v-model="dialog"
                        absolute
                        max-width="400"
                        persistent
                >
                </v-dialog>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        phone: null,
        flash: false
      }
    }
  }
</script>
