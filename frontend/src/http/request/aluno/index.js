import http from '../../axios/http'
export default {
    obterAlunos() {
        return http.get(`/alunos`)
    },
    obterAluno(aluno) {
        return http.get(`alunos/${aluno}`)
    },
    cadastrarAluno(payload) {
        return http.post(`/alunos`, payload)
    },
    removerAluno(aluno) {
        return http.delete(`/alunos/${aluno}`)
    },
    editarAluno(payload) {
        return http.put(`/alunos/${payload.id}`, payload)
    }
}