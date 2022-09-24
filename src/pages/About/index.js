import girl from "../../assets/person-working-from-home (1).png";
import "./styles.scss";
export const About = () => {
  return (
    <div className="about__page">
      <div className="about__image-wrapper">
        <img src={girl} alt="Girl working from home" />
      </div>
      <div>
        <div className="about__title">
          <h1>Hi, I'm Agata</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet. Aut corporis aliquam et repudiandae ipsa
          et sint enim. Est nesciunt dolor a totam corporis sed autem totam sed
          amet porro! Et eveniet quos ad delectus ipsam in vitae vero et tenetur
          debitis. Quo ipsam et tempora galisum sit dolorem adipisci et dolor
          sint qui minima omnis. Est veritatis ipsum ut corporis blanditiis sit
          tempora soluta aut ducimus dicta ad sunt odit! Et ipsa odit cum minus
          quos ut dignissimos sunt! Qui dolor maiores aut unde eligendi sit
          blanditiis beatae ut illo labore ut pariatur minus At sint ratione et
          internos aliquid.
        </p>
      </div>
    </div>
  );
};
