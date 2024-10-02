import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //id: "",
    nombre: "",
    email: "",
    contraseña: "",
    idRol: "",
    //idPais:""
}


const userSlice = createSlice({
    name: "usuario",
    initialState,
    reducers: {
        addUser: (state, action) =>{
            
            
            console.log(action.payload);
            
            //state.id = id;
            state.nombre = action.payload.nombre;
            state.email = action.payload.email;
            state.contraseña = action.payload.contraseña;
            state.idRol = action.payload.rol;
            //state.idPais = idPais;

            console.log("nombre(slice):", state.nombre)
            console.log("email(slice):", state.email)
            console.log("contraseña(slice):", state.contraseña)
            console.log("idRol(slice):", state.idRol)
            // console.log("Estado del user: ",state);
        }
    }
})


export const { addUser } = userSlice.actions;

export default userSlice.reducer;