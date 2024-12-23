<script setup>
import FormularioComp from './components/FormularioComp.vue';
import useClima from './composables/useClima';

const { obtenerClima } = useClima();
</script>

<template>
  <h1 class="titulo">Buscador de CLima</h1>

  <div class="contenedor buscador-clima">
    <FormularioComp @obtener-clima="obtenerClima"/>
  </div>

</template>

<style scoped></style>
