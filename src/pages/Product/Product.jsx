import ProductDetail from '../../components/product/ProductDetail/ProductDetail';
import { ProductSection } from '../../components/product/ProductDetail/ProductDetail.style';
import ScrollButton from '../../components/scroll/ScrollButton/ScrollButton';

const Product = () => {
	return (
		<ProductSection>
			<ProductDetail />
			<ScrollButton />
		</ProductSection>
	);
};

export default Product;
