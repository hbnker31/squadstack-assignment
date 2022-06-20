import { Skeleton } from '@mui/material';
import Styles from './index.module.scss'

const  RecommendedJobs =(props) =>{
    const {data, loading} = props
    const numberFormat = (value) =>{
        return new Intl.NumberFormat('en-IN', {
            maximumFractionDigits: 0, 
            minimumFractionDigits: 0, 
        }).format(value);}
    return (
        <div className={Styles.RecommendedJobsDiv}>
            <div className={Styles.RecommendedJobsHeadingImageDiv}>
                {!loading?<img className={Styles.RecommendedJobsHeadingImage} src={data.businessLogo} alt= "recommendedJobImage" loading="lazy" />:<Skeleton animation="wave" variant="circular" width={48} height={48} />}
                <div className={Styles.RecommendedJobsHeadingDiv}>
                    {!loading?<span>{data.title}</span>:<Skeleton animation="wave" variant="text" height={40} width='50%'  />}
                    {!loading?<span className={Styles.bussinessTitle}>{data.businessName}</span>:<Skeleton animation="wave" variant="text" height={40} width='50%'  />}
                </div>
            </div>
            <hr className={Styles.RecommendedJobsSeperator}/>
            <div className={Styles.RecommendedJobsDetailsDiv}>
                {!loading?<div >
                    <img src="/images/recommendedJobs/clock.png" alt= "reco" loading="lazy" />
                    <div className={Styles.RecommendedJobsHeadingDiv}>
                        <span>Upto</span>
                        <span>{numberFormat(data.earnings)}</span>
                    </div>
                </div>:<Skeleton animation="wave" variant="rectangle" height={60} width='40%'  />}
                {!loading?<div >
                    <img src="/images/recommendedJobs/clock.png" alt= "reco" loading="lazy" />
                    <div className={Styles.RecommendedJobsHeadingDiv}>
                        <span>Time</span>
                        <span>{`${data.estimatedTime} hours`}</span>
                    </div>
                </div>:<Skeleton animation="wave" variant="rectangle" height={60} width='40%'  />}
            </div>
        </div>
    )
}
export default RecommendedJobs;