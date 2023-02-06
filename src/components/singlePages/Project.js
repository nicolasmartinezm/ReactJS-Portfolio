import classes from "../../styles/singlePageStyles/SingleProjects.module.css";

const Project = (props) =>{
  console.log(Object.values(props.imgSource).join(''))
  console.log(props.title)
   
    return (
        <div className={classes.project}>
            <img
              src={Object.values(props.imgSource).join('')}
              alt={props.alt}
              width="100%"
            />
            
            <h1>{props.title}</h1>
            <h2>{props.tags}</h2>
            <a
              href={props.href}
              target="_blank"
              rel="noreferrer"
              alt={props.alt}
            >
              {props.isLive===true?'GO TO LIVE WEBSITE': 'CHECK THE CODES'}
            </a>
          </div>
    )
        

    

}
export default Project;