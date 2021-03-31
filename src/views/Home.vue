<template >
  <div >
  <div id="divButtons">
    <v-btn @click="$router.push('about')" x-large color="#C62828" dark> Novo Franqueado
    <v-icon style="padding:5px;" large dark>mdi-account-plus</v-icon>
    </v-btn>
    <v-btn x-large color="#C62828" dark> Adicionar Produto
    <v-icon style="padding:5px;" large dark>mdi-shopping</v-icon>
     </v-btn>
    <v-btn x-large color="#C62828" dark> Relatórios
    <v-icon style="padding:5px;" large dark>mdi-file-document-multiple</v-icon>
    </v-btn>
    <v-btn x-large color="#C62828" dark> Fazer Anúncio
     <v-icon style="padding:5px;" large dark>mdi-bullhorn</v-icon>
    </v-btn>


</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    //
  },
};
</script>


<style>


#appHolder {
  background-image:  url("../assets/background.jpg");

}

#divButtons {
  margin-left: 29%;
  margin-top: 100px;
  max-width: 800px;
  display: grid;
  grid-template-columns: 50fr 50fr;
  grid-column-gap: 50px;
  grid-row-gap: 50px;


}


</style>
