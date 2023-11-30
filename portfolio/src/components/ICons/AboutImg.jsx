 export default function Draw(props) {
    return (
<>
<div className="flex items-center flex-col">
    <img className="imgSize" src={props.url} />
    <p>
        {props.title}
    </p>
</div>
</>
    )
    
 }