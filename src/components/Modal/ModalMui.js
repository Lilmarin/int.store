"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import CloseIcon from "@mui/icons-material/Close";

export default function ModalMui(props) {
  const handleOpen = () => props.setOpenModal(true);
  const handleClose = () => {
    props.setOpenModal(false);
    if (props.setShowCancelAlert) {
      props.setShowCancelAlert(true);
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            style: { backdropFilter: `blur(${props.blur || "8px"})` },
          },
        }}
      >
        <Fade in={props.openModal} onExited={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow:
                "0px 20px 24px -4px rgba(16, 24, 40, 0.10), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)",
              padding: "15px",
              outline: "none",
              "@media (min-width: 320px)": {
                width: props.WidthMin,
                height: props.HeightMin ? props.HeightMin : "auto",
              },
              "@media (min-width: 768px)": {
                width: props.WidthMax,
                height: props.HeightMax ? props.HeightMax : "auto",
              },
              borderRadius: "12px",
              "-webkit-backdrop-filter": `blur(${props.blur || "8px"})`,
              "backdrop-filter": `blur(${props.blur || "8px"})`,
            }}
          >
            <div className="flex flex-col justify-end">
              {props.closeButton && (
                <button
                  onClick={handleClose}
                  className="absolute right-0 top-0 mr-[-22px] mt-[-22px] h-11 w-11 rounded-full border bg-gray-0"
                >
                  {/* <CloseIcon className="text-gray-80" /> */}
                </button>
              )}
              {props.view}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
