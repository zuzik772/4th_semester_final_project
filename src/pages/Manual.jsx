import MainTitle from "../components/MainTitle";
import ManualQA from "../components/ManualQA";
import coffeeMachine from "../img/coffeeMachine.png";
export default function Manual() {
  return (
    <main className="w-full md:w-11/12 lg:w-3/5 p-2 sm:p-6 sm:pl-6 block lg:grid gap-6">
      <div>
        <MainTitle title="Manual" />
        <p className="text-md opacity-75 mb-4">Gain the expertise in all the areas</p>
      </div>

      <div className="flex flex-col gap-2 p-5 mb-5 lg:mb-0">
        <h3 className="text-lg font-bold">Table of contents</h3>
        <ol type="A" className="list-decimal ml-6 leading-8">
          <li>
            <a href="#commonQuestions">Common questions</a>
          </li>
          <li>
            <a href="#bookings">Bookings</a>
          </li>
          <li>
            <a href="#deliveries">Deliveries</a>
          </li>
          <li>
            <a href="#coffee">Coffee</a>
          </li>

          <ol type="a" className="list-disc ml-6">
            <li>
              <a href="#coffee">Espresso</a>
            </li>
            <li>
              <a href="#coffee">Americano</a>
            </li>
            <li>
              <a href="#coffee">Filter coffee</a>
            </li>
          </ol>

          <li>
            <a href="#coffeeMachine">Coffee machine cleaning guide</a>
          </li>
        </ol>
      </div>
      <div className="flex flex-col gap-6">
        <div className="p-5">
          <h2 id="commonQuestions" className="text-lg font-bold mb-2">
            Common questions
          </h2>
          <div className="flex flex-col gap-4 col-span-3 mb-5 lg:mb-0">
            <ManualQA
              question="Are the edges of the wall allowed on a route?"
              answer="It depends, we add “no edge” markers when they are NOT allowed."
            />
            <ManualQA
              question="When are you setting next and what?"
              answer="We set in West on Mondays and in South on Wednesdays."
            />
            <ManualQA
              question="How do the boulders work?"
              answer="You start on the 2 holds (or volumes or 1 hold) that are marked with white tags The
              problem is always by colour You finish with 2 hands securely on top of final hold of
              the climb (highest one on the wall) Do not climb over the top op the wall."
            />
            <ManualQA
              question="What grading do you use?"
              answer="ur boulders are graded both on the V Grade and the Font Grade. Each can be found
              across the gym with corresponding colours."
            />
          </div>
        </div>
        <div className="p-5">
          <h2 id="bookings" className="text-lg font-bold mb-2">
            Bookings{" "}
          </h2>
          <div className="flex flex-col gap-4 col-span-3 mb-5 lg:mb-0">
            <ManualQA
              question="How can I book a climbing session with a coach?"
              answer="You can find all the information on our website."
            />
          </div>
        </div>
        <div className="p-5">
          <h2 id="#deliveries" className="text-lg font-bold mb-2">
            Deliveries
          </h2>
          <div className="flex flex-col gap-4 col-span-3 mb-5 lg:mb-0">
            <ManualQA
              question="Storing"
              answer="Please store all delivery notes and receipts. Make sure to store frozen goods ASAP - Cannot stand out for more than a few minutes."
            />
            <ManualQA
              question="Marking"
              answer="Upon delivery, mark what was delivered on this sheet (both gyms)."
            />
            <ManualQA
              question="What NOT to do"
              answer="Never let a delivery on a palette be driven inside. If it is heavy and stays on a palette, have them unload it outside and unpack it there and move in afterwards."
            />
          </div>
        </div>
        <div className="p-5">
          <h2 id="coffee" className="text-lg font-bold mb-2">
            Coffee
          </h2>
          <div className="flex flex-col gap-4 col-span-3 mb-5 lg:mb-0">
            <ManualQA
              question="Espresso"
              answer="Espresso is the base of all other coffees we serve, and therefore it's the most important to perfect. Fill portafilter with coffee The surface must be level and even, and ideally you’re going for about 10-15 kilos of pressure depending on how fine the grind is. Use the small red cup-. What's more important is that the espresso takes between 25-31 seconds from when you press the button until the machine stops."
            />
            <ManualQA
              question="Americano"
              answer="Fill the mint colored cup (medium)  5/6 of the way with boiling water (ideally leave it to cool for a minute or two). Ready machine for making Espresso and pour over hot water and serve."
            />
            <ManualQA
              question="Filter coffee"
              answer="Open machine. Put coffee filter in (can be found in next to microwave with coffee supplies). Put 1 litre of water in machine. Put 5 doubleshots of coffee grounds in machine. Close lid. Turn on machine. Serve in a teal/mint cup."
            />
          </div>
        </div>
        <div className="p-5">
          <h2 id="coffeeMachine" className="text-lg font-bold mb-2">
            Coffee machine cleaning guide
          </h2>
          <img src={coffeeMachine} alt="Coffee machine cleaning guide" className="w-fit mb-6" />
          <div className="flex flex-col gap-4 col-span-3 mb-5 lg:mb-0">
            <ManualQA
              question="Group heads"
              answer="Remove portafilters from grouphead Run water through group head, while scrubbing residue off underside using metal brush Put ½ tsp cleaning powder in the closed portafilter, set it in group head and run cleaning cycle by holding button 4 and pressing button 1. Itshould take around 30 seconds."
            />
            <ManualQA
              question="Portafilters"
              answer="Take out screen filters and put them in the big milk jug along with a tsp. of cleaning powder and boiling water. Put them by the sink in kitchen and leave until the rest of the cleaning is done Wipe off portafilters, put the clean filters back in and attach them to the group heads."
            />
            <ManualQA
              question="Blank surfaces"
              answer="Take out the grate and drip tray and place on a piece of kitchen roll to avoid scratching the counter top. Spray with antibacterial spray and wipe off with kitchen roll. Surfaces must be shining and free from streaks. To clean metal surfaces on the machine, spray a bit of antibacterial spray on a piece of kitchen roll and go over all metal surfaces (including steam wands). Avoid spraying the machine directly as it will evaporate and leave streaks. Again, all surfaces must be shining and left without steaks. Wipe tamping mat."
            />
            <ManualQA
              question="Machine Top"
              answer="Replace kitchen roll on top of the machine and neatly restock cups. Clean tamper, and milk jugs and replace on machine top as well."
            />
            <ManualQA
              question="Grinder"
              answer="Empty and wash knock box, dry it off and replace. Wipe surfaces of grinder and knock box. Refill coffee grinder."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
