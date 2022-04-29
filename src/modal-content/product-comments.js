import React from 'react'

import {
    StarIcon,
    ArrowNarrowDownIcon,
} from "@heroicons/react/outline";
import {
    StarIcon as StarIconSolid,
} from "@heroicons/react/solid";

const PersonRate = () => {

    const stars = Array(5).fill("");
    const rate = Math.round(2.1);

    return (
        <div className='flex flex-row flex-nowrap items-center'>
            <div>
                <div className='flex flex-row flex-nowrap items-center'>
                    {stars.map((star, key) => {
                        return (
                            <>
                                <div className="pr-1">
                                    {

                                        <>
                                            {key <= rate && (
                                                <StarIconSolid className='w-3 h-3 text-black' key={key} />
                                            )}
                                            {key > rate && (
                                                <StarIcon className='w-3 h-3 text-black' key={key} />
                                            )}
                                        </>

                                    }
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const SingleComment = () => {
    return (
        <div>
            <div className="font-bold font-xl">Johny</div>
            <div className="mt-1 mb-3"><PersonRate /></div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis quibusdam tempore possimus sit. Modi, accusantium soluta exercitationem corporis possimus labore vitae cupiditate adipisci magnam aut numquam veritatis repellendus! Earum!</div>
        </div>
    )
}

export default function _m_ProductComments({ id, ...props }) {

    const comments = Array(8).fill('');

    return (
        <div className="p-16">
            <h5 className="uppercase">Komentarze</h5>
            <div className="flex flex-col flex-nowrap space-y-8 mt-8">
                {
                    comments.map((comment, commentID) => {
                        return (
                            <>
                                <SingleComment />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
