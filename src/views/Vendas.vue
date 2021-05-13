
<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome do Cliente
          </th>
          <th class="text-left">
            Pedido
          </th>
          <th class="text-left">
            Valor Total
          </th>
          <th class="text-left">
            Frete ou Retirada
          </th>
          <th class="text-left">
            Tipo de Pagamento
          </th>
          <th class="text-left">
            Data do pedido
          </th>
          <th class="text-left">
            Prazo de entrega
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in info"
          :key="item.id"
        >
          <td>{{ item.nome_cliente }}</td>
          <td>{{ item.descricao }}</td>
          <td>{{ item.valor_pedido }}</td>
          <td>{{ item.frete }}</td>
          <td>{{ item.tipo_pg }}</td>
          <td>{{ item.data_pedido }}</td>
          <td>{{ item.data_entrega }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
import axios from 'axios'

  export default {
    data () {

      return {
        info: null,
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
    mounted () {
    axios.get('http://localhost:3333/api/getsells')
        .then(res => (this.info = res.data.rows))
        .catch(error => console.log(error))

  }}
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
