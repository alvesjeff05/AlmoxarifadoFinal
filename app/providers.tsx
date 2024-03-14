'use client'
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function Providers({children} : {children: React.ReactNode}){
    return(
        <NextUIProvider className='bg-white'>
            <NextThemeProvider attribute='class' defaultTheme='light'>
                {children}
            </NextThemeProvider>
        </NextUIProvider>
    )
}