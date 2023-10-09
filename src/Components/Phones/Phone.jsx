import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Phone = ({ phoneData }) => {

    const {id, phone_name, img, brand_name, price, rating } = phoneData || {}  // "|| {}" eita dewar mane hoilo jodi kuno value missing thake tahole jate empty object diye dey r error jate na dey tai onekta optional chaining er motoi
   
    return (
        <div>
            <div className="relative flex   flex-col rounded-xl bg-cyan-50 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={img}
                        className="h-full" />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <div>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                {phone_name}
                            </p>
                        </div>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            $ {price}
                        </p>
                    </div>

                    <p className="block font-sans text-base   leading-relaxed text-blue-gray-900 antialiased">
                        {brand_name}
                    </p>

                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Rating: {rating}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/phones/${id}`}>
                        <button
                            className="block w-full select-none rounded-lg bg-gradient-to-r from-cyan-50 to-blue-500  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button" >
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Phone.propTypes = {
    phoneData: PropTypes.object
}

export default Phone;