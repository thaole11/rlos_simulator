import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface KeyOperatorHandlerProps {
  selectedSubsystem?: number;
  setSelectedSubsystem?: React.Dispatch<React.SetStateAction<number>>;
  subsystems?: string[];
}

const KeyOperatorHandler: React.FC<KeyOperatorHandlerProps> = ({
  selectedSubsystem,
  setSelectedSubsystem,
  subsystems,
}) => {
  const navigate = useNavigate();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") {
      setSelectedSubsystem?.(prev =>
        prev > 0 ? prev - 1 : subsystems ? subsystems.length - 1 : 0
      );
    } else if (event.key === "ArrowDown") {
      setSelectedSubsystem?.(prev =>
        prev < (subsystems ? subsystems.length - 1 : 0) ? prev + 1 : 0
      );
    } else if (event.key === "Enter") {
        console.log(`Selected: ${subsystems? subsystems[selectedSubsystem as number] : ""}`);
      navigate(`/customer-form`);
    } else if (event.key === "F3") {
      console.log("Exit");
      navigate("/");
    } else if (event.key === "F11") {
      console.log("Change password");
      navigate("/change-password");
    } else if (event.key === "F12") {
      console.log("Cancel");
      navigate("/");
    } else if (event.key === "F13") {
      console.log("Function requests");
      navigate("/function-requests");
    } else if (event.key === "F14") {
      console.log("Submitted jobs");
      navigate("/submitted-jobs");
    } else if (event.key === "F18") {
      console.log("Spool output");
      navigate("/spool-output");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedSubsystem]);

  return null;
};

export default KeyOperatorHandler;
