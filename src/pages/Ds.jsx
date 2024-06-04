import { Link } from "react-router-dom";
import "../component/Ds.css"
const Ds = () => {
    
    
    const dsData= [{
        id: 1,
        Image: "https://tribuneonlineng.com/wp-content/uploads/2022/07/tech-jobs.jpeg",
        title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
        author: "By Evan Francis",
        date: "25 Mar, 2024",
        time: "4 min read"
      },
      {
        id: 2,
        Image: "https://res.cloudinary.com/boardinfinity/image/upload/t_blog_img/bi-websites/blog/10/pending-blog-creatives--39-.png",
        title: "Roles and Responsibilities of a Data Scientist",
        author: "By Zyan Jo",
        date: "15 May, 2024",
        time: "5 min read"
      },
      {
        id: 3,
        Image: "https://media.geeksforgeeks.org/wp-content/uploads/20230501074732/10-Best-Data-Science-Courses-Online.webp",
        title: "10 Best Data Science Online Courses for Beginners | 2024",
        author: "By Dev Hari",
        date: "10 Mar, 2024",
        time: "6 min read"
      },
      {
        id: 4,
        Image: "https://www.interviewbit.com/blog/wp-content/uploads/2021/07/Data-Scientist-Salary-in-India.png",
        title: "Everything about Data Scientist Salary in India | 2024",
        author: "By Lia viaz ",
        date: "22 May, 2024",
        time: "4 min read"
      },
      {
        id: 5,
        Image: "https://codegnan.com/wp-content/uploads/2024/03/data-science-course-curriculum-illustration-codegnan.pngw3_.webp",
        title: "Everything about Data Scientist Salary in India | 2024",
        author: "By Nikki Raj",
        date: "19 Mar, 2024",
        time: "5 min read"
      },
      {
        id: 6,
        Image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp",
        title: "10 Best Data Science Frameworks in 2024",
        author: "By Daniel",
        date: "17 May, 2024",
        time: "4 min read"
      },
    ];
  
    return (
      <div className="dsContainer container">
        <div className="row">
          {dsData.map(dataDs => (
            <div key={dataDs.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <Link to="#" className="link-Style">
                <div className="dsCard card">
                  <img src={dataDs.Image} className="image card-img-top" alt={dataDs.title} />
                  <div className="card-body">
                    <h6 className="title card-text">{dataDs.title}</h6> <br />
                    <p className="authors card-text text-muted">{dataDs.author}</p>
                    <div className="dateTime">
                      <p className="date card-text text-muted">{dataDs.date}</p>
                      <p className="time card-text text-muted">{dataDs.time}</p>
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
  
  export default Ds;