export default function TrendingProps(props){
    return(
        <>
        <div className="" style={{backgroundImage: `url(${props.img})`}}>
            <p>
                {props.tag}
            </p>
            <p>
                {props.desc}
            </p>
        </div>
        </>
    )
}