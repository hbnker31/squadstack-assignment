import SectionContainer from './SectionContainer'
import { Box } from "@mui/material";

const Home =(props) =>{
    return(
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${348}px)` } }}
        >
            <SectionContainer type="Recommended jobs for you" />
            <SectionContainer type="Announcements" />
            <SectionContainer type="Community" />
        </Box>
    )
}

export default Home;