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
            const { nombre, email, contraeña, idRol} = action.payload;

            //state.id = id;
            state.nombre = nombre;
            state.email = email;
            state.contraseña = contraeña;
            state.idRol = idRol;
            //state.idPais = idPais;

        }
    }
})


export const { addUser } = userSlice.actions;

export default userSlice.reducer;