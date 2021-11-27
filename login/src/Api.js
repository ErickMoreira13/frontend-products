import axios from "axios";

const API_BACKEND="http://localhost:3333/user";
const API_BACKEND_PRODUCT="http://localhost:3333/product";

const api = {
    register: async (username, password) => {
        try {
            let response = await axios.post(API_BACKEND, {
                username: username,
                password: password
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;        
        }
    },
    registerProduct: async (name, price, discPrice, qttInventory, cateId) => {
        try {
            let response = await axios.post(API_BACKEND_PRODUCT, {
                name,
                price,
                discPrice,
                qttInventory,
                cateId
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;        
        }
    }

}

export default api;