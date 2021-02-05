/* Fill your code*/
class Blog{
    constructor(title,detail){
        this.title=title;
        this.detail=detail;
    }
    addTitle()
    {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    addDescription()
    {
        var description = document.createElement('h4');
        description.setAttribute("id","blog-description");
        console.log(description);
        document.getElementById('card-text').appendChild(description);
        description.innerHTML+=this.detail;
    }
}
document.getElementById("addBlog").addEventListener("click",function displayPopText(){
    document.getElementById("popupContact").style.display="block";
})
document.getElementById("close").addEventListener("click",function closePopText(){
    document.getElementById("popupContact").style.display="none";
})
document.getElementById("post").addEventListener("click",function Post(){
    document.getElementById("popupContact").style.display="none";
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
    // console.log(title + " "+detail);
    var blog = new Blog(title,detail);
    blog.addTitle();
    blog.addDescription();
})