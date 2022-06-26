import { useState } from 'react';
import productsColors from './../../../utils/data/products-colors';
// import productsSizes from './../../../utils/data/products-sizes';
import CheckboxColor from './../../products-filter/form-builder/checkbox-color';
import { useDispatch, useSelector } from 'react-redux';
import { some } from 'lodash';
// import { addProduct } from 'store/reducers/cart';
import { toggleFavProduct } from 'store/reducers/user';
import { ProductType } from 'types';
// import { ProductStoreType } from 'types';
import { RootState } from 'store';

type ProductContent = {
  product: ProductType;
}

const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>('');
  const [itemSize, setItemSize] = useState<string>('');

  const onColorSet = (e: string) => setColor(e);
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setItemSize(e.target.value);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(favProducts, productId => productId === product.id);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      {
        id: product.id,
      }
    ))
  }

  const addToWhatsApp = () => {
    window.location.href = (`https://wa.me/5519984520307?text=Ol%C3%A1,%20tudo%20bem?%20Me%20interessei%20por%20este%20produto - ${product.name}`)
  }

  // const addToCart = () => {
  //   const productToSave: ProductStoreType = {
  //     id: product.id,
  //     name: product.name,
  //     thumb: product.images ? product.images[0] : '',
  //     price: product.currentPrice,
  //     count: count,
  //     color: color,
  //     size: itemSize
  //   }

  //   const productStore = {
  //     count,
  //     product: productToSave
  //   }

  //   dispatch(addProduct(productStore));
  // }

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">Produto ID:<br></br>{product.id}</h5>
        <span className="product-on-sale">Oferta</span>
        <h2 className="product__name">{product.name}</h2>

        <div className="product__prices">
          <h4>R${product.currentPrice}</h4>
          {product.discount &&
            <span>R${product.price}</span>
          }
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Cor:</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map(type => (
              <CheckboxColor
                key={type.id}
                type={'radio'}
                name="product-color"
                color={type.color}
                valueName={type.label}
                onChange={onColorSet}
              />
            ))}
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Tamanhos: <strong>veja os tamanhos abaixo</strong></h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select onChange={onSelectChange}>
                <option>Selecione o Tamanho</option>
                {product.sizes.map(size => (
                  <option value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Quantidade:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button type="button" onClick={() => setCount(count - 1)} className="quantity-button__btn">
                -
              </button>
              <span>{count}</span>
              <button type="button" onClick={() => setCount(count + 1)} className="quantity-button__btn">
                +
              </button>
            </div>

            <button type="submit" onClick={() => addToWhatsApp()} className="btn btn--rounded btn--yellow">Solicitar via WhatsApp</button>
            {/* <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow" disabled>Adicionar ao Carrinho</button> */}
            <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
