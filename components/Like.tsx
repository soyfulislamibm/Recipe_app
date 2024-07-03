
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


interface Props {
  onClick: () => void;
}


const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

   const toggle = () => {
    setLiked(!liked);
    console.log(liked);
    onClick();
  };
  if (liked) return <FaHeart size={20} color='red' onClick={toggle} />;
  return <FaRegHeart size={20} onClick={toggle} />;
};


export default Like