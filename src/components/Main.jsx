import { Box, Typography, Button } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
const Main = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", boxShadow: 2, borderRadius: "12px" }}>
        <Box
          sx={{
            display: "flex",
            height: "16rem",
            width: "15rem",
            justifyContent: "center",
            borderRadius: "12px",
            background:
              "linear-gradient(to bottom, rgba(17, 37, 212,0.7) 0%, rgba(17, 37, 212,1) 100%)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              padding: "8px 10px",
              justifyContent: "space-between",
            }}
          >
            <Typography
              fontWeight="bold"
              color="rgb(232, 228, 227)"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Your Result
            </Typography>

            <Box
              sx={{
                borderRadius: "50%",
                background: "rgba(17, 37, 212,1)",
                border: "1px solid black",
                boxShadow: "1",
                padding: "20px 35px",
              }}
            >
              <Typography
                color="white"
                fontSize={"2rem"}
                fontWeight={"600"}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                76
              </Typography>
              <Typography
                fontSize={".8rem"}
                color="rgb(232, 228, 227)"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                of 100
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography fontWeight={"bold"} color="white" fontSize={"1.2rem"}>
                Great
              </Typography>
              <Typography color="#c0b4cc" textAlign={"center"}>
                You scored more than 65% of the people who have taken the test
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "15rem",
            marginLeft: "-0.3rem",
            background: "hsl(0, 0%, 100%)",
            zIndex: "-1",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: " 8px 14px",
            }}
          >
            <Typography
              fontSize={"1rem"}
              fontWeight={"600"}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              Summary
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",

                width: "100%",
                height: "8rem",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid black",
                  padding: "4px 6px",
                  borderRadius: "8px",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  {" "}
                  <ElectricBoltIcon /> Reaction
                </Box>
                <Box>80 / 100</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid black",
                  padding: "4px 6px",
                  borderRadius: "8px",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  {" "}
                  <AcUnitIcon /> Memory
                </Box>
                <Box>92 / 100</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid black",
                  padding: "4px 6px",
                  borderRadius: "8px",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  {" "}
                  <TextsmsRoundedIcon /> Verbal
                </Box>
                <Box>61 / 100</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid black",
                  padding: "4px 6px",
                  borderRadius: "8px",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  {" "}
                  <RemoveRedEyeOutlinedIcon /> Visual
                </Box>
                <Box>72 / 100</Box>
              </Box>
            </Box>
            <Box sx={{ mt: "2.5rem" }}>
              <Button
                sx={{
                  backgroundColor: "hsl(234, 85%, 45%)",
                  width: "100%",
                  borderRadius: "20px",
                }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
