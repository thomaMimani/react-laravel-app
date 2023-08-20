import { PlusCircleIcon } from "@heroicons/react/24/outline"
import PageComponent from "../components/PageComponent"
import { TButton } from "../components/core/TButton"
import { useState } from "react"

const SurveyView = (prop) => {

    const [survey, setSurvey] = useState({
        title: '',
        slug: '',
        status: 'false',
        description: '',
        image: null,
        image_url: null,
        expire_date: '',
        questions: []
    })

    const onSubmit = () => { }

    return (
        <PageComponent
            title='Survey Create'>
            <form action="#" method="post" onSubmit={onSubmit}>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                    </div>
                </div>
            </form>
        </PageComponent>
    )
}

export default SurveyView