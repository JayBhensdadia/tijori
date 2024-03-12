import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Checkbox, DarkThemeToggle, Label, TextInput, Toast } from 'flowbite-react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import Header from '../components/Header';
import FooterComp from '../components/Footer';


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);


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
        setIsLoading(true);

        const { msg } = await loginUser({ email, password });

        setTimeout(() => {
            setIsLoading(false);
            navigate("/home");

        }, 3000);
    }


    return (
        <div className='w-full h-screen flex flex-col justify-between items-center dark:bg-slate-800'>

            <Header />


            <form onSubmit={handlFormSubmit} className="flex max-w-md flex-col gap-4 p-5 sm:min-w-[400px] border-2 border-slate-400 rounded-lg">
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
                <Button className={cn({
                    'hidden': isLoading
                })} type="submit">Submit</Button>
                <Button className={cn({
                    'hidden': !isLoading,
                })} isProcessing>Loggin in...</Button>
            </form>


            <FooterComp />
        </div>
    )
}

export default Login