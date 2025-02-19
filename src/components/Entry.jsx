export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src="" 
                    alt="mount fuji" 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="" 
                    alt="map marker icon"
                />
                <span className="country">Japan</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                <h2 className="entry-title">Mount Fuji</h2>
                <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry-text">some custom text</p>
            </div>
            
        </article>
    )
}