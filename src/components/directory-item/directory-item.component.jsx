import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";
const DirectoryItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate();
  const routeHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer onClick={routeHandler}>
      <BackgroundImage imageUrl={imageUrl} alt="Background-Image" />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
