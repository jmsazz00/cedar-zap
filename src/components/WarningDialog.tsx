import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useQuizStateStore } from "../store/QuizStateStore";

const WarningDialog = () => {
  const warningDialogOpen = useQuizStateStore(
    (state) => state.warningDialogOpen
  );
  const handleSubmit = useQuizStateStore((state) => state.handleSubmit);
  const closeWarningDialog = useQuizStateStore(
    (state) => state.closeWarningDialog
  );

  return (
    <Dialog open={warningDialogOpen} fullWidth disableEscapeKeyDown>
      <DialogTitle>Unanswered Questions</DialogTitle>
      <DialogContent>
        Some questions are still unanswered... Submit anyway?
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={closeWarningDialog}>
          Go Back
        </Button>
        <Button color="secondary" onClick={() => handleSubmit(false)}>
          Submit Anyway
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WarningDialog;
