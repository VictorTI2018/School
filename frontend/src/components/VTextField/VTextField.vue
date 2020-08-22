<template>
  <ValidationProvider :vid="vid" :rules="rules" :name="$attrs.name" v-slot="{valid, errors}">
    <div class="input-group mb-3" v-bind="$attrs">
      <div class="input-group-prepend">
        <span class="input-group-text" :class="errors.length ? 'label-invalid': ''">
          <v-icon v-if="icon" :icon="icon" />
        </span>
      </div>
      <input
        v-bind="$attrs"
        v-model="m_value"
        :state="errors[0] ? false : (valid ? true : null)"
        class="form-control"
        :class="errors.length ? 'is-invalid' : ''"
      />
      <div class="invalid-feedback">{{ errors[0]}}</div>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider,
  },
  props: {
    vid: {
      type: String,
    },
    rules: {
      type: [Object, String],
      default: "",
    },
    value: {
      type: null,
    },
    icon: {
      type: String,
    },
  },
  data() {
    return {
      m_value: "",
    };
  },
  watch: {
    value(val) {
      this.m_value = val;
    },
    m_value(val) {
      this.$emit("input", val);
    },
  },

  mounted() {
    this.m_value = this.value;
  },
};
</script>

<style>
.label-invalid {
    border: 1px solid #dc3545;
    color: #dc3545;
}
</style>