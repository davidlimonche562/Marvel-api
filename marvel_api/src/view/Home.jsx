import React from "react";
import Boton from "../Componentes/Boton";
const Home = () => {
    const styles = {
    main1: "relative h-[calc(100vh-100px)]",
    img: "w-full h-full",
    contenedor: "absolute inset-0 mx-auto my-auto w-4/5 h-4/5 lg:w-1/2 lg:h-2/3 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white p-4 overflow-auto" , 
    h1: "text-2xl mb-2 text-center text-blue-500", 
    p: "text-xs md:text-sm text-center mt-4 px-4",
    boton: "mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    
    main2: "bg-gray-200 grid grid-cols-1 md:grid-cols-2  place-items-center lg:flex lg:flex-row items-center lg:justify-between px-10 gap-4 p-4 lg:h-80 h-auto ",
    picture: "relative h-52 w-52 rounded-full overflow-hidden",
    img2: "h-52 w-52 rounded-full",
    parrafo: " text-center text-3xl absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 hover:text-red-600 hover:scale-110 hover:transition hover:ease-in-out hover:duration-300 hover:opacity-0",

    main3: "relative h-96",
    img3: "w-full h-full",
    h3: "text-3xl text-blue-500 text-center",
    contenedor3:
    "absolute opacity-70 w-full h-full inset-0 0 lg:opacity-95 lg:ml-auto lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-1/3  flex flex-col justify-center items-center bg-gray-800 lg:h-[110%] mr-4   text-white p-2 overflow-auto",
    parrafo3: "text-md text-center mt-4 px-4",
};


    return (
        <main >
            <div className={styles.main1}>
                <img src="https://wallpapercave.com/wp/y5qI6aT.jpg" alt="" className={styles.img} />
                <div className={styles.contenedor}>
                    <h1 className={styles.h1}>Descubre los Héroes de Marvel: ¡Conoce a tus Favoritos y Explora Nuevas Aventuras!</h1>
                    <p className={styles.p}>Sumérgete en el fascinante universo de Marvel y conoce a tus superhéroes favoritos como nunca antes. Desde los legendarios Avengers hasta los guardianes más valientes de la galaxia, descubre sus historias, poderes y las épicas batallas que definen sus destinos. Únete a nosotros para explorar nuevos héroes y revivir la emoción de los clásicos, mientras desentrañamos el legado de Marvel, un héroe a la vez. ¡Tu aventura comienza aquí!</p>
                    <button className={styles.boton}>Personajes</button>
                </div>
            </div>

            <section className={styles.main2}>
                <article className={styles.picture}>
                    <img className={styles.img2} src="https://th.bing.com/th/id/OIP.beCLCfEVOldmQGh0k0MWggHaEK?w=283&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                    <p className={styles.parrafo}>Iron Man</p>
                </article>
                <article className={styles.picture}>
                    <img className={styles.img2} src="https://th.bing.com/th/id/OIP.ZdnVCbgivDbB8L7ORzn08wHaE_?rs=1&pid=ImgDetMain" alt="" />
                    <p className={styles.parrafo}>Wonder Woman</p>
                </article>
                <article className={styles.picture}>
                    <img className={styles.img2} src="https://th.bing.com/th/id/OIP.JXANIrUffFkmk-5GIWQ6jwHaEK?w=291&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                    <p className={styles.parrafo}>Hulk</p>
                </article>
                <article className={styles.picture}>
                    <img className={styles.img2} src="https://th.bing.com/th/id/OIP.WGiVk-EIVJxonWc6KpLfsQHaEK?w=334&h=187&c=7&r=0&o=5&pid=1.7" alt="" />
                    <p className={styles.parrafo}>Captain America</p>
                </article>
                
                
            </section>

            <div className={styles.main3}>
                <img className={styles.img3}  src="https://wallpapercave.com/wp/wp3533805.jpg" alt="" />
                <div className={styles.contenedor3}>
                    <h3 className={styles.h3}>Conoce a tus Personajes favoritos</h3>
                    <p className={styles.parrafo3}>  Marvel es un universo fascinante lleno de superhéroes, villanos y aventuras épicas. Desde las películas del Universo Cinematográfico de Marvel (MCU) hasta los cómics y las series de televisión, Marvel ofrece historias emocionantes, dilemas morales y poderes sobrenaturales que han cautivado a generaciones de fans.</p>
                    <button className={styles.boton}>Personajes</button>
                </div>
            </div>
        </main>
    );
};
export default Home;