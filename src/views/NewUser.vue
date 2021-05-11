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
      label="Nome"
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
    <v-text-field
      v-model="endereco"
      :rules="emailRules"
      label="Endereço"
      required
    ></v-text-field>

    <v-btn
      color="#388E3C"
      dark
      style="margin-left: 180px;"
      large
      @click="sendUser()"
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
      endereco: '',
      phone: '',
      email: '',

      cpfcnpjrules: [
         v => !!v || 'CPF / CNPJ é obrigatório'
      ],

      phoneRules: [
        v => !!v || 'Telefone é obrigatório'
      ],
      nameRules: [
        v => !!v || 'Nome é obrigatório',

      ],

      emailRules: [
        v => /.+@.+\..+/.test(v) || 'Precisa ser um email válido',
      ],
      select: null,
      checkbox: false,
    }),
    mounted() {

    },
    created() {

    },
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
      openDialog () {

      },
      async sendUser() {
        const franqueado = {

        nome: this.name,
        cpfcnpj: this.cpfcnpj,
        usuario: this.cpfcnpj,
        senha: "123454",
        nivel: "1",
        email: this.email,
        data_nasc:"2021/04/01",
        ativo: "1",
        telefone2: "1212112212",
        telefone: this.phone,
        endereco: this.endereco,
        bairro: "centro",
        cidade: "niteroi",
        estado:"rj"
  }

      axios.post("http://localhost:3333/api/newuser", franqueado)
      .then(response => this.articleId = response.data.id)
      this.$refs.form.reset()
       alert('Franqueado cadastrado com sucesso')
      }
    },

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
