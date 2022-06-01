import "./widgetsLg.css"

export default function WidgetsLg() {

  const Button = ({type}) =>{
    return <button className={"widgetsLgButton " + type}>{type}</button>
  }
  return (
    <div className='widgetsLg'>
      <h3 className="widgetsLgTitle">Latest Transactions</h3>
      <table className="widgetsLgTable">
       <tbody>
       <tr className="widgetsLgTr">
          <th className="widgetsLgTh">Customer</th>
          <th className="widgetsLgTh">Date</th>
          <th className="widgetsLgTh">Amount</th>
          <th className="widgetsLgTh">Status</th>
        </tr>
        <tr className="widgetsLgTr">
          <td className="widgetsLgUser">
            <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" alt="" className="widgetsLgImg" />
            <span className="widgetsLgName">Sajid Ameen</span>
          </td>
          <td className="widgetsLgDate">28 Jan 2022</td>
          <td className="widgetsLgAmount">$863</td>
          <td className="widgetsLgStatus">
            <Button type= "Approved"/>
          </td>
        </tr>

        <tr className="widgetsLgTr">
          <td className="widgetsLgUser">
            <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" alt="" className="widgetsLgImg" />
            <span className="widgetsLgName">Nawshad Nawas</span>
          </td>
          <td className="widgetsLgDate">02 May 2022</td>
          <td className="widgetsLgAmount">$150</td>
          <td className="widgetsLgStatus">
            <Button type= "Pending"/>
          </td>
        </tr>

        <tr className="widgetsLgTr">
          <td className="widgetsLgUser">
            <img src="https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png" alt="" className="widgetsLgImg" />
            <span className="widgetsLgName">Amber Turd</span>
          </td>
          <td className="widgetsLgDate">03 March 2022</td>
          <td className="widgetsLgAmount">$0.50</td>
          <td className="widgetsLgStatus">
            <Button type= "Declined"/>
          </td>
        </tr>

        <tr className="widgetsLgTr">
          <td className="widgetsLgUser">
            <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" alt="" className="widgetsLgImg" />
            <span className="widgetsLgName">Bruce Wayne</span>
          </td>
          <td className="widgetsLgDate">23 March 2022</td>
          <td className="widgetsLgAmount">$99999</td>
          <td className="widgetsLgStatus">
            <Button type= "Approved"/>
          </td>
        </tr>

        <tr className="widgetsLgTr">
          <td className="widgetsLgUser">
            <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" alt="" className="widgetsLgImg" />
            <span className="widgetsLgName">Peter Parker</span>
          </td>
          <td className="widgetsLgDate">15 Jun 2022</td>
          <td className="widgetsLgAmount">$8.99</td>
          <td className="widgetsLgStatus">
            <Button type= "Approved"/>
          </td>
        </tr>
       </tbody>
        
      </table>

    </div>
  )
}
