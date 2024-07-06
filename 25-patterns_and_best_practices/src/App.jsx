import Accordian from "./components/Accordian/Accordian";
import AccordianItem from "./components/AccordianItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordian className="accordian">
          <AccordianItem className="accordian-item" title="We've got 20 years of experience.">
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the businees of planning highly individualized vaation trips for more than 20 years.</p>
            </article>
          </AccordianItem>
          <AccordianItem className="accordian-item" title="We're working with local guides.">
            <article>
              <p>We are not doing this alone from our office.</p>
              <p>We are working alongside local guides to ensure a safe and pleasant vacation.</p>
            </article>
          </AccordianItem>
        </Accordian>
      </section>
    </main>
  );
}

export default App;
