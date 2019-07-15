import { database, storage } from '../../api/Firebase/firebase'



export const fetchImages=()=>async (dispatch)=>{ 
      const resp=await database.ref('products').once('value')
       
           const items=[...resp.val()]

       const populateItemWithImage=async (item)=>{
                               item.img= await storage.ref('e-commerce')
                                    .child(`${item.sku}_1.jpg`).getDownloadURL() ;
                               return item;
       }
       const payload= await Promise.all(items.map(populateItemWithImage))
       dispatch({
           type: 'FETCH_IMAGES',
            payload
       })
}
