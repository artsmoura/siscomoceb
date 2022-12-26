import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../components/Input/input';
import Selectbox from '../../../components/Selectbox/selectbox';
import { updateContentAuth } from '../redux/authAction';

const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authState.user);

    const handleSelect = (e) => {
        // console.log(e)
        dispatch(updateContentAuth({
            ...e,
            value: e.target.value.value
        }));
    };

    const option = [
        {
            name: 'Masculino',
            value: 'masculino'
        },
        {
            name: 'Feminino',
            value: 'feminino'
        }
    ];

    const option2 = [
        {
            id: 1,
            name: "casado"
        },
        {
            id: 2,
            name: "solteiro"
        },
        {
            id: 3,
            name: "divorciado"
        },
        {
            id: 4,
            name: "viuvo"
        },
        {
            id: 5,
            name: "ué"
        },
    ];

    return (
        <div className="container">
            <div className="boxForm">
                <h2>Editar Perfil</h2>
                <form>
                    <Input
                        type="text"
                        name="name"
                        label="Nome"
                        onChange={(e) => dispatch(updateContentAuth(e))}
                        value={user.name}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="text"
                        name="sobrenome"
                        label="Sobrenome"
                        onChange={(e) => dispatch(updateContentAuth(e))}
                        value={user.sobrenome}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="text"
                        name="email"
                        label="Email"
                        onChange={(e) => dispatch(updateContentAuth(e))}
                        value={user.email}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="text"
                        name="cpf"
                        label="CPF"
                        onChange={(e) => dispatch(updateContentAuth(e))}
                        value={user.cpf}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="date"
                        name="dateNascimento"
                        label="Data Nascimento"
                        onChange={(e) => dispatch(updateContentAuth(e))}
                        value={user.dateNascimento}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="text"
                        name="phone"
                        label="Celular"
                        onChange={(e) => dispatch(updateContentAuth(e))}
                        value={user.phone}
                        isRequired={true}
                        className="formInput"
                    />
                    <Selectbox
                        selected={user.sexo}
                        action={handleSelect}
                        name="sexo"
                        label="Sexo"
                        options={{
                            option: option
                        }}
                    />
                    <Selectbox
                        selected={user.civilState}
                        action={handleSelect}
                        name="civilState"
                        label="Estado Civil"
                        options={{
                            option: option2
                        }}
                    />
                </form>
            </div>
        </div>
    );
};

export default UserProfile;