var commentCount = 0;
function addComment(userComment){
    if(userComment.value.trim() !== "" ) {
        var commentTemplate = '<p class="comment-list" id="comment_' + ++commentCount + '">' + userComment.value + '</p>';
        document.getElementById("allComments").innerHTML = commentTemplate + document.getElementById("allComments").innerHTML;
        document.getElementById("allComments").style.borderTop = '5px solid #DDD';
    }
    document.getElementById("userComments").value = '';
}

var likeCount = 0;
function commentLiked() {
    likeCount++;
    var liketext = document.getElementById("likeCount");
    var likeLabel = document.getElementById("likeComment");
    if(likeCount === 1){
        likeLabel.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked!';
        liketext.innerHTML = '1 person likes this!';
    }else if(likeCount > 1){
        likeLabel.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked!';
        liketext.innerHTML = likeCount+" people have liked this!";
    }
}