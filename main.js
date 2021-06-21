function add_user(){
    user_name=document.getElementById ("input_add_user").value;
    localStorage.setItem("user_name",user_name);
}
