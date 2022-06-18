import { Skeleton } from '@mui/material';
import Styles from './index.module.scss'

const  Announcement =(props) =>{
    const {data} = props

    return (
        <div className={Styles.AnnouncementDiv}>
            <div className={Styles.AnnouncementHeadingDiv}>
                {data.headingImage?<img src={data.headingImage} alt= "announcementHeadingImage" loading="lazy" />:<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                {data.heading?<span>{data.heading}</span>:<Skeleton animation="wave" variant="text" height={40} width='60%'  />}
            </div>
            {data.subHeading?<span className={Styles.announcementSubHeading}>{data.subHeading}</span>:<Skeleton animation="wave" variant="text" height={40} width="80%"  />}
            {data.content?<span className={Styles.announcementContent}>{data.content}</span>:<Skeleton animation="wave" variant="rectangle" height={60} width="80%" />}
        </div>
    )
}
export default Announcement;