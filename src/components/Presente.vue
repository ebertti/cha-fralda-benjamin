<template>
  <v-card class="pa-2">
    <v-img class="ma-2" contain :src="presente.icone" height="250px"></v-img>
    <h3 class="mx-2 mt-2">{{ presente.nome }}</h3>
    <v-card-actions >
      <div>
        <span v-if="presente.qtd"  class="mr-1 font-weight-bold">{{ presente.qtd }}x</span>
        {{ presente.valor | moeda }}
      </div>
      <v-spacer></v-spacer>
      <v-btn color="accent" @click="adicionar">
        <v-icon class="mr-2">mdi-basket-plus</v-icon>
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
