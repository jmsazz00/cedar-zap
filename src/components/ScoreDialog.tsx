import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Button,
} from "@mui/material";

interface ScoreDialogProps {
  open: boolean;
  score: number;
  onClose: () => void;
}

const ScoreDialog = ({ open, score, onClose }: ScoreDialogProps) => (
  <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
    <DialogTitle>Quiz Complete</DialogTitle>
    <DialogContent>
      <Typography variant="h6" align="center" color="textPrimary">
        Your Total Score: {score}
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </DialogContent>
  </Dialog>
);

export default ScoreDialog;
