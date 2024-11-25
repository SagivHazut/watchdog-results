import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../style/TestResultsTable.scss";

const TestResultsTable = () => {
  const testResults = [
    {
      code: "RedeemDialog-redeemWithIbtButton-unclickable",
      message: "Redeem with IBT Button Unclickable",
      status: "Failed",
      date: "2024-11-20 14:32:00",
      duration: "15s",
      context:
        "Unable to click on the 'Redeem with IBT' button; it may not be visible or clickable.",
      impact:
        "Users cannot initiate the redeem process using IBT, affecting their ability to redeem rewards.",
      suggestion:
        "Ensure the button is present, visible, and fully interactable in the specified context.",
      screenshotUrl: "/screenshots/redeem-ibt-fail.png",
      videoUrl: "/videos/redeem-ibt-fail.mp4",
    },
    {
      code: "LoginPage-loginButton-disabled",
      message: "Login Button Disabled",
      status: "Passed",
      date: "2024-11-19 10:15:00",
      duration: "5s",
      context:
        "The login button remained disabled after entering valid credentials.",
      impact:
        "Users are unable to log in, causing frustration and preventing application use.",
      suggestion:
        "Ensure the login button is enabled once credentials are valid.",
      screenshotUrl: "/screenshots/login-button-disabled.png",
      videoUrl: "/videos/login-button-disabled.mp4",
    },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleRowClick = (result) => {
    setSelectedResult(result);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedResult(null);
  };

  return (
    <div className='test-results-container'>
      <TableContainer component={Paper} className='table-container'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className='table-header'>Test Name</TableCell>
              <TableCell className='table-header'>Status</TableCell>
              <TableCell className='table-header'>Date</TableCell>
              <TableCell className='table-header'>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testResults.map((result) => (
              <TableRow
                key={result.code}
                onClick={() => handleRowClick(result)}
                className={`table-row ${
                  result.status === "Failed" ? "failed" : ""
                }`}
              >
                <TableCell>{result.message}</TableCell>
                <TableCell>{result.status}</TableCell>
                <TableCell>{result.date}</TableCell>
                <TableCell>{result.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          className: isMobile ? "drawer-mobile" : "drawer-desktop",
        }}
      >
        {selectedResult && (
          <div className='drawer-content'>
            <Typography variant='h6'>Error Details</Typography>
            <Typography variant='body1'>
              <strong>Code:</strong> {selectedResult.code}
            </Typography>
            <Typography variant='body1'>
              <strong>Message:</strong> {selectedResult.message}
            </Typography>
            <Typography variant='body1'>
              <strong>Context:</strong> {selectedResult.context}
            </Typography>
            <Typography variant='body1'>
              <strong>Impact:</strong> {selectedResult.impact}
            </Typography>
            <Typography variant='body1'>
              <strong>Suggestion:</strong> {selectedResult.suggestion}
            </Typography>
            <div className='media-section'>
              <Typography variant='body1'>
                <strong>Screenshot:</strong>
              </Typography>
              <img
                src={selectedResult.screenshotUrl}
                alt='Screenshot'
                className='screenshot'
              />
              <Typography variant='body1'>
                <strong>Video:</strong>
              </Typography>
              <video src={selectedResult.videoUrl} controls className='video' />
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default TestResultsTable;
