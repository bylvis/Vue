<template>
    <h1>this is global Reg</h1>
    <hello-world></hello-world>
    <jubu1></jubu1>
    <Myzujian></Myzujian>
</template>
<script>
import jubu1 from "../privateReg/jubu.vue";

export default {
  components: {
    jubu1,
    'Myzujian':jubu1,
  },
  name: "global-reg",
};
</script>