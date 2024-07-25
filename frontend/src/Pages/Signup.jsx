import { Button } from "../Components/Button";
import { useEffect, useState } from "react"
import { Heading } from "../Components/Heading";
import { Inputbox } from "../Components/Inputbox";
import { Subheading } from "../Components/Subheading";
import { Warning } from "../Components/Warning";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={'Signup'}></Heading>
                    <Subheading label={'enter your informaton'}></Subheading>
                    <Inputbox onChange = {(e)=>{
                        setFirstName(e.target.value);
                    }}
                     placeholder={'john'} label={'First Name'}></Inputbox>
                    <Inputbox onChange = {(e)=>{
                        setLastName(e.target.value);
                    }}
                     placeholder={'doe'} label={'Last Name'}></Inputbox>

                    <Inputbox onChange = {(e)=>{
                        setUsername(e.target.value);
                    }} placeholder={'xyz@gmail.com'} label={'Email'}></Inputbox>

                    <Inputbox onChange = {(e)=>{
                        setPassword(e.target.value);
                    }} placeholder={'password'} label={'Password'}></Inputbox><br></br>

                    <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} 
           label={'Submit'}></Button>

                    <Warning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></Warning>
                </div>
            </div>
        </div>
    )
}