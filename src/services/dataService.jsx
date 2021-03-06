import axios from 'axios';


let catalog=[
    {
        id:1,
        price:35,
        stock:2,
        title:"Tristam Shandy",
        image:"shandy.jpg",
        discount:0,
        category:"Eastern Press"
    },
    {
        id:2,
        price:25,
        stock:5,
        title:"Robinson Crusoe",
        image:"crusoe.webp",
        discount:10,
        category:"Eastern Press"
    },
    {
        id:3,
        price:30.65,
        stock:2,
        title:"Madame Bovary",
        image:"madame.jpg",
        discount:0,
        category:"Eastern Press"
    },
    {
        id:4,
        price:40,
        stock:1,
        title:"Les Miserables",
        image:"hugoLes.jpg",
        discount:5,
        category:"Franklin Library"
    },
    {
        id:5,
        price:16,
        stock:1,
        title:"Jacques the Fatalist",
        image:"jacques.jpg",
        discount:10,
        category:"Penguin"
    },
    {
        id:6,
        price:15.00,
        stock:4,
        title:"Six Easy Pieces",
        image:"easyPieces.webp",
        discount:0,
        category:"Addison-Wesley"
    },
    {
        id:7,
        price:15.00,
        stock:1,
        title:"Six Not So Easy Pieces",
        image:"notEasy.webp",
        discount:0,
        category:"Addison-Wesley"
    },
    {
        id:8,
        price:15.00,
        stock:1,
        title:"The Plague",
        image:"plague.jpg",
        discount:5,
        category:"Oxford"
    },
    {
        id:9,
        price:13.50,
        stock:5,
        title:"Nicomachean Ethics",
        image:"ethics.jpg",
        discount:10,
        category:"Fulton"
    },
    {
        id:10,
        price:12.50,
        stock:2,
        title:"What If? Writing Exercises",
        image:"whatif.webp",
        discount:0,
        category:"Fulton"
    },

]
class DataService{
    serverURL= "http://127.0.0.1:5000";
   async getCatalog(){
        //call the server and get the data
        let response= await axios.get(this.serverURL + "/api/products");
        return response.data;
        // use line below to show a catalog without a backend server
        // return catalog;
    }

    async saveProduct(prod){
        let response= await axios.post(this.serverURL + "/api/products", prod);
        // return response.data;
        console.log(response.data);
    }
}

export default DataService;