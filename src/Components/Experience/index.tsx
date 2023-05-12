import '../../Title.css';
import './Experience.css'
import Job from './Job';
export default function Experience() {
    const works = [
        {
            role: "The Role at the Company",
            city: 'Country, city',
            descr: "I'm software developer and this is my portfolio.",
            years: '2021-2022'
        },
        {
            role: "The Role at the Company",
            city: 'Country, city',
            descr: "I'm software developer and this is my portfolio.",
            years: '2021-2022'
        }
    ]
    return (
        <div className='experience' id='experience'>
            <div className="title">Experience</div>
            {works.map((item, index)=>{
                return <Job key = {index} role={item.role} city={item.city} descr={item.descr} years={item.years}/>
            })}
        </div>
    )
}