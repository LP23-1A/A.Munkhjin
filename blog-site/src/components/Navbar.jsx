import MetaBLogIcon from "@/Icons/MetablogIcon"
export default function Navbar(props) {
    return(
        <div className=" flex justify-between items-center py-[32px] px-[352px]">
        <MetaBLogIcon onClick={props.home}/>
        <div className="flex gap-[40px] ">
            <p className=" hover:cursor-pointer" onClick={props.home}>Home</p>
            <p className=" hover:cursor-pointer" onClick={props.blog}>
                Blog
            </p>
            <p onClick={props.contact} className=" hover:cursor-pointer">
                Contact
            </p>
        </div>
        <div className="flex bg-[#F4F4F5] items-center px-[16px] py-[8px]">
            <input className=" bg-[#f4f4f5] w-[142px] h-[20px]" type="text"  placeholder="Search"/>
            <img  className="h-[16px] w-[16px]" src="data:image/webp;base64,UklGRswBAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSDYBAAABJyAQSOFmFxHRgOvatqLmghaQgQIyUADJogCR039T6ntm/I7o/wTon751yKf9LqznsNOF7Rp2uWCtu3QTaYeGM7gOLO9RuvZFdbXFSaszQPAAnLU5A8lRgKztA4BjBoJBD2CwAUlmIJkuQLQ1qKYJquwXIFhmSA51GCxA9DQYHcEzQTZcoMp7cWXXATCUPWSbYPyI8JoZ4ms6hNcAMqXXXCC/rLouUA0HwFUgGwRET4NkmWH0dBgtDbLjAERLAYJtAmQ9AMnWIZvUoZoKMNomIFk6EGwHgLjVgCpnA2pYe7AcHIXlafFktTrUFpA724PjsLZZgepQsYUODA49LFEFqB49tqKkDgweXebFPUhSAapL0jVoswPDDtYC1JeoA8NLClBfog7ElxRgfIn6ywrE12jO+ocBVlA4IHAAAABQBwCdASpAAEAAPt1iqUyopiQiJhqtiRAbiWkA06StMnes23mkxiXRhCHXS14rh56iBxL8NmNaiiCi5sFXO2xPqGwAAP7/HvJ/LklT0OZKf9e5R//88twnqlrf0OBmG/8s96YM+PhGf/6IjKV0AAAA" alt="" />
            </div>
        </div>
    )
    
}