import { EXAMPLES } from "../data";
import Section from "./Sectoin";
import TabButton from "./TabButton";
import { useEffect, useState } from 'react';
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handelSelect(selectedButton) {
        setSelectedTopic(selectedButton)
    }


    let tabContent = <p>Please Select a Topic</p>;

    if (selectedTopic) {
        tabContent = (<div id='tab-content'>
            <h3> {EXAMPLES[selectedTopic].title} </h3>
            <p>{EXAMPLES[selectedTopic].descriptin}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>)
    }

    return (
        <Section title={'Exapmles'} id='examples'>
            <Tabs
                button={
                    <>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handelSelect('components')} label="components" ></TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handelSelect('jsx')} label="jsx" ></TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handelSelect('props')} label="props" ></TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handelSelect('state')} label="state" ></TabButton>
                    </>} >
                {tabContent}
            </Tabs>


        </Section>
    )
}