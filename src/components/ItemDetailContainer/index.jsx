import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';

const albums = [
    {   id: 1, 
        image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png", 
        category:"prog", title: "Dark Side of the Moon", 
        price: 300, 
        description: "The Dark Side of the Moon —en español: El lado oscuro de la luna— es un álbum conceptual, el octavo de estudio del grupo musical británica de rock progresivo Pink Floyd. Fue lanzado el 1 de marzo de 1973 en los Estados Unidos y el 24 de marzo del mismo año en el Reino Unido."
    },
    {   id: 2, 
        image: "https://upload.wikimedia.org/wikipedia/en/2/2e/AtomHeartMotherCover.jpeg", 
        category:"prog", 
        price: 300, 
        title: "Atom Heart Mother", 
        description: "Atom Heart Mother - en español Madre De Corazón Atómico - es el quinto álbum de estudio del grupo británico Pink Floyd. Fue lanzado el 2 de octubre de 1970. Es un trabajo de transición, ya que el grupo empieza a alejarse del rock psicodélico para entrar en el sinfónico y progresivo."
    },
    {   id: 3, 
        image: "https://upload.wikimedia.org/wikipedia/en/1/1f/DeepPurpleStormbringer.jpg", 
        category: "rock", 
        price: 300, 
        title: "Stormbringer", 
        description: "Stormbringer es el noveno álbum de estudio de la banda británica de hard rock Deep Purple, publicado en noviembre de 1974. En esta obra se explora el funk y el soul de un modo más amplio que en Burn."
    },
    {   id: 4, 
        image: "https://upload.wikimedia.org/wikipedia/en/7/75/DeepPurple_WhoDoWeThinkWeAre.jpg", 
        category: "rock", 
        price: 300, 
        title: "Who Do We Think We Are", 
        description: "Who Do We Think We Are? —en español: Quién Nos Creemos Que Somos?— es el séptimo álbum de estudio de la banda británica de hard rock Deep Purple, grabado en Frankfurt y Roma en el estudio móvil de los Rolling Stones entre julio y octubre de 1972."
    },
    {   id: 5, 
        image: "https://upload.wikimedia.org/wikipedia/en/c/c9/Rush_2112.jpg", 
        category: "prog", 
        price: 300, 
        title: "2112", 
        description: "2112 es el título del cuarto álbum grabado en estudio por la banda canadiense de rock Rush, lanzado el 1 de abril de 1976. El álbum comienza con la suite de veinte minutos 2112, pero no es un álbum conceptual; las letras de las demás canciones no tienen relación con la historia del tema titular."
    },
    {   id: 6, 
        image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Moving_Pictures.jpg", 
        category: "prog", 
        price: 300, 
        title: "Moving Pictures", 
        description: "Moving Pictures - En español: Imágenes en movimiento- es el título del octavo álbum de estudio de la banda canadiense de rock Rush, lanzado el 12 de febrero de 1981, siendo editado posteriormente en edición limitada en algunos países de Hispanoamérica. Este álbum es a la fecha el más popular y exitoso de Rush."
    }
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(albums);
            }, 250);
        });

        getData.then(res => setData(res.find(album => album.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;