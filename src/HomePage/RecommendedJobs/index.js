import { Skeleton } from '@mui/material';
import Styles from './index.module.scss'

const  RecommendedJobs =(props) =>{
    const {data} = props

    return (
        <div className={Styles.RecommendedJobsDiv}>
            <div className={Styles.RecommendedJobsHeadingImageDiv}>
                {data.headingImage?<img src={data.headingImage} alt= "recommendedJobImage" loading="lazy" />:<Skeleton animation="wave" variant="circular" width={48} height={48} />}
                <div className={Styles.RecommendedJobsHeadingDiv}>
                    {data.JobTitle?<span>{data.JobTitle}</span>:<Skeleton animation="wave" variant="text" height={40} width='50%'  />}
                    {data.BusinessTitle?<span>{data.BusinessTitle}</span>:<Skeleton animation="wave" variant="text" height={40} width='50%'  />}
                </div>
            </div>
            <hr className={Styles.RecommendedJobsSeperator}/>
            <div className={Styles.RecommendedJobsDetailsDiv}>
                {data.amount?<div >
                    <img src={data.headingImage} alt= "reco" loading="lazy" />
                    <div className={Styles.RecommendedJobsHeadingDiv}>
                        <span>Upto</span>
                        <span>{data.amount}</span>
                    </div>
                </div>:<Skeleton animation="wave" variant="rectangle" height={60} width='40%'  />}
                {data.time?<div >
                    <img src={data.headingImage} alt= "reco" loading="lazy" />
                    <div className={Styles.RecommendedJobsHeadingDiv}>
                        <span>Time</span>
                        <span>{data.time}</span>
                    </div>
                </div>:<Skeleton animation="wave" variant="rectangle" height={60} width='40%'  />}
            </div>
        </div>
    )
}
export default RecommendedJobs;