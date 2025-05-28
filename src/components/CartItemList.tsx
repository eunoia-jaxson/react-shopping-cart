import { css } from '@emotion/react';
import CheckBox from './CheckBox';
import CartItem from './CartItem';

export default function CartItemList({ cartItems }: { cartItem: CartItem[] }) {
  return (
    <div css={cartItemsAreaCss}>
      {cartItems.length === 0 ? (
        <p>장바구니에 담은 상품이 없습니다.</p>
      ) : (
        <>
          <div css={allSelectCss}>
            <CheckBox />
            <p>전체 선택</p>
          </div>
          <div css={cartItemsListCss}>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const cartItemsAreaCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
});

const allSelectCss = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  marginBottom: '16px'
});
const cartItemsListCss = css({
  width: '100%',
  height: '50dvh',
  overflow: 'scroll'
});
