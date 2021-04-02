document.getElementById("search_submit").innerHTML="Search";
document.getElementById("search_text").addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    
    apiCall();
  }
});

 async function apiCall()
 {
var search_str=document.getElementById("search_text").value;
if(search_str!="")
{
  var data= await (await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+search_str)).json();
  console.log(data);
  return handleResponse(data);  
}
else{
    error_me.innerHTML="Enter food to search!!!"
    document.getElementById("content").innerHTML=error_me.outerHTML;
}
}
var error_me=document.createElement("div");
    error_me.setAttribute("class","text-danger h2");

 function handleResponse(response) {

    content.innerHTML="";
   
  
  try{
   response.meals.forEach(function(item){

    var Meal_Title=document.createElement("h2");
    Meal_Title.setAttribute("class","text-primary");
    Meal_Title.innerHTML=item.strMeal;

    var Ing_Title=document.createElement("h4");
    Ing_Title.setAttribute("class","text-danger")
    Ing_Title.innerHTML="Ingredients";


    var Ing_List=document.createElement("div");
    Ing_List.setAttribute("class","text-warning h5")
           if((item.strIngredient1!="")&&(item.strIngredient1!=null))
           Ing_List.innerHTML+=item.strIngredient1+" "+item.strMeasure1;
           if((item.strIngredient2!="")&&(item.strIngredient2!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient2+" "+item.strMeasure2;
           if((item.strIngredient3!="")&&(item.strIngredient3!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient3+" "+item.strMeasure3;
           if((item.strIngredient4!="")&&(item.strIngredient4!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient4+" "+item.strMeasure4;
           if((item.strIngredient5!="")&&(item.strIngredient5!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient5+" "+item.strMeasure5;
           if((item.strIngredient6!="")&&(item.strIngredient6!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient6+" "+item.strMeasure6;
           if((item.strIngredient7!="")&&(item.strIngredient7!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient7+" "+item.strMeasure7;
           if((item.strIngredient8!="")&&(item.strIngredient8!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient8+" "+item.strMeasure8;
           if((item.strIngredient9="")&&(item.strIngredient9!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient9+" "+item.strMeasure9;
           if((item.strIngredient10!="")&&(item.strIngredient10!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient10+" "+item.strMeasure10;
           if((item.strIngredient11!="")&&(item.strIngredient11!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient11+" "+item.strMeasure11;
           if((item.strIngredient12!="")&&(item.strIngredient12!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient12+" "+item.strMeasure12;
           if((item.strIngredient13!="")&&(item.strIngredient13!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient13+" "+item.strMeasure13;
           if((item.strIngredient14!="")&&(item.strIngredient14!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient14+" "+item.strMeasure14;
           if((item.strIngredient15!="")&&(item.strIngredient15!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient15+" "+item.strMeasure15;
           if((item.strIngredient16!="")&&(item.strIngredient16!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient16+" "+item.strMeasure16;
           if((item.strIngredient17!="")&&(item.strIngredient17!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient17+" "+item.strMeasure17;
           if((item.strIngredient18!="")&&(item.strIngredient18!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient18+" "+item.strMeasure18;
           if((item.strIngredient19!="")&&(item.strIngredient19!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient19+" "+item.strMeasure19;
           if((item.strIngredient20!="")&&(item.strIngredient20!=null))
           Ing_List.innerHTML+="<br>"+item.strIngredient20+" "+item.strMeasure20;
           
       var Instructions=document.createElement("h5");
       Instructions.setAttribute("class","text-dark");
       Instructions.innerHTML="<br>"+item.strInstructions+"<br><hr>";


       document.getElementById("content").append(Meal_Title,Ing_Title,Ing_List,Instructions);
   })
      
    }
    
  catch{
    
    error_me.innerHTML="Sorry..No Food found!!!";
    document.getElementById("content").innerHTML = error_me.outerHTML;
  
  }
  
}
