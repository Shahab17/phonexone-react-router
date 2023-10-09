import PropTypes from 'prop-types'
import swal from 'sweetalert';


const Card = ({ phoneDetails }) => {
    //  console.log(details)

    const { id, phone_name, img, brand_name, price, } = phoneDetails || {}

    const handleAddToFav = () => {
        // console.log(phoneDetails)
        const favToStored = []

        const favItems = JSON.parse(localStorage.getItem('fav'))
        
        if (!favItems) {
            favToStored.push(phoneDetails)
            localStorage.setItem('fav', JSON.stringify(favToStored))
            swal("Thanks!", "To Connect With Us!", "success");
        }
        else {
            const isExists = favItems.find(phone => phone.id === id)
            if (!isExists) {
                favToStored.push(...favItems, phoneDetails)
                localStorage.setItem('fav', JSON.stringify(favToStored))
                swal("Thanks!", "To Connect With Us!", "success");
            }
            else{
                swal("Error!", "Already Added Your Product!", "error");
            }
        }
    }

    return (
        <div className='flex justify-center items-center h-[70vh] '>
            <div className="relative flex   max-w-[48rem] flex-row rounded-xl bg-red-50 bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={img}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 text-center">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        {phone_name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {brand_name}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-medium leading-relaxed text-gray-700 antialiased">
                        $ {price}
                    </p>
                    <a className="inline-block" href="#">
                        <button
                            onClick={handleAddToFav}
                            className="flex select-none items-center gap-2 bg-slate-300 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button" >
                            Add To Favorites
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"

                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    phoneDetails: PropTypes.object
}

export default Card;