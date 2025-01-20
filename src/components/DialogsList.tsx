import PauseDialog from "./PauseDialog";
import ScoreDialog from "./ScoreDialog";
import WarningDialog from "./WarningDialog";

const DialogsList = () => {
  return (
    <>
      <ScoreDialog />
      <WarningDialog />
      <PauseDialog />
    </>
  );
};

export default DialogsList;
