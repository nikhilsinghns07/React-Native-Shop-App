import { ThemeProvider } from "@react-navigation/native";

class Product {
    constructor(id,ownerId,title,imageUrl,description,price) {
        this.id = id;
        this.ownerId = ownerId;
        this.imageUrl = imageUrl ; 
        this.description = description;
        this.price = price ;
    }
    
}

export default Product