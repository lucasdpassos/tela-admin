<template >
  <div >
  <div id="divButtons">
    <v-btn @click="$router.push('franqueados')" x-large color="#C62828" dark> Relatório Franqueados
    </v-btn>
    <v-btn @click="$router.push('vendas')" x-large color="#C62828" dark> Relatório Pedidos
    </v-btn>
    <v-btn  x-large color="#C62828" dark> Relatório Vendas Registradas
    </v-btn>


</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Reports",
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
