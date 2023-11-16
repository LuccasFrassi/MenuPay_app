
import axios from "axios"


class UsersService{
    
    async register(data){
        return axios({
            url: "http://192.168.42.110:3000/users/register",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
    async login(data){
        return axios({
            url: "http://192.168.42.110:3000/users/login",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

}
const usersService = new UsersService()
export default usersService