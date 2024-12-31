import axios from "axios";
import { ref, computed } from "vue";

export default function useClima() {

    const clima = ref({});
    const cargando = ref(false);
    const error = ref('');

    const obtenerClima = async ({ ciudad, pais }) => {
        // Spinner
        cargando.value = true;
        clima.value = {};
        error.value = '';


        // Importar el api
        const key = import.meta.env.VITE_API_KEY;

        try {
            // Obtener la lat, lon con axios
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`
            const { data } = await axios.get(url);
            const { lat, lon } = data[0];

            // Obtener el clima con axios
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            const { data: climaApi } = await axios.get(urlClima);
            clima.value = climaApi;

        } catch {
            error.value = 'Ciudad no encontrada';
        } finally {
            // Spinner
            cargando.value = false;
        }
    }

    const mostrarClima = computed(() => {
        return clima.value.main ? true : false;
    });

    const formatearTemperatura = temp => parseInt(temp - 273.15);

    return {
        obtenerClima,
        clima,
        mostrarClima,
        formatearTemperatura,
        cargando,
        error

    }
}