import { breakpoints, colors, fonts } from '../styles/theme'

const Description = ({ description, instagram, twitter }) => {
  return (
    <>
      <article>
        <h3>Descripción</h3>
        <section>
          <p>{description}</p>
        </section>
        <h3>Contacto</h3>
        <section className="contact-section">
          {twitter && (
            <a href={twitter} target="_blank" rel="noreferrer">
              <img src="/twitter.svg" />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer">
              <img src="/instagram.svg" />
            </a>
          )}
        </section>
      </article>
      <style jsx>
        {`
          article {
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            padding: 10px;
            width: 100%;
            background: ${colors.white};
            gap: 10px;
            box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
          }
          h3 {
            font-size: ${fonts.subtitle.desktop};
            margin: 0;
          }
          section {
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          p {
            font-size: ${fonts.text.desktop};
            margin: 0;
          }
          .contact-section {
            display: flex;
            gap: 10px;
          }
          img {
            width: 30px;
            height: 30px;
          }
          @media (max-width: ${breakpoints.mobile}) {
            article {
              max-width: 350px;
            }
          }
        `}
      </style>
    </>
  )
}
export default Description
