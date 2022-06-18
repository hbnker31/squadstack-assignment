import { useEffect, useState } from "react"
import Announcement from './Announcements'
import RecommendedJobs from './RecommendedJobs';
import Community from './Community'
import Styles from './index.module.scss'
const SectionContainer =(props) =>{
    const {type} = props
    const [paginationDetails, setPaginationDetails] = useState({
        limit:5,
        offset: 0
    })
    useEffect(() => {
        if(window.innerWidth<600){
            setPaginationDetails({limit:1, offset: 0})
        }
        else if(window.innerWidth<900 && window.innerWidth>600){
            setPaginationDetails({limit:2, offset: 0})
        }
        else if(window.innerWidth<1200 && window.innerWidth>900){
            setPaginationDetails({limit:3, offset: 0})
        }
        else if(window.innerWidth<1800 && window.innerWidth>1200){
            setPaginationDetails({limit:4, offset: 0})
        }
        else {
            setPaginationDetails({limit:5, offset: 0})
        }
    }, [])
    
    // const [dataList, setDataList] = useState([
    //     {   
    //         headingImage: "",
    //         heading:"Announcement 1",
    //         subHeading: "Time to go full scope",
    //         content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    //     },
    //     {
    //         headingImage: "",
    //         heading:"Announcement 2",
    //         subHeading: "Time to go full scope",
    //         content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    //     },
    //     {
    //         headingImage: "",
    //         heading:"Announcement 3",
    //         subHeading: "Time to go full scope",
    //         content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    //     },
    //     {
    //         headingImage: "",
    //         heading:"Announcement 4",
    //         subHeading: "Time to go full scope",
    //         content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    //     }
    // ])
    // const [dataList, setDataList] = useState([
    //     {   
    //         headingImage: "",
    //         JobTitle:"Job 1",
    //         BusinessTitle: "business 1",
    //         amount:20000,
    //         time: "2 hours"
    //     },
    //     {   
    //         headingImage: "",
    //         JobTitle:"Job 2",
    //         BusinessTitle: "business 2",
    //         amount:20000,
    //         time: "2 hours"
    //     },
    //     {   
    //         headingImage: "",
    //         JobTitle:"Job 3",
    //         BusinessTitle: "business 3",
    //         amount:20000,
    //         time: "2 hours"
    //     },
    //     {   
    //         headingImage: "",
    //         JobTitle:"Job 4",
    //         BusinessTitle: "business 4",
    //         amount:20000,
    //         time: "2 hours"
    //     }
    // ])
    const [dataList, setDataList] = useState([
        {   
            headingImage: "",
            heading:"This is an article title",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
        },
        {
            headingImage: "",
            heading:"This is an article title",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
        },
        {
            headingImage: "",
            heading:"This is an article title",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
        },
        {
            headingImage: "",
            heading:"This is an article title",
            content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
        }
    ])
    return (
        <div className={Styles.SectionContainer}>
            <span>{type}</span>
            <div >
                <button
                    className={Styles.leftButton}
                    disabled={paginationDetails.offset===0}
                >
                    <img src="/images/sectionContainer/leftIcon.png" alt="leftArrow" loading="lazy" />
                </button>

                {
                    dataList.map(data =>{
                        if(type==="Announcements")
                            return <Announcement key={data.heading} data={{}} />
                        else if(type==="Recommended jobs for you")
                            return <RecommendedJobs key={data.heading} data={{}} />
                        else if(type==="Community")
                            return <Community key={data.heading} data={data} />
                    })
                
                }
                <button
                    className={Styles.leftButton}
                >
                    <img src="/images/sectionContainer/rightIcon.png" alt="rightArrow" loading="lazy" />
                </button>
            </div>
        </div>
    )
}

export default SectionContainer;