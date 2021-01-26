const formulario = document.querySelector('#formulario')
const listaproductos = document.querySelector('#lista-productos')
formulario.addEventListener('submit', filtrarProductos )

function filtrarProductos(e) {
    e.preventDefault();
   
    const busqueda = document.querySelector('#buscador').value
    
    /*limpiar el listado de productos*/
    listaProductos.innerHTML = ''

  
   
   const resultado = stockProductos.filter(producto => producto.marca.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))
    
    

    resultado.forEach((producto, index) => {
        const {imagen, marca, descripcion, id} = producto
        
        const liCard = document.createElement('li')
        
        liCard.innerHTML = `
                    <div class="card-deck" style="width: 240">
                    <div class="card">
                    <img src=${imagen} class="card-img-top" alt="picador atomic metal glinder de 4 partes">
                    <div class="card-body">
                    <h5 class="card-title marca">${marca}</h5>
                    <p class="card-text descripcion">${descripcion}</p>
                    <button type="button" class="btn btn-outline-secondary agregar-carrito" data-id=${id}>Agregar al Carrito</button>
                    </div>
                    </div>
                    
                    
                    
                    `
        
        
        if (index % 3 ==0) {
            const ul = document.createElement('ul')
            ul.classList.add('ul-cards', 'd-inline-flex')
            listaProductos.appendChild(ul)                 
            ul.appendChild(liCard)

        }else{
            const uls = document.querySelectorAll('#lista-productos .ul-cards')         
            const ul = uls[uls.length - 1]            
            ul.appendChild(liCard)
        }
    })   
    


}

