<template>
  <div id="appHolder1">
    <v-app-bar
      color="#C62828"
      dense
      dark

    >
      <v-img src="./assets/carnewhite.png" style="max-width:100px;" />

      <v-toolbar-title>Painel do administrador</v-toolbar-title>

      <v-spacer></v-spacer>


    </v-app-bar>


  <router-view></router-view>



  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
    //
  },

  data: () => ({
    //
  }),
};
</script>


<style>
#appHolder1 {
background-image:  url("./assets/background.jpg");
height: 980px;
}
</style>
