import { Button } from "@mui/material"; // ==================================================

// ==================================================

export const BoxButton = ({ children, ...props }) => {
  return (
    <Button
      color="dark"
      variant="contained"
      sx={{
        color: "#fff",
        backgroundColor: "secondary.main",
        borderRadius: "8px",
        ":hover": {
          backgroundColor: "secondary.dark",
          color: "#fff",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export const TextButton = ({ children, ...props }) => {
  return (
    <Button
      variant="text"
      sx={{
        color: "secondary.main",
        ":hover": {
          color: "secondary.dark",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export const OutlinedButton = ({ children, ...props }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "secondary.main",
        ":hover": {
          color: "secondary.dark",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
