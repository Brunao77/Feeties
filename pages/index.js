import dbConnect from '../lib/dbConnect'
import User from '../models/User'
import Link from 'next/link'

const Index = ({ users }) => {
  return (
    <>
      <div>
        {users.map((user, index) => (
          <Link key={index} href={`/${user._id}`}>
            <a>
              <article>
                <img src={user.banner_photo} />
                <h2>{user.username}</h2>
                <span>{user.city}</span>
              </article>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>
        {`
          div {
            width: 100%;
            height: 100%;
            display: grid;
            gap: 20px;
            grid-template-columns: auto auto auto;
          }
          a {
            color: black;
            text-decoration: none;
            background: white;
            border-radius: 10px;
          }
          article {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            padding-bottom: 20px;
            width: max(18vw, 200px);
            border-radius: 10px;
            box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
          }
          img {
            width: 100%;
            border-radius: 10px 10px 0 0;
          }
          h2 {
            margin: 0;
          }
          @media (max-width: 750px) {
            div {
              gap: 10px;
              grid-template-columns: auto auto;
            }
            article {
              width: 150px;
            }
            img {
              height: 70px;
            }
            h2 {
              font-size: 20px;
            }
            span {
              font-size: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const result = await User.find({})
  const users = result.map((doc) => {
    const user = JSON.parse(JSON.stringify(doc))
    return user
  })
  return { props: { users } }
}

export default Index
