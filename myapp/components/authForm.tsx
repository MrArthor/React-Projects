import {Box, Flex, Input, Button} from '@chakra-ui/react'
import { Router, useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import { auth } from '../lib/mutations'
import {FC, useState} from 'react';
import NextImage from 'next/image';

const AuthForm: FC<{mode: 'signin' | 'signup'}> =({mode})=>{
    const [email,setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [isLoading, setIsLoading]= useState(false)
    const router=useRouter()
    const handleSubmit=async (e)=>{
        e.preventDefault()
        setIsLoading(true)
        await auth(mode, {email,password})
        setIsLoading(false)
        router.push('/')
    }
    return (
        <Box height="100vh" width="100vw" bg="black">
            <Flex justify="center" align="center" height="100px" borderBottom="white 1px solid">
                <NextImage src="/logo.png" alt={''} height={60} width={120}/>
            </Flex>
            <Flex justify="center" align="center" height="calc(100vh - 100px)">
                <Box padding="50px" bg="gray.900" borderRadius="6px">
                    <form onSubmit={handleSubmit}>
                        <Input placeholder='email' type="email" onChange={e=>setEmail(e.target.value)}/>
                        <Input placeholder='password' type="password" onChange={e=>setPassword(e.target.value)}/>
                        <Button type='submit' bg="green.500" isLoading={isLoading} sx={{'&:hover':{
                            bg: 'green.400'
                        }}} >{mode}</Button>
                    </form>
                </Box>
            </Flex>
        </Box>
    )

}

export default AuthForm;