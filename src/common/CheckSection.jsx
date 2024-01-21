import { CheckCircle } from "@mui/icons-material";

const CheckSection = ({title}) => {
  return (
    <div className="flex gap-x-1 items-center w-full">
      <CheckCircle color="success" fontSize="small" />
      <span className="text-sm">{title}</span>
    </div>
  );
};

export default CheckSection;
