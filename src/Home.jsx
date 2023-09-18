import { Link } from "react-router-dom";
import { I18nCaseroEs } from "./i18nCasero";
import { I18nCaseroEn } from "./I18nCaseroEn";

export const Home = () => {
    return (
        <>
            <div>
                <h1>Elegir idioma / Choose language</h1>
                <Link to="es">Español</Link>
                <Link to="en">English</Link>
            </div>
        </>
    )
}
