import React from "react";
import PropTypes from "prop-types";
import * as rssParser from 'react-native-rss-parser';

export default class RssSlide extends React.Component {

    rssParser() {
        return {
            "title": "'Vriendin Dave De K. verdacht van moord in zaak rond dood 4-jarige Dean'",
            "description": "<p>De Nederlandse vriendin van Dave De K. wordt in België verdacht van ontvoering en moord. Dat schrijven Belgische media.</p>\n<p>De K. was vorige week voor het laatst gezien met de 4-jarige kleuter Dean, die maandagavond op Neeltje Jans in Zeeland dood werd aangetroffen. Een aantal uren daarvoor was de 34-jarige De K. aangehouden in Meerkerk, bij Gorinchem. De politie vond het lichaam van Dean \"op aanwijzing\" van De K., schreef de politie gisteren in een persbericht. Hij wordt verdacht van ontvoering en betrokkenheid bij de dood van de Belgische kleuter.</p>\n<p>Gisteren werd duidelijk dat ook de vriendin van De K. was opgepakt, onder meer omdat ze tegenstrijdige verklaringen zou hebben afgelegd. Dat ze van zwaardere feiten wordt verdacht dan De K., heeft volgens de Vlaamse omroep VRT mogelijk te maken met de verschillende rechtssystemen in Nederland en België. \"Het parket in ons land gaat meestal uit van de zwaarst mogelijke verdenking. In dit geval moord. Dat biedt meer mogelijkheden voor het onderzoek\", aldus de VRT.</p>\n<h2>Ruzie</h2>\n<p>De K. paste samen met zijn vriendin regelmatig op het jongetje en diens 7-jarige zusje. \"We hadden veel vertrouwen in Dave. Hij zorgde echt goed voor mijn zoontje\", zei moeder Elke Verberckmoes maandag tegen Belgische media. Vorige week kon de moeder om medische redenen even niet voor haar zoontje zorgen. Haar vriendin R., die sinds juli de vriendin is van Dave De K, kon op Dean passen.</p>\n<p>R. liet vorige week weten dat Dean nog een nachtje langer wilde blijven. De dag erna volgde hetzelfde bericht. Op zaterdag ontdekte de moeder wat er aan de hand was. De K. had ruzie met zijn vriendin gekregen en was vertrokken, met Dean. Wanneer is onduidelijk; donderdag of vrijdag. Waarom hij de jongen meenam is ook niet bekend.</p>\n<p>De K. heeft tot 2018 tien jaar vastgezeten vanwege structurele en heftige mishandeling van een jongetje van 2. Dat was het kind van zijn ex-vriendin, dat aan de verwondingen overleed. Tijdens zijn veroordeling is er niet over tbs gesproken, omdat dit systeem pas twee jaar na de veroordeling van De K. in België werd ingevoerd.</p>\n",
            "author": null,
            "category": null,
            "image": "https://cdn.nos.nl/image/2022/01/19/822124/1008x567.jpg"
        }
    }

    render() {        
        return (
            <div className="slideContent">
                <div>
                    <h2>{ this.rssParser().title }</h2>
                    <div className="rssImageWrapper">
                        <img src={this.rssParser().image} className="rssImage"></img>
                    </div>
                    <div>{ this.rssParser().description }</div>
                </div>
            </div>
        );
    }
}
