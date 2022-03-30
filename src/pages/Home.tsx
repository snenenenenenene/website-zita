import { motion } from "framer-motion";
import { Button } from "../components/Button";

export const Home = () => {
  return (
    <div className="md:p-20 p-12 mt-10 -mb-20 md:w-full overflow-hidden w-screen flex flex-col">
      <header className="fancy-text md:text-[76px] text-[3rem] flex md:flex-row flex-col leading-[63px]">
        <div className="w-[90%]">
          <h1>Freelance</h1>
          <h1 className="ml-[10%]">Illustrator &amp;</h1>
          <h1>Photographer</h1>
        </div>
        <Button className="uppercase h-fit flex md:ml-auto justify-center md:mt-0 mt-5 text-2xl">
          <a href="./zita-celis-resume.pdf" target="blank">
            My Resume
          </a>
        </Button>
      </header>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: "0", opacity: 1, transition: { duration: 0.5 } }}
        className="flex md:flex-row flex-col h-full mt-5 overflow-hidden"
      >
        <div className="md:w-[40%] md:min-w-[40%] md:max-w-[40%] w-full text-[1rem] md:mx-10 leading-[38px] text-justify uppercase">
          &emsp; &emsp; Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Hic minima tempora voluptatum debitis, doloribus cumque
          laboriosam odio, sed nam consequuntur nesciunt aut?
          <br />
          <br />
          Ipsa illo nobis, perspiciatis impedit vel explicabo reiciendis
          deserunt iusto mollitia. Asperiores dolores libero alias pariatur.
          Ducimus excepturi assumenda itaque necessitatibus quasi
        </div>
        <div className="md:w-[60%] md:min-w-[50%] w-full md:-my-10 h-[450px] overflow-hidden">
          <motion.img
            initial={{ x: "300px", opacity: 0 }}
            animate={{ x: "0", opacity: 1, transition: { duration: 1.5 } }}
            className="w-full h-full object-cover"
            src="https://media-exp1.licdn.com/dms/image/C4E16AQET6ZYu6EaW5g/profile-displaybackgroundimage-shrink_350_1400/0/1645964406739?e=1653523200&v=beta&t=kX3BcN3JF7l6tCz7wntktOtjBSxXhzp8t5HpF4cCysk"
          />
        </div>
      </motion.div>
    </div>
  );
};
