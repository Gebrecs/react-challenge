import dejenLogo from "../assets/dejen.jpg";
import mapLogo from "../assets/map.png";
import fasil from "../assets/fasilGimb.jpg";
import debredamo from "../assets/deredamo.jpg";

const  data=[
    {
        id:1,
        img: {
            src:dejenLogo,
            alt:"Ras Dejen Mount"
        },
        marker:{
            src:mapLogo,
            alt:"map marker icon"
        },
        country:"Ethiopia",

        googleMapLinks:"https://maps.app.goo.gl/kRox4YgpTnkE65uz8",
        youtubeLink:"https://www.youtube.com/watch?v=HpZETfsspgw",

        title:"ራስ ዳሽን ተራራ",

        date:"12 Jan, 2021 - 24 Jan, 2021",

        text:`Ras Dejen (also spelled Ras Dashen) is the highest
                    mountain in Ethiopia. It stands at 4,550 meters
                    (14,930 feet) above sea level in the Simien Mountains
                    National Park within the Amhara Region.`
    },
    {
        id:2,
        img:{src:fasil,
            alt:"የፋሲል ግንብ/አይከል ግንብ"
        },

        
        marker:{
            src:mapLogo,
            alt:"map marker icon"
    },
    country:"Ethiopia",

    googleMapLinks:"https://maps.app.goo.gl/okYQhAMLyoi1UVyW9",
    youtubeLink : "https://www.youtube.com/watch?v=FsOd97XkuKQ",

    title:"አይከል ግንብ",

    date:"ከ መስከረም 1 እስከ ጷግሜ 5 ወይም 6",

    text:`Fasil Gimb (also known as Fasilides Castle or part of Fasil Ghebbi) 
            is a 17th-century royal castle located in the historic city of Gondar, Ethiopia. 
            Built by Emperor Fasilides, it serves as the centerpiece of a large walled fortress-city
            that was once the seat of the Ethiopian Empire
            History and Design:
            Built around 1636 when Emperor Fasilides chose Gondar as his permanent capital.
            Features a unique architectural style blending local Aksumite traditions with Hindu,
            Arab, and Baroque influences brought by Portuguese presence.
            Constructed from quarried brown basalt stone bound together with mortar.`

    },
    {
        id:3,
        img: {
            src:debredamo,
            alt:"debreDamo Monastry"
        },
        marker:{
            src:mapLogo,
            alt:"map marker icon"
        },
        country:"Ethiopia",

        googleMapLinks:"https://maps.app.goo.gl/pVLJvKqagmJDLMKZ8",
        youtubeLink : "https://www.youtube.com/watch?v=vrn0aGPKsZg",

        title:"የ ደብረ ዳሞ ገዳም",

        date:"ከ መስከረም እስከ መስከረም",

        text: ` Debre Damo is a famous 6th-century Ethiopian Orthodox Tewahedo Church monastery 
                located on a flat-topped mountain (amba) in the Tigray Region of northern Ethiopia, near Adigrat.
                It is known for its unique cliff-top location and ancient Axumite-style architecture`
    },


];

export default data;