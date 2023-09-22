import React from "react";
import '../css/project.css'

function Project() {
    return (
        <div className="project">
            <div className="etude col-md-3">
                <h3>Travail d'étude</h3>
                <p className="mt-3">
                    <b>MADA WILD (2016)</b> <br />
                    - Site web <br />
                    - Information sur les faunes et flores de
                    Madagascar. <br />
                    - Développé en HTML, CSS3, JavaScript, PHP et
                    MySQL <br /><br />
                    <b>LOGICIEL DE GESTION DE COMMERCE (2017)</b> <br />
                    - Développé en Csharp et MySQL <br /><br />
                    <b>SOFT’ELECT (2018)</b><br />
                    - Logiciel de vote <br />
                    - Développé en JAVA et MySQL
                </p>
            </div>
            <div className="prof col-md-3">
                <h3>Travail professionnel</h3>
                <p className="mt-3">
                    <b>
                        CREATION D’INTRANET VIA FRAMEWORK
                        SYMFONY (2019-2020) | AGENCE AROWEB
                    </b> <br /> <br />
                    <b>
                    DEVELOPPEUR REACT JS STAGIAIRE CHEZ
                    POLE.MG (2023)
                    </b><br />
                    Refonte du site AROWEB en POLE.MG
                </p>
            </div>
            <div className="academi col-md-3">
                <h3>Formations académiques</h3>
                <p className="mt-3">
                    <b>2023</b><br />
                    Préparation du mémoire de fin d’étude en vu
                    de l'obtention du diplômes de Licence en
                    Informatiques de Gestion, Génie Logiciel et
                    Intelligences Artificiel (IGGLIA) à l’ISPM. <br /><br />
                    
                    <b>Diplôme du Baccalauréat, Série D</b><br />
                    Lycée Privé Le Petit Poucet Arivonimamo | 2013
                </p>
            </div>
        </div>
    )
}

export default Project