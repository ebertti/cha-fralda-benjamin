<template>
  <v-card title>
    <v-img :src="presente.icone">
    {{ presente.nome }}

    </v-img>
    <v-card-actions >
      <v-btn block color="secondary2E" @click="adicionar">
        adicionar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Presente",
  props: {
    presente: Object
  },
  methods: {
    adicionar(){
      this.presente.qtd++
    }
  }
}
</script>

<style scoped>

</style>
