

fetch("../data/data.json").then( response => {    //then is a higher order function
    return response.json()         //fetching 
}).then(data => {  // adding another then to fetch (.then) 
       //fetching the response in the object format
    displayData(data);
})

function displayData(info) 
{
   var bodyElement = document.querySelector("body");
   var row = document.createElement("section")
   row.classList.add("row","justify-content-center");

   bodyElement.append(row);


   info.mobiles.map(value=>{
       var column = document.createElement("article")
       column.classList.add("col-sm-10","col-md-6","col-lg-3")
       row.append(column);



       var card = document.createElement("div");
       card.classList.add("card","mt-5");

       var cardBody = document.createElement("div");
       cardBody.classList.add("cardBody");

       var imageElement = document.createElement("img");
       imageElement.src=value.image;
       imageElement.classList.add("img-responsive")
       imageElement.alt = value.name;


       var name = document.createElement("h2");
       name.textContent = value.name;
       //css property
       name.classList.add("text-center", "text-secondary");

       var price = document.createElement("p");
       price.classList.add("text-secondary","text-center");
       price.innerHTML = "<s>INR"+value.price+"/-</s>";

       // button
       

       var button = document.createElement("button");
       button.classList.add("btn","btn-block","btn-primary");
       button.textContent="Add to cart"
       

       cardBody.append(imageElement);

       cardBody.append(name);
       cardBody.append(price);

       card.append(cardBody);
       column.append(card);
    })
}