function fetchCritic() {
    var request = new XMLHttpRequest();

    request.open('GET', criticreview_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    criticreview_array = JSON.parse(request.responseText);
    };

    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showCriticReview(element) {

	console.log(criticreview_array.length);
	document.getElementById("emptyCritic").innerHTML = "No critic reviews yet.";
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("critic").textContent = "Critic Reviews for " + movie_array[item].GameName;
    document.getElementById("criticBody").textContent = "";

    for (var i = 0; i < criticreview_array.length; i++) {
        if (criticreview_array[i].GameName.trim() === movie_array[item].GameName.trim()) {
            document.getElementById("emptyCritic").innerHTML = "";
            selectedMovieId = movie_array[item].GameID;
            star = "";
            
           var html = '<div class="text-left" style="width:100%; margin-bottom: 20px">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                      <table class="chicken">   \
										<tr><td class="text-right" style=" font-weight: bold"><p>Critic Name:</p></td>\
										<td style="vertical-align: top"><p style="margin-left: 10px; font-weight: bold">' +criticreview_array[i].CriticName + '</p></td></tr>\
									<tr><td class="text-right" style=" font-weight: bold"><p>Date Published:</p></td>\
										<td style="vertical-align: top; font-size: 14px"><p style="margin-left: 10px;">' +criticreview_array[i].CriticDate + '</p></td></tr>\
									<tr><td class="text-right" style="font-weight: bold"><p>Rating:</p></td>\
									<td><p style="margin-left: 10px" ><b style="font-size: 34px;">'+ criticreview_array[i].CriticRating +'</b>/100</p></td></tr>\
                                    <tr><td class="text-right" style="font-weight: bold; vertical-align: top"><br/><p>Written Review:</p></td>\
							<td><p class="card-text" id="rating' + i + '" style="margin-left: 10px">' + criticreview_array[i].CriticDesc + "</p></td></tr>  \
									\
									<tr><td class='text-right' style='; font-weight: bold'><p></p></td>\
                                    <td><p style='margin-left: 10px;'><a href="+ criticreview_array[i].CriticLink +">Read more!</a></p></td></tr></table>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
                
                
                
            
            document.getElementById("criticBody").insertAdjacentHTML('beforeend', html);

            
            
           
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}



