import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import { breakpoints, colors } from '../styles/theme'

const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <Link href="/">
            <a>
              <img src="/logo.svg" />
            </a>
          </Link>
          <section className="search-section">
            <input type="search" />
            <button>
              <BsSearch />
            </button>
          </section>
          {/* <section className="options-section">
            <Link href="/">
              <a>Perdidos</a>
            </Link>
            <Link href="/">
              <a>Adopcion</a>
            </Link>
            <FaUserAlt color="white" size="30" />
  </section> */}
        </nav>
      </div>
      <style jsx>
        {`
          div {
            height: 100%;
            width: 100%;
            box-shadow: none;
            background: ${colors.primary};
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            position: sticky;
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
            max-width: 1000px;
            padding: 0 24px;
            margin: 0 auto;
            box-shadow: none;
            font-size: max(1vw, 16px);
          }
          img {
            width: 60px;
            height: 60px;
          }
          .search-section {
            display: flex;
            align-items: center;
            max-width: 450px;
            width: 100%;
            background: ${colors.white};
            border-radius: 10px;
            padding: 0 10px 0 10px;
          }
          button {
            height: 35px;
            width: 10%;
            cursor: pointer;
            border: none;
            background: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .options-section {
            display: flex;
            align-items: center;
            gap: 30px;
          }
          a {
            color: ${colors.white};
            text-decoration: none;
          }
          input {
            width: 90%;
            height: 50%;
            border-radius: none;
            border: none;
          }
          input:focus {
            outline: none;
          }
          @media (max-width: ${breakpoints.mobile}) {
            img {
              width: 40px;
              height: 40px;
            }
            .search-section {
              max-width: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Navbar
