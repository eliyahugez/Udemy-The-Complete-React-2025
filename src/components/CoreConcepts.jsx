import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept.jsx"

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Core concepts</h2>
            <ul>

                {CORE_CONCEPTS.map((consept) => (
                    // console.log(consept),

                    <CoreConcept key={consept.title} {...consept} ></CoreConcept>
                ))}
            </ul>
        </section>
    )
}

