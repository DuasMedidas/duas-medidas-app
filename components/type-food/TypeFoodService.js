
export default class TypeFoodService {

    findAll(){
        return fetch('http://localhost:3000/product-type')
            .then(response => response.json())
            .then(result => result)
            .catch(error => error);
    }
}