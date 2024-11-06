import { toast } from "react-toastify";

export const ShowToastMessage = (flag, message) => {
  flag ? toast.success(message) : toast.error(message);
};
