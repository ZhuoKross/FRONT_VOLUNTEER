import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    nombre: "",
    email: "",
    contraseña: "",
    idRol: "",
    idPais:""
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) =>{
            const {id, nombre, email, contraeña, idRol, idPais} = action.payload;

            state.id = id;
            state.nombre = nombre;
            state.email = email;
            state.contraseña = contraeña;
            state.idRol = idRol;
            state.idPais = idPais;

        }
    }
})


const {addUser} = userSlice.actions;

export default userSlice.reducer;