export const sanityConfig = {
    dataset: 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as any,
  };
  
 export  async function getProducts(query:string) {
  let URL = `https://${sanityConfig.projectId}.api.sanity.io/v2021-10-21/data/query/${sanityConfig.dataset}?query=${query}`;
    try {
      const res = await fetch(URL,{
        next:{
          revalidate:10
        }
      })
      return res.json()
    } catch (error:any) {
      console.log(error?.message); 
    }
    
  }