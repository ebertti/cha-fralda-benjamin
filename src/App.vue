<template>
  <v-app>
    <v-app-bar app color="primary" elevation="1">
      <v-container>
        <v-toolbar-title class="texto--text">Chá de fralda da Maria Eduarda</v-toolbar-title>
      </v-container>
    </v-app-bar>
    <v-main class="primaryC">
      <v-container class="pa-4 pa-md-0">
        <h1 class="secondary2E--text mt-4">
          Sejam Bem Vindos ao Chá da Maria Eduarda!
        </h1>
        <v-row>
          <v-col md="4">
            <v-img src="photo_2020-08-08_20-38-29.jpg"></v-img>
          </v-col>
          <v-col md="8">
            <p>Olá, queridos amigos e familiares!</p>
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

          <v-col>
            <v-btn color="primary text--primary" class="ma-4">
              Vaquinha Digital
            </v-btn>

            <v-btn color="quadradoB text--white" class="ma-4">
              Comprar online e entregar em nossa casa
            </v-btn>

          </v-col>
        </v-row>

        <v-row>
          <v-col md="4" v-for="presente in presentes" :key="presente.nome">
            <presente :presente="presente"></presente>
          </v-col>
        </v-row>
          <v-btn block color="primary text--primary" class="mb-4">
            Picpay
          </v-btn>
          <v-btn block color="quadradoA text--primary" class="mb-4">
            Ame
          </v-btn>

        <v-row>
          <v-col block>
            <h3>Comprar online</h3>
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
    <v-footer app color="primary">
      <div class="col-4 font-weight-black">{{ total | moeda }}</div>
      <div class="col-3">Pagar com</div>
      <v-btn class="col-2 mr-4" color="secondaryE">Picpay</v-btn>
      <v-btn class="col-2" color="secondaryE">Ame</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import Presente from "@/components/Presente"

export default {
  name: 'App',
  components:{
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
    }
  },
}
</script>

<style>

</style>
