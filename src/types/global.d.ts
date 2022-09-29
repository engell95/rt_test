interface IModelLoginRequest{
    username:string ="";
    url:string | null ="";
    token:string | null ="";
    message:string|null="";
    authenticate:boolean =false;
}