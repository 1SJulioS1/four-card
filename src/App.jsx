import mag_glass from "./assets/icon-supervisor.svg";
import calculator from "./assets/icon-calculator.svg";
import karma from "./assets/icon-karma.svg";
import team from "./assets/icon-team-builder.svg";
function App() {
  return (
    <main className="flex justify-center items-center font-poppins text-[15px] text-[hsl(212_6%_44%)] mt-15">
      <article className="flex flex-col gap-15 justify-center items-center mx-7">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[2rem] font-extralight">
            Reliable, efficient delivery
          </h1>
          <h2 className="text-[2rem] font-bold">Powered by Technology</h2>
          <p className=" text-center pt-4 text-[hsl(234_12%_34%)] max-w-[32rem]">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="flex flex-col gap-8 desk:flex-row  desk:justify-center desk:items-center">
          <div className=" h-[15rem] p-5 border-t-4 rounded-lg max-w-[30rem] shadow-2xl border-t-[hsl(180_62%_55%)] flex flex-col">
            <h3 className="text-[1.3rem] font-bold">Supervisor</h3>
            <p className="py-1 max-w-[20rem]">
              Monitors activity to identify project roadblocks
            </p>
            <div className="h-[40%]  ml-auto">
              <img
                src={mag_glass}
                alt="Icon for supervisor"
                className="size-16 mt-6"
              />
            </div>
          </div>
          <div className="desk:flex desk:flex-col desk:gap-8">
            <div className=" h-[15rem] p-5 border-t-4 rounded-lg max-w-[30rem] shadow-2xl border-t-[hsl(0_78%_62%)] flex flex-col ">
              <h3 className="text-[1.3rem] font-bold">Team Builder</h3>
              <p className="py-1 max-w-[20rem]">
                Scans our talent network to create the optimal team for your
                project
              </p>
              <div className="h-[40%]  ml-auto">
                <img src={team} alt="Icon for team" className="size-16 mt-6" />
              </div>
            </div>

            <div className=" h-[15rem] p-5  border-t-4 rounded-lg max-w-305rem] shadow-2xl border-t-[hsl(34_97%_64%)] flex flex-col">
              <h3 className="text-[1.3rem] font-bold">Karma</h3>
              <p className="py-1 max-w-[20rem]">
                Regularly evaluates our talent to ensure quality
              </p>
              <div className="h-[40%]  ml-auto">
                <img
                  src={karma}
                  alt="Icon for karma"
                  className="size-16 mt-6"
                />
              </div>
            </div>
          </div>

          <div className=" h-[15rem] p-5 border-t-4 rounded-lg max-w-[30rem] shadow-2xl border-t-[hsl(212_86%_64%)] flex flex-col">
            <h3 className="text-[1.3rem] font-bold">Calculator</h3>
            <p className="py-1 max-w-[20rem]">
              Uses data from past projects to provide better delivery estimates
            </p>
            <div className="h-[40%]  ml-auto">
              <img
                src={calculator}
                alt="Icon for calculator"
                className="size-16 mt-6"
              />
            </div>
          </div>

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
