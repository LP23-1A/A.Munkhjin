import { uuid as id4 } from "uuidv4"
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
        <div className="flex wrap gap-3 w450px">
            {
                data.map((e)=>
                {
                    let key =id4
                    return (
                        <div key={key} className="flex">
                            <p className="suggestBg   textalign dark:bg-[#374151] dark:text-white">{e.suggest}</p>
                        </div>
                    )
                })
            }
        </div>
    )
    
}