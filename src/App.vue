<template>
  <v-app>
    <v-main class="white py-15">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" sm="6" class="mb-5 mb-sm-0">
            <span class="d-block text-h2 title--text mb-5">Oi gente,<br />eu sou a Mari!</span>
            <span class="d-block text-subtitle-1 text--text mb-5">Se você chegou até aqui, é porque a mamãe ou o papai mandou esse site pra você. Então chega de papo mole e vamos ao que interessa: presentes!</span>
            <a class="d-block text-button title--text font-weight-bold text-uppercase mb-0" href="">Veja Minha Listinha Abaixo</a>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img class="mx-auto" src="mariana.png" max-width="320px"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    
    <v-main class="background py-15">
      <v-container>
        <v-row>
          <v-col cols="12">
            <span class="d-block text-h4 title--text text-center mb-5">Pera, peraí!</span>
          </v-col>
        </v-row>  
        <v-row class="d-flex align-stretch">
          <v-col cols="12" sm="6" class="d-flex align-stretch">
            <div class="white pa-10">
              <span class="d-block text-h6 nubank--text mb-5">Pagamento em Pix</span>
              <span class="d-block text-body-2 text--text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat imperdiet.</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6" class="d-flex align-stretch">
            <div class="white pa-10">
              <span class="d-block text-h6 picpay--text mb-5">Pagamento em Cartão de Crédito (via PicPay)</span>
              <span class="d-block text-body-2 text--text mb-0">Para pagamento no cartão de crédito, será necessário o app PicPay. Se você ainda não tem, pode baixar clicando <a class="text-body-2 title--text font-weight-bold text-uppercase" href="http://www.picpay.com/convite?R8YQYM" target="_blank">AQUI</a>. Basta seguir o passo-a-passo e criar sua conta. Baixando por este link você ainda ganha R$ 10,00 de desconto na primeira compra que fizer pelo app.</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-main class="white py-15">
      <v-container>
        <v-row>
          <v-col cols="12">
            <span class="d-block text-h4 title--text text-center mb-5">Minha Listinha</span>
          </v-col>
        </v-row>  

        <v-row>
          <v-col cols="12" sm="4" md="3" class="mb-5" v-for="presente in presentes" :key="presente.nome">
            <presente :presente="presente"></presente>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-main height="220px">
    </v-main>

    <v-footer app class="button py-0" v-if="total">
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex flex-column flex-sm-row">
            <div class="flex-grow-1 white px-4 mb-3 mb-sm-0 mr-sm-2 rounded text-center">
              <span class="d-inline-block text-button title--text font-weight-bold text-uppercase mr-2">Subtotal</span>
              <span class="d-inline-block text-button g100--text font-weight-bold">{{ total | moeda }}</span>
            </div>
            <v-btn class="mb-2 mb-md-0 mr-md-2 font-weight-bold" color="secondary" outlined elevation="0" @click="limparCarrinho">Esvaziar Carrinho</v-btn>
            <v-btn class="mb-2 mb-md-0 mr-md-2 white--text font-weight-bold" color="nubank" elevation="0" :href="linkNubank" target="_blank">Fazer um Pix</v-btn>
            <v-btn class="white--text font-weight-bold" color="picpay" elevation="0" :href="linkPicpay" target="_blank">Pagar com PicPay</v-btn>
          </v-col>
        </v-row>
      </v-container>
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
      {nome: 'Fraldas RN MamyPoko', icone: 'fraldasrnmamypoko.jpg', qtd: 0, valor: 29.90},
      {nome: 'Panos de Boca', icone: 'paninhodeboca.jpg', qtd: 0, valor: 29.90},
      {nome: 'Bolsa para Cólicas', icone: 'bolsaparacolicas.jpg', qtd: 0, valor: 29.90},
      {nome: 'Saquinho Maternidade', icone: 'saquinhomaternidade.jpg', qtd: 0, valor: 29.90},
      {nome: 'Fraldas RN Pampers', icone: 'fraldasrnpampers.jpg', qtd: 0, valor: 39.90},
      {nome: 'Fraldas de Pano', icone: 'fraldasdepano.jpg', qtd: 0, valor: 39.90},
      {nome: 'Xô Febre', icone: 'xofebre.jpg', qtd: 0, valor: 39.90},
      {nome: 'Óleo de Massagem', icone: 'oleodemassagem.jpg', qtd: 0, valor: 44.90},
      {nome: 'Toalha de Banho', icone: 'toalhadebanho.jpg', qtd: 0, valor: 49.90},
      {nome: 'Cueiro (3 unidades)', icone: 'cueiro.jpg', qtd: 0, valor: 49.90},
      {nome: 'Repelente Eletrônico', icone: 'repelenteeletronico.jpg', qtd: 0, valor: 49.90},
      {nome: 'Kit Cuidados', icone: 'kitcuidados.jpg', qtd: 0, valor: 49.90},
      {nome: 'Sabonete Líquido', icone: 'saboneteliquido.jpg', qtd: 0, valor: 54.90},
      {nome: 'Rede de Banho', icone: 'rededebanho.jpg', qtd: 0, valor: 54.90},
      {nome: 'Fraldas P Pampers', icone: 'fraldasppampers.jpg', qtd: 0, valor: 59.90},
      {nome: 'Fraldas M Pampers', icone: 'fraldasmpampers.jpg', qtd: 0, valor: 59.90},
      {nome: 'Fraldas G Pampers', icone: 'fraldasgpampers.jpg', qtd: 0, valor: 59.90},
      {nome: 'Trocador Portátil', icone: 'trocadorportatil.jpg', qtd: 0, valor: 59.90},
      {nome: 'Kit Meias (6 pares)', icone: 'kitmeias.jpg', qtd: 0, valor: 79.90},
      {nome: 'Copo para Leite (10 unidades)', icone: 'copoparaleite.jpg', qtd: 0, valor: 109.90},
      {nome: 'Moisés Safety 1st Bege', icone: 'moises.jpg', qtd: 0, valor: 599.00},
      {nome: 'Bitcoin de Natal', icone: 'bitcoin.jpg', qtd: 0, valor: 1000.00},
    ],
  }),

  computed: {
    total() {
      return this.presentes.reduce((a, i) => a + (i.qtd * i.valor), 0)
    },
    linkNubank() {
      return `https://nubank.com.br/pagar/vry3/fAfSIcdA1X`
    },
    linkPicpay() {
      return `https://picpay.me/felipesotello/${this.total}`
    },
  },

  methods: {
    limparCarrinho() {
      this.presentes.forEach((i) => i.qtd = 0)
    },
  }
}
</script>

<style></style>
