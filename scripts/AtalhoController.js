class Atalhos{

    constructor(){

        this.initialize();
    }

    initialize(){
        document.addEventListener('keyup', e=>{
            this.redirect(e.key);
        });
    }

    redirect(key){
        switch(key){
            case "0": //atalhos
                window.location.href="#atalho-atalhos";
                break;
            case "1"://início do conteudo
                window.location.href="#atalho-inicio";
                break;
            case "2": //menu
                window.location.href="#menu";
                break;
            case "3": //rodapé
                window.location.href="#atalho-final";
                break;
            default:
                break;

            
        }
    }

    





}