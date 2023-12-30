import { Outlet } from "react-router-dom"
import "./forms.style.scss";




export const Forms = () => {
    return (
        <section className="forms-container">
            <Outlet/>
        </section>
    )
}