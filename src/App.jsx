import Header from "./Components/Header"
import Entry from "./Components/Entry"
import data from "./Components/data"


export default function App() {
    return (
        <>
            <Header />

            <main className="container">
                {data.map(item=>(
                    <Entry
                    key={item.id}
                    img={item.img}
                    marker={item.marker}
                    country={item.country}
                    googleMapLinks={item.googleMapLinks}
                    youtubeLink={item.youtubeLink}
                    title={item.title}
                    date={item.date}
                    text={item.text}
                    />
                ))}

                
            </main>
        </>
    )
}