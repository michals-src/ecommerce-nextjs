import { useState } from "react";

import { StarIcon, ArrowNarrowDownIcon } from "@heroicons/react/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/solid";

/**https://jsonplaceholder.typicode.com/comments */
import fakeComments from "../../fakeData/comments.json";

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
                <div className='pr-1'>
                  {
                    <>
                      {key <= rate && (
                        <StarIconSolid
                          className='h-4 w-4 text-black'
                          key={key}
                        />
                      )}
                      {key > rate && (
                        <StarIcon className='h-3 w-3 text-black' key={key} />
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
};

const SingleComment = ({ value, ...props }) => {
  const [ExpandContent, _ExpandContent] = useState(false);

  const { body, email } = value;
  const comment = body;

  const truncateStringAtWhitespace = (str, lim, ending = "...") => {
    if (str.length <= lim || ExpandContent) return str;
    const lastSpace = str.slice(0, lim - ending.length + 1).lastIndexOf(" ");
    return (
      str.slice(0, lastSpace > 0 ? lastSpace : lim - ending.length) + ending
    );
  };

  return (
    <div>
      <div className='font-xl font-bold'>{email}</div>
      <div className='mt-1 mb-3'>
        <PersonRate />
      </div>
      <div className='mb-1'>{truncateStringAtWhitespace(comment, 150)}</div>
      {comment.length > 150 && (
        <button
          className='text-sm text-blue-800 hover:underline'
          onClick={() => _ExpandContent(!ExpandContent)}>
          {ExpandContent ? "Ukryj" : "Pokaż więcej"}
        </button>
      )}
    </div>
  );
};

export default function _m_ProductComments({ id, ...props }) {
  const comments = fakeComments.slice(0, 40);

  return (
    <div className='p-16'>
      <h3>Opinie użytkowników</h3>
      <h6 className='uppercase text-gray-400'>
        FJALLRAVEN - FOLDSACK NO. 1 BACKPACK, FITS 15 LAPTOPS
      </h6>
      <div className='mt-8 flex flex-col flex-nowrap space-y-8'>
        {comments.map((comment, commentID) => {
          return (
            <>
              <SingleComment key={commentID} value={comment} />
            </>
          );
        })}
      </div>
    </div>
  );
}
