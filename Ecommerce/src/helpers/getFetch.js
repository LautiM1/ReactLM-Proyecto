let productos = [
    {id:'1', categoria:'remeras', name:'Remera Sailor Moon', precio:1500, imagen:'https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/sailor-moon1-eb3c3172ca07385f4916226006101744-1024-1024.jpg'},
    {id:'2', categoria:'remeras', name:'Remera Tanjiro', precio:1500, imagen:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/011/318/products/tanjiro_demon_modal1-107ad7dd67d7b8bb1b16196677570925-1024-1024.jpg'},
    {id:'3', categoria:'buzo', name:'Buzo negro', precio:4500, imagen:'https://http2.mlstatic.com/D_NQ_NP_795968-MLA44953308983_022021-O.jpg'},
    {id:'4', categoria:'remeras', name:'Himiko toga', precio:1500, imagen:'https://http2.mlstatic.com/D_NQ_NP_861144-MLA42546153009_072020-O.jpg'},
    {id:'5', categoria:'remeras', name:'Remera Shoto', precio:1500, imagen:'https://http2.mlstatic.com/D_NQ_NP_944997-MLA44622412166_012021-O.webp'}
  
  
  
  
  ];

  export const gFetch = new Promise( ( resolve, reject ) => {
    let condition = true
    if(condition) {
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    }else {
        reject('400 not found')
    }
  })