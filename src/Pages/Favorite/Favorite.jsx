import { useEffect, useState } from "react";
// import Card from "../PhoneDetails/Card";
import Phone from "../../Components/Phones/Phone";



const Favorite = () => {
    const [addFav, setAddFav] = useState([])
    const [noFound, setNoFound] = useState('')
    const [isShow, setIsShow] = useState(false)

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

    // const handleShowBtn = () => {

    // }

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
                                isShow ? addFav.map(phone => <Phone key={phone} phoneData={phone} ></Phone>)
                                    :
                                    addFav.slice(0, 3).map(phone => <Phone key={phone} phoneData={phone} ></Phone>)
                            }
                        </div>

                        {
                            addFav.length > 3 && 
                            <button onClick={() => setIsShow(!isShow)} className="btn block mt-6 mx-auto bg-gradient-to-r from-cyan-50 to-blue-500 " > {isShow ? 'See Less ' : 'See More'} </button>
                        }
                    </div>
            }
        </div>
    );
};

export default Favorite;