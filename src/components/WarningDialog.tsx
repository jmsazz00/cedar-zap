import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface WarningDialogProps {
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const WarningDialog: React.FC<WarningDialogProps> = ({
  open,
  onConfirm,
  onClose,
}) => {
  return (
    <Dialog open={open} fullWidth disableEscapeKeyDown>
      <DialogTitle>Unanswered Questions</DialogTitle>
      <DialogContent>
        Some questions are still unanswered... Submit anyway?
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClose}>
          Go Back
        </Button>
        <Button color="secondary" onClick={onConfirm}>
          Submit Anyway
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WarningDialog;
