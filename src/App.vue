<template>
  <v-app>
    <v-app-bar app color="primary" elevation="1" fixed>
      <v-container>
        <v-toolbar-title class="texto--text">Bem Vindos ao Chá da Maria Eduarda!</v-toolbar-title>
      </v-container>
    </v-app-bar>
    <v-main class="primaryC">
      <v-container class="pa-4 pa-md-0">
        <v-row>
          <v-col md="4">
            <v-img src="photo_2020-08-08_20-38-29.jpg" class="col-12"></v-img>
          </v-col>
          <v-col md="8">
            <p class="text-h4">Olá, queridos amigos e familiares!</p>
            <p>Essa longa quarentena pegou todos de surpresa, fazendo com que tivéssemos que nos adaptar e nos
              reinventar. Maria Eduarda está crescendo e se desenvolvendo a cada dia.</p>
            <p>Gostaríamos muito de receber todos em uma festinha e celebrar esse momento tão lindo, mas com tudo o
              que
              está acontecendo no mundo, isso não será possível, e a nossa festinha precisou ser cancelada.</p>

            <p>Por isso, criamos esse site para interagir com nossos amigos e familiares.</p>
            <p>Aqui vocês poderão nos presentear com fraldas virtuais de forma prática e segura. Pensamos em opções
              diversas, para facilitar a vida de todos.</p>
            <p>Ah...e não esqueça de deixar seu recadinho via WhatsApp ❤️</p>
            <p>Agradecemos o carinho de coração</p>

            <p class="text-right font-italic">Amanda, João Pedro e Maria Eduarda</p>

          </v-col>

        </v-row>
        <div class="secondaryC" style="margin: -20px;padding: 20px;">
          <v-row>
            <v-col cols="12">
              <h2 class="secondary2E--text text-center">
                Lojinha da Maria Eduarda
              </h2>
            </v-col>
            <v-col md="4" v-for="presente in presentes" :key="presente.nome">
              <presente :presente="presente"></presente>
            </v-col>
          </v-row>
          <v-btn block v-if="total" color="accent" @click="limparCarrinho">
            <v-icon class="mr-2">mdi-baby-carriage-off</v-icon>
            Limpar Carrinho
          </v-btn>
        </div>

        <v-row>
          <v-col block>
            <h3 class="secondary2E--text text-center my-4">Outras lojas</h3>
            <v-btn block color="quadradoC text--primary" class="mb-4">
              Amazon
            </v-btn>
            <v-btn block color="quadradoA text--primary" class="mb-4">
              Americanas
            </v-btn>
            <v-btn block color="quadradoE text--primary" class="mb-4">
              Magazine Luiza
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app color="primary" v-if="total">
      <span class="font-weight-black">{{ total | moeda }}</span>
      <v-spacer></v-spacer>
      <div>
        <span>pagar com</span>
        <v-btn class="mx-4" color="secondaryE" :href="linkPicpay">Picpay</v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Presente from "@/components/Presente"

export default {
  name: 'App',
  components: {
    Presente
  },
  data: () => ({
    presentes: [
      {nome: 'Fraldas', icone: 'fralda.jpg', qtd: 0, valor: 35},
      {nome: 'Lenços', icone: 'lenco.jpg', qtd: 0, valor: 12},
      {nome: 'Pomada', icone: 'pomada.jpg', qtd: 0, valor: 5},
    ],
  }),

  computed: {
    total() {
      return this.presentes.reduce((a, i) => a + (i.qtd * i.valor), 0)
    },
    linkPicpay(){
      return `https://picpay.me/jpedrojpedro/${this.total}`
    }
  },

  methods: {
    limparCarrinho(){
      this.presentes.forEach((i) => i.qtd = 0)
    }
  }
}
</script>

<style>

</style>
