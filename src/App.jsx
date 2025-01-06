
// const pixabayImgCode = 'https://media.istockphoto.com/id/939787416/photo/two-female-programmers-working-on-new-project-they-working-late-at-night-at-the-office.jpg?s=1024x1024&w=is&k=20&c=_NpViLkSKMjcCculrlkpOoefQOnrdLUUliNEDEz9KUQ=';


import { CORE_CONCEPTS } from './data.js';
import Header from './assets/components/Header/Header.jsx';
import CoreConcept from './assets/components/CoreConcept.jsx';
import TabButton from './assets/components/TabButton.jsx';
import { useEffect, useState } from 'react';
import { EXAMPLES } from './data.js'




function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  return (
    <>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core concepts</h2>
          <ul>

            {CORE_CONCEPTS.map((consept) => (
              // console.log(consept),

              <CoreConcept key={consept.title} {...consept} ></CoreConcept>
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Exapmles</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handelSelect('components')} label="components" ></TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handelSelect('jsx')} label="jsx" ></TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handelSelect('props')} label="props" ></TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handelSelect('state')} label="state" ></TabButton>
          </menu>
          {!selectedTopic && <p>Please Select a Topic </p>}

          {selectedTopic &&
            <div id='tab-content'>
              <h3> {EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].descriptin}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>}

        </section>
      </main>
    </>
  );
}

export default App;
