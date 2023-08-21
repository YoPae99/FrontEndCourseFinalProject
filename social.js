    var commentForm = document.querySelector(".comment-box form");

    commentForm.addEventListener("submit", function(event) {

        event.preventDefault();
    
        var name = document.getElementById("name").value;
        var comment = document.getElementById("comment").value;
    
        var commentElement = document.createElement("div");
        commentElement.classList.add("comment");
    
        var nameTextNode = document.createTextNode(name + " says:");
        var commentTextNode = document.createTextNode(comment);
 
        var nameElement = document.createElement("strong");
        nameElement.appendChild(nameTextNode);
    
        var commentContentElement = document.createElement("p");
        commentContentElement.appendChild(commentTextNode);
    
        commentElement.appendChild(nameElement);
        commentElement.appendChild(commentContentElement);
    
        var commentsElement = document.getElementById("comments");
        commentsElement.appendChild(commentElement);
    
        commentForm.reset();
    });
    