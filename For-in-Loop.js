function printObjectProperties(){
    var Shop1 = {
        
        Dress:{
            shirt: "White",
            quality: "Cotton",
            price: "100 USD"
        },
        
        Pant:{
            full_pant: "Black",
            quality: "Jeans",
            price: "200 USD"
        },

        Footwear:{
            shoes: "Sneakers",
            quality: "Leather",
            price: "1000 USD"
        },

        Eyeglasses:{
            goggles: "Ray-Ban",
            quality: "Black frame",
            price: "150 USD"

        }

    }
    
    for(var property in Shop1){
        console.log(property , ": " , Shop1[property]);
        console.log("Objects are available.");
    }

    let emptyShop = {}
    for(props in emptyShop){
        console.log(Object.keys(emptyShop).length);
        console.log("Object is empty.");
    }

    
}
printObjectProperties();