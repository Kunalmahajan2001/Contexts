import React, { useContext } from 'react';
import { ThemeContext } from '../Context/thrmscontext';

function Content() {

    const {theme,updateTheme}=useContext(ThemeContext)
     console.log(theme)
  return (
    <>
      <p  style={{backgroundColor:theme=="light"?"black":"white",color:theme=='light'?"white":"black"} }>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eius voluptas saepe alias ex a sapiente iusto, consectetur hic, repudiandae fugiat natus asperiores ad, mollitia unde eligendi perferendis pariatur atque.
        Suscipit cumque nesciunt rerum doloremque saepe maiores odit unde provident ex porro fugit, quod modi aliquam recusandae officia, voluptates eveniet, at ab odio nisi? Vitae exercitationem possimus iusto labore dolor.
        Nam quod assumenda animi voluptas consectetur, modi impedit? Molestias quis consectetur asperiores ducimus maiores ab reprehenderit similique error ullam, exercitationem rerum odit quo ea repellat a? Nemo harum dolore aperiam?
        {/* Additional content */}
      </p>
    </>
  );
}

export default Content;
