<template>
  <div class="page-container">
    <div class="d-flex">
      <div >
          <v-icon v-if="icon" :icon="icon" class="icon mr-2" />
      </div>
      <div class="title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      icon: "",
    };
  },
  watch: {
    $route() {
      this.title = this.$route.meta.title;
      this.icon = this.$route.meta.icon;
    },
  },
  mounted() {
    this.title = this.$route.meta.title;
    this.icon = this.$route.meta.icon;
  },
};
</script>

<style>
.page-container {
  height: 40px;
  border-bottom: 3px solid var(--label-color);
  display: flex;
  align-items: center;
  padding: 0 7px;
}

.title {
  color: var(--label-color);
  font-weight: bold;
}

.icon {
  color: var(--label-color);
}
</style>