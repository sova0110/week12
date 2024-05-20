function createChat(){
    const nameInput = document.getElementById("inputNameId"); 
    const name = nameInput.value; 
    const commentInput = document.getElementById("inputCommentId"); 
    let comment = commentInput.value;
    const photoInput = document.getElementById("inputPhotoId");
    const photo = photoInput.value;
    if (!name) return; //обязательное поле для заполнения
    if (!comment) return;//обязательное поле для заполнения
    const nameList = document.getElementById("chat_showID");
    const newName = document.createElement("p");
    const img = document.createElement('img');
    img.src = photo;
    let nameChanged1=name.trimStart();
    let nameChanged = nameChanged1[0].toUpperCase()+nameChanged1.slice(1).toLowerCase();
    let newComment=comment.replace(/viagra|XXX/gi, '***'); 
    newName.innerHTML ="Имя: "+ nameChanged +"<br/>"+"Комментарий: "+"<br/>"+newComment;
    nameList.append(img) ;
    nameList.appendChild(newName);
    nameInput.value = "";
    commentInput.value="";
    photoInput.value="";
    }



