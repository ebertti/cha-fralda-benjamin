<template>
	<v-card-actions class="d-flex">
		<!-- <v-spacer></v-spacer> -->
		<v-btn class="title--text" color="button" elevation="0" @click="remover" v-if="this.presente.qtd > 0">
			<!-- <v-icon>mdi-minus</v-icon> -->
			Remover
		</v-btn>
        <v-btn class="title--text" color="button" elevation="0" @click="adicionar">
			<!-- <v-icon>mdi-plus</v-icon> -->
			Adicionar
		</v-btn>
	</v-card-actions>
</template>

<script>

</script>

<style scoped>

</style>
