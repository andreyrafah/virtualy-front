<template>
    <v-app>
        <div v-if="loggedIn">
            <v-navigation-drawer

                    v-model="drawer"
                    :mini-variant="miniVariant"
                    :clipped="clipped"
                    fixed
                    app
            >
                <v-list>
                    <v-list-tile
                            v-for="(item, i) in items"
                            :key="i"
                            :to="item.to"
                            router
                            exact
                    >
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"/>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar
                    :clipped-left="clipped"
                    fixed
                    app
            >
                <v-toolbar-side-icon @click="drawer = !drawer"/>
                <v-toolbar-title v-text="title"/>
                <v-spacer/>
            </v-toolbar>
            <v-content>
                <v-container>
                    <nuxt/>
                </v-container>
            </v-content>
        </div>
        <v-content v-else>
            <v-container fluid>
                <nuxt/>
            </v-container>
        </v-content>

        <v-footer
                class="text-xs-justify"
                :fixed="fixed"
                app
        >
            <v-layout
                    justify-center
                    row
                    wrap
            >
                <v-flex
                            second-virtualy
                        lighten-2
                        py-3
                        text-xs-center
                        white--text
                        xs12
                >
                    <span>&copy; 2019</span>
                </v-flex>
            </v-layout>
        </v-footer>

    </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'apps',
            title: 'Home',
            to: '/'
          },
          {
            icon: 'sms',
            title: 'SMS',
            to: '/sms'
          },
          {
            icon: 'person',
            title: 'USUARIO',
            to: '/usuario'
          }
        ],
        miniVariant: false,
        title: 'Virtualy'
      }
    }
  }
</script>
