import { useLoaderData } from "react-router-dom";
import Phone from "./Phone";



const Phones = () => {
    const phones = useLoaderData()
    console.log(phones)

    return (
        <div className="my-8">
            <h3 className="text-3xl font-semibold text-center">All Phones Categories: {phones.length} </h3>
            <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-12">
                {
                    phones?.map(phoneInfo => <Phone key={phoneInfo.id} phoneData={phoneInfo} ></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;