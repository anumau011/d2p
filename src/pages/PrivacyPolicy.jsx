import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const policies = {
  privacy: {
    label: "Privacy Policy",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    sections: [
      {
        number: "01",
        title: "Information We Collect",
        tag: "Data Collection",
        content: null,
        subsections: [
          { title: "Personal Information", body: "When you create an account or place an order, we collect your name, email address, phone number, and account login credentials. This information is used solely to identify users and deliver our services." },
          { title: "Order Information", body: "We collect uploaded documents, print settings (pages, copies, color/B&W), order history, and transaction details. Uploaded files are exclusively used to fulfill your printing orders." },
          { title: "Payment Information", body: "Payments are processed through Razorpay. Drop2Print does not store your card or banking information. All payment data is securely handled by Razorpay under their own privacy policies." },
          { title: "Device Information", body: "We may collect technical information including device type, operating system, app usage logs, and IP address to improve platform performance and security." }
        ]
      },
      {
        number: "02",
        title: "How We Use Your Information",
        tag: "Data Usage",
        content: "Your information is used to process printing orders, send order confirmations, enable printer shops to access documents, process payments, improve service reliability, prevent fraud, and provide customer support. We only use information strictly necessary to operate the platform.",
        subsections: null
      },
      {
        number: "03",
        title: "File Handling & Document Privacy",
        tag: "Document Security",
        content: "Uploaded documents are stored temporarily on secure servers and shared only with your selected printing partner to complete the order. Files are automatically deleted after order completion. Drop2Print does not access or review document contents unless required for security or legal compliance.",
        subsections: null
      },
      {
        number: "04",
        title: "Data Sharing",
        tag: "Third Parties",
        content: null,
        note: "We do not sell or rent personal data to third parties.",
        subsections: [
          { title: "Printing Partners", body: "Documents and order details are shared only with the printing shop you selected to fulfill your print order." },
          { title: "Payment Providers", body: "Payment information is shared with Razorpay solely for transaction processing." },
          { title: "Legal Authorities", body: "Data may be disclosed if required by law, regulation, or valid court order." }
        ]
      },
      {
        number: "05",
        title: "Data Storage & Security",
        tag: "Security",
        content: "We implement industry-standard security measures including secure cloud storage, encrypted communication channels, and strict access controls for printing partners. However, no internet transmission is entirely risk-free.",
        subsections: null
      },
      {
        number: "06",
        title: "User Responsibilities",
        tag: "Your Duties",
        content: "Users are responsible for ensuring uploaded documents comply with copyright laws, do not contain illegal content, and are free from malicious software. Drop2Print reserves the right to suspend accounts that misuse the platform.",
        subsections: null
      },
      {
        number: "07",
        title: "Data Retention",
        tag: "Retention Period",
        content: "We retain data only as long as necessary to provide services, maintain transaction records, and meet legal obligations. Uploaded files are automatically deleted after order completion.",
        subsections: null
      },
      {
        number: "08",
        title: "Children's Privacy",
        tag: "Age Restriction",
        content: "Drop2Print services are strictly not intended for individuals under the age of 13. We do not knowingly collect data from minors.",
        subsections: null
      },
      {
        number: "09",
        title: "Policy Updates",
        tag: "Changes",
        content: "We may update this policy periodically to reflect changes in our practices or applicable law. Updated versions will be posted directly within the application with a revised date.",
        subsections: null
      }
    ]
  },
  terms: {
    label: "Terms & Conditions",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    sections: [
      {
        number: "01",
        title: "Service Description",
        tag: "About Drop2Print",
        content: "Drop2Print enables users to upload documents remotely and place printing orders with nearby printing partners. We connect users who want documents printed with local printing shops that fulfill orders. Drop2Print facilitates orders and payments but does not operate any physical printing services.",
        subsections: null
      },
      {
        number: "02",
        title: "User Accounts",
        tag: "Account Rules",
        content: "Users must provide accurate registration information, maintain the security of their account credentials, and accept full responsibility for all activities conducted through their account. Drop2Print may suspend any account that violates these terms.",
        subsections: null
      },
      {
        number: "03",
        title: "Printing Orders",
        tag: "Order Policy",
        content: "When placing an order, users must upload correct files, select accurate print settings, and verify document content before submission. Once a print job has started, modifications may not be possible. Users bear responsibility for file accuracy.",
        subsections: null
      },
      {
        number: "04",
        title: "Payments",
        tag: "Billing",
        content: "All payments are processed securely through Razorpay. A small platform fee may be applied for using Drop2Print services. Payment confirmation is provided after every successful transaction.",
        subsections: null
      },
      {
        number: "05",
        title: "Refund Policy",
        tag: "Refunds",
        content: null,
        subsections: [
          { title: "Eligible Situations", body: "Refunds may be issued for failed order processing, printing errors caused by the platform, or technical issues that prevented order completion." },
          { title: "Review Process", body: "All refund requests are reviewed by Drop2Print. Eligibility is determined on a case-by-case basis after a thorough investigation." }
        ]
      },
      {
        number: "06",
        title: "User Content",
        tag: "Your Files",
        content: "Users retain full ownership of uploaded documents. By uploading files, users grant Drop2Print a limited, non-exclusive right to process and transmit those files to printing partners solely for order fulfillment.",
        subsections: null
      },
      {
        number: "07",
        title: "Prohibited Activities",
        tag: "Restrictions",
        content: "Users must not upload illegal material, copyright-infringing content, offensive or harmful documents, or any malware or malicious software. Violations will result in immediate and permanent account suspension.",
        subsections: null
      },
      {
        number: "08",
        title: "Limitation of Liability",
        tag: "Legal Limits",
        content: "Drop2Print is not liable for the content of uploaded documents, printing errors from incorrect file uploads, delays caused by printing partners, or any loss arising from platform misuse.",
        subsections: null
      },
      {
        number: "09",
        title: "Termination",
        tag: "Account Suspension",
        content: "Drop2Print reserves the right to suspend or permanently terminate user accounts upon violation of these terms, detection of fraudulent activity, or misuse of the platform in any form.",
        subsections: null
      },
      {
        number: "10",
        title: "Governing Law",
        tag: "Jurisdiction",
        content: "These terms are governed exclusively by the laws of India. Any disputes arising from the use of Drop2Print shall be subject to the jurisdiction of courts located in India.",
        subsections: null
      },
      {
        number: "11",
        title: "Modifications",
        tag: "Updates",
        content: "Drop2Print may modify these Terms at any time without prior notice. Continued use of the platform after any changes implies your acceptance of the updated terms.",
        subsections: null
      }
    ]
  }
};

const MoonIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export default function PrivacyPolicy() {
  const [dark, setDark] = useState(true);
  const [tab, setTab] = useState("privacy");
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [animPhase, setAnimPhase] = useState("in"); // "in" | "out"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = (i) => setOpen(open === i ? null : i);

  const switchTab = (key) => {
    if (key === tab || transitioning) return;
    setTransitioning(true);
    setAnimPhase("out");
    setTimeout(() => {
      setTab(key);
      setOpen(null);
      setAnimPhase("in");
      setTimeout(() => {
        setTransitioning(false);
      }, 350);
    }, 300);
  };

  const d = dark;

  const styles = {
    page: {
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: d ? "#0a0a0f" : "#f5f5f7",
      color: d ? "#e8e8f0" : "#1a1a2e",
      transition: "background 0.4s, color 0.4s",
    },
    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: d
        ? scrolled ? "rgba(10,10,20,0.92)" : "transparent"
        : scrolled ? "rgba(245,245,247,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${d ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}` : "1px solid transparent",
      transition: "all 0.4s",
      padding: "0 clamp(16px, 5vw, 80px)",
    },
    navInner: {
      maxWidth: 1100,
      margin: "0 auto",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    logoMark: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: "-0.5px",
    },
    logoText: {
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: "-0.3px",
      color: d ? "#fff" : "#111",
    },
    themeBtn: {
      width: 38,
      height: 38,
      borderRadius: 10,
      border: `1px solid ${d ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
      background: d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
      color: d ? "#a0a0c0" : "#555",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s",
    },
    hero: {
      padding: "40px clamp(16px, 5vw, 80px) 32px",
      maxWidth: 1100,
      margin: "0 auto",
    },
    heroTitle: {
      fontSize: "clamp(22px, 4vw, 32px)",
      fontWeight: 700,
      letterSpacing: "-0.5px",
      lineHeight: 1.2,
      marginBottom: 8,
      color: d ? "#fff" : "#0f0f1a",
    },
    heroSub: {
      fontSize: 14,
      color: d ? "#6b7280" : "#6b7280",
      maxWidth: 420,
      lineHeight: 1.5,
      marginBottom: 16,
    },
    lastUpdated: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: d ? "#4b5563" : "#999",
    },
    tabContainer: {
      padding: "0 clamp(16px, 5vw, 80px)",
      maxWidth: 1100,
      margin: "0 auto 24px",
    },
    tabBar: {
      display: "inline-flex",
      background: d ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.05)",
      border: `1px solid ${d ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
      borderRadius: 14,
      padding: 4,
      gap: 2,
    },
    content: {
      padding: "0 clamp(16px, 5vw, 80px)",
      maxWidth: 1100,
      margin: "0 auto",
    },
    sectionGrid: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      opacity: animPhase === "in" ? 1 : 0,
      transform: animPhase === "in" ? "translateY(0)" : "translateY(18px)",
      transition: animPhase === "in"
        ? "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
        : "opacity 0.25s ease-in, transform 0.25s ease-in",
    },
    card: (isOpen) => ({
      borderRadius: 16,
      border: `1px solid ${d
        ? isOpen ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.07)"
        : isOpen ? "rgba(99,102,241,0.25)" : "rgba(0,0,0,0.07)"}`,
      background: d
        ? isOpen ? "rgba(99,102,241,0.05)" : "rgba(255,255,255,0.02)"
        : isOpen ? "rgba(99,102,241,0.03)" : "#fff",
      overflow: "hidden",
      transition: "all 0.25s ease",
      boxShadow: isOpen
        ? d ? "0 4px 40px rgba(99,102,241,0.08)" : "0 4px 24px rgba(99,102,241,0.08)"
        : "none",
    }),
    cardHeader: {
      padding: "14px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      gap: 12,
    },
    cardLeft: {
      display: "flex",
      alignItems: "center",
      gap: 16,
    },
    numBadge: (isOpen) => ({
      minWidth: 36,
      height: 36,
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.5px",
      background: isOpen
        ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
        : d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
      color: isOpen ? "#fff" : d ? "#6b7280" : "#888",
      transition: "all 0.3s",
      flexShrink: 0,
    }),
    cardTitle: {
      fontSize: 15,
      fontWeight: 600,
      color: d ? "#e8e8f0" : "#1a1a2e",
      letterSpacing: "-0.2px",
    },
    tagPill: {
      padding: "3px 10px",
      borderRadius: 100,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.3px",
      background: d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
      color: d ? "#6b7280" : "#888",
      display: "inline-block",
      marginTop: 3,
    },
    chevronWrap: {
      color: d ? "#4b5563" : "#aaa",
      flexShrink: 0,
    },
    cardBody: {
      padding: "0 24px 24px 76px",
    },
    bodyText: {
      fontSize: 14.5,
      lineHeight: 1.75,
      color: d ? "#9ca3af" : "#555",
    },
    subSection: {
      marginTop: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    subItem: {
      padding: "14px 18px",
      borderRadius: 12,
      background: d ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
      border: `1px solid ${d ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`,
    },
    subTitle: {
      fontSize: 13,
      fontWeight: 700,
      color: "#818cf8",
      marginBottom: 6,
      display: "flex",
      alignItems: "center",
      gap: 6,
    },
    subDot: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#6366f1",
      flexShrink: 0,
    },
    subBody: {
      fontSize: 13.5,
      lineHeight: 1.65,
      color: d ? "#9ca3af" : "#666",
    },
    noteBanner: {
      marginTop: 14,
      padding: "10px 16px",
      borderRadius: 10,
      background: d ? "rgba(245,158,11,0.08)" : "rgba(245,158,11,0.07)",
      border: "1px solid rgba(245,158,11,0.2)",
      fontSize: 13,
      color: d ? "#fbbf24" : "#92400e",
      display: "flex",
      gap: 8,
      alignItems: "flex-start",
    },
    divider: {
      height: 1,
      background: d ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)",
      margin: "32px 0",
    },
    contactSection: {
      padding: "0 clamp(16px, 5vw, 80px)",
      maxWidth: 1100,
      margin: "0 auto 40px",
    },
    contactCard: {
      borderRadius: 14,
      padding: "24px 28px",
      background: d ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
      border: `1px solid ${d ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
    },
    contactTitle: {
      fontSize: 16,
      fontWeight: 600,
      color: d ? "#e8e8f0" : "#111",
      marginBottom: 4,
    },
    contactSub: {
      fontSize: 13,
      color: d ? "#6b7280" : "#888",
      maxWidth: 380,
      lineHeight: 1.5,
    },
    contactBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 16px",
      borderRadius: 8,
      background: d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
      border: `1px solid ${d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      color: d ? "#a5b4fc" : "#6366f1",
      fontWeight: 600,
      fontSize: 13,
      textDecoration: "none",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "all 0.2s",
    },
    footer: {
      borderTop: `1px solid ${d ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)"}`,
      padding: "24px clamp(16px, 5vw, 80px)",
      maxWidth: 1100,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
    },
    footerText: {
      fontSize: 13,
      color: d ? "#374151" : "#bbb",
    },
  };

  const currentPolicy = policies[tab];

  return (
    <div style={styles.page}>
      <Helmet>
        <title>Drop2Print – Privacy Policy & Terms</title>
        <meta name="description" content="Read Drop2Print's Privacy Policy and Terms & Conditions. Learn how we collect, use, and protect your data when using our remote printing service." />
        <meta name="keywords" content="Drop2Print, privacy policy, terms and conditions, print documents online, remote printing India" />
        <meta name="author" content="Drop2Print" />
        <meta property="og:title" content="Drop2Print – Privacy Policy & Terms" />
        <meta property="og:description" content="Learn how Drop2Print handles your data and the terms of using our printing service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.drop2print.com/policy" />
        <meta property="og:image" content="https://www.drop2print.com/og-image.png" />
        <link rel="canonical" href="https://www.drop2print.com/policy" />
      </Helmet>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <div style={styles.logoMark}>D2P</div>
            <span style={styles.logoText}>Drop2Print</span>
          </div>
          <button style={styles.themeBtn} onClick={() => setDark(!d)}>
            {d ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Privacy & Terms</h1>
        <p style={styles.heroSub}>
          How Drop2Print handles your data and the rules governing our services.
        </p>
        <div style={styles.lastUpdated}>
          Updated March 1, 2026
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabContainer}>
        <div style={styles.tabBar}>
          {Object.entries(policies).map(([key, val]) => {
            const active = tab === key;
            return (
              <button
                key={key}
                onClick={() => switchTab(key)}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "9px 18px",
                  borderRadius: 10,
                  border: "none",
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  background: active
                    ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                    : "transparent",
                  color: active ? "#fff" : d ? "#6b7280" : "#888",
                  boxShadow: active ? "0 2px 12px rgba(99,102,241,0.4)" : "none",
                  letterSpacing: "-0.2px",
                }}
              >
                {val.icon}
                {val.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sections */}
      <div style={styles.content}>
        <div style={styles.sectionGrid}>
          {currentPolicy.sections.map((sec, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={styles.card(isOpen)}>
                <div style={styles.cardHeader} onClick={() => toggle(i)}>
                  <div style={styles.cardLeft}>
                    <div style={styles.numBadge(isOpen)}>{sec.number}</div>
                    <div>
                      <div style={styles.cardTitle}>{sec.title}</div>
                      <span style={styles.tagPill}>{sec.tag}</span>
                    </div>
                  </div>
                  <div style={styles.chevronWrap}>
                    <ChevronIcon open={isOpen} />
                  </div>
                </div>

                {isOpen && (
                  <div style={styles.cardBody}>
                    {sec.content && <p style={styles.bodyText}>{sec.content}</p>}
                    {sec.subsections && (
                      <div style={styles.subSection}>
                        {sec.subsections.map((sub, si) => (
                          <div key={si} style={styles.subItem}>
                            <div style={styles.subTitle}>
                              <div style={styles.subDot} />
                              {sub.title}
                            </div>
                            <p style={styles.subBody}>{sub.body}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {sec.note && (
                      <div style={styles.noteBanner}>
                        <span>⚠️</span>
                        <span>{sec.note}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={styles.divider} />
      </div>

      {/* Contact */}
      <div style={styles.contactSection}>
        <div style={styles.contactCard}>
          <div>
            <p style={styles.contactTitle}>Have Questions?</p>
            <p style={styles.contactSub}>
              Our team is here to help. If you have any concerns about our policies, privacy practices, or legal terms, reach out to us directly.
            </p>
          </div>
          <a href="mailto:support@drop2print.com" style={styles.contactBtn}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            support@drop2print.com
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "0 clamp(16px, 5vw, 80px)" }}>
        <div style={styles.footer}>
          <span style={styles.footerText}>© 2026 Drop2Print. All rights reserved.</span>
          <span style={styles.footerText}>Governed by the laws of India.</span>
        </div>
      </div>
    </div>
  );
}
