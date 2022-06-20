import { useEffect, useState } from "react";
import Announcement from "./Announcements";
import RecommendedJobs from "./RecommendedJobs";
import Slider from "react-slick";
import Community from "./Community";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Styles from "./index.module.scss";
import Axios from "axios";
const SectionContainer = (props) => {
  const { type } = props;
  const [loading, setLoading] = useState(true)
  const [paginationDetails, setPaginationDetails] = useState({
    limit:8,
    offset:0
  })
  const [dataList, setDataList] = useState([])
  const loadingArray=[{},{},{},{}]
  const handlePagination= (current, next) =>{
    if(next-current>0){
      setPaginationDetails({...paginationDetails, offset: paginationDetails.offset+1})

    }
  }
  var settings = {
    dots: false,
    lazy: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    beforeChange: (current, next) => handlePagination(current, next),
    nextArrow: 
                  <img 
                    src="/images/sectionContainer/rightIcon.svg"
                    alt="rightArrow"
                    loading="lazy"
                />,
    prevArrow:  
                  <img
                    src="/images/sectionContainer/leftIcon.svg"
                    alt="leftArrow"
                    loading="lazy"
                />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const getData =() =>{
    setLoading(true)
    let url=''
    if(type==="Announcements"){
      url=`https://mockend.com/nillion/frontend-challenge/announcements?limit=${paginationDetails.limit}&offset=${paginationDetails.offset}`
    }
    else if(type==="Recommended jobs for you"){
      url=`https://mockend.com/nillion/frontend-challenge/jobs?limit=${paginationDetails.limit}&offset=${paginationDetails.offset}`
    }
    else if(type==="Community"){
      url=`https://mockend.com/nillion/frontend-challenge/resources?limit=${paginationDetails.limit}&offset=${paginationDetails.offset}`
    }
    Axios.get(url)
        .then(response =>{
          let arr=[]
          response.data.map(el => arr.push(el))
          setDataList([...dataList, ...arr])
          
        })
  }
  useEffect(() => {
    getData()
  }, [paginationDetails])
  useEffect(() => {
    if(dataList.length>0){
      setLoading(false)
    }
  }, [dataList])
  
  return (
    <div className={Styles.SectionContainer}>
        <span>{type}</span>
        <Slider {...settings} className={Styles.Slider}>
            {(loading?loadingArray :dataList).map((data) => {
                if (type === "Announcements")
                return <Announcement key={data.id} data={data} loading={loading} />;
                else if (type === "Recommended jobs for you")
                return <RecommendedJobs key={data.id} data={data} loading={loading} />;
                else if (type === "Community")
                return <Community key={data.id} data={data} loading={loading} />;
            })}

        </Slider>
    </div>
  );
};

export default SectionContainer;
