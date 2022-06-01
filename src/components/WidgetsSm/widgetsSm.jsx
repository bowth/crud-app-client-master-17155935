import "./widgetsSm.css"
import { Visibility } from "@material-ui/icons"

export default function WidgetsSm() {
  return (
    <div className='widgetsSm'>
        <span className="widgetsSmTitle">New Users</span>
        <ul className="widgetsSmList">

          <li className="widgetsSmListItem">
            <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" alt="" className="widgetsSmImg" />
            <div className="widgetsSmUser">
              <span className="widgetsSmUserName">Nawshad Nawas</span>
              <span className="widgetsSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetsSmButton">
              <Visibility className="widgetsSmIcon"/>
              Display
            </button>
          </li>

          <li className="widgetsSmListItem">
            <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" alt="" className="widgetsSmImg" />
            <div className="widgetsSmUser">
              <span className="widgetsSmUserName">Nawshad Nawas</span>
              <span className="widgetsSmUserTitle">Intern</span>
            </div>
            <button className="widgetsSmButton">
              <Visibility className="widgetsSmIcon"/>
              Display
            </button>
          </li>

          <li className="widgetsSmListItem">
            <img src="https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png" alt="" className="widgetsSmImg" />
            <div className="widgetsSmUser">
              <span className="widgetsSmUserName">Mary Curie</span>
              <span className="widgetsSmUserTitle">Researcher</span>
            </div>
            <button className="widgetsSmButton">
              <Visibility className="widgetsSmIcon"/>
              Display
            </button>
          </li>

          <li className="widgetsSmListItem">
            <img src="https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png" alt="" className="widgetsSmImg" />
            <div className="widgetsSmUser">
              <span className="widgetsSmUserName">Amber Turd</span>
              <span className="widgetsSmUserTitle">Death Eater</span>
            </div>
            <button className="widgetsSmButton">
              <Visibility className="widgetsSmIcon"/>
              Display
            </button>
          </li>

          <li className="widgetsSmListItem">
            <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" alt="" className="widgetsSmImg" />
            <div className="widgetsSmUser">
              <span className="widgetsSmUserName">Peter Parker</span>
              <span className="widgetsSmUserTitle">Student</span>
            </div>
            <button className="widgetsSmButton">
              <Visibility className="widgetsSmIcon"/>
              Display
            </button>
          </li>

          

      

        </ul>
    </div>
  )
}
