import { Skeleton } from '@mui/material';
import Styles from './index.module.scss'

const  Community =(props) =>{
    const {data, loading} = props

    return (
        <div className={Styles.CommunityDiv}>
            {!loading?<img src={data.image} alt= "communityImage" loading="lazy" />:<Skeleton animation="wave" variant="rectangle" width={288} height={120} />}
            {!loading?<span className={Styles.CommunityHeading}>{data.title}</span>:<Skeleton animation="wave" variant="text"  width="80%"  className={Styles.CommunityHeading} />}
            {!loading?<span className={Styles.CommunityContent}>{data.description}</span>:<Skeleton animation="wave" variant="rectangle" height={40} width="80%" className={Styles.CommunityContent} />}
        </div>
    )
}
export default Community;