import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";



const PhoneDetails = () => {
    const [phoneDetails, setPhoneDetails] = useState({})

    const { id } = useParams()
    // console.log(params)
    const pDetails = useLoaderData()
    // console.log(phoneDetails)

    useEffect(() => {
        const findPhones = pDetails.find(phone => phone.id === id)
        setPhoneDetails(findPhones)
    }, [id, pDetails])
    // console.log(phoneDetails)

    return (
        <div>
           <Card phoneDetails={phoneDetails} ></Card>
        </div>
    );
};

export default PhoneDetails;