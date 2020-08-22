<template>
  <div>
      <div class="row">
         <div class="col-md-12">
              <v-text-field icon="filter" placeholder="Digite para buscar" v-model="search"/>
         </div>
      </div>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th
            class="ordem-col"
            v-for="(header, key) in headers"
            :key="key"
            @click="setOrdemCol(key)"
          >{{ header.label}}</th>
          <th v-if="action">Ações</th>
        </tr>
      </thead>
      <tbody v-if="data.length">
        <tr v-for="(item, index) in filtered" :key="index">
          <td v-for="(header, key) in headers" :key="key">{{ item[header.value] }}</td>
          <td v-if="action">
            <slot name="item" v-bind:item="{ item }" />
          </td>
        </tr>
      </tbody>
      <tfoot v-else>
          <p 
            style="color: var(--label-color">Não há dados</p>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
    },
    data: {
      type: Array,
    },
    action: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: Boolean,
      default: false,
    },
    ordemProps: {
      type: String,
      default: "asc",
    },
    ordemColProps: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      search: "",
      ordem: "asc" || this.ordemProps,
      ordemCol: 0 || this.ordemColProps,
    };
  },
  computed: {
    filtered() {
      this.filterOrdem();
      if (this.search) {
        return this.data.filter((item) => {
          item = Object.values(item);
          for (let i = 0; i < item.length; i++) {
            if ((item[i] + "").toLowerCase().indexOf(this.search) >= 0) {
              return true;
            }
          }
          return false;
        });
      }
      return this.data;
    },
  },
  methods: {
    filterOrdem() {
      if (this.ordem === "asc") {
        this.data.sort((a, b) => {
          if (
            Object.values(a)[this.ordemCol] > Object.values(b)[this.ordemCol]
          ) {
            return 1;
          }
          if (
            Object.values(a)[this.ordemCol] < Object.values(b)[this.ordemCol]
          ) {
            return -1;
          }
          return 0;
        });
      } else {
        this.data.sort((a, b) => {
          if (
            Object.values(a)[this.ordemCol] < Object.values(b)[this.ordemCol]
          ) {
            return 1;
          }
          if (
            Object.values(a)[this.ordemCol] > Object.values(b)[this.ordemCol]
          ) {
            return -1;
          }
        });
      }
    },
    setOrdemCol(col) {
      this.ordemCol = col;
      if (this.ordem.toLowerCase() === "asc") {
        this.ordem = "desc";
      } else {
        this.ordem = "asc";
      }
    },
  },
};
</script>

<style>
.ordem-col {
  cursor: grab;
}
.table tr {
  text-align: center;
}
</style>