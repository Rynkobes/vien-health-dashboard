import { Global } from "@emotion/react"

const Fonts = () => 
  (
    <Global
    styles={`
      /* Airbnb Cereal book */
      @font-face {
        font-family:'Airbnb Cereal App';
        font-style: normal;
        font-weight: book
        font-display: swap;
        src: url('./fonts/AirbnbCereal-Book.ttf') format('ttf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;

      }

      /* Airbnb Cereal Medium */
      @font-face {
        font-family:'Airbnb Cereal App';
        font-style: normal;
        font-weight: medium;
        font-display: swap;
        src: url('./fonts/AirbnbCereal-Medium.ttf') format('ttf');
        
      }
      `}
  />
  )



export default Fonts