import { Link } from "react-router-dom";
import "../component/Fsd.css"

const Fsd = () => {
  

    const fsdData = [
      {
        id: 1,
        Image: "https://wallpapercave.com/wp/wp11346423.jpg",
        title: "Best Full-Stack Development Project Ideas in 2024",
        author: "By Isha Sharma",
        date: "25 Mar, 2024",
        time: "4 min read",
      },
      {
        id: 2,
        Image: "https://wsrv.nl/?url=https%3A%2F%2Fcodedamn-blog.s3.amazonaws.com%2Fwp-content%2Fuploads%2F2022%2F12%2F09220751%2Fhow-long-to-become-fullstack-developer.png&w=1280&q=82&output=webp",
        title: "How Long Would It Take to Be a Full Stack Developer?",
        author: "By Meghana D",
        date: "26 Mar, 2024",
        time: "3 min read",
      },
      {
        id: 3,
        Image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GCOksZrmL_NAMZWyOArmJQ.jpeg",
        title: "Top 10 Full-Stack Developer Frameworks in 2024",
        author: "By Lisha Sharma",
        date: "16 Apr, 2024",
        time: "5 min read",
      },
      {
        id: 4,
        Image: "https://miro.medium.com/v2/format:webp/1*9_ie81Gx8GQTOp4idauFLQ.png",
        title: "Best Web Development Roadmap for Beginners 2024",
        author: "By SandeepKumar",
        date: "17 Apr, 2024",
        time: "5 min read",

      },
      {
        id: 5,
        Image: "https://resorcio.com/_next/image?url=https%3A%2F%2Fd1xuqjt1wg0fxw.cloudfront.net%2F92f7c6f0-71f9-11ec-97ec-21e9bdde0af1.jpg&w=512&q=75",
        title: "10 Best Database Management Systems For Software Developers",
        author: "By Ramkumar",
        date: "29 Mar, 2024",
        time: "4 min read",
      },
      {
        id: 6,
        Image: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
        title:"6 Essential Prerequisites For Learning ReactJS",
        author: "Isha Sharma",
        date: "12 May, 2024",
        time: "4 min read",

      },
    ];
    
  
    return (
      <div className="fsdContainer container">
        <div className="row">
          {fsdData.map(dataFsd => (
            <div key={dataFsd.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <Link to="#" className="link-Style">
                <div className="fsdCard card">
                  <img src={dataFsd.Image} className="image card-img-top" alt={dataFsd.title} />
                  <div className="card-body">
                    <h6 className="titles card-text">{dataFsd.title}</h6> <br />
                    <p className="authors card-text text-muted">{dataFsd.author}</p>
                    <div className="dateTime">
                      <p className="date card-text text-muted">{dataFsd.date}</p> 
                      <p className="time card-text text-muted">{dataFsd.time}</p>
                    </div>
                  </div>
                </div> 
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Fsd;