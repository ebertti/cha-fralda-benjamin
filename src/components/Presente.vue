<template>
  <v-card elevation="0">
    <v-img class="mb-3 rounded-0 " cover height="240px" position="left center" :src="presente.icone"></v-img>
    <span class="d-block text-body-1 secondary--text font-weight-bold mb-0">{{ presente.nome }}</span>
    <span class="d-inline-block text-body-1 title--text font-weight-bold mr-2" v-if="presente.qtd">{{ presente.qtd }}x</span>
    <span class="d-inline-block text-body-1 text--text mb-3">{{ presente.valor | moeda }}</span>
    <div class="d-flex">
      <v-btn class="flex-grow-1 title--text font-weight-bold mr-2" color="button_minus" elevation="0" @click="remover" v-if="this.presente.qtd > 0">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-btn class="flex-grow-1 title--text font-weight-bold" color="button_plus" elevation="0" @click="adicionar">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
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
    },
    remover(){
      if(this.presente.qtd !== 0){
        this.presente.qtd--
      }
    }
  }
}
</script>

<style scoped>

</style>
