<template>
	<v-footer app class="button py-0" v-if="total">
		<v-container>
			<v-row class="d-flex align-center">
				<v-col cols="3">
					<div>
						<span class="d-inline-block text-body-2 title--text font-weight-bold text-uppercase mr-2">Total</span>
						<span class="d-inline-block text-body-2 g100--text font-weight-bold">{{ total | moeda }}</span>
					</div>
				</v-col>
				<v-col cols="3">
					<v-btn class="mb-2 mb-md-0 mr-md-2 font-weight-bold" color="title" outlined @click="limparCarrinho">Esvaziar Carrinho</v-btn>
				</v-col>
				<v-col cols="3">
					<v-btn class="mb-2 mb-md-0 mr-md-2 white--text font-weight-bold" color="nubank" :href="linkNubank">Pagar com Pix</v-btn>
				</v-col>
				<v-col cols="3">
					<v-btn class="white--text font-weight-bold" color="picpay" :href="linkPicpay">Pagar com PicPay</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-footer>
</template>

<script>

</script>

<style scoped>

</style>