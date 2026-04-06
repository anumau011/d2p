import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.drop2print.com";
const TIMER_SECONDS = 5;

// ── tiny primitives ──────────────────────────────────────────────────────────

function StepBar({ step }) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: "2rem" }}>
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          style={{
            flex: 1,
            height: 3,
            borderRadius: 2,
            background:
              n < step
                ? "#4caf82"
                : n === step
                ? "#6b7cff"
                : "rgba(255,255,255,0.08)",
            transition: "background 0.4s",
          }}
        />
      ))}
    </div>
  );
}

function Badge({ children }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "rgba(224,82,82,0.12)",
        border: "1px solid rgba(224,82,82,0.25)",
        color: "#e05252",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "5px 12px",
        borderRadius: 99,
        marginBottom: "1.25rem",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          background: "#e05252",
          borderRadius: "50%",
          animation: "pulse 1.6s infinite",
        }}
      />
      {children}
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div
      style={{
        background: "#13131e",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: "1.75rem",
        marginBottom: "1rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: "0.7rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "#8888a8",
        marginBottom: "1rem",
      }}
    >
      {children}
      <span
        style={{
          flex: 1,
          height: 1,
          background: "rgba(255,255,255,0.08)",
        }}
      />
    </div>
  );
}

function FieldGroup({ label, children }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label
        style={{
          display: "block",
          fontSize: "0.75rem",
          fontWeight: 500,
          color: "#8888a8",
          marginBottom: "0.45rem",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: "0.75rem 1rem",
  color: "#e8e8f0",
  fontFamily: "inherit",
  fontSize: "0.875rem",
  outline: "none",
  boxSizing: "border-box",
};

function Btn({ children, variant = "primary", onClick, disabled, type = "button", style }) {
  const base = {
    width: "100%",
    padding: "0.8rem",
    border: "none",
    borderRadius: 10,
    fontFamily: "inherit",
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    opacity: disabled ? 0.45 : 1,
    transition: "all 0.2s",
    ...style,
  };

  const variants = {
    primary: { background: "#6b7cff", color: "#fff" },
    danger: { background: "#e05252", color: "#fff" },
    ghost: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.13)",
      color: "#e8e8f0",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ ...base, ...variants[variant] }}
    >
      {children}
    </button>
  );
}

function ErrorBox({ message }) {
  if (!message) return null;
  return (
    <div
      style={{
        background: "rgba(224,82,82,0.08)",
        border: "1px solid rgba(224,82,82,0.25)",
        borderRadius: 10,
        padding: "0.75rem 1rem",
        color: "#e08888",
        fontSize: "0.8125rem",
        marginTop: "0.75rem",
      }}
    >
      {message}
    </div>
  );
}

function Spinner() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 14,
        height: 14,
        border: "2px solid rgba(255,255,255,0.3)",
        borderTopColor: "#fff",
        borderRadius: "50%",
        animation: "spin 0.6s linear infinite",
      }}
    />
  );
}

// ── step views ────────────────────────────────────────────────────────────────

function LoginView({ onSuccess }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobile || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: mobile, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Login failed. Please check your details.");
      onSuccess(data);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <SectionLabel>Step 1 — Verify it's you</SectionLabel>

      <form onSubmit={handleSubmit}>
        <FieldGroup label="Mobile number">
          <input
            style={inputStyle}
            type="tel"
            placeholder="e.g. 9876543210"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </FieldGroup>

        <FieldGroup label="Password">
          <div style={{ position: "relative" }}>
            <input
              style={inputStyle}
              type={showPassword ? "text" : "password"}
              placeholder="Your account password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "#8888a8",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="16px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<path fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M1,32c0,0,11,15,31,15s31-15,31-15S52,17,32,17
	S1,32,1,32z"/>
<circle fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="7"/>
<line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="9" y1="55" x2="55" y2="9"/>
</svg>
              ) : (
<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-eye">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
              )}
            </button>
          </div>
        </FieldGroup>

        <ErrorBox message={error} />

        <div style={{ marginTop: "1.25rem" }}>
          <Btn type="submit" disabled={loading}>
            {loading ? <><Spinner /> Verifying...</> : "Confirm my identity"}
          </Btn>
        </div>
      </form>

      <p
        style={{
          fontSize: "0.75rem",
          color: "#555568",
          textAlign: "center",
          marginTop: "0.75rem",
        }}
      >
        Changed your mind? Simply close this page — nothing will happen.
      </p>
    </Card>
  );
}

