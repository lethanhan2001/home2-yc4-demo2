import { Profess } from "../../types";
import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter (1).png";
import Instagram from "../../images/Instagram.png";
import { styled, Box } from "@mui/system";
import { Typography } from "@mui/material";

interface ProfessItems {
  item: Profess;
}

const ProfessBox = styled("div")({
  width: "270px",
  height: "449px",
  backgroundColor: "white",

  boxShadow: "1px 0 6px 0 rgba(0,0,0,0.1)",
  padding: "25px 20px",
  borderRadius: "42px",
});
const ProfessBoxCenter = styled("div")({
  width: "424px",
  height: "626px",
  backgroundColor: "white",

  boxShadow: "1px 0 6px 0 rgba(0,0,0,0.2)",
  padding: "25px 20px",
  borderRadius: "42px",
});

const Desc = styled("span")({
  fontSize: "14px",
  fontWeight: "400",

  color: "#8b8b8b",

  fontFamily: "Poppins",
  letterSpacing: "1.3px",
});

const Images = styled("img")();
const ImagesCenter = styled("img")({
  marginTop: "65px",
});
const DescCenter = styled("p")({
  fontSize: "14px",
  fontWeight: "400",

  color: "#8b8b8b",
  width: "65%",
  margin: "18px auto",
  fontFamily: "Poppins",
  letterSpacing: "1.5px",
});
const ProfessItem: React.FC<ProfessItems> = ({ item }) => {
  return (
    <>
      {item.id === 2 ? (
        <ProfessBoxCenter>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImagesCenter src={item.image} alt="" />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#ff64ae",
              marginTop: "52px",
              fontFamily: "Poppins",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              fontFamily: "Poppins",
              color: "#091156",
              marginTop: "10px",
            }}
          >
            {item.username}
          </Typography>
          <DescCenter>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </DescCenter>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "42px",
            }}
          >
            <Images src={Twitter} alt="" />
            <Images src={Facebook} alt="" />
            <Images src={Instagram} alt="" />
          </Box>
        </ProfessBoxCenter>
      ) : (
        <ProfessBox>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-24px",
            }}
          >
            <Images src={item.image} alt="" />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#ff64ae",
              marginTop: "52px",
              letterSpacing: "1px",
              fontFamily: "Poppins",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#091156",
              letterSpacing: "1px",
              marginLeft: "5px",
              marginTop: "10px",
              fontFamily: "Poppins",
              marginBottom: "15px",
            }}
          >
            {item.username}
          </Typography>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </Desc>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "32px",
            }}
          >
            <Images src={Twitter} alt="" />
            <Images src={Facebook} alt="" />
            <Images src={Instagram} alt="" />
          </Box>
        </ProfessBox>
      )}
    </>
  );
};

export default ProfessItem;
