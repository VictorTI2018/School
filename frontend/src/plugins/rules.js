import { email, confirmed, required } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend("required", {
    ...required,
    message: "Campo Obrigatorio"
})

extend("email", {
    ...email,
    message: "E-mail no formato inválido"
})

extend("confirmed", {
    ...confirmed,
    message: "Os campos não conhecidem"
})