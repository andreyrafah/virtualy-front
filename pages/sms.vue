<template>
    <div>
        <v-tabs
                v-model="active"
                color="primary-virtualy"
                dark
                slider-color="second-virtualy"
        >
            <v-tab
                    v-for="tab in tabList"
                    :key="tab.id"
                    ripple
            >
                {{ tab.label }}

            </v-tab>
            <v-tab-item
                    v-for="tab in tabList"
                    :key="tab.id"
            >
                <component v-bind:is="tab.component"></component>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
  import AppSendUnique from '@/components/Sms/send-unique.vue'
  import AppMultiple from '@/components/Sms/multiple.vue'
  import AppReports from '@/components/Sms/reports.vue'

  export default {
    middleware: 'auth',
    components: {
      AppSendUnique,
      AppMultiple,
      AppReports
    },
    data() {
      return {
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tabList: [
          {id: 1, label: 'Envio Avulso', component: 'app-send-unique'},
          {id: 2, label: 'Envio em Massa', component: 'app-multiple'},
          {id: 3, label: 'Relatorio', component: 'app-reports'},
        ]
      }
    }
  }
</script>
