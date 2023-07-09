import { styled } from "@mui/system";
import { Services } from "../../types";
import { Typography } from "@mui/material";

interface ServicesItem {
  item: Services;
}

const BoxServices = styled("div")({
  width: "343px",
  height: "458px",
  backgroundColor: "white",
  borderRadius: "42px",
  padding: "20px 0",
  boxShadow: "2px 2px 2px 02px rgba(0,0,0,0.1)",
});

const Title = styled("span")({
  fontSize: "14px",
  padding: "0 10%",
  color: "#8B8B8B",
  fontWeight: "400",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  letterSpacing: "2px",
});
const ImageItem = styled("div")();

const ServiceItem: React.FC<ServicesItem> = ({ item }) => {
  return (
    <>
      <BoxServices>
        <ImageItem className="image">
          <img className="mx-auto mt-10" src={item.image} alt="" />
        </ImageItem>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#091156",
            marginTop: "55px",
            letterSpacing: "1.6px",
          }}
          variant="h6"
        >
          {item.name}
        </Typography>
        <Title>{item.title}</Title>
      </BoxServices>
    </>
  );
};

export default ServiceItem;
