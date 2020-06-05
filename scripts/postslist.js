var deleteID;
function setDeletePostID(id) {
    deleteID = id;
}

function deletePost() {
    document.getElementById(deleteID).remove();
    deleteID = '';
}

