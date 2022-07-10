let producto2 = [
    {id:'1', categoria:'remeras', name:'Remera Sailor Moon', precio:1500, imagen:'https://d3ugyf2ht6aenh.cloudfront.net/stores/903/627/products/sailor-moon21-20a3d839480ac626b116057974949317-1024-1024.jpg'},

  
  ];

  export const gFetch2 = new Promise( ( resolve, reject ) => {
    let condition = true
    if(condition) {
        setTimeout(()=>{
            resolve(producto2)
        }, 2000)
    }else {
        reject('400 not found')
    }
  })