'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import type { ProductInterface, ShopProductInterface } from '@/interface/product.interface';
import shopStore from '@/store/shopStore';

interface CartList1Props {
  data: ShopProductInterface;
}
export default function CartList1({ data }: CartList1Props) {
  const [qty, setQty] = useState(data?.qty || 0);

  const deleteProduct = shopStore((state) => state.deleteProduct);
  const updateQty = shopStore((state) => state.updateQty);

  // handler
  const qtyHandler = (q: number) => {
    setQty(q);
  };

  const incHandler = () => {
    setQty(Number(qty) + 1);
  };

  const decHandler = () => {
    qty > 1 && setQty(Number(qty) - 1);
  };

  const deleteHandler = (id: number) => deleteProduct(id);

  useEffect(() => {
    updateQty(data.id, qty);
  }, [data.id, qty, updateQty]);

  return (
    <>
      <tr>
        <td className="pl30 ">
          <div className="cart_list d-flex align-items-center">
            <div className="cart-img">
              <Image height={74} width={60} src={data.img} alt="cart-1.png" />
            </div>
            <h5 className="mb-0">{`${data.title.substring(0, 40)}...`}</h5>
          </div>
        </td>
        <td>
          <div className="cart-price">${data.price}</div>
        </td>
        <td>
          <div className="cart-quantity">
            <div className="quantity-block">
              <button onClick={decHandler} className="quantity-arrow-minus">
                <span className="fa fa-minus" />
              </button>
              <input
                className="quantity-num"
                type="number"
                value={qty}
                onChange={(e) => qtyHandler(parseInt(e.target.value, 10))}
              />
              <button onClick={incHandler} className="quantity-arrow-plus">
                <span className="fas fa-plus" />
              </button>
            </div>
          </div>
        </td>
        <td>
          <div className="cart-subtotal pl5">${data.qty ? data.qty * data.price : 0}</div>
        </td>
        <td>
          <a
            onClick={() => deleteHandler(data.id)}
            className="cart-delete d-inline-block"
          >
            <span className="flaticon-delete" />
          </a>
        </td>
      </tr>
    </>
  );
}
