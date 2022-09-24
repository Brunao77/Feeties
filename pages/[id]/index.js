import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import Donation from '../../components/Donation'
import Description from '../../components/Description'

const UserPage = ({ user }) => {
  return (
    <>
      <section>
        <img className="banner-photo" src={user.banner_photo} />
        <img className="profile-photo" src={user.profile_photo} />
      </section>
      <h1>{user.username}</h1>
      <div>
        <Description
          description={user.description}
          instagram={user.instagram}
          twitter={user.twitter}
        />
        <Donation />
      </div>
      <style jsx>
        {`
          section {
            width: 100%;
            height: 250px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .banner-photo {
            width: 100%;
            height: 250px;
            border-radius: 5px;
          }
          .profile-photo {
            position: relative;
            top: -50px;
            width: 120px;
            height: 120px;
            border-radius: 999px;
            border: 5px solid #fff;
          }
          div {
            width: 100%;
            height: 100%;
            display: grid;
            gap: 20px;
            grid-template-columns: auto auto;
          }
          @media (max-width: 750px) {
            div {
              gap: 10px;
              grid-template-columns: auto;
              justify-items: center;
            }
            h1 {
              margin: 0;
            }
            .profile-photo {
              width: 120px;
              height: 120px;
            }
          }
        `}
      </style>
    </>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const data = await User.findById(params.id).lean()
  const user = JSON.parse(JSON.stringify(data))

  return { props: { user } }
}

export default UserPage
