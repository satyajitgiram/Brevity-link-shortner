import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (<div>
        <main className="dark min-h-screen container">
            {/* header  */}

            {/* body  */}
            <Outlet/>
        </main>

        {/* footer  */}
        <div className="p-10 text-center bg-gray-800 mt-10">
            Made with Love by Satyajit Giram
        </div>

    </div>)
}

export default AppLayout