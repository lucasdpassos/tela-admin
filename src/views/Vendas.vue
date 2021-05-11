
<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            CPF / CNPJ
          </th>
          <th class="text-left">
            Telefone
          </th>
          <th class="text-left">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in info"
          :key="item.id"
        >
          <td>{{ item.nome }}</td>
          <td>{{ item.cpfcnpj }}</td>
          <td>{{ item.telefone }}</td>
          <td>{{ item.email }}</td>
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
    axios.get('http://localhost:3333/api/all')
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
