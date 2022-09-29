interface IModelProfile{
    id:int =0;
    name:string | null ="";
    email:string | null ="";
    message:string|null="";
    phone:string|null="";
    website:string|null="";
}

interface PropProfile {
    showModal: boolean;
    data: IModelUser[];
    onChange: (event: React.MouseEvent) => void;
    onSave: (form: any) => void;
}

interface IModelTodo{
    userId:int =0;
    id:int =0;
    title:string | null ="";
    completed:boolean
}

interface IModelTodos{
    id: int;
    name: string | null;
    email: string | null;
    message: string | null;
    phone: string | null;
    website: string | null;
    userId?: any;
    title?: string | null | undefined;
    completed?: boolean | undefined;
}
interface PropTodo {
    data: IModelTodos[];
}
