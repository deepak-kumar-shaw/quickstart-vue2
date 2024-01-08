<template>
  <div>
    <v-btn>{{ label }}</v-btn>
  </div>
</template>
<script>
export default {
  name: "ck-box",
  components: {},
  mounted: function () {},
  beforeDestroy() {},
  props: {
    label: { type: String, default: "Btn" },
  },
  data() {
    return {};
  },
  watch: {},
  methods: {},
  computed: {},
};
</script>
<style scoped></style>
