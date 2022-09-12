import React, {useState, useEffect} from 'react';

import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const albums = [
    { id: 1, image: "https://thefaustorocksyeah.files.wordpress.com/2012/03/pinkfloyd44.jpg", category:"prog", title: "Dark Side of the Moon" },
    { id: 2, image: "http://www.johncoulthart.com/feuilleton/wp-content/uploads/2012/04/alex.jpg", category:"prog", title: "Atom Heart Mother" },
    { id: 3, image: "https://scontent.fepa10-2.fna.fbcdn.net/v/t1.18169-9/1607119_10151807569142657_1139606583_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_ohc=lW9WlyvTVS0AX95D-TT&_nc_ht=scontent.fepa10-2.fna&oh=00_AT-DBWy7Jw0EOfpaLujTeI8HOXllk4yIE_nxgyvf5UIvZQ&oe=63460281", category: "rock", title: "Stormbringer" },
    { id: 4, image: "https://i.pinimg.com/originals/eb/07/36/eb07362d29d742bf58d90b5973018ac8.png", category: "rock", title: "Who Do We Think We Are" },
    { id: 5, image: "https://64.media.tumblr.com/d6c1369cdefa9c576a1f2f1a64988002/tumblr_p6beood0T11snb6qwo1_1280.jpg", category: "prog", title: "2112" },
    { id: 6, image: "https://www.cygnus-x1.net/links/rush/images/albums/movingpictures-4.jpg", category: "prog", title: "Moving Pictures" }
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(albums);
            }, 250);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(album => album.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }


    }, [categoriaId])

    
    
    return (
        <>
            <Title greeting={texto}/>
            <div className='counter d-flex img-fluid justify-content-center mx-3 p-3'>
               <ItemList data={data}/> 
            </div>
            
        </>
    )
}

export default ItemListContainer;