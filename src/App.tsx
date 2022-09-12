import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import { Setting } from "./interface";
import { Grid, styled, Switch } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ pl: "20px", fontSize: "1rem", color: "skyblue" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function App() {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange =
    (categoryId: number) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {
      console.log("clicked on category: " + categoryId);
      if (categoryId === expanded) setExpanded(0);
      else {
        setExpanded(categoryId);
      }
    };

  const category = data;
  return (
    <div className="App">
      <Grid container spacing={2}>
        {category.notifications.categories.map((c) => (
          <Grid item xs={12} key={c.categoryId} sx={{}}>
            <Accordion
              expanded={expanded === c.categoryId}
              key={c.categoryId}
              onChange={handleChange(c.categoryId)}
              // sx={{ border: "1px solid", borderRadius: "4px" }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    width: "500px",
                  }}
                >
                  <Grid item xs={10}>
                    <Typography onClick={(e) => handleChange(c.categoryId)}>
                      {c.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Switch />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                sx={{ border: "1px solid", borderRadius: "4px" }}
              >
                {c.subcategories.map((sc) => (
                  <Grid container key={sc.subcategoryId}>
                    <Grid item xs={10}>
                      <Typography align="left"> {sc.subcategory}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Switch />
                    </Grid>
                  </Grid>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
