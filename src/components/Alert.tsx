import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface AlertProps {
  position: SweetAlertPosition; // Change type to SweetAlertPosition
  title: string;
  text: string;
  icon: SweetAlertIcon;
  showConfirmButton: boolean;
  confirmButtonText: string;
}

function Alert({
  position, icon, title, text, showConfirmButton, confirmButtonText,
}: AlertProps) {
  const navigate = useNavigate();

  Swal.fire({
    position,
    icon,
    title,
    text,
    showConfirmButton,
    confirmButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/');
    }
  }).catch(() => {
    // Handle errors if needed
  });

  return null;
}

export default Alert;
