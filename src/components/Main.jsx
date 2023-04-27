import { Box, Typography, Button } from "@mui/material";
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
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            height: "16rem",
            width: "15rem",
            justifyContent: "center",
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
              padding: "8px",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ display: "flex", justifyContent: "center" }}>
              Your Result
            </Typography>

            <Box
              sx={{
                borderRadius: "50%",
                background: "rgba(17, 37, 212,1)",
                border: "1px solid black",
                padding: "20px",
              }}
            >
              <Typography sx={{ display: "flex", justifyContent: "center" }}>
                76
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "center" }}>
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
              <Typography>Great</Typography>
              <Typography textAlign={"center"}>
                You scored more than 65% of the people who have taken the test
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "15rem" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "8px",
            }}
          >
            <Typography sx={{ display: "flex", justifyContent: "center" }}>
              Summary
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box> icon Reaction</Box>
                <Box>80 / 100</Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box> icon Reaction</Box>
                <Box>80 / 100</Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box> icon Reaction</Box>
                <Box>80 / 100</Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box> icon Reaction</Box>
                <Box>80 / 100</Box>
              </Box>
            </Box>
            <Box>
              <Button
                sx={{
                  backgroundColor: "hsl(234, 85%, 45%)",
                  width: "100%",
                  borderRadius: "20px",
                }}
              >
                {" "}
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
