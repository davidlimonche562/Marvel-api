const Boton = ({estilo,texto}) => {

const estilos = {
    BotonRojo: 'bg-rojo-marvel hover:bg-rojo-marvel-oscuro rounded-lg w-24 h-10 font-bebas text-lg text-white transition-colors duration-1000',
    BotonGris: 'bg-gris hover:bg-rojo-marvel rounded-lg w-24 h-10 font-bebas text-lg text-white transition-colors duration-1000'
}







    return ( <button className={estilos[estilo]}>{texto}</button> );
}
 

export default Boton;