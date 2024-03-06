import { Hearts } from 'react-loader-spinner'
import css from './Loader.module.css'
export default function Loader() {
    return (
        <div className={css.loader}>  
         <Hearts  height="80" width="80" color="#4fa94d"/>
        </div>
        
    )
}