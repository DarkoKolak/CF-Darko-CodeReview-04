

function display(){
var data = document.getElementById("dmovies");
	
for (var i =0;  i< movies.length; i++) {

	data.innerHTML+= `<div class="container">
	<div class="image"><img src ="${movies[i].Foto}"></div>

	<div class = "hole">
	<p class = "Title"><b><i>${movies[i].Title}</b></i></p>
	<p class = "Realease"><b><i> The movie was realeased in ${movies[i].Realease}</i></b></p>
	<p class = "income"> <b><i> the movie made  ${movies[i].Income}</b></i> $ worldwide</p>
	<p class="like"> If you enjoyed the movie please hit the like button below!<br></p>
	<div class = "row"><button class ="btm" id = "${i}"> Like <i class="fa fa-thumbs-up"></i></button>
	<p class ="show">${movies[i].Likes}</p></div> 
	</div>
	 </div>`;

}
 for (var i =0;  i< movies.length; i++) {
	allbtn[i].addEventListener("click", function(){increase(this.getAttribute("id"))},false);
}
}


function onselect(){
	var get = document.getElementById("sorting").value;
	var data = document.getElementById("dmovies");

	switch(get){

		case "Likesa":
		data.innerHTML= "";
		movies.sort((a,b) => (a.Likes > b.Likes) ? 1 : -1);
		display();
		break;

		case "Likesd":
		data.innerHTML= "";
		movies.sort((a,b) => (a.Likes > b.Likes) ? 1 : -1);
		movies.reverse();
		display();
		break;

		case "Date":
		data.innerHTML= "";
		movies.sort((a,b) => (a.Realease > b.Realease) ? 1 : -1);
		display();
		break;

		case "Income":
		data.innerHTML= "";
		movies.sort((a,b) => (a.Income > b.Income) ? 1 : -1);
		display();
		break;

		default:
		data.innerHTML= "";
		movies.reverse();
		display();

	}
}

var allbtn = document.getElementsByClassName("btm");





onselect();
var btn = document.getElementById("sorting");
btn.addEventListener("change",onselect,false);



function increase (i){
		var change = document.getElementsByClassName("show");
		movies[i].Likes.innerHTML=movies[i].Likes++;
			change[i].innerHTML = movies[i].Likes;

}