<template>
  <v-app>
    <v-app-bar app color="primary" elevation="1" fixed>
      <v-container>
        <v-toolbar-title class="mx-n2">
          <v-icon class="mr-2">mdi-heart-outline</v-icon>
          Chá de Fraldas do Benjamin
        </v-toolbar-title>

      </v-container>
    </v-app-bar>
    <v-main class="primaryC">
      <v-container class="pa-4 pa-md-0">
        <v-row>
          <v-col md="4">
            <v-img class="rounded-lg elevation-3" src="photo_2020-08-16_19.16.13.jpg" max-width="100%"></v-img>
          </v-col>
          <v-col md="8">
            <p class="text-h4">Olá, queridos amigos e familiares!</p>
            <p>
              Essa longa quarentena pegou todos de surpresa, fazendo com que tivéssemos que nos adaptar e nos
              reinventar. Benjamin está crescendo e se desenvolvendo a cada dia.
            </p>
            <p>
              Gostaríamos muito de receber todos para celebração desse momento tão lindo! Porém, com tudo o
              que está acontecendo, isso não será possível e a nossa festinha precisou ser cancelada. Com isso,
              pensamos em criar esse site para interagir com nossos amigos e familiares.
            </p>
            <p>
              Aqui vocês poderão nos presentear com fraldas, lenços e sabonetes de forma prática e segura. Pensamos
              em opções diversas para facilitar a vida de todos. Quem optar em comprar direto na <b>Lojinha Virtual do
              Benjamin</b>, utilizará a conta do PicPay para realizar o pagamento. Já quem optar em comprar via
              <i>e-commerce</i>, tem uma listinha aqui embaixo com sugestões de presentes 👇🏻
            </p>
            <ul>
              <li>Fraldas Pampers Premium Care - P / M / G</li>
              <li>Lenços Umedecidos Pampers Recém-Nascido</li>
              <li>Sabonete Líquido Glicerinado Granado Bebê</li>
              <li>Creme Preventivo de Assaduras Creamy Aloe Desitin</li>
              <li>Creme de Assadura Vitaminado Preventivo 123 Mustela Bebê</li>
            </ul>
            <br/>
            <p>Ah! Não se esqueça de deixar um recadinho via WhatsApp ❤️</p>
            <p>Agradecemos o carinho de coração!</p>

            <p class="text-right">Yamila, Rodrigo e Benjamin</p>
          </v-col>
        </v-row>
        <div class="secondaryC" style="margin: -16px; margin-top:10px; padding: 20px;">
          <v-row>
            <v-col cols="12">
              <v-alert icon="mdi-human-baby-changing-table" color="primary">
                <h3>
                  Lojinha Virtual do Benjamin
                </h3>
                <span>COM FRETE GRÁTIS!</span>
              </v-alert>
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

        <v-row class="mt-10">
          <v-col block>
            <v-alert icon="mdi-help-circle" color="primary">
              <h3>
                Dúvidas
              </h3>
            </v-alert>
            <h2 class="secondary2E--text text-center my-4"></h2>
            <p>
              <span class="font-weight-bold d-block">
                Preciso ter PicPay para comprar na Lojinha da Benjamin?
              </span>
              Sim. Caso não tenha, <a href="http://www.picpay.com/convite?1ET1SZ" target="_blank">(clique aqui)</a> e
              siga o passo a passo. Vale dizer que ao efetuar a primeira compra, ganha-se R$ 10,00.
            </p>
<!--            <p>-->
<!--              <span class="font-weight-bold d-block">-->
<!--                Tem lista de presentes em sites conhecidos?-->
<!--              </span>-->
<!--              Sim. Fizemos uma lista de presentes na Amazon-->
<!--              <a href="https://amzn.to/3h64i5h" target="_blank">(clique aqui)</a>.-->
<!--            </p>-->
            <p>
              <span class="font-weight-bold d-block">
                Quero enviar os presentes direto para vocês. Como faço?
              </span>
              Pode deixar aqui em casa 🙂
              Envie uma mensagem <a href="https://bit.ly/34jyVzr" target="_blank">(clique aqui)</a> e passamos os
              detalhes.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app color="primary" v-if="total">
      <span class="font-weight-black">{{ total | moeda }}</span>
      <v-spacer></v-spacer>
      <div>
        <v-btn class="mx-4" color="secondaryE" :href="linkPicpay">pagar com Picpay</v-btn>
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
      {nome: 'Fraldas', icone: 'fralda-p.jpg', qtd: 0, valor: 49.99},
      {nome: 'Fraldas', icone: 'fralda-m.jpg', qtd: 0, valor: 49.99},
      {nome: 'Fraldas', icone: 'fralda-g.jpg', qtd: 0, valor: 49.99},
      {nome: 'Lenços', icone: 'lenco.jpg', qtd: 0, valor: 11.99},
      {nome: 'Pomada', icone: 'pomada.jpg', qtd: 0, valor: 29.99},
      {nome: 'Sabonete Líquido', icone: 'sabonete.jpg', qtd: 0, valor: 13.59},
    ],
  }),

  computed: {
    total() {
      return this.presentes.reduce((a, i) => a + (i.qtd * i.valor), 0)
    },
    linkPicpay() {
      return `https://picpay.me/rodrigo.sobral12/${this.total}`
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
