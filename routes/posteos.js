const express = require('express')
const router = express.Router();

let post = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://i.pinimg.com/originals/a4/60/4d/a4604dd467651bb6959fda25779f232e.jpg"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/awoA3j1_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aZ77MRz_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://images3.memedroid.com/images/UPLOADED7/5a799c800b2db.jpeg"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aDg1rD9_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://images7.memedroid.com/images/UPLOADED619/5c2c25679cd72.jpeg"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aXjj5Yd_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/an54A30_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/ao5M0yg_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aBgmjXN_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "url": "https://via.placeholder.com/600/1ee8a4",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aQ1d0Ee_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "url": "https://via.placeholder.com/600/66b7d2",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aN0A5B4_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 13,
        "title": "repudiandae iusto deleniti rerum",
        "url": "https://via.placeholder.com/600/197d29",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aBgnRbO_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 14,
        "title": "est necessitatibus architecto ut laborum",
        "url": "https://via.placeholder.com/600/61a65",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/avooLyb_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 15,
        "title": "harum dicta similique quis dolore earum ex qui",
        "url": "https://via.placeholder.com/600/f9cee5",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/ae5r78b_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 16,
        "title": "harum dicta similique quis dolore earum ex qui",
        "url": "https://via.placeholder.com/600/f9cee5",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aGg12q0_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 17,
        "title": "harum dicta similique quis dolore earum ex qui",
        "url": "https://via.placeholder.com/600/f9cee5",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/ae5r78b_460swp.webp"
    }, {
        "albumId": 1,
        "id": 18,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://i.pinimg.com/originals/a4/60/4d/a4604dd467651bb6959fda25779f232e.jpg"
    },
    {
        "albumId": 1,
        "id": 19,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/awoA3j1_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 20,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aZ77MRz_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 21,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://images3.memedroid.com/images/UPLOADED7/5a799c800b2db.jpeg"
    },
    {
        "albumId": 1,
        "id": 22,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aDg1rD9_460swp.webp"
    },
    {
        "albumId": 1,
        "id": 23,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://images7.memedroid.com/images/UPLOADED619/5c2c25679cd72.jpeg"
    },
    {
        "albumId": 1,
        "id": 24,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://img-9gag-fun.9cache.com/photo/aXjj5Yd_460swp.webp"
    }

]

// quiero que del array post[] los 10 primeros
router.get('/top10', (req, res) => {
    res.send(post.slice(0, 10));
})

// params
// quiero que me devuelva (get) un solo post
router.get('/one/:id', (req, res) => {
    const id = req.params.id;
    console.log('id:', id);
    if (id) {
        const postOne = post.find((item) => {
            return item.id == id
        })
        if (postOne) {
            res.send(postOne)
        } else {
            res.status(404).send('POST no Encontrado')
        }
    }
})

// query
// subir a un branch nuevo 
router.get('/', (req, res) => {
    let cant = parseInt(req.query.cant)
    let desde = parseInt(req.query.desde)
    res.send({
        results: post.slice(desde, desde + cant),
        totalPost: post.length
    })
})

module.exports = router;