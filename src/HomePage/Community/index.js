import { Skeleton } from '@mui/material';
import Styles from './index.module.scss'

const  Community =(props) =>{
    const {data} = props

    return (
        <div className={Styles.CommunityDiv}>
            {data.image?<img src={data.image} alt= "communityImage" loading="lazy" />:<Skeleton animation="wave" variant="rectangle" width={288} height={120} />}
            {data.heading?<span className={Styles.CommunityHeading}>{data.heading}</span>:<Skeleton animation="wave" variant="text"  width="80%"  />}
            {data.content?<span className={Styles.CommunityContent}>{data.content}</span>:<Skeleton animation="wave" variant="rectangle" height={60} width="80%" />}
        </div>
    )
}
export default Community;