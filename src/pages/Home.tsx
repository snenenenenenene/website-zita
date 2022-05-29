import { motion } from "framer-motion";
import { Button } from "../components/Button";
import image from "../assets/pictures/IMG_3783.jpg";
export const Home = () => {
  return (
    <div className="md:p-20 px-2 py-10 mt-10 -mb-20 md:w-full overflow-hidden w-screen flex flex-col">
      <header className="fancy-text z-0 md:text-[76px] text-[3rem] flex md:flex-row flex-col leading-[63px]">
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
          &emsp; &emsp; Find out more about me by clicking on "My Resume" or by
          looking at my work.
          <br></br>
          <br></br>
          Want to contact me? <b>Go to my instagram or linkedin!</b>
        </div>
        <div className="md:w-[60%] md:min-w-[50%] rounded-lg w-full md:-my-10 h-[450px] overflow-hidden">
          <motion.img
            initial={{ x: "300px", opacity: 0 }}
            animate={{ x: "0", opacity: 1, transition: { duration: 1.5 } }}
            className="w-full h-full object-cover rounded-lg"
            src={image}
          />
        </div>
      </motion.div>
    </div>
  );
};
