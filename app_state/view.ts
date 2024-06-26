import {create} from 'zustand'

const useView = create(set=>({
    list:false,
    grid:true,
    gridView:()=>{
        console.log('GridView called');
        set((state:any)=>({grid:true,list:false}))
    },
    listView:()=>{
        console.log('ListVIew called');
        set((state:any)=>({grid:false,list:true}))
    }
}))

export default useView