import { Outlet } from "react-router";

function EnterpiseResources() {

    return ( 
        <>
          <div className="container">
              <Outlet/>
          </div>
        </>
     );
}

export default EnterpiseResources;