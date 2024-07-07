import Accordion from "./components/Accordion/Accordion.jsx";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Title 
              className="accordion-item-title" 
              id="experience"
            > 
              We've got 20 years of experience. 
            </Accordion.Title>
            <Accordion.Content 
              className="accordion-item-content" 
              id="experience"
            >
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>We are in the businees of planning highly individualized vaation trips for more than 20 years.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item 
            
            className="accordion-item"
          >
            <Accordion.Title 
              className="accordion-item-title" 
              id="local-guides" 
            >
              We're working with local guides.
            </Accordion.Title>
            <Accordion.Content 
              className="accordion-item-content" 
              id="local-guides" 
            >
              <article>
                <p>We are not doing this alone from our office.</p>
                <p>We are working alongside local guides to ensure a safe and pleasant vacation.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
