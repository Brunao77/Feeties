import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 1000px;
            padding-top: 80px;
          }
          @media (max-width: 750px) {
            main {
              max-width: 100%;
              padding-top: 10px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Layout
