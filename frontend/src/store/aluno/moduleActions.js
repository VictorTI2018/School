import aluno from '../../http/request/aluno'

export default {
    obterAlunos({ }) {
        return new Promise((resolve, reject) => {
            aluno.obterAlunos()
                .then((response) => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    obterAluno({ }, id) {
        return new Promise((resolve, reject) => {
            aluno.obterAluno(id)
                .then((response) => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    cadastrarAluno({ }, payload) {
        return new Promise((resolve, reject) => {
            aluno.cadastrarAluno(payload)
                .then((response) => {
                    resolve(response)
                }).catch((error) => {
                    reject(error)
                })
        })
    },
    removerAluno({ }, id) {
        return new Promise((resolve, reject) => {
            aluno.removerAluno(id)
                .then((response) => {
                    resolve(response)
                }).catch((error) => {
                    reject(error)
                })
        })
    },
    editarAluno({ },payload) {
        return new Promise((resolve, reject) => {
            aluno.editarAluno(payload)
                .then((response) => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
        })
    }
}