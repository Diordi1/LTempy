import Chart from "./Chart";
import CourseStats from "./CourseStats";
import CourseTable from "./CourseTable";
import Intro from "./Intro";
import IntroCard from "./IntroCard";

function MainBar() {
    return (<div className="w-[60%] my-10">
        <Intro/>
        <IntroCard/>
        <Chart/>
        <div className="flex ms-14">

        <CourseStats/>
        <CourseTable/>
        </div>
       
    </div>);
}

export default MainBar;