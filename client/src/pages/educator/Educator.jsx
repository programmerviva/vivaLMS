import { Outlet } from "react-router-dom"

function Educator() {
  return (
    <div>Educator

      <div>
          {<Outlet />}
      </div>
    </div>
  )
}

export default Educator