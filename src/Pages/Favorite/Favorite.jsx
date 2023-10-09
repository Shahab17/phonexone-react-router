import { useEffect, useState } from "react";
// import Card from "../PhoneDetails/Card";
import Phone from "../../Components/Phones/Phone";



const Favorite = () => {
    const [addFav, setAddFav] = useState([])
    const [noFound, setNoFound] = useState('')

    useEffect(() => {
        const favItems = JSON.parse(localStorage.getItem('fav'))
        if (favItems) {
            setAddFav(favItems)
        } else {
            setNoFound('Not Found Your Product')
        }
    }, [])
    // console.log(addFav)

    const handleFavRemove = () => {
        localStorage.clear()
        setAddFav([])
        setNoFound('Not Found Your Product')
    }

    return (
        <div>
            {
                noFound ? <p className="text-3xl h-[70vh] flex items-center justify-center">{noFound}</p>
                    :
                    <div className=" ">
                        {
                            addFav.length > 0 && <button onClick={handleFavRemove} className="btn block mx-auto bg-gradient-to-r from-cyan-50 to-blue-500 " >Delete All</button>
                        }
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                            {
                                addFav.map(phone => <Phone key={phone} phoneData={phone} ></Phone>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Favorite;