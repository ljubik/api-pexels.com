import { createClient } from 'pexels';
import refs from './refs';
import template from '../template/item.hbs';
let key="563492ad6f91700001000001995038b408394f3792a9dfc1bc60dc2e";

const client = createClient(key);
console.log(client)
const img = document.createElement("img");
img.width = "300";
refs.gallery.append(img)

// client.photos.random().then((obh) => console.log(obj))
let quert = "moon";
client.photos.search({query, per_page: 10}).then((result) => { 
     console.log(result.photos);
     const images = result.photos.map((el) => {
         img.src = el.src.original;
         return img;
     });
     return images;
    
    }) 
//     .then((images) => {
//     refs.gallery.append(...images)
//     return refs.gallery
// })
    

    