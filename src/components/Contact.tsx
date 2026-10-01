import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MailIcon, LinkedinIcon, GithubIcon, CopyIcon, CheckIcon } from './Icons';

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    if (contact.email) {
      navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto URI as accessible student fallback
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container" aria-labelledby="contact-heading">
      <div className="section-header">
        <span className="section-tag">Let's Connect</span>
        <h2 id="contact-heading" className="section-title">
          Contact Me
        </h2>
        <p className="section-subtitle">
          Have a question, feedback, or opportunity? Feel free to reach out directly!
        </p>
        <div className="section-divider" aria-hidden="true" />
      </div>

      <div className="contact-layout">
        {/* Contact Information & Channels */}
        <div className="contact-info-panel">
          <h3 className="contact-panel-title">Direct Contact Information</h3>
          <p className="contact-panel-text">
            I am always eager to learn, collaborate on projects, and discuss software development.
          </p>

          <div className="contact-channels">
            {/* Email Card */}
            <div className="contact-item-card">
              <div className="contact-channel-icon" aria-hidden="true">
                <MailIcon size={22} />
              </div>
              <div className="contact-channel-details">
                <span className="channel-label">Email</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="channel-value"
                >
                  {contact.email}
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                title="Copy email address"
              >
                {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn Card */}
            {contact.linkedin && (
              <div className="contact-item-card">
                <div className="contact-channel-icon" aria-hidden="true">
                  <LinkedinIcon size={22} />
                </div>
                <div className="contact-channel-details">
                  <span className="channel-label">LinkedIn</span>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    karthik-k-s-729023395
                  </a>
                </div>
              </div>
            )}

            {/* GitHub Card */}
            <div className="contact-item-card">
              <div className="contact-channel-icon" aria-hidden="true">
                <GithubIcon size={22} />
              </div>
              <div className="contact-channel-details">
                <span className="channel-label">GitHub</span>
                {contact.github.includes('your-username') ? (
                  <span className="channel-placeholder">
                    {contact.github} <em>(Update in portfolioData.ts)</em>
                  </span>
                ) : (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    {contact.github}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Contact Message Form */}
        <div className="contact-form-panel">
          <h3 className="contact-panel-title">Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name *</label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="e.g. Alex Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email *</label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="e.g. alex@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                placeholder="e.g. Inquiring about AppliTrack / Project Collaboration"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              {formSent ? 'Opening Email Client...' : 'Send Message'}
            </button>

            {formSent && (
              <p className="form-success-note">
                <CheckIcon size={16} /> Opening your default email client with your message prepared.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
