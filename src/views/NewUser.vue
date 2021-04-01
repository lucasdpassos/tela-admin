<template>
<div>
<div id="formHolder">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    style="width: 500px;"
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nome Completo"
      required
    ></v-text-field>

    <v-text-field
      v-model="cpfcnpj"
      label="CPF/CNPJ"
      required
    ></v-text-field>
    <v-text-field
      v-model="phone"
      label="Telefone"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-btn
      color="#388E3C"
      dark
      style="margin-left: 180px;"
      large
    >
      Cadastrar
    </v-btn>
  </v-form>
  </div>
  </div>
</template>


<script>

  import axios from 'axios'


  export default {
    data: () => ({
      valid: true,
      name: '',
      cpfcnpj: '',
      cpfcnpjrules: [
         v => !!v || 'CPF / CNPJ é obrigatório'
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Telefone é obrigatório'
      ],
      nameRules: [
        v => !!v || 'Nome é obrigatório',

      ],
      email: '',
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'Precisa ser um email válido',
      ],
      select: null,
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
      mounted () {
    axios
      .post('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  },
    created() {
    // POST request using axios with error handling
    const user = { title: "Vue POST Request Example" };
    axios.post("https://reqres.in/invalid-url", article)
      .then(response => this.articleId = response.data.id)
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
}
  }
</script>

// nome / cpfcnpj / email / telefone / telefone 2 / endereço - bairro cidade estado



<style>

#formHolder {
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.596);
  max-width: 700px;
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
