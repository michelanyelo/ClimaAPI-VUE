import axios from "axios";

export default function useClima() {
    const obtenerClima = async ({ ciudad, pais }) => {
        // Importar el api
        const key = import.meta.env.VITE_API_KEY;

        try {
            // Obtener la lat, lon con axios
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`
            const { data } = await axios.get(url);
            const { lat, lon } = data[0];
            console.log(lat, lon);

            // Obtener el clima con axios

        } catch (error) {
            console.log(error);
        }
    }

    return {
        obtenerClima
    }
}