import { Link } from "react-router-dom";
import "../component/Cs.css"
const Cs = () => {
  const csData= [{
    id: 1,
    Image: "https://media.licdn.com/dms/image/D4E12AQHMBoAjZQLK0w/article-cover_image-shrink_600_2000/0/1714057232184?e=2147483647&v=beta&t=eQxgjamEKc23E-ZxN_KOirqx8ff8R2Z8ZgIwOPYVGbQ",
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    author: "By Hari Dev",
    date: "30 Mar, 2024",
    time: "5 min read"
  },
  {
    id: 2,
    Image: "https://media.geeksforgeeks.org/wp-content/uploads/hacker.png",
    title: "What Is Hacking? Types of Hacking & More",
    author: "By Jo ",
    date: "15 Mar, 2024",
    time: "8 min read"
  },
  {
    id: 3,
    Image: "https://media.licdn.com/dms/image/D4E12AQHUgWiXdKbirw/article-cover_image-shrink_720_1280/0/1689763659870?e=2147483647&v=beta&t=zCpVToXOw44TDBdeoYtuPCWRQuC-kHFH1MaVsspIFCs",
    title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    author: "By Zyan Evan",
    date: "14 May, 2024",
    time: "5 min read"
  },
  {
    id: 4,
    Image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*7ohzF2mQ--E3uG_7rtVNrQ.jpeg",
    title: "How Is Cyber Security Important To Our Lives?",
    author: "By Rohith Sharma",
    date: "15 Mar, 2024",
    time: "4 min read"
  },
  {
    id: 5,
    Image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
    title: "The Ultimate Cybersecurity Roadmap for Beginners",
    author: "By Joe Dani",
    date: "10 May, 2024",
    time: "5 min read"
  },
  {
    id: 6,
    Image: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
    title: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
    author: "By Jessie",
    date: "06 May, 2024",
    time: "4 min read"
  },
];

return (
  <div className="csContainer container">
    <div className="row">
      {csData.map(dataCs => (
        <div key={dataCs.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Link to="#" className="link-Style">
            <div className="csCard card">
              <img src={dataCs.Image} className="image card-img-top" alt={dataCs.title} />
              <div className="card-body">
                <h6 className="card-text">{dataCs.title}</h6> <br />
                <p className="authors card-text text-muted">{dataCs.author}</p>
                <div className="dateTime">
                  <p className="date card-text text-muted">{dataCs.date}</p>
                  <p className="time card-text text-muted">{dataCs.time}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);
};

export default Cs;