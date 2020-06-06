var deleteID;
function setDeletePostID(id) {
    deleteID = id;
}

function deletePost() {
    document.getElementById(deleteID).remove();
    deleteID = '';
}

function navigatePost(id) {
    var postID = id.split('post_card_')[1];
    var user = document.getElementById(id).querySelector('#postUser_'+postID).innerHTML;
    var title = document.getElementById(id).querySelector('#postTitle_'+postID).innerHTML;
    var content = document.getElementById(id).querySelector('#postContent_'+postID).innerHTML;
    sessionStorage.setItem("user",user);
    sessionStorage.setItem('title',title);
    sessionStorage.setItem('content',content);
    window.location.href = 'post.html';
}