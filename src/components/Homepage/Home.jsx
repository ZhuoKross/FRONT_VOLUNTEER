
import Header from "./Header";
import Frase from "./frase";
import Voluntariado from "./voluntariado";

export default function Home(){
    return(

        <div className="w-full h-dvh">
            <Header />
            <Frase />
            <Voluntariado />
        </div>

    );
}