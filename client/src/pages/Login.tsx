import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Checkbox, Label, TextInput, Toast } from 'flowbite-react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }


    const handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }


    const handlFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { msg } = await loginUser({ email, password });
        navigate("/home");
    }


    return (
        <div className='w-full h-screen flex justify-center items-center'>

            <form onSubmit={handlFormSubmit} className="flex max-w-md flex-col gap-4 p-5 min-w-[400px] border-2 rounded-lg">
                <p className='text-3xl text-slate-500 font-semibold'>Login</p>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput onChange={handleEmailChange} id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput onChange={handlePasswordChange} id="password1" type="password" required />
                </div>
                <Button type="submit">Submit</Button>
            </form>


        </div>
    )
}

export default Login