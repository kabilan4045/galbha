import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function DisclaimerModal({ open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    dialogRef.current?.focus();
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-dialog__header">
          <h3 id="disclaimer-title">Disclaimer</h3>
          <button type="button" className="modal-dialog__close" onClick={onClose} aria-label="Close disclaimer">
            <X size={20} />
          </button>
        </div>

        <div className="modal-dialog__body">
          <p>
            The information provided on this website is intended for general informational
            purposes only and is not a substitute for professional medical advice, diagnosis
            or treatment.
          </p>
          <p>
            Medicines should be used only as directed by a qualified healthcare professional
            and in accordance with applicable prescribing information.
          </p>
          <p>
            Product availability, composition, indications, manufacturing information and
            regulatory status may vary and should be verified from the applicable product
            documentation.
          </p>
          <p>
            Ghalbha Remedies does not encourage self-medication and recommends that patients
            consult an appropriately qualified healthcare professional for medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}
