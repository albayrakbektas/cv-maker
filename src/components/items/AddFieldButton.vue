<template>
  <SpanIcon
    :button="button"
    :button-style="buttonStyle"
    :span-style="spanStyle"
    :icon-style="iconStyle"
    @button-handler="addNewCustomField"
  />
</template>

<script>
import SpanIcon from "@/components/button/SpanIcon";
import { addCustomFields, getCustomFields } from "@/firebaseMethods";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddFieldButton",
  components: { SpanIcon },
  props: {
    button: Object,
  },
  async mounted() {
    // await getCustomFields();
  },
  methods: {
    async addNewCustomField() {
      const id = uuidv4();
      await addCustomFields(
        this.$store.state.user.uid,
        this.$route.params.id,
        id,
        {
          id,
          title: "",
          content: "",
        }
      );
      let x = await getCustomFields(
        this.$store.state.user.uid,
        this.$route.params.id
      );
      console.log(x);
    },
  },
  data() {
    return {
      iconStyle: {},
      spanStyle: {},
      buttonStyle: {},
    };
  },
};
</script>

<style scoped lang="scss"></style>
