import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import EmailProvider from 'next-auth/providers/email'
import clientPromise from '../../../lib/mongodb'

const THIRTY_DAYS = 30 * 24 * 60 * 60
const THIRTY_MINUTES = 30 * 60

export default NextAuth({
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: THIRTY_DAYS,
    updateAge: THIRTY_MINUTES
  },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    })
  ]
})
