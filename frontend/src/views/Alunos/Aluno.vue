<template>
  <div class="aluno">
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(add)" @reset="resetForm" novalidate>
        <div class="row">
          <div class="col-md-10">
            <v-text-field
              icon="font"
              placeholder="Nome do aluno..."
              v-model="model.nome"
              rules="required"
            />
          </div>
          <div class="col-md-2 col-sm-2">
            <button class="btn btn-success btn-block" title="Novo Aluno" type="submit">
              <v-icon icon="plus" />
            </button>
          </div>
        </div>
      </form>
    </ValidationObserver>
    <div class="mt-2 card">
      <div class="card-body">
        <v-data-table :headers="headers" :data="alunos" action>
          <template v-slot:item="{ item }">
            <v-icon icon="edit" class="text-primary icon-click" @click="edit(item)" />
            <v-icon icon="trash" class="text-danger icon-click" @click="remove(item)" />
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationObserver,
  },
  data() {
    return {
      model: {
        id: 0,
        nome: "",
        ra: "",
      },
      headers: [
        { label: "#", value: "id" },
        { label: "Nome", value: "nome" },
        { label: "RA", value: "ra" },
      ],
      alunos: [],
    };
  },
  computed: {
    RA() {
      return Math.random().toString(20).substr(4, 9);
    },
  },
  methods: {
    load() {
      this.$store.dispatch("aluno/obterAlunos").then((res) => {
        this.alunos = res.data;
      });
    },
    edit({ item }) {
      this.$store.dispatch("aluno/obterAluno", item.id).then((res) => {
        this.setForm(res.data);
      });
    },
    remove({ item }) {
      this.$store.dispatch("aluno/removerAluno", item.id).then((res) => {
        if (res.status === 200) {
          this.load();
        }
      });
    },
    add() {
      this.model.ra = this.model.id > 0 ? this.model.ra : this.RA;
      let payload = {
        id: this.model.id,
        nome: this.model.nome,
        ra: this.model.ra,
      };
      if (this.model.id > 0) {
        this.$store.dispatch("aluno/editarAluno", payload).then((res) => {
          this.load();
          this.resetForm();
        });
      } else {
        this.$store.dispatch("aluno/cadastrarAluno", payload).then((res) => {
          console.log(res.data);
          this.load();
          this.resetForm();
        });
      }
    },
    resetForm() {
      this.model.nome = "";
      this.model.id = 0;
      this.model.ra = "";
      this.$refs.observer.reset();
    },
    setForm(model) {
      this.model.id = model.id;
      this.model.nome = model.nome;
      this.model.ra = model.ra;
    },
  },
  mounted() {
    this.load();
  },
};
</script>

<style>
.aluno {
  height: 100%;
}
</style>