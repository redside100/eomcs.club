function askPass(){
    swal("You found a secret! What's the super secret password?", {
            content: "input",
        }).then((value) => {
        if (value == atob("YXYyeWtBSm5RM1hGRjdQSA==")){
                swal.close();
				swal("Yay!", "That's right! Too bad I don't have anything to give you.", "success");
        }else{
            swal.close();
            swal("Nope!", "That's not it.", "error");
        }
    });
}