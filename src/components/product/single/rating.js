import { useState, useContext } from "react";
import ProductContext from "../../../context/ProductContext";

import {
    StarIcon,
} from "@heroicons/react/outline";
import {
    StarIcon as StarIconSolid,
} from "@heroicons/react/solid";

// import { useDispatch } from "react-redux";
// import { innerModal } from "../../../slice/modalSlice";
// import Modal_ProductReviews from "../../../modal-content/product/reviews";


const Rating = ({ count, average }) => {
    // const dispatch = useDispatch();
    const { product: { reviewsPreview } } = useContext(ProductContext);

    const stars = Array(5).fill("");
    const rate = parseFloat(average);

    const [starHover, _starHover] = useState(false);
    const [starHoverID, _starHoverID] = useState(0);

    const onRate = () => {

    }

    return (
        <div className='flex flex-row flex-nowrap items-center'>
            <div>
                <div
                    className='flex flex-row flex-nowrap items-center'
                    onMouseEnter={() => _starHover(true)}
                    onMouseLeave={() => _starHover(false)}>
                    {stars.map((_, star_key) => {
                        const key = star_key + 1;
                        return (
                            <>
                                <div
                                    className='pr-1'
                                    onClick={() => alert(key)}
                                    onMouseEnter={() => _starHoverID(key)}
                                    onMouseLeave={() => _starHoverID(-1)}>
                                    {starHover && (
                                        <>
                                            {key <= starHoverID && (
                                                <StarIconSolid
                                                    className='h-6 w-6 cursor-pointer text-black'
                                                    key={key}
                                                />
                                            )}
                                            {key > starHoverID && (
                                                <StarIcon className='h-6 w-6 text-black' key={key} />
                                            )}
                                        </>
                                    )}
                                    {false === starHover && (
                                        <>
                                            {key <= rate && (
                                                <StarIconSolid
                                                    className='h-6 w-6 cursor-pointer text-black'
                                                    key={key}
                                                />
                                            )}
                                            {key > rate && (
                                                <StarIcon
                                                    className='h-6 w-6 cursor-pointer text-black'
                                                    key={key}
                                                />
                                            )}
                                        </>
                                    )}
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className='ml-4'>
                <button
                    onClick={() => reviewsPreview(true)}>
                    <span className='p-1 text-black hover:underline'>({count})</span>
                </button>
            </div>
        </div>
    );
};

export default Rating
