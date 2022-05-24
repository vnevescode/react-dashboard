import React,{ useState } from 'react'
import { useForm } from 'react-hook-form'
import{
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Center
} from "@chakra-ui/react"

const Form = () => {

    const [show, setShow] = useState(false)

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting}
    } = useForm();

    const registerOptions = {        
        email: { 
            required: "Email is required",
            pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
            } 
        },
        password: {
          required: true,
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        }
      };

    const onSubmit = (values) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                alert(JSON.stringify(values));
                resolve();
            },3000);
        });
    } 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.email && errors.password}>
                {/* E-mail */}
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                    id="email"
                    type="email"                    
                    variant='filled'
                    placeholder="example@loomi.com.br"
                    {...register("email",  registerOptions.email )}
                ></Input>
                <FormErrorMessage>
                    {errors?.email && errors.email.message}
                </FormErrorMessage>
                {/* Password */}
                <FormLabel htmlFor="password" mt={4}>Senha</FormLabel>
                <Input
                    id="password"
                    variant='filled'
                    type={show ? 'text' : 'password'}
                    placeholder="at least 8 characters"
                    {...register("password", registerOptions.password)}
                ></Input>
                <FormErrorMessage>
                    {errors?.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <Center>                
                <Button
                mt={4}
                colorScheme="purple"
                isLoading={isSubmitting}
                type="submit"
            >
                Entrar
            </Button>
            </Center>            
        </form>
    );
}

export default Form