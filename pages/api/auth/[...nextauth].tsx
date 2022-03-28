import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({

  


    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: 'Iv1.b73fb80f6eb63fbb',
        clientSecret: '563567994aa9c32617f4d0407179304448c53038',
      }),
      Auth0Provider({
        clientId: 'jaoAFEzKr3P6FWQuITUhw9a5wA1kzSFd',
        clientSecret: 'yVBwZeEyJWV70m16WJFwzmRw1YaniCXZBI20hOU6j_6a9lEU7vLsae1E0wZ5XgFd',
        issuer: 'https://dev-z9u-tcgj.us.auth0.com'
      })

    ],
    callbacks: {
      session({ session, token, user }) {
        return session
      },
    },
  })