import axios from "axios";

class PokeService{
    
        static async GetListPoke(){
            return new Promise((resolve, reject) => {
                let response:Array<IModelLoginRequest>= [] as Array<IModelLoginRequest>
                axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
                .then(responsePost=>{
                    console.log(responsePost);
                    resolve(responsePost.data);
                })
                .catch(error=>{
                    reject(error);
                    console.log("poke.service.tsx ~ line 6 ~ PokeService ~ GetListPoke ~ error",error);
                });
             });
        } 
}

export {PokeService}