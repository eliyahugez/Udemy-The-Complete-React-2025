export default function CoreConcept({ image, title, description }) {

    return (
        <li>
            {console.log(image, title, description)
            }
            <img src={image} alt={title} />
            <h3>  {title} </h3>
            <p> {description} </p>

        </li>
    )
}