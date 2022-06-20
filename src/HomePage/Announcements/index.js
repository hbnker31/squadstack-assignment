import { Skeleton } from '@mui/material';
import Styles from './index.module.scss'

const  Announcement =(props) =>{
    const {data, loading} = props

    return (
        <div className={Styles.AnnouncementDiv}>
            <div className={Styles.AnnouncementHeadingDiv}>
                {!loading?<img src={data.avatar} alt= "announcementHeadingImage" loading="lazy" />:<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                {!loading?<span>{data.title}</span>:<Skeleton animation="wave" variant="text" height={40} width='60%'  />}
            </div>
            {!loading?<span className={Styles.announcementSubHeading}>{data.subtitle}</span>:<Skeleton animation="wave" variant="text" height={40} width="80%"  />}
            {!loading?<span className={Styles.announcementContent}>{data.description}</span>:<Skeleton animation="wave" variant="rectangle" height={60} width="80%" />}
        </div>
    )
}
export default Announcement;