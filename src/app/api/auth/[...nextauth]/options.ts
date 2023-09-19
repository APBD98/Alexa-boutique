import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import  CredentialsProvider  from "next-auth/providers/credentials";

export const options:NextAuthOptions = {
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                username: {
                    label: "username",
                    type: "text",
                    placeholder:"your username"
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "your password"
                }
            },
            async authorize(credentials){

                const user={id:'42', name:'azrai', password:'000'}

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else return null
            }
        })
    ],
    
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