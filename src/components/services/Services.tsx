import { servicesData } from "../../data/services";
import { Services } from "../../types";
import ServiceItem from "./ServiceItem";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";
import useSize from "../../hooks/useSize";

const One = styled("div")({
  width: "14.82px",
  height: "3.09px",
  backgroundColor: "#eeeeee",
  borderRadius: "50px",
});
const Two = styled("div")({
  width: "25.31px",
  height: "8.15px",
  backgroundColor: "#414880",
  margin: "0 10px",
  borderRadius: "50px",
});
const Three = styled("div")({
  width: "14.82px",
  height: "3.09px",
  backgroundColor: "#eeeeee",
  borderRadius: "50px",
});

const Title = styled("p")({
  color: "#8B8B8B",
  letterSpacing: "1.63px",
  marginTop: "20px",
});

const Services = () => {
  const width = useSize();
  return (
    <>
      <Box
        sx={
          width >= 800
            ? {
                display: "flex",
                marginTop: "-55px",

                justifyContent: "center",
                alignItems: "center",
              }
            : {
                marginTop: "30px",
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
              }
        }
      >
        <One></One>
        <Two></Two>
        <Three></Three>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "130px" }}>
        <Typography
          variant="h6"
          sx={{ fontSize: "16px", letterSpacing: "1px", fontWeight: "600" }}
        >
          Main Services
        </Typography>
        <Typography
          variant="h4"
          sx={
            width >= 1200
              ? {
                  fontSize: "36px",
                  width: "30%",
                  fontWeight: "600",
                  color: "#091156",
                  margin: "10px auto",
                  letterSpacing: "1.8px",
                }
              : {
                  width: "100%",
                  fontSize: "36px",

                  fontWeight: "600",
                  color: "#091156",
                  margin: "10px auto",
                  letterSpacing: "1.8px",
                }
          }
        >
          Learn services to focus on your beauty
        </Typography>
        <Title>
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient <br />
          amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
        </Title>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "82px 7%",
            flex: "1",

            flexWrap: "wrap",
            rowGap: "30px",
          }}
        >
          {servicesData.map((item: Services) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Services;
