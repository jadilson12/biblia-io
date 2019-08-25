<template>
  <v-app>
    <app-bar/>
    <v-container
      mx-auto
      py-0
      mt-2
    >
      <v-content>

        <router-view/>

      </v-content> 

      <navigation-drawer/>

      <app-footer/>

    </v-container>
  </v-app>
</template>

<script> 

import AppFooter from './views/layout/AppFooter'
import AppBar from './views/layout/AppBar'
import NavigationDrawer from './views/layout/NavigationDrawer'

export default {
  name: 'App',
  components: {
      AppBar,
      AppFooter,
      NavigationDrawer 
    },
};
</script>

