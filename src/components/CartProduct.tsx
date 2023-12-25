import { useAppDispatch } from "../redux/hooks";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "../redux/feature/cartSlice";

interface propsType {
  id: number;
  img: string;
  title: string;
  price: string;
  quantity: number;
}

const CartProduct: React.FC<propsType> = ({
  id,
  img,
  title,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={img} alt={title} className="h-[80px]" />
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x ${price}.00
          </p>
        </div>
      </div>
      <RxCross1
        className="cursor-poinetr"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartProduct;
