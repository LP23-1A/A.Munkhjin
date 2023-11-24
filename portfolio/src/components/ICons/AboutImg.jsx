 export default function Draw(props) {
    return (
<>
<div>
    <img className="imgSize" src={props.url} />
    <p>
        {props.title}
    </p>
</div>
</>
    )
    
 }