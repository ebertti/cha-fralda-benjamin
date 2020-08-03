<template>
  <v-app id="inspire">
    <v-app-bar app color="principal" elevation="1">
      <v-toolbar-title class="analogoD_escuro--text">Chá de fralda da Maria Eduarda</v-toolbar-title>
    </v-app-bar>
    <v-main class="analogoA">
      <v-container>
        <v-row>
          <v-col block>
            <div style="border: dashed 5px white" class="pa-2">
              <h1 class="analogoD--text">
                Sejam Bem Vindos ao Chá da Maria Eduarda!
              </h1>

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

              <p class="text-right">Amanda, João Pedro e Maria Eduarda</p>

            </div>
          </v-col>
        </v-row>
        <h3>como presentear</h3>

        <v-btn block color="primary text--primary" class="mb-4">
          Vaquinha Digital
        </v-btn>

        <v-btn block color="quadradoB text--white" class="mb-4">
          Comprar online e entregar em nossa casa
        </v-btn>

        <v-row>
          <v-col block>
            <h3>Vaquinha Digital</h3>

            <h3>{{ total }}</h3>

            <v-btn @click="mais">+</v-btn>
            <v-btn @click="menos">-</v-btn>
            <v-btn block color="primary text--primary" class="mb-4">
              Picpay
            </v-btn>
            <v-btn block color="quadradoA text--primary" class="mb-4">
              Ame
            </v-btn>
          </v-col>
        </v-row>

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
    <v-footer app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    pacotes: 1,
    valor: 30
  }),

  computed: {
    total() {
      return this.pacotes * this.valor
    }
  },

  methods: {
    mais() {
      this.pacotes++
    },
    menos() {
      if (this.pacotes > 1) {
        this.pacotes--

      }
    }
  }
}
</script>

<style>

</style>
