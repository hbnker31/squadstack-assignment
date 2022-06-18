import SectionContainer from './SectionContainer'



const Home =(props) =>{
    return(
        <>
            <SectionContainer type="Recommended jobs for you" />
            <SectionContainer type="Announcements" />
            <SectionContainer type="Community" />
        </>
    )
}

export default Home;