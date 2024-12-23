<script setup>
import { reactive, ref } from 'vue';
import AlertaComp from './AlertaComp.vue';

const busqueda = reactive({
    ciudad: '',
    pais: '',
})

const error = ref('')
const emit = defineEmits(['obtener-clima'])

const paises = [
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'CO', nombre: 'Colombia' },
    { codigo: 'CR', nombre: 'Costa Rica' },
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'PE', nombre: 'Perú' },
    { codigo: 'CL', nombre: 'Chile' }
]

const buscarClima = () => {
    if (Object.values(busqueda).includes('')) {
        error.value = 'Por favor, ingrese todos los campos'
        return
    }

    error.value = ''
    emit('obtener-clima')
}
</script>

<template>
    <form class="formulario" @submit.prevent="buscarClima">

        <AlertaComp v-if="error">{{ error }}</AlertaComp>

        <div class="campo">
            <label for="ciudad">Ciudad</label>
            <input type="text" id="ciudad" placeholder="Ciudad" v-model="busqueda.ciudad">
        </div>

        <div class="campo">
            <label for="pais">Pais</label>
            <select id="pais" v-model="busqueda.pais">
                <option value="">-- Seleccione un país --</option>
                <option v-for="pais in paises" :value="pais.codigo">{{ pais.nombre }}</option>
            </select>
        </div>

        <input type="submit" value="Consultar Clima">
    </form>
</template>

<style scoped></style>