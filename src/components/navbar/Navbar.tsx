import Image from "../../images/animationheader.png";
import useSize from "../../hooks/useSize";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import ImageNavbar from "../../images/slidebg.jpg";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Button, ThemeProvider, Typography, createTheme } from "@mui/material";

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

const NavbarBox = styled("div")({
  display: "flex",
  position: "relative",
  alignItems: "center",
});

const MainLogo = styled("div")({
  position: "relative",
});

const One = styled("div")({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: "#ff64ae",
});
const Two = styled("div")({
  width: "13px",
  height: "13px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  position: "absolute",
  top: "14px",
  left: "10px",
});
const Three = styled("div")({
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  position: "absolute",
  top: "29px",
  left: "22px",
});
const Four = styled("div")({
  width: "40px",
  height: "11px",
  borderRadius: "50px",
  backgroundColor: "#091156",
  position: "absolute",
  top: "28px",
  left: "40px",
});

const Title = styled("p")({
  marginLeft: "30px",
  fontSize: "24px",
  fontWeight: "bold",
  letterSpacing: "3.1px",
  color: "#091156",
});

const NavTablet = styled("ul")({
  display: "flex",
  alignItems: "center",
});

const NavItem = styled("li")({
  listStyle: "none",
  margin: "0 28px",
  fontWeight: "400",
  fontFamily: "Poppins",
  color: "#8B8B8B",
  ":first-child": {
    color: "#091156",
    fontWeight: "700",
  },
});

const NavItemMobile = styled("li")({
  listStyle: "none",
  margin: "32px 0",
  fontWeight: "400",
  fontFamily: "Poppins",
  color: "#8B8B8B",
  ":first-child": {
    color: "#091156",
    fontWeight: "700",
  },
});

const Texts = styled("p")({
  fontSize: "16px",
  letterSpacing: "1.7px",
  fontWeight: "500",
  color: "#091156",
  marginTop: "24px",
});

const Images = styled("div")({});
const ImageItem = styled("img")({});

const NavMobile = styled("ul")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "100px",
});

const ContactBtn = styled("button")({
  width: "158px",
  height: "52px",
});

const Navbar = () => {
  const width: number = useSize();
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${ImageNavbar})`,
          width: "100%",
          height: "851px",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={
            width <= 1250
              ? {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  padding: "40px 5%",
                }
              : {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  padding: "40px 8.3% 40px 10.5%",
                }
          }
        >
          <NavbarBox>
            <MainLogo>
              <One></One>
              <Two></Two>
              <Three></Three>
              <Four></Four>
            </MainLogo>
            <Title>Beautice</Title>
          </NavbarBox>

          {width > 1250 ? (
            <nav>
              <NavTablet>
                <NavItem>Home+</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Service</NavItem>
                <NavItem>Gallery</NavItem>
                <NavItem>Blog</NavItem>
                <NavItem>
                  <ContactBtn
                    sx={{
                      fontFamily: "Poppins",
                      letterSpacing: "1px",
                    }}
                  >
                    Contact
                  </ContactBtn>
                </NavItem>
              </NavTablet>
            </nav>
          ) : (
            <Box
              onClick={() => setShow(!show)}
              sx={{ fontSize: "24px", cursor: "pointer" }}
            >
              <FaBars />
            </Box>
          )}

          {width <= 1250 && (
            <Box
              sx={
                show
                  ? {
                      display: "block",
                      position: "fixed",
                      bottom: "0",
                      textAlign: "center",
                      height: "100%",
                      width: "300px",
                      backgroundColor: "white",
                      transition: "all .5s ease-in-out",
                      left: "0",
                      zIndex: "50",
                    }
                  : {
                      display: "block",
                      position: "fixed",
                      bottom: "0",
                      textAlign: "center",
                      height: "100%",
                      width: "300px",
                      backgroundColor: "white",
                      transition: "all .5s ease-in-out",
                      left: "-300px",
                      zIndex: "50",
                    }
              }
            >
              <NavMobile>
                <ul>
                  <NavItemMobile>Home+</NavItemMobile>
                  <NavItemMobile>About</NavItemMobile>
                  <NavItemMobile>Service</NavItemMobile>
                  <NavItemMobile>Gallery</NavItemMobile>
                  <NavItemMobile>Blog</NavItemMobile>
                  <NavItemMobile>
                    <ThemeProvider theme={theme}>
                      <Button
                        color="primary"
                        sx={{
                          borderRadius: "50px",
                          color: "white",
                          fontWeight: "700",
                        }}
                        variant="contained"
                      >
                        Contact
                      </Button>
                    </ThemeProvider>
                  </NavItemMobile>
                </ul>
              </NavMobile>
            </Box>
          )}
        </Box>
        <Box
          sx={
            width <= 800
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "30px auto",
                }
              : width >= 800 && width < 1200
              ? {
                  margin: "32px 6% 32px 6%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }
              : {
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  margin: "32px 12% 32px 13%",
                }
          }
        >
          <Box
            sx={
              width <= 800
                ? { width: "100%", padding: "0 32px" }
                : { width: "50%" }
            }
          >
            <Typography
              variant="h1"
              sx={
                width >= 800
                  ? {
                      fontSize: "48px",
                      fontWeight: "bold",
                      color: "#091156",
                      marginTop: "140px",
                      fontFamily: "Poppins",
                      letterSpacing: "1px",
                      marginBottom: "-10px",
                    }
                  : {
                      fontSize: "48px",
                      fontWeight: "bold",
                      color: "#091156",
                      marginTop: "10px",
                      fontFamily: "Poppins",
                      letterSpacing: "1px",
                      marginBottom: "-10px",
                    }
              }
            >
              Clinic & beauty consultant
            </Typography>
            <Texts>
              It is a long established fact that a reader will be <br />
              by the readable content of a page.
            </Texts>
            <NavItemMobile>
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  sx={{
                    borderRadius: "50px",
                    color: "white",
                    fontWeight: "700",
                    fontFamily: "Poppins",
                    paddingTop: "12px",
                    letterSpacing: "2.2px",
                  }}
                  variant="contained"
                >
                  More Details
                </Button>
              </ThemeProvider>
            </NavItemMobile>
          </Box>

          <Images
            sx={
              width <= 800
                ? {
                    width: "90%",
                    padding: "0 40px",
                    margin: "0 auto",
                  }
                : { width: "50%", marginTop: "90px", marginRight: "8px" }
            }
          >
            <ImageItem src={Image} alt="" />
          </Images>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
