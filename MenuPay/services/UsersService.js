
import axios from "axios"


class UsersService{
    
    async register(data){
        return axios({
            url: "http://26.139.49.207:3000/users/register",
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