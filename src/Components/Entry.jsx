import dejenLogo from "../assets/dejen.jpg";
import mapLogo from "../assets/map.png";

export default function Entry() {
    return (
        <article className="journal-entry">

            <div className="main-image-container">
                <img
                    className="main-image"
                    src={dejenLogo}
                    alt="Ras Dejen Mount"
                />
            </div>

            <div className="info-container">

                <div>
                    <img
                        className="marker"
                        src={mapLogo}
                        alt="map marker icon"
                    />

                    <span className="country">
                        Ethiopia
                    </span>

                    <a href="https://maps.app.goo.gl/kRox4YgpTnkE65uz8">
                        View on Google Maps
                    </a>
                </div>

                <h2 className="entry-title">
                    ራስ ዳሽን ተራራ
                </h2>

                <p className="entry-date">
                    12 Jan, 2021 - 24 Jan, 2021
                </p>

                <p className="entry-text">
                    Ras Dejen (also spelled Ras Dashen) is the highest
                    mountain in Ethiopia. It stands at 4,550 meters
                    (14,930 feet) above sea level in the Simien Mountains
                    National Park within the Amhara Region.
                </p>

            </div>

        </article>
    )
}