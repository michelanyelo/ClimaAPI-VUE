export default function useClima () {
    const obtenerClima = ({ciudad, pais}) => {
        console.log("Consultando...", ciudad, pais);
    }

    return{
        obtenerClima
    }
}