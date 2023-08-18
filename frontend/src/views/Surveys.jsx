import PageComponent from "../components/PageComponent";
import { SurveyListItem } from "../components/SurveyListItem";
import { useStateContext } from "../context/ContextProvider";

export default function Surveys() {
    const { surveys } = useStateContext()
    return <PageComponent >
        <div className="container">
            { surveys.map(survey=>{
                return(
                    <SurveyListItem/>
                )
            })}
        </div>
    </PageComponent>
}