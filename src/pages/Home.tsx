import { Button } from "../components/Button";

export const Home = () => {
  return (
    <div className="p-20 flex flex-col">
      <header className="fancy-text text-[76px] flex leading-[63px]">
        <div className="w-[90%]">
          <h1>Freelance</h1>
          <h1 className="ml-[10%]">Illustrator &amp;</h1>
          <h1>Photographer</h1>
        </div>
        <Button className="uppercase h-fit flex ml-auto text-2xl">
          <a href="./zita-celis-resume.pdf" target="blank">
            My Resume
          </a>
        </Button>
      </header>
      <div className="flex h-full mt-5">
        <div className="w-[40%] min-w-[40%] max-w-[40%] text-[22px] mx-10 leading-[38px] text-justify uppercase">
          &emsp; &emsp; Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Hic minima tempora voluptatum debitis, doloribus cumque
          laboriosam odio, sed nam consequuntur nesciunt aut?
          <br />
          <br />
          Ipsa illo nobis, perspiciatis impedit vel explicabo reiciendis
          deserunt iusto mollitia. Asperiores dolores libero alias pariatur.
          Ducimus excepturi assumenda itaque necessitatibus quasi
        </div>
        <div className="w-[60%] min-w-[50%] -my-10 h-[450px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://media-exp1.licdn.com/dms/image/C4E16AQET6ZYu6EaW5g/profile-displaybackgroundimage-shrink_350_1400/0/1645964406739?e=1653523200&v=beta&t=kX3BcN3JF7l6tCz7wntktOtjBSxXhzp8t5HpF4cCysk"
          />
        </div>
      </div>
    </div>
  );
};