const WARNINGS = [
  "Your all data will be permanently deleted and cannot be recovered."
];

function ConfirmView({ auth, onDeleted }) {
  const [phase, setPhase] = useState("idle"); // idle | counting | ready | cancelled
  const [countdown, setCountdown] = useState(TIMER_SECONDS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (phase !== "counting") return;
    if (countdown <= 0) { setPhase("ready"); return; }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdown]);

  const startTimer = () => {
    setError("");
    setCountdown(TIMER_SECONDS);
    setPhase("counting");
  };

  const cancelTimer = () => {
    setPhase("cancelled");
  };

  const handleDelete = async () => {
    if (!auth?.token) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE_URL}/auth/delete-account`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${auth.token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Delete failed. Please try again.");
      onDeleted(data?.message);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      {/* confirmed user card */}
      <div
        style={{
          background: "rgba(76,175,130,0.1)",
          border: "1px solid rgba(76,175,130,0.2)",
          borderRadius: 12,
          padding: "1rem 1.25rem",
          marginBottom: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#4caf82",
            marginBottom: "0.75rem",
          }}
        >
          ✓ Identity confirmed
        </p>
        {[
          ["Name", auth.user?.name],
          ["Mobile", auth.user?.mobileNumber],
        ].map(([key, val]) => (
          <div key={key} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "0.78rem", color: "#8888a8", minWidth: 60 }}>{key}</span>
            <span
              style={{
                fontSize: "0.85rem",
                color: "#e8e8f0",
                fontFamily: "monospace",
                fontWeight: 500,
              }}
            >
              {val || "—"}
            </span>
          </div>
        ))}
      </div>

      {/* danger card */}
      <div
        style={{
          background: "rgba(224,82,82,0.07)",
          border: "1px solid rgba(224,82,82,0.25)",
          borderRadius: 12,
          padding: "1.25rem",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#e05252",
            marginBottom: "0.75rem",
          }}
        >
          ⚠ What happens when you delete
        </p>

        <ul style={{ listStyle: "none", marginBottom: "1.25rem" }}>
          {WARNINGS.map((w) => (
            <li
              key={w}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
                fontSize: "0.8125rem",
                color: "#c8a0a0",
                padding: "0.3rem 0",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  background: "#e05252",
                  borderRadius: "50%",
                  flexShrink: 0,
                  marginTop: "0.45rem",
                }}
              />
              {w}
            </li>
          ))}
        </ul>

        {/* phase: idle */}
        {phase === "idle" && (
          <Btn variant="danger" onClick={startTimer}>
            Yes, I want to delete my account
          </Btn>
        )}

        {/* phase: counting */}
        {phase === "counting" && (
          <>
            <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "2.2rem",
                  fontWeight: 600,
                  color: "#e05252",
                  fontFamily: "monospace",
                  lineHeight: 1,
                }}
              >
                {countdown}
              </span>
              <span style={{ fontSize: "0.75rem", color: "#8888a8", marginTop: "0.3rem" }}>
                seconds — read carefully before continuing
              </span>
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <Btn variant="danger" disabled>
                Delete my account
              </Btn>
              <Btn variant="ghost" onClick={cancelTimer}>
                Cancel
              </Btn>
            </div>
          </>
        )}

        {/* phase: ready */}
        {phase === "ready" && (
          <>
            <p style={{ fontSize: "0.8125rem", color: "#8888a8", marginBottom: "0.75rem" }}>
              Delete is now unlocked. This action cannot be reversed.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <Btn variant="danger" onClick={handleDelete} disabled={loading}>
                {loading ? <><Spinner /> Deleting...</> : "Delete my account"}
              </Btn>
              <Btn variant="ghost" onClick={cancelTimer}>
                Cancel
              </Btn>
            </div>
          </>
        )}

        {/* phase: cancelled — show delete button again, no restart message */}
        {phase === "cancelled" && (
          <Btn variant="danger" onClick={startTimer}>
            Yes, I want to delete my account
          </Btn>
        )}

        <ErrorBox message={error} />
      </div>
    </>
  );
}

function SuccessView({ message }) {
  return (
    <Card style={{ textAlign: "center", padding: "2.5rem 1.75rem" }}>
      <div
        style={{
          width: 60,
          height: 60,
          background: "rgba(76,175,130,0.15)",
          border: "1px solid rgba(76,175,130,0.3)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.25rem",
          fontSize: "1.5rem",
          color: "#4caf82",
        }}
      >
        ✓
      </div>
      <p
        style={{
          fontSize: "1.2rem",
          fontWeight: 600,
          color: "#fff",
          marginBottom: "0.5rem",
        }}
      >
        Account deleted
      </p>
      <p
        style={{
          fontSize: "0.8125rem",
          color: "#8888a8",
          lineHeight: 1.6,
          marginBottom: "1.5rem",
        }}
      >
        {message ||
          "Your account and all associated data have been permanently removed from Drop2Print. We're sorry to see you go."}
      </p>
      <p style={{ fontSize: "0.75rem", color: "#555568" }}>
        You may close this page safely.
      </p>
    </Card>
  );
}

// ── main page ─────────────────────────────────────────────────────────────────

export default function DeleteAccount() {
  const [step, setStep] = useState(1);
  const [auth, setAuth] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  const handleLoginSuccess = (data) => {
    setAuth(data);
    setStep(2);
  };

  const handleDeleted = (msg) => {
    setSuccessMsg(msg);
    setStep(3);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d14",
        color: "#e8e8f0",
        fontFamily:
          "'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>Delete Account — Drop2Print</title>
        <meta
          name="description"
          content="Permanently delete your Drop2Print account. This action cannot be undone."
        />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap');
          @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.8)} }
          @keyframes spin  { to { transform: rotate(360deg); } }
          input:focus { border-color: rgba(107,124,255,0.5) !important; }
        `}</style>
      </Helmet>

      <Navbar />

      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "5rem 1rem 3rem",
        }}
      >
        {/* decorative blobs */}
        <div
          style={{
            position: "fixed",
            top: -120,
            left: -120,
            width: 380,
            height: 380,
            background: "rgba(224,82,82,0.07)",
            borderRadius: "50%",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "fixed",
            bottom: -120,
            right: -120,
            width: 380,
            height: 380,
            background: "rgba(107,124,255,0.07)",
            borderRadius: "50%",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ width: "100%", maxWidth: 520, position: "relative" }}>
          <Badge>Account Management</Badge>

          <h1
            style={{
              fontSize: "clamp(1.6rem, 4vw, 1.9rem)",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "0.5rem",
            }}
          >
            Delete your account
          </h1>
          <p
            style={{
              color: "#8888a8",
              fontSize: "0.875rem",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            This is permanent and cannot be undone. Please read everything
            carefully before you proceed.
          </p>

          <StepBar step={step} />

          {step === 1 && <LoginView onSuccess={handleLoginSuccess} />}
          {step === 2 && <ConfirmView auth={auth} onDeleted={handleDeleted} />}
          {step === 3 && <SuccessView message={successMsg} />}
        </div>
      </main>

      <Footer />
    </div>
  );
}