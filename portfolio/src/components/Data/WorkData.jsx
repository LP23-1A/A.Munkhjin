const data =[{
    suggest:"React"
},
{
    suggest:"Next.js"
},
{
    suggest:"Typescript"
},
{
    suggest:"Nest.js"
},
{
    suggest:"PostgreSQL"
},
{
    suggest:"Tailwindcss"
},
{
    suggest:"Figma"
},
{
    suggest:"Cypress"
},
{
    suggest:"Storybook"
},{
    suggest:"Git"
},
]
export default function Suggest() {
    return (
        <div className="flex wrap gap8px">
            {
                data.map((e)=>
                {
                    return (
                        <div className="flex">
                            <p className="suggestBg  textalign">{e.suggest}</p>
                        </div>
                    )
                })
            }
        </div>
    )
    
}