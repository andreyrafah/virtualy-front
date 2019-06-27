const utilities = {
  data () {
    return {
      rules: {
        email: [
          v => !!v || 'O E-mail é obrigatório',
          v => /.+@.+/.test(v) || 'Por favor insira um email válido'
        ],
        phone: [
          v => !!v || 'Telefone é obrigatório',
          v => (v.length > 9 && v.length < 12) || 'o número deve ser ter no mínimo de 10 a 11 caracteres'
        ]
      }
    }
  },
  computed: {
    maskPhone () {
      const thirdNumberPhone = this.phone.substr(2, 1)
      if (thirdNumberPhone < 7) {
        return '## ####-####'
      }
      return '## #####-####'
    }
  }
}