import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const ENQUIRY_TYPES = [
  'Product Enquiry',
  'Distribution Opportunity',
  'Business Proposal',
  'General Enquiry',
];

const EMPTY_FORM = {
  name: '',
  company: '',
  mobile: '',
  email: '',
  cityState: '',
  enquiryType: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_PATTERN = /^[+]?[0-9\s-]{7,15}$/;

export default function ContactForm({ prefill }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!prefill?.type) return;
    setForm((prev) => ({ ...prev, enquiryType: prefill.type }));
    // prefill.key is bumped every time prefill.type is set, so it alone is the right trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill?.key]);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.mobile.trim()) {
      nextErrors.mobile = 'Please enter your mobile number.';
    } else if (!MOBILE_PATTERN.test(form.mobile.trim())) {
      nextErrors.mobile = 'Please enter a valid mobile number.';
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // TODO: wire to a real backend/email service.
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="contact-form contact-form--success" role="status">
        <CheckCircle2 size={40} className="contact-form__success-icon" />
        <h3>Enquiry Received</h3>
        <p>
          Thank you for reaching out to Ghalbha Remedies. Our team will review your enquiry and
          get back to you shortly.
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setForm(EMPTY_FORM);
            setSubmitted(false);
          }}
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3>Send Us an Enquiry</h3>

      <div className="form-field">
        <label htmlFor="cf-name">Name *</label>
        <input
          id="cf-name"
          type="text"
          value={form.name}
          onChange={handleChange('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'cf-name-error' : undefined}
        />
        {errors.name && (
          <span className="form-field__error" id="cf-name-error">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="cf-company">Company / Organization</label>
        <input id="cf-company" type="text" value={form.company} onChange={handleChange('company')} />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-mobile">Mobile Number *</label>
          <input
            id="cf-mobile"
            type="tel"
            value={form.mobile}
            onChange={handleChange('mobile')}
            aria-invalid={Boolean(errors.mobile)}
            aria-describedby={errors.mobile ? 'cf-mobile-error' : undefined}
          />
          {errors.mobile && (
            <span className="form-field__error" id="cf-mobile-error">
              {errors.mobile}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="cf-email">Email Address *</label>
          <input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
          />
          {errors.email && (
            <span className="form-field__error" id="cf-email-error">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-city">City / State</label>
          <input id="cf-city" type="text" value={form.cityState} onChange={handleChange('cityState')} />
        </div>

        <div className="form-field">
          <label htmlFor="cf-enquiry-type">Enquiry Type</label>
          <select id="cf-enquiry-type" value={form.enquiryType} onChange={handleChange('enquiryType')}>
            <option value="">Select an option</option>
            {ENQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="cf-message">Message *</label>
        <textarea
          id="cf-message"
          rows={5}
          value={form.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
        />
        {errors.message && (
          <span className="form-field__error" id="cf-message-error">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Enquiry
      </button>
    </form>
  );
}
