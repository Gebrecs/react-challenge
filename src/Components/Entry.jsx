import dejenLogo from "../assets/dejen.jpg";
import mapLogo from "../assets/map.png";

export default function Entry({img,
    marker,
    country,
    googleMapLinks,
    youtubeLink,
    title,
    date,
    text}) {
    return (
        <article className="journal-entry">

            <div className="main-image-container">
                <img
                    className="main-image"
                    src={img.src}
                    alt={img.alt}
                />
            </div>

            <div className="info-container">

                <div>
                    <img
                        className="marker"
                        src={marker.src}
                        alt={marker.alt}
                    />

                    <span className="country">
                        {country}
                    </span>

                    <a href={googleMapLinks}>
                        View on Google Maps
                    </a>
                    <a href={youtubeLink}>
                        View on Youtube for more
                    </a>
                </div>

                <h2 className="entry-title">
                    {title}</h2>

                <p className="entry-date">
                    {date}
                    
                </p>

                <p className="entry-text">
                    {text}
                    
                </p>

            </div>

        </article>
    )
}