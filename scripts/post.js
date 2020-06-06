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
        liketext.innerHTML = likeCount+" people like this!";
    }
}

function editPost() {
    document.getElementById("post-edit").style.display = 'none';
    document.getElementById("post-save").style.display = 'block';
    document.getElementById("postTitle").contentEditable = true;
    document.getElementById("postContent").contentEditable = true;
    document.getElementById("postTitle").classList.add('editable');
    document.getElementById("postContent").classList.add('editable');
}

function savePost() {
    document.getElementById("post-save").style.display = 'none';
    document.getElementById("post-edit").style.display = 'block';
    document.getElementById("postTitle").contentEditable = false;
    document.getElementById("postContent").contentEditable = false;
    document.getElementById("postTitle").classList.remove('editable');
    document.getElementById("postContent").classList.remove('editable');
}