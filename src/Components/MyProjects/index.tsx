import ListItem from '../AboutMe/ListItem'
import './Projects.css'
export default function MyProjects() {
    const projects = [
        {
            name: 'Project name',
            descr: "I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio",
            listItem: [
                'lorem'
            ],
            img: require('../../img/project1.jpg')
        },
        {
            name: 'Project name',
            descr: "I'm software developer and this is my portfolio",
            listItem: [
                'lorem',
                'hello'
            ],
            img: require('../../img/project3.jpg')
        },
        {
            name: 'Project name',
            descr: "I'm software developer and this is my portfolio",
            listItem: [
                'lorem',
                'hello',
                'hello lorem',
                'lorem again'
            ],
            img: require('../../img/project1.jpg')
        }
    ]
    return (
        <div className="projects" id='projects'>
            {projects.map((item, index)=>{
                return (
                    <div key={index} className={projects.indexOf(item) % 2 === 0 ? 'projects__wrapper' : 'projects__wrapper projects__wrapper_reversed'}>
                        <img src={item.img} alt="project" className="project__image"/>
                        <div className="project__item">
                            <div className="project__name">{item.name}</div>
                            <div className="project__descr">{item.descr}</div>
                            <div className="listItem__wrapper">
                                {item.listItem.map((item, index)=>{
                                    return (
                                        <ListItem descr={item} key={index}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    ) 
}