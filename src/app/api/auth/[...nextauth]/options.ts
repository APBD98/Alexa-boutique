import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import  CredentialsProvider  from "next-auth/providers/credentials";
import getUsers from "./getUsers";

export const options:NextAuthOptions = {
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email: {
                    label: "email",
                    type: "text",
                    placeholder:"your email"
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "your password"
                }
            },
            async authorize(credentials){
                if(!credentials || !credentials.email || !credentials.password) return null

                const users= await getUsers()
                const user = users.find((item:any) => item.email === credentials.email)
                if(user?.password === credentials.password){
                    return user
                }else{
                    return null
                }

            }
        })
    ],

    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
      },
    
    
    callbacks: {
        jwt({ token, account, user }) {
            if (account) {
              token.accessToken = account.access_token
              token.id = user?.id
            }
            return token
          },
        session({ session, token }) {
              
              session.user.id = token.id;
        
              return session;
        },
      },
    
    session:{
        strategy:'jwt'
    }
}