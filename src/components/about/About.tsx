import PlayBtn from "../../images/Play_button.png";
import HomeBg from "../../images/home.png";
import useSize from "../../hooks/useSize";
import { Box, styled } from "@mui/system";
import { Typography, createTheme, ThemeProvider, Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff64ae",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

const Desc = styled("p")({
  color: "#8b8b8b",
  fontFamily: "Poppins",
  marginTop: "20px",
  letterSpacing: "1.6px",
  width: "80%",
});

const Images = styled("img")({});
const Span = styled("div")({
  color: "#8b8b8b",
  fontFamily: "Poppins",
  marginTop: "18px",
  letterSpacing: "1.6px",
  width: "85%",
});

const Watch = styled("p")({
  fontSize: "16px",
  fontWeight: "600",
  color: "#8b8b8b",
  marginLeft: "20px",
  fontFamily: "Poppins",
});

const ImageHome = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "50px",
});

const About = () => {
  const width: number = useSize();
  return (
    <>
      <Box
        sx={
          width <= 800
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }
            : {
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "row-wrap",
                margin: "80px 5.5% 80px 10.3%",
              }
        }
      >
        <Box
          sx={
            width <= 800
              ? {
                  width: "100%",
                  marginTop: "60px",
                  padding: "0 40px",
                }
              : {
                  width: "50%",
                  marginTop: "-15px",
                }
          }
        >
          <Typography
            sx={{ fontSize: "16px", fontFamily: "Poppins", fontWeight: "600" }}
            variant="h6"
          >
            About Us
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              color: "#091156",
              fontFamily: "Poppins",
              margin: "10px 0",
            }}
          >
            We are the best beauty clinic
          </Typography>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </Desc>
          <Span>
            {" "}
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </Span>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "60px",
            }}
          >
            <ThemeProvider theme={theme}>
              <Button
                color="primary"
                sx={{
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "700",
                  fontFamily: "Poppins",
                  letterSpacing: "1.3px",
                }}
                variant="contained"
              >
                Learn More
              </Button>
            </ThemeProvider>
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "40px" }}
            >
              <Images src={PlayBtn} alt="" />
              <Watch>Watch Video</Watch>
            </Box>
          </Box>
        </Box>

        <Box
          sx={
            width <= 700
              ? {
                  width: "100%",
                }
              : {
                  width: "630px",
                  height: "500px",
                  borderRadius: "50px",
                  marginTop: "22px",
                  marginLeft: "-0.6%",
                }
          }
        >
          <ImageHome src={HomeBg} alt="" />
        </Box>
      </Box>
    </>
  );
};

export default About;
