import { Box, Typography, Button,  useMediaQuery, useTheme,IconButton } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";


const Main = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box
    sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        boxShadow: 2,
        borderRadius: '12px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '16rem',
          width: isMobile ? '100%' : '15rem',
          justifyContent: 'center',
          borderRadius: '12px',
          background:
            'linear-gradient(to bottom, rgba(17, 37, 212,0.7) 0%, rgba(17, 37, 212,1) 100%)',
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
            color="hsl(241, 100%, 89%)"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Your Result
          </Typography>

          <Box
            sx={{
              borderRadius: "50%",
              background: "rgba(17, 37, 212,1)",
              border: "1px solid blue",
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
              color="hsl(241, 100%, 89%)"
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
          width: isMobile ? '100%' : '15rem',
          marginLeft: isMobile ? '0' : '-0.3rem',
          background: 'hsl(0, 0%, 100%)',
          zIndex: '-1',
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
            color="hsl(224, 30%, 27%)"
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            Summary
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              mt: ".6rem",
              width: "100%",
              height: "8rem",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid hsl(0, 100%, 92%)",
                padding: "4px 4px",
                borderRadius: "8px",
                alignItems: "center",
                background: "hsl(0, 100%, 92%)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                {" "}
                <ElectricBoltIcon
                  sx={{ fontSize: ".85rem", color: "hsl(0, 100%, 67%)" }}
                />{" "}
                <Typography
                  color="hsl(0, 100%, 67%)"
                  fontSize={".85rem"}
                  fontWeight={"600"}
                >
                  Reaction
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                {" "}
                <Typography
                  fontSize={"1rem"}
                  fontWeight={"600"}
                  color="hsl(224, 30%, 27%)"
                >
                  80 /
                </Typography>{" "}
                <Typography>100</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid hsl(39, 100%, 85%)",
                padding: "4px 4px",
                borderRadius: "8px",
                alignItems: "center",
                background: "hsl(39, 100%, 85%)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                {" "}
                <AcUnitIcon
                  sx={{ fontSize: ".85rem", color: "hsl(39, 100%, 56%)" }}
                />{" "}
                <Typography
                  color="hsl(39, 100%, 56%)"
                  fontSize={".85rem"}
                  fontWeight={"600"}
                >
                  Memory
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                {" "}
                <Typography
                  fontSize={"1rem"}
                  fontWeight={"600"}
                  color="hsl(224, 30%, 27%)"
                >
                  92 /
                </Typography>{" "}
                <Typography>100</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid hsl(241, 100%, 95%)",
                padding: "4px 4px",
                borderRadius: "8px",
                alignItems: "center",
                background: "hsl(241, 100%, 95%)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                {" "}
                <TextsmsRoundedIcon
                  sx={{ fontSize: ".85rem", color: "hsl(241, 100%, 65%)" }}
                />{" "}
                <Typography
                  color="hsl(241, 100%, 65%)"
                  fontSize={".85rem"}
                  fontWeight={"600"}
                >
                  Verbal
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                {" "}
                <Typography
                  fontSize={"1rem"}
                  fontWeight={"600"}
                  color="hsl(224, 30%, 27%)"
                >
                  61 /
                </Typography>{" "}
                <Typography>100</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid hsl(224, 30%, 92%)",
                padding: "4px 4px",
                borderRadius: "8px",
                alignItems: "center",
                background: "hsl(224, 30%, 92%)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon
                  sx={{ fontSize: ".85rem", color: "hsl(224, 30%, 27%)" }}
                />{" "}
                <Typography
                  color="hsl(224, 30%, 27%)"
                  fontSize={".85rem"}
                  fontWeight={"600"}
                >
                  Visual
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                {" "}
                <Typography
                  fontSize={"1rem"}
                  fontWeight={"600"}
                  color="hsl(224, 30%, 27%)"
                >
                  72 /
                </Typography>{" "}
                <Typography>100</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: "2.5rem" }}>
            <Button
              sx={{
                width: "100%",
                borderRadius: "20px",
                textTransform: "lowercase",
                backgroundColor: "hsl(224, 30%, 22%)",
                color: "white",
                fontSize: ".95rem",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "hsl(224, 30%, 32%)",
                },
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


