import { Link } from "react-router-dom";
import "../component/Career.css"
const Career = () => {
  const careerData= [{
    id: 1,
    Image: "https://www.wedevx.co/blog/wp-content/uploads/2023/06/HOW-TO-Enter-INTO-TECH-Industry.webp",
    title: "Is Switching Careers From Non-Tech To Tech Challenging?",
    author: "By Ramkumar",
    date: "02 Mar, 2024",
    time: "4 min read"
  },
  {
    id: 2,
    Image: "https://media.geeksforgeeks.org/wp-content/uploads/20240215171900/10-Common-Mistakes-Everyone-Makes-In-Data-Science-Jobs.webp",
    title: "8 Mistakes To Avoid When You Begin a Data Science Career",
    author: "By Ajay Diwari",
    date: "19 Mar, 2024",
    time: "6 min read"
  },
  {
    id: 3,
    Image: "https://media.licdn.com/dms/image/D5612AQED4zIVi0fjZA/article-cover_image-shrink_720_1280/0/1708511561786?e=2147483647&v=beta&t=C2k2U0bdr4ryaYSR-uJJwExCoyvmImxg_eb07RNgz-c",
    title: "Top 5 Tech Careers of the Future [2024]",
    author: "By Hawat Joshi",
    date: "09 Mar, 2024",
    time: "4 min read"
  },
  {
    id: 4,
    Image: "https://www.blog.didm.in/wp-content/uploads/2024/02/Top-10-High-Income-Opportunities-in-India.jpg",
    title: "Top Career Options in India in 2024",
    author: "By Lokesh",
    date: "14 Apr, 2024",
    time: "5 min read"
  },
  {
    id: 5,
    Image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png",
    title: "How to Become a Web Developer – Your Web Development Career Roadmap",
    author: "By Zyan Jo",
    date: "14 Apr, 2024",
    time: "4 min read"
  },
  {
    id: 6,
    Image: "https://onlinecs.baylor.edu/sites/default/files/field/image/Future%20of%20Software_Engineering%20%281%29.jpg",
    title: "Is 30 Really Too Old To Start A Career As A Developer?",
    author: "By Ravi Tejas",
    date: "22 Mar, 2024",
    time: "4 min read"
  },
];

return (
  <div className="careerContainer container">
    <div className="row">
      {careerData.map(dataCareer => (
        <div key={dataCareer.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Link to="#" className="link-Style">
            <div className="careerCard card">
              <img src={dataCareer.Image} className="image card-img-top" alt={dataCareer.title} />
              <div className="card-body">
                <h6 className="card-title">{dataCareer.title}</h6> <br />
                <p className="authors card-text text-muted">{dataCareer.author}</p>
                <div className="dateTime">
                  <p className="date card-text text-muted">{dataCareer.date}</p>
                  <p className="time card-text text-muted">{dataCareer.time}</p>
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

export default Career;