import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import { SurveyListItem } from "../components/SurveyListItem";
import { TButton } from "../components/core/TButton";
import { useStateContext } from "../context/ContextProvider";

export default function Surveys() {
    const { surveys } = useStateContext()

    const onDeleteClick = () => {
        console.log(`On Delete Click`)
    }

    return <PageComponent title='Surveys'
        button={
            (<TButton color='green' to='/surveys/create' >
                Create new
            </TButton>)
        }
    >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {surveys.map(survey => {
                return (
                    <SurveyListItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
                )
            })}
        </div>
    </PageComponent>
}