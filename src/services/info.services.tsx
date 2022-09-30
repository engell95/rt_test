import axios from "axios";

class InfoService {

    static async GetListProfiles() {
        return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(responsePost => {
                    resolve(responsePost.data);
                })
                .catch(error => {
                    reject(error);
                    console.log("info.service.tsx ~ line 6 ~ InfoService ~ GetListUser ~ error", error);
                });
        });
    }

    static async GetListTodos() {
        return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(responsePost => {
                    resolve(responsePost.data);
                })
                .catch(error => {
                    reject(error);
                    console.log("info.service.tsx ~ line 19 ~ InfoService ~ GetListTodo ~ error", error);
                });
        });
    }
}

export { InfoService }