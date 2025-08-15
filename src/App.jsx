import mag_glass from "./assets/icon-supervisor.svg";
import calculator from "./assets/icon-calculator.svg";
import karma from "./assets/icon-karma.svg";
import team from "./assets/icon-team-builder.svg";
import Card from "./components/Card";
function App() {
  return (
    <main className="flex justify-center items-center font-poppins text-[15px] text-[hsl(212_6%_44%)] mt-15">
      <article className="flex flex-col gap-15 justify-center items-center mx-7">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[1.5rem] desk:text-[2rem] font-extralight">
            Reliable, efficient delivery
          </h1>
          <h2 className="text-[1.5rem] desk:text-[2rem] font-bold">
            Powered by Technology
          </h2>
          <p className=" text-center pt-4 text-[hsl(234_12%_34%)] max-w-[32rem]">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="flex flex-col gap-8 desk:flex-row  desk:justify-center desk:items-center">
          <Card
            title="Supervisor"
            info="Monitors activity to identify project roadblocks"
            icon={mag_glass}
            color="hsl(180, 62%, 55%)"
          />

          <div className="desk:flex desk:flex-col desk:gap-8">
            <Card
              title="Team Builder"
              info="Scans our talent network to create the optimal team for your project"
              icon={team}
              color="hsl(0, 78%, 62%)"
            />
            <Card
              title="Karma"
              info="Regularly evaluates our talent to ensure quality"
              icon={karma}
              color="hsl(34, 97%, 64%)"
            />
          </div>
          <Card
            title="Calculator"
            info="Uses data from past projects to provide better delivery estimates"
            icon={calculator}
            color="hsl(212, 86%, 64%)"
          />

          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
