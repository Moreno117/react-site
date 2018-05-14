import React from 'react';
import './../bio.css';
import image from './../assets/jcm.jpg'

export const Bio = () => {
    return(
        <div className="container hero-bio">
            <div className="columns">
                <div className="column is-6">
                    <p className="break-bio">
                        Desde edad temprana sentí una curiosidad innata por la tecnología y como esta funcionaba, me encanta la forma en que encajan todas las piezas. No tarde mucho para creer que la tecnología para mi era como admirar una gran pieza de arte lo cual me llevo a querer <strong>“pintar”</strong> el mío.
                    </p>
                    <p className="break-bio">            
                        Desarrolle habilidades que en un principio me parecían divertidas hasta que por azares del destino, aun no recuerdo el momento en que paso, encontré una fuente de inspiración que me hizo ver el panorama mas completo.
                    </p>
                    <p className="break-bio">
                        Comencé a dedicar mas tiempo y esfuerzo, sacrifique algunas cosas, pero como dicen en Billions — una serie de Netflix — <strong>“los grandes no posponen lo importante por hacer lo urgente.”</strong> En este caso me urgía tener un gran trabajo con una gran empresa para tener un gran sueldo, sin embargo era de suma importancia probarme a mi mismo que estaba en lo correcto y que cualquier persona podía hacer grandes cosas desde una computadora y una conexión a internet. Al final obtuve un poco de las dos cosas, encontré la manera de terminar con lo urgente mientras desarrollaba lo importante. Fue así como comencé a trabajar con empresas de comunicación desarrollando proyectos tecnológicos y de software.
                    </p>

                    <p className="break-bio" style={{marginTop:'2rem'}}>
                        Siempre estoy conociendo a personas nuevas y me encanta sostener platicas de distintos temas con todas ellas; diseñadores, ingenieros, maestros, doctores, estudiantes; ya sea si tienen un proyecto, una idea o simplemente gustan de una buena charla siempre tendremos un punto en común, ambos aportamos valor a nuestra comunicación. Siempre estamos al alcance de un mensaje.
                    </p>
                </div>
                <div className="hero is-6">
                    <figure className="image is-5by4">
                        <img src={ image } alt="pi"/>
                    </figure>
                </div>
            </div>
        </div>
    )
}