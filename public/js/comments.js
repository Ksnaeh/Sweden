function fetchComments() {
    
    var request = new XMLHttpRequest();
    
    
    request.open('GET', comment_url, true);
    
    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    comment_array = JSON.parse(request.responseText);
		
	
    };
    
    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showMovieComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("review").textContent = "User comments for " + movie_array[item].GameName;
    document.getElementById("commentBody").textContent = "";

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].GameName.trim() === movie_array[item].GameName.trim()) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedMovieId = movie_array[item].GameID;
            star = "";
            var html = '<div class="text-right" style="width:100%; margin-bottom: 20px">\
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                 <h3 style="font-weight: bold; font-size: 20px; text-align:left">'+comment_array[i].Username+'</h3> \
									<p style="color: #505050; font-style: italic; font-size: 12px; text-align: left">Date Posted: '+comment_array[i].UserReviewDate + '</p>\
                                    <table class="chicken"> \
									\
									\
									<tr><td style="vertical-align: top"><p style="font-weight: bold">Comment:</p></td>\
									<td class="text-left" ><p id="rating' + i + '" style="margin-left: 10px">' + comment_array[i].UserReviewDesc + '</p></td></tr></table>\
									<table class="conga"><tr><td style="width: 29%"><p style="font-weight: bold">Upvotes:</p></td>\
									<td class="text-left" ><p style="margin-left: 10px; margin-right: 10px">'+ comment_array[i].UserReviewUpvote +'</p></td>\
									<td style="vertical-align: top"><div class="col-1" ><button href="#" data-toggle="modal" data-dismiss="modal" item="' + i + '" type="button" class="btn btn-success btn-sm" onClick="upvoteComment(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-right: -5px">Upvote</button></div></td>\
										\
									<td style="vertical-align: top"><div class="col-1"><button href="#" data-toggle="modal" data-dismiss="modal" item="' + i + '" type="button" class="btn btn-danger btn-sm" onClick="downvoteComment(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-left:-20px">Downvote</button></div></td></tr></table><br/>\
									<br/>\
								<div class="row">\
									<div class="col-2" style="margin-right: 10px"><button href="#" data-toggle="modal" data-target="#editCommentModal" data-dismiss="modal" item="' + i + '" type="button" class="btn btn-primary btn-sm" onClick="editComment(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-top:10px">Edit Comment</button></div>\
									\
									<div class="col-1"><button href="#" data-dismiss="modal" item="' + i + '" type="button" class="btn btn-secondary btn-sm" onClick="deleteComment(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-top:10px">Delete</button></div></div>\
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>';
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

        }
    }
}

function newComment() {
    //Initialise each HTML input elements in the modal window with default value.
        var getuserid = localStorage.getItem("toxicAccountID");
        var getusername = localStorage.getItem("someVarKey");
        console.log(getusername);
    
        document.getElementById("userComments").value = "";
        document.getElementById("nickname").value = getusername;
    
		//totalUsers = getusers_array.length;
}   
  
// Submit or send the new comment to the server to be added.
function addCommen() {
    var comment = new Object();
    var getuserid = localStorage.getItem("toxicAccountID");
    comment.GameID = movie_array[currentIndex].GameID; // Movie ID is required by server to create new comment 
    comment.AccountID = getuserid; // Value from HTML input text
    comment.UserReviewDesc = document.getElementById("userComments").value; // Value from HTML input text
    
	
    
	if (comment.AccountID !== null && comment.AccountID === "" || comment.UserReviewDesc !== null && comment.UserReviewDesc !== ""){
		var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

		postComment.open("POST", comment_url, true); //Use the HTTP POST method to send data to server

		postComment.setRequestHeader("Content-Type", "application/json");
		postComment.onload = function() {
			window.alert("You have successfully added comments!");
			fetchComments(); // fetch all comments again so that the web page can have updated comments.     
		};
	// Convert the data in Comment object to JSON format before sending to the server.
		postComment.send(JSON.stringify(comment)); 
	}
	else{
		window.alert("Invalid/Missing fields!");
		document.getElementById("signupForm").reset();
		
	}
}

//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review
function editComment(element) {
    var item = element.getAttribute("item");

    currentIndex = item;
	
    document.getElementById("edituserComments").value = comment_array[item].UserReviewDesc;
    
}
//This function sends the Comment data to the server for updating
function updateComment() {
	var response = confirm("Are you sure you want to update this comment?");
	if (response == true) {
		var edit_comment_url = comment_url + "/edit/" + comment_array[currentIndex].UserReviewID;
		var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
		updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
		
		updateComment.setRequestHeader("Content-Type", "application/json");
		
		comment_array[currentIndex].UserReviewDesc = document.getElementById("edituserComments").value;
		
		updateComment.onload = function() {
			fetchComments();
	};
	updateComment.send(JSON.stringify(comment_array[currentIndex]));
	}
}

//This function deletes the selected comment in a specific movie
function deleteComment(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_comment_url = comment_url + "/" + comment_array[item].UserReviewID;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url, true);
        eraseComment.onload = function() {
            fetchComments();
        };
        eraseComment.send();
    }
}

//upvote comment
function upvoteComment(element) {
	var response = confirm("Are you sure you want to upvote this?");
	
	if (response == true) {
		var item = element.getAttribute("item"); 
		var upvote_comment_url = comment_url + "/upvote/" + comment_array[item].UserReviewID;
		var upvoteComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
		upvoteComment.open("PUT", upvote_comment_url, true); 		
		upvoteComment.onload = function() {
			fetchComments();
		};
		upvoteComment.send();
	}
}


//downvote comment
function downvoteComment(element) {
	var response = confirm("Are you sure you want to downvote this?");
	
	if (response == true) {
		var item = element.getAttribute("item"); 
		var downvote_comment_url = comment_url + "/downvote/" + comment_array[item].UserReviewID;
		var downvoteComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
		downvoteComment.open("PUT", downvote_comment_url, true); 		
		downvoteComment.onload = function() {
			fetchComments();
		};
		downvoteComment.send();
	}
}