const stockProductos = [
    
    {//PICADORES
        imagen:"Productos/picadores/picador-4partes-6colores.jpg",
        marca:"Atomic",
        descripcion:"Metal 4 partes",
        id:1,
    },
    {
        imagen:"Productos/picadores/picador-alunminio-4partes.jpg",
        marca:"Atomic",
        descripcion:"Alunminio 4 Partes",
        id:2,
    },
    {
        imagen:"Productos/picadores/picador-antique-40mm.jpg",
        marca:"Atomic",
        descripcion:"Metal 3 partes",
        id:3,
    },
    {
        imagen:"Productos/picadores/picador-metal52mm.jpg",
        marca:"Atomic",
        descripcion:"Metal Grande",
        id:4,
    },
    {
        imagen:"Productos/picadores/picador-metalskull3d50mm.jpg",
        marca:"Atomic",
        descripcion:"Calavera",
        id:5,
    },
    {
        imagen:"Productos/picadores/picador-plastico3partes.jpg",
        marca:"Atomic",
        descripcion:"Plastico 3 partes",
        id:6,
    },
    {
        imagen:"Productos/picadores/picador-plastico4partes.jpg",
        marca:"Atomic",
        descripcion:"Plastico 4 Partes",
        id:7,
    },
    {
        imagen:"Productos/picadores/picador-plasticochico.jpg",
        marca:"Atomic",
        descripcion:"Plastico Chico",
        id:8,
    },
    {
        imagen:"Productos/picadores/picador-4partes-surtidos.jpg",
        marca:"Glinder",
        descripcion:"Plastico",
        id:9,
    },
   //PIPA
    {
        imagen:"Productos/pipas/pipa-argentopremiun.jpg",
        marca:"Argento",
        descripcion:"Premium",
        id:10,
    },
    {
        imagen:"Productos/pipas/pipa-maderaeconomica.jpg",
        marca:"Argento",
        descripcion:"Madera",
        id:11,
    },
    {
        imagen:"Productos/pipas/pipa-raizbaby.png",
        marca:"Raiz",
        descripcion:"Baby",
        id:12,
    },
    {
        imagen:"Productos/pipas/pipa-raizchicalabrada.jpg",
        marca:"Raiz",
        descripcion:"Chica Labrada",
        id:13,
    },
    {
        imagen:"Productos/pipas/pipa-raizgramdelisa9mmmate.jpg",
        marca:"Raiz",
        descripcion:"Grande Lisa",
        id:14,
    },
    {
        imagen:"Productos/pipas/pipa-raizgrandeboquillaacrilico.jpg",
        marca:"Raiz",
        descripcion:"Boquilla Acrilico",
        id:15,
    },
    {
        imagen:"Productos/pipas/pipa-raizgrandesemilabrada.jpg",
        marca:"Raiz",
        descripcion:"Semi Labrada",
        id:16,
    },
    {
        imagen:"Productos/pipas/pipa-raizlecturamolina.jpg",
        marca:"Raiz",
        descripcion:"Lectura Molina",
        id:17,
    },
    {
        imagen:"Productos/pipas/pipa-raizmedianalabrada.jpg",
        marca:"Raiz",
        descripcion:"Media Labrada",
        id:18,
    },
    //bongs
    {
        imagen:"Productos/bongs/bong-acrilico-peace&spider-coloressurtidos.jpg",
        marca:"Mini Acrilico",
        descripcion:"Varios Colores",
        id:19,
    },
    {
        imagen:"Productos/bongs/bong-mini-surtido.jpg",
        marca:"Mini Acrilico",
        descripcion:"Varios Colores",
        id:20,
    },
    {
        imagen:"Productos/bongs/bong-vidrio-25cm.jpg",
        marca:"Vidrio",
        descripcion:"Negro",
        id:21,
    },
    {//maquina para armar
        imagen:"Productos/maquinaparmar/maquina-atomic.jpg",
        marca:"Atomic",
        descripcion:"Varios Colores",
        id:22,
    },
    {
        imagen:"Productos/maquinaparmar/maquina-gizeh.jpg",
        marca:"Gizeh",
        descripcion:"Blanco",
        id:23,
    },
    {
        imagen:"Productos/maquinaparmar/maquina-ocbmetalica.jpg",
        marca:"Ocb",
        descripcion:"Metalico",
        id:24,
    },
    {
        imagen:"Productos/maquinaparmar/maquina-ocbplastica.jpg" ,
        marca:"Ocb",
        descripcion:"Plastico",
        id:25,
    },
    {
        imagen:"Productos/maquinaparmar/maquina-standartgoma.jpg",
        marca:"Rolling",
        descripcion:"Goma",
        id:26,
    },
    {
        imagen:"Productos/maquinaparmar/maquina-tonking.jpg" ,
        marca:"Tonking",
        descripcion:"Plastico",
        id:27,
    },
    {// Filtros
        imagen:"Productos/filtros/filtro-gizcarb.jpg" ,
        marca:"Gizeh",
        descripcion:"Charcoal",
        id:28,
    },
    {
        imagen:"Productos/filtros/filtro-gizehslim.jpg",
        marca:"Gizeh",
        descripcion:"Slim",
        id:29,
    },
    {
        imagen:"Productos/filtros/filtro-gizehtubosilver.jpg",
        marca:"Gizeh",
        descripcion:"Silver",
        id:30,
    },
    {
        imagen:"Productos/filtros/filtro-gizexslim.jpg",
        marca:"Gizeh",
        descripcion:"X Slim",
        id:31,
    },
    {
        imagen:"Productos/filtros/filtro-gizreg.jpg",
        marca:"Gizeh",
        descripcion:"Regular",
        id:32,
    },
    {
        imagen:"Productos/filtros/filtro-gizslim.jpg",
        marca:"Gizeh",
        descripcion:"Charcoal Slim",
        id:33,
    },
    {
        imagen:"Productos/filtros/filtro-libeliaextraslim.jpg",
        marca:"Libelia",
        descripcion:"Extra Slim",
        id:34,
    },
    {
        imagen:"Productos/filtros/filtro-libeliahavana.jpg",
        marca:"Libelia",
        descripcion:"Havanna",
        id:35,
    },
    {
        imagen:"Productos/filtros/filtro-libeliaregular.jpg",
        marca:"Libelia",
        descripcion:"Regular",
        id:36,
    },
    {
        imagen:"Productos/filtros/filtro-libeliaslim.jpg",
        marca:"Libelia",
        descripcion:"Slim",
        id:37,
    },
    {
        imagen:"Productos/filtros/filtro-libeliaslimlong.jpg",
        marca:"Libelia",
        descripcion:"Slim Long",
        id:38,
    },
    {
        imagen:"Productos/filtros/filtro-libeliaslimmint.jpg",
        marca:"Libelias",
        descripcion:"Slim Mint",
        id:39,               
    },
    {
        imagen:"Productos/filtros/filtro-ocbregular.jpg",
        marca:"Ocb",
        descripcion:"Regular",
        id:40,
    },
    {
        imagen:"Productos/filtros/filtro-ocbslim.jpg",
        marca:"Ocb",
        descripcion:"Slim",
        id:41,
    },
    {
        imagen:"Productos/filtros/filtro-ocbslimeco.jpg",
        marca:"Ocb",
        descripcion:"Slim Organico",
        id:42,
    },
    {
        //Encendedores
        imagen:"Productos/Encendedores/encendedor-cadela-plastico.jpg" ,
        marca:"Candela",
        descripcion:"Varios Colores",
        id:43,
    },
    {
        imagen:"Productos/Encendedores/encendedor-candela-eletronico.jpg" ,
        marca:"Candela",
        descripcion:"Eletronico",
        id:44,
    },
    {
        imagen:"Productos/Encendedores/encendedor-catalitico-magiclick-goma-turbo.jpg",
        marca:"Magiclick",
        descripcion:"Catalitico",
        id:45,
    },
    {
        imagen:"Productos/Encendedores/encendedor-catalitico-magiclickvipblack.jpg",
        marca:"Magiclick",
        descripcion:"Catalitico",
        id:46,
    },
    {
        imagen:"Productos/Encendedores/encendedor-catalitico-metalvippremiun.jpg",
        marca:"Magiclick",
        descripcion:"Metal Premium",
        id:47,
    },
    {
        imagen:"Productos/Encendedores/encendedor-catalitico-ronsoneletrolite.jpg",
        marca:"Ronson",
        descripcion:"Eletrolite",
        id:48,
    },
    {
        imagen:"Productos/Encendedores/encendedor-eletronico-magiclickslideblack.jpg",
        marca:"Magiclick",
        descripcion:"Slide Black",
        id:49,
    },
    {
        imagen:"Productos/Encendedores/encendedor-piedra-clippermini.jpg" ,
        marca:"Clipper",
        descripcion:"Mini",
        id:50,
    },
    {
        imagen:"Productos/Encendedores/encendedor-piedra-cllipermaxi.jpg" ,
        marca:"Clipper",
        descripcion:"Maxi",
        id:51,
    },
    {
        //Seda
        imagen:"Productos/seda/seda-abadie500.jpg",
        marca:"Abadie",
        descripcion:"500 uds.",
        id:52,
    },
    {
        imagen:"Productos/seda/seda-bobmarley.jpg",
        marca:"Bob Maley",
        descripcion:"Gizeh50 uds.",
        id:53,
    },
    {
        imagen:"Productos/seda/seda-gizeh.jpg",
        marca:"Gizeh",
        descripcion:"Super Fino 50 uds.",
        id:54,
    },
    {
        imagen:"Productos/seda/seda-gizehcornir.jpg",
        marca:"Gizeh",
        descripcion:"Verde oscuro Fino 50 uds.",
        id:55,
    },
    {
        imagen:"Productos/seda/seda-gizehfino.jpg",
        marca:"Gizeh",
        descripcion:"Rojo 50 uds.",
        id:56,
    },
    {
        imagen:"Productos/seda/seda-gizehkingsize.jpg",
        marca:"Gizeh",
        descripcion:"Super Grande 50 udsuds.",
        id:57,
    },
    {
        imagen:"Productos/seda/seda-gizehmagnet.jpg" ,
        marca:"Gizeh",
        descripcion:"+Tips Verde 50 uds.",
        id:58,
    },
    {
        imagen:"Productos/seda/seda-gizehmagnetfino.jpg",
        marca:"Gizeh",
        descripcion:"Fino Blanco 100 uds.",
        id:59,
    },
    {
        imagen:"Productos/seda/seda-gizehmagnetoriginal.jpg",
        marca:"Gizeh",
        descripcion:"original 100 uds.",
        id:60,
    },
    {
        imagen:"Productos/seda/seda-gizehoriginal.jpg",
        marca:"Gizeh",
        descripcion:"Original 50 uds. Azul",
        id:61,
    },
    {
        imagen:"Productos/seda/seda-gizehsuperfino.jpg",
        marca:"Gizeh",
        descripcion:"Super fino 50 uds.",
        id:62,
    },
    {
        imagen:"Productos/seda/seda-hempart.jpg",
        marca:"Hemp",
        descripcion:"50 uds.",
        id:63,
    },
    {
        imagen:"Productos/seda/seda-hempartsize.jpg",
        marca:"Hemp",
        descripcion:"Extra Grande 50 uds.",
        id:64,
    },
    {
        imagen:"Productos/seda/seda-libelia500.jpg",
        marca:"Libelia",
        descripcion:"500 uds.",
        id:65,
    },
    {
        imagen:"Productos/seda/seda-libeliaextrathin.jpg",
        marca:"Libelia",
        descripcion:"Negro 50 uds",
        id:66,
    },
    {
        imagen:"Productos/seda/seda-libeliahavana.jpg",
        marca:"Libelia",
        descripcion:"Havana 50 uds.",
        id:67,
    },
    {
        imagen:"Productos/seda/seda-libeliakingsize+tips.jpg",
        marca:"Libelia",
        descripcion:"Extra Grande 50 uds.",
        id:68,
    },
    {
        imagen:"Productos/seda/seda-libeliakingsize.jpg" ,
        marca:"",
        descripcion:"Extra Grande 50 uds.",
        id:69,
    },
    {
        imagen:"Productos/seda/seda-libeliakingsizehavana.jpg" ,
        marca:"Libelia",
        descripcion:"Extra Grande Havana 50 uds.",
        id:70,
    },
    {
        imagen:"Productos/seda/seda-libeliapureorganic.jpg" ,
        marca:"Libelia",
        descripcion:"Organico 50 uds.",
        id:71,
    },
    {
        imagen:"Productos/seda/seda-libeliashortdelicate.jpg",
        marca:"Libelia",
        descripcion:"Chico 50 uds.",
        id:72,
    },
    {
        imagen:"Productos/seda/seda-libeliashortextrathin.jpg" ,
        marca:"Libelia",
        descripcion:"Chico Extra Fino 50 uds.",
        id:73,
    },
    {
        imagen:"Productos/seda/seda-libeliashortvintage.jpg" ,
        marca:"Libelia",
        descripcion:"Chico Verde 50 uds.",
        id:74,
    },
    {
        imagen:"Productos/seda/seda-mantrachoc.jpg" ,
        marca:"Mantra",
        descripcion:"Chocolate 50 uds.",
        id:75,
    },
    {
        imagen:"Productos/seda/seda-mantracoco.jpg",
        marca:"Mantra",
        descripcion:"Coco 50 uds.",
        id:76,
    },
    {
        imagen:"Productos/seda/seda-mantradurazno.jpg",
        marca:"Mantra",
        descripcion:"Durazno 50 uds.",
        id:77,
    },
    {
        imagen:"Productos/seda/seda-mantrafrutilla.jpg",
        marca:"Mantra",
        descripcion:"Frutilla 50 uds.",
        id:78,
    },
    {
        imagen:"Productos/seda/seda-mantramenta.jpg" ,
        marca:"Mantra",
        descripcion:"menta 50 uds.",
        id:79,
    },
    {
        imagen:"Productos/seda/seda-mantrauva.jpg" ,
        marca:"Mantra",
        descripcion:"Uva 50 uds.",
        id:80,
    },
    {
        imagen:"Productos/seda/seda-mantravainilla.jpg" ,
        marca:"Mantra",
        descripcion:"Vainilla 50 uds.",
        id:81,
    },
    {
        imagen:"Productos/seda/seda-ocborganico.jpg",
        marca:"Ocb",
        descripcion:"Organico 50 uds.<",
        id:82,
    },
    {
        imagen:"Productos/seda/seda-ocbpremiun.jpg",
        marca:"Ocb",
        descripcion:"Negro Premium 50 uds.",
        id:83,
    },
    {
        imagen:"Productos/seda/seda-ocbxpert.jpg" ,
        marca:"Ocb",
        descripcion:"Expert50 uds.",
        id:84,
    },
    {
        imagen:"Productos/seda/seda-sativachoc.jpg",
        marca:"Sativa Club",
        descripcion:"Chocolate 50 uds.<",
        id:85,
    },
    {
        imagen:"Productos/seda/seda-sativafrutilla.jpg",
        marca:"Sativa Club",
        descripcion:"Frutilla 50 uds.<",
        id:86,
    },
    {
        imagen:"Productos/seda/seda-sativaoriginal.jpg" ,
        marca:"Sativa Club",
        descripcion:"Original 50 uds.",
        id:87,
    },
    {
        imagen:"Productos/seda/seda-sativauva.jpg" ,
        marca:"Sativa Club",
        descripcion:"Uva 50 uds.",
        id:88,
    },
    {
        imagen:"Productos/seda/seda-smokingblue.jpg" ,
        marca:"Smoking",
        descripcion:"Azul 50 uds.",
        id:89,
    },
    {
        imagen:"Productos/seda/seda-smokingbrown.jpg",
        marca:"Smoking",
        descripcion:"Marron 50 uds.",
        id:90,
    },

    {
        imagen:"Productos/seda/seda-smokingdeluxe.jpg" ,
        marca:"Smoking",
        descripcion:"De Luxe 50 uds.<",
        id:91,
    },

    {
        imagen:"Productos/seda/seda-smokingmaster.jpg" ,
        marca:"Smoking",
        descripcion:"Master Gris 50 uds.",
        id:92,
    },

    {
        imagen:"Productos/seda/seda-smokingorganic.jpg" ,
        marca:"Smoking",
        descripcion:"Organico 50 uds.",
        id:93,
    },

    {
        //Tabaco Pipa
        imagen:"Productos/tabaco-para-pipa/tabacopipa-7seas-regular.jpg",
        marca:"7Seas",
        descripcion:"Regular",
        id:94,
    },

    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-7seas-royal.jpg",
        marca:"7Seas",
        descripcion:"Royal",
        id:95,
    },

    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-7seasgold.png",
        marca:"7Seas",
        descripcion:"Gold",
        id:96,
    },

    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-amphora-black-cavendich.jpg",
        marca:"Amphora",
        descripcion:"Cavendish",
        id:97,
    },

    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-amphora-full-aroma.jpg",
        marca:"Amphora",
        descripcion:"Full Aroma",
        id:98,
    },

    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-amphora-rich-aroma.jpg",
        marca:"Amphora",
        descripcion:"Rich Aroma",
        id:99,
    },

    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-amphora-special-n2.jpg",
        marca:"Amphora",
        descripcion:"Special n2",
        id:100,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-amphora-special-n8.jpg",
        marca:"Amphora",
        descripcion:"Special n8",
        id:101,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-argento-duo.jpg",
        marca:"Argento",
        descripcion:"Duo",
        id:102,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-argento-latak-mix.jpg" ,
        marca:"Argento",
        descripcion:"Latak Mix",
        id:103,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-argento-natural.jpg" ,
        marca:"Argento",
        descripcion:"Natural",
        id:104,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-argento-negro.jpg" ,
        marca:"Argento",
        descripcion:"Negro",
        id:105,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-argento-nougat.jpg",
        marca:"Argento",
        descripcion:"Nougat",
        id:106,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-argento-vainilla.jpg",
        marca:"Argento",
        descripcion:"Vainilla",
        id:107,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-argento-whisky-choc.jpg",
        marca:"Argento",
        descripcion:"Wisky con Chocolate",
        id:108,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-black-and-bright.jpg",
        marca:"Black and Bright",
        descripcion:"Negro",
        id:109,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-brigg-regular.png" ,
        marca:"Brigg",
        descripcion:"Regular",
        id:110,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-brigg-vainilla.png",
        marca:"Brigg",
        descripcion:"Vainilla",
        id:111,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-camaguey-americanblend.jpg",
        marca:"Camaguey",
        descripcion:"American Blend",
        id:112,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-camaguey-choc.jpg" ,
        marca:"Camaguey",
        descripcion:"Chocolate",
        id:113,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-camaguey-vainilla.jpg",
        marca:"Camaguey",
        descripcion:"Vainilla",
        id:114,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-fighter-aromatico.jpg" ,
        marca:"Fighter",
        descripcion:"Aromatico",
        id:115,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-fighter-blackvainilla.jpg",
        marca:"Fighter",
        descripcion:"Black Viainilla",
        id:116,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-fighter-cherry.jpg",
        marca:"Fighter",
        descripcion:"Cherry",
        id:117,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-fighter-choc.jpg",
        marca:"Fighter",
        descripcion:"Chocolate",
        id:118,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-fighter-durazno.jpg",
        marca:"Fighter",
        descripcion:"Durazno",
        id:119,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-fighter-miel.jpg" ,
        marca:"Fighter",
        descripcion:"Miel",
        id:120,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-fighter-ron.jpg",
        marca:"Fighter",
        descripcion:"Ron",
        id:121,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-fighter-vainilla.jpg",
        marca:"Fighter",
        descripcion:"Vainilla",
        id:122,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-fighter-wisky.jpg",
        marca:"Fighter",
        descripcion:"Wisky",
        id:123,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-macbaren-mixture.jpg",
        marca:"Macbaren",
        descripcion:"Mixture",
        id:124,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-macbaren-vainilla.jpg",
        marca:"Macbaren",
        descripcion:"Vainilla",
        id:125,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-peterson-aran.jpg",
        marca:"Peterson",
        descripcion:"Aran",
        id:126,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-peterson-connemara.jpg",
        marca:"Peterson",
        descripcion:"Connemara Black",
        id:127,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-peterson-irish.jpg",
        marca:"Peterson",
        descripcion:"Irish",
        id:128,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-peterson-wildatlantic.jpg",
        marca:"Peterson",
        descripcion:"Wild Atlantic",
        id:129,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-saints-americanb.jpg",
        marca:"Saints",
        descripcion:"American Blend",
        id:130,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-saints-choc.jpg",
        marca:"Saints",
        descripcion:"Chocolate",
        id:131,
    },
    {
        imagen:"Productos/tabaco-para-pipa/tabacopipa-saints-vainilla.jpg" ,
        marca:"Saints",
        descripcion:"Vainilla",
        id:132,
    },
    {
        //Tabaco para armar
        imagen:"Productos/tabaco-para-armar/tabacoarmar-argento-cafecrema.jpg",
        marca:"Argento",
        descripcion:"Cafe con Crema",
        id:133,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-argento-cherry.jpg",
        marca:"Argento",
        descripcion:"Cherry",
        id:134,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-argento-choc.jpg" ,
        marca:"Argento",
        descripcion:"Chocolate",
        id:135,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-argento-manzana.jpg" ,
        marca:"Argento",
        descripcion:"Manzana",
        id:136,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-argento-menta.jpg",
        marca:"Argento",
        descripcion:"Menta",
        id:137,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-argento-natural.jpg" ,
        marca:"Argento",
        descripcion:"Natural",
        id:138,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-argento-negro.jpg" ,
        marca:"Argento",
        descripcion:"Negro",
        id:139,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-argento-uva.jpg" ,
        marca:"Argento",
        descripcion:"Uva",
        id:140,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-argento-vainilla.jpg" ,
        marca:"Argento",
        descripcion:"Vainilla",
        id:141,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-cerrito-choc.jpg",
        marca:"Cerrito",
        descripcion:"Chocolate",
        id:142,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-cerrito-natural.jpg" ,
        marca:"Cerrito",
        descripcion:"Natural",
        id:143,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-cerrito-vainilla.jpg",
        marca:"Cerrito",
        descripcion:"Vainilla",
        id:144,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-django-100.jpg" ,
        marca:"Django",
        descripcion:"Natural",
        id:145,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-django-aromatique.jpg",
        marca:"Django",
        descripcion:"Aromas",
        id:146,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-django-blond.jpg",
        marca:"Django",
        descripcion:"Blond",
        id:147,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-drum.jpg" ,
        marca:"Drum",
        descripcion:"Natural",
        id:148,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-flandria-eco.jpg",
        marca:"Flandria",
        descripcion:"Ecologico",
        id:149,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-flandria-negro.jpg",
        marca:"Flandria",
        descripcion:"Negro",
        id:150,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-flandria-original.jpg" ,
        marca:"Flandria",
        descripcion:"Original",
        id:151,
    },
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-flandria-sauvage.jpg" ,
        marca:"Flandria",
        descripcion:"Suave",
        id:152,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-flandria-silver.jpg" ,
        marca:"Flandria",
        descripcion:"Silver",
        id:153,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-flandria-vainilla.jpg",
        marca:"Flandria",
        descripcion:"Vainilla",
        id:154,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-flandria-virginia.jpg",
        marca:"Flandria",
        descripcion:"Virginia",
        id:155,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-goldenvirginia.jpg",
        marca:"Virginia",
        descripcion:"Golden",
        id:156,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-manitou-bluevirginia.jpg",
        marca:"Virginia",
        descripcion:"Blue",
        id:157,
    },  
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-manitou-organico.jpg" ,
        marca:"Manitou",
        descripcion:"Organico",
        id:158,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-manitou-virginiagold.jpg",
        marca:"Manitou",
        descripcion:"Virginia",
        id:159,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-moro-americangolden.jpg",
        marca:"Moro",
        descripcion:"American Golden",
        id:160,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-moro-blu.jpg" ,
        marca:"Moro",
        descripcion:"Blue",
        id:161,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-moro-dark.jpg",
        marca:"Moro",
        descripcion:"Dark",
        id:162,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-moro-green.jpg",
        marca:"Moro",
        descripcion:"Green",
        id:163,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-moro-mango.jpg",
        marca:"Moro",
        descripcion:"Mango",
        id:164,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-moro-vainilla.jpg" ,
        marca:"Moro",
        descripcion:"Vainilla",
        id:165,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-puroargentino-natural.jpg" ,
        marca:"Puro Argentino",
        descripcion:"Natural",
        id:166,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-puroargentino-vainilla.jpg" ,
        marca:"Puro Argentino",
        descripcion:"Vainilla",
        id:167,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-puroargentino-virginia.jpg",
        marca:"Puro Argentino",
        descripcion:"Virginia",
        id:168,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-american.jpg",
        marca:"Redfield",
        descripcion:"American",
        id:169,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-choc.jpg",
        marca:"Redfield",
        descripcion:"Chocolate",
        id:170,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-chocomint.jpg",
        marca:"Redfield",
        descripcion:"Choc c/ Menta",
        id:171,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-durazno.jpg" ,
        marca:"Redfield",
        descripcion:"Durazno",
        id:172,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-halfzware.jpg",
        marca:"Redfield",
        descripcion:"Halfzware",
        id:173,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-kretek.jpg" ,
        marca:"Redfield",
        descripcion:"Kretek",
        id:174,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-natural.jpg",
        marca:"Redfield",
        descripcion:"Natural",
        id:175,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-uva.jpg" ,
        marca:"Redfield",
        descripcion:"Uva",
        id:176,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-vainilla.jpg" ,
        marca:"Redfield",
        descripcion:"Vainilla",
        id:177,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-virginia.jpg",
        marca:"Redfield",
        descripcion:"Virginia",
        id:178,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-redfield-zwaar.jpg" ,
        marca:"Redfield",
        descripcion:"Zwaar",
        id:179,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-saints-choc.jpg" ,
        marca:"Saints",
        descripcion:"",
        id:180,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-saints-choc.jpg",
        marca:"Saints",
        descripcion:"Chocolate",
        id:181,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-saints-menta.jpg" ,
        marca:"Saints",
        descripcion:"Menta",
        id:182,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-saints-natural.jpg" ,
        marca:"Saints",
        descripcion:"Natural",
        id:183,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-saints-strong.jpg" ,
        marca:"Saints",
        descripcion:"Strong",
        id:184,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-saints-vainilla.jpg",
        marca:"Saints",
        descripcion:"Vainilla",
        id:185,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-saints-virginia.jpg" ,
        marca:"Saints",
        descripcion:"Virginia",
        id:186,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-vankiff-american.png" ,
        marca:"Van Kiff",
        descripcion:"American",
        id:187,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-vankiff-choc.jpg" ,
        marca:"Van Kiff",
        descripcion:"Chocolate",
        id:188,
    }, 
    
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-vankiff-menta.jpg" ,
        marca:"Van Kiff",
        descripcion:"Menta",
        id:189,
    }, 
    {
        imagen:"Productos/tabaco-para-armar/tabacoarmar-vankiff-natural.jpg" ,
        marca:"Van Kiff",
        descripcion:"Natural",
        id:190,
    }, 
   
    
]